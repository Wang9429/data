#!/usr/bin/env node
/**
 * Phase 22/23 — 集团监管平台最终验收（真实业务场景验证阶段）
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const dataPath = path.join(ROOT, 'js/data.js');
const appPath = path.join(ROOT, 'js/app.js');
const pubPath = path.join(ROOT, 'js/public-regulatory.js');

function loadAppData() {
  const code = fs.readFileSync(dataPath, 'utf8');
  const sandbox = { console };
  vm.runInNewContext(code + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  return sandbox.APP_DATA;
}

const D = loadAppData();
const sandboxCtx = (() => {
  const dataCode = fs.readFileSync(dataPath, 'utf8');
  const pubCode = fs.readFileSync(pubPath, 'utf8');
  const sandbox = { console, document: { getElementById: () => null }, window: {} };
  vm.runInNewContext(dataCode + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  vm.runInNewContext('var App = {};\n' + pubCode, sandbox, { filename: 'public-regulatory.js' });
  sandbox.App.finalizeRegulatoryPlatform();
  return sandbox;
})();
const App = sandboxCtx.App;
const capMap = sandboxCtx.APP_DATA.regulatoryCapabilityMap || [];
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');

const fails = {
  capabilityMap: [], navigation: [], rolePath: [], dataTrace: [], permission: [],
  authorization: [], audit: [], simulation: [], humanDecision: [], dataQuality: [],
  platformHealth: [], duplicate: [], freeze: [], orphanPage: [], orphanData: []
};

const expectedPages = (App.publicRegulatoryPages || []).map(p => p.pageId);
const publicPageCount = (App.publicRegulatoryPages || []).length;

if (publicPageCount !== 70) fails.capabilityMap.push(`publicPageCount=${publicPageCount}`);
if (capMap.length !== 70) fails.capabilityMap.push(`capabilityMap=${capMap.length}`);

// Capability map + navigation
const workbenchReachable = new Set(['regulatory-workbench', 'global-group-overview', 'regulatory-search', 'regulatory-command-center', 'regulatory-role-workbench']);
capMap.forEach(m => {
  workbenchReachable.add(m.pageId);
  workbenchReachable.add(m.primaryEntry);
  workbenchReachable.add(m.parentEntry);
  (m.relatedPages || []).forEach(p => workbenchReachable.add(p));
});

expectedPages.forEach(pid => {
  const entry = capMap.find(c => c.pageId === pid);
  if (!entry) { fails.capabilityMap.push(`missing: ${pid}`); return; }
  if (!entry.capabilityDomain) fails.capabilityMap.push(`${pid}: no domain`);
  if (!entry.primaryEntry) fails.capabilityMap.push(`${pid}: no primaryEntry`);
  if (!entry.parentEntry) fails.navigation.push(`${pid}: no parentEntry`);
  if (!entry.supportsBackNavigation && pid !== 'major') fails.navigation.push(`${pid}: no back`);
  if (!entry.roleVisibility?.length) fails.permission.push(`${pid}: no roles`);
  if (!entry.dataSourceKey) fails.dataTrace.push(`${pid}: no dataSource`);
  if (pid !== 'major' && entry.supportsPublicNavigation !== false && !workbenchReachable.has(pid)) {
    fails.orphanPage.push(`${pid}: not reachable from workbench/capability map`);
  }
});

// Breadcrumb
if (!pubJs.includes('集团监管平台')) fails.navigation.push('breadcrumb prefix missing');

// Data traceability: action -> risk/kri/warning
(D.regulatoryActions || []).slice(0, 20).forEach(a => {
  const hasSrc = (a.sourceRiskMatterIds || []).length || (a.sourceKriIds || []).length || (a.sourceEventIds || []).length;
  if (!hasSrc) fails.dataTrace.push(`action ${a.actionId}: no upstream trace`);
});

// Rectification -> risk/action
(D.rectificationTasks || []).slice(0, 15).forEach(t => {
  const hasSrc = t.riskMatterId || t.riskId || t.crossDomainRiskMatterId;
  if (!hasSrc) fails.dataTrace.push(`rect ${t.taskId}: no upstream trace`);
});

// Trace helpers exist
['traceRegulatoryActionSources', 'traceRectificationTaskSources', 'traceObjectToDataSource'].forEach(fn => {
  if (!pubJs.includes(fn)) fails.dataTrace.push(`missing ${fn}`);
});

// Permission + authorization
['canRegulatoryAccess', 'executeRegulatoryStateChange', 'createRegulatoryAuditLog', 'approveRegulatoryAuthorization'].forEach(fn => {
  if (!pubJs.includes(fn)) fails.permission.push(`missing ${fn}`);
});
if (!(D.regulatoryAuthorizationRequests || []).length) fails.authorization.push('no authorization requests');
if (!(D.regulatoryPermissionSets || []).some(p => p.riskLevel === 'HIGH')) fails.permission.push('no HIGH risk perms');

// Audit infrastructure
if (!pubJs.includes('regulatoryAuditLogs')) fails.audit.push('audit ref missing');
if (!pubJs.includes('renderPublicAuditNotice')) fails.audit.push('audit notice missing');

// Simulation isolation
(D.regulatorySimulations || []).forEach(s => { if (s.simulationOnly !== true) fails.simulation.push(s.simulationId); });
(D.regulatoryScenarioAnalysis || []).forEach(s => { if (s.simulationOnly !== true) fails.simulation.push(s.scenarioId); });
(D.regulatorySimulationResults || []).forEach(s => { if (s.simulationOnly !== false && s.simulationOnly !== true) fails.simulation.push('simResult'); });

// Human decision
(D.regulatoryOptimizationPlans || []).forEach(p => { if (p.requiresHumanDecision !== true) fails.humanDecision.push(p.planId); });
(D.regulatoryDecisionRecommendations || []).forEach(r => { if (r.requiresHumanDecision !== true) fails.humanDecision.push(r.recommendationId); });
(D.regulatoryRootCauseAnalyses || []).forEach(r => { if (r.requiresHumanConfirmation !== true) fails.humanDecision.push(r.rootCauseId); });

// Data quality / insufficient history
const effInsufficient = (D.regulatoryImprovementEffectiveness || []).filter(e => e.dataStatus === 'INSUFFICIENT_HISTORY');
if (!effInsufficient.length && (D.regulatoryImprovementEffectiveness || []).length) fails.dataQuality.push('no INSUFFICIENT_HISTORY sample');
if (!pubJs.includes('历史数据不足')) fails.dataQuality.push('insufficient history UI missing');
if ((D.regulatoryDataGovernanceMetrics || {}).qualityTrendStatus === 'INSUFFICIENT_HISTORY' && !pubJs.includes('INSUFFICIENT_HISTORY')) {
  fails.dataQuality.push('trend status handling');
}

// Platform health
const ph = D.platformHealth || {};
if (!ph.dimensions?.dataHealth) fails.platformHealth.push('dimensions missing');

// Duplicate entities
['newRiskList', 'newWarningList', 'newActionList', 'newRectificationList', 'newKriList'].forEach(p => {
  if (pubJs.includes(p) || fs.readFileSync(dataPath, 'utf8').includes(p)) fails.duplicate.push(p);
});

// Orphan pages via App helper
const orphans = App.getOrphanPages ? App.getOrphanPages() : [];
orphans.forEach(p => fails.orphanPage.push(p));

// Orphan search index objects
const resolveObject = (type, id) => {
  const maps = {
    IMPROVEMENT_OPPORTUNITY: () => (D.regulatoryImprovementOpportunities || []).find(o => o.opportunityId === id),
    ROOT_CAUSE_ANALYSIS: () => (D.regulatoryRootCauseAnalyses || []).find(o => o.rootCauseId === id),
    OPTIMIZATION_PLAN: () => (D.regulatoryOptimizationPlans || []).find(o => o.planId === id),
    IMPROVEMENT_EXECUTION: () => (D.regulatoryImprovementExecution || []).find(o => o.executionId === id),
    IMPROVEMENT_EFFECTIVENESS: () => (D.regulatoryImprovementEffectiveness || []).find(o => o.effectivenessId === id),
    ANALYSIS_RESULT: () => (D.regulatoryAnalysisResults || []).find(o => o.resultId === id)
  };
  return maps[type] ? maps[type]() : true;
};
(D.regulatorySearchIndex || []).filter(s => ['IMPROVEMENT_OPPORTUNITY', 'ROOT_CAUSE_ANALYSIS', 'OPTIMIZATION_PLAN', 'IMPROVEMENT_EXECUTION', 'IMPROVEMENT_EFFECTIVENESS', 'ANALYSIS_RESULT'].includes(s.objectType))
  .slice(0, 30).forEach(s => {
    if (!resolveObject(s.objectType, s.objectId)) fails.orphanData.push(`${s.objectType}:${s.objectId}`);
  });

// Role paths + business scenarios
['ROLE-GROUP-LEADER', 'ROLE-GROUP-REG', 'ROLE-DOMAIN-REG', 'ROLE-ENTITY-REG'].forEach(rid => {
  const v = App.validateRoleJourney ? App.validateRoleJourney(rid) : { valid: false };
  if (!v.valid) fails.rolePath.push(rid);
});
if ((D.regulatoryBusinessScenarios || []).length < 8) fails.rolePath.push('business scenarios < 8');
(D.regulatoryBusinessScenarios || []).forEach(s => {
  const v = App.validateBusinessScenario ? App.validateBusinessScenario(s.scenarioId) : { valid: false };
  if (!v.valid) fails.rolePath.push(s.scenarioId);
});

// Investment freeze
const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const allFails = Object.values(fails).flat();
const result = {
  publicPageCount,
  capabilityMapCheck: fails.capabilityMap.length === 0 ? '通过' : '不通过',
  navigationCheck: fails.navigation.length === 0 ? '通过' : '不通过',
  rolePathCheck: fails.rolePath.length === 0 ? '通过' : '不通过',
  dataTraceabilityCheck: fails.dataTrace.length === 0 ? '通过' : '不通过',
  permissionCheck: fails.permission.length === 0 ? '通过' : '不通过',
  authorizationCheck: fails.authorization.length === 0 ? '通过' : '不通过',
  auditCheck: fails.audit.length === 0 ? '通过' : '不通过',
  simulationIsolationCheck: fails.simulation.length === 0 ? '通过' : '不通过',
  humanDecisionCheck: fails.humanDecision.length === 0 ? '通过' : '不通过',
  dataQualityCheck: fails.dataQuality.length === 0 ? '通过' : '不通过',
  platformHealthCheck: fails.platformHealth.length === 0 ? '通过' : '不通过',
  duplicateEntityCheck: fails.duplicate.length === 0 ? '通过' : '不通过',
  orphanPageCheck: fails.orphanPage.length === 0 ? '通过' : '不通过',
  orphanDataObjectCheck: fails.orphanData.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  capabilityDomainCount: [...new Set(capMap.map(c => c.capabilityDomain))].length,
  businessScenarioCount: (D.regulatoryBusinessScenarios || []).length,
  nodeCheck,
  fails: Object.fromEntries(Object.entries(fails).map(([k, v]) => [k, v.slice(0, 10)])),
  allPass: allFails.length === 0 && nodeCheck === '通过'
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
