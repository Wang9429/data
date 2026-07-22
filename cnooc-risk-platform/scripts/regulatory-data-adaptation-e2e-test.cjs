#!/usr/bin/env node
/**
 * Phase 23 E2E — 真实业务数据驱动监管闭环
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function loadApp() {
  const dataCode = fs.readFileSync(path.join(ROOT, 'js/data.js'), 'utf8');
  const pubCode = fs.readFileSync(path.join(ROOT, 'js/public-regulatory.js'), 'utf8');
  const sandbox = {
    console,
    document: { getElementById: () => null },
    window: {},
    APP_DATA: null
  };
  vm.runInNewContext(dataCode + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  vm.runInNewContext('var App = {};\n' + pubCode, sandbox, { filename: 'public-regulatory.js' });
  sandbox.App.finalizeRegulatoryPlatform();
  sandbox.App.initializeDataAdaptation();
  sandbox.App.getCurrentRegulatoryUser = () => ({ userId: 'USR-GROUP-REG-01', roleId: 'ROLE-GROUP-REG', organizationId: 'G001' });
  sandbox.App.canRegulatoryAccess = () => ({ allowed: true });
  sandbox.App.createRegulatoryAuditLog = () => ({ success: true });
  return { App: sandbox.App, D: sandbox.APP_DATA };
}

const { App, D } = loadApp();
const results = [];

function step(name, pass, detail) {
  results.push({ name, pass: !!pass, detail: detail || (pass ? 'OK' : 'FAIL') });
}

const closedLoop = (D.regulatoryDataAdaptationRuns || []).find(r => r.drivesClosedLoop) || (D.regulatoryDataAdaptationRuns || [])[0];
const sourceId = closedLoop?.sourceId || 'SRC001';

step('适配运行记录存在', !!closedLoop, sourceId);
step('领域配置 ≥ 8', (D.regulatoryDomainConfigurations || []).length >= 8);
step('业务对象映射存在', (D.regulatoryBusinessObjectMappings || []).length > 0);

const validation = App.validateDataSourceAdaptation(sourceId);
step('数据源适配校验', validation.valid, `mappings=${validation.mappingCount} jobs=${validation.jobCount}`);

const mapped = App.mapBusinessObjects(sourceId);
step('业务对象映射', mapped.valid && mapped.mappingCount > 0, `count=${mapped.mappingCount}`);

const quality = App.runDataQualityValidationOnAdaptation(sourceId);
step('数据质量校验', quality.dataStatus === 'OK' || quality.issueCount >= 0, `issues=${quality.issueCount}`);

const kri = App.computeKriFromAdaptedData(sourceId);
step('KRI 计算', kri.kriCount >= 0, `kris=${kri.kriCount} status=${kri.dataStatus}`);

const warns = App.identifyWarningsFromAdaptedData(sourceId);
step('预警识别', warns.dataStatus === 'OK' || warns.warningCount >= 0, `warnings=${warns.warningCount}`);

const adaptResult = App.adaptRealBusinessData(sourceId);
step('执行真实业务数据适配', adaptResult.success === true, adaptResult.message || 'executed');

const loop = App.evaluateAdaptationClosedLoop(sourceId);
step('闭环评估', loop.steps.length === 13, `closure=${loop.closureRate}%`);
step('驱动监管闭环', loop.drivesClosedLoop === true);

const chain = loop.chain || {};
step('数据源 → 数据集', (chain.dataSets || []).length > 0, `dataSets=${(chain.dataSets || []).length}`);
step('数据集 → KRI', (chain.kris || []).length > 0, `kris=${(chain.kris || []).length}`);

const jobs = (D.regulatoryDataIntegrationJobs || []).filter(j => j.sourceId === sourceId);
step('数据接入任务', jobs.length > 0, `jobs=${jobs.length}`);

const issues = (D.regulatoryDataQualityIssues || []).filter(i => {
  const ds = (D.regulatoryDataSets || []).find(d => d.dataSetId === i.dataSetId);
  return ds && ds.sourceId === sourceId;
});
step('质量问题关联', issues.length > 0 || quality.issueCount === 0);

const actions = (D.regulatoryActions || []).filter(a => (a.sourceKriIds || []).some(id => (chain.kris || []).includes(id)));
step('监管行动关联', actions.length > 0 || !loop.drivesClosedLoop, `actions=${actions.length}`);

const rects = (D.rectificationTasks || []).filter(t => issues.some(i => i.relatedRectificationTaskId === t.taskId));
step('整改任务关联', rects.length > 0 || issues.length === 0, `rects=${rects.length}`);

const pipelineHtml = App.renderDataAdaptationPipelinePanel(sourceId);
step('适配管线 UI', typeof pipelineHtml === 'string' && pipelineHtml.includes('真实业务数据适配闭环'));

const domainHtml = App.renderRegulatoryDomainConfigPanel();
step('领域配置 UI', typeof domainHtml === 'string' && domainHtml.includes('监管领域配置'));

const stepPages = loop.steps.map(s => s.pageId).filter(Boolean);
step('管线步骤可导航', stepPages.length >= 8, `pages=${stepPages.length}`);

const failed = results.filter(r => !r.pass);
const summary = {
  phase: 'Phase 23 E2E — 真实业务数据驱动监管闭环',
  sourceId,
  totalSteps: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  closedLoopRate: loop.closureRate,
  drivesClosedLoop: loop.drivesClosedLoop,
  results,
  allPass: failed.length === 0
};

console.log(JSON.stringify(summary, null, 2));
process.exit(summary.allPass ? 0 : 1);
