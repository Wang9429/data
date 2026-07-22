#!/usr/bin/env node
/**
 * Phase 22 — 集团监管平台产品化收口最终验收
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
  sandbox.App.finalizeRegulatoryPlatform();
  return sandbox.App;
}

const D = loadAppData();
const sandboxCtx = (() => {
  const dataCode = fs.readFileSync(dataPath, 'utf8');
  const pubCode = fs.readFileSync(pubPath, 'utf8');
  const sandbox = { console, document: { getElementById: () => null }, window: {} };
  vm.runInNewContext(dataCode + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  vm.runInNewContext('var App = {};\n' + pubCode, sandbox, { filename: 'public-regulatory.js' });
  sandbox.App.finalizeRegulatoryPlatform();
  return sandbox;
})();
const App = sandboxCtx.App;
const capMapData = sandboxCtx.APP_DATA.regulatoryCapabilityMap || [];
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const fails = {
  capabilityMap: [],
  navigation: [],
  rolePath: [],
  dataTrace: [],
  permission: [],
  audit: [],
  simulation: [],
  platformHealth: [],
  duplicate: [],
  freeze: [],
  hardcode: [],
  unifiedNav: [],
  closure: []
};

const expectedPages = (App.publicRegulatoryPages || []).map(p => p.pageId);
const publicPageCount = (pubJs.match(/pageId: '/g) || []).length;
const capMap = capMapData;

// 1. 70 pages
if (publicPageCount !== 70) fails.capabilityMap.push(`publicPageCount=${publicPageCount}`);
if (capMap.length !== publicPageCount) fails.capabilityMap.push(`capabilityMap=${capMap.length}`);

// 2-8. Capability map completeness
expectedPages.forEach(pid => {
  const entry = capMap.find(c => c.pageId === pid);
  if (!entry) { fails.capabilityMap.push(`missing capability entry: ${pid}`); return; }
  if (!entry.capabilityDomain) fails.capabilityMap.push(`${pid}: no domain`);
  if (!entry.primaryEntry) fails.capabilityMap.push(`${pid}: no primaryEntry`);
  if (!entry.parentEntry) fails.navigation.push(`${pid}: no parentEntry`);
  if (!entry.supportsBackNavigation && entry.pageId !== 'major') fails.navigation.push(`${pid}: no back path`);
  if (!entry.roleVisibility || !entry.roleVisibility.length) fails.permission.push(`${pid}: no roleVisibility`);
  if (!entry.dataSourceKey) fails.dataTrace.push(`${pid}: no dataSourceKey`);
  if (!entry.hasEmptyState) fails.navigation.push(`${pid}: no empty state flag`);
  if (!entry.hasErrorState) fails.navigation.push(`${pid}: no error state flag`);
});

// 9-10. Key operations permission + audit
const keyOps = [
  'confirmRegulatoryRootCause', 'approveRegulatoryOptimizationPlan', 'startRegulatoryImprovementExecution',
  'completeRegulatoryImprovementExecution', 'validateRegulatoryImprovementEffectiveness',
  'approveRegulatoryAuthorization', 'canRegulatoryAccess'
];
const keyPermCodes = ['RULE_APPROVE', 'RULE_PUBLISH', 'RULE_ROLLBACK'];
keyOps.forEach(fn => {
  if (!pubJs.includes(fn)) fails.permission.push(`missing op: ${fn}`);
});
keyPermCodes.forEach(code => {
  if (!pubJs.includes(code)) fails.permission.push(`missing perm: ${code}`);
});
if (!pubJs.includes('regulatoryAuditLogs')) fails.audit.push('audit log ref missing');

// 11. Simulation isolation
(D.regulatorySimulations || []).forEach(s => {
  if (s.simulationOnly !== true) fails.simulation.push(`sim ${s.simulationId}: simulationOnly not true`);
});
(D.regulatoryScenarioAnalysis || []).forEach(s => {
  if (s.simulationOnly !== true) fails.simulation.push(`scenario ${s.scenarioId}: simulationOnly not true`);
});
if (!pubJs.includes('simulationOnly')) fails.simulation.push('simulationOnly check missing in code');

// 12. ID traceability — search index links
(D.regulatorySearchIndex || []).forEach(s => {
  if (!s.targetPageId || !s.objectId) fails.dataTrace.push(`search ${s.resultId}: incomplete trace`);
});

// 13. Investment freeze
const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`navigate(penetration)=${penetrateCount}`);
if (!/renderPenetration\s*\(/.test(appJs)) fails.freeze.push('renderPenetration missing');

// 14. No duplicate business libraries
const dupPatterns = ['newRiskList', 'newWarningList', 'newActionList', 'newRectificationList', 'newKriList'];
dupPatterns.forEach(p => {
  if (pubJs.includes(p) || fs.readFileSync(dataPath, 'utf8').includes(p)) fails.duplicate.push(p);
});

// 15. Hardcoded offset
const hardcodeOffsetCount = (pubJs.match(/\+\s*70\b/g) || []).length + (dataPath.match(/\+\s*70\b/g) || []).length;

// 16. Unified navigation helpers
['renderPublicBreadcrumb', 'renderPublicUnifiedStatusBadge', 'getPublicUnifiedStatusLabel', 'getPublicUnifiedStatusType', 'buildRegulatoryCapabilityMap', 'finalizeRegulatoryPlatform'].forEach(fn => {
  if (!pubJs.includes(fn)) fails.unifiedNav.push(`missing ${fn}`);
});

// 17. Role paths
const rolePaths = D.regulatoryRolePaths || [];
['ROLE-GROUP-LEADER', 'ROLE-GROUP-REG', 'ROLE-DOMAIN-REG', 'ROLE-ENTITY-REG'].forEach(rid => {
  const rp = rolePaths.find(r => r.roleId === rid);
  if (!rp || !rp.path || rp.path.length < 4) fails.rolePath.push(`${rid}: incomplete path`);
  else rp.path.forEach(pid => { if (!expectedPages.includes(pid) && pid !== 'group') fails.rolePath.push(`${rid}: invalid page ${pid}`); });
});

// 18. Closure chains
const chains = D.regulatoryClosureChains || [];
if (chains.length < 8) fails.closure.push(`chains=${chains.length}`);
chains.forEach(c => {
  if (!c.steps || c.steps.length < 4) fails.closure.push(`${c.chainId}: too short`);
  c.steps.forEach(pid => { if (!expectedPages.includes(pid) && pid !== 'group') fails.closure.push(`${c.chainId}: invalid ${pid}`); });
});

// Platform health
const ph = D.platformHealth || {};
if (!ph.dimensions || !ph.dimensions.dataHealth) fails.platformHealth.push('platformHealth.dimensions missing');
if (!ph.healthStatus) fails.platformHealth.push('platformHealth.healthStatus missing');

// Favorites — only resourceType + resourceId pattern
(D.regulatoryFavorites || []).forEach(f => {
  if (!f.objectType || !f.objectId) fails.dataTrace.push(`favorite missing type/id`);
});

// Recent views max 20
if ((D.regulatoryRecentViews || []).length > 20) fails.dataTrace.push('recentViews > 20');

// Notifications traceable
(D.regulatoryNotifications || []).forEach(n => {
  if (!n.targetPageId) fails.dataTrace.push(`notification ${n.notificationId}: no target`);
});

let nodeCheck = '通过';
let gitDiffCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
  execSync(`node --check ${path.join(ROOT, 'scripts/regulatory-platform-final-validate.cjs')}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }
try {
  execSync('git diff --check', { cwd: ROOT, stdio: 'pipe' });
} catch { gitDiffCheck = '不通过'; }

const allFails = Object.values(fails).flat();
const result = {
  publicPageCount,
  capabilityMapCheck: fails.capabilityMap.length === 0 ? '通过' : '不通过',
  navigationCheck: fails.navigation.length === 0 ? '通过' : '不通过',
  rolePathCheck: fails.rolePath.length === 0 ? '通过' : '不通过',
  dataTraceabilityCheck: fails.dataTrace.length === 0 ? '通过' : '不通过',
  permissionCheck: fails.permission.length === 0 ? '通过' : '不通过',
  auditCheck: fails.audit.length === 0 ? '通过' : '不通过',
  simulationIsolationCheck: fails.simulation.length === 0 ? '通过' : '不通过',
  platformHealthCheck: fails.platformHealth.length === 0 ? '通过' : '不通过',
  duplicateEntityCheck: fails.duplicate.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  unifiedNavigationCheck: fails.unifiedNav.length === 0 ? '通过' : '不通过',
  closureChainCheck: fails.closure.length === 0 ? '通过' : '不通过',
  hardcodeOffsetCount,
  penetrateCallCount: penetrateCount,
  capabilityDomainCount: [...new Set(capMap.map(c => c.capabilityDomain))].length,
  nodeCheck,
  gitDiffCheck,
  fails: Object.fromEntries(Object.entries(fails).map(([k, v]) => [k, v.slice(0, 8)])),
  allPass: allFails.length === 0 && hardcodeOffsetCount === 0 && nodeCheck === '通过'
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
