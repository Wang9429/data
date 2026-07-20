// 海油集团股权投资全生命周期风险穿透监测平台 - 模拟数据

const APP_DATA = {
  processStages: [
  { id: 'strategy', name: '投资战略规划', projects: 356, risks: 6, warnings: 1, controls: 18 },
  { id: 'opportunity', name: '项目机会识别', projects: 89, risks: 5, warnings: 0, controls: 14 },
  { id: 'approval', name: '立项论证', projects: 42, risks: 9, warnings: 3, controls: 26 },
  { id: 'due-diligence', name: '尽职调查', projects: 38, risks: 7, warnings: 2, controls: 22 },
  { id: 'plan', name: '投资方案制定', projects: 35, risks: 6, warnings: 1, controls: 19 },
  { id: 'decision', name: '投资决策审批', projects: 32, risks: 8, warnings: 2, controls: 24 },
  { id: 'signing', name: '协议签署与交割', projects: 28, risks: 5, warnings: 1, controls: 16 },
  { id: 'post-invest', name: '投后管理', projects: 128, risks: 15, warnings: 5, controls: 41 },
  { id: 'exit', name: '投资退出', projects: 18, risks: 4, warnings: 1, controls: 12 }
  ],

  processTree: {
  name: '股权投资管理',
  children: [
    { id: 'strategy', name: '投资战略规划', children: [
      { id: 'strategy-plan', name: '年度投资计划制定' },
      { id: 'strategy-match', name: '投资方向匹配分析' }
    ]},
    { id: 'opportunity', name: '项目机会识别', children: [
      { id: 'opp-source', name: '项目来源管理' },
      { id: 'opp-screen', name: '初步筛选评价' }
    ]},
    { id: 'approval', name: '立项论证', children: [
      { id: 'approval-feasibility', name: '可行性研究' },
      { id: 'approval-return', name: '投资收益测算' },
      { id: 'approval-risk', name: '风险评估' }
    ]},
    { id: 'due-diligence', name: '尽职调查', children: [
      { id: 'dd-finance', name: '财务调查' },
      { id: 'dd-legal', name: '法律调查' },
      { id: 'dd-business', name: '业务调查' }
    ]},
    { id: 'plan', name: '投资方案制定', children: [
      { id: 'plan-structure', name: '交易结构设计' },
      { id: 'plan-draft', name: '投资方案编制' }
    ]},
    { id: 'decision', name: '投资决策审批', children: [
      { id: 'decision-review', name: '内部审核' },
      { id: 'decision-meeting', name: '决策会议审批' }
    ]},
    { id: 'signing', name: '协议签署与交割', children: [
      { id: 'sign-review', name: '协议审查' },
      { id: 'sign-fund', name: '资金交割' }
    ]},
    { id: 'post-invest', name: '投后管理', children: [
      { id: 'post-track', name: '经营情况跟踪' },
      { id: 'post-major', name: '重大事项管理' },
      { id: 'post-rights', name: '股东权利行使' },
      { id: 'post-eval', name: '投资评价' }
    ]},
    { id: 'exit', name: '投资退出', children: [
      { id: 'exit-plan', name: '退出方案制定' },
      { id: 'exit-exec', name: '退出实施' }
    ]}
  ]
  },

  businessActivityDetail: {
  'post-track': {
    stage: '投后管理',
    activity: '经营情况跟踪',
    goal: '持续掌握被投资企业经营情况，及时发现经营偏离和投资价值变化。',
    department: '投资管理部',
    level1Risk: '投资管理风险',
    level2Risk: '被投资企业经营情况跟踪不到位风险',
    riskDesc: '未持续跟踪被投资企业经营指标、重大经营事项和发展变化，导致投资风险未及时识别。',
    controls: [
      { name: '经营情况定期分析', requirement: '获取经营数据并形成分析报告', frequency: '季度' },
      { name: '重大事项报告管理', requirement: '重大事项5个工作日内报送', frequency: '实时' },
      { name: '年度投资评价', requirement: '开展投资目标实现评价', frequency: '年度' }
    ],
    rules: {
      before: ['是否建立投后管理计划', '是否明确经营跟踪指标', '是否明确责任人员'],
      during: ['收入完成率低于80%', '利润完成率低于目标70%', '重大诉讼事项发生', '触发风险预警'],
      after: ['连续两个年度收益未达到目标', '启动专项投资评价']
    }
  }
  },

  topRisks: [
  { rank: 1, name: '被投资企业经营指标偏离风险', stage: '投后管理', project: 'XX新能源项目', level: '重大', id: 'risk-2' },
  { rank: 2, name: '投资收益未达到预期风险', stage: '投资评价', project: 'XX产业项目', level: '重大', id: 'risk-1' },
  { rank: 3, name: '重大事项报告不及时风险', stage: '投后管理', project: 'XX海外项目', level: '较大', id: 'risk-3' },
  { rank: 4, name: '投资决策论证不足风险', stage: '立项论证', project: 'XX项目', level: '较大', id: 'risk-4' },
  { rank: 5, name: '境外投资运营风险', stage: '境外投资管理', project: 'XX海外项目', level: '较大', id: 'risk-5' },
  { rank: 6, name: '投资方向偏离战略风险', stage: '投资战略规划', project: 'XX战略项目', level: '较大', id: 'risk-6' },
  { rank: 7, name: '交割条件落实不到位风险', stage: '协议签署与交割', project: 'XX装备项目', level: '一般', id: 'risk-7' },
  { rank: 8, name: '股东权利行使不到位风险', stage: '投后管理', project: 'XX产业项目', level: '一般', id: 'risk-8' },
  { rank: 9, name: '投资资产减值风险', stage: '投后管理', project: 'XX化工项目', level: '一般', id: 'risk-9' },
  { rank: 10, name: '退出时机判断风险', stage: '投资退出', project: 'XX_legacy项目', level: '一般', id: 'risk-10' }
  ],

  riskScenarios: [
  {
    id: 'decision', name: '投资决策风险', level: 1,
    children: [
      { name: '投资方向偏离集团战略风险', desc: '投资项目与集团主责主业及战略布局匹配不足。' },
      { name: '投资论证不充分风险', desc: '可研分析、收益测算、风险分析不足。' },
      { name: '投资收益预测偏差风险', desc: '投资收益预测与实际经营存在较大偏差。' }
    ]
  },
  {
    id: 'implement', name: '投资实施风险', level: 1,
    children: [
      { name: '投资审批程序执行不到位风险', desc: '审批流程未严格执行，存在越权审批情形。' },
      { name: '投资协议管理不到位风险', desc: '协议条款审查不充分，关键条款缺失。' },
      { name: '交割条件落实不到位风险', desc: '交割前置条件未完全落实即完成资金支付。' }
    ]
  },
  {
    id: 'manage', name: '投资管理风险', level: 1,
    children: [
      { name: '投后管理不到位风险', desc: '投后管理计划未有效执行，跟踪频次不足。' },
      { name: '被投资企业重大事项管理不到位风险', desc: '重大事项未及时识别和报告。' },
      { name: '股东权利行使不到位风险', desc: '股东权利未有效行使，影响投资权益。' },
      { name: '董事履职管理不到位风险', desc: '委派董事履职不充分，未有效参与决策。' }
    ]
  },
  {
    id: 'return', name: '投资收益风险', level: 1,
    children: [
      { name: '投资收益未达到预期风险', desc: '实际投资收益低于可研预测目标。' },
      { name: '长期低效投资风险', desc: '投资项目长期未能产生预期效益。' },
      { name: '投资资产减值风险', desc: '投资资产存在减值迹象未及时计提。' }
    ]
  },
  {
    id: 'exit', name: '投资退出风险', level: 1,
    children: [
      { name: '退出方案制定风险', desc: '退出方案论证不充分，退出路径不明确。' },
      { name: '退出时机判断风险', desc: '退出时机选择不当，影响退出收益。' },
      { name: '退出实施风险', desc: '退出实施过程中出现障碍或纠纷。' }
    ]
  },
  {
    id: 'overseas', name: '境外投资风险（海油特色）', level: 1,
    children: [
      { name: '东道国政策变化风险', desc: '东道国投资政策、税收政策发生变化。' },
      { name: '境外合规风险', desc: '境外投资未满足当地合规要求。' },
      { name: '境外运营风险', desc: '境外项目运营管理面临特殊挑战。' },
      { name: '汇率波动影响风险', desc: '汇率波动对投资收益产生不利影响。' }
    ]
  }
  ],

  warnings: [
  { id: 'risk-1', name: '投资收益未达到预期风险', unit: '海油工程', project: '海外装备项目', indicator: '收益率下降35%', status: '红色', level: '重大' },
  { id: 'risk-2', name: '经营指标偏离风险', unit: '新能源公司', project: 'XX新能源项目', indicator: '利润完成率62%', status: '红色', level: '重大' },
  { id: 'risk-3', name: '重大事项报告滞后风险', unit: '某所属企业', project: 'XX产业项目', indicator: '超过5日未报送', status: '黄色', level: '较大' },
  { id: 'risk-4', name: '投资决策论证不足风险', unit: '海油发展', project: 'XX项目', indicator: '可研报告缺失2项', status: '黄色', level: '较大' },
  { id: 'risk-5', name: '境外投资运营风险', unit: '海油国际', project: 'XX海外项目', indicator: '运营亏损扩大', status: '黄色', level: '较大' },
  { id: 'risk-6', name: '投资方向偏离战略风险', unit: '海油化学', project: 'XX战略项目', indicator: '主业匹配度偏低', status: '蓝色', level: '一般' },
  { id: 'risk-7', name: '交割条件落实不到位', unit: '海油工程', project: 'XX装备项目', indicator: '2项条件未落实', status: '蓝色', level: '一般' },
  { id: 'risk-8', name: '股东权利行使不到位', unit: '海油发展', project: 'XX产业项目', indicator: '股东大会未出席', status: '蓝色', level: '一般' }
  ],

  riskPenetration: {
  'risk-1': {
    name: '投资收益未达到预期风险',
    level: '重大风险',
    unit: '海油工程',
    project: 'XX新能源装备项目',
    amount: '18亿元',
    exposure: '2.6亿元',
    impact: '预计投资收益下降22%',
    processChain: ['投资管理', '投后管理', '经营情况跟踪', '投资评价'],
    control: { name: '年度投资评价', requirement: '评价投资目标实现情况', status: '异常' },
    indicator: { name: '投资收益率', target: '8%', current: '5.2%', deviation: '-35%' },
    responsibility: ['集团投资管理部', '所属企业投资管理部门', '项目负责人', '委派董事'],
  policy: ['国资委投资监管要求', '中国海油投资管理制度', '所属企业投资管理办法', '项目投资协议'],
    systems: ['投资管理系统', '财务管理系统', '合同管理系统', '经营分析报告'],
    emergency: { level: 'L3', measures: ['开展专项经营分析', '提交投资管理委员会审议', '制定风险化解方案'], department: '投资管理部门' }
  },
  'risk-2': {
    name: '经营指标偏离风险',
    level: '重大风险',
    unit: '新能源公司',
    project: 'XX新能源项目',
    amount: '12亿元',
    exposure: '1.8亿元',
    impact: '利润完成率仅62%',
    processChain: ['投资管理', '投后管理', '经营情况跟踪'],
    control: { name: '经营情况定期分析', requirement: '获取经营数据并形成分析报告', status: '异常' },
    indicator: { name: '利润完成率', target: '100%', current: '62%', deviation: '-38%' },
    responsibility: ['集团投资管理部', '新能源公司', '项目负责人'],
    policy: ['国资委投资监管要求', '中国海油投资管理制度', '新能源公司投资管理办法'],
    systems: ['投资管理系统', '财务管理系统', '经营分析报告'],
    emergency: { level: 'L2', measures: ['启动经营指标专项分析', '要求被投企业提交整改方案'], department: '投资管理部门' }
  }
  },

  controls: [
  { stage: '投后管理', scenario: '投资管理风险', activity: '经营情况定期分析', requirement: '获取经营数据并形成分析报告', frequency: '季度', department: '投资管理部', status: '正常' },
  { stage: '投后管理', scenario: '投资管理风险', activity: '重大事项报告管理', requirement: '重大事项5个工作日内报送', frequency: '实时', department: '投资管理部', status: '异常' },
  { stage: '投后管理', scenario: '投资收益风险', activity: '年度投资评价', requirement: '评价投资目标实现情况', frequency: '年度', department: '投资管理部', status: '异常' },
  { stage: '立项论证', scenario: '投资决策风险', activity: '可行性研究审查', requirement: '完成可研报告并通过评审', frequency: '项目级', department: '战略发展部', status: '正常' },
  { stage: '立项论证', scenario: '投资决策风险', activity: '投资收益测算', requirement: '完成收益测算及敏感性分析', frequency: '项目级', department: '财务部', status: '正常' },
  { stage: '尽职调查', scenario: '投资实施风险', activity: '财务尽职调查', requirement: '完成财务DD报告', frequency: '项目级', department: '财务部', status: '正常' },
  { stage: '投资决策审批', scenario: '投资决策风险', activity: '投资决策会议', requirement: '按权限提交决策会议审议', frequency: '项目级', department: '投资管理部', status: '正常' },
  { stage: '协议签署与交割', scenario: '投资实施风险', activity: '协议审查', requirement: '法律合规审查通过', frequency: '项目级', department: '法律部', status: '正常' },
  { stage: '投资退出', scenario: '投资退出风险', activity: '退出方案论证', requirement: '完成退出方案及收益测算', frequency: '项目级', department: '投资管理部', status: '正常' },
  { stage: '境外投资管理', scenario: '境外投资风险', activity: '境外合规审查', requirement: '满足东道国合规要求', frequency: '年度', department: '国际部', status: '异常' }
  ],

  matters: [
  { type: '增资事项', count: 28, pending: 3 },
  { type: '股权变更', count: 22, pending: 2 },
  { type: '董事会事项', count: 35, pending: 4 },
  { type: '重大资产处置', count: 15, pending: 1 },
  { type: '利润分配', count: 18, pending: 1 },
  { type: '退出安排', count: 10, pending: 1 }
  ],

  rectification: {
  total: 62, inProgress: 8, completed: 54, overdue: 3,
  steps: ['风险发现', '责任确认', '整改措施制定', '整改执行', '效果验证', '风险关闭']
  },

  portfolio: {
  byUnit: [
    { name: '海油工程', projects: 42, riskProjects: 5 },
    { name: '海油发展', projects: 38, riskProjects: 4 },
    { name: '新能源公司', projects: 48, riskProjects: 6 },
    { name: '海油化学', projects: 35, riskProjects: 3 },
    { name: '海油国际', projects: 58, riskProjects: 8 }
  ],
  byIndustry: [
    { name: '油气产业链', projects: 156 },
    { name: '新能源', projects: 48 },
    { name: '装备制造', projects: 36 },
    { name: '海洋工程', projects: 42 },
    { name: '战略新兴产业', projects: 74 }
  ],
  byRegion: [
    { name: '境内', projects: 298 },
    { name: '境外', projects: 58 }
  ]
  }
};

Object.assign(APP_DATA, {
  dashboardHeatmap: [
    { stage: '战略规划', level: 'normal', risks: 1, label: '正常' },
    { stage: '项目获取', level: 'watch', risks: 2, label: '关注' },
    { stage: '立项论证', level: 'warning', risks: 5, label: '预警' },
    { stage: '尽职调查', level: 'watch', risks: 4, label: '关注' },
    { stage: '投资方案', level: 'watch', risks: 2, label: '关注' },
    { stage: '投资决策', level: 'warning', risks: 3, label: '预警' },
    { stage: '协议交割', level: 'normal', risks: 1, label: '正常' },
    { stage: '投后管理', level: 'critical', risks: 18, label: '重大风险' },
    { stage: '投资退出', level: 'warning', risks: 10, label: '预警' }
  ],
  warningTrend: [
    ['2025.08', 31, 5], ['09', 34, 6], ['10', 35, 7], ['11', 32, 9],
    ['12', 38, 6], ['2026.01', 36, 8], ['02', 39, 7], ['03', 41, 5],
    ['04', 43, 6], ['05', 42, 9], ['06', 46, 12], ['07', 46, 8]
  ],
  warningEnterpriseHeatmap: [
    { unit: '海油工程', l4: 5, l3: 8, l2: 12 },
    { unit: '国际公司', l4: 2, l3: 5, l2: 6 },
    { unit: '新能源公司', l4: 1, l3: 2, l2: 4 },
    { unit: '海油发展', l4: 0, l3: 3, l2: 5 }
  ],
  rectificationTasks: [
    { id: 'RECT-202601001', riskId: 'risk-2', title: '被投资企业经营持续下滑风险', company: '海油工程', owner: '投资管理部', level: 'L4', status: '整改执行', deadline: '2026-09-30', progress: 60, measure: '建立月度经营指标监测机制；完善董事履职报告机制。' },
    { id: 'RECT-202601002', riskId: 'risk-1', title: '投资收益未达到预期风险', company: '新能源公司', owner: '投资管理部', level: 'L4', status: '整改制定', deadline: '2026-08-30', progress: 30, measure: '开展专项经营分析，制定收益提升方案。' },
    { id: 'RECT-202601003', riskId: 'risk-3', title: '重大事项报告不及时风险', company: '海油发展', owner: '投资管理部', level: 'L3', status: '整改验证', deadline: '2026-07-30', progress: 90, measure: '完善重大事项报告机制并验证执行效果。' },
    { id: 'RECT-202601004', riskId: 'risk-4', title: '投资决策论证不足风险', company: '海油发展', owner: '战略发展部', level: 'L3', status: '已关闭', deadline: '2026-05-20', progress: 100, measure: '补充可研报告并完成专家评审。' }
  ],
  portfolioSummary: [
    ['投资项目总数', '356', '个项目 · 覆盖18家企业'],
    ['股权投资余额', '864', '亿元 · 同比 +12%'],
    ['投资行业数量', '15', '个重点行业'],
    ['投资收益率', '8.6', '% · 目标10%'],
    ['高风险投资项目', '23', '个 · L4 8个'],
    ['待退出项目', '12', '个项目']
  ]
});
