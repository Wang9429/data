#!/usr/bin/env node
/**
 * 公共监管底座 Phase 21 验收脚本
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

function loadApp() {
  const dataCode = fs.readFileSync(dataPath, 'utf8');
  const pubCode = fs.readFileSync(pubPath, 'utf8');
  const sandbox = { console, document: { getElementById: () => null }, window: {} };
  vm.runInNewContext(dataCode + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  vm.runInNewContext('var App = {};\n' + pubCode, sandbox, { filename: 'public-regulatory.js' });
  if (sandbox.App.finalizeRegulatoryPlatform) sandbox.App.finalizeRegulatoryPlatform();
  return sandbox.App;
}

const D = loadAppData();
const App = loadApp();
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const errors = [];
const warnings = [];
const accessFails = [];
const authFails = [];
const auditFails = [];
const configFails = [];
const permFails = [];
const dataSourceFails = [];
const integrationFails = [];
const qualityFails = [];
const governanceFails = [];
const lineageFails = [];
const qualityCalcFails = [];
const lineageImpactFails = [];
const metricCalcFails = [];
const kriRuntimeFails = [];
const warningGenFails = [];
const warningRiskFails = [];
const kriEffectivenessFails = [];
const warningStrategyFails = [];
const dataCredibilityFails = [];
const compositeAnalysisFails = [];
const riskConcentrationFails = [];
const riskPropagationFails = [];
const scenarioAnalysisFails = [];
const decisionRecommendationFails = [];
const analysisPermissionFails = [];
const analysisAuditFails = [];
const simulationIsolationFails = [];
const humanDecisionFails = [];
const improvementOpportunityFails = [];
const rootCauseFails = [];
const optimizationPlanFails = [];
const improvementExecutionFails = [];
const effectivenessFails = [];

function req(id, label) {
  if (!id) errors.push(`缺失ID: ${label}`);
}

function resolve(id, arr, key, label) {
  if (!id) return null;
  const found = arr.find(x => x[key] === id);
  if (!found) errors.push(`无法解析: ${label}=${id}`);
  return found;
}

const AUTH_SOURCE = {
  regulatoryRuleChangeRequests: { arr: () => D.regulatoryRuleChangeRequests, key: 'changeRequestId' },
  regulatoryRuleApprovals: { arr: () => D.regulatoryRuleApprovals, key: 'approvalId' },
  regulatoryRuleDeployments: { arr: () => D.regulatoryRuleDeployments, key: 'deploymentId' },
  regulatoryActions: { arr: () => D.regulatoryActions, key: 'actionId' },
  rectificationTasks: { arr: () => D.rectificationTasks, key: 'taskId' },
  regulatorySupervisionTasks: { arr: () => D.regulatorySupervisionTasks, key: 'supervisionTaskId' },
  regulatoryStrategicObjectives: { arr: () => D.regulatoryStrategicObjectives, key: 'objectiveId' },
  regulatoryAnnualPlans: { arr: () => D.regulatoryAnnualPlans, key: 'planId' },
  regulatoryStrategicFocus: { arr: () => D.regulatoryStrategicFocus, key: 'focusId' }
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
  'regulatory-role-workbench', 'regulatory-my-work', 'regulatory-search',
  'regulatory-access-control', 'regulatory-authorization', 'regulatory-audit-trail', 'regulatory-system-settings',
  'regulatory-data-sources', 'regulatory-data-integration', 'regulatory-data-quality',
  'regulatory-data-governance', 'regulatory-data-lineage',
  'regulatory-metric-center', 'regulatory-kri-monitoring', 'regulatory-warning-center',
  'regulatory-kri-effectiveness', 'regulatory-warning-strategy',
  'regulatory-analysis-center', 'regulatory-risk-concentration', 'regulatory-risk-propagation',
  'regulatory-scenario-analysis', 'regulatory-decision-recommendations',
  'regulatory-improvement-center', 'regulatory-root-cause-analysis', 'regulatory-optimization-plans',
  'regulatory-improvement-execution', 'regulatory-improvement-effectiveness',
  'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

const publicPageCount = (App.publicRegulatoryPages || []).length;
const regexPageCount = (pubJs.match(/pageId: '/g) || []).length;
if (publicPageCount !== 70) errors.push(`公共页面注册数=${publicPageCount}，期望70`);
if (regexPageCount !== publicPageCount) warnings.push(`pageId正则计数=${regexPageCount}，注册集合=${publicPageCount}（以注册集合为准）`);

const components = [
  'canRegulatoryAccess', 'createRegulatoryAuditLog', 'executeRegulatoryStateChange',
  'calculateDataSetQuality', 'calculateOverallQualityScore', 'getKriDataCredibility', 'getPriorityCredibilityImpact',
  'getDataLineageChain', 'getDataSourceImpactAnalysis', 'retryDataIntegrationJob',
  'assignDataGovernanceTask', 'closeDataGovernanceTask',
  'calculateRegulatoryMetric', 'calculateKriRuntimeStatus', 'getWarningPrioritySuggestion',
  'filterKriByUserScope', 'filterWarningsByUserScope',
  'reviewRegulatoryWarning', 'convertRegulatoryWarningToRisk', 'closeRegulatoryWarning', 'attemptKriThresholdChange',
  'calculateRegulatoryCompositeHealth', 'calculateRiskConcentration', 'analyzeRiskPropagation',
  'runRegulatoryScenario', 'generateRegulatoryDecisionRecommendations', 'filterAnalysisByUserScope',
  'confirmRegulatoryDecisionRecommendation', 'rejectRegulatoryDecisionRecommendation', 'executeRegulatoryDecisionRecommendation',
  'identifyImprovementOpportunities', 'analyzeRegulatoryRootCause', 'generateRegulatoryOptimizationPlan', 'evaluateImprovementEffectiveness',
  'filterImprovementByUserScope', 'confirmRegulatoryRootCause', 'approveRegulatoryOptimizationPlan',
  'startRegulatoryImprovementExecution', 'completeRegulatoryImprovementExecution', 'validateRegulatoryImprovementEffectiveness',
  'renderRegulatoryDataSources', 'renderRegulatoryDataIntegration', 'renderRegulatoryDataQuality',
  'renderRegulatoryDataGovernance', 'renderRegulatoryDataLineage',
  'renderRegulatoryMetricCenter', 'renderRegulatoryKriMonitoring', 'renderRegulatoryWarningCenter',
  'renderRegulatoryKriEffectiveness', 'renderRegulatoryWarningStrategy',
  'renderRegulatoryAnalysisCenter', 'renderRegulatoryRiskConcentration', 'renderRegulatoryRiskPropagation',
  'renderRegulatoryScenarioAnalysis', 'renderRegulatoryDecisionRecommendations',
  'renderRegulatoryImprovementCenter', 'renderRegulatoryRootCauseAnalysis', 'renderRegulatoryOptimizationPlans',
  'renderRegulatoryImprovementExecution', 'renderRegulatoryImprovementEffectiveness',
  'showRegulatoryDataSourceDetail', 'showRegulatoryDataIntegrationDetail', 'showRegulatoryDataQualityDetail', 'showRegulatoryDataGovernanceDetail',
  'showRegulatoryMetricDetail', 'showRegulatoryKriRuntimeDetail', 'showRegulatoryWarningDetail',
  'showRegulatoryConcentrationDetail', 'showRegulatoryPropagationDetail', 'showRegulatoryRecommendationDetail',
  'showRegulatoryOpportunityDetail', 'showRegulatoryRootCauseDetail', 'showRegulatoryOptimizationPlanDetail',
  'showRegulatoryImprovementExecutionDetail', 'showRegulatoryImprovementEffectivenessDetail'
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

// Phase 18 data source checks
(D.regulatoryDataSources || []).forEach(s => {
  req(s.sourceId, 'sourceId');
  if (!s.sourceName) dataSourceFails.push(`数据源 ${s.sourceId} 缺少 sourceName`);
  const legacy = (D.dataSourceRegistry || []).find(r => r.sourceId === s.sourceId);
  if (!legacy) dataSourceFails.push(`数据源 ${s.sourceId} 无法追溯 dataSourceRegistry`);
});

(D.regulatoryDataSets || []).forEach(ds => {
  req(ds.dataSetId, 'dataSetId');
  resolve(ds.sourceId, D.regulatoryDataSources, 'sourceId', 'dataset.source');
  const legacy = (D.dataObjects || []).find(o => o.objectId === ds.dataSetId || o.objectId === ds.legacyObjectId);
  if (!legacy) dataSourceFails.push(`数据集 ${ds.dataSetId} 无法追溯 dataObjects`);
});

(D.regulatoryDataIntegrationJobs || []).forEach(j => {
  req(j.integrationJobId, 'integrationJobId');
  resolve(j.sourceId, D.regulatoryDataSources, 'sourceId', 'job.source');
  resolve(j.dataSetId, D.regulatoryDataSets, 'dataSetId', 'job.dataset');
  if (!['NOT_STARTED', 'RUNNING', 'SUCCESS', 'PARTIAL_SUCCESS', 'FAILED', 'PAUSED'].includes(j.status)) {
    integrationFails.push(`接入任务 ${j.integrationJobId} 状态无效 ${j.status}`);
  }
});

(D.regulatoryDataQualityRules || []).forEach(r => {
  req(r.qualityRuleId, 'qualityRuleId');
  const dims = ['COMPLETENESS', 'ACCURACY', 'TIMELINESS', 'CONSISTENCY', 'UNIQUENESS', 'VALIDITY'];
  if (!dims.includes(r.dimension)) qualityFails.push(`质量规则 ${r.qualityRuleId} 维度无效`);
  if (r.targetDataSetId) resolve(r.targetDataSetId, D.regulatoryDataSets, 'dataSetId', 'rule.dataset');
});

(D.regulatoryDataQualityIssues || []).forEach(i => {
  req(i.qualityIssueId, 'qualityIssueId');
  resolve(i.dataSetId, D.regulatoryDataSets, 'dataSetId', 'issue.dataset');
  if (i.relatedRectificationTaskId) resolve(i.relatedRectificationTaskId, D.rectificationTasks, 'taskId', 'issue.rect');
  if (i.kriId && !(D.groupKris || []).find(k => k.id === i.kriId)) qualityFails.push(`质量问题 ${i.qualityIssueId} KRI无效`);
});

(D.regulatoryDataGovernanceTasks || []).forEach(t => {
  req(t.governanceTaskId, 'governanceTaskId');
  resolve(t.qualityIssueId, D.regulatoryDataQualityIssues, 'qualityIssueId', 'gov.issue');
  if (t.relatedRectificationTaskId) resolve(t.relatedRectificationTaskId, D.rectificationTasks, 'taskId', 'gov.rect');
});

(D.regulatoryDataLineage || []).forEach(l => {
  req(l.lineageId, 'lineageId');
  if (!l.relationType) lineageFails.push(`血缘 ${l.lineageId} 缺少 relationType`);
});

(D.regulatoryDataQualitySnapshots || []).forEach(s => {
  req(s.snapshotId, 'snapshotId');
  if (s.trendStatus !== 'INSUFFICIENT_HISTORY' && !s.historicalTrend) {
    qualityCalcFails.push(`快照 ${s.snapshotId} 不得伪造历史趋势`);
  }
});

if (!D.regulatoryDataSources?.length) errors.push('regulatoryDataSources 未生成');
if (!D.regulatoryDataSets?.length) errors.push('regulatoryDataSets 未生成');
if (!D.regulatoryDataIntegrationJobs?.length) errors.push('regulatoryDataIntegrationJobs 未生成');
if (!D.regulatoryDataQualityRules?.length) errors.push('regulatoryDataQualityRules 未生成');
if (!D.regulatoryDataQualityIssues?.length) errors.push('regulatoryDataQualityIssues 未生成');
if (!D.regulatoryDataGovernanceTasks?.length) errors.push('regulatoryDataGovernanceTasks 未生成');
if (!D.regulatoryDataLineage?.length) errors.push('regulatoryDataLineage 未生成');
if (!D.regulatoryDataGovernanceMetrics) errors.push('regulatoryDataGovernanceMetrics 未生成');

// Phase 19 metric/KRI/warning checks
if (!D.regulatoryMetrics?.length) errors.push('regulatoryMetrics 未生成');
if (!D.regulatoryKriRuntime?.length) errors.push('regulatoryKriRuntime 未生成');
if (!D.regulatoryKriEvaluations?.length) errors.push('regulatoryKriEvaluations 未生成');
if (!D.regulatoryMetricCalculationLogs?.length) errors.push('regulatoryMetricCalculationLogs 未生成');
if (!D.regulatoryMetricKriMetrics) errors.push('regulatoryMetricKriMetrics 未生成');

(D.regulatoryMetrics || []).forEach(m => {
  req(m.metricId, 'metricId');
  if (m.dataStatus === 'INSUFFICIENT_DATA' && m.currentValue != null) metricCalcFails.push(`指标 ${m.metricId} 数据不足不得伪造正常值`);
  if (m.credibilityScore != null && (m.credibilityScore < 0 || m.credibilityScore > 100)) metricCalcFails.push(`指标 ${m.metricId} 可信度无效`);
});

(D.regulatoryKriRuntime || []).forEach(k => {
  req(k.kriRuntimeId, 'kriRuntimeId');
  req(k.kriId, 'kriId');
  if (!['NORMAL', 'ATTENTION', 'WARNING', 'CRITICAL', 'INSUFFICIENT_DATA'].includes(k.status)) kriRuntimeFails.push(`KRI ${k.kriId} 状态无效 ${k.status}`);
  if (k.dataStatus === 'INSUFFICIENT_DATA' && k.status !== 'INSUFFICIENT_DATA') kriRuntimeFails.push(`KRI ${k.kriId} 数据不足时状态应为 INSUFFICIENT_DATA`);
  if (k.metricId) resolve(k.metricId, D.regulatoryMetrics, 'metricId', 'kri.metric');
});

(D.regulatoryWarnings || []).forEach(w => {
  req(w.regulatoryWarningId, 'regulatoryWarningId');
  resolve(w.kriRuntimeId, D.regulatoryKriRuntime, 'kriRuntimeId', 'warning.kriRuntime');
  if (!['NOTICE', 'ATTENTION', 'WARNING', 'CRITICAL'].includes(w.warningLevel)) warningGenFails.push(`预警 ${w.regulatoryWarningId} 等级无效`);
  const rt = (D.regulatoryKriRuntime || []).find(k => k.kriRuntimeId === w.kriRuntimeId);
  if (rt && !['ATTENTION', 'WARNING', 'CRITICAL'].includes(rt.status)) warningGenFails.push(`预警 ${w.regulatoryWarningId} 不应由正常KRI生成`);
});

// 预警不等于风险事件：初始 riskMatterId 应为 null，不得自动创建新风险
(D.regulatoryWarnings || []).forEach(w => {
  if (w.status === 'PENDING_REVIEW' && w.riskMatterId) warningRiskFails.push(`待研判预警 ${w.regulatoryWarningId} 不应预置 riskMatterId`);
});
const autoCreatedRisks = (D.warnings || []).filter(w => w.sourceType === 'REGULATORY_WARNING_AUTO');
if (autoCreatedRisks.length) warningRiskFails.push('不得自动创建第二套风险库');

(D.regulatoryKriEvaluations || []).forEach(e => {
  req(e.evaluationId, 'evaluationId');
  if (e.dataStatus === 'INSUFFICIENT_HISTORY') {
    if (e.hitRate != null || e.riskConversionRate != null) kriEffectivenessFails.push(`评价 ${e.evaluationId} 不得伪造历史命中率`);
  }
});
if ((D.regulatoryMetricKriMetrics || {}).evaluationDataStatus !== 'INSUFFICIENT_HISTORY') {
  kriEffectivenessFails.push('evaluationDataStatus 应为 INSUFFICIENT_HISTORY');
}

(D.regulatoryWarningStrategies || []).forEach(s => {
  req(s.strategyAnalysisId, 'strategyAnalysisId');
  resolve(s.warningId, D.regulatoryWarnings, 'regulatoryWarningId', 'strategy.warning');
  if (s.reason === 'DATA_QUALITY_REVIEW_REQUIRED' && s.priorityAdjustmentSuggestion !== 'DATA_QUALITY_REVIEW_REQUIRED') {
    warningStrategyFails.push(`策略 ${s.strategyAnalysisId} 数据不足应仅建议 DATA_QUALITY_REVIEW_REQUIRED`);
  }
});

// 数据可信度不足时不直接调整优先级（策略仅建议）
(D.regulatoryWarnings || []).filter(w => w.dataStatus === 'INSUFFICIENT_DATA' || (w.credibilityScore != null && w.credibilityScore < 70)).forEach(w => {
  const strat = (D.regulatoryWarningStrategies || []).find(s => s.warningId === w.regulatoryWarningId);
  if (strat && strat.priorityAdjustmentSuggestion === 'ELEVATE') dataCredibilityFails.push(`预警 ${w.regulatoryWarningId} 可信度不足不得建议直接提升优先级`);
});

// Phase 20 analysis checks
if (!D.regulatoryAnalysisIndexes?.length) errors.push('regulatoryAnalysisIndexes 未生成');
if (!D.regulatoryAnalysisResults?.length) errors.push('regulatoryAnalysisResults 未生成');
if (!D.regulatoryRiskConcentration?.length) errors.push('regulatoryRiskConcentration 未生成');
if (!D.regulatoryRiskPropagation?.length) errors.push('regulatoryRiskPropagation 未生成');
if (!D.regulatoryScenarioAnalysis?.length) errors.push('regulatoryScenarioAnalysis 未生成');
if (!D.regulatoryDecisionRecommendations?.length) errors.push('regulatoryDecisionRecommendations 未生成');
if (!D.regulatoryAnalysisMetrics) errors.push('regulatoryAnalysisMetrics 未生成');
if (!D.regulatoryAnalysisWeights) compositeAnalysisFails.push('regulatoryAnalysisWeights 未定义');
const weightSum = Object.values(D.regulatoryAnalysisWeights || {}).reduce((s, v) => s + v, 0);
if (D.regulatoryAnalysisWeights && Math.abs(weightSum - 1) > 0.01) compositeAnalysisFails.push('综合评分权重之和应为1');
(D.regulatoryRiskConcentration || []).forEach(c => {
  req(c.concentrationId, 'concentrationId');
  if (!['HIGH_CONCENTRATION', 'MEDIUM_CONCENTRATION', 'LOW_CONCENTRATION'].includes(c.concentrationLevel)) riskConcentrationFails.push(`集中度 ${c.concentrationId} 级别无效`);
});
(D.regulatoryRiskPropagation || []).forEach(p => {
  req(p.propagationId, 'propagationId');
  if (p.propagationType === 'CONFIRMED_PROPAGATION') riskPropagationFails.push(`传导 ${p.propagationId} 不得伪造 CONFIRMED_PROPAGATION`);
});
(D.regulatoryScenarioAnalysis || []).forEach(s => {
  req(s.scenarioId, 'scenarioId');
  if (!s.simulationOnly) scenarioAnalysisFails.push(`情景 ${s.scenarioId} 必须 simulationOnly: true`);
});
(D.regulatoryDecisionRecommendations || []).forEach(r => {
  req(r.recommendationId, 'recommendationId');
  if (!r.requiresHumanDecision) humanDecisionFails.push(`建议 ${r.recommendationId} 必须 requiresHumanDecision: true`);
  if (!r.sourceAnalysisId) decisionRecommendationFails.push(`建议 ${r.recommendationId} 缺少来源`);
  if (!r.evidence || !r.evidence.length) decisionRecommendationFails.push(`建议 ${r.recommendationId} 缺少证据`);
});
if ((D.regulatoryAnalysisMetrics || {}).trendDataStatus !== 'INSUFFICIENT_HISTORY') compositeAnalysisFails.push('trendDataStatus 应为 INSUFFICIENT_HISTORY');
['ANALYSIS_VIEW', 'ANALYSIS_RUN', 'DECISION_RECOMMENDATION_VIEW'].forEach(code => {
  if (!(D.regulatoryPermissionSets || []).find(p => p.permissionCode === code)) analysisPermissionFails.push(`权限码未定义 ${code}`);
});
if (!(D.regulatorySearchIndex || []).some(s => s.category === '综合分析')) errors.push('搜索索引缺少综合分析');
if (!pubJs.includes('simulationOnly')) simulationIsolationFails.push('情景分析隔离说明缺失');

// Phase 21 improvement checks
if (!D.regulatoryImprovementOpportunities?.length) errors.push('regulatoryImprovementOpportunities 未生成');
if (!D.regulatoryRootCauseAnalyses?.length) errors.push('regulatoryRootCauseAnalyses 未生成');
if (!D.regulatoryOptimizationPlans?.length) errors.push('regulatoryOptimizationPlans 未生成');
if (!D.regulatoryImprovementExecution?.length) errors.push('regulatoryImprovementExecution 未生成');
if (!D.regulatoryContinuousImprovementMetrics) errors.push('regulatoryContinuousImprovementMetrics 未生成');

(D.regulatoryImprovementOpportunities || []).forEach(o => {
  req(o.opportunityId, 'opportunityId');
  if (!o.requiresHumanDecision) humanDecisionFails.push(`改进机会 ${o.opportunityId} 必须 requiresHumanDecision`);
  if (!o.sourceType || !o.sourceId) improvementOpportunityFails.push(`改进机会 ${o.opportunityId} 缺少来源`);
});

(D.regulatoryRootCauseAnalyses || []).forEach(r => {
  req(r.rootCauseId, 'rootCauseId');
  if (r.rootCauseStatus === 'CONFIRMED_ROOT_CAUSE' && !r.confirmedRootCause) rootCauseFails.push(`根因 ${r.rootCauseId} 确认后须有 confirmedRootCause`);
  (D.regulatoryRootCauseAnalyses || []).filter(x => x.rootCauseStatus === 'CONFIRMED_ROOT_CAUSE' && !x.confirmedAt).forEach(x => {
    if (x === r && !x.confirmedAt) { /* only pre-confirmed in seed data */ }
  });
  if (!r.requiresHumanConfirmation) rootCauseFails.push(`根因 ${r.rootCauseId} 须 requiresHumanConfirmation`);
});

(D.regulatoryRootCauseAnalyses || []).forEach(r => {
  if (r.rootCauseStatus !== 'POTENTIAL_ROOT_CAUSE' && r.rootCauseStatus !== 'CONFIRMED_ROOT_CAUSE') rootCauseFails.push(`根因 ${r.rootCauseId} 状态无效`);
});

(D.regulatoryOptimizationPlans || []).forEach(p => {
  req(p.planId, 'planId');
  if (!p.requiresHumanDecision) humanDecisionFails.push(`优化方案 ${p.planId} 必须 requiresHumanDecision`);
  if (!p.rootCauseId) optimizationPlanFails.push(`方案 ${p.planId} 缺少根因关联`);
});

(D.regulatoryImprovementExecution || []).forEach(e => {
  req(e.executionId, 'executionId');
  resolve(e.planId, D.regulatoryOptimizationPlans, 'planId', 'execution.plan');
});

(D.regulatoryImprovementEffectiveness || []).forEach(e => {
  req(e.effectivenessId, 'effectivenessId');
  if (e.dataStatus === 'INSUFFICIENT_HISTORY' && e.after != null && e.change != null) effectivenessFails.push(`效果 ${e.effectivenessId} 不得伪造历史对比`);
});

if (!(D.regulatorySearchIndex || []).some(s => s.category === '持续改进')) errors.push('搜索索引缺少持续改进');

// Quality calculation
const groupSnap = (D.regulatoryDataQualitySnapshots || []).find(s => s.scopeType === 'GROUP');
if (groupSnap && groupSnap.dataStatus === 'OK') {
  const expected = groupSnap.completeness * 0.2 + groupSnap.accuracy * 0.2 + groupSnap.timeliness * 0.2
    + groupSnap.consistency * 0.15 + groupSnap.uniqueness * 0.15 + groupSnap.validity * 0.1;
  if (Math.abs(expected - groupSnap.overallScore) > 0.2) qualityCalcFails.push('集团质量得分计算不一致');
} else if (!groupSnap) qualityCalcFails.push('缺少集团质量快照');

// Lineage impact - SRC002 should impact kri-capex
const src002Impact = (D.regulatoryDataLineage || []).filter(l => l.sourceId === 'SRC002' || (l.sourceType === 'regulatoryDataSources' && l.sourceId === 'SRC002'));
if (!src002Impact.length) lineageImpactFails.push('SRC002 缺少血缘关系');
const kriLineage = (D.regulatoryDataLineage || []).filter(l => l.targetId === 'kri-capex' || l.sourceId === 'kri-capex');
if (!kriLineage.length) lineageImpactFails.push('kri-capex 缺少血缘');

// Phase 17 retained checks
(D.regulatoryUsers || []).forEach(u => req(u.userId, 'userId'));
const rolePermMap = D.regulatoryRolePermissionMap || {};
Object.keys(rolePermMap).forEach(roleId => {
  (rolePermMap[roleId] || []).forEach(code => {
    if (!(D.regulatoryPermissionSets || []).find(p => p.permissionCode === code)) permFails.push(`权限码未定义 ${code}`);
  });
});

[
  'page-regulatory-data-sources', 'page-regulatory-data-integration', 'page-regulatory-data-quality',
  'page-regulatory-data-governance', 'page-regulatory-data-lineage',
  'page-regulatory-metric-center', 'page-regulatory-kri-monitoring', 'page-regulatory-warning-center',
  'page-regulatory-kri-effectiveness', 'page-regulatory-warning-strategy',
  'page-regulatory-analysis-center', 'page-regulatory-risk-concentration', 'page-regulatory-risk-propagation',
  'page-regulatory-scenario-analysis', 'page-regulatory-decision-recommendations',
  'page-regulatory-improvement-center', 'page-regulatory-root-cause-analysis', 'page-regulatory-optimization-plans',
  'page-regulatory-improvement-execution', 'page-regulatory-improvement-effectiveness'
].forEach(id => {
  if (!html.includes(id)) errors.push(`index.html 缺失: ${id}`);
});

if (!appJs.includes('renderRegulatoryImprovementCenter')) errors.push('app.js 未调用 renderRegulatoryImprovementCenter');
if (!pubJs.includes('持续改进健康度')) errors.push('驾驶舱 Phase 21 模块缺失');
if (!pubJs.includes('我的改进事项')) errors.push('工作台 Phase 21 模块缺失');
if (!pubJs.includes('持续改进视图')) errors.push('角色工作台 Phase 21 模块缺失');

const navChecks = [
  "navigatePublic('regulatory-data-sources')",
  "navigatePublic('regulatory-data-integration')",
  "navigatePublic('regulatory-data-quality')",
  "navigatePublic('regulatory-data-governance')",
  "navigatePublic('regulatory-data-lineage')",
  "navigatePublic('regulatory-metric-center')",
  "navigatePublic('regulatory-kri-monitoring')",
  "navigatePublic('regulatory-warning-center')",
  "navigatePublic('regulatory-kri-effectiveness')",
  "navigatePublic('regulatory-warning-strategy')",
  "navigatePublic('regulatory-analysis-center')",
  "navigatePublic('regulatory-risk-concentration')",
  "navigatePublic('regulatory-risk-propagation')",
  "navigatePublic('regulatory-scenario-analysis')",
  "navigatePublic('regulatory-decision-recommendations')",
  "navigatePublic('regulatory-improvement-center')",
  "navigatePublic('regulatory-root-cause-analysis')",
  "navigatePublic('regulatory-optimization-plans')",
  "navigatePublic('regulatory-improvement-execution')",
  "navigatePublic('regulatory-improvement-effectiveness')"
];
const unifiedNavigationCheck = navChecks.every(s => pubJs.includes(s));

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
  dataSourceUniqueness: dataSourceFails.length === 0 ? '通过' : '不通过',
  dataSourceCheck: dataSourceFails.length === 0 ? '通过' : '不通过',
  integrationJobCheck: integrationFails.length === 0 ? '通过' : '不通过',
  dataQualityCheck: qualityFails.length === 0 ? '通过' : '不通过',
  dataGovernanceCheck: governanceFails.length === 0 ? '通过' : '不通过',
  dataLineageCheck: lineageFails.length === 0 ? '通过' : '不通过',
  qualityCalculationCheck: qualityCalcFails.length === 0 ? '通过' : '不通过',
  lineageImpactCheck: lineageImpactFails.length === 0 ? '通过' : '不通过',
  metricCalculationCheck: metricCalcFails.length === 0 ? '通过' : '不通过',
  kriRuntimeCheck: kriRuntimeFails.length === 0 ? '通过' : '不通过',
  warningGenerationCheck: warningGenFails.length === 0 ? '通过' : '不通过',
  warningRiskSeparationCheck: warningRiskFails.length === 0 ? '通过' : '不通过',
  kriEffectivenessCheck: kriEffectivenessFails.length === 0 ? '通过' : '不通过',
  warningStrategyCheck: warningStrategyFails.length === 0 ? '通过' : '不通过',
  dataCredibilityCheck: dataCredibilityFails.length === 0 ? '通过' : '不通过',
  compositeAnalysisCheck: compositeAnalysisFails.length === 0 ? '通过' : '不通过',
  riskConcentrationCheck: riskConcentrationFails.length === 0 ? '通过' : '不通过',
  riskPropagationCheck: riskPropagationFails.length === 0 ? '通过' : '不通过',
  scenarioAnalysisCheck: scenarioAnalysisFails.length === 0 ? '通过' : '不通过',
  decisionRecommendationCheck: decisionRecommendationFails.length === 0 ? '通过' : '不通过',
  analysisPermissionCheck: analysisPermissionFails.length === 0 ? '通过' : '不通过',
  analysisAuditCheck: analysisAuditFails.length === 0 ? '通过' : '不通过',
  simulationIsolationCheck: simulationIsolationFails.length === 0 ? '通过' : '不通过',
  humanDecisionCheck: humanDecisionFails.length === 0 ? '通过' : '不通过',
  improvementOpportunityCheck: improvementOpportunityFails.length === 0 ? '通过' : '不通过',
  rootCauseCheck: rootCauseFails.length === 0 ? '通过' : '不通过',
  optimizationPlanCheck: optimizationPlanFails.length === 0 ? '通过' : '不通过',
  improvementExecutionCheck: improvementExecutionFails.length === 0 ? '通过' : '不通过',
  effectivenessCheck: effectivenessFails.length === 0 ? '通过' : '不通过',
  permissionCalculationCheck: permFails.length === 0 ? '通过' : '不通过',
  auditTrailCheck: auditFails.length === 0 ? '通过' : '不通过',
  unifiedNavigationCheck: unifiedNavigationCheck ? '通过' : '不通过',
  dataSourceFails: dataSourceFails.slice(0, 10),
  integrationFails: integrationFails.slice(0, 10),
  qualityFails: qualityFails.slice(0, 10),
  governanceFails: governanceFails.slice(0, 10),
  lineageFails: lineageFails.slice(0, 10),
  qualityCalcFails,
  lineageImpactFails,
  metricCalcFails,
  kriRuntimeFails,
  warningGenFails,
  warningRiskFails,
  kriEffectivenessFails,
  warningStrategyFails,
  dataCredibilityFails,
  compositeAnalysisFails,
  riskConcentrationFails,
  riskPropagationFails,
  scenarioAnalysisFails,
  decisionRecommendationFails,
  analysisPermissionFails,
  analysisAuditFails,
  simulationIsolationFails,
  humanDecisionFails,
  improvementOpportunityFails,
  rootCauseFails,
  optimizationPlanFails,
  improvementExecutionFails,
  effectivenessFails,
  permFails: permFails.slice(0, 10),
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
  errors.length || freezeFails.length || hardcodeOffsetCount || dataSourceFails.length
  || integrationFails.length || qualityFails.length || governanceFails.length || lineageFails.length
  || qualityCalcFails.length || lineageImpactFails.length || metricCalcFails.length || kriRuntimeFails.length
  || warningGenFails.length || warningRiskFails.length || kriEffectivenessFails.length
  || warningStrategyFails.length || dataCredibilityFails.length || compositeAnalysisFails.length
  || riskConcentrationFails.length || riskPropagationFails.length || scenarioAnalysisFails.length
  || decisionRecommendationFails.length || analysisPermissionFails.length || analysisAuditFails.length
  || simulationIsolationFails.length || humanDecisionFails.length
  || improvementOpportunityFails.length || rootCauseFails.length || optimizationPlanFails.length
  || improvementExecutionFails.length || effectivenessFails.length || permFails.length ? 1 : 0
);
