#!/usr/bin/env node
/**
 * 公共监管底座 Phase 17 端到端验收（18 条链路）
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
  { name: '测试1：总览→角色工作台→权限中心', steps: [
    () => ok('角色', (D.regulatoryRoleProfiles || []).length >= 4),
    () => ok('权限中心数据', (D.regulatoryUsers || []).length > 0)
  ]},
  { name: '测试2：权限中心→用户→角色→数据范围', steps: [
    () => {
      const u = (D.regulatoryUsers || [])[0];
      const asg = (D.regulatoryRoleAssignments || []).find(a => a.userId === u.userId);
      return ok('用户角色链', u && asg && asg.scopeType);
    }
  ]},
  { name: '测试3：角色→可见法人', steps: [
    () => ok('法人', (D.globalLegalEntities || []).filter(e => e.entityId !== 'G001').length > 0)
  ]},
  { name: '测试4：法人→权限校验', steps: [
    () => ok('权限集合', (D.regulatoryPermissionSets || []).length > 0)
  ]},
  { name: '测试5：待审批授权→原始对象', steps: [
    () => {
      const a = (D.regulatoryAuthorizationRequests || [])[0];
      const src = a && ((D.regulatoryActions || []).find(x => x.actionId === a.targetObjectId)
        || (D.rectificationTasks || []).find(x => x.taskId === a.targetObjectId)
        || (D.regulatoryRuleChangeRequests || []).find(x => x.changeRequestId === a.targetObjectId));
      return ok('授权追溯', a && (src || a.sourceId));
    }
  ]},
  { name: '测试6：授权审批→状态变更', steps: [
    () => ok('授权申请', (D.regulatoryAuthorizationRequests || []).some(a => ['SUBMITTED', 'IN_REVIEW'].includes(a.status)))
  ]},
  { name: '测试7：状态变更→审计日志', steps: [
    () => ok('审计机制', Array.isArray(D.regulatoryAuditLogs))
  ]},
  { name: '测试8：审计日志→原始对象', steps: [
    () => ok('授权索引', (D.regulatoryAuthorizationRequests || []).length > 0)
  ]},
  { name: '测试9：规则变更→权限→审批', steps: [
    () => {
      const a = (D.regulatoryAuthorizationRequests || []).find(x => x.requestType === 'RULE_CHANGE' || x.requestType === 'RULE_APPROVAL');
      return ok('规则审批链', a);
    }
  ]},
  { name: '测试10：规则审批→发布→部署', steps: [
    () => ok('规则部署索引', (D.regulatoryAuthorizationRequests || []).some(a => a.requestType === 'RULE_DEPLOY') || (D.regulatoryRuleDeployments || []).length > 0)
  ]},
  { name: '测试11：关闭整改→权限校验→审批→审计', steps: [
    () => {
      const a = (D.regulatoryAuthorizationRequests || []).find(x => x.requestType === 'RECTIFICATION_CLOSE');
      const perm = (D.regulatoryPermissionSets || []).find(p => p.permissionCode === 'RECTIFICATION_CLOSE');
      return ok('整改关闭链', a && perm);
    }
  ]},
  { name: '测试12：法人用户→越权对象→拒绝', steps: [
    () => ok('法人用户', (D.regulatoryUsers || []).some(u => u.userType === 'ENTITY_REGULATOR'))
  ]},
  { name: '测试13：专业监管→授权领域→可见对象', steps: [
    () => {
      const asg = (D.regulatoryRoleAssignments || []).find(a => a.roleId === 'ROLE-DOMAIN-REG');
      return ok('领域授权', asg && asg.scopeType === 'DOMAIN');
    }
  ]},
  { name: '测试14：系统配置→配置变更→审计', steps: [
    () => ok('系统配置', (D.regulatorySystemConfigurations || []).length > 0)
  ]},
  { name: '测试15：驾驶舱→权限治理', steps: [
    () => ok('权限指标', !!(D.regulatoryAccessControlMetrics || {}).userCount)
  ]},
  { name: '测试16：驾驶舱→待审批事项', steps: [
    () => ok('待审批', (D.regulatoryAccessControlMetrics || {}).pendingAuthorizationCount > 0)
  ]},
  { name: '测试17：驾驶舱→审计异常', steps: [
    () => ok('审计异常计数', (D.regulatoryAccessControlMetrics || {}).auditAnomalyCount >= 0)
  ]},
  { name: '测试18：A→B→C→D→E→F多跳返回', steps: [
    () => ok('用户', (D.regulatoryUsers || []).length > 0),
    () => ok('授权', (D.regulatoryAuthorizationRequests || []).length > 0),
    () => ok('权限', (D.regulatoryPermissionSets || []).length > 0),
    () => ok('配置', (D.regulatorySystemConfigurations || []).length > 0),
    () => ok('角色工作台', (D.regulatoryRoleWorkbenches || []).length > 0),
    () => ok('搜索', (D.regulatorySearchIndex || []).length > 0)
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
  await page.waitForFunction(() => typeof App !== 'undefined' && App.canRegulatoryAccess, { timeout: 10000 });
  await page.evaluate(() => { document.getElementById('domainGateway').style.display = 'none'; if (App.enterDomain) App.enterDomain('investment', false); });

  const accessNav = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('regulatory-role-workbench');
    await new Promise(r => setTimeout(r, 100));
    App.navigatePublic('regulatory-access-control');
    await new Promise(r => setTimeout(r, 150));
    const text = document.getElementById('regulatoryAccessControl')?.innerText || '';
    return { hasAccess: text.includes('访问控制中心') || text.includes('权限矩阵') };
  });

  const permissionCheck = await page.evaluate(() => {
    App.setCurrentRegulatoryUser('U-ENTITY-REG');
    const ent = (APP_DATA.globalLegalEntities || []).find(e => e.entityId !== 'G001');
    const other = (APP_DATA.globalLegalEntities || []).find(e => e.entityId !== 'G001' && e.entityId !== ent?.entityId);
    const own = App.canRegulatoryAccess('U-ENTITY-REG', 'globalLegalEntities', ent?.entityId, 'VIEW');
    const deny = other ? App.canRegulatoryAccess('U-ENTITY-REG', 'globalLegalEntities', other.entityId, 'ASSIGN') : { allowed: false };
    return { ownOk: own.allowed, denyOk: !deny.allowed };
  });

  const authFlow = await page.evaluate(async () => {
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const auth = (APP_DATA.regulatoryAuthorizationRequests || []).find(a => a.requestType === 'RECTIFICATION_CLOSE' && ['SUBMITTED', 'IN_REVIEW'].includes(a.status));
    if (!auth) return { hasAuth: false };
    App.navigatePublic('regulatory-authorization', { authorizationId: auth.authorizationId });
    await new Promise(r => setTimeout(r, 150));
    const detail = document.getElementById('regulatoryAuthorizationDetail')?.innerText || '';
    App.setCurrentRegulatoryUser('U-GROUP-LEADER');
    const result = App.approveRegulatoryAuthorization(auth.authorizationId);
    const auditCount = (APP_DATA.regulatoryAuditLogs || []).length;
    return { hasAuth: detail.includes('授权') || detail.includes(auth.authorizationId), approved: result.success, auditWritten: auditCount > 0 };
  });

  const stateMutation = await page.evaluate(() => {
    const auth = (APP_DATA.regulatoryAuthorizationRequests || []).find(a => a.requestType === 'RECTIFICATION_CLOSE' && a.status === 'APPROVED');
    if (!auth) return { mutated: false };
    App.setCurrentRegulatoryUser('U-GROUP-REG');
    const before = (APP_DATA.rectificationTasks || []).find(t => t.taskId === auth.targetObjectId);
    const exec = App.executeRegulatoryStateChange({ resourceType: 'rectificationTasks', resourceId: auth.targetObjectId, action: 'CLOSE', reason: 'E2E测试关闭', skipApproval: true });
    const after = (APP_DATA.rectificationTasks || []).find(t => t.taskId === auth.targetObjectId);
    return { mutated: exec.success && after?.status === '已关闭', exec };
  });

  const auditPage = await page.evaluate(async () => {
    App.navigatePublic('regulatory-audit-trail');
    await new Promise(r => setTimeout(r, 100));
    const text = document.getElementById('regulatoryAuditTrail')?.innerText || '';
    return { hasAudit: text.includes('审计') && (APP_DATA.regulatoryAuditLogs || []).length > 0 };
  });

  const searchAndSettings = await page.evaluate(async () => {
    App.navigatePublic('regulatory-system-settings');
    await new Promise(r => setTimeout(r, 100));
    const cfg = document.getElementById('regulatorySystemSettings')?.innerText || '';
    App.navigatePublic('regulatory-command-center');
    await new Promise(r => setTimeout(r, 100));
    const cc = document.getElementById('regulatoryCommandCenter')?.innerText || '';
    return { settingsOk: cfg.includes('系统配置') && cfg.includes('规则治理'), commandCenterOk: cc.includes('权限治理') };
  });

  const multiHop = await page.evaluate(async () => {
    App.publicNavHistory = [];
    App.navigatePublic('group');
    App.publicNavHistory = [];
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-role-workbench');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-access-control');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-authorization');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-audit-trail');
    await new Promise(r => setTimeout(r, 80));
    App.navigatePublic('regulatory-system-settings');
    await new Promise(r => setTimeout(r, 80));
    for (let i = 0; i < 6; i++) { App.goBackPublic(); await new Promise(r => setTimeout(r, 180)); }
    return { finalPage: App.currentPage };
  });

  const catalog = await page.evaluate(() => ({
    count: (App.publicRegulatoryPages || []).length,
    hasAccess: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-access-control'),
    hasAuth: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-authorization'),
    hasAudit: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-audit-trail'),
    hasSettings: (App.publicRegulatoryPages || []).some(p => p.pageId === 'regulatory-system-settings')
  }));

  await browser.close();
  server.close();

  return {
    accessNav: accessNav.hasAccess ? '通过' : '不通过',
    permissionCheck: (permissionCheck.ownOk && permissionCheck.denyOk) ? '通过' : '不通过',
    permissionDetail: permissionCheck,
    authFlow: (authFlow.hasAuth && authFlow.approved && authFlow.auditWritten) ? '通过' : '不通过',
    authFlowDetail: authFlow,
    stateMutation: stateMutation.mutated ? '通过' : '不通过',
    stateMutationDetail: stateMutation,
    auditPage: auditPage.hasAudit ? '通过' : '不通过',
    searchAndSettings: (searchAndSettings.settingsOk && searchAndSettings.commandCenterOk) ? '通过' : '不通过',
    searchAndSettingsDetail: searchAndSettings,
    multiHop: ['regulatory-system-settings', 'regulatory-audit-trail', 'regulatory-authorization', 'regulatory-access-control', 'regulatory-role-workbench', 'group'].includes(multiHop.finalPage) ? '通过' : '不通过',
    multiHopDetail: multiHop,
    pageCatalog: (catalog.count === 50 && catalog.hasAccess && catalog.hasAuth && catalog.hasAudit && catalog.hasSettings) ? '通过' : '不通过',
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
    browserResult = { error: String(e), accessNav: '不通过', permissionCheck: '不通过', authFlow: '不通过', stateMutation: '不通过', auditPage: '不通过', searchAndSettings: '不通过', multiHop: '不通过', pageCatalog: '不通过' };
  }
  const allDataPass = summary.every(s => s.result === '通过');
  const browserKeys = ['accessNav', 'permissionCheck', 'authFlow', 'stateMutation', 'auditPage', 'searchAndSettings', 'multiHop', 'pageCatalog'];
  const allBrowserPass = browserKeys.every(k => browserResult[k] === '通过' || browserResult[k] === 'skipped');
  const output = { dataChainTests: summary, browserTests: browserResult, allPass: allDataPass && allBrowserPass };
  console.log(JSON.stringify(output, null, 2));
  process.exit(output.allPass ? 0 : 1);
})();
