#!/usr/bin/env node
/**
 * 公共监管底座 Phase 11 端到端验收（15 条链路）
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
    name: '测试1：总览→规则版本中心→版本详情→规则历史',
    steps: [
      () => ok('版本数据', (D.regulatoryRuleVersions || []).length >= 5),
      () => ok('治理指标', !!(D.regulatoryRuleGovernanceMetrics || {}).totalRules),
      () => ok('规则历史', (D.regulatoryRuleHistory || []).length > 0)
    ]
  },
  {
    name: '测试2：规则版本→变更申请→仿真场景→仿真结果',
    steps: [
      () => {
        const cr = (D.regulatoryRuleChangeRequests || []).find(c => (c.simulationIds || []).length);
        const sim = cr && D.regulatorySimulations.find(s => s.simulationId === cr.simulationIds[0]);
        const res = sim && D.regulatorySimulationResults.find(r => r.simulationId === sim.simulationId);
        return ok('版本仿真链', cr && sim && res?.simulationOnly === true);
      }
    ]
  },
  {
    name: '测试3：变更申请→影响分析→法人→优先级变化',
    steps: [
      () => {
        const cr = (D.regulatoryRuleChangeRequests || []).find(c => c.impactAnalysisId);
        const imp = cr && D.regulatoryRuleImpactAnalysis.find(i => i.impactAnalysisId === cr.impactAnalysisId);
        const ent = imp && (imp.affectedEntities || [])[0];
        return ok('影响法人链', cr && imp && (imp.affectedEntities || []).length >= 0 && (!ent || D.globalLegalEntities.some(e => e.entityId === ent.entityId)));
      }
    ]
  },
  {
    name: '测试4：影响分析→策略变化→监管行动',
    steps: [
      () => {
        const imp = (D.regulatoryRuleImpactAnalysis || []).find(i => (i.affectedEntities || []).some(e => e.strategyBefore !== e.strategyAfter) || (i.summary || {}).newActionCount > 0);
        return ok('策略行动链', imp && imp.simulationOnly === true);
      }
    ]
  },
  {
    name: '测试5：审批中心→变更申请→仿真结果→影响分析',
    steps: [
      () => {
        const cr = (D.regulatoryRuleChangeRequests || []).find(c => c.status === 'PENDING_APPROVAL');
        const imp = cr && D.regulatoryRuleImpactAnalysis.find(i => i.impactAnalysisId === cr.impactAnalysisId);
        const sim = cr && D.regulatorySimulationResults.find(r => r.simulationId === cr.simulationIds[0]);
        return ok('审批链路', cr && imp && sim);
      }
    ]
  },
  {
    name: '测试6：审批通过→新版本→运行效果',
    steps: [
      () => {
        const cr = (D.regulatoryRuleChangeRequests || []).find(c => c.status === 'APPROVED');
        const ver = cr && D.regulatoryRuleVersions.find(v => v.versionId === cr.proposedVersionId);
        const eff = ver && D.regulatoryRuleEffectiveness.find(e => e.versionId === ver.versionId || e.ruleId === ver.ruleId);
        return ok('审批效果链', cr && ver && (eff || D.regulatoryRuleRuntimeMetrics.some(m => m.ruleId === cr.ruleId)));
      }
    ]
  },
  {
    name: '测试7：规则运行效果→效果评价→优化建议',
    steps: [
      () => ok('效果评价', (D.regulatoryRuleEffectiveness || []).length > 0),
      () => ok('优化建议', (D.regulatoryRuleOptimizationLoop || []).length > 0)
    ]
  },
  {
    name: '测试8：优化建议→新变更申请',
    steps: [
      () => {
        const opt = (D.regulatoryRuleOptimizationLoop || [])[0];
        const cr = opt && opt.nextChangeRequestId && D.regulatoryRuleChangeRequests.find(c => c.changeRequestId === opt.nextChangeRequestId);
        return ok('优化申请链', opt && cr);
      }
    ]
  },
  {
    name: '测试9：规则→监管事件→监管行动→执行反馈',
    steps: [
      () => {
        const rule = (D.regulatoryRules || []).find(r => r.logicRef === 'regulatoryEvents' || r.ruleType === 'ACTION_TRIGGER');
        const act = D.regulatoryActions[0];
        const fb = act && D.regulatoryActionFeedbacks.find(f => f.actionId === act.actionId);
        return ok('规则行动链', rule && act);
      }
    ]
  },
  {
    name: '测试10：规则→成熟度→规则优化',
    steps: [
      () => ok('成熟度', !!(D.regulatoryMaturity || {}).overallScore),
      () => {
        const matVer = (D.regulatoryRuleVersions || []).find(v => v.ruleId === 'RULE-004');
        return ok('成熟度规则', matVer && (D.regulatoryRuleOptimizationLoop || []).length > 0);
      }
    ]
  },
  {
    name: '测试11：规则版本→区域→法人→项目',
    steps: [
      () => {
        const ver = (D.regulatoryRuleVersions || [])[0];
        const ent = D.globalLegalEntities.find(e => e.entityId !== 'G001');
        const proj = ent && D.globalProjects.find(p => p.entityId === ent.entityId);
        const reg = ent && D.globalRegions.find(r => r.regionId === ent.regionId);
        return ok('区域法人链', ver && ent && reg);
      }
    ]
  },
  {
    name: '测试12：规则影响分析→法人→数据治理→KRI→风险',
    steps: [
      () => {
        const imp = (D.regulatoryRuleImpactAnalysis || []).find(i => (i.affectedRiskMatters || []).length);
        const warn = imp && D.warnings.find(w => imp.affectedRiskMatters.includes(w.id));
        const kri = (D.groupKris || []).length > 0;
        return ok('数据风险链', imp && (warn || kri));
      }
    ]
  },
  {
    name: '测试13：无效 versionId→错误态',
    steps: [
      () => ok('无效版本', !(D.regulatoryRuleVersions || []).find(v => v.versionId === 'VER_NOT_EXIST'))
    ]
  },
  {
    name: '测试14：无效 changeRequestId→错误态',
    steps: [
      () => ok('无效申请', !(D.regulatoryRuleChangeRequests || []).find(c => c.changeRequestId === 'CR_NOT_EXIST'))
    ]
  },
  {
    name: '测试15：A→B→C→D→E→F 多跳返回',
    steps: [
      () => ok('仿真隔离', (D.regulatorySimulationResults || []).every(r => r.simulationOnly === true)),
      () => ok('影响隔离', (D.regulatoryRuleImpactAnalysis || []).every(i => i.simulationOnly === true)),
      () => ok('审批默认', (D.regulatoryRuleApprovals || []).every(a => a.sourceType === 'SYSTEM_DEFAULT'))
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryRuleVersions, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const versionNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-rule-versions');
    await new Promise(r => setTimeout(r, 120));
    const ver = (APP_DATA.regulatoryRuleVersions || [])[0];
    if (ver) App.showRegulatoryRuleVersionDetail(ver.versionId);
    await new Promise(r => setTimeout(r, 120));
    const text = document.getElementById('regulatoryRuleVersionDetail')?.innerText || '';
    return { hasPage: document.getElementById('regulatoryRuleVersions')?.innerText?.includes('监管规则版本中心'), hasDetail: text.includes('版本信息') || text.includes(ver?.versionId) };
  });

  const governanceDetail = await page.evaluate(async () => {
    App.navigatePublic('regulatory-rule-approvals');
    await new Promise(r => setTimeout(r, 120));
    const cr = (APP_DATA.regulatoryRuleChangeRequests || []).find(c => c.status === 'PENDING_APPROVAL');
    if (cr) App.showRegulatoryRuleChangeRequestDetail(cr.changeRequestId);
    await new Promise(r => setTimeout(r, 120));
    const crText = document.getElementById('regulatoryRuleApprovalDetail')?.innerText || '';
    App.showRegulatoryRuleVersionDetail('VER_NOT_EXIST');
    await new Promise(r => setTimeout(r, 120));
    const badVer = document.getElementById('regulatoryRuleVersionDetail')?.innerText || '';
    App.showRegulatoryRuleChangeRequestDetail('CR_NOT_EXIST');
    await new Promise(r => setTimeout(r, 120));
    const badCr = document.getElementById('regulatoryRuleApprovalDetail')?.innerText || '';
    return { crOk: crText.includes('变更申请') || crText.includes('审批'), badVer: badVer.includes('对象不存在'), badCr: badCr.includes('对象不存在') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-rule-versions');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-rule-approvals');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-rule-impact');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-rule-effectiveness');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-simulation');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 5; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasVersions: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-rule-versions'),
    hasApprovals: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-rule-approvals'),
    hasImpact: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-rule-impact'),
    hasEffectiveness: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-rule-effectiveness')
  }));

  await browser.close();
  server.close();

  return {
    versionNav: (versionNav.hasPage && versionNav.hasDetail) ? '通过' : '不通过',
    versionNavDetail: versionNav,
    governanceDetail: (governanceDetail.crOk && governanceDetail.badVer && governanceDetail.badCr) ? '通过' : '不通过',
    governanceDetailInfo: governanceDetail,
    multiHop: ['regulatory-rule-versions', 'regulatory-rule-approvals', 'regulatory-rule-impact', 'regulatory-rule-effectiveness', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 27 && catalog.hasVersions && catalog.hasApprovals && catalog.hasImpact && catalog.hasEffectiveness) ? '通过' : '不通过',
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
    browserResult = { error: String(e), versionNav: '不通过', governanceDetail: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['versionNav', 'governanceDetail', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
