#!/usr/bin/env node
/**
 * 公共监管底座 Phase 12 验收脚本
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
const governanceFails = [];
const runtimeFails = [];

function req(id, label) {
  if (!id) errors.push(`缺失ID: ${label}`);
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
  'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

const publicPageCount = (pubJs.match(/pageId: '/g) || []).length;
if (publicPageCount !== 30) warnings.push(`公共页面数=${publicPageCount}，期望30`);

const components = [
  'renderPublicRuleRuntimeBadge', 'renderPublicExecutionStatusBadge', 'renderPublicDeploymentStatusBadge',
  'renderPublicExecutionResult', 'renderPublicVersionTimeline', 'renderPublicRuntimeHealth',
  'renderRegulatoryRuleRuntime', 'renderRegulatoryRuleExecutions', 'renderRegulatoryRuleDeployments',
  'showRegulatoryRuleExecutionDetail', 'showRegulatoryRuleDeploymentDetail', 'showRegulatoryRuleRollbackDetail',
  'getRegulatoryRuleDeployment', 'getRegulatoryRuleExecution', 'getRegulatoryRuleRollback'
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

(D.regulatoryRuleDeployments || []).forEach(d => {
  req(d.deploymentId, 'deploymentId');
  resolve(d.ruleId, D.regulatoryRuleVersions, 'ruleId', 'deploy.ruleId');
  resolve(d.versionId, D.regulatoryRuleVersions, 'versionId', 'deploy.versionId');
  if (d.changeRequestId) resolve(d.changeRequestId, D.regulatoryRuleChangeRequests, 'changeRequestId', 'deploy.changeRequestId');
  if (d.approvalId) resolve(d.approvalId, D.regulatoryRuleApprovals, 'approvalId', 'deploy.approvalId');
  if (d.simulationId) resolve(d.simulationId, D.regulatorySimulations, 'simulationId', 'deploy.simulationId');
  if (d.impactAnalysisId) resolve(d.impactAnalysisId, D.regulatoryRuleImpactAnalysis, 'impactAnalysisId', 'deploy.impactAnalysisId');
});
(D.regulatoryRuleExecutions || []).forEach(e => {
  req(e.executionId, 'executionId');
  resolve(e.deploymentId, D.regulatoryRuleDeployments, 'deploymentId', 'exec.deploymentId');
  resolve(e.versionId, D.regulatoryRuleVersions, 'versionId', 'exec.versionId');
  resolve(e.entityId, D.globalLegalEntities, 'entityId', 'exec.entityId');
  if (e.simulationOnly !== false) errors.push(`生产执行 ${e.executionId} simulationOnly!=false`);
  if (e.executionMode !== 'PRODUCTION') errors.push(`生产执行 ${e.executionId} executionMode!=PRODUCTION`);
  (e.relatedEventIds || []).forEach(id => resolve(id, D.regulatoryEvents, 'eventId', 'exec.eventId'));
  (e.relatedRiskMatterIds || []).forEach(id => resolve(id, D.warnings, 'id', 'exec.riskId'));
  (e.relatedActionIds || []).forEach(id => resolve(id, D.regulatoryActions, 'actionId', 'exec.actionId'));
});
(D.regulatoryRuleRuntimeLogs || []).forEach(l => {
  req(l.runtimeLogId, 'runtimeLogId');
  resolve(l.executionId, D.regulatoryRuleExecutions, 'executionId', 'log.executionId');
});
(D.regulatoryRuleRollbacks || []).forEach(r => {
  req(r.rollbackId, 'rollbackId');
  resolve(r.fromVersionId, D.regulatoryRuleVersions, 'versionId', 'rb.fromVersionId');
  resolve(r.toVersionId, D.regulatoryRuleVersions, 'versionId', 'rb.toVersionId');
});
(D.regulatoryRuleRuntimeAnomalies || []).forEach(a => {
  req(a.anomalyId, 'anomalyId');
  if (a.executionId) resolve(a.executionId, D.regulatoryRuleExecutions, 'executionId', 'anom.executionId');
  if (a.entityId) resolve(a.entityId, D.globalLegalEntities, 'entityId', 'anom.entityId');
});

const activeDeploys = (D.regulatoryRuleDeployments || []).filter(d => d.deploymentStatus === 'ACTIVE');
const activeByRule = {};
activeDeploys.forEach(d => {
  if (activeByRule[d.ruleId]) runtimeFails.push(`规则 ${d.ruleId} 存在多个 ACTIVE 部署`);
  activeByRule[d.ruleId] = d.deploymentId;
});
const govRuleIds = ['RULE-001', 'RULE-002', 'RULE-003', 'RULE-004', 'RULE-005'];
govRuleIds.forEach(rid => {
  if (!activeByRule[rid]) runtimeFails.push(`规则 ${rid} 缺少 ACTIVE 部署`);
});

(D.regulatorySimulationResults || []).forEach(s => {
  if (s.simulationOnly !== true) errors.push(`仿真 ${s.simulationId} simulationOnly!=true`);
});

if (!D.regulatoryRuleDeployments?.length) errors.push('regulatoryRuleDeployments 未生成');
if (!D.regulatoryRuleExecutions?.length) errors.push('regulatoryRuleExecutions 未生成');
if (!D.regulatoryRuleRuntimeLogs?.length) errors.push('regulatoryRuleRuntimeLogs 未生成');
if (!D.regulatoryRuleRollbacks?.length) errors.push('regulatoryRuleRollbacks 未生成');
if (!D.regulatoryRuleRuntimeAnomalies?.length) errors.push('regulatoryRuleRuntimeAnomalies 未生成');
if (!D.regulatoryRuleExecutionMetrics) errors.push('regulatoryRuleExecutionMetrics 未生成');

['page-regulatory-rule-runtime', 'page-regulatory-rule-executions', 'page-regulatory-rule-deployments'].forEach(id => {
  if (!html.includes(id)) errors.push(`index.html 缺失: ${id}`);
});

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
  runtimeGovernanceCheck: runtimeFails.length === 0 ? '通过' : '不通过',
  activeVersionUniqueness: runtimeFails.length === 0 ? '通过' : '不通过',
  runtimeFails: runtimeFails.slice(0, 20),
  governanceFails: governanceFails.slice(0, 20),
  errors: errors.slice(0, 40),
  warnings: warnings.slice(0, 15),
  investmentFreeze: freezeFails.length === 0 ? '通过' : '不通过',
  freezeFails,
  penetrateCallCount: penetrateCount,
  hardcodeOffsetCount,
  nodeCheck
};
console.log(JSON.stringify(result, null, 2));
process.exit(errors.length || freezeFails.length || hardcodeOffsetCount || runtimeFails.length ? 1 : 0);
