const App = {
  currentPage: 'dashboard',
  selectedRiskId: null,

  menuItems: [
    { id: 'dashboard', icon: '📊', label: '首页驾驶舱' },
    { id: 'process', icon: '🔄', label: '投资业务全过程监测' },
    { id: 'scenarios', icon: '⚠️', label: '风险场景管理' },
    { id: 'warnings', icon: '🔔', label: '风险预警监测' },
    { id: 'controls', icon: '🛡️', label: '控制活动管理' },
    { id: 'matters', icon: '📋', label: '投资事项及股东权利管理' },
    { id: 'rectification', icon: '✅', label: '整改闭环管理' },
    { id: 'portfolio', icon: '📈', label: '投资组合分析' }
  ],

  pageTitles: {
    dashboard: '集团股权投资风险态势驾驶舱',
    process: '投资业务全过程监测',
    scenarios: '风险场景管理',
    warnings: '风险预警监测',
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
    this.renderProcessMap();
    this.renderTopRisks();
    this.renderProcessTree();
    this.renderScenarios();
    this.renderWarnings();
    this.renderControls();
    this.renderMatters();
    this.renderRectification();
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

      <div style="margin-top:16px;display:flex;gap:10px;">
        <button class="btn btn-primary" onclick="App.navigate('process', { activityId: 'post-track' })">查看关联业务流程</button>
        <button class="btn btn-outline" onclick="App.navigate('controls')">查看控制活动</button>
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
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
