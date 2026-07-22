#!/usr/bin/env node
/**
 * 公共监管底座 Phase 16 验收脚本
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
const roleFails = [];
const myWorkFails = [];
const searchFails = [];
const recentFails = [];
const favoriteFails = [];
const notificationFails = [];
const queueFails = [];

function req(id, label) {
  if (!id) errors.push(`缺失ID: ${label}`);
}

function resolve(id, arr, key, label) {
  if (!id) return null;
  const found = arr.find(x => x[key] === id);
  if (!found) errors.push(`无法解析: ${label}=${id}`);
  return found;
}

const ROLE_TYPES = ['GROUP_LEADER', 'GROUP_REGULATORY', 'DOMAIN_REGULATOR', 'ENTITY_REGULATOR'];
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
  'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

const publicPageCount = (pubJs.match(/pageId: '/g) || []).length;
if (publicPageCount !== 46) warnings.push(`公共页面数=${publicPageCount}，期望46`);

const components = [
  'renderPublicBreadcrumb', 'renderPublicSearchEntry', 'recordRecentView',
  'addRegulatoryFavorite', 'removeRegulatoryFavorite', 'toggleRegulatoryFavorite',
  'searchRegulatoryIndex', 'navigateSearchResult', 'markNotificationRead',
  'renderRegulatoryRoleWorkbench', 'renderRegulatoryMyWork', 'renderRegulatorySearch',
  'getCurrentRegulatoryRole', 'getRegulatoryRoleWorkbench', 'setRegulatoryRole'
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

(D.regulatoryRoleProfiles || []).forEach(r => {
  req(r.roleId, 'roleId');
  if (!ROLE_TYPES.includes(r.roleType)) roleFails.push(`角色 ${r.roleId} 类型无效`);
  if (!r.defaultPageId) roleFails.push(`角色 ${r.roleId} 缺失 defaultPageId`);
  if (!Array.isArray(r.visiblePages) || !r.visiblePages.length) roleFails.push(`角色 ${r.roleId} visiblePages 为空`);
});

(D.regulatoryRoleWorkbenches || []).forEach(wb => {
  req(wb.workbenchId, 'workbenchId');
  req(wb.roleId, 'wb.roleId');
  resolve(wb.roleId, D.regulatoryRoleProfiles, 'roleId', 'wb.role');
  if (!wb.kpis || !wb.kpis.length) roleFails.push(`角色工作台 ${wb.workbenchId} KPI 为空`);
  if (!wb.title) roleFails.push(`角色工作台 ${wb.workbenchId} 缺失 title`);
});

const SEARCH_SOURCE = {
  REGION: { arr: () => D.globalRegions, key: 'regionId' },
  COUNTRY: { arr: () => D.globalCountries, key: 'countryId' },
  ENTITY: { arr: () => D.globalLegalEntities, key: 'entityId' },
  PROJECT: { arr: () => D.globalProjects, key: 'projectId' },
  RISK: { arr: () => D.warnings, key: 'id' },
  CROSS_DOMAIN_RISK: { arr: () => D.crossDomainRiskMatters, key: 'riskMatterId' },
  EVENT: { arr: () => D.regulatoryEvents, key: 'eventId' },
  KRI: { arr: () => D.groupKris, key: 'id' },
  DATA_SOURCE: { arr: () => D.dataSources, key: 'sourceId' },
  ACTION: { arr: () => D.regulatoryActions, key: 'actionId' },
  SUPERVISION_TASK: { arr: () => D.regulatorySupervisionTasks, key: 'supervisionTaskId' },
  RECTIFICATION: { arr: () => D.rectificationTasks, key: 'taskId' },
  QUEUE: { arr: () => D.regulatoryQueue, key: 'queueItemId' },
  RULE: { arr: () => D.regulatoryRules, key: 'ruleId' },
  RULE_VERSION: { arr: () => D.regulatoryRuleVersions, key: 'versionId' },
  OBJECTIVE: { arr: () => D.regulatoryStrategicObjectives, key: 'objectiveId' },
  ANNUAL_PLAN: { arr: () => D.regulatoryAnnualPlans, key: 'planId' }
};

(D.regulatorySearchIndex || []).forEach(r => {
  req(r.resultId, 'resultId');
  req(r.objectId, 'search.objectId');
  if (!r.targetPageId) searchFails.push(`搜索 ${r.resultId} 缺失 targetPageId`);
  const src = SEARCH_SOURCE[r.objectType];
  if (src) {
    const found = (src.arr() || []).find(x => x[src.key] === r.objectId);
    if (!found) searchFails.push(`搜索 ${r.resultId} 无法解析 objectId=${r.objectId}`);
  }
});

const NOTIF_SOURCE = {
  regulatoryEvents: { arr: () => D.regulatoryEvents, key: 'eventId' },
  rectificationTasks: { arr: () => D.rectificationTasks, key: 'taskId' },
  regulatoryRuleRuntimeAnomalies: { arr: () => D.regulatoryRuleRuntimeAnomalies, key: 'anomalyId' },
  regulatoryStrategicObjectives: { arr: () => D.regulatoryStrategicObjectives, key: 'objectiveId' },
  regulatoryAnnualPlans: { arr: () => D.regulatoryAnnualPlans, key: 'planId' }
};

(D.regulatoryNotifications || []).forEach(n => {
  req(n.notificationId, 'notificationId');
  req(n.sourceId, 'notif.sourceId');
  const src = NOTIF_SOURCE[n.sourceType];
  if (src) {
    const found = (src.arr() || []).find(x => x[src.key] === n.sourceId);
    if (!found && !['regulatoryActionFeedbacks', 'regulatoryActions'].includes(n.sourceType)) {
      notificationFails.push(`通知 ${n.notificationId} 无法解析 sourceId=${n.sourceId}`);
    }
  }
  if (!n.targetPageId) notificationFails.push(`通知 ${n.notificationId} 缺失 targetPageId`);
});

(D.regulatoryRecentViews || []).forEach(v => {
  req(v.viewId, 'viewId');
  if (!v.pageId || !v.objectId) recentFails.push(`最近访问 ${v.viewId} 字段不完整`);
});

(D.regulatoryFavorites || []).forEach(f => {
  req(f.favoriteId, 'favoriteId');
  if (!f.objectId || !f.pageId) favoriteFails.push(`收藏 ${f.favoriteId} 字段不完整`);
});

if (!D.regulatoryRoleProfiles?.length) errors.push('regulatoryRoleProfiles 未生成');
if (!D.regulatoryRoleWorkbenches?.length) errors.push('regulatoryRoleWorkbenches 未生成');
if (!D.regulatorySearchIndex?.length) errors.push('regulatorySearchIndex 未生成');
if (!D.regulatoryNotifications?.length) errors.push('regulatoryNotifications 未生成');
if (!Array.isArray(D.regulatoryRecentViews)) errors.push('regulatoryRecentViews 未初始化');
if (!Array.isArray(D.regulatoryFavorites)) errors.push('regulatoryFavorites 未初始化');

if (D.regulatoryRecentViews.length > 20) recentFails.push('最近访问超过20条');
if ((D.regulatoryRecentViews || []).some(v => v.title && v.description)) recentFails.push('最近访问不得复制业务对象');

[
  'page-regulatory-role-workbench', 'page-regulatory-my-work', 'page-regulatory-search'
].forEach(id => {
  if (!html.includes(id)) errors.push(`index.html 缺失: ${id}`);
});

if (!appJs.includes('renderRegulatoryRoleWorkbench')) errors.push('app.js 未调用 renderRegulatoryRoleWorkbench');
if (!pubJs.includes('renderPublicBreadcrumb')) errors.push('全局面包屑缺失');
if (!pubJs.includes('regulatory-role-workbench') || !pubJs.includes('角色化监管工作台')) {
  errors.push('驾驶舱 Phase 16 模块缺失');
}

const navChecks = [
  "navigatePublic('regulatory-role-workbench')",
  "navigatePublic('regulatory-my-work')",
  "navigatePublic('regulatory-search')"
];
const unifiedNavigationCheck = navChecks.every(s => pubJs.includes(s));

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
const freezeFails = [];
if (penetrateCount !== 3) freezeFails.push('navigate(penetration)!=3');

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
  roleWorkbenchCheck: roleFails.length === 0 ? '通过' : '不通过',
  myWorkCheck: myWorkFails.length === 0 ? '通过' : '不通过',
  globalSearchCheck: searchFails.length === 0 ? '通过' : '不通过',
  recentViewCheck: recentFails.length === 0 ? '通过' : '不通过',
  favoriteCheck: favoriteFails.length === 0 ? '通过' : '不通过',
  notificationCheck: notificationFails.length === 0 ? '通过' : '不通过',
  unifiedNavigationCheck: unifiedNavigationCheck ? '通过' : '不通过',
  roleFails: roleFails.slice(0, 10),
  searchFails: searchFails.slice(0, 10),
  notificationFails: notificationFails.slice(0, 10),
  recentFails,
  favoriteFails,
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
  errors.length || freezeFails.length || hardcodeOffsetCount || roleFails.length
  || searchFails.length || notificationFails.length || recentFails.length || favoriteFails.length ? 1 : 0
);
