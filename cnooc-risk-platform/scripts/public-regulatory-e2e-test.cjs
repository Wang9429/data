#!/usr/bin/env node
/**
 * 公共监管底座 Phase 10 端到端验收（10 条链路）
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
    name: '测试1：总览→驾驶舱→规则配置→规则详情',
    steps: [
      () => ok('规则数据', (D.regulatoryRules || []).length > 0),
      () => ok('规则指标', !!(D.regulatoryRuleConfigMetrics || {}).totalRules),
      () => {
        const rule = (D.regulatoryRules || []).find(r => r.ruleId === 'RULE-PRI-001');
        return ok('优先级规则', rule && rule.logicRef === 'calculateRegulatoryPriority');
      }
    ]
  },
  {
    name: '测试2：规则→受影响法人→风险→整改',
    steps: [
      () => {
        const rule = (D.regulatoryRules || []).find(r => r.ruleId === 'RULE-PRI-002');
        const entId = (rule?.affectedEntityIds || [])[0];
        const ent = entId && D.globalLegalEntities.find(e => e.entityId === entId);
        const warn = entId && D.warnings.find(w => w.entityId === entId);
        const rect = entId && D.rectificationTasks.find(t => t.entityId === entId && t.deadline && t.deadline < '2026-07-22' && t.status !== '已关闭');
        return ok('规则穿透链', rule && ent && (warn || rect));
      }
    ]
  },
  {
    name: '测试3：规则→参数→仿真场景→仿真结果',
    steps: [
      () => ok('规则参数', (D.regulatoryRuleParameters || []).length >= 10),
      () => ok('仿真场景', (D.regulatorySimulations || []).length >= 7),
      () => ok('仿真结果', (D.regulatorySimulationResults || []).every(r => r.simulationOnly === true))
    ]
  },
  {
    name: '测试4：仿真结果→法人→真实监管状态→仿真监管状态',
    steps: [
      () => {
        const sim = (D.regulatorySimulationResults || []).find(r => r.simulationId === 'SIM-PRI-WEIGHT');
        const pc = (sim?.priorityChanges || [])[0];
        const cur = pc && (D.regulatoryPrioritiesRecalculated || {})[pc.entityId];
        return ok('仿真对比', sim && pc && cur && pc.currentPriority && pc.simulatedPriority);
      }
    ]
  },
  {
    name: '测试5：规则历史→规则→参数变化→仿真结果',
    steps: [
      () => ok('规则历史', (D.regulatoryRuleHistory || []).length > 0),
      () => ok('系统默认', (D.regulatoryRuleHistory || []).every(h => h.modifiedBy === '系统默认')),
      () => ok('历史关联规则', (D.regulatoryRuleHistory || []).every(h => (D.regulatoryRules || []).some(r => r.ruleId === h.ruleId)))
    ]
  },
  {
    name: '测试6：成熟度→评分规则→仿真→成熟度变化',
    steps: [
      () => ok('成熟度', !!(D.regulatoryMaturity || {}).overallScore),
      () => {
        const matRule = (D.regulatoryRules || []).find(r => r.ruleId === 'RULE-MAT-001');
        const sim = (D.regulatorySimulationResults || []).find(s => s.simulationId === 'SIM-MAT-WEIGHT');
        return ok('成熟度仿真', matRule && sim?.maturityChange?.simulationOnly === true);
      }
    ]
  },
  {
    name: '测试7：规则→监管行动→执行反馈→整改',
    steps: [
      () => {
        const rule = (D.regulatoryRules || []).find(r => r.ruleId === 'RULE-ACT-001');
        const act = D.regulatoryActions.find(a => (rule?.relatedActionTypes || []).includes(a.actionType));
        const fb = act && D.regulatoryActionFeedbacks.find(f => f.actionId === act.actionId);
        const rect = act && (D.rectificationTasks || []).find(t => (act.sourceRectificationTaskIds || []).includes(t.taskId) || t.entityId === act.entityId);
        return ok('行动闭环链', rule && act && (fb || rect));
      }
    ]
  },
  {
    name: '测试8：无效 ruleId→错误态',
    steps: [
      () => ok('无效规则ID', !(D.regulatoryRules || []).find(r => r.ruleId === 'RULE_NOT_EXIST'))
    ]
  },
  {
    name: '测试9：无效 simulationId→错误态',
    steps: [
      () => ok('无效仿真ID', !(D.regulatorySimulationResults || []).find(s => s.simulationId === 'SIM_NOT_EXIST'))
    ]
  },
  {
    name: '测试10：A→B→C→D→E 多跳返回',
    steps: [
      () => ok('仿真声明', (D.regulatorySimulationResults || []).every(r => r.disclaimer?.includes('仿真'))),
      () => ok('规则版本', (D.regulatoryRuleHistory || []).every(h => h.sourceType === 'SYSTEM_DEFAULT')),
      () => ok('参数可追溯', (D.regulatoryRuleParameters || []).every(p => p.modifiedBy === '系统默认'))
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryRuleConfig, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const ruleNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 120));
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 120));
    App.navigatePublic('regulatory-rule-config');
    await new Promise(r => setTimeout(r, 120));
    const rule = (APP_DATA.regulatoryRules || [])[0];
    if (rule) App.showRegulatoryRuleDetail(rule.ruleId);
    await new Promise(r => setTimeout(r, 120));
    const text = document.getElementById('regulatoryRuleDetail')?.innerText || '';
    return { hasPage: text.includes('监管规则') || document.getElementById('regulatoryRuleConfig')?.innerText?.includes('集团监管规则配置'), hasDetail: text.includes('规则基本信息') || text.includes(rule?.ruleId) };
  });

  const simDetail = await page.evaluate(async () => {
    App.navigatePublic('regulatory-simulation');
    await new Promise(r => setTimeout(r, 120));
    App.showRegulatorySimulationDetail('SIM-PRI-WEIGHT');
    await new Promise(r => setTimeout(r, 120));
    const text = document.getElementById('regulatorySimulationDetail')?.innerText || '';
    App.showRegulatorySimulationDetail('SIM_NOT_EXIST');
    await new Promise(r => setTimeout(r, 120));
    const bad = document.getElementById('regulatorySimulationDetail')?.innerText || '';
    App.showRegulatoryRuleDetail('RULE_NOT_EXIST');
    await new Promise(r => setTimeout(r, 120));
    const badRule = document.getElementById('regulatoryRuleDetail')?.innerText || '';
    return { detailOk: text.includes('仿真') || text.includes('SIM-PRI-WEIGHT'), invalidSim: bad.includes('对象不存在'), invalidRule: badRule.includes('对象不存在') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-rule-config');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-simulation');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-rule-history');
    await new Promise(r => setTimeout(r, 100));
    for (let i = 0; i < 4; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 200)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasRuleConfig: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-rule-config'),
    hasSimulation: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-simulation'),
    hasHistory: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-rule-history')
  }));

  await browser.close();
  server.close();

  return {
    ruleNav: (ruleNav.hasPage && ruleNav.hasDetail) ? '通过' : '不通过',
    ruleNavDetail: ruleNav,
    simDetail: (simDetail.detailOk && simDetail.invalidSim && simDetail.invalidRule) ? '通过' : '不通过',
    simDetailInfo: simDetail,
    multiHop: ['regulatory-rule-config', 'regulatory-command-center', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 23 && catalog.hasRuleConfig && catalog.hasSimulation && catalog.hasHistory) ? '通过' : '不通过',
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
    browserResult = { error: String(e), ruleNav: '不通过', simDetail: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['ruleNav', 'simDetail', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
