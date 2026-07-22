#!/usr/bin/env node
/**
 * 公共监管底座 Phase 13 端到端验收（15 条链路）
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
    name: '测试1：集团总览→监管绩效→区域→法人→监管行动',
    steps: [
      () => ok('绩效汇总', !!(D.regulatoryPerformanceSummary || {}).regulatoryEffectivenessScore),
      () => ok('区域排名', (D.regulatoryPerformanceSummary || {}).regionRanking?.length > 0),
      () => ok('法人排名', (D.regulatoryPerformanceSummary || {}).entityRanking?.length > 0),
      () => {
        const ent = (D.regulatoryPerformanceSummary || {}).entityRanking?.[0];
        const act = ent && D.regulatoryActions.find(a => a.entityId === ent.scopeId);
        return ok('法人行动链', ent && act);
      }
    ]
  },
  {
    name: '测试2：监管绩效→高风险法人→风险事件→整改任务',
    steps: [
      () => {
        const perf = (D.regulatoryPerformanceMetrics || []).find(p => p.scopeType === 'ENTITY' && p.highRiskResolutionRate < 1);
        const ent = perf && D.globalLegalEntities.find(e => e.entityId === perf.scopeId);
        const evt = ent && D.regulatoryEvents.find(e => e.entityId === ent.entityId);
        const rect = ent && D.rectificationTasks.find(t => t.entityId === ent.entityId);
        return ok('绩效穿透链', perf && ent && (evt || rect));
      }
    ]
  },
  {
    name: '测试3：监管绩效→整改闭环率→整改任务→监管行动',
    steps: [
      () => ok('闭环率', (D.regulatoryPerformanceSummary || {}).rectificationClosureRate > 0),
      () => {
        const rect = (D.rectificationTasks || [])[0];
        const act = rect && D.regulatoryActions.find(a => a.entityId === rect.entityId);
        return ok('整改行动链', rect && act);
      }
    ]
  },
  {
    name: '测试4：监管资源→高优先级法人→资源配置→监管任务',
    steps: [
      () => ok('资源配置', (D.regulatoryResourceAllocations || []).length > 0),
      () => {
        const alloc = (D.regulatoryResourceAllocations || []).find(a => a.priority === 'CRITICAL' || a.priority === 'HIGH');
        const task = alloc && D.regulatorySupervisionTasks.find(t => t.allocationId === alloc.allocationId);
        return ok('资源任务链', alloc && task);
      }
    ]
  },
  {
    name: '测试5：资源配置→监管行动→风险事项→整改',
    steps: [
      () => {
        const alloc = (D.regulatoryResourceAllocations || [])[0];
        const act = alloc && D.regulatoryActions.find(a => alloc.sourceActionIds.includes(a.actionId));
        const risk = alloc && D.warnings.find(w => alloc.sourceRiskMatterIds.includes(w.id));
        const rect = act && D.rectificationTasks.find(t => (act.sourceRectificationTaskIds || []).includes(t.taskId));
        return ok('配置穿透链', alloc && act && (risk || rect));
      }
    ]
  },
  {
    name: '测试6：监管任务→责任部门→协同部门→法人',
    steps: [
      () => {
        const task = (D.regulatorySupervisionTasks || []).find(t => t.responsibleDepartment);
        const ent = task && D.globalLegalEntities.find(e => e.entityId === task.entityId);
        return ok('任务组织链', task && ent && task.responsibleDepartment);
      }
    ]
  },
  {
    name: '测试7：监管任务→监管行动→监管事件→风险',
    steps: [
      () => {
        const task = (D.regulatorySupervisionTasks || []).find(t => (t.sourceActionIds || []).length);
        const act = task && D.regulatoryActions.find(a => task.sourceActionIds.includes(a.actionId));
        const evt = act && D.regulatoryEvents.find(e => (act.sourceEventIds || []).includes(e.eventId));
        const risk = act && D.warnings.find(w => (act.sourceRiskMatterIds || []).includes(w.id));
        return ok('任务风险链', task && act && (evt || risk));
      }
    ]
  },
  {
    name: '测试8：监管能力对标→法人→成熟度→绩效',
    steps: [
      () => {
        const bench = (D.regulatoryBenchmarking || []).find(b => b.benchmarkType === 'ENTITY');
        const perf = bench && D.regulatoryPerformanceMetrics.find(p => p.performanceId === (bench.sourcePerformanceIds || [])[0]);
        const mat = bench && (D.regulatoryMaturity || {}).entityMaturity?.find(m => m.objectId === bench.scopeId);
        return ok('对标绩效链', bench && perf && (mat || bench.maturityLevel));
      }
    ]
  },
  {
    name: '测试9：区域对标→区域→国家→法人',
    steps: [
      () => ok('区域对标', (D.regulatoryBenchmarking || []).some(b => b.benchmarkType === 'REGION')),
      () => ok('区域绩效', (D.regulatoryPerformanceMetrics || []).some(p => p.scopeType === 'REGION')),
      () => ok('国家绩效', (D.regulatoryPerformanceMetrics || []).some(p => p.scopeType === 'COUNTRY')),
      () => ok('法人绩效', (D.regulatoryPerformanceMetrics || []).some(p => p.scopeType === 'ENTITY'))
    ]
  },
  {
    name: '测试10：绩效→数据质量→KRI→风险',
    steps: [
      () => ok('数据质量率', (D.regulatoryPerformanceSummary || {}).dataQualityImprovementRate >= 0),
      () => ok('KRI改善率', (D.regulatoryPerformanceSummary || {}).kriExceptionReductionRate >= 0),
      () => ok('风险解决率', (D.regulatoryPerformanceSummary || {}).highRiskResolutionRate >= 0)
    ]
  },
  {
    name: '测试11：驾驶舱→监管绩效→资源调度→任务协同',
    steps: [
      () => ok('运营指标', !!(D.regulatoryOperationsMetrics || {}).performance),
      () => ok('资源配置指标', !!(D.regulatoryOperationsMetrics || {}).resourceAllocation),
      () => ok('任务协同指标', !!(D.regulatoryOperationsMetrics || {}).supervisionTasks)
    ]
  },
  {
    name: '测试12：监管资源→监管任务→执行结果→效果评价',
    steps: [
      () => {
        const alloc = (D.regulatoryResourceAllocations || [])[0];
        const task = alloc && D.regulatorySupervisionTasks.find(t => t.allocationId === alloc.allocationId);
        const eff = alloc && D.regulatoryResourceEffectiveness.find(e => e.allocationId === alloc.allocationId);
        const act = alloc && D.regulatoryActions.find(a => alloc.sourceActionIds.includes(a.actionId));
        return ok('资源效果链', alloc && task && eff && act);
      }
    ]
  },
  {
    name: '测试13：监管能力差异→短板维度→优化建议→规则变更',
    steps: [
      () => {
        const bench = (D.regulatoryBenchmarking || []).find(b => (b.laggingDimensions || []).length);
        const opt = bench && (bench.relatedOptimizationIds || []).length;
        const rule = (D.regulatoryRuleChangeRequests || []).length > 0;
        return ok('能力优化链', bench && (bench.improvementSuggestions || []).length && (opt || rule));
      }
    ]
  },
  {
    name: '测试14：无效 performanceId→错误态',
    steps: [
      () => ok('无效绩效', !(D.regulatoryPerformanceMetrics || []).find(p => p.performanceId === 'PERF_NOT_EXIST'))
    ]
  },
  {
    name: '测试15：A→B→C→D→E→F多跳返回',
    steps: [
      () => ok('绩效数据', (D.regulatoryPerformanceMetrics || []).length > 0),
      () => ok('资源配置', (D.regulatoryResourceAllocations || []).length > 0),
      () => ok('监管任务', (D.regulatorySupervisionTasks || []).length > 0),
      () => ok('效果评价', (D.regulatoryResourceEffectiveness || []).length > 0),
      () => ok('能力对标', (D.regulatoryBenchmarking || []).length > 0),
      () => ok('任务区分', (D.regulatorySupervisionTasks || []).every(t => t.supervisionTaskId && !(D.rectificationTasks || []).find(r => r.taskId === t.supervisionTaskId)))
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryPerformance, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const perfNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-performance');
    await new Promise(r => setTimeout(r, 100));
    const perf = (APP_DATA.regulatoryPerformanceMetrics || []).find(p => p.scopeType === 'ENTITY');
    if (perf) App.showRegulatoryPerformanceDetail(perf.performanceId);
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-resource-allocation');
    await new Promise(r => setTimeout(r, 100));
    const alloc = (APP_DATA.regulatoryResourceAllocations || [])[0];
    if (alloc) App.showRegulatoryAllocationDetail(alloc.allocationId);
    await new Promise(r => setTimeout(r, 100));
    const text = document.getElementById('regulatoryAllocationDetail')?.innerText || '';
    return { hasPerf: document.getElementById('regulatoryPerformance')?.innerText?.includes('监管绩效'), hasAlloc: text.includes('配置') || text.includes(alloc?.allocationId) };
  });

  const invalidDetail = await page.evaluate(async () => {
    App.navigatePublic('regulatory-performance');
    await new Promise(r => setTimeout(r, 100));
    App.showRegulatoryPerformanceDetail('PERF_NOT_EXIST');
    await new Promise(r => setTimeout(r, 100));
    const bad = document.getElementById('regulatoryPerformanceDetail')?.innerText || '';
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 100));
    const cc = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { invalidOk: bad.includes('对象不存在'), commandCenterOk: cc.includes('监管绩效') && cc.includes('监管任务协同') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-performance');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-resource-allocation');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-supervision-tasks');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-benchmarking');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 5; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasPerformance: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-performance'),
    hasAllocation: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-resource-allocation'),
    hasTasks: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-supervision-tasks'),
    hasBenchmarking: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-benchmarking')
  }));

  await browser.close();
  server.close();

  return {
    perfNav: (perfNav.hasPerf && perfNav.hasAlloc) ? '通过' : '不通过',
    perfNavDetail: perfNav,
    invalidDetail: (invalidDetail.invalidOk && invalidDetail.commandCenterOk) ? '通过' : '不通过',
    invalidDetailInfo: invalidDetail,
    multiHop: ['regulatory-benchmarking', 'regulatory-supervision-tasks', 'regulatory-resource-allocation', 'regulatory-performance', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 34 && catalog.hasPerformance && catalog.hasAllocation && catalog.hasTasks && catalog.hasBenchmarking) ? '通过' : '不通过',
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
    browserResult = { error: String(e), perfNav: '不通过', invalidDetail: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['perfNav', 'invalidDetail', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
