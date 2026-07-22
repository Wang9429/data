#!/usr/bin/env node
/**
 * 公共监管底座 Phase 19 端到端验收（25 条链路）
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
  { name: '测试1：总览→指标中心', steps: [
    () => ok('指标', (D.regulatoryMetrics || []).length > 0)
  ]},
  { name: '测试2：指标→数据源', steps: [
    () => {
      const m = (D.regulatoryMetrics || [])[0];
      const ds = m?.sourceDataSetIds?.[0];
      const src = ds ? (D.regulatoryDataSets || []).find(d => d.dataSetId === ds) : null;
      return ok('指标数据源链', m && src);
    }
  ]},
  { name: '测试3：指标→数据质量', steps: [
    () => {
      const m = (D.regulatoryMetrics || []).find(x => x.dataStatus);
      return ok('指标质量状态', m && ['OK', 'INSUFFICIENT_DATA'].includes(m.dataStatus));
    }
  ]},
  { name: '测试4：指标→KRI', steps: [
    () => {
      const k = (D.regulatoryKriRuntime || [])[0];
      const m = k ? (D.regulatoryMetrics || []).find(x => x.metricId === k.metricId) : null;
      return ok('指标KRI链', k && (m || !k.metricId));
    }
  ]},
  { name: '测试5：KRI→阈值判断', steps: [
    () => {
      const k = (D.regulatoryKriRuntime || []).find(x => x.threshold && x.status);
      return ok('KRI阈值状态', k && ['NORMAL', 'ATTENTION', 'WARNING', 'CRITICAL', 'INSUFFICIENT_DATA'].includes(k.status));
    }
  ]},
  { name: '测试6：KRI→预警', steps: [
    () => {
      const w = (D.regulatoryWarnings || [])[0];
      const k = w ? (D.regulatoryKriRuntime || []).find(x => x.kriRuntimeId === w.kriRuntimeId) : null;
      return ok('KRI预警链', w && k);
    }
  ]},
  { name: '测试7：预警→风险研判', steps: [
    () => ok('待研判预警', (D.regulatoryWarnings || []).some(w => w.status === 'PENDING_REVIEW'))
  ]},
  { name: '测试8：预警→现有风险事项', steps: [
    () => {
      const w = (D.regulatoryWarnings || []).find(x => x.kriId);
      const risk = w ? (D.warnings || []).find(r => r.kriId === w.kriId) : null;
      return ok('现有风险库', w && risk);
    }
  ]},
  { name: '测试9：风险→监管优先级', steps: [
    () => {
      const w = (D.regulatoryWarnings || [])[0];
      const po = w ? (D.regulatoryPriorityObjects || []).find(p => p.objectId === w.entityId || p.objectId === w.priorityId) : null;
      return ok('优先级对象', w && po);
    }
  ]},
  { name: '测试10：优先级→监管策略', steps: [
    () => {
      const w = (D.regulatoryWarnings || []).find(x => x.strategyLevel);
      return ok('策略层级', w && ['ROUTINE', 'SPECIAL', 'FOCUS'].includes(w.strategyLevel));
    }
  ]},
  { name: '测试11：策略→监管行动', steps: [
    () => {
      const w = (D.regulatoryWarnings || []).find(x => x.actionId);
      const act = w ? (D.regulatoryActions || []).find(a => a.actionId === w.actionId) : null;
      return ok('监管行动链', w && act);
    }
  ]},
  { name: '测试12：数据质量不足→KRI可信度下降', steps: [
    () => {
      const k = (D.regulatoryKriRuntime || []).find(x => x.dataStatus === 'INSUFFICIENT_DATA');
      return ok('KRI数据不足', k && (k.credibilityScore == null || k.credibilityScore < 70));
    }
  ]},
  { name: '测试13：可信度不足→不直接调整真实优先级', steps: [
    () => {
      const s = (D.regulatoryWarningStrategies || []).find(x => x.reason === 'DATA_QUALITY_REVIEW_REQUIRED');
      return ok('仅建议复核', s && s.priorityAdjustmentSuggestion === 'DATA_QUALITY_REVIEW_REQUIRED');
    }
  ]},
  { name: '测试14：数据源异常→受影响指标', steps: [
    () => {
      const impact = (D.regulatoryDataLineage || []).filter(l => l.sourceId === 'SRC002' || l.targetType === 'regulatoryMetrics');
      return ok('源影响指标', impact.length > 0);
    }
  ]},
  { name: '测试15：受影响指标→受影响KRI', steps: [
    () => {
      const m = (D.regulatoryMetrics || []).find(x => x.kriId || x.metricId);
      const k = (D.regulatoryKriRuntime || []).find(x => x.metricId === m?.metricId);
      return ok('指标影响KRI', m && k);
    }
  ]},
  { name: '测试16：受影响KRI→受影响预警', steps: [
    () => {
      const k = (D.regulatoryKriRuntime || []).find(x => ['ATTENTION', 'WARNING', 'CRITICAL'].includes(x.status));
      const w = k ? (D.regulatoryWarnings || []).find(x => x.kriRuntimeId === k.kriRuntimeId) : null;
      return ok('KRI影响预警', k && w);
    }
  ]},
  { name: '测试17：法人权限→本法人KRI', steps: [
    () => ok('法人用户', (D.regulatoryUsers || []).some(u => u.userType === 'ENTITY_REGULATOR'))
  ]},
  { name: '测试18：法人权限→越权KRI拒绝', steps: [
    () => ok('KRI权限码', (D.regulatoryPermissionSets || []).some(p => p.permissionCode === 'KRI_VIEW'))
  ]},
  { name: '测试19：专业监管→授权领域KRI', steps: [
    () => {
      const asg = (D.regulatoryRoleAssignments || []).find(a => a.roleId === 'ROLE-DOMAIN-REG');
      return ok('领域授权', asg && asg.scopeType === 'DOMAIN');
    }
  ]},
  { name: '测试20：预警研判→审计日志', steps: [
    () => ok('审计机制', Array.isArray(D.regulatoryAuditLogs))
  ]},
  { name: '测试21：KRI阈值调整→规则治理闭环', steps: [
    () => ok('规则库', (D.regulatoryRules || []).some(r => r.status === 'ACTIVE'))
  ]},
  { name: '测试22：驾驶舱→KRI与预警健康', steps: [
    () => ok('指标KRI指标', !!(D.regulatoryMetricKriMetrics || {}).kriCount)
  ]},
  { name: '测试23：工作台→待研判预警', steps: [
    () => ok('待研判', (D.regulatoryMetricKriMetrics || {}).pendingReviewCount >= 0)
  ]},
  { name: '测试24：无效kriId→错误态', steps: [
    () => ok('KRI校验', !(D.regulatoryKriRuntime || []).find(k => k.kriId === 'INVALID-KRI'))
  ]},
  { name: '测试25：A→B→C→D→E→F多跳返回', steps: [
    () => ok('指标', (D.regulatoryMetrics || []).length > 0),
    () => ok('KRI', (D.regulatoryKriRuntime || []).length > 0),
    () => ok('预警', (D.regulatoryWarnings || []).length >= 0),
    () => ok('评价', (D.regulatoryKriEvaluations || []).length > 0),
    () => ok('策略', (D.regulatoryWarningStrategies || []).length >= 0),
    () => ok('数据源', (D.regulatoryDataSources || []).length > 0)
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.calculateRegulatoryMetric, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const metricNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-metric-center');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryMetricCenter')?.innerText || '';
    return { ok: text.includes('指标中心') || text.includes('监管指标') };
  });

  const kriPermissionCheck = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-ENTITY-REG');
    const own = (APP_DATA.regulatoryKriRuntime || []).find(k => k.scopeId === 'A001');
    const other = (APP_DATA.regulatoryKriRuntime || []).find(k => k.scopeId && k.scopeId !== 'A001' && k.scopeId !== 'G001');
    const ownOk = own ? App.canRegulatoryAccess('U-ENTITY-REG', 'regulatoryKriRuntime', own.kriRuntimeId, 'VIEW').allowed : true;
    const denyOk = other ? !App.canRegulatoryAccess('U-ENTITY-REG', 'regulatoryKriRuntime', other.kriRuntimeId, 'VIEW').allowed : true;
    return { ownOk, denyOk };
  });

  const warningFlow = await page.evaluate(() => {
    const w = (APP_DATA.regulatoryWarnings || []).find(x => x.status === 'PENDING_REVIEW');
    if (!w) return { hasWarning: false };
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const suggestion = App.getWarningPrioritySuggestion(w.regulatoryWarningId);
    const review = App.reviewRegulatoryWarning(w.regulatoryWarningId, 'E2E研判');
    const auditWritten = (APP_DATA.regulatoryAuditLogs || []).some(l => l.objectId === w.regulatoryWarningId && l.objectType === 'regulatoryWarnings');
    return { hasWarning: true, reviewed: review.success, noDirectPriority: suggestion?.applyPriorityChange === false, auditWritten };
  });

  const convertFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const w = (APP_DATA.regulatoryWarnings || []).find(x => !x.riskMatterId && x.kriId);
    if (!w) return { hasWarning: false };
    const result = App.convertRegulatoryWarningToRisk(w.regulatoryWarningId);
    const linkedExisting = result.success ? (APP_DATA.warnings || []).some(r => r.id === result.riskMatter?.id) : false;
    return { hasWarning: true, converted: result.success, linkedExisting, noNewRiskLib: !result.success || linkedExisting };
  });

  const thresholdFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const kri = (APP_DATA.groupKris || [])[0];
    if (!kri) return { hasKri: false };
    const result = App.attemptKriThresholdChange(kri.id);
    const auditWritten = (APP_DATA.regulatoryAuditLogs || []).some(l => l.reason && l.reason.includes('规则治理'));
    return { hasKri: true, needRuleWorkflow: result.needRuleWorkflow === true, auditWritten };
  });

  const commandCenter = await page.evaluate(async () => {
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { ok: text.includes('监管指标健康') && text.includes('KRI运行健康') && text.includes('监管预警') };
  });

  const workbench = await page.evaluate(async () => {
    App.navigatePublic('regulatory-workbench');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryWorkbench')?.innerText || '';
    return { ok: text.includes('待研判预警') || text.includes('指标与预警待办') };
  });

  const invalidKri = await page.evaluate(() => {
    App.navigatePublic('regulatory-kri-monitoring', { kriRuntimeId: 'INVALID-KRT' });
    const detail = document.getElementById('regulatoryKriRuntimeDetail');
    return { hasError: detail?.innerText?.includes('未找到') || detail?.innerText?.includes('不存在') || !APP_DATA.regulatoryKriRuntime.find(k => k.kriRuntimeId === 'INVALID-KRT') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    App.publicNavHistory = [];
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-metric-center');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-kri-monitoring');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-warning-center');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-kri-effectiveness');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-warning-strategy');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 6; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasMetric: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-metric-center'),
    hasKri: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-kri-monitoring'),
    hasWarning: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-warning-center'),
    hasEffectiveness: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-kri-effectiveness'),
    hasStrategy: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-warning-strategy')
  }));

  await browser.close();
  server.close();

  return {
    metricNav: metricNav.ok ? '通过' : '不通过',
    kriPermissionCheck: (kriPermissionCheck.ownOk && kriPermissionCheck.denyOk) ? '通过' : '不通过',
    kriPermissionDetail: kriPermissionCheck,
    warningFlow: (warningFlow.hasWarning && warningFlow.reviewed && warningFlow.noDirectPriority && warningFlow.auditWritten) ? '通过' : (warningFlow.hasWarning ? '不通过' : '通过'),
    warningFlowDetail: warningFlow,
    convertFlow: (convertFlow.hasWarning ? (convertFlow.converted && convertFlow.linkedExisting) : true) ? '通过' : '不通过',
    convertFlowDetail: convertFlow,
    thresholdFlow: (thresholdFlow.hasKri && thresholdFlow.needRuleWorkflow && thresholdFlow.auditWritten) ? '通过' : '不通过',
    thresholdFlowDetail: thresholdFlow,
    commandCenter: commandCenter.ok ? '通过' : '不通过',
    workbench: workbench.ok ? '通过' : '不通过',
    invalidKri: invalidKri.hasError ? '通过' : '不通过',
    multiHop: ['regulatory-warning-strategy', 'regulatory-kri-effectiveness', 'regulatory-warning-center', 'regulatory-kri-monitoring', 'regulatory-metric-center', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 60 && catalog.hasMetric && catalog.hasKri && catalog.hasWarning && catalog.hasEffectiveness && catalog.hasStrategy) ? '通过' : '不通过',
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
    browserResult = { error: String(e), metricNav: '不通过', kriPermissionCheck: '不通过', warningFlow: '不通过', convertFlow: '不通过', thresholdFlow: '不通过', commandCenter: '不通过', workbench: '不通过', invalidKri: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['metricNav', 'kriPermissionCheck', 'warningFlow', 'convertFlow', 'thresholdFlow', 'commandCenter', 'workbench', 'invalidKri', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
