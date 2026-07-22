#!/usr/bin/env node
/**
 * 公共监管底座 Phase 14 验收脚本
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
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const errors = [];
const warnings = [];
const strategicFails = [];
const annualPlanFails = [];
const targetFails = [];
const focusFails = [];
const planExecFails = [];
const reviewFails = [];

function req(id, label) {
  if (!id) errors.push(`缺失ID: ${label}`);
}

function resolve(id, arr, key, label) {
  if (!id) return null;
  const found = arr.find(x => x[key] === id);
  if (!found) errors.push(`无法解析: ${label}=${id}`);
  return found;
}

function resolveRiskMatterId(id, label) {
  if (!id) return null;
  if ((D.warnings || []).find(x => x.id === id)) return true;
  if ((D.crossDomainRiskMatters || []).find(x => x.riskMatterId === id)) return true;
  errors.push(`无法解析: ${label}=${id}`);
  return null;
}

const expectedPages = [
  'global-group-overview', 'global-legal-entities', 'global-regions', 'coverage-gaps',
  'platform-operations', 'data-governance', 'cross-border-compliance', 'cross-domain-risks',
  'warnings', 'rectification', 'regulatory-events', 'rectification-operations', 'regulatory-evaluation',
  'regulatory-command-center', 'regulatory-actions', 'regulatory-action-execution', 'regulatory-strategy',
  'regulatory-maturity', 'regulatory-optimization',
  'regulatory-rule-config', 'regulatory-simulation', 'regulatory-rule-history',
  'regulatory-rule-versions', 'regulatory-rule-approvals', 'regulatory-rule-impact', 'regulatory-rule-effectiveness',
  'regulatory-rule-runtime', 'regulatory-rule-executions', 'regulatory-rule-deployments',
  'regulatory-performance', 'regulatory-resource-allocation', 'regulatory-supervision-tasks', 'regulatory-benchmarking',
  'regulatory-strategy-planning', 'regulatory-annual-plan', 'regulatory-target-management',
  'regulatory-focus-management', 'regulatory-plan-execution', 'regulatory-strategic-review',
  'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

const publicPageCount = (pubJs.match(/pageId: '/g) || []).length;
if (publicPageCount !== 40) warnings.push(`公共页面数=${publicPageCount}，期望40`);

const components = [
  'renderPublicObjectiveStatusBadge', 'renderPublicPlanStatusBadge', 'renderPublicTargetStatusBadge',
  'renderPublicFocusTypeBadge', 'renderPublicTargetProgress', 'renderPublicStrategicCycleFlow',
  'renderRegulatoryStrategyPlanning', 'renderRegulatoryAnnualPlan', 'renderRegulatoryTargetManagement',
  'renderRegulatoryFocusManagement', 'renderRegulatoryPlanExecution', 'renderRegulatoryStrategicReview',
  'showRegulatoryObjectiveDetail', 'showRegulatoryPlanDetail', 'showRegulatoryTargetDetail',
  'showRegulatoryFocusDetail', 'showRegulatoryPlanExecutionDetail', 'showRegulatoryReviewDetail',
  'getRegulatoryObjective', 'getRegulatoryPlan', 'getRegulatoryTarget', 'getRegulatoryFocus'
];
components.forEach(fn => {
  if (!pubJs.includes(fn)) errors.push(`公共组件缺失: ${fn}`);
});

let hardcodeOffsetCount = 0;
[/\.length\s*\+\s*\d+/g].forEach(re => {
  [appJs, pubJs].forEach((src) => {
    (src.match(re) || []).forEach(hit => {
      if (!hit.includes('steps.length')) { hardcodeOffsetCount++; warnings.push(`硬编码偏移: ${hit}`); }
    });
  });
});

const calcStatus = (rate) => rate >= 1 ? 'ACHIEVED' : rate >= 0.8 ? 'ON_TRACK' : rate >= 0.6 ? 'AT_RISK' : 'BEHIND';

(D.regulatoryStrategicObjectives || []).forEach(o => {
  req(o.objectiveId, 'objectiveId');
  const expectedRate = o.targetValue ? o.actualValue / o.targetValue : 0;
  if (Math.abs((o.completionRate || 0) - expectedRate) > 0.02) strategicFails.push(`目标 ${o.objectiveId} 完成率计算不一致`);
  const expectedStatus = calcStatus(o.completionRate || 0);
  if (o.status !== expectedStatus) strategicFails.push(`目标 ${o.objectiveId} 状态应为 ${expectedStatus} 实际 ${o.status}`);
  (o.relatedActionIds || []).forEach(id => resolve(id, D.regulatoryActions, 'actionId', 'obj.action'));
  (o.relatedPerformanceMetricIds || []).forEach(id => resolve(id, D.regulatoryPerformanceMetrics, 'performanceId', 'obj.perf'));
  (o.relatedRiskMatterIds || []).forEach(id => resolveRiskMatterId(id, 'obj.risk'));
});

(D.regulatoryAnnualPlans || []).forEach(p => {
  req(p.planId, 'planId');
  const expectedRate = p.targetValue ? p.actualValue / p.targetValue : 0;
  if (Math.abs((p.completionRate || 0) - expectedRate) > 0.02) annualPlanFails.push(`计划 ${p.planId} 完成率计算不一致`);
  (p.objectiveIds || []).forEach(id => resolve(id, D.regulatoryStrategicObjectives, 'objectiveId', 'plan.objective'));
  (p.focusEntityIds || []).forEach(id => resolve(id, D.globalLegalEntities, 'entityId', 'plan.entity'));
  (p.focusRegionIds || []).forEach(id => resolve(id, D.globalRegions, 'regionId', 'plan.region'));
  (p.focusDomainIds || []).forEach(id => resolve(id, D.regulationDomains, 'id', 'plan.domain'));
  (p.focusRiskMatterIds || []).forEach(id => resolveRiskMatterId(id, 'plan.risk'));
  (p.plannedActionIds || []).forEach(id => resolve(id, D.regulatoryActions, 'actionId', 'plan.action'));
  (p.plannedResourceAllocationIds || []).forEach(id => resolve(id, D.regulatoryResourceAllocations, 'allocationId', 'plan.alloc'));
  (p.plannedSupervisionTaskIds || []).forEach(id => resolve(id, D.regulatorySupervisionTasks, 'supervisionTaskId', 'plan.task'));
});

(D.regulatoryTargets || []).forEach(t => {
  req(t.targetId, 'targetId');
  const expectedRate = t.targetValue ? t.actualValue / t.targetValue : 0;
  if (Math.abs((t.completionRate || 0) - expectedRate) > 0.02) targetFails.push(`监管目标 ${t.targetId} 完成率计算不一致`);
  if (Math.abs((t.variance || 0) - (t.actualValue - t.targetValue)) > 0.02) targetFails.push(`监管目标 ${t.targetId} 偏差计算不一致`);
  if (t.status !== calcStatus(t.completionRate || 0)) targetFails.push(`监管目标 ${t.targetId} 状态不一致`);
  if (t.relatedObjectiveId) resolve(t.relatedObjectiveId, D.regulatoryStrategicObjectives, 'objectiveId', 'tgt.objective');
  if (t.relatedPlanId) resolve(t.relatedPlanId, D.regulatoryAnnualPlans, 'planId', 'tgt.plan');
  (t.relatedEntityIds || []).forEach(id => resolve(id, D.globalLegalEntities, 'entityId', 'tgt.entity'));
  (t.relatedDomainIds || []).forEach(id => resolve(id, D.regulationDomains, 'id', 'tgt.domain'));
});

(D.regulatoryStrategicFocus || []).forEach(f => {
  req(f.focusId, 'focusId');
  const validTypes = ['REGION', 'COUNTRY', 'ENTITY', 'PROJECT', 'DOMAIN', 'RISK', 'DATA_OBJECT'];
  if (!validTypes.includes(f.focusType)) focusFails.push(`重点 ${f.focusId} 类型无效`);
  if (f.focusType === 'ENTITY') resolve(f.focusObjectId, D.globalLegalEntities, 'entityId', 'focus.entity');
  if (f.focusType === 'REGION') resolve(f.focusObjectId, D.globalRegions, 'regionId', 'focus.region');
  if (f.focusType === 'DOMAIN') resolve(f.focusObjectId, D.regulationDomains, 'id', 'focus.domain');
  if (f.focusType === 'PROJECT') resolve(f.focusObjectId, D.globalProjects, 'projectId', 'focus.project');
  if (f.focusType === 'RISK') resolveRiskMatterId(f.focusObjectId, 'focus.risk');
  (f.recommendedActionIds || []).forEach(id => resolve(id, D.regulatoryActions, 'actionId', 'focus.action'));
  (f.relatedPlanIds || []).forEach(id => resolve(id, D.regulatoryAnnualPlans, 'planId', 'focus.plan'));
});

(D.regulatoryPlanExecution || []).forEach(e => {
  req(e.executionId, 'executionId');
  resolve(e.planId, D.regulatoryAnnualPlans, 'planId', 'pex.plan');
  if (e.actionId) resolve(e.actionId, D.regulatoryActions, 'actionId', 'pex.action');
  if (e.supervisionTaskId) resolve(e.supervisionTaskId, D.regulatorySupervisionTasks, 'supervisionTaskId', 'pex.task');
  if (e.entityId) resolve(e.entityId, D.globalLegalEntities, 'entityId', 'pex.entity');
  const expectedRate = e.plannedValue ? e.actualValue / e.plannedValue : 0;
  if (Math.abs((e.completionRate || 0) - expectedRate) > 0.02) planExecFails.push(`计划执行 ${e.executionId} 完成率不一致`);
  const ruleExec = (D.regulatoryRuleExecutions || []).find(x => x.executionId === e.executionId);
  if (ruleExec) planExecFails.push(`计划执行 ${e.executionId} 与规则执行 ID 冲突`);
});

(D.regulatoryStrategicReview || []).forEach(r => {
  req(r.reviewId, 'reviewId');
  const validDims = ['GROUP', 'REGION', 'ENTITY', 'DOMAIN', 'PLAN', 'OBJECTIVE'];
  if (!validDims.includes(r.reviewDimension)) reviewFails.push(`复盘 ${r.reviewId} 维度无效`);
});

(D.regulatoryNextCycleRecommendations || []).forEach(r => {
  req(r.recommendationId, 'recommendationId');
  (r.focusEntityIds || []).forEach(id => resolve(id, D.globalLegalEntities, 'entityId', 'ncr.entity'));
  (r.focusRiskMatterIds || []).forEach(id => resolveRiskMatterId(id, 'ncr.risk'));
  (r.focusDomainIds || []).forEach(id => resolve(id, D.regulationDomains, 'id', 'ncr.domain'));
});

if (!D.regulatoryStrategicObjectives?.length) errors.push('regulatoryStrategicObjectives 未生成');
if (!D.regulatoryAnnualPlans?.length) errors.push('regulatoryAnnualPlans 未生成');
if (!D.regulatoryTargets?.length) errors.push('regulatoryTargets 未生成');
if (!D.regulatoryStrategicFocus?.length) errors.push('regulatoryStrategicFocus 未生成');
if (!D.regulatoryPlanExecution?.length) errors.push('regulatoryPlanExecution 未生成');
if (!D.regulatoryStrategicReview?.length) errors.push('regulatoryStrategicReview 未生成');
if (!D.regulatoryNextCycleRecommendations?.length) errors.push('regulatoryNextCycleRecommendations 未生成');
if (!D.regulatoryStrategicPlanningMetrics) errors.push('regulatoryStrategicPlanningMetrics 未生成');

const objTypes = new Set((D.regulatoryStrategicObjectives || []).map(o => o.objectiveType));
['COVERAGE', 'DATA_QUALITY', 'RISK_MONITORING', 'REGULATORY_CLOSURE', 'RULE_EFFECTIVENESS', 'RESOURCE_EFFICIENCY', 'MATURITY_IMPROVEMENT'].forEach(t => {
  if (!objTypes.has(t)) strategicFails.push(`战略目标缺少类型: ${t}`);
});

['page-regulatory-strategy-planning', 'page-regulatory-annual-plan', 'page-regulatory-target-management', 'page-regulatory-focus-management', 'page-regulatory-plan-execution', 'page-regulatory-strategic-review'].forEach(id => {
  if (!html.includes(id)) errors.push(`index.html 缺失: ${id}`);
});

if (!pubJs.includes('战略目标达成') || !pubJs.includes('年度监管重点') || !pubJs.includes('年度计划执行') || !pubJs.includes('战略复盘')) {
  errors.push('驾驶舱 Phase 14 模块缺失');
}

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
const freezeFails = [];
if (penetrateCount !== 3) freezeFails.push('navigate(penetration)!=3');
if (!/renderPenetration\s*\(/.test(appJs)) freezeFails.push('renderPenetration missing');

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const result = {
  publicPageCount,
  idIntegrity: errors.length === 0 ? '通过' : '不通过',
  errorCount: errors.length,
  warningCount: warnings.length,
  dataSourceUniqueness: errors.length === 0 ? '通过' : '不通过',
  strategicPlanningCheck: strategicFails.length === 0 ? '通过' : '不通过',
  annualPlanCheck: annualPlanFails.length === 0 ? '通过' : '不通过',
  targetCalculationCheck: targetFails.length === 0 ? '通过' : '不通过',
  focusObjectCheck: focusFails.length === 0 ? '通过' : '不通过',
  planExecutionCheck: planExecFails.length === 0 ? '通过' : '不通过',
  strategicReviewCheck: reviewFails.length === 0 ? '通过' : '不通过',
  strategicFails: strategicFails.slice(0, 10),
  annualPlanFails: annualPlanFails.slice(0, 10),
  targetFails: targetFails.slice(0, 10),
  focusFails: focusFails.slice(0, 10),
  planExecFails: planExecFails.slice(0, 10),
  reviewFails: reviewFails.slice(0, 10),
  errors: errors.slice(0, 40),
  warnings: warnings.slice(0, 15),
  investmentFreeze: freezeFails.length === 0 ? '通过' : '不通过',
  freezeFails,
  penetrateCallCount: penetrateCount,
  hardcodeOffsetCount,
  nodeCheck
};
console.log(JSON.stringify(result, null, 2));
process.exit(errors.length || freezeFails.length || hardcodeOffsetCount || strategicFails.length || annualPlanFails.length || targetFails.length || focusFails.length || planExecFails.length || reviewFails.length ? 1 : 0);
