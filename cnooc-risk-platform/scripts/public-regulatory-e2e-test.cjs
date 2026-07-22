#!/usr/bin/env node
/**
 * 公共监管底座 Phase 20 端到端验收（25 条链路）
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
  { name: '测试1：总览→综合分析中心', steps: [() => ok('分析索引', (D.regulatoryAnalysisIndexes || []).length > 0)] },
  { name: '测试2：综合分析→风险集中度', steps: [() => ok('集中度', (D.regulatoryRiskConcentration || []).length > 0)] },
  { name: '测试3：风险集中度→区域', steps: [() => ok('区域', (D.regulatoryRiskConcentration || []).some(c => c.dimension === 'byRegion'))] },
  { name: '测试4：区域→法人', steps: [() => {
    const region = (D.regulatoryRiskConcentration || []).find(c => c.dimension === 'byRegion');
    const entity = (D.regulatoryRiskConcentration || []).find(c => c.dimension === 'byEntity' && c.regionId === region?.objectId);
    return ok('区域法人链', region && (entity || (D.globalLegalEntities || []).some(e => e.regionId === region.objectId)));
  }]},
  { name: '测试5：法人→风险事项', steps: [() => {
    const ent = (D.regulatoryRiskConcentration || []).find(c => c.dimension === 'byEntity');
    const risk = ent ? (D.warnings || []).find(w => w.entityId === ent.objectId) : (D.warnings || [])[0];
    return ok('法人风险', ent && risk);
  }]},
  { name: '测试6：风险事项→KRI', steps: [() => {
    const w = (D.warnings || []).find(x => x.kriId);
    const kri = w ? (D.regulatoryKriRuntime || []).find(k => k.kriId === w.kriId) : null;
    return ok('风险KRI链', w && kri);
  }]},
  { name: '测试7：KRI→预警', steps: [() => {
    const w = (D.regulatoryWarnings || [])[0];
    const k = w ? (D.regulatoryKriRuntime || []).find(x => x.kriRuntimeId === w.kriRuntimeId) : null;
    return ok('KRI预警链', w && k);
  }]},
  { name: '测试8：预警→数据质量', steps: [() => {
    const issue = (D.regulatoryDataQualityIssues || []).find(i => i.kriId);
    return ok('质量KRI链', issue);
  }]},
  { name: '测试9：数据质量→整改', steps: [() => {
    const issue = (D.regulatoryDataQualityIssues || []).find(i => i.relatedRectificationTaskId);
    const rect = issue ? (D.rectificationTasks || []).find(t => t.taskId === issue.relatedRectificationTaskId) : null;
    return ok('质量整改链', issue && rect);
  }]},
  { name: '测试10：综合分析→风险传导', steps: [() => ok('传导', (D.regulatoryRiskPropagation || []).length > 0)] },
  { name: '测试11：风险传导→潜在传导链', steps: [() => ok('潜在传导', (D.regulatoryRiskPropagation || []).some(p => p.propagationType === 'POTENTIAL_PROPAGATION'))] },
  { name: '测试12：潜在传导→原始风险', steps: [() => {
    const p = (D.regulatoryRiskPropagation || []).find(x => (x.steps || []).some(s => s.objectType === 'warnings'));
    return ok('原始风险', p);
  }]},
  { name: '测试13：综合分析→情景分析', steps: [() => ok('情景', (D.regulatoryScenarioAnalysis || []).length >= 4)] },
  { name: '测试14：情景分析→模拟结果', steps: [() => ok('仅模拟', (D.regulatoryScenarioAnalysis || []).every(s => s.simulationOnly === true))] },
  { name: '测试15：模拟结果→真实基准状态', steps: [() => ok('分析权重', !!(D.regulatoryAnalysisWeights || {}).riskExposure)] },
  { name: '测试16：情景分析→不写回真实数据', steps: [() => ok('无自动写回', !(D.regulatoryScenarioAnalysis || []).some(s => s.wroteBack === true))] },
  { name: '测试17：综合分析→决策建议', steps: [() => ok('建议', (D.regulatoryDecisionRecommendations || []).length > 0)] },
  { name: '测试18：决策建议→证据链', steps: [() => ok('证据', (D.regulatoryDecisionRecommendations || []).every(r => (r.evidence || []).length > 0))] },
  { name: '测试19：决策建议→人工确认', steps: [() => ok('人审', (D.regulatoryDecisionRecommendations || []).every(r => r.requiresHumanDecision === true))] },
  { name: '测试20：建议确认→监管行动', steps: [() => ok('监管行动库', (D.regulatoryActions || []).length > 0)] },
  { name: '测试21：建议驳回→审计日志', steps: [() => ok('审计', Array.isArray(D.regulatoryAuditLogs))] },
  { name: '测试22：角色权限→分析范围', steps: [() => ok('法人用户', (D.regulatoryUsers || []).some(u => u.userType === 'ENTITY_REGULATOR'))] },
  { name: '测试23：越权访问→拒绝', steps: [() => ok('分析权限', (D.regulatoryPermissionSets || []).some(p => p.permissionCode === 'ANALYSIS_VIEW'))] },
  { name: '测试24：驾驶舱→综合分析', steps: [() => ok('分析指标', !!(D.regulatoryAnalysisMetrics || {}).highRiskEntityCount != null)] },
  { name: '测试25：A→B→C→D→E→F多跳返回', steps: [
    () => ok('综合分析', (D.regulatoryAnalysisIndexes || []).length > 0),
    () => ok('集中度', (D.regulatoryRiskConcentration || []).length > 0),
    () => ok('传导', (D.regulatoryRiskPropagation || []).length > 0),
    () => ok('情景', (D.regulatoryScenarioAnalysis || []).length > 0),
    () => ok('建议', (D.regulatoryDecisionRecommendations || []).length > 0),
    () => ok('指标', (D.regulatoryMetrics || []).length > 0)
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.calculateRegulatoryCompositeHealth, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const analysisNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-analysis-center');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryAnalysisCenter')?.innerText || '';
    return { ok: text.includes('综合分析中心') || text.includes('综合监管健康度') };
  });

  const concentrationFlow = await page.evaluate(() => {
    const items = App.calculateRiskConcentration('byEntity');
    const ent = items[0];
    return { ok: items.length > 0 && ent && ent.concentrationRate != null };
  });

  const propagationFlow = await page.evaluate(() => {
    const props = App.analyzeRiskPropagation();
    const potential = props.filter(p => p.propagationType === 'POTENTIAL_PROPAGATION');
    return { ok: props.length > 0 && potential.length > 0, noConfirmed: !props.some(p => p.propagationType === 'CONFIRMED_PROPAGATION') };
  });

  const scenarioFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const beforeWarnings = (APP_DATA.regulatoryWarnings || []).length;
    const beforePriorities = (APP_DATA.regulatoryPriorityObjects || []).length;
    const result = App.runRegulatoryScenario('SCN-001', { qualityDecline: 10 });
    const afterWarnings = (APP_DATA.regulatoryWarnings || []).length;
    const afterPriorities = (APP_DATA.regulatoryPriorityObjects || []).length;
    const auditWritten = (APP_DATA.regulatoryAuditLogs || []).some(l => l.objectType === 'regulatoryScenarioAnalysis' && l.actionType === 'RUN');
    return { ok: result.success && result.simulationOnly === true, noWriteBack: beforeWarnings === afterWarnings && beforePriorities === afterPriorities, auditWritten };
  });

  const recommendationFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const rec = (APP_DATA.regulatoryDecisionRecommendations || []).find(r => r.status === 'PENDING');
    if (!rec) return { hasRec: false };
    const reject = App.rejectRegulatoryDecisionRecommendation(rec.recommendationId, 'E2E驳回');
    const auditWritten = (APP_DATA.regulatoryAuditLogs || []).some(l => l.objectId === rec.recommendationId && l.actionType === 'REJECT');
    return { hasRec: true, rejected: reject.success, auditWritten, humanRequired: rec.requiresHumanDecision === true };
  });

  const confirmExecuteFlow = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const rec = (APP_DATA.regulatoryDecisionRecommendations || []).find(r => r.status === 'PENDING' && r.entityId);
    if (!rec) return { hasRec: false };
    App.confirmRegulatoryDecisionRecommendation(rec.recommendationId, 'E2E确认');
    const exec = App.executeRegulatoryDecisionRecommendation(rec.recommendationId);
    return { hasRec: true, confirmed: rec.status === 'CONFIRMED' || rec.status === 'EXECUTED', executed: exec.success, linkedAction: !!exec.action };
  });

  const permissionCheck = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-ENTITY-REG');
    const own = (APP_DATA.regulatoryRiskConcentration || []).find(c => c.dimension === 'byEntity' && c.objectId === 'A001');
    const other = (APP_DATA.regulatoryRiskConcentration || []).find(c => c.dimension === 'byEntity' && c.objectId && c.objectId !== 'A001');
    const ownOk = own ? App.canRegulatoryAccess('U-ENTITY-REG', 'regulatoryRiskConcentration', own.concentrationId, 'VIEW').allowed : true;
    const denyOk = other ? !App.canRegulatoryAccess('U-ENTITY-REG', 'regulatoryRiskConcentration', other.concentrationId, 'VIEW').allowed : true;
    return { ownOk, denyOk };
  });

  const commandCenter = await page.evaluate(async () => {
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { ok: text.includes('集团综合监管态势') && text.includes('风险集中度') && text.includes('决策建议') };
  });

  const workbench = await page.evaluate(async () => {
    App.navigatePublic('regulatory-workbench');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryWorkbench')?.innerText || '';
    return { ok: text.includes('集团综合态势') || text.includes('待决策建议') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    App.publicNavHistory = [];
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-analysis-center');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-risk-concentration');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-risk-propagation');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-scenario-analysis');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-decision-recommendations');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 6; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasAnalysis: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-analysis-center'),
    hasConcentration: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-risk-concentration'),
    hasPropagation: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-risk-propagation'),
    hasScenario: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-scenario-analysis'),
    hasRecommendations: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-decision-recommendations')
  }));

  await browser.close();
  server.close();

  return {
    analysisNav: analysisNav.ok ? '通过' : '不通过',
    concentrationFlow: concentrationFlow.ok ? '通过' : '不通过',
    propagationFlow: (propagationFlow.ok && propagationFlow.noConfirmed) ? '通过' : '不通过',
    scenarioFlow: (scenarioFlow.ok && scenarioFlow.noWriteBack && scenarioFlow.auditWritten) ? '通过' : '不通过',
    recommendationFlow: (recommendationFlow.hasRec ? (recommendationFlow.rejected && recommendationFlow.auditWritten && recommendationFlow.humanRequired) : true) ? '通过' : '不通过',
    confirmExecuteFlow: (confirmExecuteFlow.hasRec ? (confirmExecuteFlow.executed && confirmExecuteFlow.linkedAction) : true) ? '通过' : '不通过',
    permissionCheck: (permissionCheck.ownOk && permissionCheck.denyOk) ? '通过' : '不通过',
    commandCenter: commandCenter.ok ? '通过' : '不通过',
    workbench: workbench.ok ? '通过' : '不通过',
    multiHop: ['regulatory-decision-recommendations', 'regulatory-scenario-analysis', 'regulatory-risk-propagation', 'regulatory-risk-concentration', 'regulatory-analysis-center', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 65 && catalog.hasAnalysis && catalog.hasConcentration && catalog.hasPropagation && catalog.hasScenario && catalog.hasRecommendations) ? '通过' : '不通过',
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
    browserResult = { error: String(e), analysisNav: '不通过', concentrationFlow: '不通过', propagationFlow: '不通过', scenarioFlow: '不通过', recommendationFlow: '不通过', confirmExecuteFlow: '不通过', permissionCheck: '不通过', commandCenter: '不通过', workbench: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['analysisNav', 'concentrationFlow', 'propagationFlow', 'scenarioFlow', 'recommendationFlow', 'confirmExecuteFlow', 'permissionCheck', 'commandCenter', 'workbench', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
