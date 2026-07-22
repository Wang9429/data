#!/usr/bin/env node
/**
 * Phase 6 公共监管链路端到端测试（数据解析 + 浏览器导航）
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

function ok(step, cond, msg) {
  return { step, pass: !!cond, msg: cond ? 'OK' : msg };
}

const chains = [
  {
    name: '测试1：全球法人→项目→数据源→数据治理→KRI→风险→整改',
    steps: [
      () => ok('法人 B001', D.globalLegalEntities.find(e => e.entityId === 'B001')),
      () => {
        const p = D.globalProjects.find(x => x.projectId === 'GP001');
        const child = D.globalLegalEntities.find(e => e.entityId === (p || {}).entityId);
        return ok('项目 GP001', p && child && child.parentEntityId === 'B001');
      },
      () => ok('数据源 SRC002', D.dataSourceRegistry.find(s => s.sourceId === 'SRC002' && s.entityId === 'B001')),
      () => ok('数据对象 OBJ004', D.dataObjects.find(o => o.objectId === 'OBJ004' && o.entityId === 'B001')),
      () => ok('血缘 LIN001', D.dataLineageRelations.find(r => r.relationId === 'LIN001' && r.kriId === 'kri-capex')),
      () => ok('KRI kri-capex', D.groupKris.find(k => k.id === 'kri-capex')),
      () => ok('风险 risk-2', D.warnings.find(w => w.id === 'risk-2' && w.entityId === 'B001')),
      () => ok('整改 RECT-202601001', D.rectificationTasks.find(t => t.taskId === 'RECT-202601001'))
    ]
  },
  {
    name: '测试2：区域→国家→法人→跨境合规→数据活动→风险场景→整改',
    steps: [
      () => ok('区域 AS', D.globalRegions.find(r => r.regionId === 'AS')),
      () => ok('国家 AS-A', D.globalCountries.find(c => c.countryId === 'AS-A' && c.regionId === 'AS')),
      () => ok('法人 D001', D.globalLegalEntities.find(e => e.entityId === 'D001' && e.regionId === 'AS')),
      () => ok('跨境活动 CBD001', D.crossBorderDataActivities.find(a => a.activityId === 'CBD001')),
      () => ok('风险场景 CBR002', D.crossBorderRiskScenarios.find(s => s.id === 'CBR002')),
      () => ok('整改 RECT-CB-001', D.rectificationTasks.find(t => t.taskId === 'RECT-CB-001'))
    ]
  },
  {
    name: '测试3：数据质量→指标→KRI→跨领域风险→法人→项目→整改',
    steps: [
      () => ok('质量 DQ002', D.dataQualityIssues.find(q => q.issueId === 'DQ002')),
      () => ok('指标 IND002', D.dataIndicators.find(i => i.indicatorId === 'IND002')),
      () => ok('KRI kri-capex', D.groupKris.find(k => k.id === 'kri-capex')),
      () => ok('跨领域 CDR001', D.crossDomainRiskMatters.find(m => m.riskMatterId === 'CDR001')),
      () => ok('法人 B001', D.globalLegalEntities.find(e => e.entityId === 'B001')),
      () => ok('项目 GP001', D.globalProjects.find(p => p.projectId === 'GP001')),
      () => ok('整改 RECT-CD-001', D.rectificationTasks.find(t => t.taskId === 'RECT-CD-001'))
    ]
  },
  {
    name: '测试4：覆盖矩阵→监管对象→数据源→数据质量→KRI→风险→整改',
    steps: [
      () => ok('覆盖矩阵 CM-001', D.coverageMatrixCells.find(c => c.cellId === 'CM-001')),
      () => ok('法人 C001', D.globalLegalEntities.find(e => e.entityId === 'C001')),
      () => ok('数据源 SRC003', D.dataSourceRegistry.find(s => s.sourceId === 'SRC003')),
      () => ok('对象 OBJ003', D.dataObjects.find(o => o.objectId === 'OBJ003')),
      () => ok('质量/指标链路', D.dataQualityIssues.find(q => q.objectId === 'OBJ003') || D.dataIndicators.find(i => i.indicatorId === 'IND004')),
      () => ok('KRI kri-schedule', D.groupKris.find(k => k.id === 'kri-schedule')),
      () => ok('整改 RECT-202601003', D.rectificationTasks.find(t => t.taskId === 'RECT-202601003'))
    ]
  },
  {
    name: '测试5：运行异常→数据源→数据对象→数据质量→指标→KRI→风险→整改',
    steps: [
      () => ok('告警 ALERT002', D.platformOperationAlerts.find(a => a.alertId === 'ALERT002')),
      () => ok('数据源 SRC002', D.dataSourceRegistry.find(s => s.sourceId === 'SRC002')),
      () => ok('对象 OBJ004', D.dataObjects.find(o => o.objectId === 'OBJ004')),
      () => ok('质量 DQ002', D.dataQualityIssues.find(q => q.issueId === 'DQ002')),
      () => ok('指标 IND002', D.dataIndicators.find(i => i.indicatorId === 'IND002')),
      () => ok('KRI kri-capex', D.groupKris.find(k => k.id === 'kri-capex')),
      () => ok('风险 risk-2', D.warnings.find(w => w.id === 'risk-2')),
      () => ok('整改 RECT-202601001', D.rectificationTasks.find(t => t.taskId === 'RECT-202601001'))
    ]
  },
  {
    name: '测试6：跨境数据活动→数据源→数据治理→KRI→风险事项→整改',
    steps: [
      () => ok('活动 CBD006', D.crossBorderDataActivities.find(a => a.activityId === 'CBD006')),
      () => ok('数据源 SRC007', D.dataSourceRegistry.find(s => s.sourceId === 'SRC007')),
      () => ok('对象 OBJ006', D.dataObjects.find(o => o.objectId === 'OBJ006')),
      () => ok('KRI KRI-CB-001', D.groupKris.find(k => k.id === 'KRI-CB-001')),
      () => ok('风险 risk-cb-003', D.warnings.find(w => w.id === 'risk-cb-003')),
      () => ok('整改 RECT-CB-003', D.rectificationTasks.find(t => t.taskId === 'RECT-CB-003'))
    ]
  },
  {
    name: '测试7：跨领域风险→KRI→数据治理→数据质量→跨境合规→整改',
    steps: [
      () => ok('跨领域 CDR002', D.crossDomainRiskMatters.find(m => m.riskMatterId === 'CDR002')),
      () => ok('KRI KRI-CB-002', D.groupKris.find(k => k.id === 'KRI-CB-002')),
      () => ok('质量 DQ005', D.dataQualityIssues.find(q => q.issueId === 'DQ005')),
      () => ok('跨境 CBD001', D.crossBorderDataActivities.find(a => a.activityId === 'CBD001')),
      () => ok('双向关联', (D.crossDomainRiskMatters.find(m => m.riskMatterId === 'CDR002').relatedCrossBorderActivityIds || []).includes('CBD001')),
      () => ok('整改 RECT-CD-003', D.rectificationTasks.find(t => t.taskId === 'RECT-CD-003'))
    ]
  }
];

const results = chains.map(chain => {
  const steps = chain.steps.map(fn => fn());
  const pass = steps.every(s => s.pass);
  return { name: chain.name, pass, steps };
});

async function browserNavTest() {
  let playwright;
  try {
    playwright = require('playwright');
  } catch {
    return { browser: 'skipped', reason: 'playwright not available' };
  }

  const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css' };
  const server = http.createServer((req, res) => {
    let p = req.url.split('?')[0];
    if (p === '/') p = '/index.html';
    const fp = path.join(ROOT, p);
    if (!fp.startsWith(ROOT) || !fs.existsSync(fp)) {
      res.writeHead(404); return res.end('not found');
    }
    res.writeHead(200, { 'Content-Type': mime[path.extname(fp)] || 'text/plain' });
    fs.createReadStream(fp).pipe(res);
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof App !== 'undefined' && typeof App.navigatePublic === 'function' && typeof App.buildPublicDetailPanel === 'function', { timeout: 10000 });
  await page.evaluate(() => {
    document.getElementById('domainGateway').style.display = 'none';
    if (typeof App.enterDomain === 'function') App.enterDomain('investment', false);
  });

  const navTest = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('global-legal-entities', { entityId: 'B001' });
    await new Promise(r => setTimeout(r, 250));
    App.navigatePublic('data-governance', { sourceId: 'SRC002' });
    await new Promise(r => setTimeout(r, 250));
    const histLen = (App.publicNavHistory || []).length;
    const detailVisible = !!document.querySelector('.public-detail-panel, .public-detail-header');
    App.goBackPublic();
    await new Promise(r => setTimeout(r, 250));
    const afterBack = App.currentPage;
    const ctxKept = (App.publicNavigationContext || {}).entityId === 'B001' || afterBack === 'global-legal-entities';
    return { ok: histLen >= 1 && ctxKept, histLen, afterBack, detailVisible, entityId: (App.publicNavigationContext || {}).entityId };
  });

  const pageEnterTest = await page.evaluate(() => {
    const pages = (App.publicRegulatoryPages || []).filter(p => p.supportsPublicNavigation).map(p => p.pageId);
    return { pageCount: pages.length, hasWarnings: pages.includes('warnings'), hasRectification: pages.includes('rectification') };
  });

  await browser.close();
  server.close();
  return {
    browser: navTest.ok ? '通过' : '不通过',
    detailPanel: navTest.detailVisible ? '通过' : '不通过',
    pageCatalog: pageEnterTest.pageCount >= 9 ? '通过' : '不通过',
    detail: navTest,
    pages: pageEnterTest
  };
}

(async () => {
  const summary = results.map((r, i) => ({
    test: `测试 ${i + 1}`,
    result: r.pass ? '通过' : '不通过',
    failedSteps: r.steps.filter(s => !s.pass)
  }));

  let browserResult;
  try {
    browserResult = await browserNavTest();
  } catch (e) {
    browserResult = { browser: '不通过', error: String(e) };
  }

  const output = {
    dataChainTests: summary,
    browserNav: browserResult,
    allPass: summary.every(s => s.result === '通过') && browserResult.browser !== '不通过'
  };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
