#!/usr/bin/env node
/**
 * Phase 28 — 集团监管平台真实运营数据运行与运营机制验证
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
  sandbox.App.initializeRegulatoryOperatingRuntime();
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
  pages: [], runtime: [], daily: [], weekly: [], monthly: [], quarterly: [], annual: [],
  exceptions: [], health: [], trace: [], human: [], simulation: [], permission: [], audit: [], freeze: [], engines: []
};

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const instances = D.regulatoryOperatingCycleInstances || [];
const expectedIds = ['ROC-2026-07-DAILY', 'ROC-2026-W30-WEEKLY', 'ROC-2026-07-MONTHLY', 'ROC-2026-Q3-QUARTERLY', 'ROC-2026-ANNUAL'];
if (instances.length < 5) fails.runtime.push(`instanceCount=${instances.length}`);
expectedIds.forEach(id => {
  const inst = instances.find(i => i.id === id);
  if (!inst) fails.runtime.push(`missing ${id}`);
  else {
    ['cycleType', 'period', 'status', 'sourceTraceability', 'dataStatus'].forEach(f => {
      if (inst[f] == null && f !== 'sourceTraceability') fails.runtime.push(`${id}.${f}`);
    });
    if (!inst.sourceTraceability) fails.trace.push(`${id} no trace`);
  }
});

const daily = D.regulatoryDailyOperations || [];
if (!daily.length) fails.daily.push('empty daily');
daily.forEach(d => {
  if (!d.sourceType || !d.sourceId) fails.daily.push(`invalid ${d.operationId}`);
  if (!d.sourceTraceability) fails.trace.push(`daily ${d.operationId}`);
  if (!d.responsibleRole || !d.responsibleScope) fails.daily.push(`role ${d.operationId}`);
});

const weekly = (D.regulatoryPeriodicReviews || []).find(r => r.reviewType === 'WEEKLY_REVIEW');
if (!weekly || !weekly.focusItems) fails.weekly.push('weekly review missing focusItems');
if (!weekly?.decisionItems) fails.weekly.push('decisionItems');
if (weekly?.trendComparisonStatus !== 'INSUFFICIENT_HISTORY') fails.simulation.push('weekly fake trend');

const monthly = D.regulatoryDomainOperationReviews || [];
if (monthly.length < 9) fails.monthly.push(`domainReviews=${monthly.length}`);
monthly.forEach(r => {
  if (!['HEALTHY', 'WATCH', 'AT_RISK', 'INSUFFICIENT_DATA'].includes(r.domainStatus)) fails.monthly.push(`bad status ${r.domainId}`);
  if (r.trendStatus === 'UP' || r.trendStatus === 'DOWN') fails.simulation.push(`fake domain trend ${r.domainId}`);
});

const quarterly = (D.regulatoryQuarterlyPerformanceReviews || [])[0];
if (!quarterly?.actualResults || !quarterly?.evaluationResults) fails.quarterly.push('missing quarterly structure');
(quarterly?.recommendations || []).forEach(r => {
  if (!r.requiresHumanDecision) fails.human.push(`quarterly rec ${r.recommendationId}`);
});

const annual = (D.regulatoryAnnualOperationResults || [])[0];
if (!annual?.operatingResultsSummary) fails.annual.push('annual missing');
if (!annual?.nextCycleRecommendations) fails.annual.push('next cycle recs');
if (annual?.trendStatus !== 'INSUFFICIENT_HISTORY') fails.simulation.push('annual fake trend');

const exceptions = D.regulatoryOperatingExceptions || [];
const exTypes = ['DATA_SOURCE_UNAVAILABLE', 'DATA_QUALITY_BLOCKED', 'KRI_CALCULATION_FAILED', 'WARNING_GENERATION_FAILED', 'ACTION_EXECUTION_OVERDUE', 'RECTIFICATION_VERIFICATION_OVERDUE', 'PERMISSION_EXCEPTION', 'RULE_RUNTIME_EXCEPTION'];
if (!exceptions.length) fails.exceptions.push('no exceptions');
exceptions.forEach(e => {
  if (!e.exceptionType || !e.sourceType || !e.sourceId || !e.severity || !e.responsibleRole) fails.exceptions.push(`invalid ${e.exceptionId}`);
  if (!e.sourceTraceability) fails.trace.push(`ex ${e.exceptionId}`);
});

const runtimeHealth = App.calculateOperatingRuntimeHealth('GROUP', 'G001');
if (!runtimeHealth.sourceTraceable) fails.health.push('runtime health not traceable');
if (runtimeHealth.trendStatus !== 'INSUFFICIENT_HISTORY') fails.simulation.push('runtime health fake trend');
const groupHealth = App.calculateOperatingHealth('GROUP', 'G001');
if (!groupHealth.sourceTraceable) fails.health.push('health not traceable');

const recs = D.regulatoryOperatingRecommendations || [];
recs.forEach(r => { if (!r.requiresHumanDecision) fails.human.push(r.recommendationId); });

const scenarios = D.regulatoryOperatingRuntimeScenarios || [];
if (scenarios.length < 8) fails.runtime.push('scenarios < 8');

if (!appJs.includes('initializeRegulatoryOperatingRuntime')) fails.engines.push('init not wired');
[
  'initializeRegulatoryOperatingRuntime', 'instantiateOperatingCycleInstances', 'generateWeeklyRegulatoryReview',
  'generateMonthlyDomainReview', 'generateQuarterlyRegulatoryPerformance', 'generateAnnualOperationReview',
  'detectRegulatoryOperatingExceptions', 'calculateOperatingRuntimeHealth', 'acknowledgeOperatingRecommendation',
  'computeRegulatoryOperatingRuntimeMetrics'
].forEach(fn => { if (!pubJs.includes(fn)) fails.engines.push(fn); });

if (!pubJs.includes('canRegulatoryAccess')) fails.permission.push('permission');
if (!pubJs.includes('createRegulatoryAuditLog')) fails.audit.push('audit fn');

const recId = recs[0]?.recommendationId;
if (recId) {
  App.canRegulatoryAccess = () => ({ allowed: true });
  const ack = App.acknowledgeOperatingRecommendation(recId, { reason: '验收测试' });
  if (!ack.success) fails.audit.push('ack failed');
  const auditAck = (D.regulatoryAuditLogs || []).some(l => l.objectType === 'regulatoryOperatingRecommendations' && l.objectId === recId);
  if (!auditAck) fails.audit.push('ack audit missing');
}

const perf = App.computeOperatingCyclePerformance();
if (perf.trendStatus !== 'INSUFFICIENT_HISTORY') fails.simulation.push('perf trend fake');

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);
if (pubJs.includes('renderPenetration()') && pubJs.match(/renderPenetration\(\)/g).length > 1) {
  // frozen - only definition should exist in app context; check no modification in domainPageTemplates for investment
}

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const rm = D.regulatoryOperatingRuntimeMetrics || {};
const allFails = Object.values(fails).flat();
const result = {
  phase: 'Phase 28 — 监管运营运行机制',
  publicPageCount,
  operatingRuntimeCheck: fails.runtime.length === 0 ? '通过' : '不通过',
  dailyOperationCheck: fails.daily.length === 0 ? '通过' : '不通过',
  weeklyReviewCheck: fails.weekly.length === 0 ? '通过' : '不通过',
  monthlyDomainReviewCheck: fails.monthly.length === 0 ? '通过' : '不通过',
  quarterlyPerformanceCheck: fails.quarterly.length === 0 ? '通过' : '不通过',
  annualReviewCheck: fails.annual.length === 0 ? '通过' : '不通过',
  operatingExceptionCheck: fails.exceptions.length === 0 ? '通过' : '不通过',
  operatingHealthCheck: fails.health.length === 0 ? '通过' : '不通过',
  sourceTraceabilityCheck: fails.trace.length === 0 ? '通过' : '不通过',
  humanDecisionCheck: fails.human.length === 0 ? '通过' : '不通过',
  simulationIsolationCheck: fails.simulation.length === 0 ? '通过' : '不通过',
  permissionCheck: fails.permission.length === 0 ? '通过' : '不通过',
  auditCheck: fails.audit.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  cycleInstanceCount: rm.cycleInstanceCount || instances.length,
  dailyOperationCount: rm.dailyOperationCount || daily.length,
  weeklyReviewCount: rm.weeklyReviewCount,
  monthlyDomainReviewCount: rm.monthlyDomainReviewCount,
  quarterlyPerformanceCount: rm.quarterlyPerformanceCount,
  annualReviewCount: rm.annualReviewCount,
  operatingExceptionCount: rm.operatingExceptionCount || exceptions.length,
  nodeSyntaxCheck: nodeCheck,
  allPass: allFails.length === 0 && nodeCheck === '通过',
  failures: allFails
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
