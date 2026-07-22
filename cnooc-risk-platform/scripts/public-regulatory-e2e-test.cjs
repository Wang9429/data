#!/usr/bin/env node
/**
 * 公共监管底座 Phase 6 端到端验收（12 条链路）
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function loadAppData() {
  const code = fs.readFileSync(path.join(ROOT, 'js/data.js'), 'utf8');
  const sandbox = { console };
  vm.runInNewContext(code + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  return sandbox.APP_DATA;
}

const D = loadAppData();

function ok(step, cond, msg) {
  return { step, pass: !!cond, msg: cond ? 'OK' : msg };
}

const chains = [
  {
    name: '测试1：集团总览→监管事件中心',
    steps: [
      () => ok('监管事件已生成', (D.regulatoryEvents || []).length > 0),
      () => ok('事件指标 totalCount', (D.regulatoryEventMetrics || {}).totalCount === (D.regulatoryEvents || []).length),
      () => ok('集团总览 summary', !!(D.publicRegulatorySummary || {}).entityCount)
    ]
  },
  {
    name: '测试2：监管事件→法人',
    steps: [
      () => {
        const ev = (D.regulatoryEvents || []).find(e => e.entityId === 'B001');
        return ok('事件关联 B001', ev && D.globalLegalEntities.find(e => e.entityId === ev.entityId));
      }
    ]
  },
  {
    name: '测试3：监管事件→KRI',
    steps: [
      () => {
        const ev = (D.regulatoryEvents || []).find(e => e.kriId === 'kri-capex');
        return ok('事件 kri-capex', ev && D.groupKris.find(k => k.id === ev.kriId));
      }
    ]
  },
  {
    name: '测试4：监管事件→风险事项',
    steps: [
      () => {
        const ev = (D.regulatoryEvents || []).find(e => e.riskMatterId === 'risk-2');
        return ok('事件 risk-2', ev && D.warnings.find(w => w.id === ev.riskMatterId));
      }
    ]
  },
  {
    name: '测试5：监管事件→整改任务',
    steps: [
      () => {
        const ev = (D.regulatoryEvents || []).find(e => e.rectificationTaskId === 'RECT-202601001');
        return ok('事件 RECT-202601001', ev && D.rectificationTasks.find(t => t.taskId === ev.rectificationTaskId));
      }
    ]
  },
  {
    name: '测试6：监管事件→数据治理',
    steps: [
      () => {
        const ev = (D.regulatoryEvents || []).find(e => e.eventType === 'DATA_QUALITY' && e.sourceObjectId === 'DQ002');
        return ok('数据质量事件 DQ002', ev && D.dataQualityIssues.find(q => q.issueId === ev.sourceObjectId));
      }
    ]
  },
  {
    name: '测试7：整改运营→法人',
    steps: [
      () => ok('整改任务含 B001', (D.rectificationTasks || []).some(t => t.entityId === 'B001')),
      () => ok('评价含法人排名', (D.regulatoryEvaluation || {}).entityRankings?.length > 0)
    ]
  },
  {
    name: '测试8：整改运营→风险事项',
    steps: [
      () => {
        const t = D.rectificationTasks.find(x => x.taskId === 'RECT-202601001');
        return ok('整改关联 risk-2', t && D.warnings.find(w => w.id === t.riskMatterId));
      }
    ]
  },
  {
    name: '测试9：法人健康度→数据质量',
    steps: [
      () => {
        const h = (D.regulatoryHealthScores || {}).entities?.find(e => e.objectId === 'B001');
        return ok('B001 健康度', h && h.dimensions && typeof h.dimensions.dataQuality === 'number');
      }
    ]
  },
  {
    name: '测试10：法人健康度→KRI',
    steps: [
      () => {
        const h = (D.regulatoryHealthScores || {}).entities?.find(e => e.objectId === 'B001');
        const ent = D.globalLegalEntities.find(e => e.entityId === 'B001');
        return ok('B001 KRI维度', h && ent && h.dimensions.kriHealth !== undefined);
      }
    ]
  },
  {
    name: '测试11：监管评价→法人',
    steps: [
      () => {
        const r = (D.regulatoryEvaluation || {}).entityRankings?.find(e => e.objectId === 'B001');
        return ok('B001 评价排名', r && D.globalLegalEntities.find(e => e.entityId === r.objectId));
      }
    ]
  },
  {
    name: '测试12：多跳导航→逐层返回',
    steps: [
      () => ok('事件趋势数据', !!(D.regulatoryEventTrends || {})['7']),
      () => ok('健康度区域数据', (D.regulatoryHealthScores || {}).regions?.length > 0),
      () => ok('整改闭环率', (D.regulatoryEvaluation || {}).overallRectificationClosureRate >= 0)
    ]
  }
];

const dataResults = chains.map(chain => {
  const steps = chain.steps.map(fn => fn());
  return { name: chain.name, pass: steps.every(s => s.pass), steps };
});

async function browserTests() {
  let playwright;
  try {
    playwright = require('playwright');
  } catch {
    return { browser: 'skipped', reason: 'playwright not available' };
  }

  const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css' };
  const server = http.createServer((req, res) => {
    let p = req.url.split('?')[0];
    if (p === '/') p = '/index.html';
    const fp = path.join(ROOT, p);
    if (!fp.startsWith(ROOT) || !fs.existsSync(fp)) {
      res.writeHead(404); return res.end('not found');
    }
    res.writeHead(200, { 'Content-Type': mime[path.extname(fp)] || 'text/plain' });
    fs.createReadStream(fp).pipe(res);
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryEvents, { timeout: 10000 });
  await page.evaluate(() => {
    document.getElementById('domainGateway').style.display = 'none';
    if (typeof App.enterDomain === 'function') App.enterDomain('investment', false);
  });

  const regulatoryEventsPage = await page.evaluate(async () => {
    App.regulatoryEventFilter = {};
    App.navigatePublic('global-group-overview');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-events');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryEvents')?.innerText || '';
    const ev = (APP_DATA.regulatoryEvents || [])[0];
    if (ev) App.showRegulatoryEventDetail(ev.eventId);
    await new Promise(r => setTimeout(r, 150));
    const detail = document.getElementById('regulatoryEventDetail')?.innerText || '';
    return {
      hasEventsPage: text.includes('集团监管事件中心'),
      hasMetrics: text.includes('高风险事件'),
      hasList: text.includes('监管事件清单'),
      detailShown: detail.includes('监管事件') || detail.includes('对象不存在')
    };
  });

  const groupOverviewRender = await page.evaluate(() => {
    App.groupOverviewFilter = {};
    App.navigatePublic('global-group-overview');
    const node = document.getElementById('groupOverview');
    const text = node ? node.innerText : '';
    const m = App.computeGroupOverviewMetrics();
    return {
      hasHero: text.includes('集团监管总览'),
      hasChain: text.includes('统一监管链路'),
      hasObjectTree: text.includes('集团监管对象总览'),
      hasCoverage: text.includes('监管盲区总览'),
      hasRisk: text.includes('风险监管总览'),
      hasRect: text.includes('整改闭环总览'),
      hasHealth: text.includes('监管对象健康度'),
      hasOpsEntry: text.includes('监管运营闭环入口'),
      metricCount: m.entityCount,
      has13Metrics: text.includes('跨境合规风险') && text.includes('跨领域风险')
    };
  });

  const filterSync = await page.evaluate(async () => {
    App.groupOverviewFilter = {};
    App.renderGroupOverview();
    const before = App.computeGroupOverviewMetrics();
    App.setGroupOverviewFilter('regionId', 'ME');
    App.renderGroupOverview();
    const after = App.computeGroupOverviewMetrics();
    App.clearGroupOverviewFilter();
    return {
      beforeEntities: before.entityCount,
      afterEntities: after.entityCount,
      synced: after.entityCount < before.entityCount && after.entityCount > 0
    };
  });

  const multiHopBack = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('global-group-overview');
    await new Promise(r => setTimeout(r, 150));
    App.navigatePublic('regulatory-events');
    await new Promise(r => setTimeout(r, 150));
    const ev = (APP_DATA.regulatoryEvents || []).find(e => e.entityId === 'B001');
    if (ev) App.navigatePublic('global-legal-entities', { entityId: 'B001' });
    await new Promise(r => setTimeout(r, 200));
    App.navigatePublic('data-governance', { sourceId: 'SRC002' });
    await new Promise(r => setTimeout(r, 200));
    const trail = [];
    for (let i = 0; i < 3; i++) {
      trail.push(App.currentPage);
      App.goBackPublic();
      await new Promise(r => setTimeout(r, 250));
    }
    return { trail, finalPage: App.currentPage, histLen: (App.publicNavHistory || []).length };
  });

  const invalidId = await page.evaluate(async () => {
    App.showRegulatoryEventDetail('EVENT_NOT_EXIST');
    await new Promise(r => setTimeout(r, 200));
    const text = document.getElementById('regulatoryEventDetail')?.innerText || '';
    return { hasNotFound: text.includes('对象不存在') || text.includes('无法解析'), noUndefined: !text.includes('undefined') };
  });

  const pageCatalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasEvents: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-events'),
    hasRectOps: (App.publicRegulatoryPages || []).some(p => p.pageId === 'rectification-operations'),
    hasEvaluation: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-evaluation')
  }));

  await browser.close();
  server.close();

  const backPass = multiHopBack.finalPage === 'regulatory-events' || multiHopBack.finalPage === 'group';
  const groupPass = groupOverviewRender.hasHero && groupOverviewRender.hasHealth && groupOverviewRender.hasOpsEntry;
  const eventsPass = regulatoryEventsPage.hasEventsPage && regulatoryEventsPage.hasMetrics && regulatoryEventsPage.hasList;
  return {
    regulatoryEvents: eventsPass ? '通过' : '不通过',
    regulatoryEventsDetail: regulatoryEventsPage,
    groupOverview: groupPass ? '通过' : '不通过',
    groupOverviewDetail: groupOverviewRender,
    filterSync: filterSync.synced ? '通过' : '不通过',
    filterSyncDetail: filterSync,
    multiHopBack: backPass ? '通过' : '不通过',
    multiHopDetail: multiHopBack,
    invalidId: (invalidId.hasNotFound && invalidId.noUndefined) ? '通过' : '不通过',
    invalidIdDetail: invalidId,
    pageCatalog: (pageCatalog.count === 14 && pageCatalog.hasEvents && pageCatalog.hasRectOps && pageCatalog.hasEvaluation) ? '通过' : '不通过',
    pageCatalogDetail: pageCatalog
  };
}

(async () => {
  const summary = dataResults.map((r, i) => ({
    test: `测试 ${i + 1}`,
    name: r.name,
    result: r.pass ? '通过' : '不通过',
    failedSteps: r.steps.filter(s => !s.pass)
  }));

  let browserResult;
  try {
    browserResult = await browserTests();
  } catch (e) {
    browserResult = { error: String(e), regulatoryEvents: '不通过', groupOverview: '不通过', filterSync: '不通过', multiHopBack: '不通过', invalidId: '不通过', pageCatalog: '不通过' };
  }

  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['regulatoryEvents', 'groupOverview', 'filterSync', 'multiHopBack', 'invalidId', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');

  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
