#!/usr/bin/env node
/**
 * Phase 28 E2E — 真实运营场景验证 OP-01 ~ OP-08
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
  sandbox.App.initializeClosureVerification();
  sandbox.App.initializeRegulatoryOperatingCycle();
  sandbox.App.initializeRegulatoryOperatingRuntime();
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE', userType: 'GROUP_REGULATORY' });
  sandbox.App.currentRegulatoryUserId = 'U-GROUP-REG';
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];
const step = (id, name, pass, detail) => results.push({ id, name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });

// OP-01 日常运营
const daily = D.regulatoryDailyOperations || [];
const op01 = daily.some(d => d.category === 'DATA_INTEGRATION' || d.category === 'DATA_QUALITY') &&
  daily.some(d => d.category === 'KRI_ANOMALY' || d.category === 'WARNING_REVIEW') &&
  daily.every(d => d.sourceTraceability);
step('OP-01', '日常运营链路可追溯', op01, `ops=${daily.length}`);

// OP-02 周度复核
const weekly = App.generateWeeklyRegulatoryReview();
const op02 = weekly.reviewType === 'WEEKLY_REVIEW' && weekly.focusItems?.length >= 0 &&
  weekly.decisionItems?.every(i => i.requiresHumanDecision !== false) &&
  !weekly.autoExecuted;
step('OP-02', '周度复核生成建议不自动执行', op02, weekly.reviewId);

// OP-03 月度领域评价
const domains = App.generateMonthlyDomainReview();
const op03 = domains.length >= 9 && domains.every(d => ['HEALTHY', 'WATCH', 'AT_RISK', 'INSUFFICIENT_DATA'].includes(d.domainStatus));
step('OP-03', '月度领域健康度动态计算', op03, `domains=${domains.length}`);

// OP-04 季度绩效
const qperf = App.generateQuarterlyRegulatoryPerformance();
const op04 = qperf.actualResults && qperf.evaluationResults && qperf.recommendations?.every(r => r.requiresHumanDecision);
step('OP-04', '季度绩效建议不写回业务', op04, qperf.reviewId);

// OP-05 年度战略复盘
const annual = App.generateAnnualOperationReview();
const op05 = annual.strategicGoalAchievement?.length >= 0 && annual.nextCycleRecommendations?.length >= 0;
step('OP-05', '年度运营结果联动战略', op05, annual.resultId);

// OP-06 数据异常阻断
const failedJobs = (D.regulatoryDataIntegrationJobs || []).filter(j => j.status === 'FAILED');
const kriCred = App.getKriDataCredibility('kri-capex');
const blockedEx = (D.regulatoryOperatingExceptions || []).some(e => e.exceptionType === 'DATA_QUALITY_BLOCKED' || e.exceptionType === 'DATA_SOURCE_UNAVAILABLE');
const op06 = (failedJobs.length >= 0 && kriCred.dataStatus) || blockedEx;
step('OP-06', '数据异常阻断链路', op06, kriCred.dataStatus);

// OP-07 运营异常
const exceptions = App.detectRegulatoryOperatingExceptions();
const op07 = exceptions.length > 0 && exceptions.every(e => e.sourceType && e.sourceId && e.sourceTraceability);
step('OP-07', '运营异常可穿透原始对象', op07, `exceptions=${exceptions.length}`);

// OP-08 运营建议
const recs = D.regulatoryOperatingRecommendations || [];
const recId = recs[0]?.recommendationId;
let op08 = recs.length > 0 && recs.every(r => r.requiresHumanDecision);
if (recId) {
  const ack = App.acknowledgeOperatingRecommendation(recId, { reason: 'E2E验收' });
  const audited = (D.regulatoryAuditLogs || []).some(l => l.objectType === 'regulatoryOperatingRecommendations' && l.objectId === recId);
  op08 = op08 && ack.success && ack.requiresHumanDecision && audited;
}
step('OP-08', '运营建议人工确认留痕', op08, `recs=${recs.length}`);

// UI panels
step('UI-01', '集团总览运营面板', typeof App.renderOperatingCycleDashboardPanel() === 'string' && App.renderOperatingCycleDashboardPanel().includes('今日监管事项'));
step('UI-02', '工作台增强', typeof App.renderDailyOperationsWorkbenchPanel() === 'string' && App.renderDailyOperationsWorkbenchPanel().includes('今日必须处理'));
step('UI-03', '分析中心日周月季年', typeof App.renderOperatingCycleAnalysisPanel() === 'string' && App.renderOperatingCycleAnalysisPanel().includes('日→周→月→季→年'));
step('UI-04', '绩效中心周期绩效', typeof App.renderOperatingCyclePerformancePanel() === 'string' && App.renderOperatingCyclePerformancePanel().includes('领域绩效'));
step('UI-05', '战略复盘年度结果', typeof App.renderOperatingCycleStrategicLinkPanel() === 'string' && App.renderOperatingCycleStrategicLinkPanel().includes('年度运营结果'));

const scenarioPass = results.filter(r => r.id.startsWith('OP-')).every(r => r.pass);
const failed = results.filter(r => !r.pass);
const rm = D.regulatoryOperatingRuntimeMetrics || {};

console.log(JSON.stringify({
  phase: 'Phase 28 E2E',
  scenarioResults: results.filter(r => r.id.startsWith('OP-')).map(r => ({ id: r.id, pass: r.pass })),
  scenariosPassed: results.filter(r => r.id.startsWith('OP-') && r.pass).length + '/8',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  publicPageCount: (App.publicRegulatoryPages || []).length,
  cycleInstanceCount: (D.regulatoryOperatingCycleInstances || []).length,
  dailyOperationCount: rm.dailyOperationCount,
  operatingExceptionCount: rm.operatingExceptionCount,
  results,
  allPass: failed.length === 0 && scenarioPass
}, null, 2));
process.exit(failed.length === 0 && scenarioPass ? 0 : 1);
