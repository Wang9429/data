#!/usr/bin/env node
/**
 * 公共监管底座 Phase 10 验收脚本
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
const errors = [];
const warnings = [];

function req(id, label) {
  if (!id) errors.push(`缺失ID: ${label}`);
}

function resolve(id, arr, key, label) {
  if (!id) return null;
  const found = arr.find(x => x[key] === id);
  if (!found) errors.push(`无法解析: ${label}=${id}`);
  return found;
}

const expectedPages = [
  'global-group-overview', 'global-legal-entities', 'global-regions', 'coverage-gaps',
  'platform-operations', 'data-governance', 'cross-border-compliance', 'cross-domain-risks',
  'warnings', 'rectification', 'regulatory-events', 'rectification-operations', 'regulatory-evaluation',
  'regulatory-command-center', 'regulatory-actions', 'regulatory-action-execution', 'regulatory-strategy',
  'regulatory-maturity', 'regulatory-optimization',
  'regulatory-rule-config', 'regulatory-simulation', 'regulatory-rule-history',
  'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

const publicPageCount = (pubJs.match(/pageId: '/g) || []).length;
if (publicPageCount !== 23) warnings.push(`公共页面数=${publicPageCount}，期望23`);

const components = [
  'renderPublicStatusBadge', 'renderPublicBackButton', 'buildPublicDetailPanel', 'renderPublicMetaGrid',
  'renderPublicIdField', 'renderPublicLinkButton', 'renderPublicEmptyState', 'renderPublicErrorState',
  'showPublicDetailOrNotFound', 'renderPublicMaturityBadge', 'renderPublicMaturityRadar',
  'renderRegulatoryMaturity', 'renderRegulatoryOptimization', 'showRegulatoryOptimizationDetail',
  'getRegulatoryMaturity', 'calculateRegulatoryPriority', 'recalculateRegulatoryPriority',
  'showRegulatoryActionExecutionDetail', 'showRegulatoryActionFeedbackDetail', 'showRegulatoryDecisionDetail',
  'renderPublicRuleTypeBadge', 'renderPublicRuleStatusBadge', 'renderPublicSimulationBadge',
  'renderPublicParameterDiff', 'renderPublicRuleCondition', 'renderPublicSimulationComparison',
  'renderRegulatoryRuleConfig', 'renderRegulatorySimulation', 'renderRegulatoryRuleHistory',
  'showRegulatoryRuleDetail', 'showRegulatorySimulationDetail', 'getRegulatoryRule', 'getRegulatorySimulationResult'
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

(D.globalLegalEntities || []).forEach(e => { req(e.entityId, 'entityId'); });
(D.regulatoryActions || []).forEach(a => {
  req(a.actionId, 'actionId');
  (a.sourceEventIds || []).forEach(eid => resolve(eid, D.regulatoryEvents, 'eventId', 'action.sourceEventId'));
  (a.sourceRectificationTaskIds || []).forEach(tid => resolve(tid, D.rectificationTasks, 'taskId', 'action.sourceRectTaskId'));
});
(D.regulatoryActionFeedbacks || []).forEach(f => {
  req(f.feedbackId, 'feedbackId');
  resolve(f.actionId, D.regulatoryActions, 'actionId', 'feedback.actionId');
});
(D.regulatoryDecisionHistory || []).forEach(d => {
  req(d.decisionId, 'decisionId');
  (d.sourceActionIds || []).forEach(aid => resolve(aid, D.regulatoryActions, 'actionId', 'decision.sourceActionId'));
});
(D.regulatoryOptimizationRecommendations || []).forEach(r => {
  req(r.recommendationId, 'recommendationId');
  (r.relatedMetricIds || []).forEach(mid => {
    const found = (D.regulatoryMaturity?.dimensions || []).flatMap(d => d.indicators || []).find(i => i.metricId === mid)
      || (D.regulatoryOptimizationAnalysis?.metricOptimizations || []).find(m => m.metricId === mid);
    if (!found) errors.push(`无法解析: recommendation.relatedMetricId=${mid}`);
  });
  (r.relatedRiskMatterIds || []).forEach(rid => {
    const w = D.warnings.find(x => x.id === rid);
    const m = D.crossDomainRiskMatters.find(x => x.riskMatterId === rid);
    if (!w && !m && rid) errors.push(`无法解析: recommendation.relatedRiskMatterId=${rid}`);
  });
  (r.relatedRectificationTaskIds || []).forEach(tid => resolve(tid, D.rectificationTasks, 'taskId', 'rec.rectTaskId'));
  (r.relatedActionIds || []).forEach(aid => resolve(aid, D.regulatoryActions, 'actionId', 'rec.actionId'));
});

(D.regulatoryRules || []).forEach(r => {
  req(r.ruleId, 'ruleId');
  (r.parameters || []).forEach(pid => resolve(pid, D.regulatoryRuleParameters, 'paramId', 'rule.paramId'));
  (r.relatedRiskMatterIds || []).forEach(rid => {
    const w = D.warnings.find(x => x.id === rid);
    const m = D.crossDomainRiskMatters.find(x => x.riskMatterId === rid);
    if (!w && !m && rid) errors.push(`无法解析: rule.relatedRiskMatterId=${rid}`);
  });
});
(D.regulatoryRuleParameters || []).forEach(p => req(p.paramId, 'paramId'));
(D.regulatorySimulations || []).forEach(s => req(s.simulationId, 'simulationId'));
(D.regulatorySimulationResults || []).forEach(s => {
  req(s.simulationId, 'simulationId');
  if (s.simulationOnly !== true) errors.push(`仿真结果 ${s.simulationId} 未标记 simulationOnly`);
});
(D.regulatoryRuleHistory || []).forEach(h => {
  req(h.historyId, 'historyId');
  resolve(h.ruleId, D.regulatoryRules, 'ruleId', 'history.ruleId');
});

if (!D.regulatoryMaturity) errors.push('regulatoryMaturity 未生成');
if (!D.regulatoryMaturityTrend) errors.push('regulatoryMaturityTrend 未生成');
if (!D.regulatoryOptimizationRecommendations?.length) errors.push('regulatoryOptimizationRecommendations 未生成');
if (!D.regulatoryOptimizationAnalysis) errors.push('regulatoryOptimizationAnalysis 未生成');
if (!D.regulatoryRules?.length) errors.push('regulatoryRules 未生成');
if (!D.regulatoryRuleParameters?.length) errors.push('regulatoryRuleParameters 未生成');
if (!D.regulatorySimulations?.length) errors.push('regulatorySimulations 未生成');
if (!D.regulatorySimulationResults?.length) errors.push('regulatorySimulationResults 未生成');
if (!D.regulatoryRuleConfigMetrics) errors.push('regulatoryRuleConfigMetrics 未生成');
if (D.regulatoryMaturity && !D.regulatoryMaturity.dimensions?.length) errors.push('regulatoryMaturity.dimensions 未生成');
if (D.regulatoryMaturityTrend && !D.regulatoryMaturityTrend.simulated) warnings.push('regulatoryMaturityTrend 应标注 simulated');

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
const freezeFails = [];
if (penetrateCount !== 3) freezeFails.push('navigate(penetration)!=3');
if (!/renderPenetration\s*\(/.test(appJs)) freezeFails.push('renderPenetration missing');

['page-regulatory-rule-config', 'page-regulatory-simulation', 'page-regulatory-rule-history'].forEach(id => {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  if (!html.includes(id)) errors.push(`index.html 缺失容器: ${id}`);
});

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const result = {
  idIntegrity: errors.length === 0 ? '通过' : '不通过',
  errorCount: errors.length,
  warningCount: warnings.length,
  errors: errors.slice(0, 40),
  warnings: warnings.slice(0, 15),
  investmentFreeze: freezeFails.length === 0 ? '通过' : '不通过',
  freezeFails,
  penetrateCallCount: penetrateCount,
  publicPageCount,
  hardcodeOffsetCount,
  nodeCheck,
  emptyStateComponents: /renderPublicEmptyState/.test(pubJs) ? '通过' : '不通过'
};
console.log(JSON.stringify(result, null, 2));
process.exit(errors.length || freezeFails.length || hardcodeOffsetCount ? 1 : 0);
