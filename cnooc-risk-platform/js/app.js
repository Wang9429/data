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

  menuItems: [
    { id: 'dashboard', icon: '📊', label: '首页驾驶舱' },
    { id: 'process', icon: '🔄', label: '投资价值链监测' },
    { id: 'warnings', icon: '🔔', label: '风险预警中心' },
    { id: 'penetration', icon: '🔎', label: '风险穿透分析' },
    { id: 'rectification', icon: '✅', label: '整改闭环管理' },
    { id: 'portfolio', icon: '📈', label: '投资组合分析' }
  ],

  pageTitles: {
    dashboard: '集团股权投资风险态势驾驶舱',
    process: '投资价值链监测',
    scenarios: '风险场景管理',
    warnings: '风险预警中心',
    penetration: '风险穿透分析',
    controls: '控制活动管理',
    matters: '投资事项及股东权利管理',
    rectification: '整改闭环管理',
    portfolio: '投资组合分析'
  },

  init() {
    this.renderNav();
    this.renderCoreChain();
    this.renderDashboardMetrics();
    this.renderDashboardHeatmap();
    this.renderProcessMap();
    this.renderTopRisks();
    this.renderProcessTree();
    this.renderValueChainOverview();
    this.renderRiskMatrix();
    this.renderScenarios();
    this.renderWarnings();
    this.renderWarningCharts();
    this.renderControls();
    this.renderMatters();
    this.renderRectification();
    this.renderRectKanban();
    this.renderPortfolio();
  },

  navigate(pageId, params = {}) {
    this.currentPage = pageId;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + pageId);
    if (page) page.classList.add('active');

    document.getElementById('pageTitle').textContent = this.pageTitles[pageId] || pageId;

    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === pageId);
    });

    if (pageId === 'penetration' && params.riskId) {
      this.selectedRiskId = params.riskId;
      this.renderPenetration(params.riskId);
      document.getElementById('penetrationBack').style.display = 'block';
    }

    if (pageId === 'process' && params.activityId) {
      setTimeout(() => this.selectActivity(params.activityId), 100);
    }

    if (pageId === 'process' && params.stageId) {
      setTimeout(() => this.expandStage(params.stageId), 100);
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
      '海油集团投资业务二级风险场景',
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
        <div class="label">存量股权投资项目</div>
        <div class="value">356<span>个</span></div>
        <div class="sub-items">
          覆盖所属单位：<strong>18家</strong><br>
          涉及行业：油气产业链、新能源、海洋工程、装备制造、战略新兴产业
        </div>
      </div>
      <div class="metric-card">
        <div class="label">股权投资规模</div>
        <div class="value" style="font-size:22px;">1,286<span>亿元</span></div>
        <div class="sub-items">
          累计投资金额：<strong>1,286亿元</strong><br>
          当前投资余额：<strong>864亿元</strong>
        </div>
      </div>
      <div class="metric-card">
        <div class="label">重点关注项目</div>
        <div class="value">23<span>个</span></div>
        <div class="sub-items">
          涉及所属单位：<strong>7家</strong><br>
          境外项目 <strong>6个</strong> · 产业投资 <strong>17个</strong>
        </div>
      </div>
      <div class="metric-card">
        <div class="label">风险预警情况</div>
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
      return `<tr class="clickable" onclick="App.navigate('penetration', { riskId: '${r.id}' })">
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
      panel.innerHTML = `<div class="card"><p style="color:var(--text-secondary);padding:40px;text-align:center;">该业务活动详情正在完善中，请选择"经营情况跟踪"查看完整示例。</p></div>`;
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
      <select><option>全部所属企业</option><option>海油工程</option><option>新能源公司</option><option>国际公司</option></select>
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
        <td><button class="btn btn-primary" style="padding:4px 12px;font-size:12px;" onclick="App.navigate('penetration', { riskId: '${w.id}' })">穿透分析</button></td>
      </tr>`;
    }).join('');
    document.getElementById('warningPagination').innerHTML = '<span>共 46 条风险事件</span><button class="active">1</button><button>2</button><button>3</button><button>›</button>';
  },

  filterWarnings(keyword, trigger) {
    if (trigger) document.querySelectorAll('.filter-chip').forEach(x => x.classList.remove('active')), trigger.classList.add('active');
    const rows = APP_DATA.warnings.filter(x => !keyword || Object.values(x).join(' ').includes(keyword));
    const tbody = document.querySelector('#warningsTable tbody');
    tbody.innerHTML = rows.map(w => `<tr class="clickable" onclick="App.navigate('penetration',{riskId:'${w.id}'})"><td>${w.name}</td><td>${w.unit}</td><td>${w.project}</td><td>${w.indicator}</td><td><span class="badge ${w.status === '红色' ? 'badge-danger' : w.status === '黄色' ? 'badge-warning' : 'badge-info'}">${w.status}</span></td><td><button class="btn btn-primary" onclick="event.stopPropagation();App.navigate('penetration',{riskId:'${w.id}'})">穿透分析</button></td></tr>`).join('');
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

      <div class="penetration-grid">
        <div class="penetration-card">
          <h4>业务流程穿透</h4>
          <div class="chain-flow">${renderChain(data.processChain)}</div>
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
        </div>
        <div class="penetration-card">
          <h4>制度穿透</h4>
          <div class="chain-flow">${renderChain(data.policy)}</div>
        </div>
        <div class="penetration-card">
          <h4>业务触点穿透</h4>
          <div class="chain-flow">${renderChain(data.systems)}</div>
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
        <div class="card-title">Risk AI Assistant · 风险分析助手</div>
        <p><strong>风险原因总结：</strong>被投资企业经营指标连续两个季度下滑，现有投后监测频率不足，经营异常未及时触发预警。</p>
        <p><strong>控制优化建议：</strong>增加核心经营指标月度采集；建立自动预警规则；强化董事履职跟踪。</p>
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
    document.getElementById('portfolioAi').innerHTML = `<div class="card-title">Investment AI Advisor · 投资组合洞察</div><p><strong>当前判断：</strong>集团投资组合整体稳定，但新能源领域投资集中度较高，部分项目收益低于目标。</p><p><strong>优化建议：</strong>加强低收益项目退出评估；优化新能源投资比例；提高海外投资风险监测频率。</p>`;
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
    node.innerHTML = APP_DATA.processStages.map(stage => `<button class="value-chain-card" onclick="App.navigate('process',{stageId:'${stage.id}'})"><strong>${stage.name}</strong><span>${stage.projects} 个项目</span><span>风险 ${stage.risks} 项</span><em class="${stage.warnings > 2 ? 'risk-high' : stage.warnings ? 'risk-mid' : 'risk-low'}">${stage.warnings > 2 ? '存在预警' : stage.warnings ? '存在关注' : '正常运行'}</em></button>`).join('');
  },

  renderRiskMatrix() {
    const node = document.getElementById('riskMatrix');
    if (!node) return;
    const columns = APP_DATA.processStages.map(x => x.name);
    const rows = ['战略风险', '投资决策风险', '财务风险', '经营风险', '退出风险'];
    node.innerHTML = `<table class="matrix-table"><thead><tr><th>风险类型 / 阶段</th>${columns.map(x => `<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map((row, ri) => `<tr><th>${row}</th>${columns.map((_, ci) => { const score = (ri * 3 + ci * 2) % 5; return `<td><button class="matrix-dot l${score}" title="${row} · ${columns[ci]}" onclick="App.navigate('warnings')">${score ? '●' : ''}</button></td>`; }).join('')}</tr>`).join('')}</tbody></table><p class="matrix-note">点击风险点可进入风险预警中心，悬停查看所属阶段与风险等级。</p>`;
  },

  renderWarningCharts() {
    const node = document.getElementById('warningCharts');
    if (!node) return;
    const bars = APP_DATA.warningTrend.map(x => `<i style="height:${x[1] * 1.5}px" title="${x[0]}：${x[1]}项"></i>`).join('');
    node.innerHTML = `<div class="chart-card"><h4>风险等级分布</h4><div class="donut"><b>46</b><span>风险事项</span></div><p><span class="badge badge-danger">L4 8</span> <span class="badge badge-warning">L3 15</span> <span class="badge badge-info">L2 23</span></p></div><div class="chart-card trend"><h4>近12个月风险趋势</h4><div class="bar-chart">${bars}</div><p>本月新增 <strong>12</strong> 项 · 已关闭 <strong>8</strong> 项</p></div><div class="chart-card"><h4>所属企业 × 风险等级</h4>${APP_DATA.warningEnterpriseHeatmap.map(x => `<div class="enterprise-line"><span>${x.unit}</span><b class="badge-danger">L4 ${x.l4}</b><b class="badge-warning">L3 ${x.l3}</b><b class="badge-info">L2 ${x.l2}</b></div>`).join('')}</div>`;
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
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ensureOfflineStyles();
  App.init();
});
