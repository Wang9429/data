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
    return ctx;
  },

  restorePublicFilters(pageId, filters) {
    if (!filters) return;
    if (pageId === 'global-group-overview' || pageId === 'group') this.groupOverviewFilter = { ...filters };
    if (pageId === 'regulatory-events') this.regulatoryEventFilter = { ...filters };
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

  renderPublicBackButton() {
    if (!(this.publicNavHistory || []).length) return '';
    return `<button class="btn btn-outline public-back-btn" onclick="App.goBackPublic()" style="margin-bottom:12px">← 返回上一层</button>`;
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
    if (pageId === 'data-governance') return this.dataGovFilter || {};
    if (pageId === 'cross-border-compliance') return this.cbFilter || {};
    if (pageId === 'cross-domain-risks') return this.cdrFilter || {};
    return this.publicFilter || {};
  },

  setPublicFilter(pageId, key, value) {
    const store = pageId === 'global-group-overview' || pageId === 'group' ? 'groupOverviewFilter'
      : pageId === 'regulatory-events' ? 'regulatoryEventFilter'
      : pageId === 'data-governance' ? 'dataGovFilter'
      : pageId === 'cross-border-compliance' ? 'cbFilter'
      : pageId === 'cross-domain-risks' ? 'cdrFilter' : 'publicFilter';
    this[store] = { ...(this[store] || {}), [key]: value || null };
    Object.keys(this[store]).forEach(k => { if (!this[store][k]) delete this[store][k]; });
  },

  clearPublicFilter(pageId) {
    if (pageId === 'global-group-overview' || pageId === 'group') this.groupOverviewFilter = {};
    else if (pageId === 'regulatory-events') { this.regulatoryEventFilter = {}; this.regulatoryEventFocusId = null; }
    else if (pageId === 'data-governance') this.dataGovFilter = {};
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
    const catalogIds = ['global-legal-entities', 'global-regions', 'coverage-gaps', 'platform-operations', 'data-governance', 'cross-border-compliance', 'cross-domain-risks', 'warnings', 'rectification', 'regulatory-events', 'rectification-operations', 'regulatory-evaluation'];
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
      'regulatory-evaluation': { core: `区域排名 ${(APP_DATA.regulatoryEvaluation || {}).regionRankings?.length || 0}`, anomaly: `数据治理 ${(APP_DATA.regulatoryEvaluation || {}).dataGovernanceMaturity || 0}%` }
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
    const regionRows = (ev.regionRankings || []).map(r => `<tr class="clickable" onclick="App.navigatePublic('global-regions',{regionId:'${r.objectId}'})"><td>${r.rank}</td><td>${r.objectName}</td><td>${r.score}</td><td>${this.renderPublicHealthBadge(r.level)}</td></tr>`).join('');
    const entityRows = (ev.entityRankings || []).map(r => `<tr class="clickable" onclick="App.navigatePublic('global-legal-entities',{entityId:'${r.objectId}'})"><td>${r.rank}</td><td>${r.objectName}</td><td>${r.score}</td><td>${this.renderPublicHealthBadge(r.level)}</td></tr>`).join('');
    const rectRows = (ev.rectificationEfficiencyRankings || []).map(r => `<tr class="clickable" onclick="App.navigatePublic('rectification-operations')"><td>${r.rank}</td><td>${r.objectName}</td><td>${r.score}%</td><td>${r.closedCount}/${r.taskCount}</td></tr>`).join('');
    node.innerHTML = `${this.renderPublicBackButton()}
      <div class="group-hero"><div><span>集团公共监管运营</span><h2>集团监管评价</h2><p>基于监管数据动态评价区域、法人监管能力与整改效率。</p></div></div>
      <div class="group-metrics">${[
        [ev.dataGovernanceMaturity + '%', '数据治理成熟度', `App.navigatePublic('data-governance')`],
        [ev.crossBorderComplianceMaturity + '%', '跨境合规成熟度', `App.navigatePublic('cross-border-compliance')`],
        [ev.crossDomainRiskMaturity + '%', '跨领域风险管理成熟度', `App.navigatePublic('cross-domain-risks')`],
        [ev.overallRectificationClosureRate + '%', '整改闭环率', `App.navigatePublic('rectification-operations')`]
      ].map(([v, l, nav]) => this.renderPublicKpiCard(l, v, nav)).join('')}</div>
      <div class="group-three">
        <div class="card"><div class="card-title">区域监管能力排名</div><table class="data-table"><thead><tr><th>排名</th><th>区域</th><th>得分</th><th>健康度</th></tr></thead><tbody>${regionRows}</tbody></table></div>
        <div class="card"><div class="card-title">法人监管能力排名</div><table class="data-table"><thead><tr><th>排名</th><th>法人</th><th>得分</th><th>健康度</th></tr></thead><tbody>${entityRows}</tbody></table></div>
        <div class="card"><div class="card-title">风险整改效率排名</div><table class="data-table"><thead><tr><th>排名</th><th>法人</th><th>闭环率</th><th>已关闭/总数</th></tr></thead><tbody>${rectRows}</tbody></table></div>
      </div>`;
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
      'regulatory-evaluation': 'renderRegulatoryEvaluation'
    }[routeId];
    if (fn && this[fn]) this[fn]();
  }

});
