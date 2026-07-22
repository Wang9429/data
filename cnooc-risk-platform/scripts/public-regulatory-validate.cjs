#!/usr/bin/env node
/**
 * 公共监管底座 Phase 11 验收脚本
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
  'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

const publicPageCount = (pubJs.match(/pageId: '/g) || []).length;
if (publicPageCount !== 27) warnings.push(`公共页面数=${publicPageCount}，期望27`);

const components = [
  'renderPublicRuleTypeBadge', 'renderPublicVersionStatusBadge', 'renderPublicChangeRequestStatusBadge',
  'renderPublicApprovalStatusBadge', 'renderPublicEffectivenessBadge', 'renderPublicGovernanceComparison',
  'renderRegulatoryRuleVersions', 'renderRegulatoryRuleApprovals', 'renderRegulatoryRuleImpact',
  'renderRegulatoryRuleEffectiveness', 'showRegulatoryRuleVersionDetail', 'showRegulatoryRuleChangeRequestDetail',
  'showRegulatoryRuleApprovalDetail', 'showRegulatoryRuleImpactDetail', 'showRegulatoryRuleEffectivenessDetail',
  'showRegulatoryRuleOptimizationDetail', 'getRegulatoryRuleVersion', 'getRegulatoryRuleChangeRequest',
  'getRegulatoryRuleImpactAnalysis', 'getRegulatoryRuleEffectiveness'
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

const govRuleIds = ['RULE-001', 'RULE-002', 'RULE-003', 'RULE-004', 'RULE-005'];
govRuleIds.forEach(rid => {
  const activeVers = (D.regulatoryRuleVersions || []).filter(v => v.ruleId === rid && v.status === 'ACTIVE');
  if (activeVers.length !== 1) governanceFails.push(`${rid} ACTIVE版本数=${activeVers.length}，期望1`);
});

(D.regulatoryRuleVersions || []).forEach(v => {
  req(v.versionId, 'versionId');
  resolve(v.ruleId, D.regulatoryRuleVersions, 'ruleId', 'version.ruleId');
});
(D.regulatoryRuleChangeRequests || []).forEach(cr => {
  req(cr.changeRequestId, 'changeRequestId');
  resolve(cr.baseVersionId, D.regulatoryRuleVersions, 'versionId', 'cr.baseVersionId');
  if (cr.proposedVersionId) resolve(cr.proposedVersionId, D.regulatoryRuleVersions, 'versionId', 'cr.proposedVersionId');
  if (cr.impactAnalysisId) resolve(cr.impactAnalysisId, D.regulatoryRuleImpactAnalysis, 'impactAnalysisId', 'cr.impactAnalysisId');
  (cr.simulationIds || []).forEach(sid => resolve(sid, D.regulatorySimulations, 'simulationId', 'cr.simulationId'));
  (cr.affectedEntityIds || []).forEach(eid => resolve(eid, D.globalLegalEntities, 'entityId', 'cr.entityId'));
  (cr.affectedActionIds || []).forEach(aid => resolve(aid, D.regulatoryActions, 'actionId', 'cr.actionId'));
});
(D.regulatoryRuleApprovals || []).forEach(a => {
  req(a.approvalId, 'approvalId');
  resolve(a.changeRequestId, D.regulatoryRuleChangeRequests, 'changeRequestId', 'approval.changeRequestId');
});
(D.regulatoryRuleImpactAnalysis || []).forEach(imp => {
  req(imp.impactAnalysisId, 'impactAnalysisId');
  resolve(imp.changeRequestId, D.regulatoryRuleChangeRequests, 'changeRequestId', 'imp.changeRequestId');
  if (imp.simulationOnly !== true) governanceFails.push(`${imp.impactAnalysisId} 未标记 simulationOnly`);
  (imp.affectedEntities || []).forEach(e => resolve(e.entityId, D.globalLegalEntities, 'entityId', 'imp.entityId'));
});
(D.regulatoryRuleEffectiveness || []).forEach(e => {
  req(e.effectivenessId, 'effectivenessId');
  resolve(e.versionId, D.regulatoryRuleVersions, 'versionId', 'eff.versionId');
});
(D.regulatoryRuleOptimizationLoop || []).forEach(o => {
  req(o.optimizationId, 'optimizationId');
  resolve(o.currentVersionId, D.regulatoryRuleVersions, 'versionId', 'opt.versionId');
  if (o.nextChangeRequestId) resolve(o.nextChangeRequestId, D.regulatoryRuleChangeRequests, 'changeRequestId', 'opt.changeRequestId');
});

(D.regulatoryRuleChangeRequests || []).filter(cr => cr.status === 'PUBLISHED').forEach(cr => {
  const approvals = (D.regulatoryRuleApprovals || []).filter(a => a.changeRequestId === cr.changeRequestId && a.approvalStatus === 'APPROVED');
  if (!approvals.length) governanceFails.push(`PUBLISHED ${cr.changeRequestId} 无审批记录`);
});
(D.regulatoryRuleChangeRequests || []).filter(cr => cr.status === 'APPROVED' || cr.status === 'PENDING_APPROVAL').forEach(cr => {
  if (!(cr.simulationIds || []).length) governanceFails.push(`${cr.changeRequestId} 无仿真记录`);
});
(D.regulatoryRuleChangeRequests || []).filter(cr => ['IMPACT_ASSESSED', 'PENDING_APPROVAL', 'APPROVED', 'PUBLISHED'].includes(cr.status)).forEach(cr => {
  if (!cr.impactAnalysisId) governanceFails.push(`${cr.changeRequestId} 无影响分析`);
});

(D.regulatorySimulationResults || []).forEach(s => {
  if (s.simulationOnly !== true) errors.push(`仿真 ${s.simulationId} simulationOnly!=true`);
});

if (!D.regulatoryRuleVersions?.length) errors.push('regulatoryRuleVersions 未生成');
if (!D.regulatoryRuleChangeRequests?.length) errors.push('regulatoryRuleChangeRequests 未生成');
if (!D.regulatoryRuleApprovals?.length) errors.push('regulatoryRuleApprovals 未生成');
if (!D.regulatoryRuleImpactAnalysis?.length) errors.push('regulatoryRuleImpactAnalysis 未生成');
if (!D.regulatoryRuleRuntimeMetrics?.length) errors.push('regulatoryRuleRuntimeMetrics 未生成');
if (!D.regulatoryRuleEffectiveness?.length) errors.push('regulatoryRuleEffectiveness 未生成');
if (!D.regulatoryRuleOptimizationLoop?.length) errors.push('regulatoryRuleOptimizationLoop 未生成');
if (!D.regulatoryRuleGovernanceMetrics) errors.push('regulatoryRuleGovernanceMetrics 未生成');

['page-regulatory-rule-versions', 'page-regulatory-rule-approvals', 'page-regulatory-rule-impact', 'page-regulatory-rule-effectiveness'].forEach(id => {
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
  idIntegrity: errors.length === 0 ? '通过' : '不通过',
  errorCount: errors.length,
  warningCount: warnings.length,
  governanceCheck: governanceFails.length === 0 ? '通过' : '不通过',
  governanceFails: governanceFails.slice(0, 20),
  errors: errors.slice(0, 40),
  warnings: warnings.slice(0, 15),
  investmentFreeze: freezeFails.length === 0 ? '通过' : '不通过',
  freezeFails,
  penetrateCallCount: penetrateCount,
  publicPageCount,
  hardcodeOffsetCount,
  nodeCheck,
  dataSourceUniqueness: errors.length === 0 ? '通过' : '不通过'
};
console.log(JSON.stringify(result, null, 2));
process.exit(errors.length || freezeFails.length || hardcodeOffsetCount || governanceFails.length ? 1 : 0);
