#!/usr/bin/env node
/**
 * 公共监管底座最终端到端验收
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
    name: '链路1：全球法人→数据治理→风险→整改',
    steps: [
      () => ok('法人 B001', D.globalLegalEntities.find(e => e.entityId === 'B001')),
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
    name: '链路2：区域→国家→法人→跨境合规',
    steps: [
      () => ok('区域 AS', D.globalRegions.find(r => r.regionId === 'AS')),
      () => ok('国家 AS-A', D.globalCountries.find(c => c.countryId === 'AS-A')),
      () => ok('法人 D001', D.globalLegalEntities.find(e => e.entityId === 'D001')),
      () => ok('跨境 CBD001', D.crossBorderDataActivities.find(a => a.activityId === 'CBD001')),
      () => ok('数据源 SRC007', D.dataSourceRegistry.find(s => s.sourceId === 'SRC007')),
      () => ok('整改 RECT-CB-001', D.rectificationTasks.find(t => t.taskId === 'RECT-CB-001'))
    ]
  },
  {
    name: '链路3：数据质量→跨领域风险',
    steps: [
      () => ok('质量 DQ002', D.dataQualityIssues.find(q => q.issueId === 'DQ002')),
      () => ok('指标 IND002', D.dataIndicators.find(i => i.indicatorId === 'IND002')),
      () => ok('KRI kri-capex', D.groupKris.find(k => k.id === 'kri-capex')),
      () => ok('跨领域 CDR001', D.crossDomainRiskMatters.find(m => m.riskMatterId === 'CDR001')),
      () => ok('法人 B001', D.globalLegalEntities.find(e => e.entityId === 'B001')),
      () => ok('整改 RECT-CD-001', D.rectificationTasks.find(t => t.taskId === 'RECT-CD-001'))
    ]
  },
  {
    name: '链路4：覆盖矩阵→监管对象',
    steps: [
      () => ok('矩阵 CM-001', D.coverageMatrixCells.find(c => c.cellId === 'CM-001')),
      () => ok('法人 C001', D.globalLegalEntities.find(e => e.entityId === 'C001')),
      () => ok('数据源 SRC003', D.dataSourceRegistry.find(s => s.sourceId === 'SRC003')),
      () => ok('对象 OBJ003', D.dataObjects.find(o => o.objectId === 'OBJ003')),
      () => ok('KRI kri-schedule', D.groupKris.find(k => k.id === 'kri-schedule')),
      () => ok('整改 RECT-202601003', D.rectificationTasks.find(t => t.taskId === 'RECT-202601003'))
    ]
  },
  {
    name: '链路5：运行异常→数据质量',
    steps: [
      () => ok('告警 ALERT002', D.platformOperationAlerts.find(a => a.alertId === 'ALERT002')),
      () => ok('数据源 SRC002', D.dataSourceRegistry.find(s => s.sourceId === 'SRC002')),
      () => ok('对象 OBJ004', D.dataObjects.find(o => o.objectId === 'OBJ004')),
      () => ok('质量 DQ002', D.dataQualityIssues.find(q => q.issueId === 'DQ002')),
      () => ok('KRI kri-capex', D.groupKris.find(k => k.id === 'kri-capex')),
      () => ok('风险 risk-2', D.warnings.find(w => w.id === 'risk-2')),
      () => ok('整改 RECT-202601001', D.rectificationTasks.find(t => t.taskId === 'RECT-202601001'))
    ]
  },
  {
    name: '链路6：跨境合规↔跨领域风险',
    steps: [
      () => ok('活动 CBD006', D.crossBorderDataActivities.find(a => a.activityId === 'CBD006')),
      () => ok('跨领域 CDR002', D.crossDomainRiskMatters.find(m => m.riskMatterId === 'CDR002')),
      () => ok('双向关联', (D.crossDomainRiskMatters.find(m => m.riskMatterId === 'CDR002').relatedCrossBorderActivityIds || []).includes('CBD001')),
      () => ok('质量 DQ005', D.dataQualityIssues.find(q => q.issueId === 'DQ005')),
      () => ok('整改 RECT-CD-003', D.rectificationTasks.find(t => t.taskId === 'RECT-CD-003'))
    ]
  },
  {
    name: '链路7：数据血缘 relationId 内移动',
    steps: [
      () => {
        const rel = D.dataLineageRelations.find(r => r.relationId === 'LIN001');
        return ok('血缘 LIN001', rel && rel.sourceId === 'SRC002' && rel.kriId === 'kri-capex');
      },
      () => ok('源系统 SRC002', D.dataSourceRegistry.find(s => s.sourceId === 'SRC002')),
      () => ok('对象 OBJ004', D.dataObjects.find(o => o.objectId === 'OBJ004')),
      () => ok('指标 IND002', D.dataIndicators.find(i => i.indicatorId === 'IND002')),
      () => ok('KRI kri-capex', D.groupKris.find(k => k.id === 'kri-capex'))
    ]
  }
];

const dataResults = chains.map(chain => {
  const steps = chain.steps.map(fn => fn());
  return { name: chain.name, pass: steps.every(s => s.pass), steps };
});

async function browserTests() {
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.buildPublicDetailPanel, { timeout: 10000 });
  await page.evaluate(() => {
    document.getElementById('domainGateway').style.display = 'none';
    if (typeof App.enterDomain === 'function') App.enterDomain('investment', false);
  });

  const multiHopBack = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.dataGovFilter = {};
    App.navigatePublic('global-legal-entities', { entityId: 'B001' });
    await new Promise(r => setTimeout(r, 200));
    App.navigatePublic('global-regions', { projectId: 'GP001' });
    await new Promise(r => setTimeout(r, 200));
    App.navigatePublic('data-governance', { sourceId: 'SRC002' });
    await new Promise(r => setTimeout(r, 200));
    App.navigatePublic('warnings', { riskMatterId: 'risk-2' });
    await new Promise(r => setTimeout(r, 200));
    const pages = ['warnings', 'data-governance', 'global-regions'];
    const trail = [];
    for (let i = 0; i < 3; i++) {
      trail.push(App.currentPage);
      App.goBackPublic();
      await new Promise(r => setTimeout(r, 250));
    }
    return {
      trail,
      finalPage: App.currentPage,
      entityKept: (App.publicNavigationContext || {}).entityId === 'B001',
      histLen: (App.publicNavHistory || []).length
    };
  });

  const invalidId = await page.evaluate(async () => {
    App.navigatePublic('global-legal-entities', { entityId: 'NOT_EXIST' });
    await new Promise(r => setTimeout(r, 200));
    const text = document.getElementById('globalEntityDetail')?.innerText || '';
    return { hasNotFound: text.includes('对象不存在') || text.includes('无法解析'), noUndefined: !text.includes('undefined') };
  });

  const lineageTest = await page.evaluate(async () => {
    App.dataGovLineageFocus = 'LIN001';
    App.dataGovLineageStep = 0;
    App.renderDataGovernance();
    await new Promise(r => setTimeout(r, 150));
    const focusBefore = App.dataGovLineageFocus;
    App.traceDataGovLineage('downstream');
    await new Promise(r => setTimeout(r, 150));
    const focusAfter = App.dataGovLineageFocus;
    const stepAfter = App.dataGovLineageStep;
    App.traceDataGovLineage('upstream');
    await new Promise(r => setTimeout(r, 150));
    return {
      focusUnchanged: focusBefore === 'LIN001' && focusAfter === 'LIN001',
      stepMoved: stepAfter >= 1,
      stepBack: App.dataGovLineageStep === 0
    };
  });

  const pageCatalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasOverview: (App.publicRegulatoryPages || []).some(p => p.pageId === 'global-group-overview'),
    routeResolve: App.resolvePublicRouteId('global-group-overview') === 'group'
  }));

  await browser.close();
  server.close();

  const backPass = multiHopBack.finalPage === 'global-legal-entities' && multiHopBack.entityKept;
  return {
    multiHopBack: backPass ? '通过' : '不通过',
    multiHopDetail: multiHopBack,
    invalidId: (invalidId.hasNotFound && invalidId.noUndefined) ? '通过' : '不通过',
    invalidIdDetail: invalidId,
    lineage: (lineageTest.focusUnchanged && lineageTest.stepMoved && lineageTest.stepBack) ? '通过' : '不通过',
    lineageDetail: lineageTest,
    pageCatalog: pageCatalog.count === 11 && pageCatalog.hasOverview && pageCatalog.routeResolve ? '通过' : '不通过',
    pageCatalogDetail: pageCatalog
  };
}

(async () => {
  const summary = dataResults.map((r, i) => ({
    test: `测试 ${i + 1}`,
    name: r.name,
    result: r.pass ? '通过' : '不通过',
    failedSteps: r.steps.filter(s => !s.pass)
  }));

  let browserResult;
  try {
    browserResult = await browserTests();
  } catch (e) {
    browserResult = { error: String(e), multiHopBack: '不通过', invalidId: '不通过', lineage: '不通过' };
  }

  const allDataPass = summary.every(s => s.result === '通过');
  const allBrowserPass = ['multiHopBack', 'invalidId', 'lineage', 'pageCatalog'].every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');

  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
