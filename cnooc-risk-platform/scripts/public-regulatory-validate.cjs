#!/usr/bin/env node
/**
 * 公共监管底座 Phase 13 验收脚本
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
const performanceFails = [];
const allocationFails = [];
const supervisionFails = [];
const benchmarkingFails = [];

function req(id, label) {
  if (!id) errors.push(`缺失ID: ${label}`);
}

function resolveRiskMatterId(id, label) {
  if (!id) return null;
  const w = (D.warnings || []).find(x => x.id === id);
  if (w) return w;
  const c = (D.crossDomainRiskMatters || []).find(x => x.riskMatterId === id);
  if (c) return c;
  errors.push(`无法解析: ${label}=${id}`);
  return null;
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
  'regulatory-rule-versions', 'regulatory-rule-approvals', 'regulatory-rule-impact', 'regulatory-rule-effectiveness',
  'regulatory-rule-runtime', 'regulatory-rule-executions', 'regulatory-rule-deployments',
  'regulatory-performance', 'regulatory-resource-allocation', 'regulatory-supervision-tasks', 'regulatory-benchmarking',
  'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

const publicPageCount = (pubJs.match(/pageId: '/g) || []).length;
if (publicPageCount !== 34) warnings.push(`公共页面数=${publicPageCount}，期望34`);

const components = [
  'renderPublicPerformanceBadge', 'renderPublicAllocationBadge', 'renderPublicSupervisionTaskStatusBadge',
  'renderPublicBenchmarkBadge', 'renderPublicPerformanceComparison', 'renderPublicResourceFlow',
  'renderRegulatoryPerformance', 'renderRegulatoryResourceAllocation', 'renderRegulatorySupervisionTasks', 'renderRegulatoryBenchmarking',
  'showRegulatoryPerformanceDetail', 'showRegulatoryAllocationDetail', 'showRegulatorySupervisionTaskDetail', 'showRegulatoryBenchmarkDetail',
  'getRegulatoryPerformance', 'getRegulatoryAllocation', 'getRegulatorySupervisionTask', 'getRegulatoryBenchmark'
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

(D.regulatoryPerformanceMetrics || []).forEach(p => {
  req(p.performanceId, 'performanceId');
  if (p.scopeType === 'ENTITY') resolve(p.scopeId, D.globalLegalEntities, 'entityId', 'perf.entity');
  if (p.scopeType === 'REGION') resolve(p.scopeId, D.globalRegions, 'regionId', 'perf.region');
  if (p.scopeType === 'COUNTRY') resolve(p.scopeId, D.globalCountries, 'countryId', 'perf.country');
  if (p.scopeType === 'PROJECT') resolve(p.scopeId, D.globalProjects, 'projectId', 'perf.project');
  const expected = Math.round(
    (p.eventDetectionRate || 0) * 15 +
    (p.highRiskResolutionRate || 0) * 20 +
    (p.rectificationClosureRate || 0) * 20 +
    (p.actionVerificationRate || 0) * 15 +
    (p.dataQualityImprovementRate || 0) * 10 +
    (p.kriExceptionReductionRate || 0) * 10 +
    (p.overdueReductionRate || 0) * 10
  );
  if (Math.abs(expected - (p.regulatoryEffectivenessScore || 0)) > 1) {
    performanceFails.push(`绩效 ${p.performanceId} 得分计算不一致: 期望${expected} 实际${p.regulatoryEffectivenessScore}`);
  }
});

(D.regulatoryResourceAllocations || []).forEach(a => {
  req(a.allocationId, 'allocationId');
  resolve(a.entityId, D.globalLegalEntities, 'entityId', 'alloc.entity');
  if (a.regionId) resolve(a.regionId, D.globalRegions, 'regionId', 'alloc.region');
  (a.sourceActionIds || []).forEach(id => resolve(id, D.regulatoryActions, 'actionId', 'alloc.action'));
  (a.sourceEventIds || []).forEach(id => resolve(id, D.regulatoryEvents, 'eventId', 'alloc.event'));
  (a.sourceRiskMatterIds || []).forEach(id => resolveRiskMatterId(id, 'alloc.risk'));
  const validTypes = ['SUPERVISION', 'SPECIAL_REVIEW', 'DATA_GOVERNANCE', 'CROSS_BORDER_REVIEW', 'CROSS_DOMAIN_COORDINATION', 'RECTIFICATION_SUPPORT'];
  if (!validTypes.includes(a.resourceType)) allocationFails.push(`资源配置 ${a.allocationId} 类型无效`);
});

(D.regulatorySupervisionTasks || []).forEach(t => {
  req(t.supervisionTaskId, 'supervisionTaskId');
  resolve(t.entityId, D.globalLegalEntities, 'entityId', 'sup.entity');
  if (t.allocationId) resolve(t.allocationId, D.regulatoryResourceAllocations, 'allocationId', 'sup.allocation');
  (t.relatedRegulatoryActionIds || []).forEach(id => resolve(id, D.regulatoryActions, 'actionId', 'sup.action'));
  (t.relatedRectificationTaskIds || []).forEach(id => resolve(id, D.rectificationTasks, 'taskId', 'sup.rect'));
  const validStatuses = ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS', 'WAITING_RESULT', 'COMPLETED', 'EVALUATED'];
  if (!validStatuses.includes(t.taskStatus)) supervisionFails.push(`监管任务 ${t.supervisionTaskId} 状态无效`);
});

(D.regulatoryResourceEffectiveness || []).forEach(e => {
  req(e.effectivenessId, 'effectivenessId');
  resolve(e.allocationId, D.regulatoryResourceAllocations, 'allocationId', 'eff.allocation');
  resolve(e.entityId, D.globalLegalEntities, 'entityId', 'eff.entity');
});

(D.regulatoryBenchmarking || []).forEach(b => {
  req(b.benchmarkId, 'benchmarkId');
  const validTypes = ['ENTITY', 'REGION', 'COUNTRY', 'DOMAIN'];
  if (!validTypes.includes(b.benchmarkType)) benchmarkingFails.push(`对标 ${b.benchmarkId} 类型无效`);
  (b.sourcePerformanceIds || []).forEach(id => resolve(id, D.regulatoryPerformanceMetrics, 'performanceId', 'bench.perf'));
  (b.comparedScopes || []).forEach(() => {});
});

if (!D.regulatoryPerformanceMetrics?.length) errors.push('regulatoryPerformanceMetrics 未生成');
if (!D.regulatoryResourceAllocations?.length) errors.push('regulatoryResourceAllocations 未生成');
if (!D.regulatorySupervisionTasks?.length) errors.push('regulatorySupervisionTasks 未生成');
if (!D.regulatoryResourceEffectiveness?.length) errors.push('regulatoryResourceEffectiveness 未生成');
if (!D.regulatoryBenchmarking?.length) errors.push('regulatoryBenchmarking 未生成');
if (!D.regulatoryPerformanceSummary) errors.push('regulatoryPerformanceSummary 未生成');
if (!D.regulatoryOperationsMetrics) errors.push('regulatoryOperationsMetrics 未生成');

const scopeTypes = new Set((D.regulatoryPerformanceMetrics || []).map(p => p.scopeType));
['GROUP', 'REGION', 'COUNTRY', 'ENTITY', 'PROJECT', 'DOMAIN'].forEach(st => {
  if (!scopeTypes.has(st)) performanceFails.push(`绩效指标缺少层级: ${st}`);
});

const criticalAllocs = (D.regulatoryResourceAllocations || []).filter(a => a.priority === 'CRITICAL');
if (!criticalAllocs.some(a => a.resourceType === 'SPECIAL_REVIEW')) {
  allocationFails.push('CRITICAL 优先级未映射 SPECIAL_REVIEW');
}

['page-regulatory-performance', 'page-regulatory-resource-allocation', 'page-regulatory-supervision-tasks', 'page-regulatory-benchmarking'].forEach(id => {
  if (!html.includes(id)) errors.push(`index.html 缺失: ${id}`);
});

if (!pubJs.includes('监管绩效') || !pubJs.includes('监管资源配置') || !pubJs.includes('监管任务协同') || !pubJs.includes('监管能力差异')) {
  errors.push('驾驶舱 Phase 13 模块缺失');
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
  performanceCalculationCheck: performanceFails.length === 0 ? '通过' : '不通过',
  resourceAllocationCheck: allocationFails.length === 0 ? '通过' : '不通过',
  supervisionTaskCheck: supervisionFails.length === 0 ? '通过' : '不通过',
  benchmarkingCheck: benchmarkingFails.length === 0 ? '通过' : '不通过',
  performanceFails: performanceFails.slice(0, 10),
  allocationFails: allocationFails.slice(0, 10),
  supervisionFails: supervisionFails.slice(0, 10),
  benchmarkingFails: benchmarkingFails.slice(0, 10),
  errors: errors.slice(0, 40),
  warnings: warnings.slice(0, 15),
  investmentFreeze: freezeFails.length === 0 ? '通过' : '不通过',
  freezeFails,
  penetrateCallCount: penetrateCount,
  hardcodeOffsetCount,
  nodeCheck
};
console.log(JSON.stringify(result, null, 2));
process.exit(errors.length || freezeFails.length || hardcodeOffsetCount || performanceFails.length || allocationFails.length || supervisionFails.length || benchmarkingFails.length ? 1 : 0);
