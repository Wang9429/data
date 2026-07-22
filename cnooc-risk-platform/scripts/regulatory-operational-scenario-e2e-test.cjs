#!/usr/bin/env node
/**
 * Phase 30 E2E — 监管实战场景 OS-01 ~ OS-08
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function loadApp(userId, roleId) {
  const dataCode = fs.readFileSync(path.join(ROOT, 'js/data.js'), 'utf8');
  const pubCode = fs.readFileSync(path.join(ROOT, 'js/public-regulatory.js'), 'utf8');
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
  sandbox.App.initializeRegulatoryCoordination();
  sandbox.App.initializeRegulatoryOperationalScenarios();
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: userId || 'U-GROUP-REG', roleId: roleId || 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE', userType: 'GROUP_REGULATORY' });
  sandbox.App.currentRegulatoryUserId = userId || 'U-GROUP-REG';
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];
const step = (id, name, pass, detail) => results.push({ id, name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });
const get = code => (D.regulatoryOperationalScenarios || []).find(s => s.scenarioCode === code);

// OS-01 重大风险监管
const os01 = get('OS-01');
step('OS-01', '重大风险监管链路', !!os01 && os01.relatedRisks?.length >= 0 && os01.relatedActions?.length > 0 && os01.triggerSourceType === 'warnings', os01?.phase);

// OS-02 数据质量影响
const os02 = get('OS-02');
step('OS-02', '数据质量影响监管 simulationOnly', !!os02 && os02.simulationOnly === true && os02.triggerSourceType === 'regulatoryDataQualityIssues', os02?.relatedKris?.length);

// OS-03 规则变更
const os03 = get('OS-03');
step('OS-03', '规则变更影响监管', !!os03 && os03.simulationOnly === true && os03.triggerSourceType === 'regulatoryRules', os03?.phase);

// OS-04 跨法人
const os04 = get('OS-04');
const coord04 = (os04?.coordinationCaseIds || []).length > 0;
step('OS-04', '跨法人监管协同', !!os04 && os04.scenarioType === 'CROSS_ENTITY' && coord04, os04?.affectedEntities?.join(','));

// OS-05 跨领域
const os05 = get('OS-05');
step('OS-05', '跨领域监管协同', !!os05 && (os05.affectedDomains || []).length >= 1, os05?.affectedDomains?.join(','));

// OS-06 重大整改验证
const os06 = get('OS-06');
step('OS-06', '重大整改验证', !!os06 && os06.relatedRectifications?.length > 0, os06?.phase);

// OS-07 运营周期
const os07 = get('OS-07');
const cycles = D.regulatoryOperatingCycleInstances || [];
step('OS-07', '监管运营周期运行', !!os07 && cycles.length >= 5 && os07.triggerSourceType === 'regulatoryOperatingCycleInstances', os07?.phase);

// OS-08 集团领导决策
const os08 = get('OS-08');
step('OS-08', '集团领导决策需人工确认', !!os08 && os08.requiresHumanDecision === true, os08?.triggerSourceType);

// Ledger traceability
const ledger = D.regulatoryOperationalLedger || [];
const ledgerOk = ledger.length >= 8 && ledger.every(l => l.triggerSourceId && l.sourceTraceability);
step('LEDGER', '运营台账可追溯', ledgerOk, `count=${ledger.length}`);

// Health
const health = os01 ? App.calculateOperationalScenarioHealth(os01.id) : null;
step('HEALTH', '场景健康度', !!health && health.trendStatus === 'INSUFFICIENT_HISTORY', health?.overallStatus);

// UI
step('UI-01', '集团总览实战面板', App.renderOperationalScenarioDashboardPanel().includes('监管实战场景'));
step('UI-02', '工作台实战面板', App.renderOperationalScenarioWorkbenchPanel().includes('当前监管实战场景'));
step('UI-03', '角色工作台差异化', App.renderOperationalScenarioRolePanel('GROUP_LEADER').includes('重大监管主题'));

const scenarioPass = results.filter(r => r.id.startsWith('OS-')).every(r => r.pass);
const failed = results.filter(r => !r.pass);
const m = D.regulatoryOperationalMetrics || {};

console.log(JSON.stringify({
  phase: 'Phase 30 E2E',
  scenarioResults: results.filter(r => r.id.startsWith('OS-')).map(r => ({ id: r.id, pass: r.pass })),
  scenariosPassed: results.filter(r => r.id.startsWith('OS-') && r.pass).length + '/8',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  publicPageCount: (App.publicRegulatoryPages || []).length,
  operationalScenarioCount: m.operationalScenarioCount,
  themeCount: m.themeCount,
  ledgerCount: m.ledgerCount,
  closedScenarioCount: m.closedScenarioCount,
  inProgressCount: m.inProgressCount,
  atRiskCount: m.atRiskCount,
  results,
  allPass: failed.length === 0 && scenarioPass
}, null, 2));
process.exit(failed.length === 0 && scenarioPass ? 0 : 1);
