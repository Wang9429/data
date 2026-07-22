#!/usr/bin/env node
/**
 * Phase 22 — 8 条完整业务链 E2E 验收
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
    name: '场景一：数据质量驱动监管',
    steps: [
      () => ok('数据源', (D.regulatoryDataSources || []).length > 0),
      () => ok('数据质量', (D.regulatoryDataQualityIssues || []).length > 0),
      () => ok('KRI可信度', (D.regulatoryKriRuntime || []).some(k => k.credibilityScore != null)),
      () => ok('KRI预警', (D.regulatoryWarnings || []).length > 0),
      () => ok('风险研判', (D.regulatoryAnalysisResults || []).length > 0 || (D.regulatoryDecisionRecommendations || []).length > 0),
      () => ok('监管行动', (D.regulatoryActions || []).length > 0),
      () => ok('整改', (D.rectificationTasks || []).length > 0),
      () => ok('验证', (D.regulatoryActionExecutionMetrics || {}).waitingVerification != null || (D.regulatoryActions || []).some(a => a.status === 'VERIFIED'))
    ]
  },
  {
    name: '场景二：规则治理',
    steps: [
      () => ok('规则变更', (D.regulatoryRuleChangeRequests || []).length > 0),
      () => ok('仿真', (D.regulatorySimulations || []).some(s => s.simulationOnly === true)),
      () => ok('影响分析', (D.regulatoryRuleImpactAnalysis || []).length > 0),
      () => ok('审批', (D.regulatoryRuleApprovals || []).length > 0),
      () => ok('发布', (D.regulatoryRuleVersions || []).length > 0),
      () => ok('部署', (D.regulatoryRuleDeployments || []).length > 0),
      () => ok('生产运行', (D.regulatoryRuleExecutionMetrics || {}).productionRules > 0),
      () => ok('效果评价', (D.regulatoryRuleEffectiveness || []).length > 0)
    ]
  },
  {
    name: '场景三：重大风险监管',
    steps: [
      () => ok('法人', (D.globalLegalEntities || []).length > 0),
      () => ok('风险集中度', (D.regulatoryRiskConcentration || []).length > 0),
      () => ok('风险传导', (D.regulatoryRiskPropagation || []).length > 0),
      () => ok('预警', (D.regulatoryWarnings || []).length > 0),
      () => ok('决策建议', (D.regulatoryDecisionRecommendations || []).length > 0),
      () => ok('监管行动', (D.regulatoryActions || []).length > 0)
    ]
  },
  {
    name: '场景四：监管资源调度',
    steps: [
      () => ok('风险发现', (D.warnings || []).length > 0),
      () => ok('优先级', (D.regulatoryPriorityObjects || []).length > 0),
      () => ok('资源调度', (D.regulatoryResourceAllocations || []).length > 0),
      () => ok('监管任务', (D.regulatorySupervisionTasks || []).length > 0),
      () => ok('整改', (D.rectificationTasks || []).length > 0),
      () => ok('绩效评价', (D.regulatoryPerformanceMetrics || []).length > 0)
    ]
  },
  {
    name: '场景五：战略执行',
    steps: [
      () => ok('战略目标', (D.regulatoryStrategicObjectives || []).length > 0),
      () => ok('年度重点', (D.regulatoryStrategicFocus || []).length > 0),
      () => ok('年度计划', (D.regulatoryAnnualPlans || []).length > 0),
      () => ok('目标执行', (D.regulatoryPlanExecution || []).length > 0),
      () => ok('战略复盘', (D.regulatoryStrategicReview || []).length > 0),
      () => ok('下周期建议', (D.regulatoryNextCycleRecommendations || []).length > 0)
    ]
  },
  {
    name: '场景六：持续改进',
    steps: [
      () => ok('监管效果', (D.regulatoryImprovementEffectiveness || []).length > 0),
      () => ok('改进机会', (D.regulatoryImprovementOpportunities || []).length > 0),
      () => ok('根因分析', (D.regulatoryRootCauseAnalyses || []).length > 0),
      () => ok('优化方案', (D.regulatoryOptimizationPlans || []).length > 0),
      () => ok('人工批准', (D.regulatoryOptimizationPlans || []).every(p => p.requiresHumanDecision === true)),
      () => ok('改进实施', (D.regulatoryImprovementExecution || []).length > 0),
      () => ok('效果验证', (D.regulatoryImprovementEffectiveness || []).length > 0)
    ]
  },
  {
    name: '场景七：权限审计',
    steps: [
      () => ok('用户', (D.regulatoryUsers || []).length > 0),
      () => ok('角色', (D.regulatoryRoleProfiles || []).length > 0),
      () => ok('数据范围', (D.regulatoryScopeMatrix || []).length > 0),
      () => ok('权限校验', (D.regulatoryPermissionSets || []).length > 0),
      () => ok('高风险操作', (D.regulatoryPermissionSets || []).some(p => p.riskLevel === 'HIGH')),
      () => ok('授权审批', (D.regulatoryAuthorizationRequests || []).length > 0),
      () => ok('审计日志', (D.regulatoryPermissionSets || []).some(p => p.resourceType === 'regulatoryAuditLogs') && Array.isArray(D.regulatoryAuditLogs))
    ]
  },
  {
    name: '场景八：集团领导决策',
    steps: [
      () => ok('集团总览', (D.publicRegulatorySummary || {}).entityCount != null),
      () => ok('综合态势', (D.regulatoryAnalysisMetrics || {}).compositeHealthScore != null || (D.regulatoryAnalysisMetrics || {}).pendingRecommendationCount != null),
      () => ok('重点风险', (D.warnings || []).length > 0),
      () => ok('决策建议', (D.regulatoryDecisionRecommendations || []).length > 0),
      () => ok('资源调度', (D.regulatoryResourceAllocations || []).length > 0),
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.finalizeRegulatoryPlatform, { timeout: 12000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const capabilityMap = await page.evaluate(() => {
    App.finalizeRegulatoryPlatform();
    const map = APP_DATA.regulatoryCapabilityMap || [];
    return { count: map.length, domains: [...new Set(map.map(m => m.capabilityDomain))].length, allHaveEntry: map.every(m => m.primaryEntry && m.parentEntry) };
  });

  const unifiedStatus = await page.evaluate(() => ({
    badge: typeof App.renderPublicUnifiedStatusBadge === 'function',
    label: App.getPublicUnifiedStatusLabel('INSUFFICIENT_HISTORY') === '历史数据不足',
    breadcrumb: App.renderPublicBreadcrumb('regulatory-workbench').includes('集团监管平台')
  }));

  const commandCenter = await page.evaluate(async () => {
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { layered: text.includes('驾驶舱分层导航'), health: text.includes('平台运行健康度') };
  });

  const workbench = await page.evaluate(async () => {
    App.navigatePublic('regulatory-workbench');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryWorkbench')?.innerText || '';
    return { capabilityMap: text.includes('能力地图'), platformHealth: text.includes('平台运行健康度') };
  });

  const rolePath = await page.evaluate(() => {
    const paths = APP_DATA.regulatoryRolePaths || [];
    return { count: paths.length, leaderOk: paths.find(p => p.roleId === 'ROLE-GROUP-LEADER')?.path?.length >= 5 };
  });

  const closureChain = await page.evaluate(() => ({
    chains: (APP_DATA.regulatoryClosureChains || []).length,
    dataChain: (APP_DATA.regulatoryClosureChains || []).some(c => c.chainId === 'CHAIN-DATA')
  }));

  await browser.close();
  server.close();

  return {
    capabilityMap: (capabilityMap.count === 70 && capabilityMap.domains === 8 && capabilityMap.allHaveEntry) ? '通过' : '不通过',
    capabilityMapDetail: capabilityMap,
    unifiedStatus: (unifiedStatus.badge && unifiedStatus.label && unifiedStatus.breadcrumb) ? '通过' : '不通过',
    commandCenter: (commandCenter.layered && commandCenter.health) ? '通过' : '不通过',
    workbench: (workbench.capabilityMap && workbench.platformHealth) ? '通过' : '不通过',
    rolePath: (rolePath.count === 4 && rolePath.leaderOk) ? '通过' : '不通过',
    closureChain: (closureChain.chains >= 8 && closureChain.dataChain) ? '通过' : '不通过'
  };
}

(async () => {
  const summary = dataResults.map((r, i) => ({
    scenario: `场景 ${i + 1}`, name: r.name, result: r.pass ? '通过' : '不通过',
    failedSteps: r.steps.filter(s => !s.pass)
  }));
  let browserResult;
  try { browserResult = await browserTests(); } catch (e) {
    browserResult = { error: String(e), capabilityMap: '不通过', unifiedStatus: '不通过', commandCenter: '不通过', workbench: '不通过', rolePath: '不通过', closureChain: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['capabilityMap', 'unifiedStatus', 'commandCenter', 'workbench', 'rolePath', 'closureChain'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { scenarioTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
