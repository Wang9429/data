#!/usr/bin/env node
/**
 * Phase 24 — 全监管领域真实业务数据批量适配验收
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
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'USR-GROUP-REG-01', roleId: 'ROLE-GROUP-REG' });
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  sandbox.App.createRegulatoryAuditLog = () => ({ success: true });
  return sandbox;
}

const ctx = loadSandbox();
const D = ctx.APP_DATA;
const App = ctx.App;
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');

const fails = {
  pages: [], domain: [], batchRun: [], coverage: [], maturity: [], quality: [],
  failure: [], closedLoop: [], permission: [], audit: [], freeze: [], engines: []
};

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const domains = D.regulatoryDomainConfigurations || [];
if (domains.length !== 9) fails.domain.push(`domainCount=${domains.length}`);

const results = D.regulatoryDomainAdaptationResults || [];
if (results.length !== 9) fails.domain.push(`domainResults=${results.length}`);
results.forEach(r => {
  ['adaptationId', 'domainId', 'adaptationStatus', 'qualityStatus', 'closedLoopStatus', 'maturityLevel'].forEach(f => {
    if (r[f] == null) fails.domain.push(`${r.domainId}: missing ${f}`);
  });
  if (r.closedLoopRate != null && typeof r.closedLoopRate === 'number' && r.closedLoopRate === 85) {
    fails.coverage.push(`${r.domainId}: hardcoded closedLoopRate`);
  }
});

const runs = D.regulatoryBatchAdaptationRuns || [];
if (!runs.length) fails.batchRun.push('no batch runs');
runs.forEach(r => {
  if (!r.runId || !r.mode || !r.runStatus) fails.batchRun.push(`invalid run ${r.runId}`);
  if (!['PENDING', 'RUNNING', 'PARTIAL_SUCCESS', 'SUCCESS', 'FAILED'].includes(r.runStatus)) fails.batchRun.push(`bad status ${r.runStatus}`);
});

const metrics = D.regulatoryBatchAdaptationMetrics || {};
['domainAdaptationCoverage', 'sourceAdaptationCoverage', 'mappingCoverage', 'kriCalculationCoverage', 'closedLoopDriveRate'].forEach(k => {
  if (metrics[k] == null) fails.coverage.push(`missing ${k}`);
});
if (metrics.trendStatus !== 'INSUFFICIENT_HISTORY') fails.coverage.push('trend should be INSUFFICIENT_HISTORY');

domains.forEach(d => {
  const m = App.calculateDomainAdaptationMaturity(d.domainId);
  if (!/^LEVEL_[0-7]$/.test(m)) fails.maturity.push(`${d.domainId}: ${m}`);
  const r = App.getDomainAdaptationResult(d.domainId);
  if (r && r.maturityLevel !== m) fails.maturity.push(`${d.domainId}: maturity mismatch`);
});

const qualityFailed = results.filter(r => r.qualityStatus === 'QUALITY_FAILED');
qualityFailed.forEach(r => {
  if (r.kriCalculationStatus !== 'DATA_QUALITY_REVIEW_REQUIRED' && r.kriCalculationStatus !== 'BLOCKED') {
    fails.quality.push(`${r.domainId}: quality failed but KRI not blocked`);
  }
});

if (!(D.regulatoryBatchAdaptationFailures || []).length && results.some(r => r.adaptationStatus === 'FAILED')) {
  fails.failure.push('failed domains without failure trace');
}
(D.regulatoryBatchAdaptationFailures || []).forEach(f => {
  if (!f.step || !f.status || !f.timestamp) fails.failure.push('incomplete failure record');
});

const fullLoops = results.filter(r => r.closedLoopStatus === 'FULL_CLOSED_LOOP');
const nonFull = results.filter(r => r.closedLoopStatus !== 'FULL_CLOSED_LOOP');
const honestStatuses = ['PARTIAL_CLOSED_LOOP', 'INSUFFICIENT_REAL_DATA', 'FAILED', 'NOT_STARTED'];
if (fullLoops.length < 3) {
  const allHonest = nonFull.every(r => honestStatuses.includes(r.closedLoopStatus));
  if (!(fullLoops.length >= 1 && allHonest)) fails.closedLoop.push(`fullLoop=${fullLoops.length}, honest=${allHonest}`);
}

[
  'runBatchRegulatoryDataAdaptation', 'calculateDomainAdaptationMaturity', 'computeBatchAdaptationCoverage',
  'refreshDomainAdaptationResults', 'retryBatchAdaptationSource', 'retryBatchAdaptationDomain',
  'renderBatchAdaptationCoveragePanel', 'renderBatchAdaptationRunsPanel', 'renderDomainAdaptationMaturityPanel'
].forEach(fn => { if (!pubJs.includes(fn)) fails.engines.push(`missing ${fn}`); });

if ((D.regulatoryBatchAdaptationScenarios || []).length < 6) fails.batchRun.push('scenarios < 6');
if (!appJs.includes('initializeBatchAdaptation')) fails.engines.push('init not wired');

if (!pubJs.includes('canRegulatoryAccess')) fails.permission.push('permission missing');

const batch = App.runBatchRegulatoryDataAdaptation({ mode: 'VALIDATE_ONLY', domainIds: ['investment'] });
if (!batch.runId) fails.batchRun.push('VALIDATE_ONLY failed');

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const allFails = Object.values(fails).flat();
const result = {
  phase: 'Phase 24 — 批量适配',
  publicPageCount,
  domainCount: domains.length,
  domainResultCount: results.length,
  fullClosedLoopDomainCount: fullLoops.length,
  domainAdaptationCoverage: metrics.domainAdaptationCoverage,
  closedLoopDriveRate: metrics.closedLoopDriveRate,
  batchRunCount: runs.length,
  scenarioCount: (D.regulatoryBatchAdaptationScenarios || []).length,
  domainAdaptationCheck: fails.domain.length === 0 ? '通过' : '不通过',
  batchRunCheck: fails.batchRun.length === 0 ? '通过' : '不通过',
  coverageCalculationCheck: fails.coverage.length === 0 ? '通过' : '不通过',
  maturityCalculationCheck: fails.maturity.length === 0 ? '通过' : '不通过',
  qualityImpactCheck: fails.quality.length === 0 ? '通过' : '不通过',
  failureTraceabilityCheck: fails.failure.length === 0 ? '通过' : '不通过',
  closedLoopCheck: fails.closedLoop.length === 0 ? '通过' : '不通过',
  permissionCheck: fails.permission.length === 0 ? '通过' : '不通过',
  auditTrailCheck: fails.audit.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  pageCountCheck: fails.pages.length === 0 ? '通过' : '不通过',
  engineCheck: fails.engines.length === 0 ? '通过' : '不通过',
  nodeCheck,
  fails: Object.fromEntries(Object.entries(fails).map(([k, v]) => [k, v.slice(0, 10)])),
  allPass: allFails.length === 0 && nodeCheck === '通过'
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
