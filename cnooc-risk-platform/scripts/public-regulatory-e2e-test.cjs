#!/usr/bin/env node
/**
 * 公共监管底座 Phase 8 端到端验收（15 条链路）
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
    name: '测试1：集团总览→驾驶舱→行动→执行→反馈',
    steps: [
      () => ok('驾驶舱指标', !!(D.regulatoryCommandCenterMetrics || {}).decisionLoop),
      () => ok('监管行动', (D.regulatoryActions || []).length > 0),
      () => ok('执行指标', !!(D.regulatoryActionExecutionMetrics || {}).total),
      () => ok('行动反馈', (D.regulatoryActionFeedbacks || []).length > 0)
    ]
  },
  {
    name: '测试2：监管行动→来源事件→法人→整改',
    steps: [
      () => {
        const act = (D.regulatoryActions || [])[0];
        const evt = act && D.regulatoryEvents.find(e => e.eventId === act.sourceEventIds[0]);
        const ent = evt && D.globalLegalEntities.find(e => e.entityId === evt.entityId);
        const rect = act && D.rectificationTasks.find(t => act.sourceRectificationTaskIds.includes(t.taskId));
        return ok('行动穿透链', act && evt && ent && (rect || act.sourceRectificationTaskIds.length === 0));
      }
    ]
  },
  {
    name: '测试3：行动执行→反馈→验证→关闭',
    steps: [
      () => {
        const act = (D.regulatoryActions || []).find(a => a.status === 'VERIFIED');
        const fb = act && (D.regulatoryActionFeedbacks || []).find(f => f.actionId === act.actionId);
        return ok('验证关闭链', act && fb && fb.verificationStatus === 'PASSED');
      }
    ]
  },
  {
    name: '测试4：行动→整改→风险→KRI→数据质量',
    steps: [
      () => {
        const act = (D.regulatoryActions || []).find(a => (a.sourceRectificationTaskIds || []).length && (a.sourceKriIds || []).length);
        if (!act) return ok('行动全链路', false, '无匹配行动');
        const rect = D.rectificationTasks.find(t => act.sourceRectificationTaskIds.includes(t.taskId));
        const risk = act.sourceRiskMatterIds.length && (D.warnings.find(w => w.id === act.sourceRiskMatterIds[0]) || D.crossDomainRiskMatters.find(m => m.riskMatterId === act.sourceRiskMatterIds[0]));
        const kri = D.groupKris.find(k => act.sourceKriIds.includes(k.id));
        return ok('行动全链路', rect && risk && kri);
      }
    ]
  },
  {
    name: '测试5：法人→优先级→变化记录→相关行动',
    steps: [
      () => {
        const p = (D.regulatoryPrioritiesRecalculated || {})['B001'];
        const dec = (D.regulatoryDecisionHistory || []).find(d => d.entityId === 'B001');
        const act = (D.regulatoryActions || []).find(a => a.entityId === 'B001');
        return ok('B001优先级链', p && dec && act);
      }
    ]
  },
  {
    name: '测试6：监管评价→行动执行效率→法人',
    steps: [
      () => ok('执行效率', !!(D.regulatoryActionEfficiency || {}).overall),
      () => ok('法人效率', (D.regulatoryActionEfficiency || {}).byEntity?.some(e => e.entityName))
    ]
  },
  {
    name: '测试7：行动中心→按优先级筛选→执行',
    steps: [
      () => ok('高优先级行动', (D.regulatoryActions || []).some(a => a.priority === 'HIGH' || a.priority === 'CRITICAL')),
      () => ok('执行页面数据', (D.regulatoryActionExecutionMetrics || {}).total > 0)
    ]
  },
  {
    name: '测试8：行动中心→按状态筛选→详情',
    steps: [
      () => ok('执行中行动', (D.regulatoryActions || []).some(a => a.status === 'IN_PROGRESS')),
      () => ok('行动字段完整', (D.regulatoryActions || []).every(a => a.actionId && a.status && a.executionProgress !== undefined))
    ]
  },
  {
    name: '测试9：行动执行→责任主体→法人',
    steps: [
      () => {
        const act = (D.regulatoryActions || []).find(a => a.responsibleEntity);
        const ent = act && D.globalLegalEntities.find(e => e.entityId === act.responsibleEntity);
        return ok('责任主体法人', act && ent);
      }
    ]
  },
  {
    name: '测试10：行动执行→协同部门→整改任务',
    steps: [
      () => {
        const act = (D.regulatoryActions || []).find(a => (a.collaboratingDepartments || []).length && (a.sourceRectificationTaskIds || []).length);
        return ok('协同整改链', act && D.rectificationTasks.find(t => act.sourceRectificationTaskIds.includes(t.taskId)));
      }
    ]
  },
  {
    name: '测试11：监管驾驶舱→待决策事项→监管行动',
    steps: [
      () => ok('待决策计数', (D.regulatoryCommandCenterMetrics || {}).pendingDecisionCount >= 0),
      () => ok('待行动计数', (D.regulatoryCommandCenterMetrics || {}).pendingActionCount > 0)
    ]
  },
  {
    name: '测试12：监管策略变化→决策历史→监管行动',
    steps: [
      () => {
        const dec = (D.regulatoryDecisionHistory || []).find(d => d.decisionType === 'STRATEGY_CHANGE');
        const act = dec && (D.regulatoryActions || []).length;
        return ok('策略决策链', dec && act);
      }
    ]
  },
  {
    name: '测试13：无效 actionId→统一错误态',
    steps: [
      () => ok('无效 actionId', !(D.regulatoryActions || []).find(a => a.actionId === 'ACT_NOT_EXIST'))
    ]
  },
  {
    name: '测试14：无效 feedbackId→统一错误态',
    steps: [
      () => ok('无效 feedbackId', !(D.regulatoryActionFeedbacks || []).find(f => f.feedbackId === 'FB_NOT_EXIST'))
    ]
  },
  {
    name: '测试15：A→B→C→D 多跳返回',
    steps: [
      () => ok('决策历史', (D.regulatoryDecisionHistory || []).length > 0),
      () => ok('反馈关联', (D.regulatoryActionFeedbacks || []).every(f => D.regulatoryActions.find(a => a.actionId === f.actionId))),
      () => ok('决策关联行动', (D.regulatoryDecisionHistory || []).filter(d => (d.sourceActionIds || []).length).every(d => d.sourceActionIds.every(aid => D.regulatoryActions.find(a => a.actionId === aid))))
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.renderRegulatoryActionExecution, { timeout: 10000 });
  await page.evaluate(() => {
    document.getElementById('domainGateway').style.display = 'none';
    if (typeof App.enterDomain === 'function') App.enterDomain('investment', false);
  });

  const executionPage = await page.evaluate(async () => {
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-actions');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-action-execution');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryActionExecution')?.innerText || '';
    return { hasPage: text.includes('监管行动执行'), hasBoard: text.includes('行动执行看板'), hasMetrics: text.includes('行动总数') };
  });

  const executionDetail = await page.evaluate(async () => {
    const act = (APP_DATA.regulatoryActions || [])[0];
    if (act) App.showRegulatoryActionExecutionDetail(act.actionId);
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryActionExecutionDetail')?.innerText || '';
    App.showRegulatoryActionExecutionDetail('ACT_NOT_EXIST');
    await new Promise(r => setTimeout(r, 150));
    const bad = document.getElementById('regulatoryActionExecutionDetail')?.innerText || '';
    const fb = (APP_DATA.regulatoryActionFeedbacks || [])[0];
    if (fb) App.showRegulatoryActionFeedbackDetail(fb.feedbackId);
    await new Promise(r => setTimeout(r, 150));
    const fbText = document.getElementById('regulatoryActionFeedbackDetail')?.innerText || '';
    App.showRegulatoryActionFeedbackDetail('FB_NOT_EXIST');
    await new Promise(r => setTimeout(r, 150));
    const badFb = document.getElementById('regulatoryActionFeedbackDetail')?.innerText || '';
    return { detailOk: text.includes('行动基本信息') || text.includes('监管行动执行'), invalidActionOk: bad.includes('对象不存在'), feedbackOk: fbText.includes('反馈'), invalidFeedbackOk: badFb.includes('对象不存在') };
  });

  const multiHopBack = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-actions');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-action-execution');
    await new Promise(r => setTimeout(r, 100));
    const act = (APP_DATA.regulatoryActions || [])[0];
    if (act) App.navigatePublic('regulatory-events', { eventId: (act.sourceEventIds || [])[0] });
    await new Promise(r => setTimeout(r, 150));
    for (let i = 0; i < 3; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 200)); }
    return { finalPage: App.currentPage };
  });

  const pageCatalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasExecution: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-action-execution'),
    hasCommand: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-command-center'),
    hasEvaluation: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-evaluation')
  }));

  await browser.close();
  server.close();

  return {
    executionPage: (executionPage.hasPage && executionPage.hasBoard) ? '通过' : '不通过',
    executionPageDetail: executionPage,
    executionDetail: (executionDetail.detailOk && executionDetail.invalidActionOk && executionDetail.feedbackOk && executionDetail.invalidFeedbackOk) ? '通过' : '不通过',
    executionDetailInfo: executionDetail,
    multiHopBack: ['regulatory-action-execution', 'regulatory-actions', 'regulatory-command-center'].includes(multiHopBack.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHopBack,
    pageCatalog: (pageCatalog.count === 18 && pageCatalog.hasExecution) ? '通过' : '不通过',
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
    browserResult = { error: String(e), executionPage: '不通过', executionDetail: '不通过', multiHopBack: '不通过', pageCatalog: '不通过' };
  }

  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['executionPage', 'executionDetail', 'multiHopBack', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');

  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
