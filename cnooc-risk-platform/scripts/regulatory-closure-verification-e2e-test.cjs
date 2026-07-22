#!/usr/bin/env node
/**
 * Phase 26 E2E — 财务领域整改验证闭环
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
  sandbox.App.finalizeRegulatoryPlatform();
  sandbox.App.initializeDataAdaptation();
  sandbox.App.initializeBatchAdaptation();
  sandbox.App.initializeDomainClosure();
  sandbox.App.initializeClosureVerification();
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE', userType: 'GROUP_REGULATORY' });
  sandbox.App.currentRegulatoryUserId = 'U-GROUP-REG';
  sandbox.App.canRegulatoryAccess = (uid, rt, rid, act) => ({ allowed: true });
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];
const step = (id, name, pass, detail) => results.push({ id, name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });

const financeInit = App.getDomainAdaptationResult('finance');
const blocker = App.getFinanceDomainClosureBlocker();
step('CV-E2E-01', '财务领域→闭环状态→NO_VERIFICATION_CHAIN',
  financeInit?.closedLoopStatus === 'PARTIAL_CLOSED_LOOP' && blocker === 'NO_VERIFICATION_CHAIN',
  `${financeInit?.closedLoopStatus} / ${blocker}`);

const ev0 = App.getClosureVerificationEvidence('RECT-202601001');
step('CV-E2E-02', '整改任务 RECT-202601001→验证证据→MISSING',
  ev0.evidenceStatus === 'MISSING', ev0.evidenceStatus);

const submit = App.submitClosureVerificationEvidence({
  rectificationTaskId: 'RECT-202601001',
  evidenceType: '经营指标监测报告',
  evidenceSource: '财务资金部'
});
const auditSubmit = (D.regulatoryAuditLogs || []).some(l => l.actionType === 'SUBMIT');
step('CV-E2E-03', '提交验证证据→SUBMITTED→审计日志',
  submit.success && submit.evidence?.evidenceStatus === 'SUBMITTED' && auditSubmit,
  submit.evidence?.evidenceStatus);

const reject = App.verifyClosureEvidence(submit.evidence.evidenceId, { approved: false, reason: '材料不完整' });
const afterReject = App.getDomainAdaptationResult('finance');
step('CV-E2E-04', '人工验证→REJECTED→仍然 PARTIAL_CLOSED_LOOP',
  reject.success && reject.evidence?.verificationStatus === 'REJECTED' && afterReject?.closedLoopStatus === 'PARTIAL_CLOSED_LOOP',
  afterReject?.closedLoopStatus);

const resubmit = App.submitClosureVerificationEvidence({
  rectificationTaskId: 'RECT-202601001',
  evidenceType: '补充整改证据包',
  evidenceSource: '财务资金部'
});
App._markEvidenceUnderReview(resubmit.evidence.evidenceId);
const under = App.getClosureVerificationEvidence('RECT-202601001');
const underReviewOk = under.evidenceStatus === 'UNDER_REVIEW';
const verify = App.verifyClosureEvidence(resubmit.evidence.evidenceId, { approved: true, verifiedBy: 'U-GROUP-REG' });
step('CV-E2E-05', '重新提交→UNDER_REVIEW→VERIFIED',
  underReviewOk && verify.evidence?.verificationStatus === 'VERIFIED',
  `review=${under.evidenceStatus} verify=${verify.evidence?.verificationStatus}`);

const afterVerify = App.getDomainAdaptationResult('finance');
step('CV-E2E-06', 'VERIFIED→重新计算闭环成熟度→FULL_CLOSED_LOOP',
  afterVerify?.closedLoopStatus === 'FULL_CLOSED_LOOP',
  afterVerify?.closedLoopStatus);

const perf = App.refreshRegulatoryPerformanceFromClosureVerification();
const reassess = App.reassessImprovementAfterClosureVerification('finance');
step('CV-E2E-07', 'FULL_CLOSED_LOOP→监管绩效→持续改进重新评估',
  perf?.rectificationClosureRate != null && reassess?.closedLoopStatus === 'FULL_CLOSED_LOOP',
  `closureRate=${perf?.rectificationClosureRate}`);

step('CV-E2E-08', '财务闭环看板UI', typeof App.renderFinanceClosureChainPanel() === 'string');
step('CV-E2E-09', '工作台验证面板UI', typeof App.renderClosureVerificationWorkbenchPanel() === 'string');
step('CV-E2E-10', '快照可追溯', (D.regulatoryDomainClosureSnapshots || []).length > 0);

const failed = results.filter(r => !r.pass);
console.log(JSON.stringify({
  phase: 'Phase 26 E2E',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  financeFinalStatus: afterVerify?.closedLoopStatus,
  results,
  allPass: failed.length === 0
}, null, 2));
process.exit(failed.length === 0 ? 0 : 1);
