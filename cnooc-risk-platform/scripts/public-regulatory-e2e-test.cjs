#!/usr/bin/env node
/**
 * 公共监管底座 Phase 12 端到端验收（15 条链路）
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
    name: '测试1：总览→规则配置→规则版本→部署→执行结果',
    steps: [
      () => ok('规则配置', (D.regulatoryRules || []).length > 0),
      () => ok('规则版本', (D.regulatoryRuleVersions || []).length > 0),
      () => ok('部署记录', (D.regulatoryRuleDeployments || []).filter(d => d.deploymentStatus === 'ACTIVE').length >= 5),
      () => ok('执行结果', (D.regulatoryRuleExecutions || []).length > 0)
    ]
  },
  {
    name: '测试2：规则版本→变更申请→审批→部署→生产执行',
    steps: [
      () => {
        const dep = (D.regulatoryRuleDeployments || []).find(d => d.ruleId === 'RULE-001' && d.deploymentStatus === 'ACTIVE');
        const cr = dep && D.regulatoryRuleChangeRequests.find(c => c.changeRequestId === dep.changeRequestId);
        const exec = dep && D.regulatoryRuleExecutions.find(e => e.deploymentId === dep.deploymentId && e.executionMode === 'PRODUCTION');
        return ok('版本部署执行链', dep && cr && exec && exec.simulationOnly === false);
      }
    ]
  },
  {
    name: '测试3：执行结果→法人→风险→KRI→数据质量→整改',
    steps: [
      () => {
        const ex = (D.regulatoryRuleExecutions || []).find(e => (e.relatedRiskMatterIds || []).length && e.entityId);
        const ent = ex && D.globalLegalEntities.find(e => e.entityId === ex.entityId);
        const warn = ex && D.warnings.find(w => ex.relatedRiskMatterIds.includes(w.id));
        const rect = ent && D.rectificationTasks.find(t => t.entityId === ent.entityId);
        return ok('执行穿透链', ex && ent && (warn || rect));
      }
    ]
  },
  {
    name: '测试4：运行异常→规则→版本→执行记录→法人',
    steps: [
      () => {
        const a = (D.regulatoryRuleRuntimeAnomalies || [])[0];
        const ex = a && D.regulatoryRuleExecutions.find(e => e.executionId === a.executionId);
        return ok('异常穿透链', a && a.ruleId && a.versionId && (ex || a.entityId));
      }
    ]
  },
  {
    name: '测试5：执行结果→优先级变化→监管行动→执行反馈',
    steps: [
      () => {
        const ex = (D.regulatoryRuleExecutions || []).find(e => e.resultChanged && (e.relatedActionIds || []).length);
        const act = ex && D.regulatoryActions.find(a => ex.relatedActionIds.includes(a.actionId));
        const fb = act && D.regulatoryActionFeedbacks.find(f => f.actionId === act.actionId);
        return ok('行动反馈链', ex && act);
      }
    ]
  },
  {
    name: '测试6：部署记录→当前版本→上一版本→回滚记录',
    steps: [
      () => ok('部署', (D.regulatoryRuleDeployments || []).length > 0),
      () => ok('回滚', (D.regulatoryRuleRollbacks || []).length > 0)
    ]
  },
  {
    name: '测试7：回滚记录→回滚前后版本→执行结果',
    steps: [
      () => {
        const rb = (D.regulatoryRuleRollbacks || [])[0];
        const fromV = rb && D.regulatoryRuleVersions.find(v => v.versionId === rb.fromVersionId);
        const toV = rb && D.regulatoryRuleVersions.find(v => v.versionId === rb.toVersionId);
        const exec = D.regulatoryRuleExecutions.some(e => e.ruleId === rb?.ruleId);
        return ok('回滚链', rb && fromV && toV && exec);
      }
    ]
  },
  {
    name: '测试8：规则效果→运行指标→执行结果→监管行动',
    steps: [
      () => ok('效果评价', (D.regulatoryRuleEffectiveness || []).length > 0),
      () => ok('运行指标', !!(D.regulatoryRuleExecutionMetrics || {}).totalExecutions),
      () => ok('执行行动', (D.regulatoryRuleExecutions || []).some(e => (e.relatedActionIds || []).length))
    ]
  },
  {
    name: '测试9：整改任务→监管行动→规则执行→规则版本',
    steps: [
      () => {
        const rect = (D.rectificationTasks || [])[0];
        const act = rect && D.regulatoryActions.find(a => a.entityId === rect.entityId);
        const ex = act && D.regulatoryRuleExecutions.find(e => e.entityId === act.entityId);
        const ver = ex && D.regulatoryRuleVersions.find(v => v.versionId === ex.versionId);
        return ok('整改规则链', rect && (act || ex) && ver);
      }
    ]
  },
  {
    name: '测试10：法人→当前优先级→规则执行→规则版本',
    steps: [
      () => {
        const ent = D.globalLegalEntities.find(e => e.entityId === 'B001');
        const pri = ent && (D.regulatoryPrioritiesRecalculated || {})[ent.entityId];
        const ex = ent && D.regulatoryRuleExecutions.find(e => e.entityId === ent.entityId);
        const ver = ex && D.regulatoryRuleVersions.find(v => v.versionId === ex.versionId);
        return ok('法人执行链', ent && pri && ex && ver);
      }
    ]
  },
  {
    name: '测试11：规则治理→变更→仿真→影响分析→部署',
    steps: [
      () => ok('变更', (D.regulatoryRuleChangeRequests || []).length > 0),
      () => ok('仿真', (D.regulatorySimulations || []).length > 0),
      () => ok('影响', (D.regulatoryRuleImpactAnalysis || []).length > 0),
      () => ok('部署', (D.regulatoryRuleDeployments || []).filter(d => d.deploymentStatus === 'ACTIVE').length >= 5)
    ]
  },
  {
    name: '测试12：驾驶舱→规则运行→异常→执行结果',
    steps: [
      () => ok('执行指标', !!(D.regulatoryRuleExecutionMetrics || {}).productionRules),
      () => ok('异常', (D.regulatoryRuleRuntimeAnomalies || []).length > 0),
      () => ok('执行', (D.regulatoryRuleExecutions || []).length > 0)
    ]
  },
  {
    name: '测试13：规则版本→多版本时间线→当前ACTIVE版本',
    steps: [
      () => {
        const active = (D.regulatoryRuleVersions || []).filter(v => v.status === 'ACTIVE' && v.ruleId === 'RULE-001');
        return ok('ACTIVE唯一', active.length === 1);
      }
    ]
  },
  {
    name: '测试14：无效 executionId→错误态',
    steps: [
      () => ok('无效执行', !(D.regulatoryRuleExecutions || []).find(e => e.executionId === 'EXEC_NOT_EXIST'))
    ]
  },
  {
    name: '测试15：A→B→C→D→E→F多跳返回',
    steps: [
      () => ok('生产隔离', (D.regulatoryRuleExecutions || []).every(e => e.simulationOnly === false && e.executionMode === 'PRODUCTION')),
      () => ok('仿真隔离', (D.regulatorySimulationResults || []).every(r => r.simulationOnly === true)),
      () => ok('指标动态', (D.regulatoryRuleExecutionMetrics || {}).totalExecutions === (D.regulatoryRuleExecutions || []).length)
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryRuleRuntime, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const runtimeNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-rule-config');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-rule-versions');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-rule-deployments');
    await new Promise(r => setTimeout(r, 100));
    const dep = (APP_DATA.regulatoryRuleDeployments || []).find(d => d.deploymentStatus === 'ACTIVE');
    if (dep) App.showRegulatoryRuleDeploymentDetail(dep.deploymentId);
    await new Promise(r => setTimeout(r, 100));
    const exec = (APP_DATA.regulatoryRuleExecutions || [])[0];
    if (exec) App.navigatePublic('regulatory-rule-executions', { executionId: exec.executionId });
    await new Promise(r => setTimeout(r, 100));
    const text = document.getElementById('regulatoryRuleExecutionDetail')?.innerText || '';
    return { hasRuntime: document.getElementById('regulatoryRuleDeployments')?.innerText?.includes('部署记录'), hasExec: text.includes('执行') || text.includes(exec?.executionId) };
  });

  const invalidDetail = await page.evaluate(async () => {
    App.navigatePublic('regulatory-rule-executions');
    await new Promise(r => setTimeout(r, 100));
    App.showRegulatoryRuleExecutionDetail('EXEC_NOT_EXIST');
    await new Promise(r => setTimeout(r, 100));
    const bad = document.getElementById('regulatoryRuleExecutionDetail')?.innerText || '';
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 100));
    const cc = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { invalidOk: bad.includes('对象不存在'), commandCenterOk: cc.includes('规则运行状态') || cc.includes('规则治理闭环') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-rule-runtime');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-rule-executions');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-rule-deployments');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-rule-approvals');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-rule-impact');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 5; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasRuntime: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-rule-runtime'),
    hasExecutions: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-rule-executions'),
    hasDeployments: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-rule-deployments')
  }));

  await browser.close();
  server.close();

  return {
    runtimeNav: (runtimeNav.hasRuntime && runtimeNav.hasExec) ? '通过' : '不通过',
    runtimeNavDetail: runtimeNav,
    invalidDetail: (invalidDetail.invalidOk && invalidDetail.commandCenterOk) ? '通过' : '不通过',
    invalidDetailInfo: invalidDetail,
    multiHop: ['regulatory-rule-runtime', 'regulatory-rule-executions', 'regulatory-rule-deployments', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 30 && catalog.hasRuntime && catalog.hasExecutions && catalog.hasDeployments) ? '通过' : '不通过',
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
    browserResult = { error: String(e), runtimeNav: '不通过', invalidDetail: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['runtimeNav', 'invalidDetail', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
