#!/usr/bin/env node
/**
 * Phase 29 E2E — 跨组织协同场景 CO-01 ~ CO-08
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function loadApp(userId, roleId) {
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
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: userId || 'U-GROUP-REG', roleId: roleId || 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE', userType: 'GROUP_REGULATORY' });
  sandbox.App.currentRegulatoryUserId = userId || 'U-GROUP-REG';
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];
const step = (id, name, pass, detail) => results.push({ id, name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });

// CO-01 跨法人/跨组织风险协同
const crossCase = (D.regulatoryCoordinationCases || []).find(c => c.caseType === 'CROSS_DOMAIN_RISK' || c.caseType === 'CROSS_ENTITY_RISK');
const resp = crossCase ? App.identifyRegulatoryCoordinationResponsibility(crossCase.id) : null;
let co01 = !!crossCase && !!resp?.primaryOwner && resp.responsibilityEvidence?.length > 0;
if (crossCase && crossCase.status === 'PROPOSED') {
  const conf = App.confirmRegulatoryCoordinationCase(crossCase.id, { reason: 'CO-01确认' });
  const tasks = conf.tasks || [];
  const joint = App.buildJointRectificationVerification(crossCase.id);
  co01 = co01 && conf.success && tasks.length > 0 && !!joint;
}
step('CO-01', '跨法人风险协同链路', co01, crossCase?.id);

// CO-02 跨领域风险协同
const domainCase = (D.regulatoryCoordinationCases || []).find(c => c.caseType === 'CROSS_DOMAIN_RISK');
step('CO-02', '跨领域风险协同', !!domainCase && (domainCase.affectedDomains || []).length >= 2, domainCase?.affectedDomains?.join(','));

// CO-03 数据质量跨域影响
const dqCase = (D.regulatoryCoordinationCases || []).find(c => c.caseType === 'DATA_QUALITY_MULTI_KRI');
step('CO-03', '数据质量跨域影响', !!dqCase && dqCase.sourceType === 'regulatoryDataQualityIssues', dqCase?.id);

// CO-04 超期任务升级
const overdueTask = (D.regulatoryCoordinationTasks || []).find(t => t.status === 'OVERDUE') || (D.regulatoryCoordinationTasks || [])[0];
if (overdueTask) overdueTask.status = 'OVERDUE';
const esc = App.proposeRegulatoryEscalation({ taskId: overdueTask?.id, escalationType: 'TASK_OVERDUE' });
const escConf = esc.escalation ? App.confirmRegulatoryEscalation(esc.escalation.escalationId, { reason: 'CO-04' }) : {};
step('CO-04', '超期任务升级需人工确认', esc.success && esc.escalation?.requiresHumanDecision && escConf.success, esc.escalation?.level);

// CO-05 多组织联合整改
const multiCase = (D.regulatoryCoordinationCases || []).find(c => (c.supportingOrganizations || []).length >= 1);
if (multiCase && multiCase.status !== 'CONFIRMED') App.confirmRegulatoryCoordinationCase(multiCase.id, { reason: 'CO-05' });
const joint = multiCase ? App.buildJointRectificationVerification(multiCase.id) : null;
step('CO-05', '多组织联合整改验证', !!joint && joint.status !== 'FULLY_VERIFIED' || joint?.organizationResults?.length > 0, joint?.status);

// CO-06 协同反馈被拒绝
const task = (D.regulatoryCoordinationTasks || []).find(t => t.status === 'READY' || t.status === 'BLOCKED');
let co06 = false;
if (task) {
  const fb = App.submitRegulatoryCoordinationFeedback({ taskId: task.id, feedbackType: 'PROGRESS_UPDATE', evidence: '初步材料' });
  const rej = App.reviewRegulatoryCoordinationFeedback(fb.feedback?.feedbackId, { approved: false, reason: '材料不充分' });
  const resubmit = App.submitRegulatoryCoordinationFeedback({ taskId: task.id, feedbackType: 'DATA_SUBMISSION', evidence: '补充材料' });
  co06 = rej.feedback?.status === 'REJECTED' && rej.feedback?.supplementRequired && resubmit.success;
}
step('CO-06', '协同反馈被拒绝后重新提交', co06, task?.id);

// CO-07 跨组织权限隔离
const allCases = D.regulatoryCoordinationCases || [];
const entityA = allCases.find(c => (c.affectedEntities || []).includes('B001'));
const entityB = allCases.find(c => (c.affectedEntities || []).includes('D001') && !(c.affectedEntities || []).includes('B001'));
const { App: AppEntity } = loadApp('U-ENTITY-B001', 'ROLE-ENTITY-REG');
AppEntity.regulatoryRoleScopeId = 'B001';
AppEntity.getUserRoleAssignments = () => [{ roleId: 'ROLE-ENTITY-REG', scopeType: 'ENTITY', scopeIds: ['B001'] }];
const visibleA = AppEntity.filterCoordinationCasesByScope(allCases);
const seesB = entityB ? visibleA.some(c => c.id === entityB.id) : false;
const groupVisible = App.filterCoordinationCasesByScope(allCases).length;
step('CO-07', '跨组织权限隔离', entityB ? !seesB && groupVisible >= allCases.length : groupVisible > 0, `entity sees ${visibleA.length}/${allCases.length}`);

// CO-08 协同结果评价
const evalCase = (D.regulatoryCoordinationCases || [])[0];
const eff = evalCase ? App.evaluateCoordinationEffectiveness(evalCase.id) : null;
step('CO-08', '协同结果评价与改进建议', !!eff && ['EFFECTIVE', 'PARTIALLY_EFFECTIVE', 'INEFFECTIVE', 'INSUFFICIENT_DATA'].includes(eff.overallResult) && eff.recommendations?.every(r => r.requiresHumanDecision !== false), eff?.overallResult);

// UI
step('UI-01', '集团总览协同面板', typeof App.renderCoordinationDashboardPanel() === 'string' && App.renderCoordinationDashboardPanel().includes('跨组织监管事项'));
step('UI-02', '工作台协同面板', typeof App.renderCoordinationWorkbenchPanel() === 'string' && App.renderCoordinationWorkbenchPanel().includes('我的主责事项'));
step('UI-03', '角色工作台协同', typeof App.renderCoordinationRolePanel('GROUP_REGULATORY') === 'string');

const scenarioPass = results.filter(r => r.id.startsWith('CO-')).every(r => r.pass);
const failed = results.filter(r => !r.pass);
const m = D.regulatoryCoordinationMetrics || {};
const joints = D.regulatoryJointVerificationIndex || [];

console.log(JSON.stringify({
  phase: 'Phase 29 E2E',
  scenarioResults: results.filter(r => r.id.startsWith('CO-')).map(r => ({ id: r.id, pass: r.pass })),
  scenariosPassed: results.filter(r => r.id.startsWith('CO-') && r.pass).length + '/8',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  publicPageCount: (App.publicRegulatoryPages || []).length,
  coordinationCaseCount: m.coordinationCaseCount,
  coordinationTaskCount: m.coordinationTaskCount,
  escalationCount: m.escalationCount,
  jointVerificationResults: joints.map(j => ({ caseId: j.coordinationCaseId, status: j.status })),
  results,
  allPass: failed.length === 0 && scenarioPass
}, null, 2));
process.exit(failed.length === 0 && scenarioPass ? 0 : 1);
