#!/usr/bin/env node
/**
 * 集团监管平台最终验收 — 8 大真实业务场景 + 4 类角色用户旅程
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
function ok(step, cond, msg) { return { step, pass: !!cond, msg: cond ? 'OK' : (msg || 'FAIL') }; }

const pageIds = new Set([
  'global-group-overview', 'regulatory-analysis-center', 'regulatory-risk-concentration', 'global-legal-entities',
  'regulatory-kri-monitoring', 'regulatory-warning-center', 'warnings', 'regulatory-decision-recommendations',
  'regulatory-actions', 'regulatory-resource-allocation', 'regulatory-strategic-review', 'regulatory-role-workbench',
  'regulatory-workbench', 'regulatory-queue', 'regulatory-supervision-tasks', 'rectification',
  'regulatory-action-execution', 'regulatory-performance', 'regulatory-metric-center', 'regulatory-data-quality',
  'regulatory-strategy', 'regulatory-rule-effectiveness', 'regulatory-my-work', 'regulatory-data-governance',
  'regulatory-rule-approvals', 'regulatory-simulation', 'regulatory-rule-impact', 'regulatory-rule-versions',
  'regulatory-rule-deployments', 'regulatory-rule-executions', 'regulatory-rule-runtime', 'regulatory-data-sources',
  'regulatory-data-integration', 'regulatory-data-lineage', 'regulatory-improvement-center',
  'regulatory-root-cause-analysis', 'regulatory-optimization-plans', 'regulatory-authorization',
  'regulatory-improvement-execution', 'regulatory-improvement-effectiveness', 'regulatory-access-control',
  'regulatory-audit-trail'
]);

function validatePath(name, pathSteps, extraSteps) {
  const steps = [
    () => ok('路径存在', pathSteps.length >= 4),
    () => ok('页面有效', pathSteps.every(p => pageIds.has(p) || p === 'group')),
    ...extraSteps
  ];
  return { name, steps };
}

const chains = [
  validatePath('场景1：集团领导发现重大风险', D.regulatoryBusinessScenarios.find(s => s.scenarioId === 'BS-01')?.pagePath || [], [
    () => ok('集团总览', pathIds.has('global-group-overview')),
    () => ok('综合态势', (D.regulatoryAnalysisResults || []).length > 0 || D.regulatoryAnalysisMetrics),
    () => ok('风险集中度', (D.regulatoryRiskConcentration || []).length > 0),
    () => ok('重点法人', (D.globalLegalEntities || []).length > 0),
    () => ok('KRI', (D.regulatoryKriRuntime || []).length > 0),
    () => ok('预警', (D.regulatoryWarnings || []).length > 0),
    () => ok('决策建议', (D.regulatoryDecisionRecommendations || []).every(r => r.requiresHumanDecision === true)),
    () => ok('监管行动', (D.regulatoryActions || []).length > 0),
    () => ok('资源调度', (D.regulatoryResourceAllocations || []).length > 0),
    () => ok('战略复盘', (D.regulatoryStrategicReview || []).length > 0)
  ]),
  validatePath('场景2：集团监管部门处理高优先级事项', D.regulatoryBusinessScenarios.find(s => s.scenarioId === 'BS-02')?.pagePath || [], [
    () => ok('角色工作台', (D.regulatoryRoleWorkbenches || []).length > 0),
    () => ok('待办队列', (D.regulatoryQueue || []).length > 0),
    () => ok('高优先级风险', (D.warnings || []).some(w => w.level === '重大' || w.level === '较大')),
    () => ok('监管任务', (D.regulatorySupervisionTasks || []).length > 0),
    () => ok('整改', (D.rectificationTasks || []).length > 0),
    () => ok('绩效', (D.regulatoryPerformanceMetrics || []).length > 0)
  ]),
  validatePath('场景3：专业领域监管发现指标异常', D.regulatoryBusinessScenarios.find(s => s.scenarioId === 'BS-03')?.pagePath || [], [
    () => ok('指标中心', (D.regulatoryMetrics || []).length > 0 || (D.regulatoryMetricKriMetrics || {}).metricCount > 0),
    () => ok('KRI监测', (D.regulatoryKriRuntime || []).length > 0),
    () => ok('数据可信度', (D.regulatoryKriRuntime || []).some(k => k.credibilityScore != null)),
    () => ok('预警', (D.regulatoryWarnings || []).length > 0),
    () => ok('监管策略', D.regulatoryStrategyAnalysis != null),
    () => ok('效果评价', (D.regulatoryRuleEffectiveness || []).length > 0)
  ]),
  validatePath('场景4：法人监管处理本单位问题', D.regulatoryBusinessScenarios.find(s => s.scenarioId === 'BS-04')?.pagePath || [], [
    () => ok('我的重点', (D.regulatoryWorkbenchMetrics || {}).topEntityIds?.length > 0),
    () => ok('我的预警', (D.regulatoryWarnings || []).some(w => w.entityId)),
    () => ok('数据质量', (D.regulatoryDataQualityIssues || []).length > 0),
    () => ok('数据治理任务', (D.regulatoryDataGovernanceTasks || []).length > 0),
    () => ok('整改任务', (D.regulatoryRectificationTasks || D.rectificationTasks || []).length > 0)
  ]),
  validatePath('场景5：监管规则变更', D.regulatoryBusinessScenarios.find(s => s.scenarioId === 'BS-05')?.pagePath || [], [
    () => ok('变更申请', (D.regulatoryRuleChangeRequests || []).length > 0),
    () => ok('仿真', (D.regulatorySimulations || []).every(s => s.simulationOnly === true)),
    () => ok('影响分析', (D.regulatoryRuleImpactAnalysis || []).length > 0),
    () => ok('审批', (D.regulatoryRuleApprovals || []).length > 0),
    () => ok('部署', (D.regulatoryRuleDeployments || []).length > 0),
    () => ok('执行结果', (D.regulatoryRuleExecutions || []).length > 0 || (D.regulatoryRuleExecutionMetrics || {}).totalExecutions > 0),
    () => ok('效果评价', (D.regulatoryRuleEffectiveness || []).length > 0)
  ]),
  validatePath('场景6：数据质量异常影响监管', D.regulatoryBusinessScenarios.find(s => s.scenarioId === 'BS-06')?.pagePath || [], [
    () => ok('数据源', (D.regulatoryDataSources || []).length > 0),
    () => ok('接入', (D.regulatoryDataIntegrationJobs || []).length > 0),
    () => ok('数据质量', (D.regulatoryDataQualityIssues || []).length > 0),
    () => ok('血缘', (D.regulatoryDataLineage || []).length > 0),
    () => ok('KRI关联', (D.regulatoryDataQualityIssues || []).some(i => i.kriId)),
    () => ok('数据治理', (D.regulatoryDataGovernanceTasks || []).length > 0)
  ]),
  validatePath('场景7：监管效果不佳持续改进', D.regulatoryBusinessScenarios.find(s => s.scenarioId === 'BS-07')?.pagePath || [], [
    () => ok('监管绩效', (D.regulatoryPerformanceMetrics || []).length > 0),
    () => ok('改进机会', (D.regulatoryImprovementOpportunities || []).length > 0),
    () => ok('潜在根因', (D.regulatoryRootCauseAnalyses || []).every(r => r.rootCauseStatus === 'POTENTIAL_ROOT_CAUSE' || r.rootCauseStatus === 'CONFIRMED_ROOT_CAUSE')),
    () => ok('优化方案', (D.regulatoryOptimizationPlans || []).every(p => p.requiresHumanDecision === true)),
    () => ok('实施', (D.regulatoryImprovementExecution || []).length > 0),
    () => ok('效果验证', (D.regulatoryImprovementEffectiveness || []).some(e => e.dataStatus === 'INSUFFICIENT_HISTORY'))
  ]),
  validatePath('场景8：高风险操作权限控制', D.regulatoryBusinessScenarios.find(s => s.scenarioId === 'BS-08')?.pagePath || [], [
    () => ok('用户', (D.regulatoryUsers || []).length > 0),
    () => ok('角色', (D.regulatoryRoleProfiles || []).length > 0),
    () => ok('数据范围', (D.regulatoryScopeMatrix || []).length > 0),
    () => ok('权限集', (D.regulatoryPermissionSets || []).length > 0),
    () => ok('授权审批', (D.regulatoryAuthorizationRequests || []).length > 0),
    () => ok('审计能力', (D.regulatoryPermissionSets || []).some(p => p.resourceType === 'regulatoryAuditLogs'))
  ])
];

const pathIds = new Set();
chains.forEach(c => (D.regulatoryBusinessScenarios.find(s => s.name === c.name.replace(/^场景\d：/, ''))?.pagePath || []).forEach(p => pathIds.add(p)));

const dataResults = chains.map(chain => ({
  name: chain.name,
  pass: chain.steps.every(fn => fn().pass),
  steps: chain.steps.map(fn => fn())
}));

const roleJourneys = [
  { roleId: 'ROLE-GROUP-LEADER', label: 'GROUP_LEADER' },
  { roleId: 'ROLE-GROUP-REG', label: 'GROUP_REGULATORY' },
  { roleId: 'ROLE-DOMAIN-REG', label: 'DOMAIN_REGULATOR' },
  { roleId: 'ROLE-ENTITY-REG', label: 'ENTITY_REGULATOR' }
].map(r => {
  const path = (D.regulatoryRolePaths || []).find(p => p.roleId === r.roleId);
  return {
    role: r.label,
    pass: path && path.path.length >= 5 && path.path.every(pid => pageIds.has(pid) || pid === 'group'),
    steps: path ? path.path.length : 0,
    path: path?.path || []
  };
});

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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.validateBusinessScenario, { timeout: 12000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); App.finalizeRegulatoryPlatform(); });

  const scenarioWalk = await page.evaluate(async () => {
    const scenarios = APP_DATA.regulatoryBusinessScenarios || [];
    const results = [];
    for (const s of scenarios) {
      App.publicNavHistory = [];
      let ok = true;
      for (const pid of (s.pagePath || []).slice(0, 4)) {
        App.navigatePublic(pid);
        await new Promise(r => setTimeout(r, 60));
      }
      const v = App.validateBusinessScenario(s.scenarioId);
      results.push({ id: s.scenarioId, valid: v.valid, steps: v.stepCount });
      if (!v.valid) ok = false;
    }
    return { allValid: results.every(r => r.valid), results };
  });

  const roleWalk = await page.evaluate(async () => {
    const roles = ['ROLE-GROUP-LEADER', 'ROLE-GROUP-REG', 'ROLE-DOMAIN-REG', 'ROLE-ENTITY-REG'];
    const results = [];
    for (const rid of roles) {
      App.setRegulatoryRole(rid);
      const v = App.validateRoleJourney(rid);
      const path = (APP_DATA.regulatoryRolePaths || []).find(r => r.roleId === rid);
      App.publicNavHistory = [];
      App.navigatePublic('regulatory-role-workbench');
      await new Promise(r => setTimeout(r, 80));
      for (const pid of (path?.path || []).slice(0, 4)) {
        App.navigatePublic(pid);
        await new Promise(r => setTimeout(r, 60));
      }
      const canBack = (App.publicNavHistory || []).length > 0;
      results.push({ roleId: rid, valid: v.valid, canBack, steps: v.stepCount });
    }
    return { allValid: results.every(r => r.valid && r.canBack), results };
  });

  const traceTest = await page.evaluate(() => {
    const act = (APP_DATA.regulatoryActions || [])[0];
    const rect = (APP_DATA.rectificationTasks || [])[0];
    const aTrace = act ? App.traceRegulatoryActionSources(act.actionId) : { found: false };
    const rTrace = rect ? App.traceRectificationTaskSources(rect.taskId) : { found: false };
    return { actionTrace: aTrace.found && aTrace.chain.length > 0, rectTrace: rTrace.found };
  });

  const permTest = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-ENTITY-REG');
    const other = (APP_DATA.regulatoryImprovementOpportunities || []).find(o => o.entityId && o.entityId !== 'A001');
    const denied = other ? !App.canRegulatoryAccess('U-ENTITY-REG', 'regulatoryImprovementOpportunities', other.opportunityId, 'VIEW').allowed : true;
    const badge = App.renderPublicPermissionDenied('测试拒绝', { suggestAuth: true });
    return { denied, hasPermissionUI: badge.includes('权限不足') };
  });

  const workbenchUI = await page.evaluate(async () => {
    App.navigatePublic('regulatory-workbench');
    await new Promise(r => setTimeout(r, 120));
    const text = document.getElementById('regulatoryWorkbench')?.innerText || '';
    return { scenarios: text.includes('核心业务场景'), health: text.includes('平台运行健康度'), map: text.includes('能力地图') };
  });

  const roleUI = await page.evaluate(async () => {
    App.setRegulatoryRole('ROLE-GROUP-LEADER');
    App.navigatePublic('regulatory-role-workbench');
    await new Promise(r => setTimeout(r, 120));
    const text = document.getElementById('regulatoryRoleWorkbench')?.innerText || '';
    return { journey: text.includes('角色默认路径') };
  });

  const humanDecisionFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const rca = (APP_DATA.regulatoryRootCauseAnalyses || []).find(r => r.rootCauseStatus === 'POTENTIAL_ROOT_CAUSE');
    const confirm = rca ? App.confirmRegulatoryRootCause(rca.rootCauseId, rca.potentialRootCause, 'E2E') : null;
    const auditAfter = (APP_DATA.regulatoryAuditLogs || []).length;
    return { confirmed: confirm?.success, auditWritten: auditAfter > 0 };
  });

  await browser.close();
  server.close();

  return {
    scenarioWalk: scenarioWalk.allValid ? '通过' : '不通过',
    scenarioWalkDetail: scenarioWalk,
    roleWalk: roleWalk.allValid ? '通过' : '不通过',
    roleWalkDetail: roleWalk,
    traceTest: (traceTest.actionTrace && traceTest.rectTrace) ? '通过' : '不通过',
    traceTestDetail: traceTest,
    permTest: (permTest.denied && permTest.hasPermissionUI) ? '通过' : '不通过',
    workbenchUI: (workbenchUI.scenarios && workbenchUI.health && workbenchUI.map) ? '通过' : '不通过',
    roleUI: roleUI.journey ? '通过' : '不通过',
    humanDecisionFlow: (humanDecisionFlow.confirmed && humanDecisionFlow.auditWritten) ? '通过' : '不通过'
  };
}

(async () => {
  const summary = dataResults.map((r, i) => ({
    test: `场景 ${i + 1}`, name: r.name, result: r.pass ? '通过' : '不通过',
    failedSteps: r.steps.filter(s => !s.pass)
  }));
  const roleSummary = roleJourneys.map(r => ({ role: r.role, result: r.pass ? '通过' : '不通过', steps: r.steps }));

  let browserResult;
  try { browserResult = await browserTests(); } catch (e) {
    browserResult = { error: String(e), scenarioWalk: '不通过', roleWalk: '不通过', traceTest: '不通过', permTest: '不通过', workbenchUI: '不通过', roleUI: '不通过', humanDecisionFlow: '不通过' };
  }

  const browserKeys = ['scenarioWalk', 'roleWalk', 'traceTest', 'permTest', 'workbenchUI', 'roleUI', 'humanDecisionFlow'];
  const allDataPass = summary.every(s => s.result === '通过') && roleSummary.every(r => r.result === '通过');
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');

  const output = {
    businessScenarioTests: summary,
    roleJourneyTests: roleSummary,
    browserTests: browserResult,
    allPass: allDataPass && allBrowserPass
  };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
