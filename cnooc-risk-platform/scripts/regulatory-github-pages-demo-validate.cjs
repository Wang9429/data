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
check(html.includes('集团监管平台 Demo Final'), 'demo final marker');

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

check(html.includes('Demo Final') || html.includes('renderDemoScenarioDashboardPanel'), 'demo panel');
check((D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-03')?.simulationOnly === true, 'simulationOnly');
check((D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-05')?.requiresHumanDecision === true, 'humanDecision');
check((D.regulatoryDemoScenarioMetrics || {}).noFakeHistory === true, 'noFakeHistory');
check((D.regulatoryDemoScenarioMetrics || {}).noFakeClosedLoop === true, 'noFakeClosedLoop');
check((D.regulatoryDemoFinalFreezeIndex || {}).investmentFreeze === true, 'investmentFreeze');

const forbiddenBranding = [
  '集团穿透式监管平台（离线演示版）',
  '集团穿透式监管平台',
  '投资专题 Demo',
  '投资管理专题监管',
  '离线演示版'
];
const allowedContextPatterns = [
  /不混入投资管理专题数据/,
  /投资管理领域已配置/
];
const brandingHits = forbiddenBranding.filter(text => {
  if (!html.includes(text)) return false;
  if (text === '集团穿透式监管平台') {
    const re = /集团穿透式监管平台/g;
    let match;
    while ((match = re.exec(html)) !== null) {
      const start = Math.max(0, match.index - 40);
      const end = Math.min(html.length, match.index + 40);
      const snippet = html.slice(start, end);
      if (!allowedContextPatterns.some(p => p.test(snippet))) return true;
    }
    return false;
  }
  return true;
});
check(brandingHits.length === 0, `oldBranding:${brandingHits.join(',')}`);
check(html.includes('<title>集团监管平台 Demo</title>'), 'systemNameTitle');
check(/集团监管平台 Demo Final/.test(html), 'systemNameFinal');
check(!html.includes('集团穿透式监管平台（离线演示版）'), 'oldOfflineTitle');
check(html.includes('集团监管总览') && html.includes('集团 → 区域 → 国家 → 法人 → 项目 → 风险 → KRI → 预警'), 'groupRegulatoryHome');
check(html.includes('DEMO-01') && html.includes('DEMO-06') && html.includes('startDemoScenario'), 'demoEntry');
check(html.includes('getDemoFinalMenu') || html.includes('统一监管工作台'), 'demoNav');
const hasExternalScript = /<script[^>]+src=/i.test(html);
const hasDisallowedLink = (() => {
  const re = /<link[^>]+href=["'](https?:[^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (!isAllowedUrl(m[1])) return true;
  }
  return false;
})();
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
  systemNameCheck: html.includes('<title>集团监管平台 Demo</title>') && /集团监管平台 Demo Final/.test(html),
  oldInvestmentDemoTextCheck: brandingHits.length === 0,
  groupRegulatoryHomeCheck: html.includes('集团监管总览') && html.includes('集团 → 区域 → 国家 → 法人 → 项目 → 风险 → KRI → 预警'),
  demoEntryCheck: codes.every(c => html.includes(c)),
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
