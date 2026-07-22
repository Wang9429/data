#!/usr/bin/env node
/**
 * Phase 35 — 集团监管平台 Demo Final 冻结验收
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const dataPath = path.join(ROOT, 'js/data.js');
const appPath = path.join(ROOT, 'js/app.js');
const pubPath = path.join(ROOT, 'js/public-regulatory.js');

function loadSandbox() {
  const dataCode = fs.readFileSync(dataPath, 'utf8');
  const pubCode = fs.readFileSync(pubPath, 'utf8');
  const sandbox = { console, document: { getElementById: () => null }, window: {} };
  vm.runInNewContext(dataCode + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  vm.runInNewContext('var App = {};\n' + pubCode, sandbox, { filename: 'public-regulatory.js' });
  ['finalizeRegulatoryPlatform', 'initializeDataAdaptation', 'initializeBatchAdaptation', 'initializeDomainClosure', 'initializeClosureVerification', 'initializeRegulatoryOperatingCycle', 'initializeRegulatoryOperatingRuntime', 'initializeRegulatoryCoordination', 'initializeRegulatoryOperationalScenarios', 'initializeRegulatoryFinalAcceptance', 'initializeRegulatoryFinalRemediation', 'initializeRegulatoryDeliveryReadiness', 'initializeRegulatoryDemoScenarios', 'finalizeRegulatoryDemoFreeze'].forEach(fn => {
    if (sandbox.App[fn]) sandbox.App[fn]();
  });
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE' });
  return sandbox;
}

const ctx = loadSandbox();
const D = ctx.APP_DATA;
const App = ctx.App;
const appJs = fs.readFileSync(appPath, 'utf8');

const fails = [];
const check = (ok, msg) => { if (!ok) fails.push(msg); };

const publicPageCount = (App.publicRegulatoryPages || []).length;
check(publicPageCount === 70, `publicPageCount=${publicPageCount}`);

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
check(penetrateCount === 3, `navigate('penetration')=${penetrateCount}`);

const freeze = D.regulatoryDemoFinalFreezeIndex || App.finalizeRegulatoryDemoFreeze();
check(freeze.version === 'Demo Final', 'freeze version');
check(freeze.productionReady === false, 'productionReady');
check(freeze.investmentFreeze === true, 'investmentFreeze');

const codes = ['DEMO-01', 'DEMO-02', 'DEMO-03', 'DEMO-04', 'DEMO-05', 'DEMO-06'];
codes.forEach(code => {
  const reach = App.validateDemoScenarioReachability(code);
  const trace = App.validateDemoScenarioTraceability(code);
  check(reach.reachable, `reachable:${code}`);
  check(trace && trace.hitCount > 0, `traceable:${code}`);
});

const demo03 = (D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-03');
check(demo03?.simulationOnly === true, 'DEMO-03 simulationOnly');
check((D.regulatoryDemoScenarioMetrics || {}).simulationIsolationOk === true, 'simulationIsolation');

const demo05 = (D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-05');
check(demo05?.requiresHumanDecision === true, 'DEMO-05 requiresHumanDecision');

const demo06 = (D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-06');
check(demo06?.trendStatus === 'INSUFFICIENT_HISTORY', 'DEMO-06 INSUFFICIENT_HISTORY');
check((D.regulatoryDemoScenarioMetrics || {}).noFakeHistory === true, 'noFakeHistory');
check((D.regulatoryDemoScenarioMetrics || {}).noFakeClosedLoop === true, 'noFakeClosedLoop');

const orphans = App.getOrphanPages ? App.getOrphanPages() : [];
check(orphans.length === 0, `orphans=${orphans.join(',')}`);

check(appJs.includes('finalizeRegulatoryDemoFreeze'), 'init freeze');
check(!appJs.includes('initializeRegulatoryDemoFinalFreeze'), 'no duplicate init');

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; check(false, 'syntax'); }

const demoResults = codes.map(code => {
  const s = (D.regulatoryDemoScenarioIndexes || []).find(x => x.demoCode === code);
  const trace = App.validateDemoScenarioTraceability(code);
  return { code, name: s?.name, reachable: s?.reachable, traceabilityStatus: trace?.traceabilityStatus, demoStatus: s?.demoStatus };
});

const result = {
  phase: 'Phase 35 — 集团监管平台 Demo Final 冻结',
  version: freeze.version,
  publicPageCount,
  navigatePenetration: penetrateCount,
  investmentFreeze: freeze.investmentFreeze,
  allDemoScenariosReachable: freeze.allDemoScenariosReachable,
  allDemoScenariosTraceable: freeze.allDemoScenariosTraceable,
  simulationIsolationCheck: freeze.simulationIsolationOk,
  humanDecisionCheck: freeze.humanDecisionOk,
  noFakeHistory: freeze.noFakeHistory,
  noFakeClosedLoop: freeze.noFakeClosedLoop,
  orphanPageCount: freeze.orphanPageCount,
  demoPaths: demoResults,
  nodeSyntaxCheck: nodeCheck,
  allPass: fails.length === 0 && nodeCheck === '通过',
  failures: fails
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
