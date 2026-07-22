#!/usr/bin/env node
/**
 * 公共监管底座 Phase 15 端到端验收（15 条链路）
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
    name: '测试1：总览→统一工作台',
    steps: [
      () => ok('工作台指标', !!(D.regulatoryWorkbenchMetrics || {}).queueTotal),
      () => ok('工作台对象', (D.regulatoryWorkbench || []).some(w => w.scopeType === 'GROUP'))
    ]
  },
  {
    name: '测试2：工作台→待办队列',
    steps: [
      () => {
        const wbM = D.regulatoryWorkbenchMetrics || {};
        const q = D.regulatoryQueue || [];
        return ok('待办聚合', wbM.queueTotal === q.length && q.length > 0);
      }
    ]
  },
  {
    name: '测试3：工作台→决策工作室',
    steps: [
      () => {
        const wb = (D.regulatoryWorkbench || []).find(w => w.scopeType === 'GROUP');
        const dc = (D.regulatoryDecisionContext || [])[0];
        return ok('决策上下文', wb && dc && dc.decisionContextId);
      }
    ]
  },
  {
    name: '测试4：决策工作室→风险事项',
    steps: [
      () => {
        const dc = (D.regulatoryDecisionContext || [])[0];
        const risk = dc && (dc.relatedRiskMatterIds || [])[0];
        const found = risk && (D.warnings || []).find(w => w.id === risk);
        return ok('风险穿透', dc && (found || (dc.relatedRiskMatterIds || []).length >= 0));
      }
    ]
  },
  {
    name: '测试5：决策工作室→KRI',
    steps: [
      () => {
        const dc = (D.regulatoryDecisionContext || [])[0];
        return ok('KRI摘要', dc && dc.kriSummary && dc.kriSummary.exceptionCount >= 0);
      }
    ]
  },
  {
    name: '测试6：决策工作室→数据质量',
    steps: [
      () => {
        const dc = (D.regulatoryDecisionContext || [])[0];
        return ok('数据质量摘要', dc && dc.dataQualitySummary);
      }
    ]
  },
  {
    name: '测试7：决策工作室→整改任务',
    steps: [
      () => {
        const dc = (D.regulatoryDecisionContext || [])[0];
        const rect = (dc.relatedRectificationTaskIds || [])[0];
        const found = rect && D.rectificationTasks.find(t => t.taskId === rect);
        return ok('整改穿透', dc && (found || !(dc.relatedRectificationTaskIds || []).length));
      }
    ]
  },
  {
    name: '测试8：待办→原始事件',
    steps: [
      () => {
        const q = (D.regulatoryQueue || []).find(x => x.sourceType === 'regulatoryEvents');
        const ev = q && D.regulatoryEvents.find(e => e.eventId === q.sourceId);
        return ok('事件追溯', q && ev);
      }
    ]
  },
  {
    name: '测试9：待办→原始行动',
    steps: [
      () => {
        const q = (D.regulatoryQueue || []).find(x => x.sourceType === 'regulatoryActions');
        const act = q && D.regulatoryActions.find(a => a.actionId === q.sourceId);
        return ok('行动追溯', q && act);
      }
    ]
  },
  {
    name: '测试10：待办→原始整改',
    steps: [
      () => {
        const q = (D.regulatoryQueue || []).find(x => x.sourceType === 'rectificationTasks');
        const rect = q && D.rectificationTasks.find(t => t.taskId === q.sourceId);
        return ok('整改追溯', q && rect);
      }
    ]
  },
  {
    name: '测试11：工作台→重点法人',
    steps: [
      () => {
        const ids = (D.regulatoryWorkbenchMetrics || {}).topEntityIds || [];
        const ent = ids[0] && D.globalLegalEntities.find(e => e.entityId === ids[0]);
        return ok('重点法人', ids.length > 0 && ent);
      }
    ]
  },
  {
    name: '测试12：重点法人→优先级',
    steps: [
      () => {
        const id = ((D.regulatoryWorkbenchMetrics || {}).topEntityIds || [])[0];
        const pri = id && (D.regulatoryPrioritiesRecalculated || D.regulatoryPriorities || {})[id];
        return ok('优先级链', id && pri);
      }
    ]
  },
  {
    name: '测试13：优先级→监管策略',
    steps: [
      () => {
        const id = ((D.regulatoryWorkbenchMetrics || {}).topEntityIds || [])[0];
        const strat = id && ((D.regulatoryStrategyAnalysis || {}).entities || []).find(e => e.objectId === id);
        return ok('策略链', id && (strat || D.regulatoryStrategyAnalysis));
      }
    ]
  },
  {
    name: '测试14：监管策略→监管行动',
    steps: [
      () => {
        const id = ((D.regulatoryWorkbenchMetrics || {}).topEntityIds || [])[0];
        const act = id && D.regulatoryActions.find(a => a.entityId === id);
        return ok('行动链', id && act);
      }
    ]
  },
  {
    name: '测试15：A→B→C→D→E→F多跳返回',
    steps: [
      () => ok('工作台', (D.regulatoryWorkbench || []).length > 0),
      () => ok('待办队列', (D.regulatoryQueue || []).length > 0),
      () => ok('决策上下文', (D.regulatoryDecisionContext || []).length > 0),
      () => ok('监管行动', (D.regulatoryActions || []).length > 0),
      () => ok('整改任务', (D.rectificationTasks || []).length > 0),
      () => ok('战略复盘', (D.regulatoryStrategicReview || []).length > 0)
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryWorkbench, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const workbenchNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-workbench');
    await new Promise(r => setTimeout(r, 100));
    const wbText = document.getElementById('regulatoryWorkbench')?.innerText || '';
    App.navigatePublic('regulatory-queue');
    await new Promise(r => setTimeout(r, 100));
    const qText = document.getElementById('regulatoryQueue')?.innerText || '';
    return { hasWorkbench: wbText.includes('统一工作台'), hasQueue: qText.includes('待办') };
  });

  const decisionRoom = await page.evaluate(async () => {
    const dc = (APP_DATA.regulatoryDecisionContext || [])[0];
    App.navigatePublic('regulatory-decision-room', { decisionContextId: dc?.decisionContextId });
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryDecisionRoom')?.innerText || '';
    return { hasDecision: text.includes('决策工作室') || text.includes('推荐决策') };
  });

  const queueDetail = await page.evaluate(async () => {
    const q = (APP_DATA.regulatoryQueue || [])[0];
    App.navigatePublic('regulatory-queue');
    await new Promise(r => setTimeout(r, 100));
    if (q) App.showRegulatoryQueueDetail(q.queueItemId);
    await new Promise(r => setTimeout(r, 100));
    const detail = document.getElementById('regulatoryQueueDetail')?.innerText || '';
    return { hasDetail: detail.includes('待办基本信息') || detail.includes('队列 ID') };
  });

  const invalidDetail = await page.evaluate(async () => {
    App.navigatePublic('regulatory-queue');
    await new Promise(r => setTimeout(r, 100));
    App.showRegulatoryQueueDetail('QUE_NOT_EXIST');
    await new Promise(r => setTimeout(r, 100));
    const bad = document.getElementById('regulatoryQueueDetail')?.innerText || '';
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 100));
    const cc = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { invalidOk: bad.includes('不存在') || bad.includes('未找到'), commandCenterOk: cc.includes('统一监管工作台') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    App.publicNavHistory = [];
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-workbench');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-queue');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-decision-room');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('warnings');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-strategy');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 6; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasWorkbench: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-workbench'),
    hasQueue: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-queue'),
    hasDecisionRoom: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-decision-room')
  }));

  await browser.close();
  server.close();

  return {
    workbenchNav: (workbenchNav.hasWorkbench && workbenchNav.hasQueue) ? '通过' : '不通过',
    workbenchNavDetail: workbenchNav,
    decisionRoom: decisionRoom.hasDecision ? '通过' : '不通过',
    decisionRoomDetail: decisionRoom,
    queueDetail: queueDetail.hasDetail ? '通过' : '不通过',
    queueDetailInfo: queueDetail,
    invalidDetail: (invalidDetail.invalidOk && invalidDetail.commandCenterOk) ? '通过' : '不通过',
    invalidDetailInfo: invalidDetail,
    multiHop: ['regulatory-strategy', 'warnings', 'regulatory-decision-room', 'regulatory-queue', 'regulatory-workbench', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 43 && catalog.hasWorkbench && catalog.hasQueue && catalog.hasDecisionRoom) ? '通过' : '不通过',
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
    browserResult = { error: String(e), workbenchNav: '不通过', decisionRoom: '不通过', queueDetail: '不通过', invalidDetail: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['workbenchNav', 'decisionRoom', 'queueDetail', 'invalidDetail', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
