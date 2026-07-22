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
      'regulatoryImprovementEffectiveness:VIEW': 'EFFECTIVENESS_VIEW', 'regulatoryImprovementEffectiveness:VALIDATE': 'EFFECTIVENESS_VALIDATE'
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
      <div class="group-hero"><div><span>集团总部监管视角</span><h2>集团监管总览</h2><p>统一入口：监管对象、数据覆盖、风险事项、跨境合规、跨领域风险与整改闭环。</p></div><div>数据覆盖率 <b>${m.dataCoverageRate}</b></div></div>
      ${this.renderGroupOverviewFilterBar()}
      <div class="group-metrics" id="groupOverviewMetrics">${metricCards.map(([v, l, nav]) => `<button class="metric-card" onclick="${nav}"><div class="value">${v}</div><div class="label">${l}</div></button>`).join('')}</div>
      ${this.renderGroupOverviewRegulatoryChain(m)}
      ${this.renderGroupOverviewObjectTree(m)}
      ${this.renderGroupOverviewCoverageSummary(m)}
      ${this.renderGroupOverviewRiskSummary(m)}
      ${this.renderGroupOverviewRectificationSummary(m)}
      ${this.renderGroupOverviewHealthSummary()}
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
      ${this.renderPlatformHealthPanel()}
      ${this.renderCapabilityMapOverview()}`;
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
    const types = ['DECISION','ACTION','SUPERVISION_TASK','FEEDBACK','VERIFICATION','RULE_APPROVAL','RULE_DEPLOYMENT','RULE_ANOMALY','STRATEGIC_REVIEW','PLAN_VARIANCE'];
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
      <div class="group-two">
        <div class="card"><div class="card-title">当前最重要的问题</div>${urgentHtml}</div>
        <div class="card"><div class="card-title">我的待办</div>${pendingHtml ? `<table class="data-table"><thead><tr><th>类型</th><th>标题</th><th>优先级</th><th>截止</th><th>超期</th></tr></thead><tbody>${pendingHtml}</tbody></table>` : this.renderPublicEmptyState('暂无')}<p>${this.renderPublicLinkButton('我的监管工作', `App.navigatePublic('regulatory-my-work')`)}</p></div>
      </div>
      <div class="card"><div class="card-title">我的重点对象</div><p>${focusHtml || this.renderPublicEmptyState('暂无')}</p>
        <p>${(wb?.quickActions || []).map(a => this.renderPublicLinkButton(a.label, `App.navigatePublic('${a.pageId}')`)).join(' ')}</p>
      </div>
      <div class="card"><div class="card-title">数据运行视图</div>
        ${(() => {
          const dm = APP_DATA.regulatoryDataGovernanceMetrics || {};
          const roleType = role.roleType;
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
        })()}
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
    const kpi = [[dm.sourceCount, '数据源总数'], [dm.onlineSourceCount, '在线数据源'], [dm.offlineSourceCount, '异常数据源'], [sources.filter(s => s.lastSyncAt && s.lastSyncAt < '2026-07-22').length, '近24h未同步'], [dm.sourceCount ? Math.round(dm.onlineSourceCount / dm.sourceCount * 100) + '%' : '—', '数据覆盖率'], [dm.severeIssueCount, '质量异常']];
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
          { title: '三、血缘影响', content: `<p>受影响 KRI: ${impact.affectedKris.length} · 受影响风险: ${impact.affectedRisks.length} · 受影响行动: ${impact.affectedActions.length}</p>${this.renderPublicLinkButton('查看血缘影响', `App.navigatePublic('regulatory-data-lineage',{sourceId:'${sourceId}'})`)}` }
        ],
        footer: `${this.renderPublicLinkButton('数据接入', `App.navigatePublic('regulatory-data-integration',{sourceId:'${sourceId}'})`)} ${this.renderPublicLinkButton('数据血缘', `App.navigatePublic('regulatory-data-lineage',{sourceId:'${sourceId}'})`)}`
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
    const kpi = [[todayJobs, '今日接入任务'], [successRate + '%', '成功率'], [jobs.filter(j => j.status === 'FAILED').length, '失败任务'], [jobs.filter(j => j.status === 'PARTIAL_SUCCESS').length, '部分成功'], [jobs.filter(j => j.retryCount > 0 && j.status === 'FAILED').length, '待重试'], [APP_DATA.regulatoryDataGovernanceMetrics?.dataDelayHours + 'h' || '—', '数据延迟']];
    const rows = jobs.map(j => {
      const src = (APP_DATA.regulatoryDataSources || []).find(s => s.sourceId === j.sourceId);
      const ds = (APP_DATA.regulatoryDataSets || []).find(d => d.dataSetId === j.dataSetId);
      return `<tr class="clickable" onclick="App.showRegulatoryDataIntegrationDetail('${j.integrationJobId}')"><td>${src?.sourceName || j.sourceId}</td><td>${j.integrationJobId}</td><td>${ds?.dataSetName || j.dataSetId}</td><td>${this.renderPublicStatusBadge(j.status)}</td><td>${j.recordCount}</td><td>${j.successCount}/${j.failedCount}</td><td>${j.retryCount}</td><td>${j.completedAt || '—'}</td></tr>`;
    }).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-data-integration')}
      <div class="group-hero"><div><span>数据运行</span><h2>集团监管数据接入中心</h2><p>数据源 → 接入任务 → 数据集 → 记录 → 质量校验</p></div></div>
      <div class="group-metrics">${kpi.map(([v, l]) => this.renderPublicKpiCard(l, v, `App.navigatePublic('regulatory-data-integration')`)).join('')}</div>
      <div class="card"><div class="card-title">接入任务</div>${rows ? `<table class="data-table"><thead><tr><th>数据源</th><th>任务</th><th>数据集</th><th>状态</th><th>记录数</th><th>成功/失败</th><th>重试</th><th>完成</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
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
    const rows = kris.map(k => `<tr class="clickable" onclick="App.showRegulatoryKriRuntimeDetail('${k.kriRuntimeId}')"><td>${k.kriId}</td><td>${k.kriName}</td><td>${k.metricId || '—'}</td><td>${k.threshold}</td><td>${k.currentValue}</td><td>${this.renderPublicStatusBadge(k.status)}</td><td>${k.credibilityScore ?? '—'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-kri-monitoring')}
      <div class="group-hero"><div><span>指标运行</span><h2>集团KRI运行监测中心</h2><p>KRI监测 → 阈值判断 → 预警识别</p></div></div>
      <div class="group-metrics">${[[km.kriCount,'KRI总数'],[km.normalKriCount,'正常'],[km.attentionKriCount,'关注'],[km.warningKriCount,'预警'],[km.criticalKriCount,'严重'],[km.insufficientDataKriCount,'数据不足']].map(([v,l])=>this.renderPublicKpiCard(l,v,`App.navigatePublic('regulatory-kri-monitoring')`)).join('')}</div>
      <div class="card"><div class="card-title">KRI运行清单</div>${rows ? `<table class="data-table"><thead><tr><th>KRI</th><th>名称</th><th>指标</th><th>阈值</th><th>当前值</th><th>状态</th><th>可信度</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('无可见KRI')}</div>
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
    const rows = warns.map(w => `<tr class="clickable" onclick="App.showRegulatoryWarningDetail('${w.regulatoryWarningId}')"><td>${w.regulatoryWarningId}</td><td>${w.kriId}</td><td>${this.renderPublicPriorityBadge(w.warningLevel)}</td><td>${w.entityId}</td><td>${w.status}</td><td>${w.credibilityScore ?? '—'}</td><td>${w.riskMatterId || '—'}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton('regulatory-warning-center')}
      <div class="group-hero"><div><span>指标运行</span><h2>集团监管预警中心</h2><p>KRI异常 → 预警 → 人工研判 → 风险事件（预警≠风险事件）</p></div></div>
      <div class="group-metrics">${[[km.warningTotalCount,'预警总数'],[km.attentionWarningCount,'ATTENTION'],[km.warningLevelCount,'WARNING'],[km.criticalWarningCount,'CRITICAL'],[km.pendingReviewCount,'待研判']].map(([v,l])=>this.renderPublicKpiCard(l,v,`App.navigatePublic('regulatory-warning-center')`)).join('')}</div>
      <div class="card"><div class="card-title">监管预警清单</div>${rows ? `<table class="data-table"><thead><tr><th>ID</th><th>KRI</th><th>等级</th><th>法人</th><th>状态</th><th>可信度</th><th>风险事项</th></tr></thead><tbody>${rows}</tbody></table>` : this.renderPublicEmptyState('暂无')}</div>
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
      <div class="group-hero"><div><span>综合研判</span><h2>集团监管综合分析中心</h2><p>多源监管数据汇聚为集团层面综合研判能力</p></div></div>
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
