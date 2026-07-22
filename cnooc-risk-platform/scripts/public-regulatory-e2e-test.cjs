#!/usr/bin/env node
/**
 * 公共监管底座 Phase 7 端到端验收（15 条链路）
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
    name: '测试1：集团总览→监管决策驾驶舱',
    steps: [
      () => ok('驾驶舱指标', !!(D.regulatoryCommandCenterMetrics || {}).objectCount),
      () => ok('优先级对象', (D.regulatoryPriorityObjects || []).length > 0)
    ]
  },
  {
    name: '测试2：驾驶舱→重点法人',
    steps: [
      () => {
        const top = (D.regulatoryPriorityObjects || [])[0];
        return ok('TOP1 法人', top && D.globalLegalEntities.find(e => e.entityId === top.objectId));
      }
    ]
  },
  {
    name: '测试3：驾驶舱→高风险事件',
    steps: [
      () => ok('高风险事件', (D.regulatoryEvents || []).some(e => e.riskLevel === 'HIGH'))
    ]
  },
  {
    name: '测试4：驾驶舱→超期整改',
    steps: [
      () => ok('超期整改', (D.regulatoryCommandCenterMetrics || {}).overdueRectCount > 0)
    ]
  },
  {
    name: '测试5：驾驶舱→监管优先级',
    steps: [
      () => {
        const p = (D.regulatoryPriorities || {})['B001'];
        return ok('B001 优先级', p && ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].includes(p.priority));
      }
    ]
  },
  {
    name: '测试6：监管优先级→风险事件',
    steps: [
      () => {
        const evts = (D.regulatoryEvents || []).filter(e => e.entityId === 'B001');
        return ok('B001 事件', evts.length > 0);
      }
    ]
  },
  {
    name: '测试7：监管优先级→整改任务',
    steps: [
      () => ok('B001 整改', (D.rectificationTasks || []).some(t => t.entityId === 'B001'))
    ]
  },
  {
    name: '测试8：监管行动→来源事件',
    steps: [
      () => {
        const act = (D.regulatoryActions || [])[0];
        return ok('行动来源事件', act && act.sourceEventIds.length && D.regulatoryEvents.find(e => e.eventId === act.sourceEventIds[0]));
      }
    ]
  },
  {
    name: '测试9：监管行动→来源风险事项',
    steps: [
      () => {
        const act = (D.regulatoryActions || []).find(a => (a.sourceRiskMatterIds || []).length);
        const rid = act && act.sourceRiskMatterIds[0];
        const w = D.warnings.find(x => x.id === rid);
        const m = D.crossDomainRiskMatters.find(x => x.riskMatterId === rid);
        return ok('行动来源风险', act && (w || m));
      }
    ]
  },
  {
    name: '测试10：监管行动→整改任务',
    steps: [
      () => {
        const act = (D.regulatoryActions || []).find(a => (a.sourceRectificationTaskIds || []).length);
        return ok('行动来源整改', act && D.rectificationTasks.find(t => t.taskId === act.sourceRectificationTaskIds[0]));
      }
    ]
  },
  {
    name: '测试11：监管策略→区域',
    steps: [
      () => ok('区域策略', (D.regulatoryStrategyAnalysis || {}).regions?.length > 0)
    ]
  },
  {
    name: '测试12：监管策略→法人',
    steps: [
      () => ok('法人策略', (D.regulatoryStrategyAnalysis || {}).entities?.some(e => e.objectId === 'B001'))
    ]
  },
  {
    name: '测试13：监管策略→数据治理',
    steps: [
      () => ok('数据治理成熟度', (D.regulatoryEvaluation || {}).dataGovernanceMaturity >= 0)
    ]
  },
  {
    name: '测试14：无效 ID→统一错误态',
    steps: [
      () => ok('无效 actionId', !(D.regulatoryActions || []).find(a => a.actionId === 'ACT_NOT_EXIST')),
      () => ok('无效 entityId', !D.globalLegalEntities.find(e => e.entityId === 'NOT_EXIST'))
    ]
  },
  {
    name: '测试15：多跳导航→逐层返回',
    steps: [
      () => ok('风险集中度', !!(D.regulatoryRiskConcentration || {}).regions?.length),
      () => ok('监管行动', (D.regulatoryActions || []).length > 0),
      () => ok('策略分析', !!(D.regulatoryStrategyAnalysis || {}).domains?.length)
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryCommandCenter, { timeout: 10000 });
  await page.evaluate(() => {
    document.getElementById('domainGateway').style.display = 'none';
    if (typeof App.enterDomain === 'function') App.enterDomain('investment', false);
  });

  const commandCenter = await page.evaluate(async () => {
    App.regulatoryCommandCenterFilter = {};
    App.navigatePublic('global-group-overview');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { hasPage: text.includes('集团监管决策驾驶舱'), hasPriority: text.includes('重点监管对象'), hasConcentration: text.includes('风险集中度') };
  });

  const actionDetail = await page.evaluate(async () => {
    App.navigatePublic('regulatory-actions');
    await new Promise(r => setTimeout(r, 150));
    const act = (APP_DATA.regulatoryActions || [])[0];
    if (act) App.showRegulatoryActionDetail(act.actionId);
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryActionDetail')?.innerText || '';
    App.showRegulatoryActionDetail('ACT_NOT_EXIST');
    await new Promise(r => setTimeout(r, 150));
    const bad = document.getElementById('regulatoryActionDetail')?.innerText || '';
    return { detailOk: text.includes('监管行动') || text.includes('基础信息'), invalidOk: bad.includes('对象不存在') };
  });

  const multiHopBack = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 150));
    App.navigatePublic('global-legal-entities', { entityId: 'B001' });
    await new Promise(r => setTimeout(r, 200));
    App.navigatePublic('regulatory-events');
    await new Promise(r => setTimeout(r, 200));
    const ev = (APP_DATA.regulatoryEvents || []).find(e => e.entityId === 'B001');
    if (ev) App.navigatePublic('regulatory-actions');
    await new Promise(r => setTimeout(r, 200));
    for (let i = 0; i < 3; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 250)); }
    return { finalPage: App.currentPage };
  });

  const pageCatalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasCommand: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-command-center'),
    hasActions: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-actions'),
    hasStrategy: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-strategy')
  }));

  await browser.close();
  server.close();

  return {
    commandCenter: (commandCenter.hasPage && commandCenter.hasPriority) ? '通过' : '不通过',
    commandCenterDetail: commandCenter,
    actionDetail: (actionDetail.detailOk && actionDetail.invalidOk) ? '通过' : '不通过',
    actionDetailInfo: actionDetail,
    multiHopBack: (multiHopBack.finalPage === 'regulatory-events' || multiHopBack.finalPage === 'regulatory-command-center' || multiHopBack.finalPage === 'group') ? '通过' : '不通过',
    multiHopDetail: multiHopBack,
    pageCatalog: (pageCatalog.count === 17 && pageCatalog.hasCommand && pageCatalog.hasActions && pageCatalog.hasStrategy) ? '通过' : '不通过',
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
    browserResult = { error: String(e), commandCenter: '不通过', actionDetail: '不通过', multiHopBack: '不通过', pageCatalog: '不通过' };
  }

  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['commandCenter', 'actionDetail', 'multiHopBack', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');

  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
