#!/usr/bin/env node
/**
 * Phase 31 E2E — 最终验收场景 FA-01 ~ FA-09 + 4 类角色旅程
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
const get = code => (D.regulatoryFinalAcceptanceScenarios || []).find(s => s.scenarioCode === code);

// FA-01 集团领导重大风险发现与决策
const fa01 = get('FA-01');
step('FA-01', '集团领导重大风险发现与决策', !!fa01 && fa01.requiresHumanDecision === true && fa01.sourceType === 'warnings',
  `trace=${fa01?.traceabilityStatus} status=${fa01?.status}`);

// FA-02 数据质量影响
const fa02 = get('FA-02');
step('FA-02', '数据质量影响KRI simulationOnly', !!fa02 && fa02.simulationOnly === true && fa02.sourceType === 'regulatoryDataQualityIssues',
  fa02?.traceabilityStatus);

// FA-03 规则变更治理
const fa03 = get('FA-03');
const ruleChange = (D.regulatoryRuleChangeRequests || [])[0];
const activeRule = (D.regulatoryRules || []).find(r => r.status === 'ACTIVE');
step('FA-03', '规则变更完整治理', !!fa03 && fa03.simulationOnly === true && (!ruleChange || ruleChange.status !== 'ACTIVE'),
  `changeReq=${ruleChange?.status || 'N/A'}`);

// FA-04 跨法人协同
const fa04 = get('FA-04');
const entityUser = loadApp('U-ENTITY-A', 'ROLE-ENTITY-REG', 'ENTITY_REGULATOR');
entityUser.App.regulatoryRoleScopeId = 'E001';
entityUser.App.regulatoryRoleScopeType = 'ENTITY';
const allCases = D.regulatoryCoordinationCases || [];
const scopedCases = entityUser.App.filterCoordinationCasesByScope(allCases);
const crossEntity = allCases.find(c => (c.affectedEntities || []).length >= 2);
const isolationOk = crossEntity ? scopedCases.every(c => (c.affectedEntities || []).includes('E001') || c.primaryOrganization === 'E001') : true;
step('FA-04', '跨法人监管协同与权限隔离', !!fa04 && fa04.relatedCoordinationCases?.length > 0 && isolationOk,
  `scoped=${scopedCases.length}/${allCases.length}`);

// FA-05 跨领域协同
const fa05 = get('FA-05');
const cdr = (D.crossDomainRiskMatters || []).find(m => (m.domainIds || []).length >= 2);
const fa05Scenario = get('FA-05');
const relOk = !cdr || (fa05Scenario?.relationshipEvidence || []).length > 0 ||
  (D.crossDomainRiskRelations || []).some(r => r.riskMatterId === cdr.riskMatterId && r.kriId && r.scenarioId);
step('FA-05', '跨领域监管协同', !!fa05 && (fa05.involvedDomains?.length >= 2 || (cdr && (cdr.domainIds || []).length >= 2)) && relOk,
  `${fa05?.involvedDomains?.length || 0} domains, rel=${(fa05Scenario?.relationshipEvidence || []).length}`);

// FA-06 整改验证失败
const fa06 = get('FA-06');
const rejectedRect = (D.rectificationTasks || []).find(t => t.verificationStatus === '验证失败' || t.status === '整改中');
step('FA-06', '重大整改验证失败与改进', !!fa06 && fa06.relatedRectifications?.length > 0,
  rejectedRect ? 'has rejected/in-progress' : 'rect linked');

// FA-07 运营周期
const fa07 = get('FA-07');
const cycles = D.regulatoryOperatingCycleInstances || [];
const cycleTypes = ['DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'ANNUAL'];
const cycleOk = cycleTypes.every(t => cycles.some(c => c.cycleType === t));
const health07 = D.regulatoryFinalAcceptanceHealth || {};
step('FA-07', '集团监管运营周期 INSUFFICIENT_HISTORY', !!fa07 && cycleOk && health07.trendStatus === 'INSUFFICIENT_HISTORY',
  `cycles=${cycles.length}`);

// FA-08 持续改进闭环
const fa08 = get('FA-08');
const opp = (D.regulatoryImprovementOpportunities || [])[0];
step('FA-08', '持续改进闭环需人工决策', !!fa08 && fa08.requiresHumanDecision === true && !!opp,
  fa08?.sourceType);

// FA-09 权限审计追溯
const fa09 = get('FA-09');
const audit = (D.regulatoryAuditLogs || [])[0];
const auditFields = audit && audit.userId && audit.actionType && audit.objectType;
step('FA-09', '全平台权限审计与数据追溯', !!fa09 && auditFields,
  `audits=${(D.regulatoryAuditLogs || []).length}`);

// Traceability
const traceResults = D.regulatoryFinalAcceptanceResultIndexes || [];
const traceOk = traceResults.length >= 9 && traceResults.every(r =>
  ['FULL_TRACEABLE', 'PARTIAL_TRACEABLE', 'NOT_TRACEABLE'].includes(r.traceabilityStatus));
step('TRACE', '全链路追溯校验', traceOk, traceResults.map(r => r.traceabilityStatus).join(','));

// Health
const health = D.regulatoryFinalAcceptanceHealth || {};
step('HEALTH', '最终验收健康度', !!health.overallStatus && health.trendStatus === 'INSUFFICIENT_HISTORY', health.overallStatus);

// Issues register
const issues = D.regulatoryFinalAcceptanceIssues || [];
step('ISSUES', '问题清单真实记录', issues.length > 0 && issues.every(i => i.sourceType && i.sourceId), `count=${issues.length}`);

// UI panels
step('UI-01', '集团总览最终验收面板', App.renderFinalAcceptanceDashboardPanel().includes('最终验收总览'));
step('UI-02', '工作台最终验收待办', App.renderFinalAcceptanceWorkbenchPanel().includes('最终验收待办'));
step('UI-03', '综合分析链路完整性', App.renderFinalAcceptanceAnalysisPanel().includes('全平台监管链路完整性'));
step('UI-04', '持续改进验收问题', App.renderFinalAcceptanceImprovementPanel().includes('最终验收问题'));

// 4 role journeys
const roles = [
  ['GROUP_LEADER', 'ROLE-GROUP-LEADER'],
  ['GROUP_REGULATORY', 'ROLE-GROUP-REG'],
  ['DOMAIN_REGULATOR', 'ROLE-DOMAIN-REG'],
  ['ENTITY_REGULATOR', 'ROLE-ENTITY-REG']
];
roles.forEach(([roleType, roleId]) => {
  const j = App.validateRoleAcceptanceJourney(roleType);
  step(`ROLE-${roleType}`, `${roleType} 角色旅程`, j.journeyPass && j.permissionOk, `scenarios=${j.scenarioCodes?.length}`);
});

const scenarioPass = results.filter(r => r.id.startsWith('FA-')).every(r => r.pass);
const rolePass = results.filter(r => r.id.startsWith('ROLE-')).every(r => r.pass);
const failed = results.filter(r => !r.pass);
const m = D.regulatoryFinalAcceptanceMetrics || {};
const trace = D.regulatoryFinalAcceptanceResultIndexes || [];

console.log(JSON.stringify({
  phase: 'Phase 31 E2E',
  scenarioResults: results.filter(r => r.id.startsWith('FA-')).map(r => ({ id: r.id, pass: r.pass, detail: r.detail })),
  scenariosPassed: results.filter(r => r.id.startsWith('FA-') && r.pass).length + '/9',
  roleJourneyResults: results.filter(r => r.id.startsWith('ROLE-')).map(r => ({ id: r.id, pass: r.pass })),
  rolesPassed: results.filter(r => r.id.startsWith('ROLE-') && r.pass).length + '/4',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  publicPageCount: (App.publicRegulatoryPages || []).length,
  finalAcceptanceScenarioCount: m.scenarioCount || (D.regulatoryFinalAcceptanceScenarios || []).length,
  fullTraceableCount: trace.filter(r => r.traceabilityStatus === 'FULL_TRACEABLE').length,
  partialTraceableCount: trace.filter(r => r.traceabilityStatus === 'PARTIAL_TRACEABLE').length,
  notTraceableCount: trace.filter(r => r.traceabilityStatus === 'NOT_TRACEABLE').length,
  passHealthStatus: health.overallStatus,
  issueCount: issues.length,
  results,
  allPass: failed.length === 0 && scenarioPass && rolePass
}, null, 2));
process.exit(failed.length === 0 && scenarioPass && rolePass ? 0 : 1);
