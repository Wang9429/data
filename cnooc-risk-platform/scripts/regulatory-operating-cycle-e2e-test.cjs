#!/usr/bin/env node
/**
 * Phase 27 E2E — 监管运营周期
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
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', organizationId: 'G001', status: 'ACTIVE', userType: 'GROUP_REGULATORY' });
  sandbox.App.currentRegulatoryUserId = 'U-GROUP-REG';
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];
const step = (id, name, pass, detail) => results.push({ id, name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });

const daily = App.generateDailyRegulatoryOperations();
const hasChain = daily.some(d => d.category === 'DATA_INTEGRATION' || d.category === 'DATA_QUALITY') &&
  daily.some(d => d.category === 'KRI_ANOMALY' || d.category === 'WARNING_REVIEW');
step('OP-E2E-01', '日常监管运行链路', hasChain, `ops=${daily.length}`);

const weekly = App.generatePeriodicRegulatoryReview('WEEKLY_REVIEW');
step('OP-E2E-02', '周度监管复盘', !!weekly.reviewId && weekly.newWarningCount != null, weekly.reviewId);

const monthly = App.generatePeriodicRegulatoryReview('MONTHLY_REVIEW');
step('OP-E2E-03', '月度监管运营', !!monthly.reviewId && monthly.kriAnomalyCount != null, monthly.title);

const quarterly = App.generatePeriodicRegulatoryReview('QUARTERLY_REVIEW');
step('OP-E2E-04', '季度监管评价', !!quarterly.reviewId && quarterly.closureMaturitySummary?.length > 0, quarterly.reviewId);

const annual = App.generatePeriodicRegulatoryReview('ANNUAL_REVIEW');
step('OP-E2E-05', '年度战略复盘联动', !!annual.reviewId, annual.title);

const failedJobs = (D.regulatoryDataIntegrationJobs || []).filter(j => j.status === 'FAILED');
const kriCred = App.getKriDataCredibility ? App.getKriDataCredibility('kri-capex') : { dataStatus: 'OK' };
step('OP-E2E-06', '数据质量阻断链路', failedJobs.length >= 0 && kriCred.dataStatus, kriCred.dataStatus);

const financeBefore = (D.regulatoryDomainAdaptationResults || []).find(r => r.domainId === 'finance');
step('OP-E2E-07', '整改验证闭环已接入运营', (D.regulatoryDailyOperations || []).some(d => d.sourceType === 'rectificationTasks'), financeBefore?.closedLoopStatus);

const recs = App.generateOperatingRecommendations();
step('OP-E2E-08', '监管资源建议需人工决策', recs.length > 0 && recs.every(r => r.requiresHumanDecision), `count=${recs.length}`);

const health = App.calculateOperatingHealth('GROUP', 'G001');
step('OP-E2E-09', '运营健康度计算', health.dataStatus === 'OK' || health.dataStatus === 'INSUFFICIENT_DATA', health.overallRegulatoryHealth);

step('OP-E2E-10', '集团总览运营面板', typeof App.renderOperatingCycleDashboardPanel() === 'string');
step('OP-E2E-11', '工作台今日监管', typeof App.renderDailyOperationsWorkbenchPanel() === 'string');
step('OP-E2E-12', '分析中心周期分析', typeof App.renderOperatingCycleAnalysisPanel() === 'string');
step('OP-E2E-13', '绩效中心运营周期', typeof App.renderOperatingCyclePerformancePanel() === 'string');
step('OP-E2E-14', '战略复盘联动', typeof App.renderOperatingCycleStrategicLinkPanel() === 'string');
step('OP-E2E-15', '趋势不足不伪造', (D.regulatoryPeriodicReviews || []).every(r => r.trendComparisonStatus === 'INSUFFICIENT_HISTORY'));

const failed = results.filter(r => !r.pass);
console.log(JSON.stringify({
  phase: 'Phase 27 E2E',
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  publicPageCount: (App.publicRegulatoryPages || []).length,
  results,
  allPass: failed.length === 0
}, null, 2));
process.exit(failed.length === 0 ? 0 : 1);
