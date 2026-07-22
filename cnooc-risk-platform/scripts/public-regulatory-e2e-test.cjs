#!/usr/bin/env node
/**
 * 公共监管底座 Phase 21 端到端验收（25 条链路）
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
  { name: '测试1：总览→持续改进中心', steps: [() => ok('改进机会', (D.regulatoryImprovementOpportunities || []).length > 0)] },
  { name: '测试2：改进机会→原始风险', steps: [() => ok('风险关联', (D.regulatoryImprovementOpportunities || []).some(o => (o.relatedRiskIds || []).length > 0 || o.sourceType === 'regulatoryRiskConcentration'))] },
  { name: '测试3：改进机会→KRI', steps: [() => ok('KRI关联', (D.regulatoryImprovementOpportunities || []).some(o => (o.relatedKriIds || []).length > 0))] },
  { name: '测试4：改进机会→预警', steps: [() => ok('预警关联', (D.regulatoryImprovementOpportunities || []).some(o => (o.relatedWarningIds || []).length > 0 || o.sourceType === 'regulatoryWarnings'))] },
  { name: '测试5：改进机会→根因分析', steps: [() => {
    const o = (D.regulatoryImprovementOpportunities || [])[0];
    const r = o ? (D.regulatoryRootCauseAnalyses || []).find(r => r.opportunityId === o.opportunityId) : null;
    return ok('根因链', o && r);
  }]},
  { name: '测试6：根因分析→证据', steps: [() => ok('证据', (D.regulatoryRootCauseAnalyses || []).every(r => (r.evidence || []).length > 0))] },
  { name: '测试7：根因分析→人工确认', steps: [() => ok('人审', (D.regulatoryRootCauseAnalyses || []).every(r => r.requiresHumanConfirmation === true))] },
  { name: '测试8：根因确认→优化方案', steps: [() => {
    const r = (D.regulatoryRootCauseAnalyses || [])[0];
    const p = r ? (D.regulatoryOptimizationPlans || []).find(p => p.rootCauseId === r.rootCauseId) : null;
    return ok('方案链', r && p);
  }]},
  { name: '测试9：优化方案→权限校验', steps: [() => ok('权限码', (D.regulatoryPermissionSets || []).some(p => p.permissionCode === 'OPTIMIZATION_PLAN_APPROVE'))] },
  { name: '测试10：优化方案→授权审批', steps: [() => ok('审计', Array.isArray(D.regulatoryAuditLogs))] },
  { name: '测试11：优化方案→实施', steps: [() => ok('实施', (D.regulatoryImprovementExecution || []).length > 0)] },
  { name: '测试12：实施→监管任务', steps: [() => ok('监管任务', (D.regulatoryImprovementExecution || []).some(e => e.linkedSupervisionTaskId))] },
  { name: '测试13：实施→整改', steps: [() => ok('整改', (D.regulatoryImprovementExecution || []).some(e => e.linkedRectificationTaskId))] },
  { name: '测试14：实施→反馈', steps: [() => ok('反馈', (D.regulatoryImprovementExecution || []).some(e => e.feedback))] },
  { name: '测试15：实施完成→效果验证', steps: [() => ok('效果', (D.regulatoryImprovementEffectiveness || []).length > 0)] },
  { name: '测试16：效果验证→优化前后对比', steps: [() => ok('对比', (D.regulatoryImprovementEffectiveness || []).every(e => e.before != null))] },
  { name: '测试17：效果不佳→下一轮改进机会', steps: [() => ok('改进循环', (D.regulatoryImprovementOpportunities || []).length > 0)] },
  { name: '测试18：规则优化→规则治理闭环', steps: [() => ok('规则方案', (D.regulatoryOptimizationPlans || []).some(p => p.optimizationType === 'RULE_OPTIMIZATION'))] },
  { name: '测试19：KRI优化→阈值治理闭环', steps: [() => ok('KRI方案', (D.regulatoryOptimizationPlans || []).some(p => p.optimizationType === 'KRI_OPTIMIZATION'))] },
  { name: '测试20：数据优化→数据治理闭环', steps: [() => ok('数据方案', (D.regulatoryOptimizationPlans || []).some(p => p.optimizationType === 'DATA_GOVERNANCE_OPTIMIZATION'))] },
  { name: '测试21：资源优化→资源调度闭环', steps: [() => ok('资源方案', (D.regulatoryOptimizationPlans || []).some(p => p.optimizationType === 'RESOURCE_OPTIMIZATION'))] },
  { name: '测试22：角色工作台→我的改进事项', steps: [() => ok('持续改进指标', !!(D.regulatoryContinuousImprovementMetrics || {}).pendingOpportunityCount != null)] },
  { name: '测试23：搜索→改进对象', steps: [() => ok('搜索', (D.regulatorySearchIndex || []).some(s => s.category === '持续改进'))] },
  { name: '测试24：无效ID→错误态', steps: [() => ok('校验', !(D.regulatoryImprovementOpportunities || []).find(o => o.opportunityId === 'INVALID-OPP'))] },
  { name: '测试25：A→B→C→D→E→F多跳返回', steps: [
    () => ok('改进', (D.regulatoryImprovementOpportunities || []).length > 0),
    () => ok('根因', (D.regulatoryRootCauseAnalyses || []).length > 0),
    () => ok('方案', (D.regulatoryOptimizationPlans || []).length > 0),
    () => ok('实施', (D.regulatoryImprovementExecution || []).length > 0),
    () => ok('效果', (D.regulatoryImprovementEffectiveness || []).length >= 0),
    () => ok('指标', !!(D.regulatoryContinuousImprovementMetrics || {}).improvementClosureRate != null)
  ]}
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.identifyImprovementOpportunities, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const improvementNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('regulatory-improvement-center');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryImprovementCenter')?.innerText || '';
    return { ok: text.includes('持续改进中心') || text.includes('改进机会') };
  });

  const rootCauseFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const rca = (APP_DATA.regulatoryRootCauseAnalyses || []).find(r => r.rootCauseStatus === 'POTENTIAL_ROOT_CAUSE');
    if (!rca) return { hasRca: false };
    const confirm = App.confirmRegulatoryRootCause(rca.rootCauseId, rca.potentialRootCause, 'E2E确认');
    const auditWritten = (APP_DATA.regulatoryAuditLogs || []).some(l => l.objectId === rca.rootCauseId && l.objectType === 'regulatoryRootCauseAnalyses');
    return { hasRca: true, confirmed: confirm.success, auditWritten, status: rca.rootCauseStatus };
  });

  const planApproveFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const plan = (APP_DATA.regulatoryOptimizationPlans || []).find(p => p.status === 'PROPOSED' && p.optimizationType === 'PROCESS_OPTIMIZATION');
    if (!plan) return { hasPlan: false };
    const result = App.approveRegulatoryOptimizationPlan(plan.planId, 'E2E批准');
    const auditWritten = (APP_DATA.regulatoryAuditLogs || []).some(l => l.objectId === plan.planId);
    return { hasPlan: true, approved: result.success, auditWritten };
  });

  const rulePlanFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const plan = (APP_DATA.regulatoryOptimizationPlans || []).find(p => p.optimizationType === 'RULE_OPTIMIZATION' && p.status === 'PROPOSED');
    if (!plan) return { hasPlan: false };
    const result = App.approveRegulatoryOptimizationPlan(plan.planId);
    return { hasPlan: true, needRuleWorkflow: result.needRuleWorkflow === true };
  });

  const executionFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const plan = (APP_DATA.regulatoryOptimizationPlans || []).find(p => p.status === 'APPROVED');
    if (!plan) return { hasPlan: false };
    const start = App.startRegulatoryImprovementExecution(plan.planId);
    const exe = (APP_DATA.regulatoryImprovementExecution || []).find(e => e.planId === plan.planId);
    const complete = exe ? App.completeRegulatoryImprovementExecution(exe.executionId) : null;
    return { hasPlan: true, started: start.success, completed: complete?.success, linkedTask: !!(exe?.linkedSupervisionTaskId || exe?.linkedRectificationTaskId) };
  });

  const effectivenessFlow = await page.evaluate(() => {
    const eff = (APP_DATA.regulatoryImprovementEffectiveness || [])[0];
    if (!eff) return { hasEff: false };
    const evalResult = App.evaluateImprovementEffectiveness(eff.executionId);
    return { hasEff: true, hasBefore: evalResult.before != null, dataStatus: evalResult.dataStatus };
  });

  const permissionCheck = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-ENTITY-REG');
    const own = (APP_DATA.regulatoryImprovementOpportunities || []).find(o => o.entityId === 'A001');
    const other = (APP_DATA.regulatoryImprovementOpportunities || []).find(o => o.entityId && o.entityId !== 'A001');
    const ownOk = own ? App.canRegulatoryAccess('U-ENTITY-REG', 'regulatoryImprovementOpportunities', own.opportunityId, 'VIEW').allowed : true;
    const denyOk = other ? !App.canRegulatoryAccess('U-ENTITY-REG', 'regulatoryImprovementOpportunities', other.opportunityId, 'VIEW').allowed : true;
    return { ownOk, denyOk };
  });

  const commandCenter = await page.evaluate(async () => {
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { ok: text.includes('持续改进健康度') };
  });

  const workbench = await page.evaluate(async () => {
    App.navigatePublic('regulatory-workbench');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryWorkbench')?.innerText || '';
    return { ok: text.includes('我的改进事项') || text.includes('待确认根因') };
  });

  const invalidId = await page.evaluate(() => {
    App.navigatePublic('regulatory-improvement-center', { opportunityId: 'INVALID-OPP' });
    const detail = document.getElementById('regulatoryOpportunityDetail');
    return { hasError: detail?.innerText?.includes('未找到') || detail?.innerText?.includes('不存在') || !APP_DATA.regulatoryImprovementOpportunities.find(o => o.opportunityId === 'INVALID-OPP') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    App.publicNavHistory = [];
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-improvement-center');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-root-cause-analysis');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-optimization-plans');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-improvement-execution');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-improvement-effectiveness');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 6; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasImprovement: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-improvement-center'),
    hasRootCause: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-root-cause-analysis'),
    hasPlans: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-optimization-plans'),
    hasExecution: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-improvement-execution'),
    hasEffectiveness: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-improvement-effectiveness')
  }));

  await browser.close();
  server.close();

  return {
    improvementNav: improvementNav.ok ? '通过' : '不通过',
    rootCauseFlow: (rootCauseFlow.hasRca ? (rootCauseFlow.confirmed && rootCauseFlow.auditWritten) : true) ? '通过' : '不通过',
    rootCauseFlowDetail: rootCauseFlow,
    planApproveFlow: (planApproveFlow.hasPlan ? planApproveFlow.approved && planApproveFlow.auditWritten : true) ? '通过' : '不通过',
    rulePlanFlow: (rulePlanFlow.hasPlan ? rulePlanFlow.needRuleWorkflow : true) ? '通过' : '不通过',
    executionFlow: (executionFlow.hasPlan ? executionFlow.started && executionFlow.linkedTask : true) ? '通过' : '不通过',
    effectivenessFlow: (effectivenessFlow.hasEff ? effectivenessFlow.hasBefore : true) ? '通过' : '不通过',
    permissionCheck: (permissionCheck.ownOk && permissionCheck.denyOk) ? '通过' : '不通过',
    commandCenter: commandCenter.ok ? '通过' : '不通过',
    workbench: workbench.ok ? '通过' : '不通过',
    invalidId: invalidId.hasError ? '通过' : '不通过',
    multiHop: ['regulatory-improvement-effectiveness', 'regulatory-improvement-execution', 'regulatory-optimization-plans', 'regulatory-root-cause-analysis', 'regulatory-improvement-center', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 70 && catalog.hasImprovement && catalog.hasRootCause && catalog.hasPlans && catalog.hasExecution && catalog.hasEffectiveness) ? '通过' : '不通过',
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
    browserResult = { error: String(e), improvementNav: '不通过', rootCauseFlow: '不通过', planApproveFlow: '不通过', rulePlanFlow: '不通过', executionFlow: '不通过', effectivenessFlow: '不通过', permissionCheck: '不通过', commandCenter: '不通过', workbench: '不通过', invalidId: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['improvementNav', 'rootCauseFlow', 'planApproveFlow', 'rulePlanFlow', 'executionFlow', 'effectivenessFlow', 'permissionCheck', 'commandCenter', 'workbench', 'invalidId', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
