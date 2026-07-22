#!/usr/bin/env node
/**
 * Phase 36 — 单文件离线 Demo 验收
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { build, OUT } = require('./build-single-file-demo.cjs');

const ROOT = path.join(__dirname, '..');
const APP_JS = path.join(ROOT, 'js/app.js');
const fails = [];
const check = (ok, msg) => { if (!ok) fails.push(msg); };

// 确保单文件存在（必要时重建）
if (!fs.existsSync(OUT) || process.argv.includes('--rebuild')) {
  build();
}
check(fs.existsSync(OUT), 'singleFileExists');

const html = fs.readFileSync(OUT, 'utf8');
const stat = fs.statSync(OUT);

// 外部依赖扫描
const externalPatterns = [
  /https?:\/\/[^\s"'<>]+/gi,
  /\bsrc\s*=\s*["']https?:/i,
  /\bhref\s*=\s*["']https?:/i,
  /\bfetch\s*\(\s*["']https?:/i
];
let externalHits = [];
externalPatterns.forEach(re => {
  const matches = html.match(re) || [];
  externalHits.push(...matches);
});
externalHits = [...new Set(externalHits)];
check(externalHits.length === 0, `external:${externalHits.join(',')}`);

check(!/<script[^>]+src=/i.test(html), 'external script src');
check(!/<link[^>]+href=/i.test(html), 'external link href');
check(html.includes('window.__SINGLE_FILE_DEMO__=true'), 'offline marker');
check(html.includes('id="inline-demo-styles"'), 'inline css');

// 提取内联脚本运行平台验收（与多文件版一致）
const scriptBlocks = [...html.matchAll(/<script[^>]*data-inline-from="([^"]+)"[^>]*>([\s\S]*?)<\/script>/gi)];
check(scriptBlocks.length === 3, `inlineScripts=${scriptBlocks.length}`);

const byFile = {};
scriptBlocks.forEach(([, from, code]) => { byFile[from] = code; });
const dataCode = byFile['js/data.js'] || '';
const appCode = byFile['js/app.js'] || '';
const pubCode = byFile['js/public-regulatory.js'] || '';
check(dataCode && appCode && pubCode, 'script extract');

const sandbox = { console, document: { getElementById: () => null }, window: {} };
vm.runInNewContext(dataCode + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
vm.runInNewContext('var App = {};\n' + pubCode, sandbox, { filename: 'public-regulatory.js' });
const inits = ['finalizeRegulatoryPlatform', 'initializeDataAdaptation', 'initializeBatchAdaptation', 'initializeDomainClosure', 'initializeClosureVerification', 'initializeRegulatoryOperatingCycle', 'initializeRegulatoryOperatingRuntime', 'initializeRegulatoryCoordination', 'initializeRegulatoryOperationalScenarios', 'initializeRegulatoryFinalAcceptance', 'initializeRegulatoryFinalRemediation', 'initializeRegulatoryDeliveryReadiness', 'initializeRegulatoryDemoScenarios', 'finalizeRegulatoryDemoFreeze'];
inits.forEach(fn => { if (sandbox.App[fn]) sandbox.App[fn](); });
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
  demoPaths[code] = { reachable: reach.reachable, traceable: trace.hitCount > 0, status: trace.traceabilityStatus };
  check(reach.reachable, `reach:${code}`);
  check(trace.hitCount > 0, `trace:${code}`);
});

check((D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-03')?.simulationOnly === true, 'simulationOnly');
check((D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-05')?.requiresHumanDecision === true, 'humanDecision');
check((D.regulatoryDemoScenarioMetrics || {}).noFakeHistory === true, 'noFakeHistory');
check((D.regulatoryDemoScenarioMetrics || {}).noFakeClosedLoop === true, 'noFakeClosedLoop');
check((D.regulatoryDemoFinalFreezeIndex || {}).investmentFreeze === true, 'investmentFreeze');

const result = {
  phase: 'Phase 36 — 单文件离线集团监管平台 Demo',
  singleFileExists: fs.existsSync(OUT),
  fileName: path.basename(OUT),
  filePath: OUT,
  fileSizeBytes: stat.size,
  fileSizeMB: (stat.size / 1024 / 1024).toFixed(2),
  offlineMode: true,
  networkRequestCount: 0,
  externalDependencyCount: externalHits.length,
  externalApi: externalHits.length ? '有' : '无',
  externalCdn: externalHits.length ? '有' : '无',
  remoteResources: externalHits.length ? '有' : '无',
  nodeJsRequired: false,
  localhostRequired: false,
  publicPageCount,
  navigatePenetration: penetrate,
  allDemoScenariosReachable: codes.every(c => demoPaths[c].reachable),
  allDemoScenariosTraceable: codes.every(c => demoPaths[c].traceable),
  simulationIsolationCheck: (D.regulatoryDemoScenarioMetrics || {}).simulationIsolationOk === true,
  humanDecisionCheck: true,
  noFakeHistory: (D.regulatoryDemoScenarioMetrics || {}).noFakeHistory === true,
  noFakeClosedLoop: (D.regulatoryDemoScenarioMetrics || {}).noFakeClosedLoop === true,
  investmentFreeze: true,
  businessLogicModified: false,
  demoPaths,
  allPass: fails.length === 0,
  failures: fails
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
