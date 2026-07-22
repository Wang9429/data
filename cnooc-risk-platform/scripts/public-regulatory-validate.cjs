#!/usr/bin/env node
/**
 * 公共监管底座最终验收脚本
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

// --- 页面目录（11个）---
const expectedPages = [
  'global-group-overview', 'global-legal-entities', 'global-regions', 'coverage-gaps',
  'platform-operations', 'data-governance', 'cross-border-compliance', 'cross-domain-risks',
  'warnings', 'rectification', 'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});
const pageIdMatches = pubJs.match(/pageId:\s*'[^']+'/g) || [];
if (pageIdMatches.length !== new Set(pageIdMatches).size) errors.push('publicRegulatoryPages 存在重复 pageId');

// --- 公共组件 ---
const components = [
  'renderPublicStatusBadge', 'renderPublicBackButton', 'renderPublicDetailHeader',
  'renderPublicDetailSection', 'buildPublicDetailPanel', 'renderPublicMetaGrid',
  'renderPublicIdField', 'renderPublicLinkButton', 'renderPublicRelationList',
  'renderPublicRelationCard', 'renderPublicRelationRow', 'renderPublicRelationLink',
  'renderLineageNode', 'renderLineageArrow', 'renderLineagePath',
  'renderPublicEmptyState', 'renderPublicErrorState', 'renderPublicFilterBar',
  'renderPublicNotFoundPanel', 'showPublicDetailOrNotFound', 'resolvePublicRouteId'
];
components.forEach(fn => {
  if (!pubJs.includes(fn)) errors.push(`公共组件缺失: ${fn}`);
});

// --- 组件使用率 ---
const componentUsage = components.map(fn => {
  const re = new RegExp(fn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const appCount = (appJs.match(re) || []).length;
  const pubCount = (pubJs.match(re) || []).length;
  return { component: fn, appJs: appCount, publicRegulatoryJs: pubCount, total: appCount + pubCount };
});

// --- 硬编码偏移扫描（公共页面相关文件）---
const hardcodePatterns = [
  /\.length\s*\+\s*\d+/g,
  /entities\.length\s*\+\s*\d+/g,
  /risks\.length\s*\+\s*\d+/g,
  /sources\.length\s*\+\s*\d+/g
];
let hardcodeOffsetCount = 0;
[appJs, pubJs].forEach((src, i) => {
  const file = i === 0 ? 'app.js' : 'public-regulatory.js';
  hardcodePatterns.forEach(re => {
    const m = src.match(re) || [];
    m.forEach(hit => {
      if (!hit.includes('steps.length')) {
        hardcodeOffsetCount++;
        warnings.push(`硬编码偏移 ${file}: ${hit}`);
      }
    });
  });
});

// --- 全球对象 ID 与孤儿检查 ---
(D.globalLegalEntities || []).forEach(e => {
  req(e.entityId, 'entityId');
  if (e.parentEntityId) resolve(e.parentEntityId, D.globalLegalEntities, 'entityId', 'parentEntityId');
  if (e.regionId) resolve(e.regionId, D.globalRegions, 'regionId', 'entity.regionId');
  if (e.countryId) resolve(e.countryId, D.globalCountries, 'countryId', 'entity.countryId');
});
(D.globalCountries || []).forEach(c => {
  req(c.countryId, 'countryId');
  resolve(c.regionId, D.globalRegions, 'regionId', 'country.regionId');
});
(D.globalProjects || []).forEach(p => {
  req(p.projectId, 'projectId');
  resolve(p.entityId, D.globalLegalEntities, 'entityId', 'project.entityId');
  if (p.countryId) resolve(p.countryId, D.globalCountries, 'countryId', 'project.countryId');
});

// --- 数据治理对象 ---
const sourceIds = (D.dataSourceRegistry || []).map(s => s.sourceId);
const dupSources = sourceIds.filter((id, i) => sourceIds.indexOf(id) !== i);
if (dupSources.length) errors.push(`数据源ID重复: ${[...new Set(dupSources)].join(', ')}`);
(D.dataSourceRegistry || []).forEach(s => {
  req(s.sourceId, 'sourceId');
  if (s.entityId) resolve(s.entityId, D.globalLegalEntities, 'entityId', 'source.entityId');
});
(D.dataObjects || []).forEach(o => {
  req(o.objectId, 'objectId');
  resolve(o.sourceId, D.dataSourceRegistry, 'sourceId', 'object.sourceId');
});
(D.dataFields || []).forEach(f => {
  req(f.fieldId, 'fieldId');
  resolve(f.objectId, D.dataObjects, 'objectId', 'field.objectId');
});
(D.dataLineageRelations || []).forEach(r => {
  req(r.relationId, 'relationId');
  resolve(r.sourceId, D.dataSourceRegistry, 'sourceId', 'lineage.sourceId');
  resolve(r.objectId, D.dataObjects, 'objectId', 'lineage.objectId');
});
(D.dataQualityIssues || []).forEach(q => {
  req(q.issueId, 'issueId');
  if (q.objectId) resolve(q.objectId, D.dataObjects, 'objectId', 'quality.objectId');
});

// --- 风险与整改 ---
(D.warnings || []).forEach(w => {
  req(w.id, 'warning.id');
  if (w.entityId) resolve(w.entityId, D.globalLegalEntities, 'entityId', 'warning.entityId');
  if (w.kriId) resolve(w.kriId, D.groupKris, 'id', 'warning.kriId');
});
(D.crossDomainRiskMatters || []).forEach(m => {
  req(m.riskMatterId, 'riskMatterId');
  (m.entityIds || []).forEach(eid => resolve(eid, D.globalLegalEntities, 'entityId', 'cdr.entityId'));
  (m.projectIds || []).forEach(pid => resolve(pid, D.globalProjects, 'projectId', 'cdr.projectId'));
  (m.relatedCrossBorderActivityIds || []).forEach(aid => resolve(aid, D.crossBorderDataActivities, 'activityId', 'cdr.activityId'));
  (m.relatedDataQualityIssueIds || []).forEach(qid => resolve(qid, D.dataQualityIssues, 'issueId', 'cdr.qualityIssueId'));
  (m.relatedRectificationTaskIds || []).forEach(tid => resolve(tid, D.rectificationTasks, 'taskId', 'cdr.rectTaskId'));
});
(D.rectificationTasks || []).forEach(t => {
  req(t.taskId, 'taskId');
  if (t.entityId) resolve(t.entityId, D.globalLegalEntities, 'entityId', 'rect.entityId');
  if (t.riskMatterId) {
    const w = D.warnings.find(x => x.id === t.riskMatterId);
    const m = D.crossDomainRiskMatters.find(x => x.riskMatterId === t.riskMatterId);
    if (!w && !m) errors.push(`无法解析: rect.riskMatterId=${t.riskMatterId}`);
  }
});
(D.platformOperationAlerts || []).forEach(a => {
  req(a.alertId, 'alertId');
  if (a.sourceId) resolve(a.sourceId, D.dataSourceRegistry, 'sourceId', 'alert.sourceId');
  if (a.qualityIssueId) resolve(a.qualityIssueId, D.dataQualityIssues, 'issueId', 'alert.qualityIssueId');
  if (a.riskMatterId) resolve(a.riskMatterId, D.warnings, 'id', 'alert.riskMatterId');
  if (a.rectificationTaskId) resolve(a.rectificationTaskId, D.rectificationTasks, 'taskId', 'alert.rectificationTaskId');
});
(D.coverageMatrixCells || []).forEach(c => {
  req(c.cellId, 'cellId');
  if (c.entityId) resolve(c.entityId, D.globalLegalEntities, 'entityId', 'matrix.entityId');
  if (c.sourceId) resolve(c.sourceId, D.dataSourceRegistry, 'sourceId', 'matrix.sourceId');
});
(D.crossBorderDataActivities || []).forEach(a => {
  req(a.activityId, 'activityId');
  if (a.entityId) resolve(a.entityId, D.globalLegalEntities, 'entityId', 'cbd.entityId');
  if (a.sourceId) resolve(a.sourceId, D.dataSourceRegistry, 'sourceId', 'cbd.sourceId');
});

// --- 聚合数据 ---
const s = D.publicRegulatorySummary || {};
if (!s.entityCount || s.entityCount !== (D.globalLegalEntities || []).length) {
  errors.push(`publicRegulatorySummary.entityCount 不一致: ${s.entityCount} vs ${(D.globalLegalEntities || []).length}`);
}
if (!D.platformOperationChain || !D.platformOperationChain.length) errors.push('platformOperationChain 未生成');

// --- 投资管理冻结 ---
const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
const freezeChecks = {
  'renderPenetration仍存在': /renderPenetration\s*\(/.test(appJs),
  'showWarningDetail仍存在': /showWarningDetail\s*\(/.test(appJs),
  'navigate(penetration)=3': penetrateCount === 3,
  'navigatePublic存在': /navigatePublic\s*\(/.test(appJs),
  'goBackPublic存在': /goBackPublic\s*\(/.test(appJs),
  'publicNavHistory存在': /publicNavHistory/.test(appJs),
  'showPublicWarningDetail存在': /showPublicWarningDetail\s*\(/.test(appJs),
  'public-regulatory.js已引入': fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8').includes('public-regulatory.js'),
  'global-group-overview在目录': pubJs.includes("pageId: 'global-group-overview'")
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
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch {
  nodeCheck = '不通过';
}

const result = {
  idIntegrity: errors.length === 0 ? '通过' : '不通过',
  errorCount: errors.length,
  warningCount: warnings.length,
  errors: errors.slice(0, 40),
  warnings: warnings.slice(0, 15),
  dataSourceUniqueness: dupSources.length === 0 ? '通过' : '不通过',
  investmentFreeze: freezeFails.length === 0 ? '通过' : '不通过',
  freezeFails,
  penetrateCallCount: penetrateCount,
  hardcodeOffsetCount,
  dynamicAggregation: (s.entityCount && D.platformOperationChain) ? '通过' : '不通过',
  componentUsage: componentUsage.filter(c => c.total > 0),
  nodeCheck,
  gitDiffCheck,
  emptyStateComponents: /renderPublicEmptyState/.test(pubJs) && /renderPublicNotFoundPanel/.test(pubJs) ? '通过' : '不通过'
};

console.log(JSON.stringify(result, null, 2));
process.exit(errors.length || dupSources.length || freezeFails.length || hardcodeOffsetCount ? 1 : 0);
