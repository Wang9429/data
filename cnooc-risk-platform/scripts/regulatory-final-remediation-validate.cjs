#!/usr/bin/env node
/**
 * Phase 32 — 最终验收问题整改与交付收口验收
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
  sandbox.App.initializeRegulatoryFinalRemediation();
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE', userType: 'GROUP_REGULATORY' });
  sandbox.App.currentRegulatoryUserId = 'U-GROUP-REG';
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  return sandbox;
}

const ctx = loadSandbox();
const D = ctx.APP_DATA;
const App = ctx.App;
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');

const fails = {
  pages: [], issues: [], remediation: [], trace: [], readiness: [], checklist: [],
  transition: [], audit: [], permission: [], freeze: [], engines: [], phase21: []
};

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const issues = D.regulatoryFinalAcceptanceIssues || [];
const indexes = D.regulatoryFinalAcceptanceRemediationIndexes || [];
if (issues.length < 15) fails.issues.push(`issues=${issues.length}`);
if (indexes.length !== issues.length) fails.remediation.push(`indexes=${indexes.length} issues=${issues.length}`);

issues.forEach(i => {
  if (!i.sourceType || !i.sourceId) fails.trace.push(`issue ${i.id} no source`);
  const idx = indexes.find(r => r.issueId === i.id);
  if (!idx) fails.remediation.push(`no index ${i.id}`);
  else {
    ['remediationId', 'gapType', 'sourceType', 'sourceId', 'responsibleOrganization', 'status', 'sourceTraceability'].forEach(f => {
      if (idx[f] == null) fails.remediation.push(`${i.id}.${f}`);
    });
    if (!['DATA_GAP', 'TRACEABILITY_GAP', 'VERIFICATION_GAP', 'CONFIGURATION_GAP', 'OPERATIONAL_GAP', 'GOVERNANCE_GAP', 'OTHER'].includes(idx.gapType)) {
      fails.remediation.push(`gapType ${i.id}`);
    }
  }
});

const verifiedWithoutEvidence = indexes.filter(r => r.status === 'VERIFIED' && !r.verificationResult?.evidenceValid);
if (verifiedWithoutEvidence.length) fails.remediation.push('auto-verified without evidence');

const dataRequired = indexes.filter(r => r.status === 'DATA_REQUIRED');
dataRequired.forEach(r => {
  if (r.hasDataSupport && r.status === 'DATA_REQUIRED' && r.gapType !== 'TRACEABILITY_GAP') {
    // ok - may lack linked data
  }
});

const readiness = D.regulatoryFinalAcceptanceReadiness || App.calculateFinalAcceptanceReadiness();
if (!['READY', 'READY_WITH_GAPS', 'NOT_READY'].includes(readiness.overallStatus)) fails.readiness.push('status');
if (readiness.trendStatus !== 'INSUFFICIENT_HISTORY') fails.readiness.push('trend forged');

const checklist = D.regulatoryFinalAcceptanceDeliveryChecklist || App.buildRegulatoryFinalDeliveryChecklist();
if ((checklist.items || []).length < 16) fails.checklist.push(`items=${(checklist.items || []).length}`);
['DC-01', 'DC-02', 'DC-15', 'DC-16'].forEach(id => {
  if (!(checklist.items || []).find(i => i.id === id)) fails.checklist.push(`missing ${id}`);
});

const idx0 = indexes[0];
if (idx0) {
  const adv = App.advanceAcceptanceIssueRemediation(idx0.issueId, 'VERIFIED', {});
  if (adv.success) fails.transition.push('OPEN/OTHER to VERIFIED direct');
  const from = idx0.status;
  const target = from === 'DATA_REQUIRED' ? 'ACTION_REQUIRED' : (from === 'ACTION_REQUIRED' ? 'IN_REMEDIATION' : null);
  if (target) {
    const before = (D.regulatoryAuditLogs || []).length;
    App.advanceAcceptanceIssueRemediation(idx0.issueId, target, { approved: true, reason: '验收' });
    const after = (D.regulatoryAuditLogs || []).length;
    if (after <= before) fails.audit.push('advance no audit');
  }
}

if (!(D.regulatoryRolePermissionMap || {})['ROLE-GROUP-REG']?.includes('ACCEPTANCE_REMEDIATION_VIEW')) {
  fails.permission.push('REMEDIATION_VIEW');
}

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);

if (!appJs.includes('initializeRegulatoryFinalRemediation')) fails.engines.push('init');
[
  'initializeRegulatoryFinalRemediation', 'buildAcceptanceIssueRemediationIndexes',
  'advanceAcceptanceIssueRemediation', 'verifyAcceptanceIssueRemediation',
  'calculateFinalAcceptanceReadiness', 'buildRegulatoryFinalDeliveryChecklist',
  'renderFinalAcceptanceRemediationDashboardPanel', 'renderFinalAcceptanceRemediationWorkbenchPanel',
  'renderFinalAcceptanceRemediationImprovementPanel', 'renderFinalAcceptanceRemediationDetailPanel'
].forEach(fn => { if (!pubJs.includes(fn)) fails.engines.push(fn); });

if (!pubJs.includes('最终验收整改收口')) fails.engines.push('dashboard UI');
if (!pubJs.includes('我的验收整改事项')) fails.engines.push('workbench UI');

let phase21PageCheck = '通过';
try {
  let out;
  try {
    out = execSync('node scripts/public-regulatory-validate.cjs', { cwd: ROOT, stdio: 'pipe' }).toString();
  } catch (e) {
    out = (e.stdout || '').toString();
  }
  const j = JSON.parse(out);
  if (j.publicPageCount !== 70) phase21PageCheck = `pages=${j.publicPageCount}`;
} catch {
  phase21PageCheck = 'parse fail';
}

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const statusDist = {};
indexes.forEach(r => { statusDist[r.status] = (statusDist[r.status] || 0) + 1; });
const results = D.regulatoryFinalAcceptanceResultIndexes || [];
const allFails = Object.values(fails).flat();

const result = {
  phase: 'Phase 32 — 验收问题整改与交付收口',
  publicPageCount,
  issueIdentificationCheck: fails.issues.length === 0 ? '通过' : '不通过',
  remediationIndexCheck: fails.remediation.length === 0 ? '通过' : '不通过',
  traceabilityCheck: fails.trace.length === 0 ? '通过' : '不通过',
  noAutoVerifyCheck: verifiedWithoutEvidence.length === 0 ? '通过' : '不通过',
  stateTransitionCheck: fails.transition.length === 0 ? '通过' : '不通过',
  auditCheck: fails.audit.length === 0 ? '通过' : '不通过',
  permissionCheck: fails.permission.length === 0 ? '通过' : '不通过',
  readinessCheck: fails.readiness.length === 0 ? '通过' : '不通过',
  deliveryChecklistCheck: fails.checklist.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  phase21PageCountFix: phase21PageCheck === '通过' ? '通过' : phase21PageCheck,
  issueCount: issues.length,
  remediationCount: indexes.length,
  statusDistribution: statusDist,
  verifiedCount: statusDist.VERIFIED || 0,
  fullTraceableCount: results.filter(r => r.traceabilityStatus === 'FULL_TRACEABLE').length,
  partialTraceableCount: results.filter(r => r.traceabilityStatus === 'PARTIAL_TRACEABLE').length,
  notTraceableCount: results.filter(r => r.traceabilityStatus === 'NOT_TRACEABLE').length,
  readinessStatus: readiness.overallStatus,
  deliveryCompletedCount: checklist.completedCount,
  deliveryDataRequiredCount: checklist.dataRequiredCount,
  nodeSyntaxCheck: nodeCheck,
  allPass: allFails.length === 0 && nodeCheck === '通过' && phase21PageCheck === '通过',
  failures: allFails.slice(0, 30)
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
