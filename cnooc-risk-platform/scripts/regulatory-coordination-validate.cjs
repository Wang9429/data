#!/usr/bin/env node
/**
 * Phase 29 — 集团监管运营协同与跨组织闭环处置验收
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
  pages: [], cases: [], resp: [], tasks: [], deps: [], escalation: [], feedback: [], joint: [],
  effectiveness: [], trace: [], human: [], permission: [], audit: [], freeze: [], engines: []
};

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const cases = D.regulatoryCoordinationCases || [];
if (!cases.length) fails.cases.push('no cases');
cases.forEach(c => {
  ['id', 'sourceType', 'sourceId', 'caseType', 'primaryOrganization', 'severity', 'status', 'requiresHumanDecision', 'sourceTraceability'].forEach(f => {
    if (c[f] == null && f !== 'sourceTraceability') fails.cases.push(`${c.id}.${f}`);
  });
  if (!c.sourceTraceability) fails.trace.push(`case ${c.id}`);
  if (!c.requiresHumanDecision) fails.human.push(c.id);
});

const resp = D.regulatoryCoordinationResponsibilityIndex || [];
if (!resp.length) fails.resp.push('no responsibility');
resp.forEach(r => {
  if (!r.primaryOwner || !r.responsibilityEvidence?.length) fails.resp.push(`resp ${r.caseId}`);
  if (!r.sourceTraceable) fails.trace.push(`resp ${r.caseId}`);
});

const tasks = D.regulatoryCoordinationTasks || [];
const confirmed = cases.find(c => c.status === 'CONFIRMED');
if (confirmed && !tasks.filter(t => t.coordinationCaseId === confirmed.id).length) {
  App.confirmRegulatoryCoordinationCase(confirmed.id, { reason: '验收确认' });
}
const tasksAfter = D.regulatoryCoordinationTasks || [];
if (!tasksAfter.length && cases.length) {
  const first = cases[0];
  App.canRegulatoryAccess = () => ({ allowed: true });
  App.confirmRegulatoryCoordinationCase(first.id, { reason: '验收' });
}
(D.regulatoryCoordinationTasks || []).forEach(t => {
  if (!t.id || !t.coordinationCaseId || !t.sourceType || !t.sourceId || !t.organizationId || !t.taskType) fails.tasks.push(`task ${t.id}`);
  if (!t.sourceTraceability) fails.trace.push(`task ${t.id}`);
  if (!['BLOCKED', 'READY', 'IN_PROGRESS', 'COMPLETED', 'OVERDUE'].includes(t.status)) fails.tasks.push(`status ${t.id}`);
});

App.buildRegulatoryTaskDependencies();
const blocked = (D.regulatoryCoordinationTasks || []).find(t => (t.dependencyTasks || []).length && t.status === 'BLOCKED');
if ((D.regulatoryCoordinationTasks || []).some(t => (t.dependencyTasks || []).length) && !blocked) fails.deps.push('blocked state');

const esc = App.proposeRegulatoryEscalation({ caseId: cases[0]?.id, reason: '验收升级' });
if (!esc.success || !esc.escalation?.requiresHumanDecision) fails.escalation.push('propose');
App.canRegulatoryAccess = () => ({ allowed: true });
const escConfirm = App.confirmRegulatoryEscalation(esc.escalation?.escalationId, { reason: '确认' });
if (!escConfirm.success) fails.escalation.push('confirm');

const taskForFb = (D.regulatoryCoordinationTasks || []).find(t => t.status === 'READY' || t.status === 'BLOCKED');
if (taskForFb) {
  const fb = App.submitRegulatoryCoordinationFeedback({ taskId: taskForFb.id, feedbackType: 'PROGRESS_UPDATE', evidence: '进度更新' });
  if (!fb.success) fails.feedback.push('submit');
  const review = App.reviewRegulatoryCoordinationFeedback(fb.feedback?.feedbackId, { approved: false, reason: '材料不足' });
  if (review.feedback?.status !== 'REJECTED') fails.feedback.push('reject');
}

const caseId = (D.regulatoryCoordinationCases || [])[0]?.id;
if (caseId) {
  const joint = App.buildJointRectificationVerification(caseId);
  if (!joint || !['PENDING', 'PARTIALLY_VERIFIED', 'FULLY_VERIFIED', 'REJECTED'].includes(joint.status)) fails.joint.push('joint verify');
  const eff = App.evaluateCoordinationEffectiveness(caseId);
  if (!eff || !eff.overallResult) fails.effectiveness.push('effectiveness');
  (eff?.recommendations || []).forEach(r => { if (!r.requiresHumanDecision) fails.human.push('eff rec'); });
  if (eff?.trendStatus === 'UP' || eff?.trendStatus === 'DOWN') fails.effectiveness.push('fake trend');
}

const queueTypes = ['COORDINATION_CONFIRMATION', 'COORDINATION_TASK', 'COORDINATION_FEEDBACK', 'ESCALATION_CONFIRMATION', 'JOINT_VERIFICATION'];
queueTypes.forEach(qt => {
  const q = (D.regulatoryQueue || []).filter(x => x.queueType === qt);
  if (!q.length && qt === 'COORDINATION_CONFIRMATION' && cases.some(c => c.status === 'PROPOSED')) fails.cases.push(`queue ${qt}`);
});

if ((D.regulatoryCoordinationScenarios || []).length < 8) fails.cases.push('scenarios < 8');

[
  'initializeRegulatoryCoordination', 'identifyRegulatoryCoordinationCases', 'identifyRegulatoryCoordinationResponsibility',
  'confirmRegulatoryCoordinationCase', 'buildRegulatoryCoordinationTasks', 'buildRegulatoryTaskDependencies',
  'proposeRegulatoryEscalation', 'confirmRegulatoryEscalation', 'rejectRegulatoryEscalation',
  'submitRegulatoryCoordinationFeedback', 'buildJointRectificationVerification', 'evaluateCoordinationEffectiveness',
  'filterCoordinationCasesByScope', 'renderCoordinationDashboardPanel', 'renderCoordinationWorkbenchPanel', 'renderCoordinationRolePanel'
].forEach(fn => { if (!pubJs.includes(fn)) fails.engines.push(fn); });

if (!appJs.includes('initializeRegulatoryCoordination')) fails.engines.push('init not wired');
if (!pubJs.includes('canRegulatoryAccess')) fails.permission.push('permission');
if (!pubJs.includes('createRegulatoryAuditLog')) fails.audit.push('audit');

const caseId0 = cases[0]?.id;
if (caseId0) {
  App.canRegulatoryAccess = () => ({ allowed: true });
  App.confirmRegulatoryCoordinationCase(caseId0, { approved: false, reason: '测试拒绝' });
  const audited = (D.regulatoryAuditLogs || []).some(l => l.objectType === 'regulatoryCoordinationCases' && l.objectId === caseId0);
  if (!audited) fails.audit.push('case audit');
}

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const m = D.regulatoryCoordinationMetrics || {};
const allFails = Object.values(fails).flat();
const result = {
  phase: 'Phase 29 — 跨组织监管协同',
  publicPageCount,
  coordinationCaseCheck: fails.cases.length === 0 ? '通过' : '不通过',
  responsibilityCheck: fails.resp.length === 0 ? '通过' : '不通过',
  coordinationTaskCheck: fails.tasks.length === 0 ? '通过' : '不通过',
  taskDependencyCheck: fails.deps.length === 0 ? '通过' : '不通过',
  escalationCheck: fails.escalation.length === 0 ? '通过' : '不通过',
  feedbackCheck: fails.feedback.length === 0 ? '通过' : '不通过',
  jointVerificationCheck: fails.joint.length === 0 ? '通过' : '不通过',
  coordinationEffectivenessCheck: fails.effectiveness.length === 0 ? '通过' : '不通过',
  sourceTraceabilityCheck: fails.trace.length === 0 ? '通过' : '不通过',
  humanDecisionCheck: fails.human.length === 0 ? '通过' : '不通过',
  permissionCheck: fails.permission.length === 0 ? '通过' : '不通过',
  auditCheck: fails.audit.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  coordinationCaseCount: m.coordinationCaseCount || cases.length,
  primaryOwnerCount: m.primaryOwnerCount || resp.length,
  coordinationTaskCount: m.coordinationTaskCount || (D.regulatoryCoordinationTasks || []).length,
  escalationCount: m.escalationCount || (D.regulatoryEscalationRecords || []).length,
  jointRectificationCount: m.jointRectificationCount,
  jointVerificationCount: m.jointVerificationCount,
  nodeSyntaxCheck: nodeCheck,
  allPass: allFails.length === 0 && nodeCheck === '通过',
  failures: allFails
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
