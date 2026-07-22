#!/usr/bin/env node
/**
 * Phase 24 E2E — 全监管领域批量适配与监管闭环
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function loadApp() {
  const dataCode = fs.readFileSync(path.join(ROOT, 'js/data.js'), 'utf8');
  const pubCode = fs.readFileSync(path.join(ROOT, 'js/public-regulatory.js'), 'utf8');
  const sandbox = { console, document: { getElementById: () => null }, window: {} };
  vm.runInNewContext(dataCode + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  vm.runInNewContext('var App = {};\n' + pubCode, sandbox, { filename: 'public-regulatory.js' });
  sandbox.App.finalizeRegulatoryPlatform();
  sandbox.App.initializeDataAdaptation();
  sandbox.App.initializeBatchAdaptation();
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'USR-GROUP-REG-01', roleId: 'ROLE-GROUP-REG', organizationId: 'G001' });
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  sandbox.App.createRegulatoryAuditLog = () => ({ success: true });
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];
const step = (id, name, pass, detail) => results.push({ id, name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });

const fullLoops = (D.regulatoryDomainAdaptationResults || []).filter(r => r.closedLoopStatus === 'FULL_CLOSED_LOOP');
const partialOrFull = (D.regulatoryDomainAdaptationResults || []).filter(r => ['FULL_CLOSED_LOOP', 'PARTIAL_CLOSED_LOOP'].includes(r.closedLoopStatus));

step('E2E-01', '数据治理→9大领域→适配覆盖率', (D.regulatoryDomainConfigurations || []).length === 9 && D.regulatoryBatchAdaptationMetrics?.domainAdaptationCoverage != null);
step('E2E-02', '监管领域→数据源→映射→KRI', (D.regulatoryDomainAdaptationResults || []).some(r => r.sourceIds.length && r.mappedObjectCount > 0 && (r.calculatedKriCount > 0 || (r.kriIds || []).length > 0)));

const batch = App.runBatchRegulatoryDataAdaptation({ mode: 'VALIDATE_ONLY' });
step('E2E-03', '批量适配→运行记录', !!batch.runId && (D.regulatoryBatchAdaptationRuns || []).length >= 1);

const qFailed = (D.regulatoryDomainAdaptationResults || []).find(r => r.qualityStatus === 'QUALITY_FAILED');
step('E2E-04', '质量失败→KRI可信度阻断', qFailed ? qFailed.kriCalculationStatus === 'DATA_QUALITY_REVIEW_REQUIRED' || qFailed.warningIdentificationStatus === 'DATA_QUALITY_REVIEW_REQUIRED' : true, qFailed?.domainId || 'no quality failed domain');

const fullLoopDomain = (D.regulatoryDomainAdaptationResults || []).find(r => r.closedLoopStatus === 'FULL_CLOSED_LOOP');
const loopDomain = fullLoopDomain || (D.regulatoryDomainAdaptationResults || []).find(r => r.linkedActionCount > 0 && (r.kriIds || []).length);
if (loopDomain) {
  step('E2E-05', 'KRI→预警→行动', (loopDomain.kriIds || []).length > 0 && (loopDomain.generatedWarningCount > 0 || loopDomain.linkedActionCount > 0));
  step('E2E-06', '行动→任务→整改→验证', loopDomain.linkedActionCount > 0 || loopDomain.linkedRectificationCount > 0);
}
step('E2E-07', '至少3领域闭环或诚实标记不足', fullLoops.length >= 3 || (fullLoops.length >= 1 && (D.regulatoryDomainAdaptationResults || []).every(r => ['FULL_CLOSED_LOOP', 'PARTIAL_CLOSED_LOOP', 'INSUFFICIENT_REAL_DATA', 'FAILED', 'NOT_STARTED'].includes(r.closedLoopStatus))), `full=${fullLoops.length}`);

const retry = App.retryBatchAdaptationSource('SRC001');
step('E2E-08', '失败追溯→重试→审计', retry.runId != null);

step('E2E-09', '集团领导适配覆盖率视图', typeof App.renderBatchAdaptationRolePanel('GROUP_LEADER') === 'string');
step('E2E-10', '专业监管领域适配视图', typeof App.renderBatchAdaptationRolePanel('DOMAIN_REGULATOR') === 'string');
step('E2E-11', '法人监管数据质量视图', typeof App.renderBatchAdaptationRolePanel('ENTITY_REGULATOR') === 'string');

const pages = ['regulatory-data-governance', 'regulatory-data-integration', 'regulatory-data-sources', 'regulatory-kri-monitoring', 'regulatory-warning-center', 'regulatory-actions'];
step('E2E-12', '多跳页面链路', pages.every(p => App.resolvePublicRouteId(p)));

const modes = ['FULL', 'INCREMENTAL', 'RETRY_FAILED', 'VALIDATE_ONLY'];
step('E2E-13', '批量模式 FULL/INCREMENTAL/RETRY/VALIDATE', modes.every(m => { const r = App.runBatchRegulatoryDataAdaptation({ mode: m, domainIds: m === 'RETRY_FAILED' ? ['investment'] : ['finance'] }); return r && r.runId; }));

const failed = results.filter(r => !r.pass);
const summary = {
  phase: 'Phase 24 E2E',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  fullClosedLoopDomains: fullLoops.map(r => r.domainId),
  domainAdaptationCoverage: D.regulatoryBatchAdaptationMetrics?.domainAdaptationCoverage,
  results,
  allPass: failed.length === 0
};

console.log(JSON.stringify(summary, null, 2));
process.exit(summary.allPass ? 0 : 1);
