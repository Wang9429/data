#!/usr/bin/env node
/**
 * Phase 26 — 财务领域整改验证与监管闭环验收
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
  pages: [], initial: [], evidence: [], engines: [], integrity: [], fake: [],
  permission: [], audit: [], freeze: [], investment: []
};

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const financeResult = (D.regulatoryDomainAdaptationResults || []).find(r => r.domainId === 'finance');
const initialFinanceStatus = financeResult?.closedLoopStatus;
const initialGap = App.getFinanceDomainClosureBlocker();

if (initialFinanceStatus !== 'PARTIAL_CLOSED_LOOP') fails.initial.push(`initialFinanceStatus=${initialFinanceStatus}`);
if (initialGap !== 'NO_VERIFICATION_CHAIN') fails.initial.push(`initialGap=${initialGap}`);

const missingEv = App.getClosureVerificationEvidence('RECT-202601001');
if (missingEv.evidenceStatus !== 'MISSING') fails.evidence.push('initial evidence not MISSING');
const missingDoesNotClose = financeResult?.closedLoopStatus === 'PARTIAL_CLOSED_LOOP';
if (!missingDoesNotClose) fails.evidence.push('missingEvidenceDoesNotClose');

const submitRes = App.submitClosureVerificationEvidence({
  rectificationTaskId: 'RECT-202601001',
  evidenceType: '月度经营监测报告',
  evidenceSource: '财务资金部'
});
const afterSubmit = App.getDomainAdaptationResult('finance');
if (!submitRes.success) fails.evidence.push('submit failed');
if (submitRes.evidence?.evidenceStatus !== 'SUBMITTED') fails.evidence.push('submit status');
if (afterSubmit?.closedLoopStatus !== 'PARTIAL_CLOSED_LOOP') fails.evidence.push('submittedEvidenceDoesNotClose');

const evId = submitRes.evidence?.evidenceId;
const rejectRes = App.verifyClosureEvidence(evId, { approved: false, reason: '证据不充分' });
const afterReject = App.getDomainAdaptationResult('finance');
if (!rejectRes.success) fails.evidence.push('reject failed');
if (afterReject?.closedLoopStatus !== 'PARTIAL_CLOSED_LOOP') fails.evidence.push('rejectedEvidenceDoesNotClose');
if (App.getFinanceDomainClosureBlocker() !== 'NO_VERIFICATION_CHAIN') fails.evidence.push('reject blocker');

const resubmit = App.submitClosureVerificationEvidence({
  rectificationTaskId: 'RECT-202601001',
  evidenceType: '补充整改执行报告',
  evidenceSource: '财务资金部'
});
const evId2 = resubmit.evidence?.evidenceId;
App._markEvidenceUnderReview(evId2);
const underReview = App.getClosureVerificationEvidence('RECT-202601001');
if (underReview.evidenceStatus !== 'UNDER_REVIEW') fails.evidence.push('under review status');
if ((App.getDomainAdaptationResult('finance') || {}).closedLoopStatus !== 'PARTIAL_CLOSED_LOOP') fails.evidence.push('underReviewDoesNotClose');

const verifyRes = App.verifyClosureEvidence(evId2, { approved: true, reason: '人工确认整改措施已落实', verifiedBy: 'U-GROUP-REG' });
const afterVerify = App.getDomainAdaptationResult('finance');
if (!verifyRes.success) fails.evidence.push('verify failed: ' + (verifyRes.message || ''));
if (afterVerify?.closedLoopStatus !== 'FULL_CLOSED_LOOP') fails.evidence.push(`verifiedEvidenceCanClose=${afterVerify?.closedLoopStatus}`);
if (!afterVerify?.verifiedCount) fails.evidence.push('verifiedCount missing');

const chain = App.getFinanceRectificationChain();
if (!chain.task || chain.taskId !== 'RECT-202601001') fails.integrity.push('chain task');
if (!chain.risk) fails.integrity.push('chain risk');

if (!(D.regulatoryClosureVerificationScenarios || []).length >= 6) fails.integrity.push('scenarios');
if (!D.regulatoryFinanceClosureVerificationIndex) fails.integrity.push('finance index');

const fakeVerified = (D.regulatoryClosureVerificationEvidence || []).filter(e => e.verificationStatus === 'VERIFIED' && !e.verifiedAt);
if (fakeVerified.length) fails.fake.push('fake verified without timestamp');

[
  'initializeClosureVerification', 'submitClosureVerificationEvidence', 'verifyClosureEvidence',
  'getClosureVerificationEvidence', 'getFinanceRectificationChain', 'getFinanceDomainClosureBlocker',
  'recalculateFinanceDomainClosure', 'renderFinanceClosureVerificationPanel', 'renderFinanceClosureChainPanel',
  'renderClosureVerificationWorkbenchPanel', 'takeDomainClosureSnapshot'
].forEach(fn => { if (!pubJs.includes(fn)) fails.engines.push(`missing ${fn}`); });

if (!appJs.includes('initializeClosureVerification')) fails.engines.push('init not wired');
if (!pubJs.includes('canRegulatoryAccess')) fails.permission.push('permission missing');

const auditSubmit = (D.regulatoryAuditLogs || []).some(l => l.actionType === 'SUBMIT' && l.objectType === 'regulatoryClosureVerificationEvidence');
const auditVerify = (D.regulatoryAuditLogs || []).some(l => l.actionType === 'APPROVE' && l.objectType === 'regulatoryClosureVerificationEvidence');
if (!auditSubmit || !auditVerify) fails.audit.push('audit trail incomplete');

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);
if (pubJs.includes('renderPenetration') && appJs.includes('function renderPenetration')) fails.investment.push('renderPenetration modified check');

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const allFails = Object.values(fails).flat();
const result = {
  phase: 'Phase 26 — 整改验证闭环',
  publicPageCount,
  initialFinanceStatus,
  initialGap,
  missingEvidenceDoesNotClose: missingDoesNotClose,
  submittedEvidenceDoesNotClose: afterSubmit?.closedLoopStatus === 'PARTIAL_CLOSED_LOOP',
  rejectedEvidenceDoesNotClose: afterReject?.closedLoopStatus === 'PARTIAL_CLOSED_LOOP',
  verifiedEvidenceCanClose: afterVerify?.closedLoopStatus === 'FULL_CLOSED_LOOP',
  permissionCheck: fails.permission.length === 0 ? '通过' : '不通过',
  auditTrailCheck: fails.audit.length === 0 ? '通过' : '不通过',
  realDataIntegrityCheck: fails.integrity.length === 0 ? '通过' : '不通过',
  noFakeClosureCheck: fails.fake.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 && fails.investment.length === 0 ? '通过' : '不通过',
  nodeSyntaxCheck: nodeCheck,
  allPass: allFails.length === 0 && nodeCheck === '通过',
  failures: allFails
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
