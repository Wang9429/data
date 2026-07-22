#!/usr/bin/env node
/**
 * Phase 23 — 真实业务数据适配与监管领域配置验收
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
  return sandbox;
}

const ctx = loadSandbox();
const D = ctx.APP_DATA;
const App = ctx.App;
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');
const dataJs = fs.readFileSync(dataPath, 'utf8');

const fails = {
  domainConfig: [], mappings: [], adaptationRuns: [], engines: [], closedLoop: [],
  duplicate: [], freeze: [], pages: [], trace: []
};

const publicPageCount = (App.publicRegulatoryPages || []).length;
if (publicPageCount !== 70) fails.pages.push(`publicPageCount=${publicPageCount}`);

const domains = D.regulatoryDomainConfigurations || [];
if (domains.length < 8) fails.domainConfig.push(`domainCount=${domains.length}`);
domains.forEach(c => {
  if (!c.domainId || !c.domainName) fails.domainConfig.push('missing domain id/name');
  if (!Array.isArray(c.linkedSourceIds)) fails.domainConfig.push(`${c.domainId}: no linkedSourceIds`);
  if (!c.adaptationStatus) fails.domainConfig.push(`${c.domainId}: no adaptationStatus`);
});

const mappings = D.regulatoryBusinessObjectMappings || [];
if (!mappings.length) fails.mappings.push('no mappings');
mappings.slice(0, 40).forEach(m => {
  if (!m.mappingId || !m.targetObjectType) fails.mappings.push(`invalid mapping ${m.mappingId}`);
  if (m.sourceObjectType === 'dataObjects') {
    const obj = (D.dataObjects || []).find(o => o.objectId === m.sourceObjectId);
    if (!obj) fails.mappings.push(`orphan dataObject ${m.sourceObjectId}`);
  }
  if (m.targetObjectType === 'regulatoryDataSets') {
    const ds = (D.regulatoryDataSets || []).find(d => d.dataSetId === m.targetObjectId);
    if (!ds) fails.mappings.push(`orphan dataSet ${m.targetObjectId}`);
  }
});

const runs = D.regulatoryDataAdaptationRuns || [];
const expectedSteps = ['SOURCE_ADAPT', 'INTEGRATION', 'QUALITY_VALIDATE', 'STANDARDIZE', 'OBJECT_MAP', 'KRI_COMPUTE', 'WARNING_IDENTIFY', 'RISK_ASSESS', 'ACTION_LINK', 'RECTIFICATION_LINK', 'VERIFICATION', 'PERFORMANCE', 'IMPROVEMENT'];
if (!runs.length) fails.adaptationRuns.push('no adaptation runs');
runs.forEach(r => {
  const steps = (r.pipelineSteps || []).map(s => s.step);
  if (steps.length !== 13) fails.adaptationRuns.push(`${r.sourceId}: steps=${steps.length}`);
  expectedSteps.forEach(es => { if (!steps.includes(es)) fails.adaptationRuns.push(`${r.sourceId}: missing ${es}`); });
});

const metrics = D.regulatoryDataAdaptationMetrics || {};
if (!metrics.configuredDomainCount) fails.adaptationRuns.push('no adaptation metrics');
if (!runs.some(r => r.drivesClosedLoop)) fails.closedLoop.push('no closed-loop source');

[
  'initializeDataAdaptation', 'adaptRealBusinessData', 'validateDataSourceAdaptation',
  'mapBusinessObjects', 'computeKriFromAdaptedData', 'identifyWarningsFromAdaptedData',
  'evaluateAdaptationClosedLoop', 'renderDataAdaptationPipelinePanel', 'renderRegulatoryDomainConfigPanel'
].forEach(fn => { if (!pubJs.includes(fn)) fails.engines.push(`missing ${fn}`); });

if (!appJs.includes('initializeDataAdaptation')) fails.engines.push('init not wired');

['newRiskList', 'newWarningList', 'newActionList', 'newRectificationList', 'newKriList'].forEach(p => {
  if (pubJs.includes(p) || dataJs.includes(p)) fails.duplicate.push(p);
});

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
if (penetrateCount !== 3) fails.freeze.push(`penetrate=${penetrateCount}`);

const closedLoopSource = runs.find(r => r.drivesClosedLoop);
if (closedLoopSource) {
  const v = App.validateDataSourceAdaptation(closedLoopSource.sourceId);
  if (!v.valid) fails.trace.push(`validate ${closedLoopSource.sourceId}`);
  const loop = App.evaluateAdaptationClosedLoop(closedLoopSource.sourceId);
  if (!loop.chain?.source) fails.trace.push('loop chain missing source');
  if (!(loop.steps || []).length) fails.trace.push('loop steps empty');
}

const domainSearch = (D.regulatorySearchIndex || []).filter(s => s.category === '数据适配');
if (!domainSearch.length) fails.domainConfig.push('no search index for domain config');

let nodeCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }

const allFails = Object.values(fails).flat();
const result = {
  phase: 'Phase 23 — 真实业务数据适配',
  publicPageCount,
  configuredDomainCount: domains.length,
  activeMappingCount: metrics.activeMappingCount,
  adaptationRunCount: runs.length,
  closedLoopSourceCount: metrics.closedLoopSourceCount,
  avgClosureRate: metrics.avgClosureRate,
  domainConfigCheck: fails.domainConfig.length === 0 ? '通过' : '不通过',
  mappingCheck: fails.mappings.length === 0 ? '通过' : '不通过',
  adaptationRunCheck: fails.adaptationRuns.length === 0 ? '通过' : '不通过',
  adaptationEngineCheck: fails.engines.length === 0 ? '通过' : '不通过',
  closedLoopCheck: fails.closedLoop.length === 0 ? '通过' : '不通过',
  dataTraceCheck: fails.trace.length === 0 ? '通过' : '不通过',
  duplicateEntityCheck: fails.duplicate.length === 0 ? '通过' : '不通过',
  investmentFreeze: fails.freeze.length === 0 ? '通过' : '不通过',
  pageCountCheck: fails.pages.length === 0 ? '通过' : '不通过',
  nodeCheck,
  fails: Object.fromEntries(Object.entries(fails).map(([k, v]) => [k, v.slice(0, 10)])),
  allPass: allFails.length === 0 && nodeCheck === '通过'
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.allPass ? 0 : 1);
