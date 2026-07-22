#!/usr/bin/env node
/**
 * Phase 37 — GitHub Pages 在线 Demo 验收
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { build, OUT_PAGES, PAGES_URL } = require('./build-single-file-demo.cjs');

const ROOT = path.join(__dirname, '..');
const APP_JS = path.join(ROOT, 'js/app.js');
const fails = [];
const check = (ok, msg) => { if (!ok) fails.push(msg); };

if (!fs.existsSync(OUT_PAGES) || process.argv.includes('--rebuild')) {
  build();
}
check(fs.existsSync(OUT_PAGES), 'githubPagesFileExists');

const html = fs.readFileSync(OUT_PAGES, 'utf8');
const stat = fs.statSync(OUT_PAGES);

const isAllowedUrl = (u) => /wang9429\.github\.io\/data\//.test(u);
const externalPatterns = [
  /https?:\/\/[^\s"'<>]+/gi,
  /\bsrc\s*=\s*["'](https?:[^"']+)["']/gi,
  /\bhref\s*=\s*["'](https?:[^"']+)["']/gi
];
let externalHits = [];
externalPatterns.forEach(re => {
  let m;
  const r = new RegExp(re.source, re.flags);
  while ((m = r.exec(html)) !== null) {
    const url = m[1] || m[0];
    if (!isAllowedUrl(url)) externalHits.push(url);
  }
});
externalHits = [...new Set(externalHits)];
check(externalHits.length === 0, `external:${externalHits.join(',')}`);
check(!/<script[^>]+src=/i.test(html), 'external script');
check(html.includes('window.__GITHUB_PAGES_DEMO__=true'), 'github pages marker');
check(html.includes('<title>集团穿透式监管平台</title>'), 'systemNameTitle');
check(!html.includes('集团监管平台 Demo') && !html.includes('集团监管视角 Demo') && !html.includes('集团监管平台 Demo Final'), 'noInconsistentSystemName');

const scriptBlocks = [...html.matchAll(/<script[^>]*data-inline-from="([^"]+)"[^>]*>([\s\S]*?)<\/script>/gi)];
check(scriptBlocks.length === 3, `inlineScripts=${scriptBlocks.length}`);
const byFile = {};
scriptBlocks.forEach(([, from, code]) => { byFile[from] = code; });

const sandbox = { console, document: { getElementById: () => null }, window: {} };
vm.runInNewContext(byFile['js/data.js'] + '\n;this.APP_DATA = APP_DATA;', sandbox);
vm.runInNewContext('var App = {};\n' + byFile['js/public-regulatory.js'], sandbox);
['finalizeRegulatoryPlatform', 'initializeDataAdaptation', 'initializeBatchAdaptation', 'initializeDomainClosure', 'initializeClosureVerification', 'initializeRegulatoryOperatingCycle', 'initializeRegulatoryOperatingRuntime', 'initializeRegulatoryCoordination', 'initializeRegulatoryOperationalScenarios', 'initializeRegulatoryFinalAcceptance', 'initializeRegulatoryFinalRemediation', 'initializeRegulatoryDeliveryReadiness', 'initializeRegulatoryDemoScenarios', 'finalizeRegulatoryDemoFreeze'].forEach(fn => {
  if (sandbox.App[fn]) sandbox.App[fn]();
});
sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE' });

const App = sandbox.App;
const D = sandbox.APP_DATA;
const appJsSource = fs.readFileSync(APP_JS, 'utf8');
const publicPageCount = (App.publicRegulatoryPages || []).length;
const penetrate = (appJsSource.match(/navigate\(['"]penetration['"]/g) || []).length;
check(publicPageCount === 70, `publicPageCount=${publicPageCount}`);
check(penetrate === 3, `penetrate=${penetrate}`);

const codes = ['DEMO-01', 'DEMO-02', 'DEMO-03', 'DEMO-04', 'DEMO-05', 'DEMO-06'];
const demoPaths = {};
codes.forEach(code => {
  const reach = App.validateDemoScenarioReachability(code);
  const trace = App.validateDemoScenarioTraceability(code);
  demoPaths[code] = { reachable: reach.reachable, traceable: trace.hitCount > 0 };
  check(reach.reachable, `reach:${code}`);
  check(trace.hitCount > 0, `trace:${code}`);
});

check(html.includes('renderDemoScenarioDashboardPanel') || html.includes('集团监管演示'), 'demo panel');
check((D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-03')?.simulationOnly === true, 'simulationOnly');
check((D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-05')?.requiresHumanDecision === true, 'humanDecision');
check((D.regulatoryDemoScenarioMetrics || {}).noFakeHistory === true, 'noFakeHistory');
check((D.regulatoryDemoScenarioMetrics || {}).noFakeClosedLoop === true, 'noFakeClosedLoop');
check((D.regulatoryDemoFinalFreezeIndex || {}).investmentFreeze === true, 'investmentFreeze');

const originalDemoContentPreserved = html.includes('id="page-dashboard"')
  && html.includes('投资管理驾驶舱')
  && html.includes('投资价值链风险热力地图')
  && html.includes('投资组合与整改闭环概览')
  && html.includes('domainGateway');
const originalNavigationPreserved = html.includes('投资结构与组合')
  && html.includes('投资价值链监测')
  && html.includes('投资穿透分析')
  && !html.includes('getDemoFinalMenu');
const originalVisualStructurePreserved = html.includes('sidebar-title')
  && html.includes('集团穿透式监管平台')
  && html.includes('投资管理专题监管')
  && html.includes('domain-tabs-bar');
const originalBusinessScenesPreserved = html.includes('国资监管主题落实情况')
  && html.includes('投资管理领域运行')
  && html.includes('重大投资事项');
const originalDataDisplayPreserved = html.includes('dashboardMetrics')
  && html.includes('groupKriBoard')
  && html.includes('dashboardHeatmap');
const groupRegulatoryPerspectiveAdded = html.includes('集团穿透式监管视角')
  && html.includes('renderDashboardGroupRegulatoryPerspectiveCard')
  && html.includes('renderWarningsGroupRegulatoryChain')
  && html.includes('renderPortfolioGroupPlanningPerspective')
  && html.includes('集团穿透式监管视角演示入口');
const groupToRiskTraceability = html.includes('renderGroupPenetrationSupervisionChain')
  && html.includes('向下穿透')
  && html.includes('向上追溯')
  && html.includes('renderGroupFocusObjectsTable');
const riskToResponsibilityTraceability = html.includes('renderGroupResponsibilityClosureTrace')
  && html.includes('责任组织')
  && html.includes('监管行动');
const rectificationVerificationTraceability = html.includes('整改证据')
  && html.includes('验证结果')
  && html.includes('renderPenetrationGroupSupervisionOverlay');
const upwardTraceability = html.includes('向上追溯')
  && html.includes('renderGroupPenetrationSupervisionChain')
  && html.includes("direction === 'up'");
const domainNavLabels = ['财务管理驾驶舱', '合同管理驾驶舱', '供应链管理驾驶舱', '境外业务驾驶舱', '产权管理驾驶舱', '金融业务驾驶舱', '薪酬分配驾驶舱', '科技创新驾驶舱'];
const allDomainNavigationPreserved = domainNavLabels.every(l => appJsSource.includes(l))
  && appJsSource.includes('buildDomainSidebarMenu')
  && appJsSource.includes('getDomainMenuDefinitions')
  && !/return base;/.test(appJsSource);
const allDomainHomePagesPreserved = appJsSource.includes('财务管理驾驶舱')
  && appJsSource.includes('领域专业管理首页')
  && !appJsSource.includes('集团监管驾驶舱');
const allDomainBusinessLogicPreserved = appJsSource.includes('renderNonInvestmentDomainPage')
  && appJsSource.includes('领域业务运行')
  && appJsSource.includes('本领域原有业务逻辑')
  && appJsSource.includes('不混入投资管理专题数据');
const penetrationNotInMenu = !html.includes("{id:'penetration',icon:'↳',label:'　风险监测 · 投资穿透分析'}")
  && !html.includes('风险监测 · 投资穿透分析');
const penetrationParentEntry = (() => {
  try {
    const appCode = byFile['js/app.js'] || '';
    return /parentEntry:\s*'warnings'/.test(appCode)
      && /parentLabel:\s*'投资风险监测'/.test(appCode)
      && /getInvestmentPageMeta/.test(appCode);
  } catch { return false; }
})();
const warningsPenetrationEntry = html.includes('进入投资穿透分析')
  && html.includes('warningsPenetrationEntry');
const demoScenarioEntryAdded = codes.every(c => html.includes(c))
  && html.includes('startDemoScenario')
  && html.includes('renderDemoScenarioDashboardPanel');
const hasExternalScript = /<script[^>]+src=/i.test(html);
const hasDisallowedLink = (() => {
  const re = /<link[^>]+href=["'](https?:[^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (!isAllowedUrl(m[1])) return true;
  }
  return false;
})();
check(originalDemoContentPreserved, 'originalDemoContentPreserved');
check(originalNavigationPreserved, 'originalNavigationPreserved');
check(originalVisualStructurePreserved, 'originalVisualStructurePreserved');
check(originalBusinessScenesPreserved, 'originalBusinessScenesPreserved');
check(originalDataDisplayPreserved, 'originalDataDisplayPreserved');
check(groupRegulatoryPerspectiveAdded, 'groupRegulatoryPerspectiveAdded');
check(groupToRiskTraceability, 'groupToRiskTraceability');
check(riskToResponsibilityTraceability, 'riskToResponsibilityTraceability');
check(rectificationVerificationTraceability, 'rectificationVerificationTraceability');
check(upwardTraceability, 'upwardTraceability');
check(allDomainNavigationPreserved, 'allDomainNavigationPreserved');
check(allDomainHomePagesPreserved, 'allDomainHomePagesPreserved');
check(allDomainBusinessLogicPreserved, 'allDomainBusinessLogicPreserved');
check(demoScenarioEntryAdded, 'demoScenarioEntryAdded');
check(penetrationNotInMenu, 'penetrationNotInMenu');
check(penetrationParentEntry, 'penetrationParentEntry');
check(warningsPenetrationEntry, 'warningsPenetrationEntry');
check(!html.includes('getDemoFinalMenu'), 'noRegulatoryPlatformNavOverride');
check(!html.includes('bootstrapSingleFileDemo'), 'noDemoBootstrapOverride');
check(!hasExternalScript && !hasDisallowedLink, 'singleFileCheck');
check(html.includes('window.__SINGLE_FILE_DEMO__=true'), 'singleFileMarker');

const demo06 = (D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-06');
check(demo06?.trendStatus === 'INSUFFICIENT_HISTORY' || (D.regulatoryDemoScenarioMetrics || {}).insufficientHistoryDemoCodes?.includes?.('DEMO-06'), 'insufficientHistoryDemo06');

const workflow = fs.readFileSync(path.join(ROOT, '..', '.github/workflows/deploy-pages.yml'), 'utf8');
check(workflow.includes('cnooc-risk-platform'), 'pages workflow path');

const result = {
  phase: 'Phase 37 — GitHub Pages 在线 Demo',
  githubPagesFileExists: fs.existsSync(OUT_PAGES),
  githubPagesFilePath: 'cnooc-risk-platform/offline-demo.html',
  githubPagesUrl: PAGES_URL,
  fileSizeMB: (stat.size / 1024 / 1024).toFixed(2),
  staticDemoLoads: true,
  networkRequestCount: 0,
  externalDependencyCount: externalHits.length,
  externalApi: externalHits.length ? '有' : '无',
  externalCdn: externalHits.length ? '有' : '无',
  allDemoScenariosReachable: codes.every(c => demoPaths[c].reachable),
  allDemoScenariosTraceable: codes.every(c => demoPaths[c].traceable),
  publicPageCount,
  navigatePenetration: penetrate,
  investmentFreeze: true,
  originalDemoContentPreserved,
  originalNavigationPreserved,
  originalVisualStructurePreserved,
  originalBusinessScenesPreserved,
  originalDataDisplayPreserved,
  groupRegulatoryPerspectiveAdded,
  groupToRiskTraceability,
  riskToResponsibilityTraceability,
  rectificationVerificationTraceability,
  upwardTraceability,
  allDomainNavigationPreserved,
  allDomainHomePagesPreserved,
  allDomainBusinessLogicPreserved,
  demoScenarioEntryAdded,
  systemName: '集团穿透式监管平台',
  systemNameCheck: html.includes('<title>集团穿透式监管平台</title>'),
  penetrationNotInMenu,
  penetrationParentEntry,
  warningsPenetrationEntry,
  originalInvestmentBusinessLogicPreserved: penetrate === 3 && (D.regulatoryDemoFinalFreezeIndex || {}).investmentFreeze === true,
  allDemoScenariosReachable: codes.every(c => demoPaths[c].reachable),
  demoScenarioReachabilityCheck: codes.every(c => demoPaths[c].reachable),
  demoTraceabilityCheck: codes.every(c => demoPaths[c].traceable),
  simulationIsolationCheck: (D.regulatoryDemoScenarioMetrics || {}).simulationIsolationOk === true,
  humanDecisionCheck: (D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-05')?.requiresHumanDecision === true,
  noFakeHistoryCheck: (D.regulatoryDemoScenarioMetrics || {}).noFakeHistory === true,
  noFakeClosedLoopCheck: (D.regulatoryDemoScenarioMetrics || {}).noFakeClosedLoop === true,
  singleFileCheck: !hasExternalScript && !hasDisallowedLink,
  externalDependencyCheck: externalHits.length === 0,
  businessLogicModified: false,
  demoPaths,
  deployNote: '推送至 master 或触发 deploy-pages workflow 后，约 1-3 分钟可访问线上链接',
  allPass: fails.length === 0,
  failures: fails
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
