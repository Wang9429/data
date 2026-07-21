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
    ,matter: '投资重大事项详情'
  },

  init() {
    this.renderNav();
    this.renderGroupOverview();
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
      <div class="metric-card">
        <div class="label">集团投资总额</div>
        <div class="value">8,562<span>亿元</span></div>
        <div class="sub-items">
          覆盖投资主体：<strong>126家</strong><br>
          股权、固定资产、并购及境外投资
        </div>
      </div>
      <div class="metric-card">
        <div class="label">年度投资计划</div>
        <div class="value">1,236<span>亿元</span></div>
        <div class="sub-items">
          年度实际投资：<strong>864亿元</strong><br>
          计划执行率：<strong>69.9%</strong>
        </div>
      </div>
      <div class="metric-card">
        <div class="label">投资项目总数</div>
        <div class="value">1,286<span>项</span></div>
        <div class="sub-items">
          重大投资项目：<strong>128项</strong><br>
          风险投资项目：<strong>47项</strong>
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
        <div class="label">收益偏离项目</div>
        <div class="value" style="color:var(--warning);">47<span>项</span></div>
        <div class="sub-items">
          实际收益低于预期：<strong>31项</strong><br>
          投后评价异常：<strong style="color:var(--danger)">17项</strong>
        </div>
      </div>
    `;
  },

  renderGroupOverview() {
    const node=document.getElementById('groupOverview'); if(!node)return;
    const fields=APP_DATA.regulationDomains.slice(0,8);
    node.innerHTML=`<div class="group-hero"><div><span>集团总部监管视角</span><h2>集团监管总览</h2><p>聚焦重点领域、重点法人、重大事项、重大风险和集团督办事项。</p></div><div>数据覆盖率 <b>92.6%</b></div></div>
    <div class="group-metrics">${[['126','纳入监管法人'],['8','纳入监管领域'],['3,286','重点监管事项'],['28','当前重大风险'],['126','当前重点预警'],['43','整改未闭环'],['18','集团重点督办'],['92.6%','数据覆盖率']].map(x=>`<button class="metric-card" onclick="App.navigate('dashboard')"><div class="value">${x[0]}</div><div class="label">${x[1]}</div></button>`).join('')}</div>
    <div class="card"><div class="card-title">分领域监管态势</div><div class="field-status-grid">${fields.map((f,i)=>`<button onclick="App.selectRegulationDomain('${f.id}')"><b>${f.name}</b><span>重点事项：${[1286,486,238,426,512,186,328,412][i]}项</span><em>重大风险：${[12,3,2,4,5,2,6,4][i]}项</em><small>整改中：${[18,6,4,8,9,3,11,7][i]}项</small></button>`).join('')}</div></div>
    <div class="group-three"><div class="card"><div class="card-title">重点法人监管画像</div><table class="data-table"><thead><tr><th>法人</th><th>高风险领域</th><th>综合关注度</th></tr></thead><tbody><tr><td>A公司</td><td>投资、境外、合同</td><td><span class="badge badge-danger">高</span></td></tr><tr><td>B公司</td><td>投资、财务</td><td><span class="badge badge-warning">较高</span></td></tr><tr><td>D公司</td><td>境外、供应链</td><td><span class="badge badge-warning">较高</span></td></tr></tbody></table></div><div class="card"><div class="card-title">集团重点督办事项</div><div class="supervision-list"><p><b>01</b> 某境外投资项目收益持续偏离 <span class="badge badge-danger">L4</span></p><p><b>02</b> 固定资产项目追加投资接近审批边界 <span class="badge badge-warning">L3</span></p><p><b>03</b> 重大合同履约延期事项 <span class="badge badge-warning">L3</span></p></div></div></div>
    <div class="card"><div class="card-title">全级次法人监管态势</div><table class="data-table"><thead><tr><th>法人层级</th><th>法人数量</th><th>重大风险</th><th>重点预警</th><th>重大事项</th><th>控制规则异常</th><th>整改未闭环</th></tr></thead><tbody><tr><td>集团总部</td><td>1</td><td>0</td><td>0</td><td>18</td><td>0</td><td>6</td></tr><tr><td>一级子企业</td><td>12</td><td>8</td><td>32</td><td>86</td><td>4</td><td>15</td></tr><tr><td>二级子企业</td><td>38</td><td>12</td><td>58</td><td>164</td><td>7</td><td>18</td></tr><tr><td>三级子企业</td><td>52</td><td>6</td><td>29</td><td>73</td><td>3</td><td>4</td></tr><tr><td>四级及以下企业</td><td>23</td><td>2</td><td>7</td><td>21</td><td>1</td><td>0</td></tr></tbody></table></div>
    <div class="group-three"><div class="card"><div class="card-title">跨领域风险与重点区域</div><table class="data-table"><thead><tr><th>风险</th><th>涉及领域</th><th>区域 / 法人</th><th>趋势</th></tr></thead><tbody><tr><td>境外投资收益偏离</td><td>投资、财务、境外</td><td>中东 / B公司</td><td><span class="badge badge-danger">上升</span></td></tr><tr><td>重大合同履约延期</td><td>合同、供应链、工程</td><td>境内 / A公司</td><td><span class="badge badge-warning">关注</span></td></tr></tbody></table></div><div class="card"><div class="card-title">监管覆盖与盲区</div><div class="supervision-list"><p><b>92.6%</b> 重点事项已形成有效监测</p><p><b>8</b> 家法人存在数据更新滞后</p><p><b>14</b> 项重点事项待补充 KRI 或控制证据</p><p><b>6</b> 项整改待集团验证</p></div></div></div>`;
  },

  renderMajorMatters() {
    const node=document.getElementById('majorMatters'); if(!node)return;
    if (this.currentDomain === 'investment') {
      const types=[['重大投资决策','86','8','11'],['重大并购投资','24','4','5'],['重大投资变更','28','3','4'],['重大投资退出','14','2','3']];
      node.innerHTML=`<div class="group-hero"><div><span>领域作用域：投资管理</span><h2>投资管理重大事项监管</h2><p>仅展示投资管理领域的重大投资决策、并购投资、投资变更和投资退出事项。</p></div><div>待集团关注 <b>18项</b></div></div><div class="field-status-grid">${types.map(t=>`<button onclick="App.openMajorMatter()"><b>${t[0]}</b><span>事项总数：${t[1]}项</span><em>风险事项：${t[2]}项</em><small>待集团关注：${t[3]}项</small></button>`).join('')}</div><div class="card"><div class="card-title">投资重大事项清单</div><table class="data-table"><thead><tr><th>事项名称</th><th>投资主体</th><th>法人层级</th><th>业务板块</th><th>区域</th><th>金额</th><th>阶段</th><th>触发KRI</th></tr></thead><tbody><tr class="clickable" onclick="App.openMajorMatter()"><td>某境外能源项目</td><td>B公司</td><td>二级子企业</td><td>清洁能源</td><td>中东</td><td>30亿元</td><td>投后运营</td><td>投资收益率偏离</td></tr><tr class="clickable" onclick="App.openMajorMatter()"><td>某固定资产建设项目</td><td>C公司</td><td>一级子企业</td><td>工程建设</td><td>境内</td><td>18亿元</td><td>追加投资审批边界</td></tr></tbody></table></div>`;
      return;
    }
    const types=[['财务管理重大事项','218','5','9'],['投资管理重大事项','152','16','18'],['产权管理重大事项','36','3','6'],['合同管理重大事项','426','8','14'],['供应链管理重大事项','512','9','15'],['金融业务重大事项','56','3','4'],['境外业务重大事项','48','6','11'],['工程项目重大事项','312','7','12'],['科技创新重大事项','86','2','3'],['薪酬分配重大事项','22','1','2']];
    node.innerHTML=`<div class="group-hero"><div><span>集团总部统一监管</span><h2>重大事项监管</h2><p>按事项类型识别重大事项状态、风险、KRI预警、控制规则执行和责任主体。</p></div><div>待集团关注 <b>18项</b></div></div><div class="field-status-grid">${types.map(t=>`<button onclick="App.navigate('penetration',{riskId:'risk-2',detail:true})"><b>${t[0]}</b><span>事项总数：${t[1]}项</span><em>风险事项：${t[2]}项</em><small>待集团关注：${t[3]}项</small></button>`).join('')}</div><div class="card"><div class="card-title">重点事项清单</div><table class="data-table"><thead><tr><th>事项名称</th><th>类型</th><th>领域</th><th>法人</th><th>金额</th><th>阶段</th><th>风险场景</th><th>集团动作</th></tr></thead><tbody><tr><td>某境外能源项目</td><td>重大投资</td><td>投资管理</td><td>B公司</td><td>30亿元</td><td>投后运营</td><td>投资收益未达预期</td><td><span class="badge badge-danger">专项督办</span></td></tr><tr><td>某固定资产建设项目</td><td>重大工程</td><td>工程项目</td><td>C公司</td><td>18亿元</td><td>投资实施</td><td>追加投资审批风险</td><td><span class="badge badge-warning">升级审批</span></td></tr></tbody></table></div>`;
  },

  openMajorMatter() {
    this.navigate('matter');
    const node=document.getElementById('matterDetail'); if(!node)return;
    node.innerHTML=`<div class="group-hero"><div><span>投资管理领域 · 重大事项详情</span><h2>某境外能源项目</h2><p>重大投资事项，当前处于投后运营阶段，集团关注等级：高。</p></div><div>风险等级 <b>L4</b></div></div><div class="kri-detail-grid"><div class="card"><div class="card-title">事项基本信息</div><div class="detail-list"><p><b>投资主体：</b>B公司（一级子企业）</p><p><b>业务板块 / 区域：</b>清洁能源 / 中东</p><p><b>投资金额：</b>30亿元</p><p><b>事项阶段：</b>投后运营</p></div></div><div class="card"><div class="card-title">全级次法人路径</div><div class="kri-lineage"><span>集团总部</span><i>→</i><span>一级子企业<br>B公司</span><i>→</i><span>二级子企业<br>B1投资平台</span><i>→</i><span>项目公司</span></div></div><div class="card"><div class="card-title">风险场景与 KRI</div><div class="detail-list"><p><b>风险场景：</b>投资收益未达预期风险</p><p><b>触发 KRI：</b>投资收益率 3.2%，预警阈值 6%，风险阈值 4%</p><p><b>控制规则：</b>收益偏离超过阈值，自动发起专项经营分析。</p></div></div><div class="card"><div class="card-title">责任与整改</div><div class="detail-list"><p><b>责任主体：</b>B公司投资管理部 → 境外事业部 → 项目公司</p><p><b>整改措施：</b>提交专项投资后评价与收益提升方案。</p><p><b>整改状态：</b><span class="badge badge-warning">整改中</span> · 截止 2026-08-30</p></div></div></div>`;
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
      return `<tr class="clickable" onclick="App.navigate('kri',{kriId:'${kri.id}'})">
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
    const total = 126, valid = 113, abnormal = 13;
    document.getElementById('controlStats').innerHTML = `
      <div class="control-stat-card"><div class="num">${total}</div><div class="label">已配置监测规则</div></div>
      <div class="control-stat-card"><div class="num">${valid}</div><div class="label">正常执行规则</div></div>
      <div class="control-stat-card abnormal"><div class="num">${abnormal}</div><div class="label">待优化规则</div></div>
    `;

    const tbody = document.querySelector('#controlsTable tbody');
    tbody.innerHTML = APP_DATA.groupKris.map((kri, index) => {
      const ruleType = index % 3 === 0 ? '阻断控制' : index % 3 === 1 ? '预警控制' : '复核控制';
      const badge = ruleType === '阻断控制' ? 'badge-danger' : ruleType === '预警控制' ? 'badge-warning' : 'badge-info';
      return `<tr>
        <td>${kri.category}</td>
        <td>${kri.scenario}</td>
        <td>${kri.name}</td>
        <td>2026-07-20 08:30</td>
        <td><span class="badge badge-success">已执行</span></td>
        <td>${index % 2 === 0 ? '<span class="badge badge-danger">命中 1 项</span>' : '<span class="badge badge-success">未命中</span>'}</td>
        <td><span class="badge ${badge}">${ruleType} · ${index % 2 === 0 ? '已派单' : '正常放行'}</span></td>
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
    node.innerHTML = APP_DATA.processStages.map(stage => `<button class="value-chain-card" onclick="App.openStageDrawer('${stage.id}')"><strong>${stage.name}</strong><span>${stage.projects} 项监管对象</span><span>关键事项：${stage.controls} 项</span><em class="${stage.warnings > 2 ? 'risk-high' : stage.warnings ? 'risk-mid' : 'risk-low'}">${stage.warnings > 2 ? '重点关注' : stage.warnings ? '持续跟踪' : '过程受控'}</em></button>`).join('') + `<div class="chain-description">全链条穿透围绕股权投资与固定资产投资，从战略规划、决策审批、合同交割、项目建设 / 投后管理到退出后评价，逐节点关联法人主体、审批事项、合同资金、实施进度和责任主体。点击任一环节可查看该环节的监管对象、关键事项与责任链。</div>`;
  },

  openStageDrawer(stageId) {
    const detail = APP_DATA.valueChainDetails[stageId];
    const overlay = document.getElementById('drawerOverlay');
    const panel = document.getElementById('drawerPanel');
    if (!detail || !overlay || !panel) return;
    panel.innerHTML = `<div class="drawer-header"><h3>${detail.stage} · 环节监管详情</h3><button onclick="App.closeDrawer()">×</button></div><div class="drawer-section"><label>监管对象与事项</label><p><b>适用法人主体：</b>A、B、C、D公司及相关项目公司<br><b>关键业务活动：</b>${detail.activities}<br><b>监管目标：</b>${detail.objective}</p></div><div class="drawer-section"><label>关键流程资料</label><p>立项/审批材料、投资方案、合同及付款资料、实施或投后经营数据、责任落实记录。</p></div><div class="drawer-section"><label>权责链</label><p>集团投资管理部（规则与督办） → 所属企业投资管理部门（审核与跟踪） → 项目负责人（执行与报送） → 相关业务部门（资料与数据）。</p></div><div class="drawer-section"><label>环节状态</label><p>当前重点事项：${detail.risk}<br>涉及控制点：${detail.controls} 类<br>可在 KRI 与控制规则模块查看对应监测规则，在预警中心查看已触发事件。</p></div>`;
    overlay.classList.add('show');
  },

  renderRiskMatrix() {
    const node = document.getElementById('riskMatrix');
    if (!node) return;
    const stages=[['投资规划',126,118,5,3,2,'A、C公司'],['项目筛选',148,136,7,4,1,'A、B公司'],['立项论证',186,162,13,8,3,'A、B、C公司'],['投资决策',128,119,6,4,2,'A、C公司'],['投资实施',212,184,18,11,7,'A、C、D公司'],['投后运营',356,298,32,18,8,'A、B、D公司'],['投资评价',112,95,17,9,5,'A、B公司'],['退出处置',18,12,6,4,3,'C、D公司']];
    node.innerHTML=`<table class="data-table lifecycle-matrix"><thead><tr><th>投资阶段</th><th>事项总数</th><th>正常事项</th><th>异常事项</th><th>风险事项</th><th>超期事项</th><th>涉及法人</th></tr></thead><tbody>${stages.map(s=>`<tr class="clickable" onclick="App.openStageDrawer('${APP_DATA.processStages[stages.indexOf(s)].id}')"><td><strong>${s[0]}</strong></td><td>${s[1]}</td><td><span class="badge badge-success">${s[2]}</span></td><td><span class="badge badge-warning">${s[3]}</span></td><td><span class="badge badge-danger">${s[4]}</span></td><td>${s[5]}</td><td>${s[6]}</td></tr>`).join('')}</tbody></table><div class="stage-results"><div><b>阶段异常</b><span>异常事项 86 · 超期事项 31 · 程序异常 14</span></div><div><b>风险触发</b><span>KRI异常 46 · 控制规则触发 28 · 重大风险 12</span></div><div><b>整改状态</b><span>待整改 18 · 整改中 25 · 待验证 6 · 已闭环 43</span></div></div>`;
  },

  renderWarningCharts() {
    const node = document.getElementById('warningCharts');
    if (!node) return;
    const bars = APP_DATA.warningTrend.map(x => `<i style="height:${x[1] * 1.5}px" title="${x[0]}：${x[1]}项"></i>`).join('');
    node.innerHTML = `<div class="chart-card"><h4>重大预警处置态势</h4><div class="alert-focus"><b>8</b><div><strong>L4重大预警</strong><span>涉及 A、B、D 公司</span></div></div><p><span class="badge badge-danger">需立即处置 3项</span> <span class="badge badge-warning">临期督办 2项</span></p><small>优先关注：未批先实施、投后经营异常、固定资产追加投资。</small></div><div class="chart-card trend"><h4>预警闭环进度</h4><div class="warning-progress"><p><span>新生成预警</span><b>12项</b></p><p><span>处理中</span><b>18项</b></p><p><span>超期未关闭</span><b class="danger-text">6项</b></p><p><span>本月已关闭</span><b>8项</b></p></div><p>反映预警从规则命中到派单、整改、关闭的处置效率。</p></div><div class="chart-card"><h4>法人主体预警分布</h4>${APP_DATA.warningEnterpriseHeatmap.map(x => `<div class="enterprise-line"><span>${x.unit}</span><b class="badge-danger">L4 ${x.l4}</b><b class="badge-warning">L3 ${x.l3}</b><b class="badge-info">L2 ${x.l2}</b></div>`).join('')}<small>点击下方事件池查看具体预警及责任主体。</small></div>`;
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
