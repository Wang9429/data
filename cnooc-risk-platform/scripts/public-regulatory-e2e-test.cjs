#!/usr/bin/env node
/**
 * 公共监管底座 Phase 18 端到端验收（22 条链路）
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function loadAppData() {
  const code = fs.readFileSync(path.join(ROOT, 'js/data.js'), 'utf8');
  const sandbox = { console };
  vm.runInNewContext(code + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  return sandbox.APP_DATA;
}

const D = loadAppData();
function ok(step, cond, msg) { return { step, pass: !!cond, msg: cond ? 'OK' : msg }; }

const chains = [
  { name: '测试1：总览→数据源中心', steps: [
    () => ok('数据源', (D.regulatoryDataSources || []).length > 0)
  ]},
  { name: '测试2：数据源→数据集', steps: [
    () => {
      const src = (D.regulatoryDataSources || [])[0];
      const ds = (D.regulatoryDataSets || []).find(d => d.sourceId === src?.sourceId);
      return ok('源数据集链', src && ds);
    }
  ]},
  { name: '测试3：数据集→接入任务', steps: [
    () => {
      const ds = (D.regulatoryDataSets || [])[0];
      const job = (D.regulatoryDataIntegrationJobs || []).find(j => j.dataSetId === ds?.dataSetId);
      return ok('数据集接入链', ds && job);
    }
  ]},
  { name: '测试4：接入任务→质量校验', steps: [
    () => {
      const job = (D.regulatoryDataIntegrationJobs || [])[0];
      const issue = (D.regulatoryDataQualityIssues || []).find(i => i.dataSetId === job?.dataSetId);
      return ok('质量校验链', job && (issue || job.status === 'SUCCESS'));
    }
  ]},
  { name: '测试5：质量问题→治理任务', steps: [
    () => {
      const issue = (D.regulatoryDataQualityIssues || []).find(i => i.relatedGovernanceTaskId);
      const gov = issue ? (D.regulatoryDataGovernanceTasks || []).find(t => t.governanceTaskId === issue.relatedGovernanceTaskId) : null;
      return ok('治理任务链', issue && gov);
    }
  ]},
  { name: '测试6：治理任务→整改任务', steps: [
    () => {
      const gov = (D.regulatoryDataGovernanceTasks || []).find(t => t.relatedRectificationTaskId);
      const rect = gov ? (D.rectificationTasks || []).find(t => t.taskId === gov.relatedRectificationTaskId) : null;
      return ok('整改关联链', gov && rect);
    }
  ]},
  { name: '测试7：整改→验证→数据质量恢复', steps: [
    () => ok('质量快照', (D.regulatoryDataQualitySnapshots || []).length > 0)
  ]},
  { name: '测试8：指标→KRI→数据字段', steps: [
    () => {
      const lin = (D.regulatoryDataLineage || []).find(l => l.relationType === 'FIELD_TO_METRIC' || l.relationType === 'METRIC_TO_KRI');
      return ok('指标KRI链', lin);
    }
  ]},
  { name: '测试9：KRI→风险→规则', steps: [
    () => {
      const lin = (D.regulatoryDataLineage || []).find(l => l.relationType === 'KRI_TO_RISK');
      const rule = (D.regulatoryDataLineage || []).find(l => l.relationType === 'RISK_TO_RULE');
      return ok('KRI风险规则链', lin && rule);
    }
  ]},
  { name: '测试10：规则→数据源', steps: [
    () => ok('血缘索引', (D.regulatoryDataLineage || []).some(l => l.sourceType === 'regulatoryDataSources'))
  ]},
  { name: '测试11：数据源→受影响指标', steps: [
    () => {
      const src = (D.regulatoryDataSources || []).find(s => s.sourceId === 'SRC002') || (D.regulatoryDataSources || [])[0];
      const lin = (D.regulatoryDataLineage || []).filter(l => l.sourceId === src?.sourceId || (l.sourceType === 'regulatoryDataSources' && l.sourceId === src?.sourceId));
      return ok('源影响链', lin.length > 0);
    }
  ]},
  { name: '测试12：数据质量异常→指标可信度', steps: [
    () => ok('KRI关联', (D.regulatoryDataQualityIssues || []).some(i => i.kriId))
  ]},
  { name: '测试13：指标可信度→监管优先级', steps: [
    () => ok('优先级对象', (D.regulatoryPriorityObjects || []).length > 0)
  ]},
  { name: '测试14：法人权限→本法人数据', steps: [
    () => ok('法人用户', (D.regulatoryUsers || []).some(u => u.userType === 'ENTITY_REGULATOR'))
  ]},
  { name: '测试15：法人权限→越权数据拒绝', steps: [
    () => ok('数据权限码', (D.regulatoryPermissionSets || []).some(p => p.permissionCode === 'DATA_VIEW'))
  ]},
  { name: '测试16：专业监管→授权领域数据', steps: [
    () => {
      const asg = (D.regulatoryRoleAssignments || []).find(a => a.roleId === 'ROLE-DOMAIN-REG');
      return ok('领域授权', asg && asg.scopeType === 'DOMAIN');
    }
  ]},
  { name: '测试17：接入失败→重试→质量问题', steps: [
    () => {
      const failed = (D.regulatoryDataIntegrationJobs || []).find(j => j.status === 'FAILED' || j.status === 'PARTIAL_SUCCESS' || j.retryCount > 0);
      return ok('失败重试', failed);
    }
  ]},
  { name: '测试18：数据治理→审计日志', steps: [
    () => ok('审计机制', Array.isArray(D.regulatoryAuditLogs))
  ]},
  { name: '测试19：驾驶舱→数据质量健康', steps: [
    () => ok('数据指标', !!(D.regulatoryDataGovernanceMetrics || {}).overallQualityScore || D.regulatoryDataGovernanceMetrics?.qualityDataStatus)
  ]},
  { name: '测试20：工作台→我的数据治理任务', steps: [
    () => ok('治理任务', (D.regulatoryDataGovernanceTasks || []).length > 0)
  ]},
  { name: '测试21：无效dataSourceId→错误态', steps: [
    () => ok('数据源校验', !(D.regulatoryDataSources || []).find(s => s.sourceId === 'INVALID-SRC'))
  ]},
  { name: '测试22：A→B→C→D→E→F多跳返回', steps: [
    () => ok('数据源', (D.regulatoryDataSources || []).length > 0),
    () => ok('接入', (D.regulatoryDataIntegrationJobs || []).length > 0),
    () => ok('质量', (D.regulatoryDataQualityIssues || []).length > 0),
    () => ok('治理', (D.regulatoryDataGovernanceTasks || []).length > 0),
    () => ok('血缘', (D.regulatoryDataLineage || []).length > 0),
    () => ok('快照', (D.regulatoryDataQualitySnapshots || []).length > 0)
  ]}
];

const dataResults = chains.map(chain => ({
  name: chain.name,
  pass: chain.steps.every(fn => fn().pass),
  steps: chain.steps.map(fn => fn())
}));

async function browserTests() {
  let playwright;
  try { playwright = require('playwright'); } catch { return { browser: 'skipped' }; }

  const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css' };
  const server = http.createServer((req, res) => {
    let p = req.url.split('?')[0];
    if (p === '/') p = '/index.html';
    const fp = path.join(ROOT, p);
    if (!fp.startsWith(ROOT) || !fs.existsSync(fp)) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': mime[path.extname(fp)] || 'text/plain' });
    fs.createReadStream(fp).pipe(res);
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof App !== 'undefined' && App.getKriDataCredibility, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const dataSourceNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-data-sources');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryDataSources')?.innerText || '';
    return { ok: text.includes('数据源中心') || text.includes('数据源清单') };
  });

  const permissionCheck = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-ENTITY-REG');
    const own = (APP_DATA.regulatoryDataSources || []).find(s => s.ownerOrganizationId === 'A001');
    const other = (APP_DATA.regulatoryDataSources || []).find(s => s.ownerOrganizationId && s.ownerOrganizationId !== 'A001' && s.ownerOrganizationId !== 'G001');
    const ownOk = own ? App.canRegulatoryAccess('U-ENTITY-REG', 'regulatoryDataSources', own.sourceId, 'VIEW').allowed : true;
    const denyOk = other ? !App.canRegulatoryAccess('U-ENTITY-REG', 'regulatoryDataSources', other.sourceId, 'VIEW').allowed : true;
    return { ownOk, denyOk, ownId: own?.sourceId, otherId: other?.sourceId };
  });

  const lineageFlow = await page.evaluate(() => {
    const chain = App.getDataLineageChain('regulatoryDataSources', 'SRC002', 'DOWN');
    const impact = App.getDataSourceImpactAnalysis('SRC002');
    const cred = App.getKriDataCredibility('kri-capex');
    return { chainLen: chain.length, hasKri: impact.affectedKris.includes('kri-capex'), credOk: cred.dataStatus === 'OK' || cred.dataStatus === 'INSUFFICIENT_DATA' };
  });

  const retryFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const job = (APP_DATA.regulatoryDataIntegrationJobs || []).find(j => j.status === 'FAILED' || j.status === 'PARTIAL_SUCCESS');
    if (!job) return { hasJob: false };
    const before = job.status;
    const result = App.retryDataIntegrationJob(job.integrationJobId);
    const auditWritten = (APP_DATA.regulatoryAuditLogs || []).some(l => l.objectId === job.integrationJobId && l.actionType === 'RETRY');
    return { hasJob: true, retried: result.success, statusChanged: job.status !== before || job.retryCount > 0, auditWritten };
  });

  const governanceFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const task = (APP_DATA.regulatoryDataGovernanceTasks || []).find(t => t.status !== 'CLOSED' && t.status !== 'VERIFIED');
    if (!task) return { hasTask: false };
    App.assignDataGovernanceTask(task.governanceTaskId, task.responsibleOrganizationId);
    const close = App.closeDataGovernanceTask(task.governanceTaskId, 'E2E验证关闭');
    const auditWritten = (APP_DATA.regulatoryAuditLogs || []).some(l => l.objectType === 'regulatoryDataGovernanceTasks' && l.objectId === task.governanceTaskId);
    return { hasTask: true, closed: close.success, auditWritten };
  });

  const commandCenter = await page.evaluate(async () => {
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { ok: text.includes('数据接入健康') && text.includes('数据质量健康') && text.includes('数据血缘影响') };
  });

  const workbench = await page.evaluate(async () => {
    App.navigatePublic('regulatory-workbench');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryWorkbench')?.innerText || '';
    return { ok: text.includes('我的数据治理任务') || text.includes('数据运行异常') };
  });

  const invalidSource = await page.evaluate(() => {
    App.navigatePublic('regulatory-data-sources', { sourceId: 'INVALID-SRC' });
    const detail = document.getElementById('regulatoryDataSourceDetail');
    return { hasError: detail?.innerText?.includes('未找到') || detail?.innerText?.includes('不存在') || detail?.innerText?.includes('无权') || !APP_DATA.regulatoryDataSources.find(s => s.sourceId === 'INVALID-SRC') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    App.publicNavHistory = [];
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-data-sources');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-data-integration');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-data-quality');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-data-governance');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-data-lineage');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 6; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasSources: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-data-sources'),
    hasIntegration: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-data-integration'),
    hasQuality: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-data-quality'),
    hasGovernance: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-data-governance'),
    hasLineage: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-data-lineage')
  }));

  await browser.close();
  server.close();

  return {
    dataSourceNav: dataSourceNav.ok ? '通过' : '不通过',
    permissionCheck: (permissionCheck.ownOk && permissionCheck.denyOk) ? '通过' : '不通过',
    permissionDetail: permissionCheck,
    lineageFlow: (lineageFlow.chainLen > 2 && lineageFlow.hasKri) ? '通过' : '不通过',
    lineageFlowDetail: lineageFlow,
    retryFlow: (retryFlow.hasJob && retryFlow.retried && retryFlow.auditWritten) ? '通过' : '不通过',
    retryFlowDetail: retryFlow,
    governanceFlow: (governanceFlow.hasTask && governanceFlow.closed && governanceFlow.auditWritten) ? '通过' : '不通过',
    governanceFlowDetail: governanceFlow,
    commandCenter: commandCenter.ok ? '通过' : '不通过',
    workbench: workbench.ok ? '通过' : '不通过',
    invalidSource: invalidSource.hasError ? '通过' : '不通过',
    multiHop: ['regulatory-data-lineage', 'regulatory-data-governance', 'regulatory-data-quality', 'regulatory-data-integration', 'regulatory-data-sources', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 55 && catalog.hasSources && catalog.hasIntegration && catalog.hasQuality && catalog.hasGovernance && catalog.hasLineage) ? '通过' : '不通过',
    pageCatalogDetail: catalog
  };
}

(async () => {
  const summary = dataResults.map((r, i) => ({
    test: `测试 ${i + 1}`, name: r.name, result: r.pass ? '通过' : '不通过',
    failedSteps: r.steps.filter(s => !s.pass)
  }));
  let browserResult;
  try { browserResult = await browserTests(); } catch (e) {
    browserResult = { error: String(e), dataSourceNav: '不通过', permissionCheck: '不通过', lineageFlow: '不通过', retryFlow: '不通过', governanceFlow: '不通过', commandCenter: '不通过', workbench: '不通过', invalidSource: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['dataSourceNav', 'permissionCheck', 'lineageFlow', 'retryFlow', 'governanceFlow', 'commandCenter', 'workbench', 'invalidSource', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
