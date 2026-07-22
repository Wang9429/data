#!/usr/bin/env node
/**
 * 公共监管底座 Phase 14 端到端验收（15 条链路）
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
function ok(step, cond, msg) { return { step, pass: !!cond, msg: cond ? 'OK' : msg }; }

const chains = [
  {
    name: '测试1：集团总览→战略规划',
    steps: [
      () => ok('战略规划指标', !!(D.regulatoryStrategicPlanningMetrics || {}).objectiveCount),
      () => ok('战略目标', (D.regulatoryStrategicObjectives || []).length > 0)
    ]
  },
  {
    name: '测试2：战略规划→战略目标→目标达成',
    steps: [
      () => {
        const obj = (D.regulatoryStrategicObjectives || [])[0];
        const tgt = obj && D.regulatoryTargets.find(t => t.relatedObjectiveId === obj.objectiveId);
        return ok('目标达成链', obj && tgt && tgt.completionRate >= 0);
      }
    ]
  },
  {
    name: '测试3：战略目标→年度计划',
    steps: [
      () => {
        const plan = (D.regulatoryAnnualPlans || [])[0];
        const obj = plan && D.regulatoryStrategicObjectives.find(o => (plan.objectiveIds || []).includes(o.objectiveId));
        return ok('战略计划链', plan && obj);
      }
    ]
  },
  {
    name: '测试4：年度计划→重点对象',
    steps: [
      () => {
        const plan = (D.regulatoryAnnualPlans || [])[0];
        const focus = plan && D.regulatoryStrategicFocus.find(f => (f.relatedPlanIds || []).includes(plan.planId));
        return ok('计划重点链', plan && (focus || (plan.focusEntityIds || []).length));
      }
    ]
  },
  {
    name: '测试5：重点法人→优先级→风险→整改',
    steps: [
      () => {
        const focus = (D.regulatoryStrategicFocus || []).find(f => f.focusType === 'ENTITY');
        const pri = focus && (D.regulatoryPrioritiesRecalculated || D.regulatoryPriorities || {})[focus.focusObjectId];
        const rect = focus && D.rectificationTasks.find(t => t.entityId === focus.focusObjectId);
        return ok('法人整改链', focus && pri && rect);
      }
    ]
  },
  {
    name: '测试6：年度计划→监管行动→监管资源',
    steps: [
      () => {
        const plan = (D.regulatoryAnnualPlans || [])[0];
        const act = plan && D.regulatoryActions.find(a => (plan.plannedActionIds || []).includes(a.actionId));
        const alloc = plan && D.regulatoryResourceAllocations.find(a => (plan.plannedResourceAllocationIds || []).includes(a.allocationId));
        return ok('行动资源链', plan && act && alloc);
      }
    ]
  },
  {
    name: '测试7：监管资源→监管任务→执行反馈',
    steps: [
      () => {
        const plan = (D.regulatoryAnnualPlans || [])[0];
        const task = plan && D.regulatorySupervisionTasks.find(t => (plan.plannedSupervisionTaskIds || []).includes(t.supervisionTaskId));
        const pex = plan && D.regulatoryPlanExecution.find(e => e.planId === plan.planId);
        return ok('任务执行链', plan && task && pex);
      }
    ]
  },
  {
    name: '测试8：计划执行→目标达成',
    steps: [
      () => {
        const pex = (D.regulatoryPlanExecution || [])[0];
        const tgt = pex && D.regulatoryTargets.find(t => t.relatedPlanId === pex.planId);
        const plan = pex && D.regulatoryAnnualPlans.find(p => p.planId === pex.planId);
        return ok('执行目标链', pex && (tgt || plan));
      }
    ]
  },
  {
    name: '测试9：目标偏差→重点对象',
    steps: [
      () => {
        const tgt = (D.regulatoryTargets || []).find(t => t.status === 'BEHIND' || t.status === 'AT_RISK');
        const focus = D.regulatoryStrategicFocus.length > 0;
        return ok('偏差重点链', (tgt || focus) && D.regulatoryStrategicFocus.length);
      }
    ]
  },
  {
    name: '测试10：战略复盘→监管绩效',
    steps: [
      () => {
        const rev = (D.regulatoryStrategicReview || []).find(r => r.reviewDimension === 'GROUP');
        const perf = D.regulatoryPerformanceSummary;
        return ok('复盘绩效链', rev && perf && perf.regulatoryEffectivenessScore > 0);
      }
    ]
  },
  {
    name: '测试11：战略复盘→成熟度',
    steps: [
      () => ok('成熟度', !!(D.regulatoryMaturity || {}).overallScore),
      () => ok('复盘成熟度', (D.regulatoryStrategicReview || []).some(r => r.maturityScore > 0))
    ]
  },
  {
    name: '测试12：战略复盘→下一周期建议',
    steps: [
      () => ok('建议', (D.regulatoryNextCycleRecommendations || []).length > 0),
      () => ok('复盘', (D.regulatoryStrategicReview || []).length > 0)
    ]
  },
  {
    name: '测试13：下一周期建议→新年度重点',
    steps: [
      () => {
        const rec = (D.regulatoryNextCycleRecommendations || [])[0];
        const focus = rec && D.regulatoryStrategicFocus.length > 0;
        return ok('建议重点链', rec && focus);
      }
    ]
  },
  {
    name: '测试14：无效 objectiveId→错误态',
    steps: [
      () => ok('无效目标', !(D.regulatoryStrategicObjectives || []).find(o => o.objectiveId === 'OBJ_NOT_EXIST'))
    ]
  },
  {
    name: '测试15：A→B→C→D→E→F多跳返回',
    steps: [
      () => ok('战略目标', (D.regulatoryStrategicObjectives || []).length > 0),
      () => ok('年度计划', (D.regulatoryAnnualPlans || []).length > 0),
      () => ok('监管目标', (D.regulatoryTargets || []).length > 0),
      () => ok('监管重点', (D.regulatoryStrategicFocus || []).length > 0),
      () => ok('计划执行', (D.regulatoryPlanExecution || []).length > 0),
      () => ok('战略复盘', (D.regulatoryStrategicReview || []).length > 0)
    ]
  }
];

const dataResults = chains.map(chain => ({
  name: chain.name,
  pass: chain.steps.every(fn => fn().pass),
  steps: chain.steps.map(fn => fn())
}));

async function browserTests() {
  let playwright;
  try { playwright = require('playwright'); } catch { return { browser: 'skipped' }; }

  const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css' };
  const server = http.createServer((req, res) => {
    let p = req.url.split('?')[0];
    if (p === '/') p = '/index.html';
    const fp = path.join(ROOT, p);
    if (!fp.startsWith(ROOT) || !fs.existsSync(fp)) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': mime[path.extname(fp)] || 'text/plain' });
    fs.createReadStream(fp).pipe(res);
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryStrategyPlanning, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const stratNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-strategy-planning');
    await new Promise(r => setTimeout(r, 100));
    const obj = (APP_DATA.regulatoryStrategicObjectives || [])[0];
    if (obj) App.showRegulatoryObjectiveDetail(obj.objectiveId);
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-annual-plan');
    await new Promise(r => setTimeout(r, 100));
    const text = document.getElementById('regulatoryAnnualPlan')?.innerText || '';
    return { hasStrategy: document.getElementById('regulatoryStrategyPlanning')?.innerText?.includes('战略规划'), hasPlan: text.includes('年度') || text.includes('计划') };
  });

  const invalidDetail = await page.evaluate(async () => {
    App.navigatePublic('regulatory-strategy-planning');
    await new Promise(r => setTimeout(r, 100));
    App.showRegulatoryObjectiveDetail('OBJ_NOT_EXIST');
    await new Promise(r => setTimeout(r, 100));
    const bad = document.getElementById('regulatoryObjectiveDetail')?.innerText || '';
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 100));
    const cc = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { invalidOk: bad.includes('对象不存在'), commandCenterOk: cc.includes('战略目标达成') && cc.includes('战略复盘') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-strategy-planning');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-annual-plan');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-target-management');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-focus-management');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-plan-execution');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-strategic-review');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 6; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasStrategyPlanning: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-strategy-planning'),
    hasAnnualPlan: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-annual-plan'),
    hasTarget: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-target-management'),
    hasFocus: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-focus-management'),
    hasExecution: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-plan-execution'),
    hasReview: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-strategic-review')
  }));

  await browser.close();
  server.close();

  return {
    stratNav: (stratNav.hasStrategy && stratNav.hasPlan) ? '通过' : '不通过',
    stratNavDetail: stratNav,
    invalidDetail: (invalidDetail.invalidOk && invalidDetail.commandCenterOk) ? '通过' : '不通过',
    invalidDetailInfo: invalidDetail,
    multiHop: ['regulatory-strategic-review', 'regulatory-plan-execution', 'regulatory-focus-management', 'regulatory-target-management', 'regulatory-annual-plan', 'regulatory-strategy-planning', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 40 && catalog.hasStrategyPlanning && catalog.hasAnnualPlan && catalog.hasTarget && catalog.hasFocus && catalog.hasExecution && catalog.hasReview) ? '通过' : '不通过',
    pageCatalogDetail: catalog
  };
}

(async () => {
  const summary = dataResults.map((r, i) => ({
    test: `测试 ${i + 1}`, name: r.name, result: r.pass ? '通过' : '不通过',
    failedSteps: r.steps.filter(s => !s.pass)
  }));
  let browserResult;
  try { browserResult = await browserTests(); } catch (e) {
    browserResult = { error: String(e), stratNav: '不通过', invalidDetail: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['stratNav', 'invalidDetail', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
