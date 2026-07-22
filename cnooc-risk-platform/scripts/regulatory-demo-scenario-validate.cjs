#!/usr/bin/env node
/**
 * Phase 34 — 集团监管平台 Demo 演示路径验收
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
  const inits = ['finalizeRegulatoryPlatform', 'initializeDataAdaptation', 'initializeBatchAdaptation', 'initializeDomainClosure', 'initializeClosureVerification', 'initializeRegulatoryOperatingCycle', 'initializeRegulatoryOperatingRuntime', 'initializeRegulatoryCoordination', 'initializeRegulatoryOperationalScenarios', 'initializeRegulatoryFinalAcceptance', 'initializeRegulatoryFinalRemediation', 'initializeRegulatoryDeliveryReadiness', 'initializeRegulatoryDemoScenarios'];
  inits.forEach(fn => { if (sandbox.App[fn]) sandbox.App[fn](); });
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE' });
  return sandbox;
}

const ctx = loadSandbox();
const D = ctx.APP_DATA;
const App = ctx.App;
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');

const fails = { pages: [], demo: [], reach: [], trace: [], simulation: [], human: [], history: [], closedLoop: [], freeze: [], engines: [] };

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const defs = D.regulatoryDemoScenarioDefinitions || [];
const expectedCodes = ['DEMO-01', 'DEMO-02', 'DEMO-03', 'DEMO-04', 'DEMO-05', 'DEMO-06'];
expectedCodes.forEach(code => {
  if (!defs.find(d => d.demoCode === code)) fails.demo.push(`missing ${code}`);
});

const scenarios = D.regulatoryDemoScenarioIndexes || App.buildRegulatoryDemoScenarios();
if (scenarios.length !== 6) fails.demo.push(`count=${scenarios.length}`);

const reachResults = expectedCodes.map(c => App.validateDemoScenarioReachability(c));
if (!reachResults.every(r => r.reachable)) fails.reach.push(...reachResults.filter(r => !r.reachable).map(r => r.demoCode + ':' + (r.invalidPages || []).join(',')));

const traceResults = expectedCodes.map(c => App.validateDemoScenarioTraceability(c));
if (!traceResults.every(r => r && r.hitCount > 0)) fails.trace.push('zero-hit');

const demo03 = scenarios.find(s => s.demoCode === 'DEMO-03');
if (!demo03?.simulationOnly) fails.simulation.push('DEMO-03 simulationOnly');
const sims = D.regulatorySimulations || [];
if (sims.length && !sims.every(s => s.simulationOnly !== false)) fails.simulation.push('simulations');

const demo05 = scenarios.find(s => s.demoCode === 'DEMO-05');
if (!demo05?.requiresHumanDecision) fails.human.push('DEMO-05');
if (!scenarios.filter(s => s.requiresHumanDecision).length) fails.human.push('none');

const demo06 = scenarios.find(s => s.demoCode === 'DEMO-06');
if (demo06?.trendStatus !== 'INSUFFICIENT_HISTORY') fails.history.push('DEMO-06 trend');
const metrics = D.regulatoryDemoScenarioMetrics || App.calculateDemoScenarioHealth();
if (metrics.trendStatus !== 'INSUFFICIENT_HISTORY') fails.history.push('metrics trend');

if (!metrics.noFakeClosedLoop) fails.closedLoop.push('fake loop');
const fakedFull = scenarios.filter(s => s.demoStatus === 'FULL_CLOSED_LOOP' && s.traceabilityStatus !== 'FULL_TRACEABLE');
if (fakedFull.length) fails.closedLoop.push('status mismatch');

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);

if (!appJs.includes('initializeRegulatoryDemoScenarios')) fails.engines.push('init');
['buildRegulatoryDemoScenarios', 'validateDemoScenarioReachability', 'validateDemoScenarioTraceability', 'calculateDemoScenarioHealth', 'initializeRegulatoryDemoScenarios', 'startDemoScenario', 'renderDemoScenarioDashboardPanel', 'renderDemoScenarioWorkbenchPanel', 'renderDemoScenarioRolePanel'].forEach(fn => {
  if (!pubJs.includes(fn)) fails.engines.push(fn);
});

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const allFails = Object.values(fails).flat();
const result = {
  phase: 'Phase 34 — 集团监管平台 Demo 演示收口',
  publicPageCount,
  demoScenarioCount: scenarios.length,
  allDemoScenariosReachable: fails.reach.length === 0,
  allDemoScenariosTraceable: fails.trace.length === 0,
  simulationIsolationCheck: fails.simulation.length === 0,
  humanDecisionCheck: fails.human.length === 0,
  noFakeHistory: fails.history.length === 0,
  noFakeClosedLoop: fails.closedLoop.length === 0,
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  demoOverallStatus: metrics.overallStatus,
  fullTraceableCount: metrics.fullTraceableCount,
  partialTraceableCount: metrics.partialTraceableCount,
  reachableCount: metrics.reachableCount,
  nodeSyntaxCheck: nodeCheck,
  allPass: allFails.length === 0 && nodeCheck === '通过',
  failures: allFails.slice(0, 30)
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
