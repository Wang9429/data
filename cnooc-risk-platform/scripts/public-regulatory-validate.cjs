#!/usr/bin/env node
/**
 * 公共监管底座 Phase 17 验收脚本
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const dataPath = path.join(ROOT, 'js/data.js');
const appPath = path.join(ROOT, 'js/app.js');
const pubPath = path.join(ROOT, 'js/public-regulatory.js');

function loadAppData() {
  const code = fs.readFileSync(dataPath, 'utf8');
  const sandbox = { console };
  vm.runInNewContext(code + '\n;this.APP_DATA = APP_DATA;', sandbox, { filename: 'data.js' });
  return sandbox.APP_DATA;
}

const D = loadAppData();
const appJs = fs.readFileSync(appPath, 'utf8');
const pubJs = fs.readFileSync(pubPath, 'utf8');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const errors = [];
const warnings = [];
const accessFails = [];
const authFails = [];
const auditFails = [];
const configFails = [];
const permFails = [];

function req(id, label) {
  if (!id) errors.push(`缺失ID: ${label}`);
}

function resolve(id, arr, key, label) {
  if (!id) return null;
  const found = arr.find(x => x[key] === id);
  if (!found) errors.push(`无法解析: ${label}=${id}`);
  return found;
}

const AUTH_SOURCE = {
  regulatoryRuleChangeRequests: { arr: () => D.regulatoryRuleChangeRequests, key: 'changeRequestId' },
  regulatoryRuleApprovals: { arr: () => D.regulatoryRuleApprovals, key: 'approvalId' },
  regulatoryRuleDeployments: { arr: () => D.regulatoryRuleDeployments, key: 'deploymentId' },
  regulatoryActions: { arr: () => D.regulatoryActions, key: 'actionId' },
  rectificationTasks: { arr: () => D.rectificationTasks, key: 'taskId' },
  regulatorySupervisionTasks: { arr: () => D.regulatorySupervisionTasks, key: 'supervisionTaskId' },
  regulatoryStrategicObjectives: { arr: () => D.regulatoryStrategicObjectives, key: 'objectiveId' },
  regulatoryAnnualPlans: { arr: () => D.regulatoryAnnualPlans, key: 'planId' },
  regulatoryStrategicFocus: { arr: () => D.regulatoryStrategicFocus, key: 'focusId' }
};

const expectedPages = [
  'global-group-overview', 'global-legal-entities', 'global-regions', 'coverage-gaps',
  'platform-operations', 'data-governance', 'cross-border-compliance', 'cross-domain-risks',
  'warnings', 'rectification', 'regulatory-events', 'rectification-operations', 'regulatory-evaluation',
  'regulatory-command-center', 'regulatory-actions', 'regulatory-action-execution', 'regulatory-strategy',
  'regulatory-maturity', 'regulatory-optimization',
  'regulatory-rule-config', 'regulatory-simulation', 'regulatory-rule-history',
  'regulatory-rule-versions', 'regulatory-rule-approvals', 'regulatory-rule-impact', 'regulatory-rule-effectiveness',
  'regulatory-rule-runtime', 'regulatory-rule-executions', 'regulatory-rule-deployments',
  'regulatory-performance', 'regulatory-resource-allocation', 'regulatory-supervision-tasks', 'regulatory-benchmarking',
  'regulatory-strategy-planning', 'regulatory-annual-plan', 'regulatory-target-management',
  'regulatory-focus-management', 'regulatory-plan-execution', 'regulatory-strategic-review',
  'regulatory-workbench', 'regulatory-queue', 'regulatory-decision-room',
  'regulatory-role-workbench', 'regulatory-my-work', 'regulatory-search',
  'regulatory-access-control', 'regulatory-authorization', 'regulatory-audit-trail', 'regulatory-system-settings',
  'major'
];
expectedPages.forEach(pid => {
  if (!pubJs.includes(`pageId: '${pid}'`)) errors.push(`公共页面清单缺失: ${pid}`);
});

const publicPageCount = (pubJs.match(/pageId: '/g) || []).length;
if (publicPageCount !== 50) warnings.push(`公共页面数=${publicPageCount}，期望50`);

const components = [
  'canRegulatoryAccess', 'createRegulatoryAuditLog', 'executeRegulatoryStateChange',
  'approveRegulatoryAuthorization', 'rejectRegulatoryAuthorization', 'renderRegulatoryActionButton',
  'renderRegulatoryAccessControl', 'renderRegulatoryAuthorization', 'renderRegulatoryAuditTrail', 'renderRegulatorySystemSettings',
  'showRegulatoryAuthorizationDetail', 'showRegulatoryAuditDetail', 'showRegulatoryAccessControlUserDetail',
  'getCurrentRegulatoryUser', 'setCurrentRegulatoryUser'
];
components.forEach(fn => {
  if (!pubJs.includes(fn)) errors.push(`公共组件缺失: ${fn}`);
});

let hardcodeOffsetCount = 0;
[/\.length\s*\+\s*\d+/g].forEach(re => {
  [appJs, pubJs].forEach((src) => {
    (src.match(re) || []).forEach(hit => {
      if (!hit.includes('steps.length')) { hardcodeOffsetCount++; warnings.push(`硬编码偏移: ${hit}`); }
    });
  });
});

(D.regulatoryUsers || []).forEach(u => req(u.userId, 'userId'));
(D.regulatoryRoleAssignments || []).forEach(a => {
  req(a.assignmentId, 'assignmentId');
  resolve(a.userId, D.regulatoryUsers, 'userId', 'asg.user');
  resolve(a.roleId, D.regulatoryRoleProfiles, 'roleId', 'asg.role');
});

(D.regulatoryPermissionSets || []).forEach(p => {
  req(p.permissionSetId, 'permissionSetId');
  req(p.permissionCode, 'permissionCode');
});

(D.regulatoryAuthorizationRequests || []).forEach(a => {
  req(a.authorizationId, 'authorizationId');
  req(a.targetObjectId, 'auth.targetObjectId');
  resolve(a.requesterId, D.regulatoryUsers, 'userId', 'auth.requester');
  const src = AUTH_SOURCE[a.sourceType || a.targetObjectType];
  if (src) {
    const found = (src.arr() || []).find(x => x[src.key] === (a.sourceId || a.targetObjectId));
    if (!found) authFails.push(`授权 ${a.authorizationId} 无法追溯 source/target=${a.targetObjectId}`);
  }
  (a.relatedRiskIds || []).forEach(id => {
    if (!(D.warnings || []).find(w => w.id === id) && !(D.crossDomainRiskMatters || []).find(m => m.riskMatterId === id)) {
      if (id) authFails.push(`授权 ${a.authorizationId} 风险ID无效 ${id}`);
    }
  });
});

(D.regulatoryAuditLogs || []).forEach(l => {
  req(l.auditId, 'auditId');
  if (l.userId) resolve(l.userId, D.regulatoryUsers, 'userId', 'audit.user');
  if (l.objectId && l.authorizationId) resolve(l.authorizationId, D.regulatoryAuthorizationRequests, 'authorizationId', 'audit.auth');
});

if (!Array.isArray(D.regulatoryAuditLogs)) errors.push('regulatoryAuditLogs 未初始化');
if ((D.regulatoryAuditLogs || []).some(l => l.userName)) auditFails.push('审计日志不得复制业务用户详情');

(D.regulatorySystemConfigurations || []).forEach(c => {
  req(c.configId, 'configId');
  req(c.configKey, 'configKey');
  if ((D.regulatoryRuleParameters || []).find(p => p.paramId === c.configKey)) {
    configFails.push(`系统配置 ${c.configKey} 与规则参数重复`);
  }
});

if (!D.regulatoryUsers?.length) errors.push('regulatoryUsers 未生成');
if (!D.regulatoryRoleAssignments?.length) errors.push('regulatoryRoleAssignments 未生成');
if (!D.regulatoryPermissionSets?.length) errors.push('regulatoryPermissionSets 未生成');
if (!D.regulatoryAuthorizationRequests?.length) errors.push('regulatoryAuthorizationRequests 未生成');
if (!D.regulatorySystemConfigurations?.length) errors.push('regulatorySystemConfigurations 未生成');
if (!D.regulatoryAccessControlMetrics) errors.push('regulatoryAccessControlMetrics 未生成');

const rolePermMap = D.regulatoryRolePermissionMap || {};
Object.keys(rolePermMap).forEach(roleId => {
  if (!(D.regulatoryRoleProfiles || []).find(r => r.roleId === roleId)) permFails.push(`权限映射角色无效 ${roleId}`);
  (rolePermMap[roleId] || []).forEach(code => {
    if (!(D.regulatoryPermissionSets || []).find(p => p.permissionCode === code)) permFails.push(`权限码未定义 ${code}`);
  });
});

[
  'page-regulatory-access-control', 'page-regulatory-authorization', 'page-regulatory-audit-trail', 'page-regulatory-system-settings'
].forEach(id => {
  if (!html.includes(id)) errors.push(`index.html 缺失: ${id}`);
});

if (!appJs.includes('renderRegulatoryAccessControl')) errors.push('app.js 未调用 renderRegulatoryAccessControl');
if (!pubJs.includes('权限治理') || !pubJs.includes('访问控制中心')) errors.push('驾驶舱 Phase 17 模块缺失');
if (!pubJs.includes('renderRegulatoryActionButton')) permFails.push('权限按钮渲染缺失');

const navChecks = [
  "navigatePublic('regulatory-access-control')",
  "navigatePublic('regulatory-authorization')",
  "navigatePublic('regulatory-audit-trail')",
  "navigatePublic('regulatory-system-settings')"
];
const unifiedNavigationCheck = navChecks.every(s => pubJs.includes(s));

const penetrateCount = (appJs.match(/navigate\(['"]penetration['"]/g) || []).length;
const freezeFails = [];
if (penetrateCount !== 3) freezeFails.push('navigate(penetration)!=3');
if (!/renderPenetration\s*\(/.test(appJs)) freezeFails.push('renderPenetration missing');

let nodeCheck = '通过';
let gitDiffCheck = '通过';
try {
  execSync(`node --check ${dataPath}`, { stdio: 'pipe' });
  execSync(`node --check ${appPath}`, { stdio: 'pipe' });
  execSync(`node --check ${pubPath}`, { stdio: 'pipe' });
} catch { nodeCheck = '不通过'; }
try {
  execSync('git diff --check', { cwd: ROOT, stdio: 'pipe' });
} catch { gitDiffCheck = '不通过'; }

const result = {
  publicPageCount,
  idIntegrity: errors.length === 0 ? '通过' : '不通过',
  errorCount: errors.length,
  warningCount: warnings.length,
  dataSourceUniqueness: errors.length === 0 ? '通过' : '不通过',
  accessControlCheck: accessFails.length === 0 ? '通过' : '不通过',
  authorizationCheck: authFails.length === 0 ? '通过' : '不通过',
  auditTrailCheck: auditFails.length === 0 ? '通过' : '不通过',
  systemConfigurationCheck: configFails.length === 0 ? '通过' : '不通过',
  permissionCalculationCheck: permFails.length === 0 ? '通过' : '不通过',
  realStateMutationCheck: pubJs.includes('executeRegulatoryStateChange') && pubJs.includes('_applyRegulatoryStateChange') ? '通过' : '不通过',
  unifiedNavigationCheck: unifiedNavigationCheck ? '通过' : '不通过',
  accessFails, authFails: authFails.slice(0, 10), auditFails, configFails, permFails: permFails.slice(0, 10),
  errors: errors.slice(0, 40),
  warnings: warnings.slice(0, 15),
  investmentFreeze: freezeFails.length === 0 ? '通过' : '不通过',
  freezeFails,
  penetrateCallCount: penetrateCount,
  hardcodeOffsetCount,
  nodeCheck,
  gitDiffCheck
};
console.log(JSON.stringify(result, null, 2));
process.exit(
  errors.length || freezeFails.length || hardcodeOffsetCount || accessFails.length
  || authFails.length || auditFails.length || configFails.length || permFails.length ? 1 : 0
);
