#!/usr/bin/env node
/**
 * Phase 32 E2E — 验收问题整改闭环与交付收口
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function loadApp(userId, roleId, roleType) {
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
  sandbox.App.initializeRegulatoryOperatingCycle();
  sandbox.App.initializeRegulatoryOperatingRuntime();
  sandbox.App.initializeRegulatoryCoordination();
  sandbox.App.initializeRegulatoryOperationalScenarios();
  sandbox.App.initializeRegulatoryFinalAcceptance();
  sandbox.App.initializeRegulatoryFinalRemediation();
  sandbox.App.getCurrentRegulatoryUser = () => ({
    userId: userId || 'U-GROUP-REG',
    roleId: roleId || 'ROLE-GROUP-REG',
    organizationId: 'G001',
    status: 'ACTIVE',
    userType: roleType || 'GROUP_REGULATORY'
  });
  sandbox.App.currentRegulatoryUserId = userId || 'U-GROUP-REG';
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];
const step = (id, name, pass, detail) => results.push({ id, name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });

const issues = D.regulatoryFinalAcceptanceIssues || [];
const indexes = D.regulatoryFinalAcceptanceRemediationIndexes || [];

// FA-01 问题识别 → 整改 → 验证
const fa01Issue = issues.find(i => i.scenarioId && (D.regulatoryFinalAcceptanceScenarios || []).find(s => s.id === i.scenarioId && s.scenarioCode === 'FA-01'));
const fa01Idx = indexes.find(r => r.issueId === (fa01Issue?.id || issues[0]?.id));
step('FA-01', '问题识别与整改索引', !!fa01Idx && fa01Idx.sourceType && fa01Idx.gapType, fa01Idx?.status);

// FA-02 数据不足 → DATA_REQUIRED
const dataReq = indexes.filter(r => r.status === 'DATA_REQUIRED');
step('FA-02', '数据不足标记 DATA_REQUIRED', dataReq.length > 0 && dataReq.every(r => r.requiresAdditionalData !== false), `count=${dataReq.length}`);

// FA-03 验证失败 → 重新整改
const { App: App3, D: D3 } = loadApp();
const indexes3 = D3.regulatoryFinalAcceptanceRemediationIndexes || [];
const verifyIdx = indexes3.find(r => r.status === 'PENDING_VERIFICATION');
if (verifyIdx) {
  const beforeAudit = (D3.regulatoryAuditLogs || []).length;
  const vrf = App3.verifyAcceptanceIssueRemediation(verifyIdx.issueId, { passed: false, reason: '证据不足' });
  const afterAudit = (D3.regulatoryAuditLogs || []).length;
  step('FA-03', '验证失败重新进入整改', vrf.success && afterAudit > beforeAudit, vrf.status);
} else {
  const failIdx = indexes3.find(r => r.status === 'ACTION_REQUIRED');
  if (failIdx) {
    failIdx.status = 'PENDING_VERIFICATION';
    const vrf = App3.verifyAcceptanceIssueRemediation(failIdx.issueId, { passed: false, reason: '证据不足' });
    step('FA-03', '验证失败重新进入整改', vrf.success && (vrf.status === 'VERIFICATION_FAILED' || vrf.status === 'ACTION_REQUIRED'), vrf.status);
  } else {
    const trans = App._REMEDIATION_TRANSITIONS.VERIFICATION_FAILED || [];
    step('FA-03', '验证失败重新进入整改', trans.includes('ACTION_REQUIRED'), 'transition defined');
  }
}

// FA-04 人工确认 → 状态变更 → 审计
const { App: App2, D: D2 } = loadApp();
const indexes2 = D2.regulatoryFinalAcceptanceRemediationIndexes || [];
const humanIdx = indexes2.find(r => r.status === 'DATA_REQUIRED') || indexes2.find(r => r.status === 'ACTION_REQUIRED');
if (humanIdx) {
  const from = humanIdx.status;
  const target = from === 'DATA_REQUIRED' ? 'ACTION_REQUIRED' : 'IN_REMEDIATION';
  const before = (D2.regulatoryAuditLogs || []).length;
  const adv = App2.advanceAcceptanceIssueRemediation(humanIdx.issueId, target, { approved: true, reason: '人工确认' });
  const after = (D2.regulatoryAuditLogs || []).length;
  step('FA-04', '人工确认状态变更与审计', adv.success && after > before, `${from}->${adv.status}`);
} else step('FA-04', '人工确认状态变更与审计', false, 'no index');

// FA-05 最终验收准备度
const readiness = D.regulatoryFinalAcceptanceReadiness || App.calculateFinalAcceptanceReadiness();
step('FA-05', '最终验收准备度动态计算', ['READY', 'READY_WITH_GAPS', 'NOT_READY'].includes(readiness.overallStatus) && readiness.trendStatus === 'INSUFFICIENT_HISTORY', readiness.overallStatus);

// FA-06 最终交付清单
const checklist = D.regulatoryFinalAcceptanceDeliveryChecklist || App.buildRegulatoryFinalDeliveryChecklist();
step('FA-06', '最终交付清单生成', (checklist.items || []).length >= 16 && checklist.items.some(i => i.id === 'DC-15'), `${checklist.completedCount}/${checklist.items.length}`);

// FA-07 4类角色查看整改事项
['GROUP_LEADER', 'GROUP_REGULATORY', 'DOMAIN_REGULATOR', 'ENTITY_REGULATOR'].forEach(role => {
  const html = App.renderFinalAcceptanceRemediationRolePanel(role);
  step(`FA-07-${role}`, `${role} 验收整改事项`, typeof html === 'string' && html.includes('验收整改事项'), 'OK');
});

// FA-08 权限隔离
const denied = loadApp('U-ENTITY-A', 'ROLE-ENTITY-REG', 'ENTITY_REGULATOR');
denied.App.canRegulatoryAccess = () => ({ allowed: false });
const denyAdv = denied.App.advanceAcceptanceIssueRemediation(indexes[0]?.issueId, 'VERIFIED', {});
step('FA-08', '权限隔离', !denyAdv.success, denyAdv.message);

// FA-09 多跳返回（面包屑/返回能力存在）
step('FA-09', '多跳返回能力', App.renderPublicBackButton && pubHasBack(), typeof App.renderPublicBackButton('regulatory-workbench'));

function pubHasBack() {
  const pub = fs.readFileSync(path.join(ROOT, 'js/public-regulatory.js'), 'utf8');
  return pub.includes('supportsBackNavigation') && pub.includes('renderPublicBackButton');
}

// UI panels
step('UI-01', '集团总览整改收口', App.renderFinalAcceptanceRemediationDashboardPanel().includes('最终验收整改收口'));
step('UI-02', '工作台整改事项', App.renderFinalAcceptanceRemediationWorkbenchPanel().includes('我的验收整改事项'));
step('UI-03', '持续改进整改闭环', App.renderFinalAcceptanceRemediationImprovementPanel().includes('验收问题整改闭环'));
step('UI-04', '场景追溯整改进度', App.renderFinalAcceptanceRemediationDetailPanel().includes('验收场景追溯'));

// No auto-verify all 15
const allVerified = indexes.length === 15 && indexes.every(r => r.status === 'VERIFIED');
step('NO-FAKE', '15问题未全部伪造VERIFIED', !allVerified, `verified=${indexes.filter(r => r.status === 'VERIFIED').length}`);

const failed = results.filter(r => !r.pass);
const statusDist = {};
indexes.forEach(r => { statusDist[r.status] = (statusDist[r.status] || 0) + 1; });

console.log(JSON.stringify({
  phase: 'Phase 32 E2E',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  publicPageCount: (App.publicRegulatoryPages || []).length,
  issueCount: issues.length,
  statusDistribution: statusDist,
  readinessStatus: readiness.overallStatus,
  deliveryChecklist: { completed: checklist.completedCount, total: checklist.items.length, dataRequired: checklist.dataRequiredCount },
  fullTraceableCount: (D.regulatoryFinalAcceptanceResultIndexes || []).filter(r => r.traceabilityStatus === 'FULL_TRACEABLE').length,
  partialTraceableCount: (D.regulatoryFinalAcceptanceResultIndexes || []).filter(r => r.traceabilityStatus === 'PARTIAL_TRACEABLE').length,
  results,
  allPass: failed.length === 0
}, null, 2));
process.exit(failed.length === 0 ? 0 : 1);
