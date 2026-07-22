/**
 * 公共监管底座 — 统一组件、状态、导航与页面清单
 * 不修改投资管理模块逻辑
 */
Object.assign(App, {

  publicRegulatoryPages: [
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

  normalizePublicNavParams(params) {
    const p = { ...(params || {}) };
    if (p.issueId && !p.qualityIssueId) p.qualityIssueId = p.issueId;
    if (p.taskId && !p.rectificationTaskId) p.rectificationTaskId = p.taskId;
    if (p.riskId && !p.riskMatterId) p.riskMatterId = p.riskId;
    if (p.coverageCellId) p.gapId = p.gapId || null;
    return p;
  },

  capturePublicFilters(pageId) {
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
    if (!parts.length) return '';
    const hasFilter = Object.values(f).some(v => v);
    return `<div class="filter-bar public-filter-bar" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;align-items:center">${parts.join('')}${hasFilter ? `<button class="btn btn-outline" onclick="App.clearPublicFilter('${pageId}')">清除筛选</button>` : ''}</div>`;
  },

  getPublicPageFilter(pageId) {
    if (pageId === 'data-governance') return this.dataGovFilter || {};
    if (pageId === 'cross-border-compliance') return this.cbFilter || {};
    if (pageId === 'cross-domain-risks') return this.cdrFilter || {};
    return this.publicFilter || {};
  },

  setPublicFilter(pageId, key, value) {
    const store = pageId === 'data-governance' ? 'dataGovFilter' : pageId === 'cross-border-compliance' ? 'cbFilter' : pageId === 'cross-domain-risks' ? 'cdrFilter' : 'publicFilter';
    this[store] = { ...(this[store] || {}), [key]: value || null };
    Object.keys(this[store]).forEach(k => { if (!this[store][k]) delete this[store][k]; });
  },

  clearPublicFilter(pageId) {
    if (pageId === 'data-governance') this.dataGovFilter = {};
    else if (pageId === 'cross-border-compliance') { this.cbFilter = {}; this.cbFocusActivityId = null; }
    else if (pageId === 'cross-domain-risks') { this.cdrFilter = {}; this.cdrFocusMatterId = null; }
    else this.publicFilter = {};
    this.rerenderPublicPage(pageId);
  },

  rerenderPublicPage(pageId) {
    const fn = {
      'global-legal-entities': 'renderGlobalLegalEntities',
      'global-regions': 'renderGlobalRegions',
      'coverage-gaps': 'renderCoverageGaps',
      'platform-operations': 'renderPlatformOperations',
      'data-governance': 'renderDataGovernance',
      'cross-border-compliance': 'renderCrossBorderCompliance',
      'cross-domain-risks': 'renderCrossDomainRisks'
    }[pageId];
    if (fn && this[fn]) this[fn]();
  }

});
