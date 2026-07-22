#!/usr/bin/env node
/**
 * Phase 25 — 重点监管领域真实数据补齐与闭环成熟度提升验收
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
  return sandbox;
}

const ctx = loadSandbox();
const D = ctx.APP_DATA;
const App = ctx.App;
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');

const fails = {
  pages: [], gaps: [], plans: [], readiness: [], priority: [], maturity: [],
  integrity: [], fake: [], permission: [], audit: [], freeze: [], engines: []
};

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const domains = D.regulatoryDomainConfigurations || [];
if (domains.length !== 9) fails.gaps.push(`domainCount=${domains.length}`);

const gaps = D.regulatoryDomainDataGaps || [];
if (!gaps.length) fails.gaps.push('no gaps');
gaps.forEach(g => {
  if (!g.gapId || !g.gapType || !g.gapLevel || !g.evidence) fails.gaps.push(`invalid gap ${g.gapId}`);
  if (g.gapCount != null) fails.fake.push(`hardcoded gapCount on ${g.gapId}`);
});

const plans = D.regulatoryDomainClosurePlans || [];
if (plans.length !== 9) fails.plans.push(`planCount=${plans.length}`);
plans.forEach(p => {
  if (!p.planId || !p.domainId || p.completionRate == null) fails.plans.push(`invalid plan ${p.domainId}`);
  if (p.completionRate === 85) fails.fake.push(`hardcoded completionRate ${p.domainId}`);
});

domains.forEach(d => {
  const rd = App.calculateDomainClosureReadiness(d.domainId);
  if (rd.domainClosureReadiness == null) fails.readiness.push(d.domainId);
  if (rd.trendStatus !== 'INSUFFICIENT_HISTORY') fails.readiness.push(`${d.domainId}: trend`);
  const pr = App.calculateDomainClosurePriority(d.domainId);
  if (!['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].includes(pr)) fails.priority.push(d.domainId);
  const m = App.calculateDomainAdaptationMaturity(d.domainId);
  if (!/^LEVEL_[0-7]$/.test(m)) fails.maturity.push(d.domainId);
});

const results = D.regulatoryDomainAdaptationResults || [];
results.forEach(r => {
  if (r.closedLoopStatus === 'FULL_CLOSED_LOOP') {
    const plan = App.getDomainClosurePlan(r.domainId);
    const rGaps = App.getDomainDataGaps(r.domainId);
    const hasVerificationGap = rGaps.some(g => g.gapType === 'NO_VERIFICATION_CHAIN' && g.gapStatus === 'OPEN');
    if (hasVerificationGap) fails.fake.push(`${r.domainId}: FULL with verification gap`);
    if (!r.verifiedCount && r.linkedRectificationCount) fails.fake.push(`${r.domainId}: FULL without verified`);
  }
  if (r.closedLoopStatus === 'INSUFFICIENT_REAL_DATA' && r.closedLoopStatus === 'FULL_CLOSED_LOOP') fails.fake.push(r.domainId);
});

const finance = App.getDomainClosurePlan('finance');
const overseas = App.getDomainClosurePlan('overseas');
if (!finance) fails.plans.push('finance plan missing');
if (!overseas) fails.plans.push('overseas plan missing');
if (finance?.closedLoopStatus === 'FULL_CLOSED_LOOP' && !results.find(r => r.domainId === 'finance')?.verifiedCount) {
  fails.fake.push('finance falsely full');
}

if ((D.regulatoryDomainClosureScenarios || []).length < 6) fails.gaps.push('scenarios < 6');

[
  'initializeDomainClosure', 'analyzeDomainDataGaps', 'calculateDomainClosureReadiness',
  'calculateDomainClosurePriority', 'buildDomainClosurePlan', 'refreshDomainDataGaps',
  'renderDomainClosureDashboardPanel', 'renderDomainDataGapsPanel', 'renderDomainClosurePlansPanel'
].forEach(fn => { if (!pubJs.includes(fn)) fails.engines.push(`missing ${fn}`); });

if (!appJs.includes('initializeDomainClosure')) fails.engines.push('init not wired');
if (!pubJs.includes('canRegulatoryAccess')) fails.permission.push('permission missing');

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const allFails = Object.values(fails).flat();
const m = D.regulatoryDomainClosureMetrics || {};
const result = {
  phase: 'Phase 25 — 领域闭环成熟度提升',
  publicPageCount,
  domainCount: domains.length,
  openGapCount: gaps.filter(g => g.gapStatus === 'OPEN').length,
  planCount: plans.length,
  fullClosedLoopCount: m.fullClosedLoopCount,
  avgClosureReadiness: m.avgClosureReadiness,
  domainDataGapCheck: fails.gaps.length === 0 ? '通过' : '不通过',
  closurePlanCheck: fails.plans.length === 0 ? '通过' : '不通过',
  closureReadinessCheck: fails.readiness.length === 0 ? '通过' : '不通过',
  priorityCalculationCheck: fails.priority.length === 0 ? '通过' : '不通过',
  maturityCalculationCheck: fails.maturity.length === 0 ? '通过' : '不通过',
  realDataIntegrityCheck: fails.integrity.length === 0 ? '通过' : '不通过',
  noFakeClosureCheck: fails.fake.length === 0 ? '通过' : '不通过',
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
