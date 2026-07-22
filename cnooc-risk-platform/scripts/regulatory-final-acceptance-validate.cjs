#!/usr/bin/env node
/**
 * Phase 31 — 集团监管平台真实业务数据与全场景最终验收
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
  sandbox.App.initializeRegulatoryFinalAcceptance();
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE', userType: 'GROUP_REGULATORY' });
  sandbox.App.currentRegulatoryUserId = 'U-GROUP-REG';
  return sandbox;
}

const ctx = loadSandbox();
const D = ctx.APP_DATA;
const App = ctx.App;
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');
const dataJs = fs.readFileSync(dataPath, 'utf8');

const fails = {
  pages: [], scenario: [], trace: [], business: [], health: [], issues: [],
  human: [], simulation: [], permission: [], authorization: [], audit: [],
  duplicate: [], orphanPage: [], orphanData: [], freeze: [], engines: []
};

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const scenarios = D.regulatoryFinalAcceptanceScenarios || [];
const codes = ['FA-01', 'FA-02', 'FA-03', 'FA-04', 'FA-05', 'FA-06', 'FA-07', 'FA-08', 'FA-09'];
if (scenarios.length < 9) fails.scenario.push(`count=${scenarios.length}`);
codes.forEach(c => { if (!scenarios.find(s => s.scenarioCode === c)) fails.scenario.push(`missing ${c}`); });

const requiredFields = [
  'id', 'scenarioCode', 'scenarioName', 'scenarioType', 'sourceType', 'sourceId',
  'involvedDomains', 'involvedEntities', 'relatedRisks', 'relatedKris', 'relatedWarnings',
  'relatedActions', 'relatedTasks', 'relatedRectifications', 'relatedCoordinationCases',
  'expectedTraceChain', 'actualTraceChain', 'status', 'blockers', 'evidence',
  'sourceTraceability', 'requiresHumanDecision'
];
scenarios.forEach(s => {
  requiredFields.forEach(f => {
    if (s[f] == null && !['involvedDomains', 'involvedEntities', 'blockers', 'evidence'].includes(f)) {
      fails.scenario.push(`${s.id}.${f}`);
    }
  });
  if (!s.sourceTraceability?.sourceType || !s.sourceTraceability?.sourceId) fails.trace.push(`sourceTrace ${s.id}`);
  if (!s.requiresHumanDecision) fails.human.push(s.id);
  if (s.scenarioType === 'DATA_QUALITY_IMPACT' && !s.simulationOnly) fails.simulation.push(s.id);
  if (s.scenarioType === 'RULE_GOVERNANCE' && !s.simulationOnly) fails.simulation.push(s.id);
  if (!s.sourceId || !s.sourceType) fails.business.push(s.id);
});

const results = D.regulatoryFinalAcceptanceResultIndexes || [];
if (results.length < scenarios.length) fails.trace.push(`results=${results.length}`);
results.forEach(r => {
  if (!['FULL_TRACEABLE', 'PARTIAL_TRACEABLE', 'NOT_TRACEABLE'].includes(r.traceabilityStatus)) {
    fails.trace.push(`status ${r.scenarioId}`);
  }
});
scenarios.forEach(s => {
  const r = results.find(x => x.scenarioId === s.id);
  if (!r) fails.trace.push(`no result ${s.id}`);
  else if (r.traceabilityStatus === 'FULL_TRACEABLE' && r.hitCount !== r.totalCount) {
    fails.trace.push(`fake full ${s.id}`);
  }
});

const health = D.regulatoryFinalAcceptanceHealth || App.calculateFinalAcceptanceHealth();
if (!['PASS', 'PASS_WITH_GAPS', 'AT_RISK', 'BLOCKED', 'INSUFFICIENT_DATA'].includes(health.overallStatus)) {
  fails.health.push('overallStatus');
}
if (health.trendStatus !== 'INSUFFICIENT_HISTORY') fails.health.push('trend forged');
const dims = health.dimensions || {};
['dataAvailability', 'dataQuality', 'mappingCompleteness', 'kriCoverage', 'warningCoverage',
  'actionClosureRate', 'rectificationVerificationRate', 'crossOrgCoordinationRate',
  'dataTraceabilityRate', 'permissionComplianceRate', 'auditCompletenessRate'].forEach(k => {
  if (dims[k] == null && health.overallStatus === 'PASS') fails.health.push(`dim ${k}`);
});

const issues = D.regulatoryFinalAcceptanceIssues || [];
if (!issues.length) fails.issues.push('empty issues register');
const issueTypes = ['DATA_GAP', 'DATA_QUALITY', 'MISSING_MAPPING', 'MISSING_KRI', 'MISSING_WARNING',
  'MISSING_ACTION', 'MISSING_RECTIFICATION', 'MISSING_VERIFICATION', 'PERMISSION_ISSUE', 'TRACEABILITY_ISSUE'];
issues.forEach(i => {
  ['id', 'issueType', 'sourceType', 'sourceId', 'severity', 'description', 'evidence', 'recommendedAction', 'status'].forEach(f => {
    if (i[f] == null) fails.issues.push(`${i.id}.${f}`);
  });
  if (!issueTypes.includes(i.issueType) && !i.issueType.startsWith('MISSING_')) fails.issues.push(`type ${i.issueType}`);
});

const fa01 = scenarios.find(s => s.scenarioCode === 'FA-01');
if (!fa01?.requiresHumanDecision) fails.human.push('FA-01');
const fa08 = scenarios.find(s => s.scenarioCode === 'FA-08');
if (!fa08?.requiresHumanDecision) fails.human.push('FA-08');

const fa02 = scenarios.find(s => s.scenarioCode === 'FA-02');
if (!fa02?.simulationOnly) fails.simulation.push('FA-02');
const fa03 = scenarios.find(s => s.scenarioCode === 'FA-03');
if (!fa03?.simulationOnly) fails.simulation.push('FA-03');

['canRegulatoryAccess', 'createRegulatoryAuditLog', 'filterCoordinationCasesByScope',
  'validateRegulatoryFinalTraceability', 'calculateFinalAcceptanceHealth'].forEach(fn => {
  if (!pubJs.includes(fn)) fails.permission.push(`missing ${fn}`);
});
if (!(D.regulatoryRolePermissionMap || {})['ROLE-GROUP-REG']?.includes('ACCEPTANCE_VIEW')) {
  fails.permission.push('ACCEPTANCE_VIEW');
}
if (!pubJs.includes('regulatoryFinalAcceptanceScenarios:VIEW')) fails.permission.push('perm map');

if (!(D.regulatoryAuthorizationRequests || []).length) fails.authorization.push('no auth requests');
if (!(D.regulatoryAuditLogs || []).length) fails.audit.push('no audit logs');

['newRiskList', 'newWarningList', 'newActionList', 'newRectificationList', 'newKriList',
  'newLegalEntityList', 'newCoordinationList'].forEach(p => {
  if (pubJs.includes(p) || dataJs.includes(p)) fails.duplicate.push(p);
});

const orphans = App.getOrphanPages ? App.getOrphanPages() : [];
orphans.forEach(p => fails.orphanPage.push(p));

const resolveObject = (type, id) => {
  const maps = {
    IMPROVEMENT_OPPORTUNITY: () => (D.regulatoryImprovementOpportunities || []).find(o => o.opportunityId === id),
    ANALYSIS_RESULT: () => (D.regulatoryAnalysisResults || []).find(o => o.resultId === id)
  };
  return maps[type] ? maps[type]() : true;
};
(D.regulatorySearchIndex || []).filter(s => ['IMPROVEMENT_OPPORTUNITY', 'ANALYSIS_RESULT'].includes(s.objectType))
  .slice(0, 20).forEach(s => {
    if (!resolveObject(s.objectType, s.objectId)) fails.orphanData.push(`${s.objectType}:${s.objectId}`);
  });

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);

if (!appJs.includes('initializeRegulatoryFinalAcceptance')) fails.engines.push('init app');
[
  'initializeRegulatoryFinalAcceptance', 'buildRegulatoryFinalAcceptanceScenarios',
  'validateRegulatoryFinalTraceability', 'detectRegulatoryFinalAcceptanceIssues',
  'calculateFinalAcceptanceHealth', 'computeRegulatoryFinalAcceptanceMetrics',
  'validateRoleAcceptanceJourney', 'renderFinalAcceptanceDashboardPanel',
  'renderFinalAcceptanceWorkbenchPanel', 'renderFinalAcceptanceAnalysisPanel',
  'renderFinalAcceptanceImprovementPanel', 'renderFinalAcceptanceRolePanel'
].forEach(fn => { if (!pubJs.includes(fn)) fails.engines.push(fn); });

if (!pubJs.includes('最终验收总览')) fails.engines.push('overview UI');
if (!pubJs.includes('最终验收待办')) fails.engines.push('workbench UI');
if (!pubJs.includes('全平台监管链路完整性')) fails.engines.push('analysis UI');

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const m = D.regulatoryFinalAcceptanceMetrics || {};
const full = results.filter(r => r.traceabilityStatus === 'FULL_TRACEABLE').length;
const partial = results.filter(r => r.traceabilityStatus === 'PARTIAL_TRACEABLE').length;
const not = results.filter(r => r.traceabilityStatus === 'NOT_TRACEABLE').length;
const allFails = Object.values(fails).flat();

const result = {
  phase: 'Phase 31 — 全平台最终业务验收',
  publicPageCount,
  finalAcceptanceScenarioCheck: fails.scenario.length === 0 ? '通过' : '不通过',
  finalTraceabilityCheck: fails.trace.length === 0 ? '通过' : '不通过',
  realBusinessDataCheck: fails.business.length === 0 ? '通过' : '不通过',
  finalAcceptanceHealthCheck: fails.health.length === 0 ? '通过' : '不通过',
  issueRegisterCheck: fails.issues.length === 0 ? '通过' : '不通过',
  humanDecisionCheck: fails.human.length === 0 ? '通过' : '不通过',
  simulationIsolationCheck: fails.simulation.length === 0 ? '通过' : '不通过',
  permissionCheck: fails.permission.length === 0 ? '通过' : '不通过',
  authorizationCheck: fails.authorization.length === 0 ? '通过' : '不通过',
  auditCheck: fails.audit.length === 0 ? '通过' : '不通过',
  duplicateEntityCheck: fails.duplicate.length === 0 ? '通过' : '不通过',
  orphanPageCheck: fails.orphanPage.length === 0 ? '通过' : '不通过',
  orphanDataObjectCheck: fails.orphanData.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  finalAcceptanceScenarioCount: m.scenarioCount || scenarios.length,
  fullTraceableCount: full,
  partialTraceableCount: partial,
  notTraceableCount: not,
  passHealthStatus: health.overallStatus,
  passCount: scenarios.filter(s => s.status === 'PASSED').length,
  passWithGapsCount: scenarios.filter(s => s.status === 'GAPS' || s.status === 'RUNNING').length,
  atRiskCount: scenarios.filter(s => s.status === 'AT_RISK').length,
  blockedCount: scenarios.filter(s => s.status === 'BLOCKED').length,
  issueCount: issues.length,
  nodeSyntaxCheck: nodeCheck,
  allPass: allFails.length === 0 && nodeCheck === '通过',
  failures: allFails.slice(0, 30)
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
