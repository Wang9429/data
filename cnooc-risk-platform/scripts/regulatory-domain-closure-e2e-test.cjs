#!/usr/bin/env node
/**
 * Phase 25 E2E — 领域数据缺口与闭环成熟度提升
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
  sandbox.App.initializeDomainClosure();
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'USR-GROUP-REG-01', roleId: 'ROLE-GROUP-REG', organizationId: 'G001' });
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];
const step = (id, name, pass, detail) => results.push({ id, name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });

const m = D.regulatoryDomainClosureMetrics || {};
step('E2E-01', '领域闭环覆盖→数据缺口', m.fullClosedLoopCount != null && (D.regulatoryDomainDataGaps || []).length > 0);

const financePlan = App.getDomainClosurePlan('finance');
const financeReadiness = App.calculateDomainClosureReadiness('finance');
step('E2E-02', '财务领域→成熟度→缺口→提升计划', !!financePlan && financeReadiness.currentMaturityLevel && App.getDomainDataGaps('finance').length > 0, financePlan?.closedLoopStatus);

const overseasPlan = App.getDomainClosurePlan('overseas');
const overseasResult = (D.regulatoryDomainAdaptationResults || []).find(r => r.domainId === 'overseas');
step('E2E-03', '境外领域→数据不足→补齐计划', !!overseasPlan && ['PARTIAL_CLOSED_LOOP', 'INSUFFICIENT_REAL_DATA'].includes(overseasResult?.closedLoopStatus), overseasResult?.closedLoopStatus);

const kriGaps = (D.regulatoryDomainDataGaps || []).filter(g => g.gapType === 'NO_KRI');
step('E2E-04', 'KRI缺口→数据质量', kriGaps.length > 0 || App.getKriDataCredibility('kri-capex').dataStatus);

const verifyGaps = (D.regulatoryDomainDataGaps || []).filter(g => g.gapType === 'NO_VERIFICATION_CHAIN');
step('E2E-05', '整改缺验证→NO_VERIFICATION_CHAIN', verifyGaps.length > 0, `count=${verifyGaps.length}`);

const financePriority = App.calculateDomainClosurePriority('finance');
step('E2E-06', '成熟度→准备度→优先级', financeReadiness.domainClosureReadiness != null && ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].includes(financePriority));

const financeResult = (D.regulatoryDomainAdaptationResults || []).find(r => r.domainId === 'finance');
const financeChainOk = financeResult?.sourceIds?.length && financeResult?.kriIds?.length && financeResult?.linkedActionCount;
const financeFull = financeResult?.closedLoopStatus === 'FULL_CLOSED_LOOP';
step('E2E-07', '财务闭环链路', financeChainOk, financeFull ? 'FULL_CLOSED_LOOP' : 'PARTIAL_CLOSED_LOOP');

step('E2E-08', '闭环看板UI', typeof App.renderDomainClosureDashboardPanel() === 'string');
step('E2E-09', '缺口面板UI', typeof App.renderDomainDataGapsPanel('finance') === 'string');
step('E2E-10', '提升计划UI', typeof App.renderDomainClosurePlansPanel() === 'string');
step('E2E-11', '集团领导角色视图', typeof App.renderDomainClosureRolePanel('GROUP_LEADER') === 'string');
step('E2E-12', '多跳返回链路', ['regulatory-data-governance', 'regulatory-analysis-center', 'regulatory-improvement-center'].every(p => App.resolvePublicRouteId(p)));

const fakeFull = (D.regulatoryDomainAdaptationResults || []).filter(r => {
  if (r.closedLoopStatus !== 'FULL_CLOSED_LOOP') return false;
  return App.getDomainDataGaps(r.domainId).some(g => g.gapType === 'NO_VERIFICATION_CHAIN' && g.gapStatus === 'OPEN');
});
step('E2E-13', '不足数据不伪造完整闭环', fakeFull.length === 0, `fake=${fakeFull.length}`);

const failed = results.filter(r => !r.pass);
console.log(JSON.stringify({
  phase: 'Phase 25 E2E',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  financeClosedLoop: financeResult?.closedLoopStatus,
  financePriority,
  openGapCount: (D.regulatoryDomainDataGaps || []).filter(g => g.gapStatus === 'OPEN').length,
  results,
  allPass: failed.length === 0
}, null, 2));
process.exit(failed.length === 0 ? 0 : 1);
