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
  dataGovFilter: {},
  dataGovLineageFocus: 'LIN001',
  dataGovLineageStep: 0,
  publicNavigationContext: {},

  menuItems: [
    { id: 'dashboard', icon: '📊', label: '驾驶舱' },
    { id: 'process', icon: '🔄', label: '监管对象与价值链' },
    { id: 'scenarios', icon: '◈', label: '风险场景' },
    { id: 'controls', icon: '🛡️', label: 'KRI与控制规则' },
    { id: 'warnings', icon: '🔔', label: '风险预警中心' },
    { id: 'rectification', icon: '✅', label: '整改闭环管理' },
    { id: 'portfolio', icon: '📈', label: '监管分析台账' }
  ],

  pageTitles: {
    dashboard: '集团穿透式监管驾驶舱',
    process: '监管对象与价值链',
    scenarios: '风险场景',
    warnings: '风险预警中心',
    penetration: '风险穿透分析',
    controls: 'KRI与控制规则',
    matters: '投资事项及股东权利管理',
    rectification: '整改闭环管理',
    portfolio: '投资组合分析',
    kri: 'KRI与风险场景详情',
    group: '集团监管总览',
    major: '重大事项监管',
    foundation: '监管基础能力'
    ,matter: '投资重大事项详情',
    'global-legal-entities': '全球法人监管',
    'global-regions': '全球区域/国别监管',
    'coverage-gaps': '监管对象覆盖与盲区',
    'platform-operations': '监管运行监测',
    'data-governance': '数据治理与数据血缘'
  },

  init() {
    this.renderNav();
    this.renderGroupOverview();
    this.renderGlobalLegalEntities();
    this.renderGlobalRegions();
    this.renderCoverageGaps();
    this.renderPlatformOperations();
    this.renderDataGovernance();
    this.renderMajorMatters();
    this.renderFoundationWorkbench();
    this.renderDashboardMetrics();
    this.renderRegulationDomains();
    this.renderGroupKriBoard();
    this.renderMajorMatters();
    this.renderDashboardHeatmap();
    this.renderDashboardInsights();
    this.renderTopRisks();
    this.renderProcessTree();
    this.renderValueChainOverview();
    this.renderInvestmentKriControls();
    this.renderRiskMatrix();
    this.renderStageExceptions();
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

    if (this.currentDomain !== 'investment' && ['dashboard', 'process', 'scenarios', 'controls', 'warnings', 'rectification', 'portfolio'].includes(pageId)) {
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

    if (['global-legal-entities', 'global-regions', 'coverage-gaps', 'platform-operations', 'data-governance', 'warnings', 'rectification'].includes(pageId) && Object.keys(params).length) {
      setTimeout(() => this.applyPublicNavigationContext(pageId, params), 50);
    }
  },

  navigatePublic(pageId, params = {}) {
    this.publicNavigationContext = params;
    this.navigate(pageId, params);
  },

  applyPublicNavigationContext(pageId, params) {
    if (pageId === 'global-legal-entities' && params.entityId) this.showGlobalEntityDetail(params.entityId);
    if (pageId === 'global-regions') {
      if (params.projectId) this.showGlobalProjectDetail(params.projectId);
      else if (params.entityId) this.showGlobalEntityDetail(params.entityId);
      else if (params.regionId) this.showGlobalRegionDetail(params.regionId, params.countryId);
    }
    if (pageId === 'coverage-gaps' && params.gapId) this.showCoverageGapDetail(params.gapId);
    if (pageId === 'platform-operations') {
      if (params.alertId) this.showPlatformAlertDetail(params.alertId);
      else if (params.sourceId) this.showPlatformSourceDetail(params.sourceId);
    }
    if (pageId === 'data-governance') {
      if (params.relationId) { this.dataGovLineageFocus = params.relationId; this.dataGovLineageStep = 0; this.renderDataGovernance(); }
      if (params.sourceId) this.showDataGovSourceDetail(params.sourceId);
      if (params.issueId) this.showDataGovQualityImpact(params.issueId);
      if (params.entityId) { this.dataGovFilter = { entity: (APP_DATA.globalLegalEntities.find(e => e.entityId === params.entityId) || {}).entityName }; this.renderDataGovernance(); }
    }
    if (pageId === 'warnings' && params.riskId) this.showWarningDetail(params.riskId);
    if (pageId === 'rectification' && (params.taskId || params.rectificationTaskId)) this.showRectificationTaskDetail(params.taskId || params.rectificationTaskId);
  },

  renderNav() {
    const nav = document.getElementById('navMenu');
    nav.innerHTML = this.getDomainMenu().map(item => `
      <div class="nav-item ${item.id === 'dashboard' ? 'active' : ''}" data-page="${item.id}" onclick="App.navigate('${item.id}')">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}</span>
      </div>
    `).join('');
  },

  getDomainMenu() {
    const base = [
      { id:'group', icon:'◉', label:'集团监管总览' },
      { id:'global-legal-entities', icon:'◎', label:'全球法人监管' },
      { id:'global-regions', icon:'◉', label:'全球区域/国别监管' },
      { id:'coverage-gaps', icon:'◌', label:'监管对象覆盖与盲区' },
      { id:'platform-operations', icon:'◍', label:'监管运行监测' },
      { id:'data-governance', icon:'◧', label:'数据治理与数据血缘' },
      { id:'dashboard', icon:'▦', label:'分领域监管' },
      { id:'major', icon:'◆', label:'重大事项监管' },
      { id:'warnings', icon:'🔔', label:'集团风险预警' },
      { id:'rectification', icon:'✅', label:'整改督办' },
      { id:'foundation', icon:'◈', label:'监管基础能力' }
    ];
    const menus = {
      investment:[['dashboard','投资管理驾驶舱'],['portfolio','投资结构与组合'],['process','投资价值链监测'],['warnings','投资风险监测'],['penetration','投资穿透分析'],['rectification','投资整改闭环']],
      finance:[['dashboard','财务管理驾驶舱'],['process','财务运行监测'],['controls','资金风险监测'],['warnings','债务风险监测'],['penetration','财务风险穿透'],['rectification','整改闭环']],
      equity:[['dashboard','产权管理驾驶舱'],['process','产权结构监测'],['controls','产权变动监测'],['warnings','资产运营监测'],['penetration','产权风险穿透'],['rectification','整改闭环']],
      contract:[['dashboard','合同管理驾驶舱'],['process','合同结构分析'],['controls','合同履约监测'],['warnings','重大合同监测'],['penetration','合同风险穿透'],['rectification','整改闭环']],
      supply:[['dashboard','供应链管理驾驶舱'],['process','供应商结构分析'],['controls','采购事项监测'],['warnings','供应商风险监测'],['penetration','供应链穿透分析'],['rectification','整改闭环']],
      financial:[['dashboard','金融业务驾驶舱'],['process','金融业务结构'],['controls','风险敞口监测'],['warnings','资产质量监测'],['penetration','金融风险穿透'],['rectification','整改闭环']],
      overseas:[['dashboard','境外业务驾驶舱'],['process','境外法人监管'],['controls','国别区域风险'],['warnings','境外重大事项'],['portfolio','境外资产监测'],['penetration','境外风险穿透'],['rectification','整改闭环']],
      technology:[['dashboard','工程项目驾驶舱'],['portfolio','项目组合分析'],['process','工程进度监测'],['controls','工程成本监测'],['warnings','安全质量风险'],['penetration','工程风险穿透'],['rectification','整改闭环']]
    };
    const icons={dashboard:'📊',portfolio:'📈',process:'🔄',controls:'🛡️',warnings:'🔔',penetration:'🔎',rectification:'✅'};
    if (this.currentDomain === 'investment') {
      return [
        {id:'group',icon:'◉',label:'集团监管总览'},
        {id:'dashboard',icon:'📊',label:'投资管理驾驶舱'},
        {id:'portfolio',icon:'📈',label:'投资结构与组合'},
        {id:'process',icon:'🔄',label:'投资价值链监测'},
        {id:'warnings',icon:'🔔',label:'投资风险监测'},
        {id:'controls',icon:'🛡️',label:'投资场景规则执行'},
        {id:'major',icon:'◆',label:'投资重大事项监管'},
        {id:'penetration',icon:'↳',label:'　风险监测 · 投资穿透分析'},
        {id:'rectification',icon:'✅',label:'投资整改闭环'}
      ];
    }
    return base;
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
      <div class="metric-card" onclick="App.navigate('portfolio')"><div class="label">投资项目总数</div><div class="value">1,286<span>项</span></div><div class="sub-items">同比 <strong>+6.8%</strong> · 环比 <strong>+1.2%</strong><br>重大项目：<strong>128项</strong> · 风险项目：<strong>47项</strong></div></div>
      <div class="metric-card" onclick="App.navigate('portfolio')"><div class="label">集团投资总额</div><div class="value">8,562<span>亿元</span></div><div class="sub-items">同比 <strong>+8.6%</strong> · 环比 <strong>+2.1%</strong><br>本年度新增：<strong>18项 / 126.8亿元</strong></div></div>
      <div class="metric-card" onclick="App.navigate('portfolio')"><div class="label">年度投资计划</div><div class="value">1,236<span>亿元</span></div><div class="sub-items">年度实际投资：<strong>864亿元</strong><br>计划完成率：<strong>69.9%</strong></div></div>
      <div class="metric-card" onclick="App.navigate('major')"><div class="label">重大投资事项</div><div class="value">128<span>项</span></div><div class="sub-items">待集团决策：<strong>18项</strong><br>待集团关注：<strong>24项</strong></div></div>
      <div class="metric-card" onclick="App.navigate('warnings')"><div class="label">投资风险事项</div><div class="value" style="color:var(--danger)">46<span>项</span></div><div class="sub-items">重大风险：<strong style="color:var(--danger)">8项</strong><br>高风险：<strong style="color:var(--warning)">15项</strong></div></div>
      <div class="metric-card" onclick="App.navigate('portfolio')"><div class="label">收益偏离项目</div><div class="value" style="color:var(--warning)">47<span>项</span></div><div class="sub-items">实际收益低于预期：<strong>31项</strong><br>持续偏离项目：<strong>16项</strong></div></div>
      <div class="metric-card" onclick="App.navigate('warnings')"><div class="label">投后评价完成率</div><div class="value">84.8<span>%</span></div><div class="sub-items">应开展后评价：<strong>112项</strong><br>逾期未完成：<strong style="color:var(--danger)">17项</strong></div></div>
      <div class="metric-card" onclick="App.navigate('rectification')"><div class="label">整改未闭环事项</div><div class="value" style="color:var(--danger)">18<span>项</span></div><div class="sub-items">整改中：<strong>25项</strong><br>逾期整改：<strong style="color:var(--danger)">12项</strong></div></div>
    `;
  },

  renderGroupOverview() {
    const node=document.getElementById('groupOverview'); if(!node)return;
    const fields=APP_DATA.regulationDomains.slice(0,8);
    node.innerHTML=`<div class="group-hero"><div><span>集团总部监管视角</span><h2>集团监管总览</h2><p>聚焦重点领域、重点法人、重大事项、重大风险和集团督办事项。</p></div><div>数据覆盖率 <b>92.6%</b></div></div>
    <div class="group-metrics">${[['126','纳入监管法人'],['8','纳入监管领域'],['3,286','重点监管事项'],['28','当前重大风险'],['126','当前重点预警'],['43','整改未闭环'],['18','集团重点督办'],['92.6%','数据覆盖率']].map(x=>`<button class="metric-card" onclick="App.navigate('dashboard')"><div class="value">${x[0]}</div><div class="label">${x[1]}</div></button>`).join('')}</div>
    <div class="card"><div class="card-title">公共监管底座入口</div><div class="field-status-grid"><button onclick="App.navigate('global-legal-entities')"><b>全球法人监管</b><span>全级次法人、项目公司、海外法人</span><em>高风险法人12家</em></button><button onclick="App.navigate('global-regions')"><b>全球区域/国别监管</b><span>区域、国家/地区、项目和风险</span><em>覆盖24个国家/地区</em></button><button onclick="App.navigate('coverage-gaps')"><b>监管对象覆盖与盲区</b><span>法人、系统、数据、KRI、规则覆盖</span><em>覆盖盲区18项</em></button><button onclick="App.navigate('platform-operations')"><b>监管运行监测</b><span>数据接入、质量、KRI、规则、预警与闭环</span><em>运行告警3项</em></button><button onclick="App.navigate('data-governance')"><b>数据治理与数据血缘</b><span>数据源、标准、指标、KRI血缘与质量影响</span><em>质量异常14项</em></button></div></div>
    <div class="card"><div class="card-title">分领域监管态势</div><div class="field-status-grid">${fields.map((f,i)=>`<button onclick="App.selectRegulationDomain('${f.id}')"><b>${f.name}</b><span>重点事项：${[1286,486,238,426,512,186,328,412][i]}项</span><em>重大风险：${[12,3,2,4,5,2,6,4][i]}项</em><small>整改中：${[18,6,4,8,9,3,11,7][i]}项</small></button>`).join('')}</div></div>
    <div class="group-three"><div class="card"><div class="card-title">重点法人监管画像</div><table class="data-table"><thead><tr><th>法人</th><th>高风险领域</th><th>综合关注度</th></tr></thead><tbody><tr><td>A公司</td><td>投资、境外、合同</td><td><span class="badge badge-danger">高</span></td></tr><tr><td>B公司</td><td>投资、财务</td><td><span class="badge badge-warning">较高</span></td></tr><tr><td>D公司</td><td>境外、供应链</td><td><span class="badge badge-warning">较高</span></td></tr></tbody></table></div><div class="card"><div class="card-title">集团重点督办事项</div><div class="supervision-list"><p><b>01</b> 某境外投资项目收益持续偏离 <span class="badge badge-danger">L4</span></p><p><b>02</b> 固定资产项目追加投资接近审批边界 <span class="badge badge-warning">L3</span></p><p><b>03</b> 重大合同履约延期事项 <span class="badge badge-warning">L3</span></p></div></div></div>
    <div class="card"><div class="card-title">全级次法人监管态势</div><table class="data-table"><thead><tr><th>法人层级</th><th>法人数量</th><th>重大风险</th><th>重点预警</th><th>重大事项</th><th>控制规则异常</th><th>整改未闭环</th></tr></thead><tbody><tr><td>集团总部</td><td>1</td><td>0</td><td>0</td><td>18</td><td>0</td><td>6</td></tr><tr><td>一级子企业</td><td>12</td><td>8</td><td>32</td><td>86</td><td>4</td><td>15</td></tr><tr><td>二级子企业</td><td>38</td><td>12</td><td>58</td><td>164</td><td>7</td><td>18</td></tr><tr><td>三级子企业</td><td>52</td><td>6</td><td>29</td><td>73</td><td>3</td><td>4</td></tr><tr><td>四级及以下企业</td><td>23</td><td>2</td><td>7</td><td>21</td><td>1</td><td>0</td></tr></tbody></table></div>
    <div class="group-three"><div class="card"><div class="card-title">跨领域风险与重点区域</div><table class="data-table"><thead><tr><th>风险</th><th>涉及领域</th><th>区域 / 法人</th><th>趋势</th></tr></thead><tbody><tr><td>境外投资收益偏离</td><td>投资、财务、境外</td><td>中东 / B公司</td><td><span class="badge badge-danger">上升</span></td></tr><tr><td>重大合同履约延期</td><td>合同、供应链、工程</td><td>境内 / A公司</td><td><span class="badge badge-warning">关注</span></td></tr></tbody></table></div><div class="card"><div class="card-title">监管覆盖与盲区</div><div class="supervision-list"><p><b>92.6%</b> 重点事项已形成有效监测</p><p><b>8</b> 家法人存在数据更新滞后</p><p><b>14</b> 项重点事项待补充 KRI 或控制证据</p><p><b>6</b> 项整改待集团验证</p></div></div></div>`;
  },

  renderGlobalLegalEntities() {
    const node=document.getElementById('globalLegalEntities'); if(!node)return;
    const entities=APP_DATA.globalLegalEntities;
    const overseas=entities.filter(e=>e.regionId!=='CN');
    const totalSites=entities.reduce((s,e)=>s+(e.siteCount||e.projectSiteCount||0),0);
    node.innerHTML=`<div class="group-hero"><div><span>集团级公共监管对象层</span><h2>全球法人监管</h2><p>全球 → 区域 → 国家/地区 → 法人 → 项目公司的全级次监管对象视图。</p></div><div>全球法人 <b>${entities.length}家</b></div></div><div class="group-metrics">${[[entities.length,'集团法人总数'],[overseas.length,'境外法人'],[APP_DATA.globalCountries.length,'国家/地区'],[APP_DATA.globalRegions.length,'覆盖区域'],[entities.filter(e=>e.entityType==='项目公司').length,'项目公司'],[totalSites,'项目现场'],[entities.filter(e=>e.highRiskCount>0).length,'高风险法人'],[entities.filter(e=>e.dataCoverageStatus!=='已接入'&&e.dataAccessStatus!=='已接入').length,'接入不完整法人'],[entities.reduce((s,e)=>s+(e.majorMatterCount||0),0),'重大事项'],[entities.reduce((s,e)=>s+(e.openRectificationCount||e.rectificationCount||0),0),'整改未闭环']].map(x=>`<div class="metric-card"><div class="value">${x[0]}</div><div class="label">${x[1]}</div></div>`).join('')}</div><div class="group-three"><div class="card"><div class="card-title">全级次法人关系</div><div class="kri-lineage">${entities.map(e=>`<button onclick="App.showGlobalEntityDetail('${e.entityId}')"><b>${e.entityName}</b><br>${e.entityLevel} · ${e.regionName||e.regionId} · 项目${e.projectCount}项</button><i>→</i>`).join('')}</div></div><div class="card"><div class="card-title">全球区域分布</div>${APP_DATA.globalRegions.map(r=>`<button class="enterprise-line" onclick="App.navigatePublic('global-regions',{regionId:'${r.regionId}'})"><span>${r.regionName}</span><b>法人 ${r.entityCount||r.legalEntityCount}</b><b>项目 ${r.projectCount}</b><b class="${r.highRiskCount?'badge-danger':'badge-success'}">高风险 ${r.highRiskCount}</b></button>`).join('')}</div></div><div class="card"><div class="card-title">法人监管画像</div><table class="data-table"><thead><tr><th>法人</th><th>层级/上级</th><th>区域/国家</th><th>业务</th><th>项目</th><th>风险/KRI</th><th>事项/整改</th><th>数据/合规</th></tr></thead><tbody>${entities.map(e=>`<tr class="clickable" onclick="App.showGlobalEntityDetail('${e.entityId}')"><td>${e.entityName}</td><td>${e.entityLevel} / ${e.parentEntityName||e.parentEntityId||'—'}</td><td>${e.regionName||e.regionId} / ${e.countryName||e.countryId}</td><td>${e.businessDomains}</td><td>${e.projectCount}</td><td>${e.riskCount} / ${e.kriExceptionCount}</td><td>${e.majorMatterCount||0} / ${e.openRectificationCount||e.rectificationCount}</td><td>${e.dataCoverageStatus||e.dataAccessStatus} / ${e.dataQualityStatus} / ${e.crossBorderComplianceStatus}</td></tr>`).join('')}</tbody></table></div><div id="globalEntityDetail"></div>`;
  },

  renderGlobalRegions() {
    const node=document.getElementById('globalRegions'); if(!node)return;
    node.innerHTML=`<div class="group-hero"><div><span>集团级公共监管对象层</span><h2>全球区域/国别监管</h2><p>区域 → 国家/地区 → 法人 → 项目 → 业务领域 → 风险事项。</p></div><div>覆盖国家 <b>${APP_DATA.globalCountries.length}个</b></div></div><div class="field-status-grid">${APP_DATA.globalRegions.map(r=>`<button onclick="App.navigatePublic('global-regions',{regionId:'${r.regionId}'})"><b>${r.regionName}</b><span>法人 ${r.entityCount||r.legalEntityCount} · 国家 ${r.countryCount} · 项目 ${r.projectCount}</span><em>风险 ${r.riskCount} · 高风险 ${r.highRiskCount}</em><small>接入率 ${r.dataCoverage||r.dataCoverageRate} · 合规 ${r.complianceStatus}</small></button>`).join('')}</div><div class="card"><div class="card-title">国家/地区监管画像</div><table class="data-table"><thead><tr><th>国家/地区</th><th>法人/项目</th><th>业务领域</th><th>投资金额</th><th>风险/KRI</th><th>重大事项</th><th>整改</th><th>数据质量</th><th>跨境合规</th></tr></thead><tbody>${APP_DATA.globalCountries.map(c=>`<tr class="clickable" onclick="App.navigatePublic('global-regions',{regionId:'${c.regionId}',countryId:'${c.countryId}'})"><td>${c.countryName} · ${c.countryRiskLevel}风险</td><td>${c.entityCount||c.legalEntityCount} / ${c.projectCount}</td><td>${c.businessDomains}</td><td>${c.investmentAmount}</td><td>${c.riskCount} / ${c.kriExceptionCount}</td><td>${c.majorMatterCount}</td><td>${c.rectificationCount}</td><td>${c.dataQualityStatus} (${c.dataCoverage||c.dataCoverageRate})</td><td>${c.crossBorderComplianceStatus}</td></tr>`).join('')}</tbody></table></div><div id="globalRegionDetail"></div>`;
  },

  showGlobalEntityDetail(entityId) {
    const entity=APP_DATA.globalLegalEntities.find(e=>e.entityId===entityId); const node=document.getElementById('globalEntityDetail');
    if(!entity||!node)return;
    const country=APP_DATA.globalCountries.find(c=>c.countryId===entity.countryId);
    const projects=APP_DATA.globalProjects.filter(p=>p.entityId===entity.entityId);
    const sources=APP_DATA.dataSourceRegistry.filter(s=>s.entityId===entity.entityId);
    const risks=APP_DATA.warnings.filter(w=>w.entityId===entity.entityId);
    const rects=APP_DATA.rectificationTasks.filter(t=>t.entityId===entity.entityId);
    const qualityIssues=APP_DATA.dataQualityIssues.filter(q=>{ const obj=APP_DATA.dataObjects.find(o=>o.objectId===q.objectId); return obj&&obj.entityId===entity.entityId; });
    node.innerHTML=`<div class="card"><div class="card-title">${entity.entityName} · 公共监管对象画像</div><div class="info-grid"><div class="info-item"><div class="info-label">组织关系</div><div class="info-value">${entity.entityLevel} · 上级${entity.parentEntityName||entity.parentEntityId||'—'}</div></div><div class="info-item"><div class="info-label">地理位置</div><div class="info-value">${entity.regionName||entity.regionId} / ${country?country.countryName:entity.countryId} / ${entity.city}</div></div><div class="info-item"><div class="info-label">业务与项目</div><div class="info-value">${entity.businessDomains} · 项目${entity.projectCount}项 / 现场${entity.siteCount||entity.projectSiteCount||0}个</div></div><div class="info-item"><div class="info-label">监管状态</div><div class="info-value">风险${entity.riskCount} · KRI异常${entity.kriExceptionCount} · 整改${entity.openRectificationCount||entity.rectificationCount}</div></div><div class="info-item full"><div class="info-label">数据与合规</div><div class="info-value">数据接入：${entity.dataCoverageStatus||entity.dataAccessStatus}；质量：${entity.dataQualityStatus}；最近更新：${entity.lastDataUpdateTime||'待补充'}；跨境合规：${entity.crossBorderComplianceStatus}；责任部门：${entity.responsibleDepartment||'待明确'}</div></div></div>
      <p class="insight-note">关联项目：${projects.map(p=>`<button class="btn btn-outline" style="margin:2px" onclick="App.navigatePublic('global-regions',{projectId:'${p.projectId}'})">${p.projectName}</button>`).join('')||'暂无项目明细'}</p>
      <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-outline" onclick="App.navigatePublic('data-governance',{entityId:'${entity.entityId}'})">查看关联数据源</button>
        ${qualityIssues[0]?`<button class="btn btn-outline" onclick="App.navigatePublic('data-governance',{issueId:'${qualityIssues[0].issueId}'})">查看数据质量</button>`:''}
        ${risks[0]?`<button class="btn btn-outline" onclick="App.navigatePublic('warnings',{riskId:'${risks[0].id}'})">查看风险事项</button>`:''}
        ${rects[0]?`<button class="btn btn-outline" onclick="App.navigatePublic('rectification',{taskId:'${rects[0].taskId}'})">查看整改任务</button>`:''}
        ${projects[0]?`<button class="btn btn-outline" onclick="App.navigatePublic('global-regions',{projectId:'${projects[0].projectId}'})">查看所属项目</button>`:''}
        ${sources[0]?`<button class="btn btn-outline" onclick="App.navigatePublic('platform-operations',{sourceId:'${sources[0].sourceId}'})">查看运行监测</button>`:''}
      </div></div>`;
  },

  showGlobalProjectDetail(projectId) {
    const project=APP_DATA.globalProjects.find(p=>p.projectId===projectId);
    const node=document.getElementById('globalRegionDetail')||document.getElementById('globalEntityDetail');
    if(!project||!node)return;
    const entity=APP_DATA.globalLegalEntities.find(e=>e.entityId===project.entityId);
    const country=APP_DATA.globalCountries.find(c=>c.countryId===project.countryId);
    const risks=APP_DATA.warnings.filter(w=>w.projectId===projectId);
    const rects=APP_DATA.rectificationTasks.filter(t=>t.projectId===projectId);
    node.innerHTML=`<div class="card"><div class="card-title">${project.projectName} · 项目监管画像</div>
      <div class="info-grid"><div class="info-item"><div class="info-label">所属法人</div><div class="info-value"><button class="btn btn-outline" onclick="App.navigatePublic('global-legal-entities',{entityId:'${project.entityId}'})">${entity?entity.entityName:project.entityId}</button></div></div>
      <div class="info-item"><div class="info-label">区域/国家</div><div class="info-value">${project.regionId} / ${country?country.countryName:project.countryId}</div></div>
      <div class="info-item"><div class="info-label">投资与状态</div><div class="info-value">${project.investmentAmount} · ${project.projectStatus} · ${project.businessDomain}</div></div>
      <div class="info-item"><div class="info-label">监管指标</div><div class="info-value">风险${project.riskMatterCount||project.riskCount}项 · 高风险${project.highRiskMatterCount||project.highRiskCount}项 · 整改未闭环${project.openRectificationCount||project.rectificationCount}项</div></div>
      <div class="info-item full"><div class="info-label">数据覆盖</div><div class="info-value">接入：${project.dataCoverageStatus||project.dataAccessStatus}；质量：${project.dataQualityStatus||'—'}；最近更新：${project.lastDataUpdateTime||'—'}；责任部门：${project.responsibleDepartment||'—'}</div></div></div>
      <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
        ${risks[0]?`<button class="btn btn-outline" onclick="App.navigatePublic('warnings',{riskId:'${risks[0].id}'})">查看风险事项</button>`:''}
        ${rects[0]?`<button class="btn btn-outline" onclick="App.navigatePublic('rectification',{taskId:'${rects[0].taskId}'})">查看整改任务</button>`:''}
        <button class="btn btn-outline" onclick="App.navigatePublic('coverage-gaps',{gapId:'GAP001'})">查看覆盖盲区</button>
      </div></div>`;
  },

  showGlobalRegionDetail(regionId, countryId) {
    const region=APP_DATA.globalRegions.find(r=>r.regionId===regionId); const node=document.getElementById('globalRegionDetail')||document.getElementById('globalEntityDetail');
    if(!region||!node)return;
    const countries=APP_DATA.globalCountries.filter(c=>c.regionId===regionId);
    const entities=APP_DATA.globalLegalEntities.filter(e=>e.regionId===regionId && (!countryId||e.countryId===countryId));
    const projects=APP_DATA.globalProjects.filter(p=>p.regionId===regionId && (!countryId||p.countryId===countryId));
    node.innerHTML=`<div class="card"><div class="card-title">${countryId?(countries.find(c=>c.countryId===countryId)||{}).countryName:region.regionName} · 区域/国别监管详情</div><div class="info-grid"><div class="info-item"><div class="info-label">区域监管</div><div class="info-value">国家${region.countryCount}个 · 法人${region.entityCount||region.legalEntityCount}家 · 项目${region.projectCount}项</div></div><div class="info-item"><div class="info-label">风险与整改</div><div class="info-value">风险${region.riskCount} · 高风险${region.highRiskCount} · 未闭环整改${region.rectificationCount}</div></div><div class="info-item full"><div class="info-label">数据与跨境合规</div><div class="info-value">数据接入率${region.dataCoverage||region.dataCoverageRate}；质量：${region.dataQualityStatus||'—'}；跨境合规状态：${region.complianceStatus}；国家、法人、项目均使用统一 regionId/countryId/entityId 关联。</div></div></div>
      <p class="insight-note">法人：${entities.map(e=>`<button class="btn btn-outline" style="margin:2px" onclick="App.navigatePublic('global-legal-entities',{entityId:'${e.entityId}'})">${e.entityName}</button>`).join('')||'待补充'}；项目：${projects.map(p=>`<button class="btn btn-outline" style="margin:2px" onclick="App.navigatePublic('global-regions',{projectId:'${p.projectId}'})">${p.projectName}</button>`).join('')||'待补充'}；国家：${countries.map(c=>c.countryName).join('、')}。</p></div>`;
  },

  renderCoverageGaps() {
    const node=document.getElementById('coverageGaps'); if(!node)return;
    const matrix=[['法人','系统接入','已覆盖','数据接入','部分覆盖','KRI覆盖','已覆盖','规则覆盖','部分覆盖','整改闭环','部分覆盖'],['项目','系统接入','已覆盖','数据接入','已覆盖','KRI覆盖','部分覆盖','规则覆盖','已覆盖','整改闭环','已覆盖'],['业务领域','系统接入','部分覆盖','数据接入','已覆盖','KRI覆盖','已覆盖','规则覆盖','部分覆盖','整改闭环','部分覆盖'],['区域/国家','系统接入','部分覆盖','数据接入','数据异常','KRI覆盖','已覆盖','规则覆盖','部分覆盖','整改闭环','部分覆盖']];
    const gapCount=APP_DATA.coverageGaps.length;
    node.innerHTML=`<div class="group-hero"><div><span>集团级公共监管底座</span><h2>监管对象覆盖与盲区</h2><p>判断集团是否真正看得到、监得到、管得到、追得上监管对象。</p></div><div>覆盖盲区 <b>${gapCount}项</b></div></div><div class="group-metrics">${APP_DATA.coverageMetrics.map(m=>`<div class="metric-card"><div class="value">${m[1]}</div><div class="label">${m[0]}</div><div class="sub-items">目标${m[2]} · 较上期${m[3]}<br>异常对象：${m[4]}</div></div>`).join('')}</div><div class="card"><div class="card-title">监管覆盖矩阵</div><table class="data-table"><thead><tr><th>监管对象</th><th>系统接入</th><th>数据接入</th><th>KRI覆盖</th><th>规则覆盖</th><th>整改闭环</th></tr></thead><tbody>${matrix.map(r=>`<tr><td>${r[0]}</td><td>${r[2]}</td><td>${r[4]}</td><td>${r[6]}</td><td>${r[8]}</td><td>${r[10]}</td></tr>`).join('')}</tbody></table></div><div class="card"><div class="card-title">监管盲区清单</div><table class="data-table"><thead><tr><th>对象</th><th>类型</th><th>区域/国家</th><th>缺失环节</th><th>覆盖状态</th><th>风险影响</th><th>责任部门</th></tr></thead><tbody>${APP_DATA.coverageGaps.map(g=>{ const region=APP_DATA.globalRegions.find(r=>r.regionId===g.regionId); const country=APP_DATA.globalCountries.find(c=>c.countryId===g.countryId); return `<tr class="clickable" onclick="App.showCoverageGapDetail('${g.gapId}')"><td>${g.name}</td><td>${g.gapType}</td><td>${region?region.regionName:g.regionId}/${country?country.countryName:g.countryId}</td><td>${g.gaps}</td><td><span class="badge ${g.status==='已覆盖'?'badge-success':'badge-warning'}">${g.status}</span></td><td>${g.impact}</td><td>${g.responsibleDepartment}</td></tr>`; }).join('')}</tbody></table></div><div id="coverageGapDetail"></div><div class="card"><div class="card-title">统一监管覆盖链路</div><div class="kri-lineage"><span>法人</span><i>→</i><span>系统</span><i>→</i><span>数据</span><i>→</i><span>指标</span><i>→</i><span>KRI</span><i>→</i><span>规则</span><i>→</i><span>风险监测</span><i>→</i><span>责任与整改</span></div></div>`;
  },

  showCoverageGapDetail(gapId) {
    const gap=APP_DATA.coverageGaps.find(g=>g.gapId===gapId);
    const node=document.getElementById('coverageGapDetail');
    if(!gap||!node)return;
    const entity=gap.entityId?APP_DATA.globalLegalEntities.find(e=>e.entityId===gap.entityId):null;
    const project=gap.projectId?APP_DATA.globalProjects.find(p=>p.projectId===gap.projectId):null;
    const source=gap.sourceId?APP_DATA.dataSourceRegistry.find(s=>s.sourceId===gap.sourceId):null;
    const obj=gap.objectId?APP_DATA.dataObjects.find(o=>o.objectId===gap.objectId):null;
    const kri=gap.kriId?APP_DATA.groupKris.find(k=>k.id===gap.kriId):null;
    const risk=APP_DATA.warnings.find(w=>w.entityId===gap.entityId&&(gap.kriId?w.kriId===gap.kriId:true));
    const rect=gap.rectificationTaskId?APP_DATA.rectificationTasks.find(t=>t.taskId===gap.rectificationTaskId):null;
    const relation=APP_DATA.dataLineageRelations.find(r=>r.sourceId===gap.sourceId&&r.kriId===gap.kriId)||APP_DATA.dataLineageRelations.find(r=>r.sourceId===gap.sourceId);
    node.innerHTML=`<div class="card"><div class="card-title">${gap.name} · 覆盖盲区穿透</div>
      <div class="kri-lineage">
        ${entity?`<button onclick="App.navigatePublic('global-legal-entities',{entityId:'${entity.entityId}'})"><b>法人</b><br>${entity.entityName}</button><i>→</i>`:''}
        ${source?`<button onclick="App.navigatePublic('data-governance',{sourceId:'${source.sourceId}'})"><b>数据源</b><br>${source.systemName}</button><i>→</i>`:''}
        ${obj?`<button onclick="App.navigatePublic('data-governance',{sourceId:'${obj.sourceId}'})"><b>数据对象</b><br>${obj.objectName}</button><i>→</i>`:''}
        ${kri?`<button onclick="App.navigatePublic('data-governance',{relationId:'${relation?relation.relationId:'LIN001}'})"><b>KRI</b><br>${kri.name}</button><i>→</i>`:''}
        ${risk?`<button onclick="App.navigatePublic('warnings',{riskId:'${risk.id}'})"><b>风险事项</b><br>${risk.name}</button><i>→</i>`:''}
        ${rect?`<button onclick="App.navigatePublic('rectification',{taskId:'${rect.taskId}'})"><b>整改任务</b><br>${rect.title}</button>`:'<span><b>整改任务</b><br>待建立</span>'}
      </div>
      <p class="insight-note">缺失环节：${gap.gaps}；影响：${gap.impact}；责任部门：${gap.responsibleDepartment}</p>
      ${project?`<button class="btn btn-outline" onclick="App.navigatePublic('global-regions',{projectId:'${project.projectId}'})">查看关联项目</button>`:''}
    </div>`;
  },

  renderPlatformOperations() {
    const node=document.getElementById('platformOperations'); if(!node)return;
    const chain=[['监管对象','126','正常122','异常4'],['数据接入','96.8%','正常92.4%','异常3.2%'],['数据质量','97.1%','正常94.6%','异常2.9%'],['指标计算','98.6%','正常238项','失败4项'],['KRI更新','98.2%','成功234项','延迟4项'],['规则执行','99.1%','正常1,173次','异常42次'],['风险预警','97.8%','成功触达','未触达2.2%'],['责任处置','88.4%','及时处置','超期11.6%'],['整改闭环','76.4%','已关闭43项','未闭环18项']];
    const opSources=APP_DATA.dataSourceRegistry.filter(s=>['SRC001','SRC002','SRC003','SRC007'].includes(s.sourceId));
    node.innerHTML=`<div class="group-hero"><div><span>集团级公共监管底座</span><h2>监管运行监测</h2><p>监测集团穿透式监管平台从数据接入到风险处置的全链路运行状态。</p></div><div>运行告警 <b>${APP_DATA.platformOperationAlerts.length}项</b></div></div><div class="group-metrics">${APP_DATA.platformOperationMetrics.map(m=>`<div class="metric-card"><div class="value">${m[1]}</div><div class="label">${m[0]}</div><div class="sub-items">目标${m[2]} · 较上期${m[3]}<br>${m[4]}</div></div>`).join('')}</div><div class="card"><div class="card-title">监管运行链路</div><div class="kri-lineage">${chain.map(c=>`<span><b>${c[0]}</b><br>${c[1]}<br><small>${c[2]} · ${c[3]}</small></span><i>→</i>`).join('')}</div></div><div class="card"><div class="card-title">系统与数据源运行状态</div><table class="data-table"><thead><tr><th>系统</th><th>法人</th><th>区域/国家</th><th>领域</th><th>接口/同步</th><th>最近同步</th><th>完整率/及时率</th><th>质量评分</th><th>责任部门</th></tr></thead><tbody>${opSources.map(s=>`<tr class="clickable" onclick="App.navigatePublic('data-governance',{sourceId:'${s.sourceId}'})"><td>${s.systemName}<br><small>${s.systemType}</small></td><td>${s.ownerEntity}</td><td>${s.regionName}/${s.countryName}</td><td>${(s.businessDomains||[]).join('、')}</td><td>${s.interfaceStatus} / ${s.syncStatus}</td><td>${s.lastSyncTime}</td><td>${s.dataCompleteness} / ${s.dataTimeliness}</td><td>${s.qualityScore}</td><td>${s.dataOwner}</td></tr>`).join('')}</tbody></table></div><div class="card"><div class="card-title">监管运行异常清单</div><table class="data-table"><thead><tr><th>异常类型</th><th>等级</th><th>系统</th><th>法人/区域</th><th>领域</th><th>发生时间</th><th>状态</th><th>责任部门</th><th>期限</th><th>影响范围</th></tr></thead><tbody>${APP_DATA.platformOperationAlerts.map(a=>{ const entity=APP_DATA.globalLegalEntities.find(e=>e.entityId===a.entityId); const region=APP_DATA.globalRegions.find(r=>r.regionId===a.regionId); return `<tr class="clickable" onclick="App.showPlatformAlertDetail('${a.alertId}')"><td>${a.alertType}</td><td>${a.level}</td><td>${a.systemName}</td><td>${entity?entity.entityName:a.entityId} / ${region?region.regionName:a.regionId}</td><td>${a.businessDomain}</td><td>${a.occurredAt}</td><td>${a.status}</td><td>${a.responsibleDepartment}</td><td>${a.deadline}</td><td>${a.impactDesc}</td></tr>`; }).join('')}</tbody></table></div><div id="platformAlertDetail"></div><div class="card"><div class="card-title">近7日监管运行趋势</div><table class="data-table"><thead><tr><th>日期</th><th>数据接入率</th><th>数据质量</th><th>KRI更新</th><th>规则执行</th><th>预警触达</th><th>处置及时率</th><th>整改闭环</th></tr></thead><tbody>${APP_DATA.platformOperationHistory.map(h=>`<tr>${h.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  },

  showPlatformAlertDetail(alertId) {
    const alert=APP_DATA.platformOperationAlerts.find(a=>a.alertId===alertId);
    const node=document.getElementById('platformAlertDetail');
    if(!alert||!node)return;
    const source=APP_DATA.dataSourceRegistry.find(s=>s.sourceId===alert.sourceId);
    const entity=APP_DATA.globalLegalEntities.find(e=>e.entityId===alert.entityId);
    const objects=source?APP_DATA.dataObjects.filter(o=>o.sourceId===source.sourceId):[];
    const kri=alert.kriId?APP_DATA.groupKris.find(k=>k.id===alert.kriId):null;
    const risk=alert.riskMatterId?APP_DATA.warnings.find(w=>w.id===alert.riskMatterId):null;
    node.innerHTML=`<div class="card"><div class="card-title">${alert.alertType} · 运行异常穿透</div>
      <div class="kri-lineage">
        ${source?`<button onclick="App.navigatePublic('data-governance',{sourceId:'${source.sourceId}'})"><b>数据源</b><br>${source.systemName}</button><i>→</i>`:''}
        ${entity?`<button onclick="App.navigatePublic('global-legal-entities',{entityId:'${entity.entityId}'})"><b>法人</b><br>${entity.entityName}</button><i>→</i>`:''}
        ${objects[0]?`<button onclick="App.navigatePublic('data-governance',{sourceId:'${objects[0].sourceId}'})"><b>数据对象</b><br>${objects[0].objectName}</button><i>→</i>`:''}
        ${kri?`<button onclick="App.navigatePublic('data-governance',{relationId:'LIN001'})"><b>KRI</b><br>${kri.name}</button><i>→</i>`:''}
        ${risk?`<button onclick="App.navigatePublic('warnings',{riskId:'${risk.id}'})"><b>风险事项</b><br>${risk.name}</button>`:'<span><b>风险事项</b><br>暂无关联</span>'}
      </div>
      <p class="insight-note">${alert.impactDesc} · 责任部门：${alert.responsibleDepartment} · 期限：${alert.deadline}</p>
    </div>`;
  },

  showPlatformSourceDetail(sourceId) {
    this.navigatePublic('data-governance', { sourceId });
  },

  dataGovQualityBadge(status) {
    if (status === '正常' || status === '良好') return 'badge-success';
    if (status === '关注' || status === '整改中' || status === '待处理') return 'badge-warning';
    return 'badge-danger';
  },

  getDataGovLineageChain(relationId) {
    const rel = APP_DATA.dataLineageRelations.find(r => r.relationId === relationId);
    if (!rel) return null;
    const src = APP_DATA.dataSourceRegistry.find(s => s.sourceId === rel.sourceId);
    const obj = APP_DATA.dataObjects.find(o => o.objectId === rel.objectId);
    const fld = APP_DATA.dataFields.find(f => f.fieldId === rel.fieldId);
    const std = APP_DATA.dataStandards.find(s => s.standardId === rel.standardId);
    const ind = APP_DATA.dataIndicators.find(i => i.indicatorId === rel.indicatorId);
    const kri = rel.kriId ? APP_DATA.groupKris.find(k => k.id === rel.kriId) : null;
    const scenario = rel.scenarioId ? APP_DATA.groupRiskScenarios.find(s => s.id === rel.scenarioId) : null;
    const risk = rel.riskMatterId ? APP_DATA.warnings.find(w => w.id === rel.riskMatterId) : null;
    const rect = rel.rectificationId ? APP_DATA.rectificationTasks.find(t => t.id === rel.rectificationId) : null;
    return { rel, src, obj, fld, std, ind, kri, scenario, risk, rect };
  },

  renderDataGovernance() {
    const node = document.getElementById('dataGovernance');
    if (!node) return;
    const f = this.dataGovFilter || {};
    const sources = APP_DATA.dataSourceRegistry.filter(s =>
      (!f.entity || s.ownerEntity === f.entity) &&
      (!f.region || s.regionName === f.region) &&
      (!f.country || s.countryName === f.country) &&
      (!f.domain || (s.businessDomains || []).some(d => d.includes(f.domain))) &&
      (!f.systemType || s.systemType === f.systemType) &&
      (!f.interfaceStatus || s.interfaceStatus === f.interfaceStatus) &&
      (!f.qualityStatus || (f.qualityStatus === '正常' ? s.qualityScore >= 90 : f.qualityStatus === '关注' ? s.qualityScore >= 80 && s.qualityScore < 90 : s.qualityScore < 80))
    );
    const focusId = this.dataGovLineageFocus || APP_DATA.dataLineageRelations[0].relationId;
    const chain = this.getDataGovLineageChain(focusId);
    const lineageSteps = chain ? this.getDataGovLineageSteps(chain) : [];
    const currentStep = this.dataGovLineageStep || 0;
    const stdIssues = APP_DATA.dataStandards.filter(s => s.issueType);
    node.innerHTML = `
    <div class="group-hero"><div><span>集团级公共监管底座</span><h2>数据治理与数据血缘</h2><p>面向集团穿透式监管的数据治理与风险监管血缘能力：数据从哪里来、经过什么加工、最终支撑哪个监管指标和风险判断。</p></div><div>质量异常 <b>${APP_DATA.dataQualityIssues.length}项</b></div></div>
    <div class="group-metrics">${APP_DATA.dataGovernanceMetrics.map(m => `<div class="metric-card"><div class="value">${m[1]}</div><div class="label">${m[0]}</div><div class="sub-items">较上期 ${m[2]} · <span class="badge ${this.dataGovQualityBadge(m[3])}">${m[3]}</span></div></div>`).join('')}</div>
    <div class="card"><div class="card-title">数据源台账</div>
      <div class="filter-bar" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;">
        <select onchange="App.dataGovFilter.entity=this.value;App.renderDataGovernance()"><option value="">全部法人</option>${[...new Set(APP_DATA.dataSourceRegistry.map(s=>s.ownerEntity))].map(e=>`<option value="${e}" ${f.entity===e?'selected':''}>${e}</option>`).join('')}</select>
        <select onchange="App.dataGovFilter.region=this.value;App.renderDataGovernance()"><option value="">全部区域</option>${[...new Set(APP_DATA.dataSourceRegistry.map(s=>s.regionName))].map(e=>`<option value="${e}" ${f.region===e?'selected':''}>${e}</option>`).join('')}</select>
        <select onchange="App.dataGovFilter.country=this.value;App.renderDataGovernance()"><option value="">全部国家/地区</option>${[...new Set(APP_DATA.dataSourceRegistry.map(s=>s.countryName))].map(e=>`<option value="${e}" ${f.country===e?'selected':''}>${e}</option>`).join('')}</select>
        <select onchange="App.dataGovFilter.systemType=this.value;App.renderDataGovernance()"><option value="">全部系统类型</option>${[...new Set(APP_DATA.dataSourceRegistry.map(s=>s.systemType))].map(e=>`<option value="${e}" ${f.systemType===e?'selected':''}>${e}</option>`).join('')}</select>
        <select onchange="App.dataGovFilter.interfaceStatus=this.value;App.renderDataGovernance()"><option value="">全部接口状态</option><option value="正常" ${f.interfaceStatus==='正常'?'selected':''}>正常</option><option value="延迟" ${f.interfaceStatus==='延迟'?'selected':''}>延迟</option><option value="异常" ${f.interfaceStatus==='异常'?'selected':''}>异常</option></select>
        <select onchange="App.dataGovFilter.qualityStatus=this.value;App.renderDataGovernance()"><option value="">全部质量状态</option><option value="正常" ${f.qualityStatus==='正常'?'selected':''}>正常</option><option value="关注" ${f.qualityStatus==='关注'?'selected':''}>关注</option><option value="异常" ${f.qualityStatus==='异常'?'selected':''}>异常</option></select>
      </div>
      <table class="data-table"><thead><tr><th>系统</th><th>所属法人</th><th>区域/国家</th><th>业务领域</th><th>接口状态</th><th>最近同步</th><th>完整率</th><th>及时率</th><th>质量评分</th></tr></thead>
      <tbody>${sources.map(s => `<tr class="clickable" onclick="App.showDataGovSourceDetail('${s.sourceId}')"><td>${s.systemName}<br><small>${s.systemType}</small></td><td>${s.ownerEntity}</td><td>${s.regionName}/${s.countryName}</td><td>${(s.businessDomains||[]).join('、')}</td><td><span class="badge ${this.dataGovQualityBadge(s.interfaceStatus==='正常'?'正常':'异常')}">${s.interfaceStatus}</span></td><td>${s.lastSyncTime}</td><td>${s.dataCompleteness}</td><td>${s.dataTimeliness}</td><td>${s.qualityScore}</td></tr>`).join('')}</tbody></table>
    </div>
    <div id="dataGovSourceDetail"></div>
    <div class="card"><div class="card-title">数据质量监管</div>
      <table class="data-table"><thead><tr><th>异常类型</th><th>数据对象</th><th>字段</th><th>完整率</th><th>及时率</th><th>准确性</th><th>质量评分</th><th>责任部门</th><th>整改状态</th><th>风险影响</th></tr></thead>
      <tbody>${APP_DATA.dataQualityIssues.map(q => {
        const obj = APP_DATA.dataObjects.find(o => o.objectId === q.objectId);
        const fld = q.fieldId ? APP_DATA.dataFields.find(f => f.fieldId === q.fieldId) : null;
        return `<tr class="clickable" onclick="App.showDataGovQualityImpact('${q.issueId}')"><td><span class="badge badge-danger">${q.anomalyType}</span></td><td>${obj?obj.objectName:'—'}</td><td>${fld?fld.fieldName:'—'}</td><td>${q.completeness}</td><td>${q.timeliness}</td><td>${q.accuracy}</td><td>${q.qualityScore}</td><td>${q.ownerDepartment}</td><td><span class="badge ${this.dataGovQualityBadge(q.rectificationStatus)}">${q.rectificationStatus}</span></td><td>${q.impactDesc}</td></tr>`;
      }).join('')}</tbody></table>
    </div>
    <div id="dataGovQualityImpact"></div>
    <div class="card"><div class="card-title">数据血缘探索</div>
      <p class="insight-note" style="margin-bottom:12px;">支持从数据向前追溯监管影响，从风险向后追溯数据来源。当前链路节点：${lineageSteps[currentStep] ? lineageSteps[currentStep].label : '—'}（${currentStep + 1}/${lineageSteps.length}）</p>
      <div class="kri-lineage">${lineageSteps.map((step, i) => `<button style="${i === currentStep ? 'outline:2px solid #003d7a' : ''}" onclick="App.dataGovLineageFocus='${focusId}';App.dataGovLineageStep=${i};App.renderDataGovernance()"><b>${step.label}</b><br>${step.item[step.nameKey] || '—'}<br><small>${step.item[step.subKey] || ''}</small></button><i>→</i>`).join('')}</div>
      <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-outline" onclick="App.traceDataGovLineage('upstream')">查看上游</button>
        <button class="btn btn-outline" onclick="App.traceDataGovLineage('downstream')">查看下游</button>
        <button class="btn btn-outline" onclick="App.traceDataGovLineage('impact')">查看影响范围</button>
        ${APP_DATA.dataLineageRelations.map(r => `<button class="btn btn-outline" onclick="App.dataGovLineageFocus='${r.relationId}';App.dataGovLineageStep=0;App.renderDataGovernance()">${r.relationId}</button>`).join('')}
      </div>
    </div>
    <div id="dataGovLineageTrace"></div>
    <div class="card"><div class="card-title">数据对象管理</div>
      <table class="data-table"><thead><tr><th>数据对象名称</th><th>所属系统</th><th>所属法人</th><th>业务领域</th><th>数据责任部门</th><th>最近更新时间</th><th>质量状态</th><th>下游指标</th><th>下游KRI</th></tr></thead>
      <tbody>${APP_DATA.dataObjects.map(o => `<tr class="clickable" onclick="App.showDataGovObjectDetail('${o.objectId}')"><td>${o.objectName}</td><td>${o.systemName}</td><td>${o.ownerEntity}</td><td>${o.businessDomain}</td><td>${o.dataOwner}</td><td>${o.lastUpdateTime}</td><td><span class="badge ${this.dataGovQualityBadge(o.qualityStatus)}">${o.qualityStatus}</span></td><td>${o.downstreamIndicatorCount}</td><td>${o.downstreamKriCount}</td></tr>`).join('')}</tbody></table>
    </div>
    <div class="card"><div class="card-title">数据标准管理</div>
      ${stdIssues.length ? `<p class="insight-note">标准问题：${stdIssues.map(s => `<span class="badge badge-warning">${s.standardName}·${s.issueType}</span>`).join(' ')}</p>` : ''}
      <table class="data-table"><thead><tr><th>标准名称</th><th>标准编码</th><th>定义</th><th>单位</th><th>适用系统</th><th>适用领域</th><th>责任部门</th><th>使用指标</th><th>使用KRI</th><th>问题</th></tr></thead>
      <tbody>${APP_DATA.dataStandards.map(s => `<tr class="clickable" onclick="App.showDataGovStandardDetail('${s.standardId}')"><td>${s.standardName}</td><td>${s.standardCode}</td><td>${s.definition}</td><td>${s.unit}</td><td>${(s.applicableSystems||[]).join('、')}</td><td>${(s.applicableDomains||[]).join('、')}</td><td>${s.ownerDepartment}</td><td>${s.indicatorCount}</td><td>${s.kriCount}</td><td>${s.issueType ? `<span class="badge badge-warning">${s.issueType}</span>` : '—'}</td></tr>`).join('')}</tbody></table>
    </div>
    <div id="dataGovStandardDetail"></div>`;
  },

  showDataGovSourceDetail(sourceId) {
    const src = APP_DATA.dataSourceRegistry.find(s => s.sourceId === sourceId);
    const node = document.getElementById('dataGovSourceDetail');
    if (!src || !node) return;
    const objects = APP_DATA.dataObjects.filter(o => o.sourceId === sourceId);
    const relations = APP_DATA.dataLineageRelations.filter(r => r.sourceId === sourceId);
    node.innerHTML = `<div class="card"><div class="card-title">${src.systemName} · 数据源穿透</div>
      <div class="info-grid"><div class="info-item"><div class="info-label">法人/区域/国家</div><div class="info-value">${src.ownerEntity} · ${src.regionName} / ${src.countryName}</div></div>
      <div class="info-item"><div class="info-label">采集与同步</div><div class="info-value">${src.collectionMethod} · ${src.syncStatus} · ${src.lastSyncTime}</div></div>
      <div class="info-item"><div class="info-label">数据质量</div><div class="info-value">完整率${src.dataCompleteness} · 及时率${src.dataTimeliness} · 评分${src.qualityScore}</div></div></div>
      <p class="insight-note">数据对象：${objects.map(o => `<button class="btn btn-outline" style="margin:2px" onclick="App.showDataGovObjectDetail('${o.objectId}')">${o.objectName}</button>`).join('')}</p>
      <p class="insight-note">血缘链路：${relations.map(r => `<button class="btn btn-outline" style="margin:2px" onclick="App.dataGovLineageFocus='${r.relationId}';App.renderDataGovernance()">${r.relationId}</button>`).join('')}</p></div>`;
  },

  showDataGovObjectDetail(objectId) {
    const obj = APP_DATA.dataObjects.find(o => o.objectId === objectId);
    const node = document.getElementById('dataGovSourceDetail');
    if (!obj || !node) return;
    const fields = APP_DATA.dataFields.filter(f => f.objectId === objectId);
    const indicators = APP_DATA.dataIndicators.filter(i => i.sourceObject === objectId);
    node.innerHTML = `<div class="card"><div class="card-title">${obj.objectName} · 数据对象详情</div>
      <div class="info-grid"><div class="info-item"><div class="info-label">所属系统/法人</div><div class="info-value">${obj.systemName} · ${obj.ownerEntity}</div></div>
      <div class="info-item"><div class="info-label">责任与质量</div><div class="info-value">${obj.dataOwner} · ${obj.qualityStatus} · ${obj.lastUpdateTime}</div></div></div>
      <p><b>字段：</b>${fields.map(f => `<button class="btn btn-outline" style="margin:2px" onclick="App.showDataGovFieldDetail('${f.fieldId}')">${f.fieldName}</button>`).join('')}</p>
      <p><b>下游指标：</b>${indicators.map(i => i.indicatorName).join('、') || '—'}</p></div>`;
  },

  showDataGovFieldDetail(fieldId) {
    const fld = APP_DATA.dataFields.find(f => f.fieldId === fieldId);
    const node = document.getElementById('dataGovSourceDetail');
    if (!fld || !node) return;
    const std = APP_DATA.dataStandards.find(s => s.standardId === fld.standardId);
    const indicators = APP_DATA.dataIndicators.filter(i => (i.sourceFields || []).includes(fieldId));
    node.innerHTML = `<div class="card"><div class="card-title">${fld.fieldName} · 字段详情</div>
      <p>编码：${fld.fieldCode} · 类型：${fld.dataType} · 敏感级别：${fld.sensitivityLevel} · 质量：${fld.qualityStatus}</p>
      <p>统一标准：${std ? std.standardName + '（' + std.standardCode + '）' : '—'}</p>
      <p>关联指标：${indicators.map(i => i.indicatorName).join('、') || '—'}</p></div>`;
  },

  getDataGovLineageSteps(chain) {
    const steps = [
      { key: 'source', label: '源系统', item: chain.src, nameKey: 'systemName', subKey: 'ownerEntity' },
      { key: 'object', label: '数据对象', item: chain.obj, nameKey: 'objectName', subKey: 'ownerEntity' },
      { key: 'field', label: '数据字段', item: chain.fld, nameKey: 'fieldName', subKey: 'dataType' },
      { key: 'standard', label: '数据标准', item: chain.std, nameKey: 'standardName', subKey: 'ownerDepartment' },
      { key: 'indicator', label: '指标', item: chain.ind, nameKey: 'indicatorName', subKey: 'responsibleDepartment' },
      { key: 'kri', label: 'KRI', item: chain.kri, nameKey: 'name', subKey: 'status' },
      { key: 'scenario', label: '风险场景', item: chain.scenario, nameKey: 'name', subKey: 'level' },
      { key: 'controlRule', label: '控制规则', item: chain.rel.controlRule ? { name: chain.rel.controlRule, sub: chain.scenario ? chain.scenario.control : '—' } : null, nameKey: 'name', subKey: 'sub' },
      { key: 'risk', label: '风险事项', item: chain.risk, nameKey: 'name', subKey: 'unit' },
      { key: 'rectification', label: '整改任务', item: chain.rect, nameKey: 'title', subKey: 'company' }
    ];
    return steps.filter(s => s.item);
  },

  showDataGovQualityImpact(issueId) {
    const issue = APP_DATA.dataQualityIssues.find(q => q.issueId === issueId);
    const node = document.getElementById('dataGovQualityImpact');
    if (!issue || !node) return;
    const obj = APP_DATA.dataObjects.find(o => o.objectId === issue.objectId);
    const fld = issue.fieldId ? APP_DATA.dataFields.find(f => f.fieldId === issue.fieldId) : null;
    const ind = issue.indicatorId ? APP_DATA.dataIndicators.find(i => i.indicatorId === issue.indicatorId) : null;
    const kri = issue.kriId ? APP_DATA.groupKris.find(k => k.id === issue.kriId) : null;
    const scenario = issue.scenarioId ? APP_DATA.groupRiskScenarios.find(s => s.id === issue.scenarioId) : null;
    const risks = APP_DATA.warnings.filter(w => (issue.kriId && w.kriId === issue.kriId) || (issue.scenarioId && w.scenarioId === issue.scenarioId));
    const risk = risks[0] || null;
    const entity = risk ? APP_DATA.globalLegalEntities.find(e => e.entityId === risk.entityId) : (obj ? APP_DATA.globalLegalEntities.find(e => e.entityId === obj.entityId) : null);
    const rects = risk ? APP_DATA.rectificationTasks.filter(t => t.riskMatterId === risk.id || t.riskId === risk.id) : [];
    const rect = rects[0] || (risk && risk.rectificationTaskId ? APP_DATA.rectificationTasks.find(t => t.taskId === risk.rectificationTaskId) : null);
    node.innerHTML = `<div class="card"><div class="card-title">数据质量影响链路 · ${issue.anomalyType}</div>
      <div class="kri-lineage">
        <span><b>数据异常</b><br>${issue.anomalyType}<br><small>${obj?obj.objectName:''} · ${fld?fld.fieldName:''}</small></span><i>→</i>
        <span><b>影响指标</b><br>${ind?ind.indicatorName:'无法计算'}<br><small>${ind?ind.qualityStatus:'—'}</small></span><i>→</i>
        <span><b>影响KRI</b><br>${kri?kri.name:'KRI无法更新'}<br><small>${kri?kri.status:'—'}</small></span><i>→</i>
        <span><b>影响风险场景</b><br>${scenario?scenario.name:'监管盲区'}<br><small>${scenario?scenario.level:'—'}</small></span><i>→</i>
        <span><b>风险事项</b><br>${risk?risk.name:'当前无关联风险事项'}<br><small>${risk?risk.level:'—'}</small></span><i>→</i>
        <span><b>责任主体</b><br>${entity?entity.entityName:(risk?risk.unit:'—')}<br><small>${entity?entity.responsibleDepartment:'—'}</small></span><i>→</i>
        <span><b>整改任务</b><br>${rect?rect.title:'当前无关联整改任务'}<br><small>${rect?rect.status:'—'}</small></span>
      </div>
      <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
        ${risk?`<button class="btn btn-outline" onclick="App.navigatePublic('warnings',{riskId:'${risk.id}'})">查看风险事项</button>`:''}
        ${entity?`<button class="btn btn-outline" onclick="App.navigatePublic('global-legal-entities',{entityId:'${entity.entityId}'})">查看责任法人</button>`:''}
        ${rect?`<button class="btn btn-outline" onclick="App.navigatePublic('rectification',{taskId:'${rect.taskId}'})">查看整改任务</button>`:''}
      </div>
      <p class="insight-note">${issue.impactDesc}</p></div>`;
  },

  showDataGovStandardDetail(standardId) {
    const std = APP_DATA.dataStandards.find(s => s.standardId === standardId);
    const node = document.getElementById('dataGovStandardDetail');
    if (!std || !node) return;
    node.innerHTML = `<div class="card"><div class="card-title">${std.standardName} · 数据标准详情</div>
      <p>${std.definition}</p>
      <p><b>多系统统一：</b>${(std.aliasFields||[]).map(a => `<em>${a}</em>`).join('、')} → <strong>${std.standardName}</strong></p>
      <p>适用系统：${(std.applicableSystems||[]).join('、')} · 责任部门：${std.ownerDepartment}</p>
      <p>使用指标 ${std.indicatorCount} 个 · 使用KRI ${std.kriCount} 个${std.issueType ? ' · <span class="badge badge-warning">' + std.issueType + '</span>' : ''}</p></div>`;
  },

  traceDataGovLineage(direction) {
    const chain = this.getDataGovLineageChain(this.dataGovLineageFocus);
    const node = document.getElementById('dataGovLineageTrace');
    if (!chain || !node) return;
    const steps = this.getDataGovLineageSteps(chain);
    if (direction === 'upstream') {
      this.dataGovLineageStep = Math.max(0, (this.dataGovLineageStep || 0) - 1);
      this.renderDataGovernance();
      return;
    }
    if (direction === 'downstream') {
      this.dataGovLineageStep = Math.min(steps.length - 1, (this.dataGovLineageStep || 0) + 1);
      this.renderDataGovernance();
      return;
    }
    const impacts = APP_DATA.dataQualityIssues.filter(q => q.kriId === chain.rel.kriId || q.indicatorId === chain.rel.indicatorId);
    const risks = APP_DATA.warnings.filter(w => w.kriId === chain.rel.kriId || w.id === chain.rel.riskMatterId);
    const rects = APP_DATA.rectificationTasks.filter(t => t.taskId === chain.rel.rectificationId || risks.some(r => r.rectificationTaskId === t.taskId));
    node.innerHTML = `<div class="card"><div class="card-title">影响范围 · ${chain.src.systemName}</div>
      <p>当前节点：<strong>${steps[this.dataGovLineageStep || 0] ? steps[this.dataGovLineageStep || 0].label : '—'}</strong>（链路内第 ${(this.dataGovLineageStep || 0) + 1}/${steps.length} 步）</p>
      <p>关联指标：${APP_DATA.dataIndicators.filter(i => i.kriId === chain.rel.kriId).map(i => i.indicatorName).join('、') || '—'}</p>
      <p>关联KRI：${chain.kri ? chain.kri.name : '—'} · 风险场景：${chain.scenario ? chain.scenario.name : '—'}</p>
      <p>关联风险事项：${risks.map(r => r.name).join('、') || '当前无关联风险事项'}</p>
      <p>关联整改任务：${rects.map(t => t.title).join('、') || '当前无关联整改任务'}</p>
      <p>质量异常影响：${impacts.map(q => q.anomalyType + '（' + q.impactDesc + '）').join('；') || '暂无'}</p></div>`;
  },

  showRectificationTaskDetail(taskId) {
    const task = APP_DATA.rectificationTasks.find(t => t.taskId === taskId || t.id === taskId);
    const node = document.getElementById('rectificationAnalysis');
    if (!task || !node) return;
    const risk = APP_DATA.warnings.find(w => w.id === task.riskMatterId || w.id === task.riskId);
    const entity = task.entityId ? APP_DATA.globalLegalEntities.find(e => e.entityId === task.entityId) : null;
    const project = task.projectId ? APP_DATA.globalProjects.find(p => p.projectId === task.projectId) : null;
    node.innerHTML = `<div class="card"><div class="card-title">${task.title} · 整改任务穿透</div>
      <div class="info-grid"><div class="info-item"><div class="info-label">任务编号 / 状态</div><div class="info-value">${task.taskId} · ${task.status} · ${task.verificationStatus || '—'}</div></div>
      <div class="info-item"><div class="info-label">责任主体</div><div class="info-value">${task.responsibleEntity || task.company} · ${task.responsibleDepartment || task.owner}</div></div>
      <div class="info-item"><div class="info-label">进度 / 期限</div><div class="info-value">${task.progress}% · 截止${task.deadline}${task.closedAt ? ' · 关闭于' + task.closedAt : ''}</div></div>
      <div class="info-item full"><div class="info-label">整改措施</div><div class="info-value">${task.measure}</div></div></div>
      <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
        ${risk?`<button class="btn btn-outline" onclick="App.navigatePublic('warnings',{riskId:'${risk.id}'})">查看关联风险事项</button>`:''}
        ${entity?`<button class="btn btn-outline" onclick="App.navigatePublic('global-legal-entities',{entityId:'${entity.entityId}'})">查看责任法人</button>`:''}
        ${project?`<button class="btn btn-outline" onclick="App.navigatePublic('global-regions',{projectId:'${project.projectId}'})">查看关联项目</button>`:''}
      </div></div>`;
  },

  renderMajorMatters() {
    const node=document.getElementById('majorMatters'); if(!node)return;
    if (this.currentDomain === 'investment') {
      const types=[['重大投资决策',86,11,8,3],['重大并购投资',24,5,4,1],['重大投资变更',28,4,3,2],['重大投资退出',14,3,2,1],['重大收益偏离',31,9,8,4],['重大投后经营异常',18,6,5,3]];
      node.innerHTML=`<div class="group-hero"><div><span>领域作用域：投资管理</span><h2>投资重大事项监管</h2><p>识别、分类、跟踪投资管理领域重大事项及集团重点关注事项。</p></div><div>待集团关注 <b>18项</b></div></div><div class="domain-cockpit-metrics">${[['152','重大事项总数'],['18','待集团决策'],['24','需重点关注'],['43','已完成事项'],['12','超期事项'],['28','风险关联事项'],['18','整改未闭环'],['9','重大并购事项']].map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</div><div class="field-status-grid">${types.map(t=>`<button onclick="App.openMajorMatter()"><b>${t[0]}</b><span>事项：${t[1]}项 · 待处理：${t[2]}项</span><em>重点关注：${t[3]}项</em><small>超期：${t[4]}项</small></button>`).join('')}</div><div class="card"><div class="card-title">投资重大事项清单</div><table class="data-table"><thead><tr><th>事项名称</th><th>事项类型</th><th>投资主体</th><th>法人层级</th><th>项目/金额</th><th>阶段</th><th>风险/KRI</th><th>责任主体</th><th>状态</th></tr></thead><tbody><tr class="clickable" onclick="App.openMajorMatter()"><td>某境外能源项目</td><td>重大收益偏离</td><td>B公司</td><td>二级子企业</td><td>30亿元</td><td>投后运营</td><td>收益率偏离</td><td>境外事业部</td><td><span class="badge badge-danger">集团关注</span></td></tr><tr class="clickable" onclick="App.openMajorMatter()"><td>某固定资产建设项目</td><td>重大投资变更</td><td>C公司</td><td>一级子企业</td><td>18亿元</td><td>投资实施</td><td>追加审批边界</td><td>项目管理部</td><td><span class="badge badge-warning">整改中</span></td></tr></tbody></table></div>`;
      return;
    }
    const types=[['财务管理重大事项','218','5','9'],['投资管理重大事项','152','16','18'],['产权管理重大事项','36','3','6'],['合同管理重大事项','426','8','14'],['供应链管理重大事项','512','9','15'],['金融业务重大事项','56','3','4'],['境外业务重大事项','48','6','11'],['工程项目重大事项','312','7','12'],['科技创新重大事项','86','2','3'],['薪酬分配重大事项','22','1','2']];
    node.innerHTML=`<div class="group-hero"><div><span>集团总部统一监管</span><h2>重大事项监管</h2><p>按监管领域识别重大事项状态、风险、KRI预警、控制规则执行和责任主体。</p></div><div>待集团关注 <b>18项</b></div></div><div class="field-status-grid">${types.map(t=>`<button onclick="App.openMajorMatter()"><b>${t[0]}</b><span>事项总数：${t[1]}项</span><em>风险事项：${t[2]}项</em><small>待集团关注：${t[3]}项</small></button>`).join('')}</div><div class="card"><div class="card-title">重点事项清单</div><table class="data-table"><thead><tr><th>事项名称</th><th>类型</th><th>领域</th><th>法人</th><th>金额</th><th>阶段</th><th>风险场景</th><th>集团动作</th></tr></thead><tbody><tr class="clickable" onclick="App.openMajorMatter()"><td>某境外能源项目</td><td>重大投资</td><td>投资管理</td><td>B公司</td><td>30亿元</td><td>投后运营</td><td>投资收益未达预期</td><td><span class="badge badge-danger">专项督办</span></td></tr><tr class="clickable" onclick="App.openMajorMatter()"><td>某固定资产建设项目</td><td>重大工程</td><td>工程项目</td><td>C公司</td><td>18亿元</td><td>投资实施</td><td>追加投资审批风险</td><td><span class="badge badge-warning">升级审批</span></td></tr></tbody></table></div>`;
  },

  openMajorMatter() {
    this.navigate('matter');
    const node=document.getElementById('matterDetail'); if(!node)return;
    node.innerHTML=`<div class="group-hero"><div><span>投资管理领域 · 重大事项详情</span><h2>某境外能源项目</h2><p>事项编号：INV-MAT-2026-001 · 重大收益偏离事项 · 集团关注等级：高</p></div><div>事项状态 <b>实施中</b></div></div><div class="kri-detail-grid"><div class="card"><div class="card-title">事项基本信息</div><div class="detail-list"><p><b>投资主体 / 层级：</b>B公司 / 二级子企业</p><p><b>业务板块 / 区域：</b>清洁能源 / 中东</p><p><b>投资项目 / 金额：</b>某境外能源项目 / 30亿元</p><p><b>决策状态 / 当前进度：</b>已决策 / 68%</p><p><b>计划/预计完成：</b>2026-08-30 / 2026-09-15（预计延期16天）</p></div></div><div class="card"><div class="card-title">全级次法人路径与生命周期</div><div class="kri-lineage"><span>集团总部</span><i>→</i><span>一级子企业</span><i>→</i><span>二级子企业<br>B公司</span><i>→</i><span>三级及以下企业<br>项目公司</span></div><p class="insight-note">事项提出 → 立项论证 → 投资决策 → 实施执行 → 投后运营（当前）</p></div><div class="card"><div class="card-title">事项相关风险摘要</div><div class="detail-list"><p><b>风险状态：</b><span class="badge badge-danger">重大</span> · 关联风险事项2项</p><p><b>风险场景 / KRI：</b>投资收益未达预期 / 实际收益率3.2%，预警阈值6%</p><p><b>控制规则：</b>收益偏离触发专项经营分析，当前已触发。</p><button class="btn btn-outline" onclick="App.navigate('warnings')">查看风险事项</button></div></div><div class="card"><div class="card-title">责任与整改摘要</div><div class="detail-list"><p><b>责任部门：</b>B公司投资管理部 → 境外事业部 → 项目公司</p><p><b>整改事项：</b>关联2项，已关闭1项，未关闭1项</p><p><b>整改状态：</b><span class="badge badge-warning">整改中</span> · 进度60% · 截止2026-08-30</p><button class="btn btn-primary" onclick="App.navigate('rectification')">查看整改闭环</button></div></div></div>`;
  },

  renderFoundationWorkbench() {
    const node=document.getElementById('foundationWorkbench'); if(!node)return;
    const items=[['监管要求管理','42','关联场景 126个'],['风险场景管理','186','已关联KRI 172个'],['KRI指标管理','238','当前触发预警 46项'],['控制规则管理','126','执行异常 13项'],['控制证据管理','1,286','待补充证据 14项'],['监管对象管理','126','数据更新滞后 8家'],['监管关系管理','3,862','关系校验异常 6项']];
    node.innerHTML=`<div class="group-hero"><div><span>集团监管体系配置工作台</span><h2>监管基础能力</h2><p>维护监管要求、风险场景、KRI、控制规则、控制证据、监管对象与监管关系，所有对象以风险场景关联。</p></div></div><div class="foundation-grid">${items.map(x=>`<button class="foundation-card" onclick="App.navigate('scenarios')"><b>${x[0]}</b><strong>${x[1]}</strong><span>${x[2]}</span><em>查看配置与关联关系 ›</em></button>`).join('')}</div><div class="card"><div class="card-title">风险场景驱动配置链</div><div class="kri-lineage"><span>监管要求</span><i>→</i><span>风险场景</span><i>→</i><span>管理要求 / 控制目标</span><i>→</i><span>KRI指标</span><i>→</i><span>控制规则</span><i>→</i><span>控制证据</span><i>→</i><span>责任主体</span></div></div>`;
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
    this.renderNav();
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
    this.renderDashboardMetrics();
    this.renderGroupKriBoard();
    this.renderDashboardInsights();
    this.renderDashboardHeatmap();
    this.renderTopRisks();
    this.renderProcessTree();
    this.renderValueChainOverview();
    this.renderRiskMatrix();
    this.renderStageExceptions();
    this.renderScenarios();
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
    const moduleNames = { dashboard:'驾驶舱', process:'监管对象与关键流程', scenarios:'风险场景', controls:'KRI与控制规则', warnings:'预警中心', rectification:'整改闭环', portfolio:'监管分析台账' };
    if (pageId === 'dashboard') {
      const metrics = {
        finance:[['资金与预算异常','12项'],['重点法人主体','4家'],['重大预警','2项'],['整改完成率','91%']],
        equity:[['产权登记事项','38项'],['股权变动事项','9项'],['重大预警','1项'],['登记完整率','97%']],
        contract:[['重大合同事项','126项'],['履约异常事项','9项'],['重大预警','2项'],['审核及时率','96%']],
        supply:[['重点采购事项','154项'],['供应风险预警','14项'],['重大预警','3项'],['准入覆盖率','98%']],
        compensation:[['薪酬分配事项','32项'],['异常事项','5项'],['重大预警','0项'],['合规覆盖率','99%']],
        overseas:[['境外法人主体','6家'],['重点事项','48项'],['重大预警','3项'],['合规完成率','94%']],
        financial:[['金融业务事项','56项'],['风险预警','7项'],['重大预警','1项'],['规则覆盖率','96%']],
        technology:[['科技项目','86项'],['成果转化事项','21项'],['重大预警','1项'],['目标达成率','89%']]
      }[domain.id] || [];
      page.innerHTML = `<div class="domain-module-page"><div class="topic-banner"><div><strong>${domain.name} · 集团监管驾驶舱</strong><span>面向集团领导和归口管理部门，展示${domain.name}领域核心监管数据、重点法人主体与重大事项。</span></div></div><div class="domain-cockpit-metrics">${metrics.map(x => `<div><b>${x[1]}</b><span>${x[0]}</span></div>`).join('')}</div><div class="dashboard-insights"><div class="insight-card"><div class="insight-head"><span>国资监管关注</span></div><p class="domain-module-note">聚焦${domain.name}领域重大事项合规性、监管程序履行、风险预警与整改闭环情况。</p></div><div class="insight-card"><div class="insight-head"><span>集团监管重点</span></div><p class="domain-module-note">按 A、B、C、D 公司汇总关键指标、异常事项和责任落实，识别高风险法人主体。</p></div><div class="insight-card"><div class="insight-head"><span>领域特色关注</span></div><p class="domain-module-note">${domain.desc}。按领域规则识别异常并形成预警、督办、整改闭环。</p></div></div></div>`;
      return;
    }
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
    const hasRisk = kri.status.includes('重大') || kri.status.includes('预警');
    container.innerHTML = `
      <div class="kri-detail-hero"><div><span>${kri.category}</span><h2>${kri.name}</h2><p>风险场景：${scenario ? scenario.name : kri.scenario}</p></div><div><b>${kri.value}</b><em>${kri.status}</em><small>集团口径 · 覆盖主体：${kri.entities}</small></div></div>
      <div class="kri-detail-grid">
        <div class="card"><div class="card-title">KRI定义与阈值</div><div class="detail-list"><p><b>计算口径：</b>${kri.formula}</p><p><b>触发阈值：</b><span class="badge badge-danger">${kri.threshold}</span></p><p><b>监测频率：</b>关键节点实时校验 + 月度集团汇总</p><p><b>适用范围：</b>集团纳入监管的法人主体及重大投资事项</p></div></div>
        <div class="card"><div class="card-title">控制规则与处置</div><div class="detail-list"><p><b>控制规则：</b>在立项、审批、合同、付款、变更或投后监测节点自动校验。</p><p><b>处置动作：</b>${kri.control}</p><p><b>升级路径：</b>责任主体复核 → 所属企业管理部门 → 集团投资管理部督办。</p><p><b>规则依据：</b>国资监管投资管理要求、集团授权与投资管理制度。</p></div></div>
        <div class="card"><div class="card-title">数据来源与法人主体穿透</div><div class="detail-list"><p><b>汇聚数据：</b>${kri.source}</p><p><b>主体维度：</b>${kri.entities}</p><p><b>事项维度：</b>项目编号、投资类型、审批层级、合同/付款/变更动作。</p><p><b>数据留痕：</b>规则命中记录、校验结果、例外审批、处置与关闭证据。</p></div></div>
        <div class="card"><div class="card-title">规则执行与触发记录</div><div class="detail-list"><p><b>风险场景：</b>${scenario ? scenario.desc : kri.scenario}</p><p><b>控制目标：</b>及时识别并处置 ${kri.scenario}。</p><p><b>控制规则：</b>${kri.control}</p><p><b>最近执行：</b>2026-07-20 08:30；执行结果：${hasRisk ? '触发异常，已派单' : '正常放行'}。</p><p><b>控制证据：</b>规则执行记录、业务单据、审批记录、数据快照。</p>${hasRisk ? `<button class="btn btn-primary" onclick="App.navigate('penetration',{riskId:'risk-2',detail:true})">进入投资穿透分析</button>` : ''}</div></div>
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
      return `<tr class="clickable" onclick="App.navigate('warnings')">
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
    container.innerHTML = `<div class="scenario-guidance"><b>场景库定位：</b>统一定义集团“管什么”。每个场景明确适用的投资类型、法人主体范围、风险责任部门和监管优先级；具体 KRI、阈值和控制规则在“KRI与控制规则”模块维护，预警事件在“预警中心”管理。</div>` + APP_DATA.riskScenarios.map((group, idx) => `
      <div class="scenario-group">
        <div class="scenario-level1"><span class="num">${idx + 1}</span>${group.name}<small>集团级风险场景分类</small></div>
        <div class="scenario-children">
          ${group.children.map((child, ci) => `<div class="scenario-item"><div><div class="name">${child.name}</div><div class="desc">${child.desc}</div></div><div class="scenario-meta"><span>适用：${idx < 2 ? '固定资产投资、股权投资' : idx === 5 ? '境外投资' : '股权投资、固定资产投资'}</span><span>配置规则：${ci % 2 ? '预警阈值 + 人工复核' : '前置校验 + 流程阻断'}</span><span>主体：A、B、C、D公司</span><button class="btn btn-outline" onclick="App.navigate('controls')">查看规则执行</button></div></div>`).join('')}
        </div>
      </div>`).join('');
  },

  renderWarnings() {
    document.getElementById('warningSummary').innerHTML = `
      <button class="warning-stat total" onclick="App.filterWarnings('')"><div class="num">46</div><div class="label">风险事项</div></button>
      <button class="warning-stat red" onclick="App.filterWarnings('红色')"><div class="num">8</div><div class="label">重大风险</div></button>
      <button class="warning-stat yellow" onclick="App.filterWarnings('黄色')"><div class="num">15</div><div class="label">高风险</div></button>
      <button class="warning-stat blue" onclick="App.showWarningDetail('risk-2')"><div class="num">28</div><div class="label">KRI异常 / 规则触发</div><small>同比 +12.5%</small></button>
      <button class="warning-stat total" onclick="App.filterWarnings('')"><div class="num">18</div><div class="label">整改未闭环</div><small>逾期 6项</small></button>
    `;
    document.getElementById('warningFilters').innerHTML = `
      <input type="search" placeholder="搜索风险名称、项目或所属单位" oninput="App.filterWarnings(this.value)">
      <button class="filter-chip active" onclick="App.filterWarnings('', this)">全部</button>
      <button class="filter-chip" onclick="App.filterWarnings('红色', this)">L4 重大</button>
      <button class="filter-chip" onclick="App.filterWarnings('黄色', this)">L3 较大</button>
      <button class="filter-chip" onclick="App.filterWarnings('蓝色', this)">L2 一般</button>
      <select><option>全部法人层级</option><option>一级子企业</option><option>二级子企业</option><option>三级及以下企业</option><option>项目公司</option></select>
      <select><option>全部法人主体</option><option>A公司</option><option>B公司</option><option>C公司</option><option>D公司</option></select>
      <select><option>全部业务板块</option><option>工程建设</option><option>装备制造</option><option>清洁能源</option><option>其他业务</option></select>
      <select><option>全部区域</option><option>境内</option><option>境外</option><option>中东</option><option>其他区域</option></select>
      <select><option>全部业务阶段</option><option>投资机会识别</option><option>投资立项</option><option>投资决策</option><option>投资实施</option><option>投后管理</option><option>投资退出</option><option>投资后评价</option><option>整改与优化</option></select>`;

    const tbody = document.querySelector('#warningsTable tbody');
    tbody.innerHTML = APP_DATA.warnings.map(w => {
      const badge = w.status === '红色' ? 'badge-danger' : w.status === '黄色' ? 'badge-warning' : 'badge-info';
      return `<tr class="clickable" onclick="App.showWarningDetail('${w.id}')">
        <td>${w.name}<br><small>场景：投资收益/决策/投后风险</small></td>
        <td>${w.unit}<br><small>二级子企业 · 清洁能源</small></td>
        <td>${w.project}<br><small>投后管理 · 中东区域</small></td>
        <td>${w.indicator}<br><small>规则：已触发 · 责任：投资管理部</small></td>
        <td><span class="badge ${badge}">${w.status}</span></td>
        <td><button class="btn btn-primary" style="padding:4px 12px;font-size:12px;" onclick="event.stopPropagation();App.showWarningDetail('${w.id}')">查看详情</button></td>
      </tr>`;
    }).join('');
    document.getElementById('warningPagination').innerHTML = '<span>共 46 条风险事件</span><button class="active">1</button><button>2</button><button>3</button><button>›</button>';
  },

  filterWarnings(keyword, trigger) {
    if (trigger) document.querySelectorAll('.filter-chip').forEach(x => x.classList.remove('active')), trigger.classList.add('active');
    const rows = APP_DATA.warnings.filter(x => !keyword || Object.values(x).join(' ').includes(keyword));
    const tbody = document.querySelector('#warningsTable tbody');
    tbody.innerHTML = rows.map(w => `<tr class="clickable" onclick="App.showWarningDetail('${w.id}')"><td>${w.name}</td><td>${w.unit}</td><td>${w.project}</td><td>${w.indicator}</td><td><span class="badge ${w.status === '红色' ? 'badge-danger' : w.status === '黄色' ? 'badge-warning' : 'badge-info'}">${w.status}</span></td><td><button class="btn btn-primary" onclick="event.stopPropagation();App.showWarningDetail('${w.id}')">查看详情</button></td></tr>`).join('');
  },

  showWarningDetail(riskId) {
    const w=APP_DATA.warnings.find(x=>x.id===riskId)||APP_DATA.warnings[0];
    const node=document.getElementById('warningCharts'); if(!node)return;
    node.innerHTML=`<div class="card"><div class="card-title">${w.name} · 风险事项详情</div><div class="info-grid"><div class="info-item"><div class="info-label">风险场景 / 等级</div><div class="info-value">${w.name} / ${w.level}</div></div><div class="info-item"><div class="info-label">风险趋势 / 状态</div><div class="info-value">风险上升 / ${w.status}预警</div></div><div class="info-item"><div class="info-label">投资法人 / 层级</div><div class="info-value">${w.unit} / 二级子企业</div></div><div class="info-item"><div class="info-label">投资项目 / 阶段</div><div class="info-value">${w.project} / 投后运营</div></div><div class="info-item full"><div class="info-label">KRI 与控制规则</div><div class="info-value">异常KRI：${w.indicator}；预警阈值：6%；控制规则：收益偏离触发专项经营分析；执行结果：已触发。</div></div><div class="info-item full"><div class="info-label">责任与整改</div><div class="info-value">责任主体：${w.unit}投资管理部 → 项目公司；整改状态：整改中。</div></div></div><button class="btn btn-primary" onclick="App.navigate('penetration',{riskId:'${w.id}',detail:true})">进入投资穿透分析</button><button class="btn btn-outline" style="margin-left:8px" onclick="App.renderWarningCharts()">返回风险监测概览</button></div>`;
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

      <div class="card">
        <div class="card-title">集团—法人—项目全级次穿透</div>
        <div class="kri-lineage"><span>集团总部<br><b>集团投资管理部</b></span><i>→</i><span>一级子企业<br><b>${data.unit}</b></span><i>→</i><span>二级子企业<br><b>${data.unit}投资平台</b></span><i>→</i><span>三级及以下企业<br><b>项目公司</b></span><i>→</i><span>具体投资项目<br><b>${data.project}</b></span></div>
        <div class="penetration-metric" style="margin-top:12px"><span class="label">业务板块 / 区域 / 阶段</span><span class="value">清洁能源 / 中东区域 / 投后运营</span></div>
        <div class="penetration-metric"><span class="label">项目状态 / 风险状态</span><span class="value danger">经营偏离 / ${data.level}</span></div>
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
        <div class="card"><div class="card-title">控制证据与执行验证</div><div class="detail-list"><p><b>证据名称：</b>月度经营分析报告、KRI计算快照、规则执行日志</p><p><b>证据来源：</b>财务系统、投资管理系统、经营分析系统</p><p><b>形成时间：</b>2026-07-20 08:30</p><p><b>当前有效性：</b><span class="badge badge-warning">部分有效</span></p></div></div>
        <div class="card"><div class="card-title">验证状态</div><div class="detail-list"><p><b>控制验证：</b>已发起专项验证</p><p><b>验证部门：</b>集团投资管理部</p><p><b>验证时间：</b>2026-08-15</p><p><b>验证结论：</b>整改措施正在执行，风险等级尚未达到关闭标准。</p></div></div>
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
    const total = 42, kriConfigured = 238, ruleConfigured = 126, abnormal = 42;
    document.getElementById('controlStats').innerHTML = `
      <div class="control-stat-card"><div class="num">${total}</div><div class="label">风险场景总数</div></div>
      <div class="control-stat-card"><div class="num">${kriConfigured}</div><div class="label">KRI指标总数</div></div>
      <div class="control-stat-card"><div class="num">${ruleConfigured}</div><div class="label">控制规则总数</div></div>
      <div class="control-stat-card"><div class="num">1,286</div><div class="label">规则执行次数 · 环比+12.4%</div></div>
      <div class="control-stat-card abnormal"><div class="num">186</div><div class="label">规则触发次数 · 触发率14.5%</div></div>
      <div class="control-stat-card abnormal"><div class="num">${abnormal}</div><div class="label">异常规则 · 已处理30 / 待处理12</div></div>
    `;

    const tbody = document.querySelector('#controlsTable tbody');
    tbody.innerHTML = APP_DATA.groupKris.map((kri, index) => {
      const ruleType = index % 3 === 0 ? '阻断控制' : index % 3 === 1 ? '预警控制' : '复核控制';
      const badge = ruleType === '阻断控制' ? 'badge-danger' : ruleType === '预警控制' ? 'badge-warning' : 'badge-info';
      return `<tr class="clickable" onclick="App.navigate('kri',{kriId:'${kri.id}'})">
        <td>${kri.scenario}<br><small>场景编码：SCN-INV-${String(index+1).padStart(3,'0')}</small></td>
        <td>${kri.name}<br><small>当前值：${kri.value} / 阈值：${kri.threshold}</small></td>
        <td><span class="badge ${index % 2 === 0 ? 'badge-danger' : 'badge-success'}">${index % 2 === 0 ? '异常' : '正常'}</span></td>
        <td><span class="badge ${badge}">${ruleType}</span><br><small>适用：${kri.entities} · 投后运营</small></td>
        <td>执行 ${128-index*9}次 · 触发 ${index % 2 === 0 ? index+2 : 0}次<br><small>异常 ${index % 2 === 0 ? 1 : 0}次 · 最近 2026-07-20</small></td>
        <td>${index % 2 === 0 ? '已触发 · 已派单' : '正常放行'}<br><small>证据：规则日志/审批记录 · 责任：投资管理部</small></td>
        <td><span class="badge ${index % 2 === 0 ? 'badge-warning' : 'badge-success'}">${index % 2 === 0 ? '待处理' : '有效'}</span></td>
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
      <button class="warning-stat total" onclick="App.renderRectKanban()"><div class="num">86</div><div class="label">整改任务总数</div></button>
      <button class="warning-stat yellow" onclick="App.renderRectKanban()"><div class="num">18</div><div class="label">待整改</div></button>
      <button class="warning-stat yellow" onclick="App.renderRectKanban()"><div class="num">25</div><div class="label">整改中</div></button>
      <button class="warning-stat blue" onclick="App.renderRectKanban()"><div class="num">6</div><div class="label">待验证</div></button>
      <button class="warning-stat" onclick="App.renderRectKanban()"><div class="num" style="color:var(--success)">43</div><div class="label">已关闭</div></button>
      <button class="warning-stat red" onclick="App.renderRectKanban()"><div class="num">12</div><div class="label">已逾期 / 重新整改</div></button>
    `;

    document.getElementById('rectFlow').innerHTML = r.steps.map((step, i) =>
      (i > 0 ? '<span class="rect-arrow">↓</span>' : '') + `<div class="rect-step">${step}</div>`
    ).join('');
  },

  renderRectificationGovernance() {
    const governance = document.getElementById('rectificationGovernance');
    const analysis = document.getElementById('rectificationAnalysis');
    if (governance) governance.innerHTML = `
      <div class="kri-note"><b>整改来源分布：</b><button class="btn btn-outline" onclick="App.renderRectKanban()">风险事项 32项</button> <button class="btn btn-outline" onclick="App.renderRectKanban()">KRI异常 18项</button> <button class="btn btn-outline" onclick="App.renderRectKanban()">控制规则异常 12项</button> <button class="btn btn-outline" onclick="App.renderRectKanban()">重大事项 14项</button> <button class="btn btn-outline" onclick="App.renderRectKanban()">投后评价/检查 10项</button></div>
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
      <div class="analysis-card"><h4>整改责任法人分布</h4><table class="mini-table"><tr><th>法人层级</th><th>事项</th><th>逾期</th><th>待验证</th><th>闭环</th></tr><tr><td>一级子企业</td><td>32</td><td>4</td><td>3</td><td>18</td></tr><tr><td>二级子企业</td><td>38</td><td>6</td><td>2</td><td>19</td></tr><tr><td>三级及以下</td><td>16</td><td>2</td><td>1</td><td>6</td></tr></table></div>
      <div class="analysis-card"><h4>整改验证与关闭</h4><div class="effect-compare"><span>整改前</span><b class="badge badge-danger">L4 · 收益偏离</b><i>→</i><span>验证后</span><b class="badge badge-success">L2 · 持续跟踪</b></div><p>验证部门：集团投资管理部；验证内容：措施、证据、指标恢复、重复发生。</p><p><strong>当前验证通过率：92%</strong></p></div>`;
  },

  renderPortfolio() {
    const title = document.getElementById('portfolioTitle');
    if (title) title.textContent = '投资结构与组合';
    document.getElementById('portfolioByUnit').innerHTML = [['集团总部','集团级','—',1286,'8,562亿元',128,47,31],['A公司','一级子企业','集团总部',286,'2,640亿元',32,12,8],['B公司','二级子企业','A公司',186,'1,826亿元',23,9,7],['C公司','三级及以下企业','B公司',92,'780亿元',11,5,3]].map(u => `<button class="portfolio-item" onclick="App.showPortfolioDetail('法人主体','${u[0]}')"><div class="name">${u[0]}</div><div class="stat">法人层级：<strong>${u[1]}</strong></div><div class="stat">上级法人：<strong>${u[2]}</strong></div><div class="stat">项目/金额：<strong>${u[3]}项 · ${u[4]}</strong></div><div class="stat">重大/风险/收益偏离：<strong>${u[5]} / ${u[6]} / ${u[7]}</strong></div></button>`).join('');

    document.getElementById('portfolioByIndustry').innerHTML = [['工程建设',312,'2,486亿元',29,11,8],['清洁能源',248,'1,936亿元',24,10,9],['装备制造',196,'1,468亿元',21,8,6],['传统能源',286,'1,982亿元',32,12,8],['科技创新',86,'690亿元',9,3,2]].map(i => `<button class="portfolio-item" onclick="App.showPortfolioDetail('业务板块','${i[0]}')"><div class="name">${i[0]}</div><div class="stat">项目/金额：<strong>${i[1]}项 · ${i[2]}</strong></div><div class="stat">重大/风险/收益偏离：<strong>${i[3]} / ${i[4]} / ${i[5]}</strong></div></button>`).join('');

    document.getElementById('portfolioByRegion').innerHTML = [['境内',928,'6,302亿元',86],['中东',126,'986亿元',16],['亚洲',98,'628亿元',12],['非洲',76,'424亿元',8],['欧洲及拉美',58,'222亿元',5]].map(r => `<button class="portfolio-item" onclick="App.showPortfolioDetail('区域','${r[0]}')"><div class="name">${r[0]}</div><div class="stat">项目/金额：<strong>${r[1]}项 · ${r[2]}</strong></div><div class="stat">风险项目：<strong style="color:var(--danger)">${r[3]}项</strong></div></button>`).join('');
    const kpis = document.getElementById('portfolioKpis');
    if (kpis) kpis.innerHTML = [['投资项目总数','1,286','项','同比+6.8%'],['投资总额','8,562','亿元','同比+8.6%'],['重大投资项目','128','项','占比10.0%'],['风险投资项目','47','项','占比3.7%'],['在建投资项目','412','项','环比+2.4%'],['已完成项目','516','项','完成率40.1%'],['退出项目','86','项','同比+10.3%'],['组合集中度','72','%','较上期+3.8%']].map(item => `<button class="metric-card" onclick="App.showPortfolioDetail('总体指标','${item[0]}')"><div class="label">${item[0]}</div><div class="value">${item[1]}<span>${item[2]}</span></div><div class="sub-items">${item[3]} · 点击查看详情</div></button>`).join('');
    document.getElementById('portfolioAnalysis').innerHTML = `
      <button class="analysis-card" onclick="App.showPortfolioDetail('前十大投资法人','A公司')"><h4>前十大投资法人</h4><strong>68.2%</strong><p>A公司、B公司等前十大法人占集团投资总额68.2%；风险项目排名可继续查看。</p></button>
      <button class="analysis-card" onclick="App.showPortfolioDetail('前十大投资项目','项目金额排名')"><h4>前十大投资项目</h4><strong>41.5%</strong><p>前十大项目投资金额占比41.5%；覆盖重大项目、风险状态和收益状态。</p></button>
      <button class="analysis-card" onclick="App.showPortfolioDetail('前十大投资区域','区域金额排名')"><h4>前十大投资区域</h4><strong>74.6%</strong><p>前十大区域投资金额占比74.6%；展示境内外、国家地区和风险项目。</p></button>
      <button class="analysis-card" onclick="App.showPortfolioDetail('集中度趋势','2024-2026')"><h4>集中度变化趋势</h4><strong>72.0%</strong><p>法人：2024年64.1% → 2025年68.2% → 2026年72.0%，呈上升趋势。</p></button>`;
    document.getElementById('portfolioAi').innerHTML = `<div class="card-title">投资组合分析详情</div><div id="portfolioDetail"><p><strong>钻取路径：</strong>投资组合分析 → 投资维度 → 法人主体/业务板块/区域/投资类型 → 法人层级 → 具体投资项目。</p><p>点击本页任意核心指标、法人、业务板块、区域、投资类型或集中度结果，在此区域查看组合分析明细。</p></div>`;
  },

  showPortfolioDetail(dimension, value) {
    const node = document.getElementById('portfolioDetail'); if (!node) return;
    node.innerHTML = `<div class="card-title">${dimension} · ${value} 组合分析详情</div><div class="detail-list"><p><b>当前筛选条件：</b>${dimension} = ${value}；统计期间：2026年度；范围：集团投资管理领域。</p></div><div class="kri-detail-grid"><div class="detail-list"><p><b>总体与法人层级</b></p><p>项目总数：1,286项；投资总额：8,562亿元；重大项目：128项；风险项目：47项；收益偏离：31项。</p><p>集团总部 → 一级子企业（12家 / 2,640亿元）→ 二级子企业（38家 / 3,182亿元）→ 三级及以下企业（75家 / 1,920亿元）→ 项目公司。</p></div><div class="detail-list"><p><b>前十大对象</b></p><p>A公司：286项、2,640亿元、占比30.8%、风险12项；B公司：186项、1,826亿元、占比21.3%、风险9项；中东区域：126项、986亿元、风险16项。</p><p><b>集中度趋势：</b>2024年64.1% → 2025年68.2% → 2026年72.0%，较上期上升3.8%。</p><button class="btn btn-outline" onclick="App.showPortfolioProject()">查看投资项目明细</button></div></div>`;
  },

  showPortfolioProject() {
    const node = document.getElementById('portfolioDetail'); if (!node) return;
    node.innerHTML = `<div class="card-title">投资项目明细</div><table class="data-table"><thead><tr><th>项目名称</th><th>投资主体</th><th>法人层级</th><th>类型</th><th>金额</th><th>阶段</th><th>预期/实际收益</th><th>风险</th><th>整改</th></tr></thead><tbody><tr><td>某境外能源项目</td><td>B公司</td><td>二级子企业</td><td>境外投资</td><td>30亿元</td><td>投后运营</td><td>8% / 3.2%</td><td><span class="badge badge-danger">重大</span></td><td>整改中</td></tr><tr><td>某固定资产建设项目</td><td>C公司</td><td>一级子企业</td><td>固定资产投资</td><td>18亿元</td><td>投资实施</td><td>—</td><td><span class="badge badge-warning">较大</span></td><td>待验证</td></tr></tbody></table><p class="insight-note">项目风险为属性展示；如需查看具体风险事项，请使用项目清单中的“查看风险事项”入口进入投资风险监测。</p>`;
  },

  renderDashboardInsights() {
    const insights = document.getElementById('dashboardInsights');
    if (insights) insights.innerHTML = `
      <div class="insight-card dense-card"><div class="insight-head"><span>国资监管主题落实情况</span><button onclick="App.navigate('controls')">查看规则执行 ›</button></div><table class="mini-table"><thead><tr><th>监管主题</th><th>正常</th><th>异常</th><th>未闭环</th></tr></thead><tbody><tr><td>投资方向与主业匹配</td><td>272</td><td class="danger-text">14</td><td>4</td></tr><tr><td>投资决策程序履行</td><td>122</td><td class="danger-text">6</td><td>2</td></tr><tr><td>投资计划执行</td><td>118</td><td class="danger-text">8</td><td>3</td></tr><tr><td>投资后评价</td><td>95</td><td class="danger-text">17</td><td>9</td></tr></tbody></table></div>
      <div class="insight-card dense-card"><div class="insight-head"><span>投资管理领域运行</span><button onclick="App.navigate('portfolio')">查看结构与组合 ›</button></div><div class="board-bars"><p><span>股权投资</span><i><b style="width:76%"></b></i><em>356项</em></p><p><span>固定资产投资</span><i><b style="width:62%"></b></i><em>412项</em></p><p><span>境外投资</span><i><b style="width:48%"></b></i><em>86项</em></p><p><span>投资后评价</span><i><b style="width:32%"></b></i><em>112项</em></p></div><small class="insight-note">展示投资规模变化、计划偏差、业务板块分布、境内外结构和项目退出情况。</small></div>
      <div class="insight-card dense-card"><div class="insight-head"><span>集团投资重点关注</span><button onclick="App.navigate('major')">查看重大事项 ›</button></div><div class="top-scenarios"><button onclick="App.navigate('major')"><b>1</b> 重大投资事项 <span class="badge badge-danger">12项</span></button><button onclick="App.navigate('warnings')"><b>2</b> 重大投资风险 <span class="badge badge-danger">8项</span></button><button onclick="App.navigate('portfolio')"><b>3</b> 收益偏离项目 <span class="badge badge-warning">31项</span></button><button onclick="App.navigate('process',{stageId:'post-invest'})"><b>4</b> 重大投后异常 <span class="badge badge-warning">18项</span></button></div></div>`;
    const bottom = document.getElementById('dashboardBottom');
    if (bottom) bottom.innerHTML = `<div class="bottom-item"><span>全级次法人分布</span><strong>12 / 38 / 75 家</strong><p>一级、二级、三级及以下企业；项目数286 / 542 / 440项</p></div><div class="bottom-item"><span>投后评价与整改闭环</span><strong>82.6% / 76.4%</strong><p>应评价46项，已完成38项；整改86项，已关闭43项，逾期12项</p></div><div class="bottom-item"><span>投资风险与重点事项</span><strong>重大8项 / 高风险15项</strong><p>KRI异常46项 · 规则触发28项 · 待决策18项 · 待验证6项</p></div>`;
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
    const stages=[['strategy','投资机会识别',126,5,3,2,'较上期+1项'],['opportunity','投资立项',148,7,4,1,'异常率4.7%'],['approval','投资决策',186,13,8,3,'风险率4.3%'],['decision','投资实施',128,6,4,2,'处理完成率96%'],['signing','投后管理',212,18,11,7,'较上期+3项'],['post-invest','投资退出',356,32,18,8,'风险率5.1%'],['post-invest','投资后评价',112,17,9,5,'完成率82.6%'],['exit','整改与优化',18,6,4,3,'闭环率76.4%']];
    node.innerHTML=`<div style="display:grid;grid-template-columns:repeat(4,minmax(140px,1fr));gap:10px">${stages.map(s=>`<button class="value-chain-card" onclick="App.openStageDrawer('${s[0]}','${s[1]}')"><strong>${s[1]}</strong><span>事项：${s[2]}项</span><span>异常：${s[3]}项 · 风险：${s[4]}项</span><em class="${s[4]>8?'risk-high':'risk-mid'}">超期：${s[5]}项 · ${s[6]}</em></button>`).join('')}</div>`;
  },

  openStageDrawer(stageId, stageName) {
    const detail = APP_DATA.valueChainDetails[stageId];
    const panel = document.getElementById('processDetail');
    if (!detail || !panel) return;
    panel.innerHTML = `<div class="card"><div class="card-title">${stageName || detail.stage} · 阶段事项详情</div><div class="info-grid"><div class="info-item"><div class="info-label">阶段事项 / 状态</div><div class="info-value">某${stageName || detail.stage}事项 / 异常待处置</div></div><div class="info-item"><div class="info-label">投资法人 / 层级</div><div class="info-value">B公司 / 二级子企业</div></div><div class="info-item"><div class="info-label">业务板块 / 区域</div><div class="info-value">清洁能源 / 中东区域</div></div><div class="info-item"><div class="info-label">投资项目 / 金额</div><div class="info-value">某境外能源项目 / 30亿元</div></div><div class="info-item full"><div class="info-label">阶段运行情况</div><div class="info-value">事项总数186项，已完成162项，进行中13项，异常13项，风险8项，超期3项；异常原因：${detail.risk}。</div></div><div class="info-item full"><div class="info-label">责任定位与整改</div><div class="info-value">责任主体：B公司投资管理部 → 项目负责人；KRI状态：异常；控制规则状态：已触发；整改状态：整改中，计划完成：2026-08-30。</div></div></div><button class="btn btn-outline" onclick="App.showStageItemDetail('某${stageName || detail.stage}事项','${stageName || detail.stage}')">查看事项风险详情</button></div>`;
  },

  showStageItemDetail(itemName, stageName) {
    const panel=document.getElementById('processDetail'); if(!panel)return;
    panel.innerHTML=`<div class="card"><div class="card-title">${itemName} · 阶段事项风险详情</div><div class="info-grid"><div class="info-item"><div class="info-label">投资阶段</div><div class="info-value">${stageName}</div></div><div class="info-item"><div class="info-label">投资法人 / 层级</div><div class="info-value">B公司 / 二级子企业</div></div><div class="info-item"><div class="info-label">风险场景</div><div class="info-value">投资收益未达预期风险</div></div><div class="info-item"><div class="info-label">风险等级</div><div class="info-value"><span class="badge badge-danger">重大</span></div></div><div class="info-item full"><div class="info-label">KRI 与控制规则</div><div class="info-value">投资收益率 3.2%，预警阈值 6%，风险阈值 4%；控制规则已触发专项经营分析。</div></div><div class="info-item full"><div class="info-label">责任与整改</div><div class="info-value">责任主体：B公司境外事业部 → 项目公司；整改状态：集团督办，整改中。</div></div></div><button class="btn btn-primary" onclick="App.navigate('penetration',{riskId:'risk-2',detail:true})">进入投资穿透分析</button><button class="btn btn-outline" style="margin-left:8px" onclick="App.openStageDrawer('post-invest','投后运营')">返回阶段事项详情</button></div>`;
  },

  renderRiskMatrix() {
    const node = document.getElementById('riskMatrix');
    if (!node) return;
    const stages=[['投资机会识别',126,118,5,3,2,'A、C公司'],['投资立项',148,136,7,4,1,'A、B公司'],['投资决策',186,162,13,8,3,'A、B、C公司'],['投资实施',128,119,6,4,2,'A、C公司'],['投后管理',212,184,18,11,7,'A、C、D公司'],['投资退出',356,298,32,18,8,'A、B、D公司'],['投资后评价',112,95,17,9,5,'A、B公司'],['整改与优化',18,12,6,4,3,'C、D公司']];
    node.innerHTML=`<table class="data-table lifecycle-matrix"><thead><tr><th>投资阶段</th><th>事项总数</th><th>正常事项</th><th>异常事项</th><th>风险事项</th><th>超期事项</th><th>涉及法人</th><th>涉及项目</th></tr></thead><tbody>${stages.map((s,i)=>`<tr class="clickable" onclick="App.openStageDrawer('${APP_DATA.processStages[i].id}','${s[0]}')"><td><strong>${s[0]}</strong></td><td>${s[1]}</td><td><span class="badge badge-success">${s[2]}</span></td><td><span class="badge badge-warning">${s[3]}</span></td><td><span class="badge badge-danger">${s[4]}</span></td><td>${s[5]}</td><td>${s[6]}</td><td>${Math.max(2,Math.round(s[1]/8))}个</td></tr>`).join('')}</tbody></table><div class="stage-results"><div><b>阶段异常</b><span>异常事项 86 · 超期事项 31 · 程序异常 14</span></div><div><b>风险触发</b><span>KRI异常 46 · 控制规则触发 28 · 重大风险 12</span></div><div><b>整改状态</b><span>待整改 18 · 整改中 25 · 待验证 6 · 已闭环 43</span></div></div>`;
  },

  renderStageExceptions() {
    const tbody=document.querySelector('#stageExceptions tbody'); if(!tbody)return;
    const rows=[
      ['投资决策程序缺失','投资决策','A公司','一级子企业','某装备制造项目','授权边界超限金额','超越授权审批','集团投资管理部','待补充决策程序'],
      ['项目进度偏差','投资实施','C公司','二级子企业','某固定资产建设项目','关键里程碑偏差45天','关键里程碑严重拖期','项目管理部','整改中'],
      ['收益目标偏离','投后运营','B公司','二级子企业','某境外能源项目','投资收益率3.2%','投资收益未达预期','境外事业部','集团督办'],
      ['后评价未完成','投资评价','D公司','三级子企业','某产业协同项目','后评价逾期90天','投资后评价缺失','投资管理部','待验证']
    ];
    tbody.innerHTML=rows.map(r=>`<tr class="clickable" onclick="App.showStageItemDetail('${r[0]}','${r[1]}')">${r.map((v,i)=>`<td>${i===8?`<span class="badge ${v==='集团督办'?'badge-danger':'badge-warning'}">${v}</span>`:v}</td>`).join('')}</tr>`).join('');
  },

  renderWarningCharts() {
    const node = document.getElementById('warningCharts');
    if (!node) return;
    const bars = APP_DATA.warningTrend.map(x => `<i style="height:${x[1] * 1.5}px" title="${x[0]}：${x[1]}项"></i>`).join('');
    node.innerHTML = `<div class="chart-card"><h4>风险场景分布</h4><div class="warning-progress"><p><span>投资决策风险</span><b>8项</b></p><p><span>投资实施风险</span><b>7项</b></p><p><span>投后运营与收益风险</span><b>18项</b></p><p><span>境外 / 退出 / 评价风险</span><b>13项</b></p></div><small>点击风险事项列表查看对应场景、KRI异常和控制规则触发。</small></div><div class="chart-card trend"><h4>风险等级与变化</h4><div class="warning-progress"><p><span>重大风险</span><b class="danger-text">8项</b></p><p><span>高风险</span><b>15项</b></p><p><span>风险上升</span><b>12项</b></p><p><span>重复发生 / 未闭环</span><b>6 / 18项</b></p></div><p>用于识别持续上升、重复发生和长期未消除的投资风险。</p></div><div class="chart-card"><h4>KRI异常与规则触发</h4><div class="warning-progress"><p><span>KRI异常事项</span><b class="danger-text">28项</b></p><p><span>控制规则触发</span><b>24项</b></p><p><span>已形成预警</span><b>18项</b></p><p><span>待整改风险</span><b>18项</b></p></div><small>点击风险事项后，在当前页面查看KRI、阈值、规则执行和责任信息。</small></div>`;
  },

  renderRectKanban() {
    const node = document.getElementById('rectKanban');
    if (!node) return;
    const cols = ['整改制定', '整改执行', '整改验证', '已关闭'];
    node.innerHTML = cols.map(col => `<div class="kanban-column"><h4>${col}<span>${APP_DATA.rectificationTasks.filter(x => x.status === col).length}</span></h4>${APP_DATA.rectificationTasks.filter(x => x.status === col).map(x => `<button class="kanban-card" onclick="App.openDrawer('rect','${x.id}')"><span class="badge ${x.level === 'L4' ? 'badge-danger' : 'badge-warning'}">${x.level}</span><strong>${x.title}</strong><small>来源：${x.id.includes('001')?'风险事项':'KRI异常'} · ${x.company} / ${x.owner}</small><small>法人层级：${x.company==='B公司'?'二级子企业':'一级子企业'} · 截止 ${x.deadline}</small><div class="progress"><i style="width:${x.progress}%"></i></div><em>完成 ${x.progress}% · ${x.progress<100?'需验证':'已闭环'}</em></button>`).join('')}</div>`).join('');
  },

  openDrawer(type, id) {
    const overlay = document.getElementById('drawerOverlay');
    const panel = document.getElementById('drawerPanel');
    const task = type === 'rect' ? APP_DATA.rectificationTasks.find(x => x.id === id) : null;
    panel.innerHTML = task ? `<div class="drawer-header"><h3>投资整改任务详情</h3><button onclick="App.closeDrawer()">×</button></div><span class="badge badge-danger">${task.level}</span><h3>${task.title}</h3><div class="drawer-section"><label>问题来源与责任链</label><p>来源类型：${task.id.includes('001')?'投资风险事项':'KRI异常 / 控制规则触发'}<br>发现时间：2026-06-15 · 关联项目：某境外能源项目<br>集团总部 → 集团投资管理部 → 一级子企业 → ${task.company} → ${task.owner} → 项目责任岗位</p></div><div class="drawer-section"><label>整改措施与材料</label><p>${task.measure}</p><p>支撑材料：专项分析报告、整改证明、复核意见（已上传）。</p></div><div class="drawer-section"><label>整改进度与时限</label><div class="progress"><i style="width:${task.progress}%"></i></div><p>创建：2026-06-15 · 确认：2026-06-20 · 制定：2026-07-05 · 执行：2026-08-01<br>当前进度：${task.progress}% · 计划完成：${task.deadline} · 实际完成：${task.progress===100?'2026-08-12':'—'} · 逾期天数：${task.progress<100?'12':'0'}</p></div><div class="drawer-section"><label>验证与关闭</label><p>验证部门：集团投资管理部；验证标准：措施完成、证据齐全、指标改善、无重复发生。<br>验证状态：${task.progress>=90?'待验证':'整改执行中'}；验证结论：${task.progress===100?'验证通过':'待验证'}；关闭确认部门：集团投资管理部；关闭时间：${task.progress===100?'2026-08-15':'—'}；整改有效性：${task.progress===100?'有效':'待验证'}；重新整改：否。</p></div>` : '';
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
