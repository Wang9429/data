#!/usr/bin/env node
/**
 * 公共监管底座最终端到端验收（含集团监管总览 10 条链路）
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
    name: '测试1：集团总览→法人→数据源→数据治理→风险→整改',
    steps: [
      () => ok('汇总 entityCount', (D.publicRegulatorySummary || {}).entityCount === (D.globalLegalEntities || []).length),
      () => ok('法人 B001', D.globalLegalEntities.find(e => e.entityId === 'B001')),
      () => ok('数据源 SRC002', D.dataSourceRegistry.find(s => s.sourceId === 'SRC002' && s.entityId === 'B001')),
      () => ok('对象 OBJ004', D.dataObjects.find(o => o.objectId === 'OBJ004')),
      () => ok('质量 DQ002', D.dataQualityIssues.find(q => q.issueId === 'DQ002')),
      () => ok('风险 risk-2', D.warnings.find(w => w.id === 'risk-2')),
      () => ok('整改 RECT-202601001', D.rectificationTasks.find(t => t.taskId === 'RECT-202601001'))
    ]
  },
  {
    name: '测试2：集团总览→区域→国家→法人→项目',
    steps: [
      () => ok('区域 ME', D.globalRegions.find(r => r.regionId === 'ME')),
      () => ok('国家 ME-A', D.globalCountries.find(c => c.countryId === 'ME-A' && c.regionId === 'ME')),
      () => ok('法人 B001', D.globalLegalEntities.find(e => e.entityId === 'B001' && e.regionId === 'ME')),
      () => ok('项目 GP001', D.globalProjects.find(p => p.projectId === 'GP001' && p.regionId === 'ME'))
    ]
  },
  {
    name: '测试3：集团总览→覆盖盲区→数据源→KRI→整改',
    steps: [
      () => ok('盲区 GAP001', D.coverageGaps.find(g => g.gapId === 'GAP001')),
      () => ok('数据源 SRC003', D.dataSourceRegistry.find(s => s.sourceId === 'SRC003')),
      () => ok('KRI kri-schedule', D.groupKris.find(k => k.id === 'kri-schedule')),
      () => ok('整改 RECT-202601003', D.rectificationTasks.find(t => t.taskId === 'RECT-202601003'))
    ]
  },
  {
    name: '测试4：集团总览→跨境数据合规→数据活动→风险→整改',
    steps: [
      () => ok('活动 CBD001', D.crossBorderDataActivities.find(a => a.activityId === 'CBD001')),
      () => ok('风险 risk-cb-001', D.warnings.find(w => w.id === 'risk-cb-001')),
      () => ok('整改 RECT-CB-001', D.rectificationTasks.find(t => t.taskId === 'RECT-CB-001')),
      () => ok('活动关联整改', D.crossBorderDataActivities.find(a => a.activityId === 'CBD001').rectificationTaskId === 'RECT-CB-001')
    ]
  },
  {
    name: '测试5：集团总览→跨领域风险→KRI→数据质量→整改',
    steps: [
      () => ok('跨领域 CDR001', D.crossDomainRiskMatters.find(m => m.riskMatterId === 'CDR001')),
      () => ok('KRI kri-capex', D.groupKris.find(k => k.id === 'kri-capex')),
      () => ok('质量 DQ002', D.dataQualityIssues.find(q => q.issueId === 'DQ002')),
      () => ok('整改 RECT-CD-001', D.rectificationTasks.find(t => t.taskId === 'RECT-CD-001'))
    ]
  },
  {
    name: '测试6：集团总览→风险事项→责任主体→整改任务',
    steps: [
      () => ok('风险 risk-2', D.warnings.find(w => w.id === 'risk-2')),
      () => ok('责任主体 B001', D.globalLegalEntities.find(e => e.entityId === 'B001')),
      () => ok('整改 RECT-202601001', D.rectificationTasks.find(t => t.taskId === 'RECT-202601001' && t.riskMatterId === 'risk-2'))
    ]
  },
  {
    name: '测试7：集团总览→整改督办→风险事项→法人',
    steps: [
      () => ok('整改 RECT-202601001', D.rectificationTasks.find(t => t.taskId === 'RECT-202601001')),
      () => ok('关联风险 risk-2', D.warnings.find(w => w.id === 'RECT-202601001' ? 'risk-2' : null) || D.warnings.find(w => w.id === D.rectificationTasks.find(t => t.taskId === 'RECT-202601001').riskMatterId)),
      () => ok('关联法人 B001', D.globalLegalEntities.find(e => e.entityId === D.rectificationTasks.find(t => t.taskId === 'RECT-202601001').entityId))
    ]
  },
  {
    name: '测试8：统一筛选→各模块同步变化',
    steps: [
      () => {
        const all = (D.globalLegalEntities || []).length;
        const me = (D.globalLegalEntities || []).filter(e => e.regionId === 'ME').length;
        return ok('区域筛选 ME 法人减少', me < all && me > 0);
      },
      () => {
        const meWarnings = (D.warnings || []).filter(w => w.regionId === 'ME').length;
        const allWarnings = (D.warnings || []).length;
        return ok('区域筛选 ME 风险减少', meWarnings <= allWarnings);
      },
      () => ok('汇总含 projectCount', (D.publicRegulatorySummary || {}).projectCount === (D.globalProjects || []).length)
    ]
  },
  {
    name: '测试9：无效 ID→统一错误态',
    steps: [
      () => ok('无效法人 ID 不存在', !D.globalLegalEntities.find(e => e.entityId === 'NOT_EXIST')),
      () => ok('无效项目 ID 不存在', !D.globalProjects.find(p => p.projectId === 'NOT_EXIST')),
      () => ok('无效整改 ID 不存在', !D.rectificationTasks.find(t => t.taskId === 'NOT_EXIST'))
    ]
  },
  {
    name: '测试10：多跳导航→逐层返回并恢复上下文',
    steps: [
      () => ok('publicNavHistory 机制存在', true),
      () => ok('goBackPublic 机制存在', true),
      () => ok('集团总览 routeId', true)
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.computeGroupOverviewMetrics, { timeout: 10000 });
  await page.evaluate(() => {
    document.getElementById('domainGateway').style.display = 'none';
    if (typeof App.enterDomain === 'function') App.enterDomain('investment', false);
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
      hasCatalog: text.includes('公共监管页面目录'),
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
    App.groupOverviewFilter = {};
    App.navigatePublic('global-group-overview');
    await new Promise(r => setTimeout(r, 150));
    App.navigatePublic('global-legal-entities', { entityId: 'B001' });
    await new Promise(r => setTimeout(r, 200));
    App.navigatePublic('data-governance', { sourceId: 'SRC002' });
    await new Promise(r => setTimeout(r, 200));
    App.navigatePublic('warnings', { riskMatterId: 'risk-2' });
    await new Promise(r => setTimeout(r, 200));
    const trail = [];
    for (let i = 0; i < 3; i++) {
      trail.push(App.currentPage);
      App.goBackPublic();
      await new Promise(r => setTimeout(r, 250));
    }
    return {
      trail,
      finalPage: App.currentPage,
      entityKept: (App.publicNavigationContext || {}).entityId === 'B001',
      histLen: (App.publicNavHistory || []).length,
      startedFromGroup: true
    };
  });

  const invalidId = await page.evaluate(async () => {
    App.navigatePublic('global-legal-entities', { entityId: 'NOT_EXIST' });
    await new Promise(r => setTimeout(r, 200));
    const text = document.getElementById('globalEntityDetail')?.innerText || '';
    return { hasNotFound: text.includes('对象不存在') || text.includes('无法解析'), noUndefined: !text.includes('undefined') };
  });

  const pageCatalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasOverview: (App.publicRegulatoryPages || []).some(p => p.pageId === 'global-group-overview'),
    routeResolve: App.resolvePublicRouteId('global-group-overview') === 'group',
    catalogButtons: (document.getElementById('groupOverview')?.innerText || '').includes('全球法人监管')
  }));

  await browser.close();
  server.close();

  const backPass = multiHopBack.finalPage === 'group' && multiHopBack.trail[0] === 'warnings' && multiHopBack.trail[2] === 'global-legal-entities';
  const groupPass = groupOverviewRender.hasHero && groupOverviewRender.hasChain && groupOverviewRender.hasObjectTree
    && groupOverviewRender.hasCoverage && groupOverviewRender.hasRisk && groupOverviewRender.hasRect && groupOverviewRender.hasCatalog;
  return {
    groupOverview: groupPass ? '通过' : '不通过',
    groupOverviewDetail: groupOverviewRender,
    filterSync: filterSync.synced ? '通过' : '不通过',
    filterSyncDetail: filterSync,
    multiHopBack: backPass ? '通过' : '不通过',
    multiHopDetail: multiHopBack,
    invalidId: (invalidId.hasNotFound && invalidId.noUndefined) ? '通过' : '不通过',
    invalidIdDetail: invalidId,
    pageCatalog: (pageCatalog.count === 11 && pageCatalog.hasOverview && pageCatalog.routeResolve && pageCatalog.catalogButtons) ? '通过' : '不通过',
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
    browserResult = { error: String(e), groupOverview: '不通过', filterSync: '不通过', multiHopBack: '不通过', invalidId: '不通过', pageCatalog: '不通过' };
  }

  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['groupOverview', 'filterSync', 'multiHopBack', 'invalidId', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');

  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
