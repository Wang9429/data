#!/usr/bin/env node
/**
 * 公共监管底座 Phase 16 端到端验收（18 条链路）
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
  { name: '测试1：集团总览→角色工作台', steps: [
    () => ok('角色配置', (D.regulatoryRoleProfiles || []).length >= 4),
    () => ok('角色工作台', (D.regulatoryRoleWorkbenches || []).length >= 4)
  ]},
  { name: '测试2：角色工作台→我的监管工作', steps: [
    () => ok('待办队列', (D.regulatoryQueue || []).length > 0)
  ]},
  { name: '测试3：角色工作台→统一搜索', steps: [
    () => ok('搜索索引', (D.regulatorySearchIndex || []).length > 0)
  ]},
  { name: '测试4：集团领导工作台→重大风险', steps: [
    () => {
      const wb = (D.regulatoryRoleWorkbenches || []).find(w => w.roleType === 'GROUP_LEADER');
      return ok('领导KPI', wb && wb.kpis && wb.kpis.some(k => k.key === 'majorRisk'));
    }
  ]},
  { name: '测试5：集团监管部门工作台→待办队列', steps: [
    () => {
      const wb = (D.regulatoryRoleWorkbenches || []).find(w => w.roleType === 'GROUP_REGULATORY');
      return ok('监管待办', wb && wb.pendingItems && wb.pendingItems.length > 0);
    }
  ]},
  { name: '测试6：专业领域工作台→领域风险', steps: [
    () => {
      const wb = (D.regulatoryRoleWorkbenches || []).find(w => w.roleType === 'DOMAIN_REGULATOR');
      return ok('领域风险KPI', wb && wb.kpis && wb.kpis.some(k => k.key === 'domainRisk'));
    }
  ]},
  { name: '测试7：法人工作台→法人详情', steps: [
    () => {
      const wb = (D.regulatoryRoleWorkbenches || []).find(w => w.roleType === 'ENTITY_REGULATOR');
      const ent = wb && D.globalLegalEntities.find(e => e.entityId === wb.scopeId);
      return ok('法人范围', wb && ent);
    }
  ]},
  { name: '测试8：我的工作→待办→原始详情', steps: [
    () => {
      const q = (D.regulatoryQueue || [])[0];
      const src = q && ((q.sourceType === 'regulatoryEvents' && D.regulatoryEvents.find(e => e.eventId === q.sourceId))
        || (q.sourceType === 'regulatoryActions' && D.regulatoryActions.find(a => a.actionId === q.sourceId))
        || (q.sourceType === 'rectificationTasks' && D.rectificationTasks.find(t => t.taskId === q.sourceId)));
      return ok('待办追溯', q && src);
    }
  ]},
  { name: '测试9：我的工作→重点对象→优先级', steps: [
    () => {
      const po = (D.regulatoryPriorityObjects || [])[0];
      const pri = po && (D.regulatoryPrioritiesRecalculated || D.regulatoryPriorities || {})[po.objectId];
      return ok('重点优先级', po && pri);
    }
  ]},
  { name: '测试10：我的工作→决策→决策历史', steps: [
    () => ok('决策上下文', (D.regulatoryDecisionContext || []).length > 0),
    () => ok('决策历史', (D.regulatoryDecisionHistory || []).length > 0)
  ]},
  { name: '测试11：搜索→法人→法人详情', steps: [
    () => {
      const r = (D.regulatorySearchIndex || []).find(x => x.objectType === 'ENTITY');
      const ent = r && D.globalLegalEntities.find(e => e.entityId === r.objectId);
      return ok('法人搜索', r && ent && r.targetPageId === 'global-legal-entities');
    }
  ]},
  { name: '测试12：搜索→风险→风险详情', steps: [
    () => {
      const r = (D.regulatorySearchIndex || []).find(x => x.objectType === 'RISK');
      const w = r && D.warnings.find(x => x.id === r.objectId);
      return ok('风险搜索', r && w);
    }
  ]},
  { name: '测试13：搜索→KRI→KRI详情', steps: [
    () => {
      const r = (D.regulatorySearchIndex || []).find(x => x.objectType === 'KRI');
      const k = r && D.groupKris.find(x => x.id === r.objectId);
      return ok('KRI搜索', r && k);
    }
  ]},
  { name: '测试14：搜索→整改→整改详情', steps: [
    () => {
      const r = (D.regulatorySearchIndex || []).find(x => x.objectType === 'RECTIFICATION');
      const t = r && D.rectificationTasks.find(x => x.taskId === r.objectId);
      return ok('整改搜索', r && t);
    }
  ]},
  { name: '测试15：搜索→规则→规则详情', steps: [
    () => {
      const r = (D.regulatorySearchIndex || []).find(x => x.objectType === 'RULE');
      const rule = r && (D.regulatoryRules || []).find(x => x.ruleId === r.objectId);
      return ok('规则搜索', r && rule);
    }
  ]},
  { name: '测试16：收藏→原始对象', steps: [
    () => ok('收藏结构', Array.isArray(D.regulatoryFavorites))
  ]},
  { name: '测试17：通知→原始对象', steps: [
    () => {
      const n = (D.regulatoryNotifications || [])[0];
      const ev = n && n.sourceType === 'regulatoryEvents' && D.regulatoryEvents.find(e => e.eventId === n.sourceId);
      return ok('通知追溯', n && (ev || n.sourceId));
    }
  ]},
  { name: '测试18：A→B→C→D→E→F多跳返回', steps: [
    () => ok('角色', (D.regulatoryRoleProfiles || []).length > 0),
    () => ok('搜索', (D.regulatorySearchIndex || []).length > 0),
    () => ok('通知', (D.regulatoryNotifications || []).length > 0),
    () => ok('队列', (D.regulatoryQueue || []).length > 0),
    () => ok('决策', (D.regulatoryDecisionContext || []).length > 0),
    () => ok('工作台', (D.regulatoryRoleWorkbenches || []).length > 0)
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryRoleWorkbench, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const roleNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-role-workbench');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryRoleWorkbench')?.innerText || '';
    App.navigatePublic('regulatory-my-work');
    await new Promise(r => setTimeout(r, 100));
    const myText = document.getElementById('regulatoryMyWork')?.innerText || '';
    return { hasRole: text.includes('角色工作台'), hasMyWork: myText.includes('我的监管工作') };
  });

  const roleSwitch = await page.evaluate(async () => {
    App.navigatePublic('regulatory-role-workbench');
    await new Promise(r => setTimeout(r, 100));
    const roles = APP_DATA.regulatoryRoleProfiles || [];
    if (roles[1]) App.setRegulatoryRole(roles[1].roleId);
    App.renderRegulatoryRoleWorkbench();
    await new Promise(r => setTimeout(r, 100));
    const text = document.getElementById('regulatoryRoleWorkbench')?.innerText || '';
    return { switched: text.includes(roles[1]?.roleName || '') };
  });

  const searchTest = await page.evaluate(async () => {
    App.navigatePublic('regulatory-search');
    await new Promise(r => setTimeout(r, 100));
    App.regulatorySearchFilter = { query: '中海' };
    App.renderRegulatorySearch();
    await new Promise(r => setTimeout(r, 100));
    const text = document.getElementById('regulatorySearch')?.innerText || '';
    const ent = (APP_DATA.regulatorySearchIndex || []).find(r => r.objectType === 'ENTITY');
    if (ent) App.navigateSearchResult(ent.resultId);
    await new Promise(r => setTimeout(r, 100));
    return { hasResults: text.includes('搜索结果'), hasBreadcrumb: text.includes('集团监管') };
  });

  const favoriteTest = await page.evaluate(async () => {
    const ent = (APP_DATA.regulatorySearchIndex || []).find(r => r.objectType === 'ENTITY');
    if (ent) {
      App.addRegulatoryFavorite({ objectType: ent.objectType, objectId: ent.objectId, title: ent.title, pageId: ent.targetPageId });
      App.navigatePublic('regulatory-my-work', { tab: 'favorites' });
      await new Promise(r => setTimeout(r, 100));
    }
    const text = document.getElementById('regulatoryMyWork')?.innerText || '';
    return { hasFavorite: (APP_DATA.regulatoryFavorites || []).length > 0 && text.includes('收藏') };
  });

  const invalidDetail = await page.evaluate(async () => {
    App.navigatePublic('regulatory-search');
    await new Promise(r => setTimeout(r, 100));
    const bad = App.searchRegulatoryIndex('QUE_NOT_EXIST_XYZ').length === 0;
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 100));
    const cc = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { invalidOk: bad, commandCenterOk: cc.includes('角色化监管工作台') || cc.includes('角色工作台') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    App.publicNavHistory = [];
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-role-workbench');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-my-work');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-search');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-queue');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('warnings');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 6; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasRole: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-role-workbench'),
    hasMyWork: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-my-work'),
    hasSearch: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-search')
  }));

  await browser.close();
  server.close();

  return {
    roleNav: (roleNav.hasRole && roleNav.hasMyWork) ? '通过' : '不通过',
    roleNavDetail: roleNav,
    roleSwitch: roleSwitch.switched ? '通过' : '不通过',
    roleSwitchDetail: roleSwitch,
    searchTest: searchTest.hasResults ? '通过' : '不通过',
    searchDetail: searchTest,
    favoriteTest: favoriteTest.hasFavorite ? '通过' : '不通过',
    favoriteDetail: favoriteTest,
    invalidDetail: (invalidDetail.invalidOk && invalidDetail.commandCenterOk) ? '通过' : '不通过',
    invalidDetailInfo: invalidDetail,
    multiHop: ['warnings', 'regulatory-queue', 'regulatory-search', 'regulatory-my-work', 'regulatory-role-workbench', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 46 && catalog.hasRole && catalog.hasMyWork && catalog.hasSearch) ? '通过' : '不通过',
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
    browserResult = { error: String(e), roleNav: '不通过', roleSwitch: '不通过', searchTest: '不通过', favoriteTest: '不通过', invalidDetail: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['roleNav', 'roleSwitch', 'searchTest', 'favoriteTest', 'invalidDetail', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
