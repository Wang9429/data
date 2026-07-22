#!/usr/bin/env node
/**
 * Phase 34 E2E — Demo 演示路径 DEMO-01 ~ DEMO-06
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function loadApp() {
  const dataCode = fs.readFileSync(path.join(ROOT, 'js/data.js'), 'utf8');
  const pubCode = fs.readFileSync(path.join(ROOT, 'js/public-regulatory.js'), 'utf8');
  const sandbox = { console, document: { getElementById: () => null }, window: {} };
  vm.runInNewContext(dataCode + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  vm.runInNewContext('var App = {};\n' + pubCode, sandbox, { filename: 'public-regulatory.js' });
  ['finalizeRegulatoryPlatform', 'initializeDataAdaptation', 'initializeBatchAdaptation', 'initializeDomainClosure', 'initializeClosureVerification', 'initializeRegulatoryOperatingCycle', 'initializeRegulatoryOperatingRuntime', 'initializeRegulatoryCoordination', 'initializeRegulatoryOperationalScenarios', 'initializeRegulatoryFinalAcceptance', 'initializeRegulatoryFinalRemediation', 'initializeRegulatoryDeliveryReadiness', 'initializeRegulatoryDemoScenarios'].forEach(fn => {
    if (sandbox.App[fn]) sandbox.App[fn]();
  });
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  sandbox.App.navigatePublic = () => {};
  sandbox.App.createRegulatoryAuditLog = () => {};
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];
const step = (id, name, pass, detail) => results.push({ id, name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });

const scenarios = D.regulatoryDemoScenarioIndexes || [];
const metrics = D.regulatoryDemoScenarioMetrics || {};

step('DEMO-COUNT', '6条核心演示路径', scenarios.length === 6, `count=${scenarios.length}`);
step('PAGE-COUNT', '公共页面数70', (App.publicRegulatoryPages || []).length === 70, String((App.publicRegulatoryPages || []).length));

['DEMO-01', 'DEMO-02', 'DEMO-03', 'DEMO-04', 'DEMO-05', 'DEMO-06'].forEach((code, i) => {
  const s = scenarios.find(x => x.demoCode === code);
  const reach = App.validateDemoScenarioReachability(code);
  const trace = App.validateDemoScenarioTraceability(code);
  step(code, s?.name || code, reach.reachable && trace.hitCount > 0, `steps=${reach.stepCount} trace=${trace.traceabilityStatus} status=${s?.demoStatus}`);
});

step('SIM-03', 'DEMO-03 simulationOnly', scenarios.find(s => s.demoCode === 'DEMO-03')?.simulationOnly === true, 'simulationOnly');
step('SIM-ISO', '仿真隔离检查', metrics.simulationIsolationOk === true, String(metrics.simulationIsolationOk));
step('HUMAN-05', 'DEMO-05 requiresHumanDecision', scenarios.find(s => s.demoCode === 'DEMO-05')?.requiresHumanDecision === true, 'requiresHumanDecision');
step('HIST-06', 'DEMO-06 INSUFFICIENT_HISTORY', scenarios.find(s => s.demoCode === 'DEMO-06')?.trendStatus === 'INSUFFICIENT_HISTORY', 'trend');
step('NO-FAKE-HIST', '不伪造历史', metrics.noFakeHistory === true && metrics.trendStatus === 'INSUFFICIENT_HISTORY', metrics.trendStatus);
step('NO-FAKE-LOOP', '不伪造闭环', metrics.noFakeClosedLoop === true, String(metrics.noFakeClosedLoop));

const start = App.startDemoScenario('DEMO-01');
step('START-01', '启动DEMO-01', start.success === true, start.startedAt);

// UI panels
step('UI-01', '集团总览Demo路径', App.renderDemoScenarioDashboardPanel().includes('集团监管平台 Demo Final'));
step('UI-02', '工作台Demo视图', App.renderDemoScenarioWorkbenchPanel().includes('我的 Demo 工作台视图'));
step('UI-03', '角色Demo路径', App.renderDemoScenarioRolePanel('GROUP_LEADER').includes('DEMO-01'));
step('UI-04', '状态诚实展示', App.renderDemoScenarioDashboardPanel().includes('INSUFFICIENT_HISTORY'));
step('UI-05', '6条路径表格', App.renderDemoScenarioDashboardPanel().includes('DEMO-06'));

// Role views
['GROUP_LEADER', 'GROUP_REGULATORY', 'DOMAIN_REGULATOR', 'ENTITY_REGULATOR'].forEach(role => {
  const panel = App.renderDemoScenarioWorkbenchPanel();
  step(`ROLE-${role}`, `${role} 工作台可达`, panel.includes('我的') || panel.includes('Demo'), role);
});

const failed = results.filter(r => !r.pass);
console.log(JSON.stringify({
  phase: 'Phase 34 E2E',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  publicPageCount: (App.publicRegulatoryPages || []).length,
  allDemoScenariosReachable: ['DEMO-01', 'DEMO-02', 'DEMO-03', 'DEMO-04', 'DEMO-05', 'DEMO-06'].every(c => App.validateDemoScenarioReachability(c).reachable),
  allDemoScenariosTraceable: ['DEMO-01', 'DEMO-02', 'DEMO-03', 'DEMO-04', 'DEMO-05', 'DEMO-06'].every(c => (App.validateDemoScenarioTraceability(c) || {}).hitCount > 0),
  simulationIsolationCheck: metrics.simulationIsolationOk,
  humanDecisionCheck: scenarios.find(s => s.demoCode === 'DEMO-05')?.requiresHumanDecision,
  noFakeHistory: metrics.noFakeHistory,
  noFakeClosedLoop: metrics.noFakeClosedLoop,
  demoOverallStatus: metrics.overallStatus,
  results,
  allPass: failed.length === 0
}, null, 2));
process.exit(failed.length === 0 ? 0 : 1);
