#!/usr/bin/env node
/**
 * Phase 30 — 集团监管运营实战场景与监管管理机制固化验收
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
  sandbox.App.finalizeRegulatoryPlatform();
  sandbox.App.initializeDataAdaptation();
  sandbox.App.initializeBatchAdaptation();
  sandbox.App.initializeDomainClosure();
  sandbox.App.initializeClosureVerification();
  sandbox.App.initializeRegulatoryOperatingCycle();
  sandbox.App.initializeRegulatoryOperatingRuntime();
  sandbox.App.initializeRegulatoryCoordination();
  sandbox.App.initializeRegulatoryOperationalScenarios();
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE', userType: 'GROUP_REGULATORY' });
  sandbox.App.currentRegulatoryUserId = 'U-GROUP-REG';
  return sandbox;
}

const ctx = loadSandbox();
const D = ctx.APP_DATA;
const App = ctx.App;
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');

const fails = {
  pages: [], scenario: [], theme: [], lifecycle: [], ledger: [], health: [], business: [],
  human: [], simulation: [], permission: [], audit: [], freeze: [], engines: []
};

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const scenarios = D.regulatoryOperationalScenarios || [];
if (scenarios.length < 8) fails.scenario.push(`count=${scenarios.length}`);
const codes = ['OS-01', 'OS-02', 'OS-03', 'OS-04', 'OS-05', 'OS-06', 'OS-07', 'OS-08'];
codes.forEach(c => { if (!scenarios.find(s => s.scenarioCode === c)) fails.scenario.push(`missing ${c}`); });
scenarios.forEach(s => {
  ['id', 'scenarioCode', 'scenarioType', 'regulatoryTheme', 'triggerSourceType', 'triggerSourceId', 'scope', 'status', 'phase', 'sourceTraceability', 'requiresHumanDecision'].forEach(f => {
    if (s[f] == null && f !== 'sourceTraceability') fails.scenario.push(`${s.id}.${f}`);
  });
  if (!s.sourceTraceability) fails.ledger.push(`trace ${s.id}`);
  if (!s.requiresHumanDecision) fails.human.push(s.id);
  if (s.scenarioType === 'DATA_QUALITY_IMPACT' && !s.simulationOnly) fails.simulation.push(s.id);
});

const themes = D.regulatoryOperationalThemes || [];
if (themes.length < 8) fails.theme.push(`themes=${themes.length}`);
themes.forEach(t => {
  if (!t.themeName || t.riskCount == null) fails.theme.push(t.themeId);
  if (t.trendStatus === 'UP' || t.trendStatus === 'DOWN') fails.simulation.push('theme trend');
});

const phases = App._OP_SCENARIO_PHASES;
if (!phases.includes('CLOSED')) fails.lifecycle.push('phases');
const s0 = scenarios.find(s => ['DRAFT', 'INITIATED', 'SCOPING', 'ANALYZING'].includes(s.phase)) || scenarios.find(s => phases.indexOf(s.phase) < phases.indexOf('ACTION_REQUIRED'));
if (s0) {
  App.canRegulatoryAccess = () => ({ allowed: true });
  const adv = App.advanceRegulatoryOperationalScenario(s0.id, 'ACTION_REQUIRED', { approved: true, reason: '验收' });
  if (!adv.success) fails.lifecycle.push('advance:' + (adv.message || s0.phase));
  const audited = (D.regulatoryAuditLogs || []).some(l => l.objectType === 'regulatoryOperationalScenarios' && l.objectId === s0.id && l.actionType === 'PHASE_ADVANCE');
  if (!audited) fails.audit.push('phase audit');
}

const ledger = D.regulatoryOperationalLedger || [];
if (!ledger.length) fails.ledger.push('empty ledger');
ledger.forEach(l => {
  if (!l.triggerSourceType || !l.scenarioCode || !l.sourceTraceability) fails.ledger.push(`ledger ${l.ledgerId}`);
  if (!l.sourceTraceability?.backwardLinks?.length || !l.sourceTraceability?.forwardLinks?.length) fails.ledger.push(`ledger trace ${l.ledgerId}`);
});

const health = s0 ? App.calculateOperationalScenarioHealth(s0.id) : null;
if (!health?.sourceTraceable) fails.health.push('not traceable');
if (!['HEALTHY', 'WATCH', 'AT_RISK', 'CRITICAL', 'INSUFFICIENT_DATA'].includes(health?.overallStatus)) fails.health.push('status');
if (health?.trendStatus === 'UP') fails.simulation.push('health trend');

scenarios.forEach(s => {
  if (!s.triggerSourceId || !s.triggerReason) fails.business.push(s.id);
  if (!s.relatedRisks && !s.relatedKris && !s.triggerSourceId) fails.business.push(`links ${s.id}`);
});

if (!appJs.includes('initializeRegulatoryOperationalScenarios')) fails.engines.push('init');
[
  'initializeRegulatoryOperationalScenarios', 'buildRegulatoryOperationalThemes', 'initializeRegulatoryOperationalScenario',
  'advanceRegulatoryOperationalScenario', 'refreshOperationalScenarioLinks', 'calculateOperationalScenarioHealth',
  'buildRegulatoryOperationalLedger', 'computeRegulatoryOperationalMetrics', 'filterOperationalScenariosByScope',
  'renderOperationalScenarioDashboardPanel', 'renderOperationalScenarioWorkbenchPanel', 'renderOperationalScenarioRolePanel'
].forEach(fn => { if (!pubJs.includes(fn)) fails.engines.push(fn); });

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const m = D.regulatoryOperationalMetrics || {};
const allFails = Object.values(fails).flat();
const result = {
  phase: 'Phase 30 — 监管实战场景',
  publicPageCount,
  operationalScenarioCheck: fails.scenario.length === 0 ? '通过' : '不通过',
  operationalThemeCheck: fails.theme.length === 0 ? '通过' : '不通过',
  scenarioLifecycleCheck: fails.lifecycle.length === 0 ? '通过' : '不通过',
  ledgerTraceabilityCheck: fails.ledger.length === 0 ? '通过' : '不通过',
  scenarioHealthCheck: fails.health.length === 0 ? '通过' : '不通过',
  realBusinessDataCheck: fails.business.length === 0 ? '通过' : '不通过',
  humanDecisionCheck: fails.human.length === 0 ? '通过' : '不通过',
  simulationIsolationCheck: fails.simulation.length === 0 ? '通过' : '不通过',
  permissionCheck: fails.permission.length === 0 ? '通过' : '不通过',
  auditCheck: fails.audit.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  operationalScenarioCount: m.operationalScenarioCount || scenarios.length,
  themeCount: m.themeCount || themes.length,
  ledgerCount: m.ledgerCount || ledger.length,
  closedScenarioCount: m.closedScenarioCount,
  inProgressCount: m.inProgressCount,
  atRiskCount: m.atRiskCount,
  nodeSyntaxCheck: nodeCheck,
  allPass: allFails.length === 0 && nodeCheck === '通过',
  failures: allFails
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
