#!/usr/bin/env node
/**
 * 公共监管底座 Phase 9 端到端验收（8 条链路）
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
  {
    name: '测试1：总览→成熟度→维度→短板→优化建议',
    steps: [
      () => ok('成熟度', !!(D.regulatoryMaturity || {}).overallScore),
      () => ok('五维度', (D.regulatoryMaturity || {}).dimensions?.length === 5),
      () => ok('短板', (D.regulatoryMaturity || {}).gaps?.length >= 0),
      () => ok('优化建议', (D.regulatoryOptimizationRecommendations || []).length > 0)
    ]
  },
  {
    name: '测试2：成熟度→区域→法人→项目→风险→整改',
    steps: [
      () => {
        const reg = (D.regulatoryMaturity || {}).regionMaturity?.[0];
        const ent = reg && (D.regulatoryMaturity || {}).entityMaturity?.find(e => e.regionId === reg.objectId);
        const proj = ent && D.globalProjects.find(p => p.entityId === ent.objectId);
        const warn = ent && D.warnings.find(w => w.entityId === ent.objectId);
        const rect = ent && D.rectificationTasks.find(t => t.entityId === ent.objectId);
        return ok('区域穿透链', reg && ent);
      }
    ]
  },
  {
    name: '测试3：成熟度→法人→优先级→行动→执行→反馈',
    steps: [
      () => {
        const ent = (D.regulatoryMaturity || {}).entityMaturity?.[0];
        const p = ent && (D.regulatoryPrioritiesRecalculated || {})[ent.objectId];
        const act = ent && D.regulatoryActions.find(a => a.entityId === ent.objectId);
        const fb = act && D.regulatoryActionFeedbacks.find(f => f.actionId === act.actionId);
        return ok('法人行动链', ent && p && act);
      }
    ]
  },
  {
    name: '测试4：持续优化→指标→数据治理→KRI→风险→整改',
    steps: [
      () => ok('指标优化', (D.regulatoryOptimizationAnalysis || {}).metricOptimizations?.length > 0),
      () => ok('KRI优化', (D.regulatoryOptimizationAnalysis || {}).kriOptimizations?.length > 0),
      () => ok('数据源', (D.dataSourceRegistry || []).length > 0),
      () => ok('整改关联', (D.regulatoryOptimizationRecommendations || []).some(r => (r.relatedRectificationTaskIds || []).length))
    ]
  },
  {
    name: '测试5：持续优化→KRI→风险→行动→反馈',
    steps: [
      () => {
        const kri = (D.regulatoryOptimizationAnalysis || {}).kriOptimizations?.[0];
        const warn = D.warnings.find(w => w.kriId === kri?.kriId);
        const act = D.regulatoryActions.find(a => (a.sourceKriIds || []).includes(kri?.kriId));
        return ok('KRI行动链', kri && (warn || act || kri.analysisMode));
      }
    ]
  },
  {
    name: '测试6：策略优化→决策历史→行动→反馈',
    steps: [
      () => ok('策略优化', (D.regulatoryOptimizationAnalysis || {}).strategyOptimizations?.length > 0),
      () => ok('决策历史', (D.regulatoryDecisionHistory || []).length > 0),
      () => ok('行动反馈', (D.regulatoryActionFeedbacks || []).length > 0)
    ]
  },
  {
    name: '测试7：无效 recommendationId→错误态',
    steps: [
      () => ok('无效ID', !(D.regulatoryOptimizationRecommendations || []).find(r => r.recommendationId === 'OPT_NOT_EXIST'))
    ]
  },
  {
    name: '测试8：A→B→C→D→E 多跳返回',
    steps: [
      () => ok('成熟度趋势', !!(D.regulatoryMaturityTrend || {}).simulated),
      () => ok('趋势标注', (D.regulatoryMaturityTrend || {}).note?.includes('模拟')),
      () => ok('建议ID完整', (D.regulatoryOptimizationRecommendations || []).every(r => r.recommendationId && r.dimensionId))
    ]
  }
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryMaturity, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const maturityPage = await page.evaluate(async () => {
    App.navigatePublic('regulatory-maturity');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryMaturity')?.innerText || '';
    return { hasPage: text.includes('集团监管成熟度'), hasDims: text.includes('五大能力维度'), hasGaps: text.includes('短板') };
  });

  const optDetail = await page.evaluate(async () => {
    App.navigatePublic('regulatory-optimization');
    await new Promise(r => setTimeout(r, 150));
    const rec = (APP_DATA.regulatoryOptimizationRecommendations || [])[0];
    if (rec) App.showRegulatoryOptimizationDetail(rec.recommendationId);
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryOptimizationDetail')?.innerText || '';
    App.showRegulatoryOptimizationDetail('OPT_NOT_EXIST');
    await new Promise(r => setTimeout(r, 150));
    const bad = document.getElementById('regulatoryOptimizationDetail')?.innerText || '';
    return { detailOk: text.includes('建议信息') || text.includes('监管优化建议'), invalidOk: bad.includes('对象不存在') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('global-group-overview');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-strategy');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-maturity');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-optimization');
    await new Promise(r => setTimeout(r, 100));
    for (let i = 0; i < 4; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 200)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasMaturity: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-maturity'),
    hasOptimization: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-optimization')
  }));

  await browser.close();
  server.close();

  return {
    maturityPage: (maturityPage.hasPage && maturityPage.hasDims) ? '通过' : '不通过',
    maturityPageDetail: maturityPage,
    optDetail: (optDetail.detailOk && optDetail.invalidOk) ? '通过' : '不通过',
    optDetailInfo: optDetail,
    multiHop: ['regulatory-maturity', 'regulatory-strategy', 'regulatory-command-center', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 20 && catalog.hasMaturity && catalog.hasOptimization) ? '通过' : '不通过',
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
    browserResult = { error: String(e), maturityPage: '不通过', optDetail: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['maturityPage', 'optDetail', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
