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
    return ctx;
  },

  restorePublicFilters(pageId, filters) {
    if (!filters) return;
    if (pageId === 'global-group-overview' || pageId === 'group') this.groupOverviewFilter = { ...filters };
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
    if (pageId === 'data-governance') return this.dataGovFilter || {};
    if (pageId === 'cross-border-compliance') return this.cbFilter || {};
    if (pageId === 'cross-domain-risks') return this.cdrFilter || {};
    return this.publicFilter || {};
  },

  setPublicFilter(pageId, key, value) {
    const store = pageId === 'global-group-overview' || pageId === 'group' ? 'groupOverviewFilter'
      : pageId === 'data-governance' ? 'dataGovFilter'
      : pageId === 'cross-border-compliance' ? 'cbFilter'
      : pageId === 'cross-domain-risks' ? 'cdrFilter' : 'publicFilter';
    this[store] = { ...(this[store] || {}), [key]: value || null };
    Object.keys(this[store]).forEach(k => { if (!this[store][k]) delete this[store][k]; });
  },

  clearPublicFilter(pageId) {
    if (pageId === 'global-group-overview' || pageId === 'group') this.groupOverviewFilter = {};
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
    const catalogIds = ['global-legal-entities', 'global-regions', 'coverage-gaps', 'platform-operations', 'data-governance', 'cross-border-compliance', 'cross-domain-risks', 'warnings', 'rectification'];
    const metricMap = {
      'global-legal-entities': { core: `法人 ${m.entityCount}`, anomaly: `高风险 ${(m.entities || []).filter(e => (e.highRiskCount || 0) > 0).length}` },
      'global-regions': { core: `区域 ${m.regionCount} · 国家 ${m.countryCount}`, anomaly: `高风险区域 ${(m.regions || []).filter(r => (r.highRiskCount || 0) > 0).length}` },
      'coverage-gaps': { core: `盲区 ${m.coverageGapCount}`, anomaly: `未覆盖法人 ${m.uncoveredEntityCount}` },
      'platform-operations': { core: `运行监测`, anomaly: `告警 ${APP_DATA.publicRegulatorySummary.platformAlertCount || 0}` },
      'data-governance': { core: `数据源 ${m.sourceCount}`, anomaly: `质量异常 ${m.qualityIssueCount}` },
      'cross-border-compliance': { core: `活动 ${m.crossBorderActivityCount}`, anomaly: `合规风险 ${m.crossBorderRiskCount}` },
      'cross-domain-risks': { core: `跨领域 ${m.crossDomainMatterCount}`, anomaly: `高风险 ${(m.cdrMatters || []).filter(x => x.riskLevel === '高').length}` },
      'warnings': { core: `风险事项 ${m.warningCount}`, anomaly: `高风险 ${m.highRiskMatterCount}` },
      'rectification': { core: `整改 ${m.rectificationTaskCount}`, anomaly: `逾期 ${m.overdueRectificationCount}` }
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
      ${this.renderGroupOverviewPageCatalog(m)}
      <div id="groupOverviewDetail"></div>`;
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
      'cross-domain-risks': 'renderCrossDomainRisks'
    }[routeId];
    if (fn && this[fn]) this[fn]();
  }

});
