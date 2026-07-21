// Edge 在直接打开本地文件时偶发阻止相对路径 CSS。本兜底样式仅在主样式
// 未加载时注入，确保下载后离线演示仍可正常展示。
function ensureOfflineStyles() {
  if (window.getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()) return;

  const style = document.createElement('style');
  style.textContent = [
    '*{box-sizing:border-box}body{margin:0;font-family:"Microsoft YaHei",Arial,sans-serif;background:#f0f4f8;color:#1a2332;font-size:14px}.app-container{display:flex;min-height:100vh}',
    '.sidebar{width:260px;background:#003d7a;color:#fff;position:fixed;top:0;bottom:0;left:0;z-index:10}.sidebar-header{padding:20px 16px;border-bottom:1px solid #3170aa}.sidebar-logo{display:flex;gap:10px;align-items:center}.logo-icon{width:40px;height:40px;padding-top:12px;background:#00a0e9;border-radius:8px;text-align:center;font-size:11px;font-weight:bold}.sidebar-title{font-size:14px;font-weight:bold;line-height:1.4}.sidebar-subtitle{font-size:11px;color:#d4e9fa;margin-top:8px;line-height:1.5}.nav-menu{padding-top:12px}.nav-item{padding:12px 20px;cursor:pointer;color:#dbeeff;border-left:3px solid transparent}.nav-item:hover,.nav-item.active{color:#fff;background:#145895;border-left-color:#00a0e9}.nav-icon{display:inline-block;width:24px}',
    '.main-content{margin-left:260px;width:calc(100% - 260px)}.top-header{height:64px;background:#fff;border-bottom:1px solid #dce3ec;padding:0 28px;display:flex;align-items:center;justify-content:space-between}.header-title{font-size:18px;font-weight:bold;color:#003d7a}.header-meta{font-size:12px;color:#5a6a7e}.page-content{padding:24px 28px}.page{display:none}.page.active{display:block}.card,.metric-card,.warning-stat,.control-stat-card,.penetration-card{background:#fff;border:1px solid #dce3ec;border-radius:8px;padding:18px;margin-bottom:20px;box-shadow:0 2px 8px #dce3ec}.card-title{font-size:16px;font-weight:bold;color:#003d7a;border-bottom:2px solid #00a0e9;padding-bottom:10px;margin-bottom:16px}',
    '.metrics-grid,.warning-summary,.control-stats,.rect-stats{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:16px;margin-bottom:20px}.warning-summary,.rect-stats{grid-template-columns:repeat(4,minmax(0,1fr))}.control-stats{grid-template-columns:repeat(3,minmax(0,1fr))}.metric-card{margin:0}.metric-card .label,.warning-stat .label,.control-stat-card .label{color:#5a6a7e;font-size:13px}.metric-card .value,.warning-stat .num,.control-stat-card .num{font-size:28px;font-weight:bold;color:#003d7a}.metric-card .sub-items{margin-top:10px;font-size:12px;color:#5a6a7e;line-height:1.8}.warning-stat{text-align:center;margin:0}.warning-stat.red .num,.control-stat-card.abnormal .num{color:#e53935}.warning-stat.yellow .num{color:#f9a825}.warning-stat.blue .num{color:#1e88e5}',
    '.core-chain{background:#003d7a;color:#fff;border-radius:8px;padding:15px;margin-bottom:20px;line-height:2.4}.chain-node{background:#145895;border-radius:14px;padding:4px 10px}.chain-sep{padding:0 6px}.process-map{display:flex;overflow-x:auto;padding:8px 0}.process-stage{min-width:135px;flex:1;cursor:pointer}.process-box{margin:3px;padding:12px 8px;background:#f4f8fc;border:1px solid #dce3ec;border-radius:8px;text-align:center;height:100%}.stage-name{font-weight:bold;color:#003d7a;min-height:42px}.stage-stats{font-size:11px;color:#5a6a7e;line-height:1.7}.num{font-weight:bold}.data-table{width:100%;border-collapse:collapse}.data-table th{background:#eef3f9;color:#003d7a;text-align:left;padding:12px;border-bottom:2px solid #dce3ec}.data-table td{padding:11px;border-bottom:1px solid #dce3ec}.badge{padding:3px 10px;border-radius:12px;font-size:12px}.badge-danger{background:#ffebee;color:#e53935}.badge-warning{background:#fff8e1;color:#e65100}.badge-info{background:#e3f2fd;color:#1e88e5}.badge-success{background:#e8f5e9;color:#43a047}',
    '.two-col{display:grid;grid-template-columns:280px 1fr;gap:20px}.process-tree{background:#fff;border:1px solid #dce3ec;border-radius:8px;padding:16px}.tree-parent,.tree-child{padding:8px 12px;cursor:pointer}.tree-parent{font-weight:bold;color:#003d7a}.tree-children{display:none;padding-left:18px}.tree-children.show{display:block}.tree-child.active{background:#e3f2fd;border-left:2px solid #00a0e9}.info-grid,.penetration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.info-item{padding:12px;background:#f8fafc;border:1px solid #dce3ec;border-radius:6px}.info-item.full{grid-column:1/-1}.info-label{font-size:12px;color:#5a6a7e}.info-value{font-weight:bold;margin-top:4px}.scenario-level1,.rect-step{background:#003d7a;color:#fff;padding:13px 18px;font-weight:bold}.scenario-children{border:1px solid #dce3ec}.scenario-item{padding:14px 18px;border-bottom:1px solid #dce3ec}.scenario-item .name{font-weight:bold;color:#003d7a}.scenario-item .desc{font-size:12px;color:#5a6a7e}.matter-types,.portfolio-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.matter-card,.portfolio-item{padding:16px;border:1px solid #dce3ec;border-radius:8px;background:#f8fafc;text-align:center}.matter-card .type,.portfolio-item .name{font-weight:bold;color:#003d7a}.rect-flow{display:flex;align-items:center;justify-content:center;gap:8px;padding:25px}.rect-step{border-radius:8px}.rect-arrow,.chain-arrow{color:#00a0e9;font-size:18px}.btn{padding:7px 13px;border:0;border-radius:5px;cursor:pointer}.btn-primary{background:#003d7a;color:#fff}.btn-outline{background:#fff;color:#003d7a;border:1px solid #dce3ec}',
    '@media(max-width:1100px){.metrics-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.two-col,.penetration-grid{grid-template-columns:1fr}}@media(max-width:700px){.sidebar{width:60px}.sidebar-title,.sidebar-subtitle,.nav-item span:not(.nav-icon){display:none}.main-content{margin-left:60px;width:calc(100% - 60px)}.metrics-grid,.warning-summary,.rect-stats,.control-stats,.matter-types,.portfolio-grid{grid-template-columns:1fr}.header-meta{display:none}.page-content{padding:16px}}'
  ].join('');
  document.head.appendChild(style);
}

const App = {
  currentPage: 'dashboard',
  selectedRiskId: null,
  currentDomain: 'investment',
  domainPageTemplates: {},

  menuItems: [
    { id: 'dashboard', icon: '📊', label: '驾驶舱' },
    { id: 'process', icon: '🔄', label: '监管对象与价值链' },
    { id: 'controls', icon: '🛡️', label: 'KRI与控制规则' },
    { id: 'warnings', icon: '🔔', label: '风险预警中心' },
    { id: 'rectification', icon: '✅', label: '整改闭环管理' },
    { id: 'portfolio', icon: '📈', label: '监管分析台账' }
  ],

  pageTitles: {
    dashboard: '集团穿透式监管驾驶舱',
    process: '监管对象与价值链',
    scenarios: '风险场景管理',
    warnings: '风险预警中心',
    penetration: '风险穿透分析',
    controls: 'KRI与控制规则',
    matters: '投资事项及股东权利管理',
    rectification: '整改闭环管理',
    portfolio: '投资组合分析',
    kri: 'KRI与风险场景详情'
  },

  init() {
    this.renderNav();
    this.renderDashboardMetrics();
    this.renderRegulationDomains();
    this.renderGroupKriBoard();
    this.renderDashboardHeatmap();
    this.renderDashboardInsights();
    this.renderTopRisks();
    this.renderProcessTree();
    this.renderValueChainOverview();
    this.renderInvestmentKriControls();
    this.renderRiskMatrix();
    this.renderScenarios();
    this.renderWarnings();
    this.renderWarningCharts();
    this.renderControls();
    this.renderMatters();
    this.renderRectification();
    this.renderRectificationGovernance();
    this.renderRectKanban();
    this.renderPortfolio();
  },

  navigate(pageId, params = {}) {
    this.currentPage = pageId;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + pageId);
    if (page) page.classList.add('active');

    if (this.currentDomain !== 'investment' && ['process', 'controls', 'warnings', 'rectification', 'portfolio'].includes(pageId)) {
      this.renderNonInvestmentDomainPage(pageId);
    }

    document.getElementById('pageTitle').textContent = this.pageTitles[pageId] || pageId;

    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', !params.detail && item.dataset.page === pageId);
    });

    if (pageId === 'penetration') {
      this.selectedRiskId = params.riskId || this.selectedRiskId || 'risk-2';
      this.renderPenetration(this.selectedRiskId);
      document.getElementById('penetrationBack').style.display = 'block';
      if (params.detail) document.getElementById('pageTitle').textContent = '风险事项详细穿透分析';
    }

    if (pageId === 'process' && params.activityId) {
      setTimeout(() => this.selectActivity(params.activityId), 100);
    }

    if (pageId === 'process' && params.stageId) {
      setTimeout(() => this.expandStage(params.stageId), 100);
    }

    if (pageId === 'kri' && params.kriId) {
      this.renderKriDetail(params.kriId, params.scenarioId);
    }
  },

  renderNav() {
    const nav = document.getElementById('navMenu');
    nav.innerHTML = this.menuItems.map(item => `
      <div class="nav-item ${item.id === 'dashboard' ? 'active' : ''}" data-page="${item.id}" onclick="App.navigate('${item.id}')">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}</span>
      </div>
    `).join('');
  },

  renderCoreChain() {
    const chain = [
      '国资委46号文一级风险场景',
      '集团投资管理二级风险场景',
      '投资业务环节',
      '控制活动',
      '监测指标',
      '风险预警',
      '责任主体',
      '制度依据',
      '整改闭环'
    ];
    document.getElementById('coreChain').innerHTML = chain.map((node, i) =>
      (i > 0 ? '<span class="chain-sep">↓</span>' : '') +
      `<span class="chain-node">${node}</span>`
    ).join('');
  },

  renderDashboardMetrics() {
    document.getElementById('dashboardMetrics').innerHTML = `
      <div class="metric-card">
        <div class="label">纳入监管法人主体</div>
        <div class="value">18<span>家</span></div>
        <div class="sub-items">
          集团级监管视角<br>
          重点主体：<strong>A、B、C、D公司</strong>
        </div>
      </div>
      <div class="metric-card">
        <div class="label">重点监管领域</div>
        <div class="value">9<span>个</span></div>
        <div class="sub-items">
          投资、财务、产权、合同等<br>
          当前专题：<strong>投资管理</strong>
        </div>
      </div>
      <div class="metric-card">
        <div class="label">重点监管法人主体</div>
        <div class="value">4<span>家</span></div>
        <div class="sub-items">
          A公司 · B公司 · C公司 · D公司<br>
          穿透维度：<strong>领域、主体、事项</strong>
        </div>
      </div>
      <div class="metric-card">
        <div class="label">投资管理风险预警</div>
        <div class="value" style="color:var(--danger);">46<span>项</span></div>
        <div class="sub-items">
          重大风险：<strong style="color:var(--danger)">8项</strong><br>
          较大风险：<strong style="color:var(--warning)">15项</strong> · 一般关注：<strong>23项</strong>
        </div>
      </div>
      <div class="metric-card">
        <div class="label">整改闭环情况</div>
        <div class="value" style="color:var(--success);">87.1<span>%</span></div>
        <div class="sub-items">
          年度整改事项：<strong>62项</strong><br>
          已完成：<strong>54项</strong> · 超期：<strong style="color:var(--danger)">3项</strong>
        </div>
      </div>
    `;
  },

  renderRegulationDomains() {
    const container = document.getElementById('domainTabs');
    if (!container) return;
    container.innerHTML = APP_DATA.regulationDomains.map(domain => `<button class="domain-tab ${domain.id === this.currentDomain ? 'active' : ''}" onclick="App.selectRegulationDomain('${domain.id}')"><strong>${domain.name}</strong><span>${domain.risks}项关注</span></button>`).join('');
  },

  selectRegulationDomain(domainId) {
    this.enterDomain(domainId, false);
  },

  renderDomainGateway() {
    const container = document.getElementById('gatewayDomains');
    if (!container) return;
    container.innerHTML = APP_DATA.regulationDomains.map(domain => `<button class="gateway-domain ${domain.id === 'investment' ? 'active' : ''}" onclick="App.enterDomain('${domain.id}', true)"><strong>${domain.name}</strong><span>${domain.desc}</span><em>${domain.risks} 项集团关注事项</em><small>${domain.id === 'investment' ? '已配置完整监管示例' : '集团总览模式'}</small></button>`).join('');
  },

  enterDomain(domainId, fromGateway) {
    const domain = APP_DATA.regulationDomains.find(x => x.id === domainId);
    if (!domain) return;
    this.currentDomain = domainId;
    this.renderRegulationDomains();
    this.renderGroupKriBoard();
    if (domainId === 'investment') this.restoreInvestmentPages();
    if (fromGateway) document.getElementById('domainGateway').style.display = 'none';
    this.navigate('dashboard');
    document.getElementById('pageTitle').textContent = `${domain.name} · 集团穿透式监管驾驶舱`;
  },

  restoreInvestmentPages() {
    Object.keys(this.domainPageTemplates).forEach(id => {
      const page = document.getElementById('page-' + id);
      if (page) page.innerHTML = this.domainPageTemplates[id];
    });
    this.domainPageTemplates = {};
    this.renderProcessTree();
    this.renderValueChainOverview();
    this.renderRiskMatrix();
    this.renderWarnings();
    this.renderWarningCharts();
    this.renderControls();
    this.renderRectification();
    this.renderRectificationGovernance();
    this.renderRectKanban();
    this.renderPortfolio();
  },

  renderNonInvestmentDomainPage(pageId) {
    const page = document.getElementById('page-' + pageId);
    const domain = APP_DATA.regulationDomains.find(x => x.id === this.currentDomain);
    if (!page || !domain) return;
    if (!this.domainPageTemplates[pageId]) this.domainPageTemplates[pageId] = page.innerHTML;
    const moduleNames = { process:'监管对象与关键流程', controls:'KRI与控制规则', warnings:'预警中心', rectification:'整改闭环', portfolio:'监管分析台账' };
    page.innerHTML = `<div class="domain-module-page"><div class="topic-banner"><div><strong>${domain.name} · ${moduleNames[pageId]}</strong><span>当前内容仅展示${domain.name}领域的集团监管口径，不混入投资管理专题数据。</span></div></div><div class="card"><div class="card-title">${domain.name}领域集团监管视图</div><div class="domain-module-grid"><div><b>监管对象</b><p>A、B、C、D公司及纳入集团监管范围的相关法人主体。</p></div><div><b>关键事项</b><p>${domain.desc}相关的重大事项、异常事件、控制规则执行与整改状态。</p></div><div><b>集团KRI</b><p>按法人主体、事项类型和风险等级汇总，形成预警、督办和整改闭环。</p></div><div><b>穿透方式</b><p>领域 → 法人主体 → 事项 / KRI → 控制规则 → 预警 → 整改。</p></div></div></div><div class="card"><div class="card-title">当前监管提示</div><p class="domain-module-note">本演示对${domain.name}领域提供集团级模块框架。投资管理领域已配置完整的业务价值链、KRI、控制规则和风险详情示例，可通过顶部领域 Tab 切换查看。</p></div></div>`;
  },

  renderGroupKriBoard() {
    const kriBoard = document.getElementById('groupKriBoard');
    const scenarioBoard = document.getElementById('riskScenarioBoard');
    if (this.currentDomain !== 'investment') {
      const domain = APP_DATA.regulationDomains.find(x => x.id === this.currentDomain);
      if (kriBoard) kriBoard.innerHTML = `<div class="domain-context-card"><b>${domain.name}领域集团监测</b><p>围绕${domain.desc}，按法人主体、重大事项、关键控制和整改状态开展集团级穿透监管。</p><span>当前关注：${domain.risks} 项</span><small>该领域暂展示集团总览，投资管理领域已配置详细 KRI 与控制规则示例。</small></div>`;
      if (scenarioBoard) scenarioBoard.innerHTML = `<div class="domain-context-card"><b>集团监管穿透入口</b><p>点击预警、风险穿透、整改闭环等左侧模块，可从集团总览进一步查看该领域的法人主体、风险事项和闭环处置情况。</p><button class="btn btn-outline" onclick="App.selectRegulationDomain('investment')">查看投资管理完整示例</button></div>`;
      return;
    }
    if (kriBoard) kriBoard.innerHTML = `<div class="kri-board">${APP_DATA.groupKris.map(kri => `<button class="kri-card" onclick="App.navigate('kri',{kriId:'${kri.id}'})"><span>${kri.category}</span><b>${kri.name}</b><strong>${kri.value}</strong><em class="${kri.status.includes('重大') ? 'critical' : 'warning'}">${kri.status}</em><small>涉及：${kri.entities}</small></button>`).join('')}</div>`;
    if (scenarioBoard) scenarioBoard.innerHTML = `<div class="scenario-board">${APP_DATA.groupRiskScenarios.map(s => `<button class="scenario-drill-card" onclick="App.navigate('kri',{kriId:'${s.kri}',scenarioId:'${s.id}'})"><span class="badge ${s.level === '重大' ? 'badge-danger' : 'badge-warning'}">${s.level}</span><b>${s.name}</b><p>${s.desc}</p><small>主体：${s.entities}</small><em>查看场景穿透 ›</em></button>`).join('')}</div>`;
  },

  renderKriDetail(kriId, scenarioId) {
    const kri = APP_DATA.groupKris.find(x => x.id === kriId) || APP_DATA.groupKris[0];
    const scenario = APP_DATA.groupRiskScenarios.find(x => x.id === scenarioId) || APP_DATA.groupRiskScenarios.find(x => x.kri === kri.id);
    const container = document.getElementById('kriDetailContent');
    if (!container) return;
    container.innerHTML = `
      <div class="kri-detail-hero"><div><span>${kri.category}</span><h2>${kri.name}</h2><p>风险场景：${scenario ? scenario.name : kri.scenario}</p></div><div><b>${kri.value}</b><em>${kri.status}</em><small>集团口径 · 覆盖主体：${kri.entities}</small></div></div>
      <div class="kri-detail-grid">
        <div class="card"><div class="card-title">KRI定义与阈值</div><div class="detail-list"><p><b>计算口径：</b>${kri.formula}</p><p><b>触发阈值：</b><span class="badge badge-danger">${kri.threshold}</span></p><p><b>监测频率：</b>关键节点实时校验 + 月度集团汇总</p><p><b>适用范围：</b>集团纳入监管的法人主体及重大投资事项</p></div></div>
        <div class="card"><div class="card-title">控制规则与处置</div><div class="detail-list"><p><b>控制规则：</b>在立项、审批、合同、付款、变更或投后监测节点自动校验。</p><p><b>处置动作：</b>${kri.control}</p><p><b>升级路径：</b>责任主体复核 → 所属企业管理部门 → 集团投资管理部督办。</p><p><b>规则依据：</b>国资监管投资管理要求、集团授权与投资管理制度。</p></div></div>
        <div class="card"><div class="card-title">数据来源与法人主体穿透</div><div class="detail-list"><p><b>汇聚数据：</b>${kri.source}</p><p><b>主体维度：</b>${kri.entities}</p><p><b>事项维度：</b>项目编号、投资类型、审批层级、合同/付款/变更动作。</p><p><b>数据留痕：</b>规则命中记录、校验结果、例外审批、处置与关闭证据。</p></div></div>
        <div class="card"><div class="card-title">风险场景与监管结论</div><div class="detail-list"><p><b>风险场景：</b>${scenario ? scenario.desc : kri.scenario}</p><p><b>关键控制：</b>${scenario ? scenario.control : kri.control}</p><p><b>当前集团结论：</b>存在${kri.status}，需对涉及法人主体开展专项复核并跟踪整改。</p><button class="btn btn-primary" onclick="App.navigate('penetration',{riskId:'risk-2'})">进入风险穿透分析</button></div></div>
      </div>
      <div class="card"><div class="card-title">集团穿透链路</div><div class="kri-lineage"><span>监管领域<br><b>投资管理</b></span><i>→</i><span>风险场景<br><b>${scenario ? scenario.name : kri.scenario}</b></span><i>→</i><span>集团KRI<br><b>${kri.name}</b></span><i>→</i><span>法人主体<br><b>${kri.entities}</b></span><i>→</i><span>控制处置<br><b>提示 / 阻断 / 升级 / 整改</b></span></div></div>`;
  },

  renderInvestmentKriControls() {
    const node = document.getElementById('investmentKriControls');
    if (!node) return;
    const rows = [
      ['股权投资', '投后经营异常命中项数', '收入、利润、现金流、订单等异常项 ≥ 3', '经营数据、财务报表、治理事项', '触发预警，启动行权 / 减值 / 退出评估'],
      ['固定资产投资', '未批先实施暴露金额', '批复前发生采购、签约、付款或开工', '投资批复、合同、资金、项目系统', '阻断合同、付款或开工节点'],
      ['固定资产投资', '累计追加投资接近审批边界比例', '累计追加金额 / 原批复金额 ≥ 80%', '投资批复、变更台账、合同、资金系统', '提示重新报批，升级审批'],
      ['投资共性', '授权边界超限金额', '事项金额或累计金额超过授权上限', '授权矩阵、投资、合同、资金系统', '系统阻断并要求升级审批'],
      ['投资共性', '未备案继续推进暴露金额', '备案未完成但发生合同、付款或实施', '备案台账、合同、资金、实施资料', '补备案 / 重报 / 暂停推进']
    ];
    node.innerHTML = `<div class="kri-note"><b>集团监控方式：</b>以法人主体为监管单元，汇聚投资、合同、资金、项目、财务等数据；KRI 达阈值后按“提示—阻断—升级—整改”形成闭环。制度仅作为控制规则配置与放行的依据。</div><table class="data-table kri-table"><thead><tr><th>投资类型</th><th>集团级KRI</th><th>触发规则</th><th>数据来源</th><th>控制处置</th></tr></thead><tbody>${rows.map(r => `<tr><td><span class="badge badge-primary">${r[0]}</span></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('')}</tbody></table>`;
  },

  renderProcessMap() {
    const container = document.getElementById('processMap');
    const highlightStages = ['strategy', 'approval', 'post-invest'];
    container.innerHTML = APP_DATA.processStages.map(stage => `
      <div class="process-stage ${highlightStages.includes(stage.id) ? 'highlight' : ''}"
           onclick="App.navigate('process', { stageId: '${stage.id}' })">
        <div class="process-box">
          <div class="stage-name">${stage.name}</div>
          <div class="stage-stats">
            涉及项目：<span class="num">${stage.projects}</span>个<br>
            关联风险：<span class="num">${stage.risks}</span>项<br>
            当前预警：<span class="num">${stage.warnings}</span>项<br>
            控制活动：<span class="num">${stage.controls}</span>项
          </div>
        </div>
      </div>
    `).join('');
  },

  renderTopRisks() {
    const tbody = document.querySelector('#topRisksTable tbody');
    tbody.innerHTML = APP_DATA.topRisks.map(r => {
      const rankClass = r.rank <= 3 ? `rank-${r.rank}` : 'rank-other';
      const levelBadge = r.level === '重大' ? 'badge-danger' : r.level === '较大' ? 'badge-warning' : 'badge-info';
      return `<tr class="clickable" onclick="App.navigate('penetration', { riskId: '${r.id}', detail: true })">
        <td><span class="rank-num ${rankClass}">${r.rank}</span></td>
        <td>${r.name}</td>
        <td>${r.stage}</td>
        <td>${r.project}</td>
        <td><span class="badge ${levelBadge}">${r.level}</span></td>
      </tr>`;
    }).join('');
  },

  renderProcessTree() {
    const container = document.getElementById('processTree');
    const tree = APP_DATA.processTree;
    let html = `<div class="tree-node"><div class="tree-parent expanded" style="font-size:14px;">📁 ${tree.name}</div><div class="tree-children show">`;

    tree.children.forEach(node => {
      html += `
        <div class="tree-node">
          <div class="tree-parent" data-stage="${node.id}" onclick="App.toggleTreeNode(this)">
            <span class="arrow">▶</span> ${node.name}
          </div>
          <div class="tree-children">
            ${node.children.map(child => `
              <div class="tree-child" data-activity="${child.id}" onclick="App.selectActivity('${child.id}')">
                ${child.name}
              </div>
            `).join('')}
          </div>
        </div>`;
    });

    html += '</div></div>';
    container.innerHTML = html;
  },

  toggleTreeNode(el) {
    el.classList.toggle('expanded');
    const children = el.nextElementSibling;
    if (children) children.classList.toggle('show');
  },

  expandStage(stageId) {
    const parent = document.querySelector(`.tree-parent[data-stage="${stageId}"]`);
    if (parent) {
      parent.classList.add('expanded');
      const children = parent.nextElementSibling;
      if (children) children.classList.add('show');
    }
    this.renderStageDetail(stageId);
  },

  renderStageDetail(stageId, activityName) {
    const detail = APP_DATA.valueChainDetails[stageId];
    const panel = document.getElementById('processDetail');
    if (!detail || !panel) return;
    panel.innerHTML = `
      <div class="breadcrumb"><a onclick="App.navigate('dashboard')">驾驶舱</a><span>›</span><span>投资价值链监测 › ${detail.stage}${activityName ? ' › ' + activityName : ''}</span></div>
      <div class="card"><div class="card-title">${detail.stage}${activityName ? '：' + activityName : '阶段监管要点'}</div>
        <div class="info-grid">
          <div class="info-item"><div class="info-label">责任部门</div><div class="info-value">${detail.department}</div></div>
          <div class="info-item"><div class="info-label">主要业务活动</div><div class="info-value">${detail.activities}</div></div>
          <div class="info-item full"><div class="info-label">监管目标</div><div class="info-value">${detail.objective}</div></div>
        </div>
      </div>
      <div class="card"><div class="card-title">风险场景与控制活动</div>
        <div class="info-grid"><div class="info-item"><div class="info-label">一级风险场景</div><div class="info-value">${detail.scenario}</div></div><div class="info-item"><div class="info-label">重点风险</div><div class="info-value" style="color:var(--danger)">${detail.risk}</div></div><div class="info-item full"><div class="info-label">关键控制活动</div><div class="info-value">${detail.control}</div></div></div>
      </div>
      <div class="card"><div class="card-title">三层监测环</div><div class="rules-section">
        <div class="rules-group"><div class="rules-title">事前准入</div><ul class="rules-list"><li>${detail.before}</li></ul></div>
        <div class="rules-group"><div class="rules-title">事中监测</div><ul class="rules-list"><li>${detail.during}</li></ul></div>
        <div class="rules-group"><div class="rules-title">事后评价</div><ul class="rules-list"><li>${detail.after}</li></ul></div>
      </div></div>
      <div class="card"><div class="card-title">监管提示</div><p style="font-size:13px;color:var(--text-secondary)">该阶段风险、控制活动和监测规则均已纳入集团股权投资穿透监管范围。点击下方按钮可查看关联风险预警。</p><button class="btn btn-primary" style="margin-top:12px" onclick="App.navigate('warnings')">查看关联风险预警</button></div>`;
  },

  selectActivity(activityId) {
    document.querySelectorAll('.tree-child').forEach(el => el.classList.remove('active'));
    const child = document.querySelector(`.tree-child[data-activity="${activityId}"]`);
    if (child) {
      child.classList.add('active');
      const parent = child.closest('.tree-node').querySelector('.tree-parent');
      if (parent) {
        parent.classList.add('expanded');
        parent.nextElementSibling.classList.add('show');
      }
    }

    const detail = APP_DATA.businessActivityDetail[activityId];
    const panel = document.getElementById('processDetail');

    if (!detail) {
      const stage = APP_DATA.processTree.children.find(x => x.children.some(y => y.id === activityId));
      if (stage) this.renderStageDetail(stage.id, child ? child.textContent.trim() : '业务活动');
      return;
    }

    panel.innerHTML = `
      <div class="breadcrumb">
        <a onclick="App.navigate('dashboard')">首页</a> <span>›</span>
        <a onclick="App.navigate('process')">投资业务全过程监测</a> <span>›</span>
        <span>${detail.stage} › ${detail.activity}</span>
      </div>
      <div class="card">
        <div class="card-title">业务活动信息</div>
        <div class="info-grid">
          <div class="info-item"><div class="info-label">业务环节</div><div class="info-value">${detail.stage}</div></div>
          <div class="info-item"><div class="info-label">业务活动</div><div class="info-value">${detail.activity}</div></div>
          <div class="info-item full"><div class="info-label">管理目标</div><div class="info-value">${detail.goal}</div></div>
          <div class="info-item"><div class="info-label">责任部门</div><div class="info-value">${detail.department}</div></div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">风险场景关联（国资委46号文）</div>
        <div class="info-grid">
          <div class="info-item"><div class="info-label">一级风险场景</div><div class="info-value">${detail.level1Risk}</div></div>
          <div class="info-item"><div class="info-label">二级风险场景</div><div class="info-value">${detail.level2Risk}</div></div>
          <div class="info-item full"><div class="info-label">风险描述</div><div class="info-value">${detail.riskDesc}</div></div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">控制活动</div>
        <table class="data-table">
          <thead><tr><th>控制活动</th><th>控制要求</th><th>频率</th></tr></thead>
          <tbody>
            ${detail.controls.map(c => `<tr><td>${c.name}</td><td>${c.requirement}</td><td>${c.frequency}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="card">
        <div class="card-title">监测规则</div>
        <div class="rules-section">
          <div class="rules-group">
            <div class="rules-title">事前</div>
            <ul class="rules-list">${detail.rules.before.map(r => `<li>${r}</li>`).join('')}</ul>
          </div>
          <div class="rules-group">
            <div class="rules-title">事中</div>
            <ul class="rules-list">${detail.rules.during.map(r => `<li>${r}</li>`).join('')}</ul>
          </div>
          <div class="rules-group">
            <div class="rules-title">事后</div>
            <ul class="rules-list">${detail.rules.after.map(r => `<li>${r}</li>`).join('')}</ul>
          </div>
        </div>
      </div>
    `;
  },

  renderScenarios() {
    const container = document.getElementById('scenarioList');
    container.innerHTML = APP_DATA.riskScenarios.map((group, idx) => `
      <div class="scenario-group">
        <div class="scenario-level1">
          <span class="num">${idx + 1}</span>
          ${group.name}
        </div>
        <div class="scenario-children">
          ${group.children.map(child => `
            <div class="scenario-item" onclick="App.navigate('warnings')">
              <div class="name">${child.name}</div>
              <div class="desc">${child.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  },

  renderWarnings() {
    document.getElementById('warningSummary').innerHTML = `
      <div class="warning-stat total"><div class="num">46</div><div class="label">风险事项</div></div>
      <div class="warning-stat red"><div class="num">8</div><div class="label">红色预警</div></div>
      <div class="warning-stat yellow"><div class="num">15</div><div class="label">黄色预警</div></div>
      <div class="warning-stat blue"><div class="num">23</div><div class="label">蓝色关注</div></div>
    `;
    document.getElementById('warningFilters').innerHTML = `
      <input type="search" placeholder="搜索风险名称、项目或所属单位" oninput="App.filterWarnings(this.value)">
      <button class="filter-chip active" onclick="App.filterWarnings('', this)">全部</button>
      <button class="filter-chip" onclick="App.filterWarnings('红色', this)">L4 重大</button>
      <button class="filter-chip" onclick="App.filterWarnings('黄色', this)">L3 较大</button>
      <button class="filter-chip" onclick="App.filterWarnings('蓝色', this)">L2 一般</button>
      <select><option>全部法人主体</option><option>A公司</option><option>B公司</option><option>C公司</option><option>D公司</option></select>
      <select><option>全部业务阶段</option><option>投后管理</option><option>立项论证</option><option>投资退出</option></select>`;

    const tbody = document.querySelector('#warningsTable tbody');
    tbody.innerHTML = APP_DATA.warnings.map(w => {
      const badge = w.status === '红色' ? 'badge-danger' : w.status === '黄色' ? 'badge-warning' : 'badge-info';
      return `<tr>
        <td>${w.name}</td>
        <td>${w.unit}</td>
        <td>${w.project}</td>
        <td>${w.indicator}</td>
        <td><span class="badge ${badge}">${w.status}</span></td>
        <td><button class="btn btn-primary" style="padding:4px 12px;font-size:12px;" onclick="App.navigate('penetration', { riskId: '${w.id}', detail: true })">穿透分析</button></td>
      </tr>`;
    }).join('');
    document.getElementById('warningPagination').innerHTML = '<span>共 46 条风险事件</span><button class="active">1</button><button>2</button><button>3</button><button>›</button>';
  },

  filterWarnings(keyword, trigger) {
    if (trigger) document.querySelectorAll('.filter-chip').forEach(x => x.classList.remove('active')), trigger.classList.add('active');
    const rows = APP_DATA.warnings.filter(x => !keyword || Object.values(x).join(' ').includes(keyword));
    const tbody = document.querySelector('#warningsTable tbody');
    tbody.innerHTML = rows.map(w => `<tr class="clickable" onclick="App.navigate('penetration',{riskId:'${w.id}',detail:true})"><td>${w.name}</td><td>${w.unit}</td><td>${w.project}</td><td>${w.indicator}</td><td><span class="badge ${w.status === '红色' ? 'badge-danger' : w.status === '黄色' ? 'badge-warning' : 'badge-info'}">${w.status}</span></td><td><button class="btn btn-primary" onclick="event.stopPropagation();App.navigate('penetration',{riskId:'${w.id}',detail:true})">穿透分析</button></td></tr>`).join('');
  },

  renderPenetration(riskId) {
    const data = APP_DATA.riskPenetration[riskId] || APP_DATA.riskPenetration['risk-1'];
    const container = document.getElementById('penetrationContent');

    const renderChain = (items) => items.map((item, i) =>
      (i > 0 ? '<span class="chain-arrow">↓</span>' : '') + `<span class="chain-item">${item}</span>`
    ).join('');

    container.innerHTML = `
      <div class="breadcrumb">
        <a onclick="App.navigate('dashboard')">首页</a> <span>›</span>
        <a onclick="App.navigate('warnings')">风险预警监测</a> <span>›</span>
        <span>${data.name}</span>
      </div>

      <div class="card">
        <div class="card-title">${data.name}</div>
        <div class="info-grid">
          <div class="info-item"><div class="info-label">风险等级</div><div class="info-value"><span class="badge badge-danger">${data.level}</span></div></div>
          <div class="info-item"><div class="info-label">所属单位</div><div class="info-value">${data.unit}</div></div>
          <div class="info-item"><div class="info-label">投资项目</div><div class="info-value">${data.project}</div></div>
          <div class="info-item"><div class="info-label">投资金额</div><div class="info-value">${data.amount}</div></div>
          <div class="info-item"><div class="info-label">风险敞口</div><div class="info-value" style="color:var(--danger);">${data.exposure}</div></div>
          <div class="info-item"><div class="info-label">影响</div><div class="info-value" style="color:var(--danger);">${data.impact}</div></div>
        </div>
      </div>

      <div class="risk-analysis-banner">
        <div class="risk-score"><span>风险评分</span><strong>${data.level.includes('重大') ? '92' : '76'}<small>分</small></strong><em>${data.level}</em></div>
        <div class="score-breakdown">
          <div><span>发生可能性</span><b>高</b><i style="width:88%"></i></div>
          <div><span>影响程度</span><b>高</b><i style="width:92%"></i></div>
          <div><span>暴露规模</span><b>较高</b><i style="width:76%"></i></div>
          <div><span>控制有效性</span><b>部分有效</b><i style="width:45%"></i></div>
        </div>
        <div class="risk-rule"><span>风险规则</span><strong>${data.indicator.name} ${data.indicator.deviation}，触发重大风险预警</strong><small>规则引擎 · 自动识别 · 首次发现：2026-06-15</small></div>
      </div>

      <div class="penetration-grid">
        <div class="penetration-card">
          <h4>业务流程穿透</h4>
          <div class="chain-flow">${renderChain(data.processChain)}</div>
          <div class="process-trace">
            <div class="trace-node done"><span class="trace-no">01</span><div><b>投后管理计划制定</b><p>明确经营跟踪指标、频率及责任清单</p><small>责任部门：所属企业投资管理部 · 输出：年度投后管理计划</small></div><em>已完成</em></div>
            <div class="trace-node done"><span class="trace-no">02</span><div><b>经营数据采集与核验</b><p>归集收入、净利润、现金流、资产负债率等月度数据</p><small>数据来源：财务系统、经营分析系统 · 控制点：数据完整性校验</small></div><em>已完成</em></div>
            <div class="trace-node abnormal"><span class="trace-no">03</span><div><b>经营情况跟踪与分析</b><p>对比预算、上年同期与投资方案目标，识别经营偏差</p><small>当前异常：${data.indicator.name}${data.indicator.deviation} · 应于5个工作日内形成分析报告</small></div><em>异常</em></div>
            <div class="trace-node active"><span class="trace-no">04</span><div><b>风险评价与预警升级</b><p>风险规则引擎计算等级，提交集团投资管理部督办</p><small>输出：${data.level}风险预警 · 关联整改任务：RECT-202601001</small></div><em>处理中</em></div>
          </div>
          <div class="process-kpi"><span>流程时效：<b>3个工作日</b></span><span>控制执行：<b class="danger">1项异常</b></span><span>关联制度：<b>3项</b></span></div>
        </div>
        <div class="penetration-card">
          <h4>控制穿透</h4>
          <div class="penetration-metric"><span class="label">控制活动</span><span class="value">${data.control.name}</span></div>
          <div class="penetration-metric"><span class="label">控制要求</span><span class="value">${data.control.requirement}</span></div>
          <div class="penetration-metric"><span class="label">执行状态</span><span class="value danger">${data.control.status}</span></div>
        </div>
        <div class="penetration-card">
          <h4>指标穿透</h4>
          <div class="penetration-metric"><span class="label">指标</span><span class="value">${data.indicator.name}</span></div>
          <div class="penetration-metric"><span class="label">目标</span><span class="value">${data.indicator.target}</span></div>
          <div class="penetration-metric"><span class="label">当前</span><span class="value danger">${data.indicator.current}</span></div>
          <div class="penetration-metric"><span class="label">偏差</span><span class="value danger">${data.indicator.deviation}</span></div>
        </div>
        <div class="penetration-card">
          <h4>权责穿透</h4>
          <div class="chain-flow">${renderChain(data.responsibility)}</div>
          <table class="accountability-table">
            <thead><tr><th>责任主体</th><th>职责与权限</th><th>响应时限</th></tr></thead>
            <tbody>
              <tr><td>集团投资管理部</td><td>制定监管规则、接收重大预警、督办整改</td><td>重大风险 1 个工作日</td></tr>
              <tr><td>${data.unit}投资管理部门</td><td>组织经营分析、审核整改方案、跟踪控制执行</td><td>预警后 5 个工作日</td></tr>
              <tr><td>项目负责人</td><td>采集经营数据、提交风险说明、落实整改措施</td><td>按月报送 / 实时上报</td></tr>
              <tr><td>委派董事</td><td>监督重大经营决策、提请董事会审议、反馈履职报告</td><td>重大事项 5 个工作日</td></tr>
            </tbody>
          </table>
          <div class="accountability-evidence"><b>权责留痕：</b>经营分析报告、预警签收记录、整改方案、董事履职报告已纳入监管证据链。</div>
        </div>
        <div class="penetration-card">
          <h4>控制规则依据</h4>
          <div class="chain-flow">${renderChain(data.policy)}</div>
        </div>
        <div class="penetration-card">
          <h4>业务触点穿透</h4>
          <div class="chain-flow">${renderChain(data.systems)}</div>
        </div>
      </div>

      <div class="analysis-two-col">
        <div class="card">
          <div class="card-title">风险成因分析</div>
          <div class="cause-map">
            <div class="cause-center">风险发生<br><strong>${data.name}</strong></div>
            <div class="cause-item external"><b>外部因素</b><span>行业需求波动、市场竞争加剧</span><em>影响度 25%</em></div>
            <div class="cause-item operating"><b>经营因素</b><span>收入下降、成本上升、项目进度滞后</span><em>影响度 35%</em></div>
            <div class="cause-item management"><b>管理因素</b><span>投后跟踪频率不足、经营分析滞后</span><em>影响度 25%</em></div>
            <div class="cause-item control"><b>控制因素</b><span>预警阈值触发滞后、责任响应不及时</span><em>影响度 15%</em></div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">控制有效性评价</div>
          <div class="control-evaluation">
            <div><span>控制设计有效性</span><b class="badge badge-success">有效</b><p>已建立经营指标监测与年度投资评价机制</p></div>
            <div><span>控制执行有效性</span><b class="badge badge-warning">部分有效</b><p>季度监测频率难以及时识别月度经营异常</p></div>
            <div><span>控制评价结论</span><b class="badge badge-danger">需优化</b><p>建议将核心经营指标采集频率提升至月度</p></div>
          </div>
          <button class="btn btn-outline" onclick="App.navigate('process',{activityId:'post-track'})">查看关联控制活动</button>
        </div>
      </div>

      <div class="card">
        <div class="card-title">数据来源与数据血缘</div>
        <div class="lineage-flow">
          <span>财务系统<br><small>净利润、现金流</small></span><i>→</i>
          <span>经营指标模型<br><small>利润下降率</small></span><i>→</i>
          <span>风险规则引擎<br><small>阈值 -30%</small></span><i>→</i>
          <span>风险预警<br><small>当前 ${data.indicator.current}</small></span><i>→</i>
          <span>集团监管分析<br><small>整改督办</small></span>
        </div>
      </div>

      <div class="analysis-two-col">
        <div class="card">
          <div class="card-title">责任主体穿透</div>
          <div class="responsibility-tree">
            <div>集团总部 · 投资管理部 <small>监管督办</small></div>
            <i>↓</i><div>${data.unit} · 投资管理部门 <small>风险管理</small></div>
            <i>↓</i><div>项目负责人 <small>整改执行</small></div>
            <i>↓</i><div>委派董事 / 经营负责人 <small>经营监督</small></div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">处置与整改建议</div>
          <ol class="action-list"><li>5个工作日内完成专项经营分析并报送集团。</li><li>30日内制定经营改善与收益提升方案。</li><li>将经营指标监测频率由季度调整为月度。</li><li>提交投资管理委员会审议，纳入重点项目督办。</li></ol>
          <button class="btn btn-primary" onclick="App.navigate('rectification')">进入整改闭环管理</button>
        </div>
      </div>

      <div class="emergency-box">
        <h4>应急行动（${data.emergency.level}）</h4>
        <ol>${data.emergency.measures.map(m => `<li>${m}</li>`).join('')}</ol>
        <p style="margin-top:10px;font-size:13px;"><strong>责任部门：</strong>${data.emergency.department}</p>
      </div>
      <div class="card" style="margin-top:16px;">
        <div class="card-title">数据证据链</div>
        <div class="evidence-line"><span>2026-03<br><b>利润下降20%</b></span><i>↓</i><span>2026-05<br><b>触发黄色预警</b></span><i>↓</i><span>2026-06<br><b>升级${data.level}</b></span><i>↓</i><span>2026-07<br><b>制定整改措施</b></span></div>
      </div>
      <div class="card ai-insight">
        <div class="card-title">风险智能分析助手</div>
        <p><strong>风险原因总结：</strong>被投资企业经营指标连续两个季度下滑，现有投后监测频率不足，经营异常未及时触发预警。</p>
        <p><strong>控制优化建议：</strong>增加核心经营指标月度采集；建立自动预警规则；强化董事履职跟踪。</p>
        <div class="ai-questions"><button onclick="App.answerAi('level')">为什么升级为重大风险？</button><button onclick="App.answerAi('action')">建议如何处置？</button><button onclick="App.answerAi('control')">控制如何优化？</button></div>
        <div class="ai-answer" id="aiAnswer">可点击上方问题，查看模拟分析结论。</div>
      </div>

      <div style="margin-top:16px;display:flex;gap:10px;">
        <button class="btn btn-primary" onclick="App.navigate('process', { activityId: 'post-track' })">查看关联业务流程</button>
        <button class="btn btn-outline" onclick="App.navigate('process', { activityId: 'post-track' })">查看控制活动</button>
        <button class="btn btn-outline" onclick="App.navigate('rectification')">查看整改闭环</button>
      </div>
    `;
  },

  renderControls() {
    const total = 968, valid = 911, abnormal = 57;
    document.getElementById('controlStats').innerHTML = `
      <div class="control-stat-card"><div class="num">${total}</div><div class="label">控制活动数量</div></div>
      <div class="control-stat-card"><div class="num">${valid}</div><div class="label">有效执行</div></div>
      <div class="control-stat-card abnormal"><div class="num">${abnormal}</div><div class="label">异常</div></div>
    `;

    const tbody = document.querySelector('#controlsTable tbody');
    tbody.innerHTML = APP_DATA.controls.map(c => {
      const badge = c.status === '正常' ? 'badge-success' : 'badge-danger';
      return `<tr>
        <td>${c.stage}</td>
        <td>${c.scenario}</td>
        <td>${c.activity}</td>
        <td>${c.requirement}</td>
        <td>${c.frequency}</td>
        <td>${c.department}</td>
        <td><span class="badge ${badge}">${c.status}</span></td>
      </tr>`;
    }).join('');
  },

  renderMatters() {
    document.getElementById('matterTypes').innerHTML = APP_DATA.matters.map(m => `
      <div class="matter-card">
        <div class="type">${m.type}</div>
        <div class="count">${m.count}项</div>
        <div class="pending">待跟踪 ${m.pending}项</div>
      </div>
    `).join('');
  },

  renderRectification() {
    const r = APP_DATA.rectification;
    document.getElementById('rectStats').innerHTML = `
      <div class="warning-stat total"><div class="num">${r.total}</div><div class="label">风险发现</div></div>
      <div class="warning-stat yellow"><div class="num">${r.inProgress}</div><div class="label">整改中</div></div>
      <div class="warning-stat" style=""><div class="num" style="color:var(--success)">${r.completed}</div><div class="label">已完成</div></div>
      <div class="warning-stat red"><div class="num">${r.overdue}</div><div class="label">超期事项</div></div>
    `;

    document.getElementById('rectFlow').innerHTML = r.steps.map((step, i) =>
      (i > 0 ? '<span class="rect-arrow">↓</span>' : '') + `<div class="rect-step">${step}</div>`
    ).join('');
  },

  renderRectificationGovernance() {
    const governance = document.getElementById('rectificationGovernance');
    const analysis = document.getElementById('rectificationAnalysis');
    if (governance) governance.innerHTML = `
      <div class="closure-steps">
        <div class="closure-step critical"><span>01</span><div><b>风险发现与任务生成</b><p>风险等级达到 L3 及以上，系统自动生成整改任务并推送责任单位。</p><small>责任：集团投资管理部 · 时限：发现后 1 个工作日 · 输出：整改任务单</small></div></div>
        <div class="closure-arrow">→</div>
        <div class="closure-step"><span>02</span><div><b>责任确认与方案制定</b><p>所属企业确认责任部门、责任人、整改措施和计划完成时间。</p><small>责任：所属企业投资管理部门 · 时限：5 个工作日 · 输出：整改方案</small></div></div>
        <div class="closure-arrow">→</div>
        <div class="closure-step"><span>03</span><div><b>整改执行与过程督办</b><p>按节点上传证据材料，集团按风险等级实施分级督办。</p><small>责任：项目负责人 · 时限：L4≤90天 / L3≤180天 · 输出：执行记录</small></div></div>
        <div class="closure-arrow">→</div>
        <div class="closure-step"><span>04</span><div><b>效果验证与风险关闭</b><p>核验风险指标、控制有效性和同类风险复发情况，形成验证结论。</p><small>责任：集团投资管理部 · 输出：验证报告、风险关闭决定</small></div></div>
      </div>
      <div class="closure-rules"><div><b>自动督办规则</b><span>L4风险每周跟踪；L3风险每月跟踪；临近到期15日自动提醒。</span></div><div><b>超期升级规则</b><span>超过计划完成日自动升级红色督办，并推送责任单位负责人。</span></div><div><b>关闭准入规则</b><span>指标恢复、控制有效、验证通过且无同类风险复发，方可关闭。</span></div></div>`;
    if (analysis) analysis.innerHTML = `
      <div class="analysis-card"><h4>整改进度与时效</h4><div class="closure-progress"><div><span>整改制定</span><b>100%</b><i style="width:100%"></i></div><div><span>整改执行</span><b>68%</b><i style="width:68%"></i></div><div><span>整改验证</span><b>92%</b><i style="width:92%"></i></div></div><p>平均整改周期 <strong>45天</strong>，同比缩短 12%。</p></div>
      <div class="analysis-card"><h4>整改效果评价</h4><div class="effect-compare"><span>整改前</span><b class="badge badge-danger">L4 · 利润下降36%</b><i>→</i><span>整改后</span><b class="badge badge-success">L2 · 利润恢复增长5%</b></div><p>验证维度：风险等级变化、控制有效性、指标恢复、同类风险复发。</p><p><strong>当前验证通过率：92%</strong></p></div>
      <div class="analysis-card"><h4>长效机制沉淀</h4><ul class="mechanism-list"><li>新增“经营指标月度监测”自动预警规则</li><li>将重大事项报送纳入所属企业月度考核</li><li>优化投后管理制度中风险阈值及响应时限</li><li>对重复发生风险开展专项复盘</li></ul></div>`;
  },

  renderPortfolio() {
    document.getElementById('portfolioByUnit').innerHTML = APP_DATA.portfolio.byUnit.map(u => `
      <div class="portfolio-item">
        <div class="name">${u.name}</div>
        <div class="stat">投资项目：<strong>${u.projects}个</strong></div>
        <div class="stat">风险项目：<strong style="color:var(--danger)">${u.riskProjects}个</strong></div>
      </div>
    `).join('');

    document.getElementById('portfolioByIndustry').innerHTML = APP_DATA.portfolio.byIndustry.map(i => `
      <div class="portfolio-item">
        <div class="name">${i.name}</div>
        <div class="stat">项目：<strong>${i.projects}个</strong></div>
      </div>
    `).join('');

    document.getElementById('portfolioByRegion').innerHTML = APP_DATA.portfolio.byRegion.map(r => `
      <div class="portfolio-item">
        <div class="name">${r.name}</div>
        <div class="stat">项目：<strong>${r.projects}个</strong></div>
      </div>
    `).join('');
    const kpis = document.getElementById('portfolioKpis');
    if (kpis) kpis.innerHTML = APP_DATA.portfolioSummary.map(item => `
      <div class="metric-card"><div class="label">${item[0]}</div><div class="value">${item[1]}<span>${item[0].includes('收益') ? '%' : item[0].includes('余额') ? '亿元' : ''}</span></div><div class="sub-items">${item[2]}</div></div>
    `).join('');
    document.getElementById('portfolioAnalysis').innerHTML = `
      <div class="analysis-card"><h4>行业集中度（CR5）</h4><strong>72%</strong><p>前五大行业投资金额占比，风险等级：<span class="badge badge-warning">中等</span></p></div>
      <div class="analysis-card"><h4>投资收益分析</h4><strong>8.6%</strong><p>优秀项目45个 · 正常220个 · 关注68个 · 亏损23个</p></div>
      <div class="analysis-card"><h4>组合风险评分</h4><strong>78 分</strong><p>行业、区域、收益、经营四维综合评分：<span class="badge badge-warning">关注</span></p></div>`;
    document.getElementById('portfolioAi').innerHTML = `<div class="card-title">投资组合智能洞察</div><p><strong>当前判断：</strong>集团投资组合整体稳定，但新能源领域投资集中度较高，部分项目收益低于目标。</p><p><strong>优化建议：</strong>加强低收益项目退出评估；优化新能源投资比例；提高海外投资风险监测频率。</p>`;
  },

  renderDashboardInsights() {
    const insights = document.getElementById('dashboardInsights');
    if (insights) insights.innerHTML = `
      <div class="insight-card dense-card"><div class="insight-head"><span>法人主体风险分布</span><button onclick="App.navigate('warnings')">查看明细 ›</button></div><table class="mini-table"><thead><tr><th>主体</th><th>重大</th><th>较大</th><th>预警状态</th></tr></thead><tbody><tr><td>A公司</td><td class="danger-text">5</td><td>8</td><td>重点督办</td></tr><tr><td>B公司</td><td class="danger-text">1</td><td>2</td><td>持续监测</td></tr><tr><td>C公司</td><td>0</td><td>3</td><td>持续监测</td></tr><tr><td>D公司</td><td class="danger-text">2</td><td>5</td><td>重点关注</td></tr></tbody></table></div>
      <div class="insight-card dense-card"><div class="insight-head"><span>业务板块风险分布</span><button onclick="App.navigate('process')">查看价值链 ›</button></div><div class="board-bars"><p><span>股权投资</span><i><b style="width:76%"></b></i><em>18项</em></p><p><span>固定资产投资</span><i><b style="width:62%"></b></i><em>14项</em></p><p><span>境外投资</span><i><b style="width:48%"></b></i><em>8项</em></p><p><span>投资后评价</span><i><b style="width:32%"></b></i><em>6项</em></p></div><small class="insight-note">按投资类型、业务环节与法人主体汇总集团风险。</small></div>
      <div class="insight-card dense-card"><div class="insight-head"><span>前十大风险场景</span><button onclick="App.navigate('warnings')">全部场景 ›</button></div><div class="top-scenarios"><button onclick="App.navigate('kri',{kriId:'kri-approval',scenarioId:'scenario-approval'})"><b>1</b> 决策审批合规风险 <span class="badge badge-danger">L4</span></button><button onclick="App.navigate('kri',{kriId:'kri-post',scenarioId:'scenario-post'})"><b>2</b> 投后运营与价值实现风险 <span class="badge badge-danger">L4</span></button><button onclick="App.navigate('kri',{kriId:'kri-capex',scenarioId:'scenario-capex'})"><b>3</b> 固定资产投资实施风险 <span class="badge badge-warning">L3</span></button><button onclick="App.navigate('kri',{kriId:'kri-filing',scenarioId:'scenario-filing'})"><b>4</b> 备案与监管程序风险 <span class="badge badge-warning">L3</span></button></div></div>`;
    const bottom = document.getElementById('dashboardBottom');
    if (bottom) bottom.innerHTML = `<div class="bottom-item"><span>投资管理专题风险评分</span><strong>78 分</strong><em>关注</em><p>投资决策、经营、收益、退出四维综合测算</p></div><div class="bottom-item"><span>法人主体风险分布</span><strong>4 家重点主体</strong><p>A公司 · B公司 · C公司 · D公司</p></div><div class="bottom-item"><span>本月集团监管动态</span><strong>新增预警 12 项</strong><p>自动识别 9 项 · 人工上报 3 项 · 已关闭 8 项</p></div>`;
  },

  renderDashboardHeatmap() {
    const node = document.getElementById('dashboardHeatmap');
    if (!node) return;
    node.innerHTML = `<div class="dashboard-heatmap">${APP_DATA.dashboardHeatmap.map((item, i) =>
      `<button class="heatmap-stage ${item.level}" onclick="App.navigate('process',{stageId:'${APP_DATA.processStages[i].id}'})"><span>${item.stage}</span><b>${item.risks}</b><small>项风险 · ${item.label}</small></button>`
    ).join('')}</div>`;
  },

  renderValueChainOverview() {
    const node = document.getElementById('valueChainOverview');
    if (!node) return;
    node.innerHTML = APP_DATA.processStages.map(stage => `<button class="value-chain-card" onclick="App.navigate('process',{stageId:'${stage.id}'})"><strong>${stage.name}</strong><span>${stage.projects} 项监管对象</span><span>关键事项：${stage.controls} 项</span><em class="${stage.warnings > 2 ? 'risk-high' : stage.warnings ? 'risk-mid' : 'risk-low'}">${stage.warnings > 2 ? '重点关注' : stage.warnings ? '持续跟踪' : '过程受控'}</em></button>`).join('') + `<div class="chain-description">全链条穿透围绕股权投资与固定资产投资，从战略规划、决策审批、合同交割、项目建设 / 投后管理到退出后评价，逐节点关联法人主体、审批事项、合同资金、实施进度和责任主体。</div>`;
  },

  renderRiskMatrix() {
    const node = document.getElementById('riskMatrix');
    if (!node) return;
    node.innerHTML = `<div class="entity-penetration"><div class="entity-root"><b>集团总部</b><span>出资人监管 / 授权管理 / 重大事项监督</span></div><div class="entity-branches"><div><i>↓</i><div class="entity-node"><b>A公司</b><span>一级法人主体 · 重大风险 5 项</span></div><i>↓</i><div class="entity-child"><b>A1项目公司</b><span>固定资产建设项目</span></div><div class="entity-child"><b>A2参股企业</b><span>股权投资项目</span></div></div><div><i>↓</i><div class="entity-node"><b>B公司</b><span>一级法人主体 · 重大风险 1 项</span></div><i>↓</i><div class="entity-child"><b>B1项目公司</b><span>投资运营主体</span></div></div><div><i>↓</i><div class="entity-node"><b>C公司</b><span>一级法人主体 · 重点关注事项</span></div><i>↓</i><div class="entity-child"><b>C1建设主体</b><span>固定资产投资主体</span></div></div><div><i>↓</i><div class="entity-node"><b>D公司</b><span>一级法人主体 · 境外投资事项</span></div><i>↓</i><div class="entity-child"><b>D1境外平台</b><span>境外投资运营主体</span></div></div></div></div><p class="matrix-note">按“集团总部 → 一级法人主体 → 项目公司 / 参股企业”逐级穿透，关联主体层级、投资类型、重大事项与风险状态。</p></div>`;
  },

  renderWarningCharts() {
    const node = document.getElementById('warningCharts');
    if (!node) return;
    const bars = APP_DATA.warningTrend.map(x => `<i style="height:${x[1] * 1.5}px" title="${x[0]}：${x[1]}项"></i>`).join('');
    node.innerHTML = `<div class="chart-card"><h4>预警事件分级结构</h4><div class="donut"><b>46</b><span>当前预警</span></div><p><span class="badge badge-danger">L4 8</span> <span class="badge badge-warning">L3 15</span> <span class="badge badge-info">L2 23</span></p></div><div class="chart-card trend"><h4>预警事件生成与关闭趋势</h4><div class="bar-chart">${bars}</div><p>按月统计新生成预警、已关闭预警及存量变化，用于评价风险处置闭环效率。</p></div><div class="chart-card"><h4>法人主体预警分布</h4>${APP_DATA.warningEnterpriseHeatmap.map(x => `<div class="enterprise-line"><span>${x.unit}</span><b class="badge-danger">L4 ${x.l4}</b><b class="badge-warning">L3 ${x.l3}</b><b class="badge-info">L2 ${x.l2}</b></div>`).join('')}</div>`;
  },

  renderRectKanban() {
    const node = document.getElementById('rectKanban');
    if (!node) return;
    const cols = ['整改制定', '整改执行', '整改验证', '已关闭'];
    node.innerHTML = cols.map(col => `<div class="kanban-column"><h4>${col}<span>${APP_DATA.rectificationTasks.filter(x => x.status === col).length}</span></h4>${APP_DATA.rectificationTasks.filter(x => x.status === col).map(x => `<button class="kanban-card" onclick="App.openDrawer('rect','${x.id}')"><span class="badge ${x.level === 'L4' ? 'badge-danger' : 'badge-warning'}">${x.level}</span><strong>${x.title}</strong><small>${x.company} · 截止 ${x.deadline}</small><div class="progress"><i style="width:${x.progress}%"></i></div><em>完成 ${x.progress}%</em></button>`).join('')}</div>`).join('');
  },

  openDrawer(type, id) {
    const overlay = document.getElementById('drawerOverlay');
    const panel = document.getElementById('drawerPanel');
    const task = type === 'rect' ? APP_DATA.rectificationTasks.find(x => x.id === id) : null;
    panel.innerHTML = task ? `<div class="drawer-header"><h3>整改任务详情</h3><button onclick="App.closeDrawer()">×</button></div><span class="badge badge-danger">${task.level}</span><h3>${task.title}</h3><div class="drawer-section"><label>责任链</label><p>集团投资管理部 ↓ ${task.company}${task.owner} ↓ 项目负责人</p></div><div class="drawer-section"><label>整改措施</label><p>${task.measure}</p></div><div class="drawer-section"><label>整改进度</label><div class="progress"><i style="width:${task.progress}%"></i></div><p>${task.progress}% · 计划完成：${task.deadline}</p></div><div class="drawer-section"><label>过程记录</label><p>2026-06-15 风险发现<br>2026-06-20 下发整改通知<br>2026-07-05 提交整改方案<br>2026-08-01 完成控制优化</p></div>` : '';
    overlay.classList.add('show');
  },

  closeDrawer(event) {
    if (!event || event.target === document.getElementById('drawerOverlay')) document.getElementById('drawerOverlay').classList.remove('show');
  },

  answerAi(type) {
    const answers = {
      level: '风险升级为重大风险的直接原因是：核心指标连续两个季度显著低于阈值，当前偏差已超过预警红线；同时风险敞口较大，控制执行出现滞后。',
      action: '建议立即启动专项经营分析，明确集团、所属企业和项目负责人的整改责任；30日内形成改善方案，按月跟踪关键指标，并提交投资管理委员会审议。',
      control: '建议将经营指标监测由季度改为月度，接入财务系统自动采集净利润、现金流和资产负债率；设置分级阈值并明确预警响应时限。'
    };
    const target = document.getElementById('aiAnswer');
    if (target) target.textContent = answers[type];
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ensureOfflineStyles();
  App.init();
});
