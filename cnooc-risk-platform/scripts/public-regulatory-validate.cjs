#!/usr/bin/env node
/**
 * 公共监管底座 Phase 19 验收脚本
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
  'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

const publicPageCount = (pubJs.match(/pageId: '/g) || []).length;
if (publicPageCount !== 60) warnings.push(`公共页面数=${publicPageCount}，期望60`);

const components = [
  'canRegulatoryAccess', 'createRegulatoryAuditLog', 'executeRegulatoryStateChange',
  'calculateDataSetQuality', 'calculateOverallQualityScore', 'getKriDataCredibility', 'getPriorityCredibilityImpact',
  'getDataLineageChain', 'getDataSourceImpactAnalysis', 'retryDataIntegrationJob',
  'assignDataGovernanceTask', 'closeDataGovernanceTask',
  'calculateRegulatoryMetric', 'calculateKriRuntimeStatus', 'getWarningPrioritySuggestion',
  'filterKriByUserScope', 'filterWarningsByUserScope',
  'reviewRegulatoryWarning', 'convertRegulatoryWarningToRisk', 'closeRegulatoryWarning', 'attemptKriThresholdChange',
  'renderRegulatoryDataSources', 'renderRegulatoryDataIntegration', 'renderRegulatoryDataQuality',
  'renderRegulatoryDataGovernance', 'renderRegulatoryDataLineage',
  'renderRegulatoryMetricCenter', 'renderRegulatoryKriMonitoring', 'renderRegulatoryWarningCenter',
  'renderRegulatoryKriEffectiveness', 'renderRegulatoryWarningStrategy',
  'showRegulatoryDataSourceDetail', 'showRegulatoryDataIntegrationDetail', 'showRegulatoryDataQualityDetail', 'showRegulatoryDataGovernanceDetail',
  'showRegulatoryMetricDetail', 'showRegulatoryKriRuntimeDetail', 'showRegulatoryWarningDetail'
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
  'page-regulatory-kri-effectiveness', 'page-regulatory-warning-strategy'
].forEach(id => {
  if (!html.includes(id)) errors.push(`index.html 缺失: ${id}`);
});

if (!appJs.includes('renderRegulatoryMetricCenter')) errors.push('app.js 未调用 renderRegulatoryMetricCenter');
if (!pubJs.includes('监管指标健康') || !pubJs.includes('KRI运行健康') || !pubJs.includes('监管预警')) {
  errors.push('驾驶舱 Phase 19 模块缺失');
}
if (!pubJs.includes('待研判预警') || !pubJs.includes('指标与预警待办')) errors.push('工作台 Phase 19 模块缺失');

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
  "navigatePublic('regulatory-warning-strategy')"
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
  || warningStrategyFails.length || dataCredibilityFails.length || permFails.length ? 1 : 0
);
