#!/usr/bin/env node
/**
 * Phase 6 公共监管底座验收脚本
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
const pubJs = fs.existsSync(pubPath) ? fs.readFileSync(pubPath, 'utf8') : '';
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

// --- 公共页面清单 ---
const expectedPages = [
  'global-legal-entities', 'global-regions', 'coverage-gaps', 'platform-operations',
  'data-governance', 'cross-border-compliance', 'cross-domain-risks', 'warnings', 'rectification', 'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

// --- 公共组件 ---
const components = [
  'renderPublicDetailHeader', 'renderPublicDetailSection', 'renderPublicMetaGrid',
  'renderPublicLinkButton', 'renderPublicRelationList', 'renderPublicRelationCard',
  'renderPublicRelationRow', 'renderPublicRelationLink', 'renderLineageNode',
  'renderLineageArrow', 'renderLineagePath', 'getPublicStatusClass',
  'getPublicStatusLabel', 'renderPublicStatusBadge', 'buildPublicDetailPanel',
  'renderPublicFilterBar', 'renderPublicEmptyState', 'renderPublicErrorState'
];
components.forEach(fn => {
  if (!pubJs.includes(fn)) errors.push(`公共组件缺失: ${fn}`);
});

// --- publicRegulatorySummary ---
const s = D.publicRegulatorySummary || {};
if (!s.entityCount || s.entityCount !== (D.globalLegalEntities || []).length) {
  errors.push(`publicRegulatorySummary.entityCount 与法人数量不一致: ${s.entityCount} vs ${(D.globalLegalEntities || []).length}`);
}
if (!D.platformOperationChain || !D.platformOperationChain.length) {
  errors.push('platformOperationChain 未生成');
}

// --- lastDataUpdateTime ---
['globalLegalEntities', 'globalRegions', 'globalCountries', 'dataQualityIssues',
  'crossDomainRiskMatters', 'crossBorderDataActivities', 'rectificationTasks'].forEach(key => {
  (D[key] || []).forEach((item, i) => {
    if (!item.lastDataUpdateTime && !item.lastUpdateTime && !item.lastSyncTime) {
      warnings.push(`${key}[${i}] 缺少 lastDataUpdateTime`);
    }
  });
});

// --- ID 完整性：平台告警 ---
(D.platformOperationAlerts || []).forEach(a => {
  req(a.alertId, 'alertId');
  if (a.sourceId) resolve(a.sourceId, D.dataSourceRegistry, 'sourceId', 'alert.sourceId');
  if (a.entityId) resolve(a.entityId, D.globalLegalEntities, 'entityId', 'alert.entityId');
  if (a.regionId) resolve(a.regionId, D.globalRegions, 'regionId', 'alert.regionId');
  if (a.countryId) resolve(a.countryId, D.globalCountries, 'countryId', 'alert.countryId');
  if (a.objectId) resolve(a.objectId, D.dataObjects, 'objectId', 'alert.objectId');
  if (a.fieldId) resolve(a.fieldId, D.dataFields, 'fieldId', 'alert.fieldId');
  if (a.qualityIssueId) resolve(a.qualityIssueId, D.dataQualityIssues, 'issueId', 'alert.qualityIssueId');
  if (a.indicatorId) resolve(a.indicatorId, D.dataIndicators, 'indicatorId', 'alert.indicatorId');
  if (a.kriId) resolve(a.kriId, D.groupKris, 'id', 'alert.kriId');
  if (a.riskMatterId) resolve(a.riskMatterId, D.warnings, 'id', 'alert.riskMatterId');
  if (a.rectificationTaskId) resolve(a.rectificationTaskId, D.rectificationTasks, 'taskId', 'alert.rectificationTaskId');
});

// --- 覆盖矩阵 ---
(D.coverageMatrixCells || []).forEach(c => {
  req(c.cellId, 'cellId');
  if (c.entityId) resolve(c.entityId, D.globalLegalEntities, 'entityId', 'matrix.entityId');
  if (c.sourceId) resolve(c.sourceId, D.dataSourceRegistry, 'sourceId', 'matrix.sourceId');
  if (c.objectId) resolve(c.objectId, D.dataObjects, 'objectId', 'matrix.objectId');
  if (c.kriId) resolve(c.kriId, D.groupKris, 'id', 'matrix.kriId');
});

// --- 跨领域风险 ---
(D.crossDomainRiskMatters || []).forEach(m => {
  req(m.riskMatterId, 'riskMatterId');
  (m.entityIds || []).forEach(eid => resolve(eid, D.globalLegalEntities, 'entityId', 'cdr.entityId'));
  (m.projectIds || []).forEach(pid => resolve(pid, D.globalProjects, 'projectId', 'cdr.projectId'));
  (m.relatedCrossBorderActivityIds || []).forEach(aid => resolve(aid, D.crossBorderDataActivities, 'activityId', 'cdr.activityId'));
  (m.relatedDataQualityIssueIds || []).forEach(qid => resolve(qid, D.dataQualityIssues, 'issueId', 'cdr.qualityIssueId'));
  (m.relatedRectificationTaskIds || []).forEach(tid => resolve(tid, D.rectificationTasks, 'taskId', 'cdr.rectTaskId'));
});

// --- 跨境数据活动 ---
(D.crossBorderDataActivities || []).forEach(a => {
  req(a.activityId, 'activityId');
  if (a.entityId) resolve(a.entityId, D.globalLegalEntities, 'entityId', 'cbd.entityId');
  if (a.sourceId) resolve(a.sourceId, D.dataSourceRegistry, 'sourceId', 'cbd.sourceId');
  if (a.dataObjectId) resolve(a.dataObjectId, D.dataObjects, 'objectId', 'cbd.objectId');
});

// --- 血缘 relationId ---
(D.dataLineageRelations || []).forEach(r => {
  req(r.relationId, 'relationId');
  resolve(r.sourceId, D.dataSourceRegistry, 'sourceId', 'lineage.sourceId');
  resolve(r.objectId, D.dataObjects, 'objectId', 'lineage.objectId');
});

// --- 数据源唯一性 ---
const sourceIds = D.dataSourceRegistry.map(s => s.sourceId);
const dupSources = sourceIds.filter((id, i) => sourceIds.indexOf(id) !== i);
if (dupSources.length) errors.push(`数据源ID重复: ${[...new Set(dupSources)].join(', ')}`);

// --- 投资管理冻结检查 ---
const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
const freezeChecks = {
  'renderPenetration仍存在': /renderPenetration\s*\(/.test(appJs),
  'showWarningDetail仍存在': /showWarningDetail\s*\(/.test(appJs),
  '无新增navigate(penetration)': penetrateCount <= 3,
  'navigatePublic存在': /navigatePublic\s*\(/.test(appJs),
  'goBackPublic存在': /goBackPublic\s*\(/.test(appJs),
  'publicNavHistory存在': /publicNavHistory/.test(appJs),
  'public-regulatory.js已引入': fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8').includes('public-regulatory.js'),
  'coverageMatrixCells数据存在': (D.coverageMatrixCells || []).length >= 20,
  'publicRegulatoryPages存在': /publicRegulatoryPages/.test(pubJs)
};
const freezeFails = Object.entries(freezeChecks).filter(([, ok]) => !ok).map(([k]) => k);

let gitDiffCheck = '通过';
try {
  execSync('git diff --check', { cwd: path.join(ROOT, '..'), stdio: 'pipe' });
} catch {
  gitDiffCheck = '不通过';
}

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  if (fs.existsSync(pubPath)) execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch {
  nodeCheck = '不通过';
}

const result = {
  idIntegrity: errors.length === 0 ? '通过' : '不通过',
  errorCount: errors.length,
  warningCount: warnings.length,
  errors: errors.slice(0, 30),
  warnings: warnings.slice(0, 10),
  dataSourceUniqueness: dupSources.length === 0 ? '通过' : '不通过',
  investmentFreeze: freezeFails.length === 0 ? '通过' : '不通过',
  freezeFails,
  penetrateCallCount: penetrateCount,
  nodeCheck,
  gitDiffCheck,
  emptyStateComponents: /renderPublicEmptyState/.test(pubJs) && /renderPublicErrorState/.test(pubJs) ? '通过' : '不通过'
};

console.log(JSON.stringify(result, null, 2));
process.exit(errors.length || dupSources.length || freezeFails.length ? 1 : 0);
