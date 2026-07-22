#!/usr/bin/env node
/**
 * Phase 33 E2E — 正式交付准备与上线运行交接 DR-01 ~ DR-10
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
  ['finalizeRegulatoryPlatform', 'initializeDataAdaptation', 'initializeBatchAdaptation', 'initializeDomainClosure', 'initializeClosureVerification', 'initializeRegulatoryOperatingCycle', 'initializeRegulatoryOperatingRuntime', 'initializeRegulatoryCoordination', 'initializeRegulatoryOperationalScenarios', 'initializeRegulatoryFinalAcceptance', 'initializeRegulatoryFinalRemediation', 'initializeRegulatoryDeliveryReadiness'].forEach(fn => {
    if (sandbox.App[fn]) sandbox.App[fn]();
  });
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];
const step = (id, name, pass, detail) => results.push({ id, name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });

// DR-01 交付准备度
const readiness = D.regulatoryDeliveryReadinessIndex || App.buildRegulatoryDeliveryReadiness();
step('DR-01', '交付准备度计算', ['READY', 'READY_WITH_GAPS', 'BLOCKED', 'INSUFFICIENT_DATA'].includes(readiness.overallStatus) && readiness.requiresHumanDecision === true, readiness.overallStatus);

// DR-02 上线前检查
const goLive = D.regulatoryGoLiveChecklistIndex || App.buildRegulatoryGoLiveChecklist();
step('DR-02', '上线前检查', (goLive.items || []).length >= 16 && goLive.passCount > 0, `pass=${goLive.passCount}`);

// DR-03 15项问题交接
const handover = D.regulatoryHandoverIndex || App.buildRegulatoryHandoverIndex();
step('DR-03', '15项问题交接', handover.issueHandover?.total >= 15 && (handover.issueHandover?.verified || 0) === 0, JSON.stringify(handover.issueHandover?.distribution));

// DR-04 18项数据缺口交接
step('DR-04', '18项数据缺口交接', (D.regulatoryDomainDataGaps || []).length >= 18 && handover.dataGapHandover?.total >= 18, `gaps=${(D.regulatoryDomainDataGaps || []).length}`);

// DR-05 上线后行动
const actions = D.regulatoryPostGoLiveActionIndexes || App.buildRegulatoryPostGoLiveActions();
step('DR-05', '上线后行动生成', actions.length > 0 && actions.every(a => a.sourceType && a.sourceId), `count=${actions.length}`);

// DR-06 ~ DR-09 角色交接
['GROUP_LEADER', 'GROUP_REGULATORY', 'DOMAIN_REGULATOR', 'ENTITY_REGULATOR'].forEach((role, i) => {
  const h = App.validateRoleHandover(role);
  step(`DR-0${6 + i}`, `${role} 交接`, h.handoverPass, `pages=${h.pathPages?.length}`);
});

// DR-10 正式交付清单
const pkg = D.regulatoryFinalDeliveryPackageIndex || App.buildRegulatoryFinalDeliveryPackage();
step('DR-10', '正式交付清单', (pkg.items || []).length >= 18 && pkg.items.some(i => i.deliveryItemId === 'DP-17'), `${pkg.completedCount}/${pkg.items?.length}`);

// UI
step('UI-01', '集团总览交付准备度', App.renderDeliveryReadinessDashboardPanel().includes('正式交付准备度'));
step('UI-02', '工作台上线后行动', App.renderDeliveryReadinessWorkbenchPanel().includes('我的上线后行动'));
step('UI-03', '分析中心交付健康度', App.renderDeliveryReadinessAnalysisPanel().includes('交付健康度'));
step('UI-04', '持续改进上线后事项', App.renderDeliveryReadinessImprovementPanel().includes('上线后改进事项'));
step('UI-05', '数据缺口交接面板', App.renderDataGapHandoverPanel().includes('数据缺口交接'));

// No fake READY
step('NO-FAKE', '未伪造READY状态', readiness.overallStatus !== 'READY' || (D.regulatoryFinalAcceptanceRemediationIndexes || []).every(r => r.status === 'VERIFIED'), readiness.overallStatus);

const failed = results.filter(r => !r.pass);
console.log(JSON.stringify({
  phase: 'Phase 33 E2E',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  publicPageCount: (App.publicRegulatoryPages || []).length,
  deliveryReadinessStatus: readiness.overallStatus,
  issueCount: handover.issueHandover?.total,
  dataGapCount: (D.regulatoryDomainDataGaps || []).length,
  postGoLiveActionCount: actions.length,
  deliveryPackage: { completed: pkg.completedCount, total: pkg.items?.length },
  results,
  allPass: failed.length === 0
}, null, 2));
process.exit(failed.length === 0 ? 0 : 1);
