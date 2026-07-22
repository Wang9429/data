#!/usr/bin/env node
/**
 * 公共监管底座 Phase 15 验收脚本
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
const workbenchFails = [];
const queueFails = [];
const decisionFails = [];
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

const SOURCE_MAP = {
  regulatoryEvents: { arr: () => D.regulatoryEvents, key: 'eventId' },
  rectificationTasks: { arr: () => D.rectificationTasks, key: 'taskId' },
  regulatoryActions: { arr: () => D.regulatoryActions, key: 'actionId' },
  regulatoryActionFeedbacks: { arr: () => D.regulatoryActionFeedbacks, key: 'feedbackId' },
  regulatorySupervisionTasks: { arr: () => D.regulatorySupervisionTasks, key: 'supervisionTaskId' },
  regulatoryRuleChangeRequests: { arr: () => D.regulatoryRuleChangeRequests, key: 'changeRequestId' },
  regulatoryRuleDeployments: { arr: () => D.regulatoryRuleDeployments, key: 'deploymentId' },
  regulatoryRuleRuntimeAnomalies: { arr: () => D.regulatoryRuleRuntimeAnomalies, key: 'anomalyId' },
  regulatoryRuleApprovals: { arr: () => D.regulatoryRuleApprovals, key: 'approvalId' },
  regulatoryRuleVersions: { arr: () => D.regulatoryRuleVersions, key: 'versionId' },
  regulatoryStrategicObjectives: { arr: () => D.regulatoryStrategicObjectives, key: 'objectiveId' },
  regulatoryAnnualPlans: { arr: () => D.regulatoryAnnualPlans, key: 'planId' },
  regulatoryNextCycleRecommendations: { arr: () => D.regulatoryNextCycleRecommendations, key: 'recommendationId' }
};

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
  'regulatory-workbench', 'regulatory-queue', 'regulatory-decision-room',
  'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

const publicPageCount = (pubJs.match(/pageId: '/g) || []).length;
if (publicPageCount !== 43) warnings.push(`公共页面数=${publicPageCount}，期望43`);

const components = [
  'renderPublicQueueTypeBadge', 'renderPublicQueueStatusBadge', 'renderPublicDecisionOptionCard',
  'renderPublicWorkbenchLoop', 'renderPublicTopIssuesList',
  'renderRegulatoryWorkbench', 'renderRegulatoryQueue', 'renderRegulatoryDecisionRoom',
  'showRegulatoryQueueDetail', 'showRegulatoryDecisionContextDetail',
  'getRegulatoryWorkbench', 'getRegulatoryQueueItem', 'getRegulatoryDecisionContext',
  'renderRegulatoryStrategyPlanning', 'renderRegulatoryStrategicReview'
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

const WB_FIELDS = [
  'workbenchId', 'scopeType', 'scopeId', 'prioritySummary', 'healthSummary', 'eventSummary',
  'rectificationSummary', 'actionSummary', 'supervisionTaskSummary', 'performanceSummary',
  'strategySummary', 'maturitySummary', 'pendingDecisionCount', 'pendingActionCount',
  'pendingTaskCount', 'pendingVerificationCount', 'overdueCount', 'topIssues', 'topRisks',
  'topActions', 'recommendedNextSteps'
];

(D.regulatoryWorkbench || []).forEach(wb => {
  req(wb.workbenchId, 'workbenchId');
  WB_FIELDS.forEach(f => {
    if (wb[f] === undefined) workbenchFails.push(`工作台 ${wb.workbenchId} 缺失字段 ${f}`);
  });
  if (wb.scopeType === 'ENTITY' && wb.scopeId) {
    resolve(wb.scopeId, D.globalLegalEntities, 'entityId', 'wb.entity');
  }
});

const wbM = D.regulatoryWorkbenchMetrics || {};
const queue = D.regulatoryQueue || [];
if (!wbM.pendingDecisionCount && queue.some(q => q.queueType === 'DECISION')) {
  workbenchFails.push('workbenchMetrics.pendingDecisionCount 与队列不一致');
}
if (wbM.queueTotal !== queue.length) {
  workbenchFails.push(`workbenchMetrics.queueTotal=${wbM.queueTotal} 实际队列=${queue.length}`);
}
if (!wbM.loopStatus) workbenchFails.push('workbenchMetrics.loopStatus 未生成');

const QUEUE_TYPES = ['DECISION', 'ACTION', 'SUPERVISION_TASK', 'FEEDBACK', 'VERIFICATION', 'RULE_APPROVAL', 'RULE_DEPLOYMENT', 'RULE_ANOMALY', 'STRATEGIC_REVIEW', 'PLAN_VARIANCE'];
const queueTypes = new Set(queue.map(q => q.queueType));
QUEUE_TYPES.forEach(t => {
  if (!queueTypes.has(t) && queue.length) queueFails.push(`队列缺少类型: ${t}`);
});

queue.forEach(q => {
  req(q.queueItemId, 'queueItemId');
  req(q.sourceId, 'queue.sourceId');
  if (!q.sourceType) queueFails.push(`队列 ${q.queueItemId} 缺失 sourceType`);
  const src = SOURCE_MAP[q.sourceType];
  if (src) {
    const found = (src.arr() || []).find(x => x[src.key] === q.sourceId);
    if (!found) queueFails.push(`队列 ${q.queueItemId} 无法追溯 sourceId=${q.sourceId} (${q.sourceType})`);
  } else if (q.sourceType) {
    queueFails.push(`队列 ${q.queueItemId} 未知 sourceType=${q.sourceType}`);
  }
  (q.sourceEventIds || []).forEach(id => resolve(id, D.regulatoryEvents, 'eventId', 'queue.event'));
  (q.sourceRiskMatterIds || []).forEach(id => resolveRiskMatterId(id, 'queue.risk'));
  (q.sourceActionIds || []).forEach(id => resolve(id, D.regulatoryActions, 'actionId', 'queue.action'));
  (q.sourceRectificationTaskIds || []).forEach(id => resolve(id, D.rectificationTasks, 'taskId', 'queue.rect'));
  if (q.entityId) resolve(q.entityId, D.globalLegalEntities, 'entityId', 'queue.entity');
  if (q.decisionContextId) {
    const dc = (D.regulatoryDecisionContext || []).find(d => d.decisionContextId === q.decisionContextId);
    if (!dc) queueFails.push(`队列 ${q.queueItemId} decisionContextId 无效`);
  }
});

(D.regulatoryDecisionContext || []).forEach(dc => {
  req(dc.decisionContextId, 'decisionContextId');
  if (!dc.entityId) decisionFails.push(`决策上下文 ${dc.decisionContextId} 缺失 entityId`);
  else resolve(dc.entityId, D.globalLegalEntities, 'entityId', 'dc.entity');
  if (!dc.recommendedDecision) decisionFails.push(`决策上下文 ${dc.decisionContextId} 缺失 recommendedDecision`);
  if (!dc.decisionBasis) decisionFails.push(`决策上下文 ${dc.decisionContextId} 缺失 decisionBasis`);
  if (!Array.isArray(dc.decisionOptions) || !dc.decisionOptions.length) {
    decisionFails.push(`决策上下文 ${dc.decisionContextId} 决策选项为空`);
  }
  (dc.relatedEventIds || []).forEach(id => resolve(id, D.regulatoryEvents, 'eventId', 'dc.event'));
  (dc.relatedRiskMatterIds || []).forEach(id => resolveRiskMatterId(id, 'dc.risk'));
  (dc.relatedActionIds || []).forEach(id => resolve(id, D.regulatoryActions, 'actionId', 'dc.action'));
  (dc.relatedRectificationTaskIds || []).forEach(id => resolve(id, D.rectificationTasks, 'taskId', 'dc.rect'));
});

if (!D.regulatoryWorkbench?.length) errors.push('regulatoryWorkbench 未生成');
if (!queue.length) errors.push('regulatoryQueue 未生成');
if (!D.regulatoryDecisionContext?.length) errors.push('regulatoryDecisionContext 未生成');
if (!D.regulatoryWorkbenchMetrics) errors.push('regulatoryWorkbenchMetrics 未生成');

const calcStatus = (rate) => rate >= 1 ? 'ACHIEVED' : rate >= 0.8 ? 'ON_TRACK' : rate >= 0.6 ? 'AT_RISK' : 'BEHIND';

(D.regulatoryStrategicObjectives || []).forEach(o => {
  req(o.objectiveId, 'objectiveId');
  const expectedRate = o.targetValue ? o.actualValue / o.targetValue : 0;
  if (Math.abs((o.completionRate || 0) - expectedRate) > 0.02) strategicFails.push(`目标 ${o.objectiveId} 完成率计算不一致`);
});

(D.regulatoryPlanExecution || []).forEach(e => {
  req(e.executionId, 'executionId');
  const ruleExec = (D.regulatoryRuleExecutions || []).find(x => x.executionId === e.executionId);
  if (ruleExec) planExecFails.push(`计划执行 ${e.executionId} 与规则执行 ID 冲突`);
});

[
  'page-regulatory-workbench', 'page-regulatory-queue', 'page-regulatory-decision-room'
].forEach(id => {
  if (!html.includes(id)) errors.push(`index.html 缺失: ${id}`);
});

if (!appJs.includes('renderRegulatoryWorkbench')) errors.push('app.js 未调用 renderRegulatoryWorkbench');
if (!appJs.includes('renderRegulatoryQueue')) errors.push('app.js 未调用 renderRegulatoryQueue');
if (!appJs.includes('renderRegulatoryDecisionRoom')) errors.push('app.js 未调用 renderRegulatoryDecisionRoom');

if (!pubJs.includes('统一监管工作台') || !pubJs.includes('进入统一工作台')) {
  errors.push('驾驶舱 Phase 15 模块缺失');
}

const navChecks = [
  "navigatePublic('regulatory-workbench')",
  "navigatePublic('regulatory-queue')",
  "navigatePublic('regulatory-decision-room')"
];
const unifiedNavigationCheck = navChecks.every(s => pubJs.includes(s)) && appJs.includes('regulatory-workbench');

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
const freezeFails = [];
if (penetrateCount !== 3) freezeFails.push('navigate(penetration)!=3');
if (!/renderPenetration\s*\(/.test(appJs)) freezeFails.push('renderPenetration missing');

let nodeCheck = '通过';
let gitDiffCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }
try {
  execSync('git diff --check', { cwd: ROOT, stdio: 'pipe' });
} catch { gitDiffCheck = '不通过'; }

const result = {
  publicPageCount,
  idIntegrity: errors.length === 0 ? '通过' : '不通过',
  errorCount: errors.length,
  warningCount: warnings.length,
  dataSourceUniqueness: errors.length === 0 ? '通过' : '不通过',
  workbenchAggregationCheck: workbenchFails.length === 0 ? '通过' : '不通过',
  queueSourceTraceCheck: queueFails.length === 0 ? '通过' : '不通过',
  decisionContextCheck: decisionFails.length === 0 ? '通过' : '不通过',
  unifiedNavigationCheck: unifiedNavigationCheck ? '通过' : '不通过',
  workbenchFails: workbenchFails.slice(0, 10),
  queueFails: queueFails.slice(0, 10),
  decisionFails: decisionFails.slice(0, 10),
  strategicFails: strategicFails.slice(0, 5),
  planExecFails: planExecFails.slice(0, 5),
  errors: errors.slice(0, 40),
  warnings: warnings.slice(0, 15),
  investmentFreeze: freezeFails.length === 0 ? '通过' : '不通过',
  freezeFails,
  penetrateCallCount: penetrateCount,
  hardcodeOffsetCount,
  nodeCheck,
  gitDiffCheck
};
console.log(JSON.stringify(result, null, 2));
process.exit(
  errors.length || freezeFails.length || hardcodeOffsetCount || workbenchFails.length
  || queueFails.length || decisionFails.length ? 1 : 0
);
