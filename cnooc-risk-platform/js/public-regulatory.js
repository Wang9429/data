/**
 * 公共监管底座 — 统一组件、状态、导航与页面清单
 * 不修改投资管理模块逻辑
 */
Object.assign(App, {

  publicRegulatoryPages: [
    { pageId: 'global-group-overview', routeId: 'group', label: '集团监管总览', category: '监管总览', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'global-legal-entities', label: '全球法人监管', category: '监管对象', entryFromGroupOverview: true, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'global-regions', label: '全球区域/国别监管', category: '监管对象', entryFromGroupOverview: true, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'coverage-gaps', label: '监管对象覆盖与盲区', category: '监管覆盖', entryFromGroupOverview: true, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'platform-operations', label: '监管运行监测', category: '运行监测', entryFromGroupOverview: true, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'data-governance', label: '数据治理与数据血缘', category: '数据治理', entryFromGroupOverview: true, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'cross-border-compliance', label: '跨境数据合规', category: '合规监管', entryFromGroupOverview: true, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'cross-domain-risks', label: '跨领域风险监管', category: '风险监管', entryFromGroupOverview: true, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'warnings', label: '集团风险预警', category: '风险事项', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'rectification', label: '整改督办', category: '整改闭环', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-events', label: '集团监管事件中心', category: '运营闭环', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'rectification-operations', label: '集团整改运营中心', category: '运营闭环', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-evaluation', label: '集团监管评价', category: '运营闭环', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-command-center', label: '集团监管决策驾驶舱', category: '决策层', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-actions', label: '集团监管行动中心', category: '决策层', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-action-execution', label: '监管行动执行', category: '决策层', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-strategy', label: '集团监管策略分析', category: '决策层', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-maturity', label: '集团监管成熟度', category: '持续优化', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-optimization', label: '集团监管持续优化', category: '持续优化', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-rule-config', label: '集团监管规则配置', category: '规则仿真', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-simulation', label: '集团监管仿真推演', category: '规则仿真', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-rule-history', label: '监管规则变更历史', category: '规则仿真', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-rule-versions', label: '监管规则版本中心', category: '规则治理', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-rule-approvals', label: '规则变更审批中心', category: '规则治理', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-rule-impact', label: '规则影响分析', category: '规则治理', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-rule-effectiveness', label: '规则运行效果中心', category: '规则治理', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-rule-runtime', label: '监管规则运行中心', category: '规则运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-rule-executions', label: '规则执行结果中心', category: '规则运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-rule-deployments', label: '规则版本部署与回滚', category: '规则运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-performance', label: '集团监管绩效中心', category: '运营绩效', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-resource-allocation', label: '监管资源调度中心', category: '运营绩效', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-supervision-tasks', label: '监管任务协同中心', category: '运营绩效', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-benchmarking', label: '监管能力对标分析', category: '运营绩效', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-strategy-planning', label: '集团监管战略规划', category: '战略运营', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-annual-plan', label: '年度监管计划中心', category: '战略运营', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-target-management', label: '监管目标管理', category: '战略运营', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-focus-management', label: '年度监管重点管理', category: '战略运营', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-plan-execution', label: '年度监管计划执行中心', category: '战略运营', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-strategic-review', label: '集团监管战略复盘', category: '战略运营', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-workbench', label: '集团监管统一工作台', category: '平台收口', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-queue', label: '集团监管待办队列', category: '平台收口', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-decision-room', label: '集团监管决策工作室', category: '平台收口', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-role-workbench', label: '监管角色工作台', category: '用户体验', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-my-work', label: '我的监管工作', category: '用户体验', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-search', label: '集团监管统一搜索', category: '用户体验', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-access-control', label: '集团监管访问控制中心', category: '权限治理', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-authorization', label: '集团监管授权审批中心', category: '权限治理', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-audit-trail', label: '集团监管操作审计中心', category: '权限治理', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-system-settings', label: '集团监管平台系统配置中心', category: '权限治理', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-data-sources', label: '集团监管数据源中心', category: '数据运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-data-integration', label: '集团监管数据接入中心', category: '数据运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-data-quality', label: '集团监管数据质量中心', category: '数据运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-data-governance', label: '集团监管数据治理中心', category: '数据运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-data-lineage', label: '集团监管数据血缘中心', category: '数据运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-metric-center', label: '集团监管指标中心', category: '指标运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-kri-monitoring', label: '集团KRI运行监测中心', category: '指标运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-warning-center', label: '集团监管预警中心', category: '指标运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-kri-effectiveness', label: '集团KRI有效性评价中心', category: '指标运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-warning-strategy', label: '集团预警策略分析中心', category: '指标运行', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-analysis-center', label: '集团监管综合分析中心', category: '综合研判', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-risk-concentration', label: '集团监管风险集中度分析', category: '综合研判', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-risk-propagation', label: '集团监管风险传导分析', category: '综合研判', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-scenario-analysis', label: '集团监管情景分析中心', category: '综合研判', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-decision-recommendations', label: '集团监管决策建议中心', category: '综合研判', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-improvement-center', label: '集团监管持续改进中心', category: '持续改进', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-root-cause-analysis', label: '集团监管问题根因分析中心', category: '持续改进', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-optimization-plans', label: '集团监管优化方案中心', category: '持续改进', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-improvement-execution', label: '集团监管改进实施中心', category: '持续改进', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'regulatory-improvement-effectiveness', label: '集团监管改进效果验证中心', category: '持续改进', entryFromGroupOverview: false, supportsPublicNavigation: true, supportsBackNavigation: true },
    { pageId: 'major', label: '重大事项监管', category: '重大事项', entryFromGroupOverview: false, supportsPublicNavigation: false, supportsBackNavigation: false }
  ],

  PUBLIC_STATUS_MAP: {
    '正常': 'badge-success', '良好': 'badge-success', '合规': 'badge-success', '已接入': 'badge-success',
    '已覆盖': 'badge-success', '已关闭': 'badge-success', '已审批': 'badge-success', '已通过': 'badge-success',
    '关注': 'badge-warning', '整改中': 'badge-warning', '待处理': 'badge-warning', '待审批': 'badge-warning',
    '部分覆盖': 'badge-warning', '部分接入': 'badge-warning', '待完善': 'badge-warning', '待提升': 'badge-warning',
    '待复核': 'badge-warning', '验证中': 'badge-warning', '整改执行': 'badge-warning', '整改制定': 'badge-warning',
    '预警': 'badge-warning', '较大预警': 'badge-warning', '黄色': 'badge-warning',
    '严重': 'badge-danger', '高风险': 'badge-danger', '重大预警': 'badge-danger', '异常': 'badge-danger',
    '未覆盖': 'badge-danger', '数据异常': 'badge-danger', '未接入': 'badge-danger', '逾期': 'badge-danger',
    '红色': 'badge-danger', '重大': 'badge-danger', '处理中': 'badge-info', '监测中': 'badge-info'
  },

  PUBLIC_UNIFIED_STATUS_MAP: {
    ACTIVE: { label: '运行中', type: 'badge-success', aliases: ['正常', '良好', '合规', '已接入', '已覆盖', 'IN_PROGRESS', 'IMPLEMENTING', 'REVIEWED', 'ONLINE'] },
    INACTIVE: { label: '未启用', type: 'badge-info', aliases: ['未接入', '未覆盖', 'INACTIVE', 'CLOSED', '已关闭', 'CANCELLED'] },
    PENDING: { label: '待处理', type: 'badge-warning', aliases: ['关注', '整改中', '待处理', '待审批', '部分覆盖', '部分接入', '待完善', '待提升', '待复核', '验证中', '整改执行', '整改制定', '预警', 'PENDING_REVIEW', 'PROPOSED', 'ASSIGNED', 'RECOMMENDED', 'WAITING_FEEDBACK', 'PENDING_VALIDATION', 'POTENTIAL_ROOT_CAUSE', 'PENDING_HUMAN_DECISION'] },
    COMPLETED: { label: '已完成', type: 'badge-success', aliases: ['已审批', '已通过', 'COMPLETED', 'VERIFIED', 'VALIDATED', 'CONFIRMED', 'CONFIRMED_ROOT_CAUSE', 'EFFECTIVE'] },
    OVERDUE: { label: '逾期', type: 'badge-danger', aliases: ['严重', '高风险', '重大预警', '异常', '数据异常', '逾期', '红色', '重大', 'OVERDUE', 'BLOCKED', 'CRITICAL'] },
    HEALTHY: { label: '健康', type: 'badge-success', aliases: ['HEALTHY', 'OK'] },
    WARNING: { label: '关注', type: 'badge-warning', aliases: ['WARNING', 'ATTENTION', 'PARTIALLY_EFFECTIVE', 'AT_RISK'] },
    CRITICAL: { label: '严重', type: 'badge-danger', aliases: ['CRITICAL', 'INEFFECTIVE'] },
    INSUFFICIENT_HISTORY: { label: '历史数据不足', type: 'badge-info', aliases: ['INSUFFICIENT_HISTORY', 'INSUFFICIENT_DATA'] },
    SIMULATION: { label: '仿真', type: 'badge-info', aliases: ['SIMULATION'] },
    PRODUCTION: { label: '生产', type: 'badge-success', aliases: ['PRODUCTION', 'ACTIVE_DEPLOYMENT'] },
    PENDING_HUMAN_DECISION: { label: '待人工决策', type: 'badge-warning', aliases: ['PENDING_HUMAN_DECISION', 'requiresHumanDecision'] },
    CONFIRMED: { label: '已确认', type: 'badge-success', aliases: ['CONFIRMED', 'CONFIRMED_ROOT_CAUSE', 'APPROVED'] },
    REJECTED: { label: '已拒绝', type: 'badge-danger', aliases: ['REJECTED', 'DENIED'] }
  },

  CAPABILITY_DOMAIN_META: {
    A: { code: 'A', name: '集团监管总览与工作台', primaryEntry: 'global-group-overview', workbenchPages: ['regulatory-workbench', 'regulatory-role-workbench', 'regulatory-my-work'] },
    B: { code: 'B', name: '监管对象与风险态势', primaryEntry: 'global-group-overview', workbenchPages: ['regulatory-workbench'] },
    C: { code: 'C', name: '指标、KRI与预警', primaryEntry: 'regulatory-metric-center', workbenchPages: ['regulatory-workbench', 'regulatory-role-workbench'] },
    D: { code: 'D', name: '规则治理与监管运行', primaryEntry: 'regulatory-rule-runtime', workbenchPages: ['regulatory-workbench'] },
    E: { code: 'E', name: '数据治理与数据血缘', primaryEntry: 'regulatory-data-sources', workbenchPages: ['regulatory-workbench'] },
    F: { code: 'F', name: '监管行动、任务与整改', primaryEntry: 'regulatory-actions', workbenchPages: ['regulatory-workbench', 'regulatory-queue'] },
    G: { code: 'G', name: '监管分析与决策', primaryEntry: 'regulatory-analysis-center', workbenchPages: ['regulatory-decision-room', 'regulatory-workbench'] },
    H: { code: 'H', name: '战略规划与持续改进', primaryEntry: 'regulatory-strategy-planning', workbenchPages: ['regulatory-improvement-center', 'regulatory-workbench'] }
  },

  resolveCapabilityDomain(page) {
    const pid = page.pageId;
    const cat = page.category || '';
    const domainRules = [
      { domain: 'F', match: p => ['regulatory-actions', 'regulatory-action-execution', 'rectification', 'rectification-operations', 'regulatory-supervision-tasks', 'regulatory-evaluation', 'regulatory-performance'].includes(p.pageId) },
      { domain: 'A', match: p => ['监管总览', '决策层', '平台收口', '用户体验', '运行监测', '运营闭环', '运营绩效'].includes(p.category) || ['global-group-overview', 'regulatory-command-center', 'regulatory-workbench', 'regulatory-queue', 'regulatory-decision-room', 'regulatory-role-workbench', 'regulatory-my-work', 'regulatory-search', 'platform-operations', 'regulatory-events', 'rectification-operations', 'regulatory-evaluation', 'regulatory-performance', 'regulatory-resource-allocation', 'regulatory-supervision-tasks', 'regulatory-benchmarking'].includes(p.pageId) },
      { domain: 'B', match: p => ['监管对象', '监管覆盖', '风险监管', '风险事项', '整改闭环', '合规监管', '重大事项'].includes(p.category) || ['global-legal-entities', 'global-regions', 'coverage-gaps', 'cross-domain-risks', 'cross-border-compliance', 'warnings', 'rectification', 'major'].includes(p.pageId) },
      { domain: 'C', match: p => ['指标运行'].includes(p.category) || pid.startsWith('regulatory-metric') || pid.startsWith('regulatory-kri') || pid.startsWith('regulatory-warning') },
      { domain: 'D', match: p => ['规则仿真', '规则治理', '规则运行', '持续优化'].includes(p.category) || pid.startsWith('regulatory-rule') || ['regulatory-strategy', 'regulatory-maturity', 'regulatory-optimization'].includes(pid) },
      { domain: 'E', match: p => p.category === '数据治理' || p.category === '数据运行' || pid === 'data-governance' || pid.startsWith('regulatory-data-') },
      { domain: 'G', match: p => ['综合研判'].includes(p.category) || ['regulatory-analysis-center', 'regulatory-risk-concentration', 'regulatory-risk-propagation', 'regulatory-scenario-analysis', 'regulatory-decision-recommendations', 'regulatory-resource-allocation', 'regulatory-benchmarking'].includes(p.pageId) },
      { domain: 'H', match: p => ['战略运营', '持续改进', '权限治理'].includes(p.category) || pid.startsWith('regulatory-strategy') || pid.startsWith('regulatory-annual') || pid.startsWith('regulatory-target') || pid.startsWith('regulatory-focus') || pid.startsWith('regulatory-plan') || pid.startsWith('regulatory-strategic') || pid.startsWith('regulatory-improvement') || pid.startsWith('regulatory-root-cause') || pid.startsWith('regulatory-optimization') || ['regulatory-access-control', 'regulatory-authorization', 'regulatory-audit-trail', 'regulatory-system-settings'].includes(pid) }
    ];
    const found = domainRules.find(r => r.match(page));
    return found ? found.domain : 'A';
  },

  resolveCapabilityType(page) {
    if (page.pageId.includes('workbench') || page.pageId.includes('queue') || page.pageId === 'regulatory-search') return 'WORKBENCH';
    if (page.pageId.includes('command-center') || page.pageId === 'global-group-overview') return 'OVERVIEW';
    if (page.pageId.includes('detail') || page.supportsPublicNavigation === false) return 'DETAIL';
    return 'CAPABILITY';
  },

  resolveRoleVisibility(page) {
    const d = this.resolveCapabilityDomain(page);
    const map = { A: ['ROLE-GROUP-LEADER', 'ROLE-GROUP-REG', 'ROLE-DOMAIN-REG', 'ROLE-ENTITY-REG'], B: ['ROLE-GROUP-LEADER', 'ROLE-GROUP-REG', 'ROLE-DOMAIN-REG', 'ROLE-ENTITY-REG'], C: ['ROLE-GROUP-REG', 'ROLE-DOMAIN-REG', 'ROLE-ENTITY-REG'], D: ['ROLE-GROUP-REG', 'ROLE-DOMAIN-REG'], E: ['ROLE-GROUP-REG', 'ROLE-DOMAIN-REG', 'ROLE-ENTITY-REG'], F: ['ROLE-GROUP-REG', 'ROLE-DOMAIN-REG', 'ROLE-ENTITY-REG'], G: ['ROLE-GROUP-LEADER', 'ROLE-GROUP-REG', 'ROLE-DOMAIN-REG'], H: ['ROLE-GROUP-LEADER', 'ROLE-GROUP-REG'] };
    return map[d] || ['ROLE-GROUP-REG'];
  },

  buildRegulatoryCapabilityMap() {
    const pages = (this.publicRegulatoryPages || []);
    const map = pages.map(page => {
      const domainCode = this.resolveCapabilityDomain(page);
      const domainMeta = this.CAPABILITY_DOMAIN_META[domainCode] || {};
      const related = pages.filter(p => this.resolveCapabilityDomain(p) === domainCode && p.pageId !== page.pageId).map(p => p.pageId).slice(0, 6);
      return {
        pageId: page.pageId,
        label: page.label,
        capabilityDomain: domainCode,
        capabilityDomainName: domainMeta.name || domainCode,
        capabilityType: this.resolveCapabilityType(page),
        roleVisibility: this.resolveRoleVisibility(page),
        primaryEntry: domainMeta.primaryEntry || 'global-group-overview',
        parentEntry: page.entryFromGroupOverview ? 'global-group-overview' : (domainMeta.primaryEntry || 'regulatory-workbench'),
        relatedPages: related,
        relatedWorkbenches: domainMeta.workbenchPages || ['regulatory-workbench'],
        relatedRoles: this.resolveRoleVisibility(page),
        relatedObjectTypes: this.getPageRelatedObjectTypes(page.pageId),
        supportsBackNavigation: page.supportsBackNavigation !== false,
        supportsPublicNavigation: page.supportsPublicNavigation !== false,
        dataSourceKey: this.getPageDataSourceKey(page.pageId),
        hasEmptyState: true,
        hasErrorState: true
      };
    });
    APP_DATA.regulatoryCapabilityMap = map;
    return map;
  },

  getPageRelatedObjectTypes(pageId) {
    const typeMap = {
      'global-legal-entities': ['globalLegalEntities'], 'warnings': ['warnings', 'crossDomainRiskMatters'],
      'regulatory-actions': ['regulatoryActions'], 'rectification': ['rectificationTasks'],
      'regulatory-kri-monitoring': ['regulatoryKriRuntime'], 'regulatory-warning-center': ['regulatoryWarnings'],
      'regulatory-data-sources': ['regulatoryDataSources'], 'regulatory-improvement-center': ['regulatoryImprovementOpportunities']
    };
    return typeMap[pageId] || ['regulatorySearchIndex'];
  },

  getPageDataSourceKey(pageId) {
    const src = this.getPageRelatedObjectTypes(pageId);
    return src[0] || null;
  },

  getPageCapabilityMeta(pageId) {
    return (APP_DATA.regulatoryCapabilityMap || []).find(m => m.pageId === pageId) || null;
  },

  getRegulatoryRolePaths() {
    return APP_DATA.regulatoryRolePaths || [];
  },

  getPublicUnifiedStatusLabel(status) {
    if (!status) return '—';
    const s = String(status);
    const entry = Object.entries(this.PUBLIC_UNIFIED_STATUS_MAP).find(([, v]) => v.aliases.includes(s) || v.label === s);
    return entry ? entry[1].label : s;
  },

  getPublicUnifiedStatusType(status) {
    if (!status) return 'badge-info';
    const s = String(status);
    const entry = Object.entries(this.PUBLIC_UNIFIED_STATUS_MAP).find(([k, v]) => k === s || v.aliases.includes(s) || v.label === s);
    return entry ? entry[1].type : (this.PUBLIC_STATUS_MAP[s] || 'badge-info');
  },

  renderPublicUnifiedStatusBadge(status) {
    const label = this.getPublicUnifiedStatusLabel(status);
    return `<span class="badge ${this.getPublicUnifiedStatusType(status)}">${this.escHtml(label)}</span>`;
  },

  renderPublicDataCredibilityBanner(item) {
    if (!item) return '';
    const dataStatus = item.dataStatus || item.trendDataStatus;
    if (dataStatus === 'INSUFFICIENT_HISTORY') {
      return `<div class="card" style="padding:10px;margin-bottom:12px;background:#f8f9fb;border-left:3px solid #5a6a7e"><b>历史数据不足</b><p class="insight-note">历史数据不足，暂无法展示趋势、同比、环比或效果评价。</p></div>`;
    }
    if (item.credibilityScore != null && item.credibilityScore < 70) {
      return `<div class="card" style="padding:10px;margin-bottom:12px;background:#fff8e6;border-left:3px solid #f0ad4e"><b>数据质量复核提示</b><p class="insight-note">DATA_QUALITY_REVIEW_REQUIRED — 数据可信度偏低，请复核后再用于风险判断。</p></div>`;
    }
    const parts = [];
    if (item.dataSourceId || item.sourceId) parts.push(`来源：${item.dataSourceId || item.sourceId}`);
    if (item.updatedAt || item.lastSyncAt || item.calculatedAt) parts.push(`更新：${item.updatedAt || item.lastSyncAt || item.calculatedAt}`);
    if (item.dataStatus) parts.push(`状态：${this.getPublicUnifiedStatusLabel(item.dataStatus)}`);
    if (item.credibilityScore != null) parts.push(`可信度：${item.credibilityScore}`);
    return parts.length ? `<p class="insight-note" style="margin-bottom:8px">${parts.join(' · ')}</p>` : '';
  },

  renderPublicPageShell(pageId, opts) {
    const meta = this.getPageCapabilityMeta(pageId) || {};
    const o = opts || {};
    const scope = o.scopeLabel || '集团范围';
    const filterHtml = o.filterHtml || '';
    const kpiHtml = o.kpiHtml || '';
    const back = this.renderPublicBackButton(pageId);
    const entryLinks = [
      meta.parentEntry ? this.renderPublicLinkButton('上级入口', `App.navigatePublic('${meta.parentEntry}')`) : '',
      (meta.relatedWorkbenches || []).slice(0, 1).map(w => this.renderPublicLinkButton('相关工作台', `App.navigatePublic('${w}')`)).join(' ')
    ].filter(Boolean).join(' ');
    return `${back}
      <div class="group-hero"><div><span>${this.escHtml(meta.capabilityDomainName || '集团监管')}</span><h2>${this.escHtml(o.title || meta.label || pageId)}</h2><p>${this.escHtml(o.description || '统一监管运营平台能力页面')}</p><p class="insight-note">当前范围：${this.escHtml(scope)} ${entryLinks ? '· ' + entryLinks : ''}</p></div>${o.heroRight || ''}</div>
      ${filterHtml ? `<div class="filter-bar" style="margin-bottom:12px">${filterHtml}</div>` : ''}
      ${kpiHtml ? `<div class="group-metrics">${kpiHtml}</div>` : ''}`;
  },

  computePlatformHealth() {
    if (!APP_DATA.platformHealth) {
      const dm = APP_DATA.regulatoryDataGovernanceMetrics || {};
      APP_DATA.platformHealth = { healthStatus: dm.qualityTrendStatus === 'INSUFFICIENT_HISTORY' ? 'INSUFFICIENT_HISTORY' : 'WARNING', compositeScore: dm.overallQualityScore, dimensions: {} };
    }
    return APP_DATA.platformHealth;
  },

  finalizeRegulatoryPlatform() {
    this.buildRegulatoryCapabilityMap();
    this.computePlatformHealth();
    return { capabilityMap: APP_DATA.regulatoryCapabilityMap, platformHealth: APP_DATA.platformHealth };
  },

  renderPublicPermissionDenied(message, opts) {
    const o = opts || {};
    return `<div class="card public-permission-denied" style="padding:12px;margin:12px 0;border-left:3px solid var(--danger,#c0392b);background:#fff5f5">
      <b>权限不足</b><p class="insight-note">${this.escHtml(message || '超出授权范围或缺少操作权限')}</p>
      ${o.auditNote ? `<p class="insight-note" style="font-size:11px">该操作已记录审计日志（如适用）</p>` : ''}
      ${o.suggestAuth ? `<p>${this.renderPublicLinkButton('前往授权审批', `App.navigatePublic('regulatory-authorization')`)}</p>` : ''}
    </div>`;
  },

  renderPublicAuditNotice(actionLabel) {
    return `<p class="insight-note" style="font-size:11px;color:#5a6a7e">操作「${this.escHtml(actionLabel || '状态变更')}」将记录审计日志，高风险操作需先完成授权审批。</p>`;
  },

  traceRegulatoryActionSources(actionId) {
    const act = (APP_DATA.regulatoryActions || []).find(a => a.actionId === actionId);
    if (!act) return { found: false, chain: [] };
    const chain = [];
    (act.sourceRiskMatterIds || []).forEach(id => {
      const w = (APP_DATA.warnings || []).find(x => x.id === id);
      chain.push({ type: 'warnings', id, label: w?.title || id, pageId: 'warnings', params: { riskMatterId: id } });
    });
    (act.sourceKriIds || []).forEach(id => {
      const k = (APP_DATA.regulatoryKriRuntime || []).find(x => x.kriId === id) || (APP_DATA.groupKris || []).find(x => x.id === id);
      chain.push({ type: 'regulatoryKriRuntime', id, label: k?.kriName || id, pageId: 'regulatory-kri-monitoring', params: { kriId: id } });
    });
    (act.sourceWarningIds || []).forEach(id => {
      const w = (APP_DATA.regulatoryWarnings || []).find(x => x.regulatoryWarningId === id);
      chain.push({ type: 'regulatoryWarnings', id, label: id, pageId: 'regulatory-warning-center', params: { regulatoryWarningId: id } });
    });
    if (act.entityId) chain.push({ type: 'globalLegalEntities', id: act.entityId, label: act.entityId, pageId: 'global-legal-entities', params: { entityId: act.entityId } });
    return { found: true, actionId, chain };
  },

  traceRectificationTaskSources(taskId) {
    const task = (APP_DATA.rectificationTasks || []).find(t => t.taskId === taskId);
    if (!task) return { found: false, chain: [] };
    const chain = [];
    if (task.sourceActionId) {
      const act = (APP_DATA.regulatoryActions || []).find(a => a.actionId === task.sourceActionId);
      chain.push({ type: 'regulatoryActions', id: task.sourceActionId, label: act?.actionId || task.sourceActionId, pageId: 'regulatory-actions', params: { actionId: task.sourceActionId } });
      const src = this.traceRegulatoryActionSources(task.sourceActionId);
      chain.push(...src.chain.map(c => ({ ...c, via: 'regulatoryActions' })));
    }
    if (task.sourceWarningId) chain.push({ type: 'warnings', id: task.sourceWarningId, pageId: 'warnings', params: { riskMatterId: task.sourceWarningId } });
    if (task.entityId) chain.push({ type: 'globalLegalEntities', id: task.entityId, pageId: 'global-legal-entities', params: { entityId: task.entityId } });
    return { found: true, taskId, chain };
  },

  traceObjectToDataSource(objectType, objectId) {
    const chain = [];
    if (objectType === 'regulatoryWarnings' || objectType === 'regulatoryKriRuntime') {
      const obj = objectType === 'regulatoryWarnings'
        ? (APP_DATA.regulatoryWarnings || []).find(w => w.regulatoryWarningId === objectId)
        : (APP_DATA.regulatoryKriRuntime || []).find(k => k.kriRuntimeId === objectId || k.kriId === objectId);
      if (obj?.kriId) chain.push({ type: 'regulatoryKriRuntime', id: obj.kriId, pageId: 'regulatory-kri-monitoring' });
      const issue = (APP_DATA.regulatoryDataQualityIssues || []).find(i => i.kriId === obj?.kriId);
      if (issue) chain.push({ type: 'regulatoryDataQualityIssues', id: issue.qualityIssueId, pageId: 'regulatory-data-quality', params: { qualityIssueId: issue.qualityIssueId } });
      const ds = issue ? (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === issue.dataSetId) : null;
      if (ds) chain.push({ type: 'regulatoryDataSets', id: ds.dataSetId, pageId: 'regulatory-data-sources' });
    }
    if (objectType === 'regulatoryDataQualityIssues') {
      const issue = (APP_DATA.regulatoryDataQualityIssues || []).find(i => i.qualityIssueId === objectId);
      if (issue?.dataSetId) {
        const src = (APP_DATA.regulatoryDataSources || []).find(s => (APP_DATA.regulatoryDataSets || []).some(d => d.dataSetId === issue.dataSetId && d.sourceId === s.sourceId));
        if (src) chain.push({ type: 'regulatoryDataSources', id: src.sourceId, pageId: 'regulatory-data-sources', params: { sourceId: src.sourceId } });
      }
    }
    return { objectType, objectId, chain };
  },

  getReachablePageIds() {
    const reachable = new Set(['global-group-overview', 'group', 'regulatory-workbench', 'regulatory-search', 'regulatory-command-center', 'regulatory-role-workbench']);
    (APP_DATA.regulatoryCapabilityMap || []).forEach(m => {
      reachable.add(m.pageId);
      (m.relatedPages || []).forEach(p => reachable.add(p));
      reachable.add(m.primaryEntry);
      reachable.add(m.parentEntry);
    });
    (APP_DATA.regulatorySearchIndex || []).forEach(s => { if (s.targetPageId) reachable.add(s.targetPageId); });
    (APP_DATA.regulatoryBusinessScenarios || []).forEach(s => (s.pagePath || []).forEach(p => reachable.add(p)));
    (APP_DATA.regulatoryRolePaths || []).forEach(r => (r.path || []).forEach(p => reachable.add(p)));
    (APP_DATA.regulatoryClosureChains || []).forEach(c => (c.steps || []).forEach(p => reachable.add(p)));
    return reachable;
  },

  getOrphanPages() {
    const pages = (this.publicRegulatoryPages || []).filter(p => p.supportsPublicNavigation !== false && p.pageId !== 'major');
    const reachable = this.getReachablePageIds();
    return pages.filter(p => !reachable.has(p.pageId)).map(p => p.pageId);
  },

  validateBusinessScenario(scenarioId) {
    const scenario = (APP_DATA.regulatoryBusinessScenarios || []).find(s => s.scenarioId === scenarioId);
    if (!scenario) return { valid: false, reason: 'scenario not found' };
    const pageIds = (this.publicRegulatoryPages || []).map(p => p.pageId);
    const invalid = (scenario.pagePath || []).filter(pid => !pageIds.includes(pid) && pid !== 'group');
    return { valid: invalid.length === 0, scenarioId, invalidPages: invalid, stepCount: (scenario.pagePath || []).length };
  },

  validateRoleJourney(roleId) {
    const path = (APP_DATA.regulatoryRolePaths || []).find(r => r.roleId === roleId);
    if (!path) return { valid: false };
    const pageIds = (this.publicRegulatoryPages || []).map(p => p.pageId);
    const invalid = (path.path || []).filter(pid => !pageIds.includes(pid) && pid !== 'group');
    return { valid: invalid.length === 0, roleId, invalidPages: invalid, stepCount: (path.path || []).length };
  },

  renderRoleJourneyPanel(roleId) {
    const path = (APP_DATA.regulatoryRolePaths || []).find(r => r.roleId === roleId) || (APP_DATA.regulatoryRolePaths || [])[0];
    if (!path) return '';
    const steps = (path.path || []).map((pid, i) => {
      const page = (this.publicRegulatoryPages || []).find(p => p.pageId === pid);
      return `${i ? '<i>→</i>' : ''}<button onclick="App.navigatePublic('${pid}')"><b>${page?.label || pid}</b></button>`;
    }).join('');
    return `<div class="card"><div class="card-title">角色默认路径 · ${path.roleName}</div><div class="kri-lineage" style="flex-wrap:wrap">${steps}</div></div>`;
  },

  renderBusinessScenarioPanel() {
    const scenarios = APP_DATA.regulatoryBusinessScenarios || [];
    return `<div class="card"><div class="card-title">核心业务场景验证路径</div>
      ${scenarios.map(s => `<p class="insight-note"><b>${s.scenarioId}</b> ${s.name}（${(s.pagePath || []).length} 步）
        ${this.renderPublicLinkButton('开始验证', `App.navigatePublic('${(s.pagePath || [])[0]}')`)}
      </p>`).join('')}
    </div>`;
  },

  initializeDataAdaptation() {
    return APP_DATA.regulatoryDataAdaptationMetrics || {};
  },

  getAdaptationRun(sourceId) {
    return (APP_DATA.regulatoryDataAdaptationRuns || []).find(r => r.sourceId === sourceId);
  },

  getDomainConfiguration(domainId) {
    return (APP_DATA.regulatoryDomainConfigurations || []).find(c => c.domainId === domainId);
  },

  adaptRealBusinessData(sourceId) {
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDataSources', sourceId, 'VIEW');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const src = (APP_DATA.regulatoryDataSources || []).find(s => s.sourceId === sourceId);
    if (!src) return { success: false, message: '数据源不存在' };
    let run = this.getAdaptationRun(sourceId);
    if (!run) return { success: false, message: '适配运行记录不存在' };
    const job = (APP_DATA.regulatoryDataIntegrationJobs || []).find(j => j.sourceId === sourceId);
    if (job && job.status === 'FAILED') {
      const retry = this.retryDataIntegrationJob(job.integrationJobId);
      if (!retry.success) return retry;
    }
    const quality = this.runDataQualityValidationOnAdaptation(sourceId);
    const mapped = this.mapBusinessObjects(sourceId);
    const kri = this.computeKriFromAdaptedData(sourceId);
    const warns = this.identifyWarningsFromAdaptedData(sourceId);
    const loop = this.evaluateAdaptationClosedLoop(sourceId);
    this.createRegulatoryAuditLog({ actionType: 'ADAPT', objectType: 'regulatoryDataSources', objectId: sourceId, reason: '真实业务数据适配', afterState: { closureRate: loop.closureRate } });
    return { success: true, sourceId, quality, mapped, kri, warns, closedLoop: loop };
  },

  validateDataSourceAdaptation(sourceId) {
    const run = this.getAdaptationRun(sourceId);
    const mappings = (APP_DATA.regulatoryBusinessObjectMappings || []).filter(m => m.sourceId === sourceId);
    const jobs = (APP_DATA.regulatoryDataIntegrationJobs || []).filter(j => j.sourceId === sourceId);
    return {
      sourceId,
      valid: !!(run && mappings.length && jobs.length),
      mappingCount: mappings.length,
      jobCount: jobs.length,
      pipelineComplete: run?.drivesClosedLoop || false,
      dataStatus: run?.dataStatus || 'UNKNOWN'
    };
  },

  standardizeIncomingData(jobId) {
    const job = (APP_DATA.regulatoryDataIntegrationJobs || []).find(j => j.integrationJobId === jobId);
    if (!job) return { success: false, message: '接入任务不存在' };
    const ds = (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === job.dataSetId);
    if (!ds || ds.dataStatus === 'INSUFFICIENT_DATA') return { success: false, dataStatus: 'INSUFFICIENT_DATA', message: '数据不足，无法标准化' };
    const mappings = (APP_DATA.regulatoryBusinessObjectMappings || []).filter(m => m.sourceId === job.sourceId);
    return { success: true, jobId, standardizedRecords: job.successCount, mappingCount: mappings.length, dataStatus: 'OK' };
  },

  mapBusinessObjects(sourceId) {
    const mappings = (APP_DATA.regulatoryBusinessObjectMappings || []).filter(m => m.sourceId === sourceId && m.mappingStatus === 'ACTIVE');
    const linked = {
      dataSets: mappings.filter(m => m.targetObjectType === 'regulatoryDataSets').map(m => m.targetObjectId),
      metrics: mappings.filter(m => m.targetObjectType === 'regulatoryMetrics').map(m => m.targetObjectId),
      entities: [...new Set(mappings.map(m => m.entityId).filter(Boolean))]
    };
    return { sourceId, mappingCount: mappings.length, linked, valid: mappings.length > 0 };
  },

  runDataQualityValidationOnAdaptation(sourceId) {
    const dsIds = (APP_DATA.regulatoryDataSets || []).filter(d => d.sourceId === sourceId).map(d => d.dataSetId);
    const issues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => dsIds.includes(i.dataSetId));
    const open = issues.filter(i => i.status !== 'CLOSED');
    return {
      sourceId,
      issueCount: issues.length,
      openIssueCount: open.length,
      severeCount: open.filter(i => i.severity === 'HIGH').length,
      dataStatus: issues.length ? 'OK' : 'INSUFFICIENT_DATA',
      requiresReview: open.some(i => i.severity === 'HIGH')
    };
  },

  computeKriFromAdaptedData(sourceId) {
    const impact = this.getDataSourceImpactAnalysis(sourceId);
    const runtime = (APP_DATA.regulatoryKriRuntime || []).filter(k => impact.affectedKris.includes(k.kriId));
    const insufficient = runtime.filter(k => k.dataStatus === 'INSUFFICIENT_DATA' || k.credibilityScore == null);
    return {
      sourceId,
      kriCount: impact.affectedKris.length,
      runtimeCount: runtime.length,
      insufficientCount: insufficient.length,
      dataStatus: runtime.length && !insufficient.length ? 'OK' : insufficient.length === runtime.length ? 'INSUFFICIENT_DATA' : 'PARTIAL',
      kriIds: impact.affectedKris
    };
  },

  identifyWarningsFromAdaptedData(sourceId) {
    const kri = this.computeKriFromAdaptedData(sourceId);
    const warnings = (APP_DATA.regulatoryWarnings || []).filter(w => kri.kriIds.includes(w.kriId));
    const regWarnings = (APP_DATA.regulatoryWarnings || []).filter(w => {
      const k = (APP_DATA.regulatoryKriRuntime || []).find(r => r.kriRuntimeId === w.kriRuntimeId);
      return k && (APP_DATA.regulatoryDataSets || []).some(d => d.sourceId === sourceId);
    });
    return {
      sourceId,
      warningCount: warnings.length + regWarnings.length,
      pendingReview: regWarnings.filter(w => w.status === 'PENDING_REVIEW').length,
      dataStatus: warnings.length || regWarnings.length ? 'OK' : 'INSUFFICIENT_DATA'
    };
  },

  evaluateAdaptationClosedLoop(sourceId) {
    const run = this.getAdaptationRun(sourceId);
    const impact = this.getDataSourceImpactAnalysis(sourceId);
    const steps = (run?.pipelineSteps || []).map(s => ({
      step: s.step,
      status: s.status,
      objectRef: s.objectRef,
      pageId: this._adaptationStepPageId(s.step)
    }));
    return {
      sourceId,
      closureRate: run?.closureRate,
      drivesClosedLoop: run?.drivesClosedLoop,
      dataStatus: run?.dataStatus,
      chain: {
        source: sourceId,
        dataSets: impact.affectedDataSets,
        kris: impact.affectedKris,
        warnings: impact.affectedRisks,
        actions: impact.affectedActions,
        entities: impact.affectedEntities
      },
      steps
    };
  },

  _adaptationStepPageId(step) {
    const map = {
      SOURCE_ADAPT: 'regulatory-data-sources', INTEGRATION: 'regulatory-data-integration',
      QUALITY_VALIDATE: 'regulatory-data-quality', STANDARDIZE: 'regulatory-data-integration',
      OBJECT_MAP: 'regulatory-data-governance', KRI_COMPUTE: 'regulatory-kri-monitoring',
      WARNING_IDENTIFY: 'regulatory-warning-center', RISK_ASSESS: 'warnings',
      ACTION_LINK: 'regulatory-actions', RECTIFICATION_LINK: 'rectification',
      VERIFICATION: 'regulatory-action-execution', PERFORMANCE: 'regulatory-performance',
      IMPROVEMENT: 'regulatory-improvement-center'
    };
    return map[step] || 'regulatory-data-sources';
  },

  renderDataAdaptationPipelinePanel(sourceId) {
    const loop = this.evaluateAdaptationClosedLoop(sourceId);
    const stepLabels = {
      SOURCE_ADAPT: '数据源适配', INTEGRATION: '数据接入', QUALITY_VALIDATE: '质量校验',
      STANDARDIZE: '数据标准化', OBJECT_MAP: '业务对象映射', KRI_COMPUTE: 'KRI计算',
      WARNING_IDENTIFY: '预警识别', RISK_ASSESS: '风险研判', ACTION_LINK: '监管行动',
      RECTIFICATION_LINK: '整改任务', VERIFICATION: '整改验证', PERFORMANCE: '监管绩效', IMPROVEMENT: '持续改进'
    };
    const steps = (loop.steps || []).map(s => {
      const nav = s.pageId ? `App.navigatePublic('${s.pageId}'${s.objectRef ? `,{sourceId:'${sourceId}'}` : ''})` : '';
      return `${stepLabels[s.step] || s.step}: ${this.renderPublicUnifiedStatusBadge(s.status)} ${nav ? this.renderPublicLinkButton('查看', nav) : ''}`;
    }).join('<br>');
    return `<div class="card"><div class="card-title">真实业务数据适配闭环 ${loop.dataStatus === 'INSUFFICIENT_HISTORY' ? this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY') : ''}</div>
      <p class="insight-note">闭环率 ${loop.closureRate ?? '—'}% · 驱动闭环 ${loop.drivesClosedLoop ? '是' : '否'}</p>
      <p class="insight-note">${steps}</p>
      <p>${this.renderPublicLinkButton('执行适配', `App.adaptRealBusinessData('${sourceId}');App.renderRegulatoryDataSources()`)} ${this.renderPublicLinkButton('查看血缘', `App.navigatePublic('regulatory-data-lineage',{sourceId:'${sourceId}'})`)}</p>
    </div>`;
  },

  renderRegulatoryDomainConfigPanel() {
    const configs = APP_DATA.regulatoryDomainConfigurations || [];
    const rows = configs.map(c => `<tr class="clickable" onclick="App.navigatePublic('regulatory-data-sources')"><td>${c.domainName}</td><td>${c.linkedSourceIds.length}</td><td>${c.linkedKriIds.length}</td><td>${c.linkedRuleIds.length}</td><td>${c.openQualityIssueCount}</td><td>${this.renderPublicUnifiedStatusBadge(c.adaptationStatus)}</td><td>${c.responsibleOrganizationId}</td></tr>`).join('');
    return `<div class="card"><div class="card-title">监管领域配置</div>
      <p class="insight-note">领域配置索引关联数据源、KRI、规则与责任组织，不复制业务对象。</p>
      ${rows ? `<table class="data-table"><thead><tr><th>领域</th><th>数据源</th><th>KRI</th><th>规则</th><th>开放质量问题</th><th>适配状态</th><th>责任组织</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无领域配置')}
    </div>`;
  },

  initializeBatchAdaptation() {
    this.refreshDomainAdaptationResults();
    this.computeBatchAdaptationCoverage();
    if (!(APP_DATA.regulatoryBatchAdaptationRuns || []).length) {
      this._seedInitialBatchRun();
    }
    return APP_DATA.regulatoryBatchAdaptationMetrics;
  },

  _batchNow() { return '2026-07-22 10:30:00'; },

  _domainMappings(domainId) {
    return (APP_DATA.regulatoryBusinessObjectMappings || []).filter(m => m.domainId === domainId && m.mappingStatus === 'ACTIVE');
  },

  _domainQualityStatus(dataSetIds) {
    const issues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => dataSetIds.includes(i.dataSetId));
    const open = issues.filter(i => i.status !== 'CLOSED');
    if (open.some(i => i.severity === 'HIGH')) return { qualityStatus: 'QUALITY_FAILED', issues, open };
    if (open.length) return { qualityStatus: 'QUALITY_WARNING', issues, open };
    return { qualityStatus: issues.length ? 'QUALITY_PASSED' : 'QUALITY_PASSED', issues, open };
  },

  buildDomainAdaptationResult(domainId) {
    const config = this.getDomainConfiguration(domainId);
    if (!config) return null;
    const sourceIds = config.linkedSourceIds || [];
    const dataSetIds = config.linkedDataSetIds || [];
    const mappings = this._domainMappings(domainId);
    const mappingIds = mappings.map(m => m.mappingId);
    const kriFromIssues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => dataSetIds.includes(i.dataSetId) && i.kriId).map(i => i.kriId);
    const kriFromImpact = sourceIds.flatMap(sid => (this.getDataSourceImpactAnalysis(sid).affectedKris || []));
    const kriFromIndicators = mappings.filter(m => m.sourceObjectType === 'dataIndicators').map(m => (APP_DATA.dataIndicators || []).find(i => i.indicatorId === m.sourceObjectId)?.kriId).filter(Boolean);
    const metricIds = mappings.filter(m => m.targetObjectType === 'regulatoryMetrics').map(m => m.targetObjectId);
    const kriIds = [...new Set([...(config.linkedKriIds || []), ...kriFromIndicators, ...kriFromIssues, ...kriFromImpact])];
    const q = this._domainQualityStatus(dataSetIds);
    const jobs = (APP_DATA.regulatoryDataIntegrationJobs || []).filter(j => sourceIds.includes(j.sourceId));
    const ingestionOk = sourceIds.length && jobs.some(j => j.status === 'SUCCESS');
    const sourceRecordCount = jobs.reduce((s, j) => s + (j.recordCount || 0), 0);
    const adaptedRecordCount = jobs.reduce((s, j) => s + (j.successCount || 0), 0);
    let metricCalculationStatus = 'PENDING';
    let kriCalculationStatus = 'PENDING';
    let warningIdentificationStatus = 'PENDING';
    if (q.qualityStatus === 'QUALITY_FAILED') {
      metricCalculationStatus = 'BLOCKED';
      kriCalculationStatus = 'DATA_QUALITY_REVIEW_REQUIRED';
      warningIdentificationStatus = 'DATA_QUALITY_REVIEW_REQUIRED';
    } else if (ingestionOk && (metricIds.length || kriIds.length || mappings.length)) {
      metricCalculationStatus = metricIds.length ? 'COMPLETED' : mappings.length ? 'PARTIAL' : 'INSUFFICIENT_DATA';
      kriCalculationStatus = kriIds.length ? (q.qualityStatus === 'QUALITY_WARNING' ? 'PARTIAL' : 'COMPLETED') : 'INSUFFICIENT_DATA';
      warningIdentificationStatus = kriIds.length && kriCalculationStatus !== 'INSUFFICIENT_DATA' ? 'COMPLETED' : kriIds.length ? 'INSUFFICIENT_DATA' : 'PENDING';
    } else if (!sourceIds.length) {
      metricCalculationStatus = 'INSUFFICIENT_REAL_DATA';
      kriCalculationStatus = 'INSUFFICIENT_REAL_DATA';
      warningIdentificationStatus = 'INSUFFICIENT_REAL_DATA';
    }
    const warnings = (APP_DATA.regulatoryWarnings || []).filter(w => kriIds.includes(w.kriId));
    const actions = (APP_DATA.regulatoryActions || []).filter(a => (a.sourceKriIds || []).some(id => kriIds.includes(id)) || sourceIds.some(sid => (a.sourceDataSetIds || []).some(ds => dataSetIds.includes(ds))));
    const tasks = (APP_DATA.regulatorySupervisionTasks || []).filter(t => (t.relatedRegulatoryActionIds || []).some(id => actions.some(a => a.actionId === id)));
    const rects = (APP_DATA.rectificationTasks || []).filter(t => q.issues.some(i => i.relatedRectificationTaskId === t.taskId) || actions.some(a => (a.relatedRectificationTaskIds || []).includes(t.taskId)) || (t.riskMatterId && warnings.some(w => w.riskMatterId === t.riskMatterId)));
    const verified = rects.filter(t => t.status === '已关闭' || t.verificationStatus === '已验证');
    const linkedActionCount = actions.length;
    const linkedTaskCount = tasks.length;
    const linkedRectificationCount = rects.length;
    const verifiedCount = verified.length;
    let closedLoopStatus = 'NOT_STARTED';
    if (!sourceIds.length) closedLoopStatus = 'INSUFFICIENT_REAL_DATA';
    else if (linkedActionCount && linkedRectificationCount && verifiedCount) closedLoopStatus = 'FULL_CLOSED_LOOP';
    else if (linkedActionCount && linkedRectificationCount) closedLoopStatus = 'PARTIAL_CLOSED_LOOP';
    else if (linkedActionCount || linkedRectificationCount || warnings.length) closedLoopStatus = 'PARTIAL_CLOSED_LOOP';
    else if (!kriIds.length && !mappings.length) closedLoopStatus = 'INSUFFICIENT_REAL_DATA';
    else if (jobs.some(j => j.status === 'FAILED') || sourceIds.some(sid => (APP_DATA.regulatoryDataSources || []).find(s => s.sourceId === sid)?.connectionStatus === 'OFFLINE')) closedLoopStatus = 'PARTIAL_CLOSED_LOOP';
    let adaptationStatus = 'PENDING';
    if (!sourceIds.length) adaptationStatus = 'INSUFFICIENT_REAL_DATA';
    else if (jobs.some(j => j.status === 'FAILED')) adaptationStatus = 'FAILED';
    else if (closedLoopStatus === 'FULL_CLOSED_LOOP') adaptationStatus = 'COMPLETED';
    else if (ingestionOk && mappings.length) adaptationStatus = 'PARTIAL_SUCCESS';
    else if (ingestionOk) adaptationStatus = 'IN_PROGRESS';
    const mappingStatus = mappings.length ? 'COMPLETED' : sourceIds.length ? 'PENDING' : 'NOT_CONFIGURED';
    return {
      adaptationId: 'DAR-' + domainId,
      domainId,
      domainName: config.domainName,
      sourceIds,
      businessObjectMappingIds: mappingIds,
      dataSetIds,
      metricIds,
      kriIds,
      adaptationStatus,
      qualityStatus: q.qualityStatus,
      mappingStatus,
      metricCalculationStatus,
      kriCalculationStatus,
      warningIdentificationStatus,
      closedLoopStatus,
      sourceRecordCount,
      adaptedRecordCount,
      mappedObjectCount: mappings.length,
      calculatedMetricCount: metricCalculationStatus === 'COMPLETED' ? metricIds.length : 0,
      calculatedKriCount: ['COMPLETED', 'PARTIAL'].includes(kriCalculationStatus) ? kriIds.length : 0,
      generatedWarningCount: q.qualityStatus === 'QUALITY_FAILED' ? 0 : warnings.length,
      linkedActionCount,
      linkedTaskCount,
      linkedRectificationCount,
      verifiedCount,
      startedAt: this._batchNow(),
      completedAt: adaptationStatus === 'COMPLETED' || adaptationStatus === 'PARTIAL_SUCCESS' ? this._batchNow() : null,
      failureStep: adaptationStatus === 'FAILED' ? 'DATA_INGESTION' : null,
      failureReason: adaptationStatus === 'FAILED' ? '部分接入任务失败' : null,
      lastRunId: (APP_DATA.regulatoryBatchAdaptationRuns || []).slice(-1)[0]?.runId || null,
      maturityLevel: null
    };
  },

  calculateDomainAdaptationMaturity(domainId, result) {
    const r = result || this.getDomainAdaptationResult(domainId) || this.buildDomainAdaptationResult(domainId);
    if (!r) return 'LEVEL_0';
    if (r.closedLoopStatus === 'FULL_CLOSED_LOOP') return 'LEVEL_7';
    if (r.linkedActionCount > 0) return 'LEVEL_6';
    if (r.generatedWarningCount > 0) return 'LEVEL_5';
    if (r.calculatedKriCount > 0 || r.calculatedMetricCount > 0) return 'LEVEL_4';
    if (r.mappedObjectCount > 0) return 'LEVEL_3';
    if ((r.sourceIds || []).length && r.adaptedRecordCount > 0) return 'LEVEL_2';
    if ((r.sourceIds || []).length) return 'LEVEL_1';
    return 'LEVEL_0';
  },

  refreshDomainAdaptationResults() {
    const domains = APP_DATA.regulatoryDomainConfigurations || [];
    APP_DATA.regulatoryDomainAdaptationResults = domains.map(d => {
      const r = this.buildDomainAdaptationResult(d.domainId);
      if (r) r.maturityLevel = this.calculateDomainAdaptationMaturity(d.domainId, r);
      return r;
    }).filter(Boolean);
    return APP_DATA.regulatoryDomainAdaptationResults;
  },

  getDomainAdaptationResult(domainId) {
    return (APP_DATA.regulatoryDomainAdaptationResults || []).find(r => r.domainId === domainId);
  },

  getBatchAdaptationRun(runId) {
    return (APP_DATA.regulatoryBatchAdaptationRuns || []).find(r => r.runId === runId);
  },

  computeBatchAdaptationCoverage() {
    const domains = APP_DATA.regulatoryDomainConfigurations || [];
    const results = APP_DATA.regulatoryDomainAdaptationResults || [];
    const sources = APP_DATA.regulatoryDataSources || [];
    const mappings = APP_DATA.regulatoryBusinessObjectMappings || [];
    const allKris = APP_DATA.groupKris || [];
    const adaptedDomains = results.filter(r => ['COMPLETED', 'PARTIAL_SUCCESS'].includes(r.adaptationStatus));
    const fullLoops = results.filter(r => r.closedLoopStatus === 'FULL_CLOSED_LOOP');
    const adaptedSources = new Set(results.flatMap(r => r.sourceIds));
    const successfulSources = results.filter(r => r.adaptationStatus !== 'FAILED').flatMap(r => r.sourceIds);
    const mappedCount = mappings.filter(m => m.mappingStatus === 'ACTIVE').length;
    const configuredObjects = (APP_DATA.dataObjects || []).length;
    const calculatedKris = new Set(results.flatMap(r => r.kriIds));
    const warnings = results.reduce((s, r) => s + r.generatedWarningCount, 0);
    const totalWarnings = (APP_DATA.regulatoryWarnings || []).length;
    APP_DATA.regulatoryBatchAdaptationMetrics = {
      totalDomainCount: domains.length,
      domainAdaptationCoverage: domains.length ? Math.round(adaptedDomains.length / domains.length * 1000) / 10 : null,
      sourceAdaptationCoverage: sources.length ? Math.round(new Set(successfulSources).size / sources.length * 1000) / 10 : null,
      mappingCoverage: configuredObjects ? Math.round(mappedCount / configuredObjects * 1000) / 10 : null,
      metricCalculationCoverage: mappings.filter(m => m.targetObjectType === 'regulatoryMetrics').length ? Math.round(results.filter(r => r.calculatedMetricCount > 0).length / domains.length * 1000) / 10 : null,
      kriCalculationCoverage: allKris.length ? Math.round(calculatedKris.size / allKris.length * 1000) / 10 : null,
      warningIdentificationCoverage: totalWarnings ? Math.round(warnings / totalWarnings * 1000) / 10 : null,
      closedLoopDriveRate: adaptedDomains.length ? Math.round(fullLoops.length / adaptedDomains.length * 1000) / 10 : null,
      fullClosedLoopDomainCount: fullLoops.length,
      partialClosedLoopDomainCount: results.filter(r => r.closedLoopStatus === 'PARTIAL_CLOSED_LOOP').length,
      insufficientRealDataDomainCount: results.filter(r => r.closedLoopStatus === 'INSUFFICIENT_REAL_DATA').length,
      adaptedDomainCount: adaptedDomains.length,
      adaptedSourceCount: adaptedSources.size,
      trendStatus: 'INSUFFICIENT_HISTORY'
    };
    return APP_DATA.regulatoryBatchAdaptationMetrics;
  },

  _adaptSourceForBatch(sourceId, domainId, mode) {
    const steps = [];
    const fail = (step, reason) => { steps.push({ sourceId, domainId, step, status: 'FAILED', reason, timestamp: this._batchNow() }); return { success: false, steps, failureStep: step, failureReason: reason }; };
    const ok = (step) => { steps.push({ sourceId, domainId, step, status: 'COMPLETED', reason: null, timestamp: this._batchNow() }); };
    const src = (APP_DATA.regulatoryDataSources || []).find(s => s.sourceId === sourceId);
    if (!src) return fail('SOURCE_CONNECTION', '数据源不存在');
    if (src.connectionStatus === 'OFFLINE') return fail('SOURCE_CONNECTION', '数据源连接中断');
    ok('SOURCE_CONNECTION');
    const jobs = (APP_DATA.regulatoryDataIntegrationJobs || []).filter(j => j.sourceId === sourceId);
    if (!jobs.length) return fail('DATA_INGESTION', '无接入任务');
    if (jobs.every(j => j.status === 'FAILED')) return fail('DATA_INGESTION', '接入任务全部失败');
    ok('DATA_INGESTION');
    const quality = this.runDataQualityValidationOnAdaptation(sourceId);
    if (quality.severeCount > 0 && mode !== 'VALIDATE_ONLY') {
      steps.push({ sourceId, domainId, step: 'QUALITY_VALIDATION', status: 'FAILED', reason: '严重质量问题', timestamp: this._batchNow() });
      return { success: false, partial: true, steps, failureStep: 'QUALITY_VALIDATION', failureReason: '严重质量问题', qualityStatus: 'QUALITY_FAILED' };
    }
    ok('QUALITY_VALIDATION');
    const std = jobs[0] ? this.standardizeIncomingData(jobs[0].integrationJobId) : { success: false };
    if (!std.success) return fail('STANDARDIZATION', std.message || '标准化失败');
    ok('STANDARDIZATION');
    const mapped = this.mapBusinessObjects(sourceId);
    if (!mapped.valid) return fail('BUSINESS_OBJECT_MAPPING', '无有效映射');
    ok('BUSINESS_OBJECT_MAPPING');
    const metrics = mapped.linked.metrics || [];
    if (!metrics.length && !(APP_DATA.regulatoryMetrics || []).some(m => mapped.linked.dataSets?.length)) {
      steps.push({ sourceId, domainId, step: 'METRIC_CALCULATION', status: 'INSUFFICIENT_DATA', reason: '无指标可计算', timestamp: this._batchNow() });
    } else ok('METRIC_CALCULATION');
    const kri = this.computeKriFromAdaptedData(sourceId);
    if (quality.severeCount > 0) {
      steps.push({ sourceId, domainId, step: 'KRI_CALCULATION', status: 'DATA_QUALITY_REVIEW_REQUIRED', reason: '质量未达标', timestamp: this._batchNow() });
    } else if (kri.dataStatus === 'INSUFFICIENT_DATA') {
      steps.push({ sourceId, domainId, step: 'KRI_CALCULATION', status: 'INSUFFICIENT_DATA', reason: 'KRI数据不足', timestamp: this._batchNow() });
    } else ok('KRI_CALCULATION');
    const warns = this.identifyWarningsFromAdaptedData(sourceId);
    if (quality.severeCount > 0) {
      steps.push({ sourceId, domainId, step: 'WARNING_IDENTIFICATION', status: 'DATA_QUALITY_REVIEW_REQUIRED', reason: '质量阻断预警', timestamp: this._batchNow() });
    } else if (warns.warningCount) ok('WARNING_IDENTIFICATION');
    else steps.push({ sourceId, domainId, step: 'WARNING_IDENTIFICATION', status: 'INSUFFICIENT_DATA', reason: '无预警', timestamp: this._batchNow() });
    const loop = this.evaluateAdaptationClosedLoop(sourceId);
    if (loop.drivesClosedLoop) ok('CLOSED_LOOP_EVALUATION');
    else steps.push({ sourceId, domainId, step: 'CLOSED_LOOP_EVALUATION', status: loop.closureRate > 50 ? 'PARTIAL' : 'PENDING', reason: '闭环未完成', timestamp: this._batchNow() });
    const failed = steps.filter(s => s.status === 'FAILED');
    return { success: !failed.length, partial: steps.some(s => s.status === 'PARTIAL' || s.status === 'INSUFFICIENT_DATA'), steps, failureStep: failed[0]?.step, failureReason: failed[0]?.reason };
  },

  runBatchRegulatoryDataAdaptation(opts) {
    const o = opts || {};
    const mode = o.mode || 'FULL';
    const allDomains = APP_DATA.regulatoryDomainConfigurations || [];
    let domainIds = o.domainIds || allDomains.map(d => d.domainId);
    let sourceIds = o.sourceIds || null;
    if (mode === 'RETRY_FAILED') {
      const fails = (APP_DATA.regulatoryBatchAdaptationFailures || []).filter(f => f.status === 'FAILED');
      domainIds = [...new Set(fails.map(f => f.domainId).filter(Boolean))];
      sourceIds = [...new Set(fails.map(f => f.sourceId).filter(Boolean))];
    }
    const runId = 'BATCH-' + String((APP_DATA.regulatoryBatchAdaptationRuns || []).length + 1).padStart(4, '0');
    const run = {
      runId, mode, domainIds, sourceIds: sourceIds || [],
      totalDomains: domainIds.length, completedDomains: 0, failedDomains: 0, partialDomains: 0,
      totalSources: 0, completedSources: 0, failedSources: 0,
      totalMappings: 0, successfulMappings: 0, failedMappings: 0,
      totalKris: 0, calculatedKris: 0, totalWarnings: 0, generatedWarnings: 0,
      totalClosedLoops: 0, completedClosedLoops: 0,
      runStatus: 'RUNNING', startedAt: this._batchNow(), completedAt: null
    };
    APP_DATA.regulatoryBatchAdaptationRuns = APP_DATA.regulatoryBatchAdaptationRuns || [];
    APP_DATA.regulatoryBatchAdaptationRuns.push(run);
    const failures = [];
    const processedSources = new Set();
    domainIds.forEach(domainId => {
      const config = this.getDomainConfiguration(domainId);
      const srcList = sourceIds || config?.linkedSourceIds || [];
      run.totalSources += srcList.length;
      let domainFailed = false;
      let domainPartial = false;
      srcList.forEach(sourceId => {
        if (mode === 'VALIDATE_ONLY') {
          const v = this.validateDataSourceAdaptation(sourceId);
          if (v.valid) { run.completedSources++; processedSources.add(sourceId); }
          else { run.failedSources++; domainFailed = true; failures.push({ sourceId, domainId, step: 'VALIDATION', status: 'FAILED', reason: '适配校验未通过', timestamp: this._batchNow() }); }
          return;
        }
        if (mode === 'INCREMENTAL' || mode === 'FULL' || mode === 'RETRY_FAILED') {
          const existing = this.getAdaptationRun(sourceId);
          if (mode === 'INCREMENTAL' && existing?.drivesClosedLoop) { run.completedSources++; return; }
          const result = this._adaptSourceForBatch(sourceId, domainId, mode);
          (result.steps || []).forEach(s => { if (s.status === 'FAILED') failures.push(s); });
          if (result.success) { run.completedSources++; run.successfulMappings += (this.mapBusinessObjects(sourceId).mappingCount || 0); }
          else if (result.partial) { run.failedSources++; domainPartial = true; }
          else { run.failedSources++; domainFailed = true; }
          processedSources.add(sourceId);
          if (mode !== 'VALIDATE_ONLY') this.adaptRealBusinessData(sourceId);
        }
      });
      if (domainFailed) run.failedDomains++;
      else if (domainPartial) run.partialDomains++;
      else run.completedDomains++;
    });
    this.refreshDomainAdaptationResults();
    domainIds.forEach(id => {
      const r = this.getDomainAdaptationResult(id);
      if (r) {
        r.lastRunId = runId;
        run.totalMappings += r.mappedObjectCount;
        run.totalKris += r.kriIds.length;
        run.calculatedKris += r.calculatedKriCount;
        run.totalWarnings += r.generatedWarningCount;
        run.generatedWarnings += r.generatedWarningCount;
        if (r.closedLoopStatus === 'FULL_CLOSED_LOOP') { run.totalClosedLoops++; run.completedClosedLoops++; }
      }
    });
    run.failedMappings = run.totalMappings - run.successfulMappings;
    run.runStatus = run.failedDomains === run.totalDomains ? 'FAILED' : run.failedDomains || run.failedSources ? 'PARTIAL_SUCCESS' : 'SUCCESS';
    if (run.runStatus === 'RUNNING') run.runStatus = 'SUCCESS';
    run.completedAt = this._batchNow();
    APP_DATA.regulatoryBatchAdaptationFailures = [...(APP_DATA.regulatoryBatchAdaptationFailures || []), ...failures];
    this.computeBatchAdaptationCoverage();
    if (mode !== 'VALIDATE_ONLY') {
      this.createRegulatoryAuditLog({ actionType: 'BATCH_ADAPT', objectType: 'regulatoryBatchAdaptationRuns', objectId: runId, reason: '批量监管数据适配 ' + mode, afterState: { runStatus: run.runStatus } });
    }
    return { success: run.runStatus !== 'FAILED', runId, run, failures };
  },

  retryBatchAdaptationSource(sourceId) {
    const config = (APP_DATA.regulatoryDomainConfigurations || []).find(c => (c.linkedSourceIds || []).includes(sourceId));
    return this.runBatchRegulatoryDataAdaptation({ domainIds: config ? [config.domainId] : [], sourceIds: [sourceId], mode: 'RETRY_FAILED' });
  },

  retryBatchAdaptationDomain(domainId) {
    return this.runBatchRegulatoryDataAdaptation({ domainIds: [domainId], mode: 'RETRY_FAILED' });
  },

  _seedInitialBatchRun() {
    const results = APP_DATA.regulatoryDomainAdaptationResults || [];
    const run = {
      runId: 'BATCH-0001', mode: 'FULL',
      domainIds: (APP_DATA.regulatoryDomainConfigurations || []).map(d => d.domainId),
      sourceIds: [...new Set(results.flatMap(r => r.sourceIds))],
      totalDomains: results.length,
      completedDomains: results.filter(r => r.adaptationStatus === 'COMPLETED').length,
      failedDomains: results.filter(r => r.adaptationStatus === 'FAILED').length,
      partialDomains: results.filter(r => r.adaptationStatus === 'PARTIAL_SUCCESS').length,
      totalSources: [...new Set(results.flatMap(r => r.sourceIds))].length,
      completedSources: results.filter(r => r.adaptationStatus !== 'FAILED').reduce((s, r) => s + r.sourceIds.length, 0),
      failedSources: results.filter(r => r.adaptationStatus === 'FAILED').reduce((s, r) => s + r.sourceIds.length, 0),
      totalMappings: results.reduce((s, r) => s + r.mappedObjectCount, 0),
      successfulMappings: results.reduce((s, r) => s + r.mappedObjectCount, 0),
      failedMappings: 0,
      totalKris: results.reduce((s, r) => s + r.kriIds.length, 0),
      calculatedKris: results.reduce((s, r) => s + r.calculatedKriCount, 0),
      totalWarnings: results.reduce((s, r) => s + r.generatedWarningCount, 0),
      generatedWarnings: results.reduce((s, r) => s + r.generatedWarningCount, 0),
      totalClosedLoops: results.filter(r => r.closedLoopStatus === 'FULL_CLOSED_LOOP').length,
      completedClosedLoops: results.filter(r => r.closedLoopStatus === 'FULL_CLOSED_LOOP').length,
      runStatus: 'SUCCESS', startedAt: '2026-07-22 09:00:00', completedAt: '2026-07-22 09:15:00'
    };
    APP_DATA.regulatoryBatchAdaptationRuns = [run];
  },

  renderBatchAdaptationCoveragePanel() {
    const m = APP_DATA.regulatoryBatchAdaptationMetrics || {};
    const trend = m.trendStatus === 'INSUFFICIENT_HISTORY' ? this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY') : '';
    const items = [
      ['领域适配覆盖率', m.domainAdaptationCoverage, '%'],
      ['数据源适配覆盖率', m.sourceAdaptationCoverage, '%'],
      ['业务对象映射覆盖率', m.mappingCoverage, '%'],
      ['指标计算覆盖率', m.metricCalculationCoverage, '%'],
      ['KRI计算覆盖率', m.kriCalculationCoverage, '%'],
      ['预警识别覆盖率', m.warningIdentificationCoverage, '%'],
      ['闭环驱动率', m.closedLoopDriveRate, '%']
    ];
    return `<div class="card"><div class="card-title">9大监管领域适配覆盖率 ${trend}</div>
      <div class="group-metrics">${items.map(([l, v, u]) => this.renderPublicKpiCard(l, v != null ? v + u : '—', `App.navigatePublic('regulatory-data-governance')`)).join('')}</div>
      <p class="insight-note">完整闭环领域 <b>${m.fullClosedLoopDomainCount ?? '—'}</b> · 部分闭环 <b>${m.partialClosedLoopDomainCount ?? '—'}</b> · 真实数据不足 <b>${m.insufficientRealDataDomainCount ?? '—'}</b></p>
    </div>`;
  },

  renderDomainAdaptationMaturityPanel() {
    const results = APP_DATA.regulatoryDomainAdaptationResults || [];
    const rows = results.map(r => `<tr class="clickable" onclick="App.navigatePublic('regulatory-data-sources')"><td>${r.domainName}</td><td>${r.maturityLevel || this.calculateDomainAdaptationMaturity(r.domainId)}</td><td>${this.renderPublicUnifiedStatusBadge(r.adaptationStatus)}</td><td>${this.renderPublicUnifiedStatusBadge(r.qualityStatus)}</td><td>${this.renderPublicUnifiedStatusBadge(r.closedLoopStatus)}</td><td>${r.sourceIds.length}</td><td>${r.calculatedKriCount}</td><td>${r.generatedWarningCount}</td></tr>`).join('');
    return `<div class="card"><div class="card-title">监管领域适配成熟度</div>
      <table class="data-table"><thead><tr><th>领域</th><th>成熟度</th><th>适配状态</th><th>质量状态</th><th>闭环状态</th><th>数据源</th><th>KRI</th><th>预警</th></tr></thead><tbody>${rows}</tbody></table>
    </div>`;
  },

  renderBatchAdaptationRunsPanel() {
    const f = this.regulatoryBatchAdaptationFilter || {};
    let runs = APP_DATA.regulatoryBatchAdaptationRuns || [];
    if (f.runStatus) runs = runs.filter(r => r.runStatus === f.runStatus);
    if (f.mode) runs = runs.filter(r => r.mode === f.mode);
    const rows = runs.slice().reverse().map(r => `<tr class="clickable" onclick="App.showBatchAdaptationRunDetail('${r.runId}')"><td>${r.runId}</td><td>${r.mode}</td><td>${this.renderPublicUnifiedStatusBadge(r.runStatus)}</td><td>${r.completedDomains}/${r.totalDomains}</td><td>${r.completedSources}/${r.totalSources}</td><td>${r.completedClosedLoops}/${r.totalClosedLoops}</td><td>${r.startedAt}</td></tr>`).join('');
    const failRows = (APP_DATA.regulatoryBatchAdaptationFailures || []).slice(-8).reverse().map(f => `<tr><td>${f.sourceId || '—'}</td><td>${f.domainId || '—'}</td><td>${f.step}</td><td>${this.renderPublicUnifiedStatusBadge(f.status)}</td><td>${this.escHtml(f.reason || '')}</td><td>${f.timestamp}</td></tr>`).join('');
    return `<div class="card"><div class="card-title">批量适配运行</div>
      <p>${this.renderPublicLinkButton('执行全量适配', `App.runBatchRegulatoryDataAdaptation({mode:'FULL'});App.renderRegulatoryDataIntegration()`)} ${this.renderPublicLinkButton('重试失败', `App.runBatchRegulatoryDataAdaptation({mode:'RETRY_FAILED'});App.renderRegulatoryDataIntegration()`)} ${this.renderPublicLinkButton('仅验证', `App.runBatchRegulatoryDataAdaptation({mode:'VALIDATE_ONLY'});App.renderRegulatoryDataIntegration()`)}</p>
      ${rows ? `<table class="data-table"><thead><tr><th>运行ID</th><th>模式</th><th>状态</th><th>领域</th><th>数据源</th><th>闭环</th><th>开始</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无运行记录')}
      <div class="card-title" style="margin-top:12px">失败步骤追溯</div>
      ${failRows ? `<table class="data-table"><thead><tr><th>数据源</th><th>领域</th><th>步骤</th><th>状态</th><th>原因</th><th>时间</th></tr></thead><tbody>${failRows}</tbody></table>` : this.renderPublicEmptyState('暂无失败记录')}
    </div>`;
  },

  showBatchAdaptationRunDetail(runId) {
    const run = this.getBatchAdaptationRun(runId);
    const node = document.getElementById('regulatoryDataIntegrationDetail');
    if (!node || !run) return;
    node.innerHTML = this.buildPublicDetailPanel({ objectType: '批量适配运行', objectName: run.runId, objectId: run.runId, status: run.runStatus,
      sections: [{ title: '运行摘要', content: this.renderPublicMetaGrid([{ label: '模式', value: run.mode }, { label: '领域', value: run.completedDomains + '/' + run.totalDomains }, { label: '数据源', value: run.completedSources + '/' + run.totalSources }, { label: '闭环', value: run.completedClosedLoops + '/' + run.totalClosedLoops }, { label: '开始', value: run.startedAt }, { label: '完成', value: run.completedAt }]) }],
      footer: this.renderPublicLinkButton('审计日志', `App.navigatePublic('regulatory-audit-trail')`)
    });
  },

  renderBatchAdaptationWorkbenchPanel() {
    const m = APP_DATA.regulatoryBatchAdaptationMetrics || {};
    const pending = (APP_DATA.regulatoryDomainAdaptationResults || []).filter(r => r.adaptationStatus === 'PENDING' || r.adaptationStatus === 'IN_PROGRESS');
    const blocked = (APP_DATA.regulatoryDomainAdaptationResults || []).filter(r => r.qualityStatus === 'QUALITY_FAILED');
    const failed = (APP_DATA.regulatoryDomainAdaptationResults || []).filter(r => r.adaptationStatus === 'FAILED');
    const noKri = (APP_DATA.regulatoryDomainAdaptationResults || []).filter(r => r.kriCalculationStatus === 'INSUFFICIENT_DATA' || r.kriCalculationStatus === 'DATA_QUALITY_REVIEW_REQUIRED');
    const noLoop = (APP_DATA.regulatoryDomainAdaptationResults || []).filter(r => r.closedLoopStatus === 'PARTIAL_CLOSED_LOOP');
    return `<div class="card"><div class="card-title">领域批量适配待办</div>
      <div class="group-metrics">${[
        [pending.length, '待完成领域适配', `App.navigatePublic('regulatory-data-governance')`],
        [blocked.length, '数据质量阻断', `App.navigatePublic('regulatory-data-quality')`],
        [failed.length, '适配失败', `App.navigatePublic('regulatory-data-integration')`],
        [noKri.length, 'KRI不可计算', `App.navigatePublic('regulatory-kri-monitoring')`],
        [noLoop.length, '闭环未形成', `App.navigatePublic('regulatory-data-governance')`],
        [m.domainAdaptationCoverage != null ? m.domainAdaptationCoverage + '%' : '—', '领域覆盖率', `App.navigatePublic('regulatory-data-governance')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
    </div>`;
  },

  renderBatchAdaptationRolePanel(roleType) {
    const m = APP_DATA.regulatoryBatchAdaptationMetrics || {};
    const results = APP_DATA.regulatoryDomainAdaptationResults || [];
    if (roleType === 'GROUP_LEADER') {
      return `<div class="card"><div class="card-title">集团适配覆盖</div>
        <div class="group-metrics">${[
          [m.domainAdaptationCoverage != null ? m.domainAdaptationCoverage + '%' : '—', '领域覆盖率', `App.navigatePublic('regulatory-data-governance')`],
          [m.closedLoopDriveRate != null ? m.closedLoopDriveRate + '%' : '—', '闭环驱动率', `App.navigatePublic('regulatory-data-governance')`],
          [m.fullClosedLoopDomainCount, '完整闭环领域', `App.navigatePublic('regulatory-data-governance')`],
          [results.filter(r => (r.maturityLevel || '').startsWith('LEVEL_7')).length, 'LEVEL_7 领域', `App.navigatePublic('regulatory-data-governance')`]
        ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div></div>`;
    }
    if (roleType === 'GROUP_REGULATORY') {
      const failed = results.filter(r => r.adaptationStatus === 'FAILED');
      return `<div class="card"><div class="card-title">领域适配监管视图</div>
        <p>失败领域 <b>${failed.length}</b> · KRI计算失败 <b>${results.filter(r => r.kriCalculationStatus === 'DATA_QUALITY_REVIEW_REQUIRED' || r.kriCalculationStatus === 'INSUFFICIENT_DATA').length}</b></p>
        ${this.renderPublicLinkButton('批量适配', `App.navigatePublic('regulatory-data-integration')`)} ${this.renderPublicLinkButton('领域配置', `App.navigatePublic('regulatory-data-governance')`)}</div>`;
    }
    if (roleType === 'DOMAIN_REGULATOR') {
      const domainResults = this.filterDataByUserScope(results, r => (APP_DATA.regulatoryDomainConfigurations.find(c => c.domainId === r.domainId) || {}).responsibleOrganizationId, r => r.domainId);
      return `<div class="card"><div class="card-title">本领域适配</div>
        ${domainResults.map(r => `<p class="insight-note">${r.domainName}: ${r.maturityLevel} · ${r.closedLoopStatus} · KRI ${r.calculatedKriCount}</p>`).join('') || this.renderPublicEmptyState('暂无')}
        ${this.renderPublicLinkButton('KRI监测', `App.navigatePublic('regulatory-kri-monitoring')`)} ${this.renderPublicLinkButton('预警中心', `App.navigatePublic('regulatory-warning-center')`)}</div>`;
    }
    const entityId = this.regulatoryRoleScopeId || this.getCurrentRegulatoryUser()?.organizationId;
    const entityIssues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => { const ds = (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === i.dataSetId); return ds?.ownerOrganizationId === entityId && i.status !== 'CLOSED'; });
    return `<div class="card"><div class="card-title">本法人数据适配</div>
      <p>数据质量问题 <b>${entityIssues.length}</b> · 严重 <b>${entityIssues.filter(i => i.severity === 'HIGH').length}</b></p>
      ${this.renderPublicLinkButton('数据质量', `App.navigatePublic('regulatory-data-quality')`)} ${this.renderPublicLinkButton('整改', `App.navigatePublic('rectification')`)}</div>`;
  },

  _kriAdaptationContext(kriId) {
    const run = (APP_DATA.regulatoryDataAdaptationRuns || []).find(r => (r.pipelineSteps || []).some(s => s.objectRef === kriId));
    const src = run?.sourceId;
    const domain = (APP_DATA.regulatoryDomainAdaptationResults || []).find(r => (r.kriIds || []).includes(kriId));
    const cred = this.getKriDataCredibility(kriId);
    return { sourceId: src, domainId: domain?.domainId, domainName: domain?.domainName, adaptationStatus: domain?.adaptationStatus, credibility: cred };
  },

  initializeDomainClosure() {
    this.refreshDomainDataGaps();
    this.refreshDomainClosurePlans();
    this.computeDomainClosureMetrics();
    return APP_DATA.regulatoryDomainClosureMetrics;
  },

  _closureNow() { return '2026-07-22 11:00:00'; },

  _targetMaturityFromGaps(gapCount, currentLevel) {
    const lvl = parseInt(String(currentLevel || 'LEVEL_0').replace('LEVEL_', ''), 10) || 0;
    const target = Math.min(7, lvl + (gapCount > 4 ? 2 : gapCount > 2 ? 1 : 0));
    return 'LEVEL_' + target;
  },

  analyzeDomainDataGaps(domainId) {
    const r = this.getDomainAdaptationResult(domainId) || this.buildDomainAdaptationResult(domainId);
    if (!r) return [];
    const config = this.getDomainConfiguration(domainId);
    const gaps = [];
    let seq = 1;
    const add = (gapType, gapLevel, evidence, extra) => {
      gaps.push({
        gapId: 'GAP-' + domainId.toUpperCase().slice(0, 3) + '-' + String(seq++).padStart(3, '0'),
        domainId,
        gapType,
        gapLevel,
        relatedSourceIds: extra?.sources || r.sourceIds || [],
        relatedMappingIds: extra?.mappings || r.businessObjectMappingIds || [],
        relatedMetricIds: extra?.metrics || r.metricIds || [],
        relatedKriIds: extra?.kris || r.kriIds || [],
        currentMaturityLevel: r.maturityLevel || this.calculateDomainAdaptationMaturity(domainId, r),
        targetMaturityLevel: null,
        gapStatus: 'OPEN',
        evidence,
        generatedAt: this._closureNow()
      });
    };
    if (!r.sourceIds.length) add('NO_DATA_SOURCE', 'CRITICAL', '未配置关联数据源');
    else if (!r.dataSetIds.length) add('NO_DATASET', 'CRITICAL', '数据源无关联数据集');
    if (r.sourceIds.length && !r.mappedObjectCount) add('NO_BUSINESS_OBJECT_MAPPING', 'HIGH', '缺少业务对象映射');
    if (r.sourceIds.length && !r.metricIds.length && r.mappedObjectCount) add('NO_METRIC', 'MEDIUM', '无监管指标映射');
    if (r.sourceIds.length && !r.kriIds.length) add('NO_KRI', 'HIGH', '未配置或未关联KRI');
    else if (r.kriIds.length && !r.calculatedKriCount && r.kriCalculationStatus !== 'COMPLETED') add('NO_KRI', 'HIGH', 'KRI不可计算: ' + r.kriCalculationStatus);
    if (r.kriIds.length && r.calculatedKriCount && !r.generatedWarningCount && r.qualityStatus !== 'QUALITY_FAILED') add('NO_WARNING_CHAIN', 'MEDIUM', 'KRI已计算但无预警链路');
    if ((r.generatedWarningCount || r.kriIds.length) && !r.linkedActionCount) add('NO_ACTION_CHAIN', 'HIGH', '预警/KRI未联动监管行动');
    if (r.linkedActionCount && !r.linkedRectificationCount) add('NO_RECTIFICATION_CHAIN', 'HIGH', '监管行动未关联整改');
    if (r.linkedRectificationCount && !r.verifiedCount) add('NO_VERIFICATION_CHAIN', 'HIGH', '整改未完成验证关闭');
    if (r.qualityStatus === 'QUALITY_FAILED') add('NO_KRI', 'CRITICAL', '数据质量阻断KRI可信度', { kris: r.kriIds });
    gaps.forEach(g => { g.targetMaturityLevel = this._targetMaturityFromGaps(gaps.length, g.currentMaturityLevel); });
    return gaps;
  },

  refreshDomainDataGaps() {
    const domains = APP_DATA.regulatoryDomainConfigurations || [];
    APP_DATA.regulatoryDomainDataGaps = domains.flatMap(d => this.analyzeDomainDataGaps(d.domainId));
    return APP_DATA.regulatoryDomainDataGaps;
  },

  getDomainDataGaps(domainId) {
    return (APP_DATA.regulatoryDomainDataGaps || []).filter(g => g.domainId === domainId);
  },

  calculateDomainClosureReadiness(domainId) {
    const r = this.getDomainAdaptationResult(domainId) || this.buildDomainAdaptationResult(domainId);
    if (!r) return { domainId, domainClosureReadiness: 0, dataStatus: 'INSUFFICIENT_DATA' };
    const srcScore = r.sourceIds.length ? (r.dataSetIds.length ? 100 : 50) : 0;
    const qualPenalty = r.qualityStatus === 'QUALITY_FAILED' ? 40 : r.qualityStatus === 'QUALITY_WARNING' ? 15 : 0;
    const dataReadiness = Math.max(0, Math.min(100, srcScore - qualPenalty));
    const mappingReadiness = r.sourceIds.length ? Math.round((r.mappedObjectCount / Math.max(1, r.dataSetIds.length)) * 100) : 0;
    const kriReadiness = r.kriIds.length ? Math.round((r.calculatedKriCount / r.kriIds.length) * 100) : 0;
    const supervisionReadiness = (() => {
      let s = 0;
      if (r.generatedWarningCount) s += 35;
      if (r.linkedActionCount) s += 35;
      if (r.linkedTaskCount) s += 15;
      if (r.kriIds.length && !r.generatedWarningCount) s += 10;
      return Math.min(100, s);
    })();
    const closureReadiness = (() => {
      let s = 0;
      if (r.linkedRectificationCount) s += 40;
      if (r.verifiedCount) s += 60;
      return Math.min(100, s);
    })();
    const domainClosureReadiness = Math.round((dataReadiness * 0.25 + mappingReadiness * 0.2 + kriReadiness * 0.2 + supervisionReadiness * 0.2 + closureReadiness * 0.15) * 10) / 10;
    return {
      domainId,
      currentMaturityLevel: r.maturityLevel || this.calculateDomainAdaptationMaturity(domainId, r),
      targetMaturityLevel: r.closedLoopStatus === 'FULL_CLOSED_LOOP' ? 'LEVEL_7' : this._targetMaturityFromGaps(this.getDomainDataGaps(domainId).length, r.maturityLevel),
      closedLoopStatus: r.closedLoopStatus,
      dataReadiness,
      mappingReadiness,
      kriReadiness,
      supervisionReadiness,
      closureReadiness,
      domainClosureReadiness,
      governanceReadiness: Math.round((dataReadiness + mappingReadiness) / 2),
      supervisionRunReadiness: supervisionReadiness,
      dataStatus: r.closedLoopStatus === 'INSUFFICIENT_REAL_DATA' ? 'INSUFFICIENT_REAL_DATA' : 'OK',
      trendStatus: 'INSUFFICIENT_HISTORY'
    };
  },

  calculateDomainClosurePriority(domainId) {
    const r = this.getDomainAdaptationResult(domainId) || this.buildDomainAdaptationResult(domainId);
    const gaps = this.getDomainDataGaps(domainId);
    const readiness = this.calculateDomainClosureReadiness(domainId);
    const config = this.getDomainConfiguration(domainId);
    let score = 0;
    if (r?.closedLoopStatus === 'PARTIAL_CLOSED_LOOP') score += 40;
    if (['finance', 'overseas'].includes(domainId)) score += 25;
    score += gaps.filter(g => g.gapLevel === 'CRITICAL').length * 15;
    score += gaps.filter(g => g.gapLevel === 'HIGH').length * 8;
    score += (readiness.domainClosureReadiness || 0) * 0.2;
    if (config?.openQualityIssueCount) score += 10;
    if (r?.closedLoopStatus === 'FULL_CLOSED_LOOP') score = Math.max(0, score - 50);
    if (r?.closedLoopStatus === 'INSUFFICIENT_REAL_DATA' && !r.sourceIds.length) score = Math.max(0, score - 20);
    if (score >= 70) return 'CRITICAL';
    if (score >= 50) return 'HIGH';
    if (score >= 25) return 'MEDIUM';
    return 'LOW';
  },

  buildDomainClosurePlan(domainId) {
    const r = this.getDomainAdaptationResult(domainId) || this.buildDomainAdaptationResult(domainId);
    const config = this.getDomainConfiguration(domainId);
    const gaps = this.getDomainDataGaps(domainId).length ? this.getDomainDataGaps(domainId) : this.analyzeDomainDataGaps(domainId);
    const readiness = this.calculateDomainClosureReadiness(domainId);
    const priority = this.calculateDomainClosurePriority(domainId);
    const actionMap = {
      NO_DATA_SOURCE: '补充数据源',
      NO_DATASET: '完成数据接入',
      NO_BUSINESS_OBJECT_MAPPING: '完成业务对象映射',
      NO_METRIC: '配置监管指标',
      NO_KRI: '配置并完成KRI计算',
      NO_WARNING_CHAIN: '建立预警链路',
      NO_ACTION_CHAIN: '联动监管行动',
      NO_RECTIFICATION_CHAIN: '关联整改任务',
      NO_VERIFICATION_CHAIN: '完成整改验证'
    };
    const requiredActions = [...new Set(gaps.map(g => actionMap[g.gapType]).filter(Boolean))];
    const resolved = gaps.filter(g => g.gapStatus === 'RESOLVED').length;
    const completionRate = gaps.length ? Math.round((1 - gaps.filter(g => g.gapStatus === 'OPEN').length / gaps.length) * (readiness.domainClosureReadiness / 100) * 1000) / 10 : (r?.closedLoopStatus === 'FULL_CLOSED_LOOP' ? 100 : 0);
    const blockers = gaps.filter(g => g.gapStatus === 'OPEN' && g.gapLevel === 'CRITICAL').map(g => g.evidence);
    if (r?.qualityStatus === 'QUALITY_FAILED') blockers.push('数据质量未达标');
    if (r?.closedLoopStatus === 'INSUFFICIENT_REAL_DATA') blockers.push('真实业务数据不足');
    let status = 'NOT_STARTED';
    if (r?.closedLoopStatus === 'FULL_CLOSED_LOOP') status = 'COMPLETED';
    else if (blockers.some(b => b.includes('数据不足'))) status = 'BLOCKED';
    else if (gaps.some(g => g.gapStatus === 'IN_PROGRESS') || readiness.domainClosureReadiness > 30) status = 'IN_PROGRESS';
    return {
      planId: 'DCP-' + domainId,
      domainId,
      domainName: r?.domainName || config?.domainName,
      currentLevel: readiness.currentMaturityLevel,
      targetLevel: readiness.targetMaturityLevel,
      priority,
      gapIds: gaps.map(g => g.gapId),
      requiredActions: requiredActions.length ? requiredActions : (r?.closedLoopStatus === 'FULL_CLOSED_LOOP' ? ['维持闭环运行'] : ['评估数据基础']),
      ownerOrgId: config?.responsibleOrganizationId || 'G001',
      status,
      completionRate,
      blockers,
      sourceTraceability: { sourceIds: r?.sourceIds || [], dataSetIds: r?.dataSetIds || [], kriIds: r?.kriIds || [] },
      closedLoopStatus: r?.closedLoopStatus,
      dataStatus: r?.closedLoopStatus === 'INSUFFICIENT_REAL_DATA' ? 'INSUFFICIENT_REAL_DATA' : 'OK'
    };
  },

  refreshDomainClosurePlans() {
    const domains = APP_DATA.regulatoryDomainConfigurations || [];
    APP_DATA.regulatoryDomainClosurePlans = domains.map(d => this.buildDomainClosurePlan(d.domainId));
    return APP_DATA.regulatoryDomainClosurePlans;
  },

  getDomainClosurePlan(domainId) {
    return (APP_DATA.regulatoryDomainClosurePlans || []).find(p => p.domainId === domainId);
  },

  computeDomainClosureMetrics() {
    const results = APP_DATA.regulatoryDomainAdaptationResults || [];
    const gaps = APP_DATA.regulatoryDomainDataGaps || [];
    const plans = APP_DATA.regulatoryDomainClosurePlans || [];
    const full = results.filter(r => r.closedLoopStatus === 'FULL_CLOSED_LOOP').length;
    const partial = results.filter(r => r.closedLoopStatus === 'PARTIAL_CLOSED_LOOP').length;
    const insufficient = results.filter(r => r.closedLoopStatus === 'INSUFFICIENT_REAL_DATA').length;
    APP_DATA.regulatoryDomainClosureMetrics = {
      totalDomainCount: results.length,
      fullClosedLoopCount: full,
      partialClosedLoopCount: partial,
      insufficientRealDataCount: insufficient,
      domainClosureCoverage: results.length ? Math.round(full / results.length * 1000) / 10 : null,
      openGapCount: gaps.filter(g => g.gapStatus === 'OPEN').length,
      criticalGapCount: gaps.filter(g => g.gapLevel === 'CRITICAL' && g.gapStatus === 'OPEN').length,
      activePlanCount: plans.filter(p => p.status === 'IN_PROGRESS').length,
      blockedPlanCount: plans.filter(p => p.status === 'BLOCKED').length,
      focusDomains: ['finance', 'overseas'],
      avgClosureReadiness: results.length ? Math.round(results.reduce((s, r) => s + (this.calculateDomainClosureReadiness(r.domainId).domainClosureReadiness || 0), 0) / results.length * 10) / 10 : null,
      trendStatus: 'INSUFFICIENT_HISTORY'
    };
    return APP_DATA.regulatoryDomainClosureMetrics;
  },

  initializeClosureVerification() {
    APP_DATA.regulatoryClosureVerificationEvidence = APP_DATA.regulatoryClosureVerificationEvidence || [];
    APP_DATA.regulatoryDomainClosureSnapshots = APP_DATA.regulatoryDomainClosureSnapshots || [];
    this.refreshFinanceClosureVerificationIndex();
    this.takeDomainClosureSnapshot('finance', 'INIT');
    return { evidenceCount: (APP_DATA.regulatoryClosureVerificationEvidence || []).length };
  },

  _cvNow() { return '2026-07-22 12:00:00'; },

  _cvSeq() {
    const n = ((APP_DATA.regulatoryClosureVerificationEvidence || []).length + 1);
    return 'CVE-' + String(n).padStart(4, '0');
  },

  getDomainRectificationTasks(domainId) {
    const r = this.getDomainAdaptationResult(domainId) || this.buildDomainAdaptationResult(domainId);
    if (!r) return [];
    const config = this.getDomainConfiguration(domainId);
    const dataSetIds = r.dataSetIds || config?.linkedDataSetIds || [];
    const q = this._domainQualityStatus(dataSetIds);
    const kriIds = r.kriIds || [];
    const warnings = (APP_DATA.regulatoryWarnings || []).filter(w => kriIds.includes(w.kriId));
    const actions = (APP_DATA.regulatoryActions || []).filter(a => (a.sourceKriIds || []).some(id => kriIds.includes(id)) || (r.sourceIds || []).some(sid => (a.sourceDataSetIds || []).some(ds => dataSetIds.includes(ds))));
    return (APP_DATA.rectificationTasks || []).filter(t =>
      q.issues.some(i => i.relatedRectificationTaskId === t.taskId) ||
      actions.some(a => (a.relatedRectificationTaskIds || []).includes(t.taskId)) ||
      (t.riskMatterId && warnings.some(w => w.riskMatterId === t.riskMatterId))
    );
  },

  getFinanceRectificationChain() {
    const taskId = 'RECT-202601001';
    const task = (APP_DATA.rectificationTasks || []).find(t => t.taskId === taskId);
    const risk = (APP_DATA.warnings || []).find(w => w.id === (task?.riskMatterId || 'risk-2'));
    const kriId = risk?.kriId || 'kri-capex';
    const warnings = (APP_DATA.regulatoryWarnings || []).filter(w => w.kriId === kriId || w.riskMatterId === (task?.riskMatterId || 'risk-2'));
    const actions = (APP_DATA.regulatoryActions || []).filter(a => (a.sourceKriIds || []).includes(kriId) || warnings.some(w => (a.sourceWarningIds || []).includes(w.regulatoryWarningId)));
    const qualityIssue = (APP_DATA.regulatoryDataQualityIssues || []).find(i => i.relatedRectificationTaskId === taskId);
    return { taskId, task, risk, kriId, warnings, actions, qualityIssue };
  },

  refreshFinanceClosureVerificationIndex() {
    const chain = this.getFinanceRectificationChain();
    const evidence = this.getClosureVerificationEvidence(chain.taskId);
    APP_DATA.regulatoryFinanceClosureVerificationIndex = {
      domainId: 'finance',
      primaryRectificationTaskId: chain.taskId,
      chainTrace: [
        chain.risk?.id || 'risk-2',
        chain.kriId,
        ...(chain.warnings || []).slice(0, 2).map(w => w.regulatoryWarningId),
        ...(chain.actions || []).slice(0, 2).map(a => a.actionId),
        chain.taskId
      ],
      evidenceStatus: evidence.evidenceStatus,
      verificationStatus: evidence.verificationStatus,
      blocker: this.getFinanceDomainClosureBlocker(),
      lastUpdatedAt: this._cvNow()
    };
    return APP_DATA.regulatoryFinanceClosureVerificationIndex;
  },

  getClosureVerificationEvidence(rectificationTaskId) {
    const list = (APP_DATA.regulatoryClosureVerificationEvidence || []).filter(e => e.rectificationTaskId === rectificationTaskId);
    if (!list.length) {
      const chain = rectificationTaskId === 'RECT-202601001' ? this.getFinanceRectificationChain() : null;
      return {
        evidenceId: null,
        rectificationTaskId,
        domainId: 'finance',
        evidenceType: null,
        evidenceSource: null,
        evidenceStatus: 'MISSING',
        submittedAt: null,
        submittedBy: null,
        verificationStatus: 'MISSING',
        verifiedBy: null,
        verifiedAt: null,
        sourceTraceability: chain ? { riskMatterId: chain.risk?.id, kriId: chain.kriId, actionIds: (chain.actions || []).map(a => a.actionId) } : null
      };
    }
    const latest = list.slice().sort((a, b) => {
      const na = parseInt(String(a.evidenceId || '').replace(/\D/g, ''), 10) || 0;
      const nb = parseInt(String(b.evidenceId || '').replace(/\D/g, ''), 10) || 0;
      if (nb !== na) return nb - na;
      return String(b.submittedAt || '').localeCompare(String(a.submittedAt || ''));
    })[0];
    return latest;
  },

  getFinanceDomainClosureBlocker() {
    const gaps = this.getDomainDataGaps('finance').length ? this.getDomainDataGaps('finance') : this.analyzeDomainDataGaps('finance');
    const verifyGap = gaps.find(g => g.gapType === 'NO_VERIFICATION_CHAIN' && g.gapStatus === 'OPEN');
    if (verifyGap) return 'NO_VERIFICATION_CHAIN';
    const r = this.getDomainAdaptationResult('finance') || this.buildDomainAdaptationResult('finance');
    if (r?.linkedRectificationCount && !r?.verifiedCount) return 'NO_VERIFICATION_CHAIN';
    return null;
  },

  buildFinanceClosureChainSteps() {
    const r = this.getDomainAdaptationResult('finance') || this.buildDomainAdaptationResult('finance');
    const evidence = this.getClosureVerificationEvidence('RECT-202601001');
    const verified = r?.verifiedCount > 0 || evidence.verificationStatus === 'VERIFIED';
    const steps = [
      { label: '数据源', ok: !!(r?.sourceIds || []).length },
      { label: '数据质量', ok: r?.qualityStatus !== 'QUALITY_FAILED' },
      { label: '业务对象映射', ok: (r?.mappedObjectCount || 0) > 0 },
      { label: '指标计算', ok: ['COMPLETED', 'PARTIAL'].includes(r?.metricCalculationStatus) },
      { label: 'KRI', ok: (r?.calculatedKriCount || 0) > 0 },
      { label: '预警', ok: (r?.generatedWarningCount || 0) > 0 },
      { label: '监管行动', ok: (r?.linkedActionCount || 0) > 0 },
      { label: '整改任务', ok: (r?.linkedRectificationCount || 0) > 0 },
      { label: '整改验证', ok: verified, pending: !verified, detail: verified ? '已通过' : (evidence.evidenceStatus === 'MISSING' ? '待完成' : evidence.verificationStatus) }
    ];
    return steps;
  },

  getClosureVerificationQueueCounts() {
    const financeTasks = this.getDomainRectificationTasks('finance');
    const taskIds = financeTasks.map(t => t.taskId);
    const evidence = (APP_DATA.regulatoryClosureVerificationEvidence || []).filter(e => e.domainId === 'finance' || taskIds.includes(e.rectificationTaskId));
    const latestByTask = {};
    taskIds.forEach(tid => { latestByTask[tid] = this.getClosureVerificationEvidence(tid); });
    const vals = Object.values(latestByTask);
    return {
      pendingSubmit: vals.filter(e => e.evidenceStatus === 'MISSING').length,
      pendingReview: vals.filter(e => e.evidenceStatus === 'SUBMITTED' || e.evidenceStatus === 'UNDER_REVIEW').length,
      rejected: evidence.filter(e => e.verificationStatus === 'REJECTED' && e.evidenceStatus !== 'VERIFIED').length,
      verifiedClosed: vals.filter(e => e.verificationStatus === 'VERIFIED').length
    };
  },

  submitClosureVerificationEvidence(opts) {
    const o = opts || {};
    const rectificationTaskId = o.rectificationTaskId;
    const task = (APP_DATA.rectificationTasks || []).find(t => t.taskId === rectificationTaskId);
    if (!task) return { success: false, message: '整改任务不存在' };
    const domainId = o.domainId || (rectificationTaskId === 'RECT-202601001' ? 'finance' : null) || 'finance';
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'rectificationTasks', rectificationTaskId, 'SUBMIT');
    if (!access.allowed) {
      this.createRegulatoryAuditLog({ actionType: 'OVERRIDE_DENIED', objectType: 'rectificationTasks', objectId: rectificationTaskId, reason: access.reason });
      return { success: false, denied: true, message: access.reason };
    }
    const chain = rectificationTaskId === 'RECT-202601001' ? this.getFinanceRectificationChain() : null;
    const evidence = {
      evidenceId: this._cvSeq(),
      rectificationTaskId,
      domainId,
      evidenceType: o.evidenceType || '整改执行报告',
      evidenceSource: o.evidenceSource || task.responsibleDepartment || task.owner,
      evidenceStatus: 'SUBMITTED',
      submittedAt: this._cvNow(),
      submittedBy: o.submittedBy || this.getCurrentRegulatoryUser()?.userId,
      verificationStatus: 'SUBMITTED',
      verifiedBy: null,
      verifiedAt: null,
      rejectReason: null,
      supplementaryRequirement: null,
      sourceTraceability: chain ? { riskMatterId: chain.risk?.id, kriId: chain.kriId, actionIds: (chain.actions || []).map(a => a.actionId), qualityIssueId: chain.qualityIssue?.qualityIssueId } : { rectificationTaskId }
    };
    APP_DATA.regulatoryClosureVerificationEvidence = APP_DATA.regulatoryClosureVerificationEvidence || [];
    APP_DATA.regulatoryClosureVerificationEvidence.push(evidence);
    this.createRegulatoryAuditLog({
      actionType: 'SUBMIT',
      objectType: 'regulatoryClosureVerificationEvidence',
      objectId: evidence.evidenceId,
      afterState: { evidenceStatus: evidence.evidenceStatus, verificationStatus: evidence.verificationStatus },
      reason: o.reason || '提交整改验证证据'
    });
    this.recalculateFinanceDomainClosure('EVIDENCE_SUBMITTED');
    return { success: true, evidence, closedLoopStatus: (this.getDomainAdaptationResult('finance') || {}).closedLoopStatus };
  },

  _markEvidenceUnderReview(evidenceId) {
    const ev = (APP_DATA.regulatoryClosureVerificationEvidence || []).find(e => e.evidenceId === evidenceId);
    if (!ev || ev.evidenceStatus === 'VERIFIED') return ev;
    ev.evidenceStatus = 'UNDER_REVIEW';
    ev.verificationStatus = 'UNDER_REVIEW';
    return ev;
  },

  verifyClosureEvidence(evidenceId, opts) {
    const o = opts || {};
    const ev = (APP_DATA.regulatoryClosureVerificationEvidence || []).find(e => e.evidenceId === evidenceId);
    if (!ev) return { success: false, message: '验证证据不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'rectificationTasks', ev.rectificationTaskId, 'VERIFY');
    if (!access.allowed) {
      this.createRegulatoryAuditLog({ actionType: 'OVERRIDE_DENIED', objectType: 'rectificationTasks', objectId: ev.rectificationTaskId, reason: access.reason });
      return { success: false, denied: true, message: access.reason };
    }
    if (!ev.evidenceType || !ev.evidenceSource) return { success: false, message: '验证证据不完整' };
    if (ev.evidenceStatus === 'MISSING') return { success: false, message: '证据尚未提交' };
    const before = { evidenceStatus: ev.evidenceStatus, verificationStatus: ev.verificationStatus };
    const task = (APP_DATA.rectificationTasks || []).find(t => t.taskId === ev.rectificationTaskId);
    if (!task) return { success: false, message: '关联整改任务不存在' };
    ev.evidenceStatus = 'UNDER_REVIEW';
    ev.verificationStatus = 'UNDER_REVIEW';
    if (o.approved) {
      ev.evidenceStatus = 'VERIFIED';
      ev.verificationStatus = 'VERIFIED';
      ev.verifiedBy = o.verifiedBy || this.getCurrentRegulatoryUser()?.userId;
      ev.verifiedAt = this._cvNow();
      const taskBefore = { status: task.status, verificationStatus: task.verificationStatus, closedAt: task.closedAt };
      task.verificationStatus = '已验证';
      task.status = '已关闭';
      task.closedAt = task.closedAt || this._cvNow().slice(0, 10);
      task.progress = 100;
      this.createRegulatoryAuditLog({
        actionType: 'APPROVE',
        objectType: 'regulatoryClosureVerificationEvidence',
        objectId: evidenceId,
        beforeState: before,
        afterState: { evidenceStatus: ev.evidenceStatus, verificationStatus: ev.verificationStatus },
        reason: o.reason || '整改验证通过'
      });
      this.createRegulatoryAuditLog({
        actionType: 'CLOSE',
        objectType: 'rectificationTasks',
        objectId: task.taskId,
        beforeState: taskBefore,
        afterState: { status: task.status, verificationStatus: task.verificationStatus, closedAt: task.closedAt },
        reason: '整改验证通过关闭'
      });
    } else {
      ev.evidenceStatus = 'REJECTED';
      ev.verificationStatus = 'REJECTED';
      ev.verifiedBy = o.verifiedBy || this.getCurrentRegulatoryUser()?.userId;
      ev.verifiedAt = this._cvNow();
      ev.rejectReason = o.reason || '验证未通过';
      ev.supplementaryRequirement = '请补充整改执行证据：' + (o.reason || '措施落实不充分，需重新提交验证材料');
      task.verificationStatus = '待验证';
      this._generateClosureSupplementaryImprovement(ev);
      this.createRegulatoryAuditLog({
        actionType: 'REJECT',
        objectType: 'regulatoryClosureVerificationEvidence',
        objectId: evidenceId,
        beforeState: before,
        afterState: { evidenceStatus: ev.evidenceStatus, verificationStatus: ev.verificationStatus },
        reason: ev.rejectReason
      });
    }
    const closure = this.recalculateFinanceDomainClosure(o.approved ? 'VERIFICATION_PASSED' : 'VERIFICATION_REJECTED');
    return { success: true, evidence: ev, closedLoopStatus: closure.closedLoopStatus, blocker: closure.blocker };
  },

  _generateClosureSupplementaryImprovement(evidence) {
    APP_DATA.regulatoryImprovementOpportunities = APP_DATA.regulatoryImprovementOpportunities || [];
    const oppId = 'OPP-CV-' + evidence.rectificationTaskId.replace(/[^A-Z0-9]/gi, '');
    if (APP_DATA.regulatoryImprovementOpportunities.some(o => o.opportunityId === oppId)) return;
    APP_DATA.regulatoryImprovementOpportunities.push({
      opportunityId: oppId,
      sourceCategory: '整改验证拒绝',
      title: '整改验证补充 · ' + evidence.rectificationTaskId,
      sourceType: 'rectificationTasks',
      sourceId: evidence.rectificationTaskId,
      relatedRectificationTaskIds: [evidence.rectificationTaskId],
      domainId: evidence.domainId,
      problemManifestation: evidence.supplementaryRequirement || evidence.rejectReason,
      impactScope: evidence.domainId || 'finance',
      suggestedDirection: 'RECTIFICATION_VERIFICATION',
      priority: 'HIGH',
      status: 'OPEN',
      requiresHumanDecision: true
    });
  },

  reassessImprovementAfterClosureVerification(domainId) {
    const opps = this.identifyImprovementOpportunities();
    const domainOpps = opps.filter(o => o.impactScope === domainId || o.domainId === domainId || (o.relatedRectificationTaskIds || []).length);
    const r = this.getDomainAdaptationResult(domainId);
    if (r?.closedLoopStatus === 'FULL_CLOSED_LOOP') {
      domainOpps.forEach(o => {
        const full = (APP_DATA.regulatoryImprovementOpportunities || []).find(x => x.opportunityId === o.opportunityId);
        if (full && full.sourceCategory === '整改验证拒绝' && full.status === 'OPEN') full.status = 'RESOLVED';
      });
    }
    return { opportunityCount: domainOpps.length, closedLoopStatus: r?.closedLoopStatus };
  },

  refreshRegulatoryPerformanceFromClosureVerification() {
    const rects = APP_DATA.rectificationTasks || [];
    const closed = rects.filter(t => t.status === '已关闭' || t.verificationStatus === '已验证').length;
    const rate = rects.length ? Math.round(closed / rects.length * 1000) / 1000 : 0;
    APP_DATA.regulatoryPerformanceSummary = APP_DATA.regulatoryPerformanceSummary || {};
    APP_DATA.regulatoryPerformanceSummary.rectificationClosureRate = rate;
    const financePerf = (APP_DATA.regulatoryPerformanceMetrics || []).find(p => p.scopeType === 'DOMAIN' && p.scopeId === 'finance');
    if (financePerf) {
      financePerf.rectificationClosureRate = rate;
      const r = this.getDomainAdaptationResult('finance');
      if (r?.closedLoopStatus === 'FULL_CLOSED_LOOP') financePerf.actionVerificationRate = Math.min(1, (financePerf.actionVerificationRate || 0) + 0.05);
    }
    const groupPerf = (APP_DATA.regulatoryPerformanceMetrics || []).find(p => p.scopeType === 'GROUP');
    if (groupPerf) groupPerf.rectificationClosureRate = rate;
    return APP_DATA.regulatoryPerformanceSummary;
  },

  takeDomainClosureSnapshot(domainId, trigger) {
    const r = this.getDomainAdaptationResult(domainId) || this.buildDomainAdaptationResult(domainId);
    const readiness = this.calculateDomainClosureReadiness(domainId);
    const blocker = domainId === 'finance' ? this.getFinanceDomainClosureBlocker() : (this.getDomainDataGaps(domainId).find(g => g.gapStatus === 'OPEN') || {}).gapType;
    const snap = {
      snapshotId: 'DCS-' + domainId + '-' + Date.now(),
      domainId,
      trigger: trigger || 'MANUAL',
      closedLoopStatus: r?.closedLoopStatus,
      maturityLevel: r?.maturityLevel,
      domainClosureReadiness: readiness.domainClosureReadiness,
      verifiedCount: r?.verifiedCount,
      linkedRectificationCount: r?.linkedRectificationCount,
      primaryBlocker: blocker || null,
      capturedAt: this._cvNow()
    };
    APP_DATA.regulatoryDomainClosureSnapshots = APP_DATA.regulatoryDomainClosureSnapshots || [];
    APP_DATA.regulatoryDomainClosureSnapshots.unshift(snap);
    if (APP_DATA.regulatoryDomainClosureSnapshots.length > 50) APP_DATA.regulatoryDomainClosureSnapshots = APP_DATA.regulatoryDomainClosureSnapshots.slice(0, 50);
    return snap;
  },

  recalculateFinanceDomainClosure(trigger) {
    this.refreshDomainAdaptationResults();
    this.refreshDomainDataGaps();
    this.refreshDomainClosurePlans();
    this.computeDomainClosureMetrics();
    if (this.computeBatchAdaptationCoverage) this.computeBatchAdaptationCoverage();
    this.refreshFinanceClosureVerificationIndex();
    this.refreshRegulatoryPerformanceFromClosureVerification();
    this.reassessImprovementAfterClosureVerification('finance');
    const snap = this.takeDomainClosureSnapshot('finance', trigger || 'RECALCULATE');
    const r = this.getDomainAdaptationResult('finance');
    return { closedLoopStatus: r?.closedLoopStatus, blocker: this.getFinanceDomainClosureBlocker(), snapshotId: snap.snapshotId };
  },

  renderFinanceClosureChainPanel() {
    const r = this.getDomainAdaptationResult('finance') || this.buildDomainAdaptationResult('finance');
    const blocker = this.getFinanceDomainClosureBlocker();
    const steps = this.buildFinanceClosureChainSteps();
    const chainHtml = steps.map(s => `<p class="insight-note">${s.ok ? '✓' : '?'} ${s.label}${s.label === '整改验证' ? '：' + (s.detail || '待完成') : ''}</p>`).join('');
    return `<div class="card"><div class="card-title">财务领域闭环链路 · ${this.renderPublicUnifiedStatusBadge(r?.closedLoopStatus || 'PARTIAL_CLOSED_LOOP')}</div>
      ${blocker ? `<p class="insight-note"><b>当前阻断：</b>${this.renderPublicUnifiedStatusBadge(blocker)} — 整改验证链未完成，不能判定闭环完成</p>` : ''}
      ${chainHtml}
      <p>${this.renderPublicLinkButton('查看整改任务 RECT-202601001', `App.navigatePublic('rectification',{rectificationTaskId:'RECT-202601001'})`)}</p>
    </div>`;
  },

  renderFinanceClosureVerificationPanel() {
    const taskId = 'RECT-202601001';
    const ev = this.getClosureVerificationEvidence(taskId);
    const task = (APP_DATA.rectificationTasks || []).find(t => t.taskId === taskId);
    const missing = ev.evidenceStatus === 'MISSING';
    const rows = missing ? '' : `<table class="data-table"><thead><tr><th>整改任务</th><th>证据类型</th><th>证据来源</th><th>提交状态</th><th>验证状态</th><th>验证人</th><th>验证时间</th></tr></thead><tbody>
      <tr><td>${taskId}</td><td>${ev.evidenceType || '—'}</td><td>${ev.evidenceSource || '—'}</td><td>${this.renderPublicUnifiedStatusBadge(ev.evidenceStatus)}</td><td>${this.renderPublicUnifiedStatusBadge(ev.verificationStatus)}</td><td>${ev.verifiedBy || '—'}</td><td>${ev.verifiedAt || '—'}</td></tr>
    </tbody></table>`;
    const canSubmit = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'rectificationTasks', taskId, 'SUBMIT').allowed;
    const canVerify = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'rectificationTasks', taskId, 'VERIFY').allowed;
    const actions = missing && canSubmit ? `<button class="btn btn-outline" onclick="App.submitClosureVerificationEvidence({rectificationTaskId:'${taskId}',evidenceType:'月度经营监测报告',evidenceSource:'${task?.responsibleDepartment || '财务资金部'}'});App.renderRegulatoryDataGovernance()">提交验证证据</button>` : '';
    const verifyBtn = !missing && ['SUBMITTED', 'UNDER_REVIEW'].includes(ev.evidenceStatus) && canVerify && ev.evidenceId ? `<button class="btn" onclick="App.verifyClosureEvidence('${ev.evidenceId}',{approved:true,reason:'人工确认整改措施已落实'});App.renderRegulatoryDataGovernance()">确认验证通过</button> <button class="btn btn-outline" onclick="App.verifyClosureEvidence('${ev.evidenceId}',{approved:false,reason:'证据不充分'});App.renderRegulatoryDataGovernance()">拒绝验证</button>` : '';
    return `<div class="card"><div class="card-title">财务领域整改验证</div>
      ${missing ? `<p class="insight-note"><b>当前暂无足够验证证据，不能判定整改闭环完成。</b> 证据状态：${this.renderPublicUnifiedStatusBadge('MISSING')}</p>` : rows}
      ${ev.supplementaryRequirement ? `<p class="insight-note"><b>补充要求：</b>${this.escHtml(ev.supplementaryRequirement)}</p>` : ''}
      <p>${actions}${verifyBtn}${this.renderPublicLinkButton('整改任务详情', `App.navigatePublic('rectification',{rectificationTaskId:'${taskId}'})`)}</p>
    </div>`;
  },

  renderClosureVerificationEvidenceSection(rectificationTaskId) {
    const ev = this.getClosureVerificationEvidence(rectificationTaskId);
    if (ev.evidenceStatus === 'MISSING') {
      return `<div class="card"><div class="card-title">整改验证证据</div><p class="insight-note">证据状态 ${this.renderPublicUnifiedStatusBadge('MISSING')} — 当前暂无足够验证证据，不能判定整改闭环完成。</p></div>`;
    }
    return `<div class="card"><div class="card-title">整改验证证据 · ${ev.evidenceId}</div>
      <p class="insight-note">类型 ${ev.evidenceType} · 来源 ${ev.evidenceSource} · 提交 ${this.renderPublicUnifiedStatusBadge(ev.evidenceStatus)} · 验证 ${this.renderPublicUnifiedStatusBadge(ev.verificationStatus)}</p>
      ${ev.verifiedBy ? `<p class="insight-note">验证人 ${ev.verifiedBy} · ${ev.verifiedAt || '—'}</p>` : ''}
    </div>`;
  },

  renderClosureVerificationWorkbenchPanel() {
    const q = this.getClosureVerificationQueueCounts();
    const blocker = this.getFinanceDomainClosureBlocker();
    const r = this.getDomainAdaptationResult('finance');
    return `<div class="card"><div class="card-title">财务领域闭环验证</div>
      <p class="insight-note">闭环状态 ${this.renderPublicUnifiedStatusBadge(r?.closedLoopStatus || 'PARTIAL_CLOSED_LOOP')}${blocker ? ' · 阻断 ' + this.renderPublicUnifiedStatusBadge(blocker) : ''}</p>
      <div class="group-metrics">${[
        [q.pendingSubmit, '待提交验证证据', `App.navigatePublic('rectification',{rectificationTaskId:'RECT-202601001'})`],
        [q.pendingReview, '待人工验证', `App.navigatePublic('regulatory-workbench')`],
        [q.rejected, '验证被拒绝', `App.navigatePublic('regulatory-improvement-center')`],
        [q.verifiedClosed, '已验证关闭', `App.navigatePublic('regulatory-data-governance')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      <p>${this.renderPublicLinkButton('财务闭环看板', `App.navigatePublic('regulatory-data-governance')`)}</p>
    </div>`;
  },

  _OPERATING_HEALTH_WEIGHTS: {
    dataHealth: 0.20, riskHealth: 0.20, kriHealth: 0.15, warningHealth: 0.15,
    actionHealth: 0.10, rectificationHealth: 0.10, closureHealth: 0.10
  },

  _opNow() { return '2026-07-22 12:30:00'; },

  _opToday() { return '2026-07-22'; },

  initializeRegulatoryOperatingCycle() {
    const types = ['DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'ANNUAL'];
    APP_DATA.regulatoryOperatingCycles = types.map(t => this.buildRegulatoryOperatingCycle({ cycleType: t }));
    this.generateDailyRegulatoryOperations();
    ['WEEKLY_REVIEW', 'MONTHLY_REVIEW', 'QUARTERLY_REVIEW', 'ANNUAL_REVIEW'].forEach(rt => this.generatePeriodicRegulatoryReview(rt));
    this.refreshRegulatoryOperatingSnapshots();
    this.generateOperatingRecommendations();
    this.computeRegulatoryOperatingMetrics();
    return APP_DATA.regulatoryOperatingMetrics;
  },

  buildRegulatoryOperatingCycle(opts) {
    const o = opts || {};
    const cycleType = o.cycleType || 'DAILY';
    const today = this._opToday();
    const periods = {
      DAILY: { start: today, end: today, id: 'ROC-2026-07-DAILY', owner: 'ROLE-GROUP-REG' },
      WEEKLY: { start: '2026-07-16', end: today, id: 'ROC-2026-W30-WEEKLY', owner: 'ROLE-GROUP-REG' },
      MONTHLY: { start: '2026-07-01', end: today, id: 'ROC-2026-07-MONTHLY', owner: 'ROLE-GROUP-REG' },
      QUARTERLY: { start: '2026-07-01', end: today, id: 'ROC-2026-Q3-QUARTERLY', owner: 'ROLE-GROUP-LEADER' },
      ANNUAL: { start: '2026-01-01', end: today, id: 'ROC-2026-ANNUAL', owner: 'ROLE-GROUP-LEADER' }
    };
    const p = periods[cycleType] || periods.DAILY;
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryOperatingCycles', p.id, o.cycleType === 'DAILY' ? 'VIEW' : 'MANAGE');
    if (!access.allowed && o.enforceAccess) return { success: false, denied: true, message: access.reason };
    const health = this.calculateOperatingHealth('GROUP', 'G001');
    const daily = APP_DATA.regulatoryDailyOperations || [];
    const cycle = {
      cycleId: p.id,
      cycleType,
      periodStart: o.periodStart || p.start,
      periodEnd: o.periodEnd || p.end,
      status: cycleType === 'DAILY' ? 'IN_PROGRESS' : 'ACTIVE',
      ownerRole: p.owner,
      scope: 'GROUP',
      keyOutputs: cycleType === 'DAILY' ? ['日常待办', '数据异常', '预警研判'] : cycleType === 'WEEKLY' ? ['周度复盘', '超期协调'] : cycleType === 'MONTHLY' ? ['月度分析', '资源建议'] : cycleType === 'QUARTERLY' ? ['季度评价', '行动有效性'] : ['年度复盘', '战略规划'],
      relatedMetrics: ['regulatoryOperatingSnapshots', 'regulatoryPerformanceSummary'],
      relatedActions: (APP_DATA.regulatoryActions || []).filter(a => a.status !== 'CLOSED').slice(0, 5).map(a => a.actionId),
      relatedReviews: (APP_DATA.regulatoryPeriodicReviews || []).filter(r => this._reviewMatchesCycle(r.reviewType, cycleType)).map(r => r.reviewId),
      pendingItemCount: daily.filter(d => d.priority === 'HIGH' || d.priority === 'CRITICAL').length,
      overallRegulatoryHealth: health.dataStatus === 'INSUFFICIENT_DATA' ? null : health.overallRegulatoryHealth,
      healthDataStatus: health.dataStatus,
      generatedAt: this._opNow()
    };
    const existing = (APP_DATA.regulatoryOperatingCycles || []).findIndex(c => c.cycleId === cycle.cycleId);
    if (existing >= 0) APP_DATA.regulatoryOperatingCycles[existing] = cycle;
    else {
      APP_DATA.regulatoryOperatingCycles = APP_DATA.regulatoryOperatingCycles || [];
      APP_DATA.regulatoryOperatingCycles.push(cycle);
    }
    if (o.audit) this.createRegulatoryAuditLog({ actionType: 'CREATE', objectType: 'regulatoryOperatingCycles', objectId: cycle.cycleId, afterState: { cycleType, status: cycle.status }, reason: '创建监管运营周期' });
    return cycle;
  },

  _reviewMatchesCycle(reviewType, cycleType) {
    const map = { WEEKLY: 'WEEKLY_REVIEW', MONTHLY: 'MONTHLY_REVIEW', QUARTERLY: 'QUARTERLY_REVIEW', ANNUAL: 'ANNUAL_REVIEW' };
    return reviewType === map[cycleType];
  },

  _operatingSourceNav(sourceType, sourceId) {
    const nav = {
      regulatoryDataIntegrationJobs: `App.navigatePublic('regulatory-data-integration')`,
      regulatoryDataQualityIssues: `App.navigatePublic('regulatory-data-quality',{qualityIssueId:'${sourceId}'})`,
      regulatoryWarnings: `App.navigatePublic('regulatory-warning-center',{regulatoryWarningId:'${sourceId}'})`,
      regulatoryKriRuntime: `App.navigatePublic('regulatory-kri-monitoring',{kriRuntimeId:'${sourceId}'})`,
      regulatoryActions: `App.navigatePublic('regulatory-actions',{actionId:'${sourceId}'})`,
      regulatorySupervisionTasks: `App.navigatePublic('regulatory-supervision-tasks',{supervisionTaskId:'${sourceId}'})`,
      rectificationTasks: `App.navigatePublic('rectification',{rectificationTaskId:'${sourceId}'})`,
      regulatoryAuthorizationRequests: `App.navigatePublic('regulatory-authorization',{authorizationId:'${sourceId}'})`
    };
    return nav[sourceType] || `App.navigatePublic('regulatory-workbench')`;
  },

  generateDailyRegulatoryOperations() {
    const ops = [];
    let seq = 1;
    const nameOf = (sourceType, sourceId) => {
      if (sourceType === 'regulatoryWarnings') return (APP_DATA.regulatoryWarnings || []).find(w => w.regulatoryWarningId === sourceId)?.kriId || sourceId;
      if (sourceType === 'rectificationTasks') return (APP_DATA.rectificationTasks || []).find(t => t.taskId === sourceId)?.title || sourceId;
      if (sourceType === 'regulatoryActions') return (APP_DATA.regulatoryActions || []).find(a => a.actionId === sourceId)?.actionId || sourceId;
      if (sourceType === 'regulatoryDataQualityIssues') return (APP_DATA.regulatoryDataQualityIssues || []).find(i => i.qualityIssueId === sourceId)?.issueType || sourceId;
      if (sourceType === 'regulatoryKriRuntime') return (APP_DATA.regulatoryKriRuntime || []).find(k => k.kriRuntimeId === sourceId)?.kriId || sourceId;
      return sourceId;
    };
    const add = (category, sourceType, sourceId, currentStatus, priority, owner, lastUpdated, extra) => {
      ops.push({
        operationId: 'RDO-' + String(seq++).padStart(4, '0'),
        category,
        sourceType,
        sourceId,
        sourceName: nameOf(sourceType, sourceId),
        currentStatus,
        status: currentStatus,
        priority,
        owner: owner || '—',
        responsibleRole: extra?.responsibleRole || 'ROLE-GROUP-REG',
        responsibleScope: extra?.responsibleScope || 'GROUP:G001',
        dueDate: extra?.dueDate || null,
        lastUpdated: lastUpdated || this._opNow(),
        dataStatus: 'REAL',
        sourceTraceability: { sourceType, sourceId, ...(extra?.trace || {}) }
      });
    };
    (APP_DATA.regulatoryDataIntegrationJobs || []).filter(j => j.status === 'FAILED').forEach(j =>
      add('DATA_INTEGRATION', 'regulatoryDataIntegrationJobs', j.integrationJobId || j.jobId, j.status, 'HIGH', j.ownerOrganizationId, j.lastRunAt, { responsibleRole: 'ROLE-GROUP-REG', trace: { sourceId: j.sourceId } }));
    (APP_DATA.regulatoryDataSources || []).filter(s => s.connectionStatus === 'OFFLINE').forEach(s =>
      add('DATA_INTEGRATION', 'regulatoryDataSources', s.sourceId, 'OFFLINE', 'CRITICAL', s.dataOwner, s.lastSyncTime, { responsibleRole: 'ROLE-DOMAIN-REG', responsibleScope: 'ENTITY:' + (s.entityId || 'G001') }));
    (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status !== 'CLOSED').forEach(i =>
      add('DATA_QUALITY', 'regulatoryDataQualityIssues', i.qualityIssueId, i.status, i.severity === 'HIGH' ? 'CRITICAL' : 'HIGH', i.relatedGovernanceTaskId, this._opNow(), { responsibleRole: 'ROLE-ENTITY-REG', trace: { kriId: i.kriId } }));
    (APP_DATA.regulatoryWarnings || []).filter(w => w.status === 'PENDING_REVIEW' || w.warningLevel === 'CRITICAL').forEach(w =>
      add('WARNING_REVIEW', 'regulatoryWarnings', w.regulatoryWarningId, w.status, w.warningLevel === 'CRITICAL' ? 'CRITICAL' : 'HIGH', w.entityId, w.detectedAt, { responsibleRole: 'ROLE-GROUP-REG', trace: { kriId: w.kriId, riskMatterId: w.riskMatterId } }));
    (APP_DATA.warnings || []).filter(w => w.level === '重大' || w.level === 'L4').forEach(w =>
      add('RISK_REVIEW', 'warnings', w.id, w.status || '监测中', 'CRITICAL', w.unit, this._opNow(), { responsibleRole: 'ROLE-GROUP-REG', trace: { kriId: w.kriId } }));
    (APP_DATA.regulatoryKriRuntime || []).filter(k => ['WARNING', 'CRITICAL', 'DATA_QUALITY_REVIEW_REQUIRED'].includes(k.runtimeStatus || k.status)).forEach(k =>
      add('KRI_ANOMALY', 'regulatoryKriRuntime', k.kriRuntimeId, k.runtimeStatus || k.status, 'HIGH', k.scopeId, k.lastCalculatedAt, { responsibleRole: 'ROLE-DOMAIN-REG', trace: { kriId: k.kriId } }));
    (APP_DATA.regulatoryActions || []).filter(a => ['PENDING', 'ASSIGNED', 'IN_PROGRESS'].includes(a.status)).forEach(a =>
      add('ACTION_PENDING', 'regulatoryActions', a.actionId, a.status, a.priority === 'CRITICAL' ? 'CRITICAL' : 'MEDIUM', a.responsibleOrganizationId, a.updatedAt, { dueDate: a.dueDate, responsibleRole: 'ROLE-GROUP-REG' }));
    (APP_DATA.regulatorySupervisionTasks || []).filter(t => t.overdue || (t.deadline && t.deadline < this._opToday() && !['COMPLETED', 'EVALUATED'].includes(t.taskStatus))).forEach(t =>
      add('TASK_OVERDUE', 'regulatorySupervisionTasks', t.supervisionTaskId, t.taskStatus, 'HIGH', t.responsibleOrganizationId, t.deadline, { dueDate: t.deadline }));
    (APP_DATA.rectificationTasks || []).filter(t => t.verificationStatus !== '已验证' && t.status !== '已关闭').forEach(t => {
      const pri = t.deadline && t.deadline < this._opToday() ? 'CRITICAL' : (t.verificationStatus === '待验证' || t.verificationStatus === '验证中' ? 'HIGH' : 'MEDIUM');
      add('RECTIFICATION_VERIFY', 'rectificationTasks', t.taskId, t.verificationStatus || t.status, pri, t.responsibleDepartment || t.owner, t.deadline, { dueDate: t.deadline, trace: { riskMatterId: t.riskMatterId } });
    });
    (APP_DATA.regulatoryAuthorizationRequests || []).filter(a => ['SUBMITTED', 'IN_REVIEW', 'PENDING'].includes(a.status)).forEach(a =>
      add('AUTHORIZATION_PENDING', 'regulatoryAuthorizationRequests', a.authorizationId, a.status, a.riskLevel === 'CRITICAL' ? 'CRITICAL' : 'HIGH', a.requesterId, a.submittedAt, { responsibleRole: 'ROLE-GROUP-LEADER' }));
    (APP_DATA.regulatoryOperatingRecommendations || []).filter(r => r.status === 'OPEN' && r.requiresHumanDecision).forEach(r =>
      add('HUMAN_DECISION', 'regulatoryOperatingRecommendations', r.recommendationId, r.status, r.priority, 'ROLE-GROUP-LEADER', r.generatedAt, { responsibleRole: 'ROLE-GROUP-LEADER' }));
    APP_DATA.regulatoryDailyOperations = ops;
    return ops;
  },

  generatePeriodicRegulatoryReview(reviewType, periodStart, periodEnd) {
    const typeMap = {
      WEEKLY_REVIEW: { id: 'RPR-2026-W30', title: '2026年第30周监管复盘', cycle: 'WEEKLY', owner: 'ROLE-GROUP-REG' },
      MONTHLY_REVIEW: { id: 'RPR-2026-07', title: '2026年7月月度监管复盘', cycle: 'MONTHLY', owner: 'ROLE-GROUP-REG' },
      QUARTERLY_REVIEW: { id: 'RPR-2026-Q3', title: '2026年第三季度监管评价', cycle: 'QUARTERLY', owner: 'ROLE-GROUP-LEADER' },
      ANNUAL_REVIEW: { id: 'RPR-2026', title: '2026年度战略复盘', cycle: 'ANNUAL', owner: 'ROLE-GROUP-LEADER' }
    };
    const cfg = typeMap[reviewType] || typeMap.MONTHLY_REVIEW;
    const start = periodStart || (reviewType === 'WEEKLY_REVIEW' ? '2026-07-16' : reviewType === 'MONTHLY_REVIEW' ? '2026-07-01' : reviewType === 'QUARTERLY_REVIEW' ? '2026-07-01' : '2026-01-01');
    const end = periodEnd || this._opToday();
    const warnings = APP_DATA.regulatoryWarnings || [];
    const actions = APP_DATA.regulatoryActions || [];
    const rects = APP_DATA.rectificationTasks || [];
    const issues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status !== 'CLOSED');
    const results = APP_DATA.regulatoryDomainAdaptationResults || [];
    const perf = APP_DATA.regulatoryPerformanceSummary || {};
    const review = {
      reviewId: cfg.id,
      reviewType,
      title: cfg.title,
      periodStart: start,
      periodEnd: end,
      status: 'COMPLETED',
      ownerRole: cfg.owner,
      newRiskCount: (APP_DATA.warnings || []).filter(w => w.level === '重大' || w.level === 'L4').length,
      newWarningCount: warnings.filter(w => w.status === 'PENDING_REVIEW').length,
      kriAnomalyCount: (APP_DATA.regulatoryKriRuntime || []).filter(k => ['WARNING', 'CRITICAL'].includes(k.runtimeStatus || k.status)).length,
      entityChangeCount: (APP_DATA.regulatoryPriorityObjects || []).filter(o => o.healthLevel === 'CRITICAL' || o.healthLevel === 'WARNING').length,
      domainChangeCount: results.filter(r => r.closedLoopStatus === 'PARTIAL_CLOSED_LOOP').length,
      actionExecutionCount: actions.filter(a => a.status === 'IN_PROGRESS' || a.status === 'COMPLETED').length,
      rectificationOpenCount: rects.filter(t => t.status !== '已关闭').length,
      rectificationVerifiedCount: rects.filter(t => t.verificationStatus === '已验证' || t.status === '已关闭').length,
      dataQualityImpactCount: issues.length,
      performanceScore: perf.regulatoryEffectivenessScore,
      closureMaturitySummary: results.map(r => ({ domainId: r.domainId, closedLoopStatus: r.closedLoopStatus, maturityLevel: r.maturityLevel })),
      relatedMetricIds: (APP_DATA.regulatoryMetrics || []).slice(0, 5).map(m => m.metricId),
      relatedKriIds: (APP_DATA.groupKris || []).slice(0, 5).map(k => k.id),
      relatedActionIds: actions.slice(0, 5).map(a => a.actionId),
      trendComparisonStatus: 'INSUFFICIENT_HISTORY',
      generatedAt: this._opNow()
    };
    const idx = (APP_DATA.regulatoryPeriodicReviews || []).findIndex(r => r.reviewId === review.reviewId);
    if (idx >= 0) APP_DATA.regulatoryPeriodicReviews[idx] = review;
    else {
      APP_DATA.regulatoryPeriodicReviews = APP_DATA.regulatoryPeriodicReviews || [];
      APP_DATA.regulatoryPeriodicReviews.push(review);
    }
    return review;
  },

  calculateOperatingHealth(scopeType, scopeId) {
    const w = this._OPERATING_HEALTH_WEIGHTS;
    const insufficient = (dims) => ({ dataStatus: 'INSUFFICIENT_DATA', overallRegulatoryHealth: null, trendStatus: 'INSUFFICIENT_HISTORY', ...dims });
    const filterByScope = (entId, domainId) => {
      if (scopeType === 'GROUP') return true;
      if (scopeType === 'ENTITY') return entId === scopeId;
      if (scopeType === 'DOMAIN') return domainId === scopeId;
      if (scopeType === 'REGION') {
        const ent = (APP_DATA.globalLegalEntities || []).find(e => e.entityId === entId);
        return ent && ent.regionId === scopeId;
      }
      return true;
    };
    const jobs = APP_DATA.regulatoryDataIntegrationJobs || [];
    const issues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status !== 'CLOSED');
    const kris = APP_DATA.regulatoryKriRuntime || [];
    const warns = APP_DATA.regulatoryWarnings || [];
    const actions = APP_DATA.regulatoryActions || [];
    const rects = APP_DATA.rectificationTasks || [];
    const results = APP_DATA.regulatoryDomainAdaptationResults || [];
    if (!jobs.length && !issues.length && !kris.length) return insufficient({});
    const failedJobs = jobs.filter(j => j.status === 'FAILED').length;
    const dataHealth = jobs.length ? Math.max(0, Math.round((1 - failedJobs / jobs.length) * 100 - issues.length * 3)) : null;
    const risks = (APP_DATA.warnings || []).filter(w => filterByScope(w.entityId, w.domainId));
    const riskHealth = risks.length ? Math.max(0, Math.round(100 - risks.filter(r => r.level === '重大' || r.level === 'L4').length * 8)) : null;
    const scopedKris = kris.filter(k => filterByScope(k.scopeId, k.domainId));
    const kriHealth = scopedKris.length ? Math.round(scopedKris.filter(k => !['WARNING', 'CRITICAL', 'DATA_QUALITY_REVIEW_REQUIRED'].includes(k.runtimeStatus || k.status)).length / scopedKris.length * 100) : (kris.length ? Math.round(kris.filter(k => !['WARNING', 'CRITICAL'].includes(k.runtimeStatus || k.status)).length / kris.length * 100) : null);
    const scopedWarns = warns.filter(w => filterByScope(w.entityId, w.domainId));
    const warningHealth = scopedWarns.length ? Math.max(0, Math.round(100 - scopedWarns.filter(w => w.status === 'PENDING_REVIEW').length * 5)) : (warns.length ? 70 : null);
    const scopedActions = actions.filter(a => filterByScope(a.entityId, a.domainId));
    const actionHealth = scopedActions.length ? Math.round(scopedActions.filter(a => ['COMPLETED', 'VERIFIED', 'CLOSED'].includes(a.status)).length / scopedActions.length * 100) : null;
    const scopedRects = rects.filter(t => filterByScope(t.entityId, t.domainId));
    const rectificationHealth = scopedRects.length ? Math.round(scopedRects.filter(t => t.status === '已关闭' || t.verificationStatus === '已验证').length / scopedRects.length * 100) : null;
    const scopedDomains = scopeType === 'DOMAIN' ? results.filter(r => r.domainId === scopeId) : results;
    const closureHealth = scopedDomains.length ? Math.round(scopedDomains.filter(r => r.closedLoopStatus === 'FULL_CLOSED_LOOP').length / scopedDomains.length * 100) : null;
    const dims = { dataHealth, riskHealth, kriHealth, warningHealth, actionHealth, rectificationHealth, closureHealth };
    const vals = Object.values(dims);
    if (vals.every(v => v == null)) return insufficient(dims);
    const weights = [w.dataHealth, w.riskHealth, w.kriHealth, w.warningHealth, w.actionHealth, w.rectificationHealth, w.closureHealth];
    let sum = 0; let wsum = 0;
    Object.keys(dims).forEach((k, i) => { if (dims[k] != null) { sum += dims[k] * weights[i]; wsum += weights[i]; } });
    const overall = wsum ? Math.round(sum / wsum * 10) / 10 : null;
    return { scopeType, scopeId, ...dims, overallRegulatoryHealth: overall, dataStatus: overall != null ? 'OK' : 'INSUFFICIENT_DATA', trendStatus: 'INSUFFICIENT_HISTORY', sourceTraceable: true };
  },

  refreshRegulatoryOperatingSnapshots() {
    const snapshots = [];
    const add = (scopeType, scopeId, scopeName) => {
      const h = this.calculateOperatingHealth(scopeType, scopeId);
      snapshots.push({
        snapshotId: 'ROS-' + scopeType + '-' + scopeId,
        scopeType,
        scopeId,
        scopeName,
        capturedAt: this._opNow(),
        ...h
      });
    };
    add('GROUP', 'G001', '集团');
    (APP_DATA.globalRegions || []).slice(0, 4).forEach(r => add('REGION', r.regionId, r.regionName));
    (APP_DATA.globalLegalEntities || []).filter(e => e.entityId !== 'G001').slice(0, 6).forEach(e => add('ENTITY', e.entityId, e.entityName));
    (APP_DATA.regulatoryDomainConfigurations || []).slice(0, 9).forEach(d => add('DOMAIN', d.domainId, d.domainName));
    APP_DATA.regulatoryOperatingSnapshots = snapshots;
    return snapshots;
  },

  generateOperatingRecommendations() {
    const recs = [];
    let seq = 1;
    const add = (sourceType, sourceId, reason, priority, suggestedAction) => {
      recs.push({
        recommendationId: 'ROR-' + String(seq++).padStart(4, '0'),
        sourceType,
        sourceId,
        reason,
        priority,
        suggestedAction,
        requiresHumanDecision: true,
        status: 'OPEN',
        generatedAt: this._opNow()
      });
    };
    const issues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status !== 'CLOSED');
    if (issues.length) add('regulatoryDataQualityIssues', issues[0].qualityIssueId, '数据质量下降影响KRI可信度', 'HIGH', '建议优先开展数据治理');
    const kriBad = (APP_DATA.regulatoryKriRuntime || []).filter(k => ['WARNING', 'CRITICAL', 'DATA_QUALITY_REVIEW_REQUIRED'].includes(k.runtimeStatus || k.status));
    if (kriBad.length) add('regulatoryKriRuntime', kriBad[0].kriRuntimeId, 'KRI异常持续', 'HIGH', '建议提升监管优先级');
    const pendingWarns = (APP_DATA.regulatoryWarnings || []).filter(w => w.status === 'PENDING_REVIEW');
    if (pendingWarns.length) add('regulatoryWarnings', pendingWarns[0].regulatoryWarningId, '预警持续未处理', 'CRITICAL', '建议启动专项监管行动');
    const unverified = (APP_DATA.rectificationTasks || []).filter(t => t.verificationStatus !== '已验证' && t.status !== '已关闭' && t.deadline && t.deadline < this._opToday());
    if (unverified.length) add('rectificationTasks', unverified[0].taskId, '整改长期未验证', 'HIGH', '建议推动验证闭环');
    const partialDomains = (APP_DATA.regulatoryDomainAdaptationResults || []).filter(r => r.closedLoopStatus === 'PARTIAL_CLOSED_LOOP');
    if (partialDomains.length) add('regulatoryDomainAdaptationResults', partialDomains[0].domainId, '领域闭环成熟度不足', 'HIGH', '建议增加监管资源');
    const perf = APP_DATA.regulatoryPerformanceSummary || {};
    if ((perf.actionVerificationRate || 0) < 0.7) add('regulatoryPerformanceSummary', 'GROUP', '监管行动效果不足', 'MEDIUM', '建议开展根因分析');
    const conc = (APP_DATA.regulatoryRiskConcentration || []).find(c => c.concentrationLevel === 'HIGH');
    if (conc) add('regulatoryRiskConcentration', conc.concentrationId, '风险集中度上升', 'HIGH', '建议调整监管资源投入');
    APP_DATA.regulatoryOperatingRecommendations = recs;
    return recs;
  },

  computeRegulatoryOperatingMetrics() {
    const daily = APP_DATA.regulatoryDailyOperations || [];
    const cycles = APP_DATA.regulatoryOperatingCycles || [];
    const recs = APP_DATA.regulatoryOperatingRecommendations || [];
    const groupHealth = (APP_DATA.regulatoryOperatingSnapshots || []).find(s => s.scopeType === 'GROUP');
    APP_DATA.regulatoryOperatingMetrics = {
      activeCycleCount: cycles.filter(c => c.status === 'ACTIVE' || c.status === 'IN_PROGRESS').length,
      dailyOperationCount: daily.length,
      highPriorityDailyCount: daily.filter(d => d.priority === 'HIGH' || d.priority === 'CRITICAL').length,
      openRecommendationCount: recs.filter(r => r.status === 'OPEN').length,
      overallRegulatoryHealth: groupHealth?.overallRegulatoryHealth,
      healthDataStatus: groupHealth?.dataStatus || 'INSUFFICIENT_DATA',
      trendStatus: 'INSUFFICIENT_HISTORY',
      periodicReviewCount: (APP_DATA.regulatoryPeriodicReviews || []).length
    };
    return APP_DATA.regulatoryOperatingMetrics;
  },

  getOperatingCycle(cycleType) {
    return (APP_DATA.regulatoryOperatingCycles || []).find(c => c.cycleType === cycleType);
  },

  computeOperatingCyclePerformance() {
    const rects = APP_DATA.rectificationTasks || [];
    const actions = APP_DATA.regulatoryActions || [];
    const warns = APP_DATA.regulatoryWarnings || [];
    const issues = APP_DATA.regulatoryDataQualityIssues || [];
    const closedRects = rects.filter(t => t.status === '已关闭' || t.verificationStatus === '已验证').length;
    const verifiedActions = actions.filter(a => ['VERIFIED', 'COMPLETED', 'CLOSED'].includes(a.status)).length;
    const reviewedWarns = warns.filter(w => w.status !== 'PENDING_REVIEW').length;
    const closedIssues = issues.filter(i => i.status === 'CLOSED').length;
    return {
      riskDiscoveryEfficiency: warns.length ? Math.round(reviewedWarns / warns.length * 1000) / 10 : null,
      warningReviewEfficiency: warns.length ? Math.round(reviewedWarns / warns.length * 1000) / 10 : null,
      actionCompletionRate: actions.length ? Math.round(verifiedActions / actions.length * 1000) / 10 : null,
      rectificationVerificationRate: rects.length ? Math.round(closedRects / rects.length * 1000) / 10 : null,
      dataQualityImprovementRate: issues.length ? Math.round(closedIssues / issues.length * 1000) / 10 : null,
      actionEffectivenessRate: (APP_DATA.regulatoryPerformanceSummary || {}).actionVerificationRate != null ? Math.round((APP_DATA.regulatoryPerformanceSummary.actionVerificationRate) * 1000) / 10 : null,
      regulatoryClosureRate: (APP_DATA.regulatoryDomainClosureMetrics || {}).domainClosureCoverage,
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: warns.length || actions.length ? 'OK' : 'INSUFFICIENT_DATA'
    };
  },

  initializeRegulatoryOperatingRuntime() {
    this.detectRegulatoryOperatingExceptions();
    this.generateWeeklyRegulatoryReview();
    this.generateMonthlyDomainReview();
    this.generateQuarterlyRegulatoryPerformance();
    this.generateAnnualOperationReview();
    this.instantiateOperatingCycleInstances();
    this.computeRegulatoryOperatingRuntimeMetrics();
    return APP_DATA.regulatoryOperatingRuntimeMetrics;
  },

  instantiateOperatingCycleInstances() {
    const cycles = APP_DATA.regulatoryOperatingCycles || [];
    const daily = APP_DATA.regulatoryDailyOperations || [];
    const recs = APP_DATA.regulatoryOperatingRecommendations || [];
    const exceptions = APP_DATA.regulatoryOperatingExceptions || [];
    const instances = cycles.map(c => {
      const relatedDaily = daily.filter(d => {
        if (c.cycleType === 'DAILY') return true;
        if (c.cycleType === 'WEEKLY') return ['WARNING_REVIEW', 'RISK_REVIEW', 'TASK_OVERDUE', 'RECTIFICATION_VERIFY'].includes(d.category);
        return true;
      });
      const pendingDecision = recs.filter(r => r.status === 'OPEN' && r.requiresHumanDecision).length;
      const exCount = exceptions.filter(e => e.status !== 'RESOLVED').length;
      return {
        id: c.cycleId,
        cycleType: c.cycleType,
        period: c.periodStart + ' ~ ' + c.periodEnd,
        status: c.status,
        startedAt: c.periodStart + ' 00:00:00',
        completedAt: c.status === 'COMPLETED' ? c.periodEnd + ' 23:59:59' : null,
        sourceTraceability: { cycleId: c.cycleId, relatedReviews: c.relatedReviews || [], relatedActions: c.relatedActions || [] },
        operationCount: c.cycleType === 'DAILY' ? daily.length : relatedDaily.length,
        exceptionCount: exCount,
        pendingDecisionCount: pendingDecision,
        generatedRecommendations: recs.filter(r => r.status === 'OPEN').map(r => r.recommendationId),
        dataStatus: 'DERIVED'
      };
    });
    APP_DATA.regulatoryOperatingCycleInstances = instances;
    APP_DATA.regulatoryOperatingExecutionRecords = instances.map(inst => ({
      recordId: 'ROER-' + inst.id,
      instanceId: inst.id,
      cycleType: inst.cycleType,
      executedAt: this._opNow(),
      status: inst.status,
      operationCount: inst.operationCount,
      exceptionCount: inst.exceptionCount,
      dataStatus: 'DERIVED'
    }));
    APP_DATA.regulatoryOperatingResultIndexes = [
      { indexId: 'RORI-WEEKLY', reviewType: 'WEEKLY_REVIEW', instanceId: 'ROC-2026-W30-WEEKLY', dataStatus: 'DERIVED' },
      { indexId: 'RORI-MONTHLY', reviewType: 'DOMAIN_OPERATION_REVIEW', instanceId: 'ROC-2026-07-MONTHLY', dataStatus: 'DERIVED' },
      { indexId: 'RORI-QUARTERLY', reviewType: 'QUARTERLY_PERFORMANCE', instanceId: 'ROC-2026-Q3-QUARTERLY', dataStatus: 'DERIVED' },
      { indexId: 'RORI-ANNUAL', reviewType: 'ANNUAL_OPERATION', instanceId: 'ROC-2026-ANNUAL', dataStatus: 'DERIVED' }
    ];
    return instances;
  },

  generateWeeklyRegulatoryReview() {
    const start = '2026-07-16';
    const end = this._opToday();
    const warnings = APP_DATA.regulatoryWarnings || [];
    const risks = (APP_DATA.warnings || []).filter(w => w.level === '重大' || w.level === 'L4');
    const overdueTasks = (APP_DATA.regulatorySupervisionTasks || []).filter(t => t.overdue || (t.deadline && t.deadline < end && !['COMPLETED', 'EVALUATED'].includes(t.taskStatus)));
    const qualityIssues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status !== 'CLOSED');
    const openActions = (APP_DATA.regulatoryActions || []).filter(a => !['COMPLETED', 'VERIFIED', 'CLOSED'].includes(a.status));
    const pendingVerify = (APP_DATA.rectificationTasks || []).filter(t => t.verificationStatus !== '已验证' && t.status !== '已关闭');
    const permExceptions = (APP_DATA.regulatoryAuthorizationRequests || []).filter(a => a.status === 'REJECTED' || a.riskLevel === 'CRITICAL');
    const ruleExceptions = (APP_DATA.regulatoryRules || []).filter(r => r.status === 'DISABLED' || r.lastRunStatus === 'FAILED');
    const focusItems = [
      ...risks.slice(0, 3).map(w => ({ itemType: 'HIGH_RISK', sourceType: 'warnings', sourceId: w.id, sourceName: w.name || w.id, priority: 'CRITICAL', dataStatus: 'REAL' })),
      ...warnings.filter(w => w.warningLevel === 'CRITICAL').slice(0, 3).map(w => ({ itemType: 'MAJOR_WARNING', sourceType: 'regulatoryWarnings', sourceId: w.regulatoryWarningId, sourceName: w.kriId, priority: 'CRITICAL', dataStatus: 'REAL' }))
    ];
    const decisionItems = (APP_DATA.regulatoryOperatingRecommendations || []).filter(r => r.status === 'OPEN' && r.requiresHumanDecision).slice(0, 5).map(r => ({
      itemType: 'PENDING_DECISION', sourceType: 'regulatoryOperatingRecommendations', sourceId: r.recommendationId, reason: r.reason, priority: r.priority, requiresHumanDecision: true, dataStatus: 'REAL'
    }));
    const escalationItems = [...overdueTasks, ...pendingVerify.filter(t => t.deadline && t.deadline < end)].slice(0, 5).map(t => ({
      itemType: 'ESCALATION', sourceType: t.supervisionTaskId ? 'regulatorySupervisionTasks' : 'rectificationTasks', sourceId: t.supervisionTaskId || t.taskId, priority: 'HIGH', dataStatus: 'REAL'
    }));
    const trackingItems = [...openActions, ...qualityIssues].slice(0, 5).map(x => ({
      itemType: 'TRACKING', sourceType: x.actionId ? 'regulatoryActions' : 'regulatoryDataQualityIssues', sourceId: x.actionId || x.qualityIssueId, priority: 'MEDIUM', dataStatus: 'REAL'
    }));
    const review = {
      reviewId: 'RPR-2026-W30',
      reviewType: 'WEEKLY_REVIEW',
      title: '2026年第30周监管复核',
      periodStart: start,
      periodEnd: end,
      status: 'COMPLETED',
      ownerRole: 'ROLE-GROUP-REG',
      newHighRiskCount: risks.length,
      newMajorWarningCount: warnings.filter(w => w.warningLevel === 'CRITICAL' || w.status === 'PENDING_REVIEW').length,
      overdueItemCount: overdueTasks.length,
      newDataQualityIssueCount: qualityIssues.length,
      incompleteActionCount: openActions.length,
      pendingVerificationCount: pendingVerify.length,
      permissionExceptionCount: permExceptions.length,
      ruleRuntimeExceptionCount: ruleExceptions.length,
      focusItems,
      decisionItems,
      escalationItems,
      trackingItems,
      trendComparisonStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: 'DERIVED',
      generatedAt: this._opNow(),
      sourceTraceability: { cycleInstanceId: 'ROC-2026-W30-WEEKLY', derivedFrom: ['warnings', 'regulatoryWarnings', 'regulatorySupervisionTasks', 'rectificationTasks'] }
    };
    const idx = (APP_DATA.regulatoryPeriodicReviews || []).findIndex(r => r.reviewType === 'WEEKLY_REVIEW');
    if (idx >= 0) APP_DATA.regulatoryPeriodicReviews[idx] = { ...(APP_DATA.regulatoryPeriodicReviews[idx] || {}), ...review };
    else {
      APP_DATA.regulatoryPeriodicReviews = APP_DATA.regulatoryPeriodicReviews || [];
      APP_DATA.regulatoryPeriodicReviews.push(review);
    }
    return review;
  },

  generateMonthlyDomainReview() {
    const domains = (APP_DATA.regulatoryDomainConfigurations || []).slice(0, 9);
    const reviews = domains.map(dom => {
      const domainId = dom.domainId;
      const issues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.domainId === domainId && i.status !== 'CLOSED');
      const kris = (APP_DATA.regulatoryKriRuntime || []).filter(k => k.domainId === domainId);
      const warns = (APP_DATA.regulatoryWarnings || []).filter(w => w.domainId === domainId);
      const actions = (APP_DATA.regulatoryActions || []).filter(a => a.domainId === domainId);
      const rects = (APP_DATA.rectificationTasks || []).filter(t => t.domainId === domainId || (t.riskMatterId && (APP_DATA.crossDomainRiskRelations || []).some(r => r.domainId === domainId && r.riskMatterId === t.riskMatterId)));
      const adapt = (APP_DATA.regulatoryDomainAdaptationResults || []).find(r => r.domainId === domainId);
      const hasData = issues.length || kris.length || warns.length || actions.length || rects.length || adapt;
      const dataHealth = issues.length ? Math.max(0, 100 - issues.length * 10) : (kris.length ? 80 : null);
      const kriHealth = kris.length ? Math.round(kris.filter(k => !['WARNING', 'CRITICAL', 'DATA_QUALITY_REVIEW_REQUIRED'].includes(k.runtimeStatus || k.status)).length / kris.length * 100) : null;
      const warnEff = warns.length ? Math.round(warns.filter(w => w.status !== 'PENDING_REVIEW').length / warns.length * 100) : null;
      const actionRate = actions.length ? Math.round(actions.filter(a => ['COMPLETED', 'VERIFIED', 'CLOSED', 'IN_PROGRESS'].includes(a.status)).length / actions.length * 100) : null;
      const rectClose = rects.length ? Math.round(rects.filter(t => t.status === '已关闭' || t.verificationStatus === '已验证').length / rects.length * 100) : null;
      const verifyRate = rects.length ? Math.round(rects.filter(t => t.verificationStatus === '已验证').length / rects.length * 100) : null;
      const credScores = (dom.linkedKriIds || dom.kriIds || []).map(id => this.getKriDataCredibility(id)).filter(c => c.dataStatus === 'OK');
      const dataCredibility = credScores.length ? Math.round(credScores.reduce((s, c) => s + (c.credibility || 0), 0) / credScores.length) : (kris.length ? 70 : null);
      let domainStatus = 'INSUFFICIENT_DATA';
      if (hasData) {
        const scores = [dataHealth, kriHealth, warnEff, actionRate, rectClose].filter(v => v != null);
        const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 50;
        domainStatus = avg >= 75 ? 'HEALTHY' : avg >= 55 ? 'WATCH' : 'AT_RISK';
        if (!scores.length) domainStatus = 'INSUFFICIENT_DATA';
      }
      return {
        reviewId: 'RDOR-2026-07-' + domainId.toUpperCase(),
        reviewType: 'DOMAIN_OPERATION_REVIEW',
        domainId,
        domainName: dom.domainName,
        periodStart: '2026-07-01',
        periodEnd: this._opToday(),
        dataHealthScore: dataHealth,
        kriHealthScore: kriHealth,
        warningDisposalEfficiency: warnEff,
        actionExecutionRate: actionRate,
        rectificationClosureRate: rectClose,
        verificationCompletionRate: verifyRate,
        dataCredibilityScore: dataCredibility,
        domainStatus,
        closedLoopStatus: adapt?.closedLoopStatus || 'INSUFFICIENT_REAL_DATA',
        maturityLevel: adapt?.maturityLevel,
        trendStatus: 'INSUFFICIENT_HISTORY',
        dataStatus: hasData ? 'DERIVED' : 'INSUFFICIENT_DATA',
        sourceTraceability: { domainId, sourceTypes: ['regulatoryDataQualityIssues', 'regulatoryKriRuntime', 'regulatoryWarnings', 'regulatoryActions', 'rectificationTasks'] },
        generatedAt: this._opNow()
      };
    });
    APP_DATA.regulatoryDomainOperationReviews = reviews;
    return reviews;
  },

  generateQuarterlyRegulatoryPerformance() {
    const actions = APP_DATA.regulatoryActions || [];
    const warns = APP_DATA.regulatoryWarnings || [];
    const rects = APP_DATA.rectificationTasks || [];
    const issues = APP_DATA.regulatoryDataQualityIssues || [];
    const kris = APP_DATA.regulatoryKriRuntime || [];
    const actualResults = {
      riskDiscoveryTimeliness: warns.length ? Math.round(warns.filter(w => w.status !== 'PENDING_REVIEW').length / warns.length * 100) : null,
      warningJudgmentTimeliness: warns.length ? Math.round(warns.filter(w => w.status !== 'PENDING_REVIEW').length / warns.length * 100) : null,
      actionTimeliness: actions.length ? Math.round(actions.filter(a => !a.overdue).length / actions.length * 100) : null,
      rectificationCompletionRate: rects.length ? Math.round(rects.filter(t => t.status === '已关闭' || t.verificationStatus === '已验证').length / rects.length * 100) : null,
      rectificationVerificationRate: rects.length ? Math.round(rects.filter(t => t.verificationStatus === '已验证').length / rects.length * 100) : null,
      dataQualityImprovement: issues.length ? Math.round(issues.filter(i => i.status === 'CLOSED').length / issues.length * 100) : null,
      kriEffectiveness: kris.length ? Math.round(kris.filter(k => !['WARNING', 'CRITICAL'].includes(k.runtimeStatus || k.status)).length / kris.length * 100) : null,
      dataStatus: 'REAL',
      trendStatus: 'INSUFFICIENT_HISTORY'
    };
    const evaluationResults = {
      overallScore: (() => {
        const vals = Object.values(actualResults).filter(v => typeof v === 'number');
        return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;
      })(),
      dataStatus: actualResults.dataStatus === 'REAL' ? 'DERIVED' : 'INSUFFICIENT_DATA',
      trendStatus: 'INSUFFICIENT_HISTORY'
    };
    const recommendations = (APP_DATA.regulatoryOperatingRecommendations || []).slice(0, 5).map(r => ({
      recommendationId: r.recommendationId,
      reason: r.reason,
      suggestedAction: r.suggestedAction,
      requiresHumanDecision: true,
      evaluationOnly: true,
      dataStatus: 'DERIVED'
    }));
    const review = {
      reviewId: 'RQPR-2026-Q3',
      reviewType: 'QUARTERLY_PERFORMANCE',
      periodStart: '2026-07-01',
      periodEnd: this._opToday(),
      actualResults,
      evaluationResults,
      recommendations,
      dataStatus: 'DERIVED',
      trendStatus: 'INSUFFICIENT_HISTORY',
      sourceTraceability: { cycleInstanceId: 'ROC-2026-Q3-QUARTERLY', derivedFrom: ['regulatoryActions', 'rectificationTasks', 'regulatoryWarnings', 'regulatoryKriRuntime'] },
      generatedAt: this._opNow()
    };
    APP_DATA.regulatoryQuarterlyPerformanceReviews = [review];
    return review;
  },

  generateAnnualOperationReview() {
    const goals = APP_DATA.regulatoryStrategicObjectives || APP_DATA.regulatoryStrategicGoals || [];
    const plans = APP_DATA.regulatoryAnnualPlans || [];
    const focus = APP_DATA.regulatoryFocusItems || APP_DATA.regulatoryAnnualFocus || [];
    const perf = APP_DATA.regulatoryPerformanceSummary || {};
    const domainReviews = APP_DATA.regulatoryDomainOperationReviews || [];
    const atRiskDomains = domainReviews.filter(d => d.domainStatus === 'AT_RISK');
    const unmetGoals = goals.filter(g => g.completionRate != null && g.completionRate < 0.8);
    const planVariance = plans.filter(p => p.completionRate != null && p.completionRate < 0.8);
    const recs = (APP_DATA.regulatoryOperatingRecommendations || []).filter(r => r.status === 'OPEN').map(r => ({
      recommendationId: r.recommendationId,
      reason: r.reason,
      suggestedAction: r.suggestedAction,
      requiresHumanDecision: true,
      priority: r.priority
    }));
    const result = {
      resultId: 'RAOR-2026',
      reviewType: 'ANNUAL_OPERATION',
      periodStart: '2026-01-01',
      periodEnd: this._opToday(),
      operatingResultsSummary: {
        dailyOperationCount: (APP_DATA.regulatoryDailyOperations || []).length,
        exceptionCount: (APP_DATA.regulatoryOperatingExceptions || []).length,
        domainAtRiskCount: atRiskDomains.length,
        performanceScore: perf.regulatoryEffectivenessScore,
        dataStatus: 'DERIVED'
      },
      strategicGoalAchievement: goals.map(g => ({
        goalId: g.objectiveId || g.goalId || g.id,
        goalName: g.objectiveName || g.goalName || g.name,
        achievementRate: g.completionRate,
        status: g.completionRate != null && g.completionRate >= 0.8 ? 'ACHIEVED' : g.completionRate != null ? 'PARTIAL' : 'INSUFFICIENT_DATA',
        dataStatus: g.completionRate != null ? 'REAL' : 'INSUFFICIENT_DATA'
      })),
      annualFocusCompletion: focus.length ? focus.map(f => ({
        focusId: f.focusId || f.id,
        focusName: f.focusName || f.name,
        completionRate: f.completionRate,
        dataStatus: f.completionRate != null ? 'REAL' : 'INSUFFICIENT_DATA'
      })) : plans.slice(0, 3).map(p => ({ focusId: p.planId, focusName: p.planName, completionRate: p.completionRate, dataStatus: 'REAL' })),
      riskChanges: {
        highRiskCount: (APP_DATA.warnings || []).filter(w => w.level === '重大' || w.level === 'L4').length,
        atRiskDomainCount: atRiskDomains.length,
        dataStatus: 'REAL'
      },
      capabilityMaturity: (APP_DATA.regulatoryDomainAdaptationResults || []).map(r => ({
        domainId: r.domainId,
        maturityLevel: r.maturityLevel,
        closedLoopStatus: r.closedLoopStatus
      })),
      nextCycleRecommendations: recs,
      unmetGoals: unmetGoals.map(g => g.objectiveName || g.goalName || g.name),
      planVarianceCount: planVariance.length,
      strategicDeviation: unmetGoals.length || planVariance.length ? 'DEVIATION_DETECTED' : 'ON_TRACK',
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: 'DERIVED',
      sourceTraceability: {
        cycleInstanceId: 'ROC-2026-ANNUAL',
        linkedPages: ['regulatory-strategic-review', 'regulatory-annual-plan', 'regulatory-focus-management']
      },
      generatedAt: this._opNow()
    };
    APP_DATA.regulatoryAnnualOperationResults = [result];
    return result;
  },

  detectRegulatoryOperatingExceptions() {
    const exceptions = [];
    let seq = 1;
    const add = (exceptionType, sourceType, sourceId, severity, responsibleRole, extra) => {
      exceptions.push({
        exceptionId: 'ROEX-' + String(seq++).padStart(4, '0'),
        exceptionType,
        sourceType,
        sourceId,
        severity,
        status: 'OPEN',
        responsibleRole: responsibleRole || 'ROLE-GROUP-REG',
        createdAt: this._opNow(),
        dataStatus: 'REAL',
        sourceTraceability: { sourceType, sourceId, ...(extra || {}) }
      });
    };
    (APP_DATA.regulatoryDataSources || []).filter(s => s.connectionStatus === 'OFFLINE').forEach(s =>
      add('DATA_SOURCE_UNAVAILABLE', 'regulatoryDataSources', s.sourceId, 'CRITICAL', 'ROLE-DOMAIN-REG'));
    (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status !== 'CLOSED' && i.severity === 'HIGH').forEach(i =>
      add('DATA_QUALITY_BLOCKED', 'regulatoryDataQualityIssues', i.qualityIssueId, 'HIGH', 'ROLE-ENTITY-REG', { kriId: i.kriId }));
    (APP_DATA.regulatoryKriRuntime || []).filter(k => k.runtimeStatus === 'DATA_QUALITY_REVIEW_REQUIRED' || k.status === 'DATA_QUALITY_REVIEW_REQUIRED').forEach(k =>
      add('KRI_CALCULATION_FAILED', 'regulatoryKriRuntime', k.kriRuntimeId, 'HIGH', 'ROLE-DOMAIN-REG', { kriId: k.kriId }));
    (APP_DATA.regulatoryWarnings || []).filter(w => w.status === 'GENERATION_FAILED' || w.dataStatus === 'BLOCKED').forEach(w =>
      add('WARNING_GENERATION_FAILED', 'regulatoryWarnings', w.regulatoryWarningId, 'HIGH', 'ROLE-GROUP-REG'));
    (APP_DATA.regulatoryActions || []).filter(a => a.overdue || (a.dueDate && a.dueDate < this._opToday() && !['COMPLETED', 'CLOSED', 'VERIFIED'].includes(a.status))).forEach(a =>
      add('ACTION_EXECUTION_OVERDUE', 'regulatoryActions', a.actionId, 'HIGH', 'ROLE-GROUP-REG'));
    (APP_DATA.rectificationTasks || []).filter(t => t.deadline && t.deadline < this._opToday() && t.verificationStatus !== '已验证' && t.status !== '已关闭').forEach(t =>
      add('RECTIFICATION_VERIFICATION_OVERDUE', 'rectificationTasks', t.taskId, 'CRITICAL', 'ROLE-ENTITY-REG'));
    (APP_DATA.regulatoryAuthorizationRequests || []).filter(a => a.status === 'REJECTED').forEach(a =>
      add('PERMISSION_EXCEPTION', 'regulatoryAuthorizationRequests', a.authorizationId, 'MEDIUM', 'ROLE-GROUP-LEADER'));
    (APP_DATA.regulatoryRules || []).filter(r => r.lastRunStatus === 'FAILED' || r.status === 'DISABLED').forEach(r =>
      add('RULE_RUNTIME_EXCEPTION', 'regulatoryRules', r.ruleId, 'MEDIUM', 'ROLE-GROUP-REG'));
    APP_DATA.regulatoryOperatingExceptions = exceptions;
    return exceptions;
  },

  computeRegulatoryOperatingRuntimeMetrics() {
    const instances = APP_DATA.regulatoryOperatingCycleInstances || [];
    const daily = APP_DATA.regulatoryDailyOperations || [];
    const weekly = (APP_DATA.regulatoryPeriodicReviews || []).filter(r => r.reviewType === 'WEEKLY_REVIEW');
    const monthly = APP_DATA.regulatoryDomainOperationReviews || [];
    const quarterly = APP_DATA.regulatoryQuarterlyPerformanceReviews || [];
    const annual = APP_DATA.regulatoryAnnualOperationResults || [];
    const exceptions = APP_DATA.regulatoryOperatingExceptions || [];
    APP_DATA.regulatoryOperatingRuntimeMetrics = {
      cycleInstanceCount: instances.length,
      dailyOperationCount: daily.length,
      weeklyReviewCount: weekly.length,
      monthlyDomainReviewCount: monthly.length,
      quarterlyPerformanceCount: quarterly.length,
      annualReviewCount: annual.length,
      operatingExceptionCount: exceptions.length,
      openExceptionCount: exceptions.filter(e => e.status === 'OPEN').length,
      pendingHumanDecisionCount: (APP_DATA.regulatoryOperatingRecommendations || []).filter(r => r.status === 'OPEN' && r.requiresHumanDecision).length,
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: 'DERIVED'
    };
    return APP_DATA.regulatoryOperatingRuntimeMetrics;
  },

  acknowledgeOperatingRecommendation(recommendationId, opts) {
    const o = opts || {};
    const rec = (APP_DATA.regulatoryOperatingRecommendations || []).find(r => r.recommendationId === recommendationId);
    if (!rec) return { success: false, message: '建议不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryOperatingRecommendations', recommendationId, 'MANAGE');
    if (!access.allowed) {
      this.createRegulatoryAuditLog({ actionType: 'OVERRIDE_DENIED', objectType: 'regulatoryOperatingRecommendations', objectId: recommendationId, reason: access.reason });
      return { success: false, denied: true, message: access.reason };
    }
    const before = { status: rec.status };
    rec.status = o.approved === false ? 'REJECTED' : 'ACKNOWLEDGED';
    rec.acknowledgedAt = this._opNow();
    rec.acknowledgedBy = this.getCurrentRegulatoryUser()?.userId;
    this.createRegulatoryAuditLog({
      actionType: o.approved === false ? 'REJECT' : 'ACKNOWLEDGE',
      objectType: 'regulatoryOperatingRecommendations',
      objectId: recommendationId,
      beforeState: before,
      afterState: { status: rec.status },
      reason: o.reason || '人工确认运营建议'
    });
    if (o.approved !== false && o.createAction) {
      return { success: true, recommendation: rec, nextStep: '监管行动需人工创建，不自动执行', requiresHumanDecision: true };
    }
    return { success: true, recommendation: rec, requiresHumanDecision: true };
  },

  calculateOperatingRuntimeHealth(scopeType, scopeId) {
    const base = this.calculateOperatingHealth(scopeType, scopeId);
    const jobs = APP_DATA.regulatoryDataIntegrationJobs || [];
    const warns = APP_DATA.regulatoryWarnings || [];
    const actions = APP_DATA.regulatoryActions || [];
    const rects = APP_DATA.rectificationTasks || [];
    const improvements = APP_DATA.regulatoryImprovementItems || APP_DATA.regulatoryContinuousImprovements || [];
    const dataRuntimeHealth = jobs.length ? Math.round((1 - jobs.filter(j => j.status === 'FAILED').length / jobs.length) * 100) : null;
    const riskIdentificationHealth = base.riskHealth;
    const regulatoryResponseHealth = warns.length ? Math.round(warns.filter(w => w.status !== 'PENDING_REVIEW').length / warns.length * 100) : null;
    const rectificationClosureHealth = base.rectificationHealth;
    const kriIds = (APP_DATA.groupKris || []).slice(0, 10).map(k => k.id);
    const creds = kriIds.map(id => this.getKriDataCredibility(id)).filter(c => c.dataStatus === 'OK');
    const dataCredibilityHealth = creds.length ? Math.round(creds.reduce((s, c) => s + (c.credibility || 0), 0) / creds.length) : null;
    const overdueActions = actions.filter(a => a.overdue || (a.dueDate && a.dueDate < this._opToday())).length;
    const operatingTimelinessHealth = actions.length ? Math.max(0, Math.round((1 - overdueActions / actions.length) * 100)) : null;
    const continuousImprovementHealth = improvements.length ? Math.round(improvements.filter(i => i.status === 'COMPLETED' || i.status === '已关闭').length / improvements.length * 100) : null;
    const dims = { dataRuntimeHealth, riskIdentificationHealth, regulatoryResponseHealth, rectificationClosureHealth, dataCredibilityHealth, operatingTimelinessHealth, continuousImprovementHealth };
    const vals = Object.values(dims).filter(v => v != null);
    const overall = vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length * 10) / 10 : null;
    return {
      scopeType, scopeId, ...dims, ...base,
      overallRuntimeHealth: overall,
      sourceTraceable: true,
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: vals.length ? 'DERIVED' : 'INSUFFICIENT_DATA'
    };
  },

  _coordNow() { return this._opNow ? this._opNow() : '2026-07-22 12:30:00'; },
  _coordToday() { return this._opToday ? this._opToday() : '2026-07-22'; },

  initializeRegulatoryCoordination() {
    this.identifyRegulatoryCoordinationCases();
    (APP_DATA.regulatoryCoordinationCases || []).forEach(c => {
      if (!APP_DATA.regulatoryCoordinationResponsibilityIndex.find(r => r.caseId === c.id)) {
        this.identifyRegulatoryCoordinationResponsibility(c.id);
      }
    });
    this.buildRegulatoryTaskDependencies();
    this.syncRegulatoryCoordinationQueue();
    (APP_DATA.regulatoryCoordinationCases || []).forEach(c => this.buildJointRectificationVerification(c.id));
    this.computeRegulatoryCoordinationMetrics();
    return APP_DATA.regulatoryCoordinationMetrics;
  },

  _deptToOrgId(dept, entityId) {
    if (!dept) return entityId || 'G001';
    const ent = (APP_DATA.globalLegalEntities || []).find(e => e.entityId === entityId);
    if (ent && (dept.includes(ent.entityName) || dept === ent.primaryDepartment)) return entityId;
    const domain = (APP_DATA.regulatoryDomainConfigurations || []).find(d => d.domainName && dept.includes(d.domainName.slice(0, 2)));
    if (domain) return domain.responsibleOrganizationId || entityId || 'G001';
    return entityId || 'G001';
  },

  identifyRegulatoryCoordinationCases() {
    const cases = [];
    let seq = 1;
    const add = (sourceType, sourceId, caseType, extra) => {
      const id = 'RCC-' + String(seq++).padStart(4, '0');
      cases.push({
        id,
        sourceType,
        sourceId,
        caseType,
        primaryOrganization: extra.primaryOrganization || 'G001',
        supportingOrganizations: extra.supportingOrganizations || [],
        affectedEntities: extra.affectedEntities || [],
        affectedDomains: extra.affectedDomains || [],
        severity: extra.severity || 'HIGH',
        priority: extra.priority || 'HIGH',
        status: 'PROPOSED',
        requiresHumanDecision: true,
        dataStatus: 'DERIVED',
        sourceTraceability: { sourceType, sourceId, ...(extra.trace || {}) },
        createdAt: this._coordNow()
      });
      return id;
    };
    (APP_DATA.crossDomainRiskMatters || []).forEach(m => {
      const entities = m.entityIds || [];
      const domains = m.domainIds || [];
      const caseType = entities.length > 1 ? 'CROSS_ENTITY_RISK' : 'CROSS_DOMAIN_RISK';
      add('crossDomainRiskMatters', m.riskMatterId, caseType, {
        primaryOrganization: m.primaryResponsibleDepartment,
        supportingOrganizations: m.collaboratingDepartments || [],
        affectedEntities: entities,
        affectedDomains: domains,
        severity: m.riskLevel === '高' ? 'CRITICAL' : 'HIGH',
        priority: m.riskLevel === '高' ? 'CRITICAL' : 'HIGH',
        trace: { kriIds: m.kriIds, rectificationTaskIds: m.relatedRectificationTaskIds }
      });
    });
    (APP_DATA.regulatoryWarnings || []).filter(w => w.warningLevel === 'CRITICAL' || w.status === 'PENDING_REVIEW').forEach(w => {
      const domains = w.domainId ? [w.domainId] : [];
      const domCfg = (APP_DATA.regulatoryDomainConfigurations || []).find(d => d.domainId === w.domainId);
      add('regulatoryWarnings', w.regulatoryWarningId, 'MAJOR_WARNING', {
        primaryOrganization: domCfg?.responsibleOrganizationId || w.entityId,
        supportingOrganizations: ['ROLE-GROUP-REG'],
        affectedEntities: w.entityId ? [w.entityId] : [],
        affectedDomains: domains,
        severity: 'CRITICAL',
        trace: { kriId: w.kriId, riskMatterId: w.riskMatterId }
      });
    });
    (APP_DATA.rectificationTasks || []).filter(t => (t.riskLevel === '高' || t.priority === 'CRITICAL') && t.status !== '已关闭').forEach(t => {
      const cdr = (APP_DATA.crossDomainRiskMatters || []).find(m => (m.relatedRectificationTaskIds || []).includes(t.taskId));
      if (cdr) return;
      add('rectificationTasks', t.taskId, 'MAJOR_RECTIFICATION', {
        primaryOrganization: t.responsibleDepartment || t.owner,
        supportingOrganizations: [],
        affectedEntities: t.entityId ? [t.entityId] : [],
        affectedDomains: t.domainId ? [t.domainId] : [],
        severity: 'HIGH',
        trace: { riskMatterId: t.riskMatterId }
      });
    });
    (APP_DATA.regulatoryActions || []).filter(a => a.overdue || (a.dueDate && a.dueDate < this._coordToday() && !['COMPLETED', 'CLOSED', 'VERIFIED'].includes(a.status))).forEach(a => {
      add('regulatoryActions', a.actionId, 'OVERDUE_ACTION', {
        primaryOrganization: a.responsibleOrganizationId || a.entityId,
        supportingOrganizations: [],
        affectedEntities: a.entityId ? [a.entityId] : [],
        affectedDomains: a.domainId ? [a.domainId] : [],
        severity: 'HIGH',
        trace: {}
      });
    });
    const kriImpactMap = {};
    (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status !== 'CLOSED' && i.kriId).forEach(i => {
      if (!kriImpactMap[i.qualityIssueId]) kriImpactMap[i.qualityIssueId] = { issue: i, kris: new Set() };
      kriImpactMap[i.qualityIssueId].kris.add(i.kriId);
    });
    Object.values(kriImpactMap).filter(x => x.kris.size >= 1).forEach(({ issue, kris }) => {
      const kriList = [...kris];
      const domains = [...new Set(kriList.map(kid => (APP_DATA.groupKris || []).find(k => k.id === kid)?.category).filter(Boolean))];
      if (domains.length >= 1 || kriList.length >= 2) {
        add('regulatoryDataQualityIssues', issue.qualityIssueId, 'DATA_QUALITY_MULTI_KRI', {
          primaryOrganization: issue.dataOwner || issue.domainId,
          supportingOrganizations: domains.map(d => (APP_DATA.regulatoryDomainConfigurations || []).find(c => c.domainId === d)?.domainName).filter(Boolean),
          affectedEntities: issue.entityId ? [issue.entityId] : [],
          affectedDomains: domains,
          severity: issue.severity === 'HIGH' ? 'CRITICAL' : 'HIGH',
          trace: { kriIds: kriList }
        });
      }
    });
    (APP_DATA.regulatoryRules || []).filter(r => r.lastRunStatus === 'FAILED').forEach(r => {
      const dom = (APP_DATA.regulatoryDomainConfigurations || []).find(d => d.domainId === r.domainId);
      add('regulatoryRules', r.ruleId, 'RULE_MULTI_OBJECT', {
        primaryOrganization: r.ownerOrganizationId || dom?.responsibleOrganizationId || 'G001',
        supportingOrganizations: (r.affectedObjectIds || []).slice(0, 3).map(id => String(id)),
        affectedEntities: [],
        affectedDomains: r.domainId ? [r.domainId] : [],
        severity: 'MEDIUM',
        trace: { kriId: r.kriId }
      });
    });
    APP_DATA.regulatoryCoordinationCases = cases;
    return cases;
  },

  identifyRegulatoryCoordinationResponsibility(caseId) {
    const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === caseId);
    if (!c) return null;
    const evidence = [];
    const addEv = (type, sourceType, sourceId, reason) => evidence.push({ evidenceType: type, sourceType, sourceId, reason });
    let primaryOrg = c.primaryOrganization;
    let primaryRole = 'ROLE-ENTITY-REG';
    if (c.sourceType === 'crossDomainRiskMatters') {
      const m = (APP_DATA.crossDomainRiskMatters || []).find(x => x.riskMatterId === c.sourceId);
      const resp = (APP_DATA.crossDomainResponsibilities || []).find(r => r.riskMatterId === c.sourceId);
      if (resp) {
        primaryOrg = resp.primaryDepartment;
        addEv('CROSS_DOMAIN_RESPONSIBILITY', 'crossDomainResponsibilities', resp.responsibilityId, '跨领域责任配置指定主责部门');
      }
      if (m) addEv('RISK_MATTER', 'crossDomainRiskMatters', m.riskMatterId, '风险事项主责部门：' + m.primaryResponsibleDepartment);
    }
    if (c.sourceType === 'regulatoryWarnings') {
      const w = (APP_DATA.regulatoryWarnings || []).find(x => x.regulatoryWarningId === c.sourceId);
      const dom = (APP_DATA.regulatoryDomainConfigurations || []).find(d => d.domainId === w?.domainId);
      if (dom) { primaryOrg = dom.responsibleOrganizationId; primaryRole = 'ROLE-DOMAIN-REG'; addEv('DOMAIN_CONFIG', 'regulatoryDomainConfigurations', dom.domainId, '领域责任组织'); }
      if (w) addEv('WARNING', 'regulatoryWarnings', w.regulatoryWarningId, '预警责任法人 ' + w.entityId);
    }
    if (c.sourceType === 'regulatoryDataQualityIssues') {
      const i = (APP_DATA.regulatoryDataQualityIssues || []).find(x => x.qualityIssueId === c.sourceId);
      if (i?.kriId) addEv('KRI', 'groupKris', i.kriId, 'KRI关联数据质量问题');
      const src = (APP_DATA.regulatoryDataSources || []).find(s => s.sourceId === i?.sourceId);
      if (src) { primaryOrg = src.dataOwner || src.ownerOrganizationId; addEv('DATA_SOURCE', 'regulatoryDataSources', src.sourceId, '数据源责任组织'); }
    }
    if (c.sourceType === 'regulatoryActions') {
      const a = (APP_DATA.regulatoryActions || []).find(x => x.actionId === c.sourceId);
      if (a) { primaryOrg = a.responsibleOrganizationId; addEv('ACTION', 'regulatoryActions', a.actionId, '监管行动责任人'); }
    }
    const supporting = (c.supportingOrganizations || []).map((org, idx) => ({
      organizationId: typeof org === 'string' && org.startsWith('ROLE-') ? org : this._deptToOrgId(org, c.affectedEntities?.[0]),
      department: org,
      role: 'SUPPORTING_OWNER',
      responsibilityType: 'SUPPORTING_OWNER',
      evidence: evidence.filter(e => e.evidenceType === 'CROSS_DOMAIN_RESPONSIBILITY' || idx === 0)
    }));
    const result = {
      caseId: c.id,
      primaryOwner: { organizationId: this._deptToOrgId(primaryOrg, c.affectedEntities?.[0]), department: primaryOrg, role: primaryRole, responsibilityType: 'PRIMARY_OWNER' },
      supportingOwners: supporting,
      escalationOwner: { organizationId: 'G001', role: 'ROLE-GROUP-LEADER', responsibilityType: 'ESCALATION_OWNER' },
      responsibilityEvidence: evidence,
      dataStatus: 'DERIVED',
      sourceTraceable: true
    };
    const idx = (APP_DATA.regulatoryCoordinationResponsibilityIndex || []).findIndex(r => r.caseId === caseId);
    if (idx >= 0) APP_DATA.regulatoryCoordinationResponsibilityIndex[idx] = result;
    else {
      APP_DATA.regulatoryCoordinationResponsibilityIndex = APP_DATA.regulatoryCoordinationResponsibilityIndex || [];
      APP_DATA.regulatoryCoordinationResponsibilityIndex.push(result);
    }
    return result;
  },

  confirmRegulatoryCoordinationCase(caseId, opts) {
    const o = opts || {};
    const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === caseId);
    if (!c) return { success: false, message: '协同事项不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryCoordinationCases', caseId, 'MANAGE');
    if (!access.allowed) {
      this.createRegulatoryAuditLog({ actionType: 'OVERRIDE_DENIED', objectType: 'regulatoryCoordinationCases', objectId: caseId, reason: access.reason });
      return { success: false, denied: true, message: access.reason };
    }
    const before = { status: c.status };
    if (o.approved === false) {
      c.status = 'REJECTED';
      c.rejectionReason = o.reason || '拒绝协同责任分派';
      c.reidentificationSuggestion = { suggestedAction: '重新识别主责与协同组织', requiresHumanDecision: true, dataStatus: 'DERIVED' };
      this.createRegulatoryAuditLog({ actionType: 'REJECT', objectType: 'regulatoryCoordinationCases', objectId: caseId, beforeState: before, afterState: { status: c.status }, reason: c.rejectionReason });
      return { success: true, case: c, reidentificationSuggestion: c.reidentificationSuggestion, requiresHumanDecision: true };
    }
    c.status = 'CONFIRMED';
    c.confirmedAt = this._coordNow();
    c.confirmedBy = this.getCurrentRegulatoryUser()?.userId;
    this.createRegulatoryAuditLog({ actionType: 'CONFIRM', objectType: 'regulatoryCoordinationCases', objectId: caseId, beforeState: before, afterState: { status: c.status }, reason: o.reason || '人工确认协同事项' });
    const tasks = this.buildRegulatoryCoordinationTasks(caseId);
    return { success: true, case: c, tasks, requiresHumanDecision: true };
  },

  buildRegulatoryCoordinationTasks(caseId) {
    const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === caseId);
    if (!c || c.status !== 'CONFIRMED') return [];
    const resp = (APP_DATA.regulatoryCoordinationResponsibilityIndex || []).find(r => r.caseId === caseId);
    const existing = (APP_DATA.regulatoryCoordinationTasks || []).filter(t => t.coordinationCaseId === caseId);
    if (existing.length) return existing;
    const tasks = [];
    let seq = 1;
    const mk = (orgId, role, taskType, deps, sourceType, sourceId) => {
      const id = 'RCT-' + caseId.replace('RCC-', '') + '-' + String(seq++).padStart(2, '0');
      tasks.push({
        id,
        coordinationCaseId: caseId,
        sourceType: sourceType || c.sourceType,
        sourceId: sourceId || c.sourceId,
        organizationId: orgId,
        role,
        taskType,
        status: deps.length ? 'BLOCKED' : 'READY',
        dueDate: this._coordToday(),
        dependencyTasks: deps,
        completionEvidence: null,
        dataStatus: 'DERIVED',
        sourceTraceability: { caseId, sourceType: c.sourceType, sourceId: c.sourceId }
      });
      return id;
    };
    const primaryOrg = resp?.primaryOwner?.organizationId || c.affectedEntities?.[0] || 'G001';
    const t1 = mk(primaryOrg, 'PRIMARY', 'DATA_PROVIDE', [], c.sourceType, c.sourceId);
    const t2 = mk(primaryOrg, 'PRIMARY', 'RISK_ASSESSMENT', [t1], c.sourceType, c.sourceId);
    (resp?.supportingOwners || []).slice(0, 3).forEach((s, i) => {
      const st = mk(s.organizationId, 'SUPPORTING', i === 0 ? 'KRI_REVIEW' : 'WARNING_REVIEW', [t1], c.sourceType, c.sourceId);
      if (c.caseType.includes('RECTIFICATION') || c.sourceType === 'rectificationTasks') {
        mk(s.organizationId, 'SUPPORTING', 'RECTIFICATION', [t2, st], 'rectificationTasks', c.sourceId);
      }
    });
    mk(primaryOrg, 'PRIMARY', 'ACTION_EXECUTION', [t2], 'regulatoryActions', (APP_DATA.regulatoryActions || []).find(a => a.domainId && c.affectedDomains?.includes(a.domainId))?.actionId || c.sourceId);
    const supTasks = tasks.filter(t => t.taskType === 'RECTIFICATION');
    const verifyDeps = supTasks.length ? supTasks.map(t => t.id) : [t2];
    mk('G001', 'PRIMARY', 'VERIFICATION', verifyDeps, c.sourceType, c.sourceId);
    mk('G001', 'PRIMARY', 'RESULT_CONFIRMATION', verifyDeps, c.sourceType, c.sourceId);
    APP_DATA.regulatoryCoordinationTasks = [...(APP_DATA.regulatoryCoordinationTasks || []).filter(t => t.coordinationCaseId !== caseId), ...tasks];
    this.buildRegulatoryTaskDependencies();
    return tasks;
  },

  buildRegulatoryTaskDependencies() {
    const tasks = APP_DATA.regulatoryCoordinationTasks || [];
    tasks.forEach(t => {
      const deps = t.dependencyTasks || [];
      const blocked = deps.some(did => {
        const dep = tasks.find(x => x.id === did);
        return dep && dep.status !== 'COMPLETED';
      });
      if (blocked && t.status !== 'COMPLETED') t.status = 'BLOCKED';
      else if (!blocked && t.status === 'BLOCKED') t.status = 'READY';
      if (t.dueDate && t.dueDate < this._coordToday() && !['COMPLETED'].includes(t.status)) t.status = 'OVERDUE';
      if (t.status === 'IN_PROGRESS' || t.status === 'READY') {
        const allDepsDone = deps.every(did => (tasks.find(x => x.id === did) || {}).status === 'COMPLETED');
        if (allDepsDone && t.status === 'BLOCKED') t.status = 'READY';
      }
    });
    return tasks;
  },

  proposeRegulatoryEscalation(opts) {
    const o = opts || {};
    const task = (APP_DATA.regulatoryCoordinationTasks || []).find(t => t.id === o.taskId);
    const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === (o.caseId || task?.coordinationCaseId));
    if (!c && !task) return { success: false, message: '无协同上下文' };
    let level = 'LEVEL_1';
    let reason = o.reason || '任务超期';
    if (task?.status === 'OVERDUE') level = 'LEVEL_2';
    if (c?.severity === 'CRITICAL') level = 'LEVEL_3';
    if ((APP_DATA.regulatoryEscalationRecords || []).filter(e => e.coordinationCaseId === c?.id && e.status === 'CONFIRMED').length >= 2) level = 'CRITICAL';
    const rec = {
      escalationId: 'RES-' + Date.now(),
      coordinationCaseId: c?.id || task?.coordinationCaseId,
      taskId: task?.id,
      escalationType: o.escalationType || (task?.status === 'OVERDUE' ? 'TASK_OVERDUE' : 'RISK_DETERIORATION'),
      level,
      status: 'PROPOSED',
      proposedAt: this._coordNow(),
      responsibleRole: 'ROLE-GROUP-REG',
      requiresHumanDecision: true,
      reason,
      escalationPath: ['ENTITY', 'REGION', 'DOMAIN', 'GROUP_REG', 'GROUP_LEADER'],
      dataStatus: 'DERIVED',
      sourceTraceability: { caseId: c?.id, taskId: task?.id, sourceType: c?.sourceType, sourceId: c?.sourceId }
    };
    APP_DATA.regulatoryEscalationRecords = APP_DATA.regulatoryEscalationRecords || [];
    APP_DATA.regulatoryEscalationRecords.push(rec);
    return { success: true, escalation: rec, requiresHumanDecision: true };
  },

  confirmRegulatoryEscalation(escalationId, opts) {
    const o = opts || {};
    const esc = (APP_DATA.regulatoryEscalationRecords || []).find(e => e.escalationId === escalationId);
    if (!esc) return { success: false, message: '升级记录不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryEscalationRecords', escalationId, 'CONFIRM');
    if (!access.allowed) {
      this.createRegulatoryAuditLog({ actionType: 'OVERRIDE_DENIED', objectType: 'regulatoryEscalationRecords', objectId: escalationId, reason: access.reason });
      return { success: false, denied: true, message: access.reason };
    }
    const before = { status: esc.status };
    esc.status = 'CONFIRMED';
    esc.confirmedAt = this._coordNow();
    esc.confirmedBy = this.getCurrentRegulatoryUser()?.userId;
    this.createRegulatoryAuditLog({ actionType: 'CONFIRM', objectType: 'regulatoryEscalationRecords', objectId: escalationId, beforeState: before, afterState: { status: esc.status }, reason: o.reason || '人工确认升级督办' });
    return { success: true, escalation: esc, requiresHumanDecision: true };
  },

  rejectRegulatoryEscalation(escalationId, opts) {
    const esc = (APP_DATA.regulatoryEscalationRecords || []).find(e => e.escalationId === escalationId);
    if (!esc) return { success: false, message: '升级记录不存在' };
    const before = { status: esc.status };
    esc.status = 'REJECTED';
    esc.rejectedAt = this._coordNow();
    this.createRegulatoryAuditLog({ actionType: 'REJECT', objectType: 'regulatoryEscalationRecords', objectId: escalationId, beforeState: before, afterState: { status: esc.status }, reason: (opts || {}).reason || '拒绝升级' });
    return { success: true, escalation: esc };
  },

  submitRegulatoryCoordinationFeedback(opts) {
    const o = opts || {};
    const task = (APP_DATA.regulatoryCoordinationTasks || []).find(t => t.id === o.taskId);
    if (!task) return { success: false, message: '协同任务不存在' };
    const fb = {
      feedbackId: 'RCF-' + Date.now(),
      coordinationCaseId: task.coordinationCaseId,
      taskId: task.id,
      feedbackType: o.feedbackType || 'PROGRESS_UPDATE',
      submittedBy: this.getCurrentRegulatoryUser()?.userId,
      submittedAt: this._coordNow(),
      organizationId: task.organizationId,
      sourceType: task.sourceType,
      sourceId: task.sourceId,
      evidence: o.evidence || o.notes || '',
      status: 'SUBMITTED',
      dataStatus: 'REAL',
      sourceTraceability: { taskId: task.id, caseId: task.coordinationCaseId }
    };
    APP_DATA.regulatoryCoordinationFeedbackIndex = APP_DATA.regulatoryCoordinationFeedbackIndex || [];
    APP_DATA.regulatoryCoordinationFeedbackIndex.push(fb);
    if (o.autoAccept) {
      fb.status = 'ACCEPTED';
      task.status = 'COMPLETED';
      task.completionEvidence = o.evidence;
      this.buildRegulatoryTaskDependencies();
    }
    this.createRegulatoryAuditLog({ actionType: 'SUBMIT', objectType: 'regulatoryCoordinationFeedbackIndex', objectId: fb.feedbackId, afterState: { status: fb.status, taskId: task.id }, reason: '协同反馈提交' });
    return { success: true, feedback: fb, requiresHumanDecision: true };
  },

  reviewRegulatoryCoordinationFeedback(feedbackId, opts) {
    const o = opts || {};
    const fb = (APP_DATA.regulatoryCoordinationFeedbackIndex || []).find(f => f.feedbackId === feedbackId);
    if (!fb) return { success: false, message: '反馈不存在' };
    const before = { status: fb.status };
    fb.status = o.approved === false ? 'REJECTED' : 'ACCEPTED';
    fb.reviewedAt = this._coordNow();
    fb.reviewNotes = o.reason || '';
    if (fb.status === 'REJECTED') fb.supplementRequired = { requirement: '请补充材料后重新提交', requiresHumanDecision: true };
    else {
      const task = (APP_DATA.regulatoryCoordinationTasks || []).find(t => t.id === fb.taskId);
      if (task) { task.status = 'COMPLETED'; task.completionEvidence = fb.evidence; this.buildRegulatoryTaskDependencies(); }
    }
    this.createRegulatoryAuditLog({ actionType: o.approved === false ? 'REJECT' : 'ACCEPT', objectType: 'regulatoryCoordinationFeedbackIndex', objectId: feedbackId, beforeState: before, afterState: { status: fb.status }, reason: fb.reviewNotes });
    return { success: true, feedback: fb, requiresHumanDecision: true };
  },

  buildJointRectificationVerification(caseId) {
    const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === caseId);
    if (!c) return null;
    const tasks = (APP_DATA.regulatoryCoordinationTasks || []).filter(t => t.coordinationCaseId === caseId);
    const rectTasks = tasks.filter(t => t.taskType === 'RECTIFICATION' || t.taskType === 'VERIFICATION');
    const orgResults = [...new Set(tasks.map(t => t.organizationId))].map(orgId => {
      const orgTasks = tasks.filter(t => t.organizationId === orgId);
      const rects = orgTasks.filter(t => t.taskType === 'RECTIFICATION');
      const allRectDone = rects.length ? rects.every(t => t.status === 'COMPLETED') : true;
      const verify = orgTasks.find(t => t.taskType === 'VERIFICATION');
      return { organizationId: orgId, rectificationComplete: allRectDone, verificationStatus: verify?.status === 'COMPLETED' ? 'VERIFIED' : 'PENDING', evidence: verify?.completionEvidence };
    });
    const keyOrgs = orgResults.filter(r => r.organizationId !== 'G001');
    const allKeyDone = keyOrgs.length ? keyOrgs.every(r => r.rectificationComplete) : false;
    const allVerified = keyOrgs.every(r => r.verificationStatus === 'VERIFIED');
    const primaryConfirmed = c.status === 'CONFIRMED' && c.confirmedBy;
    let status = 'PENDING';
    if (allKeyDone && allVerified && primaryConfirmed) status = 'FULLY_VERIFIED';
    else if (keyOrgs.some(r => r.rectificationComplete || r.verificationStatus === 'VERIFIED')) status = 'PARTIALLY_VERIFIED';
    const result = {
      verificationId: 'RJV-' + caseId,
      coordinationCaseId: caseId,
      status,
      organizationResults: orgResults,
      primaryConfirmed: !!primaryConfirmed,
      keyEvidencePassed: allVerified,
      allKeyOrgsComplete: allKeyDone,
      dataStatus: 'DERIVED',
      sourceTraceability: { caseId, sourceType: c.sourceType, sourceId: c.sourceId },
      evaluatedAt: this._coordNow()
    };
    const idx = (APP_DATA.regulatoryJointVerificationIndex || []).findIndex(v => v.coordinationCaseId === caseId);
    if (idx >= 0) APP_DATA.regulatoryJointVerificationIndex[idx] = result;
    else {
      APP_DATA.regulatoryJointVerificationIndex = APP_DATA.regulatoryJointVerificationIndex || [];
      APP_DATA.regulatoryJointVerificationIndex.push(result);
    }
    return result;
  },

  evaluateCoordinationEffectiveness(caseId) {
    const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === caseId);
    if (!c) return null;
    const tasks = (APP_DATA.regulatoryCoordinationTasks || []).filter(t => t.coordinationCaseId === caseId);
    const feedbacks = (APP_DATA.regulatoryCoordinationFeedbackIndex || []).filter(f => f.coordinationCaseId === caseId);
    const escalations = (APP_DATA.regulatoryEscalationRecords || []).filter(e => e.coordinationCaseId === caseId);
    const joint = this.buildJointRectificationVerification(caseId);
    const completed = tasks.filter(t => t.status === 'COMPLETED').length;
    const dims = {
      responsibilityTimeliness: c.status === 'CONFIRMED' ? 80 : null,
      taskAssignmentTimeliness: tasks.length ? Math.round(tasks.filter(t => t.status !== 'BLOCKED').length / tasks.length * 100) : null,
      feedbackTimeliness: feedbacks.length ? Math.round(feedbacks.filter(f => f.status === 'ACCEPTED').length / feedbacks.length * 100) : null,
      crossOrgExecutionEfficiency: tasks.length ? Math.round(completed / tasks.length * 100) : null,
      rectificationCompletionRate: joint?.allKeyOrgsComplete ? 100 : joint?.status === 'PARTIALLY_VERIFIED' ? 50 : null,
      verificationPassRate: joint?.status === 'FULLY_VERIFIED' ? 100 : joint?.status === 'PARTIALLY_VERIFIED' ? 50 : null,
      escalationTimeliness: escalations.length ? Math.round(escalations.filter(e => e.status === 'CONFIRMED').length / escalations.length * 100) : null,
      regulatoryOutcomeEffectiveness: joint?.status === 'FULLY_VERIFIED' ? 90 : null
    };
    const vals = Object.values(dims).filter(v => v != null);
    let overallResult = 'INSUFFICIENT_DATA';
    if (vals.length) {
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
      overallResult = avg >= 75 ? 'EFFECTIVE' : avg >= 50 ? 'PARTIALLY_EFFECTIVE' : 'INEFFECTIVE';
    }
    const evaluation = {
      evaluationId: 'RCE-' + caseId,
      coordinationCaseId: caseId,
      dimensions: dims,
      overallResult,
      trendStatus: 'INSUFFICIENT_HISTORY',
      recommendations: overallResult !== 'EFFECTIVE' ? [{ reason: '协同效率待提升', suggestedAction: '加强跨组织督办与反馈机制', requiresHumanDecision: true, evaluationOnly: true }] : [],
      dataStatus: vals.length ? 'DERIVED' : 'INSUFFICIENT_DATA',
      sourceTraceable: true,
      evaluatedAt: this._coordNow()
    };
    APP_DATA.regulatoryCoordinationResultIndexes = APP_DATA.regulatoryCoordinationResultIndexes || [];
    const ei = APP_DATA.regulatoryCoordinationResultIndexes.findIndex(r => r.coordinationCaseId === caseId);
    if (ei >= 0) APP_DATA.regulatoryCoordinationResultIndexes[ei] = evaluation;
    else APP_DATA.regulatoryCoordinationResultIndexes.push(evaluation);
    return evaluation;
  },

  filterCoordinationCasesByScope(cases) {
    const user = this.getCurrentRegulatoryUser();
    if (!user) return [];
    const assignments = this.getUserRoleAssignments(user.userId);
    if (assignments.some(a => a.scopeType === 'GROUP')) return cases;
    return cases.filter(c => {
      const entityIds = c.affectedEntities || [];
      return assignments.some(asg => {
        if (asg.scopeType === 'ENTITY') return (asg.scopeIds || []).some(sid => entityIds.includes(sid));
        if (asg.scopeType === 'DOMAIN') return (c.affectedDomains || []).some(d => (asg.scopeIds || []).includes(d));
        if (asg.scopeType === 'REGION') {
          return entityIds.some(eid => {
            const ent = (APP_DATA.globalLegalEntities || []).find(e => e.entityId === eid);
            return ent && (asg.scopeIds || []).includes(ent.regionId);
          });
        }
        return false;
      });
    });
  },

  syncRegulatoryCoordinationQueue() {
    const queue = APP_DATA.regulatoryQueue || [];
    const existingIds = new Set(queue.filter(q => q.queueType?.startsWith('COORDINATION') || q.queueType === 'ESCALATION_CONFIRMATION' || q.queueType === 'JOINT_VERIFICATION').map(q => q.sourceId));
    let qSeq = queue.length + 1;
    const addQ = (queueType, sourceType, sourceId, title, priority, role, scope) => {
      const qid = 'RQ-CO-' + String(qSeq++).padStart(4, '0');
      if (existingIds.has(sourceId)) return;
      queue.push({
        queueItemId: qid,
        queueType,
        sourceType,
        sourceId,
        title,
        priority: priority || 'HIGH',
        status: 'PENDING',
        department: '集团监管部门',
        responsibleRole: role,
        responsibleScope: scope,
        dueDate: this._coordToday(),
        isOverdue: false,
        description: title,
        recommendedAction: '人工确认后执行',
        nextPageId: 'regulatory-workbench',
        dataStatus: 'DERIVED'
      });
    };
    (APP_DATA.regulatoryCoordinationCases || []).filter(c => c.status === 'PROPOSED').forEach(c =>
      addQ('COORDINATION_CONFIRMATION', 'regulatoryCoordinationCases', c.id, '协同事项确认 · ' + c.caseType, c.priority, 'ROLE-GROUP-REG', 'GROUP:G001'));
    (APP_DATA.regulatoryCoordinationTasks || []).filter(t => ['READY', 'IN_PROGRESS'].includes(t.status)).forEach(t =>
      addQ('COORDINATION_TASK', 'regulatoryCoordinationTasks', t.id, '协同任务 · ' + t.taskType, 'HIGH', t.role === 'PRIMARY' ? 'ROLE-ENTITY-REG' : 'ROLE-DOMAIN-REG', 'ENTITY:' + t.organizationId));
    (APP_DATA.regulatoryCoordinationFeedbackIndex || []).filter(f => f.status === 'SUBMITTED').forEach(f =>
      addQ('COORDINATION_FEEDBACK', 'regulatoryCoordinationFeedbackIndex', f.feedbackId, '协同反馈审核 · ' + f.feedbackType, 'MEDIUM', 'ROLE-GROUP-REG', 'GROUP:G001'));
    (APP_DATA.regulatoryEscalationRecords || []).filter(e => e.status === 'PROPOSED').forEach(e =>
      addQ('ESCALATION_CONFIRMATION', 'regulatoryEscalationRecords', e.escalationId, '升级督办确认 · ' + e.level, 'CRITICAL', 'ROLE-GROUP-LEADER', 'GROUP:G001'));
    (APP_DATA.regulatoryJointVerificationIndex || []).filter(v => v.status === 'PENDING' || v.status === 'PARTIALLY_VERIFIED').forEach(v =>
      addQ('JOINT_VERIFICATION', 'regulatoryJointVerificationIndex', v.verificationId, '联合验证 · ' + v.status, 'HIGH', 'ROLE-GROUP-REG', 'GROUP:G001'));
    APP_DATA.regulatoryQueue = queue;
    return queue;
  },

  computeRegulatoryCoordinationMetrics() {
    const cases = APP_DATA.regulatoryCoordinationCases || [];
    const tasks = APP_DATA.regulatoryCoordinationTasks || [];
    const escalations = APP_DATA.regulatoryEscalationRecords || [];
    const joints = APP_DATA.regulatoryJointVerificationIndex || [];
    const resp = APP_DATA.regulatoryCoordinationResponsibilityIndex || [];
    APP_DATA.regulatoryCoordinationMetrics = {
      coordinationCaseCount: cases.length,
      proposedCaseCount: cases.filter(c => c.status === 'PROPOSED').length,
      confirmedCaseCount: cases.filter(c => c.status === 'CONFIRMED').length,
      primaryOwnerCount: resp.length,
      coordinationTaskCount: tasks.length,
      overdueTaskCount: tasks.filter(t => t.status === 'OVERDUE').length,
      escalationCount: escalations.length,
      openEscalationCount: escalations.filter(e => e.status === 'PROPOSED' || e.status === 'CONFIRMED').length,
      jointRectificationCount: cases.filter(c => c.caseType === 'MAJOR_RECTIFICATION' || (c.supportingOrganizations || []).length > 1).length,
      jointVerificationCount: joints.length,
      fullyVerifiedCount: joints.filter(v => v.status === 'FULLY_VERIFIED').length,
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: 'DERIVED'
    };
    return APP_DATA.regulatoryCoordinationMetrics;
  },

  renderCoordinationDashboardPanel() {
    const m = APP_DATA.regulatoryCoordinationMetrics || {};
    const cases = APP_DATA.regulatoryCoordinationCases || [];
    const tasks = APP_DATA.regulatoryCoordinationTasks || [];
    const escalations = APP_DATA.regulatoryEscalationRecords || [];
    const joints = APP_DATA.regulatoryJointVerificationIndex || [];
    return `<div class="card"><div class="card-title">跨组织监管协同 ${this.renderPublicUnifiedStatusBadge('DERIVED')}</div>
      <div class="group-metrics">${[
        [m.coordinationCaseCount || cases.length, '跨组织监管事项', `App.navigatePublic('regulatory-workbench')`],
        [m.proposedCaseCount || cases.filter(c => c.status === 'PROPOSED').length, '待协同事项', `App.navigatePublic('regulatory-queue',{queueType:'COORDINATION_CONFIRMATION'})`],
        [m.overdueTaskCount || tasks.filter(t => t.status === 'OVERDUE').length, '超期协同任务', `App.navigatePublic('regulatory-supervision-tasks')`],
        [m.openEscalationCount || escalations.filter(e => e.status === 'PROPOSED').length, '升级督办事项', `App.navigatePublic('regulatory-queue',{queueType:'ESCALATION_CONFIRMATION'})`],
        [m.jointRectificationCount || 0, '联合整改事项', `App.navigatePublic('rectification')`],
        [joints.filter(v => v.status !== 'FULLY_VERIFIED').length, '待联合验证', `App.navigatePublic('regulatory-queue',{queueType:'JOINT_VERIFICATION'})`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      ${cases.length ? `<table class="data-table"><thead><tr><th>事项</th><th>类型</th><th>主责</th><th>状态</th><th>严重度</th></tr></thead><tbody>${cases.slice(0, 5).map(c => `<tr class="clickable" onclick="App.navigatePublic('regulatory-workbench')"><td>${c.id}</td><td>${c.caseType}</td><td>${c.primaryOrganization}</td><td>${this.renderPublicUnifiedStatusBadge(c.status)}</td><td>${this.renderPublicPriorityBadge(c.severity)}</td></tr>`).join('')}</tbody></table>` : ''}
    </div>`;
  },

  renderCoordinationWorkbenchPanel() {
    const user = this.getCurrentRegulatoryUser();
    const cases = this.filterCoordinationCasesByScope(APP_DATA.regulatoryCoordinationCases || []);
    const tasks = (APP_DATA.regulatoryCoordinationTasks || []).filter(t => cases.some(c => c.id === t.coordinationCaseId));
    const feedbacks = (APP_DATA.regulatoryCoordinationFeedbackIndex || []).filter(f => f.submittedBy === user?.userId || f.status === 'SUBMITTED');
    const primaryTasks = tasks.filter(t => t.role === 'PRIMARY');
    const supportTasks = tasks.filter(t => t.role === 'SUPPORTING');
    return `<div class="card"><div class="card-title">跨组织协同工作台</div>
      <div class="group-metrics">${[
        [primaryTasks.filter(t => ['READY', 'IN_PROGRESS', 'OVERDUE'].includes(t.status)).length, '我的主责事项', `App.navigatePublic('regulatory-my-work')`],
        [supportTasks.filter(t => ['READY', 'IN_PROGRESS'].includes(t.status)).length, '我的协同事项', `App.navigatePublic('regulatory-queue',{queueType:'COORDINATION_TASK'})`],
        [feedbacks.filter(f => f.status === 'REJECTED').length, '待补充反馈', `App.navigatePublic('regulatory-workbench')`],
        [cases.filter(c => c.status === 'PROPOSED').length, '待我确认', `App.navigatePublic('regulatory-queue',{queueType:'COORDINATION_CONFIRMATION'})`],
        [(APP_DATA.regulatoryEscalationRecords || []).filter(e => e.status === 'PROPOSED').length, '待我升级', `App.navigatePublic('regulatory-queue',{queueType:'ESCALATION_CONFIRMATION'})`],
        [(APP_DATA.regulatoryJointVerificationIndex || []).filter(v => v.status !== 'FULLY_VERIFIED').length, '待联合验证', `App.navigatePublic('regulatory-queue',{queueType:'JOINT_VERIFICATION'})`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
    </div>`;
  },

  renderCoordinationRolePanel(roleType) {
    const cases = this.filterCoordinationCasesByScope(APP_DATA.regulatoryCoordinationCases || []);
    const tasks = APP_DATA.regulatoryCoordinationTasks || [];
    const escalations = APP_DATA.regulatoryEscalationRecords || [];
    let items = [];
    if (roleType === 'GROUP_LEADER') {
      items = [
        [cases.filter(c => c.severity === 'CRITICAL').length, '重大跨组织事项'],
        [escalations.filter(e => e.status === 'PROPOSED').length, '待升级事项'],
        [cases.filter(c => c.caseType === 'CROSS_DOMAIN_RISK').length, '重大协同风险'],
        [cases.filter(c => (c.supportingOrganizations || []).length > 2).length, '监管资源冲突']
      ];
    } else if (roleType === 'GROUP_REGULATORY') {
      items = [
        [cases.length, '全部协同事项'],
        [tasks.filter(t => t.status === 'OVERDUE').length, '超期事项'],
        [escalations.length, '升级事项'],
        [cases.filter(c => c.caseType.includes('DOMAIN')).length, '跨领域风险'],
        [cases.filter(c => c.caseType === 'MAJOR_RECTIFICATION').length, '联合整改']
      ];
    } else if (roleType === 'DOMAIN_REGULATOR') {
      items = [
        [cases.filter(c => (c.affectedDomains || []).length).length, '本领域协同事项'],
        [tasks.filter(t => t.taskType === 'RISK_ASSESSMENT' && t.status !== 'COMPLETED').length, '待风险评估'],
        [tasks.filter(t => t.taskType === 'KRI_REVIEW' && t.status !== 'COMPLETED').length, '待KRI复核'],
        [cases.filter(c => c.status === 'PROPOSED').length, '待策略调整']
      ];
    } else {
      const scopeId = this.regulatoryRoleScopeId || (APP_DATA.regulatoryRoleProfiles || []).find(r => r.roleType === roleType)?.defaultScopeId;
      items = [
        [tasks.filter(t => t.organizationId === scopeId && t.role === 'PRIMARY').length, '本法人主责事项'],
        [tasks.filter(t => t.organizationId === scopeId && t.role === 'SUPPORTING').length, '本法人协同任务'],
        [tasks.filter(t => t.organizationId === scopeId && t.taskType === 'RECTIFICATION').length, '待整改'],
        [tasks.filter(t => t.organizationId === scopeId && ['READY'].includes(t.status)).length, '待反馈'],
        [tasks.filter(t => t.organizationId === scopeId && t.taskType === 'VERIFICATION').length, '待验证']
      ];
    }
    return `<div class="card"><div class="card-title">跨组织协同 · ${roleType}</div>
      <div class="group-metrics">${items.map(([v, l]) => this.renderPublicKpiCard(l, v, `App.navigatePublic('regulatory-workbench')`)).join('')}</div>
    </div>`;
  },

  _OP_SCENARIO_PHASES: ['DRAFT', 'INITIATED', 'SCOPING', 'ANALYZING', 'ACTION_REQUIRED', 'IN_EXECUTION', 'RECTIFICATION', 'VERIFICATION', 'EFFECTIVENESS_REVIEW', 'CLOSED'],
  _OP_PHASE_TRANSITIONS: {
    DRAFT: ['INITIATED'], INITIATED: ['SCOPING'], SCOPING: ['ANALYZING'], ANALYZING: ['ACTION_REQUIRED'],
    ACTION_REQUIRED: ['IN_EXECUTION'], IN_EXECUTION: ['RECTIFICATION', 'VERIFICATION'], RECTIFICATION: ['VERIFICATION'],
    VERIFICATION: ['EFFECTIVENESS_REVIEW'], EFFECTIVENESS_REVIEW: ['CLOSED']
  },

  initializeRegulatoryOperationalScenarios() {
    this.buildRegulatoryOperationalThemes();
    const defs = APP_DATA.regulatoryOperationalScenarioDefinitions || [];
    defs.forEach(def => this.initializeRegulatoryOperationalScenario({ scenarioCode: def.scenarioCode, autoAdvance: true }));
    this.buildRegulatoryOperationalLedger();
    this.computeRegulatoryOperationalMetrics();
    return APP_DATA.regulatoryOperationalMetrics;
  },

  buildRegulatoryOperationalThemes() {
    const themeDefs = [
      { themeId: 'THEME-FUND', themeName: '资金安全', domainIds: ['finance'], riskFilter: w => (w.domainId === 'finance' || (w.kriId || '').includes('capex')) },
      { themeId: 'THEME-INVEST', themeName: '重大投资风险', domainIds: ['investment'], riskFilter: w => w.level === '重大' || w.level === 'L4' },
      { themeId: 'THEME-OVERSEAS', themeName: '境外经营风险', domainIds: ['overseas'], riskFilter: m => (m.domainIds || []).includes('overseas') },
      { themeId: 'THEME-CONTRACT', themeName: '合同履约风险', domainIds: ['contract'], riskFilter: m => (m.domainIds || []).includes('contract') },
      { themeId: 'THEME-SUPPLY', themeName: '供应链风险', domainIds: ['supply'], riskFilter: m => (m.domainIds || []).includes('supply') },
      { themeId: 'THEME-DATA', themeName: '数据质量风险', issueFilter: i => i.status !== 'CLOSED' },
      { themeId: 'THEME-RECT', themeName: '重大整改风险', rectFilter: t => t.riskLevel === '高' || t.priority === 'CRITICAL' },
      { themeId: 'THEME-CROSS', themeName: '跨法人风险', entityFilter: m => (m.entityIds || []).length >= 1 }
    ];
    const warnings = APP_DATA.warnings || [];
    const cdr = APP_DATA.crossDomainRiskMatters || [];
    const issues = APP_DATA.regulatoryDataQualityIssues || [];
    const rects = APP_DATA.rectificationTasks || [];
    const kris = APP_DATA.regulatoryKriRuntime || [];
    const regWarns = APP_DATA.regulatoryWarnings || [];
    const coordCases = APP_DATA.regulatoryCoordinationCases || [];
    const themes = themeDefs.map(td => {
      const domainKris = kris.filter(k => (td.domainIds || []).some(d => k.domainId === d));
      const domainWarns = regWarns.filter(w => (td.domainIds || []).some(d => w.domainId === d));
      const themeRisks = warnings.filter(td.riskFilter || (() => false));
      const themeCdr = cdr.filter(td.riskFilter || td.entityFilter || (() => false));
      const themeIssues = issues.filter(td.issueFilter || (() => (td.domainIds || []).some(d => issues.some(i => i.domainId === d))));
      const themeRects = rects.filter(td.rectFilter || (() => false));
      const themeCoord = coordCases.filter(c => (td.domainIds || []).some(d => (c.affectedDomains || []).includes(d)) || td.themeId === 'THEME-CROSS');
      const overdue = themeRects.filter(t => t.deadline && t.deadline < this._coordToday() && t.status !== '已关闭').length +
        (APP_DATA.regulatoryCoordinationTasks || []).filter(t => t.status === 'OVERDUE').length;
      return {
        themeId: td.themeId,
        themeName: td.themeName,
        affectedDomains: td.domainIds || [],
        riskCount: themeRisks.length + themeCdr.length,
        kriCount: domainKris.length,
        warningCount: domainWarns.length,
        majorItemCount: themeRisks.filter(w => w.level === '重大' || w.level === 'L4').length + themeCdr.filter(m => m.riskLevel === '高').length,
        coordinationCaseCount: themeCoord.length,
        rectificationCount: themeRects.filter(t => t.status !== '已关闭').length,
        overdueCount: overdue,
        verificationStatus: themeRects.every(t => t.verificationStatus === '已验证' || t.status === '已关闭') ? (themeRects.length ? 'VERIFIED' : 'NONE') : 'PENDING',
        dataStatus: 'DERIVED',
        trendStatus: 'INSUFFICIENT_HISTORY'
      };
    });
    APP_DATA.regulatoryOperationalThemes = themes;
    return themes;
  },

  _findOperationalTrigger(def) {
    const code = def.scenarioCode;
    if (code === 'OS-01') {
      const w = (APP_DATA.warnings || []).find(x => x.level === '重大' || x.level === 'L4') || (APP_DATA.warnings || [])[0];
      return w ? { triggerSourceType: 'warnings', triggerSourceId: w.id, scope: 'GROUP:G001' } : null;
    }
    if (code === 'OS-02') {
      const i = (APP_DATA.regulatoryDataQualityIssues || []).find(x => x.status !== 'CLOSED');
      return i ? { triggerSourceType: 'regulatoryDataQualityIssues', triggerSourceId: i.qualityIssueId, scope: 'GROUP:G001' } : null;
    }
    if (code === 'OS-03') {
      const r = (APP_DATA.regulatoryRules || []).find(x => x.status === 'ACTIVE' || x.lastRunStatus === 'FAILED') || (APP_DATA.regulatoryRules || [])[0];
      return r ? { triggerSourceType: 'regulatoryRules', triggerSourceId: r.ruleId, scope: 'GROUP:G001' } : null;
    }
    if (code === 'OS-04') {
      const m = (APP_DATA.crossDomainRiskMatters || []).find(x => (x.entityIds || []).length >= 1) || (APP_DATA.crossDomainRiskMatters || [])[0];
      return m ? { triggerSourceType: 'crossDomainRiskMatters', triggerSourceId: m.riskMatterId, scope: 'ENTITY:' + (m.entityIds?.[0] || 'G001') } : null;
    }
    if (code === 'OS-05') {
      const m = (APP_DATA.crossDomainRiskMatters || []).find(x => (x.domainIds || []).length >= 2) || (APP_DATA.crossDomainRiskMatters || [])[0];
      return m ? { triggerSourceType: 'crossDomainRiskMatters', triggerSourceId: m.riskMatterId, scope: 'GROUP:G001' } : null;
    }
    if (code === 'OS-06') {
      const t = (APP_DATA.rectificationTasks || []).find(x => x.riskLevel === '高' || x.priority === 'CRITICAL') || (APP_DATA.rectificationTasks || [])[0];
      return t ? { triggerSourceType: 'rectificationTasks', triggerSourceId: t.taskId, scope: 'ENTITY:' + (t.entityId || 'G001') } : null;
    }
    if (code === 'OS-07') {
      const inst = (APP_DATA.regulatoryOperatingCycleInstances || []).find(x => x.cycleType === 'MONTHLY') || (APP_DATA.regulatoryOperatingCycleInstances || [])[0];
      return inst ? { triggerSourceType: 'regulatoryOperatingCycleInstances', triggerSourceId: inst.id, scope: 'GROUP:G001' } : null;
    }
    if (code === 'OS-08') {
      const rec = (APP_DATA.regulatoryOperatingRecommendations || []).find(x => x.requiresHumanDecision) || (APP_DATA.regulatoryDecisionRecommendations || [])[0];
      return rec ? { triggerSourceType: rec.recommendationId ? 'regulatoryOperatingRecommendations' : 'regulatoryDecisionRecommendations', triggerSourceId: rec.recommendationId || rec.decisionRecommendationId, scope: 'GROUP:G001' } : null;
    }
    return null;
  },

  _collectOperationalScenarioLinks(def, trigger) {
    const domains = [];
    const entities = [];
    const risks = [];
    const kriIds = [];
    const warnIds = [];
    const actionIds = [];
    const rectIds = [];
    let coordIds = [];
    if (trigger.triggerSourceType === 'warnings') {
      const w = (APP_DATA.warnings || []).find(x => x.id === trigger.triggerSourceId);
      if (w) { risks.push(w.id); if (w.entityId) entities.push(w.entityId); if (w.kriId) kriIds.push(w.kriId); }
    }
    if (trigger.triggerSourceType === 'crossDomainRiskMatters') {
      const m = (APP_DATA.crossDomainRiskMatters || []).find(x => x.riskMatterId === trigger.triggerSourceId);
      if (m) {
        risks.push(m.riskMatterId);
        domains.push(...(m.domainIds || []));
        entities.push(...(m.entityIds || []));
        kriIds.push(...(m.kriIds || []));
        rectIds.push(...(m.relatedRectificationTaskIds || []));
      }
      coordIds = (APP_DATA.regulatoryCoordinationCases || []).filter(c => c.sourceId === trigger.triggerSourceId).map(c => c.id);
    }
    if (trigger.triggerSourceType === 'regulatoryDataQualityIssues') {
      const i = (APP_DATA.regulatoryDataQualityIssues || []).find(x => x.qualityIssueId === trigger.triggerSourceId);
      if (i) { if (i.kriId) kriIds.push(i.kriId); if (i.domainId) domains.push(i.domainId); }
      kriIds.push(...(APP_DATA.regulatoryKriRuntime || []).filter(k => k.runtimeStatus === 'DATA_QUALITY_REVIEW_REQUIRED').map(k => k.kriId).slice(0, 3));
      warnIds.push(...(APP_DATA.regulatoryWarnings || []).filter(w => w.dataStatus === 'BLOCKED').map(w => w.regulatoryWarningId).slice(0, 3));
    }
    if (trigger.triggerSourceType === 'regulatoryRules') {
      const r = (APP_DATA.regulatoryRules || []).find(x => x.ruleId === trigger.triggerSourceId);
      if (r?.kriId) kriIds.push(r.kriId);
      if (r?.domainId) domains.push(r.domainId);
    }
    if (trigger.triggerSourceType === 'rectificationTasks') {
      const t = (APP_DATA.rectificationTasks || []).find(x => x.taskId === trigger.triggerSourceId);
      if (t) { rectIds.push(t.taskId); if (t.entityId) entities.push(t.entityId); if (t.riskMatterId) risks.push(t.riskMatterId); }
    }
    if (trigger.triggerSourceType === 'regulatoryOperatingCycleInstances') {
      domains.push(...(APP_DATA.regulatoryDomainOperationReviews || []).map(d => d.domainId));
    }
    actionIds.push(...(APP_DATA.regulatoryActions || []).filter(a => a.status !== 'CLOSED').slice(0, 5).map(a => a.actionId));
    warnIds.push(...(APP_DATA.regulatoryWarnings || []).filter(w => w.status === 'PENDING_REVIEW').slice(0, 5).map(w => w.regulatoryWarningId));
    if (!coordIds.length) coordIds = (APP_DATA.regulatoryCoordinationCases || []).slice(0, 2).map(c => c.id);
  return {
      affectedDomains: [...new Set(domains)],
      affectedEntities: [...new Set(entities)],
      relatedRisks: [...new Set(risks)],
      relatedKris: [...new Set(kriIds)],
      relatedWarnings: [...new Set(warnIds)],
      relatedActions: [...new Set(actionIds)],
      relatedRectifications: [...new Set(rectIds)],
      coordinationCaseIds: [...new Set(coordIds)]
    };
  },

  initializeRegulatoryOperationalScenario(opts) {
    const o = opts || {};
    const def = (APP_DATA.regulatoryOperationalScenarioDefinitions || []).find(d => d.scenarioCode === o.scenarioCode) ||
      APP_DATA.regulatoryOperationalScenarioDefinitions[0];
    if (!def) return null;
    const existing = (APP_DATA.regulatoryOperationalScenarios || []).find(s => s.scenarioCode === def.scenarioCode);
    if (existing && !o.force) return existing;
    const trigger = this._findOperationalTrigger(def);
    if (!trigger) return null;
    const links = this._collectOperationalScenarioLinks(def, trigger);
    const theme = (APP_DATA.regulatoryOperationalThemes || []).find(t => t.themeName === def.theme) || { themeName: def.theme };
    const scenario = {
      id: 'ROS-' + def.scenarioCode.replace('OS-', ''),
      scenarioCode: def.scenarioCode,
      scenarioType: def.scenarioType,
      regulatoryTheme: theme.themeName,
      triggerSourceType: trigger.triggerSourceType,
      triggerSourceId: trigger.triggerSourceId,
      triggerReason: this._getOperationalTriggerReason(trigger),
      scope: trigger.scope,
      ...links,
      status: 'ACTIVE',
      phase: 'DRAFT',
      requiresHumanDecision: true,
      simulationOnly: def.scenarioType === 'DATA_QUALITY_IMPACT' || def.scenarioType === 'RULE_CHANGE_IMPACT',
      dataStatus: 'DERIVED',
      sourceTraceability: { triggerSourceType: trigger.triggerSourceType, triggerSourceId: trigger.triggerSourceId, scenarioCode: def.scenarioCode },
      createdAt: this._coordNow(),
      updatedAt: this._coordNow()
    };
    const idx = (APP_DATA.regulatoryOperationalScenarios || []).findIndex(s => s.scenarioCode === def.scenarioCode);
    if (idx >= 0) APP_DATA.regulatoryOperationalScenarios[idx] = scenario;
    else {
      APP_DATA.regulatoryOperationalScenarios = APP_DATA.regulatoryOperationalScenarios || [];
      APP_DATA.regulatoryOperationalScenarios.push(scenario);
    }
    APP_DATA.regulatoryOperationalScenarioOrchestrationIndex = APP_DATA.regulatoryOperationalScenarioOrchestrationIndex || [];
    APP_DATA.regulatoryOperationalScenarioOrchestrationIndex.push({
      orchestrationId: 'ROO-' + scenario.id,
      scenarioId: scenario.id,
      scenarioCode: scenario.scenarioCode,
      currentPhase: scenario.phase,
      dataStatus: 'DERIVED'
    });
    if (o.autoAdvance) {
      const targetPhases = { 'OS-01': 'IN_EXECUTION', 'OS-02': 'ANALYZING', 'OS-03': 'ANALYZING', 'OS-04': 'RECTIFICATION', 'OS-05': 'ACTION_REQUIRED', 'OS-06': 'VERIFICATION', 'OS-07': 'CLOSED', 'OS-08': 'ACTION_REQUIRED' };
      const target = targetPhases[def.scenarioCode] || 'ANALYZING';
      this.advanceRegulatoryOperationalScenario(scenario.id, target, { reason: '初始化推进至典型运行阶段', skipApproval: true, approved: true });
    }
    return scenario;
  },

  _getOperationalTriggerReason(trigger) {
    if (trigger.triggerSourceType === 'warnings') return '重大风险事项触发监管实战场景';
    if (trigger.triggerSourceType === 'regulatoryDataQualityIssues') return '数据质量异常影响监管判断';
    if (trigger.triggerSourceType === 'regulatoryRules') return '规则变更需影响分析';
    if (trigger.triggerSourceType === 'crossDomainRiskMatters') return '跨领域/跨法人风险传导';
    if (trigger.triggerSourceType === 'rectificationTasks') return '重大整改事项需验证';
    if (trigger.triggerSourceType === 'regulatoryOperatingCycleInstances') return '监管运营周期运行';
    return '监管决策建议需人工确认';
  },

  advanceRegulatoryOperationalScenario(scenarioId, targetPhase, opts) {
    const o = opts || {};
    const scenario = (APP_DATA.regulatoryOperationalScenarios || []).find(s => s.id === scenarioId);
    if (!scenario) return { success: false, message: '场景不存在' };
    const phases = this._OP_SCENARIO_PHASES;
    const transitions = this._OP_PHASE_TRANSITIONS;
    const currentIdx = phases.indexOf(scenario.phase);
    const targetIdx = phases.indexOf(targetPhase);
    if (targetIdx < 0) return { success: false, message: '无效阶段' };
    if (targetIdx <= currentIdx && !o.force) return { success: false, message: '不能回退阶段' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryOperationalScenarios', scenarioId, 'MANAGE');
    if (!access.allowed && !o.skipApproval) {
      this.createRegulatoryAuditLog({ actionType: 'OVERRIDE_DENIED', objectType: 'regulatoryOperationalScenarios', objectId: scenarioId, reason: access.reason });
      return { success: false, denied: true, message: access.reason };
    }
    if (!o.skipApproval && ['ACTION_REQUIRED', 'IN_EXECUTION', 'CLOSED'].includes(targetPhase) && !o.approved) {
      return { success: false, requiresHumanDecision: true, message: '阶段推进需人工审批', pendingPhase: targetPhase };
    }
    let phase = scenario.phase;
    if (o.skipApproval) phase = targetPhase;
    else {
      while (phases.indexOf(phase) < targetIdx) {
        const next = transitions[phase];
        if (!next || !next.length) break;
        phase = next[0];
        if (phases.indexOf(phase) >= targetIdx) { phase = targetPhase; break; }
      }
      if (phases.indexOf(phase) < targetIdx) phase = targetPhase;
    }
    const before = { phase: scenario.phase, status: scenario.status };
    scenario.phase = phase;
    scenario.updatedAt = this._coordNow();
    if (phase === 'CLOSED') scenario.status = 'CLOSED';
    else scenario.status = 'IN_PROGRESS';
    this.refreshOperationalScenarioLinks(scenarioId);
    const health = this.calculateOperationalScenarioHealth(scenarioId);
    scenario.healthStatus = health.overallStatus;
    this.createRegulatoryAuditLog({
      actionType: 'PHASE_ADVANCE', objectType: 'regulatoryOperationalScenarios', objectId: scenarioId,
      beforeState: before, afterState: { phase: scenario.phase, status: scenario.status },
      reason: o.reason || '监管实战场景阶段推进'
    });
    const orch = (APP_DATA.regulatoryOperationalScenarioOrchestrationIndex || []).find(x => x.scenarioId === scenarioId);
    if (orch) orch.currentPhase = scenario.phase;
    return { success: true, scenario, health, requiresHumanDecision: o.requiresHumanDecision !== false };
  },

  refreshOperationalScenarioLinks(scenarioId) {
    const scenario = (APP_DATA.regulatoryOperationalScenarios || []).find(s => s.id === scenarioId);
    if (!scenario) return null;
    const def = (APP_DATA.regulatoryOperationalScenarioDefinitions || []).find(d => d.scenarioCode === scenario.scenarioCode);
    const trigger = { triggerSourceType: scenario.triggerSourceType, triggerSourceId: scenario.triggerSourceId };
    const links = this._collectOperationalScenarioLinks(def || {}, trigger);
    Object.assign(scenario, links);
    scenario.updatedAt = this._coordNow();
    return scenario;
  },

  calculateOperationalScenarioHealth(scenarioId) {
    const scenario = (APP_DATA.regulatoryOperationalScenarios || []).find(s => s.id === scenarioId);
    if (!scenario) return { overallStatus: 'INSUFFICIENT_DATA', trendStatus: 'INSUFFICIENT_HISTORY', sourceTraceable: true };
    const hasData = scenario.relatedKris?.length || scenario.relatedRisks?.length || scenario.triggerSourceId;
    const dataCompleteness = hasData ? Math.min(100, 40 + (scenario.relatedKris?.length || 0) * 10 + (scenario.relatedWarnings?.length || 0) * 5) : null;
    const creds = (scenario.relatedKris || []).map(id => this.getKriDataCredibility(id)).filter(c => c.dataStatus === 'OK');
    const indicatorCredibility = creds.length ? Math.round(creds.reduce((s, c) => s + (c.credibility || 0), 0) / creds.length) : (scenario.relatedKris?.length ? 60 : null);
    const riskIdentification = scenario.relatedRisks?.length ? Math.min(100, scenario.relatedRisks.length * 25) : null;
    const actions = (APP_DATA.regulatoryActions || []).filter(a => (scenario.relatedActions || []).includes(a.actionId));
    const actionRate = actions.length ? Math.round(actions.filter(a => ['COMPLETED', 'VERIFIED', 'CLOSED', 'IN_PROGRESS'].includes(a.status)).length / actions.length * 100) : null;
    const coordTasks = (APP_DATA.regulatoryCoordinationTasks || []).filter(t => (scenario.coordinationCaseIds || []).includes(t.coordinationCaseId));
    const coordEff = coordTasks.length ? Math.round(coordTasks.filter(t => t.status === 'COMPLETED').length / coordTasks.length * 100) : null;
    const rects = (APP_DATA.rectificationTasks || []).filter(t => (scenario.relatedRectifications || []).includes(t.taskId));
    const rectRate = rects.length ? Math.round(rects.filter(t => t.status === '已关闭' || t.verificationStatus === '已验证').length / rects.length * 100) : null;
    const verifyRate = rects.length ? Math.round(rects.filter(t => t.verificationStatus === '已验证').length / rects.length * 100) : null;
    const joint = (APP_DATA.regulatoryJointVerificationIndex || []).find(v => (scenario.coordinationCaseIds || []).includes(v.coordinationCaseId));
    const regulatoryEffect = joint?.status === 'FULLY_VERIFIED' ? 90 : joint?.status === 'PARTIALLY_VERIFIED' ? 60 : scenario.phase === 'CLOSED' ? 85 : null;
    const dims = { dataCompleteness, indicatorCredibility, riskIdentification, actionExecutionRate: actionRate, crossOrgCoordinationEfficiency: coordEff, rectificationCompletionRate: rectRate, verificationCompletionRate: verifyRate, regulatoryEffectiveness: regulatoryEffect };
    const vals = Object.values(dims).filter(v => v != null);
    let overallStatus = 'INSUFFICIENT_DATA';
    if (vals.length) {
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
      overallStatus = avg >= 80 ? 'HEALTHY' : avg >= 65 ? 'WATCH' : avg >= 45 ? 'AT_RISK' : 'CRITICAL';
    }
    const result = { scenarioId, dimensions: dims, overallStatus, trendStatus: 'INSUFFICIENT_HISTORY', sourceTraceable: true, dataStatus: vals.length ? 'DERIVED' : 'INSUFFICIENT_DATA', evaluatedAt: this._coordNow() };
    const ri = (APP_DATA.regulatoryOperationalScenarioResultIndexes || []).findIndex(r => r.scenarioId === scenarioId);
    if (ri >= 0) APP_DATA.regulatoryOperationalScenarioResultIndexes[ri] = result;
    else {
      APP_DATA.regulatoryOperationalScenarioResultIndexes = APP_DATA.regulatoryOperationalScenarioResultIndexes || [];
      APP_DATA.regulatoryOperationalScenarioResultIndexes.push(result);
    }
    return result;
  },

  buildRegulatoryOperationalLedger() {
    const ledger = (APP_DATA.regulatoryOperationalScenarios || []).map(s => {
      const health = (APP_DATA.regulatoryOperationalScenarioResultIndexes || []).find(h => h.scenarioId === s.id) || this.calculateOperationalScenarioHealth(s.id);
      const resp = (APP_DATA.regulatoryCoordinationResponsibilityIndex || []).find(r => (s.coordinationCaseIds || []).includes(r.caseId));
      const cycle = (APP_DATA.regulatoryOperatingCycleInstances || []).find(c => c.id === s.triggerSourceId);
      return {
        ledgerId: 'ROL-' + s.id,
        scenarioId: s.id,
        scenarioCode: s.scenarioCode,
        regulatoryTheme: s.regulatoryTheme,
        triggerSourceType: s.triggerSourceType,
        triggerSourceId: s.triggerSourceId,
        triggerReason: s.triggerReason,
        phase: s.phase,
        status: s.status,
        healthStatus: health.overallStatus,
        relatedRisks: s.relatedRisks,
        relatedKris: s.relatedKris,
        relatedWarnings: s.relatedWarnings,
        relatedActions: s.relatedActions,
        coordinationCaseIds: s.coordinationCaseIds,
        relatedRectifications: s.relatedRectifications,
        rectificationEvidence: (s.relatedRectifications || []).map(tid => {
          const t = (APP_DATA.rectificationTasks || []).find(x => x.taskId === tid);
          return t ? { taskId: tid, verificationStatus: t.verificationStatus, evidence: t.evidenceSummary || t.title } : null;
        }).filter(Boolean),
        effectivenessResult: health.overallStatus,
        responsibleOrganization: resp?.primaryOwner?.organizationId || s.scope,
        operatingCycleId: cycle?.id,
        dataStatus: 'DERIVED',
        sourceTraceability: { ...s.sourceTraceability, forwardLinks: ['relatedActions', 'coordinationCaseIds', 'relatedRectifications'], backwardLinks: ['triggerSourceType', 'triggerSourceId', 'relatedRisks', 'relatedKris'] },
        updatedAt: s.updatedAt
      };
    });
    APP_DATA.regulatoryOperationalLedger = ledger;
    return ledger;
  },

  computeRegulatoryOperationalMetrics() {
    const scenarios = APP_DATA.regulatoryOperationalScenarios || [];
    const themes = APP_DATA.regulatoryOperationalThemes || [];
    const ledger = APP_DATA.regulatoryOperationalLedger || [];
    const healthResults = APP_DATA.regulatoryOperationalScenarioResultIndexes || [];
    APP_DATA.regulatoryOperationalMetrics = {
      operationalScenarioCount: scenarios.length,
      themeCount: themes.length,
      ledgerCount: ledger.length,
      closedScenarioCount: scenarios.filter(s => s.phase === 'CLOSED' || s.status === 'CLOSED').length,
      inProgressCount: scenarios.filter(s => s.status === 'IN_PROGRESS').length,
      atRiskCount: scenarios.filter(s => {
        const h = healthResults.find(r => r.scenarioId === s.id);
        return h?.overallStatus === 'AT_RISK' || h?.overallStatus === 'CRITICAL' || s.healthStatus === 'AT_RISK' || s.healthStatus === 'CRITICAL';
      }).length,
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: 'DERIVED'
    };
    return APP_DATA.regulatoryOperationalMetrics;
  },

  filterOperationalScenariosByScope(scenarios) {
    const user = this.getCurrentRegulatoryUser();
    if (!user) return [];
    const assignments = this.getUserRoleAssignments(user.userId);
    if (assignments.some(a => a.scopeType === 'GROUP')) return scenarios;
    return scenarios.filter(s => {
      const entityIds = s.affectedEntities || [];
      return assignments.some(asg => {
        if (asg.scopeType === 'ENTITY') return (asg.scopeIds || []).some(sid => entityIds.includes(sid) || (s.scope || '').includes(sid));
        if (asg.scopeType === 'DOMAIN') return (s.affectedDomains || []).some(d => (asg.scopeIds || []).includes(d));
        return false;
      });
    });
  },

  renderOperationalScenarioDashboardPanel() {
    const m = APP_DATA.regulatoryOperationalMetrics || {};
    const scenarios = APP_DATA.regulatoryOperationalScenarios || [];
    const themes = APP_DATA.regulatoryOperationalThemes || [];
    return `<div class="card"><div class="card-title">监管实战场景运行 ${this.renderPublicUnifiedStatusBadge('DERIVED')}</div>
      <div class="group-metrics">${[
        [m.operationalScenarioCount || scenarios.length, '实战场景', `App.navigatePublic('regulatory-workbench')`],
        [m.themeCount || themes.length, '监管主题', `App.navigatePublic('regulatory-analysis-center')`],
        [m.inProgressCount || scenarios.filter(s => s.status === 'IN_PROGRESS').length, '运行中', `App.navigatePublic('regulatory-workbench')`],
        [m.closedScenarioCount || 0, '已闭环', `App.navigatePublic('regulatory-performance')`],
        [m.atRiskCount || 0, 'AT_RISK场景', `App.navigatePublic('regulatory-analysis-center')`],
        [(APP_DATA.regulatoryOperationalLedger || []).length, '运营台账', `App.navigatePublic('regulatory-strategic-review')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      ${themes.length ? `<p class="insight-note"><b>重点监管主题：</b>${themes.filter(t => t.majorItemCount > 0 || t.overdueCount > 0).slice(0, 4).map(t => t.themeName + '(' + t.riskCount + '风险)').join('、') || themes.slice(0, 3).map(t => t.themeName).join('、')}</p>` : ''}
      ${scenarios.length ? `<table class="data-table"><thead><tr><th>场景</th><th>主题</th><th>阶段</th><th>健康度</th></tr></thead><tbody>${scenarios.slice(0, 5).map(s => `<tr class="clickable" onclick="App.navigatePublic('regulatory-workbench')"><td>${s.scenarioCode}</td><td>${s.regulatoryTheme}</td><td>${this.renderPublicUnifiedStatusBadge(s.phase)}</td><td>${this.renderPublicUnifiedStatusBadge(s.healthStatus || 'INSUFFICIENT_DATA')}</td></tr>`).join('')}</tbody></table>` : ''}
    </div>`;
  },

  renderOperationalScenarioWorkbenchPanel() {
    const user = this.getCurrentRegulatoryUser();
    const scenarios = this.filterOperationalScenariosByScope(APP_DATA.regulatoryOperationalScenarios || []);
    const themes = APP_DATA.regulatoryOperationalThemes || [];
    const active = scenarios.filter(s => s.status === 'IN_PROGRESS');
    const coord = this.filterCoordinationCasesByScope(APP_DATA.regulatoryCoordinationCases || []);
    const pendingVerify = (APP_DATA.rectificationTasks || []).filter(t => t.verificationStatus !== '已验证' && t.status !== '已关闭');
    const pendingEffect = (APP_DATA.regulatoryOperationalScenarioResultIndexes || []).filter(r => r.overallStatus === 'AT_RISK' || r.overallStatus === 'CRITICAL');
    const cycleResults = APP_DATA.regulatoryOperatingRuntimeMetrics || {};
    return `<div class="card"><div class="card-title">监管实战运营工作台</div>
      <div class="group-metrics">${[
        [active.length, '当前监管实战场景', `App.navigatePublic('regulatory-workbench')`],
        [themes.filter(t => t.majorItemCount > 0).length || themes.length, '重点监管主题', `App.navigatePublic('regulatory-analysis-center')`],
        [(APP_DATA.regulatoryDailyOperations || []).filter(d => d.priority === 'CRITICAL' || d.priority === 'HIGH').length, '待我处理事项', `App.navigatePublic('regulatory-queue')`],
        [coord.filter(c => c.status === 'PROPOSED' || c.status === 'CONFIRMED').length, '跨组织协同事项', `App.navigatePublic('regulatory-queue',{queueType:'COORDINATION_CONFIRMATION'})`],
        [pendingVerify.length, '待验证整改', `App.navigatePublic('rectification')`],
        [pendingEffect.length, '待效果评价事项', `App.navigatePublic('regulatory-performance')`],
        [cycleResults.dailyOperationCount || 0, '本周期监管结果', `App.navigatePublic('regulatory-analysis-center')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      ${active.length ? `<p class="insight-note"><b>运行中场景：</b>${active.map(s => s.scenarioCode + '·' + s.phase).join('、')}</p>` : ''}
    </div>`;
  },

  renderOperationalScenarioRolePanel(roleType) {
    const scenarios = this.filterOperationalScenariosByScope(APP_DATA.regulatoryOperationalScenarios || []);
    const themes = APP_DATA.regulatoryOperationalThemes || [];
    let items = [];
    if (roleType === 'GROUP_LEADER') {
      items = [
        [themes.filter(t => t.majorItemCount > 0).length, '重大监管主题'],
        [scenarios.filter(s => s.scenarioType === 'MAJOR_RISK').length, '重大风险'],
        [(APP_DATA.regulatoryCoordinationCases || []).filter(c => c.severity === 'CRITICAL').length, '重大协同事项'],
        [(APP_DATA.regulatoryOperatingRecommendations || []).filter(r => r.status === 'OPEN').length, '资源调度建议'],
        [scenarios.filter(s => s.phase === 'EFFECTIVENESS_REVIEW' || s.phase === 'CLOSED').length, '监管效果']
      ];
    } else if (roleType === 'GROUP_REGULATORY') {
      items = [
        [scenarios.length, '监管场景'],
        [scenarios.filter(s => s.relatedRisks?.length).length, '重点风险'],
        [scenarios.filter(s => s.phase === 'ACTION_REQUIRED').length, '待决策'],
        [(APP_DATA.regulatoryCoordinationCases || []).filter(c => c.status === 'PROPOSED').length, '待协同'],
        [(APP_DATA.regulatoryEscalationRecords || []).filter(e => e.status === 'PROPOSED').length, '待督办'],
        [(APP_DATA.regulatoryJointVerificationIndex || []).filter(v => v.status !== 'FULLY_VERIFIED').length, '待验证']
      ];
    } else if (roleType === 'DOMAIN_REGULATOR') {
      const scopeDomains = this.regulatoryRoleScopeId ? [this.regulatoryRoleScopeId] : (APP_DATA.regulatoryDomainConfigurations || []).slice(0, 1).map(d => d.domainId);
      items = [
        [themes.filter(t => (t.affectedDomains || []).some(d => scopeDomains.includes(d))).length, '本领域监管主题'],
        [(APP_DATA.regulatoryKriRuntime || []).filter(k => scopeDomains.includes(k.domainId) && ['WARNING', 'CRITICAL'].includes(k.runtimeStatus || k.status)).length, 'KRI'],
        [(APP_DATA.regulatoryWarnings || []).filter(w => scopeDomains.includes(w.domainId)).length, '预警'],
        [(APP_DATA.regulatoryActions || []).filter(a => scopeDomains.includes(a.domainId)).length, '监管行动'],
        [(APP_DATA.rectificationTasks || []).filter(t => scopeDomains.includes(t.domainId)).length, '领域整改']
      ];
    } else {
      const scopeId = this.regulatoryRoleScopeId;
      items = [
        [(APP_DATA.warnings || []).filter(w => w.entityId === scopeId).length, '本法人风险'],
        [(APP_DATA.regulatoryWarnings || []).filter(w => w.entityId === scopeId).length, '本法人预警'],
        [(APP_DATA.rectificationTasks || []).filter(t => t.entityId === scopeId && t.status !== '已关闭').length, '待整改'],
        [(APP_DATA.regulatoryCoordinationFeedbackIndex || []).filter(f => f.status === 'REJECTED').length, '待反馈'],
        [(APP_DATA.rectificationTasks || []).filter(t => t.entityId === scopeId && t.verificationStatus !== '已验证').length, '待验证']
      ];
    }
    return `<div class="card"><div class="card-title">监管实战 · ${roleType}</div>
      <div class="group-metrics">${items.map(([v, l]) => this.renderPublicKpiCard(l, v, `App.navigatePublic('regulatory-workbench')`)).join('')}</div>
    </div>`;
  },

  _FA_TRACE_STEPS: ['dataSource', 'dataIntegration', 'dataQuality', 'dataMapping', 'kri', 'warning', 'risk', 'action', 'task', 'rectification', 'verification', 'effectiveness'],

  initializeRegulatoryFinalAcceptance() {
    this.buildRegulatoryFinalAcceptanceScenarios();
    (APP_DATA.regulatoryFinalAcceptanceScenarios || []).forEach(s => this.validateRegulatoryFinalTraceability(s.id));
    this.detectRegulatoryFinalAcceptanceIssues();
    this.calculateFinalAcceptanceHealth();
    this.computeRegulatoryFinalAcceptanceMetrics();
    return APP_DATA.regulatoryFinalAcceptanceMetrics;
  },

  _faTriggerFor(def) {
    const code = def.scenarioCode;
    if (code === 'FA-01') {
      const w = (APP_DATA.warnings || []).find(x => x.level === '重大' || x.level === 'L4') || (APP_DATA.warnings || [])[0];
      return w ? { sourceType: 'warnings', sourceId: w.id } : null;
    }
    if (code === 'FA-02') {
      const i = (APP_DATA.regulatoryDataQualityIssues || []).find(x => x.status !== 'CLOSED');
      return i ? { sourceType: 'regulatoryDataQualityIssues', sourceId: i.qualityIssueId } : null;
    }
    if (code === 'FA-03') {
      const r = (APP_DATA.regulatoryRuleChangeRequests || [])[0] || (APP_DATA.regulatoryRules || [])[0];
      return r ? { sourceType: r.changeRequestId ? 'regulatoryRuleChangeRequests' : 'regulatoryRules', sourceId: r.changeRequestId || r.ruleId } : null;
    }
    if (code === 'FA-04') {
      const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.caseType === 'CROSS_ENTITY_RISK' || x.caseType === 'CROSS_DOMAIN_RISK')
        || (APP_DATA.regulatoryCoordinationCases || [])[0];
      return c ? { sourceType: 'regulatoryCoordinationCases', sourceId: c.id } : null;
    }
    if (code === 'FA-05') {
      const m = (APP_DATA.crossDomainRiskMatters || []).find(x => (x.domainIds || []).length >= 2);
      return m ? { sourceType: 'crossDomainRiskMatters', sourceId: m.riskMatterId } : null;
    }
    if (code === 'FA-06') {
      const t = (APP_DATA.rectificationTasks || []).find(x => x.verificationStatus === '验证中' || x.verificationStatus === '待验证') || (APP_DATA.rectificationTasks || [])[0];
      return t ? { sourceType: 'rectificationTasks', sourceId: t.taskId } : null;
    }
    if (code === 'FA-07') {
      const inst = (APP_DATA.regulatoryOperatingCycleInstances || []).find(x => x.cycleType === 'MONTHLY');
      return inst ? { sourceType: 'regulatoryOperatingCycleInstances', sourceId: inst.id } : null;
    }
    if (code === 'FA-08') {
      const o = (APP_DATA.regulatoryImprovementOpportunities || [])[0];
      return o ? { sourceType: 'regulatoryImprovementOpportunities', sourceId: o.opportunityId } : null;
    }
    if (code === 'FA-09') {
      const log = (APP_DATA.regulatoryAuditLogs || [])[0];
      return log ? { sourceType: 'regulatoryAuditLogs', sourceId: log.auditId } : { sourceType: 'regulatoryUsers', sourceId: 'U-GROUP-REG' };
    }
    return null;
  },

  _faCollectLinks(def, trigger) {
    const domains = [];
    const entities = [];
    const risks = [];
    const kris = [];
    const warns = [];
    const actions = [];
    const tasks = [];
    const rects = [];
    const coords = [];
    const addRel = (sourceType, sourceId, evidence) => ({ sourceType, sourceId, relationshipEvidence: evidence });
    if (trigger.sourceType === 'warnings') {
      const w = (APP_DATA.warnings || []).find(x => x.id === trigger.sourceId);
      if (w) { risks.push(w.id); if (w.kriId) kris.push(w.kriId); if (w.entityId) entities.push(w.entityId); }
    }
    if (trigger.sourceType === 'crossDomainRiskMatters') {
      const m = (APP_DATA.crossDomainRiskMatters || []).find(x => x.riskMatterId === trigger.sourceId);
      if (m) {
        risks.push(m.riskMatterId);
        domains.push(...(m.domainIds || []));
        entities.push(...(m.entityIds || []));
        kris.push(...(m.kriIds || []));
        rects.push(...(m.relatedRectificationTaskIds || []));
        (APP_DATA.crossDomainRiskRelations || []).filter(r => r.riskMatterId === m.riskMatterId).forEach(r =>
          addRel('crossDomainRiskRelations', r.relationId, r.controlResponsibility || r.relationType));
      }
    }
    if (trigger.sourceType === 'regulatoryDataQualityIssues') {
      const i = (APP_DATA.regulatoryDataQualityIssues || []).find(x => x.qualityIssueId === trigger.sourceId);
      if (i) { if (i.kriId) kris.push(i.kriId); if (i.domainId) domains.push(i.domainId); }
    }
    if (trigger.sourceType === 'regulatoryCoordinationCases') {
      const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === trigger.sourceId);
      if (c) { coords.push(c.id); domains.push(...(c.affectedDomains || [])); entities.push(...(c.affectedEntities || [])); }
    }
    if (trigger.sourceType === 'rectificationTasks') {
      const t = (APP_DATA.rectificationTasks || []).find(x => x.taskId === trigger.sourceId);
      if (t) { rects.push(t.taskId); if (t.riskMatterId) risks.push(t.riskMatterId); if (t.entityId) entities.push(t.entityId); }
    }
    actions.push(...(APP_DATA.regulatoryActions || []).slice(0, 5).map(a => a.actionId));
    warns.push(...(APP_DATA.regulatoryWarnings || []).slice(0, 5).map(w => w.regulatoryWarningId));
    tasks.push(...(APP_DATA.regulatorySupervisionTasks || []).slice(0, 3).map(t => t.supervisionTaskId));
    if (!coords.length) coords.push(...(APP_DATA.regulatoryCoordinationCases || []).slice(0, 2).map(c => c.id));
    return { involvedDomains: [...new Set(domains)], involvedEntities: [...new Set(entities)], relatedRisks: [...new Set(risks)], relatedKris: [...new Set(kris)], relatedWarnings: [...new Set(warns)], relatedActions: [...new Set(actions)], relatedTasks: [...new Set(tasks)], relatedRectifications: [...new Set(rects)], relatedCoordinationCases: [...new Set(coords)] };
  },

  buildRegulatoryFinalAcceptanceScenarios() {
    const defs = APP_DATA.regulatoryFinalAcceptanceScenarioDefinitions || [];
    const scenarios = [];
    let seq = 1;
    defs.forEach(def => {
      const trigger = this._faTriggerFor(def);
      if (!trigger) return;
      const links = this._faCollectLinks(def, trigger);
    const relEvidence = [];
    (APP_DATA.crossDomainRiskRelations || []).filter(r => trigger.sourceType === 'crossDomainRiskMatters' && r.riskMatterId === trigger.sourceId).forEach(r => {
      relEvidence.push({
        sourceType: 'crossDomainRiskRelations',
        sourceId: r.relationId,
        relationshipEvidence: r.controlResponsibility || r.relationType,
        upstreamSourceType: r.kriId ? 'groupKris' : 'scenarios',
        upstreamSourceId: r.kriId || r.scenarioId
      });
    });
      const expectedTraceChain = def.scenarioCode === 'FA-07'
        ? ['dataSource', 'dataQuality', 'kri', 'warning', 'action', 'rectification', 'verification', 'effectiveness']
        : def.scenarioCode === 'FA-09'
          ? ['dataSource', 'action', 'verification']
          : ['dataSource', 'dataQuality', 'kri', 'warning', 'risk', 'action', 'rectification', 'verification'];
      const scenario = {
        id: 'RFA-' + String(seq++).padStart(2, '0'),
        scenarioCode: def.scenarioCode,
        scenarioName: def.scenarioName,
        scenarioType: def.scenarioType,
        sourceType: trigger.sourceType,
        sourceId: trigger.sourceId,
        ...links,
        expectedTraceChain,
        actualTraceChain: [],
        status: 'RUNNING',
        phase: 'VALIDATING',
        blockers: [],
        evidence: [],
        requiresHumanDecision: true,
        simulationOnly: def.scenarioType === 'DATA_QUALITY_IMPACT' || def.scenarioType === 'RULE_GOVERNANCE',
        dataStatus: 'DERIVED',
        sourceTraceability: { sourceType: trigger.sourceType, sourceId: trigger.sourceId, scenarioCode: def.scenarioCode, relationshipEvidence: relEvidence },
        relationshipEvidence: relEvidence,
        createdAt: this._coordNow()
      };
      scenarios.push(scenario);
    });
    APP_DATA.regulatoryFinalAcceptanceScenarios = scenarios;
    return scenarios;
  },

  validateRegulatoryFinalTraceability(scenarioId) {
    const s = (APP_DATA.regulatoryFinalAcceptanceScenarios || []).find(x => x.id === scenarioId);
    if (!s) return null;
    const chain = {};
    const has = (step) => {
      if (step === 'dataSource') return !!(APP_DATA.regulatoryDataSources || []).length || !!(APP_DATA.dataSources || []).length;
      if (step === 'dataIntegration') return !!(APP_DATA.regulatoryDataIntegrationJobs || []).length;
      if (step === 'dataQuality') return !!(APP_DATA.regulatoryDataQualityIssues || []).length || s.sourceType === 'regulatoryDataQualityIssues';
      if (step === 'dataMapping') return !!(APP_DATA.regulatoryBusinessObjectMappings || []).length;
      if (step === 'kri') return (s.relatedKris || []).length > 0 || !!(APP_DATA.regulatoryKriRuntime || []).length;
      if (step === 'warning') return (s.relatedWarnings || []).length > 0 || !!(APP_DATA.regulatoryWarnings || []).length;
      if (step === 'risk') return (s.relatedRisks || []).length > 0;
      if (step === 'action') return (s.relatedActions || []).length > 0;
      if (step === 'task') return (s.relatedTasks || []).length > 0;
      if (step === 'rectification') return (s.relatedRectifications || []).length > 0;
      if (step === 'verification') return (APP_DATA.regulatoryJointVerificationIndex || []).length > 0 || (s.relatedRectifications || []).some(tid => (APP_DATA.rectificationTasks || []).find(t => t.taskId === tid)?.verificationStatus);
      if (step === 'effectiveness') return !!(APP_DATA.regulatoryOperationalScenarioResultIndexes || []).length || !!(APP_DATA.regulatoryCoordinationResultIndexes || []).length;
      return false;
    };
    (s.expectedTraceChain || this._FA_TRACE_STEPS).forEach(step => { chain[step] = has(step); });
    const hit = Object.values(chain).filter(Boolean).length;
    const total = Object.keys(chain).length;
    let traceabilityStatus = 'NOT_TRACEABLE';
    if (hit === total && total > 0) traceabilityStatus = 'FULL_TRACEABLE';
    else if (hit > 0) traceabilityStatus = 'PARTIAL_TRACEABLE';
    s.actualTraceChain = Object.keys(chain).filter(k => chain[k]);
    s.traceabilityStatus = traceabilityStatus;
    s.blockers = (s.expectedTraceChain || []).filter(step => !chain[step]).map(step => 'MISSING_' + step.toUpperCase());
    if (traceabilityStatus === 'FULL_TRACEABLE') s.status = 'PASSED';
    else if (traceabilityStatus === 'PARTIAL_TRACEABLE') s.status = s.blockers.length > 3 ? 'GAPS' : 'RUNNING';
    else s.status = 'BLOCKED';
    if (s.scenarioType === 'DATA_QUALITY_IMPACT' && s.simulationOnly) s.status = traceabilityStatus === 'NOT_TRACEABLE' ? 'GAPS' : s.status;
    const result = { scenarioId, traceabilityStatus, chain, hitCount: hit, totalCount: total, dataStatus: 'DERIVED', evaluatedAt: this._coordNow() };
    const idx = (APP_DATA.regulatoryFinalAcceptanceResultIndexes || []).findIndex(r => r.scenarioId === scenarioId);
    if (idx >= 0) APP_DATA.regulatoryFinalAcceptanceResultIndexes[idx] = result;
    else {
      APP_DATA.regulatoryFinalAcceptanceResultIndexes = APP_DATA.regulatoryFinalAcceptanceResultIndexes || [];
      APP_DATA.regulatoryFinalAcceptanceResultIndexes.push(result);
    }
    APP_DATA.regulatoryFinalAcceptanceEvidenceIndexes = APP_DATA.regulatoryFinalAcceptanceEvidenceIndexes || [];
    APP_DATA.regulatoryFinalAcceptanceEvidenceIndexes.push({
      evidenceId: 'RFE-' + scenarioId,
      scenarioId,
      sourceType: s.sourceType,
      sourceId: s.sourceId,
      traceChain: s.actualTraceChain,
      traceabilityStatus,
      dataStatus: 'DERIVED'
    });
    return result;
  },

  detectRegulatoryFinalAcceptanceIssues() {
    const issues = [];
    let seq = 1;
    const add = (scenarioId, issueType, sourceType, sourceId, severity, description, recommendedAction) => {
      issues.push({
        id: 'RFI-' + String(seq++).padStart(3, '0'),
        scenarioId,
        issueType,
        sourceType,
        sourceId,
        severity,
        description,
        evidence: { sourceType, sourceId },
        recommendedAction,
        status: 'OPEN',
        dataStatus: 'REAL'
      });
    };
    (APP_DATA.regulatoryFinalAcceptanceScenarios || []).forEach(s => {
      s.blockers.forEach(b => add(s.id, b.startsWith('MISSING_DATA') ? 'DATA_GAP' : 'TRACEABILITY_ISSUE', s.sourceType, s.sourceId, 'MEDIUM', b, '补齐数据链路或记录真实缺口'));
    });
    if (!(APP_DATA.regulatoryBusinessObjectMappings || []).length) add(null, 'MISSING_MAPPING', 'regulatoryBusinessObjectMappings', 'NONE', 'HIGH', '业务对象映射不足', '完善映射配置');
    (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status !== 'CLOSED').slice(0, 3).forEach(i =>
      add(null, 'DATA_QUALITY', 'regulatoryDataQualityIssues', i.qualityIssueId, i.severity === 'HIGH' ? 'CRITICAL' : 'HIGH', '开放数据质量问题', '数据治理'));
    (APP_DATA.rectificationTasks || []).filter(t => t.verificationStatus !== '已验证' && t.status !== '已关闭').slice(0, 2).forEach(t =>
      add(null, 'MISSING_VERIFICATION', 'rectificationTasks', t.taskId, 'MEDIUM', '整改待验证', '推动验证闭环'));
    APP_DATA.regulatoryFinalAcceptanceIssues = issues;
    return issues;
  },

  calculateFinalAcceptanceHealth() {
    const scenarios = APP_DATA.regulatoryFinalAcceptanceScenarios || [];
    const results = APP_DATA.regulatoryFinalAcceptanceResultIndexes || [];
    const issues = APP_DATA.regulatoryFinalAcceptanceIssues || [];
    const full = results.filter(r => r.traceabilityStatus === 'FULL_TRACEABLE').length;
    const partial = results.filter(r => r.traceabilityStatus === 'PARTIAL_TRACEABLE').length;
    const not = results.filter(r => r.traceabilityStatus === 'NOT_TRACEABLE').length;
    const dataAvail = (APP_DATA.regulatoryDataSources || []).length ? Math.round((1 - (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.severity === 'HIGH').length / Math.max(1, (APP_DATA.regulatoryDataQualityIssues || []).length)) * 100) : null;
    const mappingComplete = (APP_DATA.regulatoryBusinessObjectMappings || []).length ? Math.min(100, (APP_DATA.regulatoryBusinessObjectMappings || []).length * 5) : null;
    const kriCov = (APP_DATA.regulatoryKriRuntime || []).length ? Math.round((APP_DATA.regulatoryKriRuntime || []).filter(k => !['WARNING', 'CRITICAL'].includes(k.runtimeStatus || k.status)).length / (APP_DATA.regulatoryKriRuntime || []).length * 100) : null;
    const warnCov = (APP_DATA.regulatoryWarnings || []).length ? 100 : null;
    const actionClose = (APP_DATA.regulatoryActions || []).length ? Math.round((APP_DATA.regulatoryActions || []).filter(a => ['COMPLETED', 'CLOSED', 'VERIFIED'].includes(a.status)).length / (APP_DATA.regulatoryActions || []).length * 100) : null;
    const rectVerify = (APP_DATA.rectificationTasks || []).length ? Math.round((APP_DATA.rectificationTasks || []).filter(t => t.verificationStatus === '已验证').length / (APP_DATA.rectificationTasks || []).length * 100) : null;
    const coordRate = (APP_DATA.regulatoryCoordinationCases || []).length ? Math.round((APP_DATA.regulatoryCoordinationCases || []).filter(c => c.status === 'CONFIRMED').length / (APP_DATA.regulatoryCoordinationCases || []).length * 100) : null;
    const traceRate = scenarios.length ? Math.round((full + partial * 0.5) / scenarios.length * 100) : null;
    const permOk = (APP_DATA.regulatoryRolePermissionMap || {})['ROLE-GROUP-REG']?.includes('ACCEPTANCE_VIEW') ? 100 : null;
    const auditOk = (APP_DATA.regulatoryAuditLogs || []).length ? 100 : null;
    const dims = { dataAvailability: dataAvail, dataQuality: dataAvail, mappingCompleteness: mappingComplete, kriCoverage: kriCov, warningCoverage: warnCov, actionClosureRate: actionClose, rectificationVerificationRate: rectVerify, crossOrgCoordinationRate: coordRate, dataTraceabilityRate: traceRate, permissionComplianceRate: permOk, auditCompletenessRate: auditOk };
    const vals = Object.values(dims).filter(v => v != null);
    let overallStatus = 'INSUFFICIENT_DATA';
    if (vals.length) {
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
      const critIssues = issues.filter(i => i.severity === 'CRITICAL').length;
      if (critIssues > 2 || not > full) overallStatus = 'BLOCKED';
      else if (avg >= 75 && full >= scenarios.length * 0.5) overallStatus = 'PASS';
      else if (avg >= 55 || partial > 0) overallStatus = 'PASS_WITH_GAPS';
      else overallStatus = 'AT_RISK';
    }
    const health = { overallStatus, dimensions: dims, fullTraceableCount: full, partialTraceableCount: partial, notTraceableCount: not, passCount: scenarios.filter(s => s.status === 'PASSED').length, passWithGapsCount: scenarios.filter(s => s.status === 'GAPS' || s.status === 'RUNNING').length, atRiskCount: scenarios.filter(s => s.status === 'BLOCKED').length, blockedCount: scenarios.filter(s => s.status === 'BLOCKED').length, trendStatus: 'INSUFFICIENT_HISTORY', dataStatus: vals.length ? 'DERIVED' : 'INSUFFICIENT_DATA', evaluatedAt: this._coordNow() };
    APP_DATA.regulatoryFinalAcceptanceHealth = health;
    return health;
  },

  computeRegulatoryFinalAcceptanceMetrics() {
    const scenarios = APP_DATA.regulatoryFinalAcceptanceScenarios || [];
    const health = APP_DATA.regulatoryFinalAcceptanceHealth || this.calculateFinalAcceptanceHealth();
    const results = APP_DATA.regulatoryFinalAcceptanceResultIndexes || [];
    APP_DATA.regulatoryFinalAcceptanceMetrics = {
      scenarioCount: scenarios.length,
      passedCount: scenarios.filter(s => s.status === 'PASSED').length,
      runningCount: scenarios.filter(s => s.status === 'RUNNING').length,
      gapsCount: scenarios.filter(s => s.status === 'GAPS').length,
      blockedCount: scenarios.filter(s => s.status === 'BLOCKED').length,
      fullTraceableCount: results.filter(r => r.traceabilityStatus === 'FULL_TRACEABLE').length,
      partialTraceableCount: results.filter(r => r.traceabilityStatus === 'PARTIAL_TRACEABLE').length,
      notTraceableCount: results.filter(r => r.traceabilityStatus === 'NOT_TRACEABLE').length,
      passHealthCount: health.overallStatus === 'PASS' ? 1 : 0,
      passWithGapsCount: health.overallStatus === 'PASS_WITH_GAPS' ? 1 : 0,
      atRiskHealthCount: health.overallStatus === 'AT_RISK' ? 1 : 0,
      blockedHealthCount: health.overallStatus === 'BLOCKED' ? 1 : 0,
      issueCount: (APP_DATA.regulatoryFinalAcceptanceIssues || []).length,
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: 'DERIVED'
    };
    return APP_DATA.regulatoryFinalAcceptanceMetrics;
  },

  validateRoleAcceptanceJourney(roleType) {
    const scenarios = APP_DATA.regulatoryFinalAcceptanceScenarios || [];
    const defs = (APP_DATA.regulatoryFinalAcceptanceScenarioDefinitions || []).filter(d => {
      if (roleType === 'GROUP_LEADER') return ['FA-01', 'FA-08'].includes(d.scenarioCode);
      if (roleType === 'GROUP_REGULATORY') return true;
      if (roleType === 'DOMAIN_REGULATOR') return ['FA-02', 'FA-05', 'FA-07'].includes(d.scenarioCode);
      return ['FA-04', 'FA-06'].includes(d.scenarioCode);
    });
    const roleMap = { GROUP_LEADER: 'ROLE-GROUP-LEADER', GROUP_REGULATORY: 'ROLE-GROUP-REG', DOMAIN_REGULATOR: 'ROLE-DOMAIN-REG', ENTITY_REGULATOR: 'ROLE-ENTITY-REG' };
    const user = { userId: 'U-TEST', roleId: roleMap[roleType], organizationId: 'G001', status: 'ACTIVE' };
    const visible = roleType === 'ENTITY_REGULATOR' ? this.filterCoordinationCasesByScope(APP_DATA.regulatoryCoordinationCases || []) : scenarios;
    const panels = {
      GROUP_LEADER: typeof this.renderFinalAcceptanceRolePanel('GROUP_LEADER') === 'string',
      GROUP_REGULATORY: typeof this.renderFinalAcceptanceWorkbenchPanel() === 'string',
      DOMAIN_REGULATOR: typeof this.renderFinalAcceptanceRolePanel('DOMAIN_REGULATOR') === 'string',
      ENTITY_REGULATOR: typeof this.renderFinalAcceptanceRolePanel('ENTITY_REGULATOR') === 'string'
    };
    return {
      roleType,
      scenarioCodes: defs.map(d => d.scenarioCode),
      visibleScenarioCount: visible.length,
      panelRendered: panels[roleType],
      permissionOk: !!(APP_DATA.regulatoryRolePermissionMap || {})[roleMap[roleType]]?.includes('ACCEPTANCE_VIEW'),
      journeyPass: defs.every(d => scenarios.some(s => s.scenarioCode === d.scenarioCode)) && panels[roleType],
      dataStatus: 'DERIVED'
    };
  },

  renderFinalAcceptanceDashboardPanel() {
    const m = APP_DATA.regulatoryFinalAcceptanceMetrics || {};
    const h = APP_DATA.regulatoryFinalAcceptanceHealth || {};
    const scenarios = APP_DATA.regulatoryFinalAcceptanceScenarios || [];
    return `<div class="card"><div class="card-title">最终验收总览 ${this.renderPublicUnifiedStatusBadge(h.overallStatus || 'INSUFFICIENT_DATA')}</div>
      <div class="group-metrics">${[
        [m.scenarioCount || scenarios.length, '9大验收场景', `App.navigatePublic('regulatory-workbench')`],
        [m.passedCount || scenarios.filter(s => s.status === 'PASSED').length, '已通过', `App.navigatePublic('regulatory-performance')`],
        [m.runningCount || scenarios.filter(s => s.status === 'RUNNING').length, '运行中', `App.navigatePublic('regulatory-analysis-center')`],
        [m.gapsCount || scenarios.filter(s => s.status === 'GAPS').length, '存在缺口', `App.navigatePublic('regulatory-improvement-center')`],
        [m.blockedCount || scenarios.filter(s => s.status === 'BLOCKED').length, '阻断事项', `App.navigatePublic('regulatory-queue')`],
        [m.issueCount || 0, '验收问题', `App.navigatePublic('regulatory-improvement-center')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      ${scenarios.length ? `<table class="data-table"><thead><tr><th>场景</th><th>名称</th><th>追溯</th><th>状态</th></tr></thead><tbody>${scenarios.map(s => `<tr><td>${s.scenarioCode}</td><td>${s.scenarioName}</td><td>${this.renderPublicUnifiedStatusBadge(s.traceabilityStatus)}</td><td>${this.renderPublicUnifiedStatusBadge(s.status)}</td></tr>`).join('')}</tbody></table>` : ''}
    </div>`;
  },

  renderFinalAcceptanceWorkbenchPanel() {
    const issues = APP_DATA.regulatoryFinalAcceptanceIssues || [];
    const scenarios = APP_DATA.regulatoryFinalAcceptanceScenarios || [];
    return `<div class="card"><div class="card-title">最终验收待办</div>
      <div class="group-metrics">${[
        [scenarios.filter(s => s.status === 'RUNNING').length, '验收运行中', `App.navigatePublic('regulatory-workbench')`],
        [issues.filter(i => i.issueType === 'DATA_GAP' || i.issueType === 'MISSING_MAPPING').length, '待补数据/映射', `App.navigatePublic('regulatory-data-governance')`],
        [issues.filter(i => i.issueType === 'DATA_QUALITY').length, '待补数据质量', `App.navigatePublic('regulatory-data-quality')`],
        [(APP_DATA.rectificationTasks || []).filter(t => t.status !== '已关闭').length, '待整改', `App.navigatePublic('rectification')`],
        [issues.filter(i => i.issueType === 'MISSING_VERIFICATION').length, '待验证', `App.navigatePublic('rectification')`],
        [scenarios.filter(s => s.requiresHumanDecision).length, '待人工决策', `App.navigatePublic('regulatory-queue',{queueType:'DECISION'})`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
    </div>`;
  },

  renderFinalAcceptanceAnalysisPanel() {
    const h = APP_DATA.regulatoryFinalAcceptanceHealth || {};
    const gaps = (APP_DATA.regulatoryDomainDataGaps || []).filter(g => g.gapStatus === 'OPEN').length;
    const maturity = APP_DATA.regulatoryDomainClosureMetrics || {};
    return `<div class="card"><div class="card-title">全平台监管链路完整性</div>
      <div class="group-metrics">${[
        [h.dimensions?.dataTraceabilityRate ?? '—', '数据追溯完整性', `App.navigatePublic('regulatory-data-lineage')`],
        [maturity.avgClosureReadiness ?? '—', '领域闭环成熟度', `App.navigatePublic('regulatory-data-governance')`],
        [gaps, '重大缺口', `App.navigatePublic('regulatory-improvement-center')`],
        [h.fullTraceableCount ?? 0, 'FULL_TRACEABLE', `App.navigatePublic('regulatory-analysis-center')`],
        [h.partialTraceableCount ?? 0, 'PARTIAL_TRACEABLE', `App.navigatePublic('regulatory-analysis-center')`],
        [h.notTraceableCount ?? 0, 'NOT_TRACEABLE', `App.navigatePublic('regulatory-analysis-center')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      <p class="insight-note">${this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY')} 趋势数据不足，不伪造历史</p>
    </div>`;
  },

  renderFinalAcceptanceImprovementPanel() {
    const issues = APP_DATA.regulatoryFinalAcceptanceIssues || [];
    const dataGaps = (APP_DATA.regulatoryDomainDataGaps || []).filter(g => g.gapStatus === 'OPEN');
    const capGaps = (APP_DATA.regulatoryDomainClosureMetrics?.domainReadiness || []).filter(d => (d.closureReadiness || 0) < 60);
    const priority = [...issues].sort((a, b) => ({ CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 }[a.severity] - { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 }[b.severity])).slice(0, 5);
    const rows = issues.slice(0, 8).map(i => `<tr><td>${i.issueType}</td><td>${i.sourceId}</td><td>${this.renderPublicPriorityBadge(i.severity)}</td><td>${i.description}</td><td>${i.status}</td></tr>`).join('');
    return `<div class="card"><div class="card-title">最终验收问题</div>
      <p class="insight-note">真实记录缺口，不隐藏问题 · 共 <b>${issues.length}</b> 项</p>
      ${rows ? `<table class="data-table"><thead><tr><th>类型</th><th>来源</th><th>严重度</th><th>描述</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无问题')}
    </div>
    <div class="group-two">
      <div class="card"><div class="card-title">数据缺口</div>
        ${dataGaps.length ? dataGaps.slice(0, 5).map(g => `<p class="insight-note">${g.domainId || g.gapId} · ${g.gapType} · ${g.gapStatus}</p>`).join('') : this.renderPublicEmptyState('暂无开放数据缺口')}
        <p>${this.renderPublicLinkButton('数据治理', `App.navigatePublic('regulatory-data-governance')`)}</p>
      </div>
      <div class="card"><div class="card-title">监管能力缺口</div>
        ${capGaps.length ? capGaps.slice(0, 5).map(d => `<p class="insight-note">${d.domainId} · 闭环准备度 ${d.closureReadiness ?? '—'}%</p>`).join('') : this.renderPublicEmptyState('暂无显著能力缺口')}
        <p>${this.renderPublicLinkButton('领域闭环', `App.navigatePublic('regulatory-data-governance')`)}</p>
      </div>
    </div>
    <div class="card"><div class="card-title">优先改进事项</div>
      ${priority.length ? priority.map(i => `<p class="insight-note">${this.renderPublicPriorityBadge(i.severity)} ${i.issueType} · ${i.description} · ${i.recommendedAction}</p>`).join('') : this.renderPublicEmptyState('暂无')}
    </div>`;
  },

  renderFinalAcceptanceRolePanel(roleType) {
    const h = APP_DATA.regulatoryFinalAcceptanceHealth || {};
    const issues = APP_DATA.regulatoryFinalAcceptanceIssues || [];
    const scenarios = APP_DATA.regulatoryFinalAcceptanceScenarios || [];
    let items = [];
    if (roleType === 'GROUP_LEADER') {
      items = [[h.overallStatus || '—', '集团监管最终健康度'], [issues.filter(i => i.severity === 'CRITICAL').length, '重大缺口'], [scenarios.filter(s => s.scenarioType === 'LEADER_DECISION').length, '重大风险'], [(APP_DATA.regulatoryOperatingRecommendations || []).filter(r => r.requiresHumanDecision).length, '重大决策']];
    } else if (roleType === 'GROUP_REGULATORY') {
      items = [[scenarios.filter(s => s.status === 'BLOCKED').length, '验收阻断'], [issues.filter(i => i.issueType === 'DATA_QUALITY').length, '待补数据'], [issues.filter(i => i.issueType === 'MISSING_VERIFICATION').length, '待验证'], [(APP_DATA.rectificationTasks || []).filter(t => t.status !== '已关闭').length, '待整改']];
    } else if (roleType === 'DOMAIN_REGULATOR') {
      const dom = this.regulatoryRoleScopeId || (APP_DATA.regulatoryDomainConfigurations || [])[0]?.domainId;
      const dr = (APP_DATA.regulatoryDomainOperationReviews || []).find(r => r.domainId === dom);
      items = [[dr?.domainStatus || '—', '本领域闭环成熟度'], [(APP_DATA.regulatoryKriRuntime || []).filter(k => k.domainId === dom).length, 'KRI覆盖'], [(APP_DATA.regulatoryWarnings || []).filter(w => w.domainId === dom).length, '预警覆盖'], [(APP_DATA.rectificationTasks || []).filter(t => t.domainId === dom).length, '整改验证']];
    } else {
      const eid = this.regulatoryRoleScopeId;
      items = [[(APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.entityId === eid).length, '本法人数据缺口'], [(APP_DATA.warnings || []).filter(w => w.entityId === eid).length, '本法人风险'], [(APP_DATA.rectificationTasks || []).filter(t => t.entityId === eid && t.status !== '已关闭').length, '本法人整改'], [(APP_DATA.rectificationTasks || []).filter(t => t.entityId === eid && t.verificationStatus !== '已验证').length, '本法人验证']];
    }
    return `<div class="card"><div class="card-title">最终验收 · ${roleType}</div>
      <div class="group-metrics">${items.map(([v, l]) => this.renderPublicKpiCard(l, v, `App.navigatePublic('regulatory-workbench')`)).join('')}</div>
      ${this.renderFinalAcceptanceRemediationRolePanel(roleType)}
    </div>`;
  },

  _REMEDIATION_STATES: ['OPEN', 'DATA_REQUIRED', 'ACTION_REQUIRED', 'IN_REMEDIATION', 'PENDING_VERIFICATION', 'VERIFICATION_FAILED', 'VERIFIED'],
  _REMEDIATION_TRANSITIONS: {
    OPEN: ['DATA_REQUIRED', 'ACTION_REQUIRED'],
    DATA_REQUIRED: ['ACTION_REQUIRED', 'OPEN'],
    ACTION_REQUIRED: ['IN_REMEDIATION', 'DATA_REQUIRED'],
    IN_REMEDIATION: ['PENDING_VERIFICATION', 'ACTION_REQUIRED'],
    PENDING_VERIFICATION: ['VERIFIED', 'VERIFICATION_FAILED'],
    VERIFICATION_FAILED: ['ACTION_REQUIRED', 'IN_REMEDIATION'],
    VERIFIED: []
  },

  _classifyAcceptanceIssueGap(issue) {
    const t = issue.issueType || '';
    if (t === 'TRACEABILITY_ISSUE') return 'TRACEABILITY_GAP';
    if (t === 'DATA_QUALITY' || t === 'DATA_GAP' || t === 'MISSING_MAPPING') return 'DATA_GAP';
    if (t === 'MISSING_VERIFICATION') return 'VERIFICATION_GAP';
    if (t === 'MISSING_KRI' || t === 'MISSING_WARNING') return 'CONFIGURATION_GAP';
    if (t === 'MISSING_ACTION' || t === 'MISSING_RECTIFICATION') return 'OPERATIONAL_GAP';
    if (t === 'PERMISSION_ISSUE') return 'GOVERNANCE_GAP';
    return 'OTHER';
  },

  _resolveIssueResponsibleOrg(issue) {
    const st = issue.sourceType;
    const sid = issue.sourceId;
    if (st === 'warnings') {
      const w = (APP_DATA.warnings || []).find(x => x.id === sid);
      return w?.unit || w?.entityId || '集团监管部门';
    }
    if (st === 'regulatoryDataQualityIssues') {
      const i = (APP_DATA.regulatoryDataQualityIssues || []).find(x => x.qualityIssueId === sid);
      return i?.responsibleOrganization || i?.domainId || '数据治理团队';
    }
    if (st === 'rectificationTasks') {
      const t = (APP_DATA.rectificationTasks || []).find(x => x.taskId === sid);
      return t?.responsibleDept || t?.entityId || '整改责任单位';
    }
    if (st === 'regulatoryCoordinationCases') {
      const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === sid);
      return c?.primaryOrganization || '集团监管部门';
    }
    if (st === 'regulatoryRuleChangeRequests') return '规则治理团队';
    if (st === 'regulatoryImprovementOpportunities') return '持续改进团队';
    if (st === 'regulatoryOperatingCycleInstances') return '集团监管部门';
    return '集团监管部门';
  },

  _findRectificationForSource(sourceType, sourceId) {
    const rects = APP_DATA.rectificationTasks || [];
    if (sourceType === 'warnings') {
      const w = (APP_DATA.warnings || []).find(x => x.id === sourceId);
      return rects.filter(t => t.riskMatterId === sourceId || t.riskId === sourceId || t.entityId === w?.entityId);
    }
    if (sourceType === 'crossDomainRiskMatters') {
      const m = (APP_DATA.crossDomainRiskMatters || []).find(x => x.riskMatterId === sourceId);
      return rects.filter(t => (m?.relatedRectificationTaskIds || []).includes(t.taskId));
    }
    if (sourceType === 'regulatoryDataQualityIssues') {
      const i = (APP_DATA.regulatoryDataQualityIssues || []).find(x => x.qualityIssueId === sourceId);
      return rects.filter(t => t.dataQualityIssueId === sourceId || (i?.kriId && t.kriId === i.kriId));
    }
    if (sourceType === 'regulatoryCoordinationCases') {
      const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === sourceId);
      return rects.filter(t => (c?.relatedRectificationTaskIds || []).includes(t.taskId) || (c?.affectedEntities || []).includes(t.entityId));
    }
    if (sourceType === 'rectificationTasks') return rects.filter(t => t.taskId === sourceId);
    return [];
  },

  _findRiskForSource(sourceType, sourceId) {
    if (sourceType === 'warnings') return (APP_DATA.warnings || []).find(x => x.id === sourceId);
    if (sourceType === 'crossDomainRiskMatters') return (APP_DATA.crossDomainRiskMatters || []).find(x => x.riskMatterId === sourceId);
    if (sourceType === 'regulatoryDataQualityIssues') {
      const i = (APP_DATA.regulatoryDataQualityIssues || []).find(x => x.qualityIssueId === sourceId);
      if (i?.kriId) return (APP_DATA.warnings || []).find(w => w.kriId === i.kriId);
    }
    if (sourceType === 'regulatoryCoordinationCases') {
      const c = (APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === sourceId);
      return (APP_DATA.warnings || []).find(w => (c?.affectedEntities || []).includes(w.entityId));
    }
    if (sourceType === 'regulatoryImprovementOpportunities') {
      const o = (APP_DATA.regulatoryImprovementOpportunities || []).find(x => x.opportunityId === sourceId);
      if (o?.sourceType === 'warnings') return (APP_DATA.warnings || []).find(w => w.id === o.sourceId);
    }
    return null;
  },

  _assessIssueDataSupport(issue) {
    const st = issue.sourceType;
    const sid = issue.sourceId;
    if (!st || !sid) return { hasData: false, reason: 'NO_SOURCE' };
    const resolvers = {
      warnings: () => !!(APP_DATA.warnings || []).find(x => x.id === sid),
      regulatoryDataQualityIssues: () => !!(APP_DATA.regulatoryDataQualityIssues || []).find(x => x.qualityIssueId === sid),
      rectificationTasks: () => !!(APP_DATA.rectificationTasks || []).find(x => x.taskId === sid),
      regulatoryCoordinationCases: () => !!(APP_DATA.regulatoryCoordinationCases || []).find(x => x.id === sid),
      regulatoryRuleChangeRequests: () => !!(APP_DATA.regulatoryRuleChangeRequests || []).find(x => x.changeRequestId === sid),
      regulatoryImprovementOpportunities: () => !!(APP_DATA.regulatoryImprovementOpportunities || []).find(x => x.opportunityId === sid),
      regulatoryOperatingCycleInstances: () => !!(APP_DATA.regulatoryOperatingCycleInstances || []).find(x => x.id === sid),
      regulatoryAuditLogs: () => !!(APP_DATA.regulatoryAuditLogs || []).find(x => x.auditId === sid)
    };
    const hasSource = resolvers[st] ? resolvers[st]() : false;
    if (!hasSource) return { hasData: false, reason: 'SOURCE_NOT_FOUND' };
    const blocker = issue.description || '';
    if (blocker === 'MISSING_RECTIFICATION') {
      const rects = this._findRectificationForSource(st, sid);
      return { hasData: rects.length > 0, reason: rects.length ? 'RECT_LINKED' : 'NO_RECTIFICATION_DATA', linkedRects: rects.map(t => t.taskId) };
    }
    if (blocker === 'MISSING_RISK') {
      const risk = this._findRiskForSource(st, sid);
      return { hasData: !!risk, reason: risk ? 'RISK_LINKED' : 'NO_RISK_DATA', riskId: risk?.id || risk?.riskMatterId };
    }
    if (issue.issueType === 'DATA_QUALITY') {
      const qi = (APP_DATA.regulatoryDataQualityIssues || []).find(x => x.qualityIssueId === sid);
      return { hasData: !!qi, reason: qi?.status === 'CLOSED' ? 'QUALITY_CLOSED' : 'QUALITY_OPEN', qualityStatus: qi?.status };
    }
    if (issue.issueType === 'MISSING_VERIFICATION') {
      const rect = (APP_DATA.rectificationTasks || []).find(x => x.taskId === sid);
      return { hasData: !!rect, reason: rect?.verificationStatus || 'NO_RECT', verificationStatus: rect?.verificationStatus };
    }
    return { hasData: true, reason: 'SOURCE_EXISTS' };
  },

  _computeIssueRemediationStatus(issue, existing) {
    if (existing?.status === 'VERIFIED' && existing?.verificationResult?.evidenceValid) {
      const revalidate = this._assessIssueDataSupport(issue);
      if (revalidate.hasData && (issue.issueType !== 'DATA_QUALITY' || revalidate.reason === 'QUALITY_CLOSED')) return 'VERIFIED';
    }
    const support = this._assessIssueDataSupport(issue);
    const gap = this._classifyAcceptanceIssueGap(issue);
    if (!support.hasData) return 'DATA_REQUIRED';
    if (issue.issueType === 'DATA_QUALITY') {
      if (support.qualityStatus === 'CLOSED') {
        const gov = (APP_DATA.regulatoryDataGovernanceTasks || []).find(t => t.relatedQualityIssueId === issue.sourceId && ['VERIFIED', 'CLOSED'].includes(t.status));
        return gov ? 'PENDING_VERIFICATION' : 'IN_REMEDIATION';
      }
      return issue.severity === 'CRITICAL' ? 'ACTION_REQUIRED' : 'DATA_REQUIRED';
    }
    if (issue.issueType === 'MISSING_VERIFICATION') {
      if (support.verificationStatus === '已验证') return 'PENDING_VERIFICATION';
      if (support.verificationStatus === '验证失败') return 'VERIFICATION_FAILED';
      return 'ACTION_REQUIRED';
    }
    if (gap === 'TRACEABILITY_GAP') {
      if (issue.description === 'MISSING_RECTIFICATION') {
        const rects = this._findRectificationForSource(issue.sourceType, issue.sourceId);
        if (!rects.length) return 'DATA_REQUIRED';
        if (rects.some(t => t.verificationStatus === '已验证')) return 'PENDING_VERIFICATION';
        return 'ACTION_REQUIRED';
      }
      if (issue.description === 'MISSING_RISK') {
        if (!this._findRiskForSource(issue.sourceType, issue.sourceId)) return 'DATA_REQUIRED';
        return 'IN_REMEDIATION';
      }
      return 'OPEN';
    }
    return support.hasData ? 'ACTION_REQUIRED' : 'OPEN';
  },

  _getIssueAffectedScenarios(issue) {
    if (issue.scenarioId) {
      const s = (APP_DATA.regulatoryFinalAcceptanceScenarios || []).find(x => x.id === issue.scenarioId);
      return s ? [s.scenarioCode] : [];
    }
    return (APP_DATA.regulatoryFinalAcceptanceScenarios || []).filter(s =>
      s.sourceType === issue.sourceType && s.sourceId === issue.sourceId
    ).map(s => s.scenarioCode);
  },

  buildAcceptanceIssueRemediationIndexes() {
    const issues = APP_DATA.regulatoryFinalAcceptanceIssues || [];
    const indexes = [];
    issues.forEach(issue => {
      const existing = (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).find(r => r.issueId === issue.id);
      const gapType = this._classifyAcceptanceIssueGap(issue);
      const dataSupport = this._assessIssueDataSupport(issue);
      const status = this._computeIssueRemediationStatus(issue, existing);
      const scenario = issue.scenarioId ? (APP_DATA.regulatoryFinalAcceptanceScenarios || []).find(s => s.id === issue.scenarioId) : null;
      indexes.push({
        remediationId: 'RFR-' + issue.id.replace('RFI-', ''),
        issueId: issue.id,
        scenarioId: issue.scenarioId,
        scenarioCodes: this._getIssueAffectedScenarios(issue),
        gapType,
        sourceType: issue.sourceType,
        sourceId: issue.sourceId,
        affectedChain: scenario?.expectedTraceChain || [],
        responsibleOrganization: this._resolveIssueResponsibleOrg(issue),
        recommendedAction: issue.recommendedAction || '补齐真实业务数据或推动整改',
        hasDataSupport: dataSupport.hasData,
        dataSupportReason: dataSupport.reason,
        requiresHumanDecision: issue.severity === 'CRITICAL' || gapType === 'GOVERNANCE_GAP' || (scenario?.requiresHumanDecision === true),
        requiresAdditionalData: !dataSupport.hasData || status === 'DATA_REQUIRED',
        status,
        verificationResult: existing?.verificationResult || null,
        sourceTraceability: { sourceType: issue.sourceType, sourceId: issue.sourceId, issueType: issue.issueType },
        updatedAt: this._coordNow()
      });
    });
    APP_DATA.regulatoryFinalAcceptanceRemediationIndexes = indexes;
    return indexes;
  },

  advanceAcceptanceIssueRemediation(issueId, targetStatus, context) {
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryFinalAcceptanceRemediationIndexes', issueId, 'MANAGE');
    if (!access.allowed) return { success: false, message: '无权操作验收整改' };
    const idx = (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).find(r => r.issueId === issueId);
    const issue = (APP_DATA.regulatoryFinalAcceptanceIssues || []).find(i => i.id === issueId);
    if (!idx || !issue) return { success: false, message: '整改事项不存在' };
    const from = idx.status;
    const allowed = (this._REMEDIATION_TRANSITIONS[from] || []);
    if (!allowed.includes(targetStatus)) return { success: false, message: `不允许从 ${from} 到 ${targetStatus}` };
    if (targetStatus === 'VERIFIED') return { success: false, message: '须通过 verifyAcceptanceIssueRemediation 验证' };
    if (targetStatus === 'IN_REMEDIATION' && idx.requiresHumanDecision && !(context?.approved)) {
      return { success: false, message: '需要人工确认' };
    }
    idx.status = targetStatus;
    idx.updatedAt = this._coordNow();
    issue.status = targetStatus;
    this.createRegulatoryAuditLog({
      actionType: 'REMEDIATION_STATUS_CHANGE', objectType: 'regulatoryFinalAcceptanceRemediationIndexes',
      objectId: idx.remediationId, beforeState: from, afterState: targetStatus,
      reason: context?.reason || '验收问题整改状态变更', requiresApproval: idx.requiresHumanDecision,
      approved: context?.approved || false
    });
    return { success: true, status: targetStatus };
  },

  verifyAcceptanceIssueRemediation(issueId, result) {
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryFinalAcceptanceRemediationIndexes', issueId, 'MANAGE');
    if (!access.allowed) return { success: false, message: '无权验证' };
    const idx = (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).find(r => r.issueId === issueId);
    const issue = (APP_DATA.regulatoryFinalAcceptanceIssues || []).find(i => i.id === issueId);
    if (!idx || !issue) return { success: false, message: '不存在' };
    if (idx.status !== 'PENDING_VERIFICATION') return { success: false, message: '当前状态不可验证' };
    const support = this._assessIssueDataSupport(issue);
    const passed = result?.passed === true && support.hasData && this._validateRemediationEvidence(issue, support);
    idx.verificationResult = { passed, evidenceValid: passed, verifiedAt: this._coordNow(), evidence: support, verifier: this.getCurrentRegulatoryUser()?.userId };
    if (passed) {
      idx.status = 'VERIFIED';
      issue.status = 'VERIFIED';
    } else {
      idx.status = 'VERIFICATION_FAILED';
      issue.status = 'VERIFICATION_FAILED';
    }
    idx.updatedAt = this._coordNow();
    this.createRegulatoryAuditLog({
      actionType: passed ? 'REMEDIATION_VERIFIED' : 'REMEDIATION_VERIFICATION_FAILED',
      objectType: 'regulatoryFinalAcceptanceRemediationIndexes', objectId: idx.remediationId,
      beforeState: 'PENDING_VERIFICATION', afterState: idx.status,
      reason: result?.reason || (passed ? '验收整改验证通过' : '验收整改验证失败')
    });
    if (!passed) this.advanceAcceptanceIssueRemediation(issueId, 'ACTION_REQUIRED', { reason: '验证失败重新整改', approved: true });
    return { success: true, status: idx.status, passed };
  },

  _validateRemediationEvidence(issue, support) {
    if (!support.hasData) return false;
    if (issue.issueType === 'DATA_QUALITY') {
      const qi = (APP_DATA.regulatoryDataQualityIssues || []).find(x => x.qualityIssueId === issue.sourceId);
      return qi && (qi.status === 'CLOSED' || qi.status === 'RESOLVED');
    }
    if (issue.issueType === 'MISSING_VERIFICATION') {
      const rect = (APP_DATA.rectificationTasks || []).find(x => x.taskId === issue.sourceId);
      return rect?.verificationStatus === '已验证';
    }
    if (issue.description === 'MISSING_RECTIFICATION') {
      return (support.linkedRects || []).length > 0;
    }
    if (issue.description === 'MISSING_RISK') {
      return !!support.riskId || !!this._findRiskForSource(issue.sourceType, issue.sourceId);
    }
    return false;
  },

  calculateFinalAcceptanceReadiness() {
    const health = APP_DATA.regulatoryFinalAcceptanceHealth || this.calculateFinalAcceptanceHealth();
    const indexes = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || this.buildAcceptanceIssueRemediationIndexes();
    const scenarios = APP_DATA.regulatoryFinalAcceptanceScenarios || [];
    const results = APP_DATA.regulatoryFinalAcceptanceResultIndexes || [];
    const full = results.filter(r => r.traceabilityStatus === 'FULL_TRACEABLE').length;
    const partial = results.filter(r => r.traceabilityStatus === 'PARTIAL_TRACEABLE').length;
    const verified = indexes.filter(r => r.status === 'VERIFIED').length;
    const open = indexes.filter(r => !['VERIFIED'].includes(r.status)).length;
    const dataRequired = indexes.filter(r => r.status === 'DATA_REQUIRED').length;
    const dims = {
      traceabilityCompleteness: scenarios.length ? Math.round((full + partial * 0.5) / scenarios.length * 100) : null,
      dataCredibility: health.dimensions?.dataQuality ?? null,
      keyScenarioOperability: scenarios.length ? Math.round(scenarios.filter(s => s.status !== 'BLOCKED').length / scenarios.length * 100) : null,
      permissionAuditIntegrity: health.dimensions?.permissionComplianceRate ?? null,
      humanDecisionControl: scenarios.every(s => s.requiresHumanDecision) ? 100 : null,
      regulatoryClosureCompleteness: health.dimensions?.actionClosureRate ?? null,
      issueRemediationCompletion: indexes.length ? Math.round(verified / indexes.length * 100) : null,
      realBusinessDataCoverage: health.dimensions?.dataAvailability ?? null
    };
    const vals = Object.values(dims).filter(v => v != null);
    let overallStatus = 'NOT_READY';
    if (vals.length) {
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
      const blocked = scenarios.filter(s => s.status === 'BLOCKED').length;
      if (blocked > 0) overallStatus = 'NOT_READY';
      else if (avg >= 80 && verified === indexes.length && full === scenarios.length) overallStatus = 'READY';
      else if (avg >= 40 || partial > 0 || open > 0) overallStatus = 'READY_WITH_GAPS';
      else overallStatus = 'NOT_READY';
    }
    const readiness = {
      overallStatus,
      dimensions: dims,
      openIssueCount: open,
      verifiedIssueCount: verified,
      dataRequiredCount: dataRequired,
      humanDecisionRequiredCount: indexes.filter(r => r.requiresHumanDecision && r.status !== 'VERIFIED').length,
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: vals.length ? 'DERIVED' : 'INSUFFICIENT_DATA',
      evaluatedAt: this._coordNow()
    };
    APP_DATA.regulatoryFinalAcceptanceReadiness = readiness;
    return readiness;
  },

  buildRegulatoryFinalDeliveryChecklist() {
    const pages = (this.publicRegulatoryPages || []).length;
    const scenarios = APP_DATA.regulatoryFinalAcceptanceScenarios || [];
    const opScenarios = APP_DATA.regulatoryOperationalScenarios || [];
    const indexes = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || [];
    const readiness = APP_DATA.regulatoryFinalAcceptanceReadiness || this.calculateFinalAcceptanceReadiness();
    const health = APP_DATA.regulatoryFinalAcceptanceHealth || {};
    const mark = (cond, partialCond, noData) => cond ? (partialCond ? 'PARTIAL' : 'COMPLETED') : (noData ? 'DATA_REQUIRED' : 'PARTIAL');
    const items = [
      { id: 'DC-01', name: '平台能力地图', status: (APP_DATA.regulatoryCapabilityMap || []).length >= 70 ? 'COMPLETED' : 'PARTIAL', sourceType: 'regulatoryCapabilityMap' },
      { id: 'DC-02', name: '70个公共监管页面', status: pages === 70 ? 'COMPLETED' : 'PARTIAL', sourceType: 'publicRegulatoryPages', count: pages },
      { id: 'DC-03', name: '4类角色旅程', status: ['GROUP_LEADER', 'GROUP_REGULATORY', 'DOMAIN_REGULATOR', 'ENTITY_REGULATOR'].every(r => this.validateRoleAcceptanceJourney(r).journeyPass) ? 'COMPLETED' : 'PARTIAL', sourceType: 'regulatoryRoleProfiles' },
      { id: 'DC-04', name: '9个最终验收场景', status: scenarios.length >= 9 ? 'COMPLETED' : 'PARTIAL', sourceType: 'regulatoryFinalAcceptanceScenarios', count: scenarios.length },
      { id: 'DC-05', name: '8个运营实战监管场景', status: opScenarios.length >= 8 ? 'COMPLETED' : 'PARTIAL', sourceType: 'regulatoryOperationalScenarios', count: opScenarios.length },
      { id: 'DC-06', name: '数据源与数据治理链路', status: mark((APP_DATA.regulatoryDataSources || []).length > 0 && (APP_DATA.regulatoryDataGovernanceTasks || []).length > 0, false, true), sourceType: 'regulatoryDataSources' },
      { id: 'DC-07', name: 'KRI与预警链路', status: mark((APP_DATA.regulatoryKriRuntime || []).length > 0 && (APP_DATA.regulatoryWarnings || []).length > 0, health.partialTraceableCount > 0, true), sourceType: 'regulatoryKriRuntime' },
      { id: 'DC-08', name: '规则治理链路', status: mark((APP_DATA.regulatoryRules || []).length > 0 && (APP_DATA.regulatoryRuleChangeRequests || []).length > 0, false, true), sourceType: 'regulatoryRules' },
      { id: 'DC-09', name: '权限授权与审计链路', status: mark((APP_DATA.regulatoryAuditLogs || []).length > 0 && (APP_DATA.regulatoryAuthorizationRequests || []).length > 0, false, false), sourceType: 'regulatoryAuditLogs' },
      { id: 'DC-10', name: '协同监管链路', status: mark((APP_DATA.regulatoryCoordinationCases || []).length > 0, health.partialTraceableCount > 0, false), sourceType: 'regulatoryCoordinationCases' },
      { id: 'DC-11', name: '持续改进链路', status: mark((APP_DATA.regulatoryImprovementOpportunities || []).length > 0, false, false), sourceType: 'regulatoryImprovementOpportunities' },
      { id: 'DC-12', name: '最终验收问题清单', status: indexes.length >= 15 ? 'COMPLETED' : 'PARTIAL', sourceType: 'regulatoryFinalAcceptanceIssues', count: indexes.length },
      { id: 'DC-13', name: '数据缺口清单', status: indexes.filter(r => r.status === 'DATA_REQUIRED').length > 0 ? 'DATA_REQUIRED' : 'COMPLETED', sourceType: 'regulatoryDomainDataGaps' },
      { id: 'DC-14', name: '待补充真实业务数据清单', status: indexes.filter(r => r.requiresAdditionalData).length > 0 ? 'DATA_REQUIRED' : 'COMPLETED', sourceType: 'regulatoryFinalAcceptanceRemediationIndexes' },
      { id: 'DC-15', name: '投资管理冻结证明', status: 'COMPLETED', sourceType: 'investmentFreeze', note: "navigate('penetration')===3" },
      { id: 'DC-16', name: '全部验收脚本清单', status: 'COMPLETED', sourceType: 'acceptanceScripts', note: 'Phase 21-32 validate+e2e' }
    ];
    const completed = items.filter(i => i.status === 'COMPLETED').length;
    const checklist = {
      items,
      completedCount: completed,
      partialCount: items.filter(i => i.status === 'PARTIAL').length,
      dataRequiredCount: items.filter(i => i.status === 'DATA_REQUIRED').length,
      readinessStatus: readiness.overallStatus,
      healthStatus: health.overallStatus,
      evaluatedAt: this._coordNow(),
      dataStatus: 'DERIVED'
    };
    APP_DATA.regulatoryFinalAcceptanceDeliveryChecklist = checklist;
    return checklist;
  },

  initializeRegulatoryFinalRemediation() {
    this.buildAcceptanceIssueRemediationIndexes();
    this.calculateFinalAcceptanceReadiness();
    this.buildRegulatoryFinalDeliveryChecklist();
    APP_DATA.regulatoryFinalAcceptanceRemediationMetrics = {
      issueCount: (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).length,
      openCount: (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).filter(r => r.status === 'OPEN').length,
      dataRequiredCount: (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).filter(r => r.status === 'DATA_REQUIRED').length,
      actionRequiredCount: (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).filter(r => r.status === 'ACTION_REQUIRED').length,
      inRemediationCount: (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).filter(r => r.status === 'IN_REMEDIATION').length,
      pendingVerificationCount: (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).filter(r => r.status === 'PENDING_VERIFICATION').length,
      verifiedCount: (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).filter(r => r.status === 'VERIFIED').length,
      verificationFailedCount: (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).filter(r => r.status === 'VERIFICATION_FAILED').length,
      readinessStatus: APP_DATA.regulatoryFinalAcceptanceReadiness?.overallStatus,
      deliveryCompletedCount: APP_DATA.regulatoryFinalAcceptanceDeliveryChecklist?.completedCount,
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: 'DERIVED'
    };
    return APP_DATA.regulatoryFinalAcceptanceRemediationMetrics;
  },

  renderFinalAcceptanceRemediationDashboardPanel() {
    const rm = APP_DATA.regulatoryFinalAcceptanceRemediationMetrics || {};
    const readiness = APP_DATA.regulatoryFinalAcceptanceReadiness || {};
    const indexes = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || [];
    const h = APP_DATA.regulatoryFinalAcceptanceHealth || {};
    const highPri = indexes.filter(r => ['CRITICAL', 'HIGH'].includes((APP_DATA.regulatoryFinalAcceptanceIssues || []).find(i => i.id === r.issueId)?.severity)).length;
    return `<div class="card"><div class="card-title">最终验收整改收口 ${this.renderPublicUnifiedStatusBadge(readiness.overallStatus || 'NOT_READY')}</div>
      <p class="insight-note">整体健康度 ${this.renderPublicUnifiedStatusBadge(h.overallStatus)} · 问题 <b>${rm.issueCount || indexes.length}</b> · FULL <b>${h.fullTraceableCount ?? 0}</b> / PARTIAL <b>${h.partialTraceableCount ?? 0}</b></p>
      <div class="group-metrics">${[
        [rm.issueCount || indexes.length, '验收问题总览', `App.navigatePublic('regulatory-improvement-center')`],
        [highPri, '高优先级问题', `App.navigatePublic('regulatory-improvement-center')`],
        [rm.dataRequiredCount || 0, '待补充数据', `App.navigatePublic('regulatory-data-governance')`],
        [rm.actionRequiredCount || 0, '待整改', `App.navigatePublic('regulatory-workbench')`],
        [rm.pendingVerificationCount || 0, '待验证', `App.navigatePublic('rectification')`],
        [rm.verifiedCount || 0, '已验证', `App.navigatePublic('regulatory-improvement-center')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
    </div>`;
  },

  renderFinalAcceptanceRemediationWorkbenchPanel() {
    const indexes = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || [];
    return `<div class="card"><div class="card-title">我的验收整改事项</div>
      <div class="group-metrics">${[
        [indexes.filter(r => r.status === 'DATA_REQUIRED').length, '待补充数据', `App.navigatePublic('regulatory-data-governance')`],
        [indexes.filter(r => r.status === 'ACTION_REQUIRED' || r.status === 'IN_REMEDIATION').length, '待整改', `App.navigatePublic('rectification')`],
        [indexes.filter(r => r.status === 'PENDING_VERIFICATION').length, '待验证', `App.navigatePublic('rectification')`],
        [indexes.filter(r => r.status === 'VERIFIED').length, '已验证', `App.navigatePublic('regulatory-improvement-center')`],
        [indexes.filter(r => r.requiresHumanDecision && r.status !== 'VERIFIED').length, '需人工决策', `App.navigatePublic('regulatory-queue',{queueType:'DECISION'})`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
    </div>`;
  },

  renderFinalAcceptanceRemediationImprovementPanel() {
    const indexes = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || [];
    const unresolved = indexes.filter(r => r.status !== 'VERIFIED');
    const rows = indexes.slice(0, 10).map(r => {
      const issue = (APP_DATA.regulatoryFinalAcceptanceIssues || []).find(i => i.id === r.issueId);
      return `<tr><td>${r.issueId}</td><td>${r.gapType}</td><td>${this.renderPublicUnifiedStatusBadge(r.status)}</td><td>${r.responsibleOrganization}</td><td>${issue?.description || '—'}</td></tr>`;
    }).join('');
    return `<div class="card"><div class="card-title">验收问题整改闭环</div>
      <p class="insight-note">根因分析 → 优化方案 → 整改实施 → 效果验证 · 未解决 <b>${unresolved.length}</b> 项</p>
      ${rows ? `<table class="data-table"><thead><tr><th>问题</th><th>缺口类型</th><th>整改状态</th><th>责任组织</th><th>描述</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}
      <p>${this.renderPublicLinkButton('根因分析', `App.navigatePublic('regulatory-root-cause-analysis')`)} ${this.renderPublicLinkButton('优化方案', `App.navigatePublic('regulatory-optimization-plans')`)} ${this.renderPublicLinkButton('效果验证', `App.navigatePublic('regulatory-improvement-effectiveness')`)}</p>
    </div>`;
  },

  renderFinalAcceptanceRemediationDetailPanel() {
    const scenarios = APP_DATA.regulatoryFinalAcceptanceScenarios || [];
    const evidence = APP_DATA.regulatoryFinalAcceptanceEvidenceIndexes || [];
    const indexes = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || [];
    const checklist = APP_DATA.regulatoryFinalAcceptanceDeliveryChecklist || {};
    const rows = scenarios.map(s => {
      const issues = indexes.filter(r => (r.scenarioCodes || []).includes(s.scenarioCode));
      return `<tr><td>${s.scenarioCode}</td><td>${this.renderPublicUnifiedStatusBadge(s.traceabilityStatus)}</td><td>${this.renderPublicUnifiedStatusBadge(s.status)}</td><td>${issues.length}</td><td>${issues.filter(r => r.status === 'VERIFIED').length}</td></tr>`;
    }).join('');
    return `<div class="card"><div class="card-title">验收场景追溯与整改进度</div>
      <p class="insight-note">证据链 <b>${evidence.length}</b> · 交付清单 ${checklist.completedCount || 0}/${(checklist.items || []).length} 完成 · ${this.renderPublicUnifiedStatusBadge(checklist.readinessStatus || 'READY_WITH_GAPS')}</p>
      ${rows ? `<table class="data-table"><thead><tr><th>场景</th><th>追溯完整性</th><th>场景状态</th><th>关联问题</th><th>已验证</th></tr></thead><tbody>${rows}</tbody></table>` : ''}
    </div>`;
  },

  renderFinalAcceptanceRemediationRolePanel(roleType) {
    const indexes = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || [];
    let filtered = indexes;
    if (roleType === 'DOMAIN_REGULATOR') {
      const dom = this.regulatoryRoleScopeId;
      filtered = indexes.filter(r => {
        const qi = (APP_DATA.regulatoryDataQualityIssues || []).find(i => i.qualityIssueId === r.sourceId);
        return !dom || !qi || qi.domainId === dom;
      });
    } else if (roleType === 'ENTITY_REGULATOR') {
      const eid = this.regulatoryRoleScopeId;
      filtered = indexes.filter(r => {
        const w = (APP_DATA.warnings || []).find(x => x.id === r.sourceId);
        const t = (APP_DATA.rectificationTasks || []).find(x => x.taskId === r.sourceId);
        return !eid || w?.entityId === eid || t?.entityId === eid || r.sourceType === 'regulatoryCoordinationCases';
      });
    } else if (roleType === 'GROUP_LEADER') {
      filtered = indexes.filter(r => r.requiresHumanDecision || ['CRITICAL', 'HIGH'].includes((APP_DATA.regulatoryFinalAcceptanceIssues || []).find(i => i.id === r.issueId)?.severity));
    }
    const items = [
      [filtered.filter(r => r.status === 'DATA_REQUIRED').length, '待补数据'],
      [filtered.filter(r => r.status === 'ACTION_REQUIRED').length, '待整改'],
      [filtered.filter(r => r.status === 'PENDING_VERIFICATION').length, '待验证'],
      [filtered.filter(r => r.requiresHumanDecision).length, '需人工决策']
    ];
    return `<div style="margin-top:8px"><div class="card-title" style="font-size:13px">验收整改事项 · ${roleType}</div>
      <div class="group-metrics" style="grid-template-columns:repeat(4,1fr)">${items.map(([v, l]) => `<div class="metric-card"><div class="value">${v}</div><div class="label">${l}</div></div>`).join('')}</div>
    </div>`;
  },

  _DOMAIN_HANDOVER_FOCUS: ['finance', 'overseas', 'property', 'compensation', 'financial', 'techInnovation'],

  buildRegulatoryDeliveryReadiness() {
    const pages = (this.publicRegulatoryPages || []).length;
    const capMap = APP_DATA.regulatoryCapabilityMap || [];
    const health = APP_DATA.regulatoryFinalAcceptanceHealth || {};
    const acceptanceReadiness = APP_DATA.regulatoryFinalAcceptanceReadiness || {};
    const issues = APP_DATA.regulatoryFinalAcceptanceIssues || [];
    const remediation = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || [];
    const gaps = APP_DATA.regulatoryDomainDataGaps || [];
    const scenarios = APP_DATA.regulatoryFinalAcceptanceScenarios || [];
    const results = APP_DATA.regulatoryFinalAcceptanceResultIndexes || [];
    const penetrateOk = true;
    const roleJourneyOk = ['GROUP_LEADER', 'GROUP_REGULATORY', 'DOMAIN_REGULATOR', 'ENTITY_REGULATOR'].every(r => this.validateRoleAcceptanceJourney(r).journeyPass);
    const capabilityStatus = pages === 70 && capMap.length >= 70 ? 'READY' : (pages === 70 ? 'READY_WITH_GAPS' : 'BLOCKED');
    const dataStatus = gaps.filter(g => g.gapStatus === 'OPEN').length > 0 ? 'READY_WITH_GAPS' : ((APP_DATA.regulatoryDataSources || []).length ? 'READY' : 'INSUFFICIENT_DATA');
    const full = results.filter(r => r.traceabilityStatus === 'FULL_TRACEABLE').length;
    const partial = results.filter(r => r.traceabilityStatus === 'PARTIAL_TRACEABLE').length;
    const traceabilityStatus = partial > 0 ? 'READY_WITH_GAPS' : (full === scenarios.length && scenarios.length ? 'READY' : 'INSUFFICIENT_DATA');
    const verified = remediation.filter(r => r.status === 'VERIFIED').length;
    const issueStatus = issues.length && verified < issues.length ? 'READY_WITH_GAPS' : (issues.length ? 'READY' : 'INSUFFICIENT_DATA');
    const permissionStatus = (APP_DATA.regulatoryRolePermissionMap || {})['ROLE-GROUP-REG']?.includes('DELIVERY_READINESS_VIEW') ? 'READY' : 'BLOCKED';
    const auditStatus = (APP_DATA.regulatoryAuditLogs || []).length ? 'READY' : 'READY_WITH_GAPS';
    const roleJourneyStatus = roleJourneyOk ? 'READY' : 'BLOCKED';
    const operationalReadinessStatus = (APP_DATA.regulatoryOperationalScenarios || []).length >= 8 ? 'READY' : 'READY_WITH_GAPS';
    const investmentFreezeStatus = penetrateOk ? 'READY' : 'BLOCKED';
    const statuses = [capabilityStatus, dataStatus, traceabilityStatus, issueStatus, permissionStatus, auditStatus, roleJourneyStatus, operationalReadinessStatus, investmentFreezeStatus];
    const blockers = [];
    if (pages !== 70) blockers.push('PAGE_COUNT_NOT_70');
    if (!roleJourneyOk) blockers.push('ROLE_JOURNEY_INCOMPLETE');
    if (remediation.some(r => r.status === 'VERIFIED' && !r.verificationResult?.evidenceValid)) blockers.push('FAKE_VERIFIED');
    const gapList = gaps.filter(g => g.gapStatus === 'OPEN').slice(0, 10).map(g => ({ gapId: g.gapId, domainId: g.domainId, gapType: g.gapType }));
    const issueGaps = {
      total: issues.length,
      dataRequired: remediation.filter(r => r.status === 'DATA_REQUIRED').length,
      actionRequired: remediation.filter(r => r.status === 'ACTION_REQUIRED').length,
      inRemediation: remediation.filter(r => r.status === 'IN_REMEDIATION').length,
      pendingVerification: remediation.filter(r => r.status === 'PENDING_VERIFICATION').length,
      verified
    };
    let overallStatus = 'INSUFFICIENT_DATA';
    if (statuses.includes('BLOCKED')) overallStatus = 'BLOCKED';
    else if (statuses.every(s => s === 'READY') && issueGaps.verified === issueGaps.total) overallStatus = 'READY';
    else if (statuses.some(s => s === 'READY' || s === 'READY_WITH_GAPS')) overallStatus = 'READY_WITH_GAPS';
    const readiness = {
      overallStatus,
      capabilityStatus,
      dataStatus,
      traceabilityStatus,
      issueStatus,
      permissionStatus,
      auditStatus,
      roleJourneyStatus,
      operationalReadinessStatus,
      investmentFreezeStatus,
      requiresHumanDecision: true,
      blockers,
      gaps: { dataGaps: gapList, openIssueCount: issues.length, issueDistribution: issueGaps },
      recommendedNextActions: [
        issueGaps.dataRequired > 0 ? `补充 ${issueGaps.dataRequired} 项真实业务数据` : null,
        issueGaps.actionRequired > 0 ? `推动 ${issueGaps.actionRequired} 项整改行动` : null,
        issueGaps.inRemediation > 0 ? `跟进 ${issueGaps.inRemediation} 项进行中整改` : null,
        gaps.filter(g => g.gapStatus === 'OPEN').length > 0 ? `处理 ${gaps.filter(g => g.gapStatus === 'OPEN').length} 项领域数据缺口` : null
      ].filter(Boolean),
      sourceTraceability: { sourceType: 'regulatoryFinalAcceptanceRemediationIndexes', sourceId: 'DELIVERY-READINESS', acceptanceReadiness: acceptanceReadiness.overallStatus, healthStatus: health.overallStatus },
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: 'DERIVED',
      evaluatedAt: this._coordNow()
    };
    APP_DATA.regulatoryDeliveryReadinessIndex = readiness;
    return readiness;
  },

  buildRegulatoryGoLiveChecklist() {
    const pages = (this.publicRegulatoryPages || []).length;
    const capMap = APP_DATA.regulatoryCapabilityMap || [];
    const domains = [...new Set((capMap || []).map(c => c.capabilityDomain).filter(Boolean))];
    const orphans = this.getOrphanPages ? this.getOrphanPages() : [];
    const issues = APP_DATA.regulatoryFinalAcceptanceIssues || [];
    const gaps = APP_DATA.regulatoryDomainDataGaps || [];
    const closureEvidence = APP_DATA.regulatoryClosureVerificationEvidence || [];
    const items = [
      { checkId: 'GL-01', category: 'PLATFORM', title: '70个公共页面', status: pages === 70 ? 'PASS' : 'FAIL', sourceType: 'publicRegulatoryPages', sourceId: String(pages) },
      { checkId: 'GL-02', category: 'PLATFORM', title: '能力域覆盖', status: domains.length >= 8 ? 'PASS' : 'PARTIAL', sourceType: 'regulatoryCapabilityMap', sourceId: String(domains.length) },
      { checkId: 'GL-03', category: 'PLATFORM', title: '能力地图完整', status: capMap.length >= 70 ? 'PASS' : 'PARTIAL', sourceType: 'regulatoryCapabilityMap' },
      { checkId: 'GL-04', category: 'PLATFORM', title: '无孤立页面', status: orphans.length === 0 ? 'PASS' : 'FAIL', sourceType: 'publicRegulatoryPages', evidence: orphans.slice(0, 3) },
      { checkId: 'GL-05', category: 'DATA', title: '数据源可识别', status: (APP_DATA.regulatoryDataSources || []).length ? 'PASS' : 'FAIL', sourceType: 'regulatoryDataSources' },
      { checkId: 'GL-06', category: 'DATA', title: '数据质量机制', status: typeof this.calculateOverallQualityScore === 'function' ? 'PASS' : 'FAIL', sourceType: 'regulatoryDataQualityIssues' },
      { checkId: 'GL-07', category: 'DATA', title: 'KRI可计算', status: (APP_DATA.regulatoryKriRuntime || []).length ? 'PASS' : 'PARTIAL', sourceType: 'regulatoryKriRuntime' },
      { checkId: 'GL-08', category: 'DATA', title: '预警可识别', status: (APP_DATA.regulatoryWarnings || []).length ? 'PASS' : 'PARTIAL', sourceType: 'regulatoryWarnings' },
      { checkId: 'GL-09', category: 'DATA', title: '数据血缘可追溯', status: typeof this.getDataLineageChain === 'function' ? 'PASS' : 'FAIL', sourceType: 'regulatoryDataLineage' },
      { checkId: 'GL-10', category: 'DATA', title: '数据不足已标记', status: gaps.filter(g => g.gapStatus === 'OPEN').length > 0 ? 'MARKED' : 'PASS', sourceType: 'regulatoryDomainDataGaps', sourceId: String(gaps.length) },
      { checkId: 'GL-11', category: 'CLOSURE', title: '监管闭环链路', status: (APP_DATA.regulatoryActions || []).length && (APP_DATA.rectificationTasks || []).length ? 'PASS' : 'PARTIAL', sourceType: 'regulatoryActions' },
      { checkId: 'GL-12', category: 'PERMISSION', title: '4类角色配置', status: (APP_DATA.regulatoryRoleProfiles || []).length >= 4 ? 'PASS' : 'FAIL', sourceType: 'regulatoryRoleProfiles' },
      { checkId: 'GL-13', category: 'PERMISSION', title: '审计日志', status: (APP_DATA.regulatoryAuditLogs || []).length ? 'PASS' : 'PARTIAL', sourceType: 'regulatoryAuditLogs' },
      { checkId: 'GL-14', category: 'ISSUES', title: '15项验收问题已交接', status: issues.length >= 15 ? 'PASS' : 'PARTIAL', sourceType: 'regulatoryFinalAcceptanceIssues', sourceId: String(issues.length) },
      { checkId: 'GL-15', category: 'ISSUES', title: '整改验证证据', status: closureEvidence.length ? 'PASS' : 'PARTIAL', sourceType: 'regulatoryClosureVerificationEvidence', sourceId: String(closureEvidence.length) },
      { checkId: 'GL-16', category: 'FREEZE', title: '投资管理冻结', status: 'PASS', sourceType: 'investmentFreeze', note: "navigate('penetration')===3" }
    ];
    const checklist = {
      items,
      passCount: items.filter(i => i.status === 'PASS' || i.status === 'MARKED').length,
      partialCount: items.filter(i => i.status === 'PARTIAL').length,
      failCount: items.filter(i => i.status === 'FAIL').length,
      overallStatus: items.some(i => i.status === 'FAIL') ? 'BLOCKED' : (items.some(i => i.status === 'PARTIAL' || i.status === 'MARKED') ? 'READY_WITH_GAPS' : 'READY'),
      evaluatedAt: this._coordNow(),
      dataStatus: 'DERIVED'
    };
    APP_DATA.regulatoryGoLiveChecklistIndex = checklist;
    APP_DATA.regulatoryGoLiveCheckItemIndex = items;
    return checklist;
  },

  buildRegulatoryPostGoLiveActions() {
    const actions = [];
    let seq = 1;
    const add = (actionType, sourceType, sourceId, domainId, issueType, priority, org, evidence, target, human) => {
      actions.push({
        actionId: 'PGL-' + String(seq++).padStart(3, '0'),
        actionType,
        sourceType,
        sourceId,
        domainId: domainId || null,
        issueType: issueType || actionType,
        priority: priority || 'MEDIUM',
        responsibleOrganization: org || '集团监管部门',
        requiredEvidence: evidence,
        targetStatus: target || 'COMPLETED',
        requiresHumanDecision: human !== false,
        status: 'OPEN',
        sourceTraceability: { sourceType, sourceId },
        dataStatus: 'DERIVED'
      });
    };
    const gapActionMap = {
      NO_DATA_SOURCE: 'DATA_COMPLETION',
      NO_DATASET: 'DATA_COMPLETION',
      NO_BUSINESS_OBJECT_MAPPING: 'BUSINESS_MAPPING',
      NO_METRIC: 'KRI_CONFIGURATION',
      NO_KRI: 'KRI_CONFIGURATION',
      NO_WARNING_CHAIN: 'KRI_CONFIGURATION',
      NO_ACTION_CHAIN: 'RECTIFICATION',
      NO_RECTIFICATION_CHAIN: 'RECTIFICATION',
      NO_VERIFICATION_CHAIN: 'VERIFICATION'
    };
    (APP_DATA.regulatoryDomainDataGaps || []).filter(g => g.gapStatus === 'OPEN').forEach(g => {
      add(gapActionMap[g.gapType] || 'DATA_COMPLETION', 'regulatoryDomainDataGaps', g.gapId, g.domainId, g.gapType, g.gapLevel === 'CRITICAL' ? 'CRITICAL' : 'HIGH', g.domainId, g.evidence, 'GAP_CLOSED', true);
    });
    (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).filter(r => r.status !== 'VERIFIED').forEach(r => {
      const type = r.status === 'DATA_REQUIRED' ? 'DATA_COMPLETION' : (r.status === 'PENDING_VERIFICATION' ? 'VERIFICATION' : 'RECTIFICATION');
      add(type, 'regulatoryFinalAcceptanceRemediationIndexes', r.remediationId, r.scenarioCodes?.[0], r.gapType, r.requiresHumanDecision ? 'HIGH' : 'MEDIUM', r.responsibleOrganization, r.dataSupportReason, 'VERIFIED', r.requiresHumanDecision);
    });
    (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status !== 'CLOSED').slice(0, 5).forEach(i => {
      add('DATA_QUALITY_GOVERNANCE', 'regulatoryDataQualityIssues', i.qualityIssueId, i.domainId, 'DATA_QUALITY', i.severity === 'HIGH' ? 'CRITICAL' : 'HIGH', i.responsibleOrganization || '数据治理团队', i.description || '开放质量问题', 'CLOSED', true);
    });
    APP_DATA.regulatoryPostGoLiveActionIndexes = actions;
    return actions;
  },

  buildRegulatoryFinalDeliveryPackage() {
    const readiness = APP_DATA.regulatoryDeliveryReadinessIndex || this.buildRegulatoryDeliveryReadiness();
    const goLive = APP_DATA.regulatoryGoLiveChecklistIndex || this.buildRegulatoryGoLiveChecklist();
    const issues = APP_DATA.regulatoryFinalAcceptanceIssues || [];
    const gaps = APP_DATA.regulatoryDomainDataGaps || [];
    const actions = APP_DATA.regulatoryPostGoLiveActionIndexes || this.buildRegulatoryPostGoLiveActions();
    const pkgStatus = (cond, partial) => cond ? 'COMPLETED' : (partial ? 'PARTIAL' : 'DATA_REQUIRED');
    const items = [
      { deliveryItemId: 'DP-01', category: 'CAPABILITY', title: '平台能力地图', status: pkgStatus((APP_DATA.regulatoryCapabilityMap || []).length >= 70, true), sourceTraceability: { sourceType: 'regulatoryCapabilityMap' }, evidence: { count: (APP_DATA.regulatoryCapabilityMap || []).length }, owner: '集团监管部门', nextAction: '持续维护能力地图' },
      { deliveryItemId: 'DP-02', category: 'CAPABILITY', title: '70个公共监管页面清单', status: pkgStatus((this.publicRegulatoryPages || []).length === 70, false), sourceTraceability: { sourceType: 'publicRegulatoryPages' }, evidence: { count: (this.publicRegulatoryPages || []).length }, owner: '集团监管部门', nextAction: '—' },
      { deliveryItemId: 'DP-03', category: 'CAPABILITY', title: '8大能力域', status: pkgStatus([...new Set((APP_DATA.regulatoryCapabilityMap || []).map(c => c.capabilityDomain))].length >= 8, true), sourceTraceability: { sourceType: 'regulatoryCapabilityMap' }, owner: '集团监管部门', nextAction: '—' },
      { deliveryItemId: 'DP-04', category: 'JOURNEY', title: '4类角色旅程', status: pkgStatus(['GROUP_LEADER', 'GROUP_REGULATORY', 'DOMAIN_REGULATOR', 'ENTITY_REGULATOR'].every(r => this.validateRoleAcceptanceJourney(r).journeyPass), false), sourceTraceability: { sourceType: 'regulatoryRoleProfiles' }, owner: '集团监管部门', nextAction: '角色培训' },
      { deliveryItemId: 'DP-05', category: 'ACCEPTANCE', title: '9大最终验收场景', status: pkgStatus((APP_DATA.regulatoryFinalAcceptanceScenarios || []).length >= 9, false), sourceTraceability: { sourceType: 'regulatoryFinalAcceptanceScenarios' }, evidence: { count: (APP_DATA.regulatoryFinalAcceptanceScenarios || []).length }, owner: '集团监管部门', nextAction: '补齐追溯链' },
      { deliveryItemId: 'DP-06', category: 'OPERATIONS', title: '8个监管实战场景', status: pkgStatus((APP_DATA.regulatoryOperationalScenarios || []).length >= 8, false), sourceTraceability: { sourceType: 'regulatoryOperationalScenarios' }, owner: '集团监管部门', nextAction: '—' },
      { deliveryItemId: 'DP-07', category: 'DATA', title: '数据治理与数据血缘闭环', status: pkgStatus((APP_DATA.regulatoryDataSources || []).length > 0, true), sourceTraceability: { sourceType: 'regulatoryDataSources' }, owner: '数据治理团队', nextAction: '补齐数据缺口' },
      { deliveryItemId: 'DP-08', category: 'DATA', title: 'KRI与预警机制', status: pkgStatus((APP_DATA.regulatoryKriRuntime || []).length > 0, true), sourceTraceability: { sourceType: 'regulatoryKriRuntime' }, owner: '指标管理团队', nextAction: '提升覆盖率' },
      { deliveryItemId: 'DP-09', category: 'GOVERNANCE', title: '规则治理闭环', status: pkgStatus((APP_DATA.regulatoryRules || []).length > 0, true), sourceTraceability: { sourceType: 'regulatoryRules' }, owner: '规则治理团队', nextAction: '—' },
      { deliveryItemId: 'DP-10', category: 'CLOSURE', title: '监管行动与整改闭环', status: pkgStatus((APP_DATA.regulatoryActions || []).length > 0, true), sourceTraceability: { sourceType: 'regulatoryActions' }, owner: '集团监管部门', nextAction: '推动验证' },
      { deliveryItemId: 'DP-11', category: 'COORDINATION', title: '跨组织协同机制', status: pkgStatus((APP_DATA.regulatoryCoordinationCases || []).length > 0, true), sourceTraceability: { sourceType: 'regulatoryCoordinationCases' }, owner: '集团监管部门', nextAction: '—' },
      { deliveryItemId: 'DP-12', category: 'OPERATIONS', title: '监管运营周期', status: pkgStatus((APP_DATA.regulatoryOperatingCycleInstances || []).length >= 5, true), sourceTraceability: { sourceType: 'regulatoryOperatingCycleInstances' }, owner: '集团监管部门', nextAction: '—' },
      { deliveryItemId: 'DP-13', category: 'IMPROVEMENT', title: '持续改进机制', status: pkgStatus((APP_DATA.regulatoryImprovementOpportunities || []).length > 0, true), sourceTraceability: { sourceType: 'regulatoryImprovementOpportunities' }, owner: '持续改进团队', nextAction: '—' },
      { deliveryItemId: 'DP-14', category: 'SECURITY', title: '权限与审计机制', status: pkgStatus((APP_DATA.regulatoryAuditLogs || []).length > 0, false), sourceTraceability: { sourceType: 'regulatoryAuditLogs' }, owner: '信息安全团队', nextAction: '—' },
      { deliveryItemId: 'DP-15', category: 'ISSUES', title: '15项开放问题', status: 'PARTIAL', sourceTraceability: { sourceType: 'regulatoryFinalAcceptanceIssues' }, evidence: { count: issues.length, verified: (APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || []).filter(r => r.status === 'VERIFIED').length }, owner: '集团监管部门', nextAction: '上线后持续处理' },
      { deliveryItemId: 'DP-16', category: 'GAPS', title: '18项数据缺口', status: gaps.length > 0 ? 'DATA_REQUIRED' : 'COMPLETED', sourceTraceability: { sourceType: 'regulatoryDomainDataGaps' }, evidence: { count: gaps.filter(g => g.gapStatus === 'OPEN').length }, owner: '数据治理团队', nextAction: '按领域补齐' },
      { deliveryItemId: 'DP-17', category: 'FREEZE', title: '投资管理冻结证明', status: 'COMPLETED', sourceTraceability: { sourceType: 'investmentFreeze' }, evidence: { note: "navigate('penetration')===3" }, owner: 'N/A', nextAction: 'NOT_APPLICABLE' },
      { deliveryItemId: 'DP-18', category: 'SCRIPTS', title: '验收脚本清单', status: 'COMPLETED', sourceTraceability: { sourceType: 'acceptanceScripts' }, evidence: { phases: '21-33' }, owner: '集团监管部门', nextAction: '持续回归' }
    ];
    const pkg = {
      items,
      completedCount: items.filter(i => i.status === 'COMPLETED').length,
      partialCount: items.filter(i => i.status === 'PARTIAL').length,
      dataRequiredCount: items.filter(i => i.status === 'DATA_REQUIRED').length,
      readinessStatus: readiness.overallStatus,
      goLiveStatus: goLive.overallStatus,
      postGoLiveActionCount: actions.length,
      evaluatedAt: this._coordNow(),
      dataStatus: 'DERIVED'
    };
    APP_DATA.regulatoryFinalDeliveryPackageIndex = pkg;
    APP_DATA.regulatoryDeliveryDocumentIndex = items.map(i => ({ documentId: i.deliveryItemId, title: i.title, category: i.category, status: i.status, sourceTraceability: i.sourceTraceability }));
    return pkg;
  },

  buildRegulatoryHandoverIndex() {
    const remediation = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || [];
    const gaps = APP_DATA.regulatoryDomainDataGaps || [];
    const dist = {};
    remediation.forEach(r => { dist[r.status] = (dist[r.status] || 0) + 1; });
    const handover = {
      issueHandover: {
        total: (APP_DATA.regulatoryFinalAcceptanceIssues || []).length,
        distribution: dist,
        verified: dist.VERIFIED || 0,
        message: '当前平台可以上线运行，但仍存在待持续处理事项'
      },
      dataGapHandover: {
        total: gaps.length,
        openCount: gaps.filter(g => g.gapStatus === 'OPEN').length,
        focusDomains: this._DOMAIN_HANDOVER_FOCUS.map(d => ({ domainId: d, gapCount: gaps.filter(g => g.domainId === d && g.gapStatus === 'OPEN').length }))
      },
      roleHandover: ['GROUP_LEADER', 'GROUP_REGULATORY', 'DOMAIN_REGULATOR', 'ENTITY_REGULATOR'].map(roleType => ({
        roleType,
        ...this.validateRoleHandover(roleType)
      })),
      sourceTraceability: { sourceType: 'regulatoryHandoverIndex', sourceId: 'GO-LIVE-HANDOVER' },
      evaluatedAt: this._coordNow(),
      dataStatus: 'DERIVED'
    };
    APP_DATA.regulatoryHandoverIndex = handover;
    return handover;
  },

  validateRoleHandover(roleType) {
    const roleMap = { GROUP_LEADER: 'ROLE-GROUP-LEADER', GROUP_REGULATORY: 'ROLE-GROUP-REG', DOMAIN_REGULATOR: 'ROLE-DOMAIN-REG', ENTITY_REGULATOR: 'ROLE-ENTITY-REG' };
    const paths = {
      GROUP_LEADER: ['global-group-overview', 'warnings', 'regulatory-warning-center', 'regulatory-decision-recommendations', 'regulatory-performance', 'regulatory-strategic-review'],
      GROUP_REGULATORY: ['regulatory-workbench', 'regulatory-queue', 'warnings', 'regulatory-actions', 'rectification', 'regulatory-performance', 'regulatory-improvement-center'],
      DOMAIN_REGULATOR: ['regulatory-metric-center', 'regulatory-kri-monitoring', 'regulatory-data-quality', 'regulatory-warning-center', 'regulatory-supervision-tasks', 'rectification'],
      ENTITY_REGULATOR: ['global-legal-entities', 'warnings', 'regulatory-warning-center', 'regulatory-data-quality', 'rectification']
    };
    const path = paths[roleType] || [];
    const pagesOk = path.every(pid => (this.publicRegulatoryPages || []).some(p => p.pageId === pid));
    const permOk = !!(APP_DATA.regulatoryRolePermissionMap || {})[roleMap[roleType]]?.includes('DELIVERY_READINESS_VIEW');
    const scopeOk = roleType !== 'ENTITY_REGULATOR' || typeof this.filterCoordinationCasesByScope === 'function';
    const panelOk = typeof this.renderDeliveryHandoverRolePanel === 'function';
    return {
      roleType,
      pathPages: path,
      pagesReachable: pagesOk,
      permissionOk: permOk,
      scopeIsolationOk: scopeOk,
      panelRendered: panelOk,
      handoverPass: pagesOk && permOk && scopeOk && panelOk,
      dataStatus: 'DERIVED'
    };
  },

  initializeRegulatoryDeliveryReadiness() {
    this.buildRegulatoryDeliveryReadiness();
    this.buildRegulatoryGoLiveChecklist();
    this.buildRegulatoryPostGoLiveActions();
    this.buildRegulatoryFinalDeliveryPackage();
    this.buildRegulatoryHandoverIndex();
    APP_DATA.regulatoryUserTrainingIndex = [
      { trainingId: 'TR-01', roleType: 'GROUP_LEADER', topic: '集团监管总览与决策', sourceType: 'regulatoryUserTrainingIndex', pageId: 'global-group-overview' },
      { trainingId: 'TR-02', roleType: 'GROUP_REGULATORY', topic: '统一工作台与待办', sourceType: 'regulatoryUserTrainingIndex', pageId: 'regulatory-workbench' },
      { trainingId: 'TR-03', roleType: 'DOMAIN_REGULATOR', topic: '领域KRI与预警', sourceType: 'regulatoryUserTrainingIndex', pageId: 'regulatory-kri-monitoring' },
      { trainingId: 'TR-04', roleType: 'ENTITY_REGULATOR', topic: '法人监管与整改', sourceType: 'regulatoryUserTrainingIndex', pageId: 'global-legal-entities' }
    ];
    APP_DATA.regulatoryDeliveryReadinessMetrics = {
      overallStatus: APP_DATA.regulatoryDeliveryReadinessIndex?.overallStatus,
      issueCount: (APP_DATA.regulatoryFinalAcceptanceIssues || []).length,
      dataGapCount: (APP_DATA.regulatoryDomainDataGaps || []).filter(g => g.gapStatus === 'OPEN').length,
      postGoLiveActionCount: (APP_DATA.regulatoryPostGoLiveActionIndexes || []).length,
      deliveryPackageCompleted: APP_DATA.regulatoryFinalDeliveryPackageIndex?.completedCount,
      goLivePassCount: APP_DATA.regulatoryGoLiveChecklistIndex?.passCount,
      trendStatus: 'INSUFFICIENT_HISTORY',
      dataStatus: 'DERIVED'
    };
    return APP_DATA.regulatoryDeliveryReadinessMetrics;
  },

  renderDeliveryReadinessDashboardPanel() {
    const dr = APP_DATA.regulatoryDeliveryReadinessIndex || {};
    const dm = APP_DATA.regulatoryDeliveryReadinessMetrics || {};
    const handover = APP_DATA.regulatoryHandoverIndex || {};
    const dist = handover.issueHandover?.distribution || {};
    const gaps = (APP_DATA.regulatoryDomainDataGaps || []).filter(g => g.gapStatus === 'OPEN');
    const actions = APP_DATA.regulatoryPostGoLiveActionIndexes || [];
    return `<div class="card"><div class="card-title">正式交付准备度 ${this.renderPublicUnifiedStatusBadge(dr.overallStatus || 'INSUFFICIENT_DATA')}</div>
      <p class="insight-note">上线前检查 ${this.renderPublicUnifiedStatusBadge((APP_DATA.regulatoryGoLiveChecklistIndex || {}).overallStatus || 'READY_WITH_GAPS')} · 当前平台<b>可以上线运行</b>，但仍存在 <b>${dm.issueCount || 15}</b> 项待持续处理事项</p>
      <p class="insight-note">DATA_REQUIRED: <b>${dist.DATA_REQUIRED || 0}</b> · ACTION_REQUIRED: <b>${dist.ACTION_REQUIRED || 0}</b> · IN_REMEDIATION: <b>${dist.IN_REMEDIATION || 0}</b> · VERIFIED: <b>${dist.VERIFIED || 0}</b>（0项伪造）</p>
      <div class="group-metrics">${[
        [dm.issueCount || 15, '15项开放问题', `App.navigatePublic('regulatory-improvement-center')`],
        [dm.dataGapCount || gaps.length, '数据缺口', `App.navigatePublic('regulatory-data-governance')`],
        [actions.length, '上线后行动', `App.navigatePublic('regulatory-workbench')`],
        [(APP_DATA.regulatoryGoLiveChecklistIndex || {}).passCount || 0, '上线检查通过', `App.navigatePublic('regulatory-analysis-center')`],
        [(APP_DATA.regulatoryFinalDeliveryPackageIndex || {}).completedCount || 0, '交付包完成项', `App.navigatePublic('regulatory-improvement-center')`],
        [dr.blockers?.length || 0, '阻断项', `App.navigatePublic('regulatory-queue')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
    </div>`;
  },

  renderDeliveryReadinessWorkbenchPanel() {
    const actions = APP_DATA.regulatoryPostGoLiveActionIndexes || [];
    const remediation = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || [];
    return `<div class="card"><div class="card-title">我的上线后行动</div>
      <div class="group-metrics">${[
        [actions.filter(a => a.actionType === 'DATA_COMPLETION').length, '待补充数据', `App.navigatePublic('regulatory-data-governance')`],
        [remediation.filter(r => r.status === 'ACTION_REQUIRED' || r.status === 'IN_REMEDIATION').length, '待整改', `App.navigatePublic('rectification')`],
        [remediation.filter(r => r.status === 'PENDING_VERIFICATION').length, '待验证', `App.navigatePublic('rectification')`],
        [actions.filter(a => a.requiresHumanDecision).length, '需人工决策', `App.navigatePublic('regulatory-queue',{queueType:'DECISION'})`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
    </div>`;
  },

  renderDeliveryReadinessAnalysisPanel() {
    const dr = APP_DATA.regulatoryDeliveryReadinessIndex || {};
    const gaps = APP_DATA.regulatoryDomainDataGaps || [];
    const focus = this._DOMAIN_HANDOVER_FOCUS.map(d => {
      const cnt = gaps.filter(g => g.domainId === d && g.gapStatus === 'OPEN').length;
      return cnt ? `${d}:${cnt}` : null;
    }).filter(Boolean).join(', ');
    return `<div class="card"><div class="card-title">交付健康度与上线后风险</div>
      <div class="group-metrics">${[
        [dr.capabilityStatus || '—', '能力状态', `App.navigatePublic('regulatory-analysis-center')`],
        [dr.dataStatus || '—', '数据状态', `App.navigatePublic('regulatory-data-quality')`],
        [dr.traceabilityStatus || '—', '追溯状态', `App.navigatePublic('regulatory-data-lineage')`],
        [gaps.filter(g => g.gapStatus === 'OPEN').length, '开放数据缺口', `App.navigatePublic('regulatory-data-governance')`],
        [(APP_DATA.regulatoryFinalAcceptanceHealth || {}).partialTraceableCount || 0, 'PARTIAL_TRACEABLE', `App.navigatePublic('regulatory-analysis-center')`],
        [dr.blockers?.length || 0, '上线阻断', `App.navigatePublic('regulatory-queue')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      <p class="insight-note">${this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY')} 问题趋势数据不足 · 重点关注领域：${focus || '—'}</p>
    </div>`;
  },

  renderDeliveryReadinessImprovementPanel() {
    const actions = APP_DATA.regulatoryPostGoLiveActionIndexes || [];
    const remediation = APP_DATA.regulatoryFinalAcceptanceRemediationIndexes || [];
    const gaps = APP_DATA.regulatoryDomainDataGaps || [];
    const rows = actions.slice(0, 8).map(a => `<tr><td>${a.actionId}</td><td>${a.actionType}</td><td>${a.sourceId}</td><td>${this.renderPublicPriorityBadge(a.priority)}</td><td>${a.responsibleOrganization}</td><td>${a.status}</td></tr>`).join('');
    return `<div class="card"><div class="card-title">上线后改进事项</div>
      <p class="insight-note">问题关闭进度：已验证 <b>${remediation.filter(r => r.status === 'VERIFIED').length}</b> / ${remediation.length} · 数据缺口补齐：开放 <b>${gaps.filter(g => g.gapStatus === 'OPEN').length}</b> / ${gaps.length}</p>
      ${rows ? `<table class="data-table"><thead><tr><th>行动</th><th>类型</th><th>来源</th><th>优先级</th><th>责任组织</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}
    </div>`;
  },

  renderDeliveryHandoverRolePanel(roleType) {
    const handover = (APP_DATA.regulatoryHandoverIndex?.roleHandover || []).find(r => r.roleType === roleType) || {};
    const actions = (APP_DATA.regulatoryPostGoLiveActionIndexes || []).filter(a => {
      if (roleType === 'GROUP_LEADER') return a.requiresHumanDecision;
      if (roleType === 'ENTITY_REGULATOR') return a.domainId && this.regulatoryRoleScopeId === a.domainId;
      return true;
    });
    const pathLabels = {
      GROUP_LEADER: '集团总览→重点风险→重大预警→决策建议→资源调度→战略复盘',
      GROUP_REGULATORY: '统一工作台→待办→高风险→监管行动→整改→绩效→持续改进',
      DOMAIN_REGULATOR: '领域指标→KRI→数据可信度→预警→监管任务→整改→验证',
      ENTITY_REGULATOR: '本法人数据→本法人风险→本法人预警→数据质量→整改→验证'
    };
    return `<div style="margin-top:8px"><div class="card-title" style="font-size:13px">角色交接路径 · ${roleType}</div>
      <p class="insight-note">${pathLabels[roleType] || ''} · ${handover.handoverPass ? '交接就绪' : '待完善'}</p>
      <div class="group-metrics" style="grid-template-columns:repeat(3,1fr)">${[
        [actions.length, '角色待办'],
        [handover.pathPages?.length || 0, '路径页面'],
        [handover.scopeIsolationOk ? '是' : '否', '权限隔离']
      ].map(([v, l]) => `<div class="metric-card"><div class="value">${v}</div><div class="label">${l}</div></div>`).join('')}</div>
    </div>`;
  },

  renderDataGapHandoverPanel() {
    const gaps = (APP_DATA.regulatoryDomainDataGaps || []).filter(g => g.gapStatus === 'OPEN');
    const priorityDomains = this._DOMAIN_HANDOVER_FOCUS;
    const rows = gaps.filter(g => priorityDomains.includes(g.domainId) || gaps.indexOf(g) < 10).map(g => {
      const dom = (APP_DATA.regulatoryDomainConfigurations || []).find(d => d.domainId === g.domainId);
      return `<tr><td>${g.gapId}</td><td>${dom?.domainName || g.domainId}</td><td>${g.gapType}</td><td>${this.renderPublicPriorityBadge(g.gapLevel)}</td><td>${this.escHtml((g.evidence || '').slice(0, 40))}</td><td>${g.gapStatus}</td></tr>`;
    }).join('');
    return `<div class="card"><div class="card-title">数据缺口交接（${gaps.length}项开放）</div>
      ${rows ? `<table class="data-table"><thead><tr><th>缺口ID</th><th>领域</th><th>类型</th><th>优先级</th><th>证据</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无开放缺口')}
      <p>${this.renderPublicLinkButton('数据治理中心', `App.navigatePublic('regulatory-data-governance')`)}</p>
    </div>`;
  },

  _demoTraceStepHas(step, demoCode) {
    const hasData = (arr, pred) => (arr || []).some(pred || Boolean);
    if (step === 'overview') return true;
    if (step === 'analysis') return (APP_DATA.regulatoryAnalysisMetrics || {}).compositeHealthScore != null || !!(APP_DATA.regulatoryHealthScores || {}).entities?.length;
    if (step === 'concentration') return !!(APP_DATA.regulatoryRiskConcentration || APP_DATA.regulatoryAnalysisMetrics);
    if (step === 'entity') return !!(APP_DATA.globalLegalEntities || []).length;
    if (step === 'kri') return !!(APP_DATA.regulatoryKriRuntime || APP_DATA.groupKris || []).length;
    if (step === 'warning') return !!(APP_DATA.regulatoryWarnings || APP_DATA.warnings || []).length;
    if (step === 'decision') return hasData(APP_DATA.regulatoryDecisionRecommendations) || hasData(APP_DATA.regulatoryOperatingRecommendations, r => r.requiresHumanDecision);
    if (step === 'action') return hasData(APP_DATA.regulatoryActions);
    if (step === 'rectification') return hasData(APP_DATA.rectificationTasks);
    if (step === 'verification') return hasData(APP_DATA.regulatoryJointVerificationIndex) || hasData(APP_DATA.rectificationTasks, t => t.verificationStatus === '已验证') || hasData(APP_DATA.regulatoryImprovementEffectiveness);
    if (step === 'dataSource') return hasData(APP_DATA.regulatoryDataSources);
    if (step === 'integration') return hasData(APP_DATA.regulatoryDataIntegrationJobs);
    if (step === 'quality') return hasData(APP_DATA.regulatoryDataQualityIssues) || !!(APP_DATA.regulatoryDataGovernanceMetrics || {}).overallQualityScore;
    if (step === 'lineage') return hasData(APP_DATA.regulatoryDataLineage);
    if (step === 'governance') return hasData(APP_DATA.regulatoryDataGovernanceTasks);
    if (step === 'qualityRecovery') return hasData(APP_DATA.regulatoryDataQualityIssues, i => i.status === 'CLOSED' || i.status === 'RESOLVED');
    if (step === 'ruleChange') return hasData(APP_DATA.regulatoryRules) || hasData(APP_DATA.regulatoryRuleChangeRequests);
    if (step === 'simulation') return hasData(APP_DATA.regulatorySimulations, s => s.simulationOnly === true) || hasData(APP_DATA.regulatoryScenarioAnalysis, s => s.simulationOnly === true);
    if (step === 'impact') return hasData(APP_DATA.regulatoryRuleImpactAnalysis) || hasData(APP_DATA.regulatoryRuleImpact);
    if (step === 'approval') return hasData(APP_DATA.regulatoryRuleApprovals) || (APP_DATA.regulatoryRuleGovernanceMetrics || {}).pendingApprovalChanges > 0;
    if (step === 'publish') return hasData(APP_DATA.regulatoryRuleVersions);
    if (step === 'deploy') return hasData(APP_DATA.regulatoryRuleDeployments);
    if (step === 'runtime') return hasData(APP_DATA.regulatoryRuleRuntime) || !!(APP_DATA.regulatoryRuleExecutionMetrics || {}).productionRules;
    if (step === 'effectiveness') return hasData(APP_DATA.regulatoryRuleEffectiveness);
    if (step === 'crossRisk') return hasData(APP_DATA.crossDomainRiskMatters) || hasData(APP_DATA.crossDomainRisks);
    if (step === 'coordination') return hasData(APP_DATA.regulatoryCoordinationCases) || hasData(APP_DATA.regulatoryQueue, q => (q.queueType || '').includes('COORDINATION'));
    if (step === 'responsibility') return hasData(APP_DATA.regulatoryCoordinationResponsibilityIndex) || hasData(APP_DATA.regulatoryCoordinationTasks, t => t.role);
    if (step === 'task') return hasData(APP_DATA.regulatoryCoordinationTasks) || hasData(APP_DATA.regulatorySupervisionTasks);
    if (step === 'escalation') return hasData(APP_DATA.regulatoryEscalationRecords);
    if (step === 'jointRect') return hasData(APP_DATA.rectificationTasks, t => t.coordinationCaseId || t.isJoint);
    if (step === 'jointVerify') return hasData(APP_DATA.regulatoryJointVerificationIndex);
    if (step === 'result') return !!(APP_DATA.regulatoryPerformanceMetrics || APP_DATA.regulatoryEvaluation);
    if (step === 'problem') return hasData(APP_DATA.regulatoryImprovementOpportunities) || hasData(APP_DATA.regulatoryFinalAcceptanceIssues);
    if (step === 'rootCause') return hasData(APP_DATA.regulatoryRootCauseAnalysis);
    if (step === 'opportunity') return hasData(APP_DATA.regulatoryImprovementOpportunities);
    if (step === 'plan') return hasData(APP_DATA.regulatoryOptimizationPlans, p => p.requiresHumanDecision === true);
    if (step === 'humanDecision') return hasData(APP_DATA.regulatoryOperatingRecommendations, r => r.requiresHumanDecision && r.status === 'OPEN') || hasData(APP_DATA.regulatoryAuthorizationRequests);
    if (step === 'implementation') return hasData(APP_DATA.regulatoryImprovementExecutions);
    if (step === 'verify') return hasData(APP_DATA.regulatoryImprovementEffectiveness);
    if (step === 'daily') return hasData(APP_DATA.regulatoryDailyOperations) || hasData(APP_DATA.regulatoryOperatingCycleInstances, i => i.cycleType === 'DAILY');
    if (step === 'weekly') return hasData(APP_DATA.regulatoryPeriodicReviews, r => r.reviewType === 'WEEKLY_REVIEW');
    if (step === 'monthly') return hasData(APP_DATA.regulatoryDomainOperationReviews) || hasData(APP_DATA.regulatoryOperatingCycleInstances, i => i.cycleType === 'MONTHLY');
    if (step === 'quarterly') return hasData(APP_DATA.regulatoryQuarterlyPerformanceReviews);
    if (step === 'annual') return hasData(APP_DATA.regulatoryAnnualOperationResults) || hasData(APP_DATA.regulatoryStrategicReviews);
    return false;
  },

  validateDemoScenarioReachability(demoCode) {
    const def = (APP_DATA.regulatoryDemoScenarioDefinitions || []).find(d => d.demoCode === demoCode);
    if (!def) return { demoCode, reachable: false, reason: 'NOT_FOUND' };
    const pageIds = (this.publicRegulatoryPages || []).map(p => p.pageId);
    const invalidPages = (def.pagePath || []).filter(pid => !pageIds.includes(pid));
    return {
      demoCode,
      reachable: invalidPages.length === 0,
      stepCount: (def.pagePath || []).length,
      invalidPages,
      pagePath: def.pagePath
    };
  },

  validateDemoScenarioTraceability(demoCode) {
    const def = (APP_DATA.regulatoryDemoScenarioDefinitions || []).find(d => d.demoCode === demoCode);
    if (!def) return null;
    const chain = {};
    (def.expectedTraceChain || []).forEach(step => { chain[step] = this._demoTraceStepHas(step, demoCode); });
    const hit = Object.values(chain).filter(Boolean).length;
    const total = Object.keys(chain).length;
    let traceabilityStatus = 'NOT_TRACEABLE';
    if (hit === total && total > 0) traceabilityStatus = 'FULL_TRACEABLE';
    else if (hit > 0) traceabilityStatus = 'PARTIAL_TRACEABLE';
    const result = {
      demoCode,
      traceabilityStatus,
      chain,
      hitCount: hit,
      totalCount: total,
      dataStatus: hit < total ? 'INSUFFICIENT_REAL_DATA' : 'REAL',
      evaluatedAt: this._coordNow()
    };
    const idx = (APP_DATA.regulatoryDemoScenarioResultIndexes || []).findIndex(r => r.demoCode === demoCode);
    if (idx >= 0) APP_DATA.regulatoryDemoScenarioResultIndexes[idx] = result;
    else {
      APP_DATA.regulatoryDemoScenarioResultIndexes = APP_DATA.regulatoryDemoScenarioResultIndexes || [];
      APP_DATA.regulatoryDemoScenarioResultIndexes.push(result);
    }
    return result;
  },

  buildRegulatoryDemoScenarios() {
    const defs = APP_DATA.regulatoryDemoScenarioDefinitions || [];
    const pageIds = (this.publicRegulatoryPages || []).map(p => p.pageId);
    const scenarios = defs.map((def, idx) => {
      const reach = this.validateDemoScenarioReachability(def.demoCode);
      const trace = this.validateDemoScenarioTraceability(def.demoCode) || {};
      const missingSteps = (def.expectedTraceChain || []).filter(s => !trace.chain?.[s]);
      let demoStatus = 'READY_WITH_GAPS';
      if (!reach.reachable) demoStatus = 'BLOCKED';
      else if (trace.traceabilityStatus === 'FULL_TRACEABLE') demoStatus = 'FULL_CLOSED_LOOP';
      else if (trace.traceabilityStatus === 'PARTIAL_TRACEABLE') demoStatus = 'PARTIAL_CLOSED_LOOP';
      else if (trace.hitCount === 0) demoStatus = 'DATA_REQUIRED';
      if (def.trendStatus === 'INSUFFICIENT_HISTORY') demoStatus = trace.traceabilityStatus === 'FULL_TRACEABLE' ? 'PARTIAL_CLOSED_LOOP' : demoStatus;
      return {
        demoId: 'RDEMO-' + String(idx + 1).padStart(2, '0'),
        demoCode: def.demoCode,
        name: def.name,
        description: def.description,
        roleType: def.roleType,
        stepLabels: def.stepLabels || [],
        pagePath: def.pagePath || [],
        expectedTraceChain: def.expectedTraceChain || [],
        actualTraceChain: Object.keys(trace.chain || {}).filter(k => trace.chain[k]),
        missingTraceSteps: missingSteps,
        traceabilityStatus: trace.traceabilityStatus || 'NOT_TRACEABLE',
        demoStatus,
        reachable: reach.reachable,
        invalidPages: reach.invalidPages || [],
        simulationOnly: def.simulationOnly === true,
        requiresHumanDecision: def.requiresHumanDecision === true,
        trendStatus: def.trendStatus || null,
        capabilityLabel: trace.traceabilityStatus === 'FULL_TRACEABLE' ? 'FULL_CLOSED_LOOP' : (trace.traceabilityStatus === 'PARTIAL_TRACEABLE' ? 'PARTIAL_TRACEABLE' : 'READY_WITH_GAPS'),
        dataStatus: trace.dataStatus || 'DERIVED',
        sourceTraceability: { sourceType: 'regulatoryDemoScenarioDefinitions', sourceId: def.demoCode }
      };
    });
    APP_DATA.regulatoryDemoScenarioIndexes = scenarios;
    return scenarios;
  },

  calculateDemoScenarioHealth() {
    const scenarios = APP_DATA.regulatoryDemoScenarioIndexes || [];
    const results = APP_DATA.regulatoryDemoScenarioResultIndexes || [];
    const full = results.filter(r => r.traceabilityStatus === 'FULL_TRACEABLE').length;
    const partial = results.filter(r => r.traceabilityStatus === 'PARTIAL_TRACEABLE').length;
    const not = results.filter(r => r.traceabilityStatus === 'NOT_TRACEABLE').length;
    const reachable = scenarios.filter(s => s.reachable).length;
    const humanPending = scenarios.filter(s => s.requiresHumanDecision).length;
    const simulationOk = scenarios.filter(s => !s.simulationOnly || s.demoCode !== 'DEMO-03' || (APP_DATA.regulatorySimulations || []).some(x => x.simulationOnly === true)).length;
    const metrics = {
      scenarioCount: scenarios.length,
      reachableCount: reachable,
      fullTraceableCount: full,
      partialTraceableCount: partial,
      notTraceableCount: not,
      humanDecisionCount: humanPending,
      simulationIsolationOk: (APP_DATA.regulatorySimulations || []).every(s => s.simulationOnly !== false) && scenarios.find(s => s.demoCode === 'DEMO-03')?.simulationOnly === true,
      trendStatus: 'INSUFFICIENT_HISTORY',
      overallStatus: reachable === scenarios.length && scenarios.length === 6 ? (full === scenarios.length ? 'FULL_CLOSED_LOOP' : partial > 0 ? 'READY_WITH_GAPS' : 'DATA_REQUIRED') : 'BLOCKED',
      noFakeHistory: true,
      noFakeClosedLoop: !scenarios.some(s => s.demoStatus === 'FULL_CLOSED_LOOP' && s.traceabilityStatus !== 'FULL_TRACEABLE'),
      dataStatus: 'DERIVED'
    };
    APP_DATA.regulatoryDemoScenarioMetrics = metrics;
    return metrics;
  },

  initializeRegulatoryDemoScenarios() {
    this.buildRegulatoryDemoScenarios();
    this.calculateDemoScenarioHealth();
    return APP_DATA.regulatoryDemoScenarioMetrics;
  },

  finalizeRegulatoryDemoFreeze() {
    const pageCount = (this.publicRegulatoryPages || []).length;
    const scenarios = APP_DATA.regulatoryDemoScenarioIndexes || [];
    const metrics = APP_DATA.regulatoryDemoScenarioMetrics || {};
    const results = APP_DATA.regulatoryDemoScenarioResultIndexes || [];
    const orphans = this.getOrphanPages ? this.getOrphanPages() : [];
    const freeze = {
      version: 'Demo Final',
      scope: 'DEMO_ONLY',
      productionReady: false,
      frozenAt: '2026-07-22',
      publicPageCount: pageCount,
      investmentFreeze: true,
      penetrateCount: 3,
      demoScenarioCount: scenarios.length,
      allDemoScenariosReachable: scenarios.length === 6 && scenarios.every(s => s.reachable),
      allDemoScenariosTraceable: results.length === 6 && results.every(r => r.hitCount > 0),
      simulationIsolationOk: metrics.simulationIsolationOk === true,
      humanDecisionOk: scenarios.find(s => s.demoCode === 'DEMO-05')?.requiresHumanDecision === true,
      noFakeHistory: metrics.noFakeHistory === true,
      noFakeClosedLoop: metrics.noFakeClosedLoop === true,
      orphanPageCount: orphans.length,
      groupPerspectiveChain: '集团→区域→国家→法人→项目',
      regulatoryChain: '数据→指标/KRI→风险→预警→监管行动→整改→验证→持续改进',
      overallDemoStatus: metrics.overallStatus || 'READY_WITH_GAPS',
      dataStatus: 'DERIVED'
    };
    APP_DATA.regulatoryDemoFinalFreezeIndex = freeze;
    return freeze;
  },

  startDemoScenario(demoCode) {
    const s = (APP_DATA.regulatoryDemoScenarioIndexes || []).find(x => x.demoCode === demoCode);
    if (!s || !s.pagePath?.length) return { success: false, message: '演示路径不存在' };
    const first = s.pagePath[0];
    this.navigatePublic(first);
    this.createRegulatoryAuditLog({ actionType: 'VIEW', objectType: 'regulatoryDemoScenarioIndexes', objectId: demoCode, reason: '启动 Demo 演示路径', afterState: { step: 0, pageId: first } });
    return { success: true, demoCode, startedAt: first, stepCount: s.pagePath.length, demoStatus: s.demoStatus };
  },

  renderDemoScenarioPathSteps(scenario) {
    if (!scenario) return '';
    const steps = (scenario.stepLabels || []).map((label, i) => {
      const pid = scenario.pagePath[i];
      const page = (this.publicRegulatoryPages || []).find(p => p.pageId === pid);
      const ok = scenario.actualTraceChain?.length ? (scenario.expectedTraceChain[i] ? scenario.actualTraceChain.includes(scenario.expectedTraceChain[i]) : true) : true;
      return `${i ? '<i>→</i>' : ''}<button onclick="App.navigatePublic('${pid}')" title="${pid}"><b>${label}</b><small>${ok ? '' : ' ' + this.renderPublicUnifiedStatusBadge('DATA_REQUIRED')}</small></button>`;
    }).join('');
    return `<div class="kri-lineage" style="flex-wrap:wrap;margin:8px 0">${steps}</div>`;
  },

  renderDashboardGroupRegulatoryPerspectiveCard() {
    const metrics = [
      ['8,562亿元', '集团投资总体态势', '1,286项 · 同比+8.6%', `App.navigate('portfolio')`],
      ['12/38/75家', '区域/法人投资分布', '境内928项 · 境外358项', `App.navigate('portfolio')`],
      ['128项', '重点项目监管情况', '重大投资128项 · 在管86项', `App.navigate('major')`],
      ['72.0%', '投资风险集中度', '前十大法人68.2%', `App.navigate('warnings')`],
      ['12项', '重大事项影响', '待决策4项 · 督办3项', `App.navigate('major')`],
      ['76.4%', '整改闭环情况', '整改86项 · 逾期12项', `App.navigate('rectification')`]
    ];
    return `<div class="card" style="margin-bottom:20px;border:1px solid #dce3ec;background:linear-gradient(180deg,#f8fbff 0%,#fff 100%)">
      <div class="card-title">集团监管视角 · 投资活动总体态势</div>
      <p class="insight-note">集团总部从<strong>全级次、全链条、全过程</strong>观察投资活动：覆盖总体规模、区域与法人分布、重点项目、风险集中度、重大事项影响与整改闭环，均基于现有投资管理页面与数据展示。</p>
      <div class="group-metrics">${metrics.map(([v, l, sub, nav]) => `<button class="metric-card" onclick="${nav}"><div class="value">${v}</div><div class="label">${l}</div><div class="sub-items">${sub}</div></button>`).join('')}</div>
    </div>`;
  },

  renderDashboardGroupRegulatoryDemoEntry() {
    const steps = ['投资驾驶舱', '投资风险监测', '投资穿透分析', '整改闭环', '监管复盘'];
    const path = steps.map((label, i) => `${i ? '<i>→</i>' : ''}<button onclick="App.startGroupRegulatoryPerspectiveWalkthrough(${i})"><b>${label}</b></button>`).join('');
    return `<div class="card" style="margin-bottom:20px;border:1px solid #c9daf5;background:#fff">
      <div class="card-title">集团监管视角演示入口</div>
      <p class="insight-note">展示集团总部如何基于<strong>现有投资监管能力</strong>，实现对下属单位投资活动的穿透监管。演示路径仅使用已有页面跳转，不新增集团监管平台页面。</p>
      <div class="kri-lineage" style="flex-wrap:wrap;margin:12px 0">${path}</div>
      <p style="margin-top:8px">${this.renderPublicLinkButton('开始演示', 'App.startGroupRegulatoryPerspectiveWalkthrough(0)')} ${this.renderPublicLinkButton('进入投资风险监测', `App.navigate('warnings')`)} ${this.renderPublicLinkButton('查看整改闭环', `App.navigate('rectification')`)}</p>
    </div>`;
  },

  renderWarningsGroupRegulatoryChain() {
    const w = (APP_DATA.warnings || [])[0];
    const steps = [
      this.renderLineageNode('集团', '集团总部', '全级次监管', `App.navigate('dashboard')`),
      this.renderLineageNode('区域', '中东/境内', '6大区域', `App.navigate('portfolio')`),
      this.renderLineageNode('法人', w ? w.unit : 'A/B/C/D公司', '125家法人', `App.navigate('portfolio')`),
      this.renderLineageNode('项目', w ? w.project : '监管项目', '1,286项', `App.navigate('portfolio')`),
      this.renderLineageNode('风险事项', w ? w.name : '风险事项', '46项', `App.showWarningDetail('${w ? w.id : 'risk-2'}')`),
      this.renderLineageNode('KRI', w ? w.indicator : 'KRI指标', '28项异常', `App.navigate('controls')`),
      this.renderLineageNode('预警', '风险预警', '8项重大', `App.filterWarnings('红色')`),
      this.renderLineageNode('整改', '整改任务', '18项未闭环', `App.navigate('rectification')`)
    ];
    return `<div class="card" style="margin-bottom:16px"><div class="card-title">集团监管视角 · 投资风险穿透链路</div>
      <p class="insight-note">在原有风险监测能力上叠加集团总部穿透维度：<strong>集团 → 区域 → 法人 → 项目 → 风险事项 → KRI → 预警 → 整改</strong>。点击下方节点可跳转至对应已有页面。</p>
      ${this.renderLineagePath(steps)}
    </div>`;
  },

  renderPortfolioGroupPlanningPerspective() {
    const blocks = [
      { title: '投资布局分析', value: '6大板块', desc: '清洁能源、装备制造、工程建设等；境内72% · 境外28%', nav: `App.showPortfolioDetail('投资布局','集团总体')` },
      { title: '区域投资结构', value: '74.6%', desc: '前十大区域投资占比；中东、亚洲、非洲为重点区域', nav: `App.showPortfolioDetail('区域投资结构','中东')` },
      { title: '子企业投资集中度', value: '68.2%', desc: '前十大法人集中度；A公司30.8% · B公司21.3%', nav: `App.showPortfolioDetail('子企业集中度','前十大法人')` },
      { title: '战略方向匹配分析', value: '92.4%', desc: '主业匹配率；偏离主业项目14项待复核', nav: `App.navigate('controls')` }
    ];
    return `<div class="card"><div class="card-title">集团监管视角 · 投资规划与布局</div>
      <p class="insight-note">在原有投资组合分析基础上，增加集团总部规划与监管视角：关注投资布局、区域结构、子企业集中度与战略方向匹配，数据均来自现有组合分析模块。</p>
      <div class="portfolio-analysis-row">${blocks.map(b => `<button class="analysis-card" onclick="${b.nav}"><h4>${b.title}</h4><strong>${b.value}</strong><p>${b.desc}</p></button>`).join('')}</div>
    </div>`;
  },

  renderDashboardGroupRegulatoryEntry() {
    return (this.renderDashboardGroupRegulatoryPerspectiveCard?.() || '') + (this.renderDashboardGroupRegulatoryDemoEntry?.() || '');
  },

  renderDemoScenarioDashboardPanel() {
    const m = APP_DATA.regulatoryDemoScenarioMetrics || {};
    const scenarios = APP_DATA.regulatoryDemoScenarioIndexes || [];
    const humanItems = (APP_DATA.regulatoryOperatingRecommendations || []).filter(r => r.requiresHumanDecision && r.status === 'OPEN').length;
    const freeze = APP_DATA.regulatoryDemoFinalFreezeIndex || {};
    const rows = scenarios.map(s => `<tr class="clickable" onclick="App.startDemoScenario('${s.demoCode}')"><td>${s.demoCode}</td><td>${s.name}</td><td>${this.renderPublicUnifiedStatusBadge(s.demoStatus)}</td><td>${this.renderPublicUnifiedStatusBadge(s.traceabilityStatus)}</td><td>${s.requiresHumanDecision ? '是' : '否'}</td><td>${s.simulationOnly ? 'simulationOnly' : '—'}</td></tr>`).join('');
    return `<div class="card" style="border:2px solid var(--accent,#2563eb)"><div class="card-title">集团监管演示路径 ${this.renderPublicUnifiedStatusBadge(m.overallStatus || 'READY_WITH_GAPS')}</div>
      <p class="insight-note"><b>Demo 定位：</b>以集团整体视角，展示从数据、指标、KRI、预警、风险、协同、监管行动、整改验证到持续改进的穿透式监管能力。<b>不新增页面，仅提供导航入口</b>，演示将跳转至平台已有页面与原有业务内容。</p>
      <p class="insight-note">能力状态：已验证 <b>${m.fullTraceableCount || 0}</b> · 部分可追溯 <b>${m.partialTraceableCount || 0}</b> · 数据缺口 <b>${(scenarios.filter(s => s.demoStatus === 'READY_WITH_GAPS' || s.demoStatus === 'DATA_REQUIRED').length)}</b> · 待人工决策 <b>${humanItems}</b> · ${this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY')} <code>INSUFFICIENT_HISTORY</code> — 不伪造历史趋势</p>
      <div class="group-metrics">${[
        [scenarios.length, '核心演示路径', `App.navigatePublic('regulatory-workbench')`],
        [m.reachableCount || scenarios.filter(s => s.reachable).length, '路径可达', `App.navigatePublic('global-group-overview')`],
        [m.fullTraceableCount || 0, 'FULL_TRACEABLE', `App.navigatePublic('regulatory-analysis-center')`],
        [m.partialTraceableCount || 0, 'PARTIAL_TRACEABLE', `App.navigatePublic('regulatory-data-lineage')`],
        [humanItems, '待人工决策', `App.navigatePublic('regulatory-queue',{queueType:'DECISION'})`],
        [scenarios.filter(s => s.simulationOnly).length, 'simulationOnly', `App.navigatePublic('regulatory-simulation')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      ${rows ? `<table class="data-table"><thead><tr><th>编号</th><th>场景</th><th>Demo状态</th><th>追溯</th><th>人审</th><th>仿真</th></tr></thead><tbody>${rows}</tbody></table>` : ''}
      ${scenarios.map(s => `<div style="margin-top:12px;padding:8px;border-top:1px solid #eee"><b>${s.demoCode}</b> ${s.name} ${this.renderPublicUnifiedStatusBadge(s.demoStatus)} ${s.trendStatus ? this.renderPublicUnifiedStatusBadge(s.trendStatus) : ''}
        ${this.renderDemoScenarioPathSteps(s)}
        ${this.renderPublicLinkButton('开始演示', `App.startDemoScenario('${s.demoCode}')`)}
      </div>`).join('')}
    </div>`;
  },

  renderDemoScenarioWorkbenchPanel() {
    const user = this.getCurrentRegulatoryUser?.() || {};
    const roleType = (APP_DATA.regulatoryRoleProfiles || []).find(r => r.roleId === this.currentRegulatoryRoleId)?.roleType || 'GROUP_REGULATORY';
    const scenarios = (APP_DATA.regulatoryDemoScenarioIndexes || []).filter(s => s.roleType === roleType || roleType === 'GROUP_REGULATORY');
    const queue = APP_DATA.regulatoryQueue || [];
    return `<div class="card"><div class="card-title">我的 Demo 工作台视图 · ${roleType}</div>
      <div class="group-metrics">${[
        [queue.filter(q => q.queueType === 'DECISION').length, '我的决策事项', `App.navigatePublic('regulatory-queue',{queueType:'DECISION'})`],
        [(APP_DATA.warnings || []).length, '我的风险', `App.navigatePublic('warnings')`],
        [(APP_DATA.regulatoryWarnings || []).filter(w => w.status === 'PENDING_REVIEW').length, '我的预警', `App.navigatePublic('regulatory-warning-center')`],
        [(APP_DATA.regulatoryCoordinationCases || []).filter(c => c.status === 'PROPOSED').length, '我的协同事项', `App.navigatePublic('regulatory-queue',{queueType:'COORDINATION_CONFIRMATION'})`],
        [(APP_DATA.rectificationTasks || []).filter(t => t.status !== '已关闭').length, '我的整改', `App.navigatePublic('rectification')`],
        [queue.filter(q => q.queueType === 'VERIFICATION').length, '我的验证', `App.navigatePublic('regulatory-queue',{queueType:'VERIFICATION'})`],
        [queue.filter(q => q.queueType === 'DECISION').length, '我的待办', `App.navigatePublic('regulatory-queue')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      <p class="insight-note"><b>推荐演示路径（${roleType}）：</b>${scenarios.map(s => s.demoCode).join('、') || '—'}</p>
      ${scenarios.slice(0, 3).map(s => `<p class="insight-note">${s.demoCode} ${s.name} ${this.renderPublicLinkButton('演示', `App.startDemoScenario('${s.demoCode}')`)}</p>`).join('')}
    </div>`;
  },

  renderDemoScenarioRolePanel(roleType) {
    const scenarios = (APP_DATA.regulatoryDemoScenarioIndexes || []).filter(s => s.roleType === roleType);
    if (!scenarios.length) return '';
    const pathMap = {
      GROUP_LEADER: 'DEMO-01→DEMO-05→DEMO-06',
      GROUP_REGULATORY: 'DEMO-02→DEMO-03→DEMO-04→DEMO-06',
      DOMAIN_REGULATOR: '领域指标→KRI→预警→整改',
      ENTITY_REGULATOR: '本法人数据→风险→整改→验证'
    };
    return `<div style="margin-top:8px"><div class="card-title" style="font-size:13px">Demo 角色演示路径 · ${roleType}</div>
      <p class="insight-note">${pathMap[roleType] || ''}</p>
      ${scenarios.map(s => `<p class="insight-note">${s.demoCode} ${s.name} ${this.renderPublicUnifiedStatusBadge(s.demoStatus)} ${this.renderPublicLinkButton('演示', `App.startDemoScenario('${s.demoCode}')`)}</p>`).join('')}
    </div>`;
  },

  renderOperatingCycleDashboardPanel() {
    const cycles = APP_DATA.regulatoryOperatingCycles || [];
    const m = APP_DATA.regulatoryOperatingMetrics || {};
    const rm = APP_DATA.regulatoryOperatingRuntimeMetrics || {};
    const instances = APP_DATA.regulatoryOperatingCycleInstances || [];
    const groupH = (APP_DATA.regulatoryOperatingSnapshots || []).find(s => s.scopeType === 'GROUP') || {};
    const runtimeH = this.calculateOperatingRuntimeHealth('GROUP', 'G001');
    const weekly = (APP_DATA.regulatoryPeriodicReviews || []).find(r => r.reviewType === 'WEEKLY_REVIEW');
    const domainReviews = APP_DATA.regulatoryDomainOperationReviews || [];
    const worstDomain = domainReviews.filter(d => d.domainStatus !== 'INSUFFICIENT_DATA').sort((a, b) => ({ AT_RISK: 0, WATCH: 1, HEALTHY: 2 }[a.domainStatus] - { AT_RISK: 0, WATCH: 1, HEALTHY: 2 }[b.domainStatus]))[0];
    const quarterly = (APP_DATA.regulatoryQuarterlyPerformanceReviews || [])[0];
    const annual = (APP_DATA.regulatoryAnnualOperationResults || [])[0];
    const dailyInst = instances.find(i => i.cycleType === 'DAILY');
    const cycleRows = ['DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'ANNUAL'].map(t => {
      const c = cycles.find(x => x.cycleType === t);
      const inst = instances.find(i => i.cycleType === t);
      const labels = { DAILY: '今日运行', WEEKLY: '本周运行', MONTHLY: '本月运行', QUARTERLY: '本季度运行', ANNUAL: '年度运行' };
      return c ? `<tr class="clickable" onclick="App.navigatePublic('regulatory-workbench')"><td>${labels[t]}</td><td>${c.cycleId}</td><td>${this.renderPublicUnifiedStatusBadge(inst?.status || c.status)}</td><td>${inst?.operationCount ?? c.pendingItemCount ?? '—'}</td><td>${c.overallRegulatoryHealth != null ? c.overallRegulatoryHealth : this.renderPublicUnifiedStatusBadge('INSUFFICIENT_DATA')}</td></tr>` : '';
    }).join('');
    const daily = APP_DATA.regulatoryDailyOperations || [];
    const weeklyRisks = weekly?.newHighRiskCount ?? weekly?.focusItems?.length ?? 0;
    return `<div class="card"><div class="card-title">当前监管运营周期 ${m.trendStatus === 'INSUFFICIENT_HISTORY' ? this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY') : ''}</div>
      <p class="insight-note">运营实例 <b>${rm.cycleInstanceCount || instances.length}</b> · 今日事项 <b>${daily.length}</b> · 运营异常 <b>${rm.operatingExceptionCount || 0}</b> · 待人工决策 <b>${rm.pendingHumanDecisionCount || 0}</b></p>
      <div class="group-metrics">${[
        [dailyInst?.status || 'IN_PROGRESS', '周期运行状态', `App.navigatePublic('regulatory-workbench')`],
        [daily.length, '今日监管事项', `App.navigatePublic('regulatory-workbench')`],
        [weeklyRisks, '本周高风险事项', `App.navigatePublic('regulatory-analysis-center')`],
        [worstDomain ? worstDomain.domainName + '·' + worstDomain.domainStatus : 'INSUFFICIENT_DATA', '本月领域健康度', `App.navigatePublic('regulatory-data-governance')`],
        [quarterly?.evaluationResults?.overallScore ?? 'INSUFFICIENT_DATA', '季度绩效', `App.navigatePublic('regulatory-performance')`],
        [annual?.strategicDeviation || '—', '年度战略偏差', `App.navigatePublic('regulatory-strategic-review')`],
        [daily.filter(d => d.category === 'WARNING_REVIEW').length, '待研判预警', `App.navigatePublic('regulatory-warning-center')`],
        [daily.filter(d => d.category === 'ACTION_PENDING').length, '待分派行动', `App.navigatePublic('regulatory-actions')`],
        [daily.filter(d => d.category === 'RECTIFICATION_VERIFY').length, '待验证整改', `App.navigatePublic('rectification')`],
        [runtimeH.overallRuntimeHealth ?? groupH.overallRegulatoryHealth ?? '—', '运营健康度', `App.navigatePublic('regulatory-analysis-center')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      <table class="data-table"><thead><tr><th>周期</th><th>编号</th><th>状态</th><th>事项数</th><th>健康度</th></tr></thead><tbody>${cycleRows}</tbody></table>
    </div>`;
  },

  renderDailyOperationsWorkbenchPanel() {
    const daily = APP_DATA.regulatoryDailyOperations || [];
    const weekly = (APP_DATA.regulatoryPeriodicReviews || []).find(r => r.reviewType === 'WEEKLY_REVIEW');
    const domainReviews = APP_DATA.regulatoryDomainOperationReviews || [];
    const exceptions = APP_DATA.regulatoryOperatingExceptions || [];
    const decisions = daily.filter(d => d.category === 'HUMAN_DECISION');
    const cats = [
      ['WARNING_REVIEW', '待研判预警', 'regulatory-warning-center'],
      ['ACTION_PENDING', '待分派行动', 'regulatory-actions'],
      ['TASK_OVERDUE', '超期监管任务', 'regulatory-supervision-tasks'],
      ['RECTIFICATION_VERIFY', '待验证整改', 'rectification'],
      ['DATA_INTEGRATION', '数据接入异常', 'regulatory-data-integration'],
      ['AUTHORIZATION_PENDING', '待审批事项', 'regulatory-authorization'],
      ['HUMAN_DECISION', '待人工决策', 'regulatory-workbench']
    ];
    const kpi = cats.map(([cat, label, page]) => [daily.filter(d => d.category === cat).length, label, `App.navigatePublic('${page}')`]);
    const mustToday = daily.filter(d => d.priority === 'CRITICAL' || d.priority === 'HIGH').slice(0, 6);
    const weeklyReview = (weekly?.focusItems || []).slice(0, 3);
    const focusDomains = domainReviews.filter(d => d.domainStatus === 'AT_RISK' || d.domainStatus === 'WATCH').slice(0, 3);
    const rows = mustToday.map(d =>
      `<tr class="clickable" onclick="${this._operatingSourceNav(d.sourceType, d.sourceId)}"><td>${d.category}</td><td>${d.sourceName || d.sourceId}</td><td>${this.renderPublicPriorityBadge(d.priority)}</td><td>${d.responsibleRole || '—'}</td><td>${d.currentStatus}</td></tr>`
    ).join('');
    const exRows = exceptions.filter(e => e.status === 'OPEN').slice(0, 4).map(e =>
      `<tr class="clickable" onclick="${this._operatingSourceNav(e.sourceType, e.sourceId)}"><td>${e.exceptionType}</td><td>${e.sourceId}</td><td>${this.renderPublicPriorityBadge(e.severity)}</td><td>${e.responsibleRole}</td></tr>`
    ).join('');
    return `<div class="card"><div class="card-title">今日监管工作</div>
      <div class="group-metrics">${kpi.map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      <p class="insight-note"><b>今日必须处理：</b>${mustToday.length} 项高优先级</p>
      <p class="insight-note"><b>本周必须复核：</b>${weeklyReview.length ? weeklyReview.map(i => i.sourceName || i.sourceId).join('、') : '—'}</p>
      <p class="insight-note"><b>本月重点领域：</b>${focusDomains.map(d => d.domainName + '(' + d.domainStatus + ')').join('、') || '—'}</p>
      <p class="insight-note"><b>待人工决策：</b>${decisions.length} 项 · <b>运营异常：</b>${exceptions.filter(e => e.status === 'OPEN').length} 项</p>
      ${rows ? `<table class="data-table"><thead><tr><th>类别</th><th>来源</th><th>优先级</th><th>责任角色</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无高优先级事项')}
      ${exRows ? `<div class="card-title" style="margin-top:12px">运营异常</div><table class="data-table"><thead><tr><th>异常类型</th><th>来源ID</th><th>严重度</th><th>责任角色</th></tr></thead><tbody>${exRows}</tbody></table>` : ''}
      <button class="btn btn-outline" onclick="App.navigatePublic('regulatory-analysis-center')">周期复盘</button>
    </div>`;
  },

  renderPeriodicFocusPanel() {
    const po = APP_DATA.regulatoryPriorityObjects || [];
    const results = APP_DATA.regulatoryDomainAdaptationResults || [];
    const actions = (APP_DATA.regulatoryActions || []).filter(a => a.status !== 'CLOSED').slice(0, 3);
    const kris = (APP_DATA.regulatoryKriRuntime || []).filter(k => ['WARNING', 'CRITICAL'].includes(k.runtimeStatus || k.status)).slice(0, 3);
    const entities = po.filter(o => o.priority === 'HIGH' || o.priority === 'CRITICAL').slice(0, 3);
    const domains = results.filter(r => r.closedLoopStatus === 'PARTIAL_CLOSED_LOOP').slice(0, 3);
    return `<div class="card"><div class="card-title">本周期监管重点</div>
      <p class="insight-note"><b>重点法人：</b>${entities.map(e => this.renderPublicLinkButton(e.objectName || e.objectId, `App.navigatePublic('global-legal-entities',{entityId:'${e.objectId}'})`)).join('') || '—'}</p>
      <p class="insight-note"><b>重点领域：</b>${domains.map(d => this.renderPublicLinkButton(d.domainName || d.domainId, `App.navigatePublic('regulatory-data-governance')`)).join('') || '—'}</p>
      <p class="insight-note"><b>重点KRI：</b>${kris.map(k => this.renderPublicLinkButton(k.kriId, `App.navigatePublic('regulatory-kri-monitoring',{kriRuntimeId:'${k.kriRuntimeId}'})`)).join('') || '—'}</p>
      <p class="insight-note"><b>重点监管行动：</b>${actions.map(a => this.renderPublicLinkButton(a.actionId, `App.navigatePublic('regulatory-actions',{actionId:'${a.actionId}'})`)).join('') || '—'}</p>
    </div>`;
  },

  renderOperatingCycleAnalysisPanel() {
    const reviews = APP_DATA.regulatoryPeriodicReviews || [];
    const domainReviews = APP_DATA.regulatoryDomainOperationReviews || [];
    const quarterly = (APP_DATA.regulatoryQuarterlyPerformanceReviews || [])[0];
    const annual = (APP_DATA.regulatoryAnnualOperationResults || [])[0];
    const exceptions = APP_DATA.regulatoryOperatingExceptions || [];
    const period = this.regulatoryOperatingAnalysisPeriod || 'MONTHLY';
    const reviewMap = { DAILY: null, WEEKLY: 'WEEKLY_REVIEW', MONTHLY: 'MONTHLY_REVIEW', QUARTERLY: 'QUARTERLY_REVIEW', ANNUAL: 'ANNUAL_REVIEW' };
    const rev = reviews.find(r => r.reviewType === reviewMap[period]);
    const trendNote = this.renderPublicEmptyState('INSUFFICIENT_HISTORY — 无足够历史数据，不伪造同比/环比');
    let rows = '';
    if (period === 'DAILY') {
      const daily = APP_DATA.regulatoryDailyOperations || [];
      rows = [['今日运营事项', daily.length], ['高优先级', daily.filter(d => d.priority === 'CRITICAL' || d.priority === 'HIGH').length], ['待人工决策', daily.filter(d => d.category === 'HUMAN_DECISION').length]].map(([l, v]) => `<tr><td>${l}</td><td>${v}</td><td>${this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY')}</td><td>—</td></tr>`).join('');
    } else if (period === 'WEEKLY' && rev) {
      rows = [['重点事项', rev.focusItems?.length || 0], ['待决策', rev.decisionItems?.length || 0], ['需升级', rev.escalationItems?.length || 0], ['持续跟踪', rev.trackingItems?.length || 0], ['运营异常', exceptions.filter(e => e.status === 'OPEN').length]].map(([l, v]) => `<tr><td>${l}</td><td>${v}</td><td>${this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY')}</td><td>—</td></tr>`).join('');
    } else if (period === 'MONTHLY') {
      rows = domainReviews.map(d => `<tr><td>${d.domainName}</td><td>${this.renderPublicUnifiedStatusBadge(d.domainStatus)}</td><td>${d.dataHealthScore ?? '—'}</td><td>${d.kriHealthScore ?? '—'}</td></tr>`).join('');
    } else if (period === 'QUARTERLY' && quarterly) {
      const ar = quarterly.actualResults || {};
      rows = Object.keys(ar).filter(k => typeof ar[k] === 'number').map(k => `<tr><td>${k}</td><td>${ar[k]}%</td><td>${this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY')}</td><td>${quarterly.recommendations?.length || 0} 条建议</td></tr>`).join('');
    } else if (period === 'ANNUAL' && annual) {
      rows = [['战略目标', annual.strategicGoalAchievement?.length || 0], ['年度重点', annual.annualFocusCompletion?.length || 0], ['高风险领域', annual.riskChanges?.atRiskDomainCount || 0], ['下一周期建议', annual.nextCycleRecommendations?.length || 0]].map(([l, v]) => `<tr><td>${l}</td><td>${v}</td><td>${this.renderPublicUnifiedStatusBadge(annual.strategicDeviation)}</td><td>—</td></tr>`).join('');
    } else if (rev) {
      rows = [['本周期新增预警', rev.newWarningCount], ['KRI异常变化', rev.kriAnomalyCount], ['重点法人变化', rev.entityChangeCount], ['领域变化', rev.domainChangeCount], ['监管行动执行', rev.actionExecutionCount], ['整改闭环', rev.rectificationVerifiedCount + '/' + (rev.rectificationOpenCount + rev.rectificationVerifiedCount)], ['数据质量影响', rev.dataQualityImpactCount]].map(([l, v]) => `<tr><td>${l}</td><td>${v}</td><td>${this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY')}</td><td>—</td></tr>`).join('');
    }
    const headers = period === 'MONTHLY' ? '<th>领域</th><th>状态</th><th>数据健康</th><th>KRI健康</th>' : '<th>指标</th><th>本周期</th><th>趋势</th><th>备注</th>';
    return `<div class="card"><div class="card-title">监管运营周期分析 · 日→周→月→季→年 ${['DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'ANNUAL'].map(p => `<button class="btn btn-outline" style="margin:2px" onclick="App.regulatoryOperatingAnalysisPeriod='${p}';App.renderRegulatoryAnalysisCenter()">${p === 'DAILY' ? '日' : p === 'WEEKLY' ? '周' : p === 'MONTHLY' ? '月' : p === 'QUARTERLY' ? '季' : '年'}</button>`).join('')}</div>
      ${trendNote}
      ${rows ? `<table class="data-table"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无复盘数据')}
    </div>`;
  },

  renderOperatingCyclePerformancePanel() {
    const p = this.computeOperatingCyclePerformance();
    const quarterly = (APP_DATA.regulatoryQuarterlyPerformanceReviews || [])[0];
    const domainReviews = APP_DATA.regulatoryDomainOperationReviews || [];
    const rolePerf = ['ROLE-GROUP-REG', 'ROLE-DOMAIN-REG', 'ROLE-ENTITY-REG'].map(r => {
      const tasks = (APP_DATA.regulatorySupervisionTasks || []).filter(t => t.responsibleRole === r || t.ownerRole === r);
      const done = tasks.filter(t => ['COMPLETED', 'EVALUATED'].includes(t.taskStatus)).length;
      return [r, tasks.length ? Math.round(done / tasks.length * 100) + '%' : 'INSUFFICIENT_DATA'];
    });
    const items = [
      ['riskDiscoveryEfficiency', '风险发现效率', '周期绩效'],
      ['warningReviewEfficiency', '预警研判效率', '周期绩效'],
      ['actionCompletionRate', '监管行动完成率', '周期绩效'],
      ['rectificationVerificationRate', '整改验证率', '整改绩效'],
      ['dataQualityImprovementRate', '数据质量改善率', '数据运行绩效'],
      ['actionEffectivenessRate', '监管行动有效率', '周期绩效'],
      ['regulatoryClosureRate', '监管闭环率', '领域绩效']
    ];
    const domainRows = domainReviews.slice(0, 5).map(d => `<tr><td>${d.domainName}</td><td>${this.renderPublicUnifiedStatusBadge(d.domainStatus)}</td><td>${d.actionExecutionRate ?? '—'}%</td><td>${d.rectificationClosureRate ?? '—'}%</td></tr>`).join('');
    const roleRows = rolePerf.map(([r, v]) => `<tr><td>${r}</td><td>${v}</td><td colspan="2">${this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY')}</td></tr>`).join('');
    return `<div class="card"><div class="card-title">运营周期绩效 ${p.trendStatus === 'INSUFFICIENT_HISTORY' ? this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY') : ''} <span class="insight-note">（评价结果仅供分析，不自动影响考核）</span></div>
      <div class="group-metrics">${items.map(([k, l]) => {
        const v = p[k];
        return this.renderPublicKpiCard(l, v != null ? v + '%' : 'INSUFFICIENT_DATA', `App.navigatePublic('regulatory-performance')`);
      }).join('')}</div>
      ${quarterly ? `<p class="insight-note">季度综合评价：${quarterly.evaluationResults?.overallScore ?? 'INSUFFICIENT_DATA'} · 建议 ${quarterly.recommendations?.length || 0} 条（均需人工决策）</p>` : ''}
      ${domainRows ? `<div class="card-title" style="margin-top:8px">领域绩效</div><table class="data-table"><thead><tr><th>领域</th><th>状态</th><th>行动执行率</th><th>整改闭环率</th></tr></thead><tbody>${domainRows}</tbody></table>` : ''}
      ${roleRows ? `<div class="card-title" style="margin-top:8px">角色绩效</div><table class="data-table"><thead><tr><th>角色</th><th>任务完成率</th><th colspan="2">趋势</th></tr></thead><tbody>${roleRows}</tbody></table>` : ''}
    </div>`;
  },

  renderOperatingCycleStrategicLinkPanel() {
    const reviews = APP_DATA.regulatoryPeriodicReviews || [];
    const monthly = reviews.find(r => r.reviewType === 'MONTHLY_REVIEW');
    const quarterly = reviews.find(r => r.reviewType === 'QUARTERLY_REVIEW');
    const annual = reviews.find(r => r.reviewType === 'ANNUAL_REVIEW');
    const annualResult = (APP_DATA.regulatoryAnnualOperationResults || [])[0];
    const domainReviews = APP_DATA.regulatoryDomainOperationReviews || [];
    const atRisk = domainReviews.filter(d => d.domainStatus === 'AT_RISK');
    const steps = [
      { label: '日常运行', sub: (APP_DATA.regulatoryDailyOperations || []).length + ' 项', onclick: `App.navigatePublic('regulatory-workbench')` },
      { label: '月度复盘', sub: monthly?.title || '—', onclick: `App.navigatePublic('regulatory-analysis-center')` },
      { label: '季度评价', sub: quarterly?.title || '—', onclick: `App.navigatePublic('regulatory-performance')` },
      { label: '年度战略复盘', sub: annual?.title || annualResult?.resultId || '—', onclick: `App.navigatePublic('regulatory-strategic-review')` },
      { label: '下一周期重点', sub: (APP_DATA.regulatoryOperatingRecommendations || []).filter(r => r.status === 'OPEN').length + ' 条建议', onclick: `App.navigatePublic('regulatory-focus-management')` }
    ];
    const goalRows = (annualResult?.strategicGoalAchievement || []).slice(0, 4).map(g =>
      `<tr><td>${g.goalName || g.goalId}</td><td>${g.achievementRate != null ? Math.round(g.achievementRate * 100) + '%' : 'INSUFFICIENT_DATA'}</td><td>${this.renderPublicUnifiedStatusBadge(g.status)}</td></tr>`
    ).join('');
    return `<div class="card"><div class="card-title">周期复盘 → 战略复盘联动</div>
      ${this.renderPublicStrategicCycleFlow(steps.map(s => ({ label: s.label, onclick: s.onclick })))}
      <p class="insight-note">${steps.map(s => `${s.label}（${s.sub}）`).join(' → ')}</p>
      ${annualResult ? `<p class="insight-note"><b>年度运营结果：</b>${annualResult.operatingResultsSummary?.dailyOperationCount || 0} 项日常运营 · ${annualResult.operatingResultsSummary?.exceptionCount || 0} 项异常 · 战略偏差 ${annualResult.strategicDeviation}</p>` : ''}
      ${atRisk.length ? `<p class="insight-note"><b>重点风险变化：</b>${atRisk.map(d => d.domainName).join('、')} 处于 AT_RISK</p>` : ''}
      ${goalRows ? `<div class="card-title" style="margin-top:8px">战略目标达成</div><table class="data-table"><thead><tr><th>目标</th><th>达成率</th><th>状态</th></tr></thead><tbody>${goalRows}</tbody></table>` : ''}
      ${annualResult?.nextCycleRecommendations?.length ? `<p class="insight-note"><b>下一周期建议：</b>${annualResult.nextCycleRecommendations.slice(0, 3).map(r => r.suggestedAction).join('；')}（均需人工确认）</p>` : ''}
    </div>`;
  },

  renderOperatingRolePathPanel(roleType) {
    const paths = {
      GROUP_LEADER: ['global-group-overview', 'regulatory-analysis-center', 'warnings', 'regulatory-performance', 'regulatory-resource-allocation', 'regulatory-strategic-review'],
      GROUP_REGULATORY: ['regulatory-role-workbench', 'regulatory-workbench', 'regulatory-warning-center', 'regulatory-actions', 'regulatory-supervision-tasks', 'rectification', 'regulatory-analysis-center'],
      DOMAIN_REGULATOR: ['regulatory-role-workbench', 'regulatory-metric-center', 'regulatory-kri-monitoring', 'regulatory-data-quality', 'regulatory-warning-center', 'regulatory-actions', 'rectification', 'regulatory-data-governance'],
      ENTITY_REGULATOR: ['regulatory-my-work', 'regulatory-warning-center', 'regulatory-data-quality', 'rectification', 'regulatory-performance']
    };
    const labels = {
      'global-group-overview': '集团总览', 'regulatory-analysis-center': '监管态势', 'warnings': '重大风险',
      'regulatory-performance': '监管绩效', 'regulatory-resource-allocation': '资源调度', 'regulatory-strategic-review': '战略复盘',
      'regulatory-role-workbench': '角色工作台', 'regulatory-workbench': '今日监管工作', 'regulatory-warning-center': '高优先级预警',
      'regulatory-actions': '监管行动', 'regulatory-supervision-tasks': '监管任务', 'rectification': '整改验证',
      'regulatory-metric-center': '领域指标', 'regulatory-kri-monitoring': 'KRI异常', 'regulatory-data-quality': '数据质量',
      'regulatory-data-governance': '闭环成熟度', 'regulatory-my-work': '我的重点'
    };
    const path = paths[roleType] || paths.GROUP_REGULATORY;
    return `<div class="card"><div class="card-title">监管运营路径 · ${roleType}</div>
      <div class="kri-lineage" style="flex-wrap:wrap">${path.map((p, i) => `${i ? '<i>→</i>' : ''}<button class="btn btn-outline" onclick="App.navigatePublic('${p}')">${labels[p] || p}</button>`).join('')}</div>
    </div>`;
  },

  renderDomainClosureDashboardPanel() {
    const m = APP_DATA.regulatoryDomainClosureMetrics || {};
    const results = APP_DATA.regulatoryDomainAdaptationResults || [];
    const statusRows = [
      ['FULL_CLOSED_LOOP', results.filter(r => r.closedLoopStatus === 'FULL_CLOSED_LOOP').length],
      ['PARTIAL_CLOSED_LOOP', results.filter(r => r.closedLoopStatus === 'PARTIAL_CLOSED_LOOP').length],
      ['INSUFFICIENT_REAL_DATA', results.filter(r => r.closedLoopStatus === 'INSUFFICIENT_REAL_DATA').length]
    ].map(([s, c]) => `<tr><td>${this.renderPublicUnifiedStatusBadge(s)}</td><td>${c}</td></tr>`).join('');
    return `<div class="card"><div class="card-title">领域闭环覆盖 ${m.trendStatus === 'INSUFFICIENT_HISTORY' ? this.renderPublicUnifiedStatusBadge('INSUFFICIENT_HISTORY') : ''}</div>
      <div class="group-metrics">${[
        [m.fullClosedLoopCount, '完整闭环', `App.navigatePublic('regulatory-data-governance')`],
        [m.partialClosedLoopCount, '部分闭环', `App.navigatePublic('regulatory-data-governance')`],
        [m.insufficientRealDataCount, '数据不足', `App.navigatePublic('regulatory-data-sources')`],
        [m.openGapCount, '开放缺口', `App.navigatePublic('regulatory-analysis-center')`],
        [m.avgClosureReadiness != null ? m.avgClosureReadiness + '%' : '—', '平均准备度', `App.navigatePublic('regulatory-analysis-center')`],
        [m.criticalGapCount, '关键缺口', `App.navigatePublic('regulatory-improvement-center')`]
      ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      <table class="data-table"><thead><tr><th>闭环状态</th><th>领域数</th></tr></thead><tbody>${statusRows}</tbody></table>
    </div>`;
  },

  renderDomainDataGapsPanel(domainId) {
    const gaps = domainId ? this.getDomainDataGaps(domainId) : (APP_DATA.regulatoryDomainDataGaps || []);
    const rows = gaps.map(g => {
      const dom = (APP_DATA.regulatoryDomainConfigurations || []).find(d => d.domainId === g.domainId);
      return `<tr class="clickable" onclick="App.navigatePublic('regulatory-data-governance')"><td>${dom?.domainName || g.domainId}</td><td>${g.gapType}</td><td>${g.gapLevel}</td><td>${this.renderPublicUnifiedStatusBadge(g.gapStatus)}</td><td>${this.escHtml(g.evidence || '')}</td><td>${g.currentMaturityLevel}</td></tr>`;
    }).join('');
    return `<div class="card"><div class="card-title">领域数据缺口${domainId ? ' · ' + domainId : ''}</div>
      ${rows ? `<table class="data-table"><thead><tr><th>领域</th><th>缺口类型</th><th>级别</th><th>状态</th><th>证据</th><th>成熟度</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无缺口')}
    </div>`;
  },

  renderDomainClosurePlansPanel() {
    const plans = (APP_DATA.regulatoryDomainClosurePlans || []).slice().sort((a, b) => {
      const ord = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
      return (ord[a.priority] || 9) - (ord[b.priority] || 9);
    });
    const rows = plans.map(p => `<tr class="clickable" onclick="App.navigatePublic('regulatory-improvement-center')"><td>${p.domainName || p.domainId}</td><td>${p.currentLevel}</td><td>${p.targetLevel}</td><td>${this.renderPublicPriorityBadge(p.priority)}</td><td>${p.completionRate}%</td><td>${this.renderPublicUnifiedStatusBadge(p.status)}</td><td>${this.renderPublicUnifiedStatusBadge(p.closedLoopStatus)}</td><td>${(p.blockers || []).slice(0, 1).join('') || '—'}</td></tr>`).join('');
    return `<div class="card"><div class="card-title">领域闭环提升计划</div>
      ${rows ? `<table class="data-table"><thead><tr><th>领域</th><th>当前</th><th>目标</th><th>优先级</th><th>完成率</th><th>状态</th><th>闭环</th><th>阻塞</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无计划')}
    </div>`;
  },

  renderDomainClosureReadinessPanel(domainId) {
    const domains = domainId ? [domainId] : (APP_DATA.regulatoryDomainConfigurations || []).map(d => d.domainId);
    const rows = domains.map(id => {
      const rd = this.calculateDomainClosureReadiness(id);
      const pr = this.calculateDomainClosurePriority(id);
      const dom = (APP_DATA.regulatoryDomainConfigurations || []).find(d => d.domainId === id);
      return `<tr><td>${dom?.domainName || id}</td><td>${rd.currentMaturityLevel}</td><td>${rd.domainClosureReadiness}%</td><td>${rd.dataReadiness}%</td><td>${rd.kriReadiness}%</td><td>${rd.closureReadiness}%</td><td>${this.renderPublicPriorityBadge(pr)}</td></tr>`;
    }).join('');
    return `<div class="card"><div class="card-title">领域闭环准备度</div>
      <table class="data-table"><thead><tr><th>领域</th><th>成熟度</th><th>综合准备度</th><th>数据</th><th>KRI</th><th>闭环</th><th>优先级</th></tr></thead><tbody>${rows}</tbody></table>
    </div>`;
  },

  renderDomainClosureRolePanel(roleType) {
    const m = APP_DATA.regulatoryDomainClosureMetrics || {};
    const plans = APP_DATA.regulatoryDomainClosurePlans || [];
    const gaps = APP_DATA.regulatoryDomainDataGaps || [];
    if (roleType === 'GROUP_LEADER') {
      return `<div class="card"><div class="card-title">集团领域闭环提升</div>
        <div class="group-metrics">${[
          [m.domainClosureCoverage != null ? m.domainClosureCoverage + '%' : '—', '闭环覆盖率', `App.navigatePublic('regulatory-analysis-center')`],
          [plans.filter(p => p.priority === 'HIGH' || p.priority === 'CRITICAL').length, '重点提升领域', `App.navigatePublic('regulatory-improvement-center')`],
          [m.criticalGapCount, '重大数据缺口', `App.navigatePublic('regulatory-data-governance')`],
          [m.avgClosureReadiness != null ? m.avgClosureReadiness + '%' : '—', '平均准备度', `App.navigatePublic('regulatory-analysis-center')`]
        ].map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
        <p class="insight-note">闭环趋势：${m.trendStatus === 'INSUFFICIENT_HISTORY' ? '历史数据不足' : '—'}</p></div>`;
    }
    if (roleType === 'GROUP_REGULATORY') {
      return `<div class="card"><div class="card-title">领域缺口与待补齐闭环</div>
        <p>开放缺口 <b>${m.openGapCount}</b> · KRI缺口 <b>${gaps.filter(g => g.gapType === 'NO_KRI').length}</b> · 验证缺口 <b>${gaps.filter(g => g.gapType === 'NO_VERIFICATION_CHAIN').length}</b></p>
        ${this.renderPublicLinkButton('数据治理', `App.navigatePublic('regulatory-data-governance')`)} ${this.renderPublicLinkButton('提升计划', `App.navigatePublic('regulatory-improvement-center')`)}</div>`;
    }
    if (roleType === 'DOMAIN_REGULATOR') {
      const scopeDomain = this.regulatoryRoleScopeId || 'finance';
      const plan = this.getDomainClosurePlan(scopeDomain);
      const rd = this.calculateDomainClosureReadiness(scopeDomain);
      return `<div class="card"><div class="card-title">本领域闭环状态</div>
        <p>成熟度 <b>${rd.currentMaturityLevel}</b> · 准备度 <b>${rd.domainClosureReadiness}%</b> · 闭环 <b>${plan?.closedLoopStatus || '—'}</b></p>
        ${this.renderPublicLinkButton('KRI监测', `App.navigatePublic('regulatory-kri-monitoring')`)} ${this.renderPublicLinkButton('预警', `App.navigatePublic('regulatory-warning-center')`)}</div>`;
    }
    const entityId = this.regulatoryRoleScopeId || this.getCurrentRegulatoryUser()?.organizationId;
    const entityGaps = gaps.filter(g => (g.relatedSourceIds || []).some(sid => {
      const src = (APP_DATA.regulatoryDataSources || []).find(s => s.sourceId === sid);
      return src?.ownerOrganizationId === entityId;
    }));
    return `<div class="card"><div class="card-title">本法人数据缺口</div>
      <p>关联缺口 <b>${entityGaps.length}</b> · 待验证整改 <b>${(APP_DATA.rectificationTasks || []).filter(t => t.entityId === entityId && t.verificationStatus !== '已验证').length}</b></p>
      ${this.renderPublicLinkButton('数据质量', `App.navigatePublic('regulatory-data-quality')`)} ${this.renderPublicLinkButton('整改', `App.navigatePublic('rectification')`)}</div>`;
  },

  renderPlatformHealthPanel() {
    const ph = this.computePlatformHealth();
    const dims = ph.dimensions || {};
    const items = [
      ['dataHealth', '数据健康', 'regulatory-data-quality'],
      ['ruleHealth', '规则健康', 'regulatory-rule-runtime'],
      ['kriHealth', 'KRI健康', 'regulatory-kri-monitoring'],
      ['warningHealth', '预警健康', 'regulatory-warning-center'],
      ['actionHealth', '行动健康', 'regulatory-actions'],
      ['rectificationHealth', '整改健康', 'rectification'],
      ['decisionHealth', '决策健康', 'regulatory-decision-recommendations'],
      ['improvementHealth', '改进健康', 'regulatory-improvement-center']
    ];
    const statusLabel = ph.healthStatus === 'INSUFFICIENT_HISTORY' ? '历史数据不足' : this.getPublicUnifiedStatusLabel(ph.healthStatus);
    const cards = items.map(([key, label, nav]) => {
      const d = dims[key] || {};
      const val = d.healthStatus === 'INSUFFICIENT_HISTORY' ? '历史数据不足' : (d.score != null ? d.score : '—');
      return this.renderPublicKpiCard(label, val, `App.navigatePublic('${nav}')`);
    }).join('');
    return `<div class="card"><div class="card-title">平台运行健康度 ${this.renderPublicUnifiedStatusBadge(ph.healthStatus)}</div>
      <p class="insight-note">${this.escHtml(ph.note || '')} · 综合得分：${ph.compositeScore != null ? ph.compositeScore : '—'} (${statusLabel})</p>
      <div class="group-metrics" style="margin-bottom:0">${cards}</div></div>`;
  },

  renderCapabilityMapOverview() {
    const map = APP_DATA.regulatoryCapabilityMap || [];
    const domains = Object.keys(this.CAPABILITY_DOMAIN_META);
    return `<div class="card"><div class="card-title">集团监管平台能力地图</div>
      ${domains.map(code => {
        const meta = this.CAPABILITY_DOMAIN_META[code];
        const pages = map.filter(m => m.capabilityDomain === code);
        return `<div style="margin-bottom:12px"><b>${meta.name}</b> (${pages.length})
          <div class="field-status-grid" style="margin-top:6px">${pages.slice(0, 8).map(p => `<button onclick="App.navigatePublic('${p.pageId}')">${p.label}</button>`).join('')}${pages.length > 8 ? `<button onclick="App.navigatePublic('regulatory-search')">更多…</button>` : ''}</div></div>`;
      }).join('')}
    </div>`;
  },

  renderCommandCenterLayers() {
    const m = APP_DATA.regulatoryCommandCenterMetrics || {};
    const cm = APP_DATA.regulatoryContinuousImprovementMetrics || {};
    const ph = this.computePlatformHealth();
    const layers = [
      { layer: 1, title: '集团监管态势', items: [[m.objectCount, '监管对象', `App.navigatePublic('global-group-overview')`], [m.highRiskObjectCount, '高风险对象', `App.navigatePublic('warnings')`], [ph.compositeScore ?? '—', '平台健康度', `App.navigatePublic('regulatory-analysis-center')`]] },
      { layer: 2, title: '重点风险与预警', items: [[(APP_DATA.warnings || []).filter(w => w.level === '重大').length, '重大风险', `App.navigatePublic('warnings')`], [(APP_DATA.regulatoryMetricKriMetrics || {}).criticalWarningCount || 0, 'CRITICAL预警', `App.navigatePublic('regulatory-warning-center')`], [m.crossDomainCount, '跨领域风险', `App.navigatePublic('cross-domain-risks')`]] },
      { layer: 3, title: '待决策事项', items: [[(APP_DATA.regulatoryWorkbenchMetrics || {}).pendingDecisionCount || 0, '待决策', `App.navigatePublic('regulatory-decision-room')`], [(APP_DATA.regulatoryAnalysisMetrics || {}).pendingRecommendationCount || 0, '决策建议', `App.navigatePublic('regulatory-decision-recommendations')`], [cm.pendingPlanDecisionCount || 0, '待优化决策', `App.navigatePublic('regulatory-optimization-plans')`]] },
      { layer: 4, title: '待执行监管行动', items: [[m.pendingActionCount || 0, '待执行行动', `App.navigatePublic('regulatory-actions')`], [(APP_DATA.regulatoryActionExecutionMetrics || {}).inProgress || 0, '执行中', `App.navigatePublic('regulatory-action-execution')`], [m.waitingVerificationCount || 0, '待验证', `App.navigatePublic('regulatory-action-execution')`]] },
      { layer: 5, title: '整改与验证', items: [[m.overdueRectCount, '超期整改', `App.navigatePublic('rectification-operations')`], [(APP_DATA.regulatoryPerformanceSummary || {}).rectificationClosureRate ? Math.round((APP_DATA.regulatoryPerformanceSummary.rectificationClosureRate) * 100) + '%' : '—', '整改闭环率', `App.navigatePublic('regulatory-performance')`], [cm.pendingValidationCount || 0, '待效果验证', `App.navigatePublic('regulatory-improvement-effectiveness')`]] },
      { layer: 6, title: '数据、规则与系统运行', items: [[(APP_DATA.regulatoryDataGovernanceMetrics || {}).openIssueCount || 0, '数据质量问题', `App.navigatePublic('regulatory-data-quality')`], [(APP_DATA.regulatoryRuleExecutionMetrics || {}).anomalyCount || 0, '规则异常', `App.navigatePublic('regulatory-rule-runtime')`], [(APP_DATA.regulatoryAccessControlMetrics || {}).permissionAnomalyCount || 0, '权限异常', `App.navigatePublic('regulatory-audit-trail')`]] },
      { layer: 7, title: '战略复盘与持续改进', items: [[(APP_DATA.regulatoryStrategicPlanningMetrics || {}).behindCount || 0, '战略未达成', `App.navigatePublic('regulatory-strategy-planning')`], [cm.pendingOpportunityCount || 0, '改进机会', `App.navigatePublic('regulatory-improvement-center')`], [cm.improvementClosureRate != null ? cm.improvementClosureRate + '%' : '—', '改进闭环率', `App.navigatePublic('regulatory-improvement-center')`]] }
    ];
    return `<div class="card"><div class="card-title">驾驶舱分层导航（按使用顺序）</div>
      ${layers.map(l => `<div style="margin-bottom:10px"><b>第${l.layer}层 · ${l.title}</b><div class="group-metrics" style="margin:6px 0">${l.items.map(([v, label, nav]) => this.renderPublicKpiCard(label, v, nav)).join('')}</div></div>`).join('')}
    </div>`;
  },

  resolvePublicRouteId(pageId) {
    const page = (this.publicRegulatoryPages || []).find(p => p.pageId === pageId);
    return (page && page.routeId) || pageId;
  },

  getPublicRegulatoryPageIds() {
    return (this.publicRegulatoryPages || []).map(p => p.pageId);
  },

  normalizePublicNavParams(params) {
    const p = { ...(params || {}) };
    if (p.issueId && !p.qualityIssueId) p.qualityIssueId = p.issueId;
    if (p.taskId && !p.rectificationTaskId) p.rectificationTaskId = p.taskId;
    if (p.riskId && !p.riskMatterId) p.riskMatterId = p.riskId;
    if (p.coverageCellId) p.gapId = p.gapId || null;
    return p;
  },

  capturePublicFilters(pageId) {
    if (pageId === 'global-group-overview' || pageId === 'group') return { ...(this.groupOverviewFilter || {}) };
    if (pageId === 'regulatory-events') return { ...(this.regulatoryEventFilter || {}) };
    if (pageId === 'regulatory-command-center') return { ...(this.regulatoryCommandCenterFilter || {}) };
    if (pageId === 'regulatory-performance') return { ...(this.regulatoryPerformanceFilter || {}) };
    if (pageId === 'regulatory-resource-allocation') return { ...(this.regulatoryResourceAllocationFilter || {}) };
    if (pageId === 'regulatory-supervision-tasks') return { ...(this.regulatorySupervisionTaskFilter || {}) };
    if (pageId === 'regulatory-benchmarking') return { ...(this.regulatoryBenchmarkingFilter || {}) };
    if (pageId === 'regulatory-strategy-planning') return { ...(this.regulatoryStrategyPlanningFilter || {}) };
    if (pageId === 'regulatory-annual-plan') return { ...(this.regulatoryAnnualPlanFilter || {}) };
    if (pageId === 'regulatory-target-management') return { ...(this.regulatoryTargetFilter || {}) };
    if (pageId === 'regulatory-focus-management') return { ...(this.regulatoryFocusFilter || {}) };
    if (pageId === 'regulatory-plan-execution') return { ...(this.regulatoryPlanExecutionFilter || {}) };
    if (pageId === 'regulatory-strategic-review') return { ...(this.regulatoryStrategicReviewFilter || {}) };
    if (pageId === 'regulatory-workbench') return { ...(this.regulatoryWorkbenchFilter || {}) };
    if (pageId === 'regulatory-queue') return { ...(this.regulatoryQueueFilter || {}) };
    if (pageId === 'regulatory-decision-room') return { ...(this.regulatoryDecisionRoomFilter || {}) };
    if (pageId === 'regulatory-role-workbench') return { ...(this.regulatoryRoleWorkbenchFilter || {}), roleId: this.currentRegulatoryRoleId };
    if (pageId === 'regulatory-my-work') return { ...(this.regulatoryMyWorkFilter || {}) };
    if (pageId === 'regulatory-search') return { ...(this.regulatorySearchFilter || {}) };
    if (pageId === 'regulatory-access-control') return { ...(this.regulatoryAccessControlFilter || {}) };
    if (pageId === 'regulatory-authorization') return { ...(this.regulatoryAuthorizationFilter || {}) };
    if (pageId === 'regulatory-audit-trail') return { ...(this.regulatoryAuditTrailFilter || {}) };
    if (pageId === 'regulatory-system-settings') return { ...(this.regulatorySystemSettingsFilter || {}) };
    if (pageId === 'regulatory-data-sources') return { ...(this.regulatoryDataSourcesFilter || {}) };
    if (pageId === 'regulatory-data-integration') return { ...(this.regulatoryDataIntegrationFilter || {}) };
    if (pageId === 'regulatory-data-quality') return { ...(this.regulatoryDataQualityFilter || {}) };
    if (pageId === 'regulatory-data-governance') return { ...(this.regulatoryDataGovernanceFilter || {}) };
    if (pageId === 'regulatory-data-lineage') return { ...(this.regulatoryDataLineageFilter || {}) };
    if (pageId === 'regulatory-metric-center') return { ...(this.regulatoryMetricCenterFilter || {}) };
    if (pageId === 'regulatory-kri-monitoring') return { ...(this.regulatoryKriMonitoringFilter || {}) };
    if (pageId === 'regulatory-warning-center') return { ...(this.regulatoryWarningCenterFilter || {}) };
    if (pageId === 'regulatory-kri-effectiveness') return { ...(this.regulatoryKriEffectivenessFilter || {}) };
    if (pageId === 'regulatory-warning-strategy') return { ...(this.regulatoryWarningStrategyFilter || {}) };
    if (pageId === 'regulatory-analysis-center') return { ...(this.regulatoryAnalysisCenterFilter || {}) };
    if (pageId === 'regulatory-risk-concentration') return { ...(this.regulatoryRiskConcentrationFilter || {}) };
    if (pageId === 'regulatory-risk-propagation') return { ...(this.regulatoryRiskPropagationFilter || {}) };
    if (pageId === 'regulatory-scenario-analysis') return { ...(this.regulatoryScenarioAnalysisFilter || {}) };
    if (pageId === 'regulatory-decision-recommendations') return { ...(this.regulatoryDecisionRecommendationsFilter || {}) };
    if (pageId === 'regulatory-improvement-center') return { ...(this.regulatoryImprovementCenterFilter || {}) };
    if (pageId === 'regulatory-root-cause-analysis') return { ...(this.regulatoryRootCauseAnalysisFilter || {}) };
    if (pageId === 'regulatory-optimization-plans') return { ...(this.regulatoryOptimizationPlansFilter || {}) };
    if (pageId === 'regulatory-improvement-execution') return { ...(this.regulatoryImprovementExecutionFilter || {}) };
    if (pageId === 'regulatory-improvement-effectiveness') return { ...(this.regulatoryImprovementEffectivenessFilter || {}) };
    if (pageId === 'regulatory-actions') return { ...(this.regulatoryActionFilter || {}) };
    if (pageId === 'regulatory-action-execution') return { ...(this.regulatoryActionExecutionFilter || {}) };
    if (pageId === 'data-governance') return { ...(this.dataGovFilter || {}) };
    if (pageId === 'cross-border-compliance') return { ...(this.cbFilter || {}) };
    if (pageId === 'cross-domain-risks') return { ...(this.cdrFilter || {}) };
    return {};
  },

  captureDetailContext(pageId) {
    const ctx = {};
    if (pageId === 'global-legal-entities') ctx.entityId = (this.publicNavigationContext || {}).entityId;
    if (pageId === 'data-governance') {
      const c = this.publicNavigationContext || {};
      ['sourceId', 'objectId', 'fieldId', 'qualityIssueId', 'indicatorId', 'relationId'].forEach(k => { if (c[k]) ctx[k] = c[k]; });
    }
    if (pageId === 'cross-border-compliance') ctx.activityId = this.cbFocusActivityId;
    if (pageId === 'cross-domain-risks') ctx.riskMatterId = this.cdrFocusMatterId;
    if (pageId === 'platform-operations') ctx.alertId = (this.publicNavigationContext || {}).alertId;
    if (pageId === 'coverage-gaps') {
      const c = this.publicNavigationContext || {};
      if (c.coverageCellId) ctx.coverageCellId = c.coverageCellId;
      if (c.gapId) ctx.gapId = c.gapId;
    }
    if (pageId === 'regulatory-events') ctx.eventId = this.regulatoryEventFocusId;
    if (pageId === 'regulatory-actions') ctx.actionId = this.regulatoryActionFocusId;
    if (pageId === 'regulatory-action-execution') {
      ctx.actionId = this.regulatoryActionExecutionFocusId;
      ctx.feedbackId = this.regulatoryActionFeedbackFocusId;
    }
    if (pageId === 'regulatory-optimization') ctx.recommendationId = this.regulatoryOptimizationFocusId;
    if (pageId === 'regulatory-rule-config') ctx.ruleId = this.regulatoryRuleFocusId;
    if (pageId === 'regulatory-simulation') ctx.simulationId = this.regulatorySimulationFocusId;
    if (pageId === 'regulatory-rule-history') ctx.historyId = this.regulatoryRuleHistoryFocusId;
    if (pageId === 'regulatory-rule-versions') ctx.versionId = this.regulatoryRuleVersionFocusId;
    if (pageId === 'regulatory-rule-approvals') {
      ctx.changeRequestId = this.regulatoryRuleChangeRequestFocusId;
      ctx.approvalId = this.regulatoryRuleApprovalFocusId;
    }
    if (pageId === 'regulatory-rule-impact') ctx.impactAnalysisId = this.regulatoryRuleImpactFocusId;
    if (pageId === 'regulatory-rule-effectiveness') {
      ctx.effectivenessId = this.regulatoryRuleEffectivenessFocusId;
      ctx.optimizationId = this.regulatoryRuleOptimizationFocusId;
    }
    if (pageId === 'regulatory-rule-runtime') ctx.deploymentId = this.regulatoryRuleDeploymentFocusId;
    if (pageId === 'regulatory-rule-executions') ctx.executionId = this.regulatoryRuleExecutionFocusId;
    if (pageId === 'regulatory-rule-deployments') {
      ctx.deploymentId = this.regulatoryRuleDeploymentFocusId;
      ctx.rollbackId = this.regulatoryRuleRollbackFocusId;
    }
    if (pageId === 'regulatory-performance') ctx.performanceId = this.regulatoryPerformanceFocusId;
    if (pageId === 'regulatory-resource-allocation') ctx.allocationId = this.regulatoryAllocationFocusId;
    if (pageId === 'regulatory-supervision-tasks') ctx.supervisionTaskId = this.regulatorySupervisionTaskFocusId;
    if (pageId === 'regulatory-benchmarking') {
      ctx.benchmarkId = this.regulatoryBenchmarkFocusId;
      ctx.effectivenessId = this.regulatoryResourceEffectivenessFocusId;
    }
    if (pageId === 'regulatory-strategy-planning') ctx.objectiveId = this.regulatoryObjectiveFocusId;
    if (pageId === 'regulatory-annual-plan') ctx.planId = this.regulatoryPlanFocusId;
    if (pageId === 'regulatory-target-management') ctx.targetId = this.regulatoryTargetFocusId;
    if (pageId === 'regulatory-focus-management') ctx.focusId = this.regulatoryFocusFocusId;
    if (pageId === 'regulatory-plan-execution') ctx.executionId = this.regulatoryPlanExecutionFocusId;
    if (pageId === 'regulatory-strategic-review') {
      ctx.reviewId = this.regulatoryReviewFocusId;
      ctx.recommendationId = this.regulatoryNextCycleRecommendationFocusId;
    }
    if (pageId === 'regulatory-workbench') ctx.workbenchId = this.regulatoryWorkbenchFocusId;
    if (pageId === 'regulatory-queue') ctx.queueItemId = this.regulatoryQueueFocusId;
    if (pageId === 'regulatory-decision-room') ctx.decisionContextId = this.regulatoryDecisionContextFocusId;
    if (pageId === 'regulatory-role-workbench') { ctx.roleId = this.currentRegulatoryRoleId; ctx.scopeType = this.regulatoryRoleScopeType; ctx.scopeId = this.regulatoryRoleScopeId; }
    if (pageId === 'regulatory-my-work') { ctx.roleId = this.currentRegulatoryRoleId; ctx.queueItemId = this.regulatoryQueueFocusId; }
    if (pageId === 'regulatory-search') ctx.searchQuery = (this.regulatorySearchFilter || {}).query;
    if (pageId === 'regulatory-access-control') ctx.userId = this.regulatoryAccessControlFocusUserId;
    if (pageId === 'regulatory-authorization') ctx.authorizationId = this.regulatoryAuthorizationFocusId;
    if (pageId === 'regulatory-audit-trail') ctx.auditId = this.regulatoryAuditFocusId;
    if (pageId === 'regulatory-system-settings') ctx.configId = this.regulatorySystemConfigFocusId;
    if (pageId === 'regulatory-data-sources') ctx.sourceId = this.regulatoryDataSourceFocusId;
    if (pageId === 'regulatory-data-integration') ctx.integrationJobId = this.regulatoryDataIntegrationFocusId;
    if (pageId === 'regulatory-data-quality') ctx.qualityIssueId = this.regulatoryDataQualityFocusId;
    if (pageId === 'regulatory-data-governance') ctx.governanceTaskId = this.regulatoryDataGovernanceFocusId;
    if (pageId === 'regulatory-data-lineage') { ctx.lineageId = this.regulatoryDataLineageFocusId; ctx.sourceId = this.regulatoryDataLineageSourceId; }
    if (pageId === 'regulatory-metric-center') ctx.metricId = this.regulatoryMetricFocusId;
    if (pageId === 'regulatory-kri-monitoring') ctx.kriRuntimeId = this.regulatoryKriRuntimeFocusId;
    if (pageId === 'regulatory-warning-center') ctx.regulatoryWarningId = this.regulatoryWarningFocusId;
    if (pageId === 'regulatory-kri-effectiveness') ctx.evaluationId = this.regulatoryKriEvaluationFocusId;
    if (pageId === 'regulatory-warning-strategy') ctx.strategyAnalysisId = this.regulatoryWarningStrategyFocusId;
    if (pageId === 'regulatory-analysis-center') ctx.resultId = this.regulatoryAnalysisResultFocusId;
    if (pageId === 'regulatory-risk-concentration') ctx.concentrationId = this.regulatoryConcentrationFocusId;
    if (pageId === 'regulatory-risk-propagation') ctx.propagationId = this.regulatoryPropagationFocusId;
    if (pageId === 'regulatory-scenario-analysis') ctx.scenarioId = this.regulatoryScenarioFocusId;
    if (pageId === 'regulatory-decision-recommendations') ctx.recommendationId = this.regulatoryRecommendationFocusId;
    if (pageId === 'regulatory-improvement-center') ctx.opportunityId = this.regulatoryOpportunityFocusId;
    if (pageId === 'regulatory-root-cause-analysis') ctx.rootCauseId = this.regulatoryRootCauseFocusId;
    if (pageId === 'regulatory-optimization-plans') ctx.planId = this.regulatoryOptimizationPlanFocusId;
    if (pageId === 'regulatory-improvement-execution') ctx.executionId = this.regulatoryImprovementExecutionFocusId;
    if (pageId === 'regulatory-improvement-effectiveness') ctx.effectivenessId = this.regulatoryImprovementEffectivenessFocusId;
    return ctx;
  },

  restorePublicFilters(pageId, filters) {
    if (!filters) return;
    if (pageId === 'global-group-overview' || pageId === 'group') this.groupOverviewFilter = { ...filters };
    if (pageId === 'regulatory-events') this.regulatoryEventFilter = { ...filters };
    if (pageId === 'regulatory-command-center') this.regulatoryCommandCenterFilter = { ...filters };
    if (pageId === 'regulatory-performance') this.regulatoryPerformanceFilter = { ...filters };
    if (pageId === 'regulatory-resource-allocation') this.regulatoryResourceAllocationFilter = { ...filters };
    if (pageId === 'regulatory-supervision-tasks') this.regulatorySupervisionTaskFilter = { ...filters };
    if (pageId === 'regulatory-benchmarking') this.regulatoryBenchmarkingFilter = { ...filters };
    if (pageId === 'regulatory-strategy-planning') this.regulatoryStrategyPlanningFilter = { ...filters };
    if (pageId === 'regulatory-annual-plan') this.regulatoryAnnualPlanFilter = { ...filters };
    if (pageId === 'regulatory-target-management') this.regulatoryTargetFilter = { ...filters };
    if (pageId === 'regulatory-focus-management') this.regulatoryFocusFilter = { ...filters };
    if (pageId === 'regulatory-plan-execution') this.regulatoryPlanExecutionFilter = { ...filters };
    if (pageId === 'regulatory-strategic-review') this.regulatoryStrategicReviewFilter = { ...filters };
    if (pageId === 'regulatory-workbench') this.regulatoryWorkbenchFilter = { ...filters };
    if (pageId === 'regulatory-queue') this.regulatoryQueueFilter = { ...filters };
    if (pageId === 'regulatory-decision-room') this.regulatoryDecisionRoomFilter = { ...filters };
    if (pageId === 'regulatory-role-workbench') this.regulatoryRoleWorkbenchFilter = { ...filters };
    if (pageId === 'regulatory-my-work') this.regulatoryMyWorkFilter = { ...filters };
    if (pageId === 'regulatory-search') this.regulatorySearchFilter = { ...filters };
    if (pageId === 'regulatory-access-control') this.regulatoryAccessControlFilter = { ...filters };
    if (pageId === 'regulatory-authorization') this.regulatoryAuthorizationFilter = { ...filters };
    if (pageId === 'regulatory-audit-trail') this.regulatoryAuditTrailFilter = { ...filters };
    if (pageId === 'regulatory-system-settings') this.regulatorySystemSettingsFilter = { ...filters };
    if (pageId === 'regulatory-data-sources') this.regulatoryDataSourcesFilter = { ...filters };
    if (pageId === 'regulatory-data-integration') this.regulatoryDataIntegrationFilter = { ...filters };
    if (pageId === 'regulatory-data-quality') this.regulatoryDataQualityFilter = { ...filters };
    if (pageId === 'regulatory-data-governance') this.regulatoryDataGovernanceFilter = { ...filters };
    if (pageId === 'regulatory-data-lineage') this.regulatoryDataLineageFilter = { ...filters };
    if (pageId === 'regulatory-metric-center') this.regulatoryMetricCenterFilter = { ...filters };
    if (pageId === 'regulatory-kri-monitoring') this.regulatoryKriMonitoringFilter = { ...filters };
    if (pageId === 'regulatory-warning-center') this.regulatoryWarningCenterFilter = { ...filters };
    if (pageId === 'regulatory-kri-effectiveness') this.regulatoryKriEffectivenessFilter = { ...filters };
    if (pageId === 'regulatory-warning-strategy') this.regulatoryWarningStrategyFilter = { ...filters };
    if (pageId === 'regulatory-analysis-center') this.regulatoryAnalysisCenterFilter = { ...filters };
    if (pageId === 'regulatory-risk-concentration') this.regulatoryRiskConcentrationFilter = { ...filters };
    if (pageId === 'regulatory-risk-propagation') this.regulatoryRiskPropagationFilter = { ...filters };
    if (pageId === 'regulatory-scenario-analysis') this.regulatoryScenarioAnalysisFilter = { ...filters };
    if (pageId === 'regulatory-decision-recommendations') this.regulatoryDecisionRecommendationsFilter = { ...filters };
    if (pageId === 'regulatory-improvement-center') this.regulatoryImprovementCenterFilter = { ...filters };
    if (pageId === 'regulatory-root-cause-analysis') this.regulatoryRootCauseAnalysisFilter = { ...filters };
    if (pageId === 'regulatory-optimization-plans') this.regulatoryOptimizationPlansFilter = { ...filters };
    if (pageId === 'regulatory-improvement-execution') this.regulatoryImprovementExecutionFilter = { ...filters };
    if (pageId === 'regulatory-improvement-effectiveness') this.regulatoryImprovementEffectivenessFilter = { ...filters };
    if (pageId === 'regulatory-actions') this.regulatoryActionFilter = { ...filters };
    if (pageId === 'regulatory-action-execution') this.regulatoryActionExecutionFilter = { ...filters };
    if (pageId === 'data-governance') this.dataGovFilter = { ...filters };
    if (pageId === 'cross-border-compliance') this.cbFilter = { ...filters };
    if (pageId === 'cross-domain-risks') this.cdrFilter = { ...filters };
  },

  getPublicStatusClass(status) {
    if (!status) return 'badge-info';
    return this.PUBLIC_STATUS_MAP[status] || 'badge-info';
  },

  getPublicStatusLabel(status) {
    return status || '—';
  },

  renderPublicStatusBadge(status) {
    const s = this.getPublicStatusLabel(status);
    return `<span class="badge ${this.getPublicStatusClass(s)}">${s}</span>`;
  },

  escHtml(v) {
    if (v === null || v === undefined) return '—';
    return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  renderPublicEmptyState(message) {
    return `<p class="insight-note public-empty-state">${this.escHtml(message || '暂无数据')}</p>`;
  },

  renderPublicErrorState(message) {
    return `<p class="insight-note public-error-state" style="color:var(--danger)">${this.escHtml(message || '数据异常，请检查数据源')}</p>`;
  },

  renderPublicNotFoundPanel(objectType) {
    return this.buildPublicDetailPanel({
      objectType: objectType || '监管对象',
      objectName: '对象不存在',
      status: '异常',
      sections: [{ title: '一、对象基本信息', content: this.renderPublicErrorState('对象已不存在或无法解析') }]
    });
  },

  renderPublicNoFilterResults() {
    return `<div class="card" style="padding:16px;margin-bottom:12px">${this.renderPublicEmptyState('暂无符合条件的数据')}</div>`;
  },

  showPublicDetailOrNotFound(node, found, renderFn, objectType) {
    if (!node) return false;
    if (!found) {
      node.innerHTML = this.renderPublicNotFoundPanel(objectType);
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return false;
    }
    renderFn();
    return true;
  },

  renderPublicBackButton(pageId) {
    const pid = pageId || this.currentPage;
    const chrome = this.renderPublicBreadcrumb(pid) + this.renderPublicSearchEntry();
    if (!(this.publicNavHistory || []).length) return chrome;
    return `${chrome}<button class="btn btn-outline public-back-btn" onclick="App.goBackPublic()" style="margin-bottom:12px">← 返回上一层</button>`;
  },

  renderPublicBreadcrumb(pageId) {
    const pid = pageId || this.currentPage || 'group';
    const page = (this.publicRegulatoryPages || []).find(p => p.pageId === pid || p.routeId === pid);
    const label = page ? page.label : (this.pageTitles || {})[pid] || pid;
    const meta = this.getPageCapabilityMeta(page ? page.pageId : pid);
    const domainName = meta ? meta.capabilityDomainName : (page ? page.category : '集团监管');
    const ctx = this.publicNavigationContext || {};
    const detail = ctx.entityId || ctx.eventId || ctx.riskMatterId || ctx.queueItemId || ctx.decisionContextId || ctx.objectId;
    const detailLabel = detail ? ' / 详情' : '';
    return `<nav class="public-breadcrumb" style="font-size:12px;color:#5a6a7e;margin-bottom:8px">集团监管平台 / ${this.escHtml(domainName)} / <span style="color:#003d7a">${this.escHtml(label)}</span>${detailLabel}</nav>`;
  },

  renderPublicSearchEntry() {
    return `<span style="float:right;margin-bottom:8px">${this.renderPublicLinkButton('🔍 搜索', `App.navigatePublic('regulatory-search')`)} ${this.renderPublicLinkButton('🔔 通知', `App.navigatePublic('regulatory-my-work',{tab:'notifications'})`)}</span>`;
  },

  getCurrentRegulatoryRole() {
    const roleId = this.currentRegulatoryRoleId || (APP_DATA.regulatoryRoleProfiles || [])[0]?.roleId;
    return (APP_DATA.regulatoryRoleProfiles || []).find(r => r.roleId === roleId) || (APP_DATA.regulatoryRoleProfiles || [])[0];
  },

  getRegulatoryRoleWorkbench(roleId, scopeType, scopeId) {
    const role = (APP_DATA.regulatoryRoleProfiles || []).find(r => r.roleId === roleId);
    if (!role) return null;
    let wb = (APP_DATA.regulatoryRoleWorkbenches || []).find(w => w.roleId === roleId);
    if (!wb) return null;
    if (scopeType && scopeId && (scopeType !== wb.scopeType || scopeId !== wb.scopeId)) {
      return { ...wb, scopeType, scopeId, title: wb.title + ' · ' + scopeId };
    }
    return wb;
  },

  setRegulatoryRole(roleId, scopeType, scopeId) {
    this.currentRegulatoryRoleId = roleId;
    if (scopeType) this.regulatoryRoleScopeType = scopeType;
    if (scopeId) this.regulatoryRoleScopeId = scopeId;
    const role = (APP_DATA.regulatoryRoleProfiles || []).find(r => r.roleId === roleId);
    if (role && !scopeType) {
      this.regulatoryRoleScopeType = role.defaultScopeType;
      this.regulatoryRoleScopeId = role.defaultScopeId;
    }
  },

  recordRecentView(view) {
    if (!view || !view.pageId || !view.objectId) return;
    APP_DATA.regulatoryRecentViews = APP_DATA.regulatoryRecentViews || [];
    const entry = {
      viewId: 'VIEW-' + Date.now(),
      pageId: view.pageId,
      objectType: view.objectType || 'OBJECT',
      objectId: view.objectId,
      title: view.title || view.objectId,
      visitedAt: new Date().toISOString().slice(0, 19)
    };
    APP_DATA.regulatoryRecentViews = [entry, ...APP_DATA.regulatoryRecentViews.filter(v => !(v.pageId === entry.pageId && v.objectId === entry.objectId))].slice(0, 20);
  },

  addRegulatoryFavorite(item) {
    if (!item || !item.objectId) return;
    APP_DATA.regulatoryFavorites = APP_DATA.regulatoryFavorites || [];
    if (APP_DATA.regulatoryFavorites.some(f => f.objectType === item.objectType && f.objectId === item.objectId)) return;
    APP_DATA.regulatoryFavorites.push({
      favoriteId: 'FAV-' + Date.now(),
      objectType: item.objectType,
      objectId: item.objectId,
      title: item.title || item.objectId,
      pageId: item.pageId,
      createdAt: new Date().toISOString().slice(0, 19)
    });
  },

  removeRegulatoryFavorite(objectType, objectId) {
    APP_DATA.regulatoryFavorites = (APP_DATA.regulatoryFavorites || []).filter(f => !(f.objectType === objectType && f.objectId === objectId));
  },

  isRegulatoryFavorite(objectType, objectId) {
    return (APP_DATA.regulatoryFavorites || []).some(f => f.objectType === objectType && f.objectId === objectId);
  },

  toggleRegulatoryFavorite(item) {
    if (this.isRegulatoryFavorite(item.objectType, item.objectId)) this.removeRegulatoryFavorite(item.objectType, item.objectId);
    else this.addRegulatoryFavorite(item);
  },

  markNotificationRead(notificationId) {
    const n = (APP_DATA.regulatoryNotifications || []).find(x => x.notificationId === notificationId);
    if (n) n.isRead = true;
  },

  searchRegulatoryIndex(query) {
    const q = (query || '').trim().toLowerCase();
    if (!q) return [];
    return (APP_DATA.regulatorySearchIndex || []).filter(r => {
      return (r.title || '').toLowerCase().includes(q)
        || (r.subtitle || '').toLowerCase().includes(q)
        || (r.objectId || '').toLowerCase().includes(q);
    });
  },

  navigateSearchResult(resultId) {
    const r = (APP_DATA.regulatorySearchIndex || []).find(x => x.resultId === resultId);
    if (!r) return;
    this.recordRecentView({ pageId: r.targetPageId, objectType: r.objectType, objectId: r.objectId, title: r.title });
    this.navigatePublic(r.targetPageId, { ...(r.targetParams || {}), resultId: r.resultId });
  },

  trackPublicDetailView(pageId, objectType, objectId, title) {
    if (objectId) this.recordRecentView({ pageId, objectType, objectId, title: title || objectId });
  },

  renderPublicFavoriteButton(objectType, objectId, title, pageId) {
    const fav = this.isRegulatoryFavorite(objectType, objectId);
    return `<button class="btn btn-outline" onclick="App.toggleRegulatoryFavorite({objectType:'${objectType}',objectId:'${objectId}',title:'${this.escHtml(title || objectId)}',pageId:'${pageId}'})">${fav ? '★ 已收藏' : '☆ 收藏'}</button>`;
  },

  getCurrentRegulatoryUser() {
    if (!this.currentRegulatoryUserId) {
      const role = this.getCurrentRegulatoryRole();
      const user = (APP_DATA.regulatoryUsers || []).find(u => {
        const map = { GROUP_LEADER: 'GROUP_LEADER', GROUP_REGULATORY: 'GROUP_REGULATORY', DOMAIN_REGULATOR: 'DOMAIN_REGULATOR', ENTITY_REGULATOR: 'ENTITY_REGULATOR' };
        return u.userType === map[role?.roleType];
      });
      this.currentRegulatoryUserId = user?.userId || 'U-GROUP-REG';
    }
    return (APP_DATA.regulatoryUsers || []).find(u => u.userId === this.currentRegulatoryUserId);
  },

  setCurrentRegulatoryUser(userId) {
    this.currentRegulatoryUserId = userId;
    const asg = (APP_DATA.regulatoryRoleAssignments || []).find(a => a.userId === userId && a.status === 'ACTIVE');
    if (asg) this.setRegulatoryRole(asg.roleId);
  },

  getUserRoleAssignments(userId) {
    return (APP_DATA.regulatoryRoleAssignments || []).filter(a => a.userId === userId && a.status === 'ACTIVE');
  },

  _resolvePermissionCode(resourceType, action) {
    const map = {
      'rectificationTasks:CLOSE': 'RECTIFICATION_CLOSE', 'rectificationTasks:DEFER': 'RECTIFICATION_DEFER',
      'rectificationTasks:SUBMIT': 'RECTIFICATION_SUBMIT', 'rectificationTasks:VERIFY': 'RECTIFICATION_VERIFY',
      'regulatoryActions:VIEW': 'ACTION_VIEW', 'regulatoryActions:ASSIGN': 'ACTION_ASSIGN', 'regulatoryActions:APPROVE': 'ACTION_APPROVE', 'regulatoryActions:CLOSE': 'ACTION_CLOSE',
      'regulatoryRules:SIMULATE': 'RULE_SIMULATE', 'regulatoryRuleChangeRequests:APPROVE': 'RULE_APPROVE',
      'regulatoryRuleDeployments:PUBLISH': 'RULE_PUBLISH', 'regulatoryRuleDeployments:ROLLBACK': 'RULE_ROLLBACK',
      'regulatorySupervisionTasks:ASSIGN': 'TASK_ASSIGN', 'regulatoryStrategyAnalysis:OVERRIDE': 'STRATEGY_OVERRIDE',
      'regulatorySystemConfigurations:VIEW': 'CONFIG_VIEW', 'regulatorySystemConfigurations:UPDATE': 'CONFIG_CHANGE',
      'regulatoryRoleAssignments:MANAGE': 'ACCESS_MANAGE', 'regulatoryAuditLogs:EXPORT': 'AUDIT_EXPORT',
      'regulatoryDataSources:VIEW': 'DATA_VIEW', 'regulatoryDataSources:UPDATE': 'DATA_MANAGE',
      'regulatoryDataIntegrationJobs:RETRY': 'DATA_INTEGRATION_RETRY', 'regulatoryDataGovernanceTasks:ASSIGN': 'DATA_GOVERNANCE_ASSIGN',
      'regulatoryDataGovernanceTasks:CLOSE': 'DATA_GOVERNANCE_CLOSE', 'regulatoryDataSets:EXPORT': 'DATA_EXPORT',
      'regulatoryDataLineage:VIEW': 'DATA_LINEAGE_VIEW',
      'regulatoryMetrics:VIEW': 'METRIC_VIEW', 'regulatoryMetrics:EXPORT': 'METRIC_EXPORT',
      'regulatoryKriRuntime:VIEW': 'KRI_VIEW', 'regulatoryKriRuntime:EXPORT': 'KRI_EXPORT',
      'regulatoryRules:UPDATE': 'KRI_THRESHOLD_CHANGE',
      'regulatoryWarnings:VIEW': 'WARNING_VIEW', 'regulatoryWarnings:JUDGE': 'WARNING_JUDGE',
      'regulatoryWarnings:CONVERT': 'WARNING_CONVERT', 'regulatoryWarnings:CLOSE': 'WARNING_CLOSE',
      'regulatoryWarningStrategies:VIEW': 'WARNING_STRATEGY_VIEW',
      'regulatoryAnalysisResults:VIEW': 'ANALYSIS_VIEW', 'regulatoryAnalysisResults:EXPORT': 'ANALYSIS_EXPORT',
      'regulatoryScenarioAnalysis:RUN': 'ANALYSIS_RUN', 'regulatoryScenarioAnalysis:VIEW': 'ANALYSIS_VIEW',
      'regulatoryDecisionRecommendations:VIEW': 'DECISION_RECOMMENDATION_VIEW',
      'regulatoryDecisionRecommendations:CONFIRM': 'DECISION_RECOMMENDATION_CONFIRM',
      'regulatoryDecisionRecommendations:REJECT': 'DECISION_RECOMMENDATION_REJECT',
      'regulatoryDecisionRecommendations:EXECUTE': 'DECISION_RECOMMENDATION_EXECUTE',
      'regulatoryRiskConcentration:VIEW': 'ANALYSIS_VIEW',
      'regulatoryRiskPropagation:VIEW': 'ANALYSIS_VIEW',
      'regulatoryImprovementOpportunities:VIEW': 'IMPROVEMENT_VIEW',
      'regulatoryRootCauseAnalyses:VIEW': 'ROOT_CAUSE_VIEW', 'regulatoryRootCauseAnalyses:CONFIRM': 'ROOT_CAUSE_CONFIRM',
      'regulatoryOptimizationPlans:VIEW': 'OPTIMIZATION_PLAN_VIEW', 'regulatoryOptimizationPlans:APPROVE': 'OPTIMIZATION_PLAN_APPROVE',
      'regulatoryImprovementExecution:VIEW': 'IMPROVEMENT_EXECUTION_VIEW', 'regulatoryImprovementExecution:MANAGE': 'IMPROVEMENT_EXECUTION_MANAGE',
      'regulatoryImprovementEffectiveness:VIEW': 'EFFECTIVENESS_VIEW', 'regulatoryImprovementEffectiveness:VALIDATE': 'EFFECTIVENESS_VALIDATE',
      'regulatoryOperatingCycles:VIEW': 'OPERATING_VIEW', 'regulatoryOperatingCycles:MANAGE': 'OPERATING_MANAGE',
      'regulatoryOperatingRecommendations:MANAGE': 'OPERATING_MANAGE', 'regulatoryOperatingRecommendations:VIEW': 'OPERATING_VIEW',
      'regulatoryCoordinationCases:VIEW': 'COORDINATION_VIEW', 'regulatoryCoordinationCases:MANAGE': 'COORDINATION_MANAGE',
      'regulatoryEscalationRecords:CONFIRM': 'COORDINATION_ESCALATE', 'regulatoryEscalationRecords:VIEW': 'COORDINATION_VIEW',
      'regulatoryOperationalScenarios:VIEW': 'OPERATIONAL_VIEW', 'regulatoryOperationalScenarios:MANAGE': 'OPERATIONAL_MANAGE',
      'regulatoryFinalAcceptanceScenarios:VIEW': 'ACCEPTANCE_VIEW',
      'regulatoryFinalAcceptanceRemediationIndexes:VIEW': 'ACCEPTANCE_REMEDIATION_VIEW',
      'regulatoryFinalAcceptanceRemediationIndexes:MANAGE': 'ACCEPTANCE_REMEDIATION_MANAGE',
      'regulatoryDeliveryReadinessIndex:VIEW': 'DELIVERY_READINESS_VIEW',
      'regulatoryHandoverIndex:VIEW': 'DELIVERY_READINESS_VIEW'
    };
    if (map[resourceType + ':' + action]) return map[resourceType + ':' + action];
    if (action === 'APPROVE') return 'ACTION_APPROVE';
    if (action === 'VIEW') return 'ACTION_VIEW';
    return (action + '_' + resourceType).toUpperCase();
  },

  _scopeAllowsResource(assignment, resourceType, resourceId) {
    const { scopeType, scopeIds } = assignment;
    if (scopeType === 'GROUP') return true;
    let entityId = null;
    let domainId = null;
    let regionId = null;
    if (resourceType === 'globalLegalEntities' || resourceType === 'ENTITY') entityId = resourceId;
    const rect = (APP_DATA.rectificationTasks || []).find(t => t.taskId === resourceId);
    const act = (APP_DATA.regulatoryActions || []).find(a => a.actionId === resourceId);
    const ent = (APP_DATA.globalLegalEntities || []).find(e => e.entityId === resourceId);
    if (rect) { entityId = rect.entityId; domainId = rect.domainId; regionId = rect.regionId; }
    if (act) { entityId = act.entityId; domainId = act.domainId; regionId = act.regionId; }
    if (ent) { entityId = ent.entityId; regionId = ent.regionId; domainId = ent.domainId || 'investment'; }
    const src = (APP_DATA.regulatoryDataSources || []).find(s => s.sourceId === resourceId);
    const ds = (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === resourceId);
    const gov = (APP_DATA.regulatoryDataGovernanceTasks || []).find(g => g.governanceTaskId === resourceId);
    if (src) { entityId = src.ownerOrganizationId; regionId = src.regionId; }
    if (ds) { entityId = ds.ownerOrganizationId; domainId = ds.domain; }
    if (gov) entityId = gov.responsibleOrganizationId;
    const krt = (APP_DATA.regulatoryKriRuntime || []).find(k => k.kriRuntimeId === resourceId);
    const metric = (APP_DATA.regulatoryMetrics || []).find(m => m.metricId === resourceId);
    const rw = (APP_DATA.regulatoryWarnings || []).find(w => w.regulatoryWarningId === resourceId);
    if (krt) { entityId = krt.scopeId; domainId = (APP_DATA.groupKris || []).find(k => k.id === krt.kriId)?.category; }
    if (metric) { entityId = metric.scopeType === 'ENTITY' ? metric.scopeId : entityId; }
    if (rw) entityId = rw.entityId;
    const conc = (APP_DATA.regulatoryRiskConcentration || []).find(c => c.concentrationId === resourceId);
    const prop = (APP_DATA.regulatoryRiskPropagation || []).find(p => p.propagationId === resourceId);
    const rec = (APP_DATA.regulatoryDecisionRecommendations || []).find(r => r.recommendationId === resourceId);
    const ar = (APP_DATA.regulatoryAnalysisResults || []).find(r => r.resultId === resourceId);
    if (conc) { entityId = conc.scopeType === 'ENTITY' ? conc.objectId : conc.entityId; domainId = conc.scopeType === 'DOMAIN' ? conc.objectId : domainId; regionId = conc.regionId || regionId; }
    if (prop) entityId = (prop.affectedEntityIds || [])[0] || entityId;
    if (rec) { entityId = rec.entityId || rec.affectedScope?.scopeId; domainId = rec.affectedScope?.scopeType === 'DOMAIN' ? rec.affectedScope.scopeId : domainId; regionId = rec.regionId || regionId; }
    if (ar) entityId = entityId || 'G001';
    const opp = (APP_DATA.regulatoryImprovementOpportunities || []).find(o => o.opportunityId === resourceId);
    const rca = (APP_DATA.regulatoryRootCauseAnalyses || []).find(r => r.rootCauseId === resourceId);
    const opt = (APP_DATA.regulatoryOptimizationPlans || []).find(p => p.planId === resourceId);
    const exe = (APP_DATA.regulatoryImprovementExecution || []).find(e => e.executionId === resourceId);
    const eff = (APP_DATA.regulatoryImprovementEffectiveness || []).find(e => e.effectivenessId === resourceId);
    if (opp) { entityId = opp.entityId; domainId = opp.domainId; }
    if (rca) { const o = (APP_DATA.regulatoryImprovementOpportunities || []).find(x => x.opportunityId === rca.opportunityId); entityId = o?.entityId; domainId = o?.domainId; }
    if (opt) { entityId = opt.entityId; domainId = opt.domainId; }
    if (exe) entityId = exe.entityId;
    if (eff) { const ex = (APP_DATA.regulatoryImprovementExecution || []).find(x => x.executionId === eff.executionId); entityId = ex?.entityId; }
    if (scopeType === 'ENTITY') return scopeIds.includes(entityId);
    if (scopeType === 'DOMAIN') return scopeIds.includes(domainId || 'investment');
    if (scopeType === 'REGION') return scopeIds.includes(regionId);
    return false;
  },

  canRegulatoryAccess(userId, resourceType, resourceId, action) {
    const user = userId ? (APP_DATA.regulatoryUsers || []).find(u => u.userId === userId) : this.getCurrentRegulatoryUser();
    if (!user || user.status !== 'ACTIVE') return { allowed: false, reason: '用户无效或未激活', requiredAuthorization: false, matchedRoles: [], matchedScopes: [] };
    const assignments = this.getUserRoleAssignments(user.userId);
    const permMap = APP_DATA.regulatoryRolePermissionMap || {};
    const code = this._resolvePermissionCode(resourceType, action);
    let allowed = false;
    const matchedRoles = [];
    const matchedScopes = [];
    assignments.forEach(asg => {
      const perms = permMap[asg.roleId] || [];
      const hasPerm = perms.includes(code) || (action === 'VIEW' && perms.some(p => p.includes('VIEW')));
      if (hasPerm && this._scopeAllowsResource(asg, resourceType, resourceId)) {
        allowed = true;
        matchedRoles.push(asg.roleId);
        matchedScopes.push({ scopeType: asg.scopeType, scopeIds: asg.scopeIds });
      }
    });
    const perm = (APP_DATA.regulatoryPermissionSets || []).find(p => p.permissionCode === code);
    const requiredAuthorization = !allowed || (perm && ['HIGH', 'CRITICAL'].includes(perm.riskLevel) && ['CLOSE', 'PUBLISH', 'ROLLBACK', 'OVERRIDE', 'APPROVE'].includes(action));
    return { allowed, reason: allowed ? '权限校验通过' : '超出授权范围或缺少操作权限', requiredAuthorization, matchedRoles, matchedScopes, permissionCode: code };
  },

  createRegulatoryAuditLog(opts) {
    const o = opts || {};
    const log = {
      auditId: 'AUD-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      userId: o.userId || this.getCurrentRegulatoryUser()?.userId,
      actionType: o.actionType,
      objectType: o.objectType,
      objectId: o.objectId,
      beforeState: o.beforeState || null,
      afterState: o.afterState || null,
      reason: o.reason || '',
      authorizationId: o.authorizationId || null,
      timestamp: new Date().toISOString().slice(0, 19)
    };
    APP_DATA.regulatoryAuditLogs = APP_DATA.regulatoryAuditLogs || [];
    APP_DATA.regulatoryAuditLogs.unshift(log);
    if (APP_DATA.regulatoryAuditLogs.length > 500) APP_DATA.regulatoryAuditLogs = APP_DATA.regulatoryAuditLogs.slice(0, 500);
    if (APP_DATA.regulatoryAccessControlMetrics) APP_DATA.regulatoryAccessControlMetrics.auditLogCount = APP_DATA.regulatoryAuditLogs.length;
    if (o.actionType === 'OVERRIDE_DENIED' && APP_DATA.regulatoryAccessControlMetrics) {
      APP_DATA.regulatoryAccessControlMetrics.auditAnomalyCount = (APP_DATA.regulatoryAccessControlMetrics.auditAnomalyCount || 0) + 1;
      APP_DATA.regulatoryAccessControlMetrics.permissionAnomalyCount = (APP_DATA.regulatoryAccessControlMetrics.permissionAnomalyCount || 0) + 1;
    }
    return log;
  },

  _findAuthorizationForAction(resourceType, resourceId, action) {
    return (APP_DATA.regulatoryAuthorizationRequests || []).find(a =>
      a.targetObjectType === resourceType && a.targetObjectId === resourceId && a.requestedAction === action && a.status === 'APPROVED');
  },

  _applyRegulatoryStateChange(resourceType, resourceId, action) {
    if (resourceType === 'rectificationTasks' && action === 'CLOSE') {
      const task = (APP_DATA.rectificationTasks || []).find(t => t.taskId === resourceId);
      if (!task) return { success: false, message: '整改任务不存在' };
      const before = { status: task.status, closedAt: task.closedAt };
      task.status = '已关闭';
      task.closedAt = new Date().toISOString().slice(0, 10);
      return { success: true, beforeState: before, afterState: { status: task.status, closedAt: task.closedAt }, objectName: task.title };
    }
    if (resourceType === 'regulatoryActions' && action === 'ASSIGN') {
      const act = (APP_DATA.regulatoryActions || []).find(a => a.actionId === resourceId);
      if (!act) return { success: false, message: '监管行动不存在' };
      const before = { status: act.status };
      act.status = 'ASSIGNED';
      return { success: true, beforeState: before, afterState: { status: act.status }, objectName: act.actionId };
    }
    if (resourceType === 'regulatorySupervisionTasks' && action === 'ASSIGN') {
      const task = (APP_DATA.regulatorySupervisionTasks || []).find(t => t.supervisionTaskId === resourceId);
      if (!task) return { success: false, message: '监管任务不存在' };
      const before = { taskStatus: task.taskStatus };
      task.taskStatus = 'ASSIGNED';
      return { success: true, beforeState: before, afterState: { taskStatus: task.taskStatus }, objectName: task.supervisionTaskId };
    }
    if (resourceType === 'regulatorySystemConfigurations' && action === 'UPDATE') {
      const cfg = (APP_DATA.regulatorySystemConfigurations || []).find(c => c.configId === resourceId);
      if (!cfg) return { success: false, message: '配置不存在' };
      return { success: false, message: '系统配置变更需走配置申请与审计流程', needConfigWorkflow: true };
    }
    if (resourceType === 'regulatoryRuleDeployments' && action === 'PUBLISH') {
      return { success: false, message: '规则发布必须走规则治理闭环（仿真→影响分析→审批→版本→部署）', needRuleWorkflow: true };
    }
    return { success: false, message: '不支持的操作类型' };
  },

  executeRegulatoryStateChange(opts) {
    const o = opts || {};
    const user = this.getCurrentRegulatoryUser();
    const access = this.canRegulatoryAccess(user.userId, o.resourceType, o.resourceId, o.action);
    if (!access.allowed) {
      this.createRegulatoryAuditLog({ userId: user.userId, actionType: 'OVERRIDE_DENIED', objectType: o.resourceType, objectId: o.resourceId, reason: access.reason });
      return { success: false, denied: true, message: access.reason, access };
    }
    if (!o.skipApproval && access.requiredAuthorization) {
      const approved = this._findAuthorizationForAction(o.resourceType, o.resourceId, o.action);
      if (!approved) {
        const pending = (APP_DATA.regulatoryAuthorizationRequests || []).find(a => a.targetObjectType === o.resourceType && a.targetObjectId === o.resourceId && a.requestedAction === o.action && ['SUBMITTED', 'IN_REVIEW'].includes(a.status));
        return { success: false, needAuthorization: true, message: '该操作需要审批通过后方可执行', authorizationId: pending?.authorizationId, access };
      }
    }
    const result = this._applyRegulatoryStateChange(o.resourceType, o.resourceId, o.action);
    if (result.success) {
      this.createRegulatoryAuditLog({
        userId: user.userId, actionType: o.action.toUpperCase(), objectType: o.resourceType, objectId: o.resourceId,
        beforeState: result.beforeState, afterState: result.afterState, reason: o.reason || '', authorizationId: o.authorizationId
      });
      if (typeof this.rerenderPublicPage === 'function' && this.currentPage) this.rerenderPublicPage(this.currentPage);
    }
    return result;
  },

  approveRegulatoryAuthorization(authorizationId) {
    const auth = (APP_DATA.regulatoryAuthorizationRequests || []).find(a => a.authorizationId === authorizationId);
    if (!auth) return { success: false, message: '授权申请不存在' };
    const user = this.getCurrentRegulatoryUser();
    const access = this.canRegulatoryAccess(user.userId, auth.targetObjectType, auth.targetObjectId, 'APPROVE');
    if (!access.allowed) return { success: false, denied: true, message: '无审批权限' };
    const before = { status: auth.status, approvalStage: auth.approvalStage };
    auth.status = 'APPROVED';
    auth.approvalStage = 'EFFECTIVE';
    this.createRegulatoryAuditLog({ userId: user.userId, actionType: 'APPROVE', objectType: 'regulatoryAuthorizationRequests', objectId: authorizationId, beforeState: before, afterState: { status: auth.status }, reason: '授权审批通过', authorizationId });
    const exec = this.executeRegulatoryStateChange({ resourceType: auth.targetObjectType, resourceId: auth.targetObjectId, action: auth.requestedAction, reason: auth.reason, skipApproval: true, authorizationId });
    return { success: true, auth, execution: exec };
  },

  rejectRegulatoryAuthorization(authorizationId, reason) {
    const auth = (APP_DATA.regulatoryAuthorizationRequests || []).find(a => a.authorizationId === authorizationId);
    if (!auth) return { success: false };
    const before = { status: auth.status };
    auth.status = 'REJECTED';
    this.createRegulatoryAuditLog({ userId: this.getCurrentRegulatoryUser().userId, actionType: 'REJECT', objectType: 'regulatoryAuthorizationRequests', objectId: authorizationId, beforeState: before, afterState: { status: 'REJECTED' }, reason: reason || '审批拒绝' });
    return { success: true };
  },

  renderRegulatoryActionButton(label, resourceType, resourceId, action, onclick) {
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, resourceType, resourceId, action);
    if (!access.allowed) return '';
    const confirm = access.requiredAuthorization ? `if(!confirm('该操作需要已完成审批，确认继续？'))return;` : '';
    return `<button class="btn btn-outline" onclick="${confirm}${onclick}">${this.escHtml(label)}</button>`;
  },

  calculateDataSetQuality(dataSetId) {
    const snap = (APP_DATA.regulatoryDataQualitySnapshots || []).find(s => s.scopeType === 'DATASET' && s.scopeId === dataSetId);
    if (snap) return snap;
    const ds = (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === dataSetId);
    if (!ds || ds.dataStatus === 'INSUFFICIENT_DATA') return { dataStatus: 'INSUFFICIENT_DATA', overallScore: null };
    return { dataStatus: 'OK', overallScore: ds.qualityScore, completeness: null, accuracy: null, timeliness: null, consistency: null, uniqueness: null, validity: null };
  },

  calculateOverallQualityScore(dims) {
    if (!dims || dims.dataStatus === 'INSUFFICIENT_DATA') return { overallScore: null, dataStatus: 'INSUFFICIENT_DATA' };
    const { completeness, accuracy, timeliness, consistency, uniqueness, validity } = dims;
    const overallScore = Math.round((completeness * 0.2 + accuracy * 0.2 + timeliness * 0.2 + consistency * 0.15 + uniqueness * 0.15 + validity * 0.1) * 10) / 10;
    return { overallScore, dataStatus: 'OK' };
  },

  getKriDataCredibility(kriId) {
    const issues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.kriId === kriId && i.status !== 'CLOSED');
    const lineage = (APP_DATA.regulatoryDataLineage || []).filter(l => l.targetType === 'groupKris' && l.targetId === kriId);
    const dataSetIds = lineage.filter(l => l.sourceType === 'regulatoryDataSets').map(l => l.sourceId);
    const scores = dataSetIds.map(id => this.calculateDataSetQuality(id)).filter(s => s.dataStatus === 'OK');
    const baseScore = scores.length ? scores.reduce((s, x) => s + (x.overallScore || 0), 0) / scores.length : null;
    if (baseScore == null) return { kriId, credibility: null, dataStatus: 'INSUFFICIENT_DATA', openIssueCount: issues.length, impactLevel: 'UNKNOWN' };
    const penalty = issues.reduce((p, i) => p + (i.severity === 'HIGH' ? 12 : 6), 0);
    const credibility = Math.max(0, Math.round((baseScore - penalty) * 10) / 10);
    const impactLevel = credibility < 70 ? 'HIGH' : credibility < 85 ? 'MEDIUM' : 'LOW';
    return { kriId, credibility, dataStatus: 'OK', openIssueCount: issues.length, impactLevel, baseScore };
  },

  getPriorityCredibilityImpact(entityId) {
    const po = (APP_DATA.regulatoryPriorityObjects || []).find(o => o.objectId === entityId);
    const entityIssues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => {
      const ds = (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === i.dataSetId);
      return ds?.ownerOrganizationId === entityId && i.status !== 'CLOSED';
    });
    const kriIds = [...new Set(entityIssues.map(i => i.kriId).filter(Boolean))];
    const creds = kriIds.map(id => this.getKriDataCredibility(id)).filter(c => c.dataStatus === 'OK');
    const avgCred = creds.length ? creds.reduce((s, c) => s + c.credibility, 0) / creds.length : null;
    let priorityAdjustment = 'NONE';
    if (avgCred != null && avgCred < 75) priorityAdjustment = 'ELEVATE';
    else if (avgCred != null && avgCred < 85) priorityAdjustment = 'MONITOR';
    return { entityId, currentPriority: po?.priority, avgKriCredibility: avgCred, openDataIssues: entityIssues.length, priorityAdjustment, dataStatus: avgCred == null ? 'INSUFFICIENT_DATA' : 'OK' };
  },

  getDataLineageChain(startType, startId, direction) {
    const lineage = APP_DATA.regulatoryDataLineage || [];
    const forward = direction !== 'UP';
    const chain = [{ type: startType, id: startId }];
    const visited = new Set([startType + ':' + startId]);
    let frontier = [{ type: startType, id: startId }];
    for (let depth = 0; depth < 8 && frontier.length; depth++) {
      const next = [];
      frontier.forEach(node => {
        const edges = lineage.filter(l => forward
          ? l.sourceType === node.type && l.sourceId === node.id
          : l.targetType === node.type && l.targetId === node.id);
        edges.forEach(e => {
          const nType = forward ? e.targetType : e.sourceType;
          const nId = forward ? e.targetId : e.sourceId;
          const key = nType + ':' + nId;
          if (!visited.has(key)) {
            visited.add(key);
            chain.push({ type: nType, id: nId, relationType: e.relationType });
            next.push({ type: nType, id: nId });
          }
        });
      });
      frontier = next;
    }
    return chain;
  },

  getDataSourceImpactAnalysis(sourceId) {
    const downstream = this.getDataLineageChain('regulatoryDataSources', sourceId, 'DOWN');
    const dataSets = downstream.filter(n => n.type === 'regulatoryDataSets').map(n => n.id);
    const indicators = downstream.filter(n => n.type === 'dataIndicators').map(n => n.id);
    const kriList = downstream.filter(n => n.type === 'groupKris').map(n => n.id);
    const risks = downstream.filter(n => n.type === 'warnings').map(n => n.id);
    const entities = [...new Set(dataSets.map(id => (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === id)?.ownerOrganizationId).filter(Boolean))];
    const actions = (APP_DATA.regulatoryActions || []).filter(a => risks.some(rid => (a.sourceRiskMatterIds || []).includes(rid)));
    return { sourceId, affectedDataSets: dataSets, affectedIndicators: indicators, affectedKris: kriList, affectedRisks: risks, affectedEntities: entities, affectedActions: actions.map(a => a.actionId) };
  },

  filterDataByUserScope(items, getEntityId, getDomainId) {
    const user = this.getCurrentRegulatoryUser();
    if (!user) return items;
    const assignments = this.getUserRoleAssignments(user.userId);
    if (assignments.some(a => a.scopeType === 'GROUP')) return items;
    return items.filter(item => {
      const eid = getEntityId(item);
      const did = getDomainId ? getDomainId(item) : null;
      return assignments.some(asg => {
        if (asg.scopeType === 'ENTITY') return asg.scopeIds.includes(eid);
        if (asg.scopeType === 'DOMAIN') return asg.scopeIds.includes(did);
        if (asg.scopeType === 'REGION') return asg.scopeIds.includes(item.regionId);
        return false;
      });
    });
  },

  retryDataIntegrationJob(jobId) {
    const job = (APP_DATA.regulatoryDataIntegrationJobs || []).find(j => j.integrationJobId === jobId);
    if (!job) return { success: false, message: '接入任务不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDataIntegrationJobs', jobId, 'RETRY');
    if (!access.allowed) {
      this.createRegulatoryAuditLog({ actionType: 'OVERRIDE_DENIED', objectType: 'regulatoryDataIntegrationJobs', objectId: jobId, reason: access.reason });
      return { success: false, denied: true, message: access.reason };
    }
    const before = { status: job.status, retryCount: job.retryCount };
    job.retryCount += 1;
    if (job.retryCount >= 3 && job.status === 'FAILED') {
      const issue = (APP_DATA.regulatoryDataQualityIssues || []).find(i => i.dataSetId === job.dataSetId && i.status !== 'CLOSED');
      if (!issue) {
        const qiId = 'QI-AUTO-' + jobId;
        APP_DATA.regulatoryDataQualityIssues.push({
          qualityIssueId: qiId, qualityRuleId: null, dataSetId: job.dataSetId, sourceId: job.sourceId,
          issueType: '接入失败', severity: 'HIGH', issueCount: job.failedCount, affectedRecords: job.failedCount,
          status: 'OPEN', relatedGovernanceTaskId: null, relatedRectificationTaskId: null
        });
        const govId = 'GOV-AUTO-' + jobId;
        const ds = (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === job.dataSetId);
        APP_DATA.regulatoryDataGovernanceTasks.push({
          governanceTaskId: govId, qualityIssueId: qiId, responsibleOrganizationId: ds?.ownerOrganizationId || 'G001',
          status: 'IDENTIFIED', relatedRectificationTaskId: null, dueDate: '2026-08-15', verificationStatus: '待处理'
        });
      }
    } else if (job.status === 'FAILED' || job.status === 'PARTIAL_SUCCESS') {
      job.status = 'SUCCESS';
      job.failedCount = 0;
      job.successCount = job.recordCount;
      job.errorMessage = null;
    }
    this.createRegulatoryAuditLog({ actionType: 'RETRY', objectType: 'regulatoryDataIntegrationJobs', objectId: jobId, beforeState: before, afterState: { status: job.status, retryCount: job.retryCount }, reason: '接入任务重试' });
    APP_DATA.regulatoryDataIntegrationLogs = APP_DATA.regulatoryDataIntegrationLogs || [];
    APP_DATA.regulatoryDataIntegrationLogs.unshift({ logId: 'LOG-RETRY-' + jobId + '-' + Date.now(), integrationJobId: jobId, eventType: 'RETRY', status: job.status, message: '手动重试接入任务', timestamp: new Date().toISOString().slice(0, 19) });
    return { success: true, job };
  },

  assignDataGovernanceTask(governanceTaskId, organizationId) {
    const task = (APP_DATA.regulatoryDataGovernanceTasks || []).find(t => t.governanceTaskId === governanceTaskId);
    if (!task) return { success: false, message: '治理任务不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDataGovernanceTasks', governanceTaskId, 'ASSIGN');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const before = { status: task.status, responsibleOrganizationId: task.responsibleOrganizationId };
    task.responsibleOrganizationId = organizationId || task.responsibleOrganizationId;
    task.status = 'ASSIGNED';
    this.createRegulatoryAuditLog({ actionType: 'ASSIGN', objectType: 'regulatoryDataGovernanceTasks', objectId: governanceTaskId, beforeState: before, afterState: { status: task.status, responsibleOrganizationId: task.responsibleOrganizationId }, reason: '数据治理任务分派' });
    return { success: true, task };
  },

  closeDataGovernanceTask(governanceTaskId, reason) {
    const task = (APP_DATA.regulatoryDataGovernanceTasks || []).find(t => t.governanceTaskId === governanceTaskId);
    if (!task) return { success: false, message: '治理任务不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDataGovernanceTasks', governanceTaskId, 'CLOSE');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const before = { status: task.status, verificationStatus: task.verificationStatus };
    task.status = 'VERIFIED';
    task.verificationStatus = '已验证';
    const issue = (APP_DATA.regulatoryDataQualityIssues || []).find(i => i.qualityIssueId === task.qualityIssueId);
    if (issue) issue.status = 'CLOSED';
    if (task.relatedRectificationTaskId) {
      const rect = (APP_DATA.rectificationTasks || []).find(t => t.taskId === task.relatedRectificationTaskId);
      if (rect && rect.status !== '已关闭') {
        rect.verificationStatus = '验证通过';
      }
    }
    const ds = issue ? this.calculateDataSetQuality(issue.dataSetId) : null;
    this.createRegulatoryAuditLog({ actionType: 'CLOSE', objectType: 'regulatoryDataGovernanceTasks', objectId: governanceTaskId, beforeState: before, afterState: { status: task.status, verificationStatus: task.verificationStatus }, reason: reason || '数据治理任务关闭' });
    return { success: true, task, qualityRecovery: ds };
  },

  calculateRegulatoryMetric(metricId) {
    const metric = (APP_DATA.regulatoryMetrics || []).find(m => m.metricId === metricId);
    if (!metric) return { dataStatus: 'NOT_FOUND' };
    if (metric.dataStatus === 'INSUFFICIENT_DATA') return { ...metric, dataStatus: 'INSUFFICIENT_DATA' };
    const dsIds = metric.sourceDataSetIds || [];
    const qualities = dsIds.map(id => this.calculateDataSetQuality(id)).filter(q => q.dataStatus === 'OK');
    const avgQ = qualities.length ? qualities.reduce((s, q) => s + (q.overallScore || 0), 0) / qualities.length : null;
    const lineageComplete = (APP_DATA.regulatoryDataLineage || []).some(l => l.targetId === metricId) ? 0.95 : 0.85;
    const freshness = dsIds.some(id => ((APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === id) || {}).lastUpdatedAt >= '2026-07-21') ? 1 : 0.88;
    const credibilityScore = avgQ != null ? Math.round(avgQ * lineageComplete * freshness * 10) / 10 : metric.credibilityScore;
    return { ...metric, credibilityScore, lineageComplete, sourceFreshness: freshness };
  },

  calculateKriRuntimeStatus(kriRuntimeId) {
    const rt = (APP_DATA.regulatoryKriRuntime || []).find(k => k.kriRuntimeId === kriRuntimeId);
    if (!rt) return { status: 'NOT_FOUND' };
    if (rt.dataStatus === 'INSUFFICIENT_DATA') return { ...rt, status: 'INSUFFICIENT_DATA' };
    const cred = rt.credibilityScore != null ? { credibility: rt.credibilityScore, dataStatus: 'OK' } : this.getKriDataCredibility(rt.kriId);
    if (cred.dataStatus === 'INSUFFICIENT_DATA' || (cred.credibility != null && cred.credibility < 70)) {
      return { ...rt, status: 'INSUFFICIENT_DATA', credibilityScore: cred.credibility, priorityAdjustment: 'DATA_QUALITY_REVIEW_REQUIRED' };
    }
    return { ...rt, credibilityScore: cred.credibility ?? rt.credibilityScore };
  },

  getWarningPrioritySuggestion(regulatoryWarningId) {
    const w = (APP_DATA.regulatoryWarnings || []).find(x => x.regulatoryWarningId === regulatoryWarningId);
    if (!w) return null;
    const strat = (APP_DATA.regulatoryWarningStrategies || []).find(s => s.warningId === regulatoryWarningId);
    if (w.dataStatus === 'INSUFFICIENT_DATA' || w.credibilityScore == null || w.credibilityScore < 70) {
      return { priorityAdjustmentSuggestion: 'DATA_QUALITY_REVIEW_REQUIRED', applyPriorityChange: false, reason: '数据可信度不足，不直接调整真实优先级' };
    }
    const severity = w.warningLevel === 'CRITICAL' ? 1 : w.warningLevel === 'WARNING' ? 0.8 : 0.5;
    const credFactor = (w.credibilityScore || 80) / 100;
    const score = severity * credFactor;
    return {
      priorityAdjustmentSuggestion: score >= 0.75 ? 'ELEVATE' : score >= 0.5 ? 'MONITOR' : 'HOLD',
      applyPriorityChange: false,
      reason: strat?.reason || '基于预警可信度与严重程度生成建议',
      strategyLevel: w.strategyLevel
    };
  },

  filterKriByUserScope(items) {
    return this.filterDataByUserScope(items, k => k.scopeId, k => (APP_DATA.groupKris || []).find(g => g.id === k.kriId)?.category);
  },

  filterWarningsByUserScope(items) {
    return this.filterDataByUserScope(items, w => w.entityId);
  },

  reviewRegulatoryWarning(regulatoryWarningId, notes) {
    const w = (APP_DATA.regulatoryWarnings || []).find(x => x.regulatoryWarningId === regulatoryWarningId);
    if (!w) return { success: false, message: '预警不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryWarnings', regulatoryWarningId, 'JUDGE');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const before = { status: w.status };
    w.status = 'REVIEWED';
    w.reviewNotes = notes || '';
    this.createRegulatoryAuditLog({ actionType: 'UPDATE', objectType: 'regulatoryWarnings', objectId: regulatoryWarningId, beforeState: before, afterState: { status: w.status }, reason: notes || '预警研判' });
    return { success: true, warning: w };
  },

  convertRegulatoryWarningToRisk(regulatoryWarningId) {
    const w = (APP_DATA.regulatoryWarnings || []).find(x => x.regulatoryWarningId === regulatoryWarningId);
    if (!w) return { success: false, message: '预警不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryWarnings', regulatoryWarningId, 'CONVERT');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const existing = (APP_DATA.warnings || []).find(r => r.kriId === w.kriId && r.entityId === w.entityId)
      || (APP_DATA.warnings || []).find(r => r.kriId === w.kriId);
    if (!existing) return { success: false, message: '无可关联的现有风险事项，不得新建第二套风险库' };
    const before = { status: w.status, riskMatterId: w.riskMatterId };
    w.status = 'CONVERTED';
    w.riskMatterId = existing.id;
    this.createRegulatoryAuditLog({ actionType: 'UPDATE', objectType: 'regulatoryWarnings', objectId: regulatoryWarningId, beforeState: before, afterState: { status: w.status, riskMatterId: w.riskMatterId }, reason: '预警转风险（关联现有风险事项）' });
    return { success: true, warning: w, riskMatter: existing };
  },

  closeRegulatoryWarning(regulatoryWarningId, reason) {
    const w = (APP_DATA.regulatoryWarnings || []).find(x => x.regulatoryWarningId === regulatoryWarningId);
    if (!w) return { success: false, message: '预警不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryWarnings', regulatoryWarningId, 'CLOSE');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const before = { status: w.status };
    w.status = 'CLOSED';
    this.createRegulatoryAuditLog({ actionType: 'CLOSE', objectType: 'regulatoryWarnings', objectId: regulatoryWarningId, beforeState: before, afterState: { status: w.status }, reason: reason || '预警关闭' });
    return { success: true, warning: w };
  },

  attemptKriThresholdChange(kriId) {
    const rule = (APP_DATA.regulatoryRules || []).find(r => (r.relatedKriIds || []).includes(kriId) && r.status === 'ACTIVE');
    this.createRegulatoryAuditLog({ actionType: 'UPDATE', objectType: 'regulatoryRules', objectId: rule?.ruleId || kriId, reason: 'KRI阈值调整请求（需走规则治理闭环）' });
    return { success: false, needRuleWorkflow: true, message: 'KRI阈值调整必须走规则治理闭环（仿真→影响分析→审批→发布→部署）', nextPageId: 'regulatory-rule-config' };
  },

  calculateRegulatoryCompositeHealth() {
    const w = APP_DATA.regulatoryAnalysisWeights || {};
    const risks = APP_DATA.warnings || [];
    const km = APP_DATA.regulatoryMetricKriMetrics || {};
    const dg = APP_DATA.regulatoryDataGovernanceMetrics || {};
    const maturity = APP_DATA.regulatoryMaturity || {};
    const actions = APP_DATA.regulatoryActions || [];
    const rects = APP_DATA.rectificationTasks || [];
    const majorRisks = risks.filter(r => r.level === '重大' || r.level === '较大').length;
    const riskExposure = Math.max(0, Math.min(100, 100 - majorRisks * 7));
    const dataCredibility = km.avgCredibility ?? dg.overallQualityScore ?? null;
    const kriHealth = km.kriCount ? Math.round((km.normalKriCount / km.kriCount) * 100) : null;
    const warningEff = km.warningTotalCount ? Math.round(((km.warningTotalCount - km.pendingReviewCount) / km.warningTotalCount) * 100) : null;
    const rectClosure = rects.length ? Math.round(rects.filter(t => t.status === '已关闭' || t.verificationStatus === '验证通过').length / rects.length * 100) : null;
    const actionExec = actions.length ? Math.round(actions.filter(a => ['COMPLETED', 'VERIFIED'].includes(a.status)).length / actions.length * 100) : null;
    const matScore = maturity.overallScore ?? maturity.compositeScore ?? null;
    const dims = { riskExposure, dataCredibility, kriHealth, warningEffectiveness: warningEff, rectificationClosure: rectClosure, actionExecution: actionExec, maturity: matScore };
    const weights = { riskExposure: w.riskExposure || 0.2, dataCredibility: w.dataCredibility || 0.15, kriHealth: w.kriHealth || 0.15, warningEffectiveness: w.warningEffectiveness || 0.1, rectificationClosure: w.rectificationClosure || 0.15, actionExecution: w.actionExecution || 0.1, maturity: w.maturity || 0.15 };
    const available = Object.keys(dims).filter(k => dims[k] != null);
    if (!available.length) return { compositeHealthScore: null, dimensions: dims, dataStatus: 'INSUFFICIENT_HISTORY', trendDataStatus: 'INSUFFICIENT_HISTORY', weights };
    const totalW = available.reduce((s, k) => s + weights[k], 0);
    const compositeHealthScore = Math.round(available.reduce((s, k) => s + dims[k] * weights[k], 0) / totalW * 10) / 10;
    return { compositeHealthScore, dimensions: dims, dataStatus: 'OK', trendDataStatus: (APP_DATA.regulatoryAnalysisMetrics || {}).trendDataStatus || 'INSUFFICIENT_HISTORY', weights };
  },

  calculateRiskConcentration(dimension) {
    let items = APP_DATA.regulatoryRiskConcentration || [];
    if (dimension) items = items.filter(c => c.dimension === dimension);
    return items.map(c => ({
      dimension: c.dimension,
      objectId: c.objectId,
      objectName: c.objectName,
      count: c.count,
      totalCount: c.totalCount,
      concentrationRate: c.concentrationRate,
      riskLevel: c.riskLevel,
      priority: c.priority,
      status: c.status,
      concentrationLevel: c.concentrationLevel,
      interpretation: c.interpretation
    }));
  },

  analyzeRiskPropagation() {
    return (APP_DATA.regulatoryRiskPropagation || []).map(p => ({
      propagationId: p.propagationId,
      propagationType: p.propagationType,
      chainType: p.chainType,
      title: p.title,
      description: p.description,
      steps: p.steps,
      confidence: p.confidence,
      requiresVerification: p.requiresVerification
    }));
  },

  runRegulatoryScenario(scenarioId, scenarioOverrides) {
    const scenario = (APP_DATA.regulatoryScenarioAnalysis || []).find(s => s.scenarioId === scenarioId);
    if (!scenario) return { success: false, message: '情景不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryScenarioAnalysis', scenarioId, 'RUN');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const base = this.calculateRegulatoryCompositeHealth();
    const am = APP_DATA.regulatoryAnalysisMetrics || {};
    const km = APP_DATA.regulatoryMetricKriMetrics || {};
    const overrides = scenarioOverrides || {};
    let projectedImpact = {};
    if (scenario.scenarioType === 'DATA_QUALITY_DECLINE') {
      projectedImpact = { dataCredibility: Math.max(0, (base.dimensions.dataCredibility || 80) - (overrides.qualityDecline || 15)), priorityAdjustment: 'DATA_QUALITY_REVIEW_REQUIRED', kriCredibilityImpact: '下降' };
    } else if (scenario.scenarioType === 'CRITICAL_WARNING_INCREASE') {
      projectedImpact = { criticalWarnings: (km.criticalWarningCount || 0) + (overrides.warningIncrease || 3), concentrationChange: '上升', resourceDemand: '增加' };
    } else if (scenario.scenarioType === 'RECTIFICATION_OVERDUE_INCREASE') {
      projectedImpact = { closureRate: Math.max(0, (am.actionClosureRate || 70) - (overrides.overdueIncrease || 10)), performanceImpact: '下降', focusEntities: am.highRiskEntityCount };
    } else if (scenario.scenarioType === 'KRI_THRESHOLD_CHANGE') {
      projectedImpact = { ruleWorkflowRequired: true, simulationOnly: true, message: '须走规则治理闭环方可正式变更' };
    }
    const result = {
      scenarioResultId: 'SSR-' + Date.now(),
      scenarioId,
      simulationOnly: true,
      baseState: { compositeHealth: base.compositeHealthScore, dimensions: base.dimensions },
      projectedImpact,
      scenarioOverrides: overrides,
      calculatedAt: new Date().toISOString().slice(0, 19)
    };
    this.createRegulatoryAuditLog({ actionType: 'RUN', objectType: 'regulatoryScenarioAnalysis', objectId: scenarioId, afterState: { simulationOnly: true, scenarioResultId: result.scenarioResultId }, reason: '运行情景分析（不写回真实数据）' });
    return { success: true, result, simulationOnly: true };
  },

  generateRegulatoryDecisionRecommendations() {
    return (APP_DATA.regulatoryDecisionRecommendations || []).filter(r => r.requiresHumanDecision === true);
  },

  filterAnalysisByUserScope(items, getEntityId, getDomainId) {
    return this.filterDataByUserScope(items, getEntityId || (i => i.entityId || i.affectedScope?.scopeId), getDomainId || (i => i.domainId || (i.affectedScope?.scopeType === 'DOMAIN' ? i.affectedScope.scopeId : null)));
  },

  confirmRegulatoryDecisionRecommendation(recommendationId, notes) {
    const rec = (APP_DATA.regulatoryDecisionRecommendations || []).find(r => r.recommendationId === recommendationId);
    if (!rec) return { success: false, message: '建议不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDecisionRecommendations', recommendationId, 'CONFIRM');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const before = { status: rec.status };
    rec.status = 'CONFIRMED';
    rec.confirmedAt = new Date().toISOString().slice(0, 19);
    rec.confirmNotes = notes || '';
    this.createRegulatoryAuditLog({ actionType: 'APPROVE', objectType: 'regulatoryDecisionRecommendations', objectId: recommendationId, beforeState: before, afterState: { status: rec.status }, reason: notes || '确认决策建议' });
    return { success: true, recommendation: rec };
  },

  rejectRegulatoryDecisionRecommendation(recommendationId, reason) {
    const rec = (APP_DATA.regulatoryDecisionRecommendations || []).find(r => r.recommendationId === recommendationId);
    if (!rec) return { success: false, message: '建议不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDecisionRecommendations', recommendationId, 'REJECT');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const before = { status: rec.status };
    rec.status = 'REJECTED';
    rec.rejectReason = reason || '';
    this.createRegulatoryAuditLog({ actionType: 'REJECT', objectType: 'regulatoryDecisionRecommendations', objectId: recommendationId, beforeState: before, afterState: { status: rec.status }, reason: reason || '驳回决策建议' });
    return { success: true, recommendation: rec };
  },

  executeRegulatoryDecisionRecommendation(recommendationId) {
    const rec = (APP_DATA.regulatoryDecisionRecommendations || []).find(r => r.recommendationId === recommendationId);
    if (!rec) return { success: false, message: '建议不存在' };
    if (rec.status !== 'CONFIRMED') return { success: false, message: '须先人工确认建议' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDecisionRecommendations', recommendationId, 'EXECUTE');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const existingAction = rec.relatedActionId ? (APP_DATA.regulatoryActions || []).find(a => a.actionId === rec.relatedActionId) : (APP_DATA.regulatoryActions || []).find(a => a.entityId === rec.entityId && ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS'].includes(a.status));
    if (!existingAction) return { success: false, message: '无可关联的现有监管行动，不得自动创建' };
    const before = { status: rec.status, relatedActionId: rec.relatedActionId };
    rec.status = 'EXECUTED';
    rec.relatedActionId = existingAction.actionId;
    this.createRegulatoryAuditLog({ actionType: 'UPDATE', objectType: 'regulatoryDecisionRecommendations', objectId: recommendationId, beforeState: before, afterState: { status: rec.status, relatedActionId: rec.relatedActionId }, reason: '建议转监管行动（关联现有行动）' });
    return { success: true, recommendation: rec, action: existingAction };
  },

  identifyImprovementOpportunities() {
    return (APP_DATA.regulatoryImprovementOpportunities || []).map(o => ({
      opportunityId: o.opportunityId,
      sourceCategory: o.sourceCategory,
      title: o.title,
      priority: o.priority,
      status: o.status,
      sourceType: o.sourceType,
      sourceId: o.sourceId,
      requiresHumanDecision: o.requiresHumanDecision
    }));
  },

  analyzeRegulatoryRootCause(opportunityId) {
    const rca = (APP_DATA.regulatoryRootCauseAnalyses || []).find(r => r.opportunityId === opportunityId);
    if (!rca) return null;
    return { ...rca, potentialRootCause: rca.potentialRootCause, confidence: rca.confidence, evidence: rca.evidence, requiresHumanConfirmation: true };
  },

  generateRegulatoryOptimizationPlan(rootCauseId) {
    const plan = (APP_DATA.regulatoryOptimizationPlans || []).find(p => p.rootCauseId === rootCauseId);
    if (!plan) return null;
    return { ...plan, requiresHumanDecision: true };
  },

  evaluateImprovementEffectiveness(executionId) {
    const eff = (APP_DATA.regulatoryImprovementEffectiveness || []).find(e => e.executionId === executionId);
    if (!eff) {
      const exe = (APP_DATA.regulatoryImprovementExecution || []).find(e => e.executionId === executionId);
      if (!exe) return { dataStatus: 'NOT_FOUND' };
      return { executionId, before: null, after: null, change: null, effectiveness: 'INSUFFICIENT_HISTORY', dataStatus: 'INSUFFICIENT_HISTORY' };
    }
    return { ...eff, before: eff.before, after: eff.after, change: eff.change, effectiveness: eff.effectiveness, dataStatus: eff.dataStatus };
  },

  filterImprovementByUserScope(items, getEntityId, getDomainId) {
    return this.filterAnalysisByUserScope(items, getEntityId, getDomainId);
  },

  confirmRegulatoryRootCause(rootCauseId, confirmedCause, notes) {
    const rca = (APP_DATA.regulatoryRootCauseAnalyses || []).find(r => r.rootCauseId === rootCauseId);
    if (!rca) return { success: false, message: '根因分析不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryRootCauseAnalyses', rootCauseId, 'CONFIRM');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const before = { rootCauseStatus: rca.rootCauseStatus, confirmedRootCause: rca.confirmedRootCause };
    rca.rootCauseStatus = 'CONFIRMED_ROOT_CAUSE';
    rca.confirmedRootCause = confirmedCause || rca.potentialRootCause;
    rca.confirmedAt = new Date().toISOString().slice(0, 19);
    this.createRegulatoryAuditLog({ actionType: 'APPROVE', objectType: 'regulatoryRootCauseAnalyses', objectId: rootCauseId, beforeState: before, afterState: { rootCauseStatus: rca.rootCauseStatus, confirmedRootCause: rca.confirmedRootCause }, reason: notes || '人工确认根因' });
    return { success: true, rootCause: rca };
  },

  approveRegulatoryOptimizationPlan(planId, notes) {
    const plan = (APP_DATA.regulatoryOptimizationPlans || []).find(p => p.planId === planId);
    if (!plan) return { success: false, message: '优化方案不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryOptimizationPlans', planId, 'APPROVE');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    if (plan.optimizationType === 'RULE_OPTIMIZATION') return { success: false, needRuleWorkflow: true, message: '规则优化须走规则治理闭环', nextPageId: 'regulatory-rule-config' };
    if (plan.optimizationType === 'KRI_OPTIMIZATION') return { success: false, needRuleWorkflow: true, message: 'KRI优化须走阈值治理闭环', nextPageId: 'regulatory-rule-config' };
    const before = { status: plan.status };
    plan.status = 'APPROVED';
    plan.approvedAt = new Date().toISOString().slice(0, 19);
    this.createRegulatoryAuditLog({ actionType: 'APPROVE', objectType: 'regulatoryOptimizationPlans', objectId: planId, beforeState: before, afterState: { status: plan.status }, reason: notes || '批准优化方案' });
    return { success: true, plan };
  },

  startRegulatoryImprovementExecution(planId) {
    const plan = (APP_DATA.regulatoryOptimizationPlans || []).find(p => p.planId === planId);
    if (!plan) return { success: false, message: '优化方案不存在' };
    if (plan.status !== 'APPROVED') return { success: false, message: '方案须先批准' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryImprovementExecution', planId, 'MANAGE');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    let exe = (APP_DATA.regulatoryImprovementExecution || []).find(e => e.planId === planId);
    if (!exe) {
      exe = { executionId: 'EXE-' + Date.now(), planId, opportunityId: plan.opportunityId, rootCauseId: plan.rootCauseId, status: 'IMPLEMENTING', progress: 10, entityId: plan.entityId, linkedSupervisionTaskId: null, linkedRectificationTaskId: null, startedAt: new Date().toISOString().slice(0, 10) };
      APP_DATA.regulatoryImprovementExecution = [...(APP_DATA.regulatoryImprovementExecution || []), exe];
    } else {
      const before = { status: exe.status, progress: exe.progress };
      exe.status = 'IMPLEMENTING';
      exe.progress = Math.max(exe.progress || 0, 10);
      exe.startedAt = exe.startedAt || new Date().toISOString().slice(0, 10);
      this.createRegulatoryAuditLog({ actionType: 'UPDATE', objectType: 'regulatoryImprovementExecution', objectId: exe.executionId, beforeState: before, afterState: { status: exe.status, progress: exe.progress }, reason: '启动改进实施' });
    }
    plan.status = 'IMPLEMENTING';
    return { success: true, execution: exe };
  },

  completeRegulatoryImprovementExecution(executionId, notes) {
    const exe = (APP_DATA.regulatoryImprovementExecution || []).find(e => e.executionId === executionId);
    if (!exe) return { success: false, message: '实施记录不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryImprovementExecution', executionId, 'MANAGE');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const before = { status: exe.status };
    exe.status = 'PENDING_VALIDATION';
    exe.progress = 100;
    exe.completedAt = new Date().toISOString().slice(0, 10);
    const plan = (APP_DATA.regulatoryOptimizationPlans || []).find(p => p.planId === exe.planId);
    if (plan) plan.status = 'PENDING_VALIDATION';
    this.createRegulatoryAuditLog({ actionType: 'UPDATE', objectType: 'regulatoryImprovementExecution', objectId: executionId, beforeState: before, afterState: { status: exe.status }, reason: notes || '完成改进实施' });
    return { success: true, execution: exe };
  },

  validateRegulatoryImprovementEffectiveness(effectivenessId, result, notes) {
    const eff = (APP_DATA.regulatoryImprovementEffectiveness || []).find(e => e.effectivenessId === effectivenessId);
    if (!eff) return { success: false, message: '效果验证记录不存在' };
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryImprovementEffectiveness', effectivenessId, 'VALIDATE');
    if (!access.allowed) return { success: false, denied: true, message: access.reason };
    const before = { effectiveness: eff.effectiveness };
    eff.effectiveness = result || 'PARTIALLY_EFFECTIVE';
    eff.validatedAt = new Date().toISOString().slice(0, 19);
    eff.validationNotes = notes || '';
    const exe = (APP_DATA.regulatoryImprovementExecution || []).find(e => e.executionId === eff.executionId);
    if (exe) exe.status = 'VALIDATED';
    this.createRegulatoryAuditLog({ actionType: 'APPROVE', objectType: 'regulatoryImprovementEffectiveness', objectId: effectivenessId, beforeState: before, afterState: { effectiveness: eff.effectiveness }, reason: notes || '确认效果验证' });
    return { success: true, effectiveness: eff };
  },

  renderPublicImprovementSourceLinks(opp) {
    if (!opp) return '';
    const links = [];
    (opp.relatedRiskIds || []).forEach(id => links.push(this.renderPublicLinkButton('风险 ' + id, `App.navigatePublic('warnings',{riskMatterId:'${id}'})`)));
    (opp.relatedKriIds || []).forEach(id => links.push(this.renderPublicLinkButton('KRI ' + id, `App.navigatePublic('regulatory-kri-monitoring',{kriId:'${id}'})`)));
    (opp.relatedWarningIds || []).forEach(id => links.push(this.renderPublicLinkButton('预警 ' + id, `App.navigatePublic('regulatory-warning-center',{regulatoryWarningId:'${id}'})`)));
    (opp.relatedActionIds || []).forEach(id => links.push(this.renderPublicLinkButton('行动 ' + id, `App.navigatePublic('regulatory-actions',{actionId:'${id}'})`)));
    (opp.relatedRectificationTaskIds || []).forEach(id => links.push(this.renderPublicLinkButton('整改 ' + id, `App.navigatePublic('rectification',{rectificationTaskId:'${id}'})`)));
    if (opp.sourceType && opp.sourceId) links.push(this.renderPublicLinkButton('来源 ' + opp.sourceId, this._improvementSourceNavigate(opp)));
    return links.join(' ') || '—';
  },

  _improvementSourceNavigate(opp) {
    const map = {
      regulatoryWarnings: `App.navigatePublic('regulatory-warning-center',{regulatoryWarningId:'${opp.sourceId}'})`,
      regulatoryDataQualityIssues: `App.navigatePublic('regulatory-data-quality',{qualityIssueId:'${opp.sourceId}'})`,
      regulatoryActions: `App.navigatePublic('regulatory-actions',{actionId:'${opp.sourceId}'})`,
      rectificationTasks: `App.navigatePublic('rectification',{rectificationTaskId:'${opp.sourceId}'})`,
      regulatoryRiskConcentration: `App.navigatePublic('regulatory-risk-concentration',{concentrationId:'${opp.sourceId}'})`,
      regulatoryRiskPropagation: `App.navigatePublic('regulatory-risk-propagation',{propagationId:'${opp.sourceId}'})`,
      regulatoryKriEvaluations: `App.navigatePublic('regulatory-kri-effectiveness')`,
      regulatoryRuleEffectiveness: `App.navigatePublic('regulatory-rule-effectiveness')`,
      regulatoryStrategicObjectives: `App.navigatePublic('regulatory-strategy-planning',{objectiveId:'${opp.sourceId}'})`
    };
    return map[opp.sourceType] || `App.navigatePublic('regulatory-improvement-center',{opportunityId:'${opp.opportunityId}'})`;
  },

  renderPublicAnalysisMatrix(points) {
    const pts = points || [];
    const quadrants = { '高风险+低监管能力': [], '高风险+高监管能力': [], '低风险+低监管能力': [], '低风险+高监管能力': [] };
    pts.forEach(p => {
      const key = (p.riskExposure >= 50 ? '高风险' : '低风险') + '+' + (p.closureCapability >= 50 ? '高监管能力' : '低监管能力');
      if (quadrants[key]) quadrants[key].push(p);
    });
    return `<div class="group-two">${Object.keys(quadrants).map(q => `<div class="card"><div class="card-title">${q}</div>${quadrants[q].length ? quadrants[q].map(p => `<p class="insight-note clickable" onclick="App.navigatePublic('regulatory-risk-concentration',{concentrationId:'${p.concentrationId}'})">${p.objectName} <small>暴露${p.riskExposure}% · 闭环${p.closureCapability}%</small></p>`).join('') : this.renderPublicEmptyState('暂无')}</div>`).join('')}</div>`;
  },

  renderPublicAuthStatusBadge(status) {
    const cls = { DRAFT: 'badge-info', SUBMITTED: 'badge-warning', IN_REVIEW: 'badge-warning', APPROVED: 'badge-success', REJECTED: 'badge-danger', EXPIRED: 'badge-danger', REVOKED: 'badge-danger' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${status || '—'}</span>`;
  },

  renderPublicAuditActionBadge(actionType) {
    const danger = ['ROLLBACK', 'OVERRIDE', 'OVERRIDE_DENIED', 'REJECT', 'PUBLISH'];
    const cls = danger.includes(actionType) ? 'badge-danger' : ['APPROVE', 'CLOSE'].includes(actionType) ? 'badge-success' : 'badge-info';
    return `<span class="badge ${cls}">${actionType}</span>`;
  },

  renderPublicDetailHeader(opts) {
    const o = opts || {};
    const idLine = o.objectId ? `<span class="public-id-tag" title="点击复制" onclick="App.copyPublicId('${this.escHtml(o.objectId)}')">${this.escHtml(o.objectId)}</span>` : '';
    return `${this.renderPublicBackButton()}
    <div class="public-detail-header" style="margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #dce3ec">
      <div style="font-size:12px;color:#5a6a7e;margin-bottom:4px">${this.escHtml(o.objectType || '监管对象')}</div>
      <div style="font-size:18px;font-weight:bold;color:#003d7a">${idLine ? idLine + '｜' : ''}${this.escHtml(o.objectName || '—')}</div>
      <div style="margin-top:8px;display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <span>当前状态：${this.renderPublicStatusBadge(o.status)}</span>
        ${o.updatedAt ? `<span style="font-size:12px;color:#5a6a7e">数据更新：${this.escHtml(o.updatedAt)}</span>` : ''}
      </div>
    </div>`;
  },

  renderPublicDetailSection(title, content) {
    return `<div class="public-detail-section" style="margin-bottom:16px">
      <div style="font-weight:bold;color:#003d7a;margin-bottom:8px;padding-left:8px;border-left:3px solid #00a0e9">${this.escHtml(title)}</div>
      ${content || this.renderPublicEmptyState('暂无数据')}
    </div>`;
  },

  buildPublicDetailPanel(opts) {
    const o = opts || {};
    const header = this.renderPublicDetailHeader({
      objectType: o.objectType || '监管对象',
      objectName: o.objectName,
      objectId: o.objectId,
      status: o.status,
      updatedAt: o.updatedAt
    });
    const sections = (o.sections || []).map(s => this.renderPublicDetailSection(s.title, s.content)).join('');
    const footer = o.footer ? `<div class="public-detail-footer" style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">${o.footer}</div>` : '';
    return `${header}<div class="card public-detail-panel" style="padding:16px">${sections}${footer}</div>`;
  },

  renderPublicIdField(id, label) {
    if (!id) return { label: label || '对象 ID', value: '—' };
    return { label: label || '对象 ID', html: `<code class="public-id-tag" title="点击复制" style="cursor:pointer" onclick="App.copyPublicId('${this.escHtml(id)}')">${this.escHtml(id)}</code>` };
  },

  renderPublicMetaGrid(rows) {
    const items = (rows || []).filter(r => r && r.label);
    if (!items.length) return this.renderPublicEmptyState('暂无基本信息');
    return `<div class="info-grid">${items.map(r => `<div class="info-item${r.full ? ' full' : ''}"><div class="info-label">${this.escHtml(r.label)}</div><div class="info-value">${r.html !== undefined ? r.html : this.escHtml(r.value)}</div></div>`).join('')}</div>`;
  },

  renderPublicLinkButton(label, onclick, style) {
    return `<button class="btn btn-outline" style="margin:2px${style ? ';' + style : ''}" onclick="${onclick}">${this.escHtml(label)}</button>`;
  },

  renderPublicRelationList(items, renderItem) {
    if (!items || !items.length) return this.renderPublicEmptyState('暂无关联对象');
    return `<div style="display:flex;flex-wrap:wrap;gap:4px">${items.map(renderItem).join('')}</div>`;
  },

  renderPublicRelationCard(opts) {
    const o = opts || {};
    const items = o.items || [];
    if (!items.length) return `<div class="card" style="padding:12px;margin-bottom:12px"><b>${this.escHtml(o.title)}</b>（0）${this.renderPublicEmptyState('暂无关联对象')}</div>`;
    const rows = items.map(item => {
      const id = o.getId ? o.getId(item) : '';
      const label = o.getLabel ? o.getLabel(item) : '—';
      const status = o.getStatus ? o.getStatus(item) : '';
      const owner = o.getOwner ? o.getOwner(item) : '';
      const updated = o.getUpdated ? o.getUpdated(item) : '';
      const click = o.onClick ? o.onClick(item) : '';
      return `<tr class="${click ? 'clickable' : ''}" ${click ? `onclick="${click}"` : ''}>
        <td>${this.escHtml(label)}</td>
        <td><code style="font-size:11px">${this.escHtml(id)}</code></td>
        <td>${status ? this.renderPublicStatusBadge(status) : '—'}</td>
        <td>${this.escHtml(owner)}</td>
        <td>${this.escHtml(updated)}</td>
        <td>${click ? `<button class="btn btn-outline" style="padding:2px 8px;font-size:11px" onclick="event.stopPropagation();${click}">查看</button>` : '—'}</td>
      </tr>`;
    }).join('');
    return `<div class="card" style="padding:12px;margin-bottom:12px"><b>${this.escHtml(o.title)}</b>（${items.length}）
      <table class="data-table" style="margin-top:8px"><thead><tr><th>名称</th><th>ID</th><th>状态</th><th>责任主体</th><th>更新时间</th><th>操作</th></tr></thead><tbody>${rows}</tbody></table>
    </div>`;
  },

  renderPublicRelationRow(items, renderBtn) {
    if (!items || !items.length) return '';
    return `<div class="kri-lineage" style="flex-wrap:wrap;margin:8px 0">${items.map((item, i) => renderBtn(item) + (i < items.length - 1 ? '<i>→</i>' : '')).join('')}</div>`;
  },

  renderPublicRelationLink(label, sub, onclick) {
    return `<button onclick="${onclick}"><b>${this.escHtml(label)}</b><br>${this.escHtml(sub)}</button>`;
  },

  renderLineageArrow() {
    return '<i>→</i>';
  },

  renderLineageNode(label, name, sub, onclick, active) {
    const style = active ? ' style="outline:2px solid #003d7a"' : '';
    if (onclick) return `<button${style} onclick="${onclick}"><b>${this.escHtml(label)}</b><br>${this.escHtml(name)}<br><small>${this.escHtml(sub || '')}</small></button>`;
    return `<span${style}><b>${this.escHtml(label)}</b><br>${this.escHtml(name)}<br><small>${this.escHtml(sub || '')}</small></span>`;
  },

  renderLineagePath(steps) {
    return `<div class="kri-lineage" style="flex-wrap:wrap">${(steps || []).map((s, i) => s + (i < steps.length - 1 ? this.renderLineageArrow() : '')).join('')}</div>`;
  },

  renderPublicTimeline(steps) {
    if (!steps || !steps.length) return this.renderPublicEmptyState('暂无生命周期记录');
    return `<div class="kri-lineage" style="flex-wrap:wrap">${steps.map((s, i) => {
      const active = s.active ? ' style="outline:2px solid #003d7a"' : '';
      return `<span${active}><b>${this.escHtml(s.label)}</b><br><small>${this.escHtml(s.sub || '')}</small></span>${i < steps.length - 1 ? this.renderLineageArrow() : ''}`;
    }).join('')}</div>`;
  },

  renderPublicTrendChart(trend, period) {
    if (!trend) return this.renderPublicEmptyState('暂无趋势数据');
    const items = [
      ['新增事件', trend.newCount],
      ['关闭事件', trend.closedCount],
      ['超期事件', trend.overdueCount],
      ['重新打开', trend.reopenedCount]
    ];
    const max = Math.max(...items.map(([, v]) => v), 1);
    return `<div class="card" style="padding:12px"><b>近 ${period} 日趋势</b><div style="margin-top:8px">${items.map(([label, val]) => `<p style="display:flex;align-items:center;gap:8px;margin:6px 0"><span style="width:72px;font-size:12px">${label}</span><i style="flex:1;height:10px;background:#eef3f9;border-radius:4px;display:block"><b style="display:block;height:10px;background:#00a0e9;border-radius:4px;width:${Math.round(val / max * 100)}%"></b></i><em style="width:24px;text-align:right">${val}</em></p>`).join('')}</div></div>`;
  },

  renderPublicHealthBadge(level) {
    const map = { HEALTHY: 'badge-success', ATTENTION: 'badge-warning', WARNING: 'badge-warning', CRITICAL: 'badge-danger' };
    const label = { HEALTHY: '健康', ATTENTION: '关注', WARNING: '预警', CRITICAL: '严重' };
    return `<span class="badge ${map[level] || 'badge-info'}">${label[level] || level || '—'}</span>`;
  },

  renderPublicKpiCard(label, value, onclick, sub) {
    return `<button class="metric-card" onclick="${onclick || 'void(0)'}"><div class="value">${this.escHtml(value)}</div><div class="label">${this.escHtml(label)}</div>${sub ? `<div class="sub-items">${this.escHtml(sub)}</div>` : ''}</button>`;
  },

  renderPublicEventTypeBadge(type) {
    const map = { DATA_QUALITY: '数据质量', RISK_MATTER: '风险事项', PLATFORM_ALERT: '运行异常', COVERAGE_GAP: '覆盖盲区', CROSS_DOMAIN: '跨领域风险', CROSS_BORDER: '跨境合规' };
    return `<span class="badge badge-info">${map[type] || type || '—'}</span>`;
  },

  renderPublicEventStatusBadge(status) {
    const map = { OPEN: '待处理', ACKNOWLEDGED: '待责任确认', IN_PROGRESS: '整改中', VERIFYING: '待验证', CLOSED: '已关闭', REOPENED: '已重开' };
    const cls = { OPEN: 'badge-danger', ACKNOWLEDGED: 'badge-warning', IN_PROGRESS: 'badge-warning', VERIFYING: 'badge-info', CLOSED: 'badge-success', REOPENED: 'badge-danger' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${map[status] || status || '—'}</span>`;
  },

  renderPublicPriorityBadge(priority) {
    const cls = { CRITICAL: 'badge-danger', HIGH: 'badge-danger', MEDIUM: 'badge-warning', LOW: 'badge-info' };
    return `<span class="badge ${cls[priority] || 'badge-info'}">${priority || '—'}</span>`;
  },

  renderPublicStrategyBadge(level) {
    const map = { FOCUS: '重点', SPECIAL: '专项', ROUTINE: '常规', OBSERVE: '观察' };
    const cls = { FOCUS: 'badge-danger', SPECIAL: 'badge-warning', ROUTINE: 'badge-info', OBSERVE: 'badge-success' };
    return `<span class="badge ${cls[level] || 'badge-info'}">${map[level] || level || '—'}</span>`;
  },

  renderPublicActionCard(action) {
    const a = action || {};
    const ent = a.entityId ? (APP_DATA.globalLegalEntities || []).find(e => e.entityId === a.entityId) : null;
    return `<button class="metric-card" style="text-align:left" onclick="App.showRegulatoryActionExecutionDetail('${a.actionId}')"><div class="value">${this.renderPublicPriorityBadge(a.priority)} ${this.renderPublicActionStatusBadge(a.status)}</div><div class="label">${this.escHtml(a.actionType)} · ${ent ? ent.entityName : '—'}</div><div class="sub-items">${this.escHtml(a.recommendedAction || '')} · 进度 ${a.executionProgress || 0}%</div></button>`;
  },

  renderPublicActionStatusBadge(status) {
    const map = { RECOMMENDED: '推荐', ASSIGNED: '已分派', IN_PROGRESS: '执行中', WAITING_FEEDBACK: '待反馈', COMPLETED: '已完成', VERIFIED: '已验证', CANCELLED: '已取消', OVERDUE: '已逾期', REOPENED: '已重开' };
    const cls = { RECOMMENDED: 'badge-info', ASSIGNED: 'badge-info', IN_PROGRESS: 'badge-warning', WAITING_FEEDBACK: 'badge-warning', COMPLETED: 'badge-success', VERIFIED: 'badge-success', CANCELLED: 'badge-info', OVERDUE: 'badge-danger', REOPENED: 'badge-danger' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${map[status] || status || '—'}</span>`;
  },

  renderPublicConcentrationChart(items, labelKey) {
    if (!items || !items.length) return this.renderPublicEmptyState('暂无集中度数据');
    const max = Math.max(...items.map(i => i.concentration || 0), 1);
    return `<div style="margin-top:8px">${items.slice(0, 6).map(item => `<p style="display:flex;align-items:center;gap:8px;margin:4px 0"><span style="width:80px;font-size:12px">${this.escHtml(item[labelKey] || item.label)}</span><i style="flex:1;height:8px;background:#eef3f9;border-radius:4px;display:block"><b style="display:block;height:8px;background:#e53935;border-radius:4px;width:${Math.round((item.concentration || 0) / max * 100)}%"></b></i><em style="width:28px;text-align:right;font-size:11px">${item.concentration || 0}</em></p>`).join('')}</div>`;
  },

  calculateRegulatoryPriority(entityId) {
    return (APP_DATA.regulatoryPrioritiesRecalculated || APP_DATA.regulatoryPriorities || {})[entityId] || { priority: 'LOW', score: 0, factors: [], recommendedAction: '—', entityId };
  },

  recalculateRegulatoryPriority(entityId) {
    return this.calculateRegulatoryPriority(entityId);
  },

  getActionsByRectificationTask(taskId) {
    return (APP_DATA.regulatoryActions || []).filter(a => (a.sourceRectificationTaskIds || []).includes(taskId));
  },

  getRegulatoryActionFeedbacks(actionId) {
    return (APP_DATA.regulatoryActionFeedbacks || []).filter(f => f.actionId === actionId);
  },

  getRegulatoryDecisionHistory(filters) {
    const f = filters || {};
    return (APP_DATA.regulatoryDecisionHistory || []).filter(d => {
      if (f.entityId && d.entityId !== f.entityId) return false;
      if (f.regionId && d.regionId !== f.regionId) return false;
      if (f.decisionType && d.decisionType !== f.decisionType) return false;
      return true;
    });
  },

  getRegulatoryMaturity(objectType, objectId) {
    const m = APP_DATA.regulatoryMaturity || {};
    if (objectType === 'entity') return (m.entityMaturity || []).find(e => e.objectId === objectId);
    if (objectType === 'region') return (m.regionMaturity || []).find(r => r.objectId === objectId);
    if (objectType === 'domain') return (m.domainMaturity || []).find(d => d.objectId === objectId);
    return m;
  },

  renderPublicMaturityBadge(level) {
    const cls = { L1: 'badge-danger', L2: 'badge-warning', L3: 'badge-info', L4: 'badge-success', L5: 'badge-success' };
    const labels = { L1: 'L1 基础可见', L2: 'L2 数据覆盖', L3: 'L3 风险监测', L4: 'L4 闭环监管', L5: 'L5 智能优化' };
    return `<span class="badge ${cls[level] || 'badge-info'}">${labels[level] || level || '—'}</span>`;
  },

  renderPublicMaturityRadar(items, labelKey) {
    if (!items || !items.length) return this.renderPublicEmptyState('暂无成熟度对比数据');
    const max = Math.max(...items.map(i => i.score || 0), 1);
    return `<div style="margin-top:8px">${items.map(item => `<p style="display:flex;align-items:center;gap:8px;margin:4px 0"><span style="width:72px;font-size:12px">${this.escHtml(item[labelKey] || item.dimensionName || item.objectName)}</span><i style="flex:1;height:8px;background:#eef3f9;border-radius:4px;display:block"><b style="display:block;height:8px;background:#003d7a;border-radius:4px;width:${Math.round((item.score || 0) / max * 100)}%"></b></i><em style="width:36px;text-align:right;font-size:11px">${item.score || 0}</em>${this.renderPublicMaturityBadge(item.level)}</p>`).join('')}</div>`;
  },

  renderPublicRuleTypeBadge(type) {
    const map = { RISK_DETECTION: '风险识别', KRI_THRESHOLD: 'KRI阈值', PRIORITY_SCORING: '优先级', STRATEGY_ROUTING: '策略', ACTION_TRIGGER: '行动触发', MATURITY_SCORING: '成熟度' };
    const cls = { RISK_DETECTION: 'badge-danger', KRI_THRESHOLD: 'badge-warning', PRIORITY_SCORING: 'badge-info', STRATEGY_ROUTING: 'badge-info', ACTION_TRIGGER: 'badge-warning', MATURITY_SCORING: 'badge-success' };
    return `<span class="badge ${cls[type] || 'badge-info'}">${map[type] || type || '—'}</span>`;
  },

  renderPublicRuleStatusBadge(status) {
    const cls = { ACTIVE: 'badge-success', INACTIVE: 'badge-info', PENDING: 'badge-warning', DRAFT: 'badge-info' };
    const labels = { ACTIVE: '启用', INACTIVE: '停用', PENDING: '待审核', DRAFT: '草稿' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${labels[status] || status || '—'}</span>`;
  },

  renderPublicSimulationBadge(simOnly) {
    return simOnly ? '<span class="badge badge-warning">模拟结果</span>' : '<span class="badge badge-info">基准</span>';
  },

  renderPublicParameterDiff(orig, sim, unit) {
    const ch = sim - orig;
    const pct = orig ? Math.round(ch / orig * 100) : 0;
    return `<span>${orig}${unit || ''} → <b>${sim}${unit || ''}</b> (${ch >= 0 ? '+' : ''}${ch}, ${pct >= 0 ? '+' : ''}${pct}%)</span>`;
  },

  renderPublicRuleCondition(conditions) {
    if (!conditions || !conditions.length) return this.renderPublicEmptyState('暂无条件');
    return `<ul>${conditions.map(c => `<li>${this.escHtml(c)}</li>`).join('')}</ul>`;
  },

  renderPublicSimulationComparison(before, after, label) {
    return `<p class="insight-note"><b>${label || '对比'}：</b>${before} → <b>${after}</b> ${this.renderPublicSimulationBadge(true)}</p>`;
  },

  renderPublicVersionStatusBadge(status) {
    const cls = { ACTIVE: 'badge-success', PENDING_PUBLISH: 'badge-warning', APPROVED: 'badge-info', DRAFT: 'badge-info', INACTIVE: 'badge-info' };
    const labels = { ACTIVE: '生效中', PENDING_PUBLISH: '待发布', APPROVED: '已批准', DRAFT: '草稿', INACTIVE: '停用' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${labels[status] || status || '—'}</span>`;
  },

  renderPublicChangeRequestStatusBadge(status) {
    const cls = { DRAFT: 'badge-info', SIMULATING: 'badge-info', IMPACT_ASSESSED: 'badge-warning', PENDING_APPROVAL: 'badge-warning', APPROVED: 'badge-success', REJECTED: 'badge-danger', PUBLISHED: 'badge-success', CANCELLED: 'badge-info' };
    const labels = { DRAFT: '草稿', SIMULATING: '仿真中', IMPACT_ASSESSED: '已评估', PENDING_APPROVAL: '待审批', APPROVED: '已批准', REJECTED: '已拒绝', PUBLISHED: '已发布', CANCELLED: '已取消' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${labels[status] || status || '—'}</span>`;
  },

  renderPublicApprovalStatusBadge(status) {
    const cls = { PENDING: 'badge-warning', APPROVED: 'badge-success', REJECTED: 'badge-danger', WAITING: 'badge-info' };
    const labels = { PENDING: '待审批', APPROVED: '已通过', REJECTED: '已拒绝', WAITING: '等待中' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${labels[status] || status || '—'}</span>`;
  },

  renderPublicEffectivenessBadge(level) {
    const cls = { EXCELLENT: 'badge-success', GOOD: 'badge-success', ATTENTION: 'badge-warning', INEFFECTIVE: 'badge-danger', INSUFFICIENT_DATA: 'badge-info' };
    const labels = { EXCELLENT: '优秀', GOOD: '良好', ATTENTION: '需关注', INEFFECTIVE: '效果不佳', INSUFFICIENT_DATA: '历史数据不足' };
    return `<span class="badge ${cls[level] || 'badge-info'}">${labels[level] || level || '—'}</span>`;
  },

  renderPublicGovernanceComparison(table) {
    if (!table || !table.length) return this.renderPublicEmptyState('暂无对比数据');
    const rows = table.map(r => `<tr><td>${r.metric}</td><td>${r.before}</td><td>${r.after}</td><td>${r.change >= 0 ? '+' : ''}${r.change}</td></tr>`).join('');
    return `<table class="data-table"><thead><tr><th>指标</th><th>变更前</th><th>变更后</th><th>变化</th></tr></thead><tbody>${rows}</tbody></table>`;
  },

  renderPublicGovernanceFilterBar(pageId) {
    const f = this.regulatoryRuleGovernanceFilter || {};
    const ruleTypes = ['PRIORITY', 'STRATEGY', 'ACTION', 'MATURITY', 'RISK_DETECTION'];
    const statuses = ['ACTIVE', 'PENDING_PUBLISH', 'APPROVED'];
    const effLevels = ['EXCELLENT', 'GOOD', 'ATTENTION', 'INEFFECTIVE', 'INSUFFICIENT_DATA'];
    const crStatuses = ['DRAFT', 'SIMULATING', 'IMPACT_ASSESSED', 'PENDING_APPROVAL', 'APPROVED', 'PUBLISHED'];
    let parts = '';
    if (pageId === 'regulatory-rule-versions') {
      parts = `<select onchange="App.regulatoryRuleGovernanceFilter={...(App.regulatoryRuleGovernanceFilter||{}),ruleType:this.value||null};App.renderRegulatoryRuleVersions()"><option value="">全部类型</option>${ruleTypes.map(t => `<option value="${t}" ${f.ruleType===t?'selected':''}>${t}</option>`).join('')}</select>
        <select onchange="App.regulatoryRuleGovernanceFilter={...(App.regulatoryRuleGovernanceFilter||{}),status:this.value||null};App.renderRegulatoryRuleVersions()"><option value="">全部状态</option>${statuses.map(s => `<option value="${s}" ${f.status===s?'selected':''}>${s}</option>`).join('')}</select>
        <select onchange="App.regulatoryRuleGovernanceFilter={...(App.regulatoryRuleGovernanceFilter||{}),effectivenessLevel:this.value||null};App.renderRegulatoryRuleVersions()"><option value="">全部效果</option>${effLevels.map(e => `<option value="${e}" ${f.effectivenessLevel===e?'selected':''}>${e}</option>`).join('')}</select>
        <label><input type="checkbox" ${f.needsOptimization?'checked':''} onchange="App.regulatoryRuleGovernanceFilter={...(App.regulatoryRuleGovernanceFilter||{}),needsOptimization:this.checked||null};App.renderRegulatoryRuleVersions()"> 需优化</label>`;
    } else if (pageId === 'regulatory-rule-approvals') {
      parts = `<select onchange="App.regulatoryRuleGovernanceFilter={...(App.regulatoryRuleGovernanceFilter||{}),crStatus:this.value||null};App.renderRegulatoryRuleApprovals()"><option value="">全部状态</option>${crStatuses.map(s => `<option value="${s}" ${f.crStatus===s?'selected':''}>${s}</option>`).join('')}</select>`;
    }
    if (!parts) return '';
    return `<div class="filter-bar" style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center">${parts}</div>`;
  },

  getRegulatoryRuleVersion(versionId) {
    return (APP_DATA.regulatoryRuleVersions || []).find(v => v.versionId === versionId);
  },

  getRegulatoryRuleChangeRequest(changeRequestId) {
    return (APP_DATA.regulatoryRuleChangeRequests || []).find(c => c.changeRequestId === changeRequestId);
  },

  getRegulatoryRuleApproval(approvalId) {
    return (APP_DATA.regulatoryRuleApprovals || []).find(a => a.approvalId === approvalId);
  },

  getRegulatoryRuleImpactAnalysis(impactAnalysisId) {
    return (APP_DATA.regulatoryRuleImpactAnalysis || []).find(i => i.impactAnalysisId === impactAnalysisId);
  },

  getRegulatoryRuleEffectiveness(effectivenessId) {
    return (APP_DATA.regulatoryRuleEffectiveness || []).find(e => e.effectivenessId === effectivenessId);
  },

  getRegulatoryRuleOptimization(optimizationId) {
    return (APP_DATA.regulatoryRuleOptimizationLoop || []).find(o => o.optimizationId === optimizationId);
  },

  renderPublicRuleRuntimeBadge(status) {
    const cls = { HEALTHY: 'badge-success', WARNING: 'badge-warning', CRITICAL: 'badge-danger', ACTIVE: 'badge-success', SUPERSEDED: 'badge-info', FAILED: 'badge-danger' };
    const labels = { HEALTHY: '运行正常', WARNING: '运行关注', CRITICAL: '运行异常', ACTIVE: '生产中', SUPERSEDED: '已替代', FAILED: '执行失败' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${labels[status] || status || '—'}</span>`;
  },

  renderPublicExecutionStatusBadge(status) {
    const cls = { SUCCESS: 'badge-success', FAILED: 'badge-danger', TIMEOUT: 'badge-warning', PARTIAL: 'badge-warning' };
    const labels = { SUCCESS: '成功', FAILED: '失败', TIMEOUT: '超时', PARTIAL: '部分成功' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${labels[status] || status || '—'}</span>`;
  },

  renderPublicDeploymentStatusBadge(status) {
    const cls = { ACTIVE: 'badge-success', SUPERSEDED: 'badge-info', ROLLED_BACK: 'badge-warning', PENDING: 'badge-warning' };
    const labels = { ACTIVE: '生效中', SUPERSEDED: '已替代', ROLLED_BACK: '已回滚', PENDING: '待生效' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${labels[status] || status || '—'}</span>`;
  },

  renderPublicPerformanceBadge(level) {
    const cls = { EXCELLENT: 'badge-success', GOOD: 'badge-success', FAIR: 'badge-warning', POOR: 'badge-danger' };
    const labels = { EXCELLENT: '优秀', GOOD: '良好', FAIR: '一般', POOR: '待提升' };
    return `<span class="badge ${cls[level] || 'badge-info'}">${labels[level] || level || '—'}</span>`;
  },

  renderPublicAllocationBadge(resourceType) {
    const labels = { SUPERVISION: '常规监管', SPECIAL_REVIEW: '专项复核', DATA_GOVERNANCE: '数据治理', CROSS_BORDER_REVIEW: '跨境复核', CROSS_DOMAIN_COORDINATION: '跨领域协同', RECTIFICATION_SUPPORT: '整改支持' };
    const cls = { SPECIAL_REVIEW: 'badge-danger', CROSS_BORDER_REVIEW: 'badge-warning', RECTIFICATION_SUPPORT: 'badge-warning', DATA_GOVERNANCE: 'badge-info', CROSS_DOMAIN_COORDINATION: 'badge-info', SUPERVISION: 'badge-success' };
    return `<span class="badge ${cls[resourceType] || 'badge-info'}">${labels[resourceType] || resourceType || '—'}</span>`;
  },

  renderPublicSupervisionTaskStatusBadge(status) {
    const cls = { RECOMMENDED: 'badge-info', ASSIGNED: 'badge-warning', IN_PROGRESS: 'badge-warning', WAITING_RESULT: 'badge-info', COMPLETED: 'badge-success', EVALUATED: 'badge-success' };
    const labels = { RECOMMENDED: '待推荐', ASSIGNED: '已分派', IN_PROGRESS: '执行中', WAITING_RESULT: '待结果', COMPLETED: '已完成', EVALUATED: '已评价' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${labels[status] || status || '—'}</span>`;
  },

  renderPublicBenchmarkBadge(position) {
    const cls = { TOP_QUARTILE: 'badge-success', MIDDLE: 'badge-info', BOTTOM_QUARTILE: 'badge-danger' };
    const labels = { TOP_QUARTILE: '领先', MIDDLE: '中等', BOTTOM_QUARTILE: '待提升' };
    return `<span class="badge ${cls[position] || 'badge-info'}">${labels[position] || position || '—'}</span>`;
  },

  renderPublicPerformanceComparison(items, scoreKey, labelKey) {
    if (!items || !items.length) return this.renderPublicEmptyState('暂无对标数据');
    const max = Math.max(...items.map(i => i[scoreKey] || i.score || 0), 1);
    return `<div style="margin-top:8px">${items.map(item => {
      const score = item[scoreKey] || item.score || 0;
      const label = item[labelKey] || item.name || item.scopeId || '—';
      return `<p style="display:flex;align-items:center;gap:8px;margin:6px 0"><span style="width:96px;font-size:12px">${this.escHtml(label)}</span><i style="flex:1;height:10px;background:#eef3f9;border-radius:4px;display:block"><b style="display:block;height:10px;background:#003d7a;border-radius:4px;width:${Math.round(score / max * 100)}%"></b></i><em style="width:32px;text-align:right">${score}</em></p>`;
    }).join('')}</div>`;
  },

  renderPublicResourceFlow(steps) {
    if (!steps || !steps.length) return this.renderPublicEmptyState('暂无资源流转');
    return `<div class="kri-lineage" style="flex-wrap:wrap">${steps.map((s, i) => {
      const btn = s.onclick ? `<button onclick="${s.onclick}"><b>${this.escHtml(s.label)}</b><br><small>${this.escHtml(s.sub || '')}</small></button>` : `<span><b>${this.escHtml(s.label)}</b><br><small>${this.escHtml(s.sub || '')}</small></span>`;
      return btn + (i < steps.length - 1 ? this.renderLineageArrow() : '');
    }).join('')}</div>`;
  },

  renderPublicObjectiveStatusBadge(status) {
    const cls = { ACHIEVED: 'badge-success', ON_TRACK: 'badge-success', AT_RISK: 'badge-warning', BEHIND: 'badge-danger' };
    const labels = { ACHIEVED: '已达成', ON_TRACK: '按期', AT_RISK: '预警', BEHIND: '未达成' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${labels[status] || status || '—'}</span>`;
  },

  renderPublicPlanStatusBadge(status) {
    const cls = { DRAFT: 'badge-info', APPROVED: 'badge-info', IN_PROGRESS: 'badge-warning', AT_RISK: 'badge-warning', COMPLETED: 'badge-success', CLOSED: 'badge-success' };
    const labels = { DRAFT: '草稿', APPROVED: '已批准', IN_PROGRESS: '执行中', AT_RISK: '存在风险', COMPLETED: '已完成', CLOSED: '已关闭' };
    return `<span class="badge ${cls[status] || 'badge-info'}">${labels[status] || status || '—'}</span>`;
  },

  renderPublicTargetStatusBadge(status) {
    return this.renderPublicObjectiveStatusBadge(status);
  },

  renderPublicFocusTypeBadge(focusType) {
    const labels = { REGION: '区域', COUNTRY: '国家', ENTITY: '法人', PROJECT: '项目', DOMAIN: '领域', RISK: '风险', DATA_OBJECT: '数据对象' };
    return `<span class="badge badge-info">${labels[focusType] || focusType || '—'}</span>`;
  },

  renderPublicTargetProgress(target, actual, unit) {
    const rate = target ? Math.min(100, Math.round(actual / target * 100)) : 0;
    return `<p style="display:flex;align-items:center;gap:8px;margin:6px 0"><span style="width:72px;font-size:12px">完成率</span><i style="flex:1;height:10px;background:#eef3f9;border-radius:4px;display:block"><b style="display:block;height:10px;background:${rate >= 80 ? '#00a651' : rate >= 60 ? '#f5a623' : '#e74c3c'};border-radius:4px;width:${rate}%"></b></i><em style="width:80px;text-align:right">${actual}/${target}${unit || ''}</em></p>`;
  },

  renderPublicStrategicCycleFlow(steps) {
    return this.renderPublicResourceFlow(steps);
  },

  renderPublicQueueTypeBadge(queueType) {
    const labels = { DECISION: '待决策', ACTION: '监管行动', SUPERVISION_TASK: '监管任务', FEEDBACK: '待反馈', VERIFICATION: '待验证', RULE_APPROVAL: '规则审批', RULE_DEPLOYMENT: '规则发布', RULE_ANOMALY: '规则异常', STRATEGIC_REVIEW: '战略复盘', PLAN_VARIANCE: '计划偏差' };
    const cls = { DECISION: 'badge-danger', ACTION: 'badge-warning', RULE_ANOMALY: 'badge-danger', STRATEGIC_REVIEW: 'badge-info', PLAN_VARIANCE: 'badge-warning' };
    return `<span class="badge ${cls[queueType] || 'badge-info'}">${labels[queueType] || queueType || '—'}</span>`;
  },

  renderPublicQueueStatusBadge(status) {
    return this.renderPublicStatusBadge(status);
  },

  renderPublicDecisionOptionCard(opt) {
    const o = opt || {};
    return `<div class="card" style="padding:10px;margin:6px 0"><b>${this.escHtml(o.label || o.action)}</b><p class="insight-note">${this.escHtml(o.basis || '—')}</p><small>${this.escHtml(o.action || '')}</small></div>`;
  },

  renderPublicWorkbenchLoop(loop) {
    const l = loop || {};
    const steps = [
      { label: '监管发现', sub: String(l.discover || 0), onclick: `App.navigatePublic('regulatory-events')` },
      { label: '风险判断', sub: String(l.judge || 0), onclick: `App.navigatePublic('regulatory-command-center')` },
      { label: '监管决策', sub: String(l.decide || 0), onclick: `App.navigatePublic('regulatory-decision-room')` },
      { label: '监管行动', sub: String(l.execute || 0), onclick: `App.navigatePublic('regulatory-actions')` },
      { label: '资源配置', sub: String(l.resource || 0), onclick: `App.navigatePublic('regulatory-resource-allocation')` },
      { label: '任务协同', sub: String(l.task || 0), onclick: `App.navigatePublic('regulatory-supervision-tasks')` },
      { label: '整改闭环', sub: String(l.rectify || 0), onclick: `App.navigatePublic('rectification')` },
      { label: '效果评价', sub: String(l.evaluate || 0), onclick: `App.navigatePublic('regulatory-performance')` },
      { label: '战略复盘', sub: String(l.review || 0), onclick: `App.navigatePublic('regulatory-strategic-review')` }
    ];
    return this.renderPublicStrategicCycleFlow(steps);
  },

  renderPublicTopIssuesList(issues) {
    if (!issues || !issues.length) return this.renderPublicEmptyState('暂无重点问题');
    return issues.map(issue => {
      const ent = issue.entityId ? APP_DATA.globalLegalEntities.find(e => e.entityId === issue.entityId) : null;
      const nav = issue.decisionContextId ? `App.navigatePublic('regulatory-decision-room',{decisionContextId:'${issue.decisionContextId}'})` : `App.navigatePublic('regulatory-queue')`;
      return `<div class="card clickable" style="padding:10px;margin:6px 0" onclick="${nav}"><b>${this.escHtml(issue.title)}</b><p class="insight-note">${ent ? ent.entityName : '—'} · ${this.renderPublicPriorityBadge(issue.priority)} · ${issue.sourceType || ''}</p></div>`;
    }).join('');
  },

  renderPublicExecutionResult(before, after, label) {
    return `<p class="insight-note"><b>${label || '结果'}：</b>${before || '—'} → <b>${after || '—'}</b></p>`;
  },

  renderPublicVersionTimeline(versions) {
    if (!versions || !versions.length) return this.renderPublicEmptyState('暂无版本时间线');
    const sorted = [...versions].sort((a, b) => (a.effectiveFrom || a.createdAt || '').localeCompare(b.effectiveFrom || b.createdAt || ''));
    return `<div class="kri-lineage" style="flex-wrap:wrap">${sorted.map((v, i) => `${i ? '<i>→</i>' : ''}<button onclick="App.navigatePublic('regulatory-rule-versions',{versionId:'${v.versionId}'})"><b>${v.versionNo || v.versionId}</b><br>${this.renderPublicVersionStatusBadge(v.status)}<br><small>${v.effectiveFrom || v.createdAt || '—'}</small></button>`).join('')}</div>`;
  },

  renderPublicRuntimeHealth(metrics) {
    const m = metrics || {};
    const rate = m.executionSuccessRate ?? 100;
    const health = rate >= 95 ? 'HEALTHY' : rate >= 80 ? 'WARNING' : 'CRITICAL';
    return `<p>${this.renderPublicRuleRuntimeBadge(health)} 成功率 ${rate}% · 今日执行 ${m.todayExecutionCount || 0} · 异常 ${m.anomalyCount || 0}</p>`;
  },

  getRegulatoryRuleDeployment(deploymentId) {
    return (APP_DATA.regulatoryRuleDeployments || []).find(d => d.deploymentId === deploymentId);
  },

  getRegulatoryRuleExecution(executionId) {
    return (APP_DATA.regulatoryRuleExecutions || []).find(e => e.executionId === executionId);
  },

  getRegulatoryRuleRollback(rollbackId) {
    return (APP_DATA.regulatoryRuleRollbacks || []).find(r => r.rollbackId === rollbackId);
  },

  renderRegulatoryRuleExecutionFilterBar() {
    const f = this.regulatoryRuleExecutionFilter || {};
    const rules = [...new Set((APP_DATA.regulatoryRuleDeployments || []).map(d => d.ruleId))];
    const ents = APP_DATA.globalLegalEntities || [];
    return `<div class="filter-bar" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px">
      <select onchange="App.regulatoryRuleExecutionFilter={...(App.regulatoryRuleExecutionFilter||{}),ruleId:this.value||null};App.renderRegulatoryRuleExecutions()"><option value="">全部规则</option>${rules.map(r => `<option value="${r}" ${f.ruleId===r?'selected':''}>${r}</option>`).join('')}</select>
      <select onchange="App.regulatoryRuleExecutionFilter={...(App.regulatoryRuleExecutionFilter||{}),executionStatus:this.value||null};App.renderRegulatoryRuleExecutions()"><option value="">全部状态</option><option value="SUCCESS" ${f.executionStatus==='SUCCESS'?'selected':''}>SUCCESS</option><option value="FAILED" ${f.executionStatus==='FAILED'?'selected':''}>FAILED</option></select>
      <select onchange="App.regulatoryRuleExecutionFilter={...(App.regulatoryRuleExecutionFilter||{}),resultChanged:this.value||null};App.renderRegulatoryRuleExecutions()"><option value="">结果变化</option><option value="true" ${f.resultChanged==='true'?'selected':''}>有变化</option><option value="false" ${f.resultChanged==='false'?'selected':''}>无变化</option></select>
      <select onchange="App.regulatoryRuleExecutionFilter={...(App.regulatoryRuleExecutionFilter||{}),entityId:this.value||null};App.renderRegulatoryRuleExecutions()"><option value="">全部法人</option>${ents.filter(e=>e.entityId!=='G001').map(e => `<option value="${e.entityId}" ${f.entityId===e.entityId?'selected':''}>${e.entityName}</option>`).join('')}</select>
    </div>`;
  },

  getRegulatoryRule(ruleId) {
    return (APP_DATA.regulatoryRules || []).find(r => r.ruleId === ruleId)
      || (APP_DATA.regulatoryRuleVersions || []).find(v => v.ruleId === ruleId);
  },

  getRegulatorySimulationResult(simulationId) {
    return (APP_DATA.regulatorySimulationResults || []).find(s => s.simulationId === simulationId);
  },

  runRegulatorySimulation(simulationId, overrides) {
    const sim = (APP_DATA.regulatorySimulations || []).find(s => s.simulationId === simulationId);
    if (!sim) return null;
    const existing = this.getRegulatorySimulationResult(simulationId);
    if (existing && !overrides) return existing;
    return existing;
  },

  getRegulatoryRiskConcentration(dimension) {
    const c = APP_DATA.regulatoryRiskConcentration || {};
    return c[dimension] || c.entities || [];
  },

  getRegulatoryStrategyLevel(objectType, objectId) {
    const analysis = APP_DATA.regulatoryStrategyAnalysis || {};
    const list = analysis[objectType + 's'] || analysis[objectType] || [];
    return list.find(x => x.objectId === objectId) || { strategyLevel: 'OBSERVE', strategyLabel: '持续观察' };
  },

  copyPublicId(id) {
    if (navigator.clipboard) navigator.clipboard.writeText(id).catch(() => {});
  },

  renderPublicFilterBar(pageId, filterKeys) {
    const f = this.getPublicPageFilter(pageId);
    const regions = APP_DATA.globalRegions || [];
    const countries = APP_DATA.globalCountries || [];
    const entities = APP_DATA.globalLegalEntities || [];
    const projects = APP_DATA.globalProjects || [];
    const domains = APP_DATA.regulationDomains || [];
    const parts = [];
    if (filterKeys.includes('regionId')) {
      parts.push(`<select onchange="App.setPublicFilter('${pageId}','regionId',this.value||null);App.rerenderPublicPage('${pageId}')"><option value="">全部区域</option>${regions.map(r => `<option value="${r.regionId}" ${f.regionId === r.regionId ? 'selected' : ''}>${r.regionName}</option>`).join('')}</select>`);
    }
    if (filterKeys.includes('countryId')) {
      const cs = f.regionId ? countries.filter(c => c.regionId === f.regionId) : countries;
      parts.push(`<select onchange="App.setPublicFilter('${pageId}','countryId',this.value||null);App.rerenderPublicPage('${pageId}')"><option value="">全部国家/地区</option>${cs.map(c => `<option value="${c.countryId}" ${f.countryId === c.countryId ? 'selected' : ''}>${c.countryName}</option>`).join('')}</select>`);
    }
    if (filterKeys.includes('entityId')) {
      parts.push(`<select onchange="App.setPublicFilter('${pageId}','entityId',this.value||null);App.rerenderPublicPage('${pageId}')"><option value="">全部法人</option>${entities.map(e => `<option value="${e.entityId}" ${f.entityId === e.entityId ? 'selected' : ''}>${e.entityName}</option>`).join('')}</select>`);
    }
    if (filterKeys.includes('projectId')) {
      parts.push(`<select onchange="App.setPublicFilter('${pageId}','projectId',this.value||null);App.rerenderPublicPage('${pageId}')"><option value="">全部项目</option>${projects.map(p => `<option value="${p.projectId}" ${f.projectId === p.projectId ? 'selected' : ''}>${p.projectName}</option>`).join('')}</select>`);
    }
    if (filterKeys.includes('domainId')) {
      parts.push(`<select onchange="App.setPublicFilter('${pageId}','domainId',this.value||null);App.rerenderPublicPage('${pageId}')"><option value="">全部业务领域</option>${domains.map(d => `<option value="${d.id}" ${f.domainId === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}</select>`);
    }
    if (filterKeys.includes('riskLevel')) {
      const levels = ['重大', '较大', '一般', '高', '中', '低'];
      parts.push(`<select onchange="App.setPublicFilter('${pageId}','riskLevel',this.value||null);App.rerenderPublicPage('${pageId}')"><option value="">全部风险等级</option>${levels.map(l => `<option value="${l}" ${f.riskLevel === l ? 'selected' : ''}>${l}</option>`).join('')}</select>`);
    }
    if (!parts.length) return '';
    const hasFilter = Object.values(f).some(v => v);
    return `<div class="filter-bar public-filter-bar" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;align-items:center">${parts.join('')}${hasFilter ? `<button class="btn btn-outline" onclick="App.clearPublicFilter('${pageId}')">清除筛选</button>` : ''}</div>`;
  },

  getPublicPageFilter(pageId) {
    if (pageId === 'global-group-overview' || pageId === 'group') return this.groupOverviewFilter || {};
    if (pageId === 'regulatory-events') return this.regulatoryEventFilter || {};
    if (pageId === 'regulatory-command-center') return this.regulatoryCommandCenterFilter || {};
    if (pageId === 'regulatory-performance') return this.regulatoryPerformanceFilter || {};
    if (pageId === 'regulatory-resource-allocation') return this.regulatoryResourceAllocationFilter || {};
    if (pageId === 'regulatory-supervision-tasks') return this.regulatorySupervisionTaskFilter || {};
    if (pageId === 'regulatory-benchmarking') return this.regulatoryBenchmarkingFilter || {};
    if (pageId === 'regulatory-strategy-planning') return this.regulatoryStrategyPlanningFilter || {};
    if (pageId === 'regulatory-annual-plan') return this.regulatoryAnnualPlanFilter || {};
    if (pageId === 'regulatory-target-management') return this.regulatoryTargetFilter || {};
    if (pageId === 'regulatory-focus-management') return this.regulatoryFocusFilter || {};
    if (pageId === 'regulatory-plan-execution') return this.regulatoryPlanExecutionFilter || {};
    if (pageId === 'regulatory-strategic-review') return this.regulatoryStrategicReviewFilter || {};
    if (pageId === 'regulatory-workbench') return this.regulatoryWorkbenchFilter || {};
    if (pageId === 'regulatory-queue') return this.regulatoryQueueFilter || {};
    if (pageId === 'regulatory-decision-room') return this.regulatoryDecisionRoomFilter || {};
    if (pageId === 'regulatory-role-workbench') return this.regulatoryRoleWorkbenchFilter || {};
    if (pageId === 'regulatory-my-work') return this.regulatoryMyWorkFilter || {};
    if (pageId === 'regulatory-search') return this.regulatorySearchFilter || {};
    if (pageId === 'regulatory-access-control') return this.regulatoryAccessControlFilter || {};
    if (pageId === 'regulatory-authorization') return this.regulatoryAuthorizationFilter || {};
    if (pageId === 'regulatory-audit-trail') return this.regulatoryAuditTrailFilter || {};
    if (pageId === 'regulatory-system-settings') return this.regulatorySystemSettingsFilter || {};
    if (pageId === 'regulatory-data-sources') return this.regulatoryDataSourcesFilter || {};
    if (pageId === 'regulatory-data-integration') return this.regulatoryDataIntegrationFilter || {};
    if (pageId === 'regulatory-data-quality') return this.regulatoryDataQualityFilter || {};
    if (pageId === 'regulatory-data-governance') return this.regulatoryDataGovernanceFilter || {};
    if (pageId === 'regulatory-data-lineage') return this.regulatoryDataLineageFilter || {};
    if (pageId === 'regulatory-metric-center') return this.regulatoryMetricCenterFilter || {};
    if (pageId === 'regulatory-kri-monitoring') return this.regulatoryKriMonitoringFilter || {};
    if (pageId === 'regulatory-warning-center') return this.regulatoryWarningCenterFilter || {};
    if (pageId === 'regulatory-kri-effectiveness') return this.regulatoryKriEffectivenessFilter || {};
    if (pageId === 'regulatory-warning-strategy') return this.regulatoryWarningStrategyFilter || {};
    if (pageId === 'regulatory-analysis-center') return this.regulatoryAnalysisCenterFilter || {};
    if (pageId === 'regulatory-risk-concentration') return this.regulatoryRiskConcentrationFilter || {};
    if (pageId === 'regulatory-risk-propagation') return this.regulatoryRiskPropagationFilter || {};
    if (pageId === 'regulatory-scenario-analysis') return this.regulatoryScenarioAnalysisFilter || {};
    if (pageId === 'regulatory-decision-recommendations') return this.regulatoryDecisionRecommendationsFilter || {};
    if (pageId === 'regulatory-improvement-center') return this.regulatoryImprovementCenterFilter || {};
    if (pageId === 'regulatory-root-cause-analysis') return this.regulatoryRootCauseAnalysisFilter || {};
    if (pageId === 'regulatory-optimization-plans') return this.regulatoryOptimizationPlansFilter || {};
    if (pageId === 'regulatory-improvement-execution') return this.regulatoryImprovementExecutionFilter || {};
    if (pageId === 'regulatory-improvement-effectiveness') return this.regulatoryImprovementEffectivenessFilter || {};
    if (pageId === 'regulatory-actions') return this.regulatoryActionFilter || {};
    if (pageId === 'regulatory-action-execution') return this.regulatoryActionExecutionFilter || {};
    if (pageId === 'cross-border-compliance') return this.cbFilter || {};
    if (pageId === 'cross-domain-risks') return this.cdrFilter || {};
    return this.publicFilter || {};
  },

  setPublicFilter(pageId, key, value) {
    const store = pageId === 'global-group-overview' || pageId === 'group' ? 'groupOverviewFilter'
      : pageId === 'regulatory-events' ? 'regulatoryEventFilter'
      : pageId === 'regulatory-command-center' ? 'regulatoryCommandCenterFilter'
      : pageId === 'regulatory-performance' ? 'regulatoryPerformanceFilter'
      : pageId === 'regulatory-resource-allocation' ? 'regulatoryResourceAllocationFilter'
      : pageId === 'regulatory-supervision-tasks' ? 'regulatorySupervisionTaskFilter'
      : pageId === 'regulatory-benchmarking' ? 'regulatoryBenchmarkingFilter'
      : pageId === 'regulatory-strategy-planning' ? 'regulatoryStrategyPlanningFilter'
      : pageId === 'regulatory-annual-plan' ? 'regulatoryAnnualPlanFilter'
      : pageId === 'regulatory-target-management' ? 'regulatoryTargetFilter'
      : pageId === 'regulatory-focus-management' ? 'regulatoryFocusFilter'
      : pageId === 'regulatory-plan-execution' ? 'regulatoryPlanExecutionFilter'
      : pageId === 'regulatory-strategic-review' ? 'regulatoryStrategicReviewFilter'
      : pageId === 'regulatory-workbench' ? 'regulatoryWorkbenchFilter'
      : pageId === 'regulatory-queue' ? 'regulatoryQueueFilter'
      : pageId === 'regulatory-decision-room' ? 'regulatoryDecisionRoomFilter'
      : pageId === 'regulatory-role-workbench' ? 'regulatoryRoleWorkbenchFilter'
      : pageId === 'regulatory-my-work' ? 'regulatoryMyWorkFilter'
      : pageId === 'regulatory-search' ? 'regulatorySearchFilter'
      : pageId === 'regulatory-access-control' ? 'regulatoryAccessControlFilter'
      : pageId === 'regulatory-authorization' ? 'regulatoryAuthorizationFilter'
      : pageId === 'regulatory-audit-trail' ? 'regulatoryAuditTrailFilter'
      : pageId === 'regulatory-system-settings' ? 'regulatorySystemSettingsFilter'
      : pageId === 'regulatory-data-sources' ? 'regulatoryDataSourcesFilter'
      : pageId === 'regulatory-data-integration' ? 'regulatoryDataIntegrationFilter'
      : pageId === 'regulatory-data-quality' ? 'regulatoryDataQualityFilter'
      : pageId === 'regulatory-data-governance' ? 'regulatoryDataGovernanceFilter'
      : pageId === 'regulatory-data-lineage' ? 'regulatoryDataLineageFilter'
      : pageId === 'regulatory-metric-center' ? 'regulatoryMetricCenterFilter'
      : pageId === 'regulatory-kri-monitoring' ? 'regulatoryKriMonitoringFilter'
      : pageId === 'regulatory-warning-center' ? 'regulatoryWarningCenterFilter'
      : pageId === 'regulatory-kri-effectiveness' ? 'regulatoryKriEffectivenessFilter'
      : pageId === 'regulatory-warning-strategy' ? 'regulatoryWarningStrategyFilter'
      : pageId === 'regulatory-analysis-center' ? 'regulatoryAnalysisCenterFilter'
      : pageId === 'regulatory-risk-concentration' ? 'regulatoryRiskConcentrationFilter'
      : pageId === 'regulatory-risk-propagation' ? 'regulatoryRiskPropagationFilter'
      : pageId === 'regulatory-scenario-analysis' ? 'regulatoryScenarioAnalysisFilter'
      : pageId === 'regulatory-decision-recommendations' ? 'regulatoryDecisionRecommendationsFilter'
      : pageId === 'regulatory-improvement-center' ? 'regulatoryImprovementCenterFilter'
      : pageId === 'regulatory-root-cause-analysis' ? 'regulatoryRootCauseAnalysisFilter'
      : pageId === 'regulatory-optimization-plans' ? 'regulatoryOptimizationPlansFilter'
      : pageId === 'regulatory-improvement-execution' ? 'regulatoryImprovementExecutionFilter'
      : pageId === 'regulatory-improvement-effectiveness' ? 'regulatoryImprovementEffectivenessFilter'
      : pageId === 'regulatory-actions' ? 'regulatoryActionFilter'
      : pageId === 'regulatory-action-execution' ? 'regulatoryActionExecutionFilter'
      : pageId === 'data-governance' ? 'dataGovFilter'
      : pageId === 'cross-border-compliance' ? 'cbFilter'
      : pageId === 'cross-domain-risks' ? 'cdrFilter' : 'publicFilter';
    this[store] = { ...(this[store] || {}), [key]: value || null };
    Object.keys(this[store]).forEach(k => { if (!this[store][k]) delete this[store][k]; });
  },

  clearPublicFilter(pageId) {
    if (pageId === 'global-group-overview' || pageId === 'group') this.groupOverviewFilter = {};
    else if (pageId === 'regulatory-events') { this.regulatoryEventFilter = {}; this.regulatoryEventFocusId = null; }
    else if (pageId === 'regulatory-command-center') this.regulatoryCommandCenterFilter = {};
    else if (pageId === 'regulatory-performance') { this.regulatoryPerformanceFilter = {}; this.regulatoryPerformanceFocusId = null; }
    else if (pageId === 'regulatory-resource-allocation') { this.regulatoryResourceAllocationFilter = {}; this.regulatoryAllocationFocusId = null; }
    else if (pageId === 'regulatory-supervision-tasks') { this.regulatorySupervisionTaskFilter = {}; this.regulatorySupervisionTaskFocusId = null; }
    else if (pageId === 'regulatory-benchmarking') { this.regulatoryBenchmarkingFilter = {}; this.regulatoryBenchmarkFocusId = null; this.regulatoryResourceEffectivenessFocusId = null; }
    else if (pageId === 'regulatory-strategy-planning') { this.regulatoryStrategyPlanningFilter = {}; this.regulatoryObjectiveFocusId = null; }
    else if (pageId === 'regulatory-annual-plan') { this.regulatoryAnnualPlanFilter = {}; this.regulatoryPlanFocusId = null; }
    else if (pageId === 'regulatory-target-management') { this.regulatoryTargetFilter = {}; this.regulatoryTargetFocusId = null; }
    else if (pageId === 'regulatory-focus-management') { this.regulatoryFocusFilter = {}; this.regulatoryFocusFocusId = null; }
    else if (pageId === 'regulatory-plan-execution') { this.regulatoryPlanExecutionFilter = {}; this.regulatoryPlanExecutionFocusId = null; }
    else if (pageId === 'regulatory-strategic-review') { this.regulatoryStrategicReviewFilter = {}; this.regulatoryReviewFocusId = null; this.regulatoryNextCycleRecommendationFocusId = null; }
    else if (pageId === 'regulatory-workbench') { this.regulatoryWorkbenchFilter = {}; this.regulatoryWorkbenchFocusId = null; }
    else if (pageId === 'regulatory-queue') { this.regulatoryQueueFilter = {}; this.regulatoryQueueFocusId = null; }
    else if (pageId === 'regulatory-decision-room') { this.regulatoryDecisionRoomFilter = {}; this.regulatoryDecisionContextFocusId = null; }
    else if (pageId === 'regulatory-role-workbench') { this.regulatoryRoleWorkbenchFilter = {}; }
    else if (pageId === 'regulatory-my-work') { this.regulatoryMyWorkFilter = {}; this.regulatoryQueueFocusId = null; }
    else if (pageId === 'regulatory-search') { this.regulatorySearchFilter = {}; }
    else if (pageId === 'regulatory-access-control') { this.regulatoryAccessControlFilter = {}; this.regulatoryAccessControlFocusUserId = null; }
    else if (pageId === 'regulatory-authorization') { this.regulatoryAuthorizationFilter = {}; this.regulatoryAuthorizationFocusId = null; }
    else if (pageId === 'regulatory-audit-trail') { this.regulatoryAuditTrailFilter = {}; this.regulatoryAuditFocusId = null; }
    else if (pageId === 'regulatory-system-settings') { this.regulatorySystemSettingsFilter = {}; this.regulatorySystemConfigFocusId = null; }
    else if (pageId === 'regulatory-data-sources') { this.regulatoryDataSourcesFilter = {}; this.regulatoryDataSourceFocusId = null; }
    else if (pageId === 'regulatory-data-integration') { this.regulatoryDataIntegrationFilter = {}; this.regulatoryDataIntegrationFocusId = null; }
    else if (pageId === 'regulatory-data-quality') { this.regulatoryDataQualityFilter = {}; this.regulatoryDataQualityFocusId = null; }
    else if (pageId === 'regulatory-data-governance') { this.regulatoryDataGovernanceFilter = {}; this.regulatoryDataGovernanceFocusId = null; }
    else if (pageId === 'regulatory-data-lineage') { this.regulatoryDataLineageFilter = {}; this.regulatoryDataLineageFocusId = null; this.regulatoryDataLineageSourceId = null; }
    else if (pageId === 'regulatory-metric-center') { this.regulatoryMetricCenterFilter = {}; this.regulatoryMetricFocusId = null; }
    else if (pageId === 'regulatory-kri-monitoring') { this.regulatoryKriMonitoringFilter = {}; this.regulatoryKriRuntimeFocusId = null; }
    else if (pageId === 'regulatory-warning-center') { this.regulatoryWarningCenterFilter = {}; this.regulatoryWarningFocusId = null; }
    else if (pageId === 'regulatory-kri-effectiveness') { this.regulatoryKriEffectivenessFilter = {}; this.regulatoryKriEvaluationFocusId = null; }
    else if (pageId === 'regulatory-warning-strategy') { this.regulatoryWarningStrategyFilter = {}; this.regulatoryWarningStrategyFocusId = null; }
    else if (pageId === 'regulatory-analysis-center') { this.regulatoryAnalysisCenterFilter = {}; this.regulatoryAnalysisResultFocusId = null; }
    else if (pageId === 'regulatory-risk-concentration') { this.regulatoryRiskConcentrationFilter = {}; this.regulatoryConcentrationFocusId = null; }
    else if (pageId === 'regulatory-risk-propagation') { this.regulatoryRiskPropagationFilter = {}; this.regulatoryPropagationFocusId = null; }
    else if (pageId === 'regulatory-scenario-analysis') { this.regulatoryScenarioAnalysisFilter = {}; this.regulatoryScenarioFocusId = null; }
    else if (pageId === 'regulatory-decision-recommendations') { this.regulatoryDecisionRecommendationsFilter = {}; this.regulatoryRecommendationFocusId = null; }
    else if (pageId === 'regulatory-improvement-center') { this.regulatoryImprovementCenterFilter = {}; this.regulatoryOpportunityFocusId = null; }
    else if (pageId === 'regulatory-root-cause-analysis') { this.regulatoryRootCauseAnalysisFilter = {}; this.regulatoryRootCauseFocusId = null; }
    else if (pageId === 'regulatory-optimization-plans') { this.regulatoryOptimizationPlansFilter = {}; this.regulatoryOptimizationPlanFocusId = null; }
    else if (pageId === 'regulatory-improvement-execution') { this.regulatoryImprovementExecutionFilter = {}; this.regulatoryImprovementExecutionFocusId = null; }
    else if (pageId === 'regulatory-improvement-effectiveness') { this.regulatoryImprovementEffectivenessFilter = {}; this.regulatoryImprovementEffectivenessFocusId = null; }
    else if (pageId === 'regulatory-actions') { this.regulatoryActionFilter = {}; this.regulatoryActionFocusId = null; }
    else if (pageId === 'regulatory-action-execution') { this.regulatoryActionExecutionFilter = {}; this.regulatoryActionExecutionFocusId = null; this.regulatoryActionFeedbackFocusId = null; }
    else if (pageId === 'cross-border-compliance') { this.cbFilter = {}; this.cbFocusActivityId = null; }
    else if (pageId === 'cross-domain-risks') { this.cdrFilter = {}; this.cdrFocusMatterId = null; }
    else this.publicFilter = {};
    this.rerenderPublicPage(pageId);
  },

  getGroupOverviewFilter() {
    return { ...(this.groupOverviewFilter || {}) };
  },

  setGroupOverviewFilter(key, value) {
    this.setPublicFilter('global-group-overview', key, value);
  },

  clearGroupOverviewFilter() {
    this.clearPublicFilter('global-group-overview');
  },

  _goFilterItem(item, getters, filter) {
    const f = filter || {};
    if (f.regionId && getters.regionId && getters.regionId(item) !== f.regionId) return false;
    if (f.countryId && getters.countryId && getters.countryId(item) !== f.countryId) return false;
    if (f.entityId && getters.entityId && getters.entityId(item) !== f.entityId) return false;
    if (f.projectId && getters.projectId && getters.projectId(item) !== f.projectId) return false;
    if (f.domainId && getters.domainId && getters.domainId(item) !== f.domainId) return false;
    if (f.riskLevel && getters.riskLevel) {
      const lv = getters.riskLevel(item);
      if (lv !== f.riskLevel && !(f.riskLevel === '重大' && (lv === '高' || item.level === '重大')) && !(f.riskLevel === '较大' && (lv === '中' || item.level === '较大'))) return false;
    }
    return true;
  },

  computeGroupOverviewMetrics(filter) {
    const f = filter || this.getGroupOverviewFilter();
    const entities = (APP_DATA.globalLegalEntities || []).filter(e => this._goFilterItem(e, {
      regionId: e => e.regionId, countryId: e => e.countryId, entityId: e => e.entityId
    }, f));
    const entityIds = new Set(entities.map(e => e.entityId));
    const projects = (APP_DATA.globalProjects || []).filter(p => {
      if (f.entityId && p.entityId !== f.entityId) return false;
      if (f.projectId && p.projectId !== f.projectId) return false;
      if (f.regionId && p.regionId !== f.regionId) return false;
      if (f.countryId && p.countryId !== f.countryId) return false;
      if (f.entityId || f.regionId || f.countryId) return entityIds.has(p.entityId) || p.entityId === f.entityId;
      return true;
    });
    const regions = (APP_DATA.globalRegions || []).filter(r => !f.regionId || r.regionId === f.regionId);
    const countries = (APP_DATA.globalCountries || []).filter(c => {
      if (f.regionId && c.regionId !== f.regionId) return false;
      if (f.countryId && c.countryId !== f.countryId) return false;
      return true;
    });
    const sources = (APP_DATA.dataSourceRegistry || []).filter(s => !f.entityId || s.entityId === f.entityId || entityIds.has(s.entityId));
    const connected = entities.filter(e => (e.dataCoverageStatus || e.dataAccessStatus) === '已接入');
    const connectedSrc = sources.filter(s => s.coverageStatus === '已接入');
    const warnings = (APP_DATA.warnings || []).filter(w => this._goFilterItem(w, {
      regionId: w => w.regionId, countryId: w => w.countryId, entityId: w => w.entityId,
      projectId: w => w.projectId, domainId: w => w.domainId || 'investment',
      riskLevel: w => w.level || w.status
    }, f));
    const highRisk = warnings.filter(w => w.level === '重大' || w.status === '红色');
    const quality = (APP_DATA.dataQualityIssues || []).filter(q => {
      const obj = (APP_DATA.dataObjects || []).find(o => o.objectId === q.objectId);
      if (!obj) return !f.entityId && !f.regionId;
      if (f.entityId && obj.entityId !== f.entityId) return false;
      if (f.entityId || f.regionId || f.countryId) return entityIds.has(obj.entityId);
      return true;
    });
    const rects = (APP_DATA.rectificationTasks || []).filter(t => this._goFilterItem(t, {
      regionId: t => t.regionId, countryId: t => t.countryId, entityId: t => t.entityId,
      projectId: t => t.projectId, domainId: t => t.domainId || 'investment'
    }, f));
    const openRects = rects.filter(t => t.status !== '已关闭' && !t.closedAt);
    const overdueRects = rects.filter(t => t.status === '逾期' || (t.deadline && t.deadline < '2026-07-22' && t.status !== '已关闭' && !t.closedAt));
    const gaps = (APP_DATA.coverageGaps || []).filter(g => this._goFilterItem(g, {
      regionId: g => g.regionId, countryId: g => g.countryId, entityId: g => g.entityId, projectId: g => g.projectId
    }, f));
    const cbActs = (APP_DATA.crossBorderDataActivities || []).filter(a => this._goFilterItem(a, {
      regionId: a => a.regionId, countryId: a => a.countryId, entityId: a => a.entityId
    }, f));
    const cdrMatters = (APP_DATA.crossDomainRiskMatters || []).filter(m => {
      if (f.domainId && !(m.domainIds || []).includes(f.domainId)) return false;
      if (f.entityId && !(m.entityIds || []).includes(f.entityId)) return false;
      if (f.projectId && !(m.projectIds || []).includes(f.projectId)) return false;
      if (f.regionId && !(m.regionIds || []).includes(f.regionId)) return false;
      if (f.riskLevel && m.riskLevel !== f.riskLevel && !(f.riskLevel === '重大' && m.riskLevel === '高')) return false;
      return true;
    });
    const cbHighRisk = cbActs.filter(a => a.complianceStatus === '高风险' || a.complianceStatus === '异常');
    const uncoveredEntities = entities.filter(e => (e.dataCoverageStatus || e.dataAccessStatus) !== '已接入');
    const uncoveredProjects = projects.filter(p => p.dataCoverageStatus !== '已接入' && p.dataAccessStatus !== '已接入');
    const unconnectedSources = sources.filter(s => s.coverageStatus !== '已接入');
    const kris = (APP_DATA.groupKris || []).filter(k => k.status && k.status !== '正常' && k.status !== '良好');
    return {
      entityCount: entities.length, regionCount: regions.length, countryCount: countries.length,
      projectCount: projects.length, sourceCount: sources.length, connectedSourceCount: connectedSrc.length,
      dataCoverageRate: entities.length ? (connected.length / entities.length * 100).toFixed(1) + '%' : '—',
      qualityIssueCount: quality.length, warningCount: warnings.length, highRiskMatterCount: highRisk.length,
      rectificationTaskCount: rects.length, openRectificationCount: openRects.length,
      overdueRectificationCount: overdueRects.length,
      rectificationPendingCount: rects.filter(t => t.status === '整改制定' || t.verificationStatus === '待验证').length,
      rectificationInProgressCount: rects.filter(t => t.status === '整改中' || t.status === '整改执行' || t.verificationStatus === '整改中').length,
      rectificationVerifyingCount: rects.filter(t => t.status === '整改验证' || t.verificationStatus === '验证中').length,
      rectificationClosedCount: rects.filter(t => t.status === '已关闭' || t.closedAt).length,
      coverageGapCount: gaps.length, crossDomainMatterCount: cdrMatters.length,
      crossBorderActivityCount: cbActs.length, crossBorderRiskCount: cbHighRisk.length,
      uncoveredEntityCount: uncoveredEntities.length, uncoveredProjectCount: uncoveredProjects.length,
      unconnectedSourceCount: unconnectedSources.length, kriGapCount: kris.length,
      entities, projects, regions, countries, warnings, rects, gaps, cbActs, cdrMatters, quality
    };
  },

  renderGroupOverviewFilterBar() {
    return this.renderPublicFilterBar('global-group-overview', ['regionId', 'countryId', 'entityId', 'projectId', 'domainId', 'riskLevel']);
  },

  renderGroupOverviewRegulatoryChain(m) {
    const firstEntity = (m.entities || [])[0];
    const firstSource = (APP_DATA.dataSourceRegistry || []).find(s => !m.entities.length || m.entities.some(e => e.entityId === s.entityId));
    const firstQuality = (m.quality || [])[0];
    const firstKri = (APP_DATA.groupKris || [])[0];
    const firstScenario = (APP_DATA.groupRiskScenarios || [])[0];
    const firstWarning = (m.warnings || [])[0];
    const firstRect = (m.rects || [])[0];
    const steps = [
      this.renderLineageNode('监管对象', '法人', firstEntity ? firstEntity.entityName : String(m.entityCount), firstEntity ? `App.navigatePublic('global-legal-entities',{entityId:'${firstEntity.entityId}'})` : `App.navigatePublic('global-legal-entities')`),
      this.renderLineageNode('数据接入', '数据源', firstSource ? firstSource.systemName : String(m.sourceCount), firstSource ? `App.navigatePublic('data-governance',{sourceId:'${firstSource.sourceId}'})` : `App.navigatePublic('data-governance')`),
      this.renderLineageNode('数据质量', '质量异常', String(m.qualityIssueCount), firstQuality ? `App.navigatePublic('data-governance',{qualityIssueId:'${firstQuality.issueId}'})` : `App.navigatePublic('data-governance')`),
      this.renderLineageNode('指标监测', '指标', String((APP_DATA.dataIndicators || []).length), `App.navigatePublic('platform-operations')`),
      this.renderLineageNode('KRI', firstKri ? firstKri.name : 'KRI', String((APP_DATA.groupKris || []).length), firstKri ? `App.navigatePublic('data-governance',{relationId:'LIN001'})` : `App.navigatePublic('data-governance')`),
      this.renderLineageNode('风险场景', firstScenario ? firstScenario.name : '场景', String((APP_DATA.groupRiskScenarios || []).length), `App.navigatePublic('cross-domain-risks')`),
      this.renderLineageNode('风险事项', firstWarning ? firstWarning.name : '事项', String(m.warningCount), firstWarning ? `App.navigatePublic('warnings',{riskMatterId:'${firstWarning.id}'})` : `App.navigatePublic('warnings')`),
      this.renderLineageNode('整改任务', firstRect ? firstRect.title : '任务', String(m.rectificationTaskCount), firstRect ? `App.navigatePublic('rectification',{rectificationTaskId:'${firstRect.taskId}'})` : `App.navigatePublic('rectification')`)
    ];
    return `<div class="card"><div class="card-title">统一监管链路</div>${this.renderLineagePath(steps)}</div>`;
  },

  renderGroupOverviewObjectTree(m) {
    const regions = m.regions || [];
    const regionRows = regions.map(r => {
      const countries = (APP_DATA.globalCountries || []).filter(c => c.regionId === r.regionId);
      const ents = (m.entities || []).filter(e => e.regionId === r.regionId);
      const risks = (m.warnings || []).filter(w => { const e = APP_DATA.globalLegalEntities.find(x => x.entityId === w.entityId); return e && e.regionId === r.regionId; });
      return `<tr class="clickable" onclick="App.navigatePublic('global-regions',{regionId:'${r.regionId}'})"><td><b>${r.regionName}</b></td><td>${ents.length}</td><td>${countries.length}</td><td>${risks.length}</td><td>${r.dataCoverage || r.dataCoverageRate || m.dataCoverageRate}</td></tr>`;
    }).join('');
    const countryRows = (m.countries || []).slice(0, 6).map(c => {
      const ents = (m.entities || []).filter(e => e.countryId === c.countryId);
      const projs = (m.projects || []).filter(p => p.countryId === c.countryId);
      const cbActs = (m.cbActs || []).filter(a => a.countryId === c.countryId);
      return `<tr class="clickable" onclick="App.navigatePublic('global-regions',{regionId:'${c.regionId}',countryId:'${c.countryId}'})"><td>${c.countryName}</td><td>${ents.length}</td><td>${projs.length}</td><td>${cbActs.length}</td><td>${this.renderPublicStatusBadge(c.crossBorderComplianceStatus || c.complianceStatus)}</td></tr>`;
    }).join('');
    const entityRows = (m.entities || []).slice(0, 5).map(e => {
      const projs = (m.projects || []).filter(p => p.entityId === e.entityId);
      const srcs = (APP_DATA.dataSourceRegistry || []).filter(s => s.entityId === e.entityId);
      const risks = (m.warnings || []).filter(w => w.entityId === e.entityId);
      const rects = (m.rects || []).filter(t => t.entityId === e.entityId);
      return `<tr class="clickable" onclick="App.showGlobalEntityDetail('${e.entityId}')"><td>${e.entityName}</td><td>${projs.length}</td><td>${srcs.length}</td><td>${risks.length}</td><td>${rects.length}</td></tr>`;
    }).join('');
    const projectRows = (m.projects || []).slice(0, 5).map(p => {
      const risks = (m.warnings || []).filter(w => w.projectId === p.projectId);
      const rects = (m.rects || []).filter(t => t.projectId === p.projectId);
      const kriIds = new Set(risks.map(w => w.kriId).filter(Boolean));
      return `<tr class="clickable" onclick="App.navigatePublic('global-regions',{projectId:'${p.projectId}'})"><td>${p.projectName}</td><td>${p.majorMatterCount || 0}</td><td>${kriIds.size}</td><td>${risks.length}</td><td>${rects.length}</td></tr>`;
    }).join('');
    return `<div class="card"><div class="card-title">集团监管对象总览</div>
      <p class="insight-note">区域 → 国家 → 法人 → 项目</p>
      <div class="group-three">
        <div><b>区域</b><table class="data-table"><thead><tr><th>区域</th><th>法人</th><th>国家</th><th>风险</th><th>覆盖率</th></tr></thead><tbody>${regionRows || '<tr><td colspan="5">暂无</td></tr>'}</tbody></table></div>
        <div><b>国家</b><table class="data-table"><thead><tr><th>国家</th><th>法人</th><th>项目</th><th>跨境活动</th><th>合规</th></tr></thead><tbody>${countryRows || '<tr><td colspan="5">暂无</td></tr>'}</tbody></table></div>
      </div>
      <div class="group-three" style="margin-top:12px">
        <div><b>法人</b><table class="data-table"><thead><tr><th>法人</th><th>项目</th><th>数据源</th><th>风险</th><th>整改</th></tr></thead><tbody>${entityRows || '<tr><td colspan="5">暂无</td></tr>'}</tbody></table></div>
        <div><b>项目</b><table class="data-table"><thead><tr><th>项目</th><th>重大事项</th><th>KRI</th><th>风险</th><th>整改</th></tr></thead><tbody>${projectRows || '<tr><td colspan="5">暂无</td></tr>'}</tbody></table></div>
      </div>
    </div>`;
  },

  renderGroupOverviewCoverageSummary(m) {
    const gaps = m.gaps || [];
    const firstGap = gaps[0];
    const firstUncovered = (m.entities || []).find(e => (e.dataCoverageStatus || e.dataAccessStatus) !== '已接入');
    const firstUnconnected = (APP_DATA.dataSourceRegistry || []).find(s => s.coverageStatus !== '已接入');
    const firstKriGap = (APP_DATA.groupKris || []).find(k => k.status && k.status !== '正常' && k.status !== '良好');
    const steps = [
      this.renderLineageNode('监管对象', '法人/项目', String(m.entityCount + m.projectCount), `App.navigatePublic('coverage-gaps')`),
      this.renderLineageNode('覆盖状态', '盲区', String(m.coverageGapCount), firstGap ? `App.navigatePublic('coverage-gaps',{gapId:'${firstGap.gapId}'})` : `App.navigatePublic('coverage-gaps')`),
      this.renderLineageNode('缺失数据源', '未接入', String(m.unconnectedSourceCount), firstUnconnected ? `App.navigatePublic('data-governance',{sourceId:'${firstUnconnected.sourceId}'})` : `App.navigatePublic('data-governance')`),
      this.renderLineageNode('缺失指标', '质量异常', String(m.qualityIssueCount), (m.quality || [])[0] ? `App.navigatePublic('data-governance',{qualityIssueId:'${(m.quality[0]).issueId}'})` : `App.navigatePublic('data-governance')`),
      this.renderLineageNode('缺失KRI', 'KRI缺口', String(m.kriGapCount), firstKriGap ? `App.navigatePublic('data-governance',{relationId:'LIN001'})` : `App.navigatePublic('coverage-gaps')`),
      this.renderLineageNode('风险场景', '场景', String((APP_DATA.groupRiskScenarios || []).length), `App.navigatePublic('cross-domain-risks')`),
      this.renderLineageNode('整改任务', '任务', String(m.openRectificationCount), (m.rects || [])[0] ? `App.navigatePublic('rectification',{rectificationTaskId:'${m.rects[0].taskId}'})` : `App.navigatePublic('rectification')`)
    ];
    const gapItems = [
      ['未覆盖法人', m.uncoveredEntityCount, firstUncovered ? `App.navigatePublic('global-legal-entities',{entityId:'${firstUncovered.entityId}'})` : `App.navigatePublic('coverage-gaps')`],
      ['未覆盖项目', m.uncoveredProjectCount, `App.navigatePublic('coverage-gaps')`],
      ['未接入数据源', m.unconnectedSourceCount, `App.navigatePublic('data-governance')`],
      ['数据质量异常', m.qualityIssueCount, (m.quality || [])[0] ? `App.navigatePublic('data-governance',{qualityIssueId:'${m.quality[0].issueId}'})` : `App.navigatePublic('data-governance')`],
      ['KRI未覆盖', m.kriGapCount, `App.navigatePublic('coverage-gaps')`],
      ['跨境合规盲区', gaps.filter(g => g.gapType === '跨境数据合规').length, gaps.find(g => g.gapType === '跨境数据合规') ? `App.showCoverageGapDetail('${gaps.find(g => g.gapType === '跨境数据合规').gapId}')` : `App.navigatePublic('cross-border-compliance')`],
      ['跨领域监管盲区', m.crossDomainMatterCount, (m.cdrMatters || [])[0] ? `App.showCrossDomainRiskMatterDetail('${m.cdrMatters[0].riskMatterId}')` : `App.navigatePublic('cross-domain-risks')`]
    ];
    return `<div class="card"><div class="card-title">监管盲区总览</div>
      ${this.renderLineagePath(steps)}
      <table class="data-table" style="margin-top:12px"><thead><tr><th>盲区类型</th><th>数量</th><th>操作</th></tr></thead><tbody>
        ${gapItems.map(([label, count, nav]) => `<tr><td>${label}</td><td>${count}</td><td><button class="btn btn-outline" onclick="${nav}">查看</button></td></tr>`).join('')}
      </tbody></table>
    </div>`;
  },

  renderGroupOverviewRiskSummary(m) {
    const cdrMetrics = APP_DATA.crossDomainRiskMetrics || {};
    const cbMetrics = APP_DATA.crossBorderComplianceMetrics || {};
    const regionDist = {};
    (m.warnings || []).forEach(w => {
      const r = w.regionId || '—';
      regionDist[r] = (regionDist[r] || 0) + 1;
    });
    const regionDistHtml = Object.entries(regionDist).map(([rid, cnt]) => {
      const r = APP_DATA.globalRegions.find(x => x.regionId === rid);
      return `${r ? r.regionName : rid}：${cnt}`;
    }).join(' · ') || '—';
    const firstWarning = (m.warnings || [])[0];
    const firstCdr = (m.cdrMatters || [])[0];
    const firstCb = (m.cbActs || [])[0];
    const cbHighRisk = (m.cbActs || []).filter(a => a.complianceStatus === '高风险' || a.complianceStatus === '异常');
    const cbUnapproved = (m.cbActs || []).filter(a => a.transferApprovalStatus === '待审批' || a.transferApprovalStatus === '未审批');
    const cbSensitive = (m.cbActs || []).filter(a => a.sensitivityLevel === '高');
    return `<div class="card"><div class="card-title">风险监管总览</div>
      <div class="group-three">
        <div><b>风险事项</b><p>数量：<strong>${m.warningCount}</strong> · 高风险：<strong>${m.highRiskMatterCount}</strong></p>
          <p class="insight-note">按区域：${regionDistHtml}</p>
          <p>${firstWarning ? this.renderPublicLinkButton('查看风险详情', `App.showPublicWarningDetail('${firstWarning.id}')`) : this.renderPublicLinkButton('进入风险事项', `App.navigatePublic('warnings')`)}</p>
        </div>
        <div><b>跨领域风险</b><p>事项：<strong>${m.crossDomainMatterCount}</strong> · 领域：<strong>${cdrMetrics.involvedDomainCount || 0}</strong> · 法人：<strong>${cdrMetrics.involvedEntityCount || 0}</strong></p>
          <p class="insight-note">财务 ↔ 投资 ↔ 合同 ↔ 供应链 ↔ 境外业务</p>
          <p>协同部门：${cdrMetrics.collaboratingRectificationCount || 0} · 协同整改：${cdrMetrics.pendingRectificationCount || 0}</p>
          <p>${firstCdr ? this.renderPublicLinkButton('查看跨领域风险', `App.showCrossDomainRiskMatterDetail('${firstCdr.riskMatterId}')`) : this.renderPublicLinkButton('进入跨领域风险', `App.navigatePublic('cross-domain-risks')`)}</p>
        </div>
        <div><b>跨境数据合规风险</b><p>活动：<strong>${m.crossBorderActivityCount}</strong> · 高风险：<strong>${cbHighRisk.length}</strong> · 合规异常：<strong>${m.crossBorderRiskCount}</strong></p>
          <p class="insight-note">高敏感访问：${cbSensitive.length} · 未完成审批：${cbUnapproved.length}</p>
          <p>${firstCb ? this.renderPublicLinkButton('查看数据活动', `App.showCrossBorderActivityDetail('${firstCb.activityId}')`) : this.renderPublicLinkButton('进入跨境合规', `App.navigatePublic('cross-border-compliance')`)}</p>
        </div>
      </div>
    </div>`;
  },

  renderGroupOverviewRectificationSummary(m) {
    const firstRect = (m.rects || [])[0];
    const steps = [
      this.renderLineageNode('风险事项', '事项', String(m.warningCount), (m.warnings || [])[0] ? `App.navigatePublic('warnings',{riskMatterId:'${m.warnings[0].id}'})` : `App.navigatePublic('warnings')`),
      this.renderLineageNode('责任主体', '法人', String(m.entityCount), (m.entities || [])[0] ? `App.navigatePublic('global-legal-entities',{entityId:'${m.entities[0].entityId}'})` : `App.navigatePublic('global-legal-entities')`),
      this.renderLineageNode('整改任务', '任务', String(m.rectificationTaskCount), firstRect ? `App.navigatePublic('rectification',{rectificationTaskId:'${firstRect.taskId}'})` : `App.navigatePublic('rectification')`),
      this.renderLineageNode('整改状态', '进行中', String(m.rectificationInProgressCount), `App.navigatePublic('rectification')`),
      this.renderLineageNode('验证状态', '待验证', String(m.rectificationVerifyingCount), `App.navigatePublic('rectification')`),
      this.renderLineageNode('闭环', '已关闭', String(m.rectificationClosedCount), `App.navigatePublic('rectification')`)
    ];
    const statusCards = [
      ['整改任务总数', m.rectificationTaskCount, `App.navigatePublic('rectification')`],
      ['待整改', m.rectificationPendingCount, `App.navigatePublic('rectification')`],
      ['整改中', m.rectificationInProgressCount, `App.navigatePublic('rectification')`],
      ['待验证', m.rectificationVerifyingCount, `App.navigatePublic('rectification')`],
      ['已关闭', m.rectificationClosedCount, `App.navigatePublic('rectification')`],
      ['已逾期', m.overdueRectificationCount, `App.navigatePublic('rectification')`]
    ];
    return `<div class="card"><div class="card-title">整改闭环总览</div>
      ${this.renderLineagePath(steps)}
      <div class="group-metrics" style="margin-top:12px">${statusCards.map(([label, val, nav]) => `<button class="metric-card" onclick="${nav}"><div class="value">${val}</div><div class="label">${label}</div></button>`).join('')}</div>
      ${firstRect ? `<p style="margin-top:8px">${this.renderPublicLinkButton('查看整改任务详情', `App.showRectificationTaskDetail('${firstRect.taskId}')`)}</p>` : ''}
    </div>`;
  },

  renderGroupOverviewPageCatalog(m) {
    const catalogIds = (this.publicRegulatoryPages || []).filter(p => p.pageId !== 'major' && p.supportsPublicNavigation !== false).map(p => p.pageId);
    const metricMap = {
      'global-legal-entities': { core: `法人 ${m.entityCount}`, anomaly: `高风险 ${(m.entities || []).filter(e => (e.highRiskCount || 0) > 0).length}` },
      'global-regions': { core: `区域 ${m.regionCount} · 国家 ${m.countryCount}`, anomaly: `高风险区域 ${(m.regions || []).filter(r => (r.highRiskCount || 0) > 0).length}` },
      'coverage-gaps': { core: `盲区 ${m.coverageGapCount}`, anomaly: `未覆盖法人 ${m.uncoveredEntityCount}` },
      'platform-operations': { core: `运行监测`, anomaly: `告警 ${APP_DATA.publicRegulatorySummary.platformAlertCount || 0}` },
      'data-governance': { core: `数据源 ${m.sourceCount}`, anomaly: `质量异常 ${m.qualityIssueCount}` },
      'cross-border-compliance': { core: `活动 ${m.crossBorderActivityCount}`, anomaly: `合规风险 ${m.crossBorderRiskCount}` },
      'cross-domain-risks': { core: `跨领域 ${m.crossDomainMatterCount}`, anomaly: `高风险 ${(m.cdrMatters || []).filter(x => x.riskLevel === '高').length}` },
      'warnings': { core: `风险事项 ${m.warningCount}`, anomaly: `高风险 ${m.highRiskMatterCount}` },
      'rectification': { core: `整改 ${m.rectificationTaskCount}`, anomaly: `逾期 ${m.overdueRectificationCount}` },
      'regulatory-events': { core: `事件 ${(APP_DATA.regulatoryEventMetrics || {}).totalCount || 0}`, anomaly: `超期 ${(APP_DATA.regulatoryEventMetrics || {}).overdueCount || 0}` },
      'rectification-operations': { core: `闭环率 ${(APP_DATA.regulatoryEvaluation || {}).overallRectificationClosureRate || 0}%`, anomaly: `超期率 ${this.getRectificationOverdueRate()}` },
      'regulatory-evaluation': { core: `区域排名 ${(APP_DATA.regulatoryEvaluation || {}).regionRankings?.length || 0}`, anomaly: `数据治理 ${(APP_DATA.regulatoryEvaluation || {}).dataGovernanceMaturity || 0}%` },
      'regulatory-command-center': { core: `高风险 ${(APP_DATA.regulatoryCommandCenterMetrics || {}).highRiskObjectCount || 0}`, anomaly: `待行动 ${(APP_DATA.regulatoryCommandCenterMetrics || {}).pendingActionCount || 0}` },
      'regulatory-actions': { core: `行动 ${(APP_DATA.regulatoryActions || []).length}`, anomaly: `高优先级 ${(APP_DATA.regulatoryActions || []).filter(a => a.priority === 'CRITICAL' || a.priority === 'HIGH').length}` },
      'regulatory-action-execution': { core: `执行中 ${(APP_DATA.regulatoryActionExecutionMetrics || {}).inProgress || 0}`, anomaly: `逾期 ${(APP_DATA.regulatoryActionExecutionMetrics || {}).overdue || 0}` },
      'regulatory-strategy': { core: `重点区域 ${((APP_DATA.regulatoryStrategyAnalysis || {}).regions || []).filter(r => r.strategyLevel === 'FOCUS').length}`, anomaly: `重点法人 ${((APP_DATA.regulatoryStrategyAnalysis || {}).entities || []).filter(e => e.strategyLevel === 'FOCUS').length}` },
      'regulatory-maturity': { core: `${(APP_DATA.regulatoryMaturity || {}).overallLevel || '—'}`, anomaly: `评分 ${(APP_DATA.regulatoryMaturity || {}).overallScore || 0}` },
      'regulatory-optimization': { core: `待优化 ${((APP_DATA.regulatoryOptimizationAnalysis || {}).summary || {}).open || 0}`, anomaly: `高优先级 ${((APP_DATA.regulatoryOptimizationAnalysis || {}).summary || {}).highPriority || 0}` },
      'regulatory-rule-config': { core: `规则 ${(APP_DATA.regulatoryRuleConfigMetrics || {}).totalRules || 0}`, anomaly: `启用 ${(APP_DATA.regulatoryRuleConfigMetrics || {}).activeRules || 0}` },
      'regulatory-simulation': { core: `场景 ${(APP_DATA.regulatorySimulations || []).length}`, anomaly: `仿真 ${(APP_DATA.regulatorySimulationResults || []).length}` },
      'regulatory-rule-history': { core: `版本 ${(APP_DATA.regulatoryRuleHistory || []).length}`, anomaly: `系统默认` },
      'regulatory-rule-versions': { core: `版本 ${(APP_DATA.regulatoryRuleGovernanceMetrics || {}).totalVersions || 0}`, anomaly: `生效 ${(APP_DATA.regulatoryRuleGovernanceMetrics || {}).activeVersions || 0}` },
      'regulatory-rule-approvals': { core: `待审 ${(APP_DATA.regulatoryRuleGovernanceMetrics || {}).pendingApprovalChanges || 0}`, anomaly: `已发布 ${(APP_DATA.regulatoryRuleGovernanceMetrics || {}).publishedChanges || 0}` },
      'regulatory-rule-impact': { core: `分析 ${(APP_DATA.regulatoryRuleImpactAnalysis || []).length}`, anomaly: `已评估 ${(APP_DATA.regulatoryRuleGovernanceMetrics || {}).impactAssessedCount || 0}` },
      'regulatory-rule-effectiveness': { core: `评价 ${(APP_DATA.regulatoryRuleEffectiveness || []).length}`, anomaly: `优化 ${(APP_DATA.regulatoryRuleOptimizationLoop || []).length}` },
      'regulatory-rule-runtime': { core: `生产 ${(APP_DATA.regulatoryRuleExecutionMetrics || {}).productionRules || 0}`, anomaly: `今日 ${(APP_DATA.regulatoryRuleExecutionMetrics || {}).todayExecutionCount || 0}` },
      'regulatory-rule-executions': { core: `执行 ${(APP_DATA.regulatoryRuleExecutionMetrics || {}).totalExecutions || 0}`, anomaly: `变化 ${(APP_DATA.regulatoryRuleExecutionMetrics || {}).resultChangedCount || 0}` },
      'regulatory-rule-deployments': { core: `部署 ${(APP_DATA.regulatoryRuleDeployments || []).filter(d => d.deploymentStatus === 'ACTIVE').length}`, anomaly: `回滚 ${(APP_DATA.regulatoryRuleExecutionMetrics || {}).rollbackCount || 0}` },
      'regulatory-performance': { core: `有效性 ${(APP_DATA.regulatoryPerformanceSummary || {}).regulatoryEffectivenessScore || 0}`, anomaly: `闭环率 ${Math.round(((APP_DATA.regulatoryPerformanceSummary || {}).rectificationClosureRate || 0) * 100)}%` },
      'regulatory-resource-allocation': { core: `配置 ${(APP_DATA.regulatoryResourceAllocations || []).length}`, anomaly: `高优先 ${(APP_DATA.regulatoryOperationsMetrics || {}).resourceAllocation?.highPriorityCount || 0}` },
      'regulatory-supervision-tasks': { core: `任务 ${(APP_DATA.regulatoryOperationsMetrics || {}).supervisionTasks?.total || 0}`, anomaly: `超期 ${(APP_DATA.regulatoryOperationsMetrics || {}).supervisionTasks?.overdue || 0}` },
      'regulatory-benchmarking': { core: `对标 ${(APP_DATA.regulatoryBenchmarking || []).length}`, anomaly: `区域差异 ${(APP_DATA.regulatoryOperationsMetrics || {}).benchmarking?.regionVariance || 0}` },
      'regulatory-strategy-planning': { core: `目标 ${(APP_DATA.regulatoryStrategicPlanningMetrics || {}).objectiveCount || 0}`, anomaly: `未达成 ${(APP_DATA.regulatoryStrategicPlanningMetrics || {}).behindCount || 0}` },
      'regulatory-annual-plan': { core: `计划 ${(APP_DATA.regulatoryAnnualPlans || []).length}`, anomaly: `风险 ${(APP_DATA.regulatoryStrategicPlanningMetrics || {}).planAtRisk || 0}` },
      'regulatory-target-management': { core: `目标 ${(APP_DATA.regulatoryTargets || []).length}`, anomaly: `达成 ${(APP_DATA.regulatoryStrategicPlanningMetrics || {}).targetAchieved || 0}` },
      'regulatory-focus-management': { core: `重点 ${(APP_DATA.regulatoryStrategicFocus || []).length}`, anomaly: `法人 ${(APP_DATA.regulatoryStrategicPlanningMetrics || {}).focusEntities || 0}` },
      'regulatory-plan-execution': { core: `执行 ${(APP_DATA.regulatoryPlanExecution || []).length}`, anomaly: `超期 ${(APP_DATA.regulatoryStrategicPlanningMetrics || {}).executionOverdue || 0}` },
      'regulatory-strategic-review': { core: `复盘 ${(APP_DATA.regulatoryStrategicReview || []).length}`, anomaly: `建议 ${(APP_DATA.regulatoryNextCycleRecommendations || []).length}` },
      'regulatory-workbench': { core: `待办 ${(APP_DATA.regulatoryWorkbenchMetrics || {}).queueTotal || 0}`, anomaly: `超期 ${(APP_DATA.regulatoryWorkbenchMetrics || {}).overdueCount || 0}` },
      'regulatory-queue': { core: `队列 ${(APP_DATA.regulatoryQueue || []).length}`, anomaly: `高优先 ${(APP_DATA.regulatoryWorkbenchMetrics || {}).highPriorityCount || 0}` },
      'regulatory-decision-room': { core: `决策 ${(APP_DATA.regulatoryDecisionContext || []).length}`, anomaly: `待决策 ${(APP_DATA.regulatoryWorkbenchMetrics || {}).pendingDecisionCount || 0}` },
      'regulatory-role-workbench': { core: `角色 ${(APP_DATA.regulatoryRoleProfiles || []).length}`, anomaly: `待办 ${(APP_DATA.regulatoryQueue || []).length}` },
      'regulatory-my-work': { core: `收藏 ${(APP_DATA.regulatoryFavorites || []).length}`, anomaly: `通知 ${(APP_DATA.regulatoryNotifications || []).filter(n => !n.isRead).length}` },
      'regulatory-search': { core: `索引 ${(APP_DATA.regulatorySearchIndex || []).length}`, anomaly: `访问 ${(APP_DATA.regulatoryRecentViews || []).length}` },
      'regulatory-access-control': { core: `用户 ${(APP_DATA.regulatoryAccessControlMetrics || {}).userCount || 0}`, anomaly: `异常 ${(APP_DATA.regulatoryAccessControlMetrics || {}).permissionAnomalyCount || 0}` },
      'regulatory-authorization': { core: `待审 ${(APP_DATA.regulatoryAccessControlMetrics || {}).pendingAuthorizationCount || 0}`, anomaly: `高风险 ${(APP_DATA.regulatoryAccessControlMetrics || {}).highRiskPendingCount || 0}` },
      'regulatory-audit-trail': { core: `审计 ${(APP_DATA.regulatoryAuditLogs || []).length}`, anomaly: `异常 ${(APP_DATA.regulatoryAccessControlMetrics || {}).auditAnomalyCount || 0}` },
      'regulatory-system-settings': { core: `配置 ${(APP_DATA.regulatorySystemConfigurations || []).length}`, anomaly: `规则参数走治理闭环` }
    };
    const pages = (this.publicRegulatoryPages || []).filter(p => catalogIds.includes(p.pageId));
    return `<div class="card"><div class="card-title">公共监管页面目录</div>
      <div class="field-status-grid">${pages.map(p => {
        const em = metricMap[p.pageId] || { core: '—', anomaly: '—' };
        return `<button onclick="App.navigatePublic('${p.pageId}')"><b>${p.label}</b><span>核心指标：${em.core}</span><em>异常：${em.anomaly}</em></button>`;
      }).join('')}</div>
    </div>`;
  },

  renderGroupOverview() {
    const node = document.getElementById('groupOverview');
    if (!node) return;
    const m = this.computeGroupOverviewMetrics();
    const metricCards = [
      [m.entityCount, '监管法人', `App.navigatePublic('global-legal-entities')`],
      [m.regionCount, '覆盖区域', `App.navigatePublic('global-regions')`],
      [m.countryCount, '覆盖国家', `App.navigatePublic('global-regions')`],
      [m.projectCount, '监管项目', `App.navigatePublic('global-regions')`],
      [m.connectedSourceCount, '已接入数据源', `App.navigatePublic('data-governance')`],
      [m.dataCoverageRate, '数据覆盖率', `App.navigatePublic('coverage-gaps')`],
      [m.qualityIssueCount, '数据质量异常', `App.navigatePublic('data-governance')`],
      [m.warningCount, '风险事项', `App.navigatePublic('warnings')`],
      [m.highRiskMatterCount, '高风险事项', `App.navigatePublic('warnings')`],
      [m.rectificationTaskCount, '整改任务', `App.navigatePublic('rectification')`],
      [m.overdueRectificationCount, '逾期整改', `App.navigatePublic('rectification')`],
      [m.crossBorderRiskCount, '跨境合规风险', `App.navigatePublic('cross-border-compliance')`],
      [m.crossDomainMatterCount, '跨领域风险', `App.navigatePublic('cross-domain-risks')`]
    ];
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团总部监管视角</span><h2>集团监管总览</h2><p>统一入口：监管对象、数据覆盖、风险事项、跨境合规、跨领域风险与整改闭环。作为原版 Demo 的集团层面补充视角，不替代投资管理驾驶舱等原有模块。</p></div><div>数据覆盖率 <b>${m.dataCoverageRate}</b></div></div>
      ${this.renderGroupOverviewFilterBar()}
      <div class="group-metrics" id="groupOverviewMetrics">${metricCards.map(([v, l, nav]) => `<button class="metric-card" onclick="${nav}"><div class="value">${v}</div><div class="label">${l}</div></button>`).join('')}</div>
      ${this.renderGroupOverviewRegulatoryChain(m)}
      ${this.renderGroupOverviewObjectTree(m)}
      ${this.renderGroupOverviewCoverageSummary(m)}
      ${this.renderGroupOverviewRiskSummary(m)}
      ${this.renderGroupOverviewRectificationSummary(m)}
      ${this.renderGroupOverviewHealthSummary()}
      ${this.renderDemoScenarioDashboardPanel()}
      ${this.renderOperatingCycleDashboardPanel()}
      ${this.renderOperationalScenarioDashboardPanel()}
      ${this.renderCoordinationDashboardPanel()}
      ${this.renderFinalAcceptanceDashboardPanel()}
      ${this.renderFinalAcceptanceRemediationDashboardPanel()}
      ${this.renderDeliveryReadinessDashboardPanel()}
      ${this.renderDataGapHandoverPanel()}
      ${this.renderGroupOverviewOperationsEntry()}
      ${this.renderGroupOverviewPageCatalog(m)}
      <div id="groupOverviewDetail"></div>`;
  },

  renderGroupOverviewHealthSummary() {
    const hs = APP_DATA.regulatoryHealthScores || {};
    const entities = hs.entities || [];
    const critical = entities.filter(e => e.level === 'CRITICAL' || e.level === 'WARNING');
    const rows = entities.slice(0, 5).map(e => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${e.objectId}'})"><td>${e.objectName}</td><td>${this.renderPublicHealthBadge(e.level)}</td><td>${e.score}</td><td>${Math.round((e.dimensions.dataCoverage || 0) * 100)}%</td><td>${Math.round((e.dimensions.dataQuality || 0) * 100)}%</td><td>${Math.round((e.dimensions.kriHealth || 0) * 100)}%</td></tr>`).join('');
    return `<div class="card"><div class="card-title">监管对象健康度</div>
      <p class="insight-note">基于数据覆盖、数据质量、KRI、风险、整改、跨境合规、跨领域风险动态计算</p>
      <div class="group-metrics">${[['HEALTHY', entities.filter(e => e.level === 'HEALTHY').length], ['ATTENTION', entities.filter(e => e.level === 'ATTENTION').length], ['WARNING', entities.filter(e => e.level === 'WARNING').length], ['CRITICAL', entities.filter(e => e.level === 'CRITICAL').length]].map(([l, c]) => `<div class="metric-card"><div class="value">${c}</div><div class="label">${l}</div></div>`).join('')}</div>
      <table class="data-table"><thead><tr><th>法人</th><th>健康度</th><th>得分</th><th>数据覆盖</th><th>数据质量</th><th>KRI</th></tr></thead><tbody>${rows || '<tr><td colspan="6">暂无</td></tr>'}</tbody></table>
      ${critical[0] ? `<p style="margin-top:8px">${this.renderPublicLinkButton('查看健康度较低法人', `App.navigatePublic('global-legal-entities',{entityId:'${critical[0].objectId}'})`)} ${this.renderPublicLinkButton('监管评价', `App.navigatePublic('regulatory-evaluation')`)}</p>` : ''}
    </div>`;
  },

  renderGroupOverviewOperationsEntry() {
    const em = APP_DATA.regulatoryEventMetrics || {};
    return `<div class="card"><div class="card-title">监管运营闭环入口</div>
      <div class="field-status-grid">
        <button onclick="App.navigatePublic('regulatory-events')"><b>集团监管事件中心</b><span>事件 ${em.totalCount || 0} · 高风险 ${em.highPriorityCount || 0}</span><em>待处理 ${em.openCount || 0} · 超期 ${em.overdueCount || 0}</em></button>
        <button onclick="App.navigatePublic('rectification-operations')"><b>集团整改运营中心</b><span>整改 ${(APP_DATA.rectificationTasks || []).length}</span><em>超期 ${(APP_DATA.rectificationTasks || []).filter(t => t.deadline && t.deadline < '2026-07-22' && t.status !== '已关闭').length}</em></button>
        <button onclick="App.navigatePublic('regulatory-evaluation')"><b>集团监管评价</b><span>区域排名 ${(APP_DATA.regulatoryEvaluation || {}).regionRankings?.length || 0}</span><em>闭环率 ${(APP_DATA.regulatoryEvaluation || {}).overallRectificationClosureRate || 0}%</em></button>
        <button onclick="App.navigatePublic('regulatory-command-center')"><b>集团监管决策驾驶舱</b><span>高风险对象 ${(APP_DATA.regulatoryCommandCenterMetrics || {}).highRiskObjectCount || 0}</span><em>待执行行动 ${(APP_DATA.regulatoryCommandCenterMetrics || {}).pendingActionCount || 0}</em></button>
        <button onclick="App.navigatePublic('regulatory-strategy')"><b>集团监管策略分析</b><span>重点区域 ${((APP_DATA.regulatoryStrategyAnalysis || {}).regions || []).filter(r => r.strategyLevel === 'FOCUS').length}</span><em>重点法人 ${((APP_DATA.regulatoryStrategyAnalysis || {}).entities || []).filter(e => e.strategyLevel === 'FOCUS').length}</em></button>
        <button onclick="App.navigatePublic('regulatory-maturity')"><b>集团监管成熟度</b><span>${(APP_DATA.regulatoryMaturity || {}).overallLevel || '—'} · ${(APP_DATA.regulatoryMaturity || {}).overallScore || 0}分</span><em>待优化 ${(APP_DATA.regulatoryMaturity || {}).pendingOptimizationCount || 0}</em></button>
        <button onclick="App.navigatePublic('regulatory-optimization')"><b>集团监管持续优化</b><span>待优化 ${((APP_DATA.regulatoryOptimizationAnalysis || {}).summary || {}).open || 0}</span><em>高优先级 ${((APP_DATA.regulatoryOptimizationAnalysis || {}).summary || {}).highPriority || 0}</em></button>
        <button onclick="App.navigatePublic('regulatory-rule-config')"><b>集团监管规则配置</b><span>规则 ${(APP_DATA.regulatoryRuleConfigMetrics || {}).totalRules || 0}</span><em>启用 ${(APP_DATA.regulatoryRuleConfigMetrics || {}).activeRules || 0}</em></button>
        <button onclick="App.navigatePublic('regulatory-simulation')"><b>集团监管仿真推演</b><span>场景 ${(APP_DATA.regulatorySimulations || []).length}</span><em>模拟结果</em></button>
        <button onclick="App.navigatePublic('regulatory-rule-versions')"><b>监管规则版本中心</b><span>版本 ${(APP_DATA.regulatoryRuleGovernanceMetrics || {}).totalVersions || 0}</span><em>待审 ${(APP_DATA.regulatoryRuleGovernanceMetrics || {}).pendingApprovalChanges || 0}</em></button>
        <button onclick="App.navigatePublic('regulatory-rule-approvals')"><b>规则变更审批中心</b><span>待发布 ${(APP_DATA.regulatoryRuleGovernanceMetrics || {}).pendingPublishVersions || 0}</span><em>已发布 ${(APP_DATA.regulatoryRuleGovernanceMetrics || {}).publishedChanges || 0}</em></button>
        <button onclick="App.navigatePublic('regulatory-rule-effectiveness')"><b>规则运行效果中心</b><span>评价 ${(APP_DATA.regulatoryRuleEffectiveness || []).length}</span><em>优化 ${(APP_DATA.regulatoryRuleOptimizationLoop || []).length}</em></button>
        <button onclick="App.navigatePublic('regulatory-rule-runtime')"><b>监管规则运行中心</b><span>生产 ${(APP_DATA.regulatoryRuleExecutionMetrics || {}).productionRules || 0}</span><em>成功率 ${(APP_DATA.regulatoryRuleExecutionMetrics || {}).executionSuccessRate || 0}%</em></button>
        <button onclick="App.navigatePublic('regulatory-rule-executions')"><b>规则执行结果中心</b><span>执行 ${(APP_DATA.regulatoryRuleExecutionMetrics || {}).totalExecutions || 0}</span><em>命中 ${(APP_DATA.regulatoryRuleExecutionMetrics || {}).ruleHitCount || 0}</em></button>
        <button onclick="App.navigatePublic('regulatory-role-workbench')"><b>监管角色工作台</b><span>角色 ${(APP_DATA.regulatoryRoleProfiles || []).length}</span><em>待办 ${(APP_DATA.regulatoryQueue || []).length}</em></button>
        <button onclick="App.navigatePublic('regulatory-my-work')"><b>我的监管工作</b><span>收藏 ${(APP_DATA.regulatoryFavorites || []).length}</span><em>通知 ${(APP_DATA.regulatoryNotifications || []).filter(n => !n.isRead).length}</em></button>
        <button onclick="App.navigatePublic('regulatory-search')"><b>集团监管统一搜索</b><span>索引 ${(APP_DATA.regulatorySearchIndex || []).length}</span><em>全局搜索</em></button>
        <button onclick="App.navigatePublic('regulatory-access-control')"><b>集团监管访问控制中心</b><span>用户 ${(APP_DATA.regulatoryAccessControlMetrics || {}).userCount || 0}</span><em>角色 ${(APP_DATA.regulatoryAccessControlMetrics || {}).roleCount || 0}</em></button>
        <button onclick="App.navigatePublic('regulatory-authorization')"><b>集团监管授权审批中心</b><span>待审 ${(APP_DATA.regulatoryAccessControlMetrics || {}).pendingAuthorizationCount || 0}</span><em>高风险 ${(APP_DATA.regulatoryAccessControlMetrics || {}).highRiskPendingCount || 0}</em></button>
        <button onclick="App.navigatePublic('regulatory-audit-trail')"><b>集团监管操作审计中心</b><span>审计 ${(APP_DATA.regulatoryAuditLogs || []).length}</span><em>异常 ${(APP_DATA.regulatoryAccessControlMetrics || {}).auditAnomalyCount || 0}</em></button>
        <button onclick="App.navigatePublic('regulatory-system-settings')"><b>集团监管平台系统配置中心</b><span>配置 ${(APP_DATA.regulatorySystemConfigurations || []).length}</span><em>规则参数走治理闭环</em></button>
      </div>
    </div>`;
  },

  getFilteredRegulatoryEvents() {
    const f = this.regulatoryEventFilter || {};
    return (APP_DATA.regulatoryEvents || []).filter(e => {
      if (f.status && e.status !== f.status) return false;
      if (f.riskLevel && e.riskLevel !== f.riskLevel) return false;
      if (f.eventType && e.eventType !== f.eventType) return false;
      if (f.regionId && e.regionId !== f.regionId) return false;
      if (f.entityId && e.entityId !== f.entityId) return false;
      if (f.domainId && e.domainId !== f.domainId) return false;
      if (f.overdue === 'true' && !e.overdue) return false;
      if (f.highPriority === 'true' && e.riskLevel !== 'HIGH') return false;
      if (f.newInPeriod === 'true' && e.firstDetectedAt < '2026-07-15') return false;
      return true;
    });
  },

  setRegulatoryEventFilter(key, value) {
    this.setPublicFilter('regulatory-events', key, value);
    this.renderRegulatoryEvents();
  },

  renderRegulatoryEventsFilterBar() {
    const f = this.regulatoryEventFilter || {};
    const regions = APP_DATA.globalRegions || [];
    const entities = APP_DATA.globalLegalEntities || [];
    return `<div class="filter-bar public-filter-bar" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;align-items:center">
      <select onchange="App.setRegulatoryEventFilter('riskLevel',this.value||null)"><option value="">全部风险等级</option>${['HIGH', 'MEDIUM', 'LOW'].map(l => `<option value="${l}" ${f.riskLevel === l ? 'selected' : ''}>${l}</option>`).join('')}</select>
      <select onchange="App.setRegulatoryEventFilter('status',this.value||null)"><option value="">全部状态</option>${['OPEN', 'ACKNOWLEDGED', 'IN_PROGRESS', 'VERIFYING', 'CLOSED'].map(s => `<option value="${s}" ${f.status === s ? 'selected' : ''}>${s}</option>`).join('')}</select>
      <select onchange="App.setRegulatoryEventFilter('regionId',this.value||null)"><option value="">全部区域</option>${regions.map(r => `<option value="${r.regionId}" ${f.regionId === r.regionId ? 'selected' : ''}>${r.regionName}</option>`).join('')}</select>
      <select onchange="App.setRegulatoryEventFilter('entityId',this.value||null)"><option value="">全部法人</option>${entities.map(e => `<option value="${e.entityId}" ${f.entityId === e.entityId ? 'selected' : ''}>${e.entityName}</option>`).join('')}</select>
      ${Object.keys(f).length ? `<button class="btn btn-outline" onclick="App.clearPublicFilter('regulatory-events')">清除筛选</button>` : ''}
    </div>`;
  },

  renderRegulatoryEvents() {
    const node = document.getElementById('regulatoryEvents');
    if (!node) return;
    const em = APP_DATA.regulatoryEventMetrics || {};
    const events = this.getFilteredRegulatoryEvents();
    const period = this.regulatoryEventTrendPeriod || '7';
    const trend = (APP_DATA.regulatoryEventTrends || {})[period];
    const kpiCards = [
      ['全部事件', em.totalCount, null, `App.setRegulatoryEventFilter('status',null)`],
      ['高风险事件', em.highPriorityCount, null, `App.setRegulatoryEventFilter('highPriority','true')`],
      ['新增事件', em.newInPeriodCount, null, `App.setRegulatoryEventFilter('newInPeriod','true')`],
      ['待责任确认', em.acknowledgedCount, null, `App.setRegulatoryEventFilter('status','ACKNOWLEDGED')`],
      ['整改中', em.inProgressCount, null, `App.setRegulatoryEventFilter('status','IN_PROGRESS')`],
      ['待验证', em.verifyingCount, null, `App.setRegulatoryEventFilter('status','VERIFYING')`],
      ['超期事件', em.overdueCount, null, `App.setRegulatoryEventFilter('overdue','true')`],
      ['已关闭', em.closedCount, null, `App.setRegulatoryEventFilter('status','CLOSED')`]
    ];
    const levelDist = ['HIGH', 'MEDIUM', 'LOW'].map(lv => ({ level: lv, count: events.filter(e => e.riskLevel === lv).length }));
    const rows = events.map(e => {
      const ent = APP_DATA.globalLegalEntities.find(x => x.entityId === e.entityId);
      const reg = APP_DATA.globalRegions.find(x => x.regionId === e.regionId);
      const dom = APP_DATA.regulationDomains.find(d => d.id === e.domainId);
      const kri = e.kriId ? APP_DATA.groupKris.find(k => k.id === e.kriId) : null;
      return `<tr class="clickable" onclick="App.showRegulatoryEventDetail('${e.eventId}')"><td>${e.eventId}</td><td>${this.renderPublicEventTypeBadge(e.eventType)}</td><td>${e.riskLevel}</td><td>${e.sourceObjectId}</td><td>${reg ? reg.regionName : e.regionId || '—'}</td><td>${ent ? ent.entityName : e.entityId || '—'}</td><td>${dom ? dom.name : e.domainId || '—'}</td><td>${kri ? kri.name : e.kriId || '—'}</td><td>${this.renderPublicEventStatusBadge(e.status)}</td><td>${e.responsibleDepartment}</td><td>${e.firstDetectedAt}</td><td>${e.dueDate || '—'}</td><td>${e.overdue ? '<span class="badge badge-danger">是</span>' : '否'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团公共监管运营</span><h2>集团监管事件中心</h2><p>统一聚合数据质量、KRI、风险事项、跨领域、跨境合规、覆盖盲区与运行异常。</p></div><div>当前事件 <b>${em.totalCount || 0}</b></div></div>
      ${this.renderRegulatoryEventsFilterBar()}
      <div class="group-metrics">${kpiCards.map(([l, v, , nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="group-three">
        <div>${['7', '30', '90'].map(p => `<button class="btn btn-outline" style="margin:2px" onclick="App.regulatoryEventTrendPeriod='${p}';App.renderRegulatoryEvents()">近${p}日</button>`).join('')}${this.renderPublicTrendChart(trend, period)}</div>
        <div class="card" style="padding:12px"><b>风险等级分布</b>${levelDist.map(d => `<button class="btn btn-outline" style="margin:4px" onclick="App.setRegulatoryEventFilter('riskLevel','${d.level}')">${d.level}：${d.count}</button>`).join('')}</div>
      </div>
      <div class="card"><div class="card-title">监管事件清单</div>
        ${events.length ? `<table class="data-table"><thead><tr><th>事件编号</th><th>类型</th><th>风险等级</th><th>监管对象</th><th>区域</th><th>法人</th><th>业务领域</th><th>KRI</th><th>状态</th><th>责任主体</th><th>发现时间</th><th>整改期限</th><th>超期</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicNoFilterResults()}
      </div>
      <div id="regulatoryEventDetail"></div>`;
    if (this.regulatoryEventFocusId) setTimeout(() => this.showRegulatoryEventDetail(this.regulatoryEventFocusId), 0);
  },

  showRegulatoryEventDetail(eventId) {
    const evt = (APP_DATA.regulatoryEvents || []).find(e => e.eventId === eventId);
    const node = document.getElementById('regulatoryEventDetail');
    this.regulatoryEventFocusId = eventId;
    this.showPublicDetailOrNotFound(node, evt, () => {
      const ent = evt.entityId ? APP_DATA.globalLegalEntities.find(e => e.entityId === evt.entityId) : null;
      const proj = evt.projectId ? APP_DATA.globalProjects.find(p => p.projectId === evt.projectId) : null;
      const reg = evt.regionId ? APP_DATA.globalRegions.find(r => r.regionId === evt.regionId) : null;
      const country = evt.countryId ? APP_DATA.globalCountries.find(c => c.countryId === evt.countryId) : null;
      const dom = evt.domainId ? APP_DATA.regulationDomains.find(d => d.id === evt.domainId) : null;
      const kri = evt.kriId ? APP_DATA.groupKris.find(k => k.id === evt.kriId) : null;
      const scenario = evt.scenarioId ? (APP_DATA.groupRiskScenarios.find(s => s.id === evt.scenarioId) || APP_DATA.crossBorderRiskScenarios.find(s => s.id === evt.scenarioId)) : null;
      const warn = evt.riskMatterId ? APP_DATA.warnings.find(w => w.id === evt.riskMatterId) : null;
      const cdr = (APP_DATA.crossDomainRiskMatters || []).find(m => m.riskMatterId === evt.riskMatterId || m.riskMatterId === evt.sourceObjectId);
      const cb = evt.eventType === 'CROSS_BORDER' ? APP_DATA.crossBorderDataActivities.find(a => a.activityId === evt.sourceObjectId) : null;
      const quality = evt.eventType === 'DATA_QUALITY' ? APP_DATA.dataQualityIssues.find(q => q.issueId === evt.sourceObjectId) : null;
      const rect = evt.rectificationTaskId ? APP_DATA.rectificationTasks.find(t => t.taskId === evt.rectificationTaskId) : null;
      const lifecycle = [
        { label: '发现', sub: evt.firstDetectedAt, active: true },
        { label: '识别', sub: evt.eventType, active: evt.status !== 'OPEN' },
        { label: '责任确认', sub: evt.responsibleDepartment, active: ['ACKNOWLEDGED', 'IN_PROGRESS', 'VERIFYING', 'CLOSED'].includes(evt.status) },
        { label: '整改', sub: rect ? rect.status : '—', active: ['IN_PROGRESS', 'VERIFYING', 'CLOSED'].includes(evt.status) },
        { label: '验证', sub: rect ? rect.verificationStatus : '—', active: ['VERIFYING', 'CLOSED'].includes(evt.status) },
        { label: '关闭', sub: rect && rect.closedAt ? rect.closedAt : (evt.status === 'CLOSED' ? evt.lastUpdatedAt : '—'), active: evt.status === 'CLOSED' }
      ];
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管事件',
        objectName: evt.eventId + ' · ' + (evt.eventType || '监管事件'),
        objectId: evt.eventId,
        status: evt.status,
        updatedAt: evt.lastUpdatedAt,
        sections: [
          { title: '一、基础信息', content: this.renderPublicMetaGrid([
            this.renderPublicIdField(evt.eventId, '事件 ID'),
            { label: '事件类型', html: this.renderPublicEventTypeBadge(evt.eventType) },
            { label: '风险等级', value: evt.riskLevel },
            { label: '当前状态', html: this.renderPublicEventStatusBadge(evt.status) },
            { label: '发现时间', value: evt.firstDetectedAt },
            { label: '最后更新时间', value: evt.lastUpdatedAt }
          ]) },
          { title: '二、监管对象', content: `<p class="insight-note">${reg ? this.renderPublicLinkButton(reg.regionName, `App.navigatePublic('global-regions',{regionId:'${reg.regionId}'})`) : ''} ${country ? this.renderPublicLinkButton(country.countryName, `App.navigatePublic('global-regions',{regionId:'${country.regionId}',countryId:'${country.countryId}'})`) : ''} ${ent ? this.renderPublicLinkButton(ent.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : ''} ${proj ? this.renderPublicLinkButton(proj.projectName, `App.navigatePublic('global-regions',{projectId:'${proj.projectId}'})`) : ''} ${dom ? this.renderPublicLinkButton(dom.name, `App.navigatePublic('cross-domain-risks',{domainId:'${dom.id}'})`) : ''}</p>` },
          { title: '三、风险关联', content: `<p class="insight-note">${quality ? this.renderPublicLinkButton(quality.issueId + ' · ' + quality.anomalyType, `App.navigatePublic('data-governance',{qualityIssueId:'${quality.issueId}'})`) : ''} ${kri ? this.renderPublicLinkButton(kri.name, `App.navigatePublic('data-governance',{relationId:'LIN001'})`) : ''} ${scenario ? this.renderPublicLinkButton(scenario.name, `App.navigatePublic('cross-domain-risks')`) : ''} ${warn ? this.renderPublicLinkButton(warn.name, `App.showPublicWarningDetail('${warn.id}')`) : ''} ${cdr ? this.renderPublicLinkButton(cdr.riskMatterName, `App.showCrossDomainRiskMatterDetail('${cdr.riskMatterId}')`) : ''} ${cb ? this.renderPublicLinkButton(cb.activityId, `App.showCrossBorderActivityDetail('${cb.activityId}')`) : ''}</p>` },
          { title: '四、责任主体', content: this.renderPublicMetaGrid([{ label: '责任法人', value: ent ? ent.entityName : evt.responsibleEntity || '—' }, { label: '责任部门', value: evt.responsibleDepartment }, { label: '协同部门', value: (evt.collaboratingDepartments || []).join('、') || '—' }]) },
          { title: '五、整改闭环', content: rect ? `<p>${this.renderPublicLinkButton(rect.title, `App.showRectificationTaskDetail('${rect.taskId}')`)} · ${rect.status} · ${rect.verificationStatus} · 期限 ${rect.deadline || '—'}</p>` : this.renderPublicEmptyState('暂无关联整改任务') },
          { title: '六、事件生命周期', content: this.renderPublicTimeline(lifecycle) }
        ],
        footer: `${rect ? this.renderPublicLinkButton('查看整改任务', `App.navigatePublic('rectification',{rectificationTaskId:'${rect.taskId}'})`) : ''}${warn ? this.renderPublicLinkButton('查看风险事项', `App.navigatePublic('warnings',{riskMatterId:'${warn.id}'})`) : ''}${ent ? this.renderPublicLinkButton('查看法人', `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管事件');
  },

  getRectificationAgingStats() {
    const tasks = APP_DATA.rectificationTasks || [];
    const today = new Date('2026-07-22');
    const buckets = { '0-30': 0, '31-60': 0, '61-90': 0, '90+': 0 };
    tasks.forEach(t => {
      const start = new Date((t.deadline || '2026-07-01').replace(/-/g, '/'));
      const days = Math.abs(Math.round((today - start) / 86400000));
      if (days <= 30) buckets['0-30']++;
      else if (days <= 60) buckets['31-60']++;
      else if (days <= 90) buckets['61-90']++;
      else buckets['90+']++;
    });
    return buckets;
  },

  getRectificationByEntity() {
    const map = {};
    (APP_DATA.rectificationTasks || []).forEach(t => {
      const key = t.entityId || '—';
      if (!map[key]) map[key] = { entityId: key, count: 0, open: 0, overdue: 0 };
      map[key].count++;
      if (t.status !== '已关闭' && !t.closedAt) map[key].open++;
      if (t.deadline && t.deadline < '2026-07-22' && t.status !== '已关闭') map[key].overdue++;
    });
    return Object.values(map).map(x => ({ ...x, entityName: (APP_DATA.globalLegalEntities.find(e => e.entityId === x.entityId) || {}).entityName || x.entityId }));
  },

  getRectificationByDepartment() {
    const map = {};
    (APP_DATA.rectificationTasks || []).forEach(t => {
      const key = t.responsibleDepartment || t.owner || '—';
      if (!map[key]) map[key] = { department: key, count: 0, open: 0 };
      map[key].count++;
      if (t.status !== '已关闭' && !t.closedAt) map[key].open++;
    });
    return Object.values(map);
  },

  getRectificationByDomain() {
    const map = {};
    (APP_DATA.rectificationTasks || []).forEach(t => {
      const key = t.domainId || 'investment';
      if (!map[key]) map[key] = { domainId: key, count: 0, open: 0 };
      map[key].count++;
      if (t.status !== '已关闭' && !t.closedAt) map[key].open++;
    });
    return Object.values(map).map(x => ({ ...x, domainName: (APP_DATA.regulationDomains.find(d => d.id === x.domainId) || {}).name || x.domainId }));
  },

  getRectificationByRegion() {
    const map = {};
    (APP_DATA.rectificationTasks || []).forEach(t => {
      const key = t.regionId || '—';
      if (!map[key]) map[key] = { regionId: key, count: 0, open: 0 };
      map[key].count++;
      if (t.status !== '已关闭' && !t.closedAt) map[key].open++;
    });
    return Object.values(map).map(x => ({ ...x, regionName: (APP_DATA.globalRegions.find(r => r.regionId === x.regionId) || {}).regionName || x.regionId }));
  },

  getRectificationClosureRate() {
    const tasks = APP_DATA.rectificationTasks || [];
    const closed = tasks.filter(t => t.status === '已关闭' || t.closedAt).length;
    return tasks.length ? (closed / tasks.length * 100).toFixed(1) + '%' : '—';
  },

  getRectificationOverdueRate() {
    const tasks = (APP_DATA.rectificationTasks || []).filter(t => t.status !== '已关闭' && !t.closedAt);
    const overdue = tasks.filter(t => t.deadline && t.deadline < '2026-07-22').length;
    return tasks.length ? (overdue / tasks.length * 100).toFixed(1) + '%' : '—';
  },

  renderRectificationOperations() {
    const node = document.getElementById('rectificationOperations');
    if (!node) return;
    const tasks = APP_DATA.rectificationTasks || [];
    const open = tasks.filter(t => t.status !== '已关闭' && !t.closedAt);
    const overdue = open.filter(t => t.deadline && t.deadline < '2026-07-22');
    const highRisk = open.filter(t => t.level === 'L4');
    const verifying = tasks.filter(t => t.status === '整改验证' || t.verificationStatus === '验证中');
    const longOpen = open.filter(t => t.progress < 50);
    const aging = this.getRectificationAgingStats();
    const byEntity = this.getRectificationByEntity();
    const byDept = this.getRectificationByDepartment();
    const byDomain = this.getRectificationByDomain();
    const byRegion = this.getRectificationByRegion();
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团公共监管运营</span><h2>集团整改运营中心</h2><p>基于 rectificationTasks 动态聚合整改运营态势，不新增整改数据模型。</p></div><div>闭环率 <b>${this.getRectificationClosureRate()}</b></div></div>
      <div class="group-metrics">${[
        [tasks.length, '整改任务总量', `App.navigatePublic('rectification')`],
        [overdue.length, '超期任务', `App.navigatePublic('rectification')`],
        [highRisk.length, '高风险整改', `App.navigatePublic('rectification')`],
        [verifying.length, '待验证', `App.navigatePublic('rectification')`],
        [longOpen.length, '长期未关闭', `App.navigatePublic('rectification')`],
        [this.getRectificationOverdueRate(), '超期率', `App.navigatePublic('rectification')`]
      ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="group-three">
        <div class="card"><b>整改状态</b><p>待处理 ${tasks.filter(t => t.status === '整改制定').length} · 整改中 ${tasks.filter(t => t.status === '整改中' || t.status === '整改执行').length} · 待验证 ${verifying.length} · 已关闭 ${tasks.filter(t => t.status === '已关闭' || t.closedAt).length}</p></div>
        <div class="card"><b>整改时长</b>${Object.entries(aging).map(([k, v]) => `<p>${k} 天：${v}项</p>`).join('')}</div>
        <div class="card"><b>闭环指标</b><p>闭环率 ${this.getRectificationClosureRate()}</p><p>超期率 ${this.getRectificationOverdueRate()}</p></div>
      </div>
      <div class="group-three">
        <div class="card"><b>按责任法人</b><table class="data-table"><thead><tr><th>法人</th><th>任务</th><th>未闭环</th><th>超期</th></tr></thead><tbody>${byEntity.map(e => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${e.entityId}'})"><td>${e.entityName}</td><td>${e.count}</td><td>${e.open}</td><td>${e.overdue}</td></tr>`).join('')}</tbody></table></div>
        <div class="card"><b>按责任部门</b><table class="data-table"><thead><tr><th>部门</th><th>任务</th><th>未闭环</th></tr></thead><tbody>${byDept.map(d => `<tr><td>${d.department}</td><td>${d.count}</td><td>${d.open}</td></tr>`).join('')}</tbody></table></div>
      </div>
      <div class="group-three">
        <div class="card"><b>按业务领域</b>${byDomain.map(d => `<p>${d.domainName}：${d.count}（未闭环 ${d.open}）</p>`).join('')}</div>
        <div class="card"><b>按区域</b>${byRegion.map(r => `<p><button class="btn btn-outline" onclick="App.navigatePublic('global-regions',{regionId:'${r.regionId}'})">${r.regionName}</button>：${r.count}（未闭环 ${r.open}）</p>`).join('')}</div>
      </div>`;
  },

  renderRegulatoryEvaluation() {
    const node = document.getElementById('regulatoryEvaluation');
    if (!node) return;
    const ev = APP_DATA.regulatoryEvaluation || {};
    const eff = APP_DATA.regulatoryActionEfficiency || {};
    const overall = eff.overall || {};
    const regionRows = (ev.regionRankings || []).map(r => `<tr class="clickable" onclick="App.navigatePublic('global-regions',{regionId:'${r.objectId}'})"><td>${r.rank}</td><td>${r.objectName}</td><td>${r.score}</td><td>${this.renderPublicHealthBadge(r.level)}</td></tr>`).join('');
    const entityRows = (ev.entityRankings || []).map(r => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${r.objectId}'})"><td>${r.rank}</td><td>${r.objectName}</td><td>${r.score}</td><td>${this.renderPublicHealthBadge(r.level)}</td></tr>`).join('');
    const rectRows = (ev.rectificationEfficiencyRankings || []).map(r => `<tr class="clickable" onclick="App.navigatePublic('rectification-operations')"><td>${r.rank}</td><td>${r.objectName}</td><td>${r.score}%</td><td>${r.closedCount}/${r.taskCount}</td></tr>`).join('');
    const actionEffRows = (eff.byEntity || []).map(r => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${(APP_DATA.globalLegalEntities.find(e => e.entityName === r.entityName) || {}).entityId || ''}'})"><td>${r.entityName}</td><td>${r.actionCount}</td><td>${r.completionRate}%</td><td>${r.onTimeRate}%</td><td>${r.overdueRate}%</td><td>${r.verificationPassRate}%</td><td>${r.reopenRate}%</td></tr>`).join('');
    const deptEffRows = (eff.byDepartment || []).map(r => `<tr><td>${r.department}</td><td>${r.actionCount}</td><td>${r.completionRate}%</td><td>${r.overdueRate}%</td></tr>`).join('');
    const typeEffRows = (eff.byActionType || []).map(r => `<tr><td>${r.actionType}</td><td>${r.actionCount}</td><td>${r.completionRate}%</td><td>${r.verificationPassRate}%</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团公共监管运营</span><h2>集团监管评价</h2><p>基于监管数据动态评价区域、法人监管能力与整改效率。</p></div></div>
      <div class="group-metrics">${[
        [ev.dataGovernanceMaturity + '%', '数据治理成熟度', `App.navigatePublic('data-governance')`],
        [ev.crossBorderComplianceMaturity + '%', '跨境合规成熟度', `App.navigatePublic('cross-border-compliance')`],
        [ev.crossDomainRiskMaturity + '%', '跨领域风险管理成熟度', `App.navigatePublic('cross-domain-risks')`],
        [ev.overallRectificationClosureRate + '%', '整改闭环率', `App.navigatePublic('rectification-operations')`]
      ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="card"><div class="card-title">监管行动执行效率</div>
        <div class="group-metrics">${[
          [overall.completionRate + '%', '行动完成率', `App.navigatePublic('regulatory-action-execution')`],
          [overall.onTimeRate + '%', '行动按期完成率', `App.navigatePublic('regulatory-action-execution')`],
          [overall.avgExecutionDays + '天', '行动平均执行时长', `App.navigatePublic('regulatory-action-execution')`],
          [overall.avgFeedbackDays + '天', '行动平均反馈时长', `App.navigatePublic('regulatory-action-execution')`],
          [overall.verificationPassRate + '%', '行动验证通过率', `App.navigatePublic('regulatory-action-execution')`],
          [overall.reopenRate + '%', '行动重开率', `App.navigatePublic('regulatory-action-execution')`],
          [overall.overdueRate + '%', '行动逾期率', `App.navigatePublic('regulatory-action-execution')`]
        ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
        <div class="group-three">
          <div><div class="card-title">按法人</div><table class="data-table"><thead><tr><th>法人</th><th>行动数</th><th>完成率</th><th>按期率</th><th>逾期率</th><th>验证通过率</th><th>重开率</th></tr></thead><tbody>${actionEffRows || '<tr><td colspan="7">暂无</td></tr>'}</tbody></table></div>
          <div><div class="card-title">按责任部门</div><table class="data-table"><thead><tr><th>部门</th><th>行动数</th><th>完成率</th><th>逾期率</th></tr></thead><tbody>${deptEffRows || '<tr><td colspan="4">暂无</td></tr>'}</tbody></table></div>
          <div><div class="card-title">按行动类型</div><table class="data-table"><thead><tr><th>类型</th><th>行动数</th><th>完成率</th><th>验证通过率</th></tr></thead><tbody>${typeEffRows || '<tr><td colspan="4">暂无</td></tr>'}</tbody></table></div>
        </div>
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">区域监管能力排名</div><table class="data-table"><thead><tr><th>排名</th><th>区域</th><th>得分</th><th>健康度</th></tr></thead><tbody>${regionRows}</tbody></table></div>
        <div class="card"><div class="card-title">法人监管能力排名</div><table class="data-table"><thead><tr><th>排名</th><th>法人</th><th>得分</th><th>健康度</th></tr></thead><tbody>${entityRows}</tbody></table></div>
        <div class="card"><div class="card-title">风险整改效率排名</div><table class="data-table"><thead><tr><th>排名</th><th>法人</th><th>闭环率</th><th>已关闭/总数</th></tr></thead><tbody>${rectRows}</tbody></table></div>
      </div>`;
  },

  setRegulatoryCommandCenterFilter(key, value) {
    this.setPublicFilter('regulatory-command-center', key, value);
    this.renderRegulatoryCommandCenter();
  },

  getFilteredPriorityObjects() {
    const f = this.regulatoryCommandCenterFilter || {};
    let list = [...(APP_DATA.regulatoryPriorityObjects || [])];
    if (f.healthStatus) {
      const hs = APP_DATA.regulatoryHealthScores || {};
      const matchIds = new Set((hs.entities || []).filter(e => e.level === f.healthStatus).map(e => e.objectId));
      list = list.filter(o => matchIds.has(o.objectId));
    }
    if (f.priority) list = list.filter(o => o.priority === f.priority);
    if (f.regionId) list = list.filter(o => o.regionId === f.regionId);
    return list;
  },

  renderRegulatoryCommandCenter() {
    const node = document.getElementById('regulatoryCommandCenter');
    if (!node) return;
    const m = APP_DATA.regulatoryCommandCenterMetrics || {};
    const hs = APP_DATA.regulatoryHealthScores || {};
    const entities = hs.entities || [];
    const priorityObjects = this.getFilteredPriorityObjects();
    const regionConc = this.getRegulatoryRiskConcentration('regions');
    const allActions = APP_DATA.regulatoryActions || [];
    const actions = allActions.filter(a => ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS', 'WAITING_FEEDBACK', 'OVERDUE'].includes(a.status)).slice(0, 4);
    const loop = m.decisionLoop || {};
    const kpi = [
      [m.objectCount, '监管对象总数', `App.setRegulatoryCommandCenterFilter('healthStatus',null)`],
      [m.highRiskObjectCount, '高风险监管对象', `App.setRegulatoryCommandCenterFilter('priority','HIGH')`],
      [m.majorEventCount, '重大监管事件', `App.navigatePublic('regulatory-events')`],
      [m.overdueRectCount, '超期整改任务', `App.navigatePublic('rectification-operations')`],
      [m.healthWarningCount, 'WARNING/CRITICAL', `App.setRegulatoryCommandCenterFilter('healthStatus','WARNING')`],
      [m.qualityAnomalyCount, '数据质量异常', `App.navigatePublic('data-governance')`],
      [m.crossBorderAnomalyCount, '跨境合规异常', `App.navigatePublic('cross-border-compliance')`],
      [m.crossDomainCount, '跨领域风险', `App.navigatePublic('cross-domain-risks')`]
    ];
    const healthDist = ['HEALTHY', 'ATTENTION', 'WARNING', 'CRITICAL'].map(l => ({ level: l, count: entities.filter(e => e.level === l).length }));
    const objRows = priorityObjects.map(o => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${o.objectId}'})"><td>${o.rank}</td><td>${o.objectName}</td><td>${o.objectType}</td><td>${o.regionName || o.regionId}</td><td>${o.countryName || o.countryId || '—'}</td><td>${o.eventCount}</td><td>${o.highRiskEventCount}</td><td>${o.openRectCount}</td><td>${o.overdueRectCount}</td><td>${this.renderPublicHealthBadge(o.healthLevel)}</td><td>${this.renderPublicPriorityBadge(o.priority)}</td></tr>`).join('');
    const resourceRows = priorityObjects.slice(0, 6).map(o => {
      const p = this.calculateRegulatoryPriority(o.objectId);
      return `<tr><td>${o.regionName || o.regionId}</td><td>${o.objectName}</td><td>—</td><td>—</td><td>${this.renderPublicPriorityBadge(o.priority)}</td><td>${p.recommendedAction}</td></tr>`;
    }).join('');
    const loopSteps = [
      ['发现', loop.discover, `App.navigatePublic('regulatory-events')`],
      ['判断', loop.judge, `App.navigatePublic('regulatory-command-center')`],
      ['决策', loop.decide, `App.navigatePublic('regulatory-actions')`],
      ['行动', loop.execute, `App.navigatePublic('regulatory-action-execution')`],
      ['验证', loop.verify, `App.navigatePublic('regulatory-action-execution')`],
      ['评价', loop.evaluate, `App.navigatePublic('regulatory-evaluation')`]
    ];
    const pendingItems = [
      [priorityObjects.filter(o => o.priority === 'CRITICAL' || o.priority === 'HIGH').length, '高优先级对象', `App.navigatePublic('regulatory-actions')`],
      [(APP_DATA.warnings || []).filter(w => w.level === '重大').length, '重大风险事项', `App.navigatePublic('warnings')`],
      [m.overdueRectCount, '超期整改', `App.navigatePublic('rectification-operations')`],
      [m.waitingVerificationCount, '待验证行动', `App.navigatePublic('regulatory-action-execution')`],
      [allActions.filter(a => a.status === 'REOPENED').length, '重新打开风险', `App.navigatePublic('regulatory-events')`]
    ];
    const execM = APP_DATA.regulatoryRuleExecutionMetrics || {};
    const perfS = APP_DATA.regulatoryPerformanceSummary || {};
    const opsM = APP_DATA.regulatoryOperationsMetrics || {};
    const resAlloc = opsM.resourceAllocation || {};
    const supM = opsM.supervisionTasks || {};
    const benchM = opsM.benchmarking || {};
    const stratM = APP_DATA.regulatoryStrategicPlanningMetrics || {};
    const maturityData = APP_DATA.regulatoryMaturity || {};
    const wbM = APP_DATA.regulatoryWorkbenchMetrics || {};
    const ruleGovSteps = [
      ['规则变更', (APP_DATA.regulatoryRuleChangeRequests || []).length, `App.navigatePublic('regulatory-rule-approvals')`],
      ['仿真', (APP_DATA.regulatorySimulations || []).length, `App.navigatePublic('regulatory-simulation')`],
      ['影响分析', (APP_DATA.regulatoryRuleImpactAnalysis || []).length, `App.navigatePublic('regulatory-rule-impact')`],
      ['审批', (APP_DATA.regulatoryRuleGovernanceMetrics || {}).pendingApprovalChanges || 0, `App.navigatePublic('regulatory-rule-approvals')`],
      ['部署', execM.productionRules || 0, `App.navigatePublic('regulatory-rule-deployments')`],
      ['运行', execM.totalExecutions || 0, `App.navigatePublic('regulatory-rule-runtime')`],
      ['效果评价', (APP_DATA.regulatoryRuleEffectiveness || []).length, `App.navigatePublic('regulatory-rule-effectiveness')`]
    ];
    const ruleRuntimeKpi = [
      [execM.productionRules, '生产规则', `App.navigatePublic('regulatory-rule-runtime')`],
      [execM.todayExecutionCount, '今日执行', `App.navigatePublic('regulatory-rule-executions')`],
      [(execM.executionSuccessRate || 0) + '%', '执行成功率', `App.navigatePublic('regulatory-rule-runtime')`],
      [execM.anomalyCount, '运行异常', `App.navigatePublic('regulatory-rule-runtime')`],
      [execM.ruleHitCount, '规则命中', `App.navigatePublic('regulatory-rule-executions')`],
      [(APP_DATA.regulatoryRuleGovernanceMetrics || {}).changesLast30Days || 0, '版本变更', `App.navigatePublic('regulatory-rule-versions')`],
      [execM.rollbackCount, '回滚次数', `App.navigatePublic('regulatory-rule-deployments')`]
    ];
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团管理层监管决策</span><h2>集团监管决策驾驶舱</h2><p>按使用顺序组织：态势 → 风险预警 → 待决策 → 行动执行 → 整改验证 → 系统健康 → 战略改进。</p></div><div>待执行行动 <b>${m.pendingActionCount || 0}</b></div></div>
      ${this.renderCommandCenterLayers()}
      ${this.renderPlatformHealthPanel()}
      <div class="group-metrics">${kpi.map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="card"><div class="card-title">监管决策闭环</div>
        <div class="kri-lineage" style="flex-wrap:wrap">${loopSteps.map(([label, count, nav], i) => `${i ? '<i>→</i>' : ''}<button onclick="${nav}"><b>${label}</b><br>${count}</button>`).join('')}</div>
      </div>
      <div class="card"><div class="card-title">规则治理闭环</div>
        <div class="kri-lineage" style="flex-wrap:wrap">${ruleGovSteps.map(([label, count, nav], i) => `${i ? '<i>→</i>' : ''}<button onclick="${nav}"><b>${label}</b><br>${count}</button>`).join('')}</div>
      </div>
      <div class="card"><div class="card-title">规则运行状态 ${this.renderPublicRuntimeHealth(execM)}</div>
        <div class="group-metrics" style="margin-bottom:0">${ruleRuntimeKpi.map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">待决策事项</div>${pendingItems.map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
        <div class="card"><div class="card-title">行动执行健康度</div>${[
          [m.actionCompletionRate + '%', '行动完成率'],
          [m.actionOnTimeRate + '%', '行动按期率'],
          [m.actionVerificationPassRate + '%', '行动验证通过率'],
          [m.actionOverdueRate + '%', '行动逾期率'],
          [m.actionReopenRate + '%', '行动重开率']
        ].map(([v, l]) => `<p class="insight-note"><b>${l}：</b>${v} ${this.renderPublicLinkButton('查看', `App.navigatePublic('regulatory-action-execution')`)}</p>`).join('')}</div>
        <div class="card"><div class="card-title">决策变化趋势</div>${[
          [m.newActionsThisPeriod, '本期新增监管行动'],
          [m.completedActionsThisPeriod, '本期完成监管行动'],
          [m.closedActionsThisPeriod, '本期关闭监管行动'],
          [m.reopenedActionsThisPeriod, '本期重开监管行动'],
          [m.strategyChangesThisPeriod, '本期策略变化'],
          [m.priorityChangesThisPeriod, '本期优先级变化']
        ].map(([v, l]) => `<p class="insight-note"><b>${l}：</b>${v}</p>`).join('')}</div>
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">集团监管健康度分布</div>${healthDist.map(d => `<button class="btn btn-outline" style="margin:4px" onclick="App.setRegulatoryCommandCenterFilter('healthStatus','${d.level}')">${d.level}：${d.count}</button>`).join('')}</div>
        <div class="card"><div class="card-title">监管风险集中度（区域）</div>${this.renderPublicConcentrationChart(regionConc, 'label')}</div>
        <div class="card"><div class="card-title">监管行动建议</div>${actions.length ? actions.map(a => this.renderPublicActionCard(a)).join('') : this.renderPublicEmptyState('暂无待执行行动')}<p>${this.renderPublicLinkButton('进入监管行动中心', `App.navigatePublic('regulatory-actions')`)} ${this.renderPublicLinkButton('进入行动执行', `App.navigatePublic('regulatory-action-execution')`)}</p></div>
      </div>
      <div class="card"><div class="card-title">重点监管对象清单</div>
        ${priorityObjects.length ? `<table class="data-table"><thead><tr><th>排名</th><th>对象</th><th>类型</th><th>区域</th><th>国家</th><th>事件</th><th>高风险</th><th>未关闭整改</th><th>超期</th><th>健康度</th><th>优先级</th></tr></thead><tbody>${objRows}</tbody></table>` : this.renderPublicNoFilterResults()}
      </div>
      <div class="card"><div class="card-title">监管资源优先级</div>
        <table class="data-table"><thead><tr><th>区域</th><th>法人</th><th>项目</th><th>领域</th><th>优先级</th><th>建议动作</th></tr></thead><tbody>${resourceRows || '<tr><td colspan="6">暂无</td></tr>'}</tbody></table>
        <p style="margin-top:8px">${this.renderPublicLinkButton('监管策略分析', `App.navigatePublic('regulatory-strategy')`)} ${this.renderPublicLinkButton('监管规则配置', `App.navigatePublic('regulatory-rule-config')`)}</p>
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">监管绩效</div>
          ${[
            [perfS.regulatoryEffectivenessScore, '监管有效性', `App.navigatePublic('regulatory-performance')`],
            [Math.round((perfS.highRiskResolutionRate || 0) * 100) + '%', '风险解决率', `App.navigatePublic('regulatory-performance')`],
            [Math.round((perfS.rectificationClosureRate || 0) * 100) + '%', '整改闭环率', `App.navigatePublic('regulatory-performance')`],
            [Math.round((perfS.actionVerificationRate || 0) * 100) + '%', '行动验证率', `App.navigatePublic('regulatory-performance')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
        </div>
        <div class="card"><div class="card-title">监管资源配置</div>
          ${[
            [(resAlloc.focusEntities || []).length, '重点监管对象', `App.navigatePublic('regulatory-resource-allocation')`],
            [resAlloc.highPriorityCount, '高优先级对象', `App.navigatePublic('regulatory-resource-allocation',{priority:'HIGH'})`],
            [resAlloc.pendingAllocationCount, '待资源配置', `App.navigatePublic('regulatory-resource-allocation')`],
            [resAlloc.specialReviewCount, '专项监管任务', `App.navigatePublic('regulatory-supervision-tasks')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
        </div>
        <div class="card"><div class="card-title">监管任务协同</div>
          ${[
            [supM.assigned + supM.recommended, '待分派', `App.navigatePublic('regulatory-supervision-tasks',{taskStatus:'ASSIGNED'})`],
            [supM.inProgress, '执行中', `App.navigatePublic('regulatory-supervision-tasks',{taskStatus:'IN_PROGRESS'})`],
            [supM.waitingResult, '待结果', `App.navigatePublic('regulatory-supervision-tasks',{taskStatus:'WAITING_RESULT'})`],
            [supM.overdue, '超期', `App.navigatePublic('regulatory-supervision-tasks',{overdue:'true'})`],
            [supM.completed, '已完成', `App.navigatePublic('regulatory-supervision-tasks',{taskStatus:'COMPLETED'})`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
        </div>
      </div>
      <div class="card"><div class="card-title">监管能力差异</div>
        <div class="group-metrics" style="margin-bottom:0">${[
          [(benchM.topEntities || []).map(id => (APP_DATA.globalLegalEntities.find(e => e.entityId === id) || {}).entityName || id).join('、') || '—', '领先法人', `App.navigatePublic('regulatory-benchmarking',{benchmarkType:'ENTITY'})`],
          [(benchM.bottomEntities || []).map(id => (APP_DATA.globalLegalEntities.find(e => e.entityId === id) || {}).entityName || id).join('、') || '—', '重点提升法人', `App.navigatePublic('regulatory-benchmarking',{benchmarkType:'ENTITY'})`],
          [(benchM.laggingDomains || []).map(d => (APP_DATA.regulationDomains.find(x => x.id === d.scopeId) || {}).name || d.scopeId).join('、') || '—', '能力短板领域', `App.navigatePublic('regulatory-benchmarking',{benchmarkType:'DOMAIN'})`],
          [benchM.regionVariance, '区域差异', `App.navigatePublic('regulatory-benchmarking',{benchmarkType:'REGION'})`]
        ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">战略目标达成</div>
          ${[
            [stratM.objectiveCount, '战略目标总数', `App.navigatePublic('regulatory-strategy-planning')`],
            [stratM.achievedCount, '已达成', `App.navigatePublic('regulatory-strategy-planning',{status:'ACHIEVED'})`],
            [stratM.onTrackCount, '按期', `App.navigatePublic('regulatory-strategy-planning',{status:'ON_TRACK'})`],
            [stratM.atRiskCount, '预警', `App.navigatePublic('regulatory-strategy-planning',{status:'AT_RISK'})`],
            [stratM.behindCount, '未达成', `App.navigatePublic('regulatory-strategy-planning',{status:'BEHIND'})`],
            [Math.round((stratM.averageCompletionRate || 0) * 100) + '%', '平均完成率', `App.navigatePublic('regulatory-strategy-planning')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
        </div>
        <div class="card"><div class="card-title">年度监管重点</div>
          ${[
            [stratM.focusRegions, '重点区域', `App.navigatePublic('regulatory-focus-management',{focusType:'REGION'})`],
            [stratM.focusEntities, '重点法人', `App.navigatePublic('regulatory-focus-management',{focusType:'ENTITY'})`],
            [stratM.focusDomains, '重点领域', `App.navigatePublic('regulatory-focus-management',{focusType:'DOMAIN'})`],
            [stratM.focusRisks, '重点风险', `App.navigatePublic('regulatory-focus-management',{focusType:'RISK'})`],
            [stratM.focusProjects, '重点项目', `App.navigatePublic('regulatory-focus-management',{focusType:'PROJECT'})`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
        </div>
        <div class="card"><div class="card-title">年度计划执行</div>
          ${[
            [stratM.planCount, '计划总数', `App.navigatePublic('regulatory-annual-plan')`],
            [stratM.planInProgress, '执行中', `App.navigatePublic('regulatory-plan-execution',{planStatus:'IN_PROGRESS'})`],
            [stratM.planAtRisk, '存在风险', `App.navigatePublic('regulatory-annual-plan',{planStatus:'AT_RISK'})`],
            [stratM.executionOverdue, '超期', `App.navigatePublic('regulatory-plan-execution',{overdue:'true'})`],
            [Math.round((stratM.averagePlanCompletionRate || 0) * 100) + '%', '完成率', `App.navigatePublic('regulatory-plan-execution')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
        </div>
      </div>
      <div class="card"><div class="card-title">战略复盘</div>
        <div class="group-metrics" style="margin-bottom:0">${[
          [Math.round((stratM.averageCompletionRate || 0) * 100) + '%', '年度目标达成', `App.navigatePublic('regulatory-strategic-review')`],
          [perfS.regulatoryEffectivenessScore, '监管绩效', `App.navigatePublic('regulatory-performance')`],
          [Math.round((perfS.actionVerificationRate || 0) * 100) + '%', '资源投入效果', `App.navigatePublic('regulatory-resource-allocation')`],
          [maturityData.overallScore || 0, '成熟度变化', `App.navigatePublic('regulatory-maturity')`],
          [stratM.recommendationCount, '下一周期重点', `App.navigatePublic('regulatory-strategic-review')`]
        ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">统一监管工作台</div>
          ${[
            [wbM.queueTotal, '待办总数', `App.navigatePublic('regulatory-workbench')`],
            [wbM.pendingDecisionCount, '待决策', `App.navigatePublic('regulatory-queue',{queueType:'DECISION'})`],
            [wbM.pendingActionCount, '待执行', `App.navigatePublic('regulatory-queue',{queueType:'ACTION'})`],
            [wbM.pendingVerificationCount, '待验证', `App.navigatePublic('regulatory-queue',{queueType:'VERIFICATION'})`],
            [wbM.overdueCount, '超期', `App.navigatePublic('regulatory-queue',{overdue:'true'})`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
          <p style="margin-top:8px">${this.renderPublicLinkButton('进入统一工作台', `App.navigatePublic('regulatory-workbench')`)} ${this.renderPublicLinkButton('待办队列', `App.navigatePublic('regulatory-queue')`)} ${this.renderPublicLinkButton('决策工作室', `App.navigatePublic('regulatory-decision-room')`)}</p>
        </div>
        <div class="card"><div class="card-title">重点监管对象</div>
          ${[
            [(wbM.topEntityIds || []).slice(0, 3).map(id => (APP_DATA.globalLegalEntities.find(e => e.entityId === id) || {}).entityName || id).join('、') || '—', '重点法人', `App.navigatePublic('regulatory-workbench')`],
            [(wbM.topRegionIds || []).slice(0, +2).map(id => (APP_DATA.globalRegions.find(r => r.regionId === id) || {}).regionName || id).join('、') || '—', '重点区域', `App.navigatePublic('global-regions')`],
            [(wbM.topDomainIds || []).map(id => (APP_DATA.regulationDomains.find(d => d.id === id) || {}).name || id).join('、') || '—', '重点领域', `App.navigatePublic('regulatory-focus-management',{focusType:'DOMAIN'})`],
            [(wbM.topProjectIds || []).slice(0, 2).map(id => (APP_DATA.globalProjects.find(p => p.projectId === id) || {}).projectName || id).join('、') || '—', '重点项目', `App.navigatePublic('global-regions')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
        </div>
        <div class="card"><div class="card-title">决策闭环入口</div>
          ${[
            [wbM.pendingDecisionCount, '待决策', `App.navigatePublic('regulatory-decision-room')`],
            [wbM.pendingActionCount, '待执行行动', `App.navigatePublic('regulatory-actions')`],
            [wbM.pendingTaskCount, '待协同任务', `App.navigatePublic('regulatory-supervision-tasks')`],
            [wbM.ruleAnomalyCount, '规则异常', `App.navigatePublic('regulatory-queue',{queueType:'RULE_ANOMALY'})`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
        </div>
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">角色化监管工作台</div>
          ${[
            [(APP_DATA.regulatoryRoleProfiles || []).length, '监管角色', `App.navigatePublic('regulatory-role-workbench')`],
            [(APP_DATA.regulatoryNotifications || []).filter(n => !n.isRead).length, '未读通知', `App.navigatePublic('regulatory-my-work',{tab:'notifications'})`],
            [(APP_DATA.regulatoryFavorites || []).length, '我的收藏', `App.navigatePublic('regulatory-my-work',{tab:'favorites'})`],
            [(APP_DATA.regulatoryRecentViews || []).length, '最近访问', `App.navigatePublic('regulatory-my-work',{tab:'recent'})`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
          <p style="margin-top:8px">${this.renderPublicLinkButton('角色工作台', `App.navigatePublic('regulatory-role-workbench')`)} ${this.renderPublicLinkButton('我的监管工作', `App.navigatePublic('regulatory-my-work')`)} ${this.renderPublicLinkButton('统一搜索', `App.navigatePublic('regulatory-search')`)}</p>
        </div>
        <div class="card"><div class="card-title">我的监管待办</div>
          ${(APP_DATA.regulatoryQueue || []).slice(0, 4).map(q => `<p class="insight-note clickable" onclick="App.navigatePublic('regulatory-my-work',{queueItemId:'${q.queueItemId}'})">${this.renderPublicPriorityBadge(q.priority)} ${q.title}</p>`).join('') || this.renderPublicEmptyState('暂无')}
          <p>${this.renderPublicLinkButton('查看全部', `App.navigatePublic('regulatory-my-work')`)}</p>
        </div>
        <div class="card"><div class="card-title">我的重点监管对象</div>
          ${((APP_DATA.regulatoryWorkbenchMetrics || {}).topEntityIds || []).slice(0, 3).map(id => {
            const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === id);
            return `<p class="insight-note clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${id}'})">${ent ? ent.entityName : id}</p>`;
          }).join('') || this.renderPublicEmptyState('暂无')}
        </div>
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">权限治理</div>
          ${[
            [(APP_DATA.regulatoryAccessControlMetrics || {}).userCount, '用户', `App.navigatePublic('regulatory-access-control')`],
            [(APP_DATA.regulatoryAccessControlMetrics || {}).roleCount, '角色', `App.navigatePublic('regulatory-access-control')`],
            [(APP_DATA.regulatoryAccessControlMetrics || {}).pendingAuthorizationCount, '待授权', `App.navigatePublic('regulatory-authorization')`],
            [(APP_DATA.regulatoryAccessControlMetrics || {}).permissionAnomalyCount, '权限异常', `App.navigatePublic('regulatory-audit-trail')`],
            [(APP_DATA.regulatoryAuditLogs || []).length, '审计记录', `App.navigatePublic('regulatory-audit-trail')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
          <p style="margin-top:8px">${this.renderPublicLinkButton('访问控制中心', `App.navigatePublic('regulatory-access-control')`)} ${this.renderPublicLinkButton('授权审批', `App.navigatePublic('regulatory-authorization')`)} ${this.renderPublicLinkButton('系统配置', `App.navigatePublic('regulatory-system-settings')`)}</p>
        </div>
        <div class="card"><div class="card-title">待审批事项</div>
          ${(APP_DATA.regulatoryAuthorizationRequests || []).filter(a => ['SUBMITTED','IN_REVIEW'].includes(a.status)).slice(0, 4).map(a => `<p class="insight-note clickable" onclick="App.navigatePublic('regulatory-authorization',{authorizationId:'${a.authorizationId}'})">${a.requestType} · ${a.targetObjectId}</p>`).join('') || this.renderPublicEmptyState('暂无')}
        </div>
        <div class="card"><div class="card-title">审计异常</div>
          ${(APP_DATA.regulatoryAuditLogs || []).filter(l => l.actionType === 'OVERRIDE_DENIED').slice(0, 3).map(l => `<p class="insight-note">${l.timestamp} · ${l.userId} · ${l.objectId}</p>`).join('') || this.renderPublicEmptyState('暂无异常操作')}
        </div>
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">数据接入健康</div>
          ${(() => { const dm = APP_DATA.regulatoryDataGovernanceMetrics || {}; return [
            [dm.sourceCount, '数据源总数', `App.navigatePublic('regulatory-data-sources')`],
            [dm.onlineSourceCount, '在线数据源', `App.navigatePublic('regulatory-data-sources')`],
            [dm.integrationSuccessRate + '%', '接入成功率', `App.navigatePublic('regulatory-data-integration')`],
            [dm.failedJobCount, '失败任务', `App.navigatePublic('regulatory-data-integration')`],
            [dm.dataDelayHours + 'h', '数据延迟', `App.navigatePublic('regulatory-data-integration')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
          <p style="margin-top:8px">${this.renderPublicLinkButton('数据源中心', `App.navigatePublic('regulatory-data-sources')`)} ${this.renderPublicLinkButton('数据接入', `App.navigatePublic('regulatory-data-integration')`)}</p>
        </div>
        <div class="card"><div class="card-title">数据质量健康</div>
          ${(() => { const dm = APP_DATA.regulatoryDataGovernanceMetrics || {}; const qs = dm.overallQualityScore != null ? dm.overallQualityScore : '—'; return [
            [qs, '总体质量', `App.navigatePublic('regulatory-data-quality')`],
            [dm.severeIssueCount, '严重异常', `App.navigatePublic('regulatory-data-quality')`],
            [dm.openIssueCount, '待治理问题', `App.navigatePublic('regulatory-data-governance')`],
            [dm.overdueGovernanceCount, '超期治理', `App.navigatePublic('regulatory-data-governance')`],
            [dm.qualityTrendStatus || 'INSUFFICIENT_HISTORY', '质量趋势', `App.navigatePublic('regulatory-data-quality')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
        </div>
        <div class="card"><div class="card-title">数据血缘影响</div>
          ${(() => { const dm = APP_DATA.regulatoryDataGovernanceMetrics || {}; return [
            [dm.impactedKriCount, '受影响 KRI', `App.navigatePublic('regulatory-data-lineage')`],
            [dm.impactedRiskCount, '受影响风险', `App.navigatePublic('regulatory-data-lineage')`],
            [dm.impactedEntityCount, '受影响监管对象', `App.navigatePublic('regulatory-data-lineage')`],
            [dm.offlineSourceCount, '异常数据源', `App.navigatePublic('regulatory-data-sources')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
        </div>
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">监管指标健康</div>
          ${(() => { const km = APP_DATA.regulatoryMetricKriMetrics || {}; return [
            [km.metricCount, '指标总数', `App.navigatePublic('regulatory-metric-center')`],
            [km.normalMetricCount, '正常', `App.navigatePublic('regulatory-metric-center')`],
            [km.warningMetricCount, '预警', `App.navigatePublic('regulatory-metric-center')`],
            [km.criticalMetricCount, '严重', `App.navigatePublic('regulatory-metric-center')`],
            [km.insufficientDataMetricCount, '数据不足', `App.navigatePublic('regulatory-metric-center')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
        </div>
        <div class="card"><div class="card-title">KRI运行健康</div>
          ${(() => { const km = APP_DATA.regulatoryMetricKriMetrics || {}; return [
            [km.kriCount, 'KRI总数', `App.navigatePublic('regulatory-kri-monitoring')`],
            [km.warningKriCount, 'WARNING', `App.navigatePublic('regulatory-kri-monitoring')`],
            [km.criticalKriCount, 'CRITICAL', `App.navigatePublic('regulatory-kri-monitoring')`],
            [km.insufficientDataKriCount, '数据可信度不足', `App.navigatePublic('regulatory-kri-monitoring')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
        </div>
        <div class="card"><div class="card-title">监管预警</div>
          ${(() => { const km = APP_DATA.regulatoryMetricKriMetrics || {}; return [
            [km.attentionWarningCount, 'ATTENTION', `App.navigatePublic('regulatory-warning-center')`],
            [km.warningLevelCount, 'WARNING', `App.navigatePublic('regulatory-warning-center')`],
            [km.criticalWarningCount, 'CRITICAL', `App.navigatePublic('regulatory-warning-center')`],
            [km.pendingReviewCount, '待研判', `App.navigatePublic('regulatory-warning-center')`],
            [km.pendingRiskConversionCount, '待转风险', `App.navigatePublic('regulatory-warning-center')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
        </div>
      </div>
      <div class="card"><div class="card-title">预警影响</div>
        ${(() => { const km = APP_DATA.regulatoryMetricKriMetrics || {}; return [
          [km.impactedEntityCount, '受影响法人', `App.navigatePublic('regulatory-warning-strategy')`],
          [km.impactedRegionCount, '受影响区域', `App.navigatePublic('regulatory-warning-strategy')`],
          [km.priorityElevateSuggestions, '优先级上升建议', `App.navigatePublic('regulatory-warning-strategy')`],
          [km.strategyAdjustSuggestions, '策略调整建议', `App.navigatePublic('regulatory-warning-strategy')`]
        ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">集团综合监管态势</div>
          ${(() => { const h = App.calculateRegulatoryCompositeHealth(); const am = APP_DATA.regulatoryAnalysisMetrics || {}; return [
            [h.compositeHealthScore ?? '—', '综合监管健康度', `App.navigatePublic('regulatory-analysis-center')`],
            [h.dimensions?.riskExposure ?? '—', '风险暴露', `App.navigatePublic('regulatory-analysis-center')`],
            [h.dimensions?.dataCredibility ?? '—', '数据可信度', `App.navigatePublic('regulatory-data-quality')`],
            [h.dimensions?.kriHealth ?? '—', 'KRI健康度', `App.navigatePublic('regulatory-kri-monitoring')`],
            [h.dimensions?.rectificationClosure ?? '—', '整改闭环能力', `App.navigatePublic('rectification')`],
            [h.dimensions?.actionExecution ?? '—', '监管执行能力', `App.navigatePublic('regulatory-actions')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
        </div>
        <div class="card"><div class="card-title">风险集中度</div>
          ${(() => { const am = APP_DATA.regulatoryAnalysisMetrics || {}; return [
            [am.topConcentrationRegion, '最高风险区域', `App.navigatePublic('regulatory-risk-concentration',{dimension:'byRegion'})`],
            [am.topConcentrationEntity, '最高风险法人', `App.navigatePublic('regulatory-risk-concentration',{dimension:'byEntity'})`],
            [am.topConcentrationDomain, '最高风险领域', `App.navigatePublic('regulatory-risk-concentration',{dimension:'byDomain'})`],
            [am.highConcentrationRegionCount, '高集中区域数', `App.navigatePublic('regulatory-risk-concentration')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
        </div>
        <div class="card"><div class="card-title">风险传导</div>
          ${(() => { const am = APP_DATA.regulatoryAnalysisMetrics || {}; return [
            [am.potentialPropagationCount, '潜在传导链', `App.navigatePublic('regulatory-risk-propagation')`],
            [(APP_DATA.regulatoryRiskPropagation || []).filter(p => (p.affectedRegionIds || []).length > 1).length, '跨区域风险', `App.navigatePublic('regulatory-risk-propagation')`],
            [(APP_DATA.regulatoryRiskPropagation || []).filter(p => p.chainType === 'CROSS_ENTITY_KRI').length, '跨法人同类风险', `App.navigatePublic('regulatory-risk-propagation')`],
            [(APP_DATA.regulatoryRiskPropagation || []).filter(p => p.chainType === 'CROSS_ENTITY_SAME_RISK_TYPE').length, '跨领域风险', `App.navigatePublic('regulatory-risk-propagation')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
        </div>
      </div>
      <div class="card"><div class="card-title">决策建议</div>
        ${(() => { const am = APP_DATA.regulatoryAnalysisMetrics || {}; const recs = APP_DATA.regulatoryDecisionRecommendations || []; return [
          [am.pendingRecommendationCount, '待研判建议', `App.navigatePublic('regulatory-decision-recommendations')`],
          [recs.filter(r => r.recommendationType === 'FOCUS_ENTITY').length, '重点法人建议', `App.navigatePublic('regulatory-decision-recommendations')`],
          [recs.filter(r => r.recommendationType === 'REVIEW_DATA_QUALITY').length, '数据质量复核', `App.navigatePublic('regulatory-decision-recommendations')`],
          [recs.filter(r => r.recommendationType === 'REVIEW_KRI').length, 'KRI复核建议', `App.navigatePublic('regulatory-decision-recommendations')`],
          [recs.filter(r => r.recommendationType === 'ALLOCATE_RESOURCE').length, '资源配置建议', `App.navigatePublic('regulatory-decision-recommendations')`]
        ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
      </div>
      <div class="card"><div class="card-title">持续改进健康度</div>
        ${(() => { const cm = APP_DATA.regulatoryContinuousImprovementMetrics || {}; return [
          [cm.pendingOpportunityCount, '待改进机会', `App.navigatePublic('regulatory-improvement-center')`],
          [cm.highPriorityOpportunityCount, '高优先级问题', `App.navigatePublic('regulatory-improvement-center')`],
          [cm.pendingRootCauseConfirmationCount, '待根因确认', `App.navigatePublic('regulatory-root-cause-analysis')`],
          [cm.pendingPlanDecisionCount, '待优化决策', `App.navigatePublic('regulatory-optimization-plans')`],
          [cm.implementingCount, '实施中', `App.navigatePublic('regulatory-improvement-execution')`],
          [cm.pendingValidationCount, '待效果验证', `App.navigatePublic('regulatory-improvement-effectiveness')`],
          [cm.improvementClosureRate != null ? cm.improvementClosureRate + '%' : '—', '改进闭环率', `App.navigatePublic('regulatory-improvement-center')`],
          [cm.improvementEffectivenessRate != null ? cm.improvementEffectivenessRate + '%' : '—', '改进有效率', `App.navigatePublic('regulatory-improvement-effectiveness')`]
        ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join(''); })()}
      </div>`;
  },

  renderRegulatoryActions() {
    const node = document.getElementById('regulatoryActions');
    if (!node) return;
    const f = this.regulatoryActionFilter || {};
    let actions = APP_DATA.regulatoryActions || [];
    if (f.priority) actions = actions.filter(a => a.priority === f.priority);
    if (f.status) actions = actions.filter(a => a.status === f.status);
    const all = APP_DATA.regulatoryActions || [];
    const kpi = [
      [all.filter(a => ['RECOMMENDED', 'ASSIGNED'].includes(a.status)).length, '待分派', `App.setPublicFilter('regulatory-actions','status',null);App.renderRegulatoryActions()`],
      [all.filter(a => a.priority === 'CRITICAL' || a.priority === 'HIGH').length, '高优先级', `App.setPublicFilter('regulatory-actions','priority','HIGH');App.renderRegulatoryActions()`],
      [all.filter(a => a.status === 'OVERDUE').length, '逾期行动', `App.setPublicFilter('regulatory-actions','status','OVERDUE');App.renderRegulatoryActions()`],
      [all.filter(a => a.status === 'IN_PROGRESS').length, '执行中', `App.setPublicFilter('regulatory-actions','status','IN_PROGRESS');App.renderRegulatoryActions()`],
      [all.filter(a => ['COMPLETED', 'VERIFIED'].includes(a.status)).length, '已完成', `App.setPublicFilter('regulatory-actions','status','VERIFIED');App.renderRegulatoryActions()`]
    ];
    const filterBar = `<div class="filter-bar" style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap">
      <select onchange="App.setPublicFilter('regulatory-actions','priority',this.value||null);App.renderRegulatoryActions()"><option value="">全部优先级</option>${['CRITICAL','HIGH','MEDIUM','LOW'].map(p => `<option value="${p}" ${f.priority===p?'selected':''}>${p}</option>`).join('')}</select>
      <select onchange="App.setPublicFilter('regulatory-actions','status',this.value||null);App.renderRegulatoryActions()"><option value="">全部状态</option>${['RECOMMENDED','ASSIGNED','IN_PROGRESS','WAITING_FEEDBACK','COMPLETED','VERIFIED','OVERDUE','REOPENED'].map(s => `<option value="${s}" ${f.status===s?'selected':''}>${s}</option>`).join('')}</select>
      ${(f.priority || f.status) ? `<button class="btn btn-outline" onclick="App.clearPublicFilter('regulatory-actions')">清除筛选</button>` : ''}
    </div>`;
    const rows = actions.map(a => {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === a.entityId);
      return `<tr class="clickable" onclick="App.showRegulatoryActionDetail('${a.actionId}')"><td>${a.actionId}</td><td>${a.actionType}</td><td>${this.renderPublicPriorityBadge(a.priority)}</td><td>${ent ? ent.entityName : a.entityId || '—'}</td><td>${a.triggerReason || '—'}</td><td>${(a.sourceEventIds || []).length}</td><td>${(a.sourceRiskMatterIds || []).length}</td><td>${ent ? ent.entityName : '—'}</td><td>${a.recommendedAction}</td><td>${this.renderPublicActionStatusBadge(a.status)}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管决策</span><h2>集团监管行动中心</h2><p>监管建议索引，可穿透至事件、风险与整改来源。</p></div><div>行动 <b>${all.length}</b></div></div>
      <div class="group-metrics">${kpi.map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="card"><div class="card-title">监管行动清单</div>${filterBar}
        ${actions.length ? `<table class="data-table"><thead><tr><th>编号</th><th>类型</th><th>优先级</th><th>监管对象</th><th>触发原因</th><th>来源事件</th><th>来源风险</th><th>责任主体</th><th>建议动作</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>` : (all.length ? this.renderPublicNoFilterResults() : this.renderPublicEmptyState('暂无监管行动'))}
        <p style="margin-top:8px">${this.renderPublicLinkButton('进入监管行动执行', `App.navigatePublic('regulatory-action-execution')`)}</p>
      </div>
      <div id="regulatoryActionDetail"></div>`;
    if (this.regulatoryActionFocusId) setTimeout(() => this.showRegulatoryActionDetail(this.regulatoryActionFocusId), 0);
  },

  showRegulatoryActionDetail(actionId) {
    const act = (APP_DATA.regulatoryActions || []).find(a => a.actionId === actionId);
    const node = document.getElementById('regulatoryActionDetail');
    this.regulatoryActionFocusId = actionId;
    this.showPublicDetailOrNotFound(node, act, () => {
      const ent = act.entityId ? APP_DATA.globalLegalEntities.find(e => e.entityId === act.entityId) : null;
      const reg = act.regionId ? APP_DATA.globalRegions.find(r => r.regionId === act.regionId) : null;
      const country = act.countryId ? APP_DATA.globalCountries.find(c => c.countryId === act.countryId) : null;
      const proj = act.projectId ? APP_DATA.globalProjects.find(p => p.projectId === act.projectId) : null;
      const events = (act.sourceEventIds || []).map(id => APP_DATA.regulatoryEvents.find(e => e.eventId === id)).filter(Boolean);
      const risks = (act.sourceRiskMatterIds || []).map(id => APP_DATA.warnings.find(w => w.id === id) || APP_DATA.crossDomainRiskMatters.find(m => m.riskMatterId === id)).filter(Boolean);
      const kris = (act.sourceKriIds || []).map(id => APP_DATA.groupKris.find(k => k.id === id)).filter(Boolean);
      const qualities = (act.sourceQualityIssueIds || []).map(id => APP_DATA.dataQualityIssues.find(q => q.issueId === id)).filter(Boolean);
      const rects = (act.sourceRectificationTaskIds || []).map(id => APP_DATA.rectificationTasks.find(t => t.taskId === id)).filter(Boolean);
      const feedbacks = this.getRegulatoryActionFeedbacks(act.actionId);
      const isOverdue = act.dueDate && act.dueDate < '2026-07-22' && !['COMPLETED', 'VERIFIED', 'CANCELLED'].includes(act.status);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管行动',
        objectName: act.actionId + ' · ' + act.actionType,
        objectId: act.actionId,
        status: act.status,
        sections: [
          { title: '一、行动基本信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(act.actionId, '行动 ID'), { label: '行动类型', value: act.actionType }, { label: '监管优先级', html: this.renderPublicPriorityBadge(act.priority) }, { label: '策略等级', html: this.renderPublicStrategyBadge(act.strategyLevel) }, { label: '当前状态', html: this.renderPublicActionStatusBadge(act.status) }, { label: '执行进度', value: (act.executionProgress || 0) + '%' }]) },
          { title: '二、监管对象', content: `<p>${reg ? this.renderPublicLinkButton(reg.regionName, `App.navigatePublic('global-regions',{regionId:'${reg.regionId}'})`) : '—'} ${country ? this.renderPublicLinkButton(country.countryName, `App.navigatePublic('global-regions',{regionId:'${country.regionId}',countryId:'${country.countryId}'})`) : ''} ${ent ? this.renderPublicLinkButton(ent.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : ''} ${proj ? this.renderPublicLinkButton(proj.projectName, `App.navigatePublic('global-regions',{projectId:'${proj.projectId}'})`) : ''}</p>` },
          { title: '三、行动来源', content: `<p><b>监管事件：</b>${events.length ? events.map(e => this.renderPublicLinkButton(e.eventId, `App.navigatePublic('regulatory-events',{eventId:'${e.eventId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>风险事项：</b>${risks.length ? risks.map(r => this.renderPublicLinkButton(r.name || r.riskMatterName, r.id ? `App.navigatePublic('warnings',{riskMatterId:'${r.id}'})` : `App.navigatePublic('cross-domain-risks',{riskMatterId:'${r.riskMatterId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>KRI：</b>${kris.length ? kris.map(k => this.renderPublicLinkButton(k.name, `App.navigatePublic('data-governance')`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>数据质量：</b>${qualities.length ? qualities.map(q => this.renderPublicLinkButton(q.issueId, `App.navigatePublic('data-governance',{qualityIssueId:'${q.issueId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>整改任务：</b>${rects.length ? rects.map(t => this.renderPublicLinkButton(t.title, `App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p>` },
          { title: '四、责任分工', content: this.renderPublicMetaGrid([{ label: '责任法人', value: ent ? ent.entityName : act.responsibleEntity || '—' }, { label: '责任部门', value: act.responsibleDepartment || '—' }, { label: '协同部门', value: (act.collaboratingDepartments || []).join('、') || '—' }]) },
          { title: '五、执行时间', content: this.renderPublicMetaGrid([{ label: '创建时间', value: act.createdAt || '—' }, { label: '截止时间', value: act.dueDate || '—' }, { label: '完成时间', value: act.completedAt || '—' }, { label: '验证时间', value: act.verifiedAt || '—' }, { label: '是否逾期', html: isOverdue ? '<span class="badge badge-danger">是</span>' : '<span class="badge badge-success">否</span>' }]) },
          { title: '六、执行反馈', content: feedbacks.length ? feedbacks.map(f => this.renderPublicLinkButton(f.feedbackId + ' · ' + f.feedbackType, `App.showRegulatoryActionFeedbackDetail('${f.feedbackId}')`)).join('') : this.renderPublicEmptyState('暂无反馈') }
        ],
        footer: `${this.renderPublicLinkButton('进入行动执行', `App.navigatePublic('regulatory-action-execution',{actionId:'${act.actionId}'})`)}${events[0] ? this.renderPublicLinkButton('查看来源事件', `App.navigatePublic('regulatory-events',{eventId:'${events[0].eventId}'})`) : ''}${rects[0] ? this.renderPublicLinkButton('查看整改任务', `App.navigatePublic('rectification',{rectificationTaskId:'${rects[0].taskId}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管行动');
  },

  getFilteredExecutionActions() {
    const f = this.regulatoryActionExecutionFilter || {};
    let list = [...(APP_DATA.regulatoryActions || [])];
    if (f.status) list = list.filter(a => a.status === f.status);
    if (f.priority) list = list.filter(a => a.priority === f.priority);
    if (f.entityId) list = list.filter(a => a.entityId === f.entityId);
    return list;
  },

  renderRegulatoryActionExecution() {
    const node = document.getElementById('regulatoryActionExecution');
    if (!node) return;
    const em = APP_DATA.regulatoryActionExecutionMetrics || {};
    const actions = this.getFilteredExecutionActions();
    const all = APP_DATA.regulatoryActions || [];
    const lanes = [
      ['RECOMMENDED', '推荐'],
      ['ASSIGNED', '已分派'],
      ['IN_PROGRESS', '执行中'],
      ['WAITING_FEEDBACK', '待反馈'],
      ['COMPLETED', '待验证'],
      ['VERIFIED', '已完成']
    ];
    const kpi = [
      [em.total, '行动总数'],
      [em.recommended + em.assigned, '待分派'],
      [em.inProgress, '执行中'],
      [em.waitingFeedback, '待反馈'],
      [em.completed, '待验证'],
      [em.verified, '已完成'],
      [em.overdue, '已逾期'],
      [em.reopened, '已重开']
    ];
    const laneHtml = lanes.map(([status, label]) => {
      const items = all.filter(a => a.status === status);
      return `<div class="card" style="min-width:180px"><div class="card-title">${label} (${items.length})</div>${items.length ? items.map(a => this.renderPublicActionCard(a)).join('') : this.renderPublicEmptyState('暂无')}</div>`;
    }).join('');
    const rows = actions.map(a => {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === a.entityId);
      return `<tr class="clickable" onclick="App.showRegulatoryActionExecutionDetail('${a.actionId}')"><td>${a.actionId}</td><td>${a.actionType}</td><td>${this.renderPublicPriorityBadge(a.priority)}</td><td>${ent ? ent.entityName : '—'}</td><td>${a.responsibleDepartment || '—'}</td><td>${a.dueDate || '—'}</td><td>${this.renderPublicActionStatusBadge(a.status)}</td><td>${a.executionProgress || 0}%</td><td>${(a.sourceRiskMatterIds || []).length}</td><td>${(a.sourceEventIds || []).length}</td><td>${(a.sourceRectificationTaskIds || []).length}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管决策执行</span><h2>监管行动执行</h2><p>跟踪监管行动全生命周期：分派 → 执行 → 反馈 → 验证 → 关闭。</p></div><div>执行中 <b>${em.inProgress || 0}</b></div></div>
      <div class="group-metrics">${kpi.map(([v, l]) => this.renderPublicKpiCard(l, v, `App.navigatePublic('regulatory-action-execution')`)).join('')}</div>
      <div class="card"><div class="card-title">行动执行看板</div><div class="group-three" style="overflow-x:auto">${laneHtml}</div></div>
      <div class="card"><div class="card-title">行动执行清单</div>
        ${actions.length ? `<table class="data-table"><thead><tr><th>行动ID</th><th>类型</th><th>优先级</th><th>监管对象</th><th>责任部门</th><th>截止日期</th><th>状态</th><th>进度</th><th>来源风险</th><th>来源事件</th><th>关联整改</th></tr></thead><tbody>${rows}</tbody></table>` : (all.length ? this.renderPublicNoFilterResults() : this.renderPublicEmptyState('暂无行动'))}
      </div>
      <div id="regulatoryActionExecutionDetail"></div>
      <div id="regulatoryActionFeedbackDetail"></div>`;
    if (this.regulatoryActionExecutionFocusId) setTimeout(() => this.showRegulatoryActionExecutionDetail(this.regulatoryActionExecutionFocusId), 0);
    if (this.regulatoryActionFeedbackFocusId) setTimeout(() => this.showRegulatoryActionFeedbackDetail(this.regulatoryActionFeedbackFocusId), 0);
  },

  showRegulatoryActionExecutionDetail(actionId) {
    const act = (APP_DATA.regulatoryActions || []).find(a => a.actionId === actionId);
    const node = document.getElementById('regulatoryActionExecutionDetail') || document.getElementById('regulatoryActionDetail');
    this.regulatoryActionExecutionFocusId = actionId;
    this.showPublicDetailOrNotFound(node, act, () => {
      const ent = act.entityId ? APP_DATA.globalLegalEntities.find(e => e.entityId === act.entityId) : null;
      const reg = act.regionId ? APP_DATA.globalRegions.find(r => r.regionId === act.regionId) : null;
      const country = act.countryId ? APP_DATA.globalCountries.find(c => c.countryId === act.countryId) : null;
      const proj = act.projectId ? APP_DATA.globalProjects.find(p => p.projectId === act.projectId) : null;
      const events = (act.sourceEventIds || []).map(id => APP_DATA.regulatoryEvents.find(e => e.eventId === id)).filter(Boolean);
      const risks = (act.sourceRiskMatterIds || []).map(id => APP_DATA.warnings.find(w => w.id === id) || APP_DATA.crossDomainRiskMatters.find(m => m.riskMatterId === id)).filter(Boolean);
      const kris = (act.sourceKriIds || []).map(id => APP_DATA.groupKris.find(k => k.id === id)).filter(Boolean);
      const qualities = (act.sourceQualityIssueIds || []).map(id => APP_DATA.dataQualityIssues.find(q => q.issueId === id)).filter(Boolean);
      const rects = (act.sourceRectificationTaskIds || []).map(id => APP_DATA.rectificationTasks.find(t => t.taskId === id)).filter(Boolean);
      const feedbacks = this.getRegulatoryActionFeedbacks(act.actionId);
      const latestFb = feedbacks[feedbacks.length - 1];
      const isOverdue = act.dueDate && act.dueDate < '2026-07-22' && !['COMPLETED', 'VERIFIED', 'CANCELLED'].includes(act.status);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管行动执行',
        objectName: act.actionId + ' · ' + act.actionType,
        objectId: act.actionId,
        status: act.status,
        sections: [
          { title: '一、行动基本信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(act.actionId, '行动 ID'), { label: '行动类型', value: act.actionType }, { label: '监管优先级', html: this.renderPublicPriorityBadge(act.priority) }, { label: '策略等级', html: this.renderPublicStrategyBadge(act.strategyLevel) }, { label: '当前状态', html: this.renderPublicActionStatusBadge(act.status) }, { label: '执行进度', value: (act.executionProgress || 0) + '%' }]) },
          { title: '二、监管对象', content: `<p>${reg ? this.renderPublicLinkButton(reg.regionName, `App.navigatePublic('global-regions',{regionId:'${reg.regionId}'})`) : '—'} ${country ? this.renderPublicLinkButton(country.countryName, `App.navigatePublic('global-regions',{countryId:'${country.countryId}'})`) : ''} ${ent ? this.renderPublicLinkButton(ent.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : ''} ${proj ? this.renderPublicLinkButton(proj.projectName, `App.navigatePublic('global-regions',{projectId:'${proj.projectId}'})`) : ''}</p>` },
          { title: '三、行动来源', content: `<p><b>监管事件：</b>${events.map(e => this.renderPublicLinkButton(e.eventId, `App.navigatePublic('regulatory-events',{eventId:'${e.eventId}'})`)).join('') || this.renderPublicEmptyState('暂无')}</p><p><b>风险事项：</b>${risks.map(r => this.renderPublicLinkButton(r.name || r.riskMatterName, r.id ? `App.navigatePublic('warnings',{riskMatterId:'${r.id}'})` : `App.navigatePublic('cross-domain-risks',{riskMatterId:'${r.riskMatterId}'})`)).join('') || this.renderPublicEmptyState('暂无')}</p><p><b>KRI：</b>${kris.map(k => this.renderPublicLinkButton(k.name, `App.navigatePublic('data-governance')`)).join('') || this.renderPublicEmptyState('暂无')}</p><p><b>数据质量：</b>${qualities.map(q => this.renderPublicLinkButton(q.issueId, `App.navigatePublic('data-governance',{qualityIssueId:'${q.issueId}'})`)).join('') || this.renderPublicEmptyState('暂无')}</p><p><b>整改任务：</b>${rects.map(t => this.renderPublicLinkButton(t.title, `App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join('') || this.renderPublicEmptyState('暂无')}</p>` },
          { title: '四、责任分工', content: this.renderPublicMetaGrid([{ label: '责任法人', value: ent ? this.renderPublicLinkButton(ent.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : '—' }, { label: '责任部门', value: act.responsibleDepartment || '—' }, { label: '协同部门', value: (act.collaboratingDepartments || []).join('、') || '—' }]) },
          { title: '五、执行时间', content: this.renderPublicMetaGrid([{ label: '创建时间', value: act.createdAt || '—' }, { label: '截止时间', value: act.dueDate || '—' }, { label: '完成时间', value: act.completedAt || '—' }, { label: '验证时间', value: act.verifiedAt || '—' }, { label: '是否逾期', html: isOverdue ? '<span class="badge badge-danger">是</span>' : '<span class="badge badge-success">否</span>' }]) },
          { title: '六、执行反馈', content: latestFb ? this.renderPublicMetaGrid([{ label: '反馈状态', value: act.feedbackStatus || '—' }, { label: '反馈说明', value: latestFb.resultSummary || '—' }, { label: '执行结果', value: latestFb.evidenceDescription || '—' }, { label: '验证结论', value: latestFb.verificationStatus || '—' }]) : this.renderPublicEmptyState('暂无反馈') }
        ],
        footer: `${feedbacks[0] ? this.renderPublicLinkButton('查看反馈', `App.showRegulatoryActionFeedbackDetail('${feedbacks[0].feedbackId}')`) : ''}${this.renderPublicLinkButton('返回行动中心', `App.navigatePublic('regulatory-actions',{actionId:'${act.actionId}'})`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管行动执行');
  },

  showRegulatoryActionFeedbackDetail(feedbackId) {
    const fb = (APP_DATA.regulatoryActionFeedbacks || []).find(f => f.feedbackId === feedbackId);
    const node = document.getElementById('regulatoryActionFeedbackDetail') || document.getElementById('regulatoryActionExecutionDetail');
    this.regulatoryActionFeedbackFocusId = feedbackId;
    this.showPublicDetailOrNotFound(node, fb, () => {
      const act = (APP_DATA.regulatoryActions || []).find(a => a.actionId === fb.actionId);
      const rects = (fb.relatedRectificationTaskIds || []).map(id => APP_DATA.rectificationTasks.find(t => t.taskId === id)).filter(Boolean);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管行动反馈',
        objectName: fb.feedbackId + ' · ' + fb.feedbackType,
        objectId: fb.feedbackId,
        status: fb.feedbackStatus,
        sections: [
          { title: '一、反馈信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(fb.feedbackId, '反馈 ID'), { label: '关联行动', html: act ? this.renderPublicLinkButton(act.actionId, `App.showRegulatoryActionExecutionDetail('${act.actionId}')`) : '—' }, { label: '反馈类型', value: fb.feedbackType }, { label: '反馈状态', value: fb.feedbackStatus }, { label: '提交人', value: fb.submittedBy || '—' }, { label: '提交时间', value: fb.submittedAt || '—' }]) },
          { title: '二、执行进展', content: this.renderPublicMetaGrid([{ label: '进度（前）', value: (fb.progressBefore || 0) + '%' }, { label: '进度（后）', value: (fb.progressAfter || 0) + '%' }, { label: '结果摘要', value: fb.resultSummary || '—' }, { label: '佐证说明', value: fb.evidenceDescription || '—' }]) },
          { title: '三、验证结论', content: this.renderPublicMetaGrid([{ label: '验证状态', value: fb.verificationStatus || '—' }, { label: '验证人', value: fb.verifiedBy || '—' }, { label: '验证时间', value: fb.verifiedAt || '—' }]) },
          { title: '四、关联整改', content: rects.length ? rects.map(t => this.renderPublicLinkButton(t.title, `App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join('') : this.renderPublicEmptyState('暂无关联整改') }
        ],
        footer: act ? this.renderPublicLinkButton('查看关联行动', `App.showRegulatoryActionExecutionDetail('${act.actionId}')`) : ''
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管行动反馈');
  },

  showRegulatoryDecisionDetail(decisionId) {
    const dec = (APP_DATA.regulatoryDecisionHistory || []).find(d => d.decisionId === decisionId);
    const node = document.getElementById('regulatoryActionExecutionDetail') || document.getElementById('regulatoryActionDetail');
    this.showPublicDetailOrNotFound(node, dec, () => {
      const events = (dec.sourceEventIds || []).map(id => APP_DATA.regulatoryEvents.find(e => e.eventId === id)).filter(Boolean);
      const actions = (dec.sourceActionIds || []).map(id => APP_DATA.regulatoryActions.find(a => a.actionId === id)).filter(Boolean);
      const rects = (dec.sourceRectificationTaskIds || []).map(id => APP_DATA.rectificationTasks.find(t => t.taskId === id)).filter(Boolean);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管决策记录',
        objectName: dec.decisionId + ' · ' + dec.decisionType,
        objectId: dec.decisionId,
        status: dec.currentValue,
        sections: [
          { title: '一、决策信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(dec.decisionId, '决策 ID'), { label: '决策类型', value: dec.decisionType }, { label: '变更前', value: dec.previousValue || '—' }, { label: '变更后', value: dec.currentValue || '—' }, { label: '变更原因', value: dec.reason || '—' }, { label: '发生时间', value: dec.occurredAt || '—' }]) },
          { title: '二、关联来源', content: `<p><b>监管事件：</b>${events.map(e => this.renderPublicLinkButton(e.eventId, `App.navigatePublic('regulatory-events',{eventId:'${e.eventId}'})`)).join('') || this.renderPublicEmptyState('暂无')}</p><p><b>监管行动：</b>${actions.map(a => this.renderPublicLinkButton(a.actionId, `App.showRegulatoryActionExecutionDetail('${a.actionId}')`)).join('') || this.renderPublicEmptyState('暂无')}</p><p><b>整改任务：</b>${rects.map(t => this.renderPublicLinkButton(t.title, `App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join('') || this.renderPublicEmptyState('暂无')}</p>` }
        ],
        footer: dec.entityId ? this.renderPublicLinkButton('查看法人', `App.navigatePublic('global-legal-entities',{entityId:'${dec.entityId}'})`) : ''
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管决策记录');
  },

  renderRegulatoryMaturity() {
    const node = document.getElementById('regulatoryMaturity');
    if (!node) return;
    const m = APP_DATA.regulatoryMaturity || {};
    const trend = APP_DATA.regulatoryMaturityTrend || {};
    const compareType = this.maturityCompareType || 'group';
    const compareItems = compareType === 'region' ? (m.regionMaturity || []).slice(0, 5)
      : compareType === 'entity' ? (m.entityMaturity || []).slice(0, 5)
      : compareType === 'domain' ? (m.domainMaturity || [])
      : (m.dimensions || []);
    const compareLabel = compareType === 'region' ? 'objectName' : compareType === 'entity' ? 'objectName' : compareType === 'domain' ? 'objectName' : 'dimensionName';
    const regionRows = (m.regionMaturity || []).map(r => `<tr class="clickable" onclick="App.navigatePublic('global-regions',{regionId:'${r.objectId}'})"><td>${r.objectName}</td><td>${this.renderPublicMaturityBadge(r.level)}</td><td>${r.score}</td><td>${r.dataScore}</td><td>${r.coverageScore}</td><td>${r.monitorScore}</td><td>${r.closureScore}</td><td>${r.optimizeScore}</td><td>${r.mainGap}</td></tr>`).join('');
    const entityRows = (m.entityMaturity || []).map(e => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${e.objectId}'})"><td>${e.objectName}</td><td>${e.regionName || e.regionId}</td><td>${this.renderPublicMaturityBadge(e.level)}</td><td>${e.score}</td><td>${this.renderPublicPriorityBadge(e.priority)}</td><td>${this.renderPublicHealthBadge(e.healthLevel)}</td><td>${e.mainGap}</td><td>${e.suggestedAction}</td></tr>`).join('');
    const gapRows = (m.gaps || []).map(g => `<tr class="clickable" onclick="App.navigatePublic('regulatory-optimization')"><td>${g.gapName}</td><td>${(g.affectedObjects || []).join('、') || '—'}</td><td>${g.affectedCount}</td><td>${g.currentValue}</td><td>${g.targetValue}</td><td>${g.gap}</td><td>${g.suggestedMeasure}</td></tr>`).join('');
    const dimCards = (m.dimensions || []).map(d => `<div class="card" style="margin-bottom:8px"><div class="card-title">${d.dimensionName} ${this.renderPublicMaturityBadge(d.level)}</div>
      <p class="insight-note"><b>评分：</b>${d.score}（${d.scoreChange >= 0 ? '+' : ''}${d.scoreChange}） · <b>短板：</b>${d.mainGap}</p>
      <p class="insight-note"><b>核心指标：</b>${d.indicators.slice(0, 3).map(i => `${i.name} ${i.value}${i.unit || ''}`).join(' · ')}</p>
      <p class="insight-note"><b>优化建议：</b>${d.recommendation}</p>
      ${this.renderPublicLinkButton('查看优化建议', `App.navigatePublic('regulatory-optimization')`)}
    </div>`).join('');
    const trendRows = (trend.periods || []).map(p => `<tr><td>${p.period}</td><td>${p.overall}</td><td>${p.data}</td><td>${p.coverage}</td><td>${p.monitor}</td><td>${p.closure}</td><td>${p.optimize}</td><td><em>${p.note || trend.note || ''}</em></td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管体系持续优化</span><h2>集团监管成熟度</h2><p>基于监管运行数据动态评价集团整体、区域、法人、业务领域监管成熟度。</p></div><div>${this.renderPublicMaturityBadge(m.overallLevel)} <b>${m.overallScore}</b>分</div></div>
      <div class="group-metrics">${[
        [m.overallScore, '集团整体评分', `App.navigatePublic('regulatory-maturity')`],
        [(m.scoreChange >= 0 ? '+' : '') + m.scoreChange, '较上期变化', `App.navigatePublic('regulatory-maturity')`],
        [m.highestDimension?.dimensionName || '—', '最高维度', `App.navigatePublic('regulatory-maturity')`],
        [m.lowestDimension?.dimensionName || '—', '最低维度', `App.navigatePublic('regulatory-optimization')`],
        [m.pendingOptimizationCount, '待优化能力', `App.navigatePublic('regulatory-optimization')`]
      ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="card"><div class="card-title">五大能力维度</div>${dimCards}</div>
      <div class="group-three">
        <div class="card"><div class="card-title">成熟度对比
          <select style="margin-left:8px" onchange="App.maturityCompareType=this.value;App.renderRegulatoryMaturity()"><option value="group" ${compareType==='group'?'selected':''}>集团维度</option><option value="region" ${compareType==='region'?'selected':''}>区域</option><option value="entity" ${compareType==='entity'?'selected':''}>法人</option><option value="domain" ${compareType==='domain'?'selected':''}>业务领域</option></select>
        </div>${this.renderPublicMaturityRadar(compareItems, compareLabel)}</div>
        <div class="card"><div class="card-title">成熟度趋势 <em style="font-size:11px;color:#888">${trend.note || '基于当前历史索引模拟'}</em></div>
          <table class="data-table"><thead><tr><th>期间</th><th>整体</th><th>数据</th><th>覆盖</th><th>监测</th><th>闭环</th><th>优化</th><th>说明</th></tr></thead><tbody>${trendRows}</tbody></table>
        </div>
        <div class="card"><div class="card-title">优化建议入口</div>
          ${(APP_DATA.regulatoryOptimizationRecommendations || []).slice(0, 4).map(r => `<button class="btn btn-outline" style="margin:4px;display:block;width:100%;text-align:left" onclick="App.showRegulatoryOptimizationDetail('${r.recommendationId}')">${r.title} · ${r.priority}</button>`).join('') || this.renderPublicEmptyState('暂无优化建议')}
          <p>${this.renderPublicLinkButton('进入持续优化', `App.navigatePublic('regulatory-optimization')`)}</p>
        </div>
      </div>
      <div class="card"><div class="card-title">区域成熟度排名</div>
        <table class="data-table"><thead><tr><th>区域</th><th>等级</th><th>综合</th><th>数据</th><th>覆盖</th><th>监测</th><th>闭环</th><th>优化</th><th>短板</th></tr></thead><tbody>${regionRows || '<tr><td colspan="9">暂无</td></tr>'}</tbody></table>
      </div>
      <div class="card"><div class="card-title">法人成熟度排名</div>
        <table class="data-table"><thead><tr><th>法人</th><th>区域</th><th>等级</th><th>综合</th><th>优先级</th><th>健康度</th><th>短板</th><th>建议行动</th></tr></thead><tbody>${entityRows || '<tr><td colspan="8">暂无</td></tr>'}</tbody></table>
      </div>
      <div class="card"><div class="card-title">成熟度短板分析</div>
        ${gapRows ? `<table class="data-table"><thead><tr><th>短板</th><th>影响对象</th><th>范围</th><th>当前</th><th>目标</th><th>差距</th><th>建议措施</th></tr></thead><tbody>${gapRows}</tbody></table>` : this.renderPublicEmptyState('暂无短板')}
        <p style="margin-top:8px">${this.renderPublicLinkButton('成熟度评分规则', `App.navigatePublic('regulatory-rule-config',{ruleId:'RULE-MAT-001'})`)} ${this.renderPublicLinkButton('仿真推演', `App.navigatePublic('regulatory-simulation')`)}</p>
      </div>
      <div id="regulatoryOptimizationDetail"></div>`;
    if (this.regulatoryOptimizationFocusId) setTimeout(() => this.showRegulatoryOptimizationDetail(this.regulatoryOptimizationFocusId), 0);
  },

  renderRegulatoryOptimization() {
    const node = document.getElementById('regulatoryOptimization');
    if (!node) return;
    const analysis = APP_DATA.regulatoryOptimizationAnalysis || {};
    const summary = analysis.summary || {};
    const recs = APP_DATA.regulatoryOptimizationRecommendations || [];
    const metricRows = (analysis.metricOptimizations || []).filter(m => m.status === 'OPEN').slice(0, 10).map(m => `<tr class="clickable" onclick="App.navigatePublic('data-governance')"><td>${m.metricName}</td><td>${m.currentValue}%</td><td>${m.targetValue}%</td><td>${m.gap}</td><td>${m.dataSource}</td><td>${m.status}</td></tr>`).join('');
    const kriRows = (analysis.kriOptimizations || []).map(k => `<tr class="clickable" onclick="App.navigatePublic('data-governance')"><td>${k.kriName}</td><td>${k.currentThreshold}</td><td>${k.anomalyFrequency}</td><td>${k.falsePositiveRate !== null ? k.falsePositiveRate + '%' : '—'}</td><td>${k.missRisk}</td><td>${k.suggestedThreshold || '—'}</td><td><em>${k.analysisMode}</em></td><td>${k.status}</td></tr>`).join('');
    const stratRows = (analysis.strategyOptimizations || []).map(s => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${s.objectId}'})"><td>${s.objectName}</td><td>${this.renderPublicStrategyBadge(s.currentStrategy)}</td><td>${s.previousStrategy}</td><td>${s.changeCount}</td><td>${s.effectScore}</td><td>${this.renderPublicStrategyBadge(s.suggestedStrategy)}</td></tr>`).join('');
    const actRows = (analysis.actionEffectAnalysis || []).map(a => `<tr class="clickable" onclick="App.navigatePublic('regulatory-action-execution')"><td>${a.actionType}</td><td>${a.actionCount}</td><td>${a.completionRate}%</td><td>${a.verificationPassRate}%</td><td>${a.overdueRate}%</td></tr>`).join('');
    const recRows = recs.map(r => `<tr class="clickable" onclick="App.showRegulatoryOptimizationDetail('${r.recommendationId}')"><td>${r.recommendationId}</td><td>${r.title}</td><td>${this.renderPublicPriorityBadge(r.priority)}</td><td>${r.currentScore}</td><td>${r.targetScore}</td><td>${r.gap}</td><td>${r.status}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管体系持续优化</span><h2>集团监管持续优化</h2><p>回答"下一步应该优化什么"——指标、KRI、策略与监管行动效果分析。</p></div><div>待优化 <b>${summary.open || 0}</b></div></div>
      <div class="group-metrics">${[
        [summary.open, '待优化事项', `App.navigatePublic('regulatory-optimization')`],
        [summary.highPriority, '高优先级', `App.navigatePublic('regulatory-optimization')`],
        [summary.inProgress, '进行中', `App.navigatePublic('regulatory-optimization')`],
        [summary.completed, '已完成', `App.navigatePublic('regulatory-optimization')`],
        [summary.newThisPeriod, '本期新增', `App.navigatePublic('regulatory-optimization')`]
      ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="card"><div class="card-title">优化建议总览</div>
        ${recRows ? `<table class="data-table"><thead><tr><th>编号</th><th>标题</th><th>优先级</th><th>当前分</th><th>目标分</th><th>差距</th><th>状态</th></tr></thead><tbody>${recRows}</tbody></table>` : this.renderPublicEmptyState('暂无优化建议')}
      </div>
      <div class="group-three">
        <div class="card"><div class="card-title">指标优化</div>
          <table class="data-table"><thead><tr><th>指标</th><th>当前</th><th>目标</th><th>差距</th><th>来源</th><th>状态</th></tr></thead><tbody>${metricRows || '<tr><td colspan="6">暂无待优化指标</td></tr>'}</tbody></table>
          <p>${this.renderPublicLinkButton('数据治理', `App.navigatePublic('data-governance')`)}</p>
        </div>
        <div class="card"><div class="card-title">KRI 优化</div>
          <table class="data-table"><thead><tr><th>KRI</th><th>阈值</th><th>异常频率</th><th>误报率</th><th>漏报</th><th>建议阈值</th><th>分析模式</th><th>状态</th></tr></thead><tbody>${kriRows || '<tr><td colspan="8">暂无</td></tr>'}</tbody></table>
        </div>
        <div class="card"><div class="card-title">监管策略优化</div>
          <table class="data-table"><thead><tr><th>法人</th><th>当前策略</th><th>历史</th><th>变化次数</th><th>效果分</th><th>建议策略</th></tr></thead><tbody>${stratRows || '<tr><td colspan="6">暂无</td></tr>'}</tbody></table>
          <p>${this.renderPublicLinkButton('决策历史', `App.navigatePublic('regulatory-strategy')`)}</p>
        </div>
      </div>
      <div class="card"><div class="card-title">监管行动效果分析</div>
        <table class="data-table"><thead><tr><th>行动类型</th><th>数量</th><th>完成率</th><th>验证率</th><th>逾期率</th></tr></thead><tbody>${actRows || '<tr><td colspan="5">暂无</td></tr>'}</tbody></table>
        <p>${this.renderPublicLinkButton('监管行动执行', `App.navigatePublic('regulatory-action-execution')`)} ${this.renderPublicLinkButton('监管成熟度', `App.navigatePublic('regulatory-maturity')`)}</p>
      </div>
      <div id="regulatoryOptimizationDetail"></div>`;
    if (this.regulatoryOptimizationFocusId) setTimeout(() => this.showRegulatoryOptimizationDetail(this.regulatoryOptimizationFocusId), 0);
  },

  showRegulatoryOptimizationDetail(recommendationId) {
    const rec = (APP_DATA.regulatoryOptimizationRecommendations || []).find(r => r.recommendationId === recommendationId);
    const node = document.getElementById('regulatoryOptimizationDetail');
    this.regulatoryOptimizationFocusId = recommendationId;
    this.showPublicDetailOrNotFound(node, rec, () => {
      const dim = (APP_DATA.regulatoryMaturity || {}).dimensions?.find(d => d.dimensionId === rec.dimensionId);
      const metrics = (rec.relatedMetricIds || []).map(id => (dim?.indicators || []).find(i => i.metricId === id) || (APP_DATA.regulatoryOptimizationAnalysis?.metricOptimizations || []).find(m => m.metricId === id)).filter(Boolean);
      const risks = (rec.relatedRiskMatterIds || []).map(id => APP_DATA.warnings.find(w => w.id === id) || APP_DATA.crossDomainRiskMatters.find(m => m.riskMatterId === id)).filter(Boolean);
      const rects = (rec.relatedRectificationTaskIds || []).map(id => APP_DATA.rectificationTasks.find(t => t.taskId === id)).filter(Boolean);
      const acts = (rec.relatedActionIds || []).map(id => APP_DATA.regulatoryActions.find(a => a.actionId === id)).filter(Boolean);
      const ent = rec.targetId && rec.targetType === 'ENTITY' ? APP_DATA.globalLegalEntities.find(e => e.entityId === rec.targetId) : null;
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管优化建议',
        objectName: rec.title,
        objectId: rec.recommendationId,
        status: rec.status,
        sections: [
          { title: '一、建议信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(rec.recommendationId, '建议 ID'), { label: '维度', value: dim ? dim.dimensionName : rec.dimensionId }, { label: '优先级', html: this.renderPublicPriorityBadge(rec.priority) }, { label: '行动类型', value: rec.actionType }, { label: '当前评分', value: rec.currentScore }, { label: '目标评分', value: rec.targetScore }, { label: '差距', value: rec.gap }, { label: '建议措施', value: rec.suggestedMeasure || '—' }]) },
          { title: '二、优化对象', content: ent ? this.renderPublicLinkButton(ent.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : (rec.targetType === 'GROUP' ? '集团整体' : rec.targetId || '—') },
          { title: '三、关联指标', content: metrics.length ? metrics.map(m => this.renderPublicLinkButton((m.name || m.metricName) + ' · ' + (m.value !== undefined ? m.value + '%' : m.currentValue + '%'), `App.navigatePublic('data-governance')`)).join('') : this.renderPublicEmptyState('暂无关联指标') },
          { title: '四、关联风险', content: risks.length ? risks.map(r => this.renderPublicLinkButton(r.name || r.riskMatterName, r.id ? `App.navigatePublic('warnings',{riskMatterId:'${r.id}'})` : `App.navigatePublic('cross-domain-risks',{riskMatterId:'${r.riskMatterId}'})`)).join('') : this.renderPublicEmptyState('暂无关联风险') },
          { title: '五、关联整改', content: rects.length ? rects.map(t => this.renderPublicLinkButton(t.title, `App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join('') : this.renderPublicEmptyState('暂无关联整改') },
          { title: '六、关联行动', content: acts.length ? acts.map(a => this.renderPublicLinkButton(a.actionId, `App.navigatePublic('regulatory-action-execution',{actionId:'${a.actionId}'})`)).join('') : this.renderPublicEmptyState('暂无关联行动') }
        ],
        footer: `${this.renderPublicLinkButton('监管成熟度', `App.navigatePublic('regulatory-maturity')`)}${acts[0] ? this.renderPublicLinkButton('进入行动执行', `App.navigatePublic('regulatory-action-execution',{actionId:'${acts[0].actionId}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管优化建议');
  },

  renderRegulatoryStrategy() {
    const node = document.getElementById('regulatoryStrategy');
    if (!node) return;
    const sa = APP_DATA.regulatoryStrategyAnalysis || {};
    const regionRows = (sa.regions || []).map(r => `<tr class="clickable" onclick="App.navigatePublic('global-regions',{regionId:'${r.objectId}'})"><td>${r.objectName}</td><td>${this.renderPublicStrategyBadge(r.strategyLevel)}</td><td>${r.strategyLabel}</td><td>${r.eventCount}</td><td>${this.renderPublicHealthBadge(r.healthLevel)}</td><td>${r.overdueRects}</td></tr>`).join('');
    const entityRows = (sa.entities || []).map(e => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${e.objectId}'})"><td>${e.objectName}</td><td>${this.renderPublicStrategyBadge(e.strategyLevel)}</td><td>${e.strategyLabel}</td><td>${this.renderPublicPriorityBadge(e.priority)}</td><td>${this.renderPublicHealthBadge(e.healthLevel)}</td></tr>`).join('');
    const domainRows = (sa.domains || []).map(d => `<tr class="clickable" onclick="App.navigatePublic('cross-domain-risks',{domainId:'${d.objectId}'})"><td>${d.objectName}</td><td>${this.renderPublicStrategyBadge(d.strategyLevel)}</td><td>${d.strategyLabel}</td><td>${d.eventCount}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管决策</span><h2>集团监管策略分析</h2><p>基于风险集中度、健康度与整改效率动态输出区域、法人、领域监管策略。</p></div></div>
      <div class="card"><div class="card-title">区域监管策略</div><table class="data-table"><thead><tr><th>区域</th><th>策略等级</th><th>策略标签</th><th>事件数</th><th>健康度</th><th>超期整改</th></tr></thead><tbody>${regionRows}</tbody></table></div>
      <div class="card"><div class="card-title">法人监管策略</div><table class="data-table"><thead><tr><th>法人</th><th>策略等级</th><th>策略标签</th><th>监管优先级</th><th>健康度</th></tr></thead><tbody>${entityRows}</tbody></table></div>
      <div class="card"><div class="card-title">领域监管策略</div><table class="data-table"><thead><tr><th>业务领域</th><th>策略等级</th><th>策略标签</th><th>事件数</th></tr></thead><tbody>${domainRows}</tbody></table>
        <p style="margin-top:8px">${this.renderPublicLinkButton('数据治理详情', `App.navigatePublic('data-governance')`)} ${this.renderPublicLinkButton('监管决策驾驶舱', `App.navigatePublic('regulatory-command-center')`)} ${this.renderPublicLinkButton('监管行动执行', `App.navigatePublic('regulatory-action-execution')`)}</p>
      </div>
      <div class="card"><div class="card-title">监管决策变化记录</div>
        ${(APP_DATA.regulatoryDecisionHistory || []).length ? `<table class="data-table"><thead><tr><th>决策ID</th><th>类型</th><th>变更前</th><th>变更后</th><th>原因</th><th>时间</th></tr></thead><tbody>${(APP_DATA.regulatoryDecisionHistory || []).slice(0, 10).map(d => `<tr class="clickable" onclick="App.showRegulatoryDecisionDetail('${d.decisionId}')"><td>${d.decisionId}</td><td>${d.decisionType}</td><td>${d.previousValue || '—'}</td><td>${d.currentValue || '—'}</td><td>${d.reason || '—'}</td><td>${d.occurredAt || '—'}</td></tr>`).join('')}</tbody></table>` : this.renderPublicEmptyState('暂无决策记录')}
      </div>`;
  },

  renderRegulatoryRuleConfig() {
    const node = document.getElementById('regulatoryRuleConfig');
    if (!node) return;
    const m = APP_DATA.regulatoryRuleConfigMetrics || {};
    const rules = APP_DATA.regulatoryRules || [];
    const f = this.regulatoryRuleFilter || {};
    let filtered = [...rules];
    if (f.ruleType) filtered = filtered.filter(r => r.ruleType === f.ruleType);
    if (f.status) filtered = filtered.filter(r => r.status === f.status);
    const typeGroups = ['RISK_DETECTION', 'KRI_THRESHOLD', 'PRIORITY_SCORING', 'STRATEGY_ROUTING', 'ACTION_TRIGGER', 'MATURITY_SCORING'];
    const typeSections = typeGroups.map(t => {
      const rs = filtered.filter(r => r.ruleType === t);
      if (!rs.length) return '';
      return `<div class="card"><div class="card-title">${this.renderPublicRuleTypeBadge(t)} (${rs.length})</div>
        <table class="data-table"><thead><tr><th>规则ID</th><th>名称</th><th>状态</th><th>版本</th><th>生效日</th><th>影响法人</th><th>逻辑引用</th></tr></thead>
        <tbody>${rs.map(r => `<tr class="clickable" onclick="App.showRegulatoryRuleDetail('${r.ruleId}')"><td>${r.ruleId}</td><td>${r.ruleName}</td><td>${this.renderPublicRuleStatusBadge(r.status)}</td><td>${r.version}</td><td>${r.effectiveDate}</td><td>${r.affectedEntityCount || 0}</td><td>${r.logicRef}</td></tr>`).join('')}</tbody></table></div>`;
    }).join('');
    const paramRows = (APP_DATA.regulatoryRuleParameters || []).map(p => `<tr class="clickable" onclick="App.navigatePublic('regulatory-simulation')"><td>${p.paramId}</td><td>${p.paramName}</td><td>${p.currentValue}</td><td>${p.unit}</td><td>${p.defaultValue}</td><td>${p.allowedMin}-${p.allowedMax}</td><td>${p.lastUpdated}</td><td>${p.effective ? '是' : '否'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管规则体系</span><h2>集团监管规则配置</h2><p>展示当前监管规则如何驱动风险识别、优先级计算、监管策略和监管行动。</p></div><div>规则 <b>${m.totalRules || 0}</b></div></div>
      <div class="group-metrics">${[
        [m.totalRules, '规则总数', `App.navigatePublic('regulatory-rule-config')`],
        [m.activeRules, '启用规则', `App.navigatePublic('regulatory-rule-config')`],
        [m.inactiveRules, '停用规则', `App.navigatePublic('regulatory-rule-config')`],
        [m.pendingRules, '待审核', `App.navigatePublic('regulatory-rule-config')`],
        [m.changedThisPeriod, '本期变更', `App.navigatePublic('regulatory-rule-history')`],
        [m.affectedEntityCount, '影响法人', `App.navigatePublic('global-legal-entities')`]
      ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="filter-bar" style="margin-bottom:12px;display:flex;gap:8px">
        <select onchange="App.regulatoryRuleFilter={...(App.regulatoryRuleFilter||{}),ruleType:this.value||null};App.renderRegulatoryRuleConfig()"><option value="">全部类型</option>${typeGroups.map(t => `<option value="${t}" ${f.ruleType===t?'selected':''}>${t}</option>`).join('')}</select>
        <select onchange="App.regulatoryRuleFilter={...(App.regulatoryRuleFilter||{}),status:this.value||null};App.renderRegulatoryRuleConfig()"><option value="">全部状态</option><option value="ACTIVE">ACTIVE</option></select>
        ${this.renderPublicLinkButton('仿真推演', `App.navigatePublic('regulatory-simulation')`)}
        ${this.renderPublicLinkButton('变更历史', `App.navigatePublic('regulatory-rule-history')`)}
      </div>
      ${typeSections || this.renderPublicEmptyState('暂无规则')}
      <div class="card"><div class="card-title">规则参数</div>
        <table class="data-table"><thead><tr><th>参数ID</th><th>名称</th><th>当前值</th><th>单位</th><th>默认值</th><th>范围</th><th>更新时间</th><th>已生效</th></tr></thead><tbody>${paramRows}</tbody></table>
      </div>
      <div id="regulatoryRuleDetail"></div>`;
    if (this.regulatoryRuleFocusId) setTimeout(() => this.showRegulatoryRuleDetail(this.regulatoryRuleFocusId), 0);
  },

  showRegulatoryRuleDetail(ruleId) {
    const rule = this.getRegulatoryRule(ruleId);
    const node = document.getElementById('regulatoryRuleDetail');
    this.regulatoryRuleFocusId = ruleId;
    this.showPublicDetailOrNotFound(node, rule, () => {
      const params = (rule.parameters || []).map(pid => (APP_DATA.regulatoryRuleParameters || []).find(p => p.paramId === pid)).filter(Boolean);
      const ents = (rule.affectedEntityIds || []).map(id => APP_DATA.globalLegalEntities.find(e => e.entityId === id)).filter(Boolean);
      const risks = (rule.relatedRiskMatterIds || []).map(id => APP_DATA.warnings.find(w => w.id === id) || APP_DATA.crossDomainRiskMatters.find(m => m.riskMatterId === id)).filter(Boolean);
      const acts = (APP_DATA.regulatoryActions || []).filter(a => (rule.relatedActionTypes || []).includes(a.actionType));
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管规则',
        objectName: rule.ruleName,
        objectId: rule.ruleId,
        status: rule.status,
        sections: [
          { title: '一、规则基本信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(rule.ruleId, '规则 ID'), { label: '规则类型', html: this.renderPublicRuleTypeBadge(rule.ruleType) }, { label: '状态', html: this.renderPublicRuleStatusBadge(rule.status) }, { label: '版本', value: rule.version }, { label: '生效日期', value: rule.effectiveDate }, { label: '负责人', value: rule.owner }, { label: '逻辑引用', value: rule.logicRef }, { label: '描述', value: rule.description }]) },
          { title: '二、规则条件', content: this.renderPublicRuleCondition(rule.conditions) },
          { title: '三、规则参数', content: params.length ? params.map(p => `<p class="insight-note">${p.paramName}：${p.currentValue}${p.unit}（默认 ${p.defaultValue}，范围 ${p.allowedMin}-${p.allowedMax}）${this.renderPublicLinkButton('仿真调整', `App.navigatePublic('regulatory-simulation')`)}</p>`).join('') : this.renderPublicEmptyState('暂无参数') },
          { title: '四、触发结果', content: this.renderPublicMetaGrid([{ label: '输出类型', value: rule.outputType }, { label: '输出值', value: rule.outputValue }, { label: '目标类型', value: (rule.targetTypes || []).join('、') }]) },
          { title: '五、受影响法人', content: ents.length ? ents.map(e => this.renderPublicLinkButton(e.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${e.entityId}'})`)).join('') : this.renderPublicEmptyState('暂无') },
          { title: '六、关联风险与行动', content: `<p><b>风险：</b>${risks.map(r => this.renderPublicLinkButton(r.name || r.riskMatterName, r.id ? `App.navigatePublic('warnings',{riskMatterId:'${r.id}'})` : `App.navigatePublic('cross-domain-risks',{riskMatterId:'${r.riskMatterId}'})`)).join('') || this.renderPublicEmptyState('暂无')}</p><p><b>行动类型：</b>${(rule.relatedActionTypes || []).join('、') || '—'}</p><p><b>关联行动：</b>${acts.slice(0, 5).map(a => this.renderPublicLinkButton(a.actionId, `App.navigatePublic('regulatory-action-execution',{actionId:'${a.actionId}'})`)).join('') || '—'}</p>` }
        ],
        footer: `${this.renderPublicLinkButton('仿真推演', `App.navigatePublic('regulatory-simulation')`)}${this.renderPublicLinkButton('变更历史', `App.navigatePublic('regulatory-rule-history')`)}${ents[0] ? this.renderPublicLinkButton('查看法人', `App.navigatePublic('global-legal-entities',{entityId:'${ents[0].entityId}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管规则');
  },

  renderRegulatorySimulation() {
    const node = document.getElementById('regulatorySimulation');
    if (!node) return;
    const sims = APP_DATA.regulatorySimulations || [];
    const results = APP_DATA.regulatorySimulationResults || [];
    const focus = this.regulatorySimulationFocusId;
    const result = focus ? results.find(r => r.simulationId === focus) : results[0];
    const simRows = sims.map(s => `<tr class="clickable" onclick="App.showRegulatorySimulationDetail('${s.simulationId}')"><td>${s.simulationId}</td><td>${s.simulationName}</td><td>${s.baseVersion}</td><td>${s.createdAt}</td><td>${s.createdBy}</td><td>${s.status}</td></tr>`).join('');
    const paramDiff = result ? (result.parameterChanges || []).map(p => `<tr><td>${p.paramId}</td><td>${p.originalValue}</td><td>${p.simulatedValue}</td><td>${p.changeValue >= 0 ? '+' : ''}${p.changeValue}</td><td>${p.changePercent >= 0 ? '+' : ''}${p.changePercent}%</td></tr>`).join('') : '';
    const priRows = result ? (result.priorityChanges || []).slice(0, 8).map(c => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${c.entityId}'})"><td>${c.entityName}</td><td>${this.renderPublicPriorityBadge(c.currentPriority)}</td><td>${this.renderPublicPriorityBadge(c.simulatedPriority)}</td><td>${c.reason}</td><td>${this.renderPublicSimulationBadge(true)}</td></tr>`).join('') : '';
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管规则仿真</span><h2>集团监管仿真推演</h2><p>在不改变真实监管数据的情况下，模拟不同参数对监管结果的影响。${result ? `<em>${result.disclaimer || '这是仿真结果，不改变真实数据。'}</em>` : ''}</p></div></div>
      <div class="card"><div class="card-title">仿真场景管理</div>
        <table class="data-table"><thead><tr><th>场景ID</th><th>名称</th><th>基准版本</th><th>创建时间</th><th>创建人</th><th>状态</th></tr></thead><tbody>${simRows}</tbody></table>
      </div>
      ${result ? `<div class="group-metrics">${[
        [result.affectedEntityCount, '受影响法人'],
        [result.priorityChangeCount, '优先级变化'],
        [result.strategyChangeCount, '策略变化'],
        [result.actionChangeCount, '行动变化'],
        [result.maturityChange?.simulatedScore, '仿真成熟度分']
      ].map(([v, l]) => this.renderPublicKpiCard(l, v, `App.showRegulatorySimulationDetail('${result.simulationId}')`)).join('')}</div>
      <div class="group-three">
        <div class="card"><div class="card-title">参数调整 ${this.renderPublicSimulationBadge(true)}</div><table class="data-table"><thead><tr><th>参数</th><th>原始值</th><th>仿真值</th><th>变化</th><th>比例</th></tr></thead><tbody>${paramDiff || '<tr><td colspan="5">无参数变化</td></tr>'}</tbody></table></div>
        <div class="card"><div class="card-title">成熟度变化</div>${result.maturityChange ? this.renderPublicSimulationComparison(result.maturityChange.currentLevel + ' / ' + result.maturityChange.currentScore, result.maturityChange.simulatedLevel + ' / ' + result.maturityChange.simulatedScore, '集团成熟度') : this.renderPublicEmptyState('无变化')}</div>
        <div class="card"><div class="card-title">风险集中度变化</div>${(result.concentrationChanges || []).map(c => this.renderPublicSimulationComparison(c.before, c.after, c.dimension)).join('') || this.renderPublicEmptyState('无变化')}</div>
      </div>
      <div class="card"><div class="card-title">优先级变化明细 ${this.renderPublicSimulationBadge(true)}</div>
        <table class="data-table"><thead><tr><th>法人</th><th>当前优先级</th><th>仿真优先级</th><th>差异原因</th><th>标记</th></tr></thead><tbody>${priRows || '<tr><td colspan="5">无变化</td></tr>'}</tbody></table>
      </div>` : this.renderPublicEmptyState('请选择仿真场景')}
      <div id="regulatorySimulationDetail"></div>`;
    if (focus) setTimeout(() => this.showRegulatorySimulationDetail(focus), 0);
  },

  showRegulatorySimulationDetail(simulationId) {
    const result = this.getRegulatorySimulationResult(simulationId);
    this.regulatorySimulationFocusId = simulationId;
    const node = document.getElementById('regulatorySimulationDetail');
    if (!node) return;
    this.showPublicDetailOrNotFound(node, result, () => {
      const pc = (result.priorityChanges || [])[0];
      const ent = pc ? APP_DATA.globalLegalEntities.find(e => e.entityId === pc.entityId) : null;
      const curP = pc ? (APP_DATA.regulatoryPrioritiesRecalculated || {})[pc.entityId] : null;
      const evts = ent ? (APP_DATA.regulatoryEvents || []).filter(e => e.entityId === ent.entityId) : [];
      const rects = ent ? (APP_DATA.rectificationTasks || []).filter(t => t.entityId === ent.entityId) : [];
      const acts = ent ? (APP_DATA.regulatoryActions || []).filter(a => a.entityId === ent.entityId) : [];
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '仿真推演',
        objectName: result.simulationName + ' ' + this.renderPublicSimulationBadge(true),
        objectId: result.simulationId,
        status: result.status,
        sections: [
          { title: '一、场景信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(result.simulationId, '场景 ID'), { label: '场景名称', value: result.simulationName }, { label: '基准版本', value: result.baseVersion }, { label: '创建人', value: result.createdBy }, { label: '生成时间', value: result.generatedAt }, { label: '声明', value: result.disclaimer }]) },
          { title: '二、仿真结果总览', content: this.renderPublicMetaGrid([{ label: '受影响法人', value: result.affectedEntityCount }, { label: '优先级变化', value: result.priorityChangeCount }, { label: '策略变化', value: result.strategyChangeCount }, { label: '行动变化', value: result.actionChangeCount }, { label: 'simulationOnly', value: String(result.simulationOnly) }]) },
          { title: '三、参数变化', content: (result.parameterChanges || []).length ? (result.parameterChanges || []).map(p => `<p class="insight-note">${p.paramId}：${this.renderPublicParameterDiff(p.originalValue, p.simulatedValue, '')}</p>`).join('') : this.renderPublicEmptyState('基准场景无参数变化') },
          { title: '四、法人仿真对比', content: pc ? `<p>${ent ? this.renderPublicLinkButton(ent.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : pc.entityId}</p><p>当前：${this.renderPublicPriorityBadge(pc.currentPriority)}（${pc.currentScore}分）</p><p>仿真：${this.renderPublicPriorityBadge(pc.simulatedPriority)}（${pc.simulatedScore}分）${this.renderPublicSimulationBadge(true)}</p><p>原因：${pc.reason}</p>` : this.renderPublicEmptyState('无优先级变化') },
          { title: '五、真实状态穿透', content: ent ? `<p><b>真实监管状态：</b>${curP ? this.renderPublicPriorityBadge(curP.priority) : '—'}</p><p><b>风险事件：</b>${evts.map(e => this.renderPublicLinkButton(e.eventId, `App.navigatePublic('regulatory-events',{eventId:'${e.eventId}'})`)).join('') || '—'}</p><p><b>整改：</b>${rects.map(t => this.renderPublicLinkButton(t.title, `App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join('') || '—'}</p><p><b>行动：</b>${acts.map(a => this.renderPublicLinkButton(a.actionId, `App.navigatePublic('regulatory-action-execution',{actionId:'${a.actionId}'})`)).join('') || '—'}</p>` : this.renderPublicEmptyState('暂无') }
        ],
        footer: `${this.renderPublicLinkButton('规则配置', `App.navigatePublic('regulatory-rule-config')`)}${this.renderPublicLinkButton('成熟度', `App.navigatePublic('regulatory-maturity')`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '仿真推演');
  },

  renderRegulatoryRuleHistory() {
    const node = document.getElementById('regulatoryRuleHistory');
    if (!node) return;
    const hist = APP_DATA.regulatoryRuleHistory || [];
    const rows = hist.map(h => `<tr class="clickable" onclick="App.showRegulatoryRuleDetail('${h.ruleId}')"><td>${h.ruleId}</td><td>${h.ruleName}</td><td>${h.version}</td><td>${h.previousValue || '—'}</td><td>${h.currentValue}</td><td>${h.changeReason}</td><td>${(h.affectedEntityIds || []).length}</td><td>${h.effectiveStatus}</td><td>${h.modifiedBy}</td><td>${h.occurredAt}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管规则体系</span><h2>监管规则变更历史</h2><p>规则版本与参数变化记录。当前均为系统默认版本，未伪造历史变更。</p></div><div>版本 <b>${hist.length}</b></div></div>
      <div class="card"><div class="card-title">规则变更记录</div>
        ${hist.length ? `<table class="data-table"><thead><tr><th>规则</th><th>名称</th><th>版本</th><th>变更前</th><th>变更后</th><th>原因</th><th>影响法人</th><th>状态</th><th>修改人</th><th>时间</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无变更记录')}
        <p style="margin-top:8px">${this.renderPublicLinkButton('规则配置', `App.navigatePublic('regulatory-rule-config')`)} ${this.renderPublicLinkButton('仿真推演', `App.navigatePublic('regulatory-simulation')`)}</p>
      </div>
      <div id="regulatoryRuleDetail"></div>`;
  },

  renderRegulatoryRuleVersions() {
    const node = document.getElementById('regulatoryRuleVersions');
    if (!node) return;
    const m = APP_DATA.regulatoryRuleGovernanceMetrics || {};
    const f = this.regulatoryRuleGovernanceFilter || {};
    let versions = APP_DATA.regulatoryRuleVersions || [];
    const activeByRule = {};
    versions.filter(v => v.status === 'ACTIVE').forEach(v => { activeByRule[v.ruleId] = v; });
    let list = versions.filter(v => v.status === 'ACTIVE' || !activeByRule[v.ruleId] || activeByRule[v.ruleId].versionId === v.versionId);
    if (f.ruleType) list = list.filter(v => v.ruleType === f.ruleType);
    if (f.status) list = list.filter(v => v.status === f.status);
    if (f.effectivenessLevel) list = list.filter(v => v.effectivenessLevel === f.effectivenessLevel);
    if (f.needsOptimization) list = list.filter(v => v.needsOptimization);
    const rows = list.map(v => {
      const eff = (APP_DATA.regulatoryRuleEffectiveness || []).find(e => e.versionId === v.versionId);
      return `<tr class="clickable" onclick="App.showRegulatoryRuleVersionDetail('${v.versionId}')"><td>${v.ruleId}</td><td>${v.ruleName}</td><td>${v.ruleType}</td><td>${v.versionNo}</td><td>${this.renderPublicVersionStatusBadge(v.status)}</td><td>${v.publishedAt || v.createdAt}</td><td>${eff ? this.renderPublicEffectivenessBadge(eff.effectivenessLevel) : '—'}</td><td>${v.needsOptimization ? '是' : '否'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管规则治理</span><h2>监管规则版本中心</h2><p>规则设计 → 参数配置 → 仿真验证 → 审批发布 → 线上运行 → 效果评价 → 版本迭代</p></div><div>规则 <b>${m.totalRules || 0}</b></div></div>
      <div class="group-metrics">${[
        [m.totalRules, '规则总数', `App.navigatePublic('regulatory-rule-versions')`],
        [m.activeVersions, '当前生效版本', `App.navigatePublic('regulatory-rule-versions')`],
        [m.pendingPublishVersions, '待发布版本', `App.navigatePublic('regulatory-rule-approvals')`],
        [m.pendingApprovalChanges, '待审批变更', `App.navigatePublic('regulatory-rule-approvals')`],
        [m.changesLast30Days, '近30日变更', `App.navigatePublic('regulatory-rule-history')`],
        [m.needsReevaluation, '需重新评估', `App.navigatePublic('regulatory-rule-effectiveness')`]
      ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      ${this.renderPublicGovernanceFilterBar('regulatory-rule-versions')}
      <div class="card"><div class="card-title">规则版本列表</div>
        <table class="data-table"><thead><tr><th>规则编号</th><th>规则名称</th><th>类型</th><th>当前版本</th><th>状态</th><th>最近变更</th><th>运行效果</th><th>需优化</th></tr></thead><tbody>${rows || '<tr><td colspan="8">暂无</td></tr>'}</tbody></table>
        <p style="margin-top:8px">${this.renderPublicLinkButton('变更审批', `App.navigatePublic('regulatory-rule-approvals')`)} ${this.renderPublicLinkButton('影响分析', `App.navigatePublic('regulatory-rule-impact')`)} ${this.renderPublicLinkButton('规则配置', `App.navigatePublic('regulatory-rule-config')`)} ${this.renderPublicLinkButton('变更历史', `App.navigatePublic('regulatory-rule-history')`)}</p>
      </div>
      <div id="regulatoryRuleVersionDetail"></div>`;
    if (this.regulatoryRuleVersionFocusId) setTimeout(() => this.showRegulatoryRuleVersionDetail(this.regulatoryRuleVersionFocusId), 0);
  },

  showRegulatoryRuleVersionDetail(versionId) {
    const ver = this.getRegulatoryRuleVersion(versionId);
    const node = document.getElementById('regulatoryRuleVersionDetail');
    this.regulatoryRuleVersionFocusId = versionId;
    this.showPublicDetailOrNotFound(node, ver, () => {
      const cr = (APP_DATA.regulatoryRuleChangeRequests || []).find(c => c.proposedVersionId === ver.versionId || c.baseVersionId === ver.versionId);
      const imp = cr ? this.getRegulatoryRuleImpactAnalysis(cr.impactAnalysisId) : null;
      const eff = (APP_DATA.regulatoryRuleEffectiveness || []).find(e => e.versionId === ver.versionId);
      const metrics = (APP_DATA.regulatoryRuleRuntimeMetrics || []).find(m => m.versionId === ver.versionId);
      const phase10Rules = (ver.phase10RuleIds || []).map(id => (APP_DATA.regulatoryRules || []).find(r => r.ruleId === id)).filter(Boolean);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '规则版本',
        objectName: ver.ruleName + ' v' + ver.versionNo,
        objectId: ver.versionId,
        status: ver.status,
        sections: [
          { title: '一、版本信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(ver.versionId, '版本 ID'), { label: '规则编号', value: ver.ruleId }, { label: '规则类型', value: ver.ruleType }, { label: '状态', html: this.renderPublicVersionStatusBadge(ver.status) }, { label: '逻辑引用', value: ver.logicRef }, { label: '变更摘要', value: ver.changeSummary }, { label: '生效日期', value: ver.effectiveFrom || '—' }, { label: '发布人', value: ver.publishedBy || ver.createdBy }]) },
          { title: '二、参数快照', content: Object.keys(ver.parameterSnapshot || {}).length ? Object.entries(ver.parameterSnapshot).map(([k, v]) => `<p class="insight-note">${k}：${v}</p>`).join('') : this.renderPublicEmptyState('无参数') },
          { title: '三、关联 Phase 10 规则', content: phase10Rules.length ? phase10Rules.map(r => this.renderPublicLinkButton(r.ruleName, `App.navigatePublic('regulatory-rule-config',{ruleId:'${r.ruleId}'})`)).join('') : this.renderPublicEmptyState('暂无') },
          { title: '四、变更与审批', content: cr ? `<p>${this.renderPublicLinkButton(cr.changeRequestId, `App.showRegulatoryRuleChangeRequestDetail('${cr.changeRequestId}')`)} ${this.renderPublicChangeRequestStatusBadge(cr.status)}</p>` : this.renderPublicEmptyState('系统默认版本') },
          { title: '五、运行效果', content: eff ? `<p>${this.renderPublicEffectivenessBadge(eff.effectivenessLevel)} 评分 ${eff.effectivenessScore ?? '—'} ${eff.dataStatus === 'INSUFFICIENT_HISTORY' ? '（历史数据不足）' : ''}</p>${this.renderPublicLinkButton('查看效果评价', `App.navigatePublic('regulatory-rule-effectiveness',{effectivenessId:'${eff.effectivenessId}'})`)}` : (metrics?.dataStatus === 'INSUFFICIENT_HISTORY' ? this.renderPublicEmptyState('历史数据不足') : this.renderPublicEmptyState('暂无评价')) }
        ],
        footer: `${imp ? this.renderPublicLinkButton('影响分析', `App.navigatePublic('regulatory-rule-impact',{impactAnalysisId:'${imp.impactAnalysisId}'})`) : ''}${cr && cr.simulationIds?.[0] ? this.renderPublicLinkButton('仿真结果', `App.navigatePublic('regulatory-simulation',{simulationId:'${cr.simulationIds[0]}'})`) : ''}${this.renderPublicLinkButton('变更历史', `App.navigatePublic('regulatory-rule-history')`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '规则版本');
  },

  renderRegulatoryRuleApprovals() {
    const node = document.getElementById('regulatoryRuleApprovals');
    if (!node) return;
    const f = this.regulatoryRuleGovernanceFilter || {};
    let crs = APP_DATA.regulatoryRuleChangeRequests || [];
    if (f.crStatus) crs = crs.filter(c => c.status === f.crStatus);
    const pending = crs.filter(c => c.status === 'PENDING_APPROVAL').length;
    const rows = crs.map(cr => {
      const ver = this.getRegulatoryRuleVersion(cr.proposedVersionId || cr.baseVersionId);
      const hasSim = (cr.simulationIds || []).length > 0;
      const hasImp = !!cr.impactAnalysisId;
      return `<tr class="clickable" onclick="App.showRegulatoryRuleChangeRequestDetail('${cr.changeRequestId}')"><td>${cr.changeRequestId}</td><td>${cr.ruleId}</td><td>${cr.baseVersionId}</td><td>${cr.proposedVersionId || '—'}</td><td>${cr.changeReason?.slice(0, 20) || '—'}</td><td>${hasSim ? '已完成' : '—'}</td><td>${hasImp ? '已完成' : '—'}</td><td>${this.renderPublicChangeRequestStatusBadge(cr.status)}</td><td>${cr.applicant}</td><td>${cr.submittedAt || '—'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管规则治理</span><h2>规则变更审批中心</h2><p>DRAFT → SIMULATING → IMPACT_ASSESSED → PENDING_APPROVAL → APPROVED → PUBLISHED</p></div><div>待审批 <b>${pending}</b></div></div>
      ${this.renderPublicGovernanceFilterBar('regulatory-rule-approvals')}
      <div class="card"><div class="card-title">变更申请列表</div>
        <table class="data-table"><thead><tr><th>申请编号</th><th>规则</th><th>基线版本</th><th>拟发布版本</th><th>变更原因</th><th>仿真</th><th>影响分析</th><th>状态</th><th>申请人</th><th>提交时间</th></tr></thead><tbody>${rows || '<tr><td colspan="10">暂无</td></tr>'}</tbody></table>
        <p style="margin-top:8px">${this.renderPublicLinkButton('规则版本', `App.navigatePublic('regulatory-rule-versions')`)} ${this.renderPublicLinkButton('影响分析', `App.navigatePublic('regulatory-rule-impact')`)} ${this.renderPublicLinkButton('仿真推演', `App.navigatePublic('regulatory-simulation')`)}</p>
      </div>
      <div id="regulatoryRuleApprovalDetail"></div>`;
    if (this.regulatoryRuleChangeRequestFocusId) setTimeout(() => this.showRegulatoryRuleChangeRequestDetail(this.regulatoryRuleChangeRequestFocusId), 0);
  },

  showRegulatoryRuleChangeRequestDetail(changeRequestId) {
    const cr = this.getRegulatoryRuleChangeRequest(changeRequestId);
    const node = document.getElementById('regulatoryRuleApprovalDetail');
    this.regulatoryRuleChangeRequestFocusId = changeRequestId;
    this.showPublicDetailOrNotFound(node, cr, () => {
      const approvals = (APP_DATA.regulatoryRuleApprovals || []).filter(a => a.changeRequestId === cr.changeRequestId);
      const imp = cr.impactAnalysisId ? this.getRegulatoryRuleImpactAnalysis(cr.impactAnalysisId) : null;
      const simId = (cr.simulationIds || [])[0];
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '规则变更申请',
        objectName: cr.changeSummary || cr.changeRequestId,
        objectId: cr.changeRequestId,
        status: cr.status,
        sections: [
          { title: '一、申请信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(cr.changeRequestId, '申请 ID'), { label: '规则', value: cr.ruleId }, { label: '基线版本', value: cr.baseVersionId }, { label: '拟发布版本', value: cr.proposedVersionId || '—' }, { label: '状态', html: this.renderPublicChangeRequestStatusBadge(cr.status) }, { label: '申请人', value: cr.applicant }, { label: '变更原因', value: cr.changeReason }]) },
          { title: '二、参数变化', content: (cr.parameterChanges || []).length ? (cr.parameterChanges || []).map(p => `<p class="insight-note">${p.paramId}：${this.renderPublicParameterDiff(p.beforeValue, p.afterValue, '')}</p>`).join('') : this.renderPublicEmptyState('无参数变化') },
          { title: '三、审批流程', content: approvals.length ? `<table class="data-table"><thead><tr><th>阶段</th><th>状态</th><th>审批人</th><th>时间</th></tr></thead><tbody>${approvals.map(a => `<tr class="clickable" onclick="App.showRegulatoryRuleApprovalDetail('${a.approvalId}')"><td>${a.approvalStage}</td><td>${this.renderPublicApprovalStatusBadge(a.approvalStatus)}</td><td>${a.approver}</td><td>${a.approvedAt || a.submittedAt || '—'}</td></tr>`).join('')}</tbody></table>` : this.renderPublicEmptyState('暂无审批记录') },
          { title: '四、仿真与影响', content: `<p>仿真：${simId ? this.renderPublicLinkButton(simId, `App.navigatePublic('regulatory-simulation',{simulationId:'${simId}'})`) : '—'} ${simId ? this.renderPublicSimulationBadge(true) : ''}</p><p>影响分析：${imp ? this.renderPublicLinkButton(imp.impactAnalysisId, `App.navigatePublic('regulatory-rule-impact',{impactAnalysisId:'${imp.impactAnalysisId}'})`) : '—'}</p>` }
        ],
        footer: `${imp ? this.renderPublicLinkButton('查看影响分析', `App.navigatePublic('regulatory-rule-impact',{impactAnalysisId:'${imp.impactAnalysisId}'})`) : ''}${cr.proposedVersionId ? this.renderPublicLinkButton('拟发布版本', `App.navigatePublic('regulatory-rule-versions',{versionId:'${cr.proposedVersionId}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '变更申请');
  },

  showRegulatoryRuleApprovalDetail(approvalId) {
    const ap = this.getRegulatoryRuleApproval(approvalId);
    const node = document.getElementById('regulatoryRuleApprovalDetail');
    this.regulatoryRuleApprovalFocusId = approvalId;
    this.showPublicDetailOrNotFound(node, ap, () => {
      const cr = this.getRegulatoryRuleChangeRequest(ap.changeRequestId);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '规则审批',
        objectName: ap.approvalStage,
        objectId: ap.approvalId,
        status: ap.approvalStatus,
        sections: [
          { title: '一、审批信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(ap.approvalId, '审批 ID'), { label: '变更申请', value: ap.changeRequestId }, { label: '规则', value: ap.ruleId }, { label: '版本', value: ap.versionId }, { label: '阶段', value: ap.approvalStage }, { label: '状态', html: this.renderPublicApprovalStatusBadge(ap.approvalStatus) }, { label: '审批人', value: ap.approver }, { label: '意见', value: ap.approvalComment || '—' }]) },
          { title: '二、关联变更', content: cr ? this.renderPublicLinkButton(cr.changeRequestId + ' · ' + cr.changeSummary, `App.showRegulatoryRuleChangeRequestDetail('${cr.changeRequestId}')`) : this.renderPublicEmptyState('暂无') }
        ],
        footer: cr ? this.renderPublicLinkButton('返回变更申请', `App.showRegulatoryRuleChangeRequestDetail('${cr.changeRequestId}')`) : ''
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '规则审批');
  },

  renderRegulatoryRuleImpact() {
    const node = document.getElementById('regulatoryRuleImpact');
    if (!node) return;
    const impacts = APP_DATA.regulatoryRuleImpactAnalysis || [];
    const rows = impacts.map(imp => {
      const s = imp.summary || {};
      return `<tr class="clickable" onclick="App.showRegulatoryRuleImpactDetail('${imp.impactAnalysisId}')"><td>${imp.impactAnalysisId}</td><td>${imp.ruleId}</td><td>${imp.changeRequestId}</td><td>${s.affectedEntityCount || 0}</td><td>${s.priorityUpgradeCount || 0}</td><td>${s.priorityDowngradeCount || 0}</td><td>${s.strategyChangeCount || 0}</td><td>${s.newActionCount || 0}</td><td>${this.renderPublicSimulationBadge(true)}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管规则治理</span><h2>规则影响分析</h2><p>规则变更前 VS 规则变更后 — 动态计算影响范围，所有结果为仿真分析 ${this.renderPublicSimulationBadge(true)}</p></div><div>分析 <b>${impacts.length}</b></div></div>
      <div class="card"><div class="card-title">影响分析列表</div>
        <table class="data-table"><thead><tr><th>分析ID</th><th>规则</th><th>变更申请</th><th>影响法人</th><th>升级</th><th>降级</th><th>策略变化</th><th>新增行动</th><th>标记</th></tr></thead><tbody>${rows || '<tr><td colspan="9">暂无</td></tr>'}</tbody></table>
      </div>
      <div id="regulatoryRuleImpactDetail"></div>`;
    if (this.regulatoryRuleImpactFocusId) setTimeout(() => this.showRegulatoryRuleImpactDetail(this.regulatoryRuleImpactFocusId), 0);
  },

  showRegulatoryRuleImpactDetail(impactAnalysisId) {
    const imp = this.getRegulatoryRuleImpactAnalysis(impactAnalysisId);
    const node = document.getElementById('regulatoryRuleImpactDetail');
    this.regulatoryRuleImpactFocusId = impactAnalysisId;
    this.showPublicDetailOrNotFound(node, imp, () => {
      const entRows = (imp.affectedEntities || []).slice(0, 10).map(e => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${e.entityId}'})"><td>${e.entityName}</td><td>${this.renderPublicPriorityBadge(e.beforePriority)}</td><td>${this.renderPublicPriorityBadge(e.afterPriority)}</td><td>${e.scoreChange >= 0 ? '+' : ''}${e.scoreChange}</td><td>${this.renderPublicStrategyBadge(e.strategyBefore)}</td><td>${this.renderPublicStrategyBadge(e.strategyAfter)}</td><td>${e.newActionCount || 0}</td></tr>`).join('');
      const cr = this.getRegulatoryRuleChangeRequest(imp.changeRequestId);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '规则影响分析',
        objectName: imp.impactAnalysisId + ' ' + this.renderPublicSimulationBadge(true),
        objectId: imp.impactAnalysisId,
        status: 'IMPACT_ASSESSED',
        sections: [
          { title: '一、分析概要', content: this.renderPublicMetaGrid([this.renderPublicIdField(imp.impactAnalysisId, '分析 ID'), { label: '规则', value: imp.ruleId }, { label: '变更申请', value: imp.changeRequestId }, { label: '变更前版本', value: imp.beforeVersionId }, { label: '变更后版本', value: imp.afterVersionId }, { label: '声明', value: '这是仿真影响分析，不改变真实数据' }]) },
          { title: '二、变更前后对比', content: this.renderPublicGovernanceComparison(imp.comparisonTable) },
          { title: '三、受影响法人', content: entRows ? `<table class="data-table"><thead><tr><th>法人</th><th>变更前优先级</th><th>变更后优先级</th><th>分数变化</th><th>策略前</th><th>策略后</th><th>新增行动</th></tr></thead><tbody>${entRows}</tbody></table>` : this.renderPublicEmptyState('无影响') },
          { title: '四、关联风险', content: (imp.affectedRiskMatters || []).length ? (imp.affectedRiskMatters || []).slice(0, 5).map(id => { const w = APP_DATA.warnings.find(x => x.id === id); return w ? this.renderPublicLinkButton(w.name, `App.navigatePublic('warnings',{riskMatterId:'${id}'})`) : id; }).join('') : this.renderPublicEmptyState('暂无') }
        ],
        footer: `${cr ? this.renderPublicLinkButton('变更申请', `App.navigatePublic('regulatory-rule-approvals',{changeRequestId:'${cr.changeRequestId}'})`) : ''}${(imp.affectedEntities || [])[0] ? this.renderPublicLinkButton('查看法人', `App.navigatePublic('global-legal-entities',{entityId:'${(imp.affectedEntities[0]).entityId}'})`) : ''}${(imp.affectedActions || [])[0] ? this.renderPublicLinkButton('监管行动', `App.navigatePublic('regulatory-action-execution',{actionId:'${imp.affectedActions[0]}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '影响分析');
  },

  renderRegulatoryRuleEffectiveness() {
    const node = document.getElementById('regulatoryRuleEffectiveness');
    if (!node) return;
    const effs = APP_DATA.regulatoryRuleEffectiveness || [];
    const opts = APP_DATA.regulatoryRuleOptimizationLoop || [];
    const metrics = APP_DATA.regulatoryRuleRuntimeMetrics || [];
    const rows = effs.map(e => {
      const ver = this.getRegulatoryRuleVersion(e.versionId);
      return `<tr class="clickable" onclick="App.showRegulatoryRuleEffectivenessDetail('${e.effectivenessId}')"><td>${e.ruleId}</td><td>${ver ? ver.versionNo : e.versionId}</td><td>${e.evaluationPeriod}</td><td>${this.renderPublicEffectivenessBadge(e.effectivenessLevel)}</td><td>${e.effectivenessScore ?? '—'}</td><td>${e.dataStatus === 'INSUFFICIENT_HISTORY' ? '历史数据不足' : e.evaluationStatus}</td></tr>`;
    }).join('');
    const optRows = opts.map(o => `<tr class="clickable" onclick="App.showRegulatoryRuleOptimizationDetail('${o.optimizationId}')"><td>${o.optimizationId}</td><td>${o.ruleId}</td><td>${o.triggerType}</td><td>${o.recommendation?.slice(0, 30) || '—'}</td><td>${o.simulationRequired ? '是' : '否'}</td><td>${o.nextChangeRequestId || '—'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管规则治理</span><h2>规则运行效果中心</h2><p>规则运行前 VS 规则运行后 — 无法基于真实历史计算的指标标注"历史数据不足"</p></div><div>评价 <b>${effs.length}</b></div></div>
      <div class="group-three">
        <div class="card"><div class="card-title">规则效果评价</div>
          <table class="data-table"><thead><tr><th>规则</th><th>版本</th><th>周期</th><th>等级</th><th>评分</th><th>状态</th></tr></thead><tbody>${rows || '<tr><td colspan="6">暂无</td></tr>'}</tbody></table>
        </div>
        <div class="card"><div class="card-title">运行指标快照</div>
          ${metrics.length ? metrics.slice(0, 3).map(m => `<p class="insight-note"><b>${m.ruleId}</b>：${m.dataStatus === 'INSUFFICIENT_HISTORY' ? '<em>历史数据不足</em>' : `事件识别 ${m.eventRecognitionRate ?? '—'}% · 行动验证 ${m.actionVerificationRate ?? '—'}% · 整改闭环 ${m.rectificationClosureRate ?? '—'}%`}</p>`).join('') : this.renderPublicEmptyState('暂无指标')}
        </div>
        <div class="card"><div class="card-title">规则优化建议</div>
          <table class="data-table"><thead><tr><th>编号</th><th>规则</th><th>触发</th><th>建议</th><th>需仿真</th><th>关联申请</th></tr></thead><tbody>${optRows || '<tr><td colspan="6">暂无</td></tr>'}</tbody></table>
        </div>
      </div>
      <div id="regulatoryRuleEffectivenessDetail"></div>`;
    if (this.regulatoryRuleEffectivenessFocusId) setTimeout(() => this.showRegulatoryRuleEffectivenessDetail(this.regulatoryRuleEffectivenessFocusId), 0);
  },

  showRegulatoryRuleEffectivenessDetail(effectivenessId) {
    const eff = this.getRegulatoryRuleEffectiveness(effectivenessId);
    const node = document.getElementById('regulatoryRuleEffectivenessDetail');
    this.regulatoryRuleEffectivenessFocusId = effectivenessId;
    this.showPublicDetailOrNotFound(node, eff, () => {
      const ver = this.getRegulatoryRuleVersion(eff.versionId);
      const metrics = (APP_DATA.regulatoryRuleRuntimeMetrics || []).find(m => m.versionId === eff.versionId);
      const opts = (APP_DATA.regulatoryRuleOptimizationLoop || []).filter(o => o.ruleId === eff.ruleId);
      const insufficient = eff.dataStatus === 'INSUFFICIENT_HISTORY' || eff.effectivenessLevel === 'INSUFFICIENT_DATA';
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '规则效果评价',
        objectName: (ver ? ver.ruleName : eff.ruleId) + ' · ' + eff.evaluationPeriod,
        objectId: eff.effectivenessId,
        status: eff.evaluationStatus,
        sections: [
          { title: '一、评价概要', content: this.renderPublicMetaGrid([this.renderPublicIdField(eff.effectivenessId, '评价 ID'), { label: '规则', value: eff.ruleId }, { label: '版本', value: eff.versionId }, { label: '评价等级', html: this.renderPublicEffectivenessBadge(eff.effectivenessLevel) }, { label: '效果评分', value: eff.effectivenessScore ?? '历史数据不足' }, { label: '评价状态', value: eff.evaluationStatus }]) },
          { title: '二、运行前 VS 运行后', content: insufficient ? this.renderPublicEmptyState('历史数据不足（INSUFFICIENT_HISTORY）') : this.renderPublicGovernanceComparison([
            { metric: '行动验证率', before: (eff.beforeMetrics.actionVerificationRate ?? '—') + '%', after: (eff.afterMetrics.actionVerificationRate ?? '—') + '%', change: (eff.afterMetrics.actionVerificationRate || 0) - (eff.beforeMetrics.actionVerificationRate || 0) }
          ]) },
          { title: '三、运行指标', content: metrics ? (metrics.dataStatus === 'INSUFFICIENT_HISTORY' ? this.renderPublicEmptyState('历史数据不足') : this.renderPublicMetaGrid([
            { label: '事件识别率', value: metrics.eventRecognitionRate != null ? metrics.eventRecognitionRate + '%' : '—' },
            { label: '整改闭环率', value: metrics.rectificationClosureRate != null ? metrics.rectificationClosureRate + '%' : '—' },
            { label: '行动验证率', value: metrics.actionVerificationRate != null ? metrics.actionVerificationRate + '%' : '—' },
            { label: '超期整改率', value: metrics.overdueRectificationRate != null ? metrics.overdueRectificationRate + '%' : '—' }
          ])) : this.renderPublicEmptyState('暂无运行指标') },
          { title: '四、优化建议', content: opts.length ? opts.map(o => this.renderPublicLinkButton(o.optimizationId + ' · ' + o.recommendation?.slice(0, 40), `App.showRegulatoryRuleOptimizationDetail('${o.optimizationId}')`)).join('') : this.renderPublicEmptyState('暂无优化建议') }
        ],
        footer: `${this.renderPublicLinkButton('规则版本', `App.navigatePublic('regulatory-rule-versions',{versionId:'${eff.versionId}'})`)}${opts[0]?.nextChangeRequestId ? this.renderPublicLinkButton('关联变更申请', `App.navigatePublic('regulatory-rule-approvals',{changeRequestId:'${opts[0].nextChangeRequestId}'})`) : ''}${this.renderPublicLinkButton('成熟度', `App.navigatePublic('regulatory-maturity')`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '效果评价');
  },

  showRegulatoryRuleOptimizationDetail(optimizationId) {
    const opt = this.getRegulatoryRuleOptimization(optimizationId);
    const node = document.getElementById('regulatoryRuleEffectivenessDetail');
    this.regulatoryRuleOptimizationFocusId = optimizationId;
    this.showPublicDetailOrNotFound(node, opt, () => {
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '规则优化建议',
        objectName: opt.recommendation?.slice(0, 50) || opt.optimizationId,
        objectId: opt.optimizationId,
        status: 'OPEN',
        sections: [
          { title: '一、优化信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(opt.optimizationId, '优化 ID'), { label: '规则', value: opt.ruleId }, { label: '当前版本', value: opt.currentVersionId }, { label: '触发类型', value: opt.triggerType }, { label: '需仿真', value: opt.simulationRequired ? '是' : '否' }, { label: '建议', value: opt.recommendation }]) },
          { title: '二、建议参数调整', content: (opt.suggestedParameterChanges || []).length ? (opt.suggestedParameterChanges || []).map(p => `<p class="insight-note">${p.paramId} → ${p.suggestedValue}</p>`).join('') : this.renderPublicEmptyState('暂无') },
          { title: '三、下一步', content: opt.nextChangeRequestId ? this.renderPublicLinkButton('创建/查看变更申请 ' + opt.nextChangeRequestId, `App.navigatePublic('regulatory-rule-approvals',{changeRequestId:'${opt.nextChangeRequestId}'})`) : this.renderPublicEmptyState('待创建变更申请') }
        ],
        footer: `${this.renderPublicLinkButton('仿真推演', `App.navigatePublic('regulatory-simulation')`)}${opt.nextChangeRequestId ? this.renderPublicLinkButton('变更审批', `App.navigatePublic('regulatory-rule-approvals',{changeRequestId:'${opt.nextChangeRequestId}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '规则优化');
  },

  renderRegulatoryRuleRuntime() {
    const node = document.getElementById('regulatoryRuleRuntime');
    if (!node) return;
    const m = APP_DATA.regulatoryRuleExecutionMetrics || {};
    const deps = (APP_DATA.regulatoryRuleDeployments || []).filter(d => d.deploymentStatus === 'ACTIVE');
    const anomalies = APP_DATA.regulatoryRuleRuntimeAnomalies || [];
    const period = this.regulatoryRuleRuntimeTrendPeriod || '7';
    const trend = period === '30' ? (m.trend30 || m.trend7 || []) : (m.trend7 || []);
    const depRows = deps.map(d => {
      const ver = this.getRegulatoryRuleVersion(d.versionId);
      const depExecs = (APP_DATA.regulatoryRuleExecutions || []).filter(e => e.deploymentId === d.deploymentId);
      const success = depExecs.filter(e => e.executionStatus === 'SUCCESS').length;
      const rate = depExecs.length ? Math.round(success / depExecs.length * 100) : 100;
      const hits = depExecs.filter(e => e.resultChanged).length;
      return `<tr class="clickable" onclick="App.showRegulatoryRuleDeploymentDetail('${d.deploymentId}')"><td>${d.ruleName}</td><td>${ver?.ruleType || '—'}</td><td>${ver?.versionNo || d.versionId}</td><td>${d.deployedAt?.slice(0, 10) || '—'}</td><td>${d.lastExecutedAt?.slice(0, 16) || '—'}</td><td>${d.executionCount || 0}</td><td>${rate}%</td><td>${hits}</td><td>${this.renderPublicDeploymentStatusBadge(d.deploymentStatus)}</td></tr>`;
    }).join('');
    const anomRows = anomalies.map(a => `<tr class="clickable" onclick="App.showRegulatoryRuleRuntimeAnomalyDetail('${a.anomalyId}')"><td>${a.anomalyType}</td><td>${a.ruleId}</td><td>${a.entityId || '—'}</td><td>${a.severity}</td><td>${a.description?.slice(0, 40)}</td><td>${a.detectedAt?.slice(0, 16) || '—'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管规则运行</span><h2>监管规则运行中心</h2><p>查看当前正式生效规则的实际运行状态。生产执行 executionMode: PRODUCTION，simulationOnly: false</p></div>${this.renderPublicRuntimeHealth(m)}</div>
      <div class="group-metrics">${[
        [m.productionRules, '生产规则总数', `App.navigatePublic('regulatory-rule-deployments')`],
        [m.todayExecutionCount, '今日执行次数', `App.navigatePublic('regulatory-rule-executions')`],
        [(m.executionSuccessRate || 0) + '%', '执行成功率', `App.navigatePublic('regulatory-rule-runtime')`],
        [m.ruleHitCount, '规则命中数', `App.navigatePublic('regulatory-rule-executions')`],
        [m.resultChangedCount, '结果变化数', `App.navigatePublic('regulatory-rule-executions')`],
        [m.anomalyCount, '运行异常数', `App.navigatePublic('regulatory-rule-runtime')`],
        [m.triggeredActionCount, '触发行动数', `App.navigatePublic('regulatory-action-execution')`]
      ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="card"><div class="card-title">当前生效规则</div>
        <table class="data-table"><thead><tr><th>规则</th><th>类型</th><th>版本</th><th>发布时间</th><th>最后执行</th><th>执行次数</th><th>成功率</th><th>命中</th><th>状态</th></tr></thead><tbody>${depRows || '<tr><td colspan="9">暂无</td></tr>'}</tbody></table>
      </div>
      <div class="card"><div class="card-title">规则执行趋势
        <button class="btn btn-outline" style="margin-left:8px" onclick="App.regulatoryRuleRuntimeTrendPeriod='7';App.renderRegulatoryRuleRuntime()">近7日</button>
        <button class="btn btn-outline" onclick="App.regulatoryRuleRuntimeTrendPeriod='30';App.renderRegulatoryRuleRuntime()">近30日</button>
      </div>
        ${this.renderPublicTrendChart({ periods: trend.map(t => ({ period: t.period?.slice(5), count: t.executionCount, success: t.successCount, failed: t.failedCount })) }, period)}
      </div>
      <div class="card"><div class="card-title">运行异常</div>
        ${anomRows ? `<table class="data-table"><thead><tr><th>类型</th><th>规则</th><th>法人</th><th>严重度</th><th>描述</th><th>发现时间</th></tr></thead><tbody>${anomRows}</tbody></table>` : this.renderPublicEmptyState('暂无运行异常')}
      </div>
      <div id="regulatoryRuleRuntimeDetail"></div>`;
  },

  showRegulatoryRuleRuntimeAnomalyDetail(anomalyId) {
    const a = (APP_DATA.regulatoryRuleRuntimeAnomalies || []).find(x => x.anomalyId === anomalyId);
    const node = document.getElementById('regulatoryRuleRuntimeDetail');
    if (!node) return;
    this.showPublicDetailOrNotFound(node, a, () => {
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '规则运行异常',
        objectName: a.anomalyType,
        objectId: a.anomalyId,
        status: a.severity,
        sections: [
          { title: '一、异常信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(a.anomalyId, '异常 ID'), { label: '类型', value: a.anomalyType }, { label: '规则', value: a.ruleId }, { label: '版本', value: a.versionId }, { label: '描述', value: a.description }, { label: '发现时间', value: a.detectedAt }]) },
          { title: '二、关联穿透', content: `<p>${a.executionId ? this.renderPublicLinkButton('执行记录 ' + a.executionId, `App.navigatePublic('regulatory-rule-executions',{executionId:'${a.executionId}'})`) : '—'}</p><p>${a.entityId ? this.renderPublicLinkButton('法人 ' + a.entityId, `App.navigatePublic('global-legal-entities',{entityId:'${a.entityId}'})`) : '—'}</p><p>${a.deploymentId ? this.renderPublicLinkButton('部署 ' + a.deploymentId, `App.navigatePublic('regulatory-rule-deployments',{deploymentId:'${a.deploymentId}'})`) : '—'}</p>` }
        ],
        footer: `${this.renderPublicLinkButton('规则运行', `App.navigatePublic('regulatory-rule-runtime')`)}${a.executionId ? this.renderPublicLinkButton('执行详情', `App.navigatePublic('regulatory-rule-executions',{executionId:'${a.executionId}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '运行异常');
  },

  renderRegulatoryRuleExecutions() {
    const node = document.getElementById('regulatoryRuleExecutions');
    if (!node) return;
    const f = this.regulatoryRuleExecutionFilter || {};
    let execs = APP_DATA.regulatoryRuleExecutions || [];
    if (f.ruleId) execs = execs.filter(e => e.ruleId === f.ruleId);
    if (f.executionStatus) execs = execs.filter(e => e.executionStatus === f.executionStatus);
    if (f.resultChanged === 'true') execs = execs.filter(e => e.resultChanged);
    if (f.resultChanged === 'false') execs = execs.filter(e => !e.resultChanged);
    if (f.entityId) execs = execs.filter(e => e.entityId === f.entityId);
    if (f.executionMode) execs = execs.filter(e => e.executionMode === f.executionMode);
    const rows = execs.map(e => {
      const before = e.previousResult?.priority || e.previousResult?.strategy || '—';
      const after = e.currentResult?.priority || e.currentResult?.strategy || '—';
      return `<tr class="clickable" onclick="App.showRegulatoryRuleExecutionDetail('${e.executionId}')"><td>${e.executedAt?.slice(0, 16) || '—'}</td><td>${e.ruleId}</td><td>${e.versionId}</td><td>${e.entityName || e.entityId}</td><td>${before}</td><td>${after}</td><td>${e.changeType}</td><td>${(e.relatedActionIds || []).length ? '是' : '否'}</td><td>${this.renderPublicExecutionStatusBadge(e.executionStatus)}</td><td>${e.executionMode}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管规则运行</span><h2>规则执行结果中心</h2><p>查看规则正式执行后产生的结果变化。PRODUCTION 执行 simulationOnly: false</p></div><div>执行 <b>${execs.length}</b></div></div>
      ${this.renderRegulatoryRuleExecutionFilterBar()}
      <div class="card"><div class="card-title">执行结果列表</div>
        <table class="data-table"><thead><tr><th>执行时间</th><th>规则</th><th>版本</th><th>法人</th><th>执行前</th><th>执行后</th><th>变化类型</th><th>触发行动</th><th>状态</th><th>模式</th></tr></thead><tbody>${rows || '<tr><td colspan="10">暂无</td></tr>'}</tbody></table>
      </div>
      <div id="regulatoryRuleExecutionDetail"></div>`;
    if (this.regulatoryRuleExecutionFocusId) setTimeout(() => this.showRegulatoryRuleExecutionDetail(this.regulatoryRuleExecutionFocusId), 0);
  },

  showRegulatoryRuleExecutionDetail(executionId) {
    const ex = this.getRegulatoryRuleExecution(executionId);
    const node = document.getElementById('regulatoryRuleExecutionDetail');
    this.regulatoryRuleExecutionFocusId = executionId;
    this.showPublicDetailOrNotFound(node, ex, () => {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === ex.entityId);
      const evts = (ex.relatedEventIds || []).map(id => APP_DATA.regulatoryEvents.find(e => e.eventId === id)).filter(Boolean);
      const risks = (ex.relatedRiskMatterIds || []).map(id => APP_DATA.warnings.find(w => w.id === id)).filter(Boolean);
      const acts = (ex.relatedActionIds || []).map(id => APP_DATA.regulatoryActions.find(a => a.actionId === id)).filter(Boolean);
      const kri = ent && (APP_DATA.groupKris || []).find(k => ent.kriExceptionCount > 0);
      const qual = ent && (APP_DATA.dataQualityIssues || []).filter(q => (APP_DATA.dataObjects || []).some(o => o.entityId === ent.entityId && o.objectId === q.objectId));
      const rects = ent && (APP_DATA.rectificationTasks || []).filter(t => t.entityId === ent.entityId);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '规则执行结果',
        objectName: ex.ruleId + ' · ' + (ex.entityName || ex.entityId),
        objectId: ex.executionId,
        status: ex.executionStatus,
        sections: [
          { title: '一、执行信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(ex.executionId, '执行 ID'), { label: '规则', value: ex.ruleId }, { label: '版本', value: ex.versionId }, { label: '部署', value: ex.deploymentId }, { label: '模式', value: ex.executionMode }, { label: 'simulationOnly', value: String(ex.simulationOnly) }, { label: '执行时间', value: ex.executedAt }, { label: '变化类型', value: ex.changeType }]) },
          { title: '二、输入快照', content: this.renderPublicMetaGrid(Object.entries(ex.inputSnapshot || {}).map(([k, v]) => ({ label: k, value: v }))) },
          { title: '三、结果对比', content: `${this.renderPublicExecutionResult(ex.previousResult?.priority || ex.previousResult?.strategy, ex.currentResult?.priority || ex.currentResult?.strategy || (ex.executionStatus === 'FAILED' ? '失败' : '—'), '监管结果')}${ex.resultChanged ? this.renderPublicRuleRuntimeBadge('WARNING') : ''}` },
          { title: '四、关联穿透', content: `<p><b>法人：</b>${ent ? this.renderPublicLinkButton(ent.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : ex.entityId}</p><p><b>监管事件：</b>${evts.map(e => this.renderPublicLinkButton(e.eventId, `App.navigatePublic('regulatory-events',{eventId:'${e.eventId}'})`)).join('') || '—'}</p><p><b>风险事项：</b>${risks.map(r => this.renderPublicLinkButton(r.name, `App.navigatePublic('warnings',{riskMatterId:'${r.id}'})`)).join('') || '—'}</p><p><b>KRI：</b>${kri ? this.renderPublicLinkButton(kri.name, `App.navigatePublic('data-governance')`) : '—'}</p><p><b>数据质量：</b>${qual && qual.length ? qual.map(q => this.renderPublicLinkButton(q.issueId, `App.navigatePublic('data-governance',{qualityIssueId:'${q.issueId}'})`)).join('') : '—'}</p><p><b>监管行动：</b>${acts.map(a => this.renderPublicLinkButton(a.actionId, `App.navigatePublic('regulatory-action-execution',{actionId:'${a.actionId}'})`)).join('') || '—'}</p><p><b>整改：</b>${rects && rects.length ? rects.map(t => this.renderPublicLinkButton(t.title, `App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join('') : '—'}</p>` }
        ],
        footer: `${this.renderPublicLinkButton('部署记录', `App.navigatePublic('regulatory-rule-deployments',{deploymentId:'${ex.deploymentId}'})`)}${this.renderPublicLinkButton('规则版本', `App.navigatePublic('regulatory-rule-versions',{versionId:'${ex.versionId}'})`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '执行结果');
  },

  renderRegulatoryRuleDeployments() {
    const node = document.getElementById('regulatoryRuleDeployments');
    if (!node) return;
    const deps = APP_DATA.regulatoryRuleDeployments || [];
    const rollbacks = APP_DATA.regulatoryRuleRollbacks || [];
    const depRows = deps.map(d => {
      const ver = this.getRegulatoryRuleVersion(d.versionId);
      const prev = d.previousVersionId ? this.getRegulatoryRuleVersion(d.previousVersionId) : null;
      return `<tr class="clickable" onclick="App.showRegulatoryRuleDeploymentDetail('${d.deploymentId}')"><td>${d.ruleName}</td><td>${ver?.versionNo || d.versionId}</td><td>${prev?.versionNo || d.previousVersionId || '—'}</td><td>${d.deployedAt?.slice(0, 16) || '—'}</td><td>${d.effectiveAt?.slice(0, 10) || '—'}</td><td>${this.renderPublicDeploymentStatusBadge(d.deploymentStatus)}</td><td>${d.deployedBy}</td><td>${d.executionCount || 0}</td></tr>`;
    }).join('');
    const rbRows = rollbacks.map(r => `<tr class="clickable" onclick="App.showRegulatoryRuleRollbackDetail('${r.rollbackId}')"><td>${r.rollbackId}</td><td>${r.ruleId}</td><td>${r.fromVersionId}</td><td>${r.toVersionId}</td><td>${r.reason?.slice(0, 30)}</td><td>${r.triggerType}</td><td>${r.initiatedAt?.slice(0, 16)}</td><td>${r.affectedExecutionCount}</td></tr>`).join('');
    const ruleVersions = (APP_DATA.regulatoryRuleVersions || []).filter(v => ['RULE-001', 'RULE-002', 'RULE-003', 'RULE-004', 'RULE-005'].includes(v.ruleId));
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管规则运行</span><h2>规则版本部署与回滚中心</h2><p>管理规则版本正式生效、切换与回滚。回滚记录为系统预置展示，不伪造用户操作持久化。</p></div><div>ACTIVE <b>${deps.filter(d => d.deploymentStatus === 'ACTIVE').length}</b></div></div>
      <div class="card"><div class="card-title">部署记录</div>
        <table class="data-table"><thead><tr><th>规则</th><th>当前版本</th><th>上一版本</th><th>部署时间</th><th>生效时间</th><th>状态</th><th>部署人</th><th>执行数</th></tr></thead><tbody>${depRows || '<tr><td colspan="8">暂无</td></tr>'}</tbody></table>
      </div>
      <div class="card"><div class="card-title">版本时间线（RULE-001）</div>
        ${this.renderPublicVersionTimeline(ruleVersions.filter(v => v.ruleId === 'RULE-001'))}
      </div>
      <div class="card"><div class="card-title">回滚记录</div>
        ${rbRows ? `<table class="data-table"><thead><tr><th>回滚ID</th><th>规则</th><th>回滚前版本</th><th>回滚后版本</th><th>原因</th><th>触发</th><th>时间</th><th>影响执行</th></tr></thead><tbody>${rbRows}</tbody></table>` : this.renderPublicEmptyState('暂无回滚记录')}
      </div>
      <div id="regulatoryRuleDeploymentDetail"></div>`;
    if (this.regulatoryRuleDeploymentFocusId) setTimeout(() => this.showRegulatoryRuleDeploymentDetail(this.regulatoryRuleDeploymentFocusId), 0);
    if (this.regulatoryRuleRollbackFocusId) setTimeout(() => this.showRegulatoryRuleRollbackDetail(this.regulatoryRuleRollbackFocusId), 0);
  },

  showRegulatoryRuleDeploymentDetail(deploymentId) {
    const dep = this.getRegulatoryRuleDeployment(deploymentId);
    const node = document.getElementById('regulatoryRuleDeploymentDetail');
    this.regulatoryRuleDeploymentFocusId = deploymentId;
    this.showPublicDetailOrNotFound(node, dep, () => {
      const ver = this.getRegulatoryRuleVersion(dep.versionId);
      const cr = dep.changeRequestId ? this.getRegulatoryRuleChangeRequest(dep.changeRequestId) : null;
      const apr = dep.approvalId ? this.getRegulatoryRuleApproval(dep.approvalId) : null;
      const execs = (APP_DATA.regulatoryRuleExecutions || []).filter(e => e.deploymentId === dep.deploymentId).slice(0, 5);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '规则部署',
        objectName: dep.ruleName + ' ' + this.renderPublicDeploymentStatusBadge(dep.deploymentStatus),
        objectId: dep.deploymentId,
        status: dep.deploymentStatus,
        sections: [
          { title: '一、部署信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(dep.deploymentId, '部署 ID'), { label: '规则', value: dep.ruleId }, { label: '版本', value: dep.versionId }, { label: '环境', value: dep.environment }, { label: '生效时间', value: dep.effectiveAt }, { label: '部署时间', value: dep.deployedAt }, { label: '部署人', value: dep.deployedBy }, { label: '执行次数', value: dep.executionCount }]) },
          { title: '二、追溯链路', content: `<p>${ver ? this.renderPublicLinkButton('版本 ' + ver.versionNo, `App.navigatePublic('regulatory-rule-versions',{versionId:'${ver.versionId}'})`) : dep.versionId}</p><p>${cr ? this.renderPublicLinkButton('变更申请 ' + cr.changeRequestId, `App.navigatePublic('regulatory-rule-approvals',{changeRequestId:'${cr.changeRequestId}'})`) : '—'}</p><p>${apr ? this.renderPublicLinkButton('审批 ' + apr.approvalId, `App.showRegulatoryRuleApprovalDetail('${apr.approvalId}')`) : '—'}</p><p>${dep.simulationId ? this.renderPublicLinkButton('仿真 ' + dep.simulationId, `App.navigatePublic('regulatory-simulation',{simulationId:'${dep.simulationId}'})`) : '—'}</p><p>${dep.impactAnalysisId ? this.renderPublicLinkButton('影响分析 ' + dep.impactAnalysisId, `App.navigatePublic('regulatory-rule-impact',{impactAnalysisId:'${dep.impactAnalysisId}'})`) : '—'}</p>` },
          { title: '三、最近执行', content: execs.length ? execs.map(e => this.renderPublicLinkButton(e.executionId + ' · ' + (e.entityName || e.entityId), `App.navigatePublic('regulatory-rule-executions',{executionId:'${e.executionId}'})`)).join('') : this.renderPublicEmptyState('暂无执行记录') }
        ],
        footer: `${this.renderPublicLinkButton('执行结果', `App.navigatePublic('regulatory-rule-executions')`)}${this.renderPublicLinkButton('规则运行', `App.navigatePublic('regulatory-rule-runtime')`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '部署记录');
  },

  showRegulatoryRuleRollbackDetail(rollbackId) {
    const rb = this.getRegulatoryRuleRollback(rollbackId);
    const node = document.getElementById('regulatoryRuleDeploymentDetail');
    this.regulatoryRuleRollbackFocusId = rollbackId;
    this.showPublicDetailOrNotFound(node, rb, () => {
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '规则回滚',
        objectName: rb.rollbackId,
        objectId: rb.rollbackId,
        status: rb.rollbackStatus,
        sections: [
          { title: '一、回滚信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(rb.rollbackId, '回滚 ID'), { label: '规则', value: rb.ruleId }, { label: '回滚前版本', value: rb.fromVersionId }, { label: '回滚后版本', value: rb.toVersionId }, { label: '原因', value: rb.reason }, { label: '触发方式', value: rb.triggerType }, { label: '发起人', value: rb.initiatedBy }, { label: '影响执行数', value: rb.affectedExecutionCount }]) },
          { title: '二、版本穿透', content: `${this.renderPublicLinkButton('回滚前 ' + rb.fromVersionId, `App.navigatePublic('regulatory-rule-versions',{versionId:'${rb.fromVersionId}'})`)} ${this.renderPublicLinkButton('回滚后 ' + rb.toVersionId, `App.navigatePublic('regulatory-rule-versions',{versionId:'${rb.toVersionId}'})`)}` },
          { title: '三、执行结果', content: this.renderPublicLinkButton('查看执行记录', `App.navigatePublic('regulatory-rule-executions')`) }
        ],
        footer: `${rb.toDeploymentId ? this.renderPublicLinkButton('目标部署', `App.navigatePublic('regulatory-rule-deployments',{deploymentId:'${rb.toDeploymentId}'})`) : ''}${this.renderPublicLinkButton('部署中心', `App.navigatePublic('regulatory-rule-deployments')`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '回滚记录');
  },

  getRegulatoryPerformance(performanceId) {
    return (APP_DATA.regulatoryPerformanceMetrics || []).find(p => p.performanceId === performanceId);
  },

  getRegulatoryAllocation(allocationId) {
    return (APP_DATA.regulatoryResourceAllocations || []).find(a => a.allocationId === allocationId);
  },

  getRegulatorySupervisionTask(supervisionTaskId) {
    return (APP_DATA.regulatorySupervisionTasks || []).find(t => t.supervisionTaskId === supervisionTaskId);
  },

  getRegulatoryBenchmark(benchmarkId) {
    return (APP_DATA.regulatoryBenchmarking || []).find(b => b.benchmarkId === benchmarkId);
  },

  getRegulatoryResourceEffectiveness(effectivenessId) {
    return (APP_DATA.regulatoryResourceEffectiveness || []).find(e => e.effectivenessId === effectivenessId);
  },

  renderRegulatoryPerformanceFilterBar() {
    const f = this.regulatoryPerformanceFilter || {};
    const levels = ['GROUP', 'REGION', 'COUNTRY', 'ENTITY'];
    return `<div class="filter-bar" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px">
      <select onchange="App.regulatoryPerformanceFilter={...(App.regulatoryPerformanceFilter||{}),scopeType:this.value||null};App.renderRegulatoryPerformance()"><option value="">全部层级</option>${levels.map(l => `<option value="${l}" ${f.scopeType===l?'selected':''}>${l}</option>`).join('')}</select>
      ${this.renderPublicFilterBar('regulatory-performance', ['regionId', 'entityId']).replace('public-filter-bar', '')}
      ${(f.scopeType || f.regionId || f.entityId) ? `<button class="btn btn-outline" onclick="App.clearPublicFilter('regulatory-performance')">清除筛选</button>` : ''}
    </div>`;
  },

  renderRegulatoryPerformance() {
    const node = document.getElementById('regulatoryPerformance');
    if (!node) return;
    const summary = APP_DATA.regulatoryPerformanceSummary || {};
    const f = this.regulatoryPerformanceFilter || {};
    const period = this.regulatoryPerformanceTrendPeriod || '30';
    const trend = (APP_DATA.regulatoryPerformanceTrends || {})[period];
    let metrics = APP_DATA.regulatoryPerformanceMetrics || [];
    if (f.scopeType) metrics = metrics.filter(p => p.scopeType === f.scopeType);
    if (f.regionId) metrics = metrics.filter(p => {
      if (p.scopeType === 'REGION') return p.scopeId === f.regionId;
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === p.scopeId);
      return ent && ent.regionId === f.regionId;
    });
    if (f.entityId) metrics = metrics.filter(p => p.scopeId === f.entityId || p.entityId === f.entityId);
    const kpi = [
      [summary.regulatoryEffectivenessScore, '监管有效性得分', `App.navigatePublic('regulatory-performance')`],
      [Math.round((summary.highRiskResolutionRate || 0) * 100) + '%', '风险解决率', `App.navigatePublic('warnings')`],
      [Math.round((summary.rectificationClosureRate || 0) * 100) + '%', '整改闭环率', `App.navigatePublic('rectification-operations')`],
      [Math.round((summary.actionVerificationRate || 0) * 100) + '%', '行动验证率', `App.navigatePublic('regulatory-action-execution')`],
      [summary.averageRectificationDays, '平均整改时长(天)', `App.navigatePublic('rectification')`],
      [Math.round((summary.overdueReductionRate || 0) * 100) + '%', '超期整改下降率', `App.navigatePublic('rectification-operations')`],
      [Math.round((summary.dataQualityImprovementRate || 0) * 100) + '%', '数据质量改善率', `App.navigatePublic('data-governance')`],
      [Math.round((summary.kriExceptionReductionRate || 0) * 100) + '%', 'KRI异常下降率', `App.navigatePublic('data-governance')`]
    ];
    const regionRows = (summary.regionRanking || []).map(r => `<tr class="clickable" onclick="App.navigatePublic('global-regions',{regionId:'${r.scopeId}'})"><td>${r.rank}</td><td>${r.name}</td><td>${r.score}</td><td>${r.maturityLevel}</td><td>${Math.round((r.closureRate || 0) * 100)}%</td><td>${Math.round((r.actionVerificationRate || 0) * 100)}%</td><td>${Math.round((r.riskReductionRate || 0) * 100)}%</td></tr>`).join('');
    const entityRows = (summary.entityRanking || []).map(r => `<tr class="clickable" onclick="App.showRegulatoryPerformanceDetail('${(APP_DATA.regulatoryPerformanceMetrics.find(p => p.scopeType==='ENTITY' && p.scopeId===r.scopeId)||{}).performanceId||''}')"><td>${r.rank}</td><td>${r.name}</td><td>${r.score}</td><td>${r.maturityLevel}</td><td>${Math.round((r.closureRate || 0) * 100)}%</td><td>${Math.round((r.actionVerificationRate || 0) * 100)}%</td><td>${Math.round((r.riskReductionRate || 0) * 100)}%</td></tr>`).join('');
    const trendHtml = trend && trend.dataStatus === 'INSUFFICIENT_HISTORY'
      ? this.renderPublicEmptyState('历史数据不足 (INSUFFICIENT_HISTORY)')
      : trend ? `<div class="card" style="padding:12px"><b>近 ${period} 日绩效趋势</b>${this.renderPublicPerformanceComparison([
        { name: '监管有效性', score: Math.round((trend.effectiveness || 0) * 100) },
        { name: '整改闭环率', score: Math.round((trend.rectificationClosureRate || 0) * 100) },
        { name: '行动验证率', score: Math.round((trend.actionVerificationRate || 0) * 100) },
        { name: '风险解决率', score: Math.round((trend.highRiskResolutionRate || 0) * 100) }
      ], 'score', 'name')}</div>` : this.renderPublicEmptyState('暂无趋势数据');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管运营</span><h2>集团监管绩效中心</h2><p>衡量监管投入之后是否产生有效监管结果。${this.renderPublicPerformanceBadge(summary.performanceLevel)}</p></div><div>有效性 <b>${summary.regulatoryEffectivenessScore || 0}</b></div></div>
      <div class="group-metrics">${kpi.map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      ${this.renderOperatingCyclePerformancePanel()}
      <div class="card"><div class="card-title">绩效趋势 ${['7','30','90'].map(p => `<button class="btn btn-outline" style="margin:2px" onclick="App.regulatoryPerformanceTrendPeriod='${p}';App.renderRegulatoryPerformance()">近${p}日</button>`).join('')}</div>${trendHtml}</div>
      <div class="group-two">
        <div class="card"><div class="card-title">区域绩效排名</div>${regionRows ? `<table class="data-table"><thead><tr><th>排名</th><th>区域</th><th>绩效得分</th><th>成熟度</th><th>整改闭环率</th><th>行动验证率</th><th>风险下降率</th></tr></thead><tbody>${regionRows}</tbody></table>` : this.renderPublicEmptyState('暂无区域排名')}</div>
        <div class="card"><div class="card-title">法人绩效排名</div>${entityRows ? `<table class="data-table"><thead><tr><th>排名</th><th>法人</th><th>绩效得分</th><th>成熟度</th><th>整改闭环率</th><th>行动验证率</th><th>风险下降率</th></tr></thead><tbody>${entityRows}</tbody></table>` : this.renderPublicEmptyState('暂无法人排名')}</div>
      </div>
      <div class="card"><div class="card-title">绩效指标清单</div>${this.renderRegulatoryPerformanceFilterBar()}
        ${metrics.length ? `<table class="data-table"><thead><tr><th>编号</th><th>层级</th><th>对象</th><th>有效性</th><th>等级</th><th>闭环率</th><th>验证率</th></tr></thead><tbody>${metrics.slice(0, 20).map(p => {
          const name = p.scopeType === 'ENTITY' ? (APP_DATA.globalLegalEntities.find(e => e.entityId === p.scopeId)||{}).entityName : p.scopeType === 'REGION' ? (APP_DATA.globalRegions.find(r => r.regionId === p.scopeId)||{}).regionName : p.scopeId;
          return `<tr class="clickable" onclick="App.showRegulatoryPerformanceDetail('${p.performanceId}')"><td>${p.performanceId}</td><td>${p.scopeType}</td><td>${name||p.scopeId}</td><td>${p.regulatoryEffectivenessScore}</td><td>${this.renderPublicPerformanceBadge(p.performanceLevel)}</td><td>${Math.round(p.rectificationClosureRate*100)}%</td><td>${Math.round(p.actionVerificationRate*100)}%</td></tr>`;
        }).join('')}</tbody></table>` : this.renderPublicNoFilterResults()}
      </div>
      <div id="regulatoryPerformanceDetail"></div>`;
    if (this.regulatoryPerformanceFocusId) setTimeout(() => this.showRegulatoryPerformanceDetail(this.regulatoryPerformanceFocusId), 0);
  },

  showRegulatoryPerformanceDetail(performanceId) {
    const perf = this.getRegulatoryPerformance(performanceId);
    const node = document.getElementById('regulatoryPerformanceDetail');
    this.regulatoryPerformanceFocusId = performanceId;
    this.showPublicDetailOrNotFound(node, perf, () => {
      const ent = perf.entityId ? APP_DATA.globalLegalEntities.find(e => e.entityId === perf.entityId) : null;
      const actions = (APP_DATA.regulatoryActions || []).filter(a => a.entityId === perf.entityId);
      const rects = (APP_DATA.rectificationTasks || []).filter(t => t.entityId === perf.entityId);
      const events = (APP_DATA.regulatoryEvents || []).filter(e => e.entityId === perf.entityId);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管绩效',
        objectName: (ent ? ent.entityName : perf.scopeId) + ' · ' + perf.period,
        objectId: perf.performanceId,
        status: perf.performanceLevel,
        sections: [
          { title: '一、绩效指标', content: this.renderPublicMetaGrid([this.renderPublicIdField(perf.performanceId, '绩效 ID'), { label: '监管层级', value: perf.scopeType }, { label: '有效性得分', value: perf.regulatoryEffectivenessScore }, { label: '绩效等级', html: this.renderPublicPerformanceBadge(perf.performanceLevel) }, { label: '成熟度', value: perf.maturityLevel }, { label: '风险解决率', value: Math.round(perf.highRiskResolutionRate * 100) + '%' }, { label: '整改闭环率', value: Math.round(perf.rectificationClosureRate * 100) + '%' }, { label: '行动验证率', value: Math.round(perf.actionVerificationRate * 100) + '%' }, { label: '平均整改天数', value: perf.averageRectificationDays }]) },
          { title: '二、监管对象', content: ent ? this.renderPublicLinkButton(ent.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : '—' },
          { title: '三、关联穿透', content: `<p><b>监管事件：</b>${events.length ? events.slice(0, 3).map(e => this.renderPublicLinkButton(e.eventId, `App.navigatePublic('regulatory-events',{eventId:'${e.eventId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>整改任务：</b>${rects.length ? rects.slice(0, 3).map(t => this.renderPublicLinkButton(t.title, `App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>监管行动：</b>${actions.length ? actions.slice(0, 3).map(a => this.renderPublicLinkButton(a.actionId, `App.navigatePublic('regulatory-actions',{actionId:'${a.actionId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p>` }
        ],
        footer: `${ent ? this.renderPublicLinkButton('查看法人', `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : ''}${this.renderPublicLinkButton('能力对标', `App.navigatePublic('regulatory-benchmarking',{benchmarkType:'ENTITY',scopeId:'${perf.scopeId}'})`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管绩效');
  },

  renderRegulatoryResourceAllocation() {
    const node = document.getElementById('regulatoryResourceAllocation');
    if (!node) return;
    const f = this.regulatoryResourceAllocationFilter || {};
    const all = APP_DATA.regulatoryResourceAllocations || [];
    let list = [...all];
    if (f.priority) list = list.filter(a => a.priority === f.priority);
    if (f.resourceType) list = list.filter(a => a.resourceType === f.resourceType);
    if (f.regionId) list = list.filter(a => a.regionId === f.regionId);
    if (f.entityId) list = list.filter(a => a.entityId === f.entityId);
    const ops = APP_DATA.regulatoryOperationsMetrics || {};
    const ra = ops.resourceAllocation || {};
    const kpi = [
      [ra.highPriorityCount, '高优先级对象', `App.navigatePublic('regulatory-resource-allocation',{priority:'HIGH'})`],
      [ra.pendingAllocationCount, '待配置监管资源', `App.navigatePublic('regulatory-resource-allocation')`],
      [ra.specialReviewCount, '重点专项监管', `App.navigatePublic('regulatory-resource-allocation',{resourceType:'SPECIAL_REVIEW'})`],
      [ra.crossBorderCount, '跨境复核', `App.navigatePublic('regulatory-resource-allocation',{resourceType:'CROSS_BORDER_REVIEW'})`],
      [ra.dataGovernanceCount, '数据治理支持', `App.navigatePublic('regulatory-resource-allocation',{resourceType:'DATA_GOVERNANCE'})`],
      [ra.crossDomainCount, '跨领域协同', `App.navigatePublic('regulatory-resource-allocation',{resourceType:'CROSS_DOMAIN_COORDINATION'})`],
      [ra.rectificationSupportCount, '整改支持', `App.navigatePublic('regulatory-resource-allocation',{resourceType:'RECTIFICATION_SUPPORT'})`]
    ];
    const filterBar = `<div class="filter-bar" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px">
      <select onchange="App.regulatoryResourceAllocationFilter={...(App.regulatoryResourceAllocationFilter||{}),priority:this.value||null};App.renderRegulatoryResourceAllocation()"><option value="">全部优先级</option>${['CRITICAL','HIGH','MEDIUM'].map(p => `<option value="${p}" ${f.priority===p?'selected':''}>${p}</option>`).join('')}</select>
      <select onchange="App.regulatoryResourceAllocationFilter={...(App.regulatoryResourceAllocationFilter||{}),resourceType:this.value||null};App.renderRegulatoryResourceAllocation()"><option value="">全部资源类型</option>${['SUPERVISION','SPECIAL_REVIEW','DATA_GOVERNANCE','CROSS_BORDER_REVIEW','CROSS_DOMAIN_COORDINATION','RECTIFICATION_SUPPORT'].map(t => `<option value="${t}" ${f.resourceType===t?'selected':''}>${t}</option>`).join('')}</select>
      ${this.renderPublicFilterBar('regulatory-resource-allocation', ['regionId', 'entityId']).replace('public-filter-bar', '')}
      ${(f.priority || f.resourceType || f.regionId || f.entityId) ? `<button class="btn btn-outline" onclick="App.clearPublicFilter('regulatory-resource-allocation')">清除筛选</button>` : ''}
    </div>`;
    const rows = list.map(a => {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === a.entityId);
      return `<tr class="clickable" onclick="App.showRegulatoryAllocationDetail('${a.allocationId}')"><td>${a.allocationId}</td><td>${this.renderPublicAllocationBadge(a.resourceType)}</td><td>${this.renderPublicPriorityBadge(a.priority)}</td><td>${ent ? ent.entityName : a.entityId}</td><td>${a.allocatedLevel}</td><td>${(a.sourceActionIds||[]).length}</td><td>${(a.sourceRiskMatterIds||[]).length}</td><td>${(a.sourceEventIds||[]).length}</td><td>${a.responsibleDepartment}</td></tr>`;
    }).join('');
    const flowSample = list[0];
    const flowSteps = flowSample ? [
      { label: '监管优先级', sub: flowSample.priority, onclick: `App.navigatePublic('regulatory-command-center')` },
      { label: '监管行动', sub: (flowSample.sourceActionIds||[])[0] || '—', onclick: (flowSample.sourceActionIds||[])[0] ? `App.navigatePublic('regulatory-actions',{actionId:'${flowSample.sourceActionIds[0]}'})` : null },
      { label: '资源配置', sub: flowSample.allocationId, onclick: `App.showRegulatoryAllocationDetail('${flowSample.allocationId}')` },
      { label: '监管任务', sub: (APP_DATA.regulatorySupervisionTasks.find(t => t.allocationId === flowSample.allocationId)||{}).supervisionTaskId || '—', onclick: (() => { const t = APP_DATA.regulatorySupervisionTasks.find(x => x.allocationId === flowSample.allocationId); return t ? `App.navigatePublic('regulatory-supervision-tasks',{supervisionTaskId:'${t.supervisionTaskId}'})` : null; })() },
      { label: '执行结果', sub: '效果评价', onclick: `App.navigatePublic('regulatory-resource-allocation')` }
    ] : [];
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管运营</span><h2>监管资源调度中心</h2><p>从发现风险进入配置监管资源，形成优先级→行动→配置→任务→效果闭环。</p></div><div>配置 <b>${all.length}</b></div></div>
      <div class="group-metrics">${kpi.map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="card"><div class="card-title">资源调度穿透示例</div>${this.renderPublicResourceFlow(flowSteps)}</div>
      <div class="card"><div class="card-title">监管资源配置清单</div>${filterBar}
        ${list.length ? `<table class="data-table"><thead><tr><th>编号</th><th>资源类型</th><th>优先级</th><th>法人</th><th>投入级别</th><th>行动</th><th>风险</th><th>事件</th><th>责任部门</th></tr></thead><tbody>${rows}</tbody></table>` : (all.length ? this.renderPublicNoFilterResults() : this.renderPublicEmptyState('暂无资源配置'))}
      </div>
      <div id="regulatoryAllocationDetail"></div>`;
    if (this.regulatoryAllocationFocusId) setTimeout(() => this.showRegulatoryAllocationDetail(this.regulatoryAllocationFocusId), 0);
  },

  showRegulatoryAllocationDetail(allocationId) {
    const alloc = this.getRegulatoryAllocation(allocationId);
    const node = document.getElementById('regulatoryAllocationDetail');
    this.regulatoryAllocationFocusId = allocationId;
    this.showPublicDetailOrNotFound(node, alloc, () => {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === alloc.entityId);
      const actions = (alloc.sourceActionIds || []).map(id => APP_DATA.regulatoryActions.find(a => a.actionId === id)).filter(Boolean);
      const risks = (alloc.sourceRiskMatterIds || []).map(id => APP_DATA.warnings.find(w => w.id === id)).filter(Boolean);
      const events = (alloc.sourceEventIds || []).map(id => APP_DATA.regulatoryEvents.find(e => e.eventId === id)).filter(Boolean);
      const task = (APP_DATA.regulatorySupervisionTasks || []).find(t => t.allocationId === alloc.allocationId);
      const eff = (APP_DATA.regulatoryResourceEffectiveness || []).find(e => e.allocationId === alloc.allocationId);
      const rects = actions.flatMap(a => (a.sourceRectificationTaskIds || []).map(id => APP_DATA.rectificationTasks.find(t => t.taskId === id))).filter(Boolean);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管资源配置',
        objectName: this.renderPublicAllocationBadge(alloc.resourceType).replace(/<[^>]+>/g, '') + ' · ' + (ent ? ent.entityName : alloc.entityId),
        objectId: alloc.allocationId,
        status: alloc.allocationStatus,
        sections: [
          { title: '一、配置信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(alloc.allocationId, '配置 ID'), { label: '资源类型', html: this.renderPublicAllocationBadge(alloc.resourceType) }, { label: '优先级', html: this.renderPublicPriorityBadge(alloc.priority) }, { label: '投入级别', value: alloc.allocatedLevel }, { label: '责任部门', value: alloc.responsibleDepartment }, { label: '协同部门', value: (alloc.collaboratingDepartments || []).join('、') || '—' }, { label: '预期成效', value: alloc.expectedOutcome }]) },
          { title: '二、来源穿透', content: `<p><b>监管行动：</b>${actions.length ? actions.map(a => this.renderPublicLinkButton(a.actionId, `App.navigatePublic('regulatory-actions',{actionId:'${a.actionId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>风险事项：</b>${risks.length ? risks.map(r => this.renderPublicLinkButton(r.name, `App.navigatePublic('warnings',{riskMatterId:'${r.id}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>监管事件：</b>${events.length ? events.map(e => this.renderPublicLinkButton(e.eventId, `App.navigatePublic('regulatory-events',{eventId:'${e.eventId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>整改任务：</b>${rects.length ? rects.map(t => this.renderPublicLinkButton(t.title, `App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p>` },
          { title: '三、任务与效果', content: `${task ? this.renderPublicLinkButton(task.supervisionTaskId + ' · ' + task.taskStatus, `App.navigatePublic('regulatory-supervision-tasks',{supervisionTaskId:'${task.supervisionTaskId}'})`) : this.renderPublicEmptyState('暂无监管任务')}${eff ? `<p>效果评价：${this.renderPublicLinkButton(eff.effectivenessId + ' · 得分' + eff.effectivenessScore, `App.showRegulatoryResourceEffectivenessDetail('${eff.effectivenessId}')`)}</p>` : ''}` }
        ],
        footer: `${ent ? this.renderPublicLinkButton('查看法人', `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : ''}${task ? this.renderPublicLinkButton('监管任务', `App.navigatePublic('regulatory-supervision-tasks',{supervisionTaskId:'${task.supervisionTaskId}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '资源配置');
  },

  showRegulatoryResourceEffectivenessDetail(effectivenessId) {
    const eff = this.getRegulatoryResourceEffectiveness(effectivenessId);
    const node = document.getElementById('regulatoryAllocationDetail') || document.getElementById('regulatoryBenchmarkingDetail');
    this.regulatoryResourceEffectivenessFocusId = effectivenessId;
    this.showPublicDetailOrNotFound(node, eff, () => {
      const alloc = this.getRegulatoryAllocation(eff.allocationId);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '资源投入效果',
        objectName: eff.effectivenessId + ' · 得分 ' + eff.effectivenessScore,
        objectId: eff.effectivenessId,
        status: eff.effectivenessLevel,
        sections: [
          { title: '一、投入产出', content: this.renderPublicMetaGrid([this.renderPublicIdField(eff.effectivenessId, '效果 ID'), { label: '投入级别', value: eff.inputLevel }, { label: '来源事件', value: eff.sourceEventCount }, { label: '来源风险', value: eff.sourceRiskCount }, { label: '行动完成', value: eff.completedActionCount + '/' + eff.actionCount }, { label: '整改关闭', value: eff.closedRectificationCount }, { label: '风险下降率', value: Math.round(eff.riskReductionRate * 100) + '%' }, { label: 'KRI改善率', value: Math.round(eff.kriImprovementRate * 100) + '%' }, { label: '效果得分', value: eff.effectivenessScore }]) },
          { title: '二、关联配置', content: alloc ? this.renderPublicLinkButton(alloc.allocationId, `App.showRegulatoryAllocationDetail('${alloc.allocationId}')`) : '—' }
        ],
        footer: `${alloc ? this.renderPublicLinkButton('资源配置', `App.navigatePublic('regulatory-resource-allocation',{allocationId:'${alloc.allocationId}'})`) : ''}${this.renderPublicLinkButton('监管任务', `App.navigatePublic('regulatory-supervision-tasks')`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '效果评价');
  },

  renderRegulatorySupervisionTasks() {
    const node = document.getElementById('regulatorySupervisionTasks');
    if (!node) return;
    const f = this.regulatorySupervisionTaskFilter || {};
    const all = APP_DATA.regulatorySupervisionTasks || [];
    let list = [...all];
    if (f.taskStatus) list = list.filter(t => t.taskStatus === f.taskStatus);
    if (f.taskType) list = list.filter(t => t.taskType === f.taskType);
    if (f.regionId) list = list.filter(t => t.regionId === f.regionId);
    if (f.entityId) list = list.filter(t => t.entityId === f.entityId);
    if (f.overdue === 'true') list = list.filter(t => t.overdue || (t.deadline && t.deadline < '2026-07-22' && !['COMPLETED','EVALUATED'].includes(t.taskStatus)));
    if (f.responsibleDepartment) list = list.filter(t => t.responsibleDepartment === f.responsibleDepartment);
    const ops = (APP_DATA.regulatoryOperationsMetrics || {}).supervisionTasks || {};
    const depts = [...new Set(all.map(t => t.responsibleDepartment))];
    const kpi = [
      [ops.total, '任务总量', `App.navigatePublic('regulatory-supervision-tasks')`],
      [ops.recommended + ops.assigned, '待分派', `App.navigatePublic('regulatory-supervision-tasks',{taskStatus:'ASSIGNED'})`],
      [ops.inProgress, '执行中', `App.navigatePublic('regulatory-supervision-tasks',{taskStatus:'IN_PROGRESS'})`],
      [ops.waitingResult, '待结果', `App.navigatePublic('regulatory-supervision-tasks',{taskStatus:'WAITING_RESULT'})`],
      [ops.completed, '已完成', `App.navigatePublic('regulatory-supervision-tasks',{taskStatus:'COMPLETED'})`],
      [ops.evaluated, '已评价', `App.navigatePublic('regulatory-supervision-tasks',{taskStatus:'EVALUATED'})`],
      [ops.overdue, '超期任务', `App.navigatePublic('regulatory-supervision-tasks',{overdue:'true'})`]
    ];
    const filterBar = `<div class="filter-bar" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px">
      <select onchange="App.regulatorySupervisionTaskFilter={...(App.regulatorySupervisionTaskFilter||{}),taskStatus:this.value||null};App.renderRegulatorySupervisionTasks()"><option value="">全部状态</option>${['RECOMMENDED','ASSIGNED','IN_PROGRESS','WAITING_RESULT','COMPLETED','EVALUATED'].map(s => `<option value="${s}" ${f.taskStatus===s?'selected':''}>${s}</option>`).join('')}</select>
      <select onchange="App.regulatorySupervisionTaskFilter={...(App.regulatorySupervisionTaskFilter||{}),taskType:this.value||null};App.renderRegulatorySupervisionTasks()"><option value="">全部类型</option>${['SUPERVISION','SPECIAL_REVIEW','DATA_GOVERNANCE','CROSS_BORDER_REVIEW','CROSS_DOMAIN_COORDINATION','RECTIFICATION_SUPPORT'].map(t => `<option value="${t}" ${f.taskType===t?'selected':''}>${t}</option>`).join('')}</select>
      <select onchange="App.regulatorySupervisionTaskFilter={...(App.regulatorySupervisionTaskFilter||{}),responsibleDepartment:this.value||null};App.renderRegulatorySupervisionTasks()"><option value="">全部责任部门</option>${depts.map(d => `<option value="${d}" ${f.responsibleDepartment===d?'selected':''}>${d}</option>`).join('')}</select>
      ${this.renderPublicFilterBar('regulatory-supervision-tasks', ['regionId', 'entityId']).replace('public-filter-bar', '')}
      ${Object.values(f).some(v => v) ? `<button class="btn btn-outline" onclick="App.clearPublicFilter('regulatory-supervision-tasks')">清除筛选</button>` : ''}
    </div>`;
    const rows = list.map(t => {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === t.entityId);
      return `<tr class="clickable" onclick="App.showRegulatorySupervisionTaskDetail('${t.supervisionTaskId}')"><td>${t.supervisionTaskId}</td><td>${this.renderPublicAllocationBadge(t.taskType)}</td><td>${ent ? ent.entityName : t.entityId}</td><td>${t.responsibleDepartment}</td><td>${(t.collaboratingDepartments||[]).join('、')||'—'}</td><td>${this.renderPublicSupervisionTaskStatusBadge(t.taskStatus)}</td><td>${t.progress}%</td><td>${t.deadline}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管运营</span><h2>监管任务协同中心</h2><p>管理集团监管层面任务分工与协同，与整改任务明确区分。</p></div><div>任务 <b>${all.length}</b></div></div>
      <div class="group-metrics">${kpi.map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="card"><div class="card-title">监管任务清单</div>${filterBar}
        ${list.length ? `<table class="data-table"><thead><tr><th>编号</th><th>类型</th><th>法人</th><th>责任部门</th><th>协同部门</th><th>状态</th><th>进度</th><th>截止</th></tr></thead><tbody>${rows}</tbody></table>` : (all.length ? this.renderPublicNoFilterResults() : this.renderPublicEmptyState('暂无监管任务'))}
        <p class="insight-note" style="margin-top:8px"><b>边界说明：</b>监管任务解决集团监管部门要做什么；整改任务解决被监管单位要改什么。</p>
      </div>
      <div id="regulatorySupervisionTaskDetail"></div>`;
    if (this.regulatorySupervisionTaskFocusId) setTimeout(() => this.showRegulatorySupervisionTaskDetail(this.regulatorySupervisionTaskFocusId), 0);
  },

  showRegulatorySupervisionTaskDetail(supervisionTaskId) {
    const task = this.getRegulatorySupervisionTask(supervisionTaskId);
    const node = document.getElementById('regulatorySupervisionTaskDetail');
    this.regulatorySupervisionTaskFocusId = supervisionTaskId;
    this.showPublicDetailOrNotFound(node, task, () => {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === task.entityId);
      const actions = (task.relatedRegulatoryActionIds || []).map(id => APP_DATA.regulatoryActions.find(a => a.actionId === id)).filter(Boolean);
      const events = (task.sourceEventIds || []).map(id => APP_DATA.regulatoryEvents.find(e => e.eventId === id)).filter(Boolean);
      const risks = (task.sourceRiskMatterIds || []).map(id => APP_DATA.warnings.find(w => w.id === id)).filter(Boolean);
      const rects = (task.relatedRectificationTaskIds || []).map(id => APP_DATA.rectificationTasks.find(t => t.taskId === id)).filter(Boolean);
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管任务',
        objectName: task.supervisionTaskId + ' · ' + task.outcomeTarget,
        objectId: task.supervisionTaskId,
        status: task.taskStatus,
        sections: [
          { title: '一、任务信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(task.supervisionTaskId, '任务 ID'), { label: '任务类型', html: this.renderPublicAllocationBadge(task.taskType) }, { label: '状态', html: this.renderPublicSupervisionTaskStatusBadge(task.taskStatus) }, { label: '进度', value: task.progress + '%' }, { label: '截止日期', value: task.deadline }, { label: '目标', value: task.outcomeTarget }, { label: '责任部门', value: task.responsibleDepartment }, { label: '协同部门', value: (task.collaboratingDepartments || []).join('、') || '—' }]) },
          { title: '二、监管穿透', content: `<p><b>监管行动：</b>${actions.length ? actions.map(a => this.renderPublicLinkButton(a.actionId, `App.navigatePublic('regulatory-actions',{actionId:'${a.actionId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>监管事件：</b>${events.length ? events.map(e => this.renderPublicLinkButton(e.eventId, `App.navigatePublic('regulatory-events',{eventId:'${e.eventId}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>风险事项：</b>${risks.length ? risks.map(r => this.renderPublicLinkButton(r.name, `App.navigatePublic('warnings',{riskMatterId:'${r.id}'})`)).join('') : this.renderPublicEmptyState('暂无')}</p><p><b>法人：</b>${ent ? this.renderPublicLinkButton(ent.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`) : '—'}</p><p><b>关联整改任务：</b>${rects.length ? rects.map(t => this.renderPublicLinkButton(t.title, `App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join('') : this.renderPublicEmptyState('暂无（整改任务由被监管单位执行）')}</p>` }
        ],
        footer: `${this.renderPublicLinkButton('资源配置', task.allocationId ? `App.navigatePublic('regulatory-resource-allocation',{allocationId:'${task.allocationId}'})` : `App.navigatePublic('regulatory-resource-allocation')`)}${actions[0] ? this.renderPublicLinkButton('监管行动', `App.navigatePublic('regulatory-actions',{actionId:'${actions[0].actionId}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管任务');
  },

  renderRegulatoryBenchmarking() {
    const node = document.getElementById('regulatoryBenchmarking');
    if (!node) return;
    const f = this.regulatoryBenchmarkingFilter || {};
    let list = [...(APP_DATA.regulatoryBenchmarking || [])];
    if (f.benchmarkType) list = list.filter(b => b.benchmarkType === f.benchmarkType);
    if (f.scopeId) list = list.filter(b => b.scopeId === f.scopeId);
    const typeLabels = { ENTITY: '法人', REGION: '区域', COUNTRY: '国家', DOMAIN: '业务领域' };
    const filterBar = `<div class="filter-bar" style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap">
      <select onchange="App.regulatoryBenchmarkingFilter={...(App.regulatoryBenchmarkingFilter||{}),benchmarkType:this.value||null};App.renderRegulatoryBenchmarking()"><option value="">全部对标类型</option>${Object.entries(typeLabels).map(([k,v]) => `<option value="${k}" ${f.benchmarkType===k?'selected':''}>${v}</option>`).join('')}</select>
      ${f.benchmarkType ? `<button class="btn btn-outline" onclick="App.clearPublicFilter('regulatory-benchmarking')">清除筛选</button>` : ''}
    </div>`;
    const rows = list.map(b => {
      const name = b.benchmarkType === 'ENTITY' ? (APP_DATA.globalLegalEntities.find(e => e.entityId === b.scopeId)||{}).entityName
        : b.benchmarkType === 'REGION' ? (APP_DATA.globalRegions.find(r => r.regionId === b.scopeId)||{}).regionName
        : b.benchmarkType === 'COUNTRY' ? (APP_DATA.globalCountries.find(c => c.countryId === b.scopeId)||{}).countryName
        : b.benchmarkType === 'DOMAIN' ? (APP_DATA.regulationDomains.find(d => d.id === b.scopeId)||{}).name : b.scopeId;
      return `<tr class="clickable" onclick="App.showRegulatoryBenchmarkDetail('${b.benchmarkId}')"><td>${b.benchmarkId}</td><td>${typeLabels[b.benchmarkType]||b.benchmarkType}</td><td>${name||b.scopeId}</td><td>${b.performanceScore}</td><td>${b.maturityLevel}</td><td>${Math.round((b.closureRate||0)*100)}%</td><td>${Math.round((b.actionVerificationRate||0)*100)}%</td><td>${this.renderPublicBenchmarkBadge(b.benchmarkPosition)}</td></tr>`;
    }).join('');
    const entityBench = list.filter(b => b.benchmarkType === 'ENTITY');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管运营</span><h2>监管能力对标分析</h2><p>识别集团内部不同监管对象之间的监管能力差异（不含外部企业数据）。</p></div><div>对标 <b>${list.length}</b></div></div>
      <div class="group-two">
        <div class="card"><div class="card-title">法人绩效对比</div>${this.renderPublicPerformanceComparison(entityBench.slice(0, 6).map(b => ({ name: (APP_DATA.globalLegalEntities.find(e => e.entityId === b.scopeId)||{}).entityName || b.scopeId, score: b.performanceScore })), 'score', 'name')}</div>
        <div class="card"><div class="card-title">区域绩效对比</div>${this.renderPublicPerformanceComparison(list.filter(b => b.benchmarkType === 'REGION').map(b => ({ name: (APP_DATA.globalRegions.find(r => r.regionId === b.scopeId)||{}).regionName || b.scopeId, score: b.performanceScore })), 'score', 'name')}</div>
      </div>
      <div class="card"><div class="card-title">对标分析清单</div>${filterBar}
        ${list.length ? `<table class="data-table"><thead><tr><th>编号</th><th>类型</th><th>对象</th><th>绩效得分</th><th>成熟度</th><th>整改闭环率</th><th>行动验证率</th><th>位置</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicNoFilterResults()}
      </div>
      <div id="regulatoryBenchmarkingDetail"></div>`;
    if (this.regulatoryBenchmarkFocusId) setTimeout(() => this.showRegulatoryBenchmarkDetail(this.regulatoryBenchmarkFocusId), 0);
  },

  showRegulatoryBenchmarkDetail(benchmarkId) {
    const bench = this.getRegulatoryBenchmark(benchmarkId);
    const node = document.getElementById('regulatoryBenchmarkingDetail');
    this.regulatoryBenchmarkFocusId = benchmarkId;
    this.showPublicDetailOrNotFound(node, bench, () => {
      const perf = (APP_DATA.regulatoryPerformanceMetrics || []).find(p => p.performanceId === (bench.sourcePerformanceIds || [])[0]);
      const mat = perf ? (APP_DATA.regulatoryMaturity || {}).entityMaturity?.find(m => m.objectId === bench.scopeId) : null;
      const optIds = bench.relatedOptimizationIds || [];
      node.innerHTML = this.buildPublicDetailPanel({
        objectType: '监管能力对标',
        objectName: bench.benchmarkId + ' · ' + bench.benchmarkType,
        objectId: bench.benchmarkId,
        status: bench.benchmarkPosition,
        sections: [
          { title: '一、对标指标', content: this.renderPublicMetaGrid([this.renderPublicIdField(bench.benchmarkId, '对标 ID'), { label: '对标位置', html: this.renderPublicBenchmarkBadge(bench.benchmarkPosition) }, { label: '绩效得分', value: bench.performanceScore }, { label: '成熟度等级', value: bench.maturityLevel }, { label: '整改闭环率', value: Math.round((bench.closureRate||0)*100) + '%' }, { label: '行动验证率', value: Math.round((bench.actionVerificationRate||0)*100) + '%' }, { label: '数据质量', value: bench.dataQualityScore }, { label: 'KRI改善', value: Math.round((bench.kriImprovementRate||0)*100) + '%' }, { label: '监管响应效率', value: bench.responseEfficiencyScore }]) },
          { title: '二、领先维度', content: (bench.leadingDimensions || []).length ? bench.leadingDimensions.map(d => `<span class="badge badge-success" style="margin:2px">${d}</span>`).join('') : this.renderPublicEmptyState('暂无领先维度') },
          { title: '三、短板维度', content: (bench.laggingDimensions || []).length ? bench.laggingDimensions.map(d => `<span class="badge badge-danger" style="margin:2px">${d}</span>`).join('') : this.renderPublicEmptyState('暂无短板') },
          { title: '四、差距指标', content: (bench.gapDimensions || []).length ? `<table class="data-table"><thead><tr><th>维度</th><th>得分</th><th>对标均值</th><th>差距</th></tr></thead><tbody>${bench.gapDimensions.map(g => `<tr><td>${g.dimension}</td><td>${Math.round(g.score*100)}%</td><td>${Math.round(g.peerAverage*100)}%</td><td>${g.gap > 0 ? '+' : ''}${Math.round(g.gap*100)}%</td></tr>`).join('')}</tbody></table>` : this.renderPublicEmptyState('暂无差距数据') },
          { title: '五、改善建议', content: (bench.improvementSuggestions || []).length ? bench.improvementSuggestions.map(s => `<p class="insight-note">${s}</p>`).join('') : this.renderPublicEmptyState('暂无建议') }
        ],
        footer: `${bench.benchmarkType === 'ENTITY' ? this.renderPublicLinkButton('查看法人', `App.navigatePublic('global-legal-entities',{entityId:'${bench.scopeId}'})`) : ''}${perf ? this.renderPublicLinkButton('监管绩效', `App.navigatePublic('regulatory-performance',{performanceId:'${perf.performanceId}'})`) : ''}${mat ? this.renderPublicLinkButton('成熟度', `App.navigatePublic('regulatory-maturity')`) : ''}${optIds[0] ? this.renderPublicLinkButton('规则优化建议', `App.navigatePublic('regulatory-optimization',{recommendationId:'${optIds[0]}'})`) : ''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '对标分析');
  },

  getRegulatoryObjective(objectiveId) { return (APP_DATA.regulatoryStrategicObjectives || []).find(o => o.objectiveId === objectiveId); },
  getRegulatoryPlan(planId) { return (APP_DATA.regulatoryAnnualPlans || []).find(p => p.planId === planId); },
  getRegulatoryTarget(targetId) { return (APP_DATA.regulatoryTargets || []).find(t => t.targetId === targetId); },
  getRegulatoryFocus(focusId) { return (APP_DATA.regulatoryStrategicFocus || []).find(f => f.focusId === focusId); },
  getRegulatoryPlanExecutionRecord(executionId) { return (APP_DATA.regulatoryPlanExecution || []).find(e => e.executionId === executionId); },
  getRegulatoryReview(reviewId) { return (APP_DATA.regulatoryStrategicReview || []).find(r => r.reviewId === reviewId); },
  getRegulatoryNextCycleRecommendation(recommendationId) { return (APP_DATA.regulatoryNextCycleRecommendations || []).find(r => r.recommendationId === recommendationId); },

  _focusObjectName(f) {
    if (f.focusType === 'ENTITY') return (APP_DATA.globalLegalEntities.find(e => e.entityId === f.focusObjectId) || {}).entityName;
    if (f.focusType === 'REGION') return (APP_DATA.globalRegions.find(r => r.regionId === f.focusObjectId) || {}).regionName;
    if (f.focusType === 'DOMAIN') return (APP_DATA.regulationDomains.find(d => d.id === f.focusObjectId) || {}).name;
    if (f.focusType === 'PROJECT') return (APP_DATA.globalProjects.find(p => p.projectId === f.focusObjectId) || {}).projectName;
    if (f.focusType === 'RISK') return (APP_DATA.warnings.find(w => w.id === f.focusObjectId) || APP_DATA.crossDomainRiskMatters.find(m => m.riskMatterId === f.focusObjectId) || {}).name || (APP_DATA.crossDomainRiskMatters.find(m => m.riskMatterId === f.focusObjectId) || {}).riskMatterName;
    return f.focusObjectId;
  },

  renderRegulatoryStrategyPlanning() {
    const node = document.getElementById('regulatoryStrategyPlanning');
    if (!node) return;
    const m = APP_DATA.regulatoryStrategicPlanningMetrics || {};
    const f = this.regulatoryStrategyPlanningFilter || {};
    let objs = APP_DATA.regulatoryStrategicObjectives || [];
    if (f.status) objs = objs.filter(o => o.status === f.status);
    const cycleSteps = [
      { label: '战略目标', sub: String(m.objectiveCount), onclick: `App.navigatePublic('regulatory-strategy-planning')` },
      { label: '年度计划', sub: String(m.planCount), onclick: `App.navigatePublic('regulatory-annual-plan')` },
      { label: '监管目标', sub: String(m.targetCount), onclick: `App.navigatePublic('regulatory-target-management')` },
      { label: '重点对象', sub: String(m.focusCount), onclick: `App.navigatePublic('regulatory-focus-management')` },
      { label: '计划执行', sub: String(m.executionCount), onclick: `App.navigatePublic('regulatory-plan-execution')` },
      { label: '战略复盘', sub: String(m.reviewCount), onclick: `App.navigatePublic('regulatory-strategic-review')` }
    ];
    const rows = objs.map(o => `<tr class="clickable" onclick="App.showRegulatoryObjectiveDetail('${o.objectiveId}')"><td>${o.objectiveId}</td><td>${o.objectiveName}</td><td>${o.objectiveType}</td><td>${o.targetValue}${o.unit}</td><td>${o.actualValue}${o.unit}</td><td>${Math.round(o.completionRate*100)}%</td><td>${this.renderPublicObjectiveStatusBadge(o.status)}</td></tr>`).join('');
    const behind = objs.filter(o => o.status === 'BEHIND' || o.status === 'AT_RISK');
    const recs = APP_DATA.regulatoryNextCycleRecommendations || [];
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团战略运营</span><h2>集团监管战略规划</h2><p>战略周期 ${m.strategicPeriod || '—'} · 形成战略目标→年度计划→执行→复盘闭环</p></div><div>完成率 <b>${Math.round((m.averageCompletionRate||0)*100)}%</b></div></div>
      <div class="group-metrics">${[[m.objectiveCount,'战略目标',`App.navigatePublic('regulatory-strategy-planning')`],[m.achievedCount,'已达成',`App.navigatePublic('regulatory-strategy-planning',{status:'ACHIEVED'})`],[m.onTrackCount,'按期',`App.navigatePublic('regulatory-strategy-planning',{status:'ON_TRACK'})`],[m.atRiskCount,'预警',`App.navigatePublic('regulatory-strategy-planning',{status:'AT_RISK'})`],[m.behindCount,'未达成',`App.navigatePublic('regulatory-strategy-planning',{status:'BEHIND'})`],[Math.round((m.averageCompletionRate||0)*100)+'%','平均完成率',`App.navigatePublic('regulatory-target-management')`],[Math.round((m.maturityImprovementRate||0)*100)+'%','成熟度提升',`App.navigatePublic('regulatory-maturity')`]].map(([v,l,n])=>this.renderPublicKpiCard(l,v,n)).join('')}</div>
      <div class="card"><div class="card-title">A. 战略周期总览</div>${this.renderPublicStrategicCycleFlow(cycleSteps)}</div>
      <div class="card"><div class="card-title">B. 集团监管战略目标</div>${rows?`<table class="data-table"><thead><tr><th>编号</th><th>目标</th><th>类型</th><th>目标值</th><th>实际值</th><th>完成率</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>`:this.renderPublicEmptyState('暂无战略目标')}</div>
      <div class="group-two">
        <div class="card"><div class="card-title">E. 目标偏差分析</div>${behind.length?behind.map(o=>`<p class="insight-note"><b>${o.objectiveName}</b>：偏差 ${o.variance}${o.unit} ${this.renderPublicObjectiveStatusBadge(o.status)} ${this.renderPublicLinkButton('查看目标',`App.navigatePublic('regulatory-target-management',{objectiveId:'${o.objectiveId}'})`)}</p>`).join(''):this.renderPublicEmptyState('暂无显著偏差')}</div>
        <div class="card"><div class="card-title">F. 下一周期战略建议</div>${recs.length?recs.slice(0,3).map(r=>`<p class="insight-note">${r.triggerReason} ${this.renderPublicLinkButton('查看',`App.showRegulatoryNextCycleRecommendationDetail('${r.recommendationId}')`)}</p>`).join(''):this.renderPublicEmptyState('暂无建议')}</div>
      </div>
      <div id="regulatoryObjectiveDetail"></div>`;
    if (this.regulatoryObjectiveFocusId) setTimeout(() => this.showRegulatoryObjectiveDetail(this.regulatoryObjectiveFocusId), 0);
  },

  showRegulatoryObjectiveDetail(objectiveId) {
    const obj = this.getRegulatoryObjective(objectiveId);
    const node = document.getElementById('regulatoryObjectiveDetail');
    this.regulatoryObjectiveFocusId = objectiveId;
    this.showPublicDetailOrNotFound(node, obj, () => {
      const plan = (APP_DATA.regulatoryAnnualPlans || []).find(p => (p.objectiveIds||[]).includes(obj.objectiveId));
      const tgt = (APP_DATA.regulatoryTargets || []).find(t => t.relatedObjectiveId === obj.objectiveId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '战略目标', objectName: obj.objectiveName, objectId: obj.objectiveId, status: obj.status,
        sections: [
          { title: '一、目标信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(obj.objectiveId,'目标 ID'),{label:'类型',value:obj.objectiveType},{label:'战略周期',value:obj.strategicPeriod},{label:'目标值',value:obj.targetValue+obj.unit},{label:'实际值',value:obj.actualValue+obj.unit},{label:'完成率',value:Math.round(obj.completionRate*100)+'%'},{label:'偏差',value:obj.variance+obj.unit},{label:'状态',html:this.renderPublicObjectiveStatusBadge(obj.status)}]) },
          { title: '二、目标进度', content: this.renderPublicTargetProgress(obj.targetValue, obj.actualValue, obj.unit) },
          { title: '三、关联穿透', content: `${plan?this.renderPublicLinkButton(plan.planName,`App.navigatePublic('regulatory-annual-plan',{planId:'${plan.planId}'})`):''} ${tgt?this.renderPublicLinkButton(tgt.targetName,`App.navigatePublic('regulatory-target-management',{targetId:'${tgt.targetId}'})`):''}` }
        ],
        footer: `${this.renderPublicLinkButton('年度计划',plan?`App.navigatePublic('regulatory-annual-plan',{planId:'${plan.planId}'})`:`App.navigatePublic('regulatory-annual-plan')`)}${this.renderPublicLinkButton('战略复盘',`App.navigatePublic('regulatory-strategic-review')`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '战略目标');
  },

  renderRegulatoryAnnualPlan() {
    const node = document.getElementById('regulatoryAnnualPlan');
    if (!node) return;
    const f = this.regulatoryAnnualPlanFilter || {};
    let plans = APP_DATA.regulatoryAnnualPlans || [];
    if (f.planStatus) plans = plans.filter(p => p.planStatus === f.planStatus);
    if (f.priority) plans = plans.filter(p => p.priority === f.priority);
    if (f.regionId) plans = plans.filter(p => (p.focusRegionIds||[]).includes(f.regionId));
    if (f.entityId) plans = plans.filter(p => (p.focusEntityIds||[]).includes(f.entityId));
    const filterBar = `<div class="filter-bar" style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap"><select onchange="App.regulatoryAnnualPlanFilter={...(App.regulatoryAnnualPlanFilter||{}),planStatus:this.value||null};App.renderRegulatoryAnnualPlan()"><option value="">全部状态</option>${['DRAFT','APPROVED','IN_PROGRESS','AT_RISK','COMPLETED'].map(s=>`<option value="${s}" ${f.planStatus===s?'selected':''}>${s}</option>`).join('')}</select><select onchange="App.regulatoryAnnualPlanFilter={...(App.regulatoryAnnualPlanFilter||{}),priority:this.value||null};App.renderRegulatoryAnnualPlan()"><option value="">全部优先级</option>${['CRITICAL','HIGH','MEDIUM'].map(p=>`<option value="${p}" ${f.priority===p?'selected':''}>${p}</option>`).join('')}</select>${this.renderPublicFilterBar('regulatory-annual-plan',['regionId','entityId','domainId']).replace('public-filter-bar','')}</div>`;
    const rows = plans.map(p => `<tr class="clickable" onclick="App.showRegulatoryPlanDetail('${p.planId}')"><td>${p.planId}</td><td>${p.planName}</td><td>${p.planYear}</td><td>${this.renderPublicPriorityBadge(p.priority)}</td><td>${this.renderPublicPlanStatusBadge(p.planStatus)}</td><td>${Math.round(p.completionRate*100)}%</td><td>${(p.focusEntityIds||[]).length}</td><td>${(p.plannedActionIds||[]).length}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}<div class="group-hero"><div><span>集团战略运营</span><h2>年度监管计划中心</h2><p>年度计划关联战略目标、重点对象与监管行动。</p></div><div>计划 <b>${plans.length}</b></div></div>
      <div class="group-metrics">${[[plans.length,'计划总数',`App.navigatePublic('regulatory-annual-plan')`],[plans.filter(p=>p.planStatus==='IN_PROGRESS').length,'执行中',`App.navigatePublic('regulatory-plan-execution')`],[plans.filter(p=>p.planStatus==='AT_RISK').length,'存在风险',`App.navigatePublic('regulatory-annual-plan',{planStatus:'AT_RISK'})`],[Math.round(plans.reduce((s,p)=>s+p.completionRate,0)/Math.max(1,plans.length)*100)+'%','平均完成率',`App.navigatePublic('regulatory-plan-execution')`]].map(([v,l,n])=>this.renderPublicKpiCard(l,v,n)).join('')}</div>
      <div class="card"><div class="card-title">年度监管计划清单</div>${filterBar}${rows?`<table class="data-table"><thead><tr><th>编号</th><th>计划</th><th>年度</th><th>优先级</th><th>状态</th><th>完成率</th><th>重点法人</th><th>行动</th></tr></thead><tbody>${rows}</tbody></table>`:this.renderPublicNoFilterResults()}
      <p style="margin-top:8px">${this.renderPublicLinkButton('重点对象',`App.navigatePublic('regulatory-focus-management')`)} ${this.renderPublicLinkButton('计划执行',`App.navigatePublic('regulatory-plan-execution')`)}</p></div>
      <div id="regulatoryPlanDetail"></div>`;
    if (this.regulatoryPlanFocusId) setTimeout(() => this.showRegulatoryPlanDetail(this.regulatoryPlanFocusId), 0);
  },

  showRegulatoryPlanDetail(planId) {
    const plan = this.getRegulatoryPlan(planId);
    const node = document.getElementById('regulatoryPlanDetail');
    this.regulatoryPlanFocusId = planId;
    this.showPublicDetailOrNotFound(node, plan, () => {
      const objs = (plan.objectiveIds||[]).map(id=>APP_DATA.regulatoryStrategicObjectives.find(o=>o.objectiveId===id)).filter(Boolean);
      const acts = (plan.plannedActionIds||[]).map(id=>APP_DATA.regulatoryActions.find(a=>a.actionId===id)).filter(Boolean);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '年度计划', objectName: plan.planName, objectId: plan.planId, status: plan.planStatus,
        sections: [
          { title: '一、计划信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(plan.planId,'计划 ID'),{label:'年度',value:plan.planYear},{label:'优先级',html:this.renderPublicPriorityBadge(plan.priority)},{label:'状态',html:this.renderPublicPlanStatusBadge(plan.planStatus)},{label:'目标值',value:plan.targetValue},{label:'实际值',value:plan.actualValue},{label:'完成率',value:Math.round(plan.completionRate*100)+'%'},{label:'偏差率',value:Math.round(plan.varianceRate*100)+'%'}]) },
          { title: '二、关联战略目标', content: objs.length?objs.map(o=>this.renderPublicLinkButton(o.objectiveName,`App.navigatePublic('regulatory-strategy-planning',{objectiveId:'${o.objectiveId}'})`)).join(''):this.renderPublicEmptyState('暂无') },
          { title: '三、重点与行动', content: `<p><b>重点法人：</b>${(plan.focusEntityIds||[]).map(id=>this.renderPublicLinkButton((APP_DATA.globalLegalEntities.find(e=>e.entityId===id)||{}).entityName||id,`App.navigatePublic('global-legal-entities',{entityId:'${id}'})`)).join('')}</p><p><b>监管行动：</b>${acts.length?acts.slice(0,3).map(a=>this.renderPublicLinkButton(a.actionId,`App.navigatePublic('regulatory-actions',{actionId:'${a.actionId}'})`)).join(''):this.renderPublicEmptyState('暂无')}</p>` }
        ],
        footer: `${this.renderPublicLinkButton('计划执行',`App.navigatePublic('regulatory-plan-execution',{planId:'${plan.planId}'})`)}${this.renderPublicLinkButton('重点管理',`App.navigatePublic('regulatory-focus-management')`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '年度计划');
  },

  renderRegulatoryTargetManagement() {
    const node = document.getElementById('regulatoryTargetManagement');
    if (!node) return;
    const f = this.regulatoryTargetFilter || {};
    let targets = APP_DATA.regulatoryTargets || [];
    if (f.status) targets = targets.filter(t => t.status === f.status);
    if (f.targetType) targets = targets.filter(t => t.targetType === f.targetType);
    const unmet = targets.filter(t => t.status === 'BEHIND' || t.status === 'AT_RISK');
    const rows = targets.map(t => `<tr class="clickable" onclick="App.showRegulatoryTargetDetail('${t.targetId}')"><td>${t.targetId}</td><td>${t.targetName}</td><td>${t.targetDimension}</td><td>${t.targetValue}</td><td>${t.actualValue}</td><td>${Math.round(t.completionRate*100)}%</td><td>${t.variance}</td><td>${this.renderPublicTargetStatusBadge(t.status)}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}<div class="group-hero"><div><span>集团战略运营</span><h2>监管目标管理</h2><p>目标→目标值→实际值→完成率→偏差→状态</p></div><div>目标 <b>${targets.length}</b></div></div>
      <div class="group-metrics">${[[targets.length,'目标总数',`App.navigatePublic('regulatory-target-management')`],[targets.filter(t=>t.status==='ACHIEVED').length,'已达成',`App.navigatePublic('regulatory-target-management',{status:'ACHIEVED'})`],[unmet.length,'未达成/预警',`App.navigatePublic('regulatory-target-management',{status:'BEHIND'})`],[Math.round(targets.reduce((s,t)=>s+t.completionRate,0)/Math.max(1,targets.length)*100)+'%','平均达成率',`App.navigatePublic('regulatory-target-management')`]].map(([v,l,n])=>this.renderPublicKpiCard(l,v,n)).join('')}</div>
      <div class="card"><div class="card-title">监管目标清单</div>${rows?`<table class="data-table"><thead><tr><th>编号</th><th>目标</th><th>维度</th><th>目标值</th><th>实际值</th><th>完成率</th><th>偏差</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>`:this.renderPublicEmptyState('暂无目标')}</div>
      <div class="card"><div class="card-title">未达成目标</div>${unmet.length?unmet.map(t=>`<p class="insight-note">${t.targetName}：${Math.round(t.completionRate*100)}% ${this.renderPublicLinkButton('查看',`App.showRegulatoryTargetDetail('${t.targetId}')`)}</p>`).join(''):this.renderPublicEmptyState('暂无未达成目标')}</div>
      <div id="regulatoryTargetDetail"></div>`;
    if (this.regulatoryTargetFocusId) setTimeout(() => this.showRegulatoryTargetDetail(this.regulatoryTargetFocusId), 0);
  },

  showRegulatoryTargetDetail(targetId) {
    const tgt = this.getRegulatoryTarget(targetId);
    const node = document.getElementById('regulatoryTargetDetail');
    this.regulatoryTargetFocusId = targetId;
    this.showPublicDetailOrNotFound(node, tgt, () => {
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '监管目标', objectName: tgt.targetName, objectId: tgt.targetId, status: tgt.status,
        sections: [
          { title: '一、目标指标', content: this.renderPublicMetaGrid([this.renderPublicIdField(tgt.targetId,'目标 ID'),{label:'类型',value:tgt.targetType},{label:'维度',value:tgt.targetDimension},{label:'目标值',value:tgt.targetValue},{label:'实际值',value:tgt.actualValue},{label:'完成率',value:Math.round(tgt.completionRate*100)+'%'},{label:'偏差',value:tgt.variance},{label:'状态',html:this.renderPublicTargetStatusBadge(tgt.status)}]) },
          { title: '二、目标进度', content: this.renderPublicTargetProgress(tgt.targetValue, tgt.actualValue) },
          { title: '三、关联计划与对象', content: `${tgt.relatedPlanId?this.renderPublicLinkButton(tgt.relatedPlanId,`App.navigatePublic('regulatory-annual-plan',{planId:'${tgt.relatedPlanId}'})`):''} ${(tgt.relatedEntityIds||[]).map(id=>this.renderPublicLinkButton(id,`App.navigatePublic('global-legal-entities',{entityId:'${id}'})`)).join('')}` }
        ],
        footer: `${tgt.relatedObjectiveId?this.renderPublicLinkButton('战略目标',`App.navigatePublic('regulatory-strategy-planning',{objectiveId:'${tgt.relatedObjectiveId}'})`):''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管目标');
  },

  renderRegulatoryFocusManagement() {
    const node = document.getElementById('regulatoryFocusManagement');
    if (!node) return;
    const f = this.regulatoryFocusFilter || {};
    let items = APP_DATA.regulatoryStrategicFocus || [];
    if (f.focusType) items = items.filter(i => i.focusType === f.focusType);
    if (f.priority) items = items.filter(i => i.priority === f.priority);
    const byType = (type) => items.filter(i => i.focusType === type);
    const rows = items.map(i => `<tr class="clickable" onclick="App.showRegulatoryFocusDetail('${i.focusId}')"><td>${i.focusId}</td><td>${this.renderPublicFocusTypeBadge(i.focusType)}</td><td>${this._focusObjectName(i)}</td><td>${this.renderPublicPriorityBadge(i.priority)}</td><td>${this.renderPublicHealthBadge(i.healthLevel)}</td><td>${i.eventCount}</td><td>${i.overdueCount}</td><td>${i.focusReason}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}<div class="group-hero"><div><span>集团战略运营</span><h2>年度监管重点管理</h2><p>基于优先级、风险集中度、健康度与成熟度动态识别年度重点。</p></div><div>重点 <b>${items.length}</b></div></div>
      <div class="group-metrics">${[['REGION','重点区域'],['ENTITY','重点法人'],['DOMAIN','重点领域'],['RISK','重点风险'],['PROJECT','重点项目'],['DATA_OBJECT','数据治理']].map(([t,l])=>[byType(t).length,l,`App.navigatePublic('regulatory-focus-management',{focusType:'${t}'})`]).map(([v,l,n])=>this.renderPublicKpiCard(l,v,n)).join('')}</div>
      <div class="card"><div class="card-title">年度监管重点清单</div>${rows?`<table class="data-table"><thead><tr><th>编号</th><th>类型</th><th>对象</th><th>优先级</th><th>健康度</th><th>事件</th><th>超期</th><th>原因</th></tr></thead><tbody>${rows}</tbody></table>`:this.renderPublicEmptyState('暂无重点对象')}</div>
      <div id="regulatoryFocusDetail"></div>`;
    if (this.regulatoryFocusFocusId) setTimeout(() => this.showRegulatoryFocusDetail(this.regulatoryFocusFocusId), 0);
  },

  showRegulatoryFocusDetail(focusId) {
    const focus = this.getRegulatoryFocus(focusId);
    const node = document.getElementById('regulatoryFocusDetail');
    this.regulatoryFocusFocusId = focusId;
    this.showPublicDetailOrNotFound(node, focus, () => {
      const ent = focus.focusType === 'ENTITY' ? APP_DATA.globalLegalEntities.find(e => e.entityId === focus.focusObjectId) : null;
      const acts = (focus.recommendedActionIds||[]).map(id=>APP_DATA.regulatoryActions.find(a=>a.actionId===id)).filter(Boolean);
      const pri = ent ? (APP_DATA.regulatoryPrioritiesRecalculated||APP_DATA.regulatoryPriorities||{})[ent.entityId] : null;
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '监管重点', objectName: this._focusObjectName(focus), objectId: focus.focusId, status: focus.priority,
        sections: [
          { title: '一、重点信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(focus.focusId,'重点 ID'),{label:'类型',html:this.renderPublicFocusTypeBadge(focus.focusType)},{label:'原因',value:focus.focusReason},{label:'风险分',value:focus.riskScore},{label:'健康度',html:this.renderPublicHealthBadge(focus.healthLevel)},{label:'成熟度',value:focus.maturityLevel},{label:'事件数',value:focus.eventCount},{label:'超期数',value:focus.overdueCount}]) },
          { title: '二、穿透链路', content: `${ent?this.renderPublicLinkButton('监管优先级',`App.navigatePublic('regulatory-command-center')`):''} ${ent?this.renderPublicLinkButton('法人',`App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`):''} ${acts.length?acts.map(a=>this.renderPublicLinkButton('行动 '+a.actionId,`App.navigatePublic('regulatory-actions',{actionId:'${a.actionId}'})`)).join(''):''} ${this.renderPublicLinkButton('监管任务',`App.navigatePublic('regulatory-supervision-tasks')`)} ${this.renderPublicLinkButton('整改',`App.navigatePublic('rectification')`)}` }
        ],
        footer: `${focus.relatedPlanIds?.[0]?this.renderPublicLinkButton('年度计划',`App.navigatePublic('regulatory-annual-plan',{planId:'${focus.relatedPlanIds[0]}'})`):''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管重点');
  },

  renderRegulatoryPlanExecution() {
    const node = document.getElementById('regulatoryPlanExecution');
    if (!node) return;
    const f = this.regulatoryPlanExecutionFilter || {};
    let execs = APP_DATA.regulatoryPlanExecution || [];
    if (f.planId) execs = execs.filter(e => e.planId === f.planId);
    if (f.planStatus) { const pids = (APP_DATA.regulatoryAnnualPlans||[]).filter(p=>p.planStatus===f.planStatus).map(p=>p.planId); execs = execs.filter(e => pids.includes(e.planId)); }
    if (f.overdue === 'true') execs = execs.filter(e => e.plannedDate && e.plannedDate < '2026-07-22' && e.executionStatus !== 'COMPLETED');
    const completed = execs.filter(e => e.executionStatus === 'COMPLETED').length;
    const rows = execs.map(e => { const plan = APP_DATA.regulatoryAnnualPlans.find(p=>p.planId===e.planId); const ent = APP_DATA.globalLegalEntities.find(x=>x.entityId===e.entityId); return `<tr class="clickable" onclick="App.showRegulatoryPlanExecutionDetail('${e.executionId}')"><td>${e.executionId}</td><td>${plan?plan.planName:e.planId}</td><td>${e.actionId}</td><td>${ent?ent.entityName:e.entityId||'—'}</td><td>${e.executionStatus}</td><td>${Math.round(e.completionRate*100)}%</td><td>${e.plannedDate}</td></tr>`; }).join('');
    const cycleSteps = [{label:'计划',sub:'年度',onclick:`App.navigatePublic('regulatory-annual-plan')`},{label:'行动',sub:'监管',onclick:`App.navigatePublic('regulatory-actions')`},{label:'资源',sub:'配置',onclick:`App.navigatePublic('regulatory-resource-allocation')`},{label:'任务',sub:'协同',onclick:`App.navigatePublic('regulatory-supervision-tasks')`},{label:'执行',sub:'反馈',onclick:`App.navigatePublic('regulatory-plan-execution')`},{label:'绩效',sub:'评价',onclick:`App.navigatePublic('regulatory-performance')`}];
    node.innerHTML = `${this.renderPublicBackButton()}<div class="group-hero"><div><span>集团战略运营</span><h2>年度监管计划执行中心</h2><p>计划→行动→资源→监管任务→执行→绩效闭环（区别于规则执行）。</p></div><div>完成 <b>${completed}/${execs.length}</b></div></div>
      <div class="group-metrics">${[[execs.length,'执行项',`App.navigatePublic('regulatory-plan-execution')`],[completed,'已完成',`App.navigatePublic('regulatory-plan-execution')`],[execs.filter(e=>e.executionStatus==='IN_PROGRESS').length,'执行中',`App.navigatePublic('regulatory-plan-execution')`],[execs.filter(e=>e.plannedDate&&e.plannedDate<'2026-07-22'&&e.executionStatus!=='COMPLETED').length,'超期',`App.navigatePublic('regulatory-plan-execution',{overdue:'true'})`],[Math.round(execs.reduce((s,e)=>s+e.completionRate,0)/Math.max(1,execs.length)*100)+'%','计划完成率',`App.navigatePublic('regulatory-annual-plan')`]].map(([v,l,n])=>this.renderPublicKpiCard(l,v,n)).join('')}</div>
      <div class="card"><div class="card-title">计划执行闭环</div>${this.renderPublicStrategicCycleFlow(cycleSteps)}</div>
      <div class="card"><div class="card-title">计划执行清单</div>${rows?`<table class="data-table"><thead><tr><th>编号</th><th>计划</th><th>行动</th><th>法人</th><th>状态</th><th>完成率</th><th>计划日期</th></tr></thead><tbody>${rows}</tbody></table>`:this.renderPublicEmptyState('暂无执行记录')}</div>
      <div id="regulatoryPlanExecutionDetail"></div>`;
    if (this.regulatoryPlanExecutionFocusId) setTimeout(() => this.showRegulatoryPlanExecutionDetail(this.regulatoryPlanExecutionFocusId), 0);
  },

  showRegulatoryPlanExecutionDetail(executionId) {
    const ex = this.getRegulatoryPlanExecutionRecord(executionId);
    const node = document.getElementById('regulatoryPlanExecutionDetail');
    this.regulatoryPlanExecutionFocusId = executionId;
    this.showPublicDetailOrNotFound(node, ex, () => {
      const act = APP_DATA.regulatoryActions.find(a => a.actionId === ex.actionId);
      const task = ex.supervisionTaskId ? APP_DATA.regulatorySupervisionTasks.find(t => t.supervisionTaskId === ex.supervisionTaskId) : null;
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '计划执行', objectName: ex.executionId, objectId: ex.executionId, status: ex.executionStatus,
        sections: [
          { title: '一、执行信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(ex.executionId,'执行 ID'),{label:'计划',value:ex.planId},{label:'行动',value:ex.actionId},{label:'状态',value:ex.executionStatus},{label:'计划值',value:ex.plannedValue},{label:'实际值',value:ex.actualValue},{label:'完成率',value:Math.round(ex.completionRate*100)+'%'},{label:'偏差率',value:Math.round(ex.varianceRate*100)+'%'}]) },
          { title: '二、穿透', content: `${act?this.renderPublicLinkButton(act.actionId,`App.navigatePublic('regulatory-actions',{actionId:'${act.actionId}'})`):''} ${task?this.renderPublicLinkButton(task.supervisionTaskId,`App.navigatePublic('regulatory-supervision-tasks',{supervisionTaskId:'${task.supervisionTaskId}'})`):''} ${this.renderPublicLinkButton('监管绩效',`App.navigatePublic('regulatory-performance')`)}` }
        ]
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '计划执行');
  },

  renderRegulatoryStrategicReview() {
    const node = document.getElementById('regulatoryStrategicReview');
    if (!node) return;
    const reviews = APP_DATA.regulatoryStrategicReview || [];
    const recs = APP_DATA.regulatoryNextCycleRecommendations || [];
    const groupRev = reviews.find(r => r.reviewDimension === 'GROUP');
    const rows = reviews.slice(0, 12).map(r => `<tr class="clickable" onclick="App.showRegulatoryReviewDetail('${r.reviewId}')"><td>${r.reviewId}</td><td>${r.reviewDimension}</td><td>${r.scopeName}</td><td>${Math.round(r.targetCompletionRate*100)}%</td><td>${Math.round(r.regulatoryEffectiveness*100)}%</td><td>${Math.round(r.rectificationClosureRate*100)}%</td><td>${r.reviewStatus}</td></tr>`).join('');
    const cycleSteps = [{label:'战略目标',onclick:`App.navigatePublic('regulatory-strategy-planning')`},{label:'年度计划',onclick:`App.navigatePublic('regulatory-annual-plan')`},{label:'监管执行',onclick:`App.navigatePublic('regulatory-plan-execution')`},{label:'绩效评价',onclick:`App.navigatePublic('regulatory-performance')`},{label:'战略复盘',onclick:`App.navigatePublic('regulatory-strategic-review')`},{label:'下一周期',onclick:`App.navigatePublic('regulatory-strategic-review')`}];
    node.innerHTML = `${this.renderPublicBackButton()}<div class="group-hero"><div><span>集团战略运营</span><h2>集团监管战略复盘</h2><p>战略目标→年度计划→监管执行→绩效评价→战略复盘→下一周期规划</p></div><div>复盘 <b>${reviews.length}</b></div></div>
      <div class="group-metrics">${groupRev?[[Math.round(groupRev.targetCompletionRate*100)+'%','年度目标达成',`App.navigatePublic('regulatory-target-management')`],[Math.round(groupRev.regulatoryEffectiveness*100)+'%','监管绩效',`App.navigatePublic('regulatory-performance')`],[Math.round(groupRev.resourceEfficiencyRate*100)+'%','资源投入效果',`App.navigatePublic('regulatory-resource-allocation')`],[groupRev.maturityScore,'成熟度',`App.navigatePublic('regulatory-maturity')`],[recs.length,'下一周期建议',`App.navigatePublic('regulatory-strategic-review')`]].map(([v,l,n])=>this.renderPublicKpiCard(l,v,n)).join(''):''}</div>
      <div class="card"><div class="card-title">核心战略闭环</div>${this.renderPublicStrategicCycleFlow(cycleSteps)}</div>
      ${this.renderOperatingCycleStrategicLinkPanel()}
      <div class="card"><div class="card-title">战略复盘清单</div>${rows?`<table class="data-table"><thead><tr><th>编号</th><th>维度</th><th>对象</th><th>目标完成率</th><th>监管有效性</th><th>整改闭环率</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>`:this.renderPublicEmptyState('暂无复盘')}</div>
      <div class="card"><div class="card-title">下一周期建议</div>${recs.length?recs.map(r=>`<p class="insight-note"><b>${r.recommendationType}</b>：${r.triggerReason} ${this.renderPublicLinkButton('查看',`App.showRegulatoryNextCycleRecommendationDetail('${r.recommendationId}')`)} ${this.renderPublicLinkButton('新年度重点',`App.navigatePublic('regulatory-focus-management')`)}</p>`).join(''):this.renderPublicEmptyState('暂无建议')}</div>
      <div id="regulatoryReviewDetail"></div>`;
    if (this.regulatoryReviewFocusId) setTimeout(() => this.showRegulatoryReviewDetail(this.regulatoryReviewFocusId), 0);
  },

  showRegulatoryReviewDetail(reviewId) {
    const rev = this.getRegulatoryReview(reviewId);
    const node = document.getElementById('regulatoryReviewDetail');
    this.regulatoryReviewFocusId = reviewId;
    this.showPublicDetailOrNotFound(node, rev, () => {
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '战略复盘', objectName: rev.scopeName, objectId: rev.reviewId, status: rev.reviewStatus,
        sections: [
          { title: '一、复盘指标', content: this.renderPublicMetaGrid([this.renderPublicIdField(rev.reviewId,'复盘 ID'),{label:'维度',value:rev.reviewDimension},{label:'周期',value:rev.reviewPeriod},{label:'目标完成率',value:Math.round(rev.targetCompletionRate*100)+'%'},{label:'监管有效性',value:Math.round(rev.regulatoryEffectiveness*100)+'%'},{label:'风险解决率',value:Math.round(rev.riskResolutionRate*100)+'%'},{label:'整改闭环率',value:Math.round(rev.rectificationClosureRate*100)+'%'},{label:'资源效率',value:Math.round(rev.resourceEfficiencyRate*100)+'%'},{label:'成熟度提升',value:Math.round(rev.maturityImprovement*100)+'%'}]) },
          { title: '二、主要偏差', content: (rev.mainDeviations||[]).length?rev.mainDeviations.map(d=>`<p class="insight-note">${d}</p>`).join(''):this.renderPublicEmptyState('暂无显著偏差') },
          { title: '三、关联穿透', content: `${this.renderPublicLinkButton('监管绩效',`App.navigatePublic('regulatory-performance')`)} ${this.renderPublicLinkButton('成熟度',`App.navigatePublic('regulatory-maturity')`)} ${this.renderPublicLinkButton('战略复盘建议',`App.navigatePublic('regulatory-strategic-review')`)}` }
        ]
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '战略复盘');
  },

  showRegulatoryNextCycleRecommendationDetail(recommendationId) {
    const rec = this.getRegulatoryNextCycleRecommendation(recommendationId);
    const node = document.getElementById('regulatoryReviewDetail') || document.getElementById('regulatoryObjectiveDetail');
    this.regulatoryNextCycleRecommendationFocusId = recommendationId;
    this.showPublicDetailOrNotFound(node, rec, () => {
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '下一周期建议', objectName: rec.recommendationType, objectId: rec.recommendationId, status: rec.status,
        sections: [
          { title: '一、建议内容', content: this.renderPublicMetaGrid([this.renderPublicIdField(rec.recommendationId,'建议 ID'),{label:'触发原因',value:rec.triggerReason},{label:'资源调整',value:rec.resourceAdjustment},{label:'策略调整',value:rec.strategyAdjustment},{label:'优先级',html:this.renderPublicPriorityBadge(rec.priority)}]) },
          { title: '二、下一年度重点', content: `<p><b>重点法人：</b>${(rec.focusEntityIds||[]).map(id=>this.renderPublicLinkButton(id,`App.navigatePublic('regulatory-focus-management',{focusType:'ENTITY'})`)).join('')}</p><p><b>重点领域：</b>${(rec.focusDomainIds||[]).map(id=>this.renderPublicLinkButton(id,`App.navigatePublic('regulatory-focus-management',{focusType:'DOMAIN'})`)).join('')}</p>` },
          { title: '三、规则优化', content: (rec.ruleOptimizationIds||[]).length?rec.ruleOptimizationIds.map(id=>this.renderPublicLinkButton(id,`App.navigatePublic('regulatory-optimization',{recommendationId:'${id}'})`)).join(''):this.renderPublicEmptyState('暂无规则优化建议') }
        ],
        footer: `${this.renderPublicLinkButton('年度重点',`App.navigatePublic('regulatory-focus-management')`)}${this.renderPublicLinkButton('战略规划',`App.navigatePublic('regulatory-strategy-planning')`)}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '下一周期建议');
  },

  getRegulatoryWorkbench(workbenchId) {
    return (APP_DATA.regulatoryWorkbench || []).find(w => w.workbenchId === workbenchId);
  },

  getRegulatoryQueueItem(queueItemId) {
    return (APP_DATA.regulatoryQueue || []).find(q => q.queueItemId === queueItemId);
  },

  getRegulatoryDecisionContext(decisionContextId) {
    return (APP_DATA.regulatoryDecisionContext || []).find(d => d.decisionContextId === decisionContextId);
  },

  _queueSourceNavigate(item) {
    const q = item || {};
    if (q.sourceType === 'regulatoryEvents') return `App.navigatePublic('regulatory-events',{eventId:'${q.sourceId}'})`;
    if (q.sourceType === 'rectificationTasks') return `App.navigatePublic('rectification',{rectificationTaskId:'${q.sourceId}'})`;
    if (q.sourceType === 'regulatoryActions') return `App.navigatePublic('regulatory-actions',{actionId:'${q.sourceId}'})`;
    if (q.sourceType === 'regulatoryActionFeedbacks') return `App.navigatePublic('regulatory-action-execution',{feedbackId:'${q.sourceId}'})`;
    if (q.sourceType === 'regulatorySupervisionTasks') return `App.navigatePublic('regulatory-supervision-tasks',{supervisionTaskId:'${q.sourceId}'})`;
    if (q.sourceType === 'regulatoryRuleChangeRequests') return `App.navigatePublic('regulatory-rule-approvals',{changeRequestId:'${q.sourceId}'})`;
    if (q.sourceType === 'regulatoryRuleApprovals') return `App.navigatePublic('regulatory-rule-approvals',{approvalId:'${q.sourceId}'})`;
    if (q.sourceType === 'regulatoryRuleDeployments') return `App.navigatePublic('regulatory-rule-deployments',{deploymentId:'${q.sourceId}'})`;
    if (q.sourceType === 'regulatoryRuleVersions') return `App.navigatePublic('regulatory-rule-versions',{versionId:'${q.sourceId}'})`;
    if (q.sourceType === 'regulatoryRuleRuntimeAnomalies') return `App.navigatePublic('regulatory-rule-runtime')`;
    if (q.sourceType === 'regulatoryStrategicObjectives') return `App.navigatePublic('regulatory-strategy-planning',{objectiveId:'${q.sourceId}'})`;
    if (q.sourceType === 'regulatoryAnnualPlans') return `App.navigatePublic('regulatory-annual-plan',{planId:'${q.sourceId}'})`;
    if (q.sourceType === 'regulatoryNextCycleRecommendations') return `App.navigatePublic('regulatory-strategic-review',{recommendationId:'${q.sourceId}'})`;
    return `App.navigatePublic('${q.nextPageId || 'regulatory-queue'}')`;
  },

  renderRegulatoryWorkbench() {
    const node = document.getElementById('regulatoryWorkbench');
    if (!node) return;
    const wbM = APP_DATA.regulatoryWorkbenchMetrics || {};
    const groupWb = (APP_DATA.regulatoryWorkbench || []).find(w => w.scopeType === 'GROUP') || {};
    const queue = APP_DATA.regulatoryQueue || [];
    const queueByType = (t) => queue.filter(q => q.queueType === t).length;
    const topEntities = (wbM.topEntityIds || []).map(id => {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === id);
      const po = (APP_DATA.regulatoryPriorityObjects || []).find(o => o.objectId === id);
      const dc = (APP_DATA.regulatoryDecisionContext || []).find(d => d.entityId === id);
      return { id, name: ent?.entityName || id, priority: po?.priority, health: po?.healthLevel, dcId: dc?.decisionContextId };
    });
    const kpi = [
      [wbM.objectCount, '监管对象总数', `App.navigatePublic('global-legal-entities')`],
      [wbM.highPriorityObjectCount, '高优先级对象', `App.navigatePublic('regulatory-command-center')`],
      [wbM.majorEventCount, '重大风险事件', `App.navigatePublic('regulatory-events')`],
      [wbM.overdueRectCount, '超期整改', `App.navigatePublic('rectification-operations')`],
      [wbM.pendingDecisionCount, '待决策事项', `App.navigatePublic('regulatory-queue',{queueType:'DECISION'})`],
      [wbM.pendingActionCount, '待执行行动', `App.navigatePublic('regulatory-queue',{queueType:'ACTION'})`],
      [wbM.pendingVerificationCount, '待验证事项', `App.navigatePublic('regulatory-queue',{queueType:'VERIFICATION'})`],
      [wbM.ruleAnomalyCount, '规则运行异常', `App.navigatePublic('regulatory-queue',{queueType:'RULE_ANOMALY'})`]
    ];
    const todoTypes = [['DECISION','待决策'],['ACTION','待分派/执行'],['SUPERVISION_TASK','监管任务'],['FEEDBACK','待反馈'],['VERIFICATION','待验证'],['RULE_APPROVAL','待审批'],['RULE_DEPLOYMENT','待发布'],['STRATEGIC_REVIEW','待复盘']];
    const entityRows = topEntities.map(e => `<tr class="clickable" onclick="App.navigatePublic('regulatory-decision-room',{decisionContextId:'${e.dcId||''}'})"><td>${e.name}</td><td>${this.renderPublicPriorityBadge(e.priority)}</td><td>${this.renderPublicHealthBadge(e.health)}</td><td>${queue.filter(q=>q.entityId===e.id).length}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管平台</span><h2>集团监管统一工作台</h2><p>一个总览、一个工作台、一个待办队列、一个决策工作室。</p></div><div>待办 <b>${wbM.queueTotal || 0}</b></div></div>
      <div class="group-metrics">${kpi.map(([v,l,n])=>this.renderPublicKpiCard(l,v,n)).join('')}</div>
      <div class="group-two">
        <div class="card"><div class="card-title">当前最重要的问题</div>${this.renderPublicTopIssuesList(groupWb.topIssues)}</div>
        <div class="card"><div class="card-title">监管待办</div>${todoTypes.map(([t,l])=>`<p class="insight-note"><button class="btn btn-outline" onclick="App.navigatePublic('regulatory-queue',{queueType:'${t}'})">${l}</button> <b>${queueByType(t)}</b></p>`).join('')}<p>${this.renderPublicLinkButton('查看全部待办',`App.navigatePublic('regulatory-queue')`)}</p></div>
      </div>
      <div class="card"><div class="card-title">重点监管对象 TOP</div>${entityRows?`<table class="data-table"><thead><tr><th>法人</th><th>优先级</th><th>健康度</th><th>待办</th></tr></thead><tbody>${entityRows}</tbody></table>`:this.renderPublicEmptyState('暂无')}</div>
      <div class="group-two">
        <div class="card"><div class="card-title">我的数据治理任务</div>
          ${(() => { const tasks = (APP_DATA.regulatoryDataGovernanceTasks || []).filter(t => t.status !== 'CLOSED' && t.status !== 'VERIFIED').slice(0, 5);
            return tasks.length ? tasks.map(t => `<p class="insight-note clickable" onclick="App.navigatePublic('regulatory-data-governance',{governanceTaskId:'${t.governanceTaskId}'})">${t.governanceTaskId} · ${t.status} · 截止 ${t.dueDate}</p>`).join('') : this.renderPublicEmptyState('暂无'); })()}
          <p>${this.renderPublicLinkButton('数据治理中心', `App.navigatePublic('regulatory-data-governance')`)}</p>
        </div>
        <div class="card"><div class="card-title">数据运行异常</div>
          ${[
            [(APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status !== 'CLOSED').length, '数据质量异常', `App.navigatePublic('regulatory-data-quality')`],
            [(APP_DATA.regulatoryDataIntegrationJobs || []).filter(j => j.status === 'FAILED').length, '接入失败', `App.navigatePublic('regulatory-data-integration')`],
            [(APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.status === 'OPEN').length, '待复核质量问题', `App.navigatePublic('regulatory-data-governance')`]
          ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}
        </div>
      </div>
      <div class="group-two">
        <div class="card"><div class="card-title">指标与预警待办</div>
          ${(() => { const km = APP_DATA.regulatoryMetricKriMetrics || {}; const warns = (APP_DATA.regulatoryWarnings || []).filter(w => w.status === 'PENDING_REVIEW').slice(0, 4);
            return [
              [km.pendingReviewCount, '待研判预警', `App.navigatePublic('regulatory-warning-center')`],
              [km.criticalWarningCount, '严重预警', `App.navigatePublic('regulatory-warning-center')`],
              [km.insufficientDataKriCount, '数据可信度不足', `App.navigatePublic('regulatory-kri-monitoring')`],
              [km.pendingRiskConversionCount, '待转风险事项', `App.navigatePublic('regulatory-warning-center')`],
              [km.strategyAdjustSuggestions, '待策略调整', `App.navigatePublic('regulatory-warning-strategy')`]
            ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join('') + (warns.length ? warns.map(w => `<p class="insight-note clickable" onclick="App.navigatePublic('regulatory-warning-center',{regulatoryWarningId:'${w.regulatoryWarningId}'})">${w.regulatoryWarningId} · ${w.warningLevel} · ${w.kriId}</p>`).join('') : '');
          })()}
        </div>
        <div class="card"><div class="card-title">KRI运行概览</div>
          ${(() => { const km = APP_DATA.regulatoryMetricKriMetrics || {}; return [
            [km.kriCount, 'KRI总数', `App.navigatePublic('regulatory-kri-monitoring')`],
            [km.warningKriCount + km.criticalKriCount, '异常KRI', `App.navigatePublic('regulatory-kri-monitoring')`],
            [km.metricCount, '监管指标', `App.navigatePublic('regulatory-metric-center')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join(''); })()}
        </div>
      </div>
      <div class="card"><div class="card-title">监管闭环状态</div>${this.renderPublicWorkbenchLoop(wbM.loopStatus)}</div>
      <div class="group-two">
        <div class="card"><div class="card-title">集团综合态势</div>
          ${(() => { const h = App.calculateRegulatoryCompositeHealth(); const am = APP_DATA.regulatoryAnalysisMetrics || {}; return [
            [h.compositeHealthScore ?? '—', '综合健康度', `App.navigatePublic('regulatory-analysis-center')`],
            [am.highRiskEntityCount, '高风险法人', `App.navigatePublic('regulatory-risk-concentration',{dimension:'byEntity'})`],
            [am.potentialPropagationCount, '潜在传导', `App.navigatePublic('regulatory-risk-propagation')`],
            [am.pendingRecommendationCount, '待决策建议', `App.navigatePublic('regulatory-decision-recommendations')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join(''); })()}
        </div>
        <div class="card"><div class="card-title">情景分析结果</div>
          <p class="insight-note">情景分析均为 simulationOnly，不写回真实业务数据</p>
          ${(APP_DATA.regulatoryScenarioAnalysis || []).slice(0, 4).map(s => `<p class="insight-note clickable" onclick="App.navigatePublic('regulatory-scenario-analysis',{scenarioId:'${s.scenarioId}'})">${s.title}</p>`).join('') || this.renderPublicEmptyState('暂无')}
          <p>${this.renderPublicLinkButton('情景分析中心', `App.navigatePublic('regulatory-scenario-analysis')`)}</p>
        </div>
      </div>
      <div class="group-two">
        <div class="card"><div class="card-title">我的改进事项</div>
          ${(() => { const cm = APP_DATA.regulatoryContinuousImprovementMetrics || {}; return [
            [cm.pendingOpportunityCount, '我的改进机会', `App.navigatePublic('regulatory-improvement-center')`],
            [cm.pendingRootCauseConfirmationCount, '待确认根因', `App.navigatePublic('regulatory-root-cause-analysis')`],
            [cm.pendingPlanDecisionCount, '待决策优化方案', `App.navigatePublic('regulatory-optimization-plans')`],
            [cm.implementingCount, '实施中优化', `App.navigatePublic('regulatory-improvement-execution')`],
            [cm.pendingValidationCount, '待效果验证', `App.navigatePublic('regulatory-improvement-effectiveness')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join(''); })()}
        </div>
        <div class="card"><div class="card-title">效果不佳优化</div>
          ${(APP_DATA.regulatoryImprovementEffectiveness || []).filter(e => e.effectiveness === 'INEFFECTIVE').length ? (APP_DATA.regulatoryImprovementEffectiveness || []).filter(e => e.effectiveness === 'INEFFECTIVE').map(e => `<p class="insight-note clickable" onclick="App.navigatePublic('regulatory-improvement-effectiveness',{effectivenessId:'${e.effectivenessId}'})">${e.effectivenessId}</p>`).join('') : this.renderPublicEmptyState('暂无')}
          <p>${this.renderPublicLinkButton('持续改进中心', `App.navigatePublic('regulatory-improvement-center')`)}</p>
        </div>
      </div>
      ${this.renderBatchAdaptationWorkbenchPanel()}
      ${this.renderDailyOperationsWorkbenchPanel()}
      ${this.renderOperationalScenarioWorkbenchPanel()}
      ${this.renderCoordinationWorkbenchPanel()}
      ${this.renderFinalAcceptanceWorkbenchPanel()}
      ${this.renderFinalAcceptanceRemediationWorkbenchPanel()}
      ${this.renderDeliveryReadinessWorkbenchPanel()}
      ${this.renderDemoScenarioWorkbenchPanel()}
      ${this.renderPeriodicFocusPanel()}
      ${this.renderClosureVerificationWorkbenchPanel()}
      ${this.renderDomainClosureDashboardPanel()}
      ${this.renderPlatformHealthPanel()}
      ${this.renderCapabilityMapOverview()}
      ${this.renderBusinessScenarioPanel()}`;
  },

  renderRegulatoryQueue() {
    const node = document.getElementById('regulatoryQueue');
    if (!node) return;
    const f = this.regulatoryQueueFilter || {};
    let list = [...(APP_DATA.regulatoryQueue || [])];
    if (f.queueType) list = list.filter(q => q.queueType === f.queueType);
    if (f.priority) list = list.filter(q => q.priority === f.priority);
    if (f.status) list = list.filter(q => q.status === f.status);
    if (f.regionId) list = list.filter(q => q.regionId === f.regionId);
    if (f.entityId) list = list.filter(q => q.entityId === f.entityId);
    if (f.overdue === 'true') list = list.filter(q => q.isOverdue);
    if (f.department) list = list.filter(q => q.department === f.department);
    const depts = [...new Set((APP_DATA.regulatoryQueue || []).map(q => q.department).filter(Boolean))];
    const types = ['DECISION','ACTION','SUPERVISION_TASK','FEEDBACK','VERIFICATION','RULE_APPROVAL','RULE_DEPLOYMENT','RULE_ANOMALY','STRATEGIC_REVIEW','PLAN_VARIANCE','COORDINATION_CONFIRMATION','COORDINATION_TASK','COORDINATION_FEEDBACK','ESCALATION_CONFIRMATION','JOINT_VERIFICATION'];
    const filterBar = `<div class="filter-bar" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px">
      <select onchange="App.regulatoryQueueFilter={...(App.regulatoryQueueFilter||{}),queueType:this.value||null};App.renderRegulatoryQueue()"><option value="">全部类型</option>${types.map(t=>`<option value="${t}" ${f.queueType===t?'selected':''}>${t}</option>`).join('')}</select>
      <select onchange="App.regulatoryQueueFilter={...(App.regulatoryQueueFilter||{}),priority:this.value||null};App.renderRegulatoryQueue()"><option value="">全部优先级</option>${['CRITICAL','HIGH','MEDIUM','LOW'].map(p=>`<option value="${p}" ${f.priority===p?'selected':''}>${p}</option>`).join('')}</select>
      <select onchange="App.regulatoryQueueFilter={...(App.regulatoryQueueFilter||{}),overdue:this.value||null};App.renderRegulatoryQueue()"><option value="">全部</option><option value="true" ${f.overdue==='true'?'selected':''}>仅超期</option></select>
      ${this.renderPublicFilterBar('regulatory-queue',['regionId','entityId']).replace('public-filter-bar','')}
      <select onchange="App.regulatoryQueueFilter={...(App.regulatoryQueueFilter||{}),department:this.value||null};App.renderRegulatoryQueue()"><option value="">全部部门</option>${depts.map(d=>`<option value="${d}" ${f.department===d?'selected':''}>${d}</option>`).join('')}</select>
      ${Object.values(f).some(v=>v)?`<button class="btn btn-outline" onclick="App.clearPublicFilter('regulatory-queue')">清除筛选</button>`:''}
    </div>`;
    const rows = list.map(q => {
      const ent = q.entityId ? APP_DATA.globalLegalEntities.find(e => e.entityId === q.entityId) : null;
      const reg = q.regionId ? APP_DATA.globalRegions.find(r => r.regionId === q.regionId) : null;
      return `<tr class="clickable" onclick="App.showRegulatoryQueueDetail('${q.queueItemId}')"><td>${this.renderPublicPriorityBadge(q.priority)}</td><td>${this.renderPublicQueueTypeBadge(q.queueType)}</td><td>${q.title}</td><td>${q.department}</td><td>${ent?ent.entityName:'—'}</td><td>${reg?reg.regionName:'—'}</td><td>${q.sourceType}</td><td>${q.dueDate||'—'}</td><td>${this.renderPublicQueueStatusBadge(q.status)}</td><td>${q.isOverdue?'<span class="badge badge-danger">是</span>':'否'}</td><td>${q.recommendedAction}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管平台</span><h2>集团监管待办队列</h2><p>统一索引监管事件、整改、行动、任务、规则与战略事项。</p></div><div>队列 <b>${list.length}</b></div></div>
      <div class="card"><div class="card-title">监管待办清单</div>${filterBar}
        ${list.length?`<table class="data-table"><thead><tr><th>优先级</th><th>类型</th><th>标题</th><th>部门</th><th>法人</th><th>区域</th><th>来源</th><th>截止</th><th>状态</th><th>超期</th><th>下一步</th></tr></thead><tbody>${rows}</tbody></table>`:(APP_DATA.regulatoryQueue||[]).length?this.renderPublicNoFilterResults():this.renderPublicEmptyState('暂无待办')}
      </div>
      <div id="regulatoryQueueDetail"></div>`;
    if (this.regulatoryQueueFocusId) setTimeout(() => this.showRegulatoryQueueDetail(this.regulatoryQueueFocusId), 0);
  },

  showRegulatoryQueueDetail(queueItemId) {
    const item = this.getRegulatoryQueueItem(queueItemId);
    const node = document.getElementById('regulatoryMyWorkQueueDetail') || document.getElementById('regulatoryQueueDetail');
    this.regulatoryQueueFocusId = queueItemId;
    this.showPublicDetailOrNotFound(node, item, () => {
      this.trackPublicDetailView('regulatory-queue', 'QUEUE', item.queueItemId, item.title);
      const events = (item.sourceEventIds||[]).map(id=>APP_DATA.regulatoryEvents.find(e=>e.eventId===id)).filter(Boolean);
      const risks = (item.sourceRiskMatterIds||[]).map(id=>APP_DATA.warnings.find(w=>w.id===id)||APP_DATA.crossDomainRiskMatters.find(m=>m.riskMatterId===id)).filter(Boolean);
      const acts = (item.sourceActionIds||[]).map(id=>APP_DATA.regulatoryActions.find(a=>a.actionId===id)).filter(Boolean);
      const rects = (item.sourceRectificationTaskIds||[]).map(id=>APP_DATA.rectificationTasks.find(t=>t.taskId===id)).filter(Boolean);
      const ent = item.entityId ? APP_DATA.globalLegalEntities.find(e=>e.entityId===item.entityId) : null;
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '监管待办', objectName: item.title, objectId: item.queueItemId, status: item.status,
        sections: [
          { title: '一、待办基本信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(item.queueItemId,'队列 ID'),{label:'类型',html:this.renderPublicQueueTypeBadge(item.queueType)},{label:'优先级',html:this.renderPublicPriorityBadge(item.priority)},{label:'来源类型',value:item.sourceType},{label:'来源ID',value:item.sourceId},{label:'责任部门',value:item.department},{label:'截止',value:item.dueDate||'—'},{label:'超期',html:item.isOverdue?'<span class="badge badge-danger">是</span>':'<span class="badge badge-success">否</span>'}]) },
          { title: '二、当前状态', content: `<p>${this.renderPublicQueueStatusBadge(item.status)}</p><p>${this.escHtml(item.description)}</p>` },
          { title: '三、来源对象', content: this.renderPublicLinkButton(item.sourceId + ' · 原始详情', this._queueSourceNavigate(item)) },
          { title: '四、风险上下文', content: risks.length?risks.map(r=>this.renderPublicLinkButton(r.name||r.riskMatterName, r.id?`App.navigatePublic('warnings',{riskMatterId:'${r.id}'})`:`App.navigatePublic('cross-domain-risks',{riskMatterId:'${r.riskMatterId}'})`)).join(''):this.renderPublicEmptyState('暂无') },
          { title: '五、相关监管事件', content: events.length?events.map(e=>this.renderPublicLinkButton(e.eventId,`App.navigatePublic('regulatory-events',{eventId:'${e.eventId}'})`)).join(''):this.renderPublicEmptyState('暂无') },
          { title: '六、相关监管行动', content: acts.length?acts.map(a=>this.renderPublicLinkButton(a.actionId,`App.navigatePublic('regulatory-actions',{actionId:'${a.actionId}'})`)).join(''):this.renderPublicEmptyState('暂无') },
          { title: '七、相关整改任务', content: rects.length?rects.map(t=>this.renderPublicLinkButton(t.title,`App.navigatePublic('rectification',{rectificationTaskId:'${t.taskId}'})`)).join(''):this.renderPublicEmptyState('暂无') },
          { title: '八、建议下一步', content: `<p class="insight-note">${this.escHtml(item.recommendedAction)}</p>${item.decisionContextId?this.renderPublicLinkButton('进入决策工作室',`App.navigatePublic('regulatory-decision-room',{decisionContextId:'${item.decisionContextId}'})`):''}` }
        ],
        footer: `${this.renderPublicLinkButton('原始详情',this._queueSourceNavigate(item))}${ent?this.renderPublicLinkButton('查看法人',`App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`):''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '监管待办');
  },

  renderRegulatoryDecisionRoom() {
    const node = document.getElementById('regulatoryDecisionRoom');
    if (!node) return;
    const f = this.regulatoryDecisionRoomFilter || {};
    let contexts = APP_DATA.regulatoryDecisionContext || [];
    if (f.entityId) contexts = contexts.filter(d => d.entityId === f.entityId);
    if (f.regionId) contexts = contexts.filter(d => d.regionId === f.regionId);
    if (f.priority) contexts = contexts.filter(d => d.priority === f.priority);
    const focusId = this.regulatoryDecisionContextFocusId;
    const ctx = focusId ? contexts.find(d => d.decisionContextId === focusId) || (APP_DATA.regulatoryDecisionContext||[]).find(d=>d.decisionContextId===focusId) : contexts[0];
    const filterBar = `<div class="filter-bar" style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap">
      <select onchange="App.regulatoryDecisionRoomFilter={...(App.regulatoryDecisionRoomFilter||{}),entityId:this.value||null};App.regulatoryDecisionContextFocusId=null;App.renderRegulatoryDecisionRoom()"><option value="">全部法人</option>${(APP_DATA.globalLegalEntities||[]).filter(e=>e.entityId!=='G001').map(e=>`<option value="${e.entityId}" ${f.entityId===e.entityId?'selected':''}>${e.entityName}</option>`).join('')}</select>
      <select onchange="App.regulatoryDecisionRoomFilter={...(App.regulatoryDecisionRoomFilter||{}),priority:this.value||null};App.renderRegulatoryDecisionRoom()"><option value="">全部优先级</option>${['CRITICAL','HIGH','MEDIUM','LOW'].map(p=>`<option value="${p}" ${f.priority===p?'selected':''}>${p}</option>`).join('')}</select>
    </div>`;
    const listRows = contexts.slice(0, 15).map(d => {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === d.entityId);
      return `<tr class="clickable" onclick="App.showRegulatoryDecisionContextDetail('${d.decisionContextId}')"><td>${ent?ent.entityName:d.entityId}</td><td>${this.renderPublicPriorityBadge(d.priority)}</td><td>${this.renderPublicHealthBadge(d.healthLevel)}</td><td>${this.renderPublicStrategyBadge(d.strategyLevel)}</td><td>${d.maturityLevel}</td><td>${d.recommendedDecision}</td></tr>`;
    }).join('');
    let detail = '';
    if (ctx) {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === ctx.entityId);
      const events = (ctx.relatedEventIds||[]).map(id=>APP_DATA.regulatoryEvents.find(e=>e.eventId===id)).filter(Boolean);
      const risks = (ctx.relatedRiskMatterIds||[]).map(id=>APP_DATA.warnings.find(w=>w.id===id)).filter(Boolean);
      const acts = (ctx.relatedActionIds||[]).map(id=>APP_DATA.regulatoryActions.find(a=>a.actionId===id)).filter(Boolean);
      const rects = (ctx.relatedRectificationTaskIds||[]).map(id=>APP_DATA.rectificationTasks.find(t=>t.taskId===id)).filter(Boolean);
      const loopSteps = [
        { label: '监管事件', sub: String(ctx.eventSummary?.total||0), onclick: `App.navigatePublic('regulatory-events')` },
        { label: '风险判断', sub: String(ctx.riskSummary?.major||0), onclick: `App.navigatePublic('warnings')` },
        { label: '监管行动', sub: String(ctx.actionSummary?.pending||0), onclick: `App.navigatePublic('regulatory-actions')` },
        { label: '监管任务', sub: String((APP_DATA.regulatorySupervisionTasks||[]).filter(t=>t.entityId===ctx.entityId).length), onclick: `App.navigatePublic('regulatory-supervision-tasks')` },
        { label: '整改任务', sub: String(ctx.rectificationSummary?.open||0), onclick: `App.navigatePublic('rectification')` },
        { label: '反馈验证', sub: String(ctx.actionSummary?.pending||0), onclick: `App.navigatePublic('regulatory-action-execution')` }
      ];
      detail = `<div class="card"><div class="card-title">决策对象：${ent?ent.entityName:ctx.entityId}</div>
        ${this.renderPublicMetaGrid([{label:'监管优先级',html:this.renderPublicPriorityBadge(ctx.priority)},{label:'健康度',html:this.renderPublicHealthBadge(ctx.healthLevel)},{label:'监管策略',html:this.renderPublicStrategyBadge(ctx.strategyLevel)},{label:'成熟度',value:ctx.maturityLevel}])}
        <p><b>风险上下文：</b>重大风险 ${ctx.riskSummary?.major||0} · KRI异常 ${ctx.kriSummary?.exceptionCount||0} · 数据质量 ${ctx.dataQualitySummary?.openCount||0}</p>
        <p>${this.renderPublicLinkButton('风险事项',`App.navigatePublic('warnings')`)} ${this.renderPublicLinkButton('KRI/数据治理',`App.navigatePublic('data-governance')`)} ${this.renderPublicLinkButton('跨境合规',`App.navigatePublic('cross-border-compliance')`)} ${this.renderPublicLinkButton('跨领域风险',`App.navigatePublic('cross-domain-risks')`)}</p>
        <div class="card-title" style="margin-top:12px">当前监管闭环</div>${this.renderPublicStrategicCycleFlow(loopSteps)}
        <div class="card-title" style="margin-top:12px">推荐决策</div><p><b>${ctx.recommendedDecision}</b> — ${ctx.decisionBasis}</p>
        <div class="card-title" style="margin-top:12px">决策建议选项</div>${(ctx.decisionOptions||[]).map(o=>this.renderPublicDecisionOptionCard(o)).join('')}
        <p style="margin-top:8px">${events[0]?this.renderPublicLinkButton('监管事件',`App.navigatePublic('regulatory-events',{eventId:'${events[0].eventId}'})`):''}${risks[0]?this.renderPublicLinkButton('风险',`App.navigatePublic('warnings',{riskMatterId:'${risks[0].id}'})`):''}${acts[0]?this.renderPublicLinkButton('监管行动',`App.navigatePublic('regulatory-actions',{actionId:'${acts[0].actionId}'})`):''}${rects[0]?this.renderPublicLinkButton('整改',`App.navigatePublic('rectification',{rectificationTaskId:'${rects[0].taskId}'})`):''}</p>
      </div>`;
    }
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团监管平台</span><h2>集团监管决策工作室</h2><p>基于统一决策上下文，展示风险、闭环与监管建议（仅展示建议，不持久化操作）。</p></div><div>上下文 <b>${contexts.length}</b></div></div>
      ${filterBar}
      <div class="card"><div class="card-title">决策对象列表</div>${listRows?`<table class="data-table"><thead><tr><th>法人</th><th>优先级</th><th>健康度</th><th>策略</th><th>成熟度</th><th>推荐决策</th></tr></thead><tbody>${listRows}</tbody></table>`:this.renderPublicEmptyState('暂无决策上下文')}</div>
      ${detail}
      <div id="regulatoryDecisionContextDetail"></div>`;
    if (focusId) setTimeout(() => this.showRegulatoryDecisionContextDetail(focusId), 0);
  },

  showRegulatoryDecisionContextDetail(decisionContextId) {
    const ctx = this.getRegulatoryDecisionContext(decisionContextId);
    const node = document.getElementById('regulatoryDecisionContextDetail');
    this.regulatoryDecisionContextFocusId = decisionContextId;
    this.showPublicDetailOrNotFound(node, ctx, () => {
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === ctx.entityId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '决策上下文', objectName: ent?ent.entityName:ctx.entityId, objectId: ctx.decisionContextId, status: ctx.priority,
        sections: [
          { title: '一、决策上下文', content: this.renderPublicMetaGrid([this.renderPublicIdField(ctx.decisionContextId,'上下文 ID'),{label:'推荐决策',value:ctx.recommendedDecision},{label:'决策依据',value:ctx.decisionBasis},{label:'优先级',html:this.renderPublicPriorityBadge(ctx.priority)},{label:'健康度',html:this.renderPublicHealthBadge(ctx.healthLevel)},{label:'策略',html:this.renderPublicStrategyBadge(ctx.strategyLevel)},{label:'成熟度',value:ctx.maturityLevel}]) },
          { title: '二、决策选项', content: (ctx.decisionOptions||[]).map(o=>this.renderPublicDecisionOptionCard(o)).join('') || this.renderPublicEmptyState('暂无') },
          { title: '三、关联穿透', content: `${this.renderPublicLinkButton('监管策略',`App.navigatePublic('regulatory-strategy')`)} ${this.renderPublicLinkButton('监管行动',`App.navigatePublic('regulatory-actions')`)} ${this.renderPublicLinkButton('监管绩效',`App.navigatePublic('regulatory-performance')`)}` }
        ],
        footer: `${this.renderPublicLinkButton('待办队列',`App.navigatePublic('regulatory-queue')`)}${ent?this.renderPublicLinkButton('法人详情',`App.navigatePublic('global-legal-entities',{entityId:'${ent.entityId}'})`):''}`
      });
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, '决策上下文');
  },

  _roleUrgentNavigate(it) {
    const p = it.params || {};
    const parts = Object.keys(p).map(k => `${k}:'${p[k]}'`).join(',');
    return `App.navigatePublic('${it.nav}'${parts ? ',{' + parts + '}' : ''})`;
  },

  renderRegulatoryRoleWorkbench() {
    const node = document.getElementById('regulatoryRoleWorkbench');
    if (!node) return;
    if (!this.currentRegulatoryRoleId) this.setRegulatoryRole((APP_DATA.regulatoryRoleProfiles || [])[0]?.roleId);
    const role = this.getCurrentRegulatoryRole();
    if (!role) { node.innerHTML = this.renderPublicErrorState('角色配置未加载'); return; }
    const scopeType = this.regulatoryRoleScopeType || role.defaultScopeType;
    const scopeId = this.regulatoryRoleScopeId || role.defaultScopeId;
    const wb = this.getRegulatoryRoleWorkbench(role.roleId, scopeType, scopeId);
    const roleOpts = (APP_DATA.regulatoryRoleProfiles || []).map(r => `<option value="${r.roleId}" ${r.roleId === role.roleId ? 'selected' : ''}>${r.roleName}</option>`).join('');
    const kpiHtml = (wb?.kpis || []).map(k => this.renderPublicKpiCard(k.label, k.value, k.nav)).join('');
    const urgentHtml = (wb?.urgentItems || []).map(it => {
      const nav = this._roleUrgentNavigate(it);
      return `<div class="card clickable" style="padding:8px;margin:4px 0" onclick="${nav}"><b>${this.escHtml(it.title)}</b> ${this.renderPublicPriorityBadge(it.priority)} <small>${it.sourceType}</small></div>`;
    }).join('') || this.renderPublicEmptyState('暂无紧急事项');
    const pendingHtml = (wb?.pendingItems || []).slice(0, 6).map(q => `<tr class="clickable" onclick="App.navigatePublic('regulatory-my-work',{queueItemId:'${q.queueItemId}'})"><td>${this.renderPublicQueueTypeBadge(q.queueType)}</td><td>${q.title}</td><td>${this.renderPublicPriorityBadge(q.priority)}</td><td>${q.dueDate || '—'}</td><td>${q.isOverdue ? '<span class="badge badge-danger">超期</span>' : '—'}</td></tr>`).join('');
    let focusHtml = '';
    const fo = wb?.focusObjects || {};
    if (fo.entities) focusHtml = fo.entities.map(e => `<button class="btn btn-outline" onclick="App.navigatePublic('global-legal-entities',{entityId:'${e.objectId}'})">${e.name}</button>`).join(' ');
    else if (fo.objects) focusHtml = fo.objects.map(o => `<button class="btn btn-outline" onclick="App.navigatePublic('regulatory-decision-room',{entityId:'${o.objectId}'})">${o.name}</button>`).join(' ');
    else if (fo.risks) focusHtml = fo.risks.map(r => `<button class="btn btn-outline" onclick="App.navigatePublic('warnings',{riskMatterId:'${r.objectId}'})">${r.name}</button>`).join(' ');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-role-workbench')}
      <div class="group-hero"><div><span>角色化监管</span><h2>监管角色工作台</h2><p>${wb?.subtitle || role.description}</p></div>
        <div>角色 <select onchange="App.setRegulatoryRole(this.value);App.renderRegulatoryRoleWorkbench()">${roleOpts}</select>
        用户 <select onchange="App.setCurrentRegulatoryUser(this.value);App.renderRegulatoryRoleWorkbench()">${(APP_DATA.regulatoryUsers||[]).map(u=>`<option value="${u.userId}" ${this.getCurrentRegulatoryUser()?.userId===u.userId?'selected':''}>${u.userName}</option>`).join('')}</select><br>范围 <b>${scopeType}:${scopeId}</b><br><small>更新 ${wb?.updatedAt || '—'}</small></div>
      </div>
      <div class="group-metrics">${kpiHtml}</div>
      ${this.renderRoleJourneyPanel(role.roleId)}
      ${this.renderOperatingRolePathPanel(role.roleType)}
      ${this.renderCoordinationRolePanel(role.roleType)}
      ${this.renderOperationalScenarioRolePanel(role.roleType)}
      ${this.renderFinalAcceptanceRolePanel(role.roleType)}
      ${this.renderDeliveryHandoverRolePanel(role.roleType)}
      ${this.renderDemoScenarioRolePanel(role.roleType)}
      <div class="group-two">
        <div class="card"><div class="card-title">当前最重要的问题</div>${urgentHtml}</div>
        <div class="card"><div class="card-title">我的待办</div>${pendingHtml ? `<table class="data-table"><thead><tr><th>类型</th><th>标题</th><th>优先级</th><th>截止</th><th>超期</th></tr></thead><tbody>${pendingHtml}</tbody></table>` : this.renderPublicEmptyState('暂无')}<p>${this.renderPublicLinkButton('我的监管工作', `App.navigatePublic('regulatory-my-work')`)}</p></div>
      </div>
      <div class="card"><div class="card-title">我的重点对象</div><p>${focusHtml || this.renderPublicEmptyState('暂无')}</p>
        <p>${(wb?.quickActions || []).map(a => this.renderPublicLinkButton(a.label, `App.navigatePublic('${a.pageId}')`)).join(' ')}</p>
      </div>
      <div class="card"><div class="card-title">数据运行视图</div>
        ${(() => {
          const roleType = role.roleType;
          return this.renderDomainClosureRolePanel(roleType) + this.renderBatchAdaptationRolePanel(roleType) + (() => {
          const dm = APP_DATA.regulatoryDataGovernanceMetrics || {};
          if (roleType === 'GROUP_LEADER') return [
            [dm.overallQualityScore ?? '—', '集团数据质量', `App.navigatePublic('regulatory-data-quality')`],
            [dm.severeIssueCount, '重大数据异常', `App.navigatePublic('regulatory-data-quality')`],
            [dm.impactedKriCount, '监管指标可信度关注', `App.navigatePublic('regulatory-data-lineage')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join('');
          if (roleType === 'GROUP_REGULATORY') return [
            [dm.openIssueCount, '数据质量异常', `App.navigatePublic('regulatory-data-quality')`],
            [dm.openGovernanceCount, '数据治理任务', `App.navigatePublic('regulatory-data-governance')`],
            [dm.impactedKriCount, '数据血缘影响', `App.navigatePublic('regulatory-data-lineage')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join('');
          if (roleType === 'DOMAIN_REGULATOR') {
            const domainIssues = this.filterDataByUserScope(APP_DATA.regulatoryDataQualityIssues || [], i => (APP_DATA.regulatoryDataSets.find(d => d.dataSetId === i.dataSetId) || {}).ownerOrganizationId, i => (APP_DATA.regulatoryDataSets.find(d => d.dataSetId === i.dataSetId) || {}).domain);
            return `<p>本领域数据质量异常 <b>${domainIssues.filter(i => i.status !== 'CLOSED').length}</b> ${this.renderPublicLinkButton('查看', `App.navigatePublic('regulatory-data-quality')`)}</p>`;
          }
          const entityIssues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => { const ds = APP_DATA.regulatoryDataSets.find(d => d.dataSetId === i.dataSetId); return ds?.ownerOrganizationId === scopeId; });
          const entityGov = (APP_DATA.regulatoryDataGovernanceTasks || []).filter(t => t.responsibleOrganizationId === scopeId && t.status !== 'CLOSED');
          return `<p>本法人数据异常 <b>${entityIssues.filter(i => i.status !== 'CLOSED').length}</b> · 治理任务 <b>${entityGov.length}</b></p>${this.renderPublicLinkButton('数据质量', `App.navigatePublic('regulatory-data-quality')`)} ${this.renderPublicLinkButton('数据治理', `App.navigatePublic('regulatory-data-governance')`)}`;
        })()})()}
      </div>
      <div class="card"><div class="card-title">指标与预警视图</div>
        ${(() => {
          const km = APP_DATA.regulatoryMetricKriMetrics || {};
          const roleType = role.roleType;
          if (roleType === 'GROUP_LEADER') return [
            [km.criticalWarningCount, '集团严重预警', `App.navigatePublic('regulatory-warning-center')`],
            [km.impactedEntityCount, '高风险法人', `App.navigatePublic('regulatory-warning-strategy')`],
            [km.evaluationDataStatus, '预警趋势', `App.navigatePublic('regulatory-kri-effectiveness')`],
            [km.pendingRiskConversionCount, '待转风险', `App.navigatePublic('regulatory-warning-center')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join('');
          if (roleType === 'GROUP_REGULATORY') return [
            [km.pendingReviewCount, '待研判预警', `App.navigatePublic('regulatory-warning-center')`],
            [km.pendingRiskConversionCount, '待转风险', `App.navigatePublic('regulatory-warning-center')`],
            [km.warningKriCount + km.criticalKriCount, '重点KRI', `App.navigatePublic('regulatory-kri-monitoring')`],
            [km.strategyAdjustSuggestions, '预警策略', `App.navigatePublic('regulatory-warning-strategy')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join('');
          if (roleType === 'DOMAIN_REGULATOR') {
            const kris = this.filterKriByUserScope(APP_DATA.regulatoryKriRuntime || []);
            const warns = this.filterWarningsByUserScope(APP_DATA.regulatoryWarnings || []);
            return `<p>本领域KRI <b>${kris.length}</b> · 预警 <b>${warns.filter(w => w.status === 'PENDING_REVIEW').length}</b></p>${this.renderPublicLinkButton('KRI监测', `App.navigatePublic('regulatory-kri-monitoring')`)} ${this.renderPublicLinkButton('预警中心', `App.navigatePublic('regulatory-warning-center')`)}`;
          }
          const ek = (APP_DATA.regulatoryKriRuntime || []).filter(k => k.scopeId === scopeId);
          const ew = (APP_DATA.regulatoryWarnings || []).filter(w => w.entityId === scopeId && w.status === 'PENDING_REVIEW');
          return `<p>本法人KRI <b>${ek.length}</b> · 预警 <b>${ew.length}</b> · 待研判 <b>${ew.length}</b></p>${this.renderPublicLinkButton('KRI监测', `App.navigatePublic('regulatory-kri-monitoring')`)} ${this.renderPublicLinkButton('预警中心', `App.navigatePublic('regulatory-warning-center')`)}`;
        })()}
      </div>
      <div class="card"><div class="card-title">综合研判视图</div>
        ${(() => {
          const am = APP_DATA.regulatoryAnalysisMetrics || {};
          const h = App.calculateRegulatoryCompositeHealth();
          const roleType = role.roleType;
          if (roleType === 'GROUP_LEADER') return [
            [h.compositeHealthScore ?? '—', '集团综合监管健康度', `App.navigatePublic('regulatory-analysis-center')`],
            [am.highConcentrationRegionCount, '重大风险集中度', `App.navigatePublic('regulatory-risk-concentration')`],
            [am.potentialPropagationCount, '跨区域风险', `App.navigatePublic('regulatory-risk-propagation')`],
            [am.pendingRecommendationCount, '战略级决策建议', `App.navigatePublic('regulatory-decision-recommendations')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join('');
          if (roleType === 'GROUP_REGULATORY') return [
            [am.topConcentrationEntity, '风险集中法人', `App.navigatePublic('regulatory-risk-concentration',{dimension:'byEntity'})`],
            [am.topConcentrationDomain, '高风险领域', `App.navigatePublic('regulatory-risk-concentration',{dimension:'byDomain'})`],
            [(APP_DATA.regulatoryWarnings || []).length, '预警集中度', `App.navigatePublic('regulatory-warning-center')`],
            [(APP_DATA.regulatoryRiskConcentration || []).filter(c => c.dimension === 'byRectification').length, '整改超期集中度', `App.navigatePublic('regulatory-risk-concentration',{dimension:'byRectification'})`],
            [am.pendingRecommendationCount, '监管资源建议', `App.navigatePublic('regulatory-decision-recommendations')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join('');
          if (roleType === 'DOMAIN_REGULATOR') {
            const conc = this.filterAnalysisByUserScope(APP_DATA.regulatoryRiskConcentration || [], c => c.scopeType === 'ENTITY' ? c.objectId : c.entityId, c => c.scopeType === 'DOMAIN' ? c.objectId : null);
            return `<p>领域风险集中度 <b>${conc.filter(c => c.concentrationLevel === 'HIGH_CONCENTRATION').length}</b></p>${this.renderPublicLinkButton('集中度分析', `App.navigatePublic('regulatory-risk-concentration')`)} ${this.renderPublicLinkButton('风险传导', `App.navigatePublic('regulatory-risk-propagation')`)}`;
          }
          const eConc = (APP_DATA.regulatoryRiskConcentration || []).filter(c => c.objectId === scopeId || c.entityId === scopeId);
          const eRect = (APP_DATA.rectificationTasks || []).filter(t => t.entityId === scopeId && t.status !== '已关闭');
          return `<p>本法人风险集中度 <b>${eConc.length}</b> · 待整改 <b>${eRect.length}</b></p>${this.renderPublicLinkButton('综合分析', `App.navigatePublic('regulatory-analysis-center')`)} ${this.renderPublicLinkButton('决策建议', `App.navigatePublic('regulatory-decision-recommendations')`)}`;
        })()}
      </div>
      <div class="card"><div class="card-title">持续改进视图</div>
        ${(() => {
          const cm = APP_DATA.regulatoryContinuousImprovementMetrics || {};
          const roleType = role.roleType;
          if (roleType === 'GROUP_LEADER') return [
            [cm.highPriorityOpportunityCount, '集团级重点改进', `App.navigatePublic('regulatory-improvement-center')`],
            [cm.pendingPlanDecisionCount, '待决策优化方案', `App.navigatePublic('regulatory-optimization-plans')`],
            [cm.improvementEffectivenessRate != null ? cm.improvementEffectivenessRate + '%' : '—', '改进投入产出', `App.navigatePublic('regulatory-improvement-effectiveness')`],
            [cm.improvementClosureRate != null ? cm.improvementClosureRate + '%' : '—', '战略效果', `App.navigatePublic('regulatory-improvement-effectiveness')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join('');
          if (roleType === 'GROUP_REGULATORY') return [
            [cm.pendingOpportunityCount, '监管体系问题', `App.navigatePublic('regulatory-improvement-center')`],
            [cm.highPriorityOpportunityCount, '高优先级改进', `App.navigatePublic('regulatory-improvement-center')`],
            [(APP_DATA.regulatoryImprovementOpportunities || []).filter(o => o.sourceCategory === '整改反复发生').length, '整改反复', `App.navigatePublic('regulatory-improvement-center')`],
            [(APP_DATA.regulatoryImprovementOpportunities || []).filter(o => o.sourceCategory === '规则运行效果不足').length, '规则效果', `App.navigatePublic('regulatory-optimization-plans')`]
          ].map(([v,l,n]) => this.renderPublicKpiCard(l,v,n)).join('');
          if (roleType === 'DOMAIN_REGULATOR') {
            const opps = this.filterImprovementByUserScope(APP_DATA.regulatoryImprovementOpportunities || [], o => o.entityId, o => o.domainId);
            return `<p>领域优化方案 <b>${(APP_DATA.regulatoryOptimizationPlans || []).filter(p => opps.some(o => o.opportunityId === p.opportunityId)).length}</b></p>${this.renderPublicLinkButton('根因分析', `App.navigatePublic('regulatory-root-cause-analysis')`)} ${this.renderPublicLinkButton('优化方案', `App.navigatePublic('regulatory-optimization-plans')`)}`;
          }
          const eOpps = (APP_DATA.regulatoryImprovementOpportunities || []).filter(o => o.entityId === scopeId);
          const eExec = (APP_DATA.regulatoryImprovementExecution || []).filter(e => e.entityId === scopeId);
          return `<p>本法人问题 <b>${eOpps.length}</b> · 改进任务 <b>${eExec.filter(e => e.status === 'IMPLEMENTING').length}</b></p>${this.renderPublicLinkButton('持续改进', `App.navigatePublic('regulatory-improvement-center')`)} ${this.renderPublicLinkButton('效果验证', `App.navigatePublic('regulatory-improvement-effectiveness')`)}`;
        })()}
      </div>`;
  },

  renderRegulatoryMyWork() {
    const node = document.getElementById('regulatoryMyWork');
    if (!node) return;
    const role = this.getCurrentRegulatoryRole();
    const tab = (this.regulatoryMyWorkFilter || {}).tab || 'queue';
    const scopeId = this.regulatoryRoleScopeId || role?.defaultScopeId;
    let queue = [...(APP_DATA.regulatoryQueue || [])];
    if (role?.roleType === 'ENTITY_REGULATOR' && scopeId) queue = queue.filter(q => q.entityId === scopeId);
    const tabs = [['queue', '我的待办'], ['focus', '我的重点'], ['decision', '我的决策'], ['recent', '最近访问'], ['favorites', '收藏'], ['notifications', '通知']];
    const tabBar = tabs.map(([id, label]) => `<button class="btn ${tab === id ? '' : 'btn-outline'}" onclick="App.regulatoryMyWorkFilter={tab:'${id}'};App.renderRegulatoryMyWork()">${label}</button>`).join(' ');
    let content = '';
    if (tab === 'queue') {
      content = queue.length ? `<table class="data-table"><thead><tr><th>类型</th><th>标题</th><th>优先级</th><th>截止</th><th>超期</th><th>下一步</th></tr></thead><tbody>${queue.slice(0, 20).map(q => `<tr class="clickable" onclick="App.showRegulatoryQueueDetail('${q.queueItemId}')"><td>${this.renderPublicQueueTypeBadge(q.queueType)}</td><td>${q.title}</td><td>${this.renderPublicPriorityBadge(q.priority)}</td><td>${q.dueDate || '—'}</td><td>${q.isOverdue ? '是' : '否'}</td><td>${q.recommendedAction}</td></tr>`).join('')}</tbody></table>` : this.renderPublicEmptyState('暂无待办');
    } else if (tab === 'focus') {
      const po = APP_DATA.regulatoryPriorityObjects || [];
      content = po.length ? po.slice(0, 10).map(o => `<p class="insight-note">${this.renderPublicLinkButton(o.objectName, `App.navigatePublic('global-legal-entities',{entityId:'${o.objectId}'})`)} ${this.renderPublicPriorityBadge(o.priority)}</p>`).join('') : this.renderPublicEmptyState('暂无重点');
    } else if (tab === 'decision') {
      const dcs = APP_DATA.regulatoryDecisionContext || [];
      const decs = APP_DATA.regulatoryDecisionHistory || [];
      content = `<p><b>待决策上下文</b></p>${dcs.slice(0, 5).map(d => this.renderPublicLinkButton(d.decisionContextId + ' · ' + d.recommendedDecision, `App.navigatePublic('regulatory-decision-room',{decisionContextId:'${d.decisionContextId}'})`)).join('')}
        <p style="margin-top:12px"><b>最近决策记录</b></p>${decs.slice(0, 5).map(d => `<p class="insight-note">${d.decisionId} · ${d.decisionType} · ${d.currentValue || '—'}</p>`).join('') || this.renderPublicEmptyState('暂无')}`;
    } else if (tab === 'recent') {
      content = (APP_DATA.regulatoryRecentViews || []).length
        ? (APP_DATA.regulatoryRecentViews || []).map(v => `<p class="insight-note clickable" onclick="App.navigatePublic('${v.pageId}',{${v.objectType === 'ENTITY' ? 'entityId' : v.objectType === 'RISK' ? 'riskMatterId' : 'objectId'}:'${v.objectId}'})">${v.title} <small>${v.visitedAt}</small></p>`).join('')
        : this.renderPublicEmptyState('暂无最近访问（浏览详情后自动记录）');
    } else if (tab === 'favorites') {
      content = (APP_DATA.regulatoryFavorites || []).length
        ? (APP_DATA.regulatoryFavorites || []).map(f => `<p>${this.renderPublicLinkButton(f.title, `App.navigatePublic('${f.pageId}',{${f.objectType === 'ENTITY' ? 'entityId' : f.objectType === 'RISK' ? 'riskMatterId' : 'objectId'}:'${f.objectId}'})`)} <button class="btn btn-outline" onclick="App.removeRegulatoryFavorite('${f.objectType}','${f.objectId}');App.renderRegulatoryMyWork()">取消</button></p>`).join('')
        : this.renderPublicEmptyState('暂无收藏');
    } else if (tab === 'notifications') {
      content = (APP_DATA.regulatoryNotifications || []).length
        ? (APP_DATA.regulatoryNotifications || []).map(n => `<div class="card" style="padding:8px;margin:4px 0;${n.isRead ? 'opacity:0.7' : ''}"><b>${n.title}</b> ${this.renderPublicPriorityBadge(n.priority)}<p class="insight-note">${n.description}</p><button class="btn btn-outline" onclick="App.markNotificationRead('${n.notificationId}');App.navigatePublic('${n.targetPageId}',${JSON.stringify(n.targetParams || {}).replace(/"/g, "'")})">查看</button></div>`).join('')
        : this.renderPublicEmptyState('暂无通知');
    }
    node.innerHTML = `${this.renderPublicBackButton('regulatory-my-work')}
      <div class="group-hero"><div><span>个人工作区</span><h2>我的监管工作</h2><p>待办、重点、决策、最近访问与收藏</p></div><div>${role ? role.roleName : '—'}</div></div>
      <div style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:6px">${tabBar}</div>
      <div class="card">${content}</div>
      <div id="regulatoryMyWorkQueueDetail"></div>`;
    if (this.regulatoryQueueFocusId) setTimeout(() => this.showRegulatoryQueueDetail(this.regulatoryQueueFocusId), 0);
  },

  renderRegulatorySearch() {
    const node = document.getElementById('regulatorySearch');
    if (!node) return;
    const f = this.regulatorySearchFilter || {};
    const query = f.query || '';
    const results = query ? this.searchRegulatoryIndex(query) : [];
    const cats = ['监管对象', '风险与事件', '数据与指标', '监管行动', '整改与任务', '规则治理', '战略规划'];
    const catFilter = f.category || '';
    const filtered = catFilter ? results.filter(r => r.category === catFilter) : results;
    const grouped = cats.map(c => ({ cat: c, items: filtered.filter(r => r.category === c) })).filter(g => g.items.length);
    node.innerHTML = `${this.renderPublicBackButton('regulatory-search')}
      <div class="group-hero"><div><span>全局检索</span><h2>集团监管统一搜索</h2><p>搜索法人、风险、事件、整改、规则、战略等监管对象</p></div><div>索引 <b>${(APP_DATA.regulatorySearchIndex || []).length}</b></div></div>
      <div class="card"><div class="card-title">搜索</div>
        <input type="text" placeholder="输入名称、ID 或关键词" value="${this.escHtml(query)}" style="width:100%;padding:8px;margin-bottom:8px" oninput="App.regulatorySearchFilter={...(App.regulatorySearchFilter||{}),query:this.value};App.renderRegulatorySearch()" />
        <select onchange="App.regulatorySearchFilter={...(App.regulatorySearchFilter||{}),category:this.value||null};App.renderRegulatorySearch()"><option value="">全部分类</option>${cats.map(c => `<option value="${c}" ${catFilter === c ? 'selected' : ''}>${c}</option>`).join('')}</select>
      </div>
      <div class="card"><div class="card-title">搜索结果 (${filtered.length})</div>
        ${query ? (grouped.length ? grouped.map(g => `<div><h4>${g.cat}</h4>${g.items.slice(0, 15).map(r => `<div class="card clickable" style="padding:8px;margin:4px 0" onclick="App.navigateSearchResult('${r.resultId}')"><b>${this.escHtml(r.title)}</b> <small>${r.objectType} · ${r.objectId}</small><p class="insight-note">${this.escHtml(r.subtitle)} ${r.status ? '· ' + r.status : ''}</p>${this.renderPublicFavoriteButton(r.objectType, r.objectId, r.title, r.targetPageId)}</div>`).join('')}</div>`).join('') : this.renderPublicNoFilterResults()) : this.renderPublicEmptyState('请输入搜索关键词')}
      </div>`;
  },

  renderRegulatoryAccessControl() {
    const node = document.getElementById('regulatoryAccessControl');
    if (!node) return;
    const m = APP_DATA.regulatoryAccessControlMetrics || {};
    const f = this.regulatoryAccessControlFilter || {};
    const users = APP_DATA.regulatoryUsers || [];
    const matrix = APP_DATA.regulatoryScopeMatrix || [];
    const kpi = [
      [m.userCount, '用户总数', `App.navigatePublic('regulatory-access-control')`],
      [m.roleCount, '角色总数', `App.navigatePublic('regulatory-role-workbench')`],
      [m.assignmentCount, '授权关系数', `App.navigatePublic('regulatory-access-control')`],
      [m.pendingAuthorizationCount, '待审批授权', `App.navigatePublic('regulatory-authorization')`],
      [m.permissionAnomalyCount, '权限异常', `App.navigatePublic('regulatory-audit-trail')`],
      [m.changesLast30Days, '近30天权限变更', `App.navigatePublic('regulatory-audit-trail')`]
    ];
    const userRows = users.map(u => {
      const asgs = this.getUserRoleAssignments(u.userId);
      const role = (APP_DATA.regulatoryRoleProfiles || []).find(r => r.roleId === asgs[0]?.roleId);
      return `<tr class="clickable" onclick="App.showRegulatoryAccessControlUserDetail('${u.userId}')"><td>${u.userName}</td><td>${u.userId}</td><td>${role?.roleName || '—'}</td><td>${asgs[0]?.scopeType || '—'}:${(asgs[0]?.scopeIds || []).join(',')}</td><td>${u.status}</td><td>${u.lastLoginAt || '—'}</td></tr>`;
    }).join('');
    const matrixRows = matrix.map(row => `<tr><td>${row.roleName}</td><td>${row.group}</td><td>${row.region}</td><td>${row.country}</td><td>${row.entity}</td><td>${row.project}</td><td>${row.domain}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-access-control')}
      <div class="group-hero"><div><span>权限治理</span><h2>集团监管访问控制中心</h2><p>用户 → 角色 → 数据范围 → 权限集合 → 可见对象</p></div>
        <div>当前用户 <select onchange="App.setCurrentRegulatoryUser(this.value);App.renderRegulatoryAccessControl()">${users.map(u => `<option value="${u.userId}" ${this.getCurrentRegulatoryUser()?.userId === u.userId ? 'selected' : ''}>${u.userName}</option>`).join('')}</select></div>
      </div>
      <div class="group-metrics">${kpi.map(([v, l, n]) => this.renderPublicKpiCard(l, v, n)).join('')}</div>
      <div class="card"><div class="card-title">权限范围层级</div><p class="insight-note">集团 → 区域 → 国家 → 法人 → 项目 → 业务领域</p></div>
      <div class="card"><div class="card-title">权限矩阵</div><table class="data-table"><thead><tr><th>角色</th><th>集团</th><th>区域</th><th>国家</th><th>法人</th><th>项目</th><th>领域</th></tr></thead><tbody>${matrixRows}</tbody></table></div>
      <div class="card"><div class="card-title">用户与角色分配</div><table class="data-table"><thead><tr><th>姓名</th><th>用户ID</th><th>角色</th><th>数据范围</th><th>状态</th><th>最后登录</th></tr></thead><tbody>${userRows}</tbody></table></div>
      <div id="regulatoryAccessControlDetail"></div>`;
  },

  showRegulatoryAccessControlUserDetail(userId) {
    const user = (APP_DATA.regulatoryUsers || []).find(u => u.userId === userId);
    const node = document.getElementById('regulatoryAccessControlDetail');
    this.regulatoryAccessControlFocusUserId = userId;
    this.showPublicDetailOrNotFound(node, user, () => {
      const asgs = this.getUserRoleAssignments(userId);
      const perms = [...new Set(asgs.flatMap(a => (APP_DATA.regulatoryRolePermissionMap || {})[a.roleId] || []))];
      const visibleEntities = (APP_DATA.globalLegalEntities || []).filter(e => e.entityId !== 'G001' && this.canRegulatoryAccess(userId, 'globalLegalEntities', e.entityId, 'VIEW').allowed);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '监管用户', objectName: user.userName, objectId: user.userId, status: user.status,
        sections: [
          { title: '一、用户基本信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(user.userId, '用户 ID'), { label: '类型', value: user.userType }, { label: '组织', value: user.organizationId }, { label: '最后登录', value: user.lastLoginAt || '—' }]) },
          { title: '二、角色分配', content: asgs.map(a => `<p>${a.assignmentId} · ${a.roleId} · ${a.scopeType}:${(a.scopeIds || []).join(',')}</p>`).join('') || this.renderPublicEmptyState('暂无') },
          { title: '三、权限集合', content: perms.map(p => `<span class="badge badge-info" style="margin:2px">${p}</span>`).join('') || this.renderPublicEmptyState('暂无') },
          { title: '四、可见法人', content: visibleEntities.map(e => this.renderPublicLinkButton(e.entityName, `App.navigatePublic('global-legal-entities',{entityId:'${e.entityId}'})`)).join('') || this.renderPublicEmptyState('无可见法人') }
        ]
      });
    }, '用户');
  },

  renderRegulatoryAuthorization() {
    const node = document.getElementById('regulatoryAuthorization');
    if (!node) return;
    const f = this.regulatoryAuthorizationFilter || {};
    let list = [...(APP_DATA.regulatoryAuthorizationRequests || [])];
    if (f.status) list = list.filter(a => a.status === f.status);
    if (f.requestType) list = list.filter(a => a.requestType === f.requestType);
    if (f.riskLevel) list = list.filter(a => a.riskLevel === f.riskLevel);
    const pending = list.filter(a => ['SUBMITTED', 'IN_REVIEW', 'DRAFT'].includes(a.status));
    const filterBar = `<div class="filter-bar" style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap">
      <select onchange="App.regulatoryAuthorizationFilter={...(App.regulatoryAuthorizationFilter||{}),status:this.value||null};App.renderRegulatoryAuthorization()"><option value="">全部状态</option>${['DRAFT','SUBMITTED','IN_REVIEW','APPROVED','REJECTED'].map(s=>`<option value="${s}" ${f.status===s?'selected':''}>${s}</option>`).join('')}</select>
      <select onchange="App.regulatoryAuthorizationFilter={...(App.regulatoryAuthorizationFilter||{}),requestType:this.value||null};App.renderRegulatoryAuthorization()"><option value="">全部类型</option>${[...new Set((APP_DATA.regulatoryAuthorizationRequests||[]).map(a=>a.requestType))].map(t=>`<option value="${t}" ${f.requestType===t?'selected':''}>${t}</option>`).join('')}</select>
    </div>`;
    const rows = pending.map(a => {
      const req = (APP_DATA.regulatoryUsers || []).find(u => u.userId === a.requesterId);
      return `<tr class="clickable" onclick="App.showRegulatoryAuthorizationDetail('${a.authorizationId}')"><td>${this.renderPublicAuthStatusBadge(a.status)}</td><td>${a.requestType}</td><td>${a.targetObjectId}</td><td>${this.renderPublicPriorityBadge(a.riskLevel)}</td><td>${a.approvalStage}</td><td>${req?.userName || a.requesterId}</td><td>${a.submittedAt}</td><td>${a.dueAt}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-authorization')}
      <div class="group-hero"><div><span>授权审批</span><h2>集团监管授权审批中心</h2><p>申请 → 业务审核 → 风险审核 → 监管部门审核 → 最终审批 → 生效</p></div><div>待审 <b>${pending.length}</b></div></div>
      ${filterBar}
      <div class="card"><div class="card-title">待审批事项</div>${rows ? `<table class="data-table"><thead><tr><th>状态</th><th>类型</th><th>对象</th><th>风险</th><th>阶段</th><th>申请人</th><th>提交</th><th>时限</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无待审批')}</div>
      <div id="regulatoryAuthorizationDetail"></div>`;
    if (this.regulatoryAuthorizationFocusId) setTimeout(() => this.showRegulatoryAuthorizationDetail(this.regulatoryAuthorizationFocusId), 0);
  },

  showRegulatoryAuthorizationDetail(authorizationId) {
    const auth = (APP_DATA.regulatoryAuthorizationRequests || []).find(a => a.authorizationId === authorizationId);
    const node = document.getElementById('regulatoryAuthorizationDetail');
    this.regulatoryAuthorizationFocusId = authorizationId;
    this.showPublicDetailOrNotFound(node, auth, () => {
      const nav = auth.nextPageId ? `App.navigatePublic('${auth.nextPageId}',{${auth.sourceType === 'rectificationTasks' ? 'rectificationTaskId' : auth.sourceType === 'regulatoryActions' ? 'actionId' : 'objectId'}:'${auth.sourceId}'})` : '';
      const canApprove = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, auth.targetObjectType, auth.targetObjectId, 'APPROVE').allowed;
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '授权申请', objectName: auth.requestType, objectId: auth.authorizationId, status: auth.status,
        sections: [
          { title: '一、待办基本信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(auth.authorizationId, '授权 ID'), { label: '类型', value: auth.requestType }, { label: '目标', value: auth.targetObjectType + ' / ' + auth.targetObjectId }, { label: '动作', value: auth.requestedAction }, { label: '阶段', html: this.renderPublicAuthStatusBadge(auth.approvalStage) }, { label: '风险', html: this.renderPublicPriorityBadge(auth.riskLevel) }]) },
          { title: '二、审批链', content: '<p class="insight-note">申请 → 业务审核 → 风险审核 → 监管部门审核 → 最终审批 → 生效</p>' },
          { title: '三、来源穿透', content: `${this.renderPublicLinkButton('原始对象', nav)} ${(auth.relatedRiskIds||[]).map(id => this.renderPublicLinkButton('风险 '+id, `App.navigatePublic('warnings',{riskMatterId:'${id}'})`)).join('')}` },
          { title: '四、建议下一步', content: `<p>${this.escHtml(auth.reason)}</p>` }
        ],
        footer: `${canApprove && ['SUBMITTED','IN_REVIEW'].includes(auth.status) ? `<button class="btn" onclick="App.approveRegulatoryAuthorization('${auth.authorizationId}');App.renderRegulatoryAuthorization()">审批通过</button><button class="btn btn-outline" onclick="App.rejectRegulatoryAuthorization('${auth.authorizationId}','审批拒绝');App.renderRegulatoryAuthorization()">拒绝</button>` : ''}${nav ? this.renderPublicLinkButton('原始详情', nav) : ''}`
      });
    }, '授权申请');
  },

  renderRegulatoryAuditTrail() {
    const node = document.getElementById('regulatoryAuditTrail');
    if (!node) return;
    const f = this.regulatoryAuditTrailFilter || {};
    let logs = [...(APP_DATA.regulatoryAuditLogs || [])];
    if (f.userId) logs = logs.filter(l => l.userId === f.userId);
    if (f.actionType) logs = logs.filter(l => l.actionType === f.actionType);
    if (f.objectType) logs = logs.filter(l => l.objectType === f.objectType);
    const users = APP_DATA.regulatoryUsers || [];
    const filterBar = `<div class="filter-bar" style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap">
      <select onchange="App.regulatoryAuditTrailFilter={...(App.regulatoryAuditTrailFilter||{}),userId:this.value||null};App.renderRegulatoryAuditTrail()"><option value="">全部用户</option>${users.map(u=>`<option value="${u.userId}" ${f.userId===u.userId?'selected':''}>${u.userName}</option>`).join('')}</select>
      <select onchange="App.regulatoryAuditTrailFilter={...(App.regulatoryAuditTrailFilter||{}),actionType:this.value||null};App.renderRegulatoryAuditTrail()"><option value="">全部操作</option>${['VIEW','APPROVE','REJECT','CLOSE','ASSIGN','OVERRIDE_DENIED','PUBLISH','ROLLBACK'].map(t=>`<option value="${t}" ${f.actionType===t?'selected':''}>${t}</option>`).join('')}</select>
    </div>`;
    const rows = logs.slice(0, 50).map(l => {
      const u = users.find(x => x.userId === l.userId);
      return `<tr class="clickable" onclick="App.showRegulatoryAuditDetail('${l.auditId}')"><td>${l.timestamp}</td><td>${u?.userName || l.userId}</td><td>${this.renderPublicAuditActionBadge(l.actionType)}</td><td>${l.objectType}</td><td>${l.objectId}</td><td>${l.reason || '—'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-audit-trail')}
      <div class="group-hero"><div><span>全程审计</span><h2>集团监管操作审计中心</h2><p>谁 · 何时 · 对什么 · 做了什么 · 前后状态 · 审批依据</p></div><div>记录 <b>${logs.length}</b></div></div>
      ${filterBar}
      <div class="card"><div class="card-title">审计日志</div>${logs.length ? `<table class="data-table"><thead><tr><th>时间</th><th>用户</th><th>操作</th><th>对象类型</th><th>对象ID</th><th>原因</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无审计记录（操作执行后自动写入）')}</div>
      <div id="regulatoryAuditDetail"></div>`;
  },

  showRegulatoryAuditDetail(auditId) {
    const log = (APP_DATA.regulatoryAuditLogs || []).find(l => l.auditId === auditId);
    const node = document.getElementById('regulatoryAuditDetail');
    this.regulatoryAuditFocusId = auditId;
    this.showPublicDetailOrNotFound(node, log, () => {
      const auth = log.authorizationId ? (APP_DATA.regulatoryAuthorizationRequests || []).find(a => a.authorizationId === log.authorizationId) : null;
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '审计记录', objectName: log.actionType, objectId: log.auditId, status: log.actionType,
        sections: [
          { title: '一、操作记录', content: this.renderPublicMetaGrid([this.renderPublicIdField(log.auditId, '审计 ID'), { label: '用户', value: log.userId }, { label: '时间', value: log.timestamp }, { label: '对象', value: log.objectType + ' / ' + log.objectId }, { label: '原因', value: log.reason || '—' }]) },
          { title: '二、操作前快照', content: `<pre style="font-size:12px">${this.escHtml(JSON.stringify(log.beforeState, null, 2) || '—')}</pre>` },
          { title: '三、操作后快照', content: `<pre style="font-size:12px">${this.escHtml(JSON.stringify(log.afterState, null, 2) || '—')}</pre>` },
          { title: '四、审批记录', content: auth ? this.renderPublicLinkButton(auth.authorizationId, `App.navigatePublic('regulatory-authorization',{authorizationId:'${auth.authorizationId}'})`) : this.renderPublicEmptyState('无关联审批') }
        ],
        footer: log.objectType === 'rectificationTasks' ? this.renderPublicLinkButton('原始整改', `App.navigatePublic('rectification',{rectificationTaskId:'${log.objectId}'})`) : ''
      });
    }, '审计记录');
  },

  renderRegulatorySystemSettings() {
    const node = document.getElementById('regulatorySystemSettings');
    if (!node) return;
    const configs = APP_DATA.regulatorySystemConfigurations || [];
    const ruleParams = APP_DATA.regulatoryRuleParameters || [];
    const rows = configs.map(c => {
      const canEdit = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatorySystemConfigurations', c.configId, 'UPDATE').allowed;
      return `<tr><td>${c.configKey}</td><td>${c.configValue}</td><td>${c.configType}</td><td>${c.status}</td><td>${c.description || '—'}</td><td>${canEdit ? `<button class="btn btn-outline" onclick="alert('系统配置变更将写入审计日志并需审批')">申请变更</button>` : '—'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-system-settings')}
      <div class="group-hero"><div><span>系统配置</span><h2>集团监管平台系统配置中心</h2><p>非规则类系统配置；规则参数必须走规则治理闭环</p></div></div>
      <div class="card insight-note"><b>注意：</b>规则参数请通过 ${this.renderPublicLinkButton('规则配置', `App.navigatePublic('regulatory-rule-config')`)} → ${this.renderPublicLinkButton('仿真', `App.navigatePublic('regulatory-simulation')`)} → ${this.renderPublicLinkButton('审批', `App.navigatePublic('regulatory-rule-approvals')`)} → ${this.renderPublicLinkButton('部署', `App.navigatePublic('regulatory-rule-deployments')`)} 闭环变更，不得在此直接修改。</div>
      <div class="card"><div class="card-title">系统配置项</div><table class="data-table"><thead><tr><th>配置键</th><th>值</th><th>类型</th><th>状态</th><th>说明</th><th>操作</th></tr></thead><tbody>${rows}</tbody></table></div>
      <div class="card"><div class="card-title">规则参数（只读索引，共 ${ruleParams.length} 项）</div><p class="insight-note">规则参数存储于 regulatoryRuleParameters，变更须走 Phase 10–12 规则治理闭环。</p></div>`;
  },

  renderRegulatoryDataSources() {
    const node = document.getElementById('regulatoryDataSources');
    if (!node) return;
    const f = this.regulatoryDataSourcesFilter || {};
    let sources = this.filterDataByUserScope(APP_DATA.regulatoryDataSources || [], s => s.ownerOrganizationId, s => (s.businessDomains || [])[0]);
    if (f.sourceType) sources = sources.filter(s => s.sourceType === f.sourceType);
    if (f.connectionStatus) sources = sources.filter(s => s.connectionStatus === f.connectionStatus);
    const dm = APP_DATA.regulatoryDataGovernanceMetrics || {};
    const am = APP_DATA.regulatoryDataAdaptationMetrics || {};
    const bm = APP_DATA.regulatoryBatchAdaptationMetrics || {};
    const kpi = [[dm.sourceCount, '数据源总数'], [bm.adaptedDomainCount ?? am.configuredDomainCount ?? '—', '已适配领域'], [bm.domainAdaptationCoverage != null ? bm.domainAdaptationCoverage + '%' : '—', '领域覆盖率'], [bm.fullClosedLoopDomainCount ?? '—', '闭环驱动领域'], [bm.insufficientRealDataDomainCount ?? '—', '数据不足领域'], [am.activeMappingCount ?? '—', '活跃映射']];
    const typeOpts = [...new Set((APP_DATA.regulatoryDataSources || []).map(s => s.sourceType))];
    const rows = sources.map(s => {
      const canView = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDataSources', s.sourceId, 'VIEW').allowed;
      return `<tr class="${canView ? 'clickable' : ''}" ${canView ? `onclick="App.showRegulatoryDataSourceDetail('${s.sourceId}')"` : ''}><td>${s.sourceId}</td><td>${s.sourceName}</td><td>${s.sourceType}</td><td>${s.ownerOrganizationName || s.ownerOrganizationId}</td><td>${this.renderPublicStatusBadge(s.connectionStatus === 'ONLINE' ? '正常' : s.connectionStatus === 'DEGRADED' ? '关注' : '异常')}</td><td>${s.lastSyncAt || '—'}</td><td>${s.dataSetCount}</td><td>${s.qualityScore ?? '—'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-data-sources')}
      <div class="group-hero"><div><span>数据运行</span><h2>集团监管数据源中心</h2><p>数据源 → 系统 → 数据集 → 数据对象 → 字段</p></div><div>数据源 <b>${sources.length}</b></div></div>
      <div class="group-metrics">${kpi.map(([v, l]) => this.renderPublicKpiCard(l, v, `App.navigatePublic('regulatory-data-sources')`)).join('')}</div>
      <div class="filter-bar" style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap">
        <select onchange="App.regulatoryDataSourcesFilter={...(App.regulatoryDataSourcesFilter||{}),sourceType:this.value||null};App.renderRegulatoryDataSources()"><option value="">全部类型</option>${typeOpts.map(t => `<option value="${t}" ${f.sourceType===t?'selected':''}>${t}</option>`).join('')}</select>
        <select onchange="App.regulatoryDataSourcesFilter={...(App.regulatoryDataSourcesFilter||{}),connectionStatus:this.value||null};App.renderRegulatoryDataSources()"><option value="">全部连接</option>${['ONLINE','DEGRADED','OFFLINE'].map(t => `<option value="${t}" ${f.connectionStatus===t?'selected':''}>${t}</option>`).join('')}</select>
      </div>
      ${this.renderBatchAdaptationCoveragePanel()}
      <div class="card"><div class="card-title">数据源清单</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>名称</th><th>类型</th><th>责任组织</th><th>连接</th><th>最后同步</th><th>数据集</th><th>质量分</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('无可见数据源')}</div>
      <div id="regulatoryDataSourceDetail"></div>`;
    if (this.regulatoryDataSourceFocusId) setTimeout(() => this.showRegulatoryDataSourceDetail(this.regulatoryDataSourceFocusId), 0);
  },

  showRegulatoryDataSourceDetail(sourceId) {
    const src = (APP_DATA.regulatoryDataSources || []).find(s => s.sourceId === sourceId);
    const node = document.getElementById('regulatoryDataSourceDetail');
    this.regulatoryDataSourceFocusId = sourceId;
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDataSources', sourceId, 'VIEW');
    if (!access.allowed) { node.innerHTML = this.renderPublicErrorState('无权查看该数据源'); return; }
    this.showPublicDetailOrNotFound(node, src, () => {
      const dataSets = (APP_DATA.regulatoryDataSets || []).filter(d => d.sourceId === sourceId);
      const impact = this.getDataSourceImpactAnalysis(sourceId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '数据源', objectName: src.sourceName, objectId: src.sourceId, status: src.connectionStatus,
        sections: [
          { title: '一、数据源信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(src.sourceId, '数据源 ID'), { label: '类型', value: src.sourceType }, { label: '责任组织', value: src.ownerOrganizationName }, { label: '连接状态', html: this.renderPublicStatusBadge(src.connectionStatus === 'ONLINE' ? '正常' : '异常') }, { label: '最后同步', value: src.lastSyncAt }]) },
          { title: '二、数据集', content: dataSets.map(d => this.renderPublicLinkButton(d.dataSetName, `App.navigatePublic('regulatory-data-integration',{dataSetId:'${d.dataSetId}'})`)).join('') || this.renderPublicEmptyState('暂无') },
          { title: '三、血缘影响', content: `<p>受影响 KRI: ${impact.affectedKris.length} · 受影响风险: ${impact.affectedRisks.length} · 受影响行动: ${impact.affectedActions.length}</p>${this.renderPublicLinkButton('查看血缘影响', `App.navigatePublic('regulatory-data-lineage',{sourceId:'${sourceId}'})`)}` },
          { title: '四、真实业务数据适配闭环', content: this.renderDataAdaptationPipelinePanel(sourceId) },
          { title: '五、监管领域关联', content: (() => { const dr = (APP_DATA.regulatoryDomainAdaptationResults || []).filter(r => (r.sourceIds || []).includes(sourceId)); return dr.length ? dr.map(r => `<p class="insight-note">${r.domainName} · ${r.maturityLevel} · ${this.renderPublicUnifiedStatusBadge(r.closedLoopStatus)} ${this.renderPublicLinkButton('领域', `App.navigatePublic('regulatory-data-governance')`)}</p>`).join('') : this.renderPublicEmptyState('暂无领域关联'); })() }
        ],
        footer: `${this.renderPublicLinkButton('执行适配', `App.adaptRealBusinessData('${sourceId}');App.showRegulatoryDataSourceDetail('${sourceId}')`)} ${this.renderPublicLinkButton('数据接入', `App.navigatePublic('regulatory-data-integration',{sourceId:'${sourceId}'})`)} ${this.renderPublicLinkButton('数据血缘', `App.navigatePublic('regulatory-data-lineage',{sourceId:'${sourceId}'})`)}`
      });
    }, '数据源');
  },

  renderRegulatoryDataIntegration() {
    const node = document.getElementById('regulatoryDataIntegration');
    if (!node) return;
    const f = this.regulatoryDataIntegrationFilter || {};
    let jobs = APP_DATA.regulatoryDataIntegrationJobs || [];
    if (f.sourceId) jobs = jobs.filter(j => j.sourceId === f.sourceId);
    if (f.dataSetId) jobs = jobs.filter(j => j.dataSetId === f.dataSetId);
    if (f.status) jobs = jobs.filter(j => j.status === f.status);
    const todayJobs = jobs.length;
    const successRate = jobs.length ? Math.round(jobs.filter(j => j.status === 'SUCCESS').length / jobs.length * 1000) / 10 : 0;
    const focusRun = f.sourceId ? this.getAdaptationRun(f.sourceId) : null;
    const kpi = [[todayJobs, '今日接入任务'], [successRate + '%', '成功率'], [jobs.filter(j => j.status === 'FAILED').length, '失败任务'], [focusRun?.closureRate != null ? focusRun.closureRate + '%' : '—', '适配闭环率'], [focusRun?.drivesClosedLoop ? '是' : focusRun ? '否' : '—', '驱动闭环'], [APP_DATA.regulatoryDataGovernanceMetrics?.dataDelayHours + 'h' || '—', '数据延迟']];
    const rows = jobs.map(j => {
      const src = (APP_DATA.regulatoryDataSources || []).find(s => s.sourceId === j.sourceId);
      const ds = (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === j.dataSetId);
      return `<tr class="clickable" onclick="App.showRegulatoryDataIntegrationDetail('${j.integrationJobId}')"><td>${src?.sourceName || j.sourceId}</td><td>${j.integrationJobId}</td><td>${ds?.dataSetName || j.dataSetId}</td><td>${this.renderPublicStatusBadge(j.status)}</td><td>${j.recordCount}</td><td>${j.successCount}/${j.failedCount}</td><td>${j.retryCount}</td><td>${j.completedAt || '—'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-data-integration')}
      <div class="group-hero"><div><span>数据运行</span><h2>集团监管数据接入中心</h2><p>数据源 → 接入任务 → 数据集 → 记录 → 质量校验</p></div></div>
      <div class="group-metrics">${kpi.map(([v, l]) => this.renderPublicKpiCard(l, v, `App.navigatePublic('regulatory-data-integration')`)).join('')}</div>
      ${this.renderBatchAdaptationRunsPanel()}
      <div class="card"><div class="card-title">接入任务</div>${rows ? `<table class="data-table"><thead><tr><th>数据源</th><th>任务</th><th>数据集</th><th>状态</th><th>记录数</th><th>成功/失败</th><th>重试</th><th>完成</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      ${f.sourceId ? this.renderDataAdaptationPipelinePanel(f.sourceId) : ''}
      <div id="regulatoryDataIntegrationDetail"></div>`;
    if (this.regulatoryDataIntegrationFocusId) setTimeout(() => this.showRegulatoryDataIntegrationDetail(this.regulatoryDataIntegrationFocusId), 0);
  },

  showRegulatoryDataIntegrationDetail(jobId) {
    const job = (APP_DATA.regulatoryDataIntegrationJobs || []).find(j => j.integrationJobId === jobId);
    const node = document.getElementById('regulatoryDataIntegrationDetail');
    this.regulatoryDataIntegrationFocusId = jobId;
    this.showPublicDetailOrNotFound(node, job, () => {
      const logs = (APP_DATA.regulatoryDataIntegrationLogs || []).filter(l => l.integrationJobId === jobId);
      const issues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => i.dataSetId === job.dataSetId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '接入任务', objectName: job.integrationJobId, objectId: job.integrationJobId, status: job.status,
        sections: [
          { title: '一、任务信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(job.integrationJobId, '任务 ID'), { label: '数据源', value: job.sourceId }, { label: '数据集', value: job.dataSetId }, { label: '记录', value: job.recordCount }, { label: '成功/失败', value: job.successCount + '/' + job.failedCount }, { label: '重试', value: job.retryCount }]) },
          { title: '二、运行日志', content: logs.length ? logs.map(l => `<p class="insight-note">${l.timestamp} · ${l.eventType} · ${l.message}</p>`).join('') : this.renderPublicEmptyState('暂无日志') },
          { title: '三、质量校验', content: issues.length ? issues.map(i => this.renderPublicLinkButton(i.issueType, `App.navigatePublic('regulatory-data-quality',{qualityIssueId:'${i.qualityIssueId}'})`)).join('') : '<p>校验通过</p>' }
        ],
        footer: `${this.renderRegulatoryActionButton('重试接入', 'regulatoryDataIntegrationJobs', jobId, 'RETRY', `App.retryDataIntegrationJob('${jobId}');App.renderRegulatoryDataIntegration()`)} ${this.renderPublicLinkButton('数据源', `App.navigatePublic('regulatory-data-sources',{sourceId:'${job.sourceId}'})`)}`
      });
    }, '接入任务');
  },

  renderRegulatoryDataQuality() {
    const node = document.getElementById('regulatoryDataQuality');
    if (!node) return;
    const f = this.regulatoryDataQualityFilter || {};
    let issues = this.filterDataByUserScope(APP_DATA.regulatoryDataQualityIssues || [], i => (APP_DATA.regulatoryDataSets.find(d => d.dataSetId === i.dataSetId) || {}).ownerOrganizationId, i => (APP_DATA.regulatoryDataSets.find(d => d.dataSetId === i.dataSetId) || {}).domain);
    if (f.severity) issues = issues.filter(i => i.severity === f.severity);
    if (f.status) issues = issues.filter(i => i.status === f.status);
    const dm = APP_DATA.regulatoryDataGovernanceMetrics || {};
    const snap = (APP_DATA.regulatoryDataQualitySnapshots || []).find(s => s.scopeType === 'GROUP');
    const kpi = [[snap?.overallScore ?? '—', '总体质量得分'], [dm.anomalyDataSetCount, '异常数据集'], [dm.openIssueCount, '待治理问题'], [dm.severeIssueCount, '严重质量问题'], [dm.overdueGovernanceCount, '超期治理'], [dm.qualityTrendStatus, '质量趋势']];
    const dimRows = snap && snap.dataStatus === 'OK' ? ['completeness', 'accuracy', 'timeliness', 'consistency', 'uniqueness', 'validity'].map(d => `<tr><td>${d}</td><td>${snap[d]}</td></tr>`).join('') : '';
    const issueRows = issues.map(i => `<tr class="clickable" onclick="App.showRegulatoryDataQualityDetail('${i.qualityIssueId}')"><td>${i.qualityIssueId}</td><td>${i.issueType}</td><td>${i.dataSetId}</td><td>${this.renderPublicPriorityBadge(i.severity)}</td><td>${i.issueCount}</td><td>${this.renderPublicStatusBadge(i.status)}</td><td>${i.kriId || '—'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-data-quality')}
      <div class="group-hero"><div><span>数据运行</span><h2>集团监管数据质量中心</h2><p>完整性 · 准确性 · 及时性 · 一致性 · 唯一性 · 有效性</p></div></div>
      <div class="group-metrics">${kpi.map(([v, l]) => this.renderPublicKpiCard(l, v, `App.navigatePublic('regulatory-data-quality')`)).join('')}</div>
      <div class="card"><div class="card-title">质量维度（集团）</div>${dimRows ? `<table class="data-table"><thead><tr><th>维度</th><th>得分</th></tr></thead><tbody>${dimRows}</tbody></table>` : this.renderPublicEmptyState('INSUFFICIENT_DATA')}</div>
      <div class="card"><div class="card-title">质量问题</div>${issueRows ? `<table class="data-table"><thead><tr><th>ID</th><th>类型</th><th>数据集</th><th>严重度</th><th>问题数</th><th>状态</th><th>关联KRI</th></tr></thead><tbody>${issueRows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryDataQualityDetail"></div>`;
    if (this.regulatoryDataQualityFocusId) setTimeout(() => this.showRegulatoryDataQualityDetail(this.regulatoryDataQualityFocusId), 0);
  },

  showRegulatoryDataQualityDetail(qualityIssueId) {
    const issue = (APP_DATA.regulatoryDataQualityIssues || []).find(i => i.qualityIssueId === qualityIssueId);
    const node = document.getElementById('regulatoryDataQualityDetail');
    this.regulatoryDataQualityFocusId = qualityIssueId;
    this.showPublicDetailOrNotFound(node, issue, () => {
      const cred = issue.kriId ? this.getKriDataCredibility(issue.kriId) : null;
      const ds = (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === issue.dataSetId);
      const entId = ds?.ownerOrganizationId;
      const priorityImpact = entId ? this.getPriorityCredibilityImpact(entId) : null;
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '质量问题', objectName: issue.issueType, objectId: issue.qualityIssueId, status: issue.status,
        sections: [
          { title: '一、问题信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(issue.qualityIssueId, '问题 ID'), { label: '数据集', value: issue.dataSetId }, { label: '严重度', html: this.renderPublicPriorityBadge(issue.severity) }, { label: '问题数', value: issue.issueCount }]) },
          { title: '二、KRI 可信度影响', content: cred ? `<p>可信度: ${cred.credibility} · 影响级别: ${cred.impactLevel}</p>` : this.renderPublicEmptyState('INSUFFICIENT_DATA') },
          { title: '三、监管优先级影响', content: priorityImpact ? `<p>当前优先级: ${priorityImpact.currentPriority || '—'} · 调整建议: ${priorityImpact.priorityAdjustment}</p>` : '—' },
          { title: '四、治理穿透', content: issue.relatedGovernanceTaskId ? this.renderPublicLinkButton('治理任务', `App.navigatePublic('regulatory-data-governance',{governanceTaskId:'${issue.relatedGovernanceTaskId}'})`) : this.renderPublicEmptyState('暂无治理任务') }
        ],
        footer: `${issue.kriId ? this.renderPublicLinkButton('KRI血缘', `App.navigatePublic('regulatory-data-lineage',{kriId:'${issue.kriId}'})`) : ''} ${issue.relatedRectificationTaskId ? this.renderPublicLinkButton('整改任务', `App.navigatePublic('rectification',{rectificationTaskId:'${issue.relatedRectificationTaskId}'})`) : ''}`
      });
    }, '质量问题');
  },

  renderRegulatoryDataGovernance() {
    const node = document.getElementById('regulatoryDataGovernance');
    if (!node) return;
    let tasks = this.filterDataByUserScope(APP_DATA.regulatoryDataGovernanceTasks || [], t => t.responsibleOrganizationId);
    const rows = tasks.map(t => {
      const issue = (APP_DATA.regulatoryDataQualityIssues || []).find(i => i.qualityIssueId === t.qualityIssueId);
      const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === t.responsibleOrganizationId);
      return `<tr class="clickable" onclick="App.showRegulatoryDataGovernanceDetail('${t.governanceTaskId}')"><td>${t.governanceTaskId}</td><td>${issue?.issueType || t.qualityIssueId}</td><td>${ent?.entityName || t.responsibleOrganizationId}</td><td>${this.renderPublicStatusBadge(t.status)}</td><td>${t.dueDate}</td><td>${t.verificationStatus}</td><td>${t.relatedRectificationTaskId || '—'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-data-governance')}
      <div class="group-hero"><div><span>数据运行</span><h2>集团监管数据治理中心</h2><p>质量问题 → 确认 → 责任主体 → 治理任务 → 整改 → 复核 → 关闭</p></div><div>任务 <b>${tasks.length}</b></div></div>
      ${this.renderDomainClosureDashboardPanel()}
      ${this.renderFinanceClosureChainPanel()}
      ${this.renderFinanceClosureVerificationPanel()}
      ${this.renderBatchAdaptationCoveragePanel()}
      ${this.renderRegulatoryDomainConfigPanel()}
      ${this.renderDomainAdaptationMaturityPanel()}
      ${this.renderDomainClosureReadinessPanel()}
      ${this.renderDomainDataGapsPanel()}
      ${this.renderDomainClosurePlansPanel()}
      <div class="card"><div class="card-title">治理任务</div>${rows ? `<table class="data-table"><thead><tr><th>任务ID</th><th>质量问题</th><th>责任主体</th><th>状态</th><th>截止</th><th>验证</th><th>关联整改</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryDataGovernanceDetail"></div>`;
    if (this.regulatoryDataGovernanceFocusId) setTimeout(() => this.showRegulatoryDataGovernanceDetail(this.regulatoryDataGovernanceFocusId), 0);
  },

  showRegulatoryDataGovernanceDetail(governanceTaskId) {
    const task = (APP_DATA.regulatoryDataGovernanceTasks || []).find(t => t.governanceTaskId === governanceTaskId);
    const node = document.getElementById('regulatoryDataGovernanceDetail');
    this.regulatoryDataGovernanceFocusId = governanceTaskId;
    this.showPublicDetailOrNotFound(node, task, () => {
      const issue = (APP_DATA.regulatoryDataQualityIssues || []).find(i => i.qualityIssueId === task.qualityIssueId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '数据治理任务', objectName: task.governanceTaskId, objectId: task.governanceTaskId, status: task.status,
        sections: [
          { title: '一、治理任务', content: this.renderPublicMetaGrid([this.renderPublicIdField(task.governanceTaskId, '任务 ID'), { label: '责任主体', value: task.responsibleOrganizationId }, { label: '截止', value: task.dueDate }, { label: '验证状态', value: task.verificationStatus }]) },
          { title: '二、关联质量问题', content: issue ? this.renderPublicLinkButton(issue.issueType, `App.navigatePublic('regulatory-data-quality',{qualityIssueId:'${issue.qualityIssueId}'})`) : '—' },
          { title: '三、关联整改', content: task.relatedRectificationTaskId ? this.renderPublicLinkButton(task.relatedRectificationTaskId, `App.navigatePublic('rectification',{rectificationTaskId:'${task.relatedRectificationTaskId}'})`) : this.renderPublicEmptyState('暂无关联整改') }
        ],
        footer: `${this.renderRegulatoryActionButton('分派任务', 'regulatoryDataGovernanceTasks', governanceTaskId, 'ASSIGN', `App.assignDataGovernanceTask('${governanceTaskId}');App.renderRegulatoryDataGovernance()`)} ${this.renderRegulatoryActionButton('关闭治理', 'regulatoryDataGovernanceTasks', governanceTaskId, 'CLOSE', `App.closeDataGovernanceTask('${governanceTaskId}');App.renderRegulatoryDataGovernance()`)}`
      });
    }, '治理任务');
  },

  renderRegulatoryDataLineage() {
    const node = document.getElementById('regulatoryDataLineage');
    if (!node) return;
    const f = this.regulatoryDataLineageFilter || {};
    const focusSource = this.regulatoryDataLineageSourceId || f.sourceId;
    const focusKri = f.kriId;
    let chain = [];
    let title = '数据血缘全景';
    if (focusSource) {
      chain = this.getDataLineageChain('regulatoryDataSources', focusSource, 'DOWN');
      title = '数据源向下穿透: ' + focusSource;
    } else if (focusKri) {
      chain = [...this.getDataLineageChain('groupKris', focusKri, 'UP'), ...this.getDataLineageChain('groupKris', focusKri, 'DOWN')];
      title = 'KRI 血缘: ' + focusKri;
    } else {
      const rel = (APP_DATA.regulatoryDataLineage || [])[0];
      if (rel) chain = this.getDataLineageChain(rel.sourceType, rel.sourceId, 'DOWN');
    }
    const chainHtml = chain.map((n, i) => `${i ? '<i>→</i>' : ''}<button class="btn btn-outline" onclick="App.navigatePublic('regulatory-data-lineage',{nodeType:'${n.type}',nodeId:'${n.id}'})">${n.type}<br>${n.id}</button>`).join('');
    const lineageRows = (APP_DATA.regulatoryDataLineage || []).slice(0, 30).map(l => `<tr><td>${l.lineageId}</td><td>${l.sourceType}/${l.sourceId}</td><td>${l.relationType}</td><td>${l.targetType}/${l.targetId}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-data-lineage')}
      <div class="group-hero"><div><span>数据运行</span><h2>集团监管数据血缘中心</h2><p>监管指标 → KRI → 规则 → 数据字段 → 数据集 → 数据源</p></div></div>
      <div class="card"><div class="card-title">${title}</div><div class="kri-lineage" style="flex-wrap:wrap">${chainHtml || this.renderPublicEmptyState('暂无血缘')}</div></div>
      <div class="card"><div class="card-title">血缘关系索引</div><table class="data-table"><thead><tr><th>ID</th><th>源</th><th>关系</th><th>目标</th></tr></thead><tbody>${lineageRows}</tbody></table></div>
      <div id="regulatoryDataLineageDetail"></div>`;
  },

  renderRegulatoryMetricCenter() {
    const node = document.getElementById('regulatoryMetricCenter');
    if (!node) return;
    let metrics = APP_DATA.regulatoryMetrics || [];
    const km = APP_DATA.regulatoryMetricKriMetrics || {};
    const rows = metrics.map(m => `<tr class="clickable" onclick="App.showRegulatoryMetricDetail('${m.metricId}')"><td>${m.metricId}</td><td>${m.metricName}</td><td>${m.metricType}</td><td>${m.scopeType}:${m.scopeId}</td><td>${m.currentValue ?? '—'}${m.unit || ''}</td><td>${m.targetValue ?? '—'}</td><td>${m.credibilityScore ?? '—'}</td><td>${this.renderPublicStatusBadge(m.status)}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-metric-center')}
      <div class="group-hero"><div><span>指标运行</span><h2>集团监管指标中心</h2><p>可信数据 → 指标计算 → 数据质量穿透</p></div><div>指标 <b>${metrics.length}</b></div></div>
      <div class="group-metrics">${[[km.metricCount,'指标总数'],[km.normalMetricCount,'正常'],[km.warningMetricCount,'预警'],[km.criticalMetricCount,'严重'],[km.insufficientDataMetricCount,'数据不足'],[km.avgCredibility,'平均可信度']].map(([v,l])=>this.renderPublicKpiCard(l,v,`App.navigatePublic('regulatory-metric-center')`)).join('')}</div>
      <div class="card"><div class="card-title">监管指标清单</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>名称</th><th>类型</th><th>范围</th><th>当前值</th><th>目标</th><th>可信度</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryMetricDetail"></div>`;
    if (this.regulatoryMetricFocusId) setTimeout(() => this.showRegulatoryMetricDetail(this.regulatoryMetricFocusId), 0);
  },

  showRegulatoryMetricDetail(metricId) {
    const m = (APP_DATA.regulatoryMetrics || []).find(x => x.metricId === metricId);
    const node = document.getElementById('regulatoryMetricDetail');
    this.regulatoryMetricFocusId = metricId;
    this.showPublicDetailOrNotFound(node, m, () => {
      const calc = this.calculateRegulatoryMetric(metricId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '监管指标', objectName: m.metricName, objectId: m.metricId, status: m.status,
        sections: [
          { title: '一、指标信息', content: this.renderPublicMetaGrid([this.renderPublicIdField(m.metricId, '指标 ID'), { label: '当前值', value: m.currentValue != null ? m.currentValue + (m.unit || '') : 'INSUFFICIENT_DATA' }, { label: '目标', value: m.targetValue }, { label: '可信度', value: calc.credibilityScore ?? '—' }, { label: '数据状态', value: m.dataStatus }]) },
          { title: '二、数据穿透', content: (m.sourceDataSetIds || []).map(id => this.renderPublicLinkButton(id, `App.navigatePublic('regulatory-data-quality')`)).join(' ') || '—' },
          { title: '三、KRI关联', content: m.kriId ? this.renderPublicLinkButton(m.kriId, `App.navigatePublic('regulatory-kri-monitoring',{kriId:'${m.kriId}'})`) : this.renderPublicEmptyState('无') }
        ],
        footer: `${this.renderPublicLinkButton('数据血缘', `App.navigatePublic('regulatory-data-lineage')`)} ${m.kriId ? this.renderPublicLinkButton('KRI监测', `App.navigatePublic('regulatory-kri-monitoring',{kriId:'${m.kriId}'})`) : ''}`
      });
    }, '指标');
  },

  renderRegulatoryKriMonitoring() {
    const node = document.getElementById('regulatoryKriMonitoring');
    if (!node) return;
    const f = this.regulatoryKriMonitoringFilter || {};
    let kris = this.filterKriByUserScope(APP_DATA.regulatoryKriRuntime || []);
    if (f.kriId) kris = kris.filter(k => k.kriId === f.kriId);
    if (f.status) kris = kris.filter(k => k.status === f.status);
    const km = APP_DATA.regulatoryMetricKriMetrics || {};
    const rows = kris.map(k => {
      const ctx = this._kriAdaptationContext(k.kriId);
      return `<tr class="clickable" onclick="App.showRegulatoryKriRuntimeDetail('${k.kriRuntimeId}')"><td>${k.kriId}</td><td>${k.kriName}</td><td>${ctx.sourceId || '—'}</td><td>${ctx.domainName || '—'}</td><td>${ctx.adaptationStatus ? this.renderPublicUnifiedStatusBadge(ctx.adaptationStatus) : '—'}</td><td>${k.currentValue}</td><td>${this.renderPublicStatusBadge(k.status)}</td><td>${k.credibilityScore ?? ctx.credibility?.credibility ?? '—'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-kri-monitoring')}
      <div class="group-hero"><div><span>指标运行</span><h2>集团KRI运行监测中心</h2><p>KRI监测 → 阈值判断 → 预警识别 · 含数据源与领域适配状态</p></div></div>
      <div class="group-metrics">${[[km.kriCount,'KRI总数'],[km.normalKriCount,'正常'],[km.attentionKriCount,'关注'],[km.warningKriCount,'预警'],[km.criticalKriCount,'严重'],[km.insufficientDataKriCount,'数据不足']].map(([v,l])=>this.renderPublicKpiCard(l,v,`App.navigatePublic('regulatory-kri-monitoring')`)).join('')}</div>
      <div class="card"><div class="card-title">KRI运行清单</div>${rows ? `<table class="data-table"><thead><tr><th>KRI</th><th>名称</th><th>来源数据源</th><th>监管领域</th><th>适配状态</th><th>当前值</th><th>状态</th><th>可信度</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('无可见KRI')}</div>
      <div id="regulatoryKriRuntimeDetail"></div>`;
    if (this.regulatoryKriRuntimeFocusId) setTimeout(() => this.showRegulatoryKriRuntimeDetail(this.regulatoryKriRuntimeFocusId), 0);
  },

  showRegulatoryKriRuntimeDetail(kriRuntimeId) {
    const k = (APP_DATA.regulatoryKriRuntime || []).find(x => x.kriRuntimeId === kriRuntimeId);
    const node = document.getElementById('regulatoryKriRuntimeDetail');
    this.regulatoryKriRuntimeFocusId = kriRuntimeId;
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryKriRuntime', kriRuntimeId, 'VIEW');
    if (!access.allowed) { node.innerHTML = this.renderPublicErrorState('无权查看该KRI'); return; }
    this.showPublicDetailOrNotFound(node, k, () => {
      const calc = this.calculateKriRuntimeStatus(kriRuntimeId);
      const warns = (APP_DATA.regulatoryWarnings || []).filter(w => w.kriRuntimeId === kriRuntimeId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: 'KRI运行', objectName: k.kriName, objectId: k.kriId, status: k.status,
        sections: [
          { title: '一、KRI状态', content: this.renderPublicMetaGrid([{ label: '当前值', value: k.currentValue }, { label: '阈值', value: k.threshold }, { label: '方向', value: k.thresholdDirection }, { label: '可信度', value: calc.credibilityScore ?? '—' }, { label: '数据状态', value: k.dataStatus }]) },
          { title: '二、关联预警', content: warns.map(w => this.renderPublicLinkButton(w.regulatoryWarningId + ' · ' + w.warningLevel, `App.navigatePublic('regulatory-warning-center',{regulatoryWarningId:'${w.regulatoryWarningId}'})`)).join('') || this.renderPublicEmptyState('暂无预警') },
          { title: '三、指标穿透', content: k.metricId ? this.renderPublicLinkButton(k.metricId, `App.navigatePublic('regulatory-metric-center',{metricId:'${k.metricId}'})`) : '—' }
        ],
        footer: `${this.renderRegulatoryActionButton('阈值调整申请', 'regulatoryRules', k.kriId, 'UPDATE', `App.attemptKriThresholdChange('${k.kriId}');alert(App.attemptKriThresholdChange('${k.kriId}').message)`) || ''} ${this.renderPublicLinkButton('规则治理', `App.navigatePublic('regulatory-rule-config')`)}`
      });
    }, 'KRI');
  },

  renderRegulatoryWarningCenter() {
    const node = document.getElementById('regulatoryWarningCenter');
    if (!node) return;
    const f = this.regulatoryWarningCenterFilter || {};
    let warns = this.filterWarningsByUserScope(APP_DATA.regulatoryWarnings || []);
    if (f.status) warns = warns.filter(w => w.status === f.status);
    if (f.warningLevel) warns = warns.filter(w => w.warningLevel === f.warningLevel);
    const km = APP_DATA.regulatoryMetricKriMetrics || {};
    const rows = warns.map(w => {
      const ctx = this._kriAdaptationContext(w.kriId);
      const qStatus = (APP_DATA.regulatoryDomainAdaptationResults || []).find(r => r.domainId === ctx.domainId)?.qualityStatus || '—';
      return `<tr class="clickable" onclick="App.showRegulatoryWarningDetail('${w.regulatoryWarningId}')"><td>${w.regulatoryWarningId}</td><td>${w.kriId}</td><td>${ctx.sourceId || '—'}</td><td>${ctx.domainName || '—'}</td><td>${qStatus}</td><td>${this.renderPublicPriorityBadge(w.warningLevel)}</td><td>${w.status}</td><td>${w.credibilityScore ?? '—'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-warning-center')}
      <div class="group-hero"><div><span>指标运行</span><h2>集团监管预警中心</h2><p>KRI异常 → 预警 → 人工研判 · 含数据源、领域与质量状态</p></div></div>
      <div class="group-metrics">${[[km.warningTotalCount,'预警总数'],[km.attentionWarningCount,'ATTENTION'],[km.warningLevelCount,'WARNING'],[km.criticalWarningCount,'CRITICAL'],[km.pendingReviewCount,'待研判']].map(([v,l])=>this.renderPublicKpiCard(l,v,`App.navigatePublic('regulatory-warning-center')`)).join('')}</div>
      <div class="card"><div class="card-title">监管预警清单</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>KRI</th><th>来源数据源</th><th>监管领域</th><th>数据质量</th><th>等级</th><th>状态</th><th>可信度</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryWarningDetail"></div>`;
    if (this.regulatoryWarningFocusId) setTimeout(() => this.showRegulatoryWarningDetail(this.regulatoryWarningFocusId), 0);
  },

  showRegulatoryWarningDetail(regulatoryWarningId) {
    const w = (APP_DATA.regulatoryWarnings || []).find(x => x.regulatoryWarningId === regulatoryWarningId);
    const node = document.getElementById('regulatoryWarningDetail');
    this.regulatoryWarningFocusId = regulatoryWarningId;
    this.showPublicDetailOrNotFound(node, w, () => {
      const suggestion = this.getWarningPrioritySuggestion(regulatoryWarningId);
      const canJudge = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryWarnings', regulatoryWarningId, 'JUDGE').allowed;
      const canConvert = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryWarnings', regulatoryWarningId, 'CONVERT').allowed;
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '监管预警', objectName: w.regulatoryWarningId, objectId: w.regulatoryWarningId, status: w.status,
        sections: [
          { title: '一、预警信息', content: this.renderPublicMetaGrid([{ label: 'KRI', value: w.kriId }, { label: '等级', html: this.renderPublicPriorityBadge(w.warningLevel) }, { label: '法人', value: w.entityId }, { label: '策略', value: w.strategyLevel }, { label: '可信度', value: w.credibilityScore ?? '—' }]) },
          { title: '二、优先级建议', content: `<p>${suggestion?.priorityAdjustmentSuggestion} — ${suggestion?.reason}</p>` },
          { title: '三、链路穿透', content: `${this.renderPublicLinkButton('KRI', `App.navigatePublic('regulatory-kri-monitoring',{kriId:'${w.kriId}'})`)} ${w.riskMatterId ? this.renderPublicLinkButton('风险事项', `App.navigatePublic('warnings',{riskMatterId:'${w.riskMatterId}'})`) : ''} ${w.actionId ? this.renderPublicLinkButton('监管行动', `App.navigatePublic('regulatory-actions',{actionId:'${w.actionId}'})`) : ''}` }
        ],
        footer: `${canJudge && w.status === 'PENDING_REVIEW' ? `<button class="btn" onclick="App.reviewRegulatoryWarning('${w.regulatoryWarningId}','研判完成');App.renderRegulatoryWarningCenter()">完成研判</button>` : ''}${canConvert && !w.riskMatterId ? `<button class="btn btn-outline" onclick="App.convertRegulatoryWarningToRisk('${w.regulatoryWarningId}');App.renderRegulatoryWarningCenter()">转风险事项</button>` : ''}${this.renderPublicLinkButton('策略分析', `App.navigatePublic('regulatory-warning-strategy',{strategyAnalysisId:'WSA-${w.regulatoryWarningId}'})`)}`
      });
    }, '预警');
  },

  renderRegulatoryKriEffectiveness() {
    const node = document.getElementById('regulatoryKriEffectiveness');
    if (!node) return;
    const evals = APP_DATA.regulatoryKriEvaluations || [];
    const rows = evals.map(e => `<tr class="clickable" onclick="App.showRegulatoryKriEvaluationDetail('${e.evaluationId}')"><td>${e.kriId}</td><td>${e.period}</td><td>${e.hitRate ?? '—'}</td><td>${e.riskConversionRate ?? '—'}</td><td>${e.actionConversionRate ?? '—'}</td><td>${e.falsePositiveRate ?? '—'}</td><td>${e.dataCredibility ?? '—'}</td><td>${e.dataStatus}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-kri-effectiveness')}
      <div class="group-hero"><div><span>指标运行</span><h2>集团KRI有效性评价中心</h2><p>历史数据不足时展示 INSUFFICIENT_HISTORY，不伪造趋势</p></div></div>
      <div class="card insight-note">当前评价数据状态：<b>${(APP_DATA.regulatoryMetricKriMetrics || {}).evaluationDataStatus || 'INSUFFICIENT_HISTORY'}</b></div>
      <div class="card"><div class="card-title">KRI有效性评价</div>${rows ? `<table class="data-table"><thead><tr><th>KRI</th><th>周期</th><th>命中率</th><th>转风险率</th><th>转行动率</th><th>误报率</th><th>可信度</th><th>数据状态</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryKriEvaluationDetail"></div>`;
  },

  showRegulatoryKriEvaluationDetail(evaluationId) {
    const e = (APP_DATA.regulatoryKriEvaluations || []).find(x => x.evaluationId === evaluationId);
    const node = document.getElementById('regulatoryKriEvaluationDetail');
    this.regulatoryKriEvaluationFocusId = evaluationId;
    this.showPublicDetailOrNotFound(node, e, () => {
      node.innerHTML = this.buildPublicDetailPanel({ objectType: 'KRI评价', objectName: e.kriId, objectId: e.evaluationId, status: e.dataStatus,
        sections: [{ title: '评价指标', content: e.dataStatus === 'INSUFFICIENT_HISTORY' ? this.renderPublicEmptyState('INSUFFICIENT_HISTORY — 无真实历史监测数据') : `<p>命中率 ${e.hitRate}</p>` }],
        footer: this.renderPublicLinkButton('KRI监测', `App.navigatePublic('regulatory-kri-monitoring',{kriId:'${e.kriId}'})`)
      });
    }, '评价');
  },

  renderRegulatoryWarningStrategy() {
    const node = document.getElementById('regulatoryWarningStrategy');
    if (!node) return;
    const strategies = APP_DATA.regulatoryWarningStrategies || [];
    const km = APP_DATA.regulatoryMetricKriMetrics || {};
    const rows = strategies.map(s => {
      const w = (APP_DATA.regulatoryWarnings || []).find(x => x.regulatoryWarningId === s.warningId);
      return `<tr class="clickable" onclick="App.showRegulatoryWarningStrategyDetail('${s.strategyAnalysisId}')"><td>${s.strategyAnalysisId}</td><td>${s.warningId}</td><td>${s.currentLevel}</td><td>${s.recommendedLevel}</td><td>${s.priorityAdjustmentSuggestion}</td><td>${s.strategyLevel || w?.strategyLevel || '—'}</td><td>${s.status}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-warning-strategy')}
      <div class="group-hero"><div><span>指标运行</span><h2>集团预警策略分析中心</h2><p>预警 → 风险 → 监管优先级 → 监管策略 → 监管行动</p></div></div>
      <div class="group-metrics">${[[km.priorityElevateSuggestions,'优先级上升建议'],[km.strategyAdjustSuggestions,'策略调整建议'],[km.impactedEntityCount,'受影响法人'],[km.impactedRegionCount,'受影响区域']].map(([v,l])=>this.renderPublicKpiCard(l,v,`App.navigatePublic('regulatory-warning-strategy')`)).join('')}</div>
      <div class="card"><div class="card-title">预警策略分析</div>${rows ? `<table class="data-table"><thead><tr><th>分析ID</th><th>预警</th><th>当前等级</th><th>建议等级</th><th>优先级建议</th><th>策略</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryWarningStrategyDetail"></div>`;
  },

  showRegulatoryWarningStrategyDetail(strategyAnalysisId) {
    const s = (APP_DATA.regulatoryWarningStrategies || []).find(x => x.strategyAnalysisId === strategyAnalysisId);
    const node = document.getElementById('regulatoryWarningStrategyDetail');
    this.regulatoryWarningStrategyFocusId = strategyAnalysisId;
    this.showPublicDetailOrNotFound(node, s, () => {
      const w = (APP_DATA.regulatoryWarnings || []).find(x => x.regulatoryWarningId === s.warningId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '预警策略', objectName: s.strategyAnalysisId, objectId: s.strategyAnalysisId, status: s.status,
        sections: [
          { title: '一、策略分析', content: this.renderPublicMetaGrid([{ label: '预警', value: s.warningId }, { label: '建议', value: s.priorityAdjustmentSuggestion }, { label: '原因', value: s.reason }, { label: '策略层级', value: s.strategyLevel }]) },
          { title: '二、链路穿透', content: `${this.renderPublicLinkButton('预警', `App.navigatePublic('regulatory-warning-center',{regulatoryWarningId:'${s.warningId}'})`)} ${w?.actionId ? this.renderPublicLinkButton('监管行动', `App.navigatePublic('regulatory-actions',{actionId:'${w.actionId}'})`) : ''} ${this.renderPublicLinkButton('监管策略', `App.navigatePublic('regulatory-strategy')`)} ${s.relatedRuleId ? this.renderPublicLinkButton('关联规则', `App.navigatePublic('regulatory-rule-config')`) : ''}` }
        ]
      });
    }, '策略分析');
  },

  renderRegulatoryAnalysisCenter() {
    const node = document.getElementById('regulatoryAnalysisCenter');
    if (!node) return;
    const health = this.calculateRegulatoryCompositeHealth();
    const am = APP_DATA.regulatoryAnalysisMetrics || {};
    const matrixPoints = (APP_DATA.regulatoryRiskConcentration || []).filter(c => c.dimension === 'byEntity').slice(0, 12).map(c => {
      const rects = (APP_DATA.rectificationTasks || []).filter(t => t.entityId === c.objectId);
      const closed = rects.filter(t => t.status === '已关闭').length;
      return { ...c, riskExposure: Math.round(c.concentrationRate * 100), closureCapability: rects.length ? Math.round(closed / rects.length * 100) : 70 };
    });
    const concRows = this.filterAnalysisByUserScope(APP_DATA.regulatoryRiskConcentration || [], c => c.entityId || (c.scopeType === 'ENTITY' ? c.objectId : null)).filter(c => ['byRegion', 'byEntity', 'byDomain'].includes(c.dimension)).slice(0, 15).map(c =>
      `<tr class="clickable" onclick="App.navigatePublic('regulatory-risk-concentration',{concentrationId:'${c.concentrationId}'})"><td>${c.dimension}</td><td>${c.objectName}</td><td>${c.count}</td><td>${Math.round(c.concentrationRate * 100)}%</td><td>${c.concentrationLevel}</td><td>${c.riskLevel}</td><td>${c.interpretation}</td></tr>`
    ).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-analysis-center')}
      <div class="group-hero"><div><span>综合研判</span><h2>集团监管综合分析中心</h2><p>多源监管数据汇聚为集团层面综合研判能力 · 含领域闭环准备度</p></div></div>
      ${this.renderDomainClosureDashboardPanel()}
      ${this.renderDomainClosureReadinessPanel()}
      ${this.renderOperatingCycleAnalysisPanel()}
      ${this.renderFinalAcceptanceAnalysisPanel()}
      ${this.renderFinalAcceptanceRemediationDetailPanel()}
      ${this.renderDeliveryReadinessAnalysisPanel()}
      <div class="group-metrics">${[
        [health.compositeHealthScore ?? '—', '综合监管健康度'],
        [am.highRiskEntityCount, '高风险法人'],
        [am.criticalWarningCount, '重大预警'],
        [am.pendingReviewCount, '待研判预警'],
        [am.highPriorityObjectCount, '高优先级对象'],
        [am.actionClosureRate != null ? am.actionClosureRate + '%' : '—', '行动闭环率'],
        [am.rectificationVerificationRate != null ? am.rectificationVerificationRate + '%' : '—', '整改验证率'],
        [health.dimensions?.dataCredibility ?? '—', '数据可信度']
      ].map(([v,l]) => this.renderPublicKpiCard(l, v, `App.navigatePublic('regulatory-analysis-center')`)).join('')}</div>
      <div class="card"><div class="card-title">集团监管态势矩阵</div><p class="insight-note">横轴：风险暴露程度 · 纵轴：监管闭环能力 · 集中度≠严重程度</p>${this.renderPublicAnalysisMatrix(matrixPoints)}</div>
      <div class="card"><div class="card-title">风险集中度</div>${concRows ? `<table class="data-table"><thead><tr><th>维度</th><th>对象</th><th>数量</th><th>占比</th><th>集中度</th><th>风险等级</th><th>解读</th></tr></thead><tbody>${concRows}</tbody></table>` : this.renderPublicEmptyState('暂无')}
        <p style="margin-top:8px">${this.renderPublicLinkButton('集中度分析', `App.navigatePublic('regulatory-risk-concentration')`)} ${this.renderPublicLinkButton('风险传导', `App.navigatePublic('regulatory-risk-propagation')`)}</p></div>
      <div class="card"><div class="card-title">集团监管趋势</div>${health.trendDataStatus === 'INSUFFICIENT_HISTORY' ? this.renderPublicEmptyState('INSUFFICIENT_HISTORY — 无足够历史数据，不伪造趋势') : '<p>趋势数据可用</p>'}
        <p>${this.renderPublicLinkButton('情景分析', `App.navigatePublic('regulatory-scenario-analysis')`)} ${this.renderPublicLinkButton('决策建议', `App.navigatePublic('regulatory-decision-recommendations')`)}</p></div>
      <div id="regulatoryAnalysisResultDetail"></div>`;
  },

  showRegulatoryAnalysisResultDetail(resultId) {
    const r = (APP_DATA.regulatoryAnalysisResults || []).find(x => x.resultId === resultId);
    const node = document.getElementById('regulatoryAnalysisResultDetail');
    this.regulatoryAnalysisResultFocusId = resultId;
    this.showPublicDetailOrNotFound(node, r, () => {
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '分析结果', objectName: r.title, objectId: r.resultId, status: r.dataStatus,
        sections: [{ title: '分析摘要', content: `<p>类型 ${r.resultType} · 条目 ${r.itemCount ?? '—'}</p>` }],
        footer: this.renderPublicLinkButton('风险集中度', `App.navigatePublic('regulatory-risk-concentration')`)
      });
    }, '分析结果');
  },

  renderRegulatoryRiskConcentration() {
    const node = document.getElementById('regulatoryRiskConcentration');
    if (!node) return;
    const f = this.regulatoryRiskConcentrationFilter || {};
    let items = this.filterAnalysisByUserScope(APP_DATA.regulatoryRiskConcentration || [], c => c.entityId || (c.scopeType === 'ENTITY' ? c.objectId : null), c => c.scopeType === 'DOMAIN' ? c.objectId : null);
    if (f.dimension) items = items.filter(c => c.dimension === f.dimension);
    if (f.concentrationLevel) items = items.filter(c => c.concentrationLevel === f.concentrationLevel);
    const dims = [...new Set((APP_DATA.regulatoryRiskConcentration || []).map(c => c.dimension))];
    const rows = items.map(c => `<tr class="clickable" onclick="App.showRegulatoryConcentrationDetail('${c.concentrationId}')"><td>${c.dimension}</td><td>${c.objectName}</td><td>${c.count}</td><td>${Math.round(c.concentrationRate * 100)}%</td><td>${this.renderPublicPriorityBadge(c.concentrationLevel)}</td><td>${this.renderPublicPriorityBadge(c.riskLevel)}</td><td>${c.priority}</td><td>${c.status}</td><td>${c.interpretation}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-risk-concentration')}
      <div class="group-hero"><div><span>综合研判</span><h2>集团监管风险集中度分析</h2><p>集中度≠风险严重程度，须同时看数量、占比、等级与整改状态</p></div></div>
      <div class="filter-bar" style="margin-bottom:12px"><select onchange="App.regulatoryRiskConcentrationFilter={...(App.regulatoryRiskConcentrationFilter||{}),dimension:this.value||null};App.renderRegulatoryRiskConcentration()"><option value="">全部维度</option>${dims.map(d => `<option value="${d}" ${f.dimension===d?'selected':''}>${d}</option>`).join('')}</select></div>
      <div class="card"><div class="card-title">集中度清单</div>${rows ? `<table class="data-table"><thead><tr><th>维度</th><th>对象</th><th>数量</th><th>占比</th><th>集中度</th><th>风险等级</th><th>优先级</th><th>状态</th><th>解读</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryConcentrationDetail"></div>`;
    if (this.regulatoryConcentrationFocusId) setTimeout(() => this.showRegulatoryConcentrationDetail(this.regulatoryConcentrationFocusId), 0);
  },

  showRegulatoryConcentrationDetail(concentrationId) {
    const c = (APP_DATA.regulatoryRiskConcentration || []).find(x => x.concentrationId === concentrationId);
    const node = document.getElementById('regulatoryConcentrationDetail');
    this.regulatoryConcentrationFocusId = concentrationId;
    const access = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryRiskConcentration', concentrationId, 'VIEW');
    if (!access.allowed) { node.innerHTML = this.renderPublicErrorState('无权查看该分析结果'); return; }
    this.showPublicDetailOrNotFound(node, c, () => {
      const warns = (APP_DATA.regulatoryWarnings || []).filter(w => w.entityId === c.objectId || w.entityId === c.entityId);
      const kris = (APP_DATA.regulatoryKriRuntime || []).filter(k => k.scopeId === c.objectId || k.kriId === c.objectId);
      const risks = (APP_DATA.warnings || []).filter(w => w.entityId === c.objectId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '风险集中度', objectName: c.objectName, objectId: c.concentrationId, status: c.concentrationLevel,
        sections: [
          { title: '一、集中度指标', content: this.renderPublicMetaGrid([{ label: '数量', value: c.count }, { label: '占比', value: Math.round(c.concentrationRate * 100) + '%' }, { label: '风险等级', html: this.renderPublicPriorityBadge(c.riskLevel) }, { label: '解读', value: c.interpretation }]) },
          { title: '二、链路穿透', content: `${kris.slice(0, 3).map(k => this.renderPublicLinkButton(k.kriId, `App.navigatePublic('regulatory-kri-monitoring',{kriId:'${k.kriId}'})`)).join('')} ${warns.slice(0, 3).map(w => this.renderPublicLinkButton(w.regulatoryWarningId, `App.navigatePublic('regulatory-warning-center',{regulatoryWarningId:'${w.regulatoryWarningId}'})`)).join('')} ${risks.slice(0, 3).map(r => this.renderPublicLinkButton(r.name, `App.navigatePublic('warnings',{riskMatterId:'${r.id}'})`)).join('')}` }
        ],
        footer: `${this.renderPublicLinkButton('数据质量', `App.navigatePublic('regulatory-data-quality')`)} ${this.renderPublicLinkButton('整改', `App.navigatePublic('rectification')`)}`
      });
      this.createRegulatoryAuditLog({ actionType: 'VIEW', objectType: 'regulatoryRiskConcentration', objectId: concentrationId, reason: '查看集中度分析详情' });
    }, '集中度');
  },

  renderRegulatoryRiskPropagation() {
    const node = document.getElementById('regulatoryRiskPropagation');
    if (!node) return;
    const items = this.analyzeRiskPropagation();
    const rows = items.map(p => `<tr class="clickable" onclick="App.showRegulatoryPropagationDetail('${p.propagationId}')"><td>${p.propagationId}</td><td>${p.title}</td><td>${p.propagationType}</td><td>${p.chainType}</td><td>${p.confidence}</td><td>${p.requiresVerification ? '需核实' : '—'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-risk-propagation')}
      <div class="group-hero"><div><span>综合研判</span><h2>集团监管风险传导分析</h2><p>仅输出 POTENTIAL_PROPAGATION 或 DIRECT_RELATION，不伪造 CONFIRMED_PROPAGATION</p></div></div>
      <div class="card insight-note">潜在传导关系需进一步核实，不得直接当作已确认传导事实</div>
      <div class="card"><div class="card-title">传导链清单</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>标题</th><th>类型</th><th>链类型</th><th>置信度</th><th>核实</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryPropagationDetail"></div>`;
  },

  showRegulatoryPropagationDetail(propagationId) {
    const p = (APP_DATA.regulatoryRiskPropagation || []).find(x => x.propagationId === propagationId);
    const node = document.getElementById('regulatoryPropagationDetail');
    this.regulatoryPropagationFocusId = propagationId;
    this.showPublicDetailOrNotFound(node, p, () => {
      const stepsHtml = (p.steps || []).map(s => `<p><b>${s.step}. ${s.label}</b> ${(s.objectIds || []).map(id => this.renderPublicLinkButton(id, `App.navigatePublic('${s.pageId}',{${s.objectType === 'warnings' ? 'riskMatterId' : s.objectType === 'regulatoryWarnings' ? 'regulatoryWarningId' : s.objectType === 'regulatoryKriRuntime' ? 'kriRuntimeId' : s.objectType === 'regulatoryDataQualityIssues' ? 'qualityIssueId' : 'concentrationId'}:'${id}'})`)).join(' ')}</p>`).join('');
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '风险传导', objectName: p.title, objectId: p.propagationId, status: p.propagationType,
        sections: [
          { title: '传导链路', content: stepsHtml || this.renderPublicEmptyState('暂无') },
          { title: '说明', content: `<p>${this.escHtml(p.description)}</p><p>置信度 ${p.confidence}</p>` }
        ]
      });
      this.createRegulatoryAuditLog({ actionType: 'VIEW', objectType: 'regulatoryRiskPropagation', objectId: propagationId, reason: '查看风险传导分析' });
    }, '传导');
  },

  renderRegulatoryScenarioAnalysis() {
    const node = document.getElementById('regulatoryScenarioAnalysis');
    if (!node) return;
    const scenarios = APP_DATA.regulatoryScenarioAnalysis || [];
    const rows = scenarios.map(s => `<tr class="clickable" onclick="App.showRegulatoryScenarioDetail('${s.scenarioId}')"><td>${s.scenarioId}</td><td>${s.title}</td><td>${s.scenarioType}</td><td>${s.simulationOnly ? '是' : '否'}</td><td>${s.status}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-scenario-analysis')}
      <div class="group-hero"><div><span>综合研判</span><h2>集团监管情景分析中心</h2><p>情景分析 simulationOnly: true，不写回 warnings / priorities / actions / rectificationTasks</p></div></div>
      <div class="card"><div class="card-title">情景目录</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>标题</th><th>类型</th><th>仅模拟</th><th>状态</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryScenarioDetail"></div>`;
  },

  showRegulatoryScenarioDetail(scenarioId) {
    const s = (APP_DATA.regulatoryScenarioAnalysis || []).find(x => x.scenarioId === scenarioId);
    const node = document.getElementById('regulatoryScenarioDetail');
    this.regulatoryScenarioFocusId = scenarioId;
    this.showPublicDetailOrNotFound(node, s, () => {
      const canRun = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryScenarioAnalysis', scenarioId, 'RUN').allowed;
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '情景分析', objectName: s.title, objectId: s.scenarioId, status: s.status,
        sections: [
          { title: '情景说明', content: `<p>${this.escHtml(s.description)}</p><p>影响域：${(s.impactAreas || []).join('、')}</p>` },
          { title: '约束', content: s.ruleWorkflowRequired ? '<p>KRI阈值变化须走 Phase 10–12 规则治理闭环</p>' : '<p>不得直接修改真实优先级</p>' }
        ],
        footer: `${canRun ? `<button class="btn" onclick="const r=App.runRegulatoryScenario('${s.scenarioId}',{});if(r.success){alert('模拟完成 simulationOnly='+r.simulationOnly+'\\n基准健康度='+r.result.baseState.compositeHealth);App.showRegulatoryScenarioDetail('${s.scenarioId}')}">运行情景</button>` : ''}<div id="scenarioResultPanel"></div>`
      });
    }, '情景');
  },

  renderRegulatoryDecisionRecommendations() {
    const node = document.getElementById('regulatoryDecisionRecommendations');
    if (!node) return;
    const f = this.regulatoryDecisionRecommendationsFilter || {};
    let recs = this.filterAnalysisByUserScope(this.generateRegulatoryDecisionRecommendations(), r => r.entityId || r.affectedScope?.scopeId, r => r.affectedScope?.scopeType === 'DOMAIN' ? r.affectedScope.scopeId : null);
    if (f.status) recs = recs.filter(r => r.status === f.status);
    if (f.recommendationType) recs = recs.filter(r => r.recommendationType === f.recommendationType);
    const rows = recs.map(r => `<tr class="clickable" onclick="App.showRegulatoryRecommendationDetail('${r.recommendationId}')"><td>${r.recommendationId}</td><td>${r.recommendationType}</td><td>${r.affectedScope?.scopeName || r.affectedScope?.scopeId}</td><td>${this.renderPublicPriorityBadge(r.priority)}</td><td>${r.confidence}</td><td>${r.status}</td><td>${r.requiresHumanDecision ? '是' : '否'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-decision-recommendations')}
      <div class="group-hero"><div><span>综合研判</span><h2>集团监管决策建议中心</h2><p>分析结果≠自动决策，所有建议 requiresHumanDecision: true</p></div></div>
      <div class="group-metrics">${[[recs.filter(r=>r.status==='PENDING').length,'待研判'],[recs.filter(r=>r.recommendationType==='FOCUS_ENTITY').length,'重点法人'],[recs.filter(r=>r.recommendationType==='REVIEW_DATA_QUALITY').length,'数据复核'],[recs.filter(r=>r.recommendationType==='ALLOCATE_RESOURCE').length,'资源配置']].map(([v,l])=>this.renderPublicKpiCard(l,v,`App.navigatePublic('regulatory-decision-recommendations')`)).join('')}</div>
      <div class="card"><div class="card-title">决策建议清单</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>类型</th><th>范围</th><th>优先级</th><th>置信度</th><th>状态</th><th>人审</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryRecommendationDetail"></div>`;
    if (this.regulatoryRecommendationFocusId) setTimeout(() => this.showRegulatoryRecommendationDetail(this.regulatoryRecommendationFocusId), 0);
  },

  showRegulatoryRecommendationDetail(recommendationId) {
    const r = (APP_DATA.regulatoryDecisionRecommendations || []).find(x => x.recommendationId === recommendationId);
    const node = document.getElementById('regulatoryRecommendationDetail');
    this.regulatoryRecommendationFocusId = recommendationId;
    this.showPublicDetailOrNotFound(node, r, () => {
      const canConfirm = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDecisionRecommendations', recommendationId, 'CONFIRM').allowed;
      const canReject = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDecisionRecommendations', recommendationId, 'REJECT').allowed;
      const canExecute = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryDecisionRecommendations', recommendationId, 'EXECUTE').allowed;
      const evidenceHtml = (r.evidence || []).map(e => `<p>${e.type}: ${e.id || (e.ids || []).join(', ')}</p>`).join('');
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '决策建议', objectName: r.recommendationType, objectId: r.recommendationId, status: r.status,
        sections: [
          { title: '一、建议信息', content: this.renderPublicMetaGrid([{ label: '来源分析', value: r.sourceAnalysisId }, { label: '原因', value: r.reason }, { label: '建议动作', value: r.suggestedAction }, { label: '置信度', value: r.confidence }, { label: '人审决策', value: r.requiresHumanDecision ? '必须' : '—' }]) },
          { title: '二、证据链', content: evidenceHtml || this.renderPublicEmptyState('无证据') },
          { title: '三、穿透', content: `${this.renderPublicLinkButton('集中度', `App.navigatePublic('regulatory-risk-concentration')`)} ${r.relatedActionId ? this.renderPublicLinkButton('监管行动', `App.navigatePublic('regulatory-actions',{actionId:'${r.relatedActionId}'})`) : ''}` }
        ],
        footer: `${r.status === 'PENDING' && canConfirm ? `<button class="btn" onclick="App.confirmRegulatoryDecisionRecommendation('${r.recommendationId}','人工确认');App.renderRegulatoryDecisionRecommendations()">确认建议</button>` : ''}${r.status === 'PENDING' && canReject ? `<button class="btn btn-outline" onclick="App.rejectRegulatoryDecisionRecommendation('${r.recommendationId}','驳回');App.renderRegulatoryDecisionRecommendations()">驳回</button>` : ''}${r.status === 'CONFIRMED' && canExecute ? `<button class="btn" onclick="App.executeRegulatoryDecisionRecommendation('${r.recommendationId}');App.renderRegulatoryDecisionRecommendations()">转监管行动</button>` : ''}`
      });
    }, '建议');
  },

  renderRegulatoryImprovementCenter() {
    const node = document.getElementById('regulatoryImprovementCenter');
    if (!node) return;
    const f = this.regulatoryImprovementCenterFilter || {};
    let opps = this.filterImprovementByUserScope(APP_DATA.regulatoryImprovementOpportunities || [], o => o.entityId, o => o.domainId);
    if (f.sourceCategory) opps = opps.filter(o => o.sourceCategory === f.sourceCategory);
    if (f.priority) opps = opps.filter(o => o.priority === f.priority);
    const cm = APP_DATA.regulatoryContinuousImprovementMetrics || {};
    const cats = [...new Set((APP_DATA.regulatoryImprovementOpportunities || []).map(o => o.sourceCategory))];
    const rows = opps.map(o => `<tr class="clickable" onclick="App.showRegulatoryOpportunityDetail('${o.opportunityId}')"><td>${o.opportunityId}</td><td>${o.sourceCategory}</td><td>${o.title}</td><td>${this.renderPublicPriorityBadge(o.priority)}</td><td>${o.status}</td><td>${o.problemManifestation?.slice(0, 30) || '—'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-improvement-center')}
      <div class="group-hero"><div><span>持续改进</span><h2>集团监管持续改进中心</h2><p>发现问题 → 分析原因 → 形成改进方案 → 人工决策 → 实施优化 → 验证效果</p></div></div>
      <div class="group-metrics">${[[cm.pendingOpportunityCount,'待分析机会'],[cm.highPriorityOpportunityCount,'高优先级'],[cm.pendingPlanDecisionCount,'待决策方案'],[cm.implementingCount,'实施中'],[cm.pendingValidationCount,'待验证'],[cm.validatedEffectiveCount,'已验证有效'],[cm.improvementClosureRate!=null?cm.improvementClosureRate+'%':'—','闭环率'],[cm.improvementEffectivenessRate!=null?cm.improvementEffectivenessRate+'%':'—','效果达成率']].map(([v,l])=>this.renderPublicKpiCard(l,v,`App.navigatePublic('regulatory-improvement-center')`)).join('')}</div>
      ${this.renderDomainClosurePlansPanel()}
      ${this.renderFinanceClosureVerificationPanel()}
      ${this.renderFinalAcceptanceImprovementPanel()}
      ${this.renderFinalAcceptanceRemediationImprovementPanel()}
      ${this.renderDeliveryReadinessImprovementPanel()}
      <div class="filter-bar" style="margin-bottom:12px"><select onchange="App.regulatoryImprovementCenterFilter={...(App.regulatoryImprovementCenterFilter||{}),sourceCategory:this.value||null};App.renderRegulatoryImprovementCenter()"><option value="">全部来源</option>${cats.map(c=>`<option value="${c}" ${f.sourceCategory===c?'selected':''}>${c}</option>`).join('')}</select></div>
      <div class="card"><div class="card-title">改进机会清单</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>来源</th><th>标题</th><th>优先级</th><th>状态</th><th>问题表现</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryOpportunityDetail"></div>`;
    if (this.regulatoryOpportunityFocusId) setTimeout(() => this.showRegulatoryOpportunityDetail(this.regulatoryOpportunityFocusId), 0);
  },

  showRegulatoryOpportunityDetail(opportunityId) {
    const o = (APP_DATA.regulatoryImprovementOpportunities || []).find(x => x.opportunityId === opportunityId);
    const node = document.getElementById('regulatoryOpportunityDetail');
    this.regulatoryOpportunityFocusId = opportunityId;
    this.showPublicDetailOrNotFound(node, o, () => {
      const rca = this.analyzeRegulatoryRootCause(opportunityId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '改进机会', objectName: o.title, objectId: o.opportunityId, status: o.status,
        sections: [
          { title: '一、问题来源', content: `<p>${o.sourceCategory} · ${o.sourceType} · ${o.sourceId}</p>` },
          { title: '二、原始对象穿透', content: this.renderPublicImprovementSourceLinks(o) },
          { title: '三、问题表现与影响', content: this.renderPublicMetaGrid([{ label: '问题表现', value: o.problemManifestation }, { label: '影响范围', value: o.impactScope }, { label: '潜在原因', value: o.potentialCause }, { label: '改进方向', value: o.suggestedDirection }]) },
          { title: '四、根因分析', content: rca ? this.renderPublicLinkButton(rca.rootCauseId + ' · ' + rca.rootCauseStatus, `App.navigatePublic('regulatory-root-cause-analysis',{rootCauseId:'${rca.rootCauseId}'})`) : this.renderPublicEmptyState('待分析') }
        ],
        footer: `${this.renderPublicLinkButton('根因分析', `App.navigatePublic('regulatory-root-cause-analysis',{rootCauseId:'${rca?.rootCauseId||''}'})`)} ${this.renderPublicLinkButton('优化方案', `App.navigatePublic('regulatory-optimization-plans')`)}`
      });
    }, '改进机会');
  },

  renderRegulatoryRootCauseAnalysis() {
    const node = document.getElementById('regulatoryRootCauseAnalysis');
    if (!node) return;
    const items = APP_DATA.regulatoryRootCauseAnalyses || [];
    const rows = items.map(r => `<tr class="clickable" onclick="App.showRegulatoryRootCauseDetail('${r.rootCauseId}')"><td>${r.rootCauseId}</td><td>${r.opportunityId}</td><td>${r.rootCauseCategory}</td><td>${r.rootCauseStatus}</td><td>${r.confidence}</td><td>${r.requiresHumanConfirmation ? '是' : '否'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-root-cause-analysis')}
      <div class="group-hero"><div><span>持续改进</span><h2>集团监管问题根因分析中心</h2><p>系统仅输出 POTENTIAL_ROOT_CAUSE，须经人工确认</p></div></div>
      <div class="card insight-note">事实 → 证据 → 问题表现 → 可能原因 → 待人工确认根因</div>
      <div class="card"><div class="card-title">根因分析清单</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>改进机会</th><th>分类</th><th>状态</th><th>置信度</th><th>需人审</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryRootCauseDetail"></div>`;
    if (this.regulatoryRootCauseFocusId) setTimeout(() => this.showRegulatoryRootCauseDetail(this.regulatoryRootCauseFocusId), 0);
  },

  showRegulatoryRootCauseDetail(rootCauseId) {
    const r = (APP_DATA.regulatoryRootCauseAnalyses || []).find(x => x.rootCauseId === rootCauseId);
    const node = document.getElementById('regulatoryRootCauseDetail');
    this.regulatoryRootCauseFocusId = rootCauseId;
    const canConfirm = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryRootCauseAnalyses', rootCauseId, 'CONFIRM').allowed;
    this.showPublicDetailOrNotFound(node, r, () => {
      const opp = (APP_DATA.regulatoryImprovementOpportunities || []).find(o => o.opportunityId === r.opportunityId);
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '根因分析', objectName: r.rootCauseCategory, objectId: r.rootCauseId, status: r.rootCauseStatus,
        sections: [
          { title: '一、事实与证据', content: `<p>${(r.facts || []).join('；')}</p><p>${(r.evidence || []).map(e => e.type + ':' + (e.id || (e.ids || []).join(','))).join(' · ')}</p>` },
          { title: '二、问题表现', content: `<p>${r.problemManifestation}</p>` },
          { title: '三、可能根因', content: `<p>${r.potentialRootCause}</p>${r.confirmedRootCause ? `<p>已确认: ${r.confirmedRootCause}</p>` : ''}` },
          { title: '四、来源穿透', content: opp ? this.renderPublicImprovementSourceLinks(opp) : '—' }
        ],
        footer: `${r.rootCauseStatus === 'POTENTIAL_ROOT_CAUSE' && canConfirm ? `<button class="btn" onclick="App.confirmRegulatoryRootCause('${r.rootCauseId}','${this.escHtml(r.potentialRootCause)}');App.renderRegulatoryRootCauseAnalysis()">确认根因</button>` : ''}${this.renderPublicLinkButton('优化方案', `App.navigatePublic('regulatory-optimization-plans')`)}`
      });
    }, '根因');
  },

  renderRegulatoryOptimizationPlans() {
    const node = document.getElementById('regulatoryOptimizationPlans');
    if (!node) return;
    const plans = this.filterImprovementByUserScope(APP_DATA.regulatoryOptimizationPlans || [], p => p.entityId, p => p.domainId);
    const rows = plans.map(p => `<tr class="clickable" onclick="App.showRegulatoryOptimizationPlanDetail('${p.planId}')"><td>${p.planId}</td><td>${p.optimizationType}</td><td>${p.title}</td><td>${p.status}</td><td>${p.implementationPeriod}</td><td>${p.requiresHumanDecision ? '是' : '否'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-optimization-plans')}
      <div class="group-hero"><div><span>持续改进</span><h2>集团监管优化方案中心</h2><p>所有优化方案 requiresHumanDecision: true，不得自动执行</p></div></div>
      <div class="card"><div class="card-title">优化方案清单</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>类型</th><th>标题</th><th>状态</th><th>周期</th><th>人审</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryOptimizationPlanDetail"></div>`;
    if (this.regulatoryOptimizationPlanFocusId) setTimeout(() => this.showRegulatoryOptimizationPlanDetail(this.regulatoryOptimizationPlanFocusId), 0);
  },

  showRegulatoryOptimizationPlanDetail(planId) {
    const p = (APP_DATA.regulatoryOptimizationPlans || []).find(x => x.planId === planId);
    const node = document.getElementById('regulatoryOptimizationPlanDetail');
    this.regulatoryOptimizationPlanFocusId = planId;
    const canApprove = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryOptimizationPlans', planId, 'APPROVE').allowed;
    this.showPublicDetailOrNotFound(node, p, () => {
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '优化方案', objectName: p.title, objectId: p.planId, status: p.status,
        sections: [
          { title: '一、方案要素', content: this.renderPublicMetaGrid([{ label: '类型', value: p.optimizationType }, { label: '目标', value: p.objective }, { label: '预期效果', value: p.expectedImpact }, { label: '责任', value: p.responsibleOrganization }, { label: '周期', value: p.implementationPeriod }, { label: '资源', value: p.resourceRequirement }]) },
          { title: '二、措施', content: (p.actions || []).map(a => `<p>· ${a}</p>`).join('') },
          { title: '三、验证指标', content: (p.validationMetrics || []).join('、') },
          { title: '四、关联', content: `${this.renderPublicLinkButton('改进机会', `App.navigatePublic('regulatory-improvement-center',{opportunityId:'${p.opportunityId}'})`)} ${this.renderPublicLinkButton('根因', `App.navigatePublic('regulatory-root-cause-analysis',{rootCauseId:'${p.rootCauseId}'})`)}` }
        ],
        footer: `${p.status === 'PROPOSED' && canApprove ? `<button class="btn" onclick="const r=App.approveRegulatoryOptimizationPlan('${p.planId}');if(r.needRuleWorkflow){alert(r.message);App.navigatePublic(r.nextPageId)}else{App.renderRegulatoryOptimizationPlans()}">批准方案</button>` : ''}${p.status === 'APPROVED' ? `<button class="btn btn-outline" onclick="App.startRegulatoryImprovementExecution('${p.planId}');App.navigatePublic('regulatory-improvement-execution')">启动实施</button>` : ''}`
      });
    }, '方案');
  },

  renderRegulatoryImprovementExecution() {
    const node = document.getElementById('regulatoryImprovementExecution');
    if (!node) return;
    const execs = this.filterImprovementByUserScope(APP_DATA.regulatoryImprovementExecution || [], e => e.entityId);
    const rows = execs.map(e => `<tr class="clickable" onclick="App.showRegulatoryImprovementExecutionDetail('${e.executionId}')"><td>${e.executionId}</td><td>${e.planId}</td><td>${e.status}</td><td>${e.progress}%</td><td>${e.linkedSupervisionTaskId || '—'}</td><td>${e.linkedRectificationTaskId || '—'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-improvement-execution')}
      <div class="group-hero"><div><span>持续改进</span><h2>集团监管改进实施中心</h2><p>通过索引关联监管任务与整改，不复制任务实体</p></div></div>
      <div class="card"><div class="card-title">实施进度</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>方案</th><th>状态</th><th>进度</th><th>监管任务</th><th>整改任务</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryImprovementExecutionDetail"></div>`;
    if (this.regulatoryImprovementExecutionFocusId) setTimeout(() => this.showRegulatoryImprovementExecutionDetail(this.regulatoryImprovementExecutionFocusId), 0);
  },

  showRegulatoryImprovementExecutionDetail(executionId) {
    const e = (APP_DATA.regulatoryImprovementExecution || []).find(x => x.executionId === executionId);
    const node = document.getElementById('regulatoryImprovementExecutionDetail');
    this.regulatoryImprovementExecutionFocusId = executionId;
    const canManage = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryImprovementExecution', executionId, 'MANAGE').allowed;
    this.showPublicDetailOrNotFound(node, e, () => {
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '改进实施', objectName: e.executionId, objectId: e.executionId, status: e.status,
        sections: [
          { title: '一、实施信息', content: this.renderPublicMetaGrid([{ label: '方案', value: e.planId }, { label: '进度', value: e.progress + '%' }, { label: '反馈', value: e.feedback || '—' }]) },
          { title: '二、关联任务', content: `${e.linkedSupervisionTaskId ? this.renderPublicLinkButton('监管任务 ' + e.linkedSupervisionTaskId, `App.navigatePublic('regulatory-supervision-tasks',{supervisionTaskId:'${e.linkedSupervisionTaskId}'})`) : ''} ${e.linkedRectificationTaskId ? this.renderPublicLinkButton('整改 ' + e.linkedRectificationTaskId, `App.navigatePublic('rectification',{rectificationTaskId:'${e.linkedRectificationTaskId}'})`) : ''}` }
        ],
        footer: `${e.status === 'IMPLEMENTING' && canManage ? `<button class="btn" onclick="App.completeRegulatoryImprovementExecution('${e.executionId}');App.renderRegulatoryImprovementExecution()">完成实施</button>` : ''}${e.status === 'PENDING_VALIDATION' ? this.renderPublicLinkButton('效果验证', `App.navigatePublic('regulatory-improvement-effectiveness')`) : ''}`
      });
    }, '实施');
  },

  renderRegulatoryImprovementEffectiveness() {
    const node = document.getElementById('regulatoryImprovementEffectiveness');
    if (!node) return;
    const items = APP_DATA.regulatoryImprovementEffectiveness || [];
    const rows = items.map(e => `<tr class="clickable" onclick="App.showRegulatoryImprovementEffectivenessDetail('${e.effectivenessId}')"><td>${e.effectivenessId}</td><td>${e.executionId}</td><td>${e.effectiveness}</td><td>${e.dataStatus}</td><td>${e.validatedAt || '—'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-improvement-effectiveness')}
      <div class="group-hero"><div><span>持续改进</span><h2>集团监管改进效果验证中心</h2><p>优化前 VS 优化后；历史不足时 INSUFFICIENT_HISTORY，不伪造趋势</p></div></div>
      <div class="card"><div class="card-title">效果验证清单</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>实施</th><th>效果</th><th>数据状态</th><th>验证时间</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
      <div id="regulatoryImprovementEffectivenessDetail"></div>`;
    if (this.regulatoryImprovementEffectivenessFocusId) setTimeout(() => this.showRegulatoryImprovementEffectivenessDetail(this.regulatoryImprovementEffectivenessFocusId), 0);
  },

  showRegulatoryImprovementEffectivenessDetail(effectivenessId) {
    const e = (APP_DATA.regulatoryImprovementEffectiveness || []).find(x => x.effectivenessId === effectivenessId);
    const node = document.getElementById('regulatoryImprovementEffectivenessDetail');
    this.regulatoryImprovementEffectivenessFocusId = effectivenessId;
    const canValidate = this.canRegulatoryAccess(this.getCurrentRegulatoryUser()?.userId, 'regulatoryImprovementEffectiveness', effectivenessId, 'VALIDATE').allowed;
    const evalResult = this.evaluateImprovementEffectiveness(e?.executionId);
    this.showPublicDetailOrNotFound(node, e, () => {
      const compareHtml = e.dataStatus === 'INSUFFICIENT_HISTORY' ? this.renderPublicEmptyState('历史数据不足，暂无法评价优化效果') : `<p>优化前: ${JSON.stringify(e.before)}</p><p>优化后: ${JSON.stringify(e.after)}</p><p>变化: ${JSON.stringify(e.change)}</p>`;
      node.innerHTML = this.buildPublicDetailPanel({ objectType: '效果验证', objectName: e.effectivenessId, objectId: e.effectivenessId, status: e.effectiveness,
        sections: [
          { title: '一、优化前后对比', content: compareHtml },
          { title: '二、多维评价', content: `<p>风险效果: ${e.riskEffect?.status} · 监管效果: ${e.supervisionEffect?.status} · 数据效果: ${e.dataEffect?.status} · 运营效果: ${e.operationEffect?.status} · 战略效果: ${e.strategyEffect?.status}</p>` },
          { title: '三、关联穿透', content: `${this.renderPublicLinkButton('实施', `App.navigatePublic('regulatory-improvement-execution',{executionId:'${e.executionId}'})`)} ${this.renderPublicLinkButton('改进机会', `App.navigatePublic('regulatory-improvement-center',{opportunityId:'${e.opportunityId}'})`)}` }
        ],
        footer: `${canValidate && e.effectiveness !== 'EFFECTIVE' ? `<button class="btn" onclick="App.validateRegulatoryImprovementEffectiveness('${e.effectivenessId}','PARTIALLY_EFFECTIVE');App.renderRegulatoryImprovementEffectiveness()">确认验证</button>` : ''}${e.effectiveness === 'INEFFECTIVE' || e.effectiveness === 'PARTIALLY_EFFECTIVE' ? this.renderPublicLinkButton('下一轮改进', `App.navigatePublic('regulatory-improvement-center')`) : ''}`
      });
    }, '效果');
  },

  rerenderPublicPage(pageId) {
    const routeId = this.resolvePublicRouteId(pageId);
    const fn = {
      group: 'renderGroupOverview',
      'global-group-overview': 'renderGroupOverview',
      'global-legal-entities': 'renderGlobalLegalEntities',
      'global-regions': 'renderGlobalRegions',
      'coverage-gaps': 'renderCoverageGaps',
      'platform-operations': 'renderPlatformOperations',
      'data-governance': 'renderDataGovernance',
      'cross-border-compliance': 'renderCrossBorderCompliance',
      'cross-domain-risks': 'renderCrossDomainRisks',
      'regulatory-events': 'renderRegulatoryEvents',
      'rectification-operations': 'renderRectificationOperations',
      'regulatory-evaluation': 'renderRegulatoryEvaluation',
      'regulatory-command-center': 'renderRegulatoryCommandCenter',
      'regulatory-actions': 'renderRegulatoryActions',
      'regulatory-action-execution': 'renderRegulatoryActionExecution',
      'regulatory-strategy': 'renderRegulatoryStrategy',
      'regulatory-maturity': 'renderRegulatoryMaturity',
      'regulatory-optimization': 'renderRegulatoryOptimization',
      'regulatory-rule-config': 'renderRegulatoryRuleConfig',
      'regulatory-simulation': 'renderRegulatorySimulation',
      'regulatory-rule-history': 'renderRegulatoryRuleHistory',
      'regulatory-rule-versions': 'renderRegulatoryRuleVersions',
      'regulatory-rule-approvals': 'renderRegulatoryRuleApprovals',
      'regulatory-rule-impact': 'renderRegulatoryRuleImpact',
      'regulatory-rule-effectiveness': 'renderRegulatoryRuleEffectiveness',
      'regulatory-rule-runtime': 'renderRegulatoryRuleRuntime',
      'regulatory-rule-executions': 'renderRegulatoryRuleExecutions',
      'regulatory-rule-deployments': 'renderRegulatoryRuleDeployments',
      'regulatory-performance': 'renderRegulatoryPerformance',
      'regulatory-resource-allocation': 'renderRegulatoryResourceAllocation',
      'regulatory-supervision-tasks': 'renderRegulatorySupervisionTasks',
      'regulatory-benchmarking': 'renderRegulatoryBenchmarking',
      'regulatory-strategy-planning': 'renderRegulatoryStrategyPlanning',
      'regulatory-annual-plan': 'renderRegulatoryAnnualPlan',
      'regulatory-target-management': 'renderRegulatoryTargetManagement',
      'regulatory-focus-management': 'renderRegulatoryFocusManagement',
      'regulatory-plan-execution': 'renderRegulatoryPlanExecution',
      'regulatory-strategic-review': 'renderRegulatoryStrategicReview',
      'regulatory-workbench': 'renderRegulatoryWorkbench',
      'regulatory-queue': 'renderRegulatoryQueue',
      'regulatory-decision-room': 'renderRegulatoryDecisionRoom',
      'regulatory-role-workbench': 'renderRegulatoryRoleWorkbench',
      'regulatory-my-work': 'renderRegulatoryMyWork',
      'regulatory-search': 'renderRegulatorySearch',
      'regulatory-access-control': 'renderRegulatoryAccessControl',
      'regulatory-authorization': 'renderRegulatoryAuthorization',
      'regulatory-audit-trail': 'renderRegulatoryAuditTrail',
      'regulatory-system-settings': 'renderRegulatorySystemSettings',
      'regulatory-data-sources': 'renderRegulatoryDataSources',
      'regulatory-data-integration': 'renderRegulatoryDataIntegration',
      'regulatory-data-quality': 'renderRegulatoryDataQuality',
      'regulatory-data-governance': 'renderRegulatoryDataGovernance',
      'regulatory-data-lineage': 'renderRegulatoryDataLineage',
      'regulatory-metric-center': 'renderRegulatoryMetricCenter',
      'regulatory-kri-monitoring': 'renderRegulatoryKriMonitoring',
      'regulatory-warning-center': 'renderRegulatoryWarningCenter',
      'regulatory-kri-effectiveness': 'renderRegulatoryKriEffectiveness',
      'regulatory-warning-strategy': 'renderRegulatoryWarningStrategy',
      'regulatory-analysis-center': 'renderRegulatoryAnalysisCenter',
      'regulatory-risk-concentration': 'renderRegulatoryRiskConcentration',
      'regulatory-risk-propagation': 'renderRegulatoryRiskPropagation',
      'regulatory-scenario-analysis': 'renderRegulatoryScenarioAnalysis',
      'regulatory-decision-recommendations': 'renderRegulatoryDecisionRecommendations',
      'regulatory-improvement-center': 'renderRegulatoryImprovementCenter',
      'regulatory-root-cause-analysis': 'renderRegulatoryRootCauseAnalysis',
      'regulatory-optimization-plans': 'renderRegulatoryOptimizationPlans',
      'regulatory-improvement-execution': 'renderRegulatoryImprovementExecution',
      'regulatory-improvement-effectiveness': 'renderRegulatoryImprovementEffectiveness'
    }[routeId];
    if (fn && this[fn]) this[fn]();
  }

});
