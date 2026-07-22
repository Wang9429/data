#!/usr/bin/env node
/**
 * Phase 27 — 集团监管平台真实运行机制与监管运营周期验收
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const dataPath = path.join(ROOT, 'js/data.js');
const appPath = path.join(ROOT, 'js/app.js');
const pubPath = path.join(ROOT, 'js/public-regulatory.js');

function loadSandbox() {
  const dataCode = fs.readFileSync(dataPath, 'utf8');
  const pubCode = fs.readFileSync(pubPath, 'utf8');
  const sandbox = { console, document: { getElementById: () => null }, window: {} };
  vm.runInNewContext(dataCode + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  vm.runInNewContext('var App = {};\n' + pubCode, sandbox, { filename: 'public-regulatory.js' });
  sandbox.App.finalizeRegulatoryPlatform();
  sandbox.App.initializeDataAdaptation();
  sandbox.App.initializeBatchAdaptation();
  sandbox.App.initializeDomainClosure();
  sandbox.App.initializeClosureVerification();
  sandbox.App.initializeRegulatoryOperatingCycle();
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE', userType: 'GROUP_REGULATORY' });
  sandbox.App.currentRegulatoryUserId = 'U-GROUP-REG';
  return sandbox;
}

const ctx = loadSandbox();
const D = ctx.APP_DATA;
const App = ctx.App;
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');

const fails = {
  pages: [], cycle: [], daily: [], review: [], health: [], rec: [], role: [],
  data: [], human: [], permission: [], audit: [], freeze: [], engines: []
};

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const cycles = D.regulatoryOperatingCycles || [];
const types = ['DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'ANNUAL'];
types.forEach(t => {
  const c = cycles.find(x => x.cycleType === t);
  if (!c || !c.cycleId || !c.periodStart || !c.status) fails.cycle.push(`missing ${t}`);
});
if (!cycles.find(c => c.cycleId === 'ROC-2026-07-MONTHLY')) fails.cycle.push('monthly id');

const daily = D.regulatoryDailyOperations || [];
if (!daily.length) fails.daily.push('empty daily');
daily.forEach(d => {
  if (!d.sourceType || !d.sourceId || !d.operationId) fails.daily.push(`invalid ${d.operationId}`);
  if (!d.sourceTraceability) fails.daily.push(`no trace ${d.operationId}`);
});

const reviews = D.regulatoryPeriodicReviews || [];
if (!reviews.find(r => r.reviewType === 'MONTHLY_REVIEW')) fails.review.push('monthly review');
if (!reviews.find(r => r.reviewType === 'WEEKLY_REVIEW')) fails.review.push('weekly review');
reviews.forEach(r => {
  if (r.trendComparisonStatus !== 'INSUFFICIENT_HISTORY') fails.data.push(`fake trend ${r.reviewId}`);
});

const snapshots = D.regulatoryOperatingSnapshots || [];
if (!snapshots.find(s => s.scopeType === 'GROUP')) fails.health.push('group snapshot');
snapshots.forEach(s => {
  if (s.trendStatus === 'UP' || s.trendStatus === 'DOWN') fails.data.push('fake snapshot trend');
  if (s.dataStatus === 'OK' && s.overallRegulatoryHealth == null) fails.health.push(s.snapshotId);
});

const groupHealth = App.calculateOperatingHealth('GROUP', 'G001');
if (!groupHealth.dataHealth && groupHealth.dataStatus !== 'INSUFFICIENT_DATA') fails.health.push('health calc');
if (!pubJs.includes('_OPERATING_HEALTH_WEIGHTS')) fails.health.push('weights scattered');

const recs = D.regulatoryOperatingRecommendations || [];
if (!recs.length) fails.rec.push('no recommendations');
recs.forEach(r => {
  if (!r.requiresHumanDecision) fails.human.push(r.recommendationId);
  if (!r.sourceType || !r.sourceId || !r.suggestedAction) fails.rec.push(`invalid ${r.recommendationId}`);
});

['GROUP_LEADER', 'GROUP_REGULATORY', 'DOMAIN_REGULATOR', 'ENTITY_REGULATOR'].forEach(rt => {
  const html = App.renderOperatingRolePathPanel(rt);
  if (typeof html !== 'string' || !html.includes('监管运营路径')) fails.role.push(rt);
});

const perf = App.computeOperatingCyclePerformance();
if (perf.trendStatus !== 'INSUFFICIENT_HISTORY') fails.data.push('perf trend fake');

[
  'initializeRegulatoryOperatingCycle', 'buildRegulatoryOperatingCycle', 'generateDailyRegulatoryOperations',
  'generatePeriodicRegulatoryReview', 'calculateOperatingHealth', 'generateOperatingRecommendations',
  'renderOperatingCycleDashboardPanel', 'renderDailyOperationsWorkbenchPanel', 'renderOperatingCycleAnalysisPanel',
  'renderOperatingCyclePerformancePanel', 'renderOperatingCycleStrategicLinkPanel', 'renderOperatingRolePathPanel'
].forEach(fn => { if (!pubJs.includes(fn)) fails.engines.push(fn); });

if (!appJs.includes('initializeRegulatoryOperatingCycle')) fails.engines.push('init not wired');
if (!pubJs.includes('canRegulatoryAccess')) fails.permission.push('permission');
if (!pubJs.includes('createRegulatoryAuditLog')) fails.audit.push('audit fn');

const built = App.buildRegulatoryOperatingCycle({ cycleType: 'MONTHLY', audit: true });
if (!built.cycleId) fails.cycle.push('build failed');
const auditCreate = (D.regulatoryAuditLogs || []).some(l => l.objectType === 'regulatoryOperatingCycles' && l.actionType === 'CREATE');
if (!auditCreate) fails.audit.push('audit create missing');

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);

if ((D.regulatoryOperatingScenarios || []).length < 8) fails.cycle.push('scenarios < 8');

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const allFails = Object.values(fails).flat();
const m = D.regulatoryOperatingMetrics || {};
const result = {
  phase: 'Phase 27 — 监管运营周期',
  publicPageCount,
  operatingCycleCheck: fails.cycle.length === 0 ? '通过' : '不通过',
  dailyOperationsCheck: fails.daily.length === 0 ? '通过' : '不通过',
  periodicReviewCheck: fails.review.length === 0 ? '通过' : '不通过',
  operatingHealthCheck: fails.health.length === 0 ? '通过' : '不通过',
  operatingRecommendationCheck: fails.rec.length === 0 ? '通过' : '不通过',
  roleOperatingPathCheck: fails.role.length === 0 ? '通过' : '不通过',
  dataSufficiencyCheck: fails.data.length === 0 ? '通过' : '不通过',
  humanDecisionCheck: fails.human.length === 0 ? '通过' : '不通过',
  permissionCalculationCheck: fails.permission.length === 0 ? '通过' : '不通过',
  auditTrailCheck: fails.audit.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  activeCycleCount: m.activeCycleCount,
  dailyOperationCount: m.dailyOperationCount,
  openRecommendationCount: m.openRecommendationCount,
  nodeSyntaxCheck: nodeCheck,
  allPass: allFails.length === 0 && nodeCheck === '通过',
  failures: allFails
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
