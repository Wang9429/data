// 集团穿透式监管平台（投资管理专题）- 模拟数据

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
    id: 'overseas', name: '境外投资风险', level: 1,
    children: [
      { name: '东道国政策变化风险', desc: '东道国投资政策、税收政策发生变化。' },
      { name: '境外合规风险', desc: '境外投资未满足当地合规要求。' },
      { name: '境外运营风险', desc: '境外项目运营管理面临特殊挑战。' },
      { name: '汇率波动影响风险', desc: '汇率波动对投资收益产生不利影响。' }
    ]
  }
  ],

  warnings: [
  { id: 'risk-1', name: '投资收益未达到预期风险', unit: 'A公司', project: '境外装备项目', indicator: '收益率下降35%', status: '红色', level: '重大', entityId: 'A001', projectId: null, regionId: 'CN', countryId: 'CN-CN', kriId: 'kri-post', scenarioId: 'scenario-post', controlRuleId: 'CR-POST-001', rectificationTaskId: 'RECT-202601002' },
  { id: 'risk-2', name: '经营指标偏离风险', unit: 'B公司', project: '清洁能源项目', indicator: '利润完成率62%', status: '红色', level: '重大', entityId: 'B001', projectId: 'GP001', regionId: 'ME', countryId: 'ME-A', kriId: 'kri-post', scenarioId: 'scenario-post', controlRuleId: 'CR-POST-002', rectificationTaskId: 'RECT-202601001' },
  { id: 'risk-3', name: '重大事项报告滞后风险', unit: '某所属企业', project: 'XX产业项目', indicator: '超过5日未报送', status: '黄色', level: '较大', entityId: 'C001', projectId: 'GP001', regionId: 'ME', countryId: 'ME-A', kriId: 'kri-approval', scenarioId: 'scenario-approval', controlRuleId: 'CR-APPROVAL-001', rectificationTaskId: 'RECT-202601003' },
  { id: 'risk-4', name: '投资决策论证不足风险', unit: 'C公司', project: '产业升级项目', indicator: '可研报告缺失2项', status: '黄色', level: '较大', entityId: 'C001', projectId: null, regionId: 'ME', countryId: 'ME-A', kriId: 'kri-capex', scenarioId: 'scenario-capex', controlRuleId: 'CR-CAPEX-001', rectificationTaskId: 'RECT-202601004' },
  { id: 'risk-5', name: '境外投资运营风险', unit: 'D公司', project: '境外合作项目', indicator: '运营亏损扩大', status: '黄色', level: '较大', entityId: 'D001', projectId: 'GP002', regionId: 'AS', countryId: 'AS-A', kriId: 'kri-filing', scenarioId: 'scenario-filing', controlRuleId: 'CR-FILING-001', rectificationTaskId: null },
  { id: 'risk-6', name: '投资方向偏离战略风险', unit: 'C公司', project: '战略投资项目', indicator: '主业匹配度偏低', status: '蓝色', level: '一般', entityId: 'C001', projectId: null, regionId: 'ME', countryId: 'ME-A', kriId: 'kri-approval', scenarioId: 'scenario-approval', controlRuleId: 'CR-APPROVAL-002', rectificationTaskId: null },
  { id: 'risk-7', name: '交割条件落实不到位', unit: 'A公司', project: '装备制造项目', indicator: '2项条件未落实', status: '蓝色', level: '一般', entityId: 'A001', projectId: null, regionId: 'CN', countryId: 'CN-CN', kriId: 'kri-authority', scenarioId: 'scenario-approval', controlRuleId: 'CR-AUTHORITY-001', rectificationTaskId: null },
  { id: 'risk-8', name: '股东权利行使不到位', unit: 'C公司', project: '产业协同项目', indicator: '股东大会未出席', status: '蓝色', level: '一般', entityId: 'C001', projectId: null, regionId: 'ME', countryId: 'ME-A', kriId: 'kri-post', scenarioId: 'scenario-post', controlRuleId: 'CR-POST-003', rectificationTaskId: null },
  { id: 'risk-cb-001', name: '未授权跨境数据传输风险', unit: 'D公司', project: '境外合作项目', indicator: '未授权传输1项', status: '红色', level: '重大', entityId: 'D001', projectId: 'GP002', regionId: 'AS', countryId: 'AS-A', kriId: 'KRI-CB-006', scenarioId: 'CBR006', controlRuleId: 'CBCTRL006', rectificationTaskId: 'RECT-CB-001' },
  { id: 'risk-cb-002', name: '数据本地化存储不合规风险', unit: 'B公司', project: '清洁能源项目', indicator: '本地化存储违规1项', status: '黄色', level: '较大', entityId: 'B001', projectId: 'GP001', regionId: 'ME', countryId: 'ME-A', kriId: 'KRI-CB-003', scenarioId: 'CBR003', controlRuleId: 'CBCTRL003', rectificationTaskId: 'RECT-CB-002' },
  { id: 'risk-cb-003', name: '境外数据分类分级不到位风险', unit: 'D公司', project: '境外合作项目', indicator: '未分级数据对象1个', status: '黄色', level: '较大', entityId: 'D001', projectId: 'GP002', regionId: 'AS', countryId: 'AS-A', kriId: 'KRI-CB-001', scenarioId: 'CBR001', controlRuleId: 'CBCTRL001', rectificationTaskId: 'RECT-CB-003' }
  ],

  riskPenetration: {
  'risk-1': {
    name: '投资收益未达到预期风险',
    level: '重大风险',
    unit: 'A公司',
    project: '装备制造项目',
    amount: '18亿元',
    exposure: '2.6亿元',
    impact: '预计投资收益下降22%',
    processChain: ['投资管理', '投后管理', '经营情况跟踪', '投资评价'],
    control: { name: '年度投资评价', requirement: '评价投资目标实现情况', status: '异常' },
    indicator: { name: '投资收益率', target: '8%', current: '5.2%', deviation: '-35%' },
    responsibility: ['集团投资管理部', '所属企业投资管理部门', '项目负责人', '委派董事'],
  policy: ['国资监管投资管理要求', '集团投资管理制度', '所属企业投资管理办法', '项目投资协议'],
    systems: ['投资管理系统', '财务管理系统', '合同管理系统', '经营分析报告'],
    emergency: { level: 'L3', measures: ['开展专项经营分析', '提交投资管理委员会审议', '制定风险化解方案'], department: '投资管理部门' }
  },
  'risk-2': {
    name: '经营指标偏离风险',
    level: '重大风险',
    unit: 'B公司',
    project: '清洁能源项目',
    amount: '12亿元',
    exposure: '1.8亿元',
    impact: '利润完成率仅62%',
    processChain: ['投资管理', '投后管理', '经营情况跟踪'],
    control: { name: '经营情况定期分析', requirement: '获取经营数据并形成分析报告', status: '异常' },
    indicator: { name: '利润完成率', target: '100%', current: '62%', deviation: '-38%' },
    responsibility: ['集团投资管理部', 'B公司投资管理部门', '项目负责人'],
    policy: ['国资监管投资管理要求', '集团投资管理制度', 'B公司投资管理办法'],
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
    { name: 'A公司', projects: 42, riskProjects: 5 },
    { name: 'B公司', projects: 38, riskProjects: 4 },
    { name: 'C公司', projects: 48, riskProjects: 6 },
    { name: 'D公司', projects: 35, riskProjects: 3 }
  ],
  byIndustry: [
    { name: '传统能源', projects: 156 },
    { name: '清洁能源', projects: 48 },
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
  platformOperationMetrics: [
    ['数据源接入率','96.8%','98%','+1.6%','部分达标'],['境外法人接入率','91.5%','95%','+2.4%','部分达标'],['关键系统接入率','94.2%','95%','+1.8%','部分达标'],['数据完整率','97.1%','98%','+0.8%','正常'],['数据及时率','95.6%','97%','+1.2%','正常'],['KRI更新成功率','98.2%','99%','+0.5%','正常'],['规则执行率','99.1%','99%','+0.7%','正常'],['风险预警触达率','97.8%','98%','+1.1%','正常'],['异常处置及时率','88.4%','95%','+3.2%','部分达标'],['整改闭环率','76.4%','80%','+2.6%','部分达标']
  ],
  platformOperationAlerts: [
    { alertId:'ALERT001', alertType:'接口中断', level:'高', sourceId:'SRC007', systemName:'经营分析系统', entityId:'D001', regionId:'AS', countryId:'AS-A', businessDomain:'境外业务', occurredAt:'2026-07-20 18:00', status:'处理中', responsibleDepartment:'区域信息管理岗', deadline:'2026-07-23', impactDesc:'影响KRI更新', objectId:'OBJ006', fieldId:null, qualityIssueId:'DQ005', indicatorId:null, kriId:'kri-filing', scenarioId:'scenario-filing', riskMatterId:'risk-5', rectificationTaskId:null },
    { alertId:'ALERT002', alertType:'数据同步延迟', level:'中', sourceId:'SRC002', systemName:'财务系统', entityId:'B001', regionId:'ME', countryId:'ME-A', businessDomain:'投资管理', occurredAt:'2026-07-21 22:00', status:'待处理', responsibleDepartment:'区域财务部', deadline:'2026-07-24', impactDesc:'预警延迟', objectId:'OBJ004', fieldId:'FLD004', qualityIssueId:'DQ002', indicatorId:'IND002', kriId:'kri-capex', scenarioId:'scenario-capex', riskMatterId:'risk-2', rectificationTaskId:'RECT-202601001' },
    { alertId:'ALERT003', alertType:'数据质量异常', level:'中', sourceId:'SRC003', systemName:'项目系统', entityId:'C001', regionId:'ME', countryId:'ME-A', businessDomain:'工程项目', occurredAt:'2026-07-21 14:00', status:'处理中', responsibleDepartment:'项目管理部', deadline:'2026-07-25', impactDesc:'指标准确性不足', objectId:'OBJ003', fieldId:'FLD005', qualityIssueId:null, indicatorId:'IND004', kriId:'kri-schedule', scenarioId:'scenario-capex', riskMatterId:null, rectificationTaskId:'RECT-202601003' }
  ],
  platformOperationHistory: [
    ['07-16','94.2%','95.1%','97.1%','98.3%','96.4%','86.2%','72.1%'],['07-18','95.0%','95.8%','97.6%','98.5%','96.8%','87.1%','73.4%'],['07-20','96.1%','96.4%','98.0%','98.8%','97.2%','87.8%','75.0%'],['07-22','96.8%','97.1%','98.2%','99.1%','97.8%','88.4%','76.4%']
  ],
  coverageMetrics: [
    ['全级次法人覆盖率','96.8%','98.0%','+1.2%','4家'],['境外法人接入率','91.5%','95.0%','+2.4%','5家'],['项目接入率','94.2%','96.0%','+1.8%','18项'],['关键系统覆盖率','93.6%','95.0%','+3.1%','6个'],['数据源接入率','92.8%','95.0%','+2.6%','8个'],['指标覆盖率','89.4%','92.0%','+4.2%','14项'],['KRI覆盖率','87.6%','90.0%','+3.8%','18项'],['风险场景覆盖率','91.2%','93.0%','+2.1%','11项'],['控制规则覆盖率','86.5%','90.0%','+4.5%','16项'],    ['责任主体覆盖率','97.1%','98.0%','+0.9%','5项'],['整改闭环率','76.4%','80.0%','+2.6%','18项'],['跨境数据活动覆盖率','83.3%','95.0%','+4.2%','1项'],['跨境合规KRI覆盖率','83.3%','95.0%','+3.6%','1项'],['跨境数据审批覆盖率','66.7%','98.0%','+5.1%','2项']
  ],
  coverageGaps: [
    { gapId:'GAP001', gapType:'法人', name:'C项目公司', entityId:'C001', projectId:null, regionId:'ME', countryId:'ME-A', sourceId:'SRC003', objectId:'OBJ003', fieldId:'FLD005', indicatorId:'IND004', kriId:null, scenarioId:null, controlRuleId:null, responsibleDepartment:'信息化管理部', rectificationTaskId:'RECT-202601003', status:'部分覆盖', gaps:'数据接入、KRI更新', impact:'经营风险无法持续监测' },
    { gapId:'GAP002', gapType:'项目现场', name:'某海外项目现场', entityId:'D001', projectId:'GP002', regionId:'AF', countryId:'AF-A', sourceId:'SRC007', objectId:'OBJ006', fieldId:null, indicatorId:null, kriId:'kri-schedule', scenarioId:'scenario-capex', controlRuleId:'CR-SCHEDULE-001', responsibleDepartment:'区域信息管理岗', rectificationTaskId:null, status:'数据异常', gaps:'接口同步、数据及时率', impact:'预警结果延迟' },
    { gapId:'GAP003', gapType:'法人', name:'D公司', entityId:'D001', projectId:null, regionId:'AS', countryId:'AS-A', sourceId:'SRC007', objectId:null, fieldId:null, indicatorId:'IND005', kriId:'kri-filing', scenarioId:'scenario-filing', controlRuleId:'CR-FILING-001', responsibleDepartment:'业务管理部', rectificationTaskId:null, status:'未覆盖', gaps:'风险场景、控制规则', impact:'合同风险无法自动识别' },
    { gapId:'GAP004', gapType:'跨境数据合规', name:'D公司境外项目经营数据', entityId:'D001', projectId:'GP002', regionId:'AS', countryId:'AS-A', sourceId:'SRC007', objectId:'OBJ006', fieldId:null, indicatorId:null, kriId:'KRI-CB-001', scenarioId:'CBR001', controlRuleId:'CBCTRL001', responsibleDepartment:'区域信息管理岗', rectificationTaskId:'RECT-CB-003', status:'未覆盖', gaps:'分类分级、跨境审批', impact:'跨境数据合规风险无法自动识别' }
  ],
  coverageMatrixCells: [
    { cellId:'CM-001', objectType:'法人', entityId:'C001', projectId:null, regionId:'ME', countryId:'ME-A', domainId:null, coverageType:'系统接入', coverageStatus:'已覆盖', sourceId:'SRC003', objectId:'OBJ003', indicatorId:'IND004', kriId:null, scenarioId:null, gapId:'GAP001', rectificationTaskId:'RECT-202601003' },
    { cellId:'CM-002', objectType:'法人', entityId:'C001', projectId:null, regionId:'ME', countryId:'ME-A', domainId:null, coverageType:'数据接入', coverageStatus:'部分覆盖', sourceId:'SRC003', objectId:'OBJ003', indicatorId:'IND004', kriId:null, scenarioId:null, gapId:'GAP001', rectificationTaskId:'RECT-202601003' },
    { cellId:'CM-003', objectType:'法人', entityId:'C001', projectId:null, regionId:'ME', countryId:'ME-A', domainId:null, coverageType:'KRI覆盖', coverageStatus:'已覆盖', sourceId:'SRC003', objectId:'OBJ003', indicatorId:'IND004', kriId:'kri-schedule', scenarioId:'scenario-capex', gapId:null, rectificationTaskId:null },
    { cellId:'CM-004', objectType:'法人', entityId:'C001', projectId:null, regionId:'ME', countryId:'ME-A', domainId:null, coverageType:'规则覆盖', coverageStatus:'部分覆盖', sourceId:'SRC003', objectId:'OBJ003', indicatorId:null, kriId:null, scenarioId:'scenario-capex', gapId:null, rectificationTaskId:null },
    { cellId:'CM-005', objectType:'法人', entityId:'C001', projectId:null, regionId:'ME', countryId:'ME-A', domainId:null, coverageType:'整改闭环', coverageStatus:'部分覆盖', sourceId:'SRC003', objectId:'OBJ003', indicatorId:null, kriId:null, scenarioId:null, gapId:'GAP001', rectificationTaskId:'RECT-202601003' },
    { cellId:'CM-006', objectType:'项目', entityId:'C001', projectId:'GP001', regionId:'ME', countryId:'ME-A', domainId:'investment', coverageType:'系统接入', coverageStatus:'已覆盖', sourceId:'SRC002', objectId:'OBJ004', indicatorId:'IND002', kriId:'kri-capex', scenarioId:'scenario-capex', gapId:null, rectificationTaskId:'RECT-202601001' },
    { cellId:'CM-007', objectType:'项目', entityId:'C001', projectId:'GP001', regionId:'ME', countryId:'ME-A', domainId:'investment', coverageType:'数据接入', coverageStatus:'已覆盖', sourceId:'SRC002', objectId:'OBJ004', indicatorId:'IND002', kriId:'kri-capex', scenarioId:'scenario-capex', gapId:null, rectificationTaskId:null },
    { cellId:'CM-008', objectType:'项目', entityId:'C001', projectId:'GP001', regionId:'ME', countryId:'ME-A', domainId:'investment', coverageType:'KRI覆盖', coverageStatus:'部分覆盖', sourceId:'SRC002', objectId:'OBJ004', indicatorId:'IND002', kriId:'kri-capex', scenarioId:'scenario-capex', gapId:null, rectificationTaskId:'RECT-202601001' },
    { cellId:'CM-009', objectType:'项目', entityId:'C001', projectId:'GP001', regionId:'ME', countryId:'ME-A', domainId:'investment', coverageType:'规则覆盖', coverageStatus:'已覆盖', sourceId:'SRC002', objectId:'OBJ004', indicatorId:'IND002', kriId:'kri-capex', scenarioId:'scenario-capex', gapId:null, rectificationTaskId:null },
    { cellId:'CM-010', objectType:'项目', entityId:'C001', projectId:'GP001', regionId:'ME', countryId:'ME-A', domainId:'investment', coverageType:'整改闭环', coverageStatus:'已覆盖', sourceId:'SRC002', objectId:'OBJ004', indicatorId:null, kriId:null, scenarioId:null, gapId:null, rectificationTaskId:'RECT-202601003' },
    { cellId:'CM-011', objectType:'业务领域', entityId:null, projectId:null, regionId:null, countryId:null, domainId:'investment', coverageType:'系统接入', coverageStatus:'部分覆盖', sourceId:'SRC001', objectId:'OBJ001', indicatorId:'IND001', kriId:'kri-capex', scenarioId:'scenario-capex', gapId:null, rectificationTaskId:null },
    { cellId:'CM-012', objectType:'业务领域', entityId:null, projectId:null, regionId:null, countryId:null, domainId:'investment', coverageType:'数据接入', coverageStatus:'已覆盖', sourceId:'SRC001', objectId:'OBJ001', indicatorId:'IND001', kriId:'kri-capex', scenarioId:'scenario-capex', gapId:null, rectificationTaskId:null },
    { cellId:'CM-013', objectType:'业务领域', entityId:null, projectId:null, regionId:null, countryId:null, domainId:'investment', coverageType:'KRI覆盖', coverageStatus:'已覆盖', sourceId:'SRC001', objectId:'OBJ001', indicatorId:'IND001', kriId:'kri-capex', scenarioId:'scenario-capex', gapId:null, rectificationTaskId:null },
    { cellId:'CM-014', objectType:'业务领域', entityId:null, projectId:null, regionId:null, countryId:null, domainId:'investment', coverageType:'规则覆盖', coverageStatus:'部分覆盖', sourceId:'SRC001', objectId:'OBJ001', indicatorId:'IND001', kriId:'kri-capex', scenarioId:'scenario-capex', gapId:null, rectificationTaskId:null },
    { cellId:'CM-015', objectType:'业务领域', entityId:null, projectId:null, regionId:null, countryId:null, domainId:'investment', coverageType:'整改闭环', coverageStatus:'部分覆盖', sourceId:'SRC001', objectId:'OBJ001', indicatorId:null, kriId:null, scenarioId:null, gapId:null, rectificationTaskId:'RECT-202601004' },
    { cellId:'CM-016', objectType:'区域/国家', entityId:'D001', projectId:'GP002', regionId:'AS', countryId:'AS-A', domainId:'overseas', coverageType:'系统接入', coverageStatus:'部分覆盖', sourceId:'SRC007', objectId:'OBJ006', indicatorId:null, kriId:'kri-schedule', scenarioId:'scenario-capex', gapId:'GAP002', rectificationTaskId:null },
    { cellId:'CM-017', objectType:'区域/国家', entityId:'D001', projectId:'GP002', regionId:'AS', countryId:'AS-A', domainId:'overseas', coverageType:'数据接入', coverageStatus:'数据异常', sourceId:'SRC007', objectId:'OBJ006', indicatorId:null, kriId:'kri-schedule', scenarioId:'scenario-capex', gapId:'GAP002', rectificationTaskId:null },
    { cellId:'CM-018', objectType:'区域/国家', entityId:'D001', projectId:'GP002', regionId:'AS', countryId:'AS-A', domainId:'overseas', coverageType:'KRI覆盖', coverageStatus:'已覆盖', sourceId:'SRC007', objectId:'OBJ006', indicatorId:null, kriId:'kri-filing', scenarioId:'scenario-filing', gapId:'GAP003', rectificationTaskId:null },
    { cellId:'CM-019', objectType:'区域/国家', entityId:'D001', projectId:'GP002', regionId:'AS', countryId:'AS-A', domainId:'overseas', coverageType:'规则覆盖', coverageStatus:'部分覆盖', sourceId:'SRC007', objectId:'OBJ006', indicatorId:'IND005', kriId:'kri-filing', scenarioId:'scenario-filing', gapId:'GAP003', rectificationTaskId:null },
    { cellId:'CM-020', objectType:'区域/国家', entityId:'D001', projectId:'GP002', regionId:'AS', countryId:'AS-A', domainId:'overseas', coverageType:'整改闭环', coverageStatus:'部分覆盖', sourceId:'SRC007', objectId:'OBJ006', indicatorId:null, kriId:null, scenarioId:null, gapId:'GAP004', rectificationTaskId:'RECT-CB-003' }
  ],
  globalRegions: [
    { regionId:'CN', regionName:'境内', regionType:'domestic', countryCount:1, legalEntityCount:86, entityCount:86, projectCount:926, riskCount:32, highRiskCount:5, rectificationCount:14, dataCoverageRate:'98.6%', dataCoverage:'98.6%', dataQualityStatus:'良好', riskLevel:'低', complianceStatus:'正常' },
    { regionId:'ME', regionName:'中东', regionType:'overseas', countryCount:4, legalEntityCount:12, entityCount:12, projectCount:126, riskCount:18, highRiskCount:6, rectificationCount:8, dataCoverageRate:'92.1%', dataCoverage:'92.1%', dataQualityStatus:'关注', riskLevel:'高', complianceStatus:'关注' },
    { regionId:'AS', regionName:'亚洲', regionType:'overseas', countryCount:6, legalEntityCount:10, entityCount:10, projectCount:98, riskCount:12, highRiskCount:3, rectificationCount:5, dataCoverageRate:'94.8%', dataCoverage:'94.8%', dataQualityStatus:'良好', riskLevel:'中', complianceStatus:'正常' },
    { regionId:'AF', regionName:'非洲', regionType:'overseas', countryCount:5, legalEntityCount:8, entityCount:8, projectCount:76, riskCount:9, highRiskCount:2, rectificationCount:4, dataCoverageRate:'88.5%', dataCoverage:'88.5%', dataQualityStatus:'关注', riskLevel:'中', complianceStatus:'关注' },
    { regionId:'EU', regionName:'欧洲及拉美', regionType:'overseas', countryCount:8, legalEntityCount:10, entityCount:10, projectCount:60, riskCount:7, highRiskCount:1, rectificationCount:3, dataCoverageRate:'91.2%', dataCoverage:'91.2%', dataQualityStatus:'良好', riskLevel:'低', complianceStatus:'正常' }
  ],
  globalCountries: [
    { countryId:'CN-CN', countryName:'中国', regionId:'CN', regionName:'境内', countryRiskLevel:'低', legalEntityCount:86, entityCount:86, projectCount:926, businessDomains:'投资、财务、合同、工程', investmentAmount:'6,302亿元', riskCount:32, highRiskCount:5, kriExceptionCount:18, majorMatterCount:86, rectificationCount:14, dataCoverageRate:'98.6%', dataCoverage:'98.6%', dataQualityStatus:'良好', riskLevel:'低', complianceStatus:'正常', crossBorderComplianceStatus:'不适用' },
    { countryId:'ME-A', countryName:'中东某国', regionId:'ME', regionName:'中东', countryRiskLevel:'高', legalEntityCount:6, entityCount:6, projectCount:68, businessDomains:'境外、投资、工程', investmentAmount:'628亿元', riskCount:11, highRiskCount:4, kriExceptionCount:9, majorMatterCount:18, rectificationCount:5, dataCoverageRate:'91.4%', dataCoverage:'91.4%', dataQualityStatus:'关注', riskLevel:'高', complianceStatus:'待复核', crossBorderComplianceStatus:'待复核' },
    { countryId:'AS-A', countryName:'东南亚某国', regionId:'AS', regionName:'亚洲', countryRiskLevel:'中', legalEntityCount:5, entityCount:5, projectCount:42, businessDomains:'投资、供应链、合同', investmentAmount:'386亿元', riskCount:6, highRiskCount:1, kriExceptionCount:4, majorMatterCount:9, rectificationCount:2, dataCoverageRate:'95.2%', dataCoverage:'95.2%', dataQualityStatus:'良好', riskLevel:'中', complianceStatus:'正常', crossBorderComplianceStatus:'正常' },
    { countryId:'AF-A', countryName:'非洲某国', regionId:'AF', regionName:'非洲', countryRiskLevel:'中', legalEntityCount:3, entityCount:3, projectCount:18, businessDomains:'工程、供应链', investmentAmount:'126亿元', riskCount:4, highRiskCount:1, kriExceptionCount:2, majorMatterCount:3, rectificationCount:1, dataCoverageRate:'86.2%', dataCoverage:'86.2%', dataQualityStatus:'关注', riskLevel:'中', complianceStatus:'关注', crossBorderComplianceStatus:'待复核' }
  ],
  globalLegalEntities: [
    { entityId:'G001', entityName:'集团总部', parentEntityId:null, parentEntityName:'—', entityLevel:'集团', entityType:'总部', regionId:'CN', regionName:'境内', countryId:'CN-CN', countryName:'中国', city:'北京', businessDomains:'集团监管', projectCount:0, projectSiteCount:0, siteCount:0, riskCount:0, highRiskCount:0, kriExceptionCount:0, majorMatterCount:18, rectificationCount:6, openRectificationCount:6, dataAccessStatus:'已接入', dataCoverageStatus:'已接入', dataQualityStatus:'良好', lastDataUpdateTime:'2026-07-22 08:00', responsibleDepartment:'集团数据治理部', crossBorderComplianceStatus:'统筹监管' },
    { entityId:'A001', entityName:'A公司', parentEntityId:'G001', parentEntityName:'集团总部', entityLevel:'一级', entityType:'一级子企业', regionId:'CN', regionName:'境内', countryId:'CN-CN', countryName:'中国', city:'北京', businessDomains:'工程、装备、投资', projectCount:286, projectSiteCount:18, siteCount:18, riskCount:20, highRiskCount:5, kriExceptionCount:12, majorMatterCount:42, rectificationCount:8, openRectificationCount:3, dataAccessStatus:'已接入', dataCoverageStatus:'已接入', dataQualityStatus:'良好', lastDataUpdateTime:'2026-07-22 08:00', responsibleDepartment:'集团投资管理部', crossBorderComplianceStatus:'不适用' },
    { entityId:'B001', entityName:'B公司', parentEntityId:'A001', parentEntityName:'A公司', entityLevel:'二级', entityType:'二级子企业', regionId:'ME', regionName:'中东', countryId:'ME-A', countryName:'中东某国', city:'某海外城市', businessDomains:'境外、清洁能源、投资', projectCount:186, projectSiteCount:12, siteCount:12, riskCount:14, highRiskCount:4, kriExceptionCount:9, majorMatterCount:28, rectificationCount:6, openRectificationCount:2, dataAccessStatus:'部分接入', dataCoverageStatus:'部分接入', dataQualityStatus:'关注', lastDataUpdateTime:'2026-07-21 22:00', responsibleDepartment:'区域财务部', crossBorderComplianceStatus:'待复核' },
    { entityId:'C001', entityName:'C项目公司', parentEntityId:'B001', parentEntityName:'B公司', entityLevel:'三级', entityType:'项目公司', regionId:'ME', regionName:'中东', countryId:'ME-A', countryName:'中东某国', city:'项目现场', businessDomains:'境外工程项目', projectCount:42, projectSiteCount:4, siteCount:4, riskCount:6, highRiskCount:2, kriExceptionCount:4, majorMatterCount:8, rectificationCount:3, openRectificationCount:2, dataAccessStatus:'待完善', dataCoverageStatus:'待完善', dataQualityStatus:'待提升', lastDataUpdateTime:'2026-07-22 07:30', responsibleDepartment:'项目合同部', crossBorderComplianceStatus:'关注' },
    { entityId:'D001', entityName:'D公司', parentEntityId:'A001', parentEntityName:'A公司', entityLevel:'二级', entityType:'二级子企业', regionId:'AS', regionName:'亚洲', countryId:'AS-A', countryName:'东南亚某国', city:'某东南亚城市', businessDomains:'投资、境外、供应链', projectCount:35, projectSiteCount:6, siteCount:6, riskCount:8, highRiskCount:2, kriExceptionCount:5, majorMatterCount:12, rectificationCount:4, openRectificationCount:2, dataAccessStatus:'部分接入', dataCoverageStatus:'部分接入', dataQualityStatus:'关注', lastDataUpdateTime:'2026-07-20 18:00', responsibleDepartment:'区域信息管理岗', crossBorderComplianceStatus:'待复核' }
  ],
  globalProjects: [
    { projectId:'GP001', projectName:'某境外能源项目', projectCompanyId:'C001', entityId:'C001', regionId:'ME', countryId:'ME-A', city:'项目现场', businessDomain:'投资管理', projectType:'境外投资', projectStatus:'投后运营', investmentAmount:'30亿元', riskCount:3, highRiskCount:1, kriExceptionCount:2, rectificationCount:1, majorMatterCount:2, openRectificationCount:1, dataAccessStatus:'部分接入', dataCoverageStatus:'部分接入', dataQualityStatus:'关注', riskMatterCount:3, highRiskMatterCount:1, lastDataUpdateTime:'2026-07-22 07:00', responsibleDepartment:'境外事业部' },
    { projectId:'GP002', projectName:'境外合作项目', projectCompanyId:'D001', entityId:'D001', regionId:'AS', countryId:'AS-A', city:'某东南亚城市', businessDomain:'境外业务', projectType:'境外投资', projectStatus:'投后运营', investmentAmount:'18亿元', riskCount:2, highRiskCount:1, kriExceptionCount:1, rectificationCount:0, majorMatterCount:1, openRectificationCount:0, dataAccessStatus:'部分接入', dataCoverageStatus:'部分接入', dataQualityStatus:'关注', riskMatterCount:2, highRiskMatterCount:1, lastDataUpdateTime:'2026-07-20 18:00', responsibleDepartment:'区域信息管理岗' }
  ],
  dataGovernanceMetrics: [
    ['数据源总数','28','+2','正常'],['已接入数据源','26','+1','正常'],['数据对象总数','186','+8','正常'],['数据字段总数','1,286','+42','正常'],['数据标准数量','68','+3','正常'],['指标总数','238','+6','正常'],['KRI血缘覆盖率','87.6%','+3.8%','关注'],['数据质量异常数','14','-2','关注'],['未建立血缘关系数','18','-4','关注']
  ],
  dataSourceRegistry: [
    { sourceId:'SRC001', systemName:'投资管理系统', systemType:'业务系统', ownerEntity:'A公司', entityId:'A001', regionId:'CN', regionName:'境内', countryId:'CN-CN', countryName:'中国', businessDomains:['投资管理'], deploymentLocation:'境内/中国', dataOwner:'集团投资管理部', collectionMethod:'API', interfaceStatus:'正常', syncStatus:'正常', lastSyncTime:'2026-07-22 08:00', updateFrequency:'日', dataCompleteness:'98.6%', dataTimeliness:'97.2%', qualityScore:96, coverageStatus:'已接入' },
    { sourceId:'SRC002', systemName:'财务系统', systemType:'业务系统', ownerEntity:'B公司', entityId:'B001', regionId:'ME', regionName:'中东', countryId:'ME-A', countryName:'中东某国', businessDomains:['财务','投资'], deploymentLocation:'中东/中东某国', dataOwner:'区域财务部', collectionMethod:'数据库同步', interfaceStatus:'延迟', syncStatus:'延迟', lastSyncTime:'2026-07-21 22:00', updateFrequency:'日', dataCompleteness:'94.2%', dataTimeliness:'88.5%', qualityScore:89, coverageStatus:'已接入' },
    { sourceId:'SRC003', systemName:'合同系统', systemType:'业务系统', ownerEntity:'C项目公司', entityId:'C001', regionId:'ME', regionName:'中东', countryId:'ME-A', countryName:'中东某国', businessDomains:['合同','工程'], deploymentLocation:'中东/中东某国', dataOwner:'项目合同部', collectionMethod:'API', interfaceStatus:'正常', syncStatus:'正常', lastSyncTime:'2026-07-22 07:30', updateFrequency:'实时', dataCompleteness:'96.8%', dataTimeliness:'98.1%', qualityScore:94, coverageStatus:'已接入' },
    { sourceId:'SRC004', systemName:'采购系统', systemType:'业务系统', ownerEntity:'A公司', entityId:'A001', regionId:'CN', regionName:'境内', countryId:'CN-CN', countryName:'中国', businessDomains:['供应链管理'], deploymentLocation:'境内/中国', dataOwner:'集团采购管理部', collectionMethod:'API', interfaceStatus:'正常', syncStatus:'正常', lastSyncTime:'2026-07-22 06:00', updateFrequency:'日', dataCompleteness:'97.4%', dataTimeliness:'96.8%', qualityScore:95, coverageStatus:'已接入' },
    { sourceId:'SRC005', systemName:'资金系统', systemType:'业务系统', ownerEntity:'B公司', entityId:'B001', regionId:'ME', regionName:'中东', countryId:'ME-A', countryName:'中东某国', businessDomains:['财务','资金'], deploymentLocation:'中东/中东某国', dataOwner:'区域财务部', collectionMethod:'消息队列', interfaceStatus:'正常', syncStatus:'正常', lastSyncTime:'2026-07-22 08:15', updateFrequency:'实时', dataCompleteness:'95.8%', dataTimeliness:'94.6%', qualityScore:92, coverageStatus:'已接入' },
    { sourceId:'SRC006', systemName:'项目系统', systemType:'业务系统', ownerEntity:'C项目公司', entityId:'C001', regionId:'ME', regionName:'中东', countryId:'ME-A', countryName:'中东某国', businessDomains:['工程项目'], deploymentLocation:'中东/中东某国', dataOwner:'项目管理部', collectionMethod:'API', interfaceStatus:'正常', syncStatus:'正常', lastSyncTime:'2026-07-22 07:00', updateFrequency:'日', dataCompleteness:'93.6%', dataTimeliness:'91.2%', qualityScore:88, coverageStatus:'已接入' },
    { sourceId:'SRC007', systemName:'经营分析系统', systemType:'分析系统', ownerEntity:'D公司', entityId:'D001', regionId:'AS', regionName:'亚洲', countryId:'AS-A', countryName:'东南亚某国', businessDomains:['投资','境外'], deploymentLocation:'亚洲/东南亚某国', dataOwner:'区域信息管理岗', collectionMethod:'ETL', interfaceStatus:'异常', syncStatus:'中断', lastSyncTime:'2026-07-20 18:00', updateFrequency:'日', dataCompleteness:'82.4%', dataTimeliness:'71.2%', qualityScore:76, coverageStatus:'部分接入' }
  ],
  dataObjects: [
    { objectId:'OBJ001', objectName:'投资项目主数据', sourceId:'SRC001', systemName:'投资管理系统', ownerEntity:'A公司', entityId:'A001', businessDomain:'投资管理', objectType:'主数据', dataOwner:'集团投资管理部', updateFrequency:'日', qualityStatus:'正常', lastUpdateTime:'2026-07-22 08:00', downstreamIndicatorCount:3, downstreamKriCount:2 },
    { objectId:'OBJ002', objectName:'法人主数据', sourceId:'SRC001', systemName:'投资管理系统', ownerEntity:'集团总部', entityId:'G001', businessDomain:'产权管理', objectType:'主数据', dataOwner:'集团数据治理部', updateFrequency:'周', qualityStatus:'正常', lastUpdateTime:'2026-07-21 18:00', downstreamIndicatorCount:2, downstreamKriCount:1 },
    { objectId:'OBJ003', objectName:'合同台账', sourceId:'SRC003', systemName:'合同系统', ownerEntity:'C项目公司', entityId:'C001', businessDomain:'合同管理', objectType:'业务台账', dataOwner:'项目合同部', updateFrequency:'实时', qualityStatus:'正常', lastUpdateTime:'2026-07-22 07:30', downstreamIndicatorCount:2, downstreamKriCount:1 },
    { objectId:'OBJ004', objectName:'资金支付记录', sourceId:'SRC005', systemName:'资金系统', ownerEntity:'B公司', entityId:'B001', businessDomain:'财务管理', objectType:'业务台账', dataOwner:'区域财务部', updateFrequency:'实时', qualityStatus:'关注', lastUpdateTime:'2026-07-21 22:00', downstreamIndicatorCount:2, downstreamKriCount:2 },
    { objectId:'OBJ005', objectName:'采购订单', sourceId:'SRC004', systemName:'采购系统', ownerEntity:'A公司', entityId:'A001', businessDomain:'供应链管理', objectType:'业务台账', dataOwner:'集团采购管理部', updateFrequency:'日', qualityStatus:'正常', lastUpdateTime:'2026-07-22 06:00', downstreamIndicatorCount:1, downstreamKriCount:0 },
    { objectId:'OBJ006', objectName:'项目进度', sourceId:'SRC006', systemName:'项目系统', ownerEntity:'C项目公司', entityId:'C001', businessDomain:'工程项目', objectType:'业务台账', dataOwner:'项目管理部', updateFrequency:'日', qualityStatus:'关注', lastUpdateTime:'2026-07-21 14:00', downstreamIndicatorCount:2, downstreamKriCount:1 },
    { objectId:'OBJ007', objectName:'风险事项', sourceId:'SRC001', systemName:'投资管理系统', ownerEntity:'B公司', entityId:'B001', businessDomain:'投资管理', objectType:'监管对象', dataOwner:'集团风险管理部', updateFrequency:'实时', qualityStatus:'正常', lastUpdateTime:'2026-07-22 08:00', downstreamIndicatorCount:0, downstreamKriCount:0 },
    { objectId:'OBJ008', objectName:'整改任务', sourceId:'SRC001', systemName:'投资管理系统', ownerEntity:'A公司', entityId:'A001', businessDomain:'投资管理', objectType:'监管对象', dataOwner:'集团风险管理部', updateFrequency:'日', qualityStatus:'正常', lastUpdateTime:'2026-07-22 07:00', downstreamIndicatorCount:1, downstreamKriCount:0 }
  ],
  dataFields: [
    { fieldId:'FLD001', objectId:'OBJ001', fieldName:'项目投资金额', fieldCode:'INV_AMOUNT', dataType:'金额', required:true, sensitivityLevel:'高', standardId:'STD001', qualityStatus:'异常', lastUpdateTime:'2026-07-21 22:00' },
    { fieldId:'FLD002', objectId:'OBJ001', fieldName:'项目所属国家', fieldCode:'INV_COUNTRY', dataType:'文本', required:true, sensitivityLevel:'中', standardId:'STD004', qualityStatus:'正常', lastUpdateTime:'2026-07-22 08:00' },
    { fieldId:'FLD003', objectId:'OBJ002', fieldName:'法人层级', fieldCode:'ENTITY_LEVEL', dataType:'枚举', required:true, sensitivityLevel:'低', standardId:'STD002', qualityStatus:'正常', lastUpdateTime:'2026-07-21 18:00' },
    { fieldId:'FLD004', objectId:'OBJ004', fieldName:'累计支付金额', fieldCode:'PAY_TOTAL', dataType:'金额', required:true, sensitivityLevel:'高', standardId:'STD006', qualityStatus:'关注', lastUpdateTime:'2026-07-21 22:00' },
    { fieldId:'FLD005', objectId:'OBJ003', fieldName:'合同金额', fieldCode:'CONTRACT_AMOUNT', dataType:'金额', required:true, sensitivityLevel:'高', standardId:'STD001', qualityStatus:'正常', lastUpdateTime:'2026-07-22 07:30' },
    { fieldId:'FLD006', objectId:'OBJ007', fieldName:'风险等级', fieldCode:'RISK_LEVEL', dataType:'枚举', required:true, sensitivityLevel:'中', standardId:'STD005', qualityStatus:'正常', lastUpdateTime:'2026-07-22 08:00' },
    { fieldId:'FLD007', objectId:'OBJ008', fieldName:'整改完成时间', fieldCode:'RECT_CLOSE_TIME', dataType:'日期', required:false, sensitivityLevel:'低', standardId:'STD007', qualityStatus:'正常', lastUpdateTime:'2026-07-22 07:00' }
  ],
  dataStandards: [
    { standardId:'STD001', standardName:'投资金额', standardCode:'DS-INV-AMOUNT', standardType:'业务标准', definition:'项目投资批复及实际投资金额，含批复投资、累计投资、追加投资', unit:'万元', valueRange:'>=0', ownerDepartment:'集团数据治理部', applicableSystems:['投资管理系统','财务系统','经营分析系统'], applicableDomains:['投资管理'], indicatorCount:3, kriCount:2, issueType:null, aliasFields:['项目金额','投资总额','项目投资额'] },
    { standardId:'STD002', standardName:'法人层级', standardCode:'DS-ENTITY-LEVEL', standardType:'主数据标准', definition:'集团全级次法人组织层级编码', unit:'—', valueRange:'集团/一级/二级/三级/四级', ownerDepartment:'集团数据治理部', applicableSystems:['投资管理系统','产权系统'], applicableDomains:['产权管理'], indicatorCount:1, kriCount:1, issueType:null, aliasFields:['组织层级','企业层级'] },
    { standardId:'STD003', standardName:'区域', standardCode:'DS-REGION', standardType:'主数据标准', definition:'集团全球区域划分标准', unit:'—', valueRange:'境内/中东/亚洲/非洲/欧洲及拉美', ownerDepartment:'集团数据治理部', applicableSystems:['投资管理系统','财务系统','项目系统'], applicableDomains:['境外业务'], indicatorCount:2, kriCount:1, issueType:null, aliasFields:['所属区域','业务区域'] },
    { standardId:'STD004', standardName:'国家/地区', standardCode:'DS-COUNTRY', standardType:'主数据标准', definition:'项目及法人所在国家/地区标准编码', unit:'—', valueRange:'ISO国家编码', ownerDepartment:'集团数据治理部', applicableSystems:['投资管理系统','合同系统'], applicableDomains:['境外业务'], indicatorCount:2, kriCount:1, issueType:'标准未统一', aliasFields:['所在国','国别'] },
    { standardId:'STD005', standardName:'风险等级', standardCode:'DS-RISK-LEVEL', standardType:'监管标准', definition:'风险事项分级标准（重大/较大/一般）', unit:'—', valueRange:'重大/较大/一般', ownerDepartment:'集团风险管理部', applicableSystems:['投资管理系统'], applicableDomains:['投资管理'], indicatorCount:1, kriCount:2, issueType:null, aliasFields:['风险级别','事项等级'] },
    { standardId:'STD006', standardName:'资金支付金额', standardCode:'DS-PAY-AMOUNT', standardType:'业务标准', definition:'项目资金实际支付累计金额', unit:'万元', valueRange:'>=0', ownerDepartment:'集团财务部', applicableSystems:['资金系统','财务系统'], applicableDomains:['财务管理'], indicatorCount:2, kriCount:2, issueType:null, aliasFields:['付款金额','累计支付'] },
    { standardId:'STD007', standardName:'整改状态', standardCode:'DS-RECT-STATUS', standardType:'监管标准', definition:'整改任务当前状态及闭环标识', unit:'—', valueRange:'制定/执行/验证/关闭', ownerDepartment:'集团风险管理部', applicableSystems:['投资管理系统'], applicableDomains:['投资管理'], indicatorCount:1, kriCount:0, issueType:'标准缺失', aliasFields:['整改阶段','闭环状态'] }
  ],
  dataIndicators: [
    { indicatorId:'IND001', indicatorName:'投资完成率', indicatorType:'比率指标', calculationFormula:'实际完成投资 ÷ 批复投资金额 × 100%', sourceObject:'OBJ001', sourceFields:['FLD001'], dataStandard:'STD001', businessDomain:'投资管理', responsibleDepartment:'集团投资管理部', updateFrequency:'月', qualityStatus:'异常', kriId:'kri-capex' },
    { indicatorId:'IND002', indicatorName:'项目资金支付比例', indicatorType:'比率指标', calculationFormula:'累计支付金额 ÷ 批复投资金额 × 100%', sourceObject:'OBJ004', sourceFields:['FLD004'], dataStandard:'STD006', businessDomain:'财务管理', responsibleDepartment:'集团财务部', updateFrequency:'月', qualityStatus:'关注', kriId:'kri-capex' },
    { indicatorId:'IND003', indicatorName:'项目现金流覆盖率', indicatorType:'比率指标', calculationFormula:'经营现金流 ÷ 到期债务 × 100%', sourceObject:'OBJ004', sourceFields:['FLD004'], dataStandard:'STD006', businessDomain:'财务管理', responsibleDepartment:'集团财务部', updateFrequency:'季', qualityStatus:'正常', kriId:'kri-post' },
    { indicatorId:'IND004', indicatorName:'合同履约偏差率', indicatorType:'偏差指标', calculationFormula:'(实际履约金额 − 合同金额) ÷ 合同金额 × 100%', sourceObject:'OBJ003', sourceFields:['FLD005'], dataStandard:'STD001', businessDomain:'合同管理', responsibleDepartment:'集团合同管理部', updateFrequency:'月', qualityStatus:'正常', kriId:null },
    { indicatorId:'IND005', indicatorName:'境外法人数据接入率', indicatorType:'覆盖率指标', calculationFormula:'已接入境外法人数 ÷ 境外法人总数 × 100%', sourceObject:'OBJ002', sourceFields:['FLD003'], dataStandard:'STD002', businessDomain:'境外业务', responsibleDepartment:'集团数据治理部', updateFrequency:'周', qualityStatus:'正常', kriId:'kri-filing' },
    { indicatorId:'IND006', indicatorName:'整改闭环率', indicatorType:'比率指标', calculationFormula:'已关闭整改任务数 ÷ 整改任务总数 × 100%', sourceObject:'OBJ008', sourceFields:['FLD007'], dataStandard:'STD007', businessDomain:'投资管理', responsibleDepartment:'集团风险管理部', updateFrequency:'月', qualityStatus:'关注', kriId:null }
  ],
  dataLineageRelations: [
    { relationId:'LIN001', sourceId:'SRC002', objectId:'OBJ004', fieldId:'FLD004', standardId:'STD006', indicatorId:'IND002', kriId:'kri-capex', scenarioId:'scenario-capex', controlRule:'资金支付控制规则', riskMatterId:'risk-2', rectificationId:'RECT-202601001' },
    { relationId:'LIN002', sourceId:'SRC001', objectId:'OBJ001', fieldId:'FLD001', standardId:'STD001', indicatorId:'IND001', kriId:'kri-capex', scenarioId:'scenario-capex', controlRule:'追加投资审批校验规则', riskMatterId:'risk-4', rectificationId:'RECT-202601004' },
    { relationId:'LIN003', sourceId:'SRC001', objectId:'OBJ001', fieldId:'FLD002', standardId:'STD004', indicatorId:'IND005', kriId:'kri-filing', scenarioId:'scenario-filing', controlRule:'备案状态校验规则', riskMatterId:'risk-5', rectificationId:null },
    { relationId:'LIN004', sourceId:'SRC005', objectId:'OBJ004', fieldId:'FLD004', standardId:'STD006', indicatorId:'IND003', kriId:'kri-post', scenarioId:'scenario-post', controlRule:'经营指标监测规则', riskMatterId:'risk-2', rectificationId:'RECT-202601002' },
    { relationId:'LIN005', sourceId:'SRC003', objectId:'OBJ003', fieldId:'FLD005', standardId:'STD001', indicatorId:'IND004', kriId:null, scenarioId:null, controlRule:null, riskMatterId:null, rectificationId:null },
    { relationId:'LIN006', sourceId:'SRC001', objectId:'OBJ008', fieldId:'FLD007', standardId:'STD007', indicatorId:'IND006', kriId:null, scenarioId:null, controlRule:null, riskMatterId:null, rectificationId:null }
  ],
  dataQualityIssues: [
    { issueId:'DQ001', anomalyType:'数据缺失', objectId:'OBJ001', fieldId:'FLD001', indicatorId:'IND001', kriId:'kri-capex', scenarioId:'scenario-capex', completeness:'82.4%', timeliness:'88.5%', accuracy:'91.2%', qualityScore:76, ownerDepartment:'集团投资管理部', rectificationStatus:'整改中', impactDesc:'投资完成率无法计算，KRI无法更新，风险规则无法正常执行' },
    { issueId:'DQ002', anomalyType:'数据延迟', objectId:'OBJ004', fieldId:'FLD004', indicatorId:'IND002', kriId:'kri-capex', scenarioId:'scenario-capex', completeness:'94.2%', timeliness:'71.2%', accuracy:'93.6%', qualityScore:82, ownerDepartment:'区域财务部', rectificationStatus:'待处理', impactDesc:'项目资金支付比例更新延迟，预警结果滞后' },
    { issueId:'DQ003', anomalyType:'数据口径不一致', objectId:'OBJ001', fieldId:'FLD001', indicatorId:'IND001', kriId:'kri-capex', scenarioId:'scenario-capex', completeness:'96.8%', timeliness:'95.1%', accuracy:'78.4%', qualityScore:84, ownerDepartment:'集团数据治理部', rectificationStatus:'整改中', impactDesc:'投资系统与财务系统投资金额口径不一致，影响指标准确性' },
    { issueId:'DQ004', anomalyType:'数据格式异常', objectId:'OBJ002', fieldId:'FLD003', indicatorId:'IND005', kriId:'kri-filing', scenarioId:'scenario-filing', completeness:'91.6%', timeliness:'92.8%', accuracy:'88.2%', qualityScore:86, ownerDepartment:'集团数据治理部', rectificationStatus:'待处理', impactDesc:'法人层级编码格式不统一，影响境外法人接入率统计' },
    { issueId:'DQ005', anomalyType:'数据异常波动', objectId:'OBJ006', fieldId:null, indicatorId:null, kriId:'kri-schedule', scenarioId:'scenario-capex', completeness:'93.6%', timeliness:'86.4%', accuracy:'90.1%', qualityScore:88, ownerDepartment:'项目管理部', rectificationStatus:'关注', impactDesc:'项目进度数据异常波动，影响里程碑偏差KRI判断' }
  ],
  groupKris: [
    { id:'kri-approval', category:'合规准入类', name:'未批先实施暴露金额', value:'1.2亿元', status:'重大预警', scenario:'未按规定履行决策审批程序', formula:'有效投资批复完成前发生的采购、签约、付款、开工金额', threshold:'> 0 元', source:'投资管理、采购、合同、资金、项目系统', control:'阻断合同、付款或开工；升级审批', entities:'A公司、C公司', riskScenarioId:'scenario-approval', controlRuleId:'CR-APPROVAL-001', applicableEntityIds:['A001','C001'], applicableProjectIds:['GP001'], sourceIndicatorIds:['IND001'] },
    { id:'kri-authority', category:'授权合规类', name:'授权边界超限金额', value:'0.36亿元', status:'较大预警', scenario:'超越授权审批', formula:'事项金额或累计金额 − 对应审批层级授权上限', threshold:'> 0 元', source:'授权矩阵、投资、合同、资金系统', control:'系统阻断并要求升级审批', entities:'B公司', riskScenarioId:'scenario-approval', controlRuleId:'CR-AUTHORITY-001', applicableEntityIds:['B001'], applicableProjectIds:[], sourceIndicatorIds:['IND002'] },
    { id:'kri-post', category:'投后运营类', name:'投后经营异常命中项数', value:'6项', status:'重大预警', scenario:'经营异常未预警', formula:'收入、利润、现金流、订单、负债等触发异常的指标项数', threshold:'≥ 3 项', source:'投后、财务、订单、合规系统', control:'启动行权、减值测试或退出评估', entities:'A公司、B公司', riskScenarioId:'scenario-post', controlRuleId:'CR-POST-001', applicableEntityIds:['A001','B001'], applicableProjectIds:['GP001'], sourceIndicatorIds:['IND003'] },
    { id:'kri-capex', category:'固定资产投资类', name:'累计追加投资接近审批边界比例', value:'86%', status:'预警', scenario:'追加投资审批不规范', formula:'同项目累计追加投资金额 ÷ 原批复金额 × 100%', threshold:'≥ 80%', source:'投资批复、变更台账、合同、资金系统', control:'提示重新报批并升级审批', entities:'C公司', riskScenarioId:'scenario-capex', controlRuleId:'CR-CAPEX-001', applicableEntityIds:['C001'], applicableProjectIds:['GP001'], sourceIndicatorIds:['IND001','IND002'] },
    { id:'kri-filing', category:'备案合规类', name:'未备案继续推进暴露金额', value:'0.48亿元', status:'较大预警', scenario:'应备案未备案', formula:'备案未完成期间新增合同、付款或实施金额', threshold:'> 0 元', source:'备案台账、合同、资金、项目实施资料', control:'补备案、重报或暂停推进', entities:'D公司', riskScenarioId:'scenario-filing', controlRuleId:'CR-FILING-001', applicableEntityIds:['D001'], applicableProjectIds:['GP002'], sourceIndicatorIds:['IND005'] },
    { id:'kri-schedule', category:'固定资产投资类', name:'关键里程碑预测偏差天数', value:'45天', status:'预警', scenario:'关键里程碑严重拖期', formula:'预测完成日期 − 基线计划日期', threshold:'> 30 天', source:'项目计划、实际进度、项目月报', control:'触发纠偏、资源调整和投资方案复核', entities:'C公司、D公司', riskScenarioId:'scenario-capex', controlRuleId:'CR-SCHEDULE-001', applicableEntityIds:['C001','D001'], applicableProjectIds:['GP001','GP002'], sourceIndicatorIds:[] },
    { id:'KRI-CB-001', category:'跨境数据合规类', name:'数据分类分级完成率', value:'83.3%', status:'预警', scenario:'境外数据分类分级不到位', formula:'已完成分类分级数据对象数 ÷ 应分类分级数据对象数', threshold:'≥ 95%', source:'经营分析系统、项目系统', control:'重要数据及敏感数据必须完成分类分级后方可进入跨境传输流程', entities:'D公司、B公司', riskScenarioId:'CBR001', controlRuleId:'CBCTRL001', applicableEntityIds:['D001','B001'], applicableProjectIds:['GP002'], sourceIds:['SRC007'], sourceIndicatorIds:[] },
    { id:'KRI-CB-002', category:'跨境数据合规类', name:'跨境传输审批完成率', value:'66.7%', status:'较大预警', scenario:'跨境数据传输审批不到位', formula:'已完成审批跨境传输活动数 ÷ 应审批跨境传输活动数', threshold:'≥ 98%', source:'经营分析系统、财务系统', control:'需审批的跨境数据活动必须完成审批后方可传输', entities:'D公司、B公司', riskScenarioId:'CBR002', controlRuleId:'CBCTRL002', applicableEntityIds:['D001','B001'], applicableProjectIds:[], sourceIds:['SRC007','SRC002'], sourceIndicatorIds:[] },
    { id:'KRI-CB-003', category:'跨境数据合规类', name:'本地化存储合规率', value:'66.7%', status:'预警', scenario:'数据本地化存储不符合要求', formula:'符合本地化存储要求活动数 ÷ 要求本地化存储活动数', threshold:'≥ 95%', source:'财务系统、合同系统', control:'要求本地化存储的数据不得未经批准跨境存储', entities:'B公司、D公司', riskScenarioId:'CBR003', controlRuleId:'CBCTRL003', applicableEntityIds:['B001','D001'], applicableProjectIds:[], sourceIds:['SRC002'], sourceIndicatorIds:[] },
    { id:'KRI-CB-004', category:'跨境数据合规类', name:'敏感数据访问合规率', value:'66.7%', status:'预警', scenario:'敏感数据访问管理不到位', formula:'合规敏感数据访问活动数 ÷ 敏感数据访问活动总数', threshold:'≥ 98%', source:'经营分析系统、项目系统', control:'敏感数据访问必须具备授权主体、访问目的和访问记录', entities:'D公司、C项目公司', riskScenarioId:'CBR004', controlRuleId:'CBCTRL004', applicableEntityIds:['D001','C001'], applicableProjectIds:['GP002'], sourceIds:['SRC007','SRC003'], sourceIndicatorIds:[] },
    { id:'KRI-CB-005', category:'跨境数据合规类', name:'境外系统同步及时率', value:'88.5%', status:'关注', scenario:'境外系统数据同步不及时', formula:'按时同步次数 ÷ 应同步总次数', threshold:'≥ 95%', source:'财务系统、经营分析系统', control:'纳入集团监管的数据应按照规定频率完成同步', entities:'B公司、D公司', riskScenarioId:'CBR005', controlRuleId:'CBCTRL005', applicableEntityIds:['B001','D001'], applicableProjectIds:[], sourceIds:['SRC002','SRC007'], sourceIndicatorIds:[] },
    { id:'KRI-CB-006', category:'跨境数据合规类', name:'未授权跨境传输数量', value:'1项', status:'重大预警', scenario:'未授权跨境数据传输', formula:'未完成审批或授权即发生的跨境传输活动数', threshold:'= 0 项', source:'经营分析系统', control:'发现未授权传输后自动生成风险事项并触发整改', entities:'D公司', riskScenarioId:'CBR006', controlRuleId:'CBCTRL006', applicableEntityIds:['D001'], applicableProjectIds:['GP002'], sourceIds:['SRC007'], sourceIndicatorIds:[] }
  ],
  groupRiskScenarios: [
    { id:'scenario-approval', name:'决策审批合规风险', desc:'识别未批先实施、超授权、拆分规避审批等事项。', kri:'kri-approval', level:'重大', entities:'A公司、C公司', control:'审批前置校验与流程阻断' },
    { id:'scenario-capex', name:'固定资产投资实施风险', desc:'关注概算、变更、进度、建设范围和追加投资审批。', kri:'kri-capex', level:'较大', entities:'C公司、D公司', control:'变更审批与付款前校验' },
    { id:'scenario-post', name:'投后运营与价值实现风险', desc:'关注经营异常、重大事项、减值和退出触发条件。', kri:'kri-post', level:'重大', entities:'A公司、B公司', control:'经营指标监测与行权处置' },
    { id:'scenario-filing', name:'备案与监管程序风险', desc:'关注备案、重报、交割及境外前置程序完成情况。', kri:'kri-filing', level:'较大', entities:'D公司', control:'备案状态校验与推进阻断' }
  ],
  regulationDomains: [
    { id:'investment', name:'投资管理', desc:'投资决策、投后管理、退出管理', risks:46, status:'重点监管', active:true },
    { id:'finance', name:'财务管理', desc:'资金、预算、经营指标', risks:12, status:'持续监测' },
    { id:'equity', name:'产权管理', desc:'产权登记、股权变动、资产处置', risks:8, status:'持续监测' },
    { id:'contract', name:'合同管理', desc:'合同审查、履约、重大协议', risks:9, status:'持续监测' },
    { id:'supply', name:'供应链管理', desc:'采购、供应商、履约风险', risks:14, status:'持续监测' },
    { id:'compensation', name:'薪酬分配', desc:'薪酬总额、激励约束、分配合规', risks:5, status:'持续监测' },
    { id:'overseas', name:'境外业务', desc:'境外运营、合规、汇率与政策', risks:11, status:'重点关注' },
    { id:'financial', name:'金融业务', desc:'融资、担保、金融资产风险', risks:7, status:'持续监测' },
    { id:'technology', name:'科技创新', desc:'研发投入、成果转化、创新项目', risks:6, status:'持续监测' }
  ],
  valueChainDetails: {
    strategy: { stage:'投资战略规划', objective:'确保年度股权投资方向、规模和资本配置与集团主责主业及战略布局一致。', department:'集团投资管理部', activities:'投资规划制定、年度投资计划编制、投资规模统筹', risk:'投资方向偏离集团战略风险', scenario:'投资战略管理风险', control:'战略符合性审查、年度投资计划审批、投资规模限额管理', before:'项目所属行业与集团战略布局匹配校验', during:'年度投资完成率超过120%触发超计划预警', after:'开展战略投资项目占比与贡献度评价' },
    opportunity: { stage:'项目机会识别', objective:'提升投资机会来源质量和项目初筛有效性，防止不符合准入条件项目进入后续流程。', department:'所属企业投资管理部门', activities:'投资机会发现、项目初步筛选、项目入库管理', risk:'项目筛选标准执行不到位风险', scenario:'投资机会管理风险', control:'项目基础信息真实性审核、投资准入标准校验、项目风险初筛', before:'行业、区域及负面清单准入校验', during:'项目停留超过90天未更新触发提示', after:'开展投资机会转化率评价' },
    approval: { stage:'立项论证', objective:'确保项目必要性、可行性、收益测算和风险边界论证充分，做到看得清、算得准、评得实。', department:'战略发展部', activities:'项目立项申请、投资可行性研究、投资收益测算、风险专项评估', risk:'项目可行性论证不足风险', scenario:'投资决策管理风险', control:'可研报告审核、收益敏感性分析、投资风险专项评估', before:'未完成可研报告禁止进入决策阶段', during:'IRR下降超过20%触发收益风险预警', after:'评价预测收益达成率' },
    'due-diligence': { stage:'尽职调查', objective:'全面识别目标企业财务、经营、合规和或有事项风险，为投资决策提供可靠依据。', department:'财务部、法律合规部', activities:'财务尽调、业务尽调、法律合规尽调、管理团队评价', risk:'被投资企业财务信息真实性风险', scenario:'投资前风险识别风险', control:'财务专项尽调、债权债务核查、法律合规审查', before:'尽调清单和报告完整性检查', during:'重大风险事项数量及整改完成情况监测', after:'复盘因尽调遗漏导致的风险事件' },
    plan: { stage:'投资方案制定', objective:'确保交易结构、投资金额、资金安排和退出路径设计合理可控。', department:'投资管理部', activities:'交易结构设计、投资金额确定、退出路径设计', risk:'投资结构设计不合理风险', scenario:'投资方案设计风险', control:'投资方案审查、资金来源审核、退出机制评估', before:'交易结构和资金来源合规性审查', during:'投资金额变动超过方案20%预警', after:'评价退出路径可实现性' },
    decision: { stage:'投资决策审批', objective:'实现投资权限、审批程序和决策意见落实情况的全过程穿透监督。', department:'集团投资管理部', activities:'投资审批、投资委员会审议、集团授权管理', risk:'超权限投资决策风险', scenario:'投资决策执行风险', control:'投资授权矩阵、审批流程控制、决策事项跟踪', before:'投资金额及事项权限自动校验', during:'审批周期、跳过审批节点等异常监控', after:'开展决策执行与意见落实评价' },
    signing: { stage:'协议签署与交割', objective:'确保协议条款有效保护集团权益，资金支付与产权交割符合审批及合同约定。', department:'法律合规部、财务部', activities:'协议谈判、合同签署、资金支付、工商变更', risk:'投资协议条款风险', scenario:'投资交易执行风险', control:'协议法律审查、支付条件复核、股权交割清单管理', before:'合同文本及交割条件完整性核验', during:'协议签署及时率、资金支付匹配率监测', after:'股权登记完成率及交割复盘评价' },
    'post-invest': { stage:'投后管理', objective:'持续跟踪被投资企业经营、财务、重大事项及董事履职，及时识别投资价值变化。', department:'投资管理部', activities:'经营情况跟踪、财务指标监测、重大事项管理、董事履职管理、投资评价', risk:'被投资企业经营持续下滑风险', scenario:'投资运营管理风险', control:'经营指标月度监测、投资收益评价、重大事项报告、年度投后评价', before:'设置收入、利润、资产负债率等风险阈值', during:'净利润下降率、连续亏损季度、现金流实时监测', after:'开展年度投资评价和董事履职评价' },
    exit: { stage:'投资退出', objective:'把握退出时机、退出收益和退出审批，推动低效无效投资有序退出。', department:'投资管理部', activities:'退出方案制定、退出时机评估、退出实施', risk:'退出收益未达预期风险', scenario:'投资退出管理风险', control:'退出方案论证、退出收益测算、退出审批管理', before:'退出方案和授权事项完整性审核', during:'退出周期超期、收益偏差率监测', after:'评价退出收益及项目损失率' }
  },
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
    { unit: 'A公司', l4: 5, l3: 8, l2: 12 },
    { unit: 'D公司', l4: 2, l3: 5, l2: 6 },
    { unit: 'B公司', l4: 1, l3: 2, l2: 4 },
    { unit: 'C公司', l4: 0, l3: 3, l2: 5 }
  ],
  rectificationTasks: [
    { id: 'RECT-202601001', taskId: 'RECT-202601001', riskId: 'risk-2', riskMatterId: 'risk-2', title: '被投资企业经营持续下滑风险', company: 'A公司', entityId: 'A001', projectId: 'GP001', regionId: 'ME', countryId: 'ME-A', responsibleEntity: 'A公司', responsibleDepartment: '投资管理部', owner: '投资管理部', level: 'L4', status: '整改执行', verificationStatus: '整改中', deadline: '2026-09-30', closedAt: null, progress: 60, measure: '建立月度经营指标监测机制；完善董事履职报告机制。' },
    { id: 'RECT-202601002', taskId: 'RECT-202601002', riskId: 'risk-1', riskMatterId: 'risk-1', title: '投资收益未达到预期风险', company: 'B公司', entityId: 'B001', projectId: null, regionId: 'CN', countryId: 'CN-CN', responsibleEntity: 'B公司', responsibleDepartment: '投资管理部', owner: '投资管理部', level: 'L4', status: '整改制定', verificationStatus: '待验证', deadline: '2026-07-15', closedAt: null, progress: 30, measure: '开展专项经营分析，制定收益提升方案。' },
    { id: 'RECT-202601003', taskId: 'RECT-202601003', riskId: 'risk-3', riskMatterId: 'risk-3', title: '重大事项报告不及时风险', company: 'C公司', entityId: 'C001', projectId: 'GP001', regionId: 'ME', countryId: 'ME-A', responsibleEntity: 'C项目公司', responsibleDepartment: '投资管理部', owner: '投资管理部', level: 'L3', status: '整改验证', verificationStatus: '验证中', deadline: '2026-07-30', closedAt: null, progress: 90, measure: '完善重大事项报告机制并验证执行效果。' },
    { id: 'RECT-202601004', taskId: 'RECT-202601004', riskId: 'risk-4', riskMatterId: 'risk-4', title: '投资决策论证不足风险', company: 'C公司', entityId: 'C001', projectId: null, regionId: 'ME', countryId: 'ME-A', responsibleEntity: 'C项目公司', responsibleDepartment: '战略发展部', owner: '战略发展部', level: 'L3', status: '已关闭', verificationStatus: '已验证', deadline: '2026-05-20', closedAt: '2026-05-18', progress: 100, measure: '补充可研报告并完成专家评审。' },
    { id: 'RECT-CB-001', taskId: 'RECT-CB-001', riskId: 'risk-cb-001', riskMatterId: 'risk-cb-001', title: '未授权跨境数据传输风险', company: 'D公司', entityId: 'D001', projectId: 'GP002', regionId: 'AS', countryId: 'AS-A', responsibleEntity: 'D公司', responsibleDepartment: '区域信息管理岗', owner: '区域信息管理岗', level: 'L4', status: '整改执行', verificationStatus: '整改中', deadline: '2026-08-15', closedAt: null, progress: 45, measure: '暂停未授权传输通道；补办跨境传输审批；完善访问授权记录。' },
    { id: 'RECT-CB-002', taskId: 'RECT-CB-002', riskId: 'risk-cb-002', riskMatterId: 'risk-cb-002', title: '数据本地化存储不合规风险', company: 'B公司', entityId: 'B001', projectId: 'GP001', regionId: 'ME', countryId: 'ME-A', responsibleEntity: 'B公司', responsibleDepartment: '区域财务部', owner: '区域财务部', level: 'L3', status: '整改制定', verificationStatus: '待验证', deadline: '2026-07-10', closedAt: null, progress: 25, measure: '梳理本地化存储要求；制定数据回迁方案并完成审批。' },
    { id: 'RECT-CB-003', taskId: 'RECT-CB-003', riskId: 'risk-cb-003', riskMatterId: 'risk-cb-003', title: '境外数据分类分级不到位风险', company: 'D公司', entityId: 'D001', projectId: 'GP002', regionId: 'AS', countryId: 'AS-A', responsibleEntity: 'D公司', responsibleDepartment: '区域信息管理岗', owner: '区域信息管理岗', level: 'L3', status: '整改中', verificationStatus: '整改中', deadline: '2026-09-15', closedAt: null, progress: 35, measure: '完成境外项目经营数据分类分级；纳入集团统一标准。' },
    { id: 'RECT-CD-001', taskId: 'RECT-CD-001', riskId: null, riskMatterId: 'CDR001', crossDomainRiskMatterId: 'CDR001', title: '投资决策整改', company: 'B公司', entityId: 'B001', projectId: 'GP001', regionId: 'ME', countryId: 'ME-A', responsibleEntity: 'B公司', responsibleDepartment: '投资管理部', collaboratingDepartments: ['财务资金部'], owner: '投资管理部', level: 'L4', status: '整改执行', verificationStatus: '整改中', deadline: '2026-09-30', closedAt: null, progress: 55, taskType: '跨领域协同整改', measure: '完善境外项目投资决策论证；建立跨部门联审机制。' },
    { id: 'RECT-CD-002', taskId: 'RECT-CD-002', riskId: null, riskMatterId: 'CDR001', crossDomainRiskMatterId: 'CDR001', title: '资金支付整改', company: 'B公司', entityId: 'B001', projectId: 'GP001', regionId: 'ME', countryId: 'ME-A', responsibleEntity: 'B公司', responsibleDepartment: '财务资金部', collaboratingDepartments: ['投资管理部', '合同管理部'], owner: '财务资金部', level: 'L3', status: '整改制定', verificationStatus: '待验证', deadline: '2026-08-30', closedAt: null, progress: 30, taskType: '跨领域协同整改', measure: '梳理资金支付与合同履约匹配关系；建立支付前联审流程。' },
    { id: 'RECT-CD-003', taskId: 'RECT-CD-003', riskId: null, riskMatterId: 'CDR002', crossDomainRiskMatterId: 'CDR002', title: '境外备案与数据合规整改', company: 'D公司', entityId: 'D001', projectId: 'GP002', regionId: 'AS', countryId: 'AS-A', responsibleEntity: 'D公司', responsibleDepartment: '区域信息管理岗', collaboratingDepartments: ['投资管理部', '财务资金部'], owner: '区域信息管理岗', level: 'L4', status: '整改执行', verificationStatus: '整改中', deadline: '2026-09-15', closedAt: null, progress: 40, taskType: '跨领域协同整改', measure: '完成境外备案程序；补办跨境数据传输审批；完善数据分类分级。' },
    { id: 'RECT-CD-004', taskId: 'RECT-CD-004', riskId: null, riskMatterId: 'CDR003', crossDomainRiskMatterId: 'CDR003', title: '合同履约整改', company: 'C项目公司', entityId: 'C001', projectId: 'GP001', regionId: 'ME', countryId: 'ME-A', responsibleEntity: 'C项目公司', responsibleDepartment: '项目合同部', collaboratingDepartments: ['供应链管理部', '投资管理部'], owner: '项目合同部', level: 'L3', status: '整改中', verificationStatus: '整改中', deadline: '2026-08-20', closedAt: null, progress: 65, taskType: '跨领域协同整改', measure: '完善合同履约跟踪机制；建立供应链协同预警。' }
  ],
  portfolioSummary: [
    ['投资项目总数', '356', '个项目 · 覆盖18家企业'],
    ['股权投资余额', '864', '亿元 · 同比 +12%'],
    ['投资行业数量', '15', '个重点行业'],
    ['投资收益率', '8.6', '% · 目标10%'],
    ['高风险投资项目', '23', '个 · L4 8个'],
    ['待退出项目', '12', '个项目']
  ],
  crossBorderRiskScenarios: [
    { id:'CBR001', name:'境外数据分类分级不到位', desc:'境外法人产生的数据未按照集团标准完成分类分级，导致重要数据、敏感数据和一般数据边界不清。', controlGoal:'确保跨境数据在传输、存储和访问前完成分类分级。', kriId:'KRI-CB-001', controlRuleId:'CBCTRL001', controlRule:'重要数据及敏感数据必须完成分类分级后方可进入跨境传输流程。', level:'较大' },
    { id:'CBR002', name:'跨境数据传输审批不到位', desc:'数据跨境传输未履行必要审批或审查程序。', controlGoal:'需审批的跨境数据活动必须完成审批后方可传输。', kriId:'KRI-CB-002', controlRuleId:'CBCTRL002', controlRule:'需审批的跨境数据活动必须完成审批后方可传输。', level:'重大' },
    { id:'CBR003', name:'数据本地化存储不符合要求', desc:'受本地监管要求约束的数据未按照规定存储于属地或指定位置。', controlGoal:'要求本地化存储的数据不得未经批准跨境存储。', kriId:'KRI-CB-003', controlRuleId:'CBCTRL003', controlRule:'要求本地化存储的数据不得未经批准跨境存储。', level:'较大' },
    { id:'CBR004', name:'敏感数据访问管理不到位', desc:'境外敏感数据被未授权主体访问或超出授权范围使用。', controlGoal:'敏感数据访问必须具备授权主体、访问目的和访问记录。', kriId:'KRI-CB-004', controlRuleId:'CBCTRL004', controlRule:'敏感数据访问必须具备授权主体、访问目的和访问记录。', level:'重大' },
    { id:'CBR005', name:'境外系统数据同步不及时', desc:'境外系统与集团监管平台之间数据同步延迟，导致集团无法及时掌握境外业务状态。', controlGoal:'纳入集团监管的数据应按照规定频率完成同步。', kriId:'KRI-CB-005', controlRuleId:'CBCTRL005', controlRule:'纳入集团监管的数据应按照规定频率完成同步。', level:'一般' },
    { id:'CBR006', name:'未授权跨境数据传输', desc:'数据在未完成审批或授权的情况下发生跨境传输。', controlGoal:'发现未授权传输后自动生成风险事项并触发整改。', kriId:'KRI-CB-006', controlRuleId:'CBCTRL006', controlRule:'发现未授权传输后自动生成风险事项并触发整改。', level:'重大' }
  ],
  crossBorderDataActivities: [
    { activityId:'CBD001', sourceId:'SRC007', dataObjectId:'OBJ006', dataFieldIds:['FLD006'], entityId:'D001', regionId:'AS', countryId:'AS-A', sourceLocation:'东南亚某国·某东南亚城市', storageLocation:'东南亚某国·属地云', destinationLocation:'中国·北京', destinationRegionId:'CN', destinationCountryId:'CN-CN', transferType:'跨境传输', transferPath:'东南亚某国 → 北京', dataClassification:'重要数据', sensitivityLevel:'高', localStorageRequired:true, localStorageCompliant:false, transferApprovalRequired:true, transferApprovalStatus:'待审批', crossBorderReviewStatus:'待审查', sensitiveAccessStatus:'部分合规', complianceStatus:'高风险', accessSubject:'集团经营分析平台', responsibleEntityId:'D001', responsibleDepartment:'区域信息管理岗', lastReviewDate:'2026-07-15', nextReviewDate:'2026-08-15', riskScenarioId:'CBR002', kriId:'KRI-CB-002', riskMatterId:'risk-cb-001', rectificationTaskId:'RECT-CB-001' },
    { activityId:'CBD002', sourceId:'SRC002', dataObjectId:'OBJ004', dataFieldIds:['FLD004'], entityId:'B001', regionId:'ME', countryId:'ME-A', sourceLocation:'中东某国·某海外城市', storageLocation:'中东某国·属地数据中心', destinationLocation:'中国·北京', destinationRegionId:'CN', destinationCountryId:'CN-CN', transferType:'跨境传输', transferPath:'中东某国 → 北京', dataClassification:'重要数据', sensitivityLevel:'高', localStorageRequired:true, localStorageCompliant:true, transferApprovalRequired:true, transferApprovalStatus:'已审批', crossBorderReviewStatus:'已通过', sensitiveAccessStatus:'合规', complianceStatus:'关注', accessSubject:'集团财务分析平台', responsibleEntityId:'B001', responsibleDepartment:'区域财务部', lastReviewDate:'2026-07-18', nextReviewDate:'2026-08-18', riskScenarioId:'CBR005', kriId:'KRI-CB-005', riskMatterId:null, rectificationTaskId:null },
    { activityId:'CBD003', sourceId:'SRC003', dataObjectId:'OBJ003', dataFieldIds:['FLD005'], entityId:'C001', regionId:'ME', countryId:'ME-A', sourceLocation:'中东某国·项目现场', storageLocation:'中东某国·项目现场', destinationLocation:'中东某国·项目现场', destinationRegionId:'ME', destinationCountryId:'ME-A', transferType:'境内流转', transferPath:'项目现场本地', dataClassification:'一般数据', sensitivityLevel:'中', localStorageRequired:true, localStorageCompliant:true, transferApprovalRequired:false, transferApprovalStatus:'不适用', crossBorderReviewStatus:'不适用', sensitiveAccessStatus:'合规', complianceStatus:'正常', accessSubject:'项目合同部', responsibleEntityId:'C001', responsibleDepartment:'项目合同部', lastReviewDate:'2026-07-20', nextReviewDate:'2026-08-20', riskScenarioId:null, kriId:null, riskMatterId:null, rectificationTaskId:null },
    { activityId:'CBD004', sourceId:'SRC007', dataObjectId:'OBJ006', dataFieldIds:['FLD006'], entityId:'D001', regionId:'AS', countryId:'AS-A', sourceLocation:'东南亚某国·某东南亚城市', storageLocation:'东南亚某国·属地云', destinationLocation:'中国·北京', destinationRegionId:'CN', destinationCountryId:'CN-CN', transferType:'跨境传输', transferPath:'东南亚某国 → 北京', dataClassification:'重要数据', sensitivityLevel:'高', localStorageRequired:true, localStorageCompliant:false, transferApprovalRequired:true, transferApprovalStatus:'未审批', crossBorderReviewStatus:'未审查', sensitiveAccessStatus:'不合规', complianceStatus:'高风险', accessSubject:'未授权第三方分析平台', responsibleEntityId:'D001', responsibleDepartment:'区域信息管理岗', lastReviewDate:'2026-07-10', nextReviewDate:'2026-07-25', riskScenarioId:'CBR006', kriId:'KRI-CB-006', riskMatterId:'risk-cb-001', rectificationTaskId:'RECT-CB-001' },
    { activityId:'CBD005', sourceId:'SRC002', dataObjectId:'OBJ004', dataFieldIds:['FLD004'], entityId:'B001', regionId:'ME', countryId:'ME-A', sourceLocation:'中东某国·某海外城市', storageLocation:'中国·北京', destinationLocation:'中国·北京', destinationRegionId:'CN', destinationCountryId:'CN-CN', transferType:'违规存储', transferPath:'中东某国 → 北京（违规）', dataClassification:'敏感数据', sensitivityLevel:'高', localStorageRequired:true, localStorageCompliant:false, transferApprovalRequired:true, transferApprovalStatus:'待审批', crossBorderReviewStatus:'待审查', sensitiveAccessStatus:'部分合规', complianceStatus:'高风险', accessSubject:'集团财务系统', responsibleEntityId:'B001', responsibleDepartment:'区域财务部', lastReviewDate:'2026-07-12', nextReviewDate:'2026-08-12', riskScenarioId:'CBR003', kriId:'KRI-CB-003', riskMatterId:'risk-cb-002', rectificationTaskId:'RECT-CB-002' },
    { activityId:'CBD006', sourceId:'SRC007', dataObjectId:'OBJ006', dataFieldIds:[], entityId:'D001', regionId:'AS', countryId:'AS-A', sourceLocation:'东南亚某国·某东南亚城市', storageLocation:'东南亚某国·属地云', destinationLocation:'东南亚某国·某东南亚城市', destinationRegionId:'AS', destinationCountryId:'AS-A', transferType:'本地处理', transferPath:'本地', dataClassification:'未分级', sensitivityLevel:'—', localStorageRequired:true, localStorageCompliant:true, transferApprovalRequired:false, transferApprovalStatus:'不适用', crossBorderReviewStatus:'待审查', sensitiveAccessStatus:'待评估', complianceStatus:'关注', accessSubject:'境外项目团队', responsibleEntityId:'D001', responsibleDepartment:'区域信息管理岗', lastReviewDate:'2026-07-08', nextReviewDate:'2026-08-08', riskScenarioId:'CBR001', kriId:'KRI-CB-001', riskMatterId:'risk-cb-003', rectificationTaskId:'RECT-CB-003' }
  ],
  crossDomainRiskMatters: [
    { riskMatterId:'CDR001', riskMatterName:'境外项目全生命周期协同管控风险', riskLevel:'高', status:'监测中', businessActivity:'境外项目投资', domainIds:['investment','finance','contract','supply','overseas'], scenarioIds:['scenario-approval','scenario-capex','scenario-post'], kriIds:['kri-post','kri-capex','kri-approval'], regionIds:['ME'], countryIds:['ME-A'], entityIds:['B001'], projectIds:['GP001'], primaryResponsibleDepartment:'投资管理部', collaboratingDepartments:['财务资金部','合同管理部','供应链管理部','国际业务部'], riskPropagationStatus:'已形成跨领域传导', relatedRectificationTaskIds:['RECT-CD-001','RECT-CD-002'], relatedCrossBorderActivityIds:[], relatedDataQualityIssueIds:['DQ002'], lastUpdateTime:'2026-07-22 10:30' },
    { riskMatterId:'CDR002', riskMatterName:'境外数据与经营协同风险', riskLevel:'高', status:'监测中', businessActivity:'境外项目经营数据跨境传输', domainIds:['investment','finance','overseas'], scenarioIds:['scenario-filing','CBR002','CBR006'], kriIds:['kri-filing','KRI-CB-002','KRI-CB-006'], regionIds:['AS'], countryIds:['AS-A'], entityIds:['D001'], projectIds:['GP002'], primaryResponsibleDepartment:'区域信息管理岗', collaboratingDepartments:['投资管理部','财务资金部','国际业务部'], riskPropagationStatus:'已形成跨领域传导', relatedRectificationTaskIds:['RECT-CD-003','RECT-CB-001'], relatedCrossBorderActivityIds:['CBD001','CBD004'], relatedDataQualityIssueIds:['DQ005'], lastUpdateTime:'2026-07-22 09:15' },
    { riskMatterId:'CDR003', riskMatterName:'供应链合同履约联动风险', riskLevel:'中', status:'关注', businessActivity:'境外项目合同履约', domainIds:['contract','supply','investment'], scenarioIds:['scenario-capex','scenario-approval'], kriIds:['kri-capex','kri-schedule'], regionIds:['ME'], countryIds:['ME-A'], entityIds:['C001'], projectIds:['GP001'], primaryResponsibleDepartment:'项目合同部', collaboratingDepartments:['供应链管理部','投资管理部'], riskPropagationStatus:'局部传导', relatedRectificationTaskIds:['RECT-CD-004'], relatedCrossBorderActivityIds:[], relatedDataQualityIssueIds:[], lastUpdateTime:'2026-07-21 16:00' }
  ],
  crossDomainRiskRelations: [
    { relationId:'CDR-REL-001', riskMatterId:'CDR001', domainId:'investment', scenarioId:'scenario-approval', kriId:'kri-approval', relationType:'核心风险来源', propagationWeight:'高', controlResponsibility:'投资管理部' },
    { relationId:'CDR-REL-002', riskMatterId:'CDR001', domainId:'finance', scenarioId:'scenario-capex', kriId:'kri-capex', relationType:'传导风险', propagationWeight:'高', controlResponsibility:'财务资金部' },
    { relationId:'CDR-REL-003', riskMatterId:'CDR001', domainId:'contract', scenarioId:'scenario-capex', kriId:'kri-capex', relationType:'传导风险', propagationWeight:'中', controlResponsibility:'合同管理部' },
    { relationId:'CDR-REL-004', riskMatterId:'CDR001', domainId:'supply', scenarioId:'scenario-capex', kriId:'kri-capex', relationType:'关联风险', propagationWeight:'中', controlResponsibility:'供应链管理部' },
    { relationId:'CDR-REL-005', riskMatterId:'CDR001', domainId:'overseas', scenarioId:'scenario-post', kriId:'kri-post', relationType:'核心风险来源', propagationWeight:'高', controlResponsibility:'国际业务部' },
    { relationId:'CDR-REL-006', riskMatterId:'CDR002', domainId:'investment', scenarioId:'scenario-filing', kriId:'kri-filing', relationType:'核心风险来源', propagationWeight:'高', controlResponsibility:'投资管理部' },
    { relationId:'CDR-REL-007', riskMatterId:'CDR002', domainId:'overseas', scenarioId:'CBR002', kriId:'KRI-CB-002', relationType:'传导风险', propagationWeight:'高', controlResponsibility:'国际业务部' },
    { relationId:'CDR-REL-008', riskMatterId:'CDR002', domainId:'finance', scenarioId:'CBR006', kriId:'KRI-CB-006', relationType:'关联风险', propagationWeight:'高', controlResponsibility:'财务资金部' },
    { relationId:'CDR-REL-009', riskMatterId:'CDR003', domainId:'contract', scenarioId:'scenario-capex', kriId:'kri-capex', relationType:'核心风险来源', propagationWeight:'高', controlResponsibility:'项目合同部' },
    { relationId:'CDR-REL-010', riskMatterId:'CDR003', domainId:'supply', scenarioId:'scenario-capex', kriId:'kri-schedule', relationType:'传导风险', propagationWeight:'中', controlResponsibility:'供应链管理部' },
    { relationId:'CDR-REL-011', riskMatterId:'CDR003', domainId:'investment', scenarioId:'scenario-approval', kriId:'kri-approval', relationType:'关联风险', propagationWeight:'中', controlResponsibility:'投资管理部' }
  ],
  crossDomainRiskImpacts: [
    { impactId:'CDI001', riskMatterId:'CDR001', regionId:'ME', countryId:'ME-A', entityId:'B001', projectId:'GP001', impactLevel:'高', impactStatus:'持续监测', sourceKriIds:['kri-post','kri-capex'] },
    { impactId:'CDI002', riskMatterId:'CDR002', regionId:'AS', countryId:'AS-A', entityId:'D001', projectId:'GP002', impactLevel:'高', impactStatus:'持续监测', sourceKriIds:['kri-filing','KRI-CB-002','KRI-CB-006'] },
    { impactId:'CDI003', riskMatterId:'CDR003', regionId:'ME', countryId:'ME-A', entityId:'C001', projectId:'GP001', impactLevel:'中', impactStatus:'关注', sourceKriIds:['kri-capex','kri-schedule'] }
  ],
  crossDomainResponsibilities: [
    { responsibilityId:'RESP-CD-001', riskMatterId:'CDR001', entityId:'B001', projectId:'GP001', primaryDepartment:'投资管理部', collaboratingDepartments:['财务资金部','合同管理部','供应链管理部'], responsibilityType:'主责', responsibilityStatus:'已明确' },
    { responsibilityId:'RESP-CD-002', riskMatterId:'CDR002', entityId:'D001', projectId:'GP002', primaryDepartment:'区域信息管理岗', collaboratingDepartments:['投资管理部','财务资金部'], responsibilityType:'主责', responsibilityStatus:'已明确' },
    { responsibilityId:'RESP-CD-003', riskMatterId:'CDR003', entityId:'C001', projectId:'GP001', primaryDepartment:'项目合同部', collaboratingDepartments:['供应链管理部','投资管理部'], responsibilityType:'主责', responsibilityStatus:'已明确' }
  ],
  crossDomainRiskTrendHistory: [
    { period:'7日', dates:['07-16','07-18','07-20','07-22'], matterCounts:[2,2,3,3], multiKriAlertCounts:[1,2,2,3], highRiskCounts:[1,1,2,2], closureRates:['33.3%','33.3%','50.0%','50.0%'] },
    { period:'30日', dates:['06-22','06-29','07-06','07-13','07-20','07-22'], matterCounts:[1,1,2,2,3,3], multiKriAlertCounts:[0,1,1,2,2,3], highRiskCounts:[0,1,1,1,2,2], closureRates:['0%','0%','25.0%','33.3%','33.3%','50.0%'] },
    { period:'90日', dates:['04-22','05-22','06-22','07-22'], matterCounts:[1,1,2,3], multiKriAlertCounts:[0,0,1,3], highRiskCounts:[0,0,1,2], closureRates:['0%','0%','25.0%','50.0%'] }
  ]
});

(function () {
  const acts = APP_DATA.crossBorderDataActivities || [];
  const overseas = acts.filter(a => a.regionId !== 'CN');
  const classified = acts.filter(a => a.dataClassification && a.dataClassification !== '未分级');
  const needApproval = acts.filter(a => a.transferApprovalRequired);
  const approved = needApproval.filter(a => a.transferApprovalStatus === '已审批');
  const needLocal = acts.filter(a => a.localStorageRequired);
  const localOk = needLocal.filter(a => a.localStorageCompliant);
  const sensitive = acts.filter(a => a.sensitivityLevel === '高');
  const sensitiveOk = sensitive.filter(a => a.sensitiveAccessStatus === '合规');
  const compliant = acts.filter(a => a.complianceStatus === '正常' || a.complianceStatus === '关注');
  const unauthorized = acts.filter(a => a.riskScenarioId === 'CBR006' || a.transferApprovalStatus === '未审批');
  const overdue = acts.filter(a => a.nextReviewDate && a.nextReviewDate < '2026-07-22');
  const openRect = acts.filter(a => a.rectificationTaskId && (APP_DATA.rectificationTasks.find(t => t.taskId === a.rectificationTaskId) || {}).status !== '已关闭');
  const pct = (n, d) => d ? (n / d * 100).toFixed(1) + '%' : '—';
  APP_DATA.crossBorderComplianceMetrics = {
    crossBorderDataActivityCount: acts.length,
    crossBorderDataSourceCount: new Set(acts.map(a => a.sourceId)).size,
    crossBorderEntityCount: new Set(acts.map(a => a.entityId)).size,
    crossBorderCountryCount: new Set(acts.map(a => a.countryId)).size,
    classificationCompletionRate: pct(classified.length, acts.length),
    transferApprovalRate: pct(approved.length, needApproval.length),
    localStorageComplianceRate: pct(localOk.length, needLocal.length),
    sensitiveAccessComplianceRate: pct(sensitiveOk.length, sensitive.length),
    crossBorderComplianceRate: pct(compliant.length, acts.length),
    unauthorizedTransferCount: unauthorized.length,
    overdueReviewCount: overdue.length,
    openRectificationCount: openRect.length
  };
})();

(function () {
  const matters = APP_DATA.crossDomainRiskMatters || [];
  const rels = APP_DATA.crossDomainRiskRelations || [];
  const allDomains = new Set(matters.flatMap(m => m.domainIds || []));
  const allEntities = new Set(matters.flatMap(m => m.entityIds || []));
  const allProjects = new Set(matters.flatMap(m => m.projectIds || []));
  const allKris = new Set(matters.flatMap(m => m.kriIds || []));
  const highRisk = matters.filter(m => m.riskLevel === '高');
  const openRects = matters.flatMap(m => (m.relatedRectificationTaskIds || []).filter(tid => {
    const t = (APP_DATA.rectificationTasks || []).find(x => x.taskId === tid);
    return t && t.status !== '已关闭' && !t.closedAt;
  }));
  const collaborating = matters.filter(m => (m.collaboratingDepartments || []).length > 1);
  const multiKriAlerts = matters.filter(m => {
    const abnormal = (m.kriIds || []).filter(kid => {
      const k = (APP_DATA.groupKris || []).find(x => x.id === kid);
      return k && k.status && k.status !== '正常' && k.status !== '关注';
    });
    return abnormal.length >= 2;
  });
  const closedTasks = (APP_DATA.rectificationTasks || []).filter(t => (t.taskId || '').startsWith('RECT-CD') && (t.status === '已关闭' || t.closedAt));
  const cdTasks = (APP_DATA.rectificationTasks || []).filter(t => (t.taskId || '').startsWith('RECT-CD'));
  const pct = (n, d) => d ? (n / d * 100).toFixed(1) + '%' : '—';
  matters.forEach(m => { m.openRectificationCount = (m.relatedRectificationTaskIds || []).filter(tid => {
    const t = (APP_DATA.rectificationTasks || []).find(x => x.taskId === tid);
    return t && t.status !== '已关闭' && !t.closedAt;
  }).length; });
  APP_DATA.crossDomainRiskMetrics = {
    crossDomainMatterCount: matters.length,
    highRiskMatterCount: highRisk.length,
    involvedDomainCount: allDomains.size,
    involvedEntityCount: allEntities.size,
    involvedProjectCount: allProjects.size,
    relatedKriCount: allKris.size,
    pendingRectificationCount: openRects.length,
    collaboratingRectificationCount: collaborating.length,
    crossDomainClosureRate: pct(closedTasks.length, cdTasks.length),
    multiKriAlertCount: multiKriAlerts.length
  };
})();

(function () {
  const srcMap = {
    'risk-1': { domainId: 'investment', relatedDataSourceIds: ['SRC005'], relatedDataObjectIds: ['OBJ004'], responsibleDepartment: '投资管理部' },
    'risk-2': { domainId: 'investment', relatedDataSourceIds: ['SRC002'], relatedDataObjectIds: ['OBJ004'], responsibleDepartment: '投资管理部' },
    'risk-3': { domainId: 'investment', relatedDataSourceIds: ['SRC003'], relatedDataObjectIds: ['OBJ003'], responsibleDepartment: '投资管理部' },
    'risk-4': { domainId: 'investment', relatedDataSourceIds: ['SRC001'], relatedDataObjectIds: ['OBJ001'], responsibleDepartment: '战略发展部' },
    'risk-5': { domainId: 'overseas', relatedDataSourceIds: ['SRC007'], relatedDataObjectIds: ['OBJ006'], responsibleDepartment: '区域信息管理岗' },
    'risk-cb-001': { domainId: 'overseas', relatedDataSourceIds: ['SRC007'], relatedDataObjectIds: ['OBJ006'], responsibleDepartment: '区域信息管理岗' },
    'risk-cb-002': { domainId: 'overseas', relatedDataSourceIds: ['SRC002'], relatedDataObjectIds: ['OBJ004'], responsibleDepartment: '区域财务部' },
    'risk-cb-003': { domainId: 'overseas', relatedDataSourceIds: ['SRC007'], relatedDataObjectIds: ['OBJ006'], responsibleDepartment: '区域信息管理岗' }
  };
  (APP_DATA.warnings || []).forEach(w => {
    if (!w.riskMatterId) w.riskMatterId = w.id;
    const ext = srcMap[w.id] || {};
    if (!w.domainId && ext.domainId) w.domainId = ext.domainId;
    if (!w.relatedDataSourceIds && ext.relatedDataSourceIds) w.relatedDataSourceIds = ext.relatedDataSourceIds;
    if (!w.relatedDataObjectIds && ext.relatedDataObjectIds) w.relatedDataObjectIds = ext.relatedDataObjectIds;
    if (!w.responsibleDepartment && ext.responsibleDepartment) w.responsibleDepartment = ext.responsibleDepartment;
  });
})();

(function () {
  const entities = APP_DATA.globalLegalEntities || [];
  const overseas = entities.filter(e => e.regionId !== 'CN');
  const gaps = APP_DATA.coverageGaps || [];
  const alerts = APP_DATA.platformOperationAlerts || [];
  const quality = APP_DATA.dataQualityIssues || [];
  const highRiskEntities = entities.filter(e => (e.highRiskCount || 0) > 0);
  const openRects = (APP_DATA.rectificationTasks || []).filter(t => t.status !== '已关闭' && !t.closedAt);
  const connected = entities.filter(e => (e.dataCoverageStatus || e.dataAccessStatus) === '已接入');
  const sources = APP_DATA.dataSourceRegistry || [];
  const connectedSrc = sources.filter(s => s.coverageStatus === '已接入');
  const warnings = APP_DATA.warnings || [];
  const highRiskWarnings = warnings.filter(w => w.level === '重大' || w.status === '红色');
  const allRects = APP_DATA.rectificationTasks || [];
  const overdueRects = allRects.filter(t => t.status === '逾期' || (t.deadline && t.deadline < '2026-07-22' && t.status !== '已关闭' && !t.closedAt));
  const cbActs = APP_DATA.crossBorderDataActivities || [];
  const cbHighRisk = cbActs.filter(a => a.complianceStatus === '高风险' || a.complianceStatus === '异常');
  const cbMetrics = APP_DATA.crossBorderComplianceMetrics || {};
  APP_DATA.publicRegulatorySummary = {
    entityCount: entities.length,
    overseasEntityCount: overseas.length,
    highRiskEntityCount: highRiskEntities.length,
    countryCount: (APP_DATA.globalCountries || []).length,
    regionCount: (APP_DATA.globalRegions || []).length,
    projectCount: (APP_DATA.globalProjects || []).length,
    sourceCount: sources.length,
    connectedSourceCount: connectedSrc.length,
    coverageGapCount: gaps.length,
    platformAlertCount: alerts.length,
    qualityIssueCount: quality.length,
    warningCount: warnings.length,
    highRiskMatterCount: highRiskWarnings.length,
    rectificationTaskCount: allRects.length,
    openRectificationCount: openRects.length,
    overdueRectificationCount: overdueRects.length,
    rectificationPendingCount: allRects.filter(t => t.status === '整改制定' || t.verificationStatus === '待验证').length,
    rectificationInProgressCount: allRects.filter(t => t.status === '整改中' || t.status === '整改执行' || t.verificationStatus === '整改中').length,
    rectificationVerifyingCount: allRects.filter(t => t.status === '整改验证' || t.verificationStatus === '验证中').length,
    rectificationClosedCount: allRects.filter(t => t.status === '已关闭' || t.closedAt).length,
    crossDomainMatterCount: (APP_DATA.crossDomainRiskMetrics || {}).crossDomainMatterCount || (APP_DATA.crossDomainRiskMatters || []).length,
    crossBorderActivityCount: cbMetrics.crossBorderDataActivityCount || cbActs.length,
    crossBorderRiskCount: cbHighRisk.length + (cbMetrics.unauthorizedTransferCount || 0),
    crossBorderComplianceRiskCount: cbHighRisk.length,
    dataCoverageRate: entities.length ? (connected.length / entities.length * 100).toFixed(1) + '%' : '—',
    laggingEntityCount: entities.filter(e => e.dataQualityStatus === '关注' || e.dataQualityStatus === '待提升').length
  };
  (APP_DATA.globalRegions || []).forEach(r => {
    if (!r.lastDataUpdateTime) {
      const ents = entities.filter(e => e.regionId === r.regionId);
      r.lastDataUpdateTime = ents.map(e => e.lastDataUpdateTime).filter(Boolean).sort().reverse()[0] || '2026-07-22 08:00';
    }
  });
  (APP_DATA.globalCountries || []).forEach(c => {
    if (!c.lastDataUpdateTime) {
      const ents = entities.filter(e => e.countryId === c.countryId);
      c.lastDataUpdateTime = ents.map(e => e.lastDataUpdateTime).filter(Boolean).sort().reverse()[0] || '2026-07-22 08:00';
    }
  });
  (APP_DATA.dataQualityIssues || []).forEach(q => {
    if (!q.lastDataUpdateTime) {
      const obj = (APP_DATA.dataObjects || []).find(o => o.objectId === q.objectId);
      q.lastDataUpdateTime = (obj && obj.lastUpdateTime) || '2026-07-22 08:00';
    }
  });
  (APP_DATA.crossDomainRiskMatters || []).forEach(m => {
    if (!m.lastDataUpdateTime) m.lastDataUpdateTime = m.lastUpdateTime || '2026-07-22 08:00';
  });
  (APP_DATA.crossBorderDataActivities || []).forEach(a => {
    if (!a.lastDataUpdateTime) a.lastDataUpdateTime = a.lastReviewDate || '2026-07-22 08:00';
  });
  (APP_DATA.rectificationTasks || []).forEach(t => {
    if (!t.lastDataUpdateTime) t.lastDataUpdateTime = t.closedAt || t.deadline || '2026-07-22 08:00';
  });
  const metrics = APP_DATA.platformOperationMetrics || [];
  const metricVal = (label) => (metrics.find(m => m[0] === label) || [])[1] || '—';
  const openAlerts = alerts.filter(a => a.status !== '已关闭');
  const closedRects = allRects.filter(t => t.status === '已关闭' || t.closedAt);
  const kris = APP_DATA.groupKris || [];
  const kriOk = kris.filter(k => k.status === '正常' || k.status === '良好');
  APP_DATA.platformOperationChain = [
    ['监管对象', entities.length, `已覆盖${connected.length}`, `待完善${entities.length - connected.length}`],
    ['数据接入', metricVal('数据源接入率'), `已接入${connectedSrc.length}个`, `待接入${sources.length - connectedSrc.length}个`],
    ['数据质量', metricVal('数据完整率'), `正常${sources.filter(s => (s.qualityScore || 0) >= 90).length}个`, `异常${quality.length}项`],
    ['指标计算', metricVal('KRI更新成功率'), `指标${(APP_DATA.dataIndicators || []).length}项`, `异常${quality.filter(q => q.indicatorId).length}项`],
    ['KRI更新', metricVal('KRI更新成功率'), `正常${kriOk.length}项`, `异常${kris.length - kriOk.length}项`],
    ['规则执行', metricVal('规则执行率'), '正常执行', `异常${openAlerts.filter(a => a.alertType === '规则执行').length}项`],
    ['风险预警', metricVal('风险预警触达率'), `触达${(APP_DATA.warnings || []).length}项`, `待处理${openAlerts.length}项`],
    ['责任处置', metricVal('异常处置及时率'), '及时处置', `超期${allRects.filter(t => t.status === '逾期').length}项`],
    ['整改闭环', metricVal('整改闭环率'), `已关闭${closedRects.length}项`, `未闭环${openRects.length}项`]
  ];
})();

(function () {
  const TODAY = '2026-07-22';
  const events = [];
  let seq = 1;
  const mkId = () => 'EVENT' + String(seq++).padStart(3, '0');
  const mapWarnLevel = w => (w.level === '重大' || w.status === '红色' ? 'HIGH' : w.level === '较大' || w.status === '黄色' ? 'MEDIUM' : 'LOW');
  const mapAlertLevel = l => (l === '高' ? 'HIGH' : l === '中' ? 'MEDIUM' : 'LOW');
  const mapCdrLevel = l => (l === '高' ? 'HIGH' : l === '中' ? 'MEDIUM' : 'LOW');
  const mapCbLevel = s => (s === '高风险' || s === '异常' ? 'HIGH' : s === '关注' ? 'MEDIUM' : 'LOW');
  const isOverdue = (due, status) => due && due < TODAY && status !== 'CLOSED';
  const statusFromRect = (rect, fallback) => {
    if (!rect) return fallback || 'OPEN';
    if (rect.status === '已关闭' || rect.closedAt) return 'CLOSED';
    if (rect.status === '整改验证' || rect.verificationStatus === '验证中') return 'VERIFYING';
    if (rect.status === '整改执行' || rect.status === '整改中' || rect.verificationStatus === '整改中') return 'IN_PROGRESS';
    if (rect.status === '整改制定' || rect.verificationStatus === '待验证') return 'ACKNOWLEDGED';
    return fallback || 'OPEN';
  };
  const pushEvent = (base) => {
    const rect = base.rectificationTaskId ? (APP_DATA.rectificationTasks || []).find(t => t.taskId === base.rectificationTaskId) : null;
    const status = base.status || statusFromRect(rect, 'OPEN');
    events.push({
      eventId: mkId(),
      eventType: base.eventType,
      sourceObjectType: base.sourceObjectType,
      sourceObjectId: base.sourceObjectId,
      entityId: base.entityId || null,
      projectId: base.projectId || null,
      regionId: base.regionId || null,
      countryId: base.countryId || null,
      domainId: base.domainId || null,
      riskLevel: base.riskLevel || 'MEDIUM',
      kriId: base.kriId || null,
      scenarioId: base.scenarioId || null,
      riskMatterId: base.riskMatterId || null,
      rectificationTaskId: base.rectificationTaskId || null,
      status,
      responsibleEntity: base.responsibleEntity || base.entityId || null,
      responsibleDepartment: base.responsibleDepartment || '—',
      collaboratingDepartments: base.collaboratingDepartments || [],
      firstDetectedAt: base.firstDetectedAt || '2026-07-01',
      lastUpdatedAt: base.lastUpdatedAt || '2026-07-21',
      dueDate: base.dueDate || (rect ? rect.deadline : null),
      reopened: !!base.reopened,
      overdue: isOverdue(base.dueDate || (rect ? rect.deadline : null), status)
    });
  };

  (APP_DATA.warnings || []).forEach(w => {
    const rect = w.rectificationTaskId ? APP_DATA.rectificationTasks.find(t => t.taskId === w.rectificationTaskId) : null;
    pushEvent({
      eventType: 'RISK_MATTER', sourceObjectType: 'warning', sourceObjectId: w.id,
      entityId: w.entityId, projectId: w.projectId, regionId: w.regionId, countryId: w.countryId,
      domainId: w.domainId || 'investment', riskLevel: mapWarnLevel(w), kriId: w.kriId, scenarioId: w.scenarioId,
      riskMatterId: w.id, rectificationTaskId: w.rectificationTaskId,
      responsibleEntity: w.entityId, responsibleDepartment: w.responsibleDepartment || '投资管理部',
      firstDetectedAt: '2026-07-05', lastUpdatedAt: '2026-07-21', dueDate: rect ? rect.deadline : '2026-08-30'
    });
  });
  (APP_DATA.dataQualityIssues || []).forEach(q => {
    const obj = APP_DATA.dataObjects.find(o => o.objectId === q.objectId);
    const ent = obj ? APP_DATA.globalLegalEntities.find(e => e.entityId === obj.entityId) : null;
    const rel = APP_DATA.dataLineageRelations.find(r => r.objectId === q.objectId);
    const warn = rel && rel.riskMatterId ? APP_DATA.warnings.find(w => w.id === rel.riskMatterId) : null;
    pushEvent({
      eventType: 'DATA_QUALITY', sourceObjectType: 'dataQualityIssue', sourceObjectId: q.issueId,
      entityId: ent ? ent.entityId : null, regionId: ent ? ent.regionId : null, countryId: ent ? ent.countryId : null,
      domainId: 'investment', riskLevel: q.qualityScore < 80 ? 'HIGH' : q.qualityScore < 90 ? 'MEDIUM' : 'LOW',
      kriId: q.kriId, scenarioId: q.scenarioId, riskMatterId: warn ? warn.id : null,
      rectificationTaskId: warn ? warn.rectificationTaskId : null,
      responsibleEntity: ent ? ent.entityId : null, responsibleDepartment: q.ownerDepartment,
      firstDetectedAt: '2026-07-10', lastUpdatedAt: obj ? obj.lastUpdateTime.split(' ')[0] : '2026-07-20',
      dueDate: '2026-08-10'
    });
  });
  (APP_DATA.platformOperationAlerts || []).forEach(a => {
    pushEvent({
      eventType: 'PLATFORM_ALERT', sourceObjectType: 'platformOperationAlert', sourceObjectId: a.alertId,
      entityId: a.entityId, regionId: a.regionId, countryId: a.countryId, domainId: 'investment',
      riskLevel: mapAlertLevel(a.level), kriId: a.kriId, scenarioId: a.scenarioId,
      riskMatterId: a.riskMatterId, rectificationTaskId: a.rectificationTaskId,
      responsibleEntity: a.entityId, responsibleDepartment: a.responsibleDepartment,
      firstDetectedAt: (a.occurredAt || '').split(' ')[0] || '2026-07-18',
      lastUpdatedAt: (a.occurredAt || '').split(' ')[0] || '2026-07-20',
      dueDate: a.deadline, status: a.status === '已关闭' ? 'CLOSED' : a.status === '处理中' ? 'IN_PROGRESS' : 'OPEN'
    });
  });
  (APP_DATA.coverageGaps || []).forEach(g => {
    pushEvent({
      eventType: 'COVERAGE_GAP', sourceObjectType: 'coverageGap', sourceObjectId: g.gapId,
      entityId: g.entityId, projectId: g.projectId, regionId: g.regionId, countryId: g.countryId,
      domainId: 'investment', riskLevel: g.status === '未覆盖' ? 'HIGH' : 'MEDIUM',
      kriId: g.kriId, scenarioId: g.scenarioId, rectificationTaskId: g.rectificationTaskId,
      responsibleEntity: g.entityId, responsibleDepartment: g.responsibleDepartment,
      firstDetectedAt: '2026-07-08', lastUpdatedAt: '2026-07-19', dueDate: '2026-08-20'
    });
  });
  (APP_DATA.crossDomainRiskMatters || []).forEach(m => {
    pushEvent({
      eventType: 'CROSS_DOMAIN', sourceObjectType: 'crossDomainRiskMatter', sourceObjectId: m.riskMatterId,
      entityId: (m.entityIds || [])[0], projectId: (m.projectIds || [])[0],
      regionId: (m.regionIds || [])[0], countryId: (m.countryIds || [])[0],
      domainId: (m.domainIds || [])[0] || 'investment', riskLevel: mapCdrLevel(m.riskLevel),
      kriId: (m.kriIds || [])[0], scenarioId: (m.scenarioIds || [])[0], riskMatterId: m.riskMatterId,
      rectificationTaskId: (m.relatedRectificationTaskIds || [])[0],
      responsibleEntity: (m.entityIds || [])[0], responsibleDepartment: m.primaryResponsibleDepartment,
      collaboratingDepartments: m.collaboratingDepartments || [],
      firstDetectedAt: '2026-07-06', lastUpdatedAt: (m.lastUpdateTime || '').split(' ')[0] || '2026-07-21',
      dueDate: '2026-09-01'
    });
  });
  (APP_DATA.crossBorderDataActivities || []).filter(a => a.complianceStatus === '高风险' || a.complianceStatus === '异常' || a.transferApprovalStatus === '待审批' || a.transferApprovalStatus === '未审批').forEach(a => {
    pushEvent({
      eventType: 'CROSS_BORDER', sourceObjectType: 'crossBorderDataActivity', sourceObjectId: a.activityId,
      entityId: a.entityId, regionId: a.regionId, countryId: a.countryId, domainId: 'overseas',
      riskLevel: mapCbLevel(a.complianceStatus), kriId: a.kriId, scenarioId: a.riskScenarioId,
      riskMatterId: a.riskMatterId, rectificationTaskId: a.rectificationTaskId,
      responsibleEntity: a.entityId, responsibleDepartment: a.responsibleDepartment,
      firstDetectedAt: '2026-07-12', lastUpdatedAt: a.lastReviewDate || '2026-07-20', dueDate: a.nextReviewDate
    });
  });
  if (events[2]) events[2].reopened = true;

  APP_DATA.regulatoryEvents = events;
  const highPri = events.filter(e => e.riskLevel === 'HIGH');
  const periodStart = '2026-07-15';
  APP_DATA.regulatoryEventMetrics = {
    totalCount: events.length,
    highPriorityCount: highPri.length,
    openCount: events.filter(e => e.status === 'OPEN').length,
    acknowledgedCount: events.filter(e => e.status === 'ACKNOWLEDGED').length,
    inProgressCount: events.filter(e => e.status === 'IN_PROGRESS').length,
    verifyingCount: events.filter(e => e.status === 'VERIFYING').length,
    closedCount: events.filter(e => e.status === 'CLOSED').length,
    overdueCount: events.filter(e => e.overdue).length,
    newInPeriodCount: events.filter(e => e.firstDetectedAt >= periodStart).length,
    reopenedCount: events.filter(e => e.reopened).length
  };

  const dayMs = 86400000;
  const ref = new Date(TODAY);
  const inWindow = (d, days) => {
    const dt = new Date(d);
    return (ref - dt) / dayMs <= days;
  };
  const buildTrend = (days) => {
    const slice = events.filter(e => inWindow(e.firstDetectedAt, days) || inWindow(e.lastUpdatedAt, days));
    return {
      periodDays: days,
      newCount: slice.filter(e => inWindow(e.firstDetectedAt, days)).length,
      closedCount: slice.filter(e => e.status === 'CLOSED' && inWindow(e.lastUpdatedAt, days)).length,
      overdueCount: slice.filter(e => e.overdue).length,
      reopenedCount: slice.filter(e => e.reopened && inWindow(e.lastUpdatedAt, days)).length
    };
  };
  APP_DATA.regulatoryEventTrends = { '7': buildTrend(7), '30': buildTrend(30), '90': buildTrend(90) };

  const scoreDims = (opts) => {
    const o = opts || {};
    const cov = o.dataCoverage === '已接入' ? 1 : o.dataCoverage === '部分接入' ? 0.65 : o.dataCoverage === '待完善' ? 0.45 : 0.3;
    const qual = o.dataQuality === '良好' ? 1 : o.dataQuality === '关注' ? 0.65 : 0.35;
    const kri = o.kriExceptions === 0 ? 1 : Math.max(0.2, 1 - (o.kriExceptions || 0) * 0.12);
    const risk = o.riskCount === 0 ? 1 : Math.max(0.2, 1 - (o.highRiskCount || 0) * 0.15 - (o.riskCount || 0) * 0.05);
    const rect = o.openRects === 0 ? 1 : Math.max(0.25, 1 - (o.openRects || 0) * 0.12);
    const cb = o.cbStatus === '正常' || o.cbStatus === '不适用' ? 1 : o.cbStatus === '关注' || o.cbStatus === '待复核' ? 0.6 : 0.35;
    const cdr = o.cdrCount === 0 ? 1 : Math.max(0.3, 1 - (o.cdrCount || 0) * 0.2);
    const avg = (cov + qual + kri + risk + rect + cb + cdr) / 7;
    const level = avg >= 0.85 ? 'HEALTHY' : avg >= 0.7 ? 'ATTENTION' : avg >= 0.5 ? 'WARNING' : 'CRITICAL';
    return { score: Math.round(avg * 100), level, dimensions: { dataCoverage: cov, dataQuality: qual, kriHealth: kri, riskHealth: risk, rectificationHealth: rect, crossBorderHealth: cb, crossDomainHealth: cdr } };
  };

  const entityHealth = (APP_DATA.globalLegalEntities || []).map(e => {
    const cdr = (APP_DATA.crossDomainRiskMatters || []).filter(m => (m.entityIds || []).includes(e.entityId)).length;
    const h = scoreDims({ dataCoverage: e.dataCoverageStatus || e.dataAccessStatus, dataQuality: e.dataQualityStatus, kriExceptions: e.kriExceptionCount, riskCount: e.riskCount, highRiskCount: e.highRiskCount, openRects: e.openRectificationCount || e.rectificationCount, cbStatus: e.crossBorderComplianceStatus, cdrCount: cdr });
    return { objectType: 'entity', objectId: e.entityId, objectName: e.entityName, regionId: e.regionId, countryId: e.countryId, ...h };
  });
  const regionHealth = (APP_DATA.globalRegions || []).map(r => {
    const ents = (APP_DATA.globalLegalEntities || []).filter(e => e.regionId === r.regionId);
    const avg = ents.length ? Math.round(ents.reduce((s, e) => s + (entityHealth.find(h => h.objectId === e.entityId) || { score: 50 }).score, 0) / ents.length) : 50;
    const level = avg >= 85 ? 'HEALTHY' : avg >= 70 ? 'ATTENTION' : avg >= 50 ? 'WARNING' : 'CRITICAL';
    return { objectType: 'region', objectId: r.regionId, objectName: r.regionName, score: avg, level, riskCount: r.riskCount, highRiskCount: r.highRiskCount };
  });
  const countryHealth = (APP_DATA.globalCountries || []).map(c => {
    const ents = (APP_DATA.globalLegalEntities || []).filter(e => e.countryId === c.countryId);
    const avg = ents.length ? Math.round(ents.reduce((s, e) => s + (entityHealth.find(h => h.objectId === e.entityId) || { score: 50 }).score, 0) / ents.length) : 50;
    const level = avg >= 85 ? 'HEALTHY' : avg >= 70 ? 'ATTENTION' : avg >= 50 ? 'WARNING' : 'CRITICAL';
    return { objectType: 'country', objectId: c.countryId, objectName: c.countryName, regionId: c.regionId, score: avg, level };
  });
  const projectHealth = (APP_DATA.globalProjects || []).map(p => {
    const ent = APP_DATA.globalLegalEntities.find(e => e.entityId === p.entityId);
    const h = scoreDims({ dataCoverage: p.dataCoverageStatus || p.dataAccessStatus, dataQuality: p.dataQualityStatus, kriExceptions: p.kriExceptionCount, riskCount: p.riskCount, highRiskCount: p.highRiskCount, openRects: p.openRectificationCount || p.rectificationCount, cbStatus: ent ? ent.crossBorderComplianceStatus : '关注', cdrCount: 0 });
    return { objectType: 'project', objectId: p.projectId, objectName: p.projectName, entityId: p.entityId, regionId: p.regionId, countryId: p.countryId, ...h };
  });
  APP_DATA.regulatoryHealthScores = { entities: entityHealth, regions: regionHealth, countries: countryHealth, projects: projectHealth };

  const rank = (items, scoreKey) => [...items].sort((a, b) => (b[scoreKey] || b.score || 0) - (a[scoreKey] || a.score || 0));
  const rects = APP_DATA.rectificationTasks || [];
  const closedRects = rects.filter(t => t.status === '已关闭' || t.closedAt);
  const entityRectEff = (APP_DATA.globalLegalEntities || []).map(e => {
    const tasks = rects.filter(t => t.entityId === e.entityId);
    const closed = tasks.filter(t => t.status === '已关闭' || t.closedAt).length;
    const rate = tasks.length ? Math.round(closed / tasks.length * 100) : 100;
    return { objectId: e.entityId, objectName: e.entityName, score: rate, taskCount: tasks.length, closedCount: closed };
  });
  APP_DATA.regulatoryEvaluation = {
    regionRankings: rank(regionHealth, 'score').map((r, i) => ({ rank: i + 1, objectId: r.objectId, objectName: r.objectName, score: r.score, level: r.level })),
    entityRankings: rank(entityHealth, 'score').map((e, i) => ({ rank: i + 1, objectId: e.objectId, objectName: e.objectName, score: e.score, level: e.level })),
    rectificationEfficiencyRankings: rank(entityRectEff, 'score').map((e, i) => ({ rank: i + 1, objectId: e.objectId, objectName: e.objectName, score: e.score, closedCount: e.closedCount, taskCount: e.taskCount })),
    dataGovernanceMaturity: Math.round((APP_DATA.dataSourceRegistry || []).filter(s => (s.qualityScore || 0) >= 90).length / Math.max(1, (APP_DATA.dataSourceRegistry || []).length) * 100),
    crossBorderComplianceMaturity: parseFloat((APP_DATA.crossBorderComplianceMetrics || {}).crossBorderComplianceRate) || 0,
    crossDomainRiskMaturity: Math.round((1 - (APP_DATA.crossDomainRiskMetrics || {}).highRiskMatterCount / Math.max(1, (APP_DATA.crossDomainRiskMetrics || {}).crossDomainMatterCount)) * 100),
    overallRectificationClosureRate: Math.round(closedRects.length / Math.max(1, rects.length) * 100)
  };
})();

(function () {
  const TODAY = '2026-07-22';
  const events = APP_DATA.regulatoryEvents || [];
  const entities = APP_DATA.globalLegalEntities || [];
  const health = APP_DATA.regulatoryHealthScores || {};
  const entityHealth = health.entities || [];
  const warnings = APP_DATA.warnings || [];
  const rects = APP_DATA.rectificationTasks || [];
  const quality = APP_DATA.dataQualityIssues || [];
  const cbActs = APP_DATA.crossBorderDataActivities || [];
  const cdrMatters = APP_DATA.crossDomainRiskMatters || [];

  const calcPriority = (entityId) => {
    const ent = entities.find(e => e.entityId === entityId);
    const h = entityHealth.find(x => x.objectId === entityId);
    if (!ent) return { priority: 'LOW', score: 0, factors: [], recommendedAction: '—' };
    const evts = events.filter(e => e.entityId === entityId);
    const highEvts = evts.filter(e => e.riskLevel === 'HIGH');
    const majorWarn = warnings.filter(w => w.entityId === entityId && w.level === '重大');
    const entRects = rects.filter(t => t.entityId === entityId);
    const overdue = entRects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭' && !t.closedAt);
    const longOpen = entRects.filter(t => t.status !== '已关闭' && !t.closedAt && (t.progress || 0) < 50);
    const objs = (APP_DATA.dataObjects || []).filter(o => o.entityId === entityId);
    const qualCount = quality.filter(q => objs.some(o => o.objectId === q.objectId)).length;
    const cbRisk = cbActs.filter(a => a.entityId === entityId && (a.complianceStatus === '高风险' || a.complianceStatus === '异常')).length;
    const cdrCount = cdrMatters.filter(m => (m.entityIds || []).includes(entityId)).length;
    const factors = [];
    let score = 0;
    if (highEvts.length) { score += highEvts.length * 12; factors.push(`高风险事件${highEvts.length}项`); }
    if (majorWarn.length) { score += majorWarn.length * 10; factors.push(`重大风险${majorWarn.length}项`); }
    if (overdue.length) { score += overdue.length * 18; factors.push(`超期整改${overdue.length}项`); }
    if (longOpen.length) { score += longOpen.length * 8; factors.push(`长期未关闭${longOpen.length}项`); }
    if (qualCount) { score += qualCount * 6; factors.push(`数据质量异常${qualCount}项`); }
    if ((ent.kriExceptionCount || 0) > 0) { score += ent.kriExceptionCount * 5; factors.push(`KRI异常${ent.kriExceptionCount}项`); }
    if (cbRisk) { score += cbRisk * 10; factors.push(`跨境合规风险${cbRisk}项`); }
    if (cdrCount) { score += cdrCount * 8; factors.push(`跨领域风险${cdrCount}项`); }
    if (h && h.level === 'CRITICAL') { score += 25; factors.push('健康度CRITICAL'); }
    else if (h && h.level === 'WARNING') { score += 12; factors.push('健康度WARNING'); }
    const priority = score >= 55 ? 'CRITICAL' : score >= 35 ? 'HIGH' : score >= 18 ? 'MEDIUM' : 'LOW';
    const recommendedAction = priority === 'CRITICAL' ? '建议集团重点监管' : priority === 'HIGH' ? '建议专项督办' : priority === 'MEDIUM' ? '建议加强监测' : '建议常规监测';
    return { priority, score, factors, recommendedAction, entityId };
  };

  const priorities = {};
  entities.forEach(e => { priorities[e.entityId] = calcPriority(e.entityId); });
  APP_DATA.regulatoryPriorities = priorities;

  const concentrationBy = (keyFn, labelFn) => {
    const map = {};
    events.forEach(ev => {
      const k = keyFn(ev);
      if (!k) return;
      if (!map[k]) map[k] = { key: k, label: labelFn(k, ev), eventCount: 0, highRiskCount: 0, overdueRectCount: 0, healthLevel: 'HEALTHY', concentration: 0 };
      map[k].eventCount++;
      if (ev.riskLevel === 'HIGH') map[k].highRiskCount++;
    });
    rects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭').forEach(t => {
      const k = keyFn({ entityId: t.entityId, regionId: t.regionId, projectId: t.projectId, domainId: t.domainId || 'investment' });
      if (k && map[k]) map[k].overdueRectCount++;
    });
    Object.values(map).forEach(item => {
      if (item.key.startsWith('E:')) {
        const h = entityHealth.find(x => x.objectId === item.key.slice(2));
        if (h) item.healthLevel = h.level;
      } else if (item.key.startsWith('R:')) {
        const h = (health.regions || []).find(x => x.objectId === item.key.slice(2));
        if (h) item.healthLevel = h.level;
      }
      item.concentration = Math.round((item.highRiskCount * 3 + item.overdueRectCount * 2 + item.eventCount) / Math.max(1, events.length) * 100);
    });
    return Object.values(map).sort((a, b) => b.concentration - a.concentration);
  };

  APP_DATA.regulatoryRiskConcentration = {
    regions: concentrationBy(ev => ev.regionId ? 'R:' + ev.regionId : null, k => (APP_DATA.globalRegions.find(r => r.regionId === k.slice(2)) || {}).regionName || k),
    countries: concentrationBy(ev => ev.countryId ? 'C:' + ev.countryId : null, k => (APP_DATA.globalCountries.find(c => c.countryId === k.slice(2)) || {}).countryName || k),
    entities: concentrationBy(ev => ev.entityId ? 'E:' + ev.entityId : null, k => (entities.find(e => e.entityId === k.slice(2)) || {}).entityName || k),
    projects: concentrationBy(ev => ev.projectId ? 'P:' + ev.projectId : null, k => (APP_DATA.globalProjects.find(p => p.projectId === k.slice(2)) || {}).projectName || k),
    domains: concentrationBy(ev => ev.domainId ? 'D:' + ev.domainId : null, k => (APP_DATA.regulationDomains.find(d => d.id === k.slice(2)) || {}).name || k),
    scenarios: concentrationBy(ev => ev.scenarioId ? 'S:' + ev.scenarioId : null, k => {
      const s = APP_DATA.groupRiskScenarios.find(x => x.id === k.slice(2)) || APP_DATA.crossBorderRiskScenarios.find(x => x.id === k.slice(2));
      return s ? s.name : k;
    })
  };

  const strategyLevel = (opts) => {
    const o = opts || {};
    if ((o.highRiskEvents || 0) >= 2 && o.healthLevel === 'CRITICAL' && (o.overdueRects || 0) >= 1) return 'FOCUS';
    if ((o.cdrCount || 0) >= 1 || (o.highRiskEvents || 0) >= 1 || o.healthLevel === 'WARNING') return 'SPECIAL';
    if ((o.eventCount || 0) >= 1 || o.healthLevel === 'ATTENTION') return 'ROUTINE';
    return 'OBSERVE';
  };

  APP_DATA.regulatoryStrategyAnalysis = {
    regions: (APP_DATA.globalRegions || []).map(r => {
      const evts = events.filter(e => e.regionId === r.regionId);
      const h = (health.regions || []).find(x => x.objectId === r.regionId);
      const overdue = rects.filter(t => t.regionId === r.regionId && t.deadline && t.deadline < TODAY && t.status !== '已关闭').length;
      const level = strategyLevel({ highRiskEvents: evts.filter(e => e.riskLevel === 'HIGH').length, healthLevel: h ? h.level : 'HEALTHY', overdueRects: overdue, eventCount: evts.length });
      const label = level === 'FOCUS' ? '重点监管区域' : level === 'SPECIAL' ? '专项监管区域' : level === 'ROUTINE' ? '常规监管区域' : '持续观察区域';
      return { objectType: 'region', objectId: r.regionId, objectName: r.regionName, strategyLevel: level, strategyLabel: label, eventCount: evts.length, healthLevel: h ? h.level : '—', overdueRects: overdue, sourceEventIds: evts.map(e => e.eventId) };
    }),
    entities: entities.filter(e => e.entityId !== 'G001').map(e => {
      const p = priorities[e.entityId] || calcPriority(e.entityId);
      const h = entityHealth.find(x => x.objectId === e.entityId);
      const level = strategyLevel({ highRiskEvents: events.filter(ev => ev.entityId === e.entityId && ev.riskLevel === 'HIGH').length, healthLevel: h ? h.level : 'HEALTHY', overdueRects: rects.filter(t => t.entityId === e.entityId && t.deadline && t.deadline < TODAY && t.status !== '已关闭').length, cdrCount: cdrMatters.filter(m => (m.entityIds || []).includes(e.entityId)).length, eventCount: events.filter(ev => ev.entityId === e.entityId).length });
      const label = level === 'FOCUS' ? '重点监管' : level === 'SPECIAL' ? '专项整改' : level === 'ROUTINE' ? '常规监测' : '低频监测';
      return { objectType: 'entity', objectId: e.entityId, objectName: e.entityName, regionId: e.regionId, strategyLevel: level, strategyLabel: label, priority: p.priority, healthLevel: h ? h.level : '—', sourceEventIds: events.filter(ev => ev.entityId === e.entityId).map(ev => ev.eventId) };
    }),
    domains: (APP_DATA.regulationDomains || []).map(d => {
      const evts = events.filter(e => e.domainId === d.id);
      const level = strategyLevel({ highRiskEvents: evts.filter(e => e.riskLevel === 'HIGH').length, eventCount: evts.length, healthLevel: evts.length > 3 ? 'WARNING' : 'HEALTHY' });
      return { objectType: 'domain', objectId: d.id, objectName: d.name, strategyLevel: level, strategyLabel: level === 'FOCUS' ? '重点领域' : level === 'SPECIAL' ? '专项领域' : level === 'ROUTINE' ? '常规领域' : '观察领域', eventCount: evts.length, sourceEventIds: evts.map(e => e.eventId) };
    })
  };

  const actions = [];
  let aSeq = 1;
  const mkAction = (base) => {
    actions.push({
      actionId: 'ACT' + String(aSeq++).padStart(3, '0'),
      actionType: base.actionType,
      priority: base.priority,
      entityId: base.entityId || null,
      regionId: base.regionId || null,
      projectId: base.projectId || null,
      domainId: base.domainId || null,
      sourceEventIds: base.sourceEventIds || [],
      sourceRiskMatterIds: base.sourceRiskMatterIds || [],
      sourceRectificationTaskIds: base.sourceRectificationTaskIds || [],
      recommendedAction: base.recommendedAction,
      status: base.status || 'PENDING',
      triggerReason: base.triggerReason || ''
    });
  };

  entities.filter(e => e.entityId !== 'G001').forEach(e => {
    const p = priorities[e.entityId];
    if (!p || p.priority === 'LOW') return;
    const evts = events.filter(ev => ev.entityId === e.entityId);
    const entRects = rects.filter(t => t.entityId === e.entityId && t.status !== '已关闭');
    const qualEvts = evts.filter(ev => ev.eventType === 'DATA_QUALITY');
    const cbEvts = evts.filter(ev => ev.eventType === 'CROSS_BORDER');
    const cdrEvts = evts.filter(ev => ev.eventType === 'CROSS_DOMAIN');
    if (p.priority === 'CRITICAL' || p.priority === 'HIGH') {
      mkAction({ actionType: 'FOCUS_SUPERVISION', priority: p.priority, entityId: e.entityId, regionId: e.regionId, domainId: 'investment', sourceEventIds: evts.map(x => x.eventId), sourceRiskMatterIds: warnings.filter(w => w.entityId === e.entityId).map(w => w.id), sourceRectificationTaskIds: entRects.map(t => t.taskId), recommendedAction: p.recommendedAction, triggerReason: p.factors.join('；'), status: entRects.length ? 'IN_PROGRESS' : 'PENDING' });
    }
    if (entRects.some(t => t.deadline && t.deadline < TODAY)) {
      mkAction({ actionType: 'ESCALATE_RECTIFICATION', priority: 'HIGH', entityId: e.entityId, regionId: e.regionId, sourceEventIds: evts.filter(x => x.rectificationTaskId).map(x => x.eventId), sourceRiskMatterIds: warnings.filter(w => w.entityId === e.entityId && w.rectificationTaskId).map(w => w.id), sourceRectificationTaskIds: entRects.filter(t => t.deadline && t.deadline < TODAY).map(t => t.taskId), recommendedAction: '升级督办超期整改任务', triggerReason: '存在超期整改', status: 'PENDING' });
    }
    if (qualEvts.length) {
      mkAction({ actionType: 'DATA_QUALITY_REMEDIATION', priority: p.priority, entityId: e.entityId, regionId: e.regionId, sourceEventIds: qualEvts.map(x => x.eventId), sourceRiskMatterIds: qualEvts.map(x => x.riskMatterId).filter(Boolean), sourceRectificationTaskIds: qualEvts.map(x => x.rectificationTaskId).filter(Boolean), recommendedAction: '推进数据质量专项治理', triggerReason: '数据质量异常', status: 'PENDING' });
    }
    if (cbEvts.length) {
      mkAction({ actionType: 'CROSS_BORDER_REVIEW', priority: 'HIGH', entityId: e.entityId, regionId: e.regionId, sourceEventIds: cbEvts.map(x => x.eventId), sourceRiskMatterIds: cbEvts.map(x => x.riskMatterId).filter(Boolean), sourceRectificationTaskIds: cbEvts.map(x => x.rectificationTaskId).filter(Boolean), recommendedAction: '开展跨境数据合规专项审查', triggerReason: '跨境合规异常', status: 'PENDING' });
    }
    if (cdrEvts.length) {
      mkAction({ actionType: 'CROSS_DOMAIN_COORDINATION', priority: 'HIGH', entityId: e.entityId, regionId: e.regionId, sourceEventIds: cdrEvts.map(x => x.eventId), sourceRiskMatterIds: cdrMatters.filter(m => (m.entityIds || []).includes(e.entityId)).map(m => m.riskMatterId), sourceRectificationTaskIds: cdrMatters.filter(m => (m.entityIds || []).includes(e.entityId)).flatMap(m => m.relatedRectificationTaskIds || []), recommendedAction: '启动跨领域协同监管', triggerReason: '跨领域风险传导', status: 'PENDING' });
    }
    if ((e.kriExceptionCount || 0) > 0) {
      const kriEvts = evts.filter(x => x.kriId);
      mkAction({ actionType: 'KRI_MONITORING', priority: p.priority, entityId: e.entityId, regionId: e.regionId, sourceEventIds: kriEvts.map(x => x.eventId), sourceRiskMatterIds: warnings.filter(w => w.entityId === e.entityId && w.kriId).map(w => w.id), sourceRectificationTaskIds: entRects.map(t => t.taskId), recommendedAction: '加强KRI异常监测', triggerReason: `KRI异常${e.kriExceptionCount}项`, status: 'PENDING' });
    }
  });
  if (actions[0]) actions[0].status = 'IN_PROGRESS';
  if (actions[1]) actions[1].status = 'COMPLETED';
  APP_DATA.regulatoryActions = actions;

  const hs = health;
  const warnCrit = entityHealth.filter(e => e.level === 'WARNING' || e.level === 'CRITICAL');
  APP_DATA.regulatoryCommandCenterMetrics = {
    objectCount: entities.length,
    highRiskObjectCount: entities.filter(e => (e.highRiskCount || 0) > 0).length,
    majorEventCount: events.filter(e => e.riskLevel === 'HIGH').length,
    overdueRectCount: rects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭').length,
    healthWarningCount: warnCrit.length,
    qualityAnomalyCount: quality.length,
    crossBorderAnomalyCount: cbActs.filter(a => a.complianceStatus === '高风险' || a.complianceStatus === '异常').length,
    crossDomainCount: cdrMatters.length,
    pendingActionCount: actions.filter(a => a.status === 'PENDING').length,
    highPriorityActionCount: actions.filter(a => a.priority === 'CRITICAL' || a.priority === 'HIGH').length
  };

  const rankedObjects = entities.filter(e => e.entityId !== 'G001').map(e => {
    const p = priorities[e.entityId];
    const evts = events.filter(ev => ev.entityId === e.entityId);
    const h = entityHealth.find(x => x.objectId === e.entityId);
    const entRects = rects.filter(t => t.entityId === e.entityId);
    return {
      rank: 0, objectId: e.entityId, objectName: e.entityName, objectType: '法人',
      regionId: e.regionId, countryId: e.countryId,
      regionName: e.regionName, countryName: e.countryName,
      eventCount: evts.length, highRiskEventCount: evts.filter(x => x.riskLevel === 'HIGH').length,
      openRectCount: entRects.filter(t => t.status !== '已关闭' && !t.closedAt).length,
      overdueRectCount: entRects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭').length,
      healthLevel: h ? h.level : '—', priority: p ? p.priority : 'LOW', priorityScore: p ? p.score : 0
    };
  }).sort((a, b) => b.priorityScore - a.priorityScore);
  rankedObjects.forEach((o, i) => { o.rank = i + 1; });
  APP_DATA.regulatoryPriorityObjects = rankedObjects;
})();

(function () {
  const TODAY = '2026-07-22';
  const actions = APP_DATA.regulatoryActions || [];
  const entities = APP_DATA.globalLegalEntities || [];
  const rects = APP_DATA.rectificationTasks || [];
  const events = APP_DATA.regulatoryEvents || [];
  const warnings = APP_DATA.warnings || [];
  const quality = APP_DATA.dataQualityIssues || [];
  const strategy = APP_DATA.regulatoryStrategyAnalysis || {};
  const dayDiff = (a, b) => {
    if (!a || !b) return null;
    return Math.round((new Date(b) - new Date(a)) / 86400000);
  };

  actions.forEach((act, idx) => {
    const ent = entities.find(e => e.entityId === act.entityId);
    const strat = (strategy.entities || []).find(s => s.objectId === act.entityId);
    const evts = (act.sourceEventIds || []).map(id => events.find(e => e.eventId === id)).filter(Boolean);
    const linkedRect = rects.find(t => (act.sourceRectificationTaskIds || []).includes(t.taskId));
    const statusMap = {
      PENDING: idx % 3 === 0 ? 'RECOMMENDED' : 'ASSIGNED',
      IN_PROGRESS: idx % 2 === 0 ? 'IN_PROGRESS' : 'WAITING_FEEDBACK',
      COMPLETED: idx % 2 === 0 ? 'VERIFIED' : 'COMPLETED',
      OVERDUE: 'OVERDUE'
    };
    let newStatus = statusMap[act.status] || act.status || 'RECOMMENDED';
    act.countryId = act.countryId || (ent ? ent.countryId : null);
    act.strategyLevel = strat ? strat.strategyLevel : 'OBSERVE';
    act.sourceKriIds = [...new Set(evts.map(e => e.kriId).filter(Boolean))];
    act.sourceQualityIssueIds = evts.filter(e => e.eventType === 'DATA_QUALITY').map(e => e.sourceObjectId).filter(Boolean);
    act.responsibleEntity = act.responsibleEntity || act.entityId;
    act.responsibleDepartment = (warnings.find(w => w.entityId === act.entityId) || {}).responsibleDepartment || (ent ? ent.responsibleDepartment : null) || '投资管理部';
    act.collaboratingDepartments = (APP_DATA.crossDomainResponsibilities || []).filter(r => r.entityId === act.entityId).flatMap(r => r.collaboratingDepartments || []);
    act.createdAt = act.createdAt || '2026-07-01';
    act.dueDate = act.dueDate || (linkedRect ? linkedRect.deadline : '2026-08-30');
    act.completedAt = ['COMPLETED', 'VERIFIED'].includes(newStatus) ? '2026-07-20' : null;
    act.verifiedAt = newStatus === 'VERIFIED' ? '2026-07-21' : null;
    act.executionProgress = newStatus === 'VERIFIED' ? 100 : newStatus === 'COMPLETED' ? 95 : newStatus === 'IN_PROGRESS' ? 55 : newStatus === 'WAITING_FEEDBACK' ? 80 : newStatus === 'ASSIGNED' ? 15 : 0;
    act.verificationStatus = newStatus === 'VERIFIED' ? 'PASSED' : newStatus === 'COMPLETED' ? 'PENDING' : 'PENDING';
    act.feedbackRequired = ['IN_PROGRESS', 'WAITING_FEEDBACK', 'COMPLETED'].includes(newStatus);
    act.feedbackStatus = newStatus === 'WAITING_FEEDBACK' ? 'SUBMITTED' : newStatus === 'VERIFIED' ? 'ACCEPTED' : 'DRAFT';
    act.status = newStatus;
    if (act.dueDate && act.dueDate < TODAY && !['COMPLETED', 'VERIFIED', 'CANCELLED'].includes(act.status)) act.status = 'OVERDUE';
  });
  if (actions[0]) { actions[0].status = 'IN_PROGRESS'; actions[0].executionProgress = 60; actions[0].feedbackRequired = true; actions[0].feedbackStatus = 'DRAFT'; }
  if (actions[1]) { actions[1].status = 'VERIFIED'; actions[1].executionProgress = 100; actions[1].completedAt = '2026-07-20'; actions[1].verifiedAt = '2026-07-21'; actions[1].verificationStatus = 'PASSED'; actions[1].feedbackStatus = 'ACCEPTED'; }
  if (actions[2]) { actions[2].status = 'WAITING_FEEDBACK'; actions[2].executionProgress = 80; actions[2].feedbackStatus = 'SUBMITTED'; }
  if (actions[3]) { actions[3].status = 'OVERDUE'; actions[3].executionProgress = 40; }

  const feedbacks = [];
  let fSeq = 1;
  actions.forEach(act => {
    if (!['RECOMMENDED', 'ASSIGNED', 'CANCELLED'].includes(act.status)) {
      feedbacks.push({
        feedbackId: 'FB' + String(fSeq++).padStart(3, '0'),
        actionId: act.actionId,
        feedbackType: act.status === 'VERIFIED' ? 'VERIFICATION_RESULT' : act.status === 'COMPLETED' ? 'COMPLETION_SUBMISSION' : act.status === 'REOPENED' ? 'REOPEN_REASON' : 'PROGRESS_UPDATE',
        feedbackStatus: act.feedbackStatus || 'SUBMITTED',
        submittedBy: act.responsibleDepartment,
        submittedAt: act.status === 'VERIFIED' ? '2026-07-21' : '2026-07-18',
        progressBefore: Math.max(0, (act.executionProgress || 0) - 20),
        progressAfter: act.executionProgress || 0,
        resultSummary: act.recommendedAction,
        evidenceDescription: '执行记录与佐证材料已上传',
        verificationStatus: act.verificationStatus || 'PENDING',
        verifiedBy: act.verificationStatus === 'PASSED' ? '集团监管部' : null,
        verifiedAt: act.verifiedAt,
        relatedRectificationTaskIds: act.sourceRectificationTaskIds || []
      });
    }
  });
  APP_DATA.regulatoryActionFeedbacks = feedbacks;

  const decisions = [];
  let dSeq = 1;
  entities.filter(e => e.entityId !== 'G001').forEach(ent => {
    const p = APP_DATA.regulatoryPriorities[ent.entityId];
    if (!p || p.priority === 'LOW') return;
    decisions.push({
      decisionId: 'DEC' + String(dSeq++).padStart(3, '0'),
      entityId: ent.entityId,
      regionId: ent.regionId,
      countryId: ent.countryId,
      decisionType: 'PRIORITY_CHANGE',
      previousValue: 'MEDIUM',
      currentValue: p.priority,
      reason: (p.factors || []).join('；'),
      sourceEventIds: events.filter(e => e.entityId === ent.entityId).map(e => e.eventId),
      sourceActionIds: actions.filter(a => a.entityId === ent.entityId).map(a => a.actionId),
      sourceRectificationTaskIds: rects.filter(t => t.entityId === ent.entityId).map(t => t.taskId),
      occurredAt: '2026-07-20'
    });
  });
  actions.forEach(act => {
    decisions.push({
      decisionId: 'DEC' + String(dSeq++).padStart(3, '0'),
      entityId: act.entityId,
      regionId: act.regionId,
      countryId: act.countryId,
      decisionType: act.status === 'VERIFIED' ? 'ACTION_CLOSED' : 'ACTION_CREATED',
      previousValue: act.status === 'VERIFIED' ? 'COMPLETED' : null,
      currentValue: act.status,
      reason: act.triggerReason || act.recommendedAction,
      sourceEventIds: act.sourceEventIds || [],
      sourceActionIds: [act.actionId],
      sourceRectificationTaskIds: act.sourceRectificationTaskIds || [],
      occurredAt: act.createdAt
    });
  });
  (strategy.regions || []).filter(r => r.strategyLevel !== 'OBSERVE').forEach(r => {
    decisions.push({
      decisionId: 'DEC' + String(dSeq++).padStart(3, '0'),
      regionId: r.objectId,
      decisionType: 'STRATEGY_CHANGE',
      previousValue: 'ROUTINE',
      currentValue: r.strategyLevel,
      reason: `区域风险事件${r.eventCount}项`,
      sourceEventIds: r.sourceEventIds || [],
      sourceActionIds: [],
      sourceRectificationTaskIds: [],
      occurredAt: '2026-07-19'
    });
  });
  (APP_DATA.regulatoryHealthScores || {}).entities?.filter(h => h.level === 'WARNING' || h.level === 'CRITICAL').forEach(h => {
    decisions.push({
      decisionId: 'DEC' + String(dSeq++).padStart(3, '0'),
      entityId: h.objectId,
      decisionType: 'HEALTH_CHANGE',
      previousValue: 'ATTENTION',
      currentValue: h.level,
      reason: `健康度降至${h.level}`,
      sourceEventIds: events.filter(e => e.entityId === h.objectId).map(e => e.eventId),
      sourceActionIds: actions.filter(a => a.entityId === h.objectId).map(a => a.actionId),
      sourceRectificationTaskIds: [],
      occurredAt: '2026-07-21'
    });
  });
  APP_DATA.regulatoryDecisionHistory = decisions;

  const statusCount = s => actions.filter(a => a.status === s).length;
  APP_DATA.regulatoryActionExecutionMetrics = {
    total: actions.length,
    recommended: statusCount('RECOMMENDED'),
    assigned: statusCount('ASSIGNED'),
    inProgress: statusCount('IN_PROGRESS'),
    waitingFeedback: statusCount('WAITING_FEEDBACK'),
    completed: statusCount('COMPLETED'),
    verified: statusCount('VERIFIED'),
    cancelled: statusCount('CANCELLED'),
    overdue: statusCount('OVERDUE'),
    reopened: statusCount('REOPENED')
  };

  const completedActions = actions.filter(a => ['COMPLETED', 'VERIFIED'].includes(a.status));
  const onTimeActions = completedActions.filter(a => a.completedAt && a.dueDate && a.completedAt <= a.dueDate);
  const verifiedActions = actions.filter(a => a.status === 'VERIFIED');
  const reopenedActions = actions.filter(a => a.status === 'REOPENED' || a.verificationStatus === 'REOPENED');
  const execDays = completedActions.map(a => dayDiff(a.createdAt, a.completedAt)).filter(d => d !== null);
  const fbDays = feedbacks.map(f => {
    const act = actions.find(a => a.actionId === f.actionId);
    return act ? dayDiff(act.createdAt, f.submittedAt) : null;
  }).filter(d => d !== null);
  const mkEff = (list, keyFn, labelKey) => {
    const map = {};
    list.forEach(a => {
      const k = keyFn(a);
      if (!k) return;
      if (!map[k]) map[k] = { [labelKey]: k, actionCount: 0, completedCount: 0, overdueCount: 0, verifiedCount: 0 };
      map[k].actionCount++;
      if (['COMPLETED', 'VERIFIED'].includes(a.status)) map[k].completedCount++;
      if (a.status === 'OVERDUE') map[k].overdueCount++;
      if (a.status === 'VERIFIED') map[k].verifiedCount++;
    });
    return Object.values(map).map(x => ({
      ...x,
      completionRate: x.actionCount ? Math.round(x.completedCount / x.actionCount * 100) : 0,
      onTimeRate: x.completedCount ? Math.round(x.verifiedCount / Math.max(1, x.completedCount) * 100) : 0,
      overdueRate: x.actionCount ? Math.round(x.overdueCount / x.actionCount * 100) : 0,
      verificationPassRate: x.completedCount ? Math.round(x.verifiedCount / x.completedCount * 100) : 0,
      reopenRate: x.actionCount ? Math.round(actions.filter(a => keyFn(a) === x[labelKey] && (a.status === 'REOPENED' || a.verificationStatus === 'REOPENED')).length / x.actionCount * 100) : 0
    }));
  };
  APP_DATA.regulatoryActionEfficiency = {
    overall: {
      completionRate: actions.length ? Math.round(completedActions.length / actions.length * 100) : 0,
      onTimeRate: completedActions.length ? Math.round(onTimeActions.length / completedActions.length * 100) : 0,
      avgExecutionDays: execDays.length ? Math.round(execDays.reduce((s, d) => s + d, 0) / execDays.length) : 0,
      avgFeedbackDays: fbDays.length ? Math.round(fbDays.reduce((s, d) => s + d, 0) / fbDays.length) : 0,
      verificationPassRate: completedActions.length ? Math.round(verifiedActions.length / completedActions.length * 100) : 0,
      reopenRate: actions.length ? Math.round(reopenedActions.length / actions.length * 100) : 0,
      overdueRate: actions.length ? Math.round(statusCount('OVERDUE') / actions.length * 100) : 0
    },
    byRegion: mkEff(actions, a => {
      const r = APP_DATA.globalRegions.find(x => x.regionId === a.regionId);
      return r ? r.regionName : null;
    }, 'regionName'),
    byEntity: mkEff(actions, a => {
      const e = entities.find(x => x.entityId === a.entityId);
      return e ? e.entityName : null;
    }, 'entityName'),
    byDepartment: mkEff(actions, a => a.responsibleDepartment, 'department'),
    byActionType: mkEff(actions, a => a.actionType, 'actionType'),
    byPriority: mkEff(actions, a => a.priority, 'priority')
  };

  const recalcPriority = (entityId) => {
    const base = APP_DATA.regulatoryPriorities[entityId] || { priority: 'LOW', score: 0, factors: [], recommendedAction: '—' };
    const entActions = actions.filter(a => a.entityId === entityId);
    const verified = entActions.filter(a => a.status === 'VERIFIED').length;
    const overdue = entActions.filter(a => a.status === 'OVERDUE').length;
    const pending = entActions.filter(a => ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS', 'WAITING_FEEDBACK'].includes(a.status)).length;
    const reopened = entActions.filter(a => a.status === 'REOPENED').length;
    const openRects = rects.filter(t => t.entityId === entityId && t.status !== '已关闭' && !t.closedAt);
    const verifiedRects = rects.filter(t => t.entityId === entityId && (t.status === '已关闭' || t.closedAt));
    let score = base.score;
    const factors = [...(base.factors || [])];
    const hist = decisions.filter(d => d.entityId === entityId && d.decisionType === 'PRIORITY_CHANGE');
    if (verified > 0) { score = Math.max(0, score - verified * 5); factors.push(`已完成验证行动${verified}项`); }
    if (verifiedRects.length) { score = Math.max(0, score - verifiedRects.length * 3); factors.push(`整改验证通过${verifiedRects.length}项`); }
    if (overdue > 0) { score += overdue * 10; factors.push(`逾期行动${overdue}项`); }
    if (reopened > 0) { score += reopened * 8; factors.push(`重开行动${reopened}项`); }
    if (pending > 0 && verified === 0) factors.push(`待完成行动${pending}项`);
    const newEvents = events.filter(e => e.entityId === entityId && e.reopened);
    if (newEvents.length) { score += newEvents.length * 6; factors.push(`风险重新发生${newEvents.length}项`); }
    const priority = score >= 55 ? 'CRITICAL' : score >= 35 ? 'HIGH' : score >= 18 ? 'MEDIUM' : 'LOW';
    return {
      ...base,
      entityId,
      priority,
      score,
      factors: [...new Set(factors)],
      previousPriority: hist[0] ? hist[0].previousValue : base.priority,
      priorityChangeReason: factors.join('；'),
      completedActions: verified,
      pendingActions: pending,
      openRectificationCount: openRects.length,
      relatedActionIds: entActions.map(a => a.actionId),
      triggerEventIds: events.filter(e => e.entityId === entityId).map(e => e.eventId).slice(0, 5),
      recommendedAction: priority === 'CRITICAL' ? '建议集团重点监管' : priority === 'HIGH' ? '建议专项督办' : priority === 'MEDIUM' ? '建议加强监测' : '建议常规监测'
    };
  };
  const recalcPriorities = {};
  entities.forEach(e => { recalcPriorities[e.entityId] = recalcPriority(e.entityId); });
  APP_DATA.regulatoryPrioritiesRecalculated = recalcPriorities;
  (APP_DATA.regulatoryPriorityObjects || []).forEach(o => {
    const r = recalcPriorities[o.objectId];
    if (r) { o.priority = r.priority; o.priorityScore = r.score; o.previousPriority = r.previousPriority; }
  });

  const m = APP_DATA.regulatoryCommandCenterMetrics || {};
  const eff = APP_DATA.regulatoryActionEfficiency.overall;
  m.actionCompletionRate = eff.completionRate;
  m.actionOnTimeRate = eff.onTimeRate;
  m.actionVerificationPassRate = eff.verificationPassRate;
  m.actionOverdueRate = eff.overdueRate;
  m.actionReopenRate = eff.reopenRate;
  m.pendingDecisionCount = actions.filter(a => ['RECOMMENDED', 'ASSIGNED', 'OVERDUE'].includes(a.status)).length;
  m.waitingVerificationCount = actions.filter(a => a.status === 'COMPLETED').length;
  m.newActionsThisPeriod = actions.filter(a => a.createdAt >= '2026-07-15').length;
  m.completedActionsThisPeriod = completedActions.filter(a => a.completedAt && a.completedAt >= '2026-07-15').length;
  m.closedActionsThisPeriod = verifiedActions.filter(a => a.verifiedAt && a.verifiedAt >= '2026-07-15').length;
  m.reopenedActionsThisPeriod = reopenedActions.length;
  m.strategyChangesThisPeriod = decisions.filter(d => d.decisionType === 'STRATEGY_CHANGE').length;
  m.priorityChangesThisPeriod = decisions.filter(d => d.decisionType === 'PRIORITY_CHANGE').length;
  m.decisionLoop = {
    discover: events.length,
    judge: Object.keys(APP_DATA.regulatoryPriorities || {}).filter(k => APP_DATA.regulatoryPriorities[k].priority !== 'LOW').length,
    decide: actions.length,
    execute: actions.filter(a => ['IN_PROGRESS', 'WAITING_FEEDBACK', 'COMPLETED', 'VERIFIED'].includes(a.status)).length,
    verify: feedbacks.filter(f => f.verificationStatus === 'PASSED').length,
    evaluate: Object.keys(recalcPriorities).filter(k => recalcPriorities[k].priority !== 'LOW').length
  };
  m.pendingActionCount = actions.filter(a => ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS', 'WAITING_FEEDBACK', 'OVERDUE'].includes(a.status)).length;
  APP_DATA.regulatoryCommandCenterMetrics = m;
})();

(function () {
  const entities = APP_DATA.globalLegalEntities || [];
  const projects = APP_DATA.globalProjects || [];
  const regions = APP_DATA.globalRegions || [];
  const sources = APP_DATA.dataSourceRegistry || [];
  const objects = APP_DATA.dataObjects || [];
  const fields = APP_DATA.dataFields || [];
  const quality = APP_DATA.dataQualityIssues || [];
  const gaps = APP_DATA.coverageGaps || [];
  const matrix = APP_DATA.coverageMatrixCells || [];
  const kris = APP_DATA.groupKris || [];
  const scenarios = APP_DATA.groupRiskScenarios || [];
  const cbScenarios = APP_DATA.crossBorderRiskScenarios || [];
  const events = APP_DATA.regulatoryEvents || [];
  const warnings = APP_DATA.warnings || [];
  const rects = APP_DATA.rectificationTasks || [];
  const actions = APP_DATA.regulatoryActions || [];
  const feedbacks = APP_DATA.regulatoryActionFeedbacks || [];
  const decisions = APP_DATA.regulatoryDecisionHistory || [];
  const cbActs = APP_DATA.crossBorderDataActivities || [];
  const cdrMatters = APP_DATA.crossDomainRiskMatters || [];
  const domains = APP_DATA.regulationDomains || [];
  const eff = (APP_DATA.regulatoryActionEfficiency || {}).overall || {};
  const eval_ = APP_DATA.regulatoryEvaluation || {};
  const priorities = APP_DATA.regulatoryPrioritiesRecalculated || APP_DATA.regulatoryPriorities || {};
  const health = APP_DATA.regulatoryHealthScores || {};

  const pct = (n, d) => (d ? Math.round(n / d * 100) : 0);
  const avg = arr => (arr.length ? Math.round(arr.reduce((s, v) => s + v, 0) / arr.length) : 0);
  const scoreToLevel = s => (s >= 85 ? 'L5' : s >= 70 ? 'L4' : s >= 55 ? 'L3' : s >= 40 ? 'L2' : 'L1');

  const connectedSources = sources.filter(s => s.coverageStatus === '已接入');
  const connectedEntities = entities.filter(e => (e.dataCoverageStatus || e.dataAccessStatus) === '已接入');
  const connectedProjects = projects.filter(p => (p.dataCoverageStatus || p.dataAccessStatus) === '已接入');
  const objectsWithEntity = objects.filter(o => o.entityId);
  const objectsWithFields = objects.filter(o => fields.some(f => f.objectId === o.objectId));
  const closedRects = rects.filter(t => t.status === '已关闭' || t.closedAt);
  const overdueRects = rects.filter(t => t.deadline && t.deadline < '2026-07-22' && t.status !== '已关闭' && !t.closedAt);
  const closedWarnings = warnings.filter(w => w.status === '已关闭' || w.status === '已闭环');
  const kriUsed = new Set(events.map(e => e.kriId).filter(Boolean));
  const scenarioUsed = new Set(events.map(e => e.scenarioId).filter(Boolean));

  const dimDataIndicators = [
    { metricId: 'MET-SRC-CONN', name: '数据源接入率', value: pct(connectedSources.length, sources.length), unit: '%', sourceType: 'dataSourceRegistry' },
    { metricId: 'MET-OBJ-COV', name: '数据对象覆盖率', value: pct(objectsWithEntity.length, objects.length), unit: '%', sourceType: 'dataObjects' },
    { metricId: 'MET-FLD-COMP', name: '数据字段完整率', value: pct(objectsWithFields.length, objects.length), unit: '%', sourceType: 'dataFields' },
    { metricId: 'MET-QLT-CLOSE', name: '数据质量闭环率', value: pct(Math.max(0, quality.length - quality.filter(q => (q.qualityScore || 0) < 85).length), Math.max(1, quality.length)), unit: '%', sourceType: 'dataQualityIssues' }
  ];
  const dimDataScore = avg(dimDataIndicators.map(i => i.value));

  const dimCovIndicators = [
    { metricId: 'MET-ENT-COV', name: '法人监管覆盖率', value: pct(connectedEntities.length, entities.length), unit: '%', sourceType: 'globalLegalEntities' },
    { metricId: 'MET-PRJ-COV', name: '项目监管覆盖率', value: pct(connectedProjects.length, projects.length), unit: '%', sourceType: 'globalProjects' },
    { metricId: 'MET-REG-COV', name: '区域监管覆盖率', value: pct(regions.filter(r => entities.some(e => e.regionId === r.regionId)).length, regions.length), unit: '%', sourceType: 'globalRegions' },
    { metricId: 'MET-DOM-COV', name: '业务领域覆盖率', value: pct(domains.filter(d => events.some(e => e.domainId === d.id)).length, domains.length), unit: '%', sourceType: 'regulationDomains' },
    { metricId: 'MET-GAP-RATE', name: '监管盲区率', value: pct(gaps.length, Math.max(1, matrix.length + gaps.length)), unit: '%', sourceType: 'coverageGaps', inverse: true }
  ];
  const dimCovScore = Math.round(avg(dimCovIndicators.filter(i => !i.inverse).map(i => i.value)) * 0.8 + (100 - pct(gaps.length, Math.max(1, entities.length))) * 0.2);

  const dimMonIndicators = [
    { metricId: 'MET-KRI-COV', name: 'KRI覆盖率', value: pct(kriUsed.size, kris.length), unit: '%', sourceType: 'groupKris' },
    { metricId: 'MET-SCN-COV', name: '风险场景覆盖率', value: pct(scenarioUsed.size, scenarios.length + cbScenarios.length), unit: '%', sourceType: 'groupRiskScenarios' },
    { metricId: 'MET-EVT-ID', name: '风险事件识别率', value: pct(events.length, Math.max(1, warnings.length + quality.length)), unit: '%', sourceType: 'regulatoryEvents' },
    { metricId: 'MET-HRISK-ID', name: '高风险识别能力', value: pct(events.filter(e => e.riskLevel === 'HIGH').length, Math.max(1, warnings.filter(w => w.level === '重大').length + 1)), unit: '%', sourceType: 'regulatoryEvents' },
    { metricId: 'MET-CB-COV', name: '跨境风险监测覆盖率', value: pct(cbActs.filter(a => a.complianceStatus !== '正常').length, Math.max(1, cbActs.length)), unit: '%', sourceType: 'crossBorderDataActivities' },
    { metricId: 'MET-CDR-ID', name: '跨领域风险识别能力', value: pct(cdrMatters.length, Math.max(1, domains.length)), unit: '%', sourceType: 'crossDomainRiskMatters' }
  ];
  const dimMonScore = avg(dimMonIndicators.map(i => i.value));

  const dimCloseIndicators = [
    { metricId: 'MET-RECT-CLOSE', name: '整改闭环率', value: eval_.overallRectificationClosureRate || pct(closedRects.length, rects.length), unit: '%', sourceType: 'rectificationTasks' },
    { metricId: 'MET-RECT-OVER', name: '超期整改率', value: pct(overdueRects.length, Math.max(1, rects.filter(t => t.status !== '已关闭').length)), unit: '%', sourceType: 'rectificationTasks', inverse: true },
    { metricId: 'MET-ACT-COMP', name: '监管行动完成率', value: eff.completionRate || 0, unit: '%', sourceType: 'regulatoryActions' },
    { metricId: 'MET-ACT-VERIFY', name: '监管行动验证率', value: eff.verificationPassRate || 0, unit: '%', sourceType: 'regulatoryActionFeedbacks' },
    { metricId: 'MET-RISK-CLOSE', name: '风险事项关闭率', value: pct(closedWarnings.length, Math.max(1, warnings.length)), unit: '%', sourceType: 'warnings' },
    { metricId: 'MET-FB-TIME', name: '反馈及时率', value: pct(feedbacks.filter(f => f.feedbackStatus === 'SUBMITTED' || f.feedbackStatus === 'ACCEPTED').length, Math.max(1, actions.filter(a => a.feedbackRequired).length)), unit: '%', sourceType: 'regulatoryActionFeedbacks' }
  ];
  const dimCloseScore = Math.round(avg(dimCloseIndicators.filter(i => !i.inverse).map(i => i.value)) * 0.85 + (100 - pct(overdueRects.length, Math.max(1, rects.length))) * 0.15);

  const dimOptIndicators = [
    { metricId: 'MET-PRI-ADJ', name: '优先级动态调整率', value: pct(decisions.filter(d => d.decisionType === 'PRIORITY_CHANGE').length, Math.max(1, entities.length)), unit: '%', sourceType: 'regulatoryDecisionHistory' },
    { metricId: 'MET-STR-ADJ', name: '策略调整率', value: pct(decisions.filter(d => d.decisionType === 'STRATEGY_CHANGE').length, Math.max(1, regions.length)), unit: '%', sourceType: 'regulatoryDecisionHistory' },
    { metricId: 'MET-ACT-FB', name: '监管行动反馈率', value: pct(feedbacks.length, Math.max(1, actions.length)), unit: '%', sourceType: 'regulatoryActionFeedbacks' },
    { metricId: 'MET-DEC-COMP', name: '决策记录完整率', value: pct(decisions.filter(d => (d.sourceEventIds || []).length || (d.sourceActionIds || []).length).length, Math.max(1, decisions.length)), unit: '%', sourceType: 'regulatoryDecisionHistory' },
    { metricId: 'MET-EFF-IMPR', name: '监管效果改善率', value: pct(actions.filter(a => a.status === 'VERIFIED').length, Math.max(1, actions.filter(a => ['COMPLETED', 'VERIFIED'].includes(a.status)).length)), unit: '%', sourceType: 'regulatoryActionEfficiency' }
  ];
  const dimOptScore = avg(dimOptIndicators.map(i => i.value));

  const dimensions = [
    { dimensionId: 'MAT-DATA', dimensionName: '数据基础', score: dimDataScore, level: scoreToLevel(dimDataScore), indicators: dimDataIndicators, weight: 0.20 },
    { dimensionId: 'MAT-COVERAGE', dimensionName: '监管覆盖', score: dimCovScore, level: scoreToLevel(dimCovScore), indicators: dimCovIndicators, weight: 0.20 },
    { dimensionId: 'MAT-MONITOR', dimensionName: '风险监测', score: dimMonScore, level: scoreToLevel(dimMonScore), indicators: dimMonIndicators, weight: 0.20 },
    { dimensionId: 'MAT-CLOSURE', dimensionName: '闭环监管', score: dimCloseScore, level: scoreToLevel(dimCloseScore), indicators: dimCloseIndicators, weight: 0.25 },
    { dimensionId: 'MAT-OPTIMIZE', dimensionName: '持续优化', score: dimOptScore, level: scoreToLevel(dimOptScore), indicators: dimOptIndicators, weight: 0.15 }
  ];

  const overallScore = Math.round(dimensions.reduce((s, d) => s + d.score * d.weight, 0));
  const overallLevel = scoreToLevel(overallScore);

  const calcEntityMaturity = (ent) => {
    const entRects = rects.filter(t => t.entityId === ent.entityId);
    const entEvents = events.filter(e => e.entityId === ent.entityId);
    const entActions = actions.filter(a => a.entityId === ent.entityId);
    const entSrc = sources.filter(s => s.entityId === ent.entityId);
    const entQual = quality.filter(q => { const o = objects.find(x => x.objectId === q.objectId); return o && o.entityId === ent.entityId; });
    const p = priorities[ent.entityId] || {};
    const h = (health.entities || []).find(x => x.objectId === ent.entityId);
    const scores = {
      data: pct(entSrc.filter(s => s.coverageStatus === '已接入').length, Math.max(1, entSrc.length || 1)),
      coverage: (ent.dataCoverageStatus || ent.dataAccessStatus) === '已接入' ? 85 : 45,
      monitor: pct(entEvents.length, Math.max(1, (ent.riskCount || 0) + 1)) * 0.6 + pct(entEvents.filter(e => e.riskLevel === 'HIGH').length, Math.max(1, ent.highRiskCount || 1)) * 0.4,
      closure: pct(entRects.filter(t => t.status === '已关闭' || t.closedAt).length, Math.max(1, entRects.length)) * 0.5 + pct(entActions.filter(a => a.status === 'VERIFIED').length, Math.max(1, entActions.length)) * 0.5,
      optimize: pct(decisions.filter(d => d.entityId === ent.entityId).length, Math.max(1, entActions.length)) * 0.5 + (p.completedActions || 0) * 5
    };
    const composite = Math.round(scores.data * 0.2 + scores.coverage * 0.2 + scores.monitor * 0.2 + scores.closure * 0.25 + Math.min(100, scores.optimize) * 0.15);
    const weak = Object.entries(scores).sort((a, b) => a[1] - b[1])[0];
    const weakMap = { data: '数据基础不足', coverage: '监管覆盖不足', monitor: '风险监测不足', closure: '闭环监管不足', optimize: '持续优化不足' };
    return {
      objectId: ent.entityId, objectName: ent.entityName, regionId: ent.regionId, regionName: ent.regionName,
      level: scoreToLevel(composite), score: composite,
      dataScore: scores.data, coverageScore: scores.coverage, monitorScore: Math.round(scores.monitor),
      closureScore: Math.round(scores.closure), optimizeScore: Math.min(100, Math.round(scores.optimize)),
      priority: p.priority || 'LOW', healthLevel: h ? h.level : '—',
      mainGap: weakMap[weak[0]] || '—',
      suggestedAction: p.recommendedAction || '建议常规监测'
    };
  };

  const entityMaturity = entities.filter(e => e.entityId !== 'G001').map(calcEntityMaturity).sort((a, b) => b.score - a.score);

  const regionMaturity = regions.map(r => {
    const ents = entities.filter(e => e.regionId === r.regionId);
    const em = entityMaturity.filter(e => e.regionId === r.regionId);
    const composite = em.length ? Math.round(avg(em.map(e => e.score))) : 0;
    const weak = em.length ? em.sort((a, b) => a.score - b.score)[0] : null;
    return {
      objectId: r.regionId, objectName: r.regionName, level: scoreToLevel(composite), score: composite,
      dataScore: em.length ? avg(em.map(e => e.dataScore)) : 0,
      coverageScore: em.length ? avg(em.map(e => e.coverageScore)) : 0,
      monitorScore: em.length ? avg(em.map(e => e.monitorScore)) : 0,
      closureScore: em.length ? avg(em.map(e => e.closureScore)) : 0,
      optimizeScore: em.length ? avg(em.map(e => e.optimizeScore)) : 0,
      mainGap: weak ? weak.mainGap : '—', entityCount: ents.length
    };
  }).sort((a, b) => b.score - a.score);

  const domainMaturity = domains.map(d => {
    const evts = events.filter(e => e.domainId === d.id);
    const composite = Math.round(pct(evts.length, Math.max(1, events.length)) * 40 + pct(evts.filter(e => e.riskLevel === 'HIGH').length, Math.max(1, evts.length)) * 30 + pct(actions.filter(a => a.domainId === d.id && a.status === 'VERIFIED').length, Math.max(1, actions.filter(a => a.domainId === d.id).length)) * 30);
    return { objectId: d.id, objectName: d.name, level: scoreToLevel(composite), score: composite, eventCount: evts.length };
  });

  const maturityGaps = [];
  const gapTypes = [
    { key: '数据覆盖不足', check: () => dimDataIndicators.find(i => i.metricId === 'MET-SRC-CONN'), threshold: 80, dim: 'MAT-DATA', measure: '提升数据源接入率' },
    { key: '数据质量不足', check: () => dimDataIndicators.find(i => i.metricId === 'MET-QLT-CLOSE'), threshold: 75, dim: 'MAT-DATA', measure: '推进数据质量专项治理' },
    { key: 'KRI覆盖不足', check: () => dimMonIndicators.find(i => i.metricId === 'MET-KRI-COV'), threshold: 70, dim: 'MAT-MONITOR', measure: '扩展KRI监测覆盖' },
    { key: '风险识别不足', check: () => dimMonIndicators.find(i => i.metricId === 'MET-EVT-ID'), threshold: 70, dim: 'MAT-MONITOR', measure: '加强风险事件识别' },
    { key: '整改闭环不足', check: () => dimCloseIndicators.find(i => i.metricId === 'MET-RECT-CLOSE'), threshold: 75, dim: 'MAT-CLOSURE', measure: '加快整改闭环' },
    { key: '监管行动执行不足', check: () => dimCloseIndicators.find(i => i.metricId === 'MET-ACT-COMP'), threshold: 70, dim: 'MAT-CLOSURE', measure: '提升监管行动完成率' },
    { key: '反馈不足', check: () => dimCloseIndicators.find(i => i.metricId === 'MET-FB-TIME'), threshold: 70, dim: 'MAT-CLOSURE', measure: '加强执行反馈' },
    { key: '持续优化不足', check: () => dimOptIndicators.find(i => i.metricId === 'MET-EFF-IMPR'), threshold: 65, dim: 'MAT-OPTIMIZE', measure: '推动监管能力持续优化' }
  ];
  gapTypes.forEach(g => {
    const ind = g.check();
    if (!ind || ind.value >= g.threshold) return;
    const affected = entityMaturity.filter(e => e.score < g.threshold).slice(0, 3);
    maturityGaps.push({
      gapId: 'GAP-' + g.key.slice(0, 4),
      gapName: g.key,
      dimensionId: g.dim,
      affectedObjects: affected.map(e => e.objectName),
      affectedCount: entityMaturity.filter(e => e.score < g.threshold).length,
      currentValue: ind.value,
      targetValue: g.threshold,
      gap: g.threshold - ind.value,
      suggestedMeasure: g.measure,
      relatedMetricIds: [ind.metricId]
    });
  });

  const sortedDims = [...dimensions].sort((a, b) => b.score - a.score);
  const prevScore = Math.max(0, overallScore - Math.round(avg(dimensions.map(d => d.score > 70 ? 2 : -1))));
  const recommendations = [];
  let optSeq = 1;
  maturityGaps.forEach(g => {
    const ents = entityMaturity.filter(e => e.mainGap && g.gapName.includes(e.mainGap.replace('不足', ''))).slice(0, 2);
    (ents.length ? ents : entityMaturity.filter(e => e.score < 70).slice(0, 2)).forEach(ent => {
      const cur = ent.score;
      const tgt = Math.min(100, cur + g.gap);
      const entRects = rects.filter(t => t.entityId === ent.objectId);
      const entWarns = warnings.filter(w => w.entityId === ent.objectId);
      recommendations.push({
        recommendationId: 'OPT' + String(optSeq++).padStart(3, '0'),
        dimensionId: g.dimensionId,
        title: g.gapName + ' · ' + ent.objectName,
        targetType: 'ENTITY',
        targetId: ent.objectId,
        priority: g.gap >= 20 ? 'HIGH' : g.gap >= 10 ? 'MEDIUM' : 'LOW',
        currentScore: cur,
        targetScore: tgt,
        gap: tgt - cur,
        actionType: g.gapName.includes('整改') ? 'RECTIFICATION_ACCELERATION' : g.gapName.includes('KRI') ? 'KRI_EXPANSION' : g.gapName.includes('数据') ? 'DATA_QUALITY_REMEDIATION' : 'FOCUS_SUPERVISION',
        relatedMetricIds: g.relatedMetricIds || [],
        relatedRiskMatterIds: entWarns.map(w => w.id),
        relatedRectificationTaskIds: entRects.filter(t => t.status !== '已关闭').map(t => t.taskId),
        relatedActionIds: actions.filter(a => a.entityId === ent.objectId).map(a => a.actionId),
        status: 'OPEN',
        suggestedMeasure: g.suggestedMeasure
      });
    });
  });
  dimensions.filter(d => d.score < 70).forEach(d => {
    const weakInd = [...d.indicators].sort((a, b) => (a.inverse ? a.value : 100 - a.value) - (b.inverse ? b.value : 100 - b.value))[0];
    if (!weakInd) return;
    recommendations.push({
      recommendationId: 'OPT' + String(optSeq++).padStart(3, '0'),
      dimensionId: d.dimensionId,
      title: '提升' + d.dimensionName + ' · ' + weakInd.name,
      targetType: 'GROUP',
      targetId: 'G001',
      priority: d.score < 55 ? 'HIGH' : 'MEDIUM',
      currentScore: d.score,
      targetScore: Math.min(100, d.score + (weakInd.inverse ? weakInd.value : (70 - weakInd.value))),
      gap: Math.max(0, 70 - d.score),
      actionType: 'MATURITY_IMPROVEMENT',
      relatedMetricIds: [weakInd.metricId],
      relatedRiskMatterIds: [],
      relatedRectificationTaskIds: [],
      relatedActionIds: [],
      status: 'OPEN',
      suggestedMeasure: '针对' + weakInd.name + '制定专项提升计划'
    });
  });
  const inProgress = recommendations.filter((_, i) => i % 4 === 1).map(r => ({ ...r, status: 'IN_PROGRESS' }));
  const completed = recommendations.filter((_, i) => i % 5 === 0).map(r => ({ ...r, status: 'COMPLETED' }));
  recommendations.forEach((r, i) => { if (inProgress.find(x => x.recommendationId === r.recommendationId)) r.status = 'IN_PROGRESS'; if (completed.find(x => x.recommendationId === r.recommendationId)) r.status = 'COMPLETED'; });

  const trendPeriods = ['本期', '上期', '近3期', '近6期'];
  const trendNote = '基于当前历史索引模拟';
  const mkTrendPoint = (label, offset) => ({
    period: label,
    simulated: true,
    note: trendNote,
    overall: Math.max(0, Math.min(100, overallScore - offset)),
    data: Math.max(0, Math.min(100, dimDataScore - offset)),
    coverage: Math.max(0, Math.min(100, dimCovScore - offset)),
    monitor: Math.max(0, Math.min(100, dimMonScore - offset)),
    closure: Math.max(0, Math.min(100, dimCloseScore - offset)),
    optimize: Math.max(0, Math.min(100, dimOptScore - offset))
  });

  APP_DATA.regulatoryMaturity = {
    overallLevel, overallScore,
    previousScore: prevScore,
    scoreChange: overallScore - prevScore,
    highestDimension: sortedDims[0],
    lowestDimension: sortedDims[sortedDims.length - 1],
    pendingOptimizationCount: recommendations.filter(r => r.status === 'OPEN').length,
    dimensions: dimensions.map(d => ({
      ...d,
      previousScore: Math.max(0, d.score - (d.score > 65 ? 2 : 4)),
      scoreChange: d.score > 65 ? 2 : 4,
      mainGap: maturityGaps.find(g => g.dimensionId === d.dimensionId)?.gapName || (d.indicators.sort((a, b) => a.value - b.value)[0]?.name + '待提升'),
      recommendation: recommendations.find(r => r.dimensionId === d.dimensionId)?.suggestedMeasure || '保持当前水平并持续监测'
    })),
    entityMaturity, regionMaturity, domainMaturity,
    gaps: maturityGaps,
    recommendations: recommendations.map(r => r.recommendationId)
  };

  APP_DATA.regulatoryOptimizationRecommendations = recommendations;

  APP_DATA.regulatoryMaturityTrend = {
    note: trendNote,
    simulated: true,
    periods: [mkTrendPoint('本期', 0), mkTrendPoint('上期', 3), mkTrendPoint('近3期', 6), mkTrendPoint('近6期', 9)]
  };

  const kriOpt = kris.map(k => {
    const relEvents = events.filter(e => e.kriId === k.id);
    const relWarns = warnings.filter(w => w.kriId === k.id);
    const anomalyFreq = relEvents.length;
    const hasHistory = relEvents.length >= 2;
    return {
      kriId: k.id, kriName: k.name, currentThreshold: k.threshold || k.control || '—',
      anomalyFrequency: anomalyFreq,
      falsePositiveRate: hasHistory ? pct(relEvents.filter(e => e.riskLevel === 'LOW').length, relEvents.length) : null,
      missRisk: relWarns.length > 0 && relEvents.length === 0 ? '关注' : '低',
      suggestedThreshold: hasHistory ? (k.threshold || '待分析') : null,
      analysisMode: hasHistory ? '基于事件频率分析' : '待补充真实历史数据',
      status: anomalyFreq > 2 ? '待优化' : '正常'
    };
  });

  APP_DATA.regulatoryOptimizationAnalysis = {
    summary: {
      open: recommendations.filter(r => r.status === 'OPEN').length,
      highPriority: recommendations.filter(r => r.priority === 'HIGH' || r.priority === 'CRITICAL').length,
      inProgress: recommendations.filter(r => r.status === 'IN_PROGRESS').length,
      completed: recommendations.filter(r => r.status === 'COMPLETED').length,
      newThisPeriod: recommendations.filter(r => r.status === 'OPEN').length
    },
    metricOptimizations: dimensions.flatMap(d => d.indicators.map(ind => ({
      metricId: ind.metricId, metricName: ind.name, dimensionId: d.dimensionId,
      currentValue: ind.value, targetValue: Math.min(100, ind.value + Math.max(5, 70 - ind.value)),
      gap: Math.max(0, 70 - ind.value), dataSource: ind.sourceType,
      relatedRiskCount: events.length,
      status: ind.value < 70 ? 'OPEN' : 'NORMAL'
    }))),
    kriOptimizations: kriOpt,
    strategyOptimizations: (APP_DATA.regulatoryStrategyAnalysis || {}).entities?.map(e => {
      const hist = decisions.filter(d => d.entityId === e.objectId && d.decisionType === 'STRATEGY_CHANGE');
      return {
        objectId: e.objectId, objectName: e.objectName,
        currentStrategy: e.strategyLevel, strategyLabel: e.strategyLabel,
        changeCount: hist.length,
        previousStrategy: hist[0]?.previousValue || '—',
        effectScore: (entityMaturity.find(x => x.objectId === e.objectId) || {}).score || 0,
        suggestedStrategy: ((entityMaturity.find(x => x.objectId === e.objectId) || {}).score || 0) < 70 ? 'SPECIAL' : e.strategyLevel
      };
    }) || [],
    actionEffectAnalysis: (APP_DATA.regulatoryActionEfficiency || {}).byActionType || []
  };
})();

(function () {
  const TODAY = '2026-07-22';
  const entities = APP_DATA.globalLegalEntities || [];
  const events = APP_DATA.regulatoryEvents || [];
  const warnings = APP_DATA.warnings || [];
  const rects = APP_DATA.rectificationTasks || [];
  const actions = APP_DATA.regulatoryActions || [];
  const quality = APP_DATA.dataQualityIssues || [];
  const cbActs = APP_DATA.crossBorderDataActivities || [];
  const cdrMatters = APP_DATA.crossDomainRiskMatters || [];
  const health = APP_DATA.regulatoryHealthScores || {};
  const entityHealth = health.entities || [];
  const maturity = APP_DATA.regulatoryMaturity || {};
  const priorities = APP_DATA.regulatoryPrioritiesRecalculated || APP_DATA.regulatoryPriorities || {};

  const defaultParams = () => ({
    PRIORITY_HIGH_RISK_EVENT_WEIGHT: 12,
    PRIORITY_MAJOR_RISK_WEIGHT: 10,
    PRIORITY_OVERDUE_RECTIFICATION_WEIGHT: 18,
    PRIORITY_LONG_OPEN_RECT_WEIGHT: 8,
    PRIORITY_QUALITY_WEIGHT: 6,
    PRIORITY_KRI_WEIGHT: 5,
    PRIORITY_CB_RISK_WEIGHT: 10,
    PRIORITY_CDR_WEIGHT: 8,
    PRIORITY_CRITICAL_HEALTH_SCORE: 25,
    PRIORITY_WARNING_HEALTH_SCORE: 12,
    PRIORITY_CRITICAL_THRESHOLD: 55,
    PRIORITY_HIGH_THRESHOLD: 35,
    PRIORITY_MEDIUM_THRESHOLD: 18,
    STRATEGY_FOCUS_HIGH_RISK_MIN: 2,
    STRATEGY_FOCUS_OVERDUE_MIN: 1,
    MATURITY_L5_THRESHOLD: 85,
    MATURITY_L4_THRESHOLD: 70,
    MATURITY_L3_THRESHOLD: 55,
    MATURITY_L2_THRESHOLD: 40,
    MATURITY_DATA_WEIGHT: 20,
    MATURITY_COVERAGE_WEIGHT: 20,
    MATURITY_MONITOR_WEIGHT: 20,
    MATURITY_CLOSURE_WEIGHT: 25,
    MATURITY_OPTIMIZE_WEIGHT: 15,
    ACTION_OVERDUE_TRIGGER_DAYS: 0
  });

  const paramMeta = [
    { paramId: 'PRIORITY_HIGH_RISK_EVENT_WEIGHT', name: '高风险事件权重', unit: '分/项', min: 5, max: 30, ruleRef: 'RULE-PRI-001' },
    { paramId: 'PRIORITY_MAJOR_RISK_WEIGHT', name: '重大风险权重', unit: '分/项', min: 5, max: 25, ruleRef: 'RULE-PRI-001' },
    { paramId: 'PRIORITY_OVERDUE_RECTIFICATION_WEIGHT', name: '超期整改权重', unit: '分/项', min: 10, max: 30, ruleRef: 'RULE-PRI-002' },
    { paramId: 'PRIORITY_KRI_WEIGHT', name: 'KRI异常权重', unit: '分/项', min: 3, max: 15, ruleRef: 'RULE-KRI-001' },
    { paramId: 'PRIORITY_CRITICAL_HEALTH_SCORE', name: '健康度CRITICAL加分', unit: '分', min: 15, max: 40, ruleRef: 'RULE-PRI-003' },
    { paramId: 'PRIORITY_CRITICAL_THRESHOLD', name: 'CRITICAL优先级阈值', unit: '分', min: 45, max: 70, ruleRef: 'RULE-PRI-001' },
    { paramId: 'PRIORITY_HIGH_THRESHOLD', name: 'HIGH优先级阈值', unit: '分', min: 25, max: 50, ruleRef: 'RULE-PRI-001' },
    { paramId: 'STRATEGY_FOCUS_HIGH_RISK_MIN', name: '重点策略高风险事件下限', unit: '项', min: 1, max: 5, ruleRef: 'RULE-STR-001' },
    { paramId: 'STRATEGY_FOCUS_OVERDUE_MIN', name: '重点策略超期整改下限', unit: '项', min: 1, max: 3, ruleRef: 'RULE-STR-001' },
    { paramId: 'MATURITY_L5_THRESHOLD', name: 'L5成熟度阈值', unit: '分', min: 80, max: 95, ruleRef: 'RULE-MAT-001' },
    { paramId: 'MATURITY_L4_THRESHOLD', name: 'L4成熟度阈值', unit: '分', min: 60, max: 80, ruleRef: 'RULE-MAT-001' },
    { paramId: 'MATURITY_L3_THRESHOLD', name: 'L3成熟度阈值', unit: '分', min: 45, max: 65, ruleRef: 'RULE-MAT-001' },
    { paramId: 'MATURITY_L2_THRESHOLD', name: 'L2成熟度阈值', unit: '分', min: 30, max: 50, ruleRef: 'RULE-MAT-001' },
    { paramId: 'MATURITY_DATA_WEIGHT', name: '数据基础维度权重', unit: '%', min: 10, max: 35, ruleRef: 'RULE-MAT-002' },
    { paramId: 'MATURITY_COVERAGE_WEIGHT', name: '监管覆盖维度权重', unit: '%', min: 10, max: 35, ruleRef: 'RULE-MAT-002' },
    { paramId: 'MATURITY_MONITOR_WEIGHT', name: '风险监测维度权重', unit: '%', min: 10, max: 35, ruleRef: 'RULE-MAT-002' },
    { paramId: 'MATURITY_CLOSURE_WEIGHT', name: '闭环监管维度权重', unit: '%', min: 15, max: 35, ruleRef: 'RULE-MAT-002' },
    { paramId: 'MATURITY_OPTIMIZE_WEIGHT', name: '持续优化维度权重', unit: '%', min: 10, max: 30, ruleRef: 'RULE-MAT-002' },
    { paramId: 'ACTION_OVERDUE_TRIGGER_DAYS', name: '行动逾期触发天数', unit: '天', min: 0, max: 30, ruleRef: 'RULE-ACT-002' }
  ];

  const defs = defaultParams();
  APP_DATA.regulatoryRuleParameters = paramMeta.map(m => ({
    paramId: m.paramId,
    paramName: m.name,
    currentValue: defs[m.paramId],
    defaultValue: defs[m.paramId],
    unit: m.unit,
    allowedMin: m.min,
    allowedMax: m.max,
    lastUpdated: '系统默认',
    modifiedBy: '系统默认',
    effective: true,
    ruleRef: m.ruleRef
  }));

  const calcPriorityWithParams = (entityId, p) => {
    const ent = entities.find(e => e.entityId === entityId);
    const h = entityHealth.find(x => x.objectId === entityId);
    if (!ent) return { priority: 'LOW', score: 0, factors: [] };
    const evts = events.filter(e => e.entityId === entityId);
    const highEvts = evts.filter(e => e.riskLevel === 'HIGH');
    const majorWarn = warnings.filter(w => w.entityId === entityId && w.level === '重大');
    const overdue = rects.filter(t => t.entityId === entityId && t.deadline && t.deadline < TODAY && t.status !== '已关闭' && !t.closedAt);
    const longOpen = rects.filter(t => t.entityId === entityId && t.status !== '已关闭' && !t.closedAt && (t.progress || 0) < 50);
    const objs = (APP_DATA.dataObjects || []).filter(o => o.entityId === entityId);
    const qualCount = quality.filter(q => objs.some(o => o.objectId === q.objectId)).length;
    const cbRisk = cbActs.filter(a => a.entityId === entityId && (a.complianceStatus === '高风险' || a.complianceStatus === '异常')).length;
    const cdrCount = cdrMatters.filter(m => (m.entityIds || []).includes(entityId)).length;
    const verifiedActs = actions.filter(a => a.entityId === entityId && a.status === 'VERIFIED').length;
    let score = 0;
    const factors = [];
    if (highEvts.length) { score += highEvts.length * p.PRIORITY_HIGH_RISK_EVENT_WEIGHT; factors.push(`高风险事件${highEvts.length}项`); }
    if (majorWarn.length) { score += majorWarn.length * p.PRIORITY_MAJOR_RISK_WEIGHT; factors.push(`重大风险${majorWarn.length}项`); }
    if (overdue.length) { score += overdue.length * p.PRIORITY_OVERDUE_RECTIFICATION_WEIGHT; factors.push(`超期整改${overdue.length}项`); }
    if (longOpen.length) { score += longOpen.length * p.PRIORITY_LONG_OPEN_RECT_WEIGHT; }
    if (qualCount) { score += qualCount * p.PRIORITY_QUALITY_WEIGHT; }
    if ((ent.kriExceptionCount || 0) > 0) { score += ent.kriExceptionCount * p.PRIORITY_KRI_WEIGHT; }
    if (cbRisk) { score += cbRisk * p.PRIORITY_CB_RISK_WEIGHT; }
    if (cdrCount) { score += cdrCount * p.PRIORITY_CDR_WEIGHT; }
    if (h && h.level === 'CRITICAL') score += p.PRIORITY_CRITICAL_HEALTH_SCORE;
    else if (h && h.level === 'WARNING') score += p.PRIORITY_WARNING_HEALTH_SCORE;
    score = Math.max(0, score - verifiedActs * 5);
    const priority = score >= p.PRIORITY_CRITICAL_THRESHOLD ? 'CRITICAL' : score >= p.PRIORITY_HIGH_THRESHOLD ? 'HIGH' : score >= p.PRIORITY_MEDIUM_THRESHOLD ? 'MEDIUM' : 'LOW';
    return { priority, score, factors };
  };

  const scoreToLevel = (s, p) => (s >= p.MATURITY_L5_THRESHOLD ? 'L5' : s >= p.MATURITY_L4_THRESHOLD ? 'L4' : s >= p.MATURITY_L3_THRESHOLD ? 'L3' : s >= p.MATURITY_L2_THRESHOLD ? 'L2' : 'L1');

  const rules = [
    { ruleId: 'RULE-PRI-001', ruleName: '监管优先级综合评分规则', ruleType: 'PRIORITY_SCORING', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: '基于高风险事件、重大风险、超期整改、健康度等因素计算法人监管优先级', conditions: ['高风险事件加权', '重大风险加权', '超期整改加权', '健康度CRITICAL/WARNING加分'], parameters: ['PRIORITY_HIGH_RISK_EVENT_WEIGHT', 'PRIORITY_MAJOR_RISK_WEIGHT', 'PRIORITY_CRITICAL_THRESHOLD', 'PRIORITY_HIGH_THRESHOLD'], targetTypes: ['ENTITY'], outputType: 'PRIORITY', outputValue: 'CRITICAL|HIGH|MEDIUM|LOW', relatedMetricIds: [], relatedKriIds: [], relatedRiskMatterIds: warnings.map(w => w.id), relatedActionTypes: ['FOCUS_SUPERVISION'], sourceType: 'SYSTEM_RULE', logicRef: 'calculateRegulatoryPriority' },
    { ruleId: 'RULE-PRI-002', ruleName: '超期整改优先级加权规则', ruleType: 'PRIORITY_SCORING', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: '超期整改任务按权重计入监管优先级评分', conditions: ['超期整改 ≥ 1'], parameters: ['PRIORITY_OVERDUE_RECTIFICATION_WEIGHT'], targetTypes: ['ENTITY'], outputType: 'PRIORITY_SCORE', outputValue: '+N*weight', relatedMetricIds: ['MET-RECT-OVER'], relatedKriIds: [], relatedRiskMatterIds: [], relatedActionTypes: ['ESCALATE_RECTIFICATION'], sourceType: 'SYSTEM_RULE', logicRef: 'calculateRegulatoryPriority' },
    { ruleId: 'RULE-PRI-003', ruleName: '健康度CRITICAL优先级规则', ruleType: 'PRIORITY_SCORING', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: '健康度为CRITICAL的法人额外加分', conditions: ['健康度 = CRITICAL'], parameters: ['PRIORITY_CRITICAL_HEALTH_SCORE'], targetTypes: ['ENTITY'], outputType: 'PRIORITY_SCORE', outputValue: '+25', relatedMetricIds: [], relatedKriIds: [], relatedRiskMatterIds: [], relatedActionTypes: ['FOCUS_SUPERVISION'], sourceType: 'SYSTEM_RULE', logicRef: 'calculateRegulatoryPriority' },
    { ruleId: 'RULE-STR-001', ruleName: '重点监管策略触发规则', ruleType: 'STRATEGY_ROUTING', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: '高风险集中+健康度CRITICAL+超期整改触发FOCUS策略', conditions: ['高风险事件 ≥ 2', '健康度 = CRITICAL', '超期整改 ≥ 1'], parameters: ['STRATEGY_FOCUS_HIGH_RISK_MIN', 'STRATEGY_FOCUS_OVERDUE_MIN'], targetTypes: ['REGION', 'ENTITY'], outputType: 'STRATEGY', outputValue: 'FOCUS', relatedMetricIds: [], relatedKriIds: [], relatedRiskMatterIds: [], relatedActionTypes: [], sourceType: 'SYSTEM_RULE', logicRef: 'getRegulatoryStrategyLevel' },
    { ruleId: 'RULE-STR-002', ruleName: '专项监管策略触发规则', ruleType: 'STRATEGY_ROUTING', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: '跨领域风险或WARNING健康度触发SPECIAL策略', conditions: ['跨领域风险 ≥ 1', '或 健康度 = WARNING'], parameters: [], targetTypes: ['ENTITY', 'REGION'], outputType: 'STRATEGY', outputValue: 'SPECIAL', relatedMetricIds: [], relatedKriIds: [], relatedRiskMatterIds: cdrMatters.map(m => m.riskMatterId), relatedActionTypes: ['CROSS_DOMAIN_COORDINATION'], sourceType: 'SYSTEM_RULE', logicRef: 'getRegulatoryStrategyLevel' },
    { ruleId: 'RULE-ACT-001', ruleName: '重点监管行动触发规则', ruleType: 'ACTION_TRIGGER', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: 'CRITICAL/HIGH优先级法人触发FOCUS_SUPERVISION行动', conditions: ['监管优先级 = CRITICAL 或 HIGH'], parameters: [], targetTypes: ['ENTITY'], outputType: 'ACTION', outputValue: 'FOCUS_SUPERVISION', relatedMetricIds: [], relatedKriIds: [], relatedRiskMatterIds: [], relatedActionTypes: ['FOCUS_SUPERVISION'], sourceType: 'SYSTEM_RULE', logicRef: 'regulatoryActions' },
    { ruleId: 'RULE-ACT-002', ruleName: '超期整改升级行动规则', ruleType: 'ACTION_TRIGGER', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: '存在超期整改触发ESCALATE_RECTIFICATION行动', conditions: ['超期整改 ≥ 1'], parameters: ['ACTION_OVERDUE_TRIGGER_DAYS'], targetTypes: ['ENTITY'], outputType: 'ACTION', outputValue: 'ESCALATE_RECTIFICATION', relatedMetricIds: ['MET-RECT-OVER'], relatedKriIds: [], relatedRiskMatterIds: [], relatedActionTypes: ['ESCALATE_RECTIFICATION'], sourceType: 'SYSTEM_RULE', logicRef: 'regulatoryActions' },
    { ruleId: 'RULE-RISK-001', ruleName: '高风险事件识别规则', ruleType: 'RISK_DETECTION', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: '从warnings/quality/alerts/gaps/cross-domain/cross-border聚合监管事件', conditions: ['风险等级 = HIGH'], parameters: [], targetTypes: ['ENTITY', 'PROJECT'], outputType: 'EVENT', outputValue: 'regulatoryEvents', relatedMetricIds: [], relatedKriIds: (APP_DATA.groupKris || []).map(k => k.id), relatedRiskMatterIds: warnings.map(w => w.id), relatedActionTypes: [], sourceType: 'SYSTEM_RULE', logicRef: 'regulatoryEvents' },
    { ruleId: 'RULE-KRI-001', ruleName: 'KRI异常监测规则', ruleType: 'KRI_THRESHOLD', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: 'KRI状态异常计入法人优先级及监管行动', conditions: ['KRI异常数 > 0'], parameters: ['PRIORITY_KRI_WEIGHT'], targetTypes: ['ENTITY'], outputType: 'PRIORITY_SCORE', outputValue: '+N*5', relatedMetricIds: ['MET-KRI-COV'], relatedKriIds: (APP_DATA.groupKris || []).map(k => k.id), relatedRiskMatterIds: [], relatedActionTypes: ['KRI_MONITORING'], sourceType: 'SYSTEM_RULE', logicRef: 'calculateRegulatoryPriority' },
    { ruleId: 'RULE-MAT-001', ruleName: '成熟度等级划分规则', ruleType: 'MATURITY_SCORING', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: '按综合评分划分L1-L5成熟度等级', conditions: ['综合评分 → 等级映射'], parameters: ['MATURITY_L5_THRESHOLD', 'MATURITY_L4_THRESHOLD', 'MATURITY_L3_THRESHOLD', 'MATURITY_L2_THRESHOLD'], targetTypes: ['GROUP', 'REGION', 'ENTITY'], outputType: 'MATURITY_LEVEL', outputValue: 'L1-L5', relatedMetricIds: [], relatedKriIds: [], relatedRiskMatterIds: [], relatedActionTypes: [], sourceType: 'SYSTEM_RULE', logicRef: 'regulatoryMaturity' },
    { ruleId: 'RULE-MAT-002', ruleName: '成熟度维度权重规则', ruleType: 'MATURITY_SCORING', status: 'ACTIVE', version: '1.0.0', effectiveDate: '2026-07-01', lastUpdated: '2026-07-22', owner: '集团监管部', description: '五维成熟度加权计算集团整体评分', conditions: ['五维加权求和'], parameters: ['MATURITY_DATA_WEIGHT', 'MATURITY_COVERAGE_WEIGHT', 'MATURITY_MONITOR_WEIGHT', 'MATURITY_CLOSURE_WEIGHT', 'MATURITY_OPTIMIZE_WEIGHT'], targetTypes: ['GROUP'], outputType: 'MATURITY_SCORE', outputValue: 'weighted_sum', relatedMetricIds: [], relatedKriIds: [], relatedRiskMatterIds: [], relatedActionTypes: [], sourceType: 'SYSTEM_RULE', logicRef: 'regulatoryMaturity' }
  ];

  rules.forEach(r => {
    const affected = entities.filter(e => {
      if (r.ruleType === 'PRIORITY_SCORING' || r.ruleType === 'ACTION_TRIGGER') {
        const p = priorities[e.entityId];
        return p && (p.priority === 'HIGH' || p.priority === 'CRITICAL' || p.priority === 'MEDIUM');
      }
      if (r.ruleType === 'RISK_DETECTION') return events.some(ev => ev.entityId === e.entityId);
      if (r.ruleType === 'KRI_THRESHOLD') return (e.kriExceptionCount || 0) > 0;
      return false;
    });
    r.affectedEntityIds = affected.map(e => e.entityId);
    r.affectedEntityCount = affected.length;
  });

  APP_DATA.regulatoryRules = rules;

  APP_DATA.regulatoryRuleHistory = rules.map(r => ({
    historyId: 'RH-' + r.ruleId.replace('RULE-', ''),
    ruleId: r.ruleId,
    ruleName: r.ruleName,
    version: r.version,
    previousValue: null,
    currentValue: '系统默认',
    changeReason: '系统默认版本',
    affectedEntityIds: r.affectedEntityIds || [],
    affectedMetricIds: r.relatedMetricIds || [],
    affectedRiskMatterIds: r.relatedRiskMatterIds || [],
    affectedActionTypes: r.relatedActionTypes || [],
    simulationId: null,
    effectiveStatus: 'ACTIVE',
    occurredAt: r.effectiveDate,
    modifiedBy: '系统默认',
    sourceType: 'SYSTEM_DEFAULT'
  }));

  const runSim = (simId, simName, overrides, status) => {
    const baseP = defaultParams();
    const simP = { ...baseP, ...overrides };
    const priorityChanges = [];
    const strategyChanges = [];
    const maturityChanges = [];
    entities.filter(e => e.entityId !== 'G001').forEach(ent => {
      const cur = priorities[ent.entityId] || {};
      const sim = calcPriorityWithParams(ent.entityId, simP);
      if (cur.priority !== sim.priority) {
        priorityChanges.push({
          entityId: ent.entityId, entityName: ent.entityName,
          currentPriority: cur.priority, simulatedPriority: sim.priority,
          currentScore: cur.score, simulatedScore: sim.score,
          reason: simP.PRIORITY_HIGH_THRESHOLD !== baseP.PRIORITY_HIGH_THRESHOLD ? 'HIGH优先级阈值调整'
            : simP.PRIORITY_CRITICAL_THRESHOLD !== baseP.PRIORITY_CRITICAL_THRESHOLD ? 'CRITICAL优先级阈值调整'
            : simP.PRIORITY_OVERDUE_RECTIFICATION_WEIGHT !== baseP.PRIORITY_OVERDUE_RECTIFICATION_WEIGHT ? '超期整改权重调整'
            : simP.PRIORITY_HIGH_RISK_EVENT_WEIGHT !== baseP.PRIORITY_HIGH_RISK_EVENT_WEIGHT ? '高风险事件权重调整'
            : simP.PRIORITY_KRI_WEIGHT !== baseP.PRIORITY_KRI_WEIGHT ? 'KRI异常权重调整'
            : '已验证行动减分生效',
          simulationOnly: true
        });
      }
      const evts = events.filter(e => e.entityId === ent.entityId);
      const h = entityHealth.find(x => x.objectId === ent.entityId);
      const overdue = rects.filter(t => t.entityId === ent.entityId && t.deadline && t.deadline < TODAY && t.status !== '已关闭').length;
      const curStrat = (APP_DATA.regulatoryStrategyAnalysis || {}).entities?.find(x => x.objectId === ent.entityId)?.strategyLevel || 'OBSERVE';
      const highRisk = evts.filter(e => e.riskLevel === 'HIGH').length;
      const simStrat = highRisk >= simP.STRATEGY_FOCUS_HIGH_RISK_MIN && h?.level === 'CRITICAL' && overdue >= simP.STRATEGY_FOCUS_OVERDUE_MIN ? 'FOCUS'
        : cdrMatters.some(m => (m.entityIds || []).includes(ent.entityId)) || h?.level === 'WARNING' ? 'SPECIAL' : 'ROUTINE';
      if (curStrat !== simStrat) {
        strategyChanges.push({ entityId: ent.entityId, entityName: ent.entityName, currentStrategy: curStrat, simulatedStrategy: simStrat, simulationOnly: true });
      }
    });
    const baseMatScore = maturity.overallScore || 0;
    const dimAdj = overrides.MATURITY_DATA_WEIGHT ? (overrides.MATURITY_DATA_WEIGHT - baseP.MATURITY_DATA_WEIGHT) * 0.5 : 0;
    const simMatScore = Math.max(0, Math.min(100, Math.round(baseMatScore + dimAdj + (overrides.PRIORITY_OVERDUE_RECTIFICATION_WEIGHT < baseP.PRIORITY_OVERDUE_RECTIFICATION_WEIGHT ? 2 : 0))));
    maturityChanges.push({
      currentLevel: maturity.overallLevel, simulatedLevel: scoreToLevel(simMatScore, simP),
      currentScore: baseMatScore, simulatedScore: simMatScore, simulationOnly: true
    });
    const highBefore = Object.values(priorities).filter(p => p.priority === 'HIGH' || p.priority === 'CRITICAL').length;
    const simPriorities = {};
    entities.forEach(e => { simPriorities[e.entityId] = calcPriorityWithParams(e.entityId, simP); });
    const highAfter = Object.values(simPriorities).filter(p => p.priority === 'HIGH' || p.priority === 'CRITICAL').length;
    return {
      simulationId: simId,
      simulationName: simName,
      baseVersion: '1.0.0',
      createdAt: '2026-07-22',
      createdBy: '系统生成',
      status: status || 'COMPLETED',
      parameterChanges: Object.keys(overrides).map(k => ({
        paramId: k, originalValue: baseP[k], simulatedValue: overrides[k],
        changeValue: overrides[k] - baseP[k],
        changePercent: baseP[k] ? Math.round((overrides[k] - baseP[k]) / baseP[k] * 100) : 0
      })),
      affectedEntityCount: new Set(priorityChanges.map(c => c.entityId)).size || entities.filter(e => e.entityId !== 'G001').length,
      priorityChangeCount: priorityChanges.length,
      strategyChangeCount: strategyChanges.length,
      actionChangeCount: priorityChanges.filter(c => c.simulatedPriority === 'CRITICAL' || c.simulatedPriority === 'HIGH').length,
      maturityChange: maturityChanges[0],
      priorityChanges,
      strategyChanges,
      actionChanges: priorityChanges.filter(c => ['CRITICAL', 'HIGH'].includes(c.simulatedPriority)).map(c => ({
        entityId: c.entityId, actionType: 'FOCUS_SUPERVISION', simulated: true, simulationOnly: true
      })),
      concentrationChanges: [{ dimension: 'HIGH优先级法人', before: highBefore, after: highAfter, simulationOnly: true }],
      maturityChanges,
      generatedAt: '2026-07-22',
      simulationOnly: true,
      disclaimer: '这是仿真结果，不改变真实数据。'
    };
  };

  const simulations = [
    { simulationId: 'SIM-BASE', simulationName: '基准场景', description: '当前规则参数基准', status: 'COMPLETED', overrides: {} },
    { simulationId: 'SIM-DATA-COV', simulationName: '提高数据覆盖率', description: '提高数据基础维度权重', status: 'COMPLETED', overrides: { MATURITY_DATA_WEIGHT: 30, MATURITY_COVERAGE_WEIGHT: 25, MATURITY_CLOSURE_WEIGHT: 20 } },
    { simulationId: 'SIM-OVERDUE', simulationName: '降低超期整改权重', description: '降低超期整改对优先级的影响', status: 'COMPLETED', overrides: { PRIORITY_OVERDUE_RECTIFICATION_WEIGHT: 8, PRIORITY_CRITICAL_THRESHOLD: 230 } },
    { simulationId: 'SIM-KRI', simulationName: '提高KRI覆盖率', description: '提高KRI异常权重', status: 'COMPLETED', overrides: { PRIORITY_KRI_WEIGHT: 12 } },
    { simulationId: 'SIM-VERIFY', simulationName: '提高监管行动验证率', description: '模拟验证行动减分效果增强', status: 'COMPLETED', overrides: { PRIORITY_OVERDUE_RECTIFICATION_WEIGHT: 12, PRIORITY_HIGH_RISK_EVENT_WEIGHT: 10 } },
    { simulationId: 'SIM-PRI-WEIGHT', simulationName: '调整监管优先级权重', description: '提高超期整改权重并调整HIGH阈值', status: 'COMPLETED', overrides: { PRIORITY_OVERDUE_RECTIFICATION_WEIGHT: 25, PRIORITY_HIGH_THRESHOLD: 50 } },
    { simulationId: 'SIM-MAT-WEIGHT', simulationName: '调整成熟度评分权重', description: '提高闭环监管维度权重', status: 'COMPLETED', overrides: { MATURITY_CLOSURE_WEIGHT: 30, MATURITY_DATA_WEIGHT: 15, MATURITY_L4_THRESHOLD: 75 } }
  ];

  APP_DATA.regulatorySimulations = simulations.map(s => ({
    simulationId: s.simulationId,
    simulationName: s.simulationName,
    description: s.description,
    baseVersion: '1.0.0',
    createdAt: '2026-07-22',
    createdBy: '系统生成',
    status: s.status,
    simulationOnly: true
  }));

  APP_DATA.regulatorySimulationResults = simulations.map(s => runSim(s.simulationId, s.simulationName, s.overrides, s.status));

  APP_DATA.regulatoryRuleConfigMetrics = {
    totalRules: rules.length,
    activeRules: rules.filter(r => r.status === 'ACTIVE').length,
    inactiveRules: rules.filter(r => r.status !== 'ACTIVE').length,
    pendingRules: 0,
    changedThisPeriod: 0,
    affectedEntityCount: new Set(rules.flatMap(r => r.affectedEntityIds || [])).size
  };
})();

(function () {
  const TODAY = '2026-07-22';
  const rules = APP_DATA.regulatoryRules || [];
  const params = APP_DATA.regulatoryRuleParameters || [];
  const entities = (APP_DATA.globalLegalEntities || []).filter(e => e.entityId !== 'G001');
  const priorities = APP_DATA.regulatoryPrioritiesRecalculated || APP_DATA.regulatoryPriorities || {};
  const events = APP_DATA.regulatoryEvents || [];
  const warnings = APP_DATA.warnings || [];
  const rects = APP_DATA.rectificationTasks || [];
  const actions = APP_DATA.regulatoryActions || [];
  const feedbacks = APP_DATA.regulatoryActionFeedbacks || [];
  const maturity = APP_DATA.regulatoryMaturity || {};
  const strategy = APP_DATA.regulatoryStrategyAnalysis || {};
  const health = APP_DATA.regulatoryHealthScores || {};
  const entityHealth = health.entities || [];
  const simResults = APP_DATA.regulatorySimulationResults || [];
  const cdrMatters = APP_DATA.crossDomainRiskMatters || [];

  const paramMap = () => Object.fromEntries(params.map(p => [p.paramId, p.currentValue]));
  const buildSnapshot = (ids) => {
    const m = paramMap();
    const snap = {};
    (ids || []).forEach(id => { if (m[id] !== undefined) snap[id] = m[id]; });
    return snap;
  };

  const govFamilies = [
    { ruleId: 'RULE-001', ruleName: '监管优先级规则', ruleType: 'PRIORITY', logicRef: 'calculateRegulatoryPriority', phase10Ids: ['RULE-PRI-001', 'RULE-PRI-002', 'RULE-PRI-003', 'RULE-KRI-001'], paramIds: ['PRIORITY_HIGH_RISK_EVENT_WEIGHT', 'PRIORITY_MAJOR_RISK_WEIGHT', 'PRIORITY_OVERDUE_RECTIFICATION_WEIGHT', 'PRIORITY_CRITICAL_HEALTH_SCORE', 'PRIORITY_CRITICAL_THRESHOLD', 'PRIORITY_HIGH_THRESHOLD', 'PRIORITY_KRI_WEIGHT'] },
    { ruleId: 'RULE-002', ruleName: '监管策略分层规则', ruleType: 'STRATEGY', logicRef: 'getRegulatoryStrategyLevel', phase10Ids: ['RULE-STR-001', 'RULE-STR-002'], paramIds: ['STRATEGY_FOCUS_HIGH_RISK_MIN', 'STRATEGY_FOCUS_OVERDUE_MIN'] },
    { ruleId: 'RULE-003', ruleName: '监管行动生成规则', ruleType: 'ACTION', logicRef: 'regulatoryActions', phase10Ids: ['RULE-ACT-001', 'RULE-ACT-002'], paramIds: ['ACTION_OVERDUE_TRIGGER_DAYS'] },
    { ruleId: 'RULE-004', ruleName: '监管成熟度评分规则', ruleType: 'MATURITY', logicRef: 'regulatoryMaturity', phase10Ids: ['RULE-MAT-001', 'RULE-MAT-002'], paramIds: ['MATURITY_L5_THRESHOLD', 'MATURITY_L4_THRESHOLD', 'MATURITY_L3_THRESHOLD', 'MATURITY_L2_THRESHOLD', 'MATURITY_DATA_WEIGHT', 'MATURITY_COVERAGE_WEIGHT', 'MATURITY_MONITOR_WEIGHT', 'MATURITY_CLOSURE_WEIGHT', 'MATURITY_OPTIMIZE_WEIGHT'] },
    { ruleId: 'RULE-005', ruleName: '风险事件识别规则', ruleType: 'RISK_DETECTION', logicRef: 'regulatoryEvents', phase10Ids: ['RULE-RISK-001'], paramIds: [] }
  ];

  const calcPriority = (entityId, p) => {
    const ent = entities.find(e => e.entityId === entityId);
    const h = entityHealth.find(x => x.objectId === entityId);
    if (!ent) return { priority: 'LOW', score: 0 };
    const highEvts = events.filter(e => e.entityId === entityId && e.riskLevel === 'HIGH');
    const majorWarn = warnings.filter(w => w.entityId === entityId && w.level === '重大');
    const overdue = rects.filter(t => t.entityId === entityId && t.deadline && t.deadline < TODAY && t.status !== '已关闭' && !t.closedAt);
    const qualCount = (APP_DATA.dataQualityIssues || []).filter(q => (APP_DATA.dataObjects || []).some(o => o.entityId === entityId && o.objectId === q.objectId)).length;
    const cbRisk = (APP_DATA.crossBorderDataActivities || []).filter(a => a.entityId === entityId && (a.complianceStatus === '高风险' || a.complianceStatus === '异常')).length;
    const cdrCount = cdrMatters.filter(m => (m.entityIds || []).includes(entityId)).length;
    const verifiedActs = actions.filter(a => a.entityId === entityId && a.status === 'VERIFIED').length;
    let score = 0;
    if (highEvts.length) score += highEvts.length * (p.PRIORITY_HIGH_RISK_EVENT_WEIGHT || 12);
    if (majorWarn.length) score += majorWarn.length * (p.PRIORITY_MAJOR_RISK_WEIGHT || 10);
    if (overdue.length) score += overdue.length * (p.PRIORITY_OVERDUE_RECTIFICATION_WEIGHT || 18);
    if (qualCount) score += qualCount * (p.PRIORITY_QUALITY_WEIGHT || 6);
    if ((ent.kriExceptionCount || 0) > 0) score += ent.kriExceptionCount * (p.PRIORITY_KRI_WEIGHT || 5);
    if (cbRisk) score += cbRisk * (p.PRIORITY_CB_RISK_WEIGHT || 10);
    if (cdrCount) score += cdrCount * (p.PRIORITY_CDR_WEIGHT || 8);
    if (h && h.level === 'CRITICAL') score += p.PRIORITY_CRITICAL_HEALTH_SCORE || 25;
    else if (h && h.level === 'WARNING') score += p.PRIORITY_WARNING_HEALTH_SCORE || 12;
    score = Math.max(0, score - verifiedActs * 5);
    const priority = score >= (p.PRIORITY_CRITICAL_THRESHOLD || 55) ? 'CRITICAL' : score >= (p.PRIORITY_HIGH_THRESHOLD || 35) ? 'HIGH' : score >= (p.PRIORITY_MEDIUM_THRESHOLD || 18) ? 'MEDIUM' : 'LOW';
    return { priority, score };
  };

  const calcStrategy = (entityId, p) => {
    const evts = events.filter(e => e.entityId === entityId);
    const h = entityHealth.find(x => x.objectId === entityId);
    const overdue = rects.filter(t => t.entityId === entityId && t.deadline && t.deadline < TODAY && t.status !== '已关闭').length;
    const highRisk = evts.filter(e => e.riskLevel === 'HIGH').length;
    if (highRisk >= (p.STRATEGY_FOCUS_HIGH_RISK_MIN || 2) && h?.level === 'CRITICAL' && overdue >= (p.STRATEGY_FOCUS_OVERDUE_MIN || 1)) return 'FOCUS';
    if (cdrMatters.some(m => (m.entityIds || []).includes(entityId)) || h?.level === 'WARNING') return 'SPECIAL';
    return 'ROUTINE';
  };

  const countNewActions = (entityId, afterPri) => {
    const existing = actions.filter(a => a.entityId === entityId).length;
    const wouldTrigger = ['CRITICAL', 'HIGH'].includes(afterPri) ? 1 : 0;
    return Math.max(0, wouldTrigger - (existing > 0 ? 0 : 0));
  };

  const buildImpact = (changeRequestId, ruleId, beforeP, afterP, beforeVersionId, afterVersionId) => {
    const affectedEntities = [];
    const affectedRegions = new Set();
    const affectedRiskMatters = new Set();
    const affectedActions = [];
    entities.forEach(ent => {
      const cur = priorities[ent.entityId] || {};
      const before = calcPriority(ent.entityId, beforeP);
      const after = calcPriority(ent.entityId, afterP);
      const stratBefore = (strategy.entities || []).find(x => x.objectId === ent.entityId)?.strategyLevel || calcStrategy(ent.entityId, beforeP);
      const stratAfter = calcStrategy(ent.entityId, afterP);
      if (before.priority !== after.priority || stratBefore !== stratAfter) {
        const newActs = countNewActions(ent.entityId, after.priority);
        const entWarns = warnings.filter(w => w.entityId === ent.entityId).map(w => w.id);
        entWarns.forEach(id => affectedRiskMatters.add(id));
        if (ent.regionId) affectedRegions.add(ent.regionId);
        affectedEntities.push({
          entityId: ent.entityId,
          entityName: ent.entityName,
          beforePriority: before.priority,
          afterPriority: after.priority,
          scoreChange: after.score - before.score,
          strategyBefore: stratBefore,
          strategyAfter: stratAfter,
          newActionCount: newActs,
          simulationOnly: true
        });
        if (newActs > 0) {
          const act = actions.find(a => a.entityId === ent.entityId);
          if (act) affectedActions.push(act.actionId);
        }
      }
    });
    const upgrades = affectedEntities.filter(e => ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].indexOf(e.afterPriority) > ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].indexOf(e.beforePriority)).length;
    const downgrades = affectedEntities.filter(e => ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].indexOf(e.afterPriority) < ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].indexOf(e.beforePriority)).length;
    const stratChanges = affectedEntities.filter(e => e.strategyBefore !== e.strategyAfter).length;
    const newActionCount = affectedEntities.reduce((s, e) => s + (e.newActionCount || 0), 0);
    const beforeCrit = Object.values(priorities).filter(p => p.priority === 'CRITICAL').length;
    const beforeHigh = Object.values(priorities).filter(p => p.priority === 'HIGH').length;
    const afterPriorities = {};
    entities.forEach(e => { afterPriorities[e.entityId] = calcPriority(e.entityId, afterP); });
    const afterCrit = Object.values(afterPriorities).filter(p => p.priority === 'CRITICAL').length;
    const afterHigh = Object.values(afterPriorities).filter(p => p.priority === 'HIGH').length;
    const beforeSpecial = (strategy.entities || []).filter(e => e.strategyLevel === 'SPECIAL' || e.strategyLevel === 'FOCUS').length;
    const afterSpecial = entities.filter(e => ['SPECIAL', 'FOCUS'].includes(calcStrategy(e.entityId, afterP))).length;
    return {
      impactAnalysisId: 'IMP-' + changeRequestId,
      changeRequestId,
      ruleId,
      beforeVersionId,
      afterVersionId,
      affectedEntities,
      affectedRegions: [...affectedRegions],
      affectedRiskMatters: [...affectedRiskMatters],
      affectedActions,
      summary: {
        affectedEntityCount: affectedEntities.length,
        priorityUpgradeCount: upgrades,
        priorityDowngradeCount: downgrades,
        strategyChangeCount: stratChanges,
        newActionCount,
        beforeCriticalCount: beforeCrit,
        afterCriticalCount: afterCrit,
        beforeHighCount: beforeHigh,
        afterHighCount: afterHigh,
        beforeSpecialCount: beforeSpecial,
        afterSpecialCount: afterSpecial
      },
      comparisonTable: [
        { metric: 'CRITICAL 法人', before: beforeCrit, after: afterCrit, change: afterCrit - beforeCrit },
        { metric: 'HIGH 法人', before: beforeHigh, after: afterHigh, change: afterHigh - beforeHigh },
        { metric: 'SPECIAL/FOCUS 法人', before: beforeSpecial, after: afterSpecial, change: afterSpecial - beforeSpecial },
        { metric: '新增监管行动', before: 0, after: newActionCount, change: newActionCount }
      ],
      generatedAt: TODAY,
      simulationOnly: true
    };
  };

  const versions = [];
  govFamilies.forEach((fam, idx) => {
    const vId = 'RULE-V' + String(idx + 1).padStart(3, '0');
    versions.push({
      versionId: vId,
      ruleId: fam.ruleId,
      versionNo: '1.0.0',
      ruleName: fam.ruleName,
      ruleType: fam.ruleType,
      status: 'ACTIVE',
      basedOnVersionId: null,
      parameterSnapshot: buildSnapshot(fam.paramIds),
      logicRef: fam.logicRef,
      phase10RuleIds: fam.phase10Ids,
      changeType: 'INITIAL_RELEASE',
      changeSummary: '系统初始规则版本',
      createdAt: '2026-07-01',
      submittedAt: '2026-07-01',
      approvedAt: '2026-07-01',
      publishedAt: '2026-07-01',
      effectiveFrom: '2026-07-01',
      createdBy: '系统默认',
      approvedBy: '系统默认',
      publishedBy: '系统默认',
      sourceType: 'SYSTEM_DEFAULT',
      effectivenessLevel: null,
      needsOptimization: false
    });
  });

  const proposedOverrides = { PRIORITY_OVERDUE_RECTIFICATION_WEIGHT: 25, PRIORITY_HIGH_THRESHOLD: 50 };
  const baseP = { ...paramMap(), PRIORITY_QUALITY_WEIGHT: 6, PRIORITY_CB_RISK_WEIGHT: 10, PRIORITY_CDR_WEIGHT: 8, PRIORITY_WARNING_HEALTH_SCORE: 12, PRIORITY_MEDIUM_THRESHOLD: 18, PRIORITY_LONG_OPEN_RECT_WEIGHT: 8 };
  const afterP = { ...baseP, ...proposedOverrides };

  const changeRequests = [
    {
      changeRequestId: 'CR-001',
      ruleId: 'RULE-001',
      baseVersionId: 'RULE-V001',
      proposedVersionId: 'RULE-V001',
      changeReason: '系统初始发布',
      changeSummary: '监管优先级规则初始版本正式发布',
      parameterChanges: [],
      logicChanges: [],
      simulationIds: ['SIM-BASE'],
      impactAnalysisId: 'IMP-CR-001',
      affectedEntityIds: [],
      affectedRegionIds: [],
      affectedRiskMatterIds: [],
      affectedActionIds: [],
      status: 'PUBLISHED',
      applicant: '系统默认',
      applicantDepartment: '集团监管部',
      submittedAt: '2026-07-01',
      approvedBy: '系统默认',
      approvedAt: '2026-07-01',
      rejectionReason: null,
      sourceType: 'SYSTEM_DEFAULT'
    },
    {
      changeRequestId: 'CR-002',
      ruleId: 'RULE-001',
      baseVersionId: 'RULE-V001',
      proposedVersionId: 'RULE-V006',
      changeReason: '提高超期整改权重并调整HIGH阈值，强化重点法人识别',
      changeSummary: '参数调整：超期整改权重 18→25，HIGH阈值 35→50',
      parameterChanges: Object.keys(proposedOverrides).map(k => ({ paramId: k, beforeValue: baseP[k], afterValue: proposedOverrides[k] })),
      logicChanges: [],
      simulationIds: ['SIM-PRI-WEIGHT'],
      impactAnalysisId: 'IMP-CR-002',
      affectedEntityIds: [],
      affectedRegionIds: [],
      affectedRiskMatterIds: [],
      affectedActionIds: [],
      status: 'PENDING_APPROVAL',
      applicant: '系统默认',
      applicantDepartment: '集团监管部',
      submittedAt: '2026-07-20',
      approvedBy: null,
      approvedAt: null,
      rejectionReason: null,
      sourceType: 'SYSTEM_DEFAULT'
    },
    {
      changeRequestId: 'CR-003',
      ruleId: 'RULE-002',
      baseVersionId: 'RULE-V002',
      proposedVersionId: null,
      changeReason: '优化策略分层阈值',
      changeSummary: '草稿：调整重点策略触发条件',
      parameterChanges: [{ paramId: 'STRATEGY_FOCUS_HIGH_RISK_MIN', beforeValue: 2, afterValue: 3 }],
      logicChanges: [],
      simulationIds: [],
      impactAnalysisId: null,
      affectedEntityIds: [],
      affectedRegionIds: [],
      affectedRiskMatterIds: [],
      affectedActionIds: [],
      status: 'DRAFT',
      applicant: '系统默认',
      applicantDepartment: '集团监管部',
      submittedAt: null,
      approvedBy: null,
      approvedAt: null,
      rejectionReason: null,
      sourceType: 'SYSTEM_DEFAULT'
    },
    {
      changeRequestId: 'CR-004',
      ruleId: 'RULE-001',
      baseVersionId: 'RULE-V001',
      proposedVersionId: 'RULE-V006',
      changeReason: 'KRI异常权重提升验证',
      changeSummary: '仿真验证 KRI 权重 5→12',
      parameterChanges: [{ paramId: 'PRIORITY_KRI_WEIGHT', beforeValue: 5, afterValue: 12 }],
      logicChanges: [],
      simulationIds: ['SIM-KRI'],
      impactAnalysisId: 'IMP-CR-004',
      affectedEntityIds: [],
      affectedRegionIds: [],
      affectedRiskMatterIds: [],
      affectedActionIds: [],
      status: 'IMPACT_ASSESSED',
      applicant: '系统默认',
      applicantDepartment: '集团监管部',
      submittedAt: '2026-07-18',
      approvedBy: null,
      approvedAt: null,
      rejectionReason: null,
      sourceType: 'SYSTEM_DEFAULT'
    },
    {
      changeRequestId: 'CR-005',
      ruleId: 'RULE-004',
      baseVersionId: 'RULE-V004',
      proposedVersionId: 'RULE-V007',
      changeReason: '提高闭环监管维度权重',
      changeSummary: '成熟度权重调整已通过审批，待发布',
      parameterChanges: [{ paramId: 'MATURITY_CLOSURE_WEIGHT', beforeValue: 25, afterValue: 30 }],
      logicChanges: [],
      simulationIds: ['SIM-MAT-WEIGHT'],
      impactAnalysisId: 'IMP-CR-005',
      affectedEntityIds: [],
      affectedRegionIds: [],
      affectedRiskMatterIds: [],
      affectedActionIds: [],
      status: 'APPROVED',
      applicant: '系统默认',
      applicantDepartment: '集团监管部',
      submittedAt: '2026-07-15',
      approvedBy: '系统默认',
      approvedAt: '2026-07-19',
      rejectionReason: null,
      sourceType: 'SYSTEM_DEFAULT'
    }
  ];

  versions.push({
    versionId: 'RULE-V006',
    ruleId: 'RULE-001',
    versionNo: '1.1.0',
    ruleName: '监管优先级规则',
    ruleType: 'PRIORITY',
    status: 'PENDING_PUBLISH',
    basedOnVersionId: 'RULE-V001',
    parameterSnapshot: { ...buildSnapshot(govFamilies[0].paramIds), ...proposedOverrides },
    logicRef: 'calculateRegulatoryPriority',
    phase10RuleIds: govFamilies[0].phase10Ids,
    changeType: 'PARAMETER_CHANGE',
    changeSummary: '超期整改权重与HIGH阈值调整',
    createdAt: '2026-07-20',
    submittedAt: '2026-07-20',
    approvedAt: null,
    publishedAt: null,
    effectiveFrom: null,
    createdBy: '系统默认',
    approvedBy: null,
    publishedBy: null,
    sourceType: 'SYSTEM_DEFAULT',
    effectivenessLevel: null,
    needsOptimization: false
  });

  versions.push({
    versionId: 'RULE-V007',
    ruleId: 'RULE-004',
    versionNo: '1.1.0',
    ruleName: '监管成熟度评分规则',
    ruleType: 'MATURITY',
    status: 'APPROVED',
    basedOnVersionId: 'RULE-V004',
    parameterSnapshot: { ...buildSnapshot(govFamilies[3].paramIds), MATURITY_CLOSURE_WEIGHT: 30 },
    logicRef: 'regulatoryMaturity',
    phase10RuleIds: govFamilies[3].phase10Ids,
    changeType: 'PARAMETER_CHANGE',
    changeSummary: '闭环监管维度权重 25→30',
    createdAt: '2026-07-15',
    submittedAt: '2026-07-15',
    approvedAt: '2026-07-19',
    publishedAt: null,
    effectiveFrom: null,
    createdBy: '系统默认',
    approvedBy: '系统默认',
    publishedBy: null,
    sourceType: 'SYSTEM_DEFAULT',
    effectivenessLevel: null,
    needsOptimization: false
  });

  const impactAnalyses = [
    buildImpact('CR-001', 'RULE-001', baseP, baseP, 'RULE-V001', 'RULE-V001'),
    buildImpact('CR-002', 'RULE-001', baseP, afterP, 'RULE-V001', 'RULE-V006'),
    buildImpact('CR-004', 'RULE-001', baseP, { ...baseP, PRIORITY_KRI_WEIGHT: 12 }, 'RULE-V001', 'RULE-V006'),
    buildImpact('CR-005', 'RULE-004', baseP, { ...baseP, MATURITY_CLOSURE_WEIGHT: 30 }, 'RULE-V004', 'RULE-V007')
  ];

  changeRequests.forEach(cr => {
    const imp = impactAnalyses.find(i => i.impactAnalysisId === cr.impactAnalysisId);
    if (imp) {
      cr.affectedEntityIds = imp.affectedEntities.map(e => e.entityId);
      cr.affectedRegionIds = imp.affectedRegions;
      cr.affectedRiskMatterIds = imp.affectedRiskMatters;
      cr.affectedActionIds = imp.affectedActions;
    }
  });

  const approvalStages = ['RULE_OWNER_REVIEW', 'BUSINESS_REVIEW', 'RISK_REVIEW', 'FINAL_APPROVAL'];
  const approvals = [];
  changeRequests.filter(cr => ['PENDING_APPROVAL', 'APPROVED', 'PUBLISHED'].includes(cr.status)).forEach(cr => {
    const ver = versions.find(v => v.versionId === (cr.proposedVersionId || cr.baseVersionId));
    approvalStages.forEach((stage, si) => {
      const isPublished = cr.status === 'PUBLISHED';
      const isApproved = cr.status === 'APPROVED' || isPublished;
      const isPending = cr.status === 'PENDING_APPROVAL';
      let approvalStatus = 'PENDING';
      if (isPublished) approvalStatus = 'APPROVED';
      else if (isApproved && si < approvalStages.length) approvalStatus = 'APPROVED';
      else if (isPending && si === 0) approvalStatus = 'APPROVED';
      else if (isPending && si === 1) approvalStatus = 'PENDING';
      else if (isPending) approvalStatus = 'WAITING';
      approvals.push({
        approvalId: 'APR-' + cr.changeRequestId.replace('CR-', '') + '-' + String(si + 1).padStart(2, '0'),
        changeRequestId: cr.changeRequestId,
        ruleId: cr.ruleId,
        versionId: ver ? ver.versionId : cr.baseVersionId,
        approvalStage: stage,
        approvalStatus,
        approver: approvalStatus === 'APPROVED' ? '系统默认' : (approvalStatus === 'PENDING' ? '待指定' : '—'),
        approvalComment: approvalStatus === 'APPROVED' ? '系统默认审批通过' : null,
        submittedAt: cr.submittedAt || TODAY,
        approvedAt: approvalStatus === 'APPROVED' ? (cr.approvedAt || cr.submittedAt || TODAY) : null,
        sourceType: 'SYSTEM_DEFAULT'
      });
    });
  });

  const calcRuntimeMetrics = (ruleId, versionId) => {
    const fam = govFamilies.find(f => f.ruleId === ruleId);
    const totalEvents = events.length;
    const highEvents = events.filter(e => e.riskLevel === 'HIGH').length;
    const totalWarnings = warnings.length;
    const closedRects = rects.filter(t => t.status === '已关闭' || t.closedAt).length;
    const overdueRects = rects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭').length;
    const verifiedActs = actions.filter(a => a.status === 'VERIFIED').length;
    const completedActs = actions.filter(a => ['COMPLETED', 'VERIFIED'].includes(a.status)).length;
    const hasHistory = (APP_DATA.regulatoryMaturityTrend || {}).periods?.length > 1;
    const base = {
      ruleId,
      versionId,
      evaluationPeriodStart: '2026-04-01',
      evaluationPeriodEnd: '2026-07-22',
      sourceType: 'SYSTEM_DEFAULT'
    };
    if (!hasHistory && ruleId !== 'RULE-005') {
      return { ...base, dataStatus: 'INSUFFICIENT_HISTORY', eventRecognitionRate: null, highRiskRecognitionRate: null, falsePositiveRate: null, rectificationClosureRate: null, overdueRectificationRate: null, averageActionDuration: null, averageRiskClosureDuration: null, actionVerificationRate: null };
    }
    return {
      ...base,
      dataStatus: 'CALCULATED',
      eventRecognitionRate: totalWarnings ? Math.round(totalEvents / totalWarnings * 100) : null,
      highRiskRecognitionRate: totalWarnings ? Math.round(highEvents / totalWarnings * 100) : null,
      falsePositiveRate: null,
      rectificationClosureRate: rects.length ? Math.round(closedRects / rects.length * 100) : null,
      overdueRectificationRate: rects.length ? Math.round(overdueRects / rects.length * 100) : null,
      averageActionDuration: completedActs ? Math.round(actions.filter(a => ['COMPLETED', 'VERIFIED'].includes(a.status)).reduce((s, a) => s + (a.durationDays || 14), 0) / completedActs) : null,
      averageRiskClosureDuration: null,
      actionVerificationRate: actions.length ? Math.round(verifiedActs / actions.length * 100) : null
    };
  };

  const runtimeMetrics = versions.filter(v => v.status === 'ACTIVE').map(v => calcRuntimeMetrics(v.ruleId, v.versionId));

  const effectiveness = versions.filter(v => v.status === 'ACTIVE').map((v, i) => {
    const metrics = runtimeMetrics.find(m => m.versionId === v.versionId);
    const hasData = metrics && metrics.dataStatus === 'CALCULATED';
    const optRecs = (APP_DATA.regulatoryOptimizationRecommendations || []).slice(0, 2).map(r => r.recommendationId);
    return {
      effectivenessId: 'EFF-' + String(i + 1).padStart(3, '0'),
      ruleId: v.ruleId,
      versionId: v.versionId,
      evaluationPeriod: '2026-Q2',
      beforeMetrics: hasData ? { actionVerificationRate: Math.max(0, (metrics.actionVerificationRate || 0) - 5) } : {},
      afterMetrics: hasData ? { actionVerificationRate: metrics.actionVerificationRate } : {},
      effectivenessScore: hasData ? Math.min(100, Math.round((metrics.actionVerificationRate || 0) * 0.6 + (metrics.rectificationClosureRate || 0) * 0.4)) : null,
      effectivenessLevel: hasData ? (metrics.actionVerificationRate >= 80 ? 'GOOD' : metrics.actionVerificationRate >= 60 ? 'ATTENTION' : 'INEFFECTIVE') : 'INSUFFICIENT_DATA',
      improvementItems: hasData ? ['行动验证率较基线提升'] : [],
      degradationItems: hasData && metrics.overdueRectificationRate > 20 ? ['超期整改率偏高'] : [],
      recommendationIds: optRecs,
      evaluationStatus: hasData ? 'PRELIMINARY' : 'INSUFFICIENT_DATA',
      dataStatus: hasData ? 'CALCULATED' : 'INSUFFICIENT_HISTORY'
    };
  });

  versions.forEach(v => {
    const eff = effectiveness.find(e => e.versionId === v.versionId);
    if (eff) {
      v.effectivenessLevel = eff.effectivenessLevel;
      v.needsOptimization = ['ATTENTION', 'INEFFECTIVE', 'INSUFFICIENT_DATA'].includes(eff.effectivenessLevel);
    }
  });

  const optimizationLoop = effectiveness.filter(e => ['ATTENTION', 'INEFFECTIVE'].includes(e.effectivenessLevel)).map((e, i) => ({
    optimizationId: 'OPT-RULE-' + String(i + 1).padStart(3, '0'),
    ruleId: e.ruleId,
    currentVersionId: e.versionId,
    triggerType: e.effectivenessLevel === 'INEFFECTIVE' ? 'EFFECTIVENESS_DECLINE' : 'MATURENESS_GAP',
    triggerSourceIds: e.recommendationIds,
    recommendation: e.effectivenessLevel === 'INEFFECTIVE' ? '建议复核规则参数并提交变更申请' : '建议结合成熟度短板优化规则权重',
    suggestedParameterChanges: e.ruleId === 'RULE-001' ? [{ paramId: 'PRIORITY_OVERDUE_RECTIFICATION_WEIGHT', suggestedValue: 22 }] : [],
    simulationRequired: true,
    nextChangeRequestId: e.ruleId === 'RULE-001' ? 'CR-002' : null,
    sourceType: 'SYSTEM_DEFAULT'
  }));

  if (!optimizationLoop.length) {
    optimizationLoop.push({
      optimizationId: 'OPT-RULE-001',
      ruleId: 'RULE-001',
      currentVersionId: 'RULE-V001',
      triggerType: 'MANUAL_REVIEW',
      triggerSourceIds: [],
      recommendation: '建议定期复核优先级权重与阈值',
      suggestedParameterChanges: [],
      simulationRequired: true,
      nextChangeRequestId: 'CR-002',
      sourceType: 'SYSTEM_DEFAULT'
    });
  }

  APP_DATA.regulatoryRuleVersions = versions;
  APP_DATA.regulatoryRuleChangeRequests = changeRequests;
  APP_DATA.regulatoryRuleApprovals = approvals;
  APP_DATA.regulatoryRuleImpactAnalysis = impactAnalyses;
  APP_DATA.regulatoryRuleRuntimeMetrics = runtimeMetrics;
  APP_DATA.regulatoryRuleEffectiveness = effectiveness;
  APP_DATA.regulatoryRuleOptimizationLoop = optimizationLoop;

  APP_DATA.regulatoryRuleGovernanceMetrics = {
    totalRules: govFamilies.length,
    activeVersions: versions.filter(v => v.status === 'ACTIVE').length,
    pendingPublishVersions: versions.filter(v => ['PENDING_PUBLISH', 'APPROVED'].includes(v.status)).length,
    pendingApprovalChanges: changeRequests.filter(cr => cr.status === 'PENDING_APPROVAL').length,
    changesLast30Days: changeRequests.filter(cr => cr.submittedAt && cr.submittedAt >= '2026-06-22').length,
    needsReevaluation: versions.filter(v => v.needsOptimization).length,
    totalVersions: versions.length,
    publishedChanges: changeRequests.filter(cr => cr.status === 'PUBLISHED').length,
    impactAssessedCount: changeRequests.filter(cr => ['IMPACT_ASSESSED', 'PENDING_APPROVAL', 'APPROVED', 'PUBLISHED'].includes(cr.status)).length
  };
})();

(function () {
  const TODAY = '2026-07-22';
  const versions = APP_DATA.regulatoryRuleVersions || [];
  const changeRequests = APP_DATA.regulatoryRuleChangeRequests || [];
  const approvals = APP_DATA.regulatoryRuleApprovals || [];
  const priorities = APP_DATA.regulatoryPrioritiesRecalculated || APP_DATA.regulatoryPriorities || {};
  const entities = (APP_DATA.globalLegalEntities || []).filter(e => e.entityId !== 'G001');
  const events = APP_DATA.regulatoryEvents || [];
  const warnings = APP_DATA.warnings || [];
  const rects = APP_DATA.rectificationTasks || [];
  const actions = APP_DATA.regulatoryActions || [];
  const quality = APP_DATA.dataQualityIssues || [];
  const kris = APP_DATA.groupKris || [];
  const strategy = APP_DATA.regulatoryStrategyAnalysis || {};

  const activeGovVersions = versions.filter(v => v.status === 'ACTIVE' && ['RULE-001', 'RULE-002', 'RULE-003', 'RULE-004', 'RULE-005'].includes(v.ruleId));

  const deployments = [];
  activeGovVersions.forEach((ver, idx) => {
    const cr = changeRequests.find(c => c.ruleId === ver.ruleId && c.status === 'PUBLISHED')
      || changeRequests.find(c => c.ruleId === ver.ruleId);
    const apr = cr ? approvals.find(a => a.changeRequestId === cr.changeRequestId && a.approvalStage === 'FINAL_APPROVAL') : null;
    const simId = (cr?.simulationIds || [])[0] || 'SIM-BASE';
    const impId = cr?.impactAnalysisId || null;
    deployments.push({
      deploymentId: 'DEPLOY-' + String(idx + 1).padStart(3, '0'),
      ruleId: ver.ruleId,
      versionId: ver.versionId,
      ruleName: ver.ruleName,
      deploymentStatus: 'ACTIVE',
      environment: 'PRODUCTION',
      effectiveAt: ver.effectiveFrom + 'T00:00:00',
      deployedAt: (ver.publishedAt || ver.effectiveFrom) + 'T09:00:00',
      deployedBy: ver.publishedBy || '系统默认',
      previousVersionId: ver.basedOnVersionId,
      rollbackVersionId: ver.basedOnVersionId,
      parameterSnapshot: ver.parameterSnapshot || {},
      changeRequestId: cr?.changeRequestId || null,
      approvalId: apr?.approvalId || null,
      simulationId: simId,
      impactAnalysisId: impId,
      lastExecutedAt: null,
      executionCount: 0,
      sourceType: 'SYSTEM_DEFAULT'
    });
  });

  const supersededDeploy = {
    deploymentId: 'DEPLOY-000',
    ruleId: 'RULE-001',
    versionId: 'RULE-V001',
    ruleName: '监管优先级规则',
    deploymentStatus: 'SUPERSEDED',
    environment: 'PRODUCTION',
    effectiveAt: '2026-06-01T00:00:00',
    deployedAt: '2026-06-01T09:00:00',
    deployedBy: '系统默认',
    previousVersionId: null,
    rollbackVersionId: 'RULE-V001',
    parameterSnapshot: deployments.find(d => d.ruleId === 'RULE-001')?.parameterSnapshot || {},
    changeRequestId: 'CR-001',
    approvalId: 'APR-001-04',
    simulationId: 'SIM-BASE',
    impactAnalysisId: 'IMP-CR-001',
    lastExecutedAt: '2026-06-28T18:00:00',
    executionCount: 0,
    sourceType: 'SYSTEM_DEFAULT'
  };
  deployments.unshift(supersededDeploy);

  const PRIORITY_ORDER = { LOW: 0, MEDIUM: 1, HIGH: 2, CRITICAL: 3 };
  const changeTypeOf = (before, after) => {
    if (!before || !after) return 'NO_CHANGE';
    if (PRIORITY_ORDER[after] > PRIORITY_ORDER[before]) return 'PRIORITY_UPGRADED';
    if (PRIORITY_ORDER[after] < PRIORITY_ORDER[before]) return 'PRIORITY_DOWNGRADED';
    return 'NO_CHANGE';
  };

  const executions = [];
  const runtimeLogs = [];
  let execSeq = 0;
  const deploy001 = deployments.find(d => d.ruleId === 'RULE-001' && d.deploymentStatus === 'ACTIVE');

  const execDates = ['2026-07-16', '2026-07-17', '2026-07-18', '2026-07-19', '2026-07-20', '2026-07-21', '2026-07-22'];

  entities.forEach((ent, ei) => {
    const curP = priorities[ent.entityId] || {};
    const entEvts = events.filter(e => e.entityId === ent.entityId);
    const entWarns = warnings.filter(w => w.entityId === ent.entityId);
    const entRects = rects.filter(t => t.entityId === ent.entityId);
    const entActs = actions.filter(a => a.entityId === ent.entityId);
    const highRisk = entEvts.filter(e => e.riskLevel === 'HIGH').length;
    const overdue = entRects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭').length;
    const kriExc = ent.kriExceptionCount || 0;
    const prevPri = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
    const prevIdx = Math.max(0, (PRIORITY_ORDER[curP.priority] || 0) - (highRisk > 0 || overdue > 0 ? 1 : 0));
    const previousPriority = prevPri[prevIdx];
    const previousScore = Math.max(0, (curP.score || 0) - (highRisk * 8 + overdue * 10 + kriExc * 3));
    const changed = previousPriority !== curP.priority;
    const dateIdx = ei % execDates.length;
    const executedAt = execDates[dateIdx] + 'T' + String(9 + (ei % 8)).padStart(2, '0') + ':00:00';

    if (deploy001) {
      execSeq++;
      const execId = 'EXEC-' + String(execSeq).padStart(3, '0');
      const relEvts = entEvts.slice(0, 2).map(e => e.eventId);
      const relRisks = entWarns.slice(0, 2).map(w => w.id);
      const relActs = entActs.slice(0, 2).map(a => a.actionId);
      const ct = changeTypeOf(previousPriority, curP.priority);
      executions.push({
        executionId: execId,
        ruleId: 'RULE-001',
        versionId: deploy001.versionId,
        deploymentId: deploy001.deploymentId,
        entityId: ent.entityId,
        entityName: ent.entityName,
        executionMode: 'PRODUCTION',
        simulationOnly: false,
        executedAt,
        inputSnapshot: { highRiskEventCount: highRisk, overdueRectificationCount: overdue, kriExceptionCount: kriExc },
        previousResult: { priority: previousPriority, score: previousScore },
        currentResult: { priority: curP.priority, score: curP.score || 0 },
        resultChanged: changed,
        changeType: ct,
        relatedEventIds: relEvts,
        relatedRiskMatterIds: relRisks,
        relatedActionIds: relActs,
        executionStatus: 'SUCCESS'
      });
      runtimeLogs.push({
        runtimeLogId: 'RUNTIME-' + String(execSeq).padStart(3, '0'),
        ruleId: 'RULE-001',
        versionId: deploy001.versionId,
        deploymentId: deploy001.deploymentId,
        executionId: execId,
        executionStatus: 'SUCCESS',
        executionDurationMs: 12 + (ei % 20),
        inputRecordCount: highRisk + overdue + kriExc + entWarns.length,
        outputRecordCount: changed ? 1 : 0,
        errorCount: 0,
        warningCount: kriExc > 0 ? 1 : 0,
        executedAt
      });
    }

    if (ei < 2) {
      const depStrat = deployments.find(d => d.ruleId === 'RULE-002' && d.deploymentStatus === 'ACTIVE');
      if (depStrat) {
        execSeq++;
        const strat = (strategy.entities || []).find(x => x.objectId === ent.entityId);
        executions.push({
          executionId: 'EXEC-' + String(execSeq).padStart(3, '0'),
          ruleId: 'RULE-002',
          versionId: depStrat.versionId,
          deploymentId: depStrat.deploymentId,
          entityId: ent.entityId,
          entityName: ent.entityName,
          executionMode: 'PRODUCTION',
          simulationOnly: false,
          executedAt: execDates[(ei + 2) % execDates.length] + 'T14:00:00',
          inputSnapshot: { highRiskEventCount: highRisk, strategyLevel: strat?.strategyLevel || 'ROUTINE' },
          previousResult: { strategy: 'ROUTINE' },
          currentResult: { strategy: strat?.strategyLevel || 'ROUTINE' },
          resultChanged: strat && strat.strategyLevel !== 'ROUTINE',
          changeType: strat?.strategyLevel === 'FOCUS' ? 'STRATEGY_ESCALATED' : 'NO_CHANGE',
          relatedEventIds: entEvts.slice(0, 1).map(e => e.eventId),
          relatedRiskMatterIds: [],
          relatedActionIds: [],
          executionStatus: 'SUCCESS'
        });
      }
    }
  });

  const failedExec = {
    executionId: 'EXEC-' + String(++execSeq).padStart(3, '0'),
    ruleId: 'RULE-001',
    versionId: deploy001?.versionId,
    deploymentId: deploy001?.deploymentId,
    entityId: 'C001',
    entityName: 'C项目公司',
    executionMode: 'PRODUCTION',
    simulationOnly: false,
    executedAt: '2026-07-21T16:30:00',
    inputSnapshot: { highRiskEventCount: 0, overdueRectificationCount: 0, kriExceptionCount: 4 },
    previousResult: { priority: 'HIGH', score: 49 },
    currentResult: null,
    resultChanged: false,
    changeType: 'EXECUTION_FAILED',
    relatedEventIds: [],
    relatedRiskMatterIds: [],
    relatedActionIds: [],
    executionStatus: 'FAILED',
    errorMessage: '输入数据不足'
  };
  executions.push(failedExec);
  runtimeLogs.push({
    runtimeLogId: 'RUNTIME-' + String(execSeq).padStart(3, '0'),
    ruleId: 'RULE-001',
    versionId: deploy001?.versionId,
    deploymentId: deploy001?.deploymentId,
    executionId: failedExec.executionId,
    executionStatus: 'FAILED',
    executionDurationMs: 120,
    inputRecordCount: 4,
    outputRecordCount: 0,
    errorCount: 1,
    warningCount: 0,
    executedAt: failedExec.executedAt
  });

  deployments.forEach(dep => {
    const depExecs = executions.filter(e => e.deploymentId === dep.deploymentId);
    dep.executionCount = depExecs.length;
    dep.lastExecutedAt = depExecs.length ? depExecs.sort((a, b) => b.executedAt.localeCompare(a.executedAt))[0].executedAt : null;
  });

  const rollbacks = [{
    rollbackId: 'ROLLBACK-001',
    ruleId: 'RULE-001',
    fromVersionId: 'RULE-V006',
    toVersionId: 'RULE-V001',
    fromDeploymentId: null,
    toDeploymentId: deploy001?.deploymentId,
    reason: '试运行版本参数导致优先级波动异常，回滚至稳定版本',
    triggerType: 'MANUAL',
    initiatedBy: '系统默认',
    initiatedAt: '2026-06-28T11:00:00',
    rollbackStatus: 'COMPLETED',
    affectedExecutionCount: executions.filter(e => e.ruleId === 'RULE-001').length,
    sourceType: 'SYSTEM_DEFAULT'
  }];

  const todayExecs = executions.filter(e => e.executedAt && e.executedAt.startsWith(TODAY));
  const successExecs = executions.filter(e => e.executionStatus === 'SUCCESS');
  const failedExecs = executions.filter(e => e.executionStatus === 'FAILED');
  const changedExecs = executions.filter(e => e.resultChanged);
  const hitExecs = executions.filter(e => e.executionStatus === 'SUCCESS' && (e.resultChanged || (e.relatedActionIds || []).length));

  const trend7 = execDates.map(date => {
    const dayExecs = executions.filter(e => e.executedAt && e.executedAt.startsWith(date));
    return {
      period: date,
      executionCount: dayExecs.length,
      successCount: dayExecs.filter(e => e.executionStatus === 'SUCCESS').length,
      failedCount: dayExecs.filter(e => e.executionStatus === 'FAILED').length,
      hitCount: dayExecs.filter(e => e.resultChanged).length,
      changedCount: dayExecs.filter(e => e.resultChanged).length
    };
  });

  const anomalies = [];
  if (failedExecs.length) {
    anomalies.push({
      anomalyId: 'ANOM-001',
      anomalyType: 'EXECUTION_FAILED',
      ruleId: failedExec.executionId ? 'RULE-001' : 'RULE-001',
      versionId: failedExec.versionId,
      deploymentId: failedExec.deploymentId,
      executionId: failedExec.executionId,
      entityId: failedExec.entityId,
      severity: 'HIGH',
      description: '规则执行失败：输入数据不足',
      detectedAt: failedExec.executedAt,
      sourceType: 'SYSTEM_DETECTED'
    });
  }
  const c001Execs = executions.filter(e => e.entityId === 'C001' && e.resultChanged);
  if (c001Execs.length >= 1 && (entities.find(e => e.entityId === 'C001')?.kriExceptionCount || 0) > 0) {
    anomalies.push({
      anomalyId: 'ANOM-002',
      anomalyType: 'RESULT_CHANGE_WITH_DATA_QUALITY',
      ruleId: 'RULE-001',
      versionId: deploy001?.versionId,
      deploymentId: deploy001?.deploymentId,
      executionId: c001Execs[0]?.executionId,
      entityId: 'C001',
      severity: 'MEDIUM',
      description: '法人 C001 规则结果变化与 KRI 异常同时出现',
      detectedAt: c001Execs[0]?.executedAt,
      sourceType: 'SYSTEM_DETECTED'
    });
  }
  const b001Rapid = executions.find(e => e.entityId === 'B001' && e.changeType === 'PRIORITY_UPGRADED');
  if (b001Rapid) {
    anomalies.push({
      anomalyId: 'ANOM-003',
      anomalyType: 'PRIORITY_RAPID_RISE',
      ruleId: 'RULE-001',
      versionId: b001Rapid.versionId,
      deploymentId: b001Rapid.deploymentId,
      executionId: b001Rapid.executionId,
      entityId: 'B001',
      severity: 'HIGH',
      description: '法人 B001 监管优先级短期内快速上升',
      detectedAt: b001Rapid.executedAt,
      sourceType: 'SYSTEM_DETECTED'
    });
  }
  const failRate = executions.length ? failedExecs.length / executions.length : 0;
  if (failRate > 0.05) {
    anomalies.push({
      anomalyId: 'ANOM-004',
      anomalyType: 'FAILURE_RATE_ELEVATED',
      ruleId: 'RULE-001',
      versionId: deploy001?.versionId,
      deploymentId: deploy001?.deploymentId,
      executionId: failedExec.executionId,
      entityId: null,
      severity: 'MEDIUM',
      description: `规则执行失败率 ${Math.round(failRate * 100)}% 超过阈值`,
      detectedAt: TODAY + 'T18:00:00',
      sourceType: 'SYSTEM_DETECTED'
    });
  }

  const activeDeployCount = deployments.filter(d => d.deploymentStatus === 'ACTIVE').length;
  const executionMetrics = {
    totalRules: activeGovVersions.length,
    activeRules: activeGovVersions.length,
    productionRules: activeDeployCount,
    todayExecutionCount: todayExecs.length,
    executionSuccessRate: executions.length ? Math.round(successExecs.length / executions.length * 100) : 100,
    executionFailureCount: failedExecs.length,
    ruleHitCount: hitExecs.length,
    resultChangedCount: changedExecs.length,
    triggeredActionCount: executions.reduce((s, e) => s + (e.relatedActionIds || []).length, 0),
    anomalyCount: anomalies.length,
    currentVersionCount: versions.length,
    pendingPublishVersionCount: versions.filter(v => ['PENDING_PUBLISH', 'APPROVED'].includes(v.status)).length,
    rollbackCount: rollbacks.length,
    totalExecutions: executions.length,
    trend7,
    trend30: trend7
  };

  APP_DATA.regulatoryRuleDeployments = deployments;
  APP_DATA.regulatoryRuleExecutions = executions;
  APP_DATA.regulatoryRuleRuntimeLogs = runtimeLogs;
  APP_DATA.regulatoryRuleRollbacks = rollbacks;
  APP_DATA.regulatoryRuleRuntimeAnomalies = anomalies;
  APP_DATA.regulatoryRuleExecutionMetrics = executionMetrics;
})();

(function () {
  const TODAY = '2026-07-22';
  const PERIOD = '2026-07';
  const entities = APP_DATA.globalLegalEntities || [];
  const regions = APP_DATA.globalRegions || [];
  const countries = APP_DATA.globalCountries || [];
  const projects = APP_DATA.globalProjects || [];
  const domains = APP_DATA.regulationDomains || [];
  const events = APP_DATA.regulatoryEvents || [];
  const warnings = APP_DATA.warnings || [];
  const rects = APP_DATA.rectificationTasks || [];
  const actions = APP_DATA.regulatoryActions || [];
  const quality = APP_DATA.dataQualityIssues || [];
  const cbActs = APP_DATA.crossBorderDataActivities || [];
  const cdrMatters = APP_DATA.crossDomainRiskMatters || [];
  const health = APP_DATA.regulatoryHealthScores || {};
  const entityHealth = health.entities || [];
  const priorities = APP_DATA.regulatoryPrioritiesRecalculated || APP_DATA.regulatoryPriorities || {};
  const maturity = APP_DATA.regulatoryMaturity || {};
  const actionEff = APP_DATA.regulatoryActionEfficiency || {};

  const dayDiff = (a, b) => {
    if (!a || !b) return null;
    return Math.round((new Date(b.replace(/-/g, '/')) - new Date(a.replace(/-/g, '/'))) / 86400000);
  };
  const pct = (n, d) => (d ? n / d : 0);
  const perfLevel = (score) => score >= 85 ? 'EXCELLENT' : score >= 70 ? 'GOOD' : score >= 55 ? 'FAIR' : 'POOR';

  const entityIdsForScope = (scopeType, scopeId) => {
    if (scopeType === 'GROUP') return entities.filter(e => e.entityId !== 'G001').map(e => e.entityId);
    if (scopeType === 'REGION') return entities.filter(e => e.regionId === scopeId && e.entityId !== 'G001').map(e => e.entityId);
    if (scopeType === 'COUNTRY') return entities.filter(e => e.countryId === scopeId).map(e => e.entityId);
    if (scopeType === 'ENTITY') return scopeId ? [scopeId] : [];
    if (scopeType === 'PROJECT') {
      const p = projects.find(x => x.projectId === scopeId);
      return p ? [p.entityId] : [];
    }
    if (scopeType === 'DOMAIN') {
      const evEnts = [...new Set(events.filter(e => e.domainId === scopeId).map(e => e.entityId).filter(Boolean))];
      return evEnts.length ? evEnts : entities.filter(e => e.entityId !== 'G001').map(e => e.entityId);
    }
    return [];
  };

  const calcPerformance = (scopeType, scopeId, opts) => {
    const o = opts || {};
    const eids = entityIdsForScope(scopeType, scopeId);
    const entitySet = new Set(eids);
    const entEvents = events.filter(e => entitySet.has(e.entityId));
    const entRects = rects.filter(t => entitySet.has(t.entityId));
    const entActions = actions.filter(a => entitySet.has(a.entityId));
    const entWarnings = warnings.filter(w => entitySet.has(w.entityId));
    const entEntities = entities.filter(e => entitySet.has(e.entityId));

    const detectedWarnings = entWarnings.filter(w => entEvents.some(e => e.riskMatterId === w.id || (e.entityId === w.entityId && e.eventType === 'RISK_MATTER')));
    const eventDetectionRate = entWarnings.length ? pct(detectedWarnings.length, entWarnings.length) : (entEvents.length ? 0.92 : 1);

    const highRiskEvents = entEvents.filter(e => e.riskLevel === 'HIGH');
    const resolvedHigh = highRiskEvents.filter(e => e.status === 'CLOSED');
    const highRiskResolutionRate = highRiskEvents.length ? pct(resolvedHigh.length, highRiskEvents.length) : 1;

    const closedRects = entRects.filter(t => t.status === '已关闭' || t.closedAt);
    const rectificationClosureRate = entRects.length ? pct(closedRects.length, entRects.length) : 1;

    const completedActions = entActions.filter(a => ['COMPLETED', 'VERIFIED'].includes(a.status));
    const verifiedActions = entActions.filter(a => a.status === 'VERIFIED');
    const actionCompletionRate = entActions.length ? pct(completedActions.length, entActions.length) : 0;
    const actionVerificationRate = entActions.length ? pct(verifiedActions.length, entActions.length) : 0;

    const closedWithDates = closedRects.filter(t => t.closedAt);
    const rectDays = closedWithDates.map(t => dayDiff(t.deadline || t.createdAt || '2026-06-01', t.closedAt)).filter(d => d !== null);
    const averageRectificationDays = rectDays.length ? Math.round(rectDays.reduce((s, d) => s + d, 0) / rectDays.length) : (entRects.length ? 18 : 0);

    const overdueNow = entRects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭' && !t.closedAt).length;
    const overdueBaseline = Math.max(overdueNow, entRects.filter(t => t.status !== '已关闭').length);
    const overdueReductionRate = overdueBaseline ? Math.max(0, 1 - overdueNow / overdueBaseline) : 0;

    const qualObjs = (APP_DATA.dataObjects || []).filter(obj => entitySet.has(obj.entityId));
    const qualIssues = quality.filter(q => qualObjs.some(obj => obj.objectId === q.objectId));
    const resolvedQual = qualIssues.filter(q => q.status === '已关闭' || q.status === '已修复' || q.status === '已处理');
    const dataQualityImprovementRate = qualIssues.length ? pct(resolvedQual.length, qualIssues.length) : 0;

    const kriTotal = entEntities.reduce((s, e) => s + (e.kriExceptionCount || 0), 0);
    const kriEvents = entEvents.filter(e => e.kriId).length;
    const kriExceptionReductionRate = kriTotal > 0 ? Math.min(0.5, pct(Math.max(0, kriTotal - kriEvents), kriTotal)) : (kriEvents ? 0.1 : 0.21);

    const regulatoryEffectivenessScore = Math.round(
      eventDetectionRate * 15 +
      highRiskResolutionRate * 20 +
      rectificationClosureRate * 20 +
      actionVerificationRate * 15 +
      dataQualityImprovementRate * 10 +
      kriExceptionReductionRate * 10 +
      overdueReductionRate * 10
    );

    const matEnt = scopeType === 'ENTITY' ? (maturity.entityMaturity || []).find(x => x.objectId === scopeId) : null;
    const matReg = scopeType === 'REGION' ? (maturity.regionMaturity || []).find(x => x.objectId === scopeId) : null;

    return {
      performanceId: o.performanceId,
      scopeType,
      scopeId,
      entityId: scopeType === 'ENTITY' ? scopeId : (eids[0] || null),
      period: PERIOD,
      eventDetectionRate: +eventDetectionRate.toFixed(2),
      highRiskResolutionRate: +highRiskResolutionRate.toFixed(2),
      rectificationClosureRate: +rectificationClosureRate.toFixed(2),
      actionCompletionRate: +actionCompletionRate.toFixed(2),
      actionVerificationRate: +actionVerificationRate.toFixed(2),
      averageRectificationDays,
      overdueReductionRate: +overdueReductionRate.toFixed(2),
      dataQualityImprovementRate: +dataQualityImprovementRate.toFixed(2),
      kriExceptionReductionRate: +kriExceptionReductionRate.toFixed(2),
      regulatoryEffectivenessScore,
      performanceLevel: perfLevel(regulatoryEffectivenessScore),
      maturityLevel: matEnt ? matEnt.level : matReg ? matReg.level : (maturity.overallLevel || 'L3'),
      sourceMetricIds: (actionEff.overall ? ['MET-ACT-COMP', 'MET-RECT-CLOSE'] : []).filter(Boolean),
      calculatedAt: TODAY + 'T10:00:00'
    };
  };

  const performanceMetrics = [];
  let perfSeq = 1;
  const addPerf = (scopeType, scopeId) => {
    const p = calcPerformance(scopeType, scopeId, { performanceId: 'PERF-' + String(perfSeq++).padStart(3, '0') });
    performanceMetrics.push(p);
    return p;
  };

  addPerf('GROUP', 'G001');
  regions.forEach(r => addPerf('REGION', r.regionId));
  countries.forEach(c => addPerf('COUNTRY', c.countryId));
  entities.filter(e => e.entityId !== 'G001').forEach(e => addPerf('ENTITY', e.entityId));
  projects.forEach(p => addPerf('PROJECT', p.projectId));
  domains.forEach(d => addPerf('DOMAIN', d.id));

  const groupPerf = performanceMetrics.find(p => p.scopeType === 'GROUP');

  const eventTrends = APP_DATA.regulatoryEventTrends || {};
  const hasHist7 = (eventTrends['7'] || {}).newCount !== undefined;
  const hasHist30 = (eventTrends['30'] || {}).newCount !== undefined;
  const buildPerfTrend = (days) => {
    const trendKey = String(days);
    const et = eventTrends[trendKey];
    if (!et || et.dataStatus === 'INSUFFICIENT_HISTORY') return { dataStatus: 'INSUFFICIENT_HISTORY', period: days };
    const gp = groupPerf || {};
    const factor = days === 7 ? 0.97 : days === 30 ? 0.94 : 0.9;
    return {
      period: days,
      dataStatus: 'CALCULATED',
      effectiveness: +(gp.regulatoryEffectivenessScore * factor / 100).toFixed(2),
      rectificationClosureRate: +(gp.rectificationClosureRate * (factor + 0.02)).toFixed(2),
      actionVerificationRate: +(gp.actionVerificationRate * factor).toFixed(2),
      highRiskResolutionRate: +(gp.highRiskResolutionRate * factor).toFixed(2)
    };
  };

  const performanceTrends = {
    '7': hasHist7 ? buildPerfTrend(7) : { dataStatus: 'INSUFFICIENT_HISTORY', period: 7 },
    '30': hasHist30 ? buildPerfTrend(30) : { dataStatus: 'INSUFFICIENT_HISTORY', period: 30 },
    '90': hasHist30 ? buildPerfTrend(90) : { dataStatus: 'INSUFFICIENT_HISTORY', period: 90 }
  };

  const allocations = [];
  let allocSeq = 1;
  const mkAlloc = (base) => {
    const a = {
      allocationId: 'ALLOC-' + String(allocSeq++).padStart(3, '0'),
      entityId: base.entityId,
      regionId: base.regionId,
      resourceType: base.resourceType,
      priority: base.priority,
      allocatedLevel: base.allocatedLevel,
      sourceActionIds: base.sourceActionIds || [],
      sourceRiskMatterIds: base.sourceRiskMatterIds || [],
      sourceEventIds: base.sourceEventIds || [],
      responsibleDepartment: base.responsibleDepartment || '集团风险管理部',
      collaboratingDepartments: base.collaboratingDepartments || [],
      allocationStatus: base.allocationStatus || 'ACTIVE',
      allocatedAt: base.allocatedAt || TODAY + 'T09:00:00',
      expectedOutcome: base.expectedOutcome || '降低高风险事件和超期整改'
    };
    allocations.push(a);
    return a;
  };

  entities.filter(e => e.entityId !== 'G001').forEach(e => {
    const p = priorities[e.entityId];
    if (!p || p.priority === 'LOW') return;
    const evts = events.filter(ev => ev.entityId === e.entityId);
    const entActions = actions.filter(a => a.entityId === e.entityId);
    const entRects = rects.filter(t => t.entityId === e.entityId);
    const overdueRects = entRects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭');
    const qualEvts = evts.filter(ev => ev.eventType === 'DATA_QUALITY');
    const cbEvts = evts.filter(ev => ev.eventType === 'CROSS_BORDER');
    const cdrEvts = evts.filter(ev => ev.eventType === 'CROSS_DOMAIN');
    const riskIds = warnings.filter(w => w.entityId === e.entityId).map(w => w.id);
    const collab = (APP_DATA.crossDomainResponsibilities || []).filter(r => r.entityId === e.entityId).flatMap(r => r.collaboratingDepartments || []);

    if (p.priority === 'CRITICAL') {
      mkAlloc({ entityId: e.entityId, regionId: e.regionId, resourceType: 'SPECIAL_REVIEW', priority: 'CRITICAL', allocatedLevel: 'HIGH', sourceActionIds: entActions.filter(a => a.actionType === 'FOCUS_SUPERVISION').map(a => a.actionId), sourceRiskMatterIds: riskIds, sourceEventIds: evts.map(x => x.eventId), collaboratingDepartments: collab, expectedOutcome: '完成重点法人专项监管复核' });
    }
    if (p.priority === 'HIGH' && cbEvts.length) {
      mkAlloc({ entityId: e.entityId, regionId: e.regionId, resourceType: 'CROSS_BORDER_REVIEW', priority: 'HIGH', allocatedLevel: 'HIGH', sourceActionIds: entActions.filter(a => a.actionType === 'CROSS_BORDER_REVIEW').map(a => a.actionId), sourceRiskMatterIds: cbEvts.map(x => x.riskMatterId).filter(Boolean), sourceEventIds: cbEvts.map(x => x.eventId), expectedOutcome: '完成跨境数据合规专项复核' });
    }
    if (p.priority === 'HIGH' && qualEvts.length) {
      mkAlloc({ entityId: e.entityId, regionId: e.regionId, resourceType: 'DATA_GOVERNANCE', priority: 'HIGH', allocatedLevel: 'MEDIUM', sourceActionIds: entActions.filter(a => a.actionType === 'DATA_QUALITY_REMEDIATION').map(a => a.actionId), sourceRiskMatterIds: qualEvts.map(x => x.riskMatterId).filter(Boolean), sourceEventIds: qualEvts.map(x => x.eventId), expectedOutcome: '提升数据质量与治理水平' });
    }
    if (p.priority === 'HIGH' && cdrEvts.length) {
      mkAlloc({ entityId: e.entityId, regionId: e.regionId, resourceType: 'CROSS_DOMAIN_COORDINATION', priority: 'HIGH', allocatedLevel: 'MEDIUM', sourceActionIds: entActions.filter(a => a.actionType === 'CROSS_DOMAIN_COORDINATION').map(a => a.actionId), sourceRiskMatterIds: cdrMatters.filter(m => (m.entityIds || []).includes(e.entityId)).map(m => m.riskMatterId), sourceEventIds: cdrEvts.map(x => x.eventId), collaboratingDepartments: collab, expectedOutcome: '协调跨领域风险处置' });
    }
    if (overdueRects.length) {
      mkAlloc({ entityId: e.entityId, regionId: e.regionId, resourceType: 'RECTIFICATION_SUPPORT', priority: overdueRects.length >= 2 ? 'CRITICAL' : 'HIGH', allocatedLevel: 'HIGH', sourceActionIds: entActions.filter(a => a.actionType === 'ESCALATE_RECTIFICATION').map(a => a.actionId), sourceRiskMatterIds: riskIds.filter(id => warnings.find(w => w.id === id && w.rectificationTaskId)), sourceEventIds: evts.filter(x => x.rectificationTaskId).map(x => x.eventId), expectedOutcome: '推动超期整改闭环' });
    }
    if ((p.priority === 'HIGH' || p.priority === 'MEDIUM') && !allocations.some(a => a.entityId === e.entityId)) {
      mkAlloc({ entityId: e.entityId, regionId: e.regionId, resourceType: 'SUPERVISION', priority: p.priority, allocatedLevel: p.priority === 'HIGH' ? 'MEDIUM' : 'LOW', sourceActionIds: entActions.slice(0, 2).map(a => a.actionId), sourceRiskMatterIds: riskIds.slice(0, 3), sourceEventIds: evts.slice(0, 3).map(x => x.eventId), expectedOutcome: '加强常规监管监测' });
    }
  });

  const supervisionTasks = [];
  let supSeq = 1;
  const taskStatuses = ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS', 'WAITING_RESULT', 'COMPLETED', 'EVALUATED'];
  allocations.forEach((alloc, idx) => {
    const ent = entities.find(e => e.entityId === alloc.entityId);
    const entActions = actions.filter(a => alloc.sourceActionIds.includes(a.actionId));
    const entRects = rects.filter(t => t.entityId === alloc.entityId && t.status !== '已关闭');
    const status = taskStatuses[Math.min(idx % taskStatuses.length, taskStatuses.length - 1)];
    const progressMap = { RECOMMENDED: 0, ASSIGNED: 20, IN_PROGRESS: 40, WAITING_RESULT: 70, COMPLETED: 90, EVALUATED: 100 };
    supervisionTasks.push({
      supervisionTaskId: 'SUP-' + String(supSeq++).padStart(3, '0'),
      taskType: alloc.resourceType,
      entityId: alloc.entityId,
      regionId: alloc.regionId,
      sourceActionIds: alloc.sourceActionIds,
      sourceEventIds: alloc.sourceEventIds,
      sourceRiskMatterIds: alloc.sourceRiskMatterIds,
      responsibleDepartment: alloc.responsibleDepartment,
      collaboratingDepartments: alloc.collaboratingDepartments,
      taskStatus: status,
      progress: progressMap[status] || 0,
      deadline: status === 'COMPLETED' || status === 'EVALUATED' ? '2026-07-20' : '2026-08-15',
      outcomeTarget: alloc.expectedOutcome,
      relatedRectificationTaskIds: entActions.flatMap(a => a.sourceRectificationTaskIds || []).slice(0, 5),
      relatedRegulatoryActionIds: alloc.sourceActionIds,
      allocationId: alloc.allocationId,
      overdue: status !== 'COMPLETED' && status !== 'EVALUATED' && '2026-08-15' < TODAY
    });
  });

  const effectiveness = [];
  let effSeq = 1;
  allocations.forEach(alloc => {
    const entEvents = events.filter(e => alloc.sourceEventIds.includes(e.eventId));
    const entActions = actions.filter(a => alloc.sourceActionIds.includes(a.actionId));
    const entRects = rects.filter(t => (alloc.sourceActionIds || []).some(aid => {
      const act = actions.find(a => a.actionId === aid);
      return act && (act.sourceRectificationTaskIds || []).includes(t.taskId);
    }));
    const closedRects = entRects.filter(t => t.status === '已关闭' || t.closedAt);
    const completedActs = entActions.filter(a => ['COMPLETED', 'VERIFIED'].includes(a.status));
    const riskCount = (alloc.sourceRiskMatterIds || []).length;
    const closedRisk = (alloc.sourceRiskMatterIds || []).filter(id => {
      const w = warnings.find(x => x.id === id);
      return w && (w.status === '已关闭' || w.status === '已处置');
    }).length;
    effectiveness.push({
      effectivenessId: 'REFF-' + String(effSeq++).padStart(3, '0'),
      allocationId: alloc.allocationId,
      entityId: alloc.entityId,
      inputLevel: alloc.allocatedLevel,
      sourceEventCount: entEvents.length,
      sourceRiskCount: riskCount,
      actionCount: entActions.length,
      completedActionCount: completedActs.length,
      closedRectificationCount: closedRects.length,
      riskReductionRate: riskCount ? +(pct(closedRisk, riskCount)).toFixed(2) : 0,
      overdueReductionRate: alloc.resourceType === 'RECTIFICATION_SUPPORT' ? +(groupPerf?.overdueReductionRate || 0).toFixed(2) : +(pct(Math.max(0, riskCount - closedRisk), Math.max(1, riskCount)) * 0.24).toFixed(2),
      kriImprovementRate: +(groupPerf?.kriExceptionReductionRate || 0).toFixed(2),
      effectivenessScore: Math.round(
        (completedActs.length / Math.max(1, entActions.length)) * 40 +
        (closedRects.length / Math.max(1, entRects.length || 1)) * 30 +
        (closedRisk / Math.max(1, riskCount || 1)) * 30
      ),
      effectivenessLevel: 'EFFECTIVE',
      evaluationStatus: 'CALCULATED'
    });
  });
  effectiveness.forEach(e => {
    e.effectivenessLevel = e.effectivenessScore >= 80 ? 'EFFECTIVE' : e.effectivenessScore >= 60 ? 'PARTIAL' : 'INEFFECTIVE';
  });

  const benchmarkPosition = (score, allScores) => {
    const sorted = [...allScores].sort((a, b) => b - a);
    const q1 = sorted[Math.floor(sorted.length * 0.25)] || score;
    const q3 = sorted[Math.floor(sorted.length * 0.75)] || score;
    if (score >= q1) return 'TOP_QUARTILE';
    if (score <= q3) return 'BOTTOM_QUARTILE';
    return 'MIDDLE';
  };

  const entityPerfs = performanceMetrics.filter(p => p.scopeType === 'ENTITY');
  const entityScores = entityPerfs.map(p => p.regulatoryEffectivenessScore);
  const regionPerfs = performanceMetrics.filter(p => p.scopeType === 'REGION');
  const regionScores = regionPerfs.map(p => p.regulatoryEffectivenessScore);
  const countryPerfs = performanceMetrics.filter(p => p.scopeType === 'COUNTRY');
  const countryScores = countryPerfs.map(p => p.regulatoryEffectivenessScore);
  const domainPerfs = performanceMetrics.filter(p => p.scopeType === 'DOMAIN');
  const domainScores = domainPerfs.map(p => p.regulatoryEffectivenessScore);

  const gapDims = (perf, peers) => {
    const dims = [
      { key: 'highRiskResolutionRate', label: '风险解决率' },
      { key: 'rectificationClosureRate', label: '整改闭环率' },
      { key: 'actionVerificationRate', label: '行动验证率' },
      { key: 'dataQualityImprovementRate', label: '数据质量改善' },
      { key: 'kriExceptionReductionRate', label: 'KRI改善' }
    ];
    const avgPeer = (key) => peers.length ? peers.reduce((s, p) => s + (p[key] || 0), 0) / peers.length : 0;
    return dims.map(d => ({
      dimension: d.label,
      score: perf[d.key] || 0,
      peerAverage: +(avgPeer(d.key)).toFixed(2),
      gap: +((perf[d.key] || 0) - avgPeer(d.key)).toFixed(2),
      type: (perf[d.key] || 0) >= avgPeer(d.key) ? 'LEAD' : 'LAG'
    }));
  };

  const benchmarking = [];
  let benchSeq = 1;
  const addBench = (benchmarkType, scopeId, comparedScopes, peerPerfs, allScores) => {
    const perf = performanceMetrics.find(p => p.scopeType === benchmarkType && p.scopeId === scopeId);
    if (!perf) return;
    const gaps = gapDims(perf, peerPerfs.filter(p => p.scopeId !== scopeId));
    const leads = gaps.filter(g => g.type === 'LEAD').map(g => g.dimension);
    const lags = gaps.filter(g => g.type === 'LAG').map(g => g.dimension);
    benchmarking.push({
      benchmarkId: 'BENCH-' + String(benchSeq++).padStart(3, '0'),
      benchmarkType,
      scopeId,
      comparedScopes,
      performanceScore: perf.regulatoryEffectivenessScore,
      maturityLevel: perf.maturityLevel,
      closureRate: perf.rectificationClosureRate,
      actionVerificationRate: perf.actionVerificationRate,
      dataQualityScore: Math.round((perf.dataQualityImprovementRate || 0) * 100),
      riskResponseScore: Math.round((perf.highRiskResolutionRate || 0) * 100),
      kriImprovementRate: perf.kriExceptionReductionRate,
      responseEfficiencyScore: Math.round((perf.actionCompletionRate || 0) * 100),
      benchmarkPosition: benchmarkPosition(perf.regulatoryEffectivenessScore, allScores),
      gapDimensions: gaps,
      leadingDimensions: leads,
      laggingDimensions: lags,
      improvementSuggestions: lags.map(d => `加强${d}，对标集团内部领先水平`),
      sourcePerformanceIds: [perf.performanceId],
      relatedOptimizationIds: (APP_DATA.regulatoryOptimizationRecommendations || []).filter(r => r.status === 'OPEN').slice(0, 2).map(r => r.recommendationId)
    });
  };

  entityPerfs.forEach(p => addBench('ENTITY', p.scopeId, entityPerfs.filter(x => x.scopeId !== p.scopeId).slice(0, 3).map(x => x.scopeId), entityPerfs, entityScores));
  regionPerfs.forEach(p => addBench('REGION', p.scopeId, regionPerfs.filter(x => x.scopeId !== p.scopeId).map(x => x.scopeId), regionPerfs, regionScores));
  countryPerfs.slice(0, 6).forEach(p => addBench('COUNTRY', p.scopeId, countryPerfs.filter(x => x.scopeId !== p.scopeId).slice(0, 2).map(x => x.scopeId), countryPerfs, countryScores));
  domainPerfs.forEach(p => addBench('DOMAIN', p.scopeId, domainPerfs.filter(x => x.scopeId !== p.scopeId).map(x => x.scopeId), domainPerfs, domainScores));

  const supTasks = supervisionTasks;
  const overdueTasks = supTasks.filter(t => t.overdue || (t.deadline && t.deadline < TODAY && !['COMPLETED', 'EVALUATED'].includes(t.taskStatus)));

  APP_DATA.regulatoryPerformanceMetrics = performanceMetrics;
  APP_DATA.regulatoryPerformanceTrends = performanceTrends;
  APP_DATA.regulatoryPerformanceSummary = {
    regulatoryEffectivenessScore: groupPerf?.regulatoryEffectivenessScore || 0,
    highRiskResolutionRate: groupPerf?.highRiskResolutionRate || 0,
    rectificationClosureRate: groupPerf?.rectificationClosureRate || 0,
    actionVerificationRate: groupPerf?.actionVerificationRate || 0,
    averageRectificationDays: groupPerf?.averageRectificationDays || 0,
    overdueReductionRate: groupPerf?.overdueReductionRate || 0,
    dataQualityImprovementRate: groupPerf?.dataQualityImprovementRate || 0,
    kriExceptionReductionRate: groupPerf?.kriExceptionReductionRate || 0,
    performanceLevel: groupPerf?.performanceLevel || 'FAIR',
    entityRanking: [...entityPerfs].sort((a, b) => b.regulatoryEffectivenessScore - a.regulatoryEffectivenessScore).map((p, i) => ({
      rank: i + 1, scopeId: p.scopeId, score: p.regulatoryEffectivenessScore,
      name: (entities.find(e => e.entityId === p.scopeId) || {}).entityName || p.scopeId,
      maturityLevel: p.maturityLevel, closureRate: p.rectificationClosureRate,
      actionVerificationRate: p.actionVerificationRate, riskReductionRate: p.highRiskResolutionRate
    })),
    regionRanking: [...regionPerfs].sort((a, b) => b.regulatoryEffectivenessScore - a.regulatoryEffectivenessScore).map((p, i) => ({
      rank: i + 1, scopeId: p.scopeId, score: p.regulatoryEffectivenessScore,
      name: (regions.find(r => r.regionId === p.scopeId) || {}).regionName || p.scopeId,
      maturityLevel: p.maturityLevel, closureRate: p.rectificationClosureRate,
      actionVerificationRate: p.actionVerificationRate, riskReductionRate: p.highRiskResolutionRate
    }))
  };
  APP_DATA.regulatoryResourceAllocations = allocations;
  APP_DATA.regulatorySupervisionTasks = supervisionTasks;
  APP_DATA.regulatoryResourceEffectiveness = effectiveness;
  APP_DATA.regulatoryBenchmarking = benchmarking;
  APP_DATA.regulatoryOperationsMetrics = {
    performance: APP_DATA.regulatoryPerformanceSummary,
    resourceAllocation: {
      totalAllocations: allocations.length,
      criticalCount: allocations.filter(a => a.priority === 'CRITICAL').length,
      highPriorityCount: allocations.filter(a => a.priority === 'HIGH' || a.priority === 'CRITICAL').length,
      pendingAllocationCount: entities.filter(e => e.entityId !== 'G001').filter(e => {
        const p = priorities[e.entityId];
        return p && (p.priority === 'HIGH' || p.priority === 'CRITICAL') && !allocations.some(a => a.entityId === e.entityId);
      }).length,
      specialReviewCount: allocations.filter(a => a.resourceType === 'SPECIAL_REVIEW').length,
      crossBorderCount: allocations.filter(a => a.resourceType === 'CROSS_BORDER_REVIEW').length,
      dataGovernanceCount: allocations.filter(a => a.resourceType === 'DATA_GOVERNANCE').length,
      crossDomainCount: allocations.filter(a => a.resourceType === 'CROSS_DOMAIN_COORDINATION').length,
      rectificationSupportCount: allocations.filter(a => a.resourceType === 'RECTIFICATION_SUPPORT').length,
      focusEntities: allocations.filter(a => a.allocatedLevel === 'HIGH').slice(0, 5).map(a => a.entityId)
    },
    supervisionTasks: {
      total: supTasks.length,
      recommended: supTasks.filter(t => t.taskStatus === 'RECOMMENDED').length,
      assigned: supTasks.filter(t => t.taskStatus === 'ASSIGNED').length,
      inProgress: supTasks.filter(t => t.taskStatus === 'IN_PROGRESS').length,
      waitingResult: supTasks.filter(t => t.taskStatus === 'WAITING_RESULT').length,
      completed: supTasks.filter(t => ['COMPLETED', 'EVALUATED'].includes(t.taskStatus)).length,
      evaluated: supTasks.filter(t => t.taskStatus === 'EVALUATED').length,
      overdue: overdueTasks.length
    },
    benchmarking: {
      topEntities: benchmarking.filter(b => b.benchmarkType === 'ENTITY' && b.benchmarkPosition === 'TOP_QUARTILE').slice(0, 3).map(b => b.scopeId),
      bottomEntities: benchmarking.filter(b => b.benchmarkType === 'ENTITY' && b.benchmarkPosition === 'BOTTOM_QUARTILE').slice(0, 3).map(b => b.scopeId),
      laggingDomains: benchmarking.filter(b => b.benchmarkType === 'DOMAIN' && b.laggingDimensions.length).slice(0, 2).map(b => ({ scopeId: b.scopeId, lags: b.laggingDimensions })),
      regionVariance: regionPerfs.length ? Math.max(...regionScores) - Math.min(...regionScores) : 0
    }
  };
})();

(function () {
  const TODAY = '2026-07-22';
  const PLAN_YEAR = 2026;
  const STRATEGIC_PERIOD = '2026-2028';
  const entities = APP_DATA.globalLegalEntities || [];
  const regions = APP_DATA.globalRegions || [];
  const domains = APP_DATA.regulationDomains || [];
  const projects = APP_DATA.globalProjects || [];
  const events = APP_DATA.regulatoryEvents || [];
  const warnings = APP_DATA.warnings || [];
  const cdrMatters = APP_DATA.crossDomainRiskMatters || [];
  const rects = APP_DATA.rectificationTasks || [];
  const actions = APP_DATA.regulatoryActions || [];
  const allocations = APP_DATA.regulatoryResourceAllocations || [];
  const supTasks = APP_DATA.regulatorySupervisionTasks || [];
  const perfMetrics = APP_DATA.regulatoryPerformanceMetrics || [];
  const perfSummary = APP_DATA.regulatoryPerformanceSummary || {};
  const maturity = APP_DATA.regulatoryMaturity || {};
  const priorities = APP_DATA.regulatoryPrioritiesRecalculated || APP_DATA.regulatoryPriorities || {};
  const health = APP_DATA.regulatoryHealthScores || {};
  const entityHealth = health.entities || [];
  const concentration = APP_DATA.regulatoryRiskConcentration || {};
  const quality = APP_DATA.dataQualityIssues || [];
  const ruleEff = APP_DATA.regulatoryRuleEffectiveness || [];
  const resourceEff = APP_DATA.regulatoryResourceEffectiveness || [];

  const pct = (actual, target) => (target ? actual / target : 0);
  const calcStatus = (rate) => rate >= 1 ? 'ACHIEVED' : rate >= 0.8 ? 'ON_TRACK' : rate >= 0.6 ? 'AT_RISK' : 'BEHIND';
  const calcPlanStatus = (rate, base) => {
    if (base === 'DRAFT') return 'DRAFT';
    if (rate >= 1) return 'COMPLETED';
    if (rate >= 0.85) return 'IN_PROGRESS';
    if (rate >= 0.6) return 'AT_RISK';
    return base === 'APPROVED' ? 'IN_PROGRESS' : 'CLOSED';
  };

  const groupPerf = perfMetrics.find(p => p.scopeType === 'GROUP') || {};
  const eval_ = APP_DATA.regulatoryEvaluation || {};
  const dataCovRate = parseFloat((APP_DATA.publicRegulatorySummary || {}).dataCoverageRate) || Math.round((APP_DATA.dataSourceRegistry || []).filter(s => s.status === '已接入').length / Math.max(1, (APP_DATA.dataSourceRegistry || []).length) * 100);
  const closedRects = rects.filter(t => t.status === '已关闭' || t.closedAt);
  const closureRate = rects.length ? closedRects.length / rects.length : 0;
  const ruleEffAvg = ruleEff.length ? ruleEff.reduce((s, r) => s + (r.effectivenessScore || 0), 0) / ruleEff.length / 100 : 0.8;
  const resourceEffAvg = resourceEff.length ? resourceEff.reduce((s, e) => s + (e.effectivenessScore || 0), 0) / resourceEff.length / 100 : 0.75;
  const maturityScore = (maturity.overallScore || 70) / 100;
  const maturityDelta = (maturity.scoreChange || 0) / 100;

  const objectiveDefs = [
    { code: 'OBJ-COV', name: '监管覆盖提升', type: 'COVERAGE', dimension: 'GROUP', target: 95, actual: dataCovRate, unit: '%', baseline: 85, metricIds: ['MET-COV'] },
    { code: 'OBJ-DQ', name: '数据质量改善', type: 'DATA_QUALITY', dimension: 'GROUP', target: 90, actual: Math.round((groupPerf.dataQualityImprovementRate || 0) * 100), unit: '%', baseline: 70, metricIds: ['MET-DQ'] },
    { code: 'OBJ-RISK', name: '风险监测有效性', type: 'RISK_MONITORING', dimension: 'GROUP', target: 85, actual: Math.round((groupPerf.highRiskResolutionRate || 0) * 100), unit: '%', baseline: 65, metricIds: ['MET-RISK'] },
    { code: 'OBJ-CLOSE', name: '整改闭环能力', type: 'REGULATORY_CLOSURE', dimension: 'GROUP', target: 90, actual: Math.round(closureRate * 100), unit: '%', baseline: 75, metricIds: ['MET-RECT-CLOSE'] },
    { code: 'OBJ-RULE', name: '规则运行效果', type: 'RULE_EFFECTIVENESS', dimension: 'GROUP', target: 85, actual: Math.round(ruleEffAvg * 100), unit: '%', baseline: 70, metricIds: [], relatedRuleEff: true },
    { code: 'OBJ-RES', name: '资源投入产出', type: 'RESOURCE_EFFICIENCY', dimension: 'GROUP', target: 80, actual: Math.round(resourceEffAvg * 100), unit: '%', baseline: 60, metricIds: [] },
    { code: 'OBJ-MAT', name: '监管成熟度提升', type: 'MATURITY_IMPROVEMENT', dimension: 'GROUP', target: 85, actual: maturity.overallScore || 70, unit: '分', baseline: (maturity.previousScore || 68), metricIds: [] }
  ];

  const objectives = [];
  let objSeq = 1;
  objectiveDefs.forEach(def => {
    const rate = pct(def.actual, def.target);
    const relatedActions = actions.filter(a => def.type === 'RISK_MONITORING' ? a.priority === 'HIGH' || a.priority === 'CRITICAL' : def.type === 'REGULATORY_CLOSURE' ? (a.sourceRectificationTaskIds || []).length : true).slice(0, 4).map(a => a.actionId);
    const relatedPerf = perfMetrics.filter(p => p.scopeType === 'GROUP' || (def.dimension === 'GROUP' && p.scopeType === 'GROUP')).slice(0, 1).map(p => p.performanceId);
    objectives.push({
      objectiveId: 'OBJ-' + String(objSeq++).padStart(3, '0'),
      objectiveCode: def.code,
      objectiveName: def.name,
      objectiveType: def.type,
      description: `集团${def.name}战略目标（${STRATEGIC_PERIOD}）`,
      strategicPeriod: STRATEGIC_PERIOD,
      parentObjectiveId: null,
      targetDimension: def.dimension,
      targetValue: def.target,
      actualValue: def.actual,
      unit: def.unit,
      baselineValue: def.baseline,
      targetYear: PLAN_YEAR,
      completionRate: +rate.toFixed(2),
      variance: +(def.actual - def.target).toFixed(2),
      status: calcStatus(rate),
      relatedMetricIds: def.metricIds,
      relatedRiskMatterIds: def.type === 'RISK_MONITORING' ? warnings.filter(w => w.level === '重大').slice(0, 3).map(w => w.id) : [],
      relatedActionIds: relatedActions,
      relatedPerformanceMetricIds: relatedPerf
    });
  });

  const focusItems = [];
  let focusSeq = 1;
  const addFocus = (focusType, focusObjectId, opts) => {
    const o = opts || {};
    const ent = focusType === 'ENTITY' ? entities.find(e => e.entityId === focusObjectId) : null;
    const reg = focusType === 'REGION' ? regions.find(r => r.regionId === focusObjectId) : null;
    const dom = focusType === 'DOMAIN' ? domains.find(d => d.id === focusObjectId) : null;
    const proj = focusType === 'PROJECT' ? projects.find(p => p.projectId === focusObjectId) : null;
    const risk = focusType === 'RISK' ? warnings.find(w => w.id === focusObjectId) || cdrMatters.find(m => m.riskMatterId === focusObjectId) : null;
    const p = ent ? priorities[ent.entityId] : null;
    const h = ent ? entityHealth.find(x => x.objectId === ent.entityId) : (reg ? (health.regions || []).find(x => x.objectId === reg.regionId) : null);
    const mat = ent ? (maturity.entityMaturity || []).find(m => m.objectId === ent.entityId) : null;
    const evts = ent ? events.filter(e => e.entityId === ent.entityId) : (reg ? events.filter(e => e.regionId === reg.regionId) : []);
    const overdue = ent ? rects.filter(t => t.entityId === ent.entityId && t.deadline && t.deadline < TODAY && t.status !== '已关闭').length : 0;
    const recActions = ent ? actions.filter(a => a.entityId === ent.entityId).slice(0, 3).map(a => a.actionId) : [];
    focusItems.push({
      focusId: 'FOCUS-' + String(focusSeq++).padStart(3, '0'),
      focusType,
      focusObjectId,
      priority: o.priority || (p ? p.priority : 'MEDIUM'),
      focusReason: o.reason || (p ? p.factors.join('；') : '年度监管重点'),
      riskScore: o.riskScore || (p ? p.score : 0),
      healthLevel: h ? h.level : 'ATTENTION',
      maturityLevel: mat ? mat.level : (maturity.overallLevel || 'L3'),
      overdueCount: overdue,
      eventCount: evts.length,
      recommendedActionIds: recActions,
      relatedPlanIds: []
    });
  };

  (APP_DATA.regulatoryPriorityObjects || []).slice(0, 5).forEach(o => addFocus('ENTITY', o.objectId, { priority: o.priority, reason: '高优先级监管对象' }));
  (concentration.regions || []).slice(0, 3).forEach(r => addFocus('REGION', r.key ? r.key.replace('R:', '') : r.objectId, { reason: '区域风险集中度较高' }));
  (APP_DATA.regulatoryStrategyAnalysis || {}).domains?.filter(d => d.strategyLevel === 'FOCUS' || d.strategyLevel === 'SPECIAL').slice(0, 3).forEach(d => addFocus('DOMAIN', d.objectId, { reason: d.strategyLabel }));
  warnings.filter(w => w.level === '重大').slice(0, 3).forEach(w => addFocus('RISK', w.id, { priority: 'HIGH', reason: '重大风险事项' }));
  projects.filter(p => (p.highRiskCount || 0) > 0).slice(0, 2).forEach(p => addFocus('PROJECT', p.projectId, { reason: '项目高风险' }));
  quality.filter(q => q.severity === '高' || q.severity === '严重').slice(0, 2).forEach(q => {
    const obj = (APP_DATA.dataObjects || []).find(o => o.objectId === q.objectId);
    if (obj) addFocus('DATA_OBJECT', q.objectId, { reason: '数据质量重点治理', priority: 'HIGH' });
  });

  const focusEntityIds = focusItems.filter(f => f.focusType === 'ENTITY').map(f => f.focusObjectId);
  const focusRegionIds = focusItems.filter(f => f.focusType === 'REGION').map(f => f.focusObjectId);
  const focusDomainIds = focusItems.filter(f => f.focusType === 'DOMAIN').map(f => f.focusObjectId);
  const focusRiskIds = focusItems.filter(f => f.focusType === 'RISK').map(f => f.focusObjectId);
  const planActions = actions.filter(a => focusEntityIds.includes(a.entityId) || a.priority === 'CRITICAL' || a.priority === 'HIGH').slice(0, 8);
  const planAllocs = allocations.filter(a => focusEntityIds.includes(a.entityId)).slice(0, 6);
  const planTasks = supTasks.filter(t => focusEntityIds.includes(t.entityId)).slice(0, 6);

  const annualPlans = [];
  let planSeq = 1;
  const mkPlan = (name, priority, objIds, status) => {
    const plannedVal = objIds.length ? objectives.filter(o => objIds.includes(o.objectiveId)).reduce((s, o) => s + o.targetValue, 0) : 100;
    const actualVal = objIds.length ? objectives.filter(o => objIds.includes(o.objectiveId)).reduce((s, o) => s + o.actualValue, 0) : perfSummary.regulatoryEffectivenessScore || 0;
    const rate = pct(actualVal, plannedVal);
    const plan = {
      planId: 'PLAN-' + String(planSeq++).padStart(3, '0'),
      planYear: PLAN_YEAR,
      planName: name,
      planStatus: calcPlanStatus(rate, status),
      priority,
      objectiveIds: objIds,
      focusEntityIds: focusEntityIds.slice(0, 4),
      focusRegionIds: focusRegionIds.slice(0, 3),
      focusDomainIds: focusDomainIds.slice(0, 2),
      focusRiskMatterIds: focusRiskIds,
      plannedActionIds: planActions.map(a => a.actionId),
      plannedResourceAllocationIds: planAllocs.map(a => a.allocationId),
      plannedSupervisionTaskIds: planTasks.map(t => t.supervisionTaskId),
      targetValue: plannedVal,
      actualValue: actualVal,
      completionRate: +rate.toFixed(2),
      varianceRate: +(rate - 1).toFixed(2)
    };
    annualPlans.push(plan);
    focusItems.forEach(f => { if (!f.relatedPlanIds.includes(plan.planId)) f.relatedPlanIds.push(plan.planId); });
    return plan;
  };

  mkPlan('集团监管覆盖与数据质量提升计划', 'HIGH', objectives.filter(o => ['COVERAGE', 'DATA_QUALITY'].includes(o.objectiveType)).map(o => o.objectiveId), 'IN_PROGRESS');
  mkPlan('高风险监管与整改闭环专项计划', 'CRITICAL', objectives.filter(o => ['RISK_MONITORING', 'REGULATORY_CLOSURE'].includes(o.objectiveType)).map(o => o.objectiveId), 'IN_PROGRESS');
  mkPlan('规则治理与资源效能提升计划', 'HIGH', objectives.filter(o => ['RULE_EFFECTIVENESS', 'RESOURCE_EFFICIENCY'].includes(o.objectiveType)).map(o => o.objectiveId), 'APPROVED');
  mkPlan('监管成熟度持续提升计划', 'MEDIUM', objectives.filter(o => o.objectiveType === 'MATURITY_IMPROVEMENT').map(o => o.objectiveId), 'IN_PROGRESS');

  const targets = [];
  let tgtSeq = 1;
  objectives.forEach(obj => {
    targets.push({
      targetId: 'TGT-' + String(tgtSeq++).padStart(3, '0'),
      targetName: obj.objectiveName + '目标',
      targetType: obj.objectiveType,
      targetDimension: obj.targetDimension,
      targetValue: obj.targetValue,
      actualValue: obj.actualValue,
      completionRate: obj.completionRate,
      variance: obj.variance,
      status: obj.status,
      relatedObjectiveId: obj.objectiveId,
      relatedPlanId: annualPlans.find(p => (p.objectiveIds || []).includes(obj.objectiveId))?.planId || null,
      relatedMetricId: (obj.relatedMetricIds || [])[0] || null,
      relatedEntityIds: focusEntityIds.slice(0, 3),
      relatedDomainIds: focusDomainIds.slice(0, 2)
    });
  });
  entityHealth.filter(h => h.level === 'WARNING' || h.level === 'CRITICAL').slice(0, 3).forEach(h => {
    const ent = entities.find(e => e.entityId === h.objectId);
    const closed = rects.filter(t => t.entityId === h.objectId && (t.status === '已关闭' || t.closedAt)).length;
    const total = rects.filter(t => t.entityId === h.objectId).length;
    const actual = total ? Math.round(closed / total * 100) : 100;
    const target = 90;
    const rate = pct(actual, target);
    targets.push({
      targetId: 'TGT-' + String(tgtSeq++).padStart(3, '0'),
      targetName: (ent ? ent.entityName : h.objectId) + '整改闭环目标',
      targetType: 'REGULATORY_CLOSURE',
      targetDimension: 'ENTITY',
      targetValue: target,
      actualValue: actual,
      completionRate: +rate.toFixed(2),
      variance: +(actual - target).toFixed(2),
      status: calcStatus(rate),
      relatedObjectiveId: objectives.find(o => o.objectiveType === 'REGULATORY_CLOSURE')?.objectiveId,
      relatedPlanId: annualPlans.find(p => p.priority === 'CRITICAL')?.planId,
      relatedMetricId: 'MET-RECT-CLOSE',
      relatedEntityIds: [h.objectId],
      relatedDomainIds: []
    });
  });

  const planExecutions = [];
  let pexSeq = 1;
  annualPlans.forEach(plan => {
    (plan.plannedActionIds || []).forEach((actionId, idx) => {
      const act = actions.find(a => a.actionId === actionId);
      if (!act) return;
      const task = supTasks.find(t => (t.relatedRegulatoryActionIds || []).includes(actionId));
      const planned = 100;
      const actual = ['VERIFIED', 'COMPLETED'].includes(act.status) ? 100 : act.status === 'IN_PROGRESS' ? (act.executionProgress || 50) : act.status === 'ASSIGNED' ? 25 : 10;
      const rate = pct(actual, planned);
      planExecutions.push({
        executionId: 'PEX-' + String(pexSeq++).padStart(3, '0'),
        planId: plan.planId,
        actionId,
        supervisionTaskId: task ? task.supervisionTaskId : null,
        entityId: act.entityId,
        executionStatus: rate >= 1 ? 'COMPLETED' : rate >= 0.5 ? 'IN_PROGRESS' : 'PENDING',
        plannedDate: act.dueDate || '2026-08-30',
        actualDate: act.completedAt || (rate >= 1 ? TODAY : null),
        plannedValue: planned,
        actualValue: actual,
        completionRate: +rate.toFixed(2),
        varianceRate: +(rate - 1).toFixed(2)
      });
    });
  });

  const mkReview = (dimension, scopeId, scopeName) => {
    const perf = dimension === 'GROUP' ? groupPerf
      : dimension === 'REGION' ? perfMetrics.find(p => p.scopeType === 'REGION' && p.scopeId === scopeId)
      : dimension === 'ENTITY' ? perfMetrics.find(p => p.scopeType === 'ENTITY' && p.scopeId === scopeId)
      : dimension === 'DOMAIN' ? perfMetrics.find(p => p.scopeType === 'DOMAIN' && p.scopeId === scopeId)
      : null;
    const plan = dimension === 'PLAN' ? annualPlans.find(p => p.planId === scopeId) : null;
    const obj = dimension === 'OBJECTIVE' ? objectives.find(o => o.objectiveId === scopeId) : null;
    const tgtRate = dimension === 'OBJECTIVE' && obj ? obj.completionRate
      : dimension === 'PLAN' && plan ? plan.completionRate
      : targets.filter(t => dimension === 'ENTITY' ? (t.relatedEntityIds || []).includes(scopeId) : dimension === 'GROUP').reduce((s, t, _, arr) => s + t.completionRate / arr.length, 0);
    const resEff = resourceEff.filter(e => dimension === 'ENTITY' ? e.entityId === scopeId : true);
    const resRate = resEff.length ? resEff.reduce((s, e) => s + e.effectivenessScore, 0) / resEff.length / 100 : resourceEffAvg;
    return {
      reviewId: 'REV-' + dimension + '-' + (scopeId || 'G001'),
      reviewDimension: dimension,
      scopeId: scopeId || 'G001',
      scopeName: scopeName || '集团',
      reviewPeriod: STRATEGIC_PERIOD,
      planYear: PLAN_YEAR,
      targetCompletionRate: +(tgtRate || 0).toFixed(2),
      regulatoryEffectiveness: perf ? perf.regulatoryEffectivenessScore / 100 : (perfSummary.regulatoryEffectivenessScore || 0) / 100,
      riskResolutionRate: perf ? perf.highRiskResolutionRate : (perfSummary.highRiskResolutionRate || 0),
      rectificationClosureRate: perf ? perf.rectificationClosureRate : (perfSummary.rectificationClosureRate || 0),
      resourceEfficiencyRate: +resRate.toFixed(2),
      maturityImprovement: maturityDelta,
      maturityScore: maturity.overallScore || 70,
      mainDeviations: (tgtRate < 0.8 ? ['目标完成率低于预期'] : []).concat(perf && perf.overdueReductionRate < 0.2 ? ['超期整改下降不足'] : []),
      reviewStatus: tgtRate >= 0.8 ? 'ON_TRACK' : 'NEEDS_ATTENTION'
    };
  };

  const strategicReviews = [
    mkReview('GROUP', 'G001', '集团'),
    ...regions.slice(0, 3).map(r => mkReview('REGION', r.regionId, r.regionName)),
    ...entities.filter(e => e.entityId !== 'G001').slice(0, 4).map(e => mkReview('ENTITY', e.entityId, e.entityName)),
    ...domains.slice(0, 2).map(d => mkReview('DOMAIN', d.id, d.name)),
    ...annualPlans.map(p => mkReview('PLAN', p.planId, p.planName)),
    ...objectives.slice(0, 4).map(o => mkReview('OBJECTIVE', o.objectiveId, o.objectiveName))
  ];

  const recommendations = [];
  let recSeq = 1;
  objectives.filter(o => o.status === 'BEHIND' || o.status === 'AT_RISK').forEach(obj => {
    recommendations.push({
      recommendationId: 'NCR-' + String(recSeq++).padStart(3, '0'),
      recommendationType: 'OBJECTIVE_ADJUSTMENT',
      triggerReason: `战略目标 ${obj.objectiveName} 完成率 ${Math.round(obj.completionRate * 100)}%`,
      focusEntityIds: focusEntityIds.slice(0, 3),
      focusRiskMatterIds: obj.relatedRiskMatterIds || [],
      focusDomainIds: focusDomainIds.slice(0, 2),
      resourceAdjustment: obj.objectiveType === 'RESOURCE_EFFICIENCY' ? '增加高优先级对象监管资源投入' : '优化资源配置结构',
      strategyAdjustment: '加强专项监管与协同',
      ruleOptimizationIds: (APP_DATA.regulatoryOptimizationRecommendations || []).filter(r => r.status === 'OPEN').slice(0, 2).map(r => r.recommendationId),
      targetAdjustments: [{ targetId: targets.find(t => t.relatedObjectiveId === obj.objectiveId)?.targetId, suggestedValue: obj.targetValue }],
      priority: obj.status === 'BEHIND' ? 'HIGH' : 'MEDIUM',
      status: 'OPEN'
    });
  });
  focusItems.filter(f => f.priority === 'CRITICAL' || f.healthLevel === 'CRITICAL').slice(0, 3).forEach(f => {
    recommendations.push({
      recommendationId: 'NCR-' + String(recSeq++).padStart(3, '0'),
      recommendationType: 'FOCUS_OBJECT',
      triggerReason: `重点对象持续高风险：${f.focusReason}`,
      focusEntityIds: f.focusType === 'ENTITY' ? [f.focusObjectId] : focusEntityIds.slice(0, 2),
      focusRiskMatterIds: f.focusType === 'RISK' ? [f.focusObjectId] : [],
      focusDomainIds: f.focusType === 'DOMAIN' ? [f.focusObjectId] : focusDomainIds.slice(0, 1),
      resourceAdjustment: '加大专项复核与整改支持资源',
      strategyAdjustment: '列入下一年度重点监管清单',
      ruleOptimizationIds: [],
      targetAdjustments: [],
      priority: 'HIGH',
      status: 'OPEN'
    });
  });
  if (!recommendations.length) {
    recommendations.push({
      recommendationId: 'NCR-001',
      recommendationType: 'CONTINUOUS_IMPROVEMENT',
      triggerReason: '保持当前监管战略执行节奏',
      focusEntityIds: focusEntityIds.slice(0, 2),
      focusRiskMatterIds: [],
      focusDomainIds: focusDomainIds.slice(0, 1),
      resourceAdjustment: '维持现有资源配置并动态调整',
      strategyAdjustment: '持续优化监管策略',
      ruleOptimizationIds: (APP_DATA.regulatoryOptimizationRecommendations || []).filter(r => r.status === 'OPEN').slice(0, 1).map(r => r.recommendationId),
      targetAdjustments: [],
      priority: 'MEDIUM',
      status: 'OPEN'
    });
  }

  const objAchieved = objectives.filter(o => o.status === 'ACHIEVED').length;
  const objOnTrack = objectives.filter(o => o.status === 'ON_TRACK').length;
  const objAtRisk = objectives.filter(o => o.status === 'AT_RISK').length;
  const objBehind = objectives.filter(o => o.status === 'BEHIND').length;
  const avgObjRate = objectives.length ? objectives.reduce((s, o) => s + o.completionRate, 0) / objectives.length : 0;

  APP_DATA.regulatoryStrategicObjectives = objectives;
  APP_DATA.regulatoryAnnualPlans = annualPlans;
  APP_DATA.regulatoryTargets = targets;
  APP_DATA.regulatoryStrategicFocus = focusItems;
  APP_DATA.regulatoryPlanExecution = planExecutions;
  APP_DATA.regulatoryStrategicReview = strategicReviews;
  APP_DATA.regulatoryNextCycleRecommendations = recommendations;
  APP_DATA.regulatoryStrategicPlanningMetrics = {
    strategicPeriod: STRATEGIC_PERIOD,
    planYear: PLAN_YEAR,
    objectiveCount: objectives.length,
    achievedCount: objAchieved,
    onTrackCount: objOnTrack,
    atRiskCount: objAtRisk,
    behindCount: objBehind,
    averageCompletionRate: +avgObjRate.toFixed(2),
    maturityImprovementRate: maturityDelta,
    planCount: annualPlans.length,
    planInProgress: annualPlans.filter(p => p.planStatus === 'IN_PROGRESS').length,
    planAtRisk: annualPlans.filter(p => p.planStatus === 'AT_RISK').length,
    planCompleted: annualPlans.filter(p => p.planStatus === 'COMPLETED').length,
    averagePlanCompletionRate: annualPlans.length ? +(annualPlans.reduce((s, p) => s + p.completionRate, 0) / annualPlans.length).toFixed(2) : 0,
    targetCount: targets.length,
    targetAchieved: targets.filter(t => t.status === 'ACHIEVED').length,
    focusCount: focusItems.length,
    focusRegions: focusRegionIds.length,
    focusEntities: focusEntityIds.length,
    focusDomains: focusDomainIds.length,
    focusRisks: focusRiskIds.length,
    focusProjects: focusItems.filter(f => f.focusType === 'PROJECT').length,
    executionCount: planExecutions.length,
    executionCompleted: planExecutions.filter(e => e.executionStatus === 'COMPLETED').length,
    executionOverdue: planExecutions.filter(e => e.plannedDate && e.plannedDate < TODAY && e.executionStatus !== 'COMPLETED').length,
    reviewCount: strategicReviews.length,
    recommendationCount: recommendations.length
  };
})();

(function () {
  const TODAY = '2026-07-22';
  const entities = APP_DATA.globalLegalEntities || [];
  const regions = APP_DATA.globalRegions || [];
  const countries = APP_DATA.globalCountries || [];
  const projects = APP_DATA.globalProjects || [];
  const domains = APP_DATA.regulationDomains || [];
  const events = APP_DATA.regulatoryEvents || [];
  const warnings = APP_DATA.warnings || [];
  const cdrMatters = APP_DATA.crossDomainRiskMatters || [];
  const rects = APP_DATA.rectificationTasks || [];
  const actions = APP_DATA.regulatoryActions || [];
  const feedbacks = APP_DATA.regulatoryActionFeedbacks || [];
  const supTasks = APP_DATA.regulatorySupervisionTasks || [];
  const allocations = APP_DATA.regulatoryResourceAllocations || [];
  const priorities = APP_DATA.regulatoryPrioritiesRecalculated || APP_DATA.regulatoryPriorities || {};
  const health = APP_DATA.regulatoryHealthScores || {};
  const entityHealth = health.entities || [];
  const strategy = APP_DATA.regulatoryStrategyAnalysis || {};
  const maturity = APP_DATA.regulatoryMaturity || {};
  const perfMetrics = APP_DATA.regulatoryPerformanceMetrics || [];
  const perfSummary = APP_DATA.regulatoryPerformanceSummary || {};
  const objectives = APP_DATA.regulatoryStrategicObjectives || [];
  const annualPlans = APP_DATA.regulatoryAnnualPlans || [];
  const recommendations = APP_DATA.regulatoryNextCycleRecommendations || [];
  const changeRequests = APP_DATA.regulatoryRuleChangeRequests || [];
  const approvals = APP_DATA.regulatoryRuleApprovals || [];
  const anomalies = APP_DATA.regulatoryRuleRuntimeAnomalies || [];
  const deployments = APP_DATA.regulatoryRuleDeployments || [];
  const quality = APP_DATA.dataQualityIssues || [];
  const priorityObjects = APP_DATA.regulatoryPriorityObjects || [];
  const commandM = APP_DATA.regulatoryCommandCenterMetrics || {};

  const priRank = { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1 };
  const isOverdue = (date, status) => date && date < TODAY && !['COMPLETED', 'VERIFIED', 'CLOSED', '已关闭'].includes(status);

  const buildScopeSummary = (scopeType, scopeId, entityIds) => {
    const eSet = new Set(entityIds);
    const entEvents = events.filter(e => eSet.has(e.entityId));
    const entRects = rects.filter(t => eSet.has(t.entityId));
    const entActions = actions.filter(a => eSet.has(a.entityId));
    const entTasks = supTasks.filter(t => eSet.has(t.entityId));
    const openRects = entRects.filter(t => t.status !== '已关闭' && !t.closedAt);
    const overdueRects = openRects.filter(t => isOverdue(t.deadline, t.status));
    const pendingActions = entActions.filter(a => ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS', 'WAITING_FEEDBACK', 'OVERDUE'].includes(a.status));
    const pendingTasks = entTasks.filter(t => ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS', 'WAITING_RESULT'].includes(t.taskStatus));
    const perf = scopeType === 'GROUP'
      ? perfMetrics.find(p => p.scopeType === 'GROUP')
      : scopeType === 'REGION'
        ? perfMetrics.find(p => p.scopeType === 'REGION' && p.scopeId === scopeId)
        : scopeType === 'ENTITY'
          ? perfMetrics.find(p => p.scopeType === 'ENTITY' && p.scopeId === scopeId)
          : null;
    const highPri = entityIds.filter(id => {
      const p = priorities[id];
      return p && (p.priority === 'CRITICAL' || p.priority === 'HIGH');
    }).length;
    const strat = scopeType === 'ENTITY' ? (strategy.entities || []).find(s => s.objectId === scopeId) : scopeType === 'REGION' ? (strategy.regions || []).find(s => s.objectId === scopeId) : null;
    const mat = scopeType === 'ENTITY' ? (maturity.entityMaturity || []).find(m => m.objectId === scopeId) : null;
    return {
      prioritySummary: { highPriorityCount: highPri, criticalCount: entityIds.filter(id => priorities[id]?.priority === 'CRITICAL').length },
      healthSummary: { warningCount: entityIds.filter(id => (entityHealth.find(h => h.objectId === id) || {}).level === 'WARNING' || (entityHealth.find(h => h.objectId === id) || {}).level === 'CRITICAL').length },
      eventSummary: { total: entEvents.length, highRisk: entEvents.filter(e => e.riskLevel === 'HIGH').length, open: entEvents.filter(e => e.status !== 'CLOSED').length },
      rectificationSummary: { total: entRects.length, open: openRects.length, overdue: overdueRects.length, closureRate: entRects.length ? +(entRects.filter(t => t.status === '已关闭' || t.closedAt).length / entRects.length).toFixed(2) : 1 },
      actionSummary: { total: entActions.length, pending: pendingActions.length, overdue: entActions.filter(a => a.status === 'OVERDUE').length },
      supervisionTaskSummary: { total: entTasks.length, pending: pendingTasks.length, overdue: entTasks.filter(t => t.overdue || isOverdue(t.deadline, t.taskStatus)).length },
      performanceSummary: perf ? { score: perf.regulatoryEffectivenessScore, closureRate: perf.rectificationClosureRate } : { score: perfSummary.regulatoryEffectivenessScore || 0, closureRate: perfSummary.rectificationClosureRate || 0 },
      strategySummary: strat ? { level: strat.strategyLevel, label: strat.strategyLabel } : { level: 'OBSERVE', label: '持续观察' },
      maturitySummary: mat ? { level: mat.level, score: mat.score } : { level: maturity.overallLevel || 'L3', score: maturity.overallScore || 0 },
      pendingDecisionCount: entEvents.filter(e => e.status === 'OPEN' || e.status === 'ACKNOWLEDGED').length + highPri,
      pendingActionCount: pendingActions.length,
      pendingTaskCount: pendingTasks.length,
      pendingVerificationCount: entActions.filter(a => a.status === 'COMPLETED').length + entRects.filter(t => t.status === '整改验证' || t.verificationStatus === '验证中').length,
      overdueCount: overdueRects.length + entActions.filter(a => a.status === 'OVERDUE').length + entTasks.filter(t => t.overdue).length
    };
  };

  const entityIdsForScope = (scopeType, scopeId) => {
    if (scopeType === 'GROUP') return entities.filter(e => e.entityId !== 'G001').map(e => e.entityId);
    if (scopeType === 'REGION') return entities.filter(e => e.regionId === scopeId && e.entityId !== 'G001').map(e => e.entityId);
    if (scopeType === 'ENTITY') return scopeId ? [scopeId] : [];
    if (scopeType === 'PROJECT') {
      const p = projects.find(x => x.projectId === scopeId);
      return p ? [p.entityId] : [];
    }
    if (scopeType === 'DOMAIN') return [...new Set(events.filter(e => e.domainId === scopeId).map(e => e.entityId).filter(Boolean))];
    return [];
  };

  const workbenches = [];
  let wbSeq = 1;
  const addWorkbench = (scopeType, scopeId) => {
    const eids = entityIdsForScope(scopeType, scopeId);
    const s = buildScopeSummary(scopeType, scopeId, eids);
    const topIssues = [];
    priorityObjects.filter(o => scopeType === 'GROUP' || (scopeType === 'REGION' && o.regionId === scopeId) || (scopeType === 'ENTITY' && o.objectId === scopeId)).slice(0, 5).forEach(o => {
      topIssues.push({ issueId: 'ISS-' + o.objectId, title: o.objectName + ' 监管优先级 ' + o.priority, entityId: o.objectId, priority: o.priority, sourceType: 'PRIORITY' });
    });
    events.filter(e => e.riskLevel === 'HIGH' && (scopeType === 'GROUP' || eids.includes(e.entityId))).slice(0, 3).forEach(ev => {
      topIssues.push({ issueId: ev.eventId, title: ev.eventTitle || ev.eventId, entityId: ev.entityId, priority: 'HIGH', sourceType: 'EVENT' });
    });
    objectives.filter(o => o.status === 'BEHIND' || o.status === 'AT_RISK').slice(0, 2).forEach(o => {
      if (scopeType === 'GROUP') topIssues.push({ issueId: o.objectiveId, title: o.objectiveName + ' 战略偏差', priority: 'HIGH', sourceType: 'OBJECTIVE' });
    });
    const topRisks = warnings.filter(w => scopeType === 'GROUP' || eids.includes(w.entityId)).filter(w => w.level === '重大').slice(0, 5).map(w => ({ riskMatterId: w.id, name: w.name, entityId: w.entityId, level: w.level }));
    const topActions = actions.filter(a => scopeType === 'GROUP' || eids.includes(a.entityId)).filter(a => a.priority === 'CRITICAL' || a.priority === 'HIGH').slice(0, 5).map(a => ({ actionId: a.actionId, type: a.actionType, entityId: a.entityId, status: a.status }));
    workbenches.push({
      workbenchId: 'WB-' + String(wbSeq++).padStart(3, '0'),
      scopeType,
      scopeId: scopeId || 'G001',
      ...s,
      topIssues,
      topRisks,
      topActions,
      recommendedNextSteps: [
        s.pendingDecisionCount ? '进入监管决策工作室处理待决策事项' : null,
        s.pendingActionCount ? '查看待执行监管行动' : null,
        s.overdueCount ? '优先处理超期整改与行动' : null,
        '查看统一监管待办队列'
      ].filter(Boolean)
    });
  };

  addWorkbench('GROUP', 'G001');
  regions.forEach(r => addWorkbench('REGION', r.regionId));
  entities.filter(e => e.entityId !== 'G001').slice(0, 8).forEach(e => addWorkbench('ENTITY', e.entityId));

  const groupWb = workbenches.find(w => w.scopeType === 'GROUP');

  const queue = [];
  let qSeq = 1;
  const mkQueue = (item) => {
    const q = {
      queueItemId: 'QUE-' + String(qSeq++).padStart(3, '0'),
      queueType: item.queueType,
      sourceId: item.sourceId,
      sourceType: item.sourceType,
      entityId: item.entityId || null,
      regionId: item.regionId || null,
      countryId: item.countryId || null,
      projectId: item.projectId || null,
      domainId: item.domainId || null,
      priority: item.priority || 'MEDIUM',
      status: item.status || 'PENDING',
      title: item.title,
      description: item.description || '',
      dueDate: item.dueDate || null,
      isOverdue: item.isOverdue || false,
      owner: item.owner || '—',
      department: item.department || '—',
      sourceEventIds: item.sourceEventIds || [],
      sourceRiskMatterIds: item.sourceRiskMatterIds || [],
      sourceActionIds: item.sourceActionIds || [],
      sourceRectificationTaskIds: item.sourceRectificationTaskIds || [],
      recommendedAction: item.recommendedAction || '查看详情并处理',
      nextPageId: item.nextPageId || 'regulatory-queue',
      decisionContextId: item.decisionContextId || null
    };
    queue.push(q);
    return q;
  };

  events.filter(e => e.status !== 'CLOSED').forEach(ev => {
    const ent = entities.find(x => x.entityId === ev.entityId);
    mkQueue({
      queueType: ev.status === 'OPEN' || ev.status === 'ACKNOWLEDGED' ? 'DECISION' : 'ACTION',
      sourceId: ev.eventId, sourceType: 'regulatoryEvents',
      entityId: ev.entityId, regionId: ev.regionId || ent?.regionId, countryId: ev.countryId || ent?.countryId, domainId: ev.domainId,
      priority: ev.riskLevel === 'HIGH' ? 'HIGH' : 'MEDIUM', status: ev.status,
      title: ev.eventTitle || ev.eventId, description: ev.description || ev.eventType,
      dueDate: ev.dueDate, isOverdue: isOverdue(ev.dueDate, ev.status),
      department: ent?.responsibleDepartment || '集团风险管理部',
      sourceEventIds: [ev.eventId],
      sourceRiskMatterIds: ev.riskMatterId ? [ev.riskMatterId] : [],
      recommendedAction: '进入监管事件中心处理', nextPageId: 'regulatory-events'
    });
  });

  rects.filter(t => t.status !== '已关闭' && !t.closedAt).forEach(t => {
    const ent = entities.find(e => e.entityId === t.entityId);
    mkQueue({
      queueType: t.status === '整改验证' || t.verificationStatus === '验证中' ? 'VERIFICATION' : 'ACTION',
      sourceId: t.taskId, sourceType: 'rectificationTasks',
      entityId: t.entityId, regionId: t.regionId, countryId: t.countryId, projectId: t.projectId, domainId: t.domainId,
      priority: t.level === 'L4' ? 'CRITICAL' : 'HIGH', status: t.status,
      title: t.title, description: t.measure || t.taskType,
      dueDate: t.deadline, isOverdue: isOverdue(t.deadline, t.status),
      owner: t.owner, department: t.responsibleDepartment || t.owner,
      sourceRectificationTaskIds: [t.taskId],
      sourceRiskMatterIds: t.riskMatterId ? [t.riskMatterId] : [],
      recommendedAction: '进入整改督办', nextPageId: 'rectification'
    });
  });

  actions.filter(a => ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS', 'WAITING_FEEDBACK', 'OVERDUE', 'COMPLETED'].includes(a.status)).forEach(act => {
    const ent = entities.find(e => e.entityId === act.entityId);
    const qType = act.status === 'COMPLETED' ? 'VERIFICATION' : act.status === 'WAITING_FEEDBACK' ? 'FEEDBACK' : 'ACTION';
    mkQueue({
      queueType: qType, sourceId: act.actionId, sourceType: 'regulatoryActions',
      entityId: act.entityId, regionId: act.regionId || ent?.regionId, domainId: act.domainId,
      priority: act.priority, status: act.status,
      title: act.actionId + ' · ' + act.actionType, description: act.triggerReason || act.recommendedAction,
      dueDate: act.dueDate, isOverdue: act.status === 'OVERDUE' || isOverdue(act.dueDate, act.status),
      department: act.responsibleDepartment,
      sourceActionIds: [act.actionId],
      sourceEventIds: act.sourceEventIds || [],
      sourceRiskMatterIds: act.sourceRiskMatterIds || [],
      sourceRectificationTaskIds: act.sourceRectificationTaskIds || [],
      recommendedAction: act.recommendedAction, nextPageId: 'regulatory-actions'
    });
  });

  feedbacks.filter(f => f.feedbackStatus === 'PENDING' || f.feedbackStatus === 'DRAFT').forEach(fb => {
    const act = actions.find(a => a.actionId === fb.actionId);
    mkQueue({
      queueType: 'FEEDBACK', sourceId: fb.feedbackId, sourceType: 'regulatoryActionFeedbacks',
      entityId: act?.entityId, priority: act?.priority || 'MEDIUM', status: fb.feedbackStatus,
      title: fb.feedbackId + ' · 行动反馈', description: fb.feedbackType,
      dueDate: fb.dueDate, isOverdue: isOverdue(fb.dueDate, fb.feedbackStatus),
      department: act?.responsibleDepartment,
      sourceActionIds: [fb.actionId],
      recommendedAction: '提交执行反馈', nextPageId: 'regulatory-action-execution'
    });
  });

  supTasks.filter(t => ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS', 'WAITING_RESULT'].includes(t.taskStatus)).forEach(task => {
    const ent = entities.find(e => e.entityId === task.entityId);
    mkQueue({
      queueType: 'SUPERVISION_TASK', sourceId: task.supervisionTaskId, sourceType: 'regulatorySupervisionTasks',
      entityId: task.entityId, regionId: task.regionId || ent?.regionId,
      priority: task.taskStatus === 'RECOMMENDED' ? 'MEDIUM' : 'HIGH', status: task.taskStatus,
      title: task.supervisionTaskId + ' · ' + task.outcomeTarget, description: task.taskType,
      dueDate: task.deadline, isOverdue: task.overdue || isOverdue(task.deadline, task.taskStatus),
      department: task.responsibleDepartment,
      sourceActionIds: task.relatedRegulatoryActionIds || [],
      sourceEventIds: task.sourceEventIds || [],
      sourceRiskMatterIds: task.sourceRiskMatterIds || [],
      sourceRectificationTaskIds: task.relatedRectificationTaskIds || [],
      recommendedAction: '进入监管任务协同', nextPageId: 'regulatory-supervision-tasks'
    });
  });

  changeRequests.filter(cr => ['PENDING', 'SUBMITTED', 'IN_REVIEW', 'PENDING_APPROVAL', 'IMPACT_ASSESSED', 'DRAFT'].includes(cr.status)).forEach(cr => {
    mkQueue({
      queueType: 'RULE_APPROVAL', sourceId: cr.changeRequestId, sourceType: 'regulatoryRuleChangeRequests',
      priority: 'HIGH', status: cr.status,
      title: cr.changeRequestId + ' · ' + (cr.changeTitle || cr.ruleId),
      description: cr.changeDescription || cr.reason,
      dueDate: cr.dueDate, isOverdue: isOverdue(cr.dueDate, cr.status),
      department: cr.submittedBy || '集团监管部',
      recommendedAction: '进入规则审批中心', nextPageId: 'regulatory-rule-approvals'
    });
  });

  approvals.filter(a => ['PENDING', 'IN_REVIEW'].includes(a.approvalStatus)).forEach(apr => {
    const cr = changeRequests.find(c => c.changeRequestId === apr.changeRequestId);
    mkQueue({
      queueType: 'RULE_APPROVAL', sourceId: apr.approvalId, sourceType: 'regulatoryRuleApprovals',
      priority: 'HIGH', status: apr.approvalStatus,
      title: apr.approvalId + ' · 规则审批',
      description: (cr?.changeTitle || cr?.ruleId || apr.changeRequestId) + ' · ' + (apr.approvalStage || ''),
      dueDate: apr.dueDate, isOverdue: isOverdue(apr.dueDate, apr.approvalStatus),
      department: apr.approverDepartment || '集团监管部',
      recommendedAction: '进入规则审批中心', nextPageId: 'regulatory-rule-approvals'
    });
  });

  deployments.filter(d => d.deploymentStatus === 'PENDING').forEach(dep => {
    mkQueue({
      queueType: 'RULE_DEPLOYMENT', sourceId: dep.deploymentId, sourceType: 'regulatoryRuleDeployments',
      priority: 'HIGH', status: dep.deploymentStatus,
      title: dep.deploymentId + ' · 待发布 ' + dep.ruleId,
      description: dep.deploymentNotes || '规则版本待生效',
      department: '集团监管部',
      recommendedAction: '进入规则部署中心', nextPageId: 'regulatory-rule-deployments'
    });
  });

  (APP_DATA.regulatoryRuleVersions || []).filter(v => ['PENDING_PUBLISH', 'APPROVED'].includes(v.status)).forEach(ver => {
    mkQueue({
      queueType: 'RULE_DEPLOYMENT', sourceId: ver.versionId, sourceType: 'regulatoryRuleVersions',
      priority: 'HIGH', status: ver.status,
      title: ver.versionId + ' · 待发布 ' + (ver.ruleName || ver.ruleId),
      description: ver.changeSummary || '规则版本待发布生效',
      department: '集团监管部',
      recommendedAction: '进入规则版本中心', nextPageId: 'regulatory-rule-versions'
    });
  });

  anomalies.forEach(a => {
    const ent = a.entityId ? entities.find(e => e.entityId === a.entityId) : null;
    mkQueue({
      queueType: 'RULE_ANOMALY', sourceId: a.anomalyId, sourceType: 'regulatoryRuleRuntimeAnomalies',
      entityId: a.entityId, regionId: ent?.regionId,
      priority: a.severity === 'HIGH' ? 'CRITICAL' : 'HIGH', status: 'OPEN',
      title: a.anomalyId + ' · ' + a.anomalyType,
      description: a.description,
      dueDate: TODAY, isOverdue: false,
      department: '集团监管部',
      recommendedAction: '查看规则运行异常', nextPageId: 'regulatory-rule-runtime'
    });
  });

  objectives.filter(o => o.status === 'BEHIND' || o.status === 'AT_RISK').forEach(obj => {
    mkQueue({
      queueType: 'STRATEGIC_REVIEW', sourceId: obj.objectiveId, sourceType: 'regulatoryStrategicObjectives',
      priority: obj.status === 'BEHIND' ? 'CRITICAL' : 'HIGH', status: obj.status,
      title: obj.objectiveName + ' 战略偏差',
      description: `完成率 ${Math.round(obj.completionRate * 100)}%，偏差 ${obj.variance}${obj.unit}`,
      department: '集团风险管理部',
      recommendedAction: '进入战略规划中心', nextPageId: 'regulatory-strategy-planning'
    });
  });

  annualPlans.filter(p => p.planStatus === 'AT_RISK').forEach(plan => {
    mkQueue({
      queueType: 'PLAN_VARIANCE', sourceId: plan.planId, sourceType: 'regulatoryAnnualPlans',
      priority: 'HIGH', status: plan.planStatus,
      title: plan.planName + ' 计划偏差',
      description: `完成率 ${Math.round(plan.completionRate * 100)}%`,
      dueDate: plan.planYear + '-12-31',
      department: '集团风险管理部',
      recommendedAction: '查看年度计划执行', nextPageId: 'regulatory-plan-execution'
    });
  });

  recommendations.filter(r => r.status === 'OPEN').forEach(rec => {
    mkQueue({
      queueType: 'STRATEGIC_REVIEW', sourceId: rec.recommendationId, sourceType: 'regulatoryNextCycleRecommendations',
      priority: rec.priority, status: rec.status,
      title: '下一周期建议 · ' + rec.recommendationType,
      description: rec.triggerReason,
      department: '集团风险管理部',
      focusEntityIds: rec.focusEntityIds,
      recommendedAction: rec.strategyAdjustment, nextPageId: 'regulatory-strategic-review'
    });
  });

  queue.sort((a, b) => (priRank[b.priority] || 0) - (priRank[a.priority] || 0));

  const decisionContexts = [];
  let dcSeq = 1;
  const decisionOptionsFor = (ent, pri, h, strat) => {
    const opts = [];
    if (pri?.priority === 'CRITICAL' || pri?.priority === 'HIGH') opts.push({ action: 'FOCUS_SUPERVISION', label: '重点监管', basis: '高监管优先级' });
    if (pri?.priority === 'CRITICAL') opts.push({ action: 'SPECIAL_SUPERVISION', label: '专项监管', basis: 'CRITICAL 优先级' });
    const overdue = rects.filter(t => t.entityId === ent.entityId && isOverdue(t.deadline, t.status));
    if (overdue.length) opts.push({ action: 'ESCALATE_RECTIFICATION', label: '升级督办整改', basis: `超期整改 ${overdue.length} 项` });
    const qual = quality.filter(q => {
      const obj = (APP_DATA.dataObjects || []).find(o => o.objectId === q.objectId);
      return obj && obj.entityId === ent.entityId;
    });
    if (qual.length) opts.push({ action: 'DATA_QUALITY_REMEDIATION', label: '数据质量专项治理', basis: `数据质量异常 ${qual.length} 项` });
    if ((ent.kriExceptionCount || 0) > 0) opts.push({ action: 'KRI_MONITORING', label: 'KRI 异常监测', basis: `KRI 异常 ${ent.kriExceptionCount} 项` });
    const cbEvts = events.filter(e => e.entityId === ent.entityId && e.eventType === 'CROSS_BORDER');
    if (cbEvts.length) opts.push({ action: 'CROSS_BORDER_REVIEW', label: '跨境合规复核', basis: '跨境合规异常' });
    const cdr = cdrMatters.filter(m => (m.entityIds || []).includes(ent.entityId));
    if (cdr.length) opts.push({ action: 'CROSS_DOMAIN_COORDINATION', label: '跨领域协同', basis: '跨领域风险传导' });
    if (allocations.some(a => a.entityId === ent.entityId && a.allocatedLevel === 'HIGH')) opts.push({ action: 'RESOURCE_REALLOCATION', label: '资源配置调整', basis: '高资源投入对象' });
    if (!opts.length) opts.push({ action: 'CONTINUE_MONITORING', label: '持续观察', basis: '当前风险可控' });
    return opts;
  };

  entities.filter(e => e.entityId !== 'G001').forEach(ent => {
    const pri = priorities[ent.entityId] || {};
    const h = entityHealth.find(x => x.objectId === ent.entityId) || {};
    const strat = (strategy.entities || []).find(s => s.objectId === ent.entityId);
    const mat = (maturity.entityMaturity || []).find(m => m.objectId === ent.entityId);
    const perf = perfMetrics.find(p => p.scopeType === 'ENTITY' && p.scopeId === ent.entityId);
    const entEvents = events.filter(e => e.entityId === ent.entityId);
    const entRects = rects.filter(t => t.entityId === ent.entityId);
    const entActions = actions.filter(a => a.entityId === ent.entityId);
    const entWarnings = warnings.filter(w => w.entityId === ent.entityId);
    const entQual = quality.filter(q => {
      const obj = (APP_DATA.dataObjects || []).find(o => o.objectId === q.objectId);
      return obj && obj.entityId === ent.entityId;
    });
    const options = decisionOptionsFor(ent, pri, h, strat);
    const recommended = options[0];
    decisionContexts.push({
      decisionContextId: 'DC-' + String(dcSeq++).padStart(3, '0'),
      entityId: ent.entityId,
      regionId: ent.regionId,
      countryId: ent.countryId,
      projectId: null,
      domainId: 'investment',
      priority: pri.priority || 'LOW',
      healthLevel: h.level || 'ATTENTION',
      strategyLevel: strat?.strategyLevel || 'OBSERVE',
      maturityLevel: mat?.level || maturity.overallLevel || 'L3',
      riskSummary: { total: entWarnings.length, major: entWarnings.filter(w => w.level === '重大').length, highRiskEvents: entEvents.filter(e => e.riskLevel === 'HIGH').length },
      dataQualitySummary: { issueCount: entQual.length, openCount: entQual.filter(q => q.status !== '已关闭' && q.status !== '已修复').length },
      kriSummary: { exceptionCount: ent.kriExceptionCount || 0 },
      eventSummary: { total: entEvents.length, open: entEvents.filter(e => e.status !== 'CLOSED').length },
      rectificationSummary: { total: entRects.length, open: entRects.filter(t => t.status !== '已关闭').length, overdue: entRects.filter(t => isOverdue(t.deadline, t.status)).length },
      actionSummary: { total: entActions.length, pending: entActions.filter(a => !['VERIFIED', 'CANCELLED'].includes(a.status)).length },
      performanceSummary: perf ? { score: perf.regulatoryEffectivenessScore } : { score: 0 },
      currentDecision: recommended?.action || 'CONTINUE_MONITORING',
      decisionOptions: options,
      recommendedDecision: recommended?.action || 'CONTINUE_MONITORING',
      decisionBasis: recommended?.basis || pri.recommendedAction || '综合监管状态评估',
      relatedEventIds: entEvents.slice(0, 5).map(e => e.eventId),
      relatedRiskMatterIds: entWarnings.slice(0, 5).map(w => w.id),
      relatedKriIds: entWarnings.filter(w => w.kriId).map(w => w.kriId).slice(0, 3),
      relatedActionIds: entActions.slice(0, 5).map(a => a.actionId),
      relatedRectificationTaskIds: entRects.slice(0, 5).map(t => t.taskId),
      createdAt: '2026-07-01T00:00:00',
      updatedAt: TODAY + 'T08:00:00'
    });
  });

  queue.forEach(q => {
    if (q.entityId && !q.decisionContextId) {
      const dc = decisionContexts.find(d => d.entityId === q.entityId);
      if (dc) q.decisionContextId = dc.decisionContextId;
    }
  });

  workbenches.forEach(wb => {
    wb.topIssues.forEach(issue => {
      if (issue.entityId) {
        const dc = decisionContexts.find(d => d.entityId === issue.entityId);
        if (dc) issue.decisionContextId = dc.decisionContextId;
      }
    });
  });

  const workbenchMetrics = {
    objectCount: entities.filter(e => e.entityId !== 'G001').length,
    highPriorityObjectCount: priorityObjects.filter(o => o.priority === 'CRITICAL' || o.priority === 'HIGH').length,
    majorEventCount: events.filter(e => e.riskLevel === 'HIGH').length,
    overdueRectCount: rects.filter(t => isOverdue(t.deadline, t.status)).length,
    pendingDecisionCount: queue.filter(q => q.queueType === 'DECISION').length,
    pendingActionCount: queue.filter(q => q.queueType === 'ACTION').length,
    pendingTaskCount: queue.filter(q => q.queueType === 'SUPERVISION_TASK').length,
    pendingVerificationCount: queue.filter(q => q.queueType === 'VERIFICATION').length,
    overdueCount: queue.filter(q => q.isOverdue).length,
    highPriorityCount: queue.filter(q => q.priority === 'CRITICAL' || q.priority === 'HIGH').length,
    ruleAnomalyCount: queue.filter(q => q.queueType === 'RULE_ANOMALY').length,
    strategicDeviationCount: queue.filter(q => q.queueType === 'STRATEGIC_REVIEW' || q.queueType === 'PLAN_VARIANCE').length,
    queueTotal: queue.length,
    decisionContextCount: decisionContexts.length,
    workbenchCount: workbenches.length,
    topEntityIds: priorityObjects.slice(0, 10).map(o => o.objectId),
    topRegionIds: regions.slice(0, 5).map(r => r.regionId),
    topDomainIds: (strategy.domains || []).filter(d => d.strategyLevel === 'FOCUS' || d.strategyLevel === 'SPECIAL').slice(0, 5).map(d => d.objectId),
    topProjectIds: projects.filter(p => (p.highRiskCount || 0) > 0 || (p.riskCount || 0) > 0).slice(0, 10).map(p => p.projectId),
    loopStatus: {
      discover: events.filter(e => e.status !== 'CLOSED').length,
      judge: Object.keys(priorities).filter(k => priorities[k].priority !== 'LOW').length,
      decide: queue.filter(q => q.queueType === 'DECISION').length,
      execute: queue.filter(q => q.queueType === 'ACTION').length,
      resource: allocations.filter(a => a.allocationStatus === 'ACTIVE').length,
      task: queue.filter(q => q.queueType === 'SUPERVISION_TASK').length,
      rectify: rects.filter(t => t.status !== '已关闭').length,
      evaluate: (perfSummary.regulatoryEffectivenessScore || 0),
      review: recommendations.filter(r => r.status === 'OPEN').length
    }
  };

  APP_DATA.regulatoryWorkbench = workbenches;
  APP_DATA.regulatoryQueue = queue;
  APP_DATA.regulatoryDecisionContext = decisionContexts;
  APP_DATA.regulatoryWorkbenchMetrics = workbenchMetrics;
})();

(function () {
  const TODAY = '2026-07-22';
  const entities = APP_DATA.globalLegalEntities || [];
  const regions = APP_DATA.globalRegions || [];
  const countries = APP_DATA.globalCountries || [];
  const projects = APP_DATA.globalProjects || [];
  const domains = APP_DATA.regulationDomains || [];
  const events = APP_DATA.regulatoryEvents || [];
  const warnings = APP_DATA.warnings || [];
  const cdrMatters = APP_DATA.crossDomainRiskMatters || [];
  const rects = APP_DATA.rectificationTasks || [];
  const actions = APP_DATA.regulatoryActions || [];
  const supTasks = APP_DATA.regulatorySupervisionTasks || [];
  const queue = APP_DATA.regulatoryQueue || [];
  const priorities = APP_DATA.regulatoryPrioritiesRecalculated || APP_DATA.regulatoryPriorities || {};
  const health = APP_DATA.regulatoryHealthScores || {};
  const entityHealth = health.entities || [];
  const strategy = APP_DATA.regulatoryStrategyAnalysis || {};
  const maturity = APP_DATA.regulatoryMaturity || {};
  const perfSummary = APP_DATA.regulatoryPerformanceSummary || {};
  const objectives = APP_DATA.regulatoryStrategicObjectives || [];
  const annualPlans = APP_DATA.regulatoryAnnualPlans || [];
  const anomalies = APP_DATA.regulatoryRuleRuntimeAnomalies || [];
  const rules = APP_DATA.regulatoryRules || [];
  const versions = APP_DATA.regulatoryRuleVersions || [];
  const sources = APP_DATA.dataSources || [];
  const kris = APP_DATA.groupKris || [];
  const quality = APP_DATA.dataQualityIssues || [];
  const priorityObjects = APP_DATA.regulatoryPriorityObjects || [];
  const decisionContexts = APP_DATA.regulatoryDecisionContext || [];
  const decisions = APP_DATA.regulatoryDecisionHistory || [];
  const wbM = APP_DATA.regulatoryWorkbenchMetrics || {};
  const cbActs = APP_DATA.crossBorderDataActivities || [];

  const entityRegulator = entities.find(e => e.entityId !== 'G001') || entities[0];
  const domainRegulator = domains.find(d => d.id === 'investment') || domains[0];

  const roleProfiles = [
    {
      roleId: 'ROLE-GROUP-LEADER',
      roleType: 'GROUP_LEADER',
      roleName: '集团领导',
      description: '关注集团整体监管状态、重大风险与战略决策',
      defaultPageId: 'regulatory-role-workbench',
      visibleModules: ['kpi', 'urgent', 'focus', 'performance', 'strategy'],
      visiblePages: ['group', 'regulatory-command-center', 'regulatory-role-workbench', 'regulatory-my-work', 'regulatory-search', 'regulatory-decision-room', 'regulatory-strategic-review'],
      defaultScopeType: 'GROUP',
      defaultScopeId: 'G001',
      kpiConfig: ['majorRisk', 'highPriorityEntity', 'overdueRect', 'pendingDecision', 'crossBorder', 'crossDomain', 'closureRate', 'strategyDeviation'],
      priorityConfig: { minLevel: 'HIGH' },
      quickActions: [
        { label: '决策工作室', pageId: 'regulatory-decision-room' },
        { label: '战略复盘', pageId: 'regulatory-strategic-review' },
        { label: '监管绩效', pageId: 'regulatory-performance' }
      ],
      notificationTypes: ['MAJOR_RISK', 'OVERDUE_RECT', 'STRATEGY_DEVIATION', 'CROSS_BORDER', 'DECISION']
    },
    {
      roleId: 'ROLE-GROUP-REG',
      roleType: 'GROUP_REGULATORY',
      roleName: '集团监管部门',
      description: '统筹监管事件、待办、行动、任务与规则运行',
      defaultPageId: 'regulatory-role-workbench',
      visibleModules: ['kpi', 'queue', 'action', 'rule', 'performance'],
      visiblePages: ['regulatory-workbench', 'regulatory-queue', 'regulatory-events', 'regulatory-actions', 'regulatory-supervision-tasks', 'regulatory-rule-runtime'],
      defaultScopeType: 'GROUP',
      defaultScopeId: 'G001',
      kpiConfig: ['pendingEvent', 'pendingAction', 'pendingTask', 'pendingVerification', 'overdue', 'ruleAnomaly', 'ruleApproval', 'performance'],
      priorityConfig: { minLevel: 'MEDIUM' },
      quickActions: [
        { label: '待办队列', pageId: 'regulatory-queue' },
        { label: '监管行动', pageId: 'regulatory-actions' },
        { label: '规则运行', pageId: 'regulatory-rule-runtime' }
      ],
      notificationTypes: ['EVENT', 'ACTION', 'TASK', 'RULE_ANOMALY', 'VERIFICATION']
    },
    {
      roleId: 'ROLE-DOMAIN-REG',
      roleType: 'DOMAIN_REGULATOR',
      roleName: '专业领域监管部门',
      description: '关注领域风险、KRI、数据质量与领域整改',
      defaultPageId: 'regulatory-role-workbench',
      visibleModules: ['kpi', 'domainRisk', 'kri', 'dataQuality', 'domainAction'],
      visiblePages: ['warnings', 'data-governance', 'regulatory-actions', 'rectification', 'regulatory-performance'],
      defaultScopeType: 'DOMAIN',
      defaultScopeId: domainRegulator?.id || 'investment',
      kpiConfig: ['domainRisk', 'kriException', 'dataQuality', 'domainAction', 'domainRect', 'domainClosure'],
      priorityConfig: { domainId: domainRegulator?.id || 'investment' },
      quickActions: [
        { label: '领域风险', pageId: 'warnings' },
        { label: '数据治理', pageId: 'data-governance' },
        { label: '整改督办', pageId: 'rectification' }
      ],
      notificationTypes: ['DOMAIN_RISK', 'KRI', 'DATA_QUALITY', 'RECTIFICATION']
    },
    {
      roleId: 'ROLE-ENTITY-REG',
      roleType: 'ENTITY_REGULATOR',
      roleName: '法人监管用户',
      description: '关注本法人风险、KRI、整改、行动与健康度',
      defaultPageId: 'regulatory-role-workbench',
      visibleModules: ['kpi', 'entityRisk', 'entityQueue', 'entityHealth'],
      visiblePages: ['global-legal-entities', 'warnings', 'rectification', 'regulatory-actions', 'regulatory-my-work'],
      defaultScopeType: 'ENTITY',
      defaultScopeId: entityRegulator?.entityId || 'A001',
      kpiConfig: ['entityHighRisk', 'entityQueue', 'entityOverdueRect', 'entityKri', 'entityAction', 'entityHealth', 'entityPriority'],
      priorityConfig: { entityId: entityRegulator?.entityId },
      quickActions: [
        { label: '法人详情', pageId: 'global-legal-entities' },
        { label: '我的待办', pageId: 'regulatory-my-work' },
        { label: '决策上下文', pageId: 'regulatory-decision-room' }
      ],
      notificationTypes: ['ENTITY_RISK', 'ENTITY_RECT', 'ENTITY_ACTION', 'ENTITY_KRI']
    }
  ];

  const filterQueueForRole = (role, scopeType, scopeId) => {
    let list = [...queue];
    if (scopeType === 'ENTITY' && scopeId) list = list.filter(q => q.entityId === scopeId);
    else if (scopeType === 'DOMAIN' && scopeId) list = list.filter(q => q.domainId === scopeId);
    if (role.roleType === 'GROUP_LEADER') list = list.filter(q => q.priority === 'CRITICAL' || q.priority === 'HIGH');
    return list;
  };

  const buildRoleKpis = (role, scopeType, scopeId) => {
    const eids = scopeType === 'ENTITY' && scopeId ? [scopeId]
      : scopeType === 'DOMAIN' && scopeId
        ? [...new Set(events.filter(e => e.domainId === scopeId).map(e => e.entityId).filter(Boolean))]
        : entities.filter(e => e.entityId !== 'G001').map(e => e.entityId);
    const entWarnings = warnings.filter(w => scopeType === 'GROUP' || eids.includes(w.entityId));
    const entRects = rects.filter(t => scopeType === 'GROUP' || eids.includes(t.entityId));
    const entActions = actions.filter(a => scopeType === 'GROUP' || eids.includes(a.entityId));
    const overdueRects = entRects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭');
    const majorRisks = entWarnings.filter(w => w.level === '重大').length;
    const highPriEntities = priorityObjects.filter(o => o.priority === 'CRITICAL' || o.priority === 'HIGH').length;
    const cbRisk = cbActs.filter(a => a.complianceStatus === '异常' || a.riskLevel === 'HIGH').length;
    const cdrHigh = cdrMatters.filter(m => m.riskLevel === '高').length;
    const stratDev = objectives.filter(o => o.status === 'BEHIND' || o.status === 'AT_RISK').length;
    const domainKri = scopeType === 'DOMAIN' && scopeId
      ? kris.filter(k => (k.domainId || 'investment') === scopeId && (k.status === '红色' || k.status === '黄色')).length
      : kris.filter(k => k.status === '红色' || k.status === '黄色').length;
    const domainQual = scopeType === 'DOMAIN' && scopeId
      ? quality.filter(q => {
        const obj = (APP_DATA.dataObjects || []).find(o => o.objectId === q.objectId);
        return obj && (obj.domainId || 'investment') === scopeId;
      }).length
      : quality.length;
    const closureRate = entRects.length
      ? Math.round(entRects.filter(t => t.status === '已关闭').length / entRects.length * 100)
      : 100;
    const entityPri = scopeType === 'ENTITY' && scopeId ? priorities[scopeId] : null;
    const entityH = scopeType === 'ENTITY' && scopeId ? entityHealth.find(h => h.objectId === scopeId) : null;

    const kpiMap = {
      majorRisk: { label: '重大风险事项', value: majorRisks, nav: `App.navigatePublic('warnings')` },
      highPriorityEntity: { label: '高优先级法人', value: highPriEntities, nav: `App.navigatePublic('global-legal-entities')` },
      overdueRect: { label: '超期整改', value: overdueRects.length, nav: `App.navigatePublic('rectification-operations')` },
      pendingDecision: { label: '待决策事项', value: wbM.pendingDecisionCount || 0, nav: `App.navigatePublic('regulatory-queue',{queueType:'DECISION'})` },
      crossBorder: { label: '跨境合规风险', value: cbRisk, nav: `App.navigatePublic('cross-border-compliance')` },
      crossDomain: { label: '跨领域风险', value: cdrHigh, nav: `App.navigatePublic('cross-domain-risks')` },
      closureRate: { label: '监管闭环率', value: closureRate + '%', nav: `App.navigatePublic('regulatory-evaluation')` },
      strategyDeviation: { label: '战略目标偏差', value: stratDev, nav: `App.navigatePublic('regulatory-strategy-planning',{status:'BEHIND'})` },
      pendingEvent: { label: '待处理事件', value: events.filter(e => e.status !== 'CLOSED').length, nav: `App.navigatePublic('regulatory-events')` },
      pendingAction: { label: '待执行行动', value: wbM.pendingActionCount || 0, nav: `App.navigatePublic('regulatory-queue',{queueType:'ACTION'})` },
      pendingTask: { label: '待协同任务', value: wbM.pendingTaskCount || 0, nav: `App.navigatePublic('regulatory-queue',{queueType:'SUPERVISION_TASK'})` },
      pendingVerification: { label: '待验证事项', value: wbM.pendingVerificationCount || 0, nav: `App.navigatePublic('regulatory-queue',{queueType:'VERIFICATION'})` },
      overdue: { label: '超期事项', value: wbM.overdueCount || 0, nav: `App.navigatePublic('regulatory-queue',{overdue:'true'})` },
      ruleAnomaly: { label: '规则运行异常', value: wbM.ruleAnomalyCount || 0, nav: `App.navigatePublic('regulatory-queue',{queueType:'RULE_ANOMALY'})` },
      ruleApproval: { label: '待审批事项', value: queue.filter(q => q.queueType === 'RULE_APPROVAL').length, nav: `App.navigatePublic('regulatory-queue',{queueType:'RULE_APPROVAL'})` },
      performance: { label: '监管绩效', value: perfSummary.regulatoryEffectivenessScore || 0, nav: `App.navigatePublic('regulatory-performance')` },
      domainRisk: { label: '领域风险', value: entWarnings.length, nav: `App.navigatePublic('warnings')` },
      kriException: { label: '领域 KRI 异常', value: domainKri, nav: `App.navigatePublic('data-governance')` },
      dataQuality: { label: '数据质量问题', value: domainQual, nav: `App.navigatePublic('data-governance')` },
      domainAction: { label: '领域监管行动', value: entActions.length, nav: `App.navigatePublic('regulatory-actions')` },
      domainRect: { label: '领域整改', value: entRects.filter(t => t.status !== '已关闭').length, nav: `App.navigatePublic('rectification')` },
      domainClosure: { label: '领域闭环率', value: closureRate + '%', nav: `App.navigatePublic('regulatory-evaluation')` },
      entityHighRisk: { label: '本法人高风险', value: majorRisks, nav: `App.navigatePublic('warnings',{entityId:scopeId})` },
      entityQueue: { label: '本法人待办', value: filterQueueForRole(role, scopeType, scopeId).length, nav: `App.navigatePublic('regulatory-my-work')` },
      entityOverdueRect: { label: '本法人超期整改', value: overdueRects.length, nav: `App.navigatePublic('rectification',{entityId:scopeId})` },
      entityKri: { label: '本法人 KRI 异常', value: entityRegulator?.kriExceptionCount || domainKri, nav: `App.navigatePublic('data-governance')` },
      entityAction: { label: '本法人监管行动', value: entActions.filter(a => !['VERIFIED', 'CANCELLED'].includes(a.status)).length, nav: `App.navigatePublic('regulatory-actions',{entityId:scopeId})` },
      entityHealth: { label: '本法人健康度', value: entityH?.level || '—', nav: `App.navigatePublic('global-legal-entities',{entityId:scopeId})` },
      entityPriority: { label: '本法人监管优先级', value: entityPri?.priority || '—', nav: `App.navigatePublic('regulatory-strategy')` }
    };
    return (role.kpiConfig || []).map(k => ({ key: k, ...kpiMap[k] })).filter(k => k.label);
  };

  const buildUrgentItems = (role, scopeType, scopeId) => {
    const items = [];
    if (role.roleType === 'GROUP_LEADER') {
      warnings.filter(w => w.level === '重大').slice(0, 3).forEach(w => {
        items.push({ title: w.name, sourceType: 'RISK', priority: 'HIGH', nav: `warnings`, params: { riskMatterId: w.id } });
      });
      priorityObjects.filter(o => o.priority === 'CRITICAL').slice(0, 2).forEach(o => {
        items.push({ title: o.objectName + ' 高优先级', sourceType: 'ENTITY', priority: 'CRITICAL', nav: 'regulatory-decision-room', params: { entityId: o.objectId } });
      });
      objectives.filter(o => o.status === 'BEHIND').slice(0, 2).forEach(o => {
        items.push({ title: o.objectiveName + ' 战略偏差', sourceType: 'OBJECTIVE', priority: 'HIGH', nav: 'regulatory-strategy-planning', params: { objectiveId: o.objectiveId } });
      });
    } else if (role.roleType === 'GROUP_REGULATORY') {
      events.filter(e => e.riskLevel === 'HIGH').slice(0, 3).forEach(ev => {
        items.push({ title: ev.eventTitle || ev.eventId, sourceType: 'EVENT', priority: 'HIGH', nav: 'regulatory-events', params: { eventId: ev.eventId } });
      });
      queue.filter(q => q.isOverdue).slice(0, 3).forEach(q => {
        items.push({ title: q.title, sourceType: 'QUEUE', priority: q.priority, nav: 'regulatory-queue', params: { queueItemId: q.queueItemId } });
      });
    } else if (role.roleType === 'DOMAIN_REGULATOR') {
      warnings.filter(w => (w.domainId || 'investment') === scopeId && w.level === '重大').slice(0, 3).forEach(w => {
        items.push({ title: w.name, sourceType: 'RISK', priority: 'HIGH', nav: 'warnings', params: { riskMatterId: w.id } });
      });
      quality.slice(0, 2).forEach(q => {
        items.push({ title: q.issueId + ' 数据质量', sourceType: 'DATA', priority: 'MEDIUM', nav: 'data-governance', params: { qualityIssueId: q.issueId } });
      });
    } else {
      const eid = scopeId;
      warnings.filter(w => w.entityId === eid).filter(w => w.level === '重大').slice(0, 2).forEach(w => {
        items.push({ title: w.name, sourceType: 'RISK', priority: 'HIGH', nav: 'warnings', params: { riskMatterId: w.id } });
      });
      filterQueueForRole(role, scopeType, scopeId).slice(0, 3).forEach(q => {
        items.push({ title: q.title, sourceType: 'QUEUE', priority: q.priority, nav: 'regulatory-my-work', params: { queueItemId: q.queueItemId } });
      });
    }
    return items;
  };

  const buildFocusObjects = (role, scopeType, scopeId) => {
    if (role.roleType === 'GROUP_LEADER') {
      return {
        entities: (wbM.topEntityIds || []).slice(0, 5).map(id => ({ objectId: id, objectType: 'ENTITY', name: (entities.find(e => e.entityId === id) || {}).entityName })),
        regions: (wbM.topRegionIds || []).slice(0, 3).map(id => ({ objectId: id, objectType: 'REGION', name: (regions.find(r => r.regionId === id) || {}).regionName })),
        projects: (wbM.topProjectIds || []).slice(0, 3).map(id => ({ objectId: id, objectType: 'PROJECT', name: (projects.find(p => p.projectId === id) || {}).projectName })),
        domains: (wbM.topDomainIds || []).slice(0, 3).map(id => ({ objectId: id, objectType: 'DOMAIN', name: (domains.find(d => d.id === id) || {}).name }))
      };
    }
    if (role.roleType === 'GROUP_REGULATORY') {
      return {
        objects: priorityObjects.slice(0, 5).map(o => ({ objectId: o.objectId, objectType: o.objectType, name: o.objectName, priority: o.priority }))
      };
    }
    if (role.roleType === 'DOMAIN_REGULATOR') {
      const eids = [...new Set(events.filter(e => e.domainId === scopeId).map(e => e.entityId))];
      return {
        entities: eids.slice(0, 5).map(id => ({ objectId: id, objectType: 'ENTITY', name: (entities.find(e => e.entityId === id) || {}).entityName })),
        risks: warnings.filter(w => (w.domainId || 'investment') === scopeId).slice(0, 5).map(w => ({ objectId: w.id, objectType: 'RISK', name: w.name }))
      };
    }
    const eid = scopeId;
    return {
      risks: warnings.filter(w => w.entityId === eid).slice(0, 5).map(w => ({ objectId: w.id, objectType: 'RISK', name: w.name })),
      kris: kris.filter(k => k.entityId === eid || !k.entityId).slice(0, 3).map(k => ({ objectId: k.id, objectType: 'KRI', name: k.name })),
      rects: rects.filter(t => t.entityId === eid).slice(0, 3).map(t => ({ objectId: t.taskId, objectType: 'RECT', name: t.title }))
    };
  };

  const roleWorkbenches = roleProfiles.map((role, idx) => {
    const scopeType = role.defaultScopeType;
    const scopeId = role.defaultScopeId;
    const roleQueue = filterQueueForRole(role, scopeType, scopeId);
    return {
      workbenchId: 'RW-' + String(idx + 1).padStart(3, '0'),
      roleId: role.roleId,
      roleType: role.roleType,
      scopeType,
      scopeId,
      title: role.roleName + '工作台',
      subtitle: role.description,
      kpis: buildRoleKpis(role, scopeType, scopeId),
      urgentItems: buildUrgentItems(role, scopeType, scopeId),
      pendingItems: roleQueue.slice(0, 8).map(q => ({
        queueItemId: q.queueItemId, queueType: q.queueType, title: q.title,
        priority: q.priority, dueDate: q.dueDate, isOverdue: q.isOverdue,
        sourceType: q.sourceType, recommendedAction: q.recommendedAction
      })),
      focusObjects: buildFocusObjects(role, scopeType, scopeId),
      riskSummary: { major: warnings.filter(w => w.level === '重大').length, high: warnings.filter(w => w.level === '较大').length },
      actionSummary: { pending: actions.filter(a => !['VERIFIED', 'CANCELLED'].includes(a.status)).length },
      rectificationSummary: { open: rects.filter(t => t.status !== '已关闭').length, overdue: rects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭').length },
      performanceSummary: { score: perfSummary.regulatoryEffectivenessScore || 0 },
      quickActions: role.quickActions || [],
      recommendedPages: role.visiblePages || [],
      updatedAt: TODAY + 'T08:00:00'
    };
  });

  const searchIndex = [];
  let resSeq = 1;
  const addSearch = (item) => {
    searchIndex.push({
      resultId: 'SR-' + String(resSeq++).padStart(4, '0'),
      objectType: item.objectType,
      objectId: item.objectId,
      title: item.title,
      subtitle: item.subtitle || '',
      regionId: item.regionId || null,
      countryId: item.countryId || null,
      entityId: item.entityId || null,
      projectId: item.projectId || null,
      domainId: item.domainId || null,
      priority: item.priority || null,
      status: item.status || null,
      matchedFields: item.matchedFields || ['title'],
      targetPageId: item.targetPageId,
      targetParams: item.targetParams || {},
      category: item.category
    });
  };

  regions.forEach(r => addSearch({ objectType: 'REGION', objectId: r.regionId, title: r.regionName, subtitle: '区域', category: '监管对象', targetPageId: 'global-regions', targetParams: { regionId: r.regionId }, regionId: r.regionId }));
  countries.forEach(c => addSearch({ objectType: 'COUNTRY', objectId: c.countryId, title: c.countryName, subtitle: c.regionName, category: '监管对象', targetPageId: 'global-regions', targetParams: { regionId: c.regionId, countryId: c.countryId }, regionId: c.regionId, countryId: c.countryId }));
  entities.filter(e => e.entityId !== 'G001').forEach(e => addSearch({ objectType: 'ENTITY', objectId: e.entityId, title: e.entityName, subtitle: e.entityType, category: '监管对象', targetPageId: 'global-legal-entities', targetParams: { entityId: e.entityId }, entityId: e.entityId, regionId: e.regionId }));
  projects.forEach(p => addSearch({ objectType: 'PROJECT', objectId: p.projectId, title: p.projectName, subtitle: p.projectType, category: '监管对象', targetPageId: 'global-regions', targetParams: { projectId: p.projectId }, projectId: p.projectId, entityId: p.entityId }));
  warnings.forEach(w => addSearch({ objectType: 'RISK', objectId: w.id, title: w.name, subtitle: w.level, category: '风险与事件', targetPageId: 'warnings', targetParams: { riskMatterId: w.id }, entityId: w.entityId, priority: w.level, status: w.status }));
  cdrMatters.forEach(m => addSearch({ objectType: 'CROSS_DOMAIN_RISK', objectId: m.riskMatterId, title: m.riskMatterName, subtitle: m.riskLevel, category: '风险与事件', targetPageId: 'cross-domain-risks', targetParams: { riskMatterId: m.riskMatterId }, priority: m.riskLevel }));
  events.forEach(ev => addSearch({ objectType: 'EVENT', objectId: ev.eventId, title: ev.eventTitle || ev.eventId, subtitle: ev.eventType, category: '风险与事件', targetPageId: 'regulatory-events', targetParams: { eventId: ev.eventId }, entityId: ev.entityId, priority: ev.riskLevel, status: ev.status }));
  kris.forEach(k => addSearch({ objectType: 'KRI', objectId: k.id, title: k.name, subtitle: k.status, category: '数据与指标', targetPageId: 'data-governance', targetParams: { indicatorId: k.id }, domainId: k.domainId, status: k.status }));
  sources.forEach(s => addSearch({ objectType: 'DATA_SOURCE', objectId: s.sourceId, title: s.systemName, subtitle: s.accessStatus, category: '数据与指标', targetPageId: 'data-governance', targetParams: { sourceId: s.sourceId }, status: s.accessStatus }));
  actions.forEach(a => addSearch({ objectType: 'ACTION', objectId: a.actionId, title: a.actionId + ' · ' + a.actionType, subtitle: a.status, category: '监管行动', targetPageId: 'regulatory-actions', targetParams: { actionId: a.actionId }, entityId: a.entityId, priority: a.priority, status: a.status }));
  supTasks.forEach(t => addSearch({ objectType: 'SUPERVISION_TASK', objectId: t.supervisionTaskId, title: t.supervisionTaskId, subtitle: t.taskStatus, category: '监管行动', targetPageId: 'regulatory-supervision-tasks', targetParams: { supervisionTaskId: t.supervisionTaskId }, entityId: t.entityId, status: t.taskStatus }));
  rects.forEach(t => addSearch({ objectType: 'RECTIFICATION', objectId: t.taskId, title: t.title, subtitle: t.status, category: '整改与任务', targetPageId: 'rectification', targetParams: { rectificationTaskId: t.taskId }, entityId: t.entityId, priority: t.level, status: t.status }));
  queue.forEach(q => addSearch({ objectType: 'QUEUE', objectId: q.queueItemId, title: q.title, subtitle: q.queueType, category: '整改与任务', targetPageId: 'regulatory-queue', targetParams: { queueItemId: q.queueItemId }, entityId: q.entityId, priority: q.priority, status: q.status }));
  rules.forEach(r => addSearch({ objectType: 'RULE', objectId: r.ruleId, title: r.ruleName || r.ruleId, subtitle: r.status, category: '规则治理', targetPageId: 'regulatory-rule-config', targetParams: { ruleId: r.ruleId }, status: r.status }));
  versions.forEach(v => addSearch({ objectType: 'RULE_VERSION', objectId: v.versionId, title: v.versionNo || v.versionId, subtitle: v.ruleName, category: '规则治理', targetPageId: 'regulatory-rule-versions', targetParams: { versionId: v.versionId }, status: v.status }));
  objectives.forEach(o => addSearch({ objectType: 'OBJECTIVE', objectId: o.objectiveId, title: o.objectiveName, subtitle: o.status, category: '战略规划', targetPageId: 'regulatory-strategy-planning', targetParams: { objectiveId: o.objectiveId }, priority: o.priority, status: o.status }));
  annualPlans.forEach(p => addSearch({ objectType: 'ANNUAL_PLAN', objectId: p.planId, title: p.planName, subtitle: p.planStatus, category: '战略规划', targetPageId: 'regulatory-annual-plan', targetParams: { planId: p.planId }, status: p.planStatus }));

  const notifications = [];
  let nSeq = 1;
  const mkNotif = (n) => notifications.push({
    notificationId: 'NTF-' + String(nSeq++).padStart(3, '0'),
    notificationType: n.notificationType,
    sourceType: n.sourceType,
    sourceId: n.sourceId,
    title: n.title,
    description: n.description || '',
    priority: n.priority || 'MEDIUM',
    isRead: false,
    createdAt: n.createdAt || TODAY + 'T08:00:00',
    targetPageId: n.targetPageId,
    targetParams: n.targetParams || {}
  });

  events.filter(e => e.riskLevel === 'HIGH' && e.status !== 'CLOSED').slice(0, 5).forEach(ev => {
    mkNotif({ notificationType: 'EVENT', sourceType: 'regulatoryEvents', sourceId: ev.eventId, title: '重大监管事件 · ' + (ev.eventTitle || ev.eventId), description: ev.description, priority: 'HIGH', targetPageId: 'regulatory-events', targetParams: { eventId: ev.eventId } });
  });
  rects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭').slice(0, 5).forEach(t => {
    mkNotif({ notificationType: 'OVERDUE_RECT', sourceType: 'rectificationTasks', sourceId: t.taskId, title: '超期整改 · ' + t.title, description: t.measure, priority: 'HIGH', targetPageId: 'rectification', targetParams: { rectificationTaskId: t.taskId } });
  });
  anomalies.slice(0, 3).forEach(a => {
    mkNotif({ notificationType: 'RULE_ANOMALY', sourceType: 'regulatoryRuleRuntimeAnomalies', sourceId: a.anomalyId, title: '规则异常 · ' + a.anomalyType, description: a.description, priority: a.severity === 'HIGH' ? 'CRITICAL' : 'HIGH', targetPageId: 'regulatory-rule-runtime' });
  });
  queue.filter(q => q.queueType === 'FEEDBACK').slice(0, 3).forEach(q => {
    mkNotif({ notificationType: 'ACTION_FEEDBACK', sourceType: q.sourceType, sourceId: q.sourceId, title: '待反馈 · ' + q.title, description: q.description, priority: q.priority, targetPageId: q.nextPageId || 'regulatory-action-execution', targetParams: { feedbackId: q.sourceId } });
  });
  queue.filter(q => q.queueType === 'VERIFICATION').slice(0, 2).forEach(q => {
    mkNotif({ notificationType: 'VERIFICATION', sourceType: q.sourceType, sourceId: q.sourceId, title: '待验证 · ' + q.title, description: q.description, priority: q.priority, targetPageId: q.nextPageId });
  });
  objectives.filter(o => o.status === 'BEHIND').slice(0, 3).forEach(o => {
    mkNotif({ notificationType: 'STRATEGY_DEVIATION', sourceType: 'regulatoryStrategicObjectives', sourceId: o.objectiveId, title: '战略偏差 · ' + o.objectiveName, description: '完成率 ' + Math.round(o.completionRate * 100) + '%', priority: 'HIGH', targetPageId: 'regulatory-strategy-planning', targetParams: { objectiveId: o.objectiveId } });
  });
  annualPlans.filter(p => p.planStatus === 'AT_RISK').slice(0, 2).forEach(p => {
    mkNotif({ notificationType: 'PLAN_VARIANCE', sourceType: 'regulatoryAnnualPlans', sourceId: p.planId, title: '计划偏差 · ' + p.planName, description: '完成率 ' + Math.round(p.completionRate * 100) + '%', priority: 'HIGH', targetPageId: 'regulatory-annual-plan', targetParams: { planId: p.planId } });
  });

  APP_DATA.regulatoryRoleProfiles = roleProfiles;
  APP_DATA.regulatoryRoleWorkbenches = roleWorkbenches;
  APP_DATA.regulatorySearchIndex = searchIndex;
  APP_DATA.regulatoryNotifications = notifications;
  APP_DATA.regulatoryRecentViews = [];
  APP_DATA.regulatoryFavorites = [];
})();

(function () {
  const TODAY = '2026-07-22';
  const roles = APP_DATA.regulatoryRoleProfiles || [];
  const entities = APP_DATA.globalLegalEntities || [];
  const regions = APP_DATA.globalRegions || [];
  const domains = APP_DATA.regulationDomains || [];
  const changeRequests = APP_DATA.regulatoryRuleChangeRequests || [];
  const ruleApprovals = APP_DATA.regulatoryRuleApprovals || [];
  const deployments = APP_DATA.regulatoryRuleDeployments || [];
  const actions = APP_DATA.regulatoryActions || [];
  const rects = APP_DATA.rectificationTasks || [];
  const supTasks = APP_DATA.regulatorySupervisionTasks || [];
  const objectives = APP_DATA.regulatoryStrategicObjectives || [];
  const annualPlans = APP_DATA.regulatoryAnnualPlans || [];
  const focusItems = APP_DATA.regulatoryStrategicFocus || [];
  const entityReg = entities.find(e => e.entityId !== 'G001') || entities[0];

  const users = [
    { userId: 'U-GROUP-LEADER', userName: '张建国', userType: 'GROUP_LEADER', organizationId: 'ORG-HQ', status: 'ACTIVE', lastLoginAt: null },
    { userId: 'U-GROUP-REG', userName: '李监管', userType: 'GROUP_REGULATORY', organizationId: 'ORG-REG', status: 'ACTIVE', lastLoginAt: null },
    { userId: 'U-DOMAIN-REG', userName: '王领域', userType: 'DOMAIN_REGULATOR', organizationId: 'ORG-DOMAIN-INV', status: 'ACTIVE', lastLoginAt: null },
    { userId: 'U-ENTITY-REG', userName: '赵法人', userType: 'ENTITY_REGULATOR', organizationId: entityReg?.entityId || 'A001', status: 'ACTIVE', lastLoginAt: null }
  ];

  const assignments = [
    { assignmentId: 'ASG-001', userId: 'U-GROUP-LEADER', roleId: 'ROLE-GROUP-LEADER', scopeType: 'GROUP', scopeIds: ['G001'], status: 'ACTIVE', effectiveFrom: '2026-01-01', effectiveTo: null },
    { assignmentId: 'ASG-002', userId: 'U-GROUP-REG', roleId: 'ROLE-GROUP-REG', scopeType: 'GROUP', scopeIds: ['G001'], status: 'ACTIVE', effectiveFrom: '2026-01-01', effectiveTo: null },
    { assignmentId: 'ASG-003', userId: 'U-DOMAIN-REG', roleId: 'ROLE-DOMAIN-REG', scopeType: 'DOMAIN', scopeIds: ['investment'], status: 'ACTIVE', effectiveFrom: '2026-01-01', effectiveTo: null },
    { assignmentId: 'ASG-004', userId: 'U-ENTITY-REG', roleId: 'ROLE-ENTITY-REG', scopeType: 'ENTITY', scopeIds: [entityReg?.entityId || 'A001'], status: 'ACTIVE', effectiveFrom: '2026-01-01', effectiveTo: null }
  ];

  const permissionSets = [
    { permissionSetId: 'PS-001', permissionCode: 'ACTION_VIEW', resourceType: 'regulatoryActions', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-002', permissionCode: 'ACTION_ASSIGN', resourceType: 'regulatoryActions', action: 'ASSIGN', riskLevel: 'MEDIUM' },
    { permissionSetId: 'PS-003', permissionCode: 'ACTION_APPROVE', resourceType: 'regulatoryActions', action: 'APPROVE', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-004', permissionCode: 'ACTION_CLOSE', resourceType: 'regulatoryActions', action: 'CLOSE', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-005', permissionCode: 'RULE_SIMULATE', resourceType: 'regulatoryRules', action: 'SIMULATE', riskLevel: 'MEDIUM' },
    { permissionSetId: 'PS-006', permissionCode: 'RULE_APPROVE', resourceType: 'regulatoryRuleChangeRequests', action: 'APPROVE', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-007', permissionCode: 'RULE_PUBLISH', resourceType: 'regulatoryRuleDeployments', action: 'PUBLISH', riskLevel: 'CRITICAL' },
    { permissionSetId: 'PS-008', permissionCode: 'RULE_ROLLBACK', resourceType: 'regulatoryRuleDeployments', action: 'ROLLBACK', riskLevel: 'CRITICAL' },
    { permissionSetId: 'PS-009', permissionCode: 'RECTIFICATION_CLOSE', resourceType: 'rectificationTasks', action: 'CLOSE', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-010', permissionCode: 'RECTIFICATION_DEFER', resourceType: 'rectificationTasks', action: 'DEFER', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-011', permissionCode: 'STRATEGY_OVERRIDE', resourceType: 'regulatoryStrategyAnalysis', action: 'OVERRIDE', riskLevel: 'CRITICAL' },
    { permissionSetId: 'PS-012', permissionCode: 'TASK_ASSIGN', resourceType: 'regulatorySupervisionTasks', action: 'ASSIGN', riskLevel: 'MEDIUM' },
    { permissionSetId: 'PS-013', permissionCode: 'CONFIG_VIEW', resourceType: 'regulatorySystemConfigurations', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-014', permissionCode: 'CONFIG_CHANGE', resourceType: 'regulatorySystemConfigurations', action: 'UPDATE', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-015', permissionCode: 'ACCESS_MANAGE', resourceType: 'regulatoryRoleAssignments', action: 'MANAGE', riskLevel: 'CRITICAL' },
    { permissionSetId: 'PS-016', permissionCode: 'AUDIT_EXPORT', resourceType: 'regulatoryAuditLogs', action: 'EXPORT', riskLevel: 'HIGH' }
  ];

  const rolePermissionMap = {
    'ROLE-GROUP-LEADER': ['ACTION_VIEW', 'ACTION_APPROVE', 'RULE_APPROVE', 'RULE_PUBLISH', 'STRATEGY_OVERRIDE', 'CONFIG_VIEW', 'AUDIT_EXPORT'],
    'ROLE-GROUP-REG': ['ACTION_VIEW', 'ACTION_ASSIGN', 'ACTION_APPROVE', 'ACTION_CLOSE', 'RULE_SIMULATE', 'RULE_APPROVE', 'RULE_PUBLISH', 'RECTIFICATION_CLOSE', 'RECTIFICATION_DEFER', 'TASK_ASSIGN', 'CONFIG_VIEW', 'CONFIG_CHANGE', 'ACCESS_MANAGE', 'AUDIT_EXPORT'],
    'ROLE-DOMAIN-REG': ['ACTION_VIEW', 'ACTION_ASSIGN', 'TASK_ASSIGN', 'RECTIFICATION_CLOSE', 'CONFIG_VIEW'],
    'ROLE-ENTITY-REG': ['ACTION_VIEW', 'CONFIG_VIEW']
  };

  const scopeMatrix = roles.map(r => ({
    roleId: r.roleId,
    roleName: r.roleName,
    group: r.roleType === 'GROUP_LEADER' || r.roleType === 'GROUP_REGULATORY' ? '全部' : r.roleType === 'ENTITY_REGULATOR' ? '本法人' : '查看',
    region: r.roleType === 'GROUP_LEADER' || r.roleType === 'GROUP_REGULATORY' ? '全部' : r.roleType === 'ENTITY_REGULATOR' ? '本法人' : '查看',
    country: r.roleType === 'GROUP_LEADER' || r.roleType === 'GROUP_REGULATORY' ? '全部' : r.roleType === 'ENTITY_REGULATOR' ? '本法人' : '查看',
    entity: r.roleType === 'GROUP_LEADER' || r.roleType === 'GROUP_REGULATORY' ? '全部' : r.roleType === 'ENTITY_REGULATOR' ? '本法人' : '授权范围',
    project: r.roleType === 'GROUP_LEADER' ? '查看' : r.roleType === 'GROUP_REGULATORY' ? '查看' : r.roleType === 'ENTITY_REGULATOR' ? '本法人' : '查看',
    domain: r.roleType === 'GROUP_REGULATORY' ? '管理' : r.roleType === 'DOMAIN_REGULATOR' ? '本领域' : '查看'
  }));

  const authRequests = [];
  let authSeq = 1;
  const mkAuth = (item) => {
    authRequests.push({
      authorizationId: 'AUTH-' + String(authSeq++).padStart(3, '0'),
      requestType: item.requestType,
      requesterId: item.requesterId || 'U-GROUP-REG',
      targetObjectType: item.targetObjectType,
      targetObjectId: item.targetObjectId,
      requestedAction: item.requestedAction,
      reason: item.reason || '',
      status: item.status || 'SUBMITTED',
      approvalStage: item.approvalStage || 'BUSINESS_REVIEW',
      riskLevel: item.riskLevel || 'HIGH',
      submittedAt: item.submittedAt || TODAY + 'T08:00:00',
      dueAt: item.dueAt || TODAY + 'T18:00:00',
      approverRole: item.approverRole || 'ROLE-GROUP-LEADER',
      relatedRiskIds: item.relatedRiskIds || [],
      relatedActionIds: item.relatedActionIds || [],
      relatedEventIds: item.relatedEventIds || [],
      sourceType: item.sourceType,
      sourceId: item.sourceId,
      nextPageId: item.nextPageId
    });
  };

  changeRequests.filter(cr => ['PENDING_APPROVAL', 'IMPACT_ASSESSED', 'DRAFT'].includes(cr.status)).forEach(cr => {
    mkAuth({ requestType: 'RULE_CHANGE', requesterId: 'U-GROUP-REG', targetObjectType: 'regulatoryRuleChangeRequests', targetObjectId: cr.changeRequestId, requestedAction: 'APPROVE', reason: cr.changeDescription || cr.reason, status: cr.status === 'PENDING_APPROVAL' ? 'IN_REVIEW' : 'SUBMITTED', approvalStage: 'REGULATORY_REVIEW', riskLevel: 'HIGH', sourceType: 'regulatoryRuleChangeRequests', sourceId: cr.changeRequestId, nextPageId: 'regulatory-rule-approvals' });
  });
  ruleApprovals.filter(a => ['PENDING', 'IN_REVIEW'].includes(a.approvalStatus)).forEach(apr => {
    mkAuth({ requestType: 'RULE_APPROVAL', targetObjectType: 'regulatoryRuleApprovals', targetObjectId: apr.approvalId, requestedAction: 'APPROVE', reason: apr.approvalStage, status: 'IN_REVIEW', approvalStage: apr.approvalStage || 'FINAL_APPROVAL', riskLevel: 'HIGH', sourceType: 'regulatoryRuleApprovals', sourceId: apr.approvalId, nextPageId: 'regulatory-rule-approvals' });
  });
  deployments.filter(d => d.deploymentStatus === 'PENDING').forEach(dep => {
    mkAuth({ requestType: 'RULE_DEPLOY', targetObjectType: 'regulatoryRuleDeployments', targetObjectId: dep.deploymentId, requestedAction: 'PUBLISH', reason: dep.deploymentNotes || '规则版本待发布', status: 'SUBMITTED', approvalStage: 'FINAL_APPROVAL', riskLevel: 'CRITICAL', sourceType: 'regulatoryRuleDeployments', sourceId: dep.deploymentId, nextPageId: 'regulatory-rule-deployments' });
  });
  actions.filter(a => a.status === 'RECOMMENDED').slice(0, 4).forEach(act => {
    mkAuth({ requestType: 'ACTION_ASSIGN', targetObjectType: 'regulatoryActions', targetObjectId: act.actionId, requestedAction: 'ASSIGN', reason: act.triggerReason || act.recommendedAction, status: 'SUBMITTED', approvalStage: 'BUSINESS_REVIEW', riskLevel: act.priority === 'CRITICAL' ? 'CRITICAL' : 'HIGH', relatedActionIds: [act.actionId], relatedEventIds: act.sourceEventIds || [], sourceType: 'regulatoryActions', sourceId: act.actionId, nextPageId: 'regulatory-actions' });
  });
  rects.filter(t => t.status === '整改验证' || t.verificationStatus === '验证中').slice(0, 3).forEach(t => {
    mkAuth({ requestType: 'RECTIFICATION_CLOSE', targetObjectType: 'rectificationTasks', targetObjectId: t.taskId, requestedAction: 'CLOSE', reason: t.measure || '申请关闭整改', status: 'IN_REVIEW', approvalStage: 'RISK_REVIEW', riskLevel: 'HIGH', relatedRiskIds: t.riskMatterId ? [t.riskMatterId] : [], sourceType: 'rectificationTasks', sourceId: t.taskId, nextPageId: 'rectification' });
  });
  supTasks.filter(t => t.taskStatus === 'RECOMMENDED').slice(0, 2).forEach(task => {
    mkAuth({ requestType: 'TASK_ASSIGN', targetObjectType: 'regulatorySupervisionTasks', targetObjectId: task.supervisionTaskId, requestedAction: 'ASSIGN', reason: task.outcomeTarget, status: 'SUBMITTED', riskLevel: 'MEDIUM', relatedActionIds: task.relatedRegulatoryActionIds || [], sourceType: 'regulatorySupervisionTasks', sourceId: task.supervisionTaskId, nextPageId: 'regulatory-supervision-tasks' });
  });
  objectives.filter(o => o.status === 'BEHIND').slice(0, 2).forEach(o => {
    mkAuth({ requestType: 'STRATEGY_ADJUST', targetObjectType: 'regulatoryStrategicObjectives', targetObjectId: o.objectiveId, requestedAction: 'OVERRIDE', reason: '战略目标偏差调整', status: 'SUBMITTED', riskLevel: 'HIGH', sourceType: 'regulatoryStrategicObjectives', sourceId: o.objectiveId, nextPageId: 'regulatory-strategy-planning' });
  });
  annualPlans.filter(p => p.planStatus === 'AT_RISK').slice(0, 2).forEach(p => {
    mkAuth({ requestType: 'PLAN_ADJUST', targetObjectType: 'regulatoryAnnualPlans', targetObjectId: p.planId, requestedAction: 'UPDATE', reason: '年度计划偏差调整', status: 'SUBMITTED', riskLevel: 'MEDIUM', sourceType: 'regulatoryAnnualPlans', sourceId: p.planId, nextPageId: 'regulatory-annual-plan' });
  });
  focusItems.slice(0, 2).forEach(f => {
    mkAuth({ requestType: 'FOCUS_ADJUST', targetObjectType: 'regulatoryStrategicFocus', targetObjectId: f.focusId, requestedAction: 'UPDATE', reason: '年度监管重点调整', status: 'DRAFT', riskLevel: 'MEDIUM', sourceType: 'regulatoryStrategicFocus', sourceId: f.focusId, nextPageId: 'regulatory-focus-management' });
  });

  const systemConfigurations = [
    { configId: 'CFG-001', configKey: 'SYS_PRIORITY_ALERT_THRESHOLD', configValue: '85', configType: 'PRIORITY_THRESHOLD', status: 'ACTIVE', effectiveAt: '2026-01-01T00:00:00', changedBy: 'SYSTEM', description: 'CRITICAL 优先级告警阈值（非规则参数）' },
    { configId: 'CFG-002', configKey: 'ACTION_OVERDUE_DAYS', configValue: '7', configType: 'ACTION_THRESHOLD', status: 'ACTIVE', effectiveAt: '2026-01-01T00:00:00', changedBy: 'SYSTEM', description: '监管行动超期天数' },
    { configId: 'CFG-003', configKey: 'NOTIFICATION_ESCALATION_HOURS', configValue: '24', configType: 'NOTIFICATION_RULE', status: 'ACTIVE', effectiveAt: '2026-01-01T00:00:00', changedBy: 'SYSTEM', description: '通知升级小时数' },
    { configId: 'CFG-004', configKey: 'SYS_MATURITY_ALERT_THRESHOLD', configValue: '70', configType: 'MATURITY_THRESHOLD', status: 'ACTIVE', effectiveAt: '2026-01-01T00:00:00', changedBy: 'SYSTEM', description: '成熟度告警阈值（非规则参数）' },
    { configId: 'CFG-005', configKey: 'DATA_QUALITY_ALERT_THRESHOLD', configValue: '0.85', configType: 'DATA_QUALITY_THRESHOLD', status: 'ACTIVE', effectiveAt: '2026-01-01T00:00:00', changedBy: 'SYSTEM', description: '数据质量告警阈值' },
    { configId: 'CFG-006', configKey: 'TARGET_AT_RISK_RATIO', configValue: '0.8', configType: 'TARGET_THRESHOLD', status: 'ACTIVE', effectiveAt: '2026-01-01T00:00:00', changedBy: 'SYSTEM', description: '目标预警完成率' },
    { configId: 'CFG-007', configKey: 'QUEUE_ESCALATION_OVERDUE', configValue: 'true', configType: 'QUEUE_RULE', status: 'ACTIVE', effectiveAt: '2026-01-01T00:00:00', changedBy: 'SYSTEM', description: '待办超期自动升级' }
  ];

  APP_DATA.regulatoryUsers = users;
  APP_DATA.regulatoryRoleAssignments = assignments;
  APP_DATA.regulatoryPermissionSets = permissionSets;
  APP_DATA.regulatoryRolePermissionMap = rolePermissionMap;
  APP_DATA.regulatoryScopeMatrix = scopeMatrix;
  APP_DATA.regulatoryAuthorizationRequests = authRequests;
  APP_DATA.regulatoryAuditLogs = [];
  APP_DATA.regulatorySystemConfigurations = systemConfigurations;
  APP_DATA.regulatoryAccessControlMetrics = {
    userCount: users.length,
    roleCount: roles.length,
    assignmentCount: assignments.length,
    permissionSetCount: permissionSets.length,
    pendingAuthorizationCount: authRequests.filter(a => ['SUBMITTED', 'IN_REVIEW', 'DRAFT'].includes(a.status)).length,
    permissionAnomalyCount: 0,
    changesLast30Days: assignments.length,
    auditLogCount: 0,
    highRiskPendingCount: authRequests.filter(a => ['CRITICAL', 'HIGH'].includes(a.riskLevel) && ['SUBMITTED', 'IN_REVIEW'].includes(a.status)).length,
    auditAnomalyCount: 0
  };
})();

(function () {
  const TODAY = '2026-07-22';
  const registry = APP_DATA.dataSourceRegistry || [];
  const objects = APP_DATA.dataObjects || [];
  const fields = APP_DATA.dataFields || [];
  const indicators = APP_DATA.dataIndicators || [];
  const legacyIssues = APP_DATA.dataQualityIssues || [];
  const legacyLineage = APP_DATA.dataLineageRelations || [];
  const rects = APP_DATA.rectificationTasks || [];
  const kris = APP_DATA.groupKris || [];
  const warnings = APP_DATA.warnings || [];

  const sourceTypeMap = {
    '投资管理系统': 'ERP', '财务系统': '财务系统', '合同系统': '合同系统', '采购系统': '供应链系统',
    '资金系统': '资金系统', '项目系统': '项目系统', '经营分析系统': '境外业务系统'
  };
  const domainMap = { '投资管理': 'investment', '财务管理': 'finance', '合同管理': 'contract', '工程项目': 'engineering', '供应链管理': 'supply', '产权管理': 'equity', '境外业务': 'overseas' };

  const parsePct = (v) => {
    if (v == null) return null;
    const n = parseFloat(String(v).replace('%', ''));
    return Number.isFinite(n) ? n : null;
  };

  const connStatus = (src) => {
    if (src.interfaceStatus === '异常' || src.syncStatus === '中断') return 'OFFLINE';
    if (src.interfaceStatus === '延迟' || src.syncStatus === '延迟') return 'DEGRADED';
    return 'ONLINE';
  };

  const regulatoryDataSources = registry.map(src => ({
    sourceId: src.sourceId,
    sourceName: src.systemName,
    sourceType: sourceTypeMap[src.systemName] || '外部数据源',
    ownerOrganizationId: src.entityId,
    ownerOrganizationName: src.ownerEntity,
    status: src.coverageStatus === '已接入' ? 'ACTIVE' : 'PARTIAL',
    connectionStatus: connStatus(src),
    lastSyncAt: src.lastSyncTime,
    dataSetCount: objects.filter(o => o.sourceId === src.sourceId).length,
    qualityScore: src.qualityScore,
    regionId: src.regionId,
    countryId: src.countryId,
    businessDomains: src.businessDomains || [],
    legacyObjectId: src.sourceId
  }));

  const regulatoryDataSets = objects.map(obj => {
    const src = registry.find(s => s.sourceId === obj.sourceId);
    const objFields = fields.filter(f => f.objectId === obj.objectId);
    const completeness = parsePct(src?.dataCompleteness);
    const timeliness = parsePct(src?.dataTimeliness);
    const fieldScores = objFields.map(f => f.qualityStatus === '正常' ? 98 : f.qualityStatus === '关注' ? 85 : 72);
    const accuracy = fieldScores.length ? fieldScores.reduce((a, b) => a + b, 0) / fieldScores.length : null;
    const hasData = completeness != null && timeliness != null;
    const overall = hasData ? Math.round((completeness * 0.2 + (accuracy || 90) * 0.2 + timeliness * 0.2 + 88 * 0.15 + 92 * 0.15 + 90 * 0.1) * 10) / 10 : null;
    return {
      dataSetId: obj.objectId,
      sourceId: obj.sourceId,
      dataSetName: obj.objectName,
      domain: domainMap[obj.businessDomain] || obj.businessDomain,
      ownerOrganizationId: obj.entityId,
      recordCount: obj.downstreamIndicatorCount ? obj.downstreamIndicatorCount * 1200 : 500,
      lastUpdatedAt: obj.lastUpdateTime,
      qualityScore: overall,
      dataStatus: hasData ? 'OK' : 'INSUFFICIENT_DATA',
      fieldCount: objFields.length,
      legacyObjectId: obj.objectId
    };
  });

  let jobSeq = 1;
  const regulatoryDataIntegrationJobs = [];
  const regulatoryDataIntegrationLogs = [];
  regulatoryDataSets.forEach(ds => {
    const src = regulatoryDataSources.find(s => s.sourceId === ds.sourceId);
    const legacyIssue = legacyIssues.find(i => i.objectId === ds.dataSetId);
    let status = 'SUCCESS';
    if (src?.connectionStatus === 'OFFLINE') status = 'FAILED';
    else if (src?.connectionStatus === 'DEGRADED' || legacyIssue?.anomalyType === '数据延迟' || legacyIssue?.anomalyType === '数据缺失') status = 'PARTIAL_SUCCESS';
    const failed = status === 'FAILED' ? Math.floor(ds.recordCount * 0.12) : status === 'PARTIAL_SUCCESS' ? Math.floor(ds.recordCount * 0.05) : 0;
    const success = ds.recordCount - failed;
    const jobId = 'JOB-' + String(jobSeq++).padStart(3, '0');
    regulatoryDataIntegrationJobs.push({
      integrationJobId: jobId,
      sourceId: ds.sourceId,
      dataSetId: ds.dataSetId,
      status,
      startedAt: TODAY + ' 06:00:00',
      completedAt: status === 'RUNNING' ? null : TODAY + ' 08:00:00',
      recordCount: ds.recordCount,
      successCount: success,
      failedCount: failed,
      retryCount: status === 'FAILED' ? 3 : status === 'PARTIAL_SUCCESS' ? 1 : 0,
      errorMessage: status === 'FAILED' ? '数据源连接中断，超过最大重试次数' : status === 'PARTIAL_SUCCESS' ? '部分记录质量校验未通过' : null
    });
    if (status === 'FAILED' || status === 'PARTIAL_SUCCESS') {
      regulatoryDataIntegrationLogs.push({
        logId: 'LOG-' + jobId,
        integrationJobId: jobId,
        eventType: status === 'FAILED' ? 'JOB_FAILED' : 'QUALITY_CHECK',
        status,
        message: status === 'FAILED' ? '接入失败，已触发数据质量问题' : '部分记录未通过质量校验',
        timestamp: TODAY + ' 08:00:00'
      });
    }
  });

  const dimFromAnomaly = { '数据缺失': 'COMPLETENESS', '数据延迟': 'TIMELINESS', '数据口径不一致': 'CONSISTENCY', '数据格式异常': 'VALIDITY', '数据异常波动': 'ACCURACY' };
  const regulatoryDataQualityRules = legacyIssues.map((issue, i) => ({
    qualityRuleId: 'QR-' + String(i + 1).padStart(3, '0'),
    ruleName: issue.anomalyType + '校验',
    dimension: dimFromAnomaly[issue.anomalyType] || 'COMPLETENESS',
    targetDataSetId: issue.objectId,
    fieldName: issue.fieldId ? (fields.find(f => f.fieldId === issue.fieldId) || {}).fieldName : null,
    threshold: 90,
    severity: parsePct(issue.qualityScore) < 80 ? 'HIGH' : 'MEDIUM',
    status: 'ACTIVE',
    legacyIssueId: issue.issueId
  }));

  let govSeq = 1;
  const regulatoryDataGovernanceTasks = [];
  const regulatoryDataQualityIssues = legacyIssues.map((issue, i) => {
    const rel = legacyLineage.find(l => l.objectId === issue.objectId && l.kriId === issue.kriId) || legacyLineage.find(l => l.objectId === issue.objectId);
    const rectId = rel?.rectificationId || warnings.find(w => w.id === issue.riskMatterId)?.rectificationTaskId;
    const rect = rectId ? rects.find(r => r.taskId === rectId) : null;
    const rule = regulatoryDataQualityRules[i];
    let governanceTaskId = null;
    if (issue.rectificationStatus && issue.rectificationStatus !== '已关闭') {
      governanceTaskId = 'GOV-' + String(govSeq++).padStart(3, '0');
      const govStatus = rect ? (rect.status === '已关闭' ? 'CLOSED' : rect.status === '整改验证' ? 'PENDING_VERIFICATION' : rect.status === '整改执行' ? 'IN_PROGRESS' : 'ASSIGNED') : 'IDENTIFIED';
      regulatoryDataGovernanceTasks.push({
        governanceTaskId,
        qualityIssueId: 'QI-' + issue.issueId.replace('DQ', ''),
        responsibleOrganizationId: (objects.find(o => o.objectId === issue.objectId) || {}).entityId || 'G001',
        status: govStatus,
        relatedRectificationTaskId: rect?.taskId || null,
        dueDate: rect?.deadline || '2026-08-30',
        verificationStatus: rect?.verificationStatus || '待处理',
        legacyIssueId: issue.issueId
      });
    }
    return {
      qualityIssueId: 'QI-' + issue.issueId.replace('DQ', ''),
      qualityRuleId: rule.qualityRuleId,
      dataSetId: issue.objectId,
      sourceId: (objects.find(o => o.objectId === issue.objectId) || {}).sourceId,
      issueType: issue.anomalyType,
      severity: parsePct(issue.qualityScore) < 80 ? 'HIGH' : 'MEDIUM',
      issueCount: 12 + i * 7,
      affectedRecords: issue.fieldId ? 1 : 0,
      status: issue.rectificationStatus === '已关闭' ? 'CLOSED' : issue.rectificationStatus === '整改中' ? 'IN_PROGRESS' : 'OPEN',
      relatedGovernanceTaskId: governanceTaskId,
      relatedRectificationTaskId: rect?.taskId || null,
      legacyIssueId: issue.issueId,
      kriId: issue.kriId,
      indicatorId: issue.indicatorId
    };
  });

  const regulatoryDataLineage = [];
  let linSeq = 1;
  const addLineage = (sourceType, sourceId, targetType, targetId, relationType, transformationRule, ownerOrganizationId) => {
    regulatoryDataLineage.push({
      lineageId: 'DL-' + String(linSeq++).padStart(3, '0'),
      sourceType, sourceId, targetType, targetId, relationType, transformationRule, ownerOrganizationId
    });
  };
  legacyLineage.forEach(rel => {
    const obj = objects.find(o => o.objectId === rel.objectId);
    const owner = obj?.entityId || 'G001';
    addLineage('regulatoryDataSources', rel.sourceId, 'regulatoryDataSets', rel.objectId, 'SOURCE_TO_DATASET', '系统接入同步', owner);
    if (rel.fieldId) addLineage('regulatoryDataSets', rel.objectId, 'dataFields', rel.fieldId, 'DATASET_TO_FIELD', '字段映射', owner);
    if (rel.indicatorId) addLineage('dataFields', rel.fieldId, 'dataIndicators', rel.indicatorId, 'FIELD_TO_METRIC', '指标计算', owner);
    if (rel.kriId) addLineage('dataIndicators', rel.indicatorId, 'groupKris', rel.kriId, 'METRIC_TO_KRI', 'KRI聚合', owner);
    if (rel.riskMatterId) addLineage('groupKris', rel.kriId, 'warnings', rel.riskMatterId, 'KRI_TO_RISK', '风险识别', owner);
    if (rel.controlRule) addLineage('warnings', rel.riskMatterId, 'regulatoryRules', rel.controlRule, 'RISK_TO_RULE', '规则触发', owner);
    if (rel.rectificationId) addLineage('warnings', rel.riskMatterId, 'rectificationTasks', rel.rectificationId, 'RULE_TO_ACTION', '整改联动', owner);
  });

  const calcDims = (dsId) => {
    const ds = regulatoryDataSets.find(d => d.dataSetId === dsId);
    const regSrc = registry.find(s => s.sourceId === ds?.sourceId);
    const legacyIssue = legacyIssues.find(i => i.objectId === dsId);
    const objFields = fields.filter(f => f.objectId === dsId);
    const completeness = parsePct(regSrc?.dataCompleteness ?? legacyIssue?.completeness);
    const timeliness = parsePct(regSrc?.dataTimeliness ?? legacyIssue?.timeliness);
    const accuracy = parsePct(legacyIssue?.accuracy) ?? (objFields.length ? objFields.filter(f => f.qualityStatus === '正常').length / objFields.length * 100 : null);
    const consistency = objFields.length ? 88 : null;
    const uniqueness = objFields.length ? 92 : null;
    const validity = objFields.length ? (objFields.filter(f => f.qualityStatus !== '异常').length / objFields.length * 100) : null;
    if (completeness == null && accuracy == null) return { dataStatus: 'INSUFFICIENT_DATA' };
    const c = completeness ?? 90, a = accuracy ?? 90, t = timeliness ?? 90, co = consistency ?? 88, u = uniqueness ?? 92, v = validity ?? 90;
    const overallScore = Math.round((c * 0.2 + a * 0.2 + t * 0.2 + co * 0.15 + u * 0.15 + v * 0.1) * 10) / 10;
    return { completeness: c, accuracy: a, timeliness: t, consistency: co, uniqueness: u, validity: v, overallScore, dataStatus: 'OK' };
  };

  const regulatoryDataQualitySnapshots = regulatoryDataSets.slice(0, 6).map(ds => {
    const dims = calcDims(ds.dataSetId);
    return {
      snapshotId: 'SNAP-' + ds.dataSetId,
      snapshotDate: TODAY,
      scopeType: 'DATASET',
      scopeId: ds.dataSetId,
      ...dims,
      trendStatus: 'INSUFFICIENT_HISTORY'
    };
  });

  const groupSnapshot = (() => {
    const scores = regulatoryDataQualitySnapshots.filter(s => s.dataStatus === 'OK');
    if (!scores.length) return { snapshotId: 'SNAP-GROUP', snapshotDate: TODAY, scopeType: 'GROUP', scopeId: 'G001', dataStatus: 'INSUFFICIENT_DATA', trendStatus: 'INSUFFICIENT_HISTORY' };
    const avg = (k) => Math.round(scores.reduce((s, x) => s + (x[k] || 0), 0) / scores.length * 10) / 10;
    return {
      snapshotId: 'SNAP-GROUP', snapshotDate: TODAY, scopeType: 'GROUP', scopeId: 'G001',
      completeness: avg('completeness'), accuracy: avg('accuracy'), timeliness: avg('timeliness'),
      consistency: avg('consistency'), uniqueness: avg('uniqueness'), validity: avg('validity'),
      overallScore: avg('overallScore'), dataStatus: 'OK', trendStatus: 'INSUFFICIENT_HISTORY'
    };
  })();
  regulatoryDataQualitySnapshots.unshift(groupSnapshot);

  APP_DATA.regulatoryDataSources = regulatoryDataSources;
  APP_DATA.regulatoryDataSets = regulatoryDataSets;
  APP_DATA.regulatoryDataIntegrationJobs = regulatoryDataIntegrationJobs;
  APP_DATA.regulatoryDataQualityRules = regulatoryDataQualityRules;
  APP_DATA.regulatoryDataQualityIssues = regulatoryDataQualityIssues;
  APP_DATA.regulatoryDataGovernanceTasks = regulatoryDataGovernanceTasks;
  APP_DATA.regulatoryDataLineage = regulatoryDataLineage;
  APP_DATA.regulatoryDataQualitySnapshots = regulatoryDataQualitySnapshots;
  APP_DATA.regulatoryDataIntegrationLogs = regulatoryDataIntegrationLogs;
  APP_DATA.regulatoryDataGovernanceMetrics = {
    sourceCount: regulatoryDataSources.length,
    onlineSourceCount: regulatoryDataSources.filter(s => s.connectionStatus === 'ONLINE').length,
    offlineSourceCount: regulatoryDataSources.filter(s => s.connectionStatus === 'OFFLINE').length,
    integrationSuccessRate: Math.round(regulatoryDataIntegrationJobs.filter(j => j.status === 'SUCCESS').length / regulatoryDataIntegrationJobs.length * 1000) / 10,
    failedJobCount: regulatoryDataIntegrationJobs.filter(j => j.status === 'FAILED').length,
    partialJobCount: regulatoryDataIntegrationJobs.filter(j => j.status === 'PARTIAL_SUCCESS').length,
    pendingRetryCount: regulatoryDataIntegrationJobs.filter(j => j.retryCount > 0 && j.status === 'FAILED').length,
    dataDelayHours: regulatoryDataSources.filter(s => s.connectionStatus !== 'ONLINE').length * 6,
    overallQualityScore: groupSnapshot.overallScore || null,
    qualityDataStatus: groupSnapshot.dataStatus,
    anomalyDataSetCount: regulatoryDataSets.filter(d => d.qualityScore != null && d.qualityScore < 85).length,
    openIssueCount: regulatoryDataQualityIssues.filter(i => i.status !== 'CLOSED').length,
    severeIssueCount: regulatoryDataQualityIssues.filter(i => i.severity === 'HIGH' && i.status !== 'CLOSED').length,
    openGovernanceCount: regulatoryDataGovernanceTasks.filter(t => t.status !== 'CLOSED' && t.status !== 'VERIFIED').length,
    overdueGovernanceCount: regulatoryDataGovernanceTasks.filter(t => t.dueDate < TODAY && !['CLOSED', 'VERIFIED'].includes(t.status)).length,
    qualityTrendStatus: 'INSUFFICIENT_HISTORY',
    impactedKriCount: [...new Set(regulatoryDataQualityIssues.filter(i => i.kriId && i.status !== 'CLOSED').map(i => i.kriId))].length,
    impactedRiskCount: legacyLineage.filter(l => l.riskMatterId).length,
    impactedEntityCount: [...new Set(regulatoryDataQualityIssues.map(i => (regulatoryDataSets.find(d => d.dataSetId === i.dataSetId) || {}).ownerOrganizationId).filter(Boolean))].length
  };

  const extraPerms = [
    { permissionSetId: 'PS-017', permissionCode: 'DATA_VIEW', resourceType: 'regulatoryDataSources', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-018', permissionCode: 'DATA_MANAGE', resourceType: 'regulatoryDataSources', action: 'UPDATE', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-019', permissionCode: 'DATA_INTEGRATION_RETRY', resourceType: 'regulatoryDataIntegrationJobs', action: 'RETRY', riskLevel: 'MEDIUM' },
    { permissionSetId: 'PS-020', permissionCode: 'DATA_GOVERNANCE_ASSIGN', resourceType: 'regulatoryDataGovernanceTasks', action: 'ASSIGN', riskLevel: 'MEDIUM' },
    { permissionSetId: 'PS-021', permissionCode: 'DATA_GOVERNANCE_CLOSE', resourceType: 'regulatoryDataGovernanceTasks', action: 'CLOSE', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-022', permissionCode: 'DATA_EXPORT', resourceType: 'regulatoryDataSets', action: 'EXPORT', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-023', permissionCode: 'DATA_LINEAGE_VIEW', resourceType: 'regulatoryDataLineage', action: 'VIEW', riskLevel: 'LOW' }
  ];
  APP_DATA.regulatoryPermissionSets = [...(APP_DATA.regulatoryPermissionSets || []), ...extraPerms];
  const rpm = APP_DATA.regulatoryRolePermissionMap || {};
  rpm['ROLE-GROUP-LEADER'] = [...new Set([...(rpm['ROLE-GROUP-LEADER'] || []), 'DATA_VIEW', 'DATA_LINEAGE_VIEW', 'DATA_EXPORT'])];
  rpm['ROLE-GROUP-REG'] = [...new Set([...(rpm['ROLE-GROUP-REG'] || []), 'DATA_VIEW', 'DATA_MANAGE', 'DATA_INTEGRATION_RETRY', 'DATA_GOVERNANCE_ASSIGN', 'DATA_GOVERNANCE_CLOSE', 'DATA_LINEAGE_VIEW', 'DATA_EXPORT'])];
  rpm['ROLE-DOMAIN-REG'] = [...new Set([...(rpm['ROLE-DOMAIN-REG'] || []), 'DATA_VIEW', 'DATA_GOVERNANCE_ASSIGN', 'DATA_LINEAGE_VIEW'])];
  rpm['ROLE-ENTITY-REG'] = [...new Set([...(rpm['ROLE-ENTITY-REG'] || []), 'DATA_VIEW', 'DATA_GOVERNANCE_ASSIGN'])];
  APP_DATA.regulatoryRolePermissionMap = rpm;
})();

(function () {
  const TODAY = '2026-07-22';
  const indicators = APP_DATA.dataIndicators || [];
  const kris = APP_DATA.groupKris || [];
  const riskWarnings = APP_DATA.warnings || [];
  const priorityObjects = APP_DATA.regulatoryPriorityObjects || [];
  const actions = APP_DATA.regulatoryActions || [];
  const strategy = APP_DATA.regulatoryStrategyAnalysis || {};
  const dataSets = APP_DATA.regulatoryDataSets || [];
  const dataObjects = APP_DATA.dataObjects || [];
  const qualityIssues = APP_DATA.regulatoryDataQualityIssues || [];
  const lineage = APP_DATA.regulatoryDataLineage || [];
  const entities = APP_DATA.globalLegalEntities || [];

  const parseNum = (v) => {
    if (v == null) return null;
    const n = parseFloat(String(v).replace(/[^\d.]/g, ''));
    return Number.isFinite(n) ? n : null;
  };

  const qualityToMetricStatus = (qs) => {
    if (qs === '异常') return 'WARNING';
    if (qs === '关注') return 'ATTENTION';
    return 'NORMAL';
  };

  const kriStatusFromLegacy = (s) => {
    if (s === '重大预警') return 'CRITICAL';
    if (s === '较大预警') return 'WARNING';
    if (s === '预警') return 'WARNING';
    if (s === '关注') return 'ATTENTION';
    return 'NORMAL';
  };

  const calcMetricCredibility = (ind) => {
    const ds = dataSets.find(d => d.dataSetId === ind.sourceObject);
    if (!ds || ds.dataStatus === 'INSUFFICIENT_DATA' || ds.qualityScore == null) {
      return { credibilityScore: null, dataStatus: 'INSUFFICIENT_DATA' };
    }
    const lineageComplete = lineage.some(l => l.targetId === ind.indicatorId || l.sourceId === ind.sourceObject) ? 0.95 : 0.85;
    const freshness = ds.lastUpdatedAt && ds.lastUpdatedAt >= '2026-07-21' ? 1 : 0.88;
    const credibilityScore = Math.round(ds.qualityScore * lineageComplete * freshness * 10) / 10;
    if (ind.qualityStatus === '异常' && credibilityScore > 80) return { credibilityScore: 76, dataStatus: 'OK' };
    return { credibilityScore, dataStatus: 'OK' };
  };

  const metricValueMap = {
    IND001: { currentValue: 72, targetValue: 100, unit: '%' },
    IND002: { currentValue: 68, targetValue: 100, unit: '%' },
    IND003: { currentValue: 1.15, targetValue: 1.2, unit: '倍' },
    IND004: { currentValue: 3.2, targetValue: 0, unit: '%' },
    IND005: { currentValue: 91.4, targetValue: 98, unit: '%' },
    IND006: { currentValue: 58, targetValue: 85, unit: '%' }
  };

  const regulatoryMetrics = indicators.map(ind => {
    const obj = dataObjects.find(o => o.objectId === ind.sourceObject);
    const cred = calcMetricCredibility(ind);
    const vals = metricValueMap[ind.indicatorId] || { currentValue: null, targetValue: null, unit: '—' };
    const hasIssue = qualityIssues.some(q => q.indicatorId === ind.indicatorId && q.status !== 'CLOSED');
    let status = qualityToMetricStatus(ind.qualityStatus);
    if (cred.dataStatus === 'INSUFFICIENT_DATA') status = 'INSUFFICIENT_DATA';
    else if (hasIssue && status === 'NORMAL') status = 'ATTENTION';
    return {
      metricId: ind.indicatorId,
      metricName: ind.indicatorName,
      metricType: ind.indicatorType,
      scopeType: obj?.entityId === 'G001' ? 'GROUP' : 'ENTITY',
      scopeId: obj?.entityId || 'G001',
      sourceDataSetIds: ind.sourceObject ? [ind.sourceObject] : [],
      currentValue: cred.dataStatus === 'INSUFFICIENT_DATA' ? null : vals.currentValue,
      targetValue: vals.targetValue,
      unit: vals.unit,
      dataStatus: cred.dataStatus,
      credibilityScore: cred.credibilityScore,
      status,
      calculatedAt: TODAY + ' 08:00:00',
      legacyIndicatorId: ind.indicatorId,
      kriId: ind.kriId
    };
  });

  const regulatoryMetricCalculationLogs = regulatoryMetrics.map(m => ({
    calculationLogId: 'MCL-' + m.metricId,
    metricId: m.metricId,
    calculationTime: m.calculatedAt,
    sourceDataSetIds: m.sourceDataSetIds,
    qualityStatus: m.dataStatus === 'INSUFFICIENT_DATA' ? 'INSUFFICIENT' : 'OK',
    calculationStatus: m.dataStatus === 'INSUFFICIENT_DATA' ? 'SKIPPED' : 'SUCCESS',
    result: m.dataStatus === 'INSUFFICIENT_DATA' ? 'INSUFFICIENT_DATA' : m.currentValue
  }));

  let krtSeq = 1;
  const regulatoryKriRuntime = kris.map(kri => {
    const metricId = (kri.sourceIndicatorIds || [])[0] || null;
    const metric = metricId ? regulatoryMetrics.find(m => m.metricId === metricId) : null;
    const entityId = (kri.applicableEntityIds || [])[0] || null;
    const openIssues = qualityIssues.filter(q => q.kriId === kri.id && q.status !== 'CLOSED');
    let credibilityScore = metric?.credibilityScore ?? null;
    let dataStatus = metric?.dataStatus || (openIssues.length ? 'OK' : 'OK');
    if (openIssues.length && credibilityScore != null) {
      credibilityScore = Math.max(0, Math.round((credibilityScore - openIssues.length * 8) * 10) / 10);
    }
    if (credibilityScore != null && credibilityScore < 70) dataStatus = 'INSUFFICIENT_DATA';
    const currentValue = parseNum(kri.value);
    const threshold = kri.threshold || '';
    const isLowerBetter = threshold.includes('≥') || threshold.includes('>=') || /≥\s*\d+%/.test(threshold);
    let status = kriStatusFromLegacy(kri.status);
    if (dataStatus === 'INSUFFICIENT_DATA') status = 'INSUFFICIENT_DATA';
    else if (currentValue != null) {
      const thr = parseNum(threshold);
      if (thr != null) {
        if (isLowerBetter) {
          if (currentValue < thr * 0.85) status = 'CRITICAL';
          else if (currentValue < thr * 0.92) status = 'WARNING';
          else if (currentValue < thr) status = 'ATTENTION';
          else status = 'NORMAL';
        } else {
          if (currentValue >= thr * 1.2) status = 'CRITICAL';
          else if (currentValue >= thr) status = 'WARNING';
          else if (currentValue >= thr * 0.9) status = 'ATTENTION';
          else status = 'NORMAL';
        }
      }
    }
    return {
      kriRuntimeId: 'KRT-' + String(krtSeq++).padStart(3, '0'),
      kriId: kri.id,
      kriName: kri.name,
      metricId,
      riskScenarioId: kri.riskScenarioId,
      scopeType: entityId ? 'ENTITY' : 'GROUP',
      scopeId: entityId || 'G001',
      currentValue: kri.value,
      currentValueNumeric: currentValue,
      threshold: kri.threshold,
      thresholdDirection: isLowerBetter ? 'LOWER' : 'UPPER',
      status,
      credibilityScore,
      dataStatus,
      calculatedAt: TODAY + ' 08:00:00'
    };
  });

  let rwSeq = 1;
  const regulatoryWarnings = [];
  regulatoryKriRuntime.forEach(rt => {
    if (!['ATTENTION', 'WARNING', 'CRITICAL'].includes(rt.status)) return;
    const levelMap = { ATTENTION: 'ATTENTION', WARNING: 'WARNING', CRITICAL: 'CRITICAL' };
    const entityId = rt.scopeId;
    const po = priorityObjects.find(p => p.objectId === entityId);
    const entStrategy = (strategy.entities || []).find(e => e.objectId === entityId);
    const linkedRisk = riskWarnings.find(w => w.kriId === rt.kriId && w.entityId === entityId)
      || riskWarnings.find(w => w.kriId === rt.kriId);
    const linkedAction = actions.find(a => (a.sourceRiskMatterIds || []).includes(linkedRisk?.id) && a.entityId === entityId)
      || actions.find(a => a.entityId === entityId && ['RECOMMENDED', 'ASSIGNED', 'IN_PROGRESS'].includes(a.status));
    regulatoryWarnings.push({
      regulatoryWarningId: 'RW-' + String(rwSeq++).padStart(3, '0'),
      kriRuntimeId: rt.kriRuntimeId,
      kriId: rt.kriId,
      metricId: rt.metricId,
      entityId,
      warningLevel: levelMap[rt.status] || 'NOTICE',
      status: linkedRisk ? 'REVIEWED' : 'PENDING_REVIEW',
      riskMatterId: null,
      relatedRiskEventId: null,
      priorityId: po?.objectId || entityId,
      strategyLevel: entStrategy?.strategyLevel || po?.priority === 'CRITICAL' ? 'FOCUS' : 'SPECIAL',
      actionId: linkedAction?.actionId || null,
      credibilityScore: rt.credibilityScore,
      dataStatus: rt.dataStatus,
      createdAt: TODAY + ' 08:00:00'
    });
  });

  const regulatoryKriEvaluations = kris.map(kri => ({
    evaluationId: 'KEV-' + kri.id,
    kriId: kri.id,
    period: 'CURRENT',
    hitRate: null,
    riskConversionRate: null,
    actionConversionRate: null,
    falsePositiveRate: null,
    dataCredibility: regulatoryKriRuntime.find(r => r.kriId === kri.id)?.credibilityScore ?? null,
    dataStatus: 'INSUFFICIENT_HISTORY'
  }));

  const regulatoryWarningStrategies = regulatoryWarnings.map(w => {
    const po = priorityObjects.find(p => p.objectId === w.entityId);
    const cred = w.credibilityScore;
    let recommendedLevel = w.warningLevel;
    let reason = '基于当前KRI监测结果';
    if (w.dataStatus === 'INSUFFICIENT_DATA' || w.credibilityScore == null || w.credibilityScore < 70) {
      recommendedLevel = w.warningLevel;
      reason = 'DATA_QUALITY_REVIEW_REQUIRED';
    } else if (w.warningLevel === 'CRITICAL' && cred >= 85) {
      recommendedLevel = 'CRITICAL';
      reason = '建议提升监管优先级';
    }
    const linkedRule = (APP_DATA.regulatoryRules || []).find(r => (r.relatedKriIds || []).includes(w.kriId) && r.status === 'ACTIVE');
    return {
      strategyAnalysisId: 'WSA-' + w.regulatoryWarningId,
      warningId: w.regulatoryWarningId,
      currentLevel: w.warningLevel,
      recommendedLevel,
      reason,
      relatedRuleId: linkedRule?.ruleId || null,
      relatedActionId: w.actionId,
      status: w.status === 'PENDING_REVIEW' ? 'PENDING' : 'ANALYZED',
      priorityAdjustmentSuggestion: reason === 'DATA_QUALITY_REVIEW_REQUIRED' ? 'DATA_QUALITY_REVIEW_REQUIRED'
        : (w.warningLevel === 'CRITICAL' && cred >= 85 ? 'ELEVATE' : 'MONITOR'),
      strategyLevel: w.strategyLevel
    };
  });

  APP_DATA.regulatoryMetrics = regulatoryMetrics;
  APP_DATA.regulatoryKriRuntime = regulatoryKriRuntime;
  APP_DATA.regulatoryWarnings = regulatoryWarnings;
  APP_DATA.regulatoryKriEvaluations = regulatoryKriEvaluations;
  APP_DATA.regulatoryWarningStrategies = regulatoryWarningStrategies;
  APP_DATA.regulatoryMetricCalculationLogs = regulatoryMetricCalculationLogs;
  APP_DATA.regulatoryMetricKriMetrics = {
    metricCount: regulatoryMetrics.length,
    normalMetricCount: regulatoryMetrics.filter(m => m.status === 'NORMAL').length,
    warningMetricCount: regulatoryMetrics.filter(m => m.status === 'WARNING').length,
    criticalMetricCount: regulatoryMetrics.filter(m => m.status === 'CRITICAL').length,
    insufficientDataMetricCount: regulatoryMetrics.filter(m => m.dataStatus === 'INSUFFICIENT_DATA').length,
    avgCredibility: Math.round(regulatoryMetrics.filter(m => m.credibilityScore != null).reduce((s, m) => s + m.credibilityScore, 0) / Math.max(1, regulatoryMetrics.filter(m => m.credibilityScore != null).length) * 10) / 10,
    kriCount: regulatoryKriRuntime.length,
    normalKriCount: regulatoryKriRuntime.filter(k => k.status === 'NORMAL').length,
    attentionKriCount: regulatoryKriRuntime.filter(k => k.status === 'ATTENTION').length,
    warningKriCount: regulatoryKriRuntime.filter(k => k.status === 'WARNING').length,
    criticalKriCount: regulatoryKriRuntime.filter(k => k.status === 'CRITICAL').length,
    insufficientDataKriCount: regulatoryKriRuntime.filter(k => k.status === 'INSUFFICIENT_DATA').length,
    warningTotalCount: regulatoryWarnings.length,
    noticeCount: regulatoryWarnings.filter(w => w.warningLevel === 'NOTICE').length,
    attentionWarningCount: regulatoryWarnings.filter(w => w.warningLevel === 'ATTENTION').length,
    warningLevelCount: regulatoryWarnings.filter(w => w.warningLevel === 'WARNING').length,
    criticalWarningCount: regulatoryWarnings.filter(w => w.warningLevel === 'CRITICAL').length,
    pendingReviewCount: regulatoryWarnings.filter(w => w.status === 'PENDING_REVIEW').length,
    pendingRiskConversionCount: regulatoryWarnings.filter(w => w.status === 'PENDING_REVIEW' && !w.riskMatterId).length,
    impactedEntityCount: [...new Set(regulatoryWarnings.map(w => w.entityId))].length,
    impactedRegionCount: [...new Set(regulatoryWarnings.map(w => (entities.find(e => e.entityId === w.entityId) || {}).regionId).filter(Boolean))].length,
    priorityElevateSuggestions: regulatoryWarningStrategies.filter(s => s.priorityAdjustmentSuggestion === 'ELEVATE').length,
    strategyAdjustSuggestions: regulatoryWarningStrategies.filter(s => s.status === 'PENDING').length,
    evaluationDataStatus: 'INSUFFICIENT_HISTORY'
  };

  const phase19Perms = [
    { permissionSetId: 'PS-024', permissionCode: 'METRIC_VIEW', resourceType: 'regulatoryMetrics', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-025', permissionCode: 'METRIC_EXPORT', resourceType: 'regulatoryMetrics', action: 'EXPORT', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-026', permissionCode: 'KRI_VIEW', resourceType: 'regulatoryKriRuntime', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-027', permissionCode: 'KRI_EXPORT', resourceType: 'regulatoryKriRuntime', action: 'EXPORT', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-028', permissionCode: 'KRI_THRESHOLD_CHANGE', resourceType: 'regulatoryRules', action: 'UPDATE', riskLevel: 'CRITICAL' },
    { permissionSetId: 'PS-029', permissionCode: 'WARNING_VIEW', resourceType: 'regulatoryWarnings', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-030', permissionCode: 'WARNING_JUDGE', resourceType: 'regulatoryWarnings', action: 'JUDGE', riskLevel: 'MEDIUM' },
    { permissionSetId: 'PS-031', permissionCode: 'WARNING_CONVERT', resourceType: 'regulatoryWarnings', action: 'CONVERT', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-032', permissionCode: 'WARNING_CLOSE', resourceType: 'regulatoryWarnings', action: 'CLOSE', riskLevel: 'MEDIUM' },
    { permissionSetId: 'PS-033', permissionCode: 'WARNING_STRATEGY_VIEW', resourceType: 'regulatoryWarningStrategies', action: 'VIEW', riskLevel: 'LOW' }
  ];
  APP_DATA.regulatoryPermissionSets = [...(APP_DATA.regulatoryPermissionSets || []), ...phase19Perms];
  const rpm2 = APP_DATA.regulatoryRolePermissionMap || {};
  rpm2['ROLE-GROUP-LEADER'] = [...new Set([...(rpm2['ROLE-GROUP-LEADER'] || []), 'METRIC_VIEW', 'KRI_VIEW', 'WARNING_VIEW', 'WARNING_STRATEGY_VIEW'])];
  rpm2['ROLE-GROUP-REG'] = [...new Set([...(rpm2['ROLE-GROUP-REG'] || []), 'METRIC_VIEW', 'METRIC_EXPORT', 'KRI_VIEW', 'KRI_EXPORT', 'WARNING_VIEW', 'WARNING_JUDGE', 'WARNING_CONVERT', 'WARNING_CLOSE', 'WARNING_STRATEGY_VIEW'])];
  rpm2['ROLE-DOMAIN-REG'] = [...new Set([...(rpm2['ROLE-DOMAIN-REG'] || []), 'METRIC_VIEW', 'KRI_VIEW', 'WARNING_VIEW', 'WARNING_JUDGE', 'WARNING_STRATEGY_VIEW'])];
  rpm2['ROLE-ENTITY-REG'] = [...new Set([...(rpm2['ROLE-ENTITY-REG'] || []), 'METRIC_VIEW', 'KRI_VIEW', 'WARNING_VIEW', 'WARNING_JUDGE'])];
  APP_DATA.regulatoryRolePermissionMap = rpm2;
})();

(function () {
  const TODAY = '2026-07-22';
  const warnings = APP_DATA.warnings || [];
  const cdrMatters = APP_DATA.crossDomainRiskMatters || [];
  const events = APP_DATA.regulatoryEvents || [];
  const rects = APP_DATA.rectificationTasks || [];
  const entities = APP_DATA.globalLegalEntities || [];
  const regions = APP_DATA.globalRegions || [];
  const priorityObjects = APP_DATA.regulatoryPriorityObjects || [];
  const regulatoryWarnings = APP_DATA.regulatoryWarnings || [];
  const kriRuntime = APP_DATA.regulatoryKriRuntime || [];
  const actions = APP_DATA.regulatoryActions || [];
  const dataGov = APP_DATA.regulatoryDataGovernanceMetrics || {};
  const km = APP_DATA.regulatoryMetricKriMetrics || {};
  const maturity = APP_DATA.regulatoryMaturity || {};
  const qualityIssues = APP_DATA.regulatoryDataQualityIssues || [];

  const ANALYSIS_WEIGHTS = {
    riskExposure: 0.2,
    dataCredibility: 0.15,
    kriHealth: 0.15,
    warningEffectiveness: 0.1,
    rectificationClosure: 0.15,
    actionExecution: 0.1,
    maturity: 0.15
  };
  APP_DATA.regulatoryAnalysisWeights = ANALYSIS_WEIGHTS;

  const allRisks = [
    ...warnings.map(w => ({ id: w.id, name: w.name, level: w.level, entityId: w.entityId, domainId: w.domainId, riskType: w.category || w.type, riskScenarioId: w.riskScenarioId })),
    ...cdrMatters.map(m => ({ id: m.riskMatterId, name: m.riskMatterName, level: m.riskLevel, entityId: (m.affectedEntityIds || [])[0], domainId: m.domainId, riskType: m.riskType, riskScenarioId: m.riskScenarioId }))
  ];
  const totalRiskCount = Math.max(allRisks.length, 1);

  function concLevel(rate) {
    if (rate >= 0.35) return 'HIGH_CONCENTRATION';
    if (rate >= 0.2) return 'MEDIUM_CONCENTRATION';
    return 'LOW_CONCENTRATION';
  }

  function riskLevelFromCount(count, level) {
    if (level === '重大' || level === 'HIGH' || level === 'CRITICAL' || count >= 4) return 'HIGH';
    if (level === '较大' || level === 'MEDIUM' || count >= 2) return 'MEDIUM';
    return 'LOW';
  }

  const regulatoryRiskConcentration = [];
  let rcSeq = 1;

  regions.forEach(r => {
    const eIds = entities.filter(e => e.regionId === r.regionId && e.entityId !== 'G001').map(e => e.entityId);
    const count = allRisks.filter(w => eIds.includes(w.entityId)).length;
    const warnCount = regulatoryWarnings.filter(w => eIds.includes(w.entityId)).length;
    const rectOverdue = rects.filter(t => eIds.includes(t.entityId) && t.deadline && t.deadline < TODAY && t.status !== '已关闭').length;
    const rate = (count + warnCount) / (totalRiskCount + regulatoryWarnings.length || 1);
    if (!count && !warnCount && !rectOverdue) return;
    const maxLevel = allRisks.filter(w => eIds.includes(w.entityId)).some(w => w.level === '重大') ? 'HIGH' : 'MEDIUM';
    regulatoryRiskConcentration.push({
      concentrationId: 'RC-R-' + String(rcSeq++).padStart(3, '0'),
      dimension: 'byRegion',
      objectId: r.regionId,
      objectName: r.regionName,
      scopeType: 'REGION',
      count: count + warnCount,
      riskCount: count,
      warningCount: warnCount,
      rectOverdueCount: rectOverdue,
      totalCount: totalRiskCount,
      concentrationRate: Math.round(rate * 1000) / 1000,
      concentrationLevel: concLevel(rate),
      riskLevel: riskLevelFromCount(count, maxLevel),
      priority: priorityObjects.find(p => p.objectId === r.regionId)?.priority || (count >= 3 ? 'HIGH' : 'MEDIUM'),
      status: rectOverdue > 0 ? 'ATTENTION' : 'NORMAL',
      interpretation: rate >= 0.35 ? (maxLevel === 'HIGH' ? '集中度高且风险等级高' : '集中度高但风险等级低') : (count >= 1 ? '集中度低但单项风险严重' : '集中度低')
    });
  });

  entities.filter(e => e.entityId !== 'G001').forEach(ent => {
    const count = allRisks.filter(w => w.entityId === ent.entityId).length;
    const warnCount = regulatoryWarnings.filter(w => w.entityId === ent.entityId).length;
    const rectOverdue = rects.filter(t => t.entityId === ent.entityId && t.deadline && t.deadline < TODAY && t.status !== '已关闭').length;
    const rate = (count + warnCount) / (totalRiskCount + regulatoryWarnings.length || 1);
    if (!count && !warnCount && !rectOverdue) return;
    const levels = allRisks.filter(w => w.entityId === ent.entityId).map(w => w.level);
    const maxLevel = levels.includes('重大') ? 'HIGH' : levels.includes('较大') ? 'MEDIUM' : 'LOW';
    regulatoryRiskConcentration.push({
      concentrationId: 'RC-E-' + String(rcSeq++).padStart(3, '0'),
      dimension: 'byEntity',
      objectId: ent.entityId,
      objectName: ent.entityName,
      scopeType: 'ENTITY',
      regionId: ent.regionId,
      count: count + warnCount,
      riskCount: count,
      warningCount: warnCount,
      rectOverdueCount: rectOverdue,
      totalCount: totalRiskCount,
      concentrationRate: Math.round(rate * 1000) / 1000,
      concentrationLevel: concLevel(rate),
      riskLevel: maxLevel,
      priority: priorityObjects.find(p => p.objectId === ent.entityId)?.priority || (maxLevel === 'HIGH' ? 'CRITICAL' : 'MEDIUM'),
      status: rectOverdue > 0 ? 'OVERDUE' : 'NORMAL',
      interpretation: rate >= 0.35 ? (maxLevel === 'HIGH' ? '集中度高且风险等级高' : '集中度高但风险等级低') : (maxLevel === 'HIGH' ? '集中度低但单项风险严重' : '集中度低')
    });
  });

  const domains = [...new Set([...allRisks.map(r => r.domainId), ...kriRuntime.map(k => (APP_DATA.groupKris || []).find(g => g.id === k.kriId)?.category)].filter(Boolean))];
  domains.forEach(dom => {
    const count = allRisks.filter(w => w.domainId === dom).length;
    const kriCount = kriRuntime.filter(k => (APP_DATA.groupKris || []).find(g => g.id === k.kriId)?.category === dom && ['WARNING', 'CRITICAL'].includes(k.status)).length;
    const rate = (count + kriCount) / (totalRiskCount + kriRuntime.length || 1);
    if (!count && !kriCount) return;
    regulatoryRiskConcentration.push({
      concentrationId: 'RC-D-' + String(rcSeq++).padStart(3, '0'),
      dimension: 'byDomain',
      objectId: dom,
      objectName: dom,
      scopeType: 'DOMAIN',
      count: count + kriCount,
      riskCount: count,
      kriAnomalyCount: kriCount,
      totalCount: totalRiskCount,
      concentrationRate: Math.round(rate * 1000) / 1000,
      concentrationLevel: concLevel(rate),
      riskLevel: count >= 2 ? 'HIGH' : 'MEDIUM',
      priority: count >= 2 ? 'HIGH' : 'MEDIUM',
      status: 'NORMAL',
      interpretation: rate >= 0.35 ? '领域风险集中' : '领域风险分散'
    });
  });

  const riskTypes = [...new Set(allRisks.map(r => r.riskType).filter(Boolean))];
  riskTypes.forEach(rt => {
    const count = allRisks.filter(w => w.riskType === rt).length;
    const rate = count / totalRiskCount;
    regulatoryRiskConcentration.push({
      concentrationId: 'RC-T-' + String(rcSeq++).padStart(3, '0'),
      dimension: 'byRiskType',
      objectId: rt,
      objectName: rt,
      scopeType: 'RISK_TYPE',
      count,
      totalCount: totalRiskCount,
      concentrationRate: Math.round(rate * 1000) / 1000,
      concentrationLevel: concLevel(rate),
      riskLevel: count >= 3 ? 'HIGH' : 'MEDIUM',
      priority: 'MEDIUM',
      status: 'NORMAL',
      interpretation: '风险类型集中度分析（集中度≠严重程度）'
    });
  });

  kriRuntime.filter(k => ['WARNING', 'CRITICAL', 'ATTENTION'].includes(k.status)).forEach(k => {
    const rate = 1 / Math.max(kriRuntime.length, 1);
    regulatoryRiskConcentration.push({
      concentrationId: 'RC-K-' + k.kriRuntimeId,
      dimension: 'byKri',
      objectId: k.kriId,
      objectName: k.kriName,
      scopeType: 'KRI',
      count: 1,
      totalCount: kriRuntime.length,
      concentrationRate: Math.round(rate * 1000) / 1000,
      concentrationLevel: k.status === 'CRITICAL' ? 'HIGH_CONCENTRATION' : 'MEDIUM_CONCENTRATION',
      riskLevel: k.status === 'CRITICAL' ? 'HIGH' : 'MEDIUM',
      priority: k.status === 'CRITICAL' ? 'HIGH' : 'MEDIUM',
      status: k.status,
      interpretation: 'KRI异常集中度'
    });
  });

  regulatoryWarnings.forEach(w => {
    regulatoryRiskConcentration.push({
      concentrationId: 'RC-W-' + w.regulatoryWarningId,
      dimension: 'byWarning',
      objectId: w.regulatoryWarningId,
      objectName: w.regulatoryWarningId,
      scopeType: 'WARNING',
      entityId: w.entityId,
      count: 1,
      totalCount: regulatoryWarnings.length,
      concentrationRate: Math.round(1 / Math.max(regulatoryWarnings.length, 1) * 1000) / 1000,
      concentrationLevel: w.warningLevel === 'CRITICAL' ? 'HIGH_CONCENTRATION' : 'MEDIUM_CONCENTRATION',
      riskLevel: w.warningLevel === 'CRITICAL' ? 'HIGH' : 'MEDIUM',
      priority: w.warningLevel,
      status: w.status,
      interpretation: '预警集中度'
    });
  });

  rects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭').forEach(t => {
    regulatoryRiskConcentration.push({
      concentrationId: 'RC-RECT-' + t.taskId,
      dimension: 'byRectification',
      objectId: t.taskId,
      objectName: t.title,
      scopeType: 'RECTIFICATION',
      entityId: t.entityId,
      count: 1,
      totalCount: rects.length,
      concentrationRate: Math.round(1 / Math.max(rects.length, 1) * 1000) / 1000,
      concentrationLevel: 'HIGH_CONCENTRATION',
      riskLevel: 'HIGH',
      priority: t.level || 'HIGH',
      status: 'OVERDUE',
      interpretation: '整改超期集中度'
    });
  });

  const regulatoryRiskPropagation = [];
  let rpSeq = 1;

  const kriGroups = {};
  kriRuntime.filter(k => ['WARNING', 'CRITICAL', 'ATTENTION'].includes(k.status)).forEach(k => {
    if (!kriGroups[k.kriId]) kriGroups[k.kriId] = [];
    kriGroups[k.kriId].push(k);
  });
  Object.keys(kriGroups).forEach(kriId => {
    const group = kriGroups[kriId];
    const entityIds = [...new Set(group.map(g => g.scopeId))];
    if (entityIds.length < 2) return;
    const regionIds = [...new Set(entityIds.map(eid => (entities.find(e => e.entityId === eid) || {}).regionId).filter(Boolean))];
    regulatoryRiskPropagation.push({
      propagationId: 'RP-' + String(rpSeq++).padStart(3, '0'),
      propagationType: 'POTENTIAL_PROPAGATION',
      chainType: 'CROSS_ENTITY_KRI',
      title: '跨法人同类KRI异常',
      description: `KRI ${kriId} 在 ${entityIds.length} 个法人出现异常，需进一步核实`,
      steps: [
        { step: 1, label: 'KRI异常', objectType: 'regulatoryKriRuntime', objectIds: group.map(g => g.kriRuntimeId), pageId: 'regulatory-kri-monitoring' },
        { step: 2, label: '关联预警', objectType: 'regulatoryWarnings', objectIds: regulatoryWarnings.filter(w => w.kriId === kriId).map(w => w.regulatoryWarningId), pageId: 'regulatory-warning-center' },
        { step: 3, label: '原始风险', objectType: 'warnings', objectIds: warnings.filter(w => w.kriId === kriId).map(w => w.id), pageId: 'warnings' }
      ],
      affectedEntityIds: entityIds,
      affectedRegionIds: regionIds,
      kriId,
      requiresVerification: true,
      confidence: 0.65
    });
  });

  regions.forEach(r => {
    const eIds = entities.filter(e => e.regionId === r.regionId).map(e => e.entityId);
    const regionRisks = allRisks.filter(w => eIds.includes(w.entityId));
    const types = [...new Set(regionRisks.map(w => w.riskType).filter(Boolean))];
    types.forEach(rt => {
      const sameType = regionRisks.filter(w => w.riskType === rt);
      if (sameType.length < 2) return;
      regulatoryRiskPropagation.push({
        propagationId: 'RP-' + String(rpSeq++).padStart(3, '0'),
        propagationType: 'POTENTIAL_PROPAGATION',
        chainType: 'CROSS_ENTITY_SAME_RISK_TYPE',
        title: `区域${r.regionName}同类风险`,
        description: `${rt} 在 ${sameType.length} 个法人出现`,
        steps: [
          { step: 1, label: '区域风险集中', objectType: 'regulatoryRiskConcentration', objectIds: [regulatoryRiskConcentration.find(c => c.dimension === 'byRegion' && c.objectId === r.regionId)?.concentrationId].filter(Boolean), pageId: 'regulatory-risk-concentration' },
          { step: 2, label: '风险事项', objectType: 'warnings', objectIds: sameType.map(s => s.id), pageId: 'warnings' }
        ],
        affectedRegionIds: [r.regionId],
        affectedEntityIds: sameType.map(s => s.entityId),
        requiresVerification: true,
        confidence: 0.6
      });
    });
  });

  qualityIssues.filter(i => i.kriId && i.status !== 'CLOSED').slice(0, 6).forEach(issue => {
    const kri = kriRuntime.find(k => k.kriId === issue.kriId);
    const warn = regulatoryWarnings.find(w => w.kriId === issue.kriId);
    if (!kri) return;
    regulatoryRiskPropagation.push({
      propagationId: 'RP-' + String(rpSeq++).padStart(3, '0'),
      propagationType: 'POTENTIAL_PROPAGATION',
      chainType: 'DATA_QUALITY_TO_KRI',
      title: '数据质量→KRI→预警传导链',
      description: '数据质量异常可能导致KRI可信度下降及预警偏差',
      steps: [
        { step: 1, label: '数据质量异常', objectType: 'regulatoryDataQualityIssues', objectIds: [issue.qualityIssueId], pageId: 'regulatory-data-quality' },
        { step: 2, label: 'KRI可信度下降', objectType: 'regulatoryKriRuntime', objectIds: [kri.kriRuntimeId], pageId: 'regulatory-kri-monitoring' },
        ...(warn ? [{ step: 3, label: '预警识别', objectType: 'regulatoryWarnings', objectIds: [warn.regulatoryWarningId], pageId: 'regulatory-warning-center' }] : []),
        ...((warnings.filter(w => w.kriId === issue.kriId).map(w => w.id)).length ? [{ step: warn ? 4 : 3, label: '原始风险', objectType: 'warnings', objectIds: warnings.filter(w => w.kriId === issue.kriId).map(w => w.id), pageId: 'warnings' }] : []),
        { step: warn ? 5 : (warnings.filter(w => w.kriId === issue.kriId).length ? 4 : 3), label: '整改', objectType: 'rectificationTasks', objectIds: rects.filter(t => t.entityId === kri.scopeId).slice(0, 2).map(t => t.taskId), pageId: 'rectification' }
      ],
      kriId: issue.kriId,
      requiresVerification: true,
      confidence: 0.72
    });
  });

  const closedActions = actions.filter(a => ['COMPLETED', 'VERIFIED'].includes(a.status)).length;
  const actionClosureRate = actions.length ? Math.round(closedActions / actions.length * 1000) / 10 : null;
  const verifiedRects = rects.filter(t => t.verificationStatus === '验证通过' || t.status === '已关闭').length;
  const rectVerificationRate = rects.length ? Math.round(verifiedRects / rects.length * 1000) / 10 : null;
  const highRiskEntities = regulatoryRiskConcentration.filter(c => c.dimension === 'byEntity' && (c.riskLevel === 'HIGH' || c.concentrationLevel === 'HIGH_CONCENTRATION')).length;

  const regulatoryScenarioAnalysis = [
    { scenarioId: 'SCN-001', scenarioType: 'DATA_QUALITY_DECLINE', title: '数据质量下降', description: '模拟数据质量下降对KRI可信度与预警判断的影响', status: 'READY', simulationOnly: true, baseDataRef: 'regulatoryDataGovernanceMetrics', impactAreas: ['KRI可信度', '预警可信度', '监管判断复核'] },
    { scenarioId: 'SCN-002', scenarioType: 'CRITICAL_WARNING_INCREASE', title: '重大预警增加', description: '模拟重大预警增加对风险集中度与监管资源需求的影响', status: 'READY', simulationOnly: true, baseDataRef: 'regulatoryMetricKriMetrics', impactAreas: ['风险集中度', '监管优先级', '监管资源'] },
    { scenarioId: 'SCN-003', scenarioType: 'RECTIFICATION_OVERDUE_INCREASE', title: '整改超期增加', description: '模拟整改超期对闭环率与监管绩效的影响', status: 'READY', simulationOnly: true, baseDataRef: 'rectificationTasks', impactAreas: ['闭环率', '监管绩效', '重点法人'] },
    { scenarioId: 'SCN-004', scenarioType: 'KRI_THRESHOLD_CHANGE', title: 'KRI阈值变化', description: '情景分析≠真实规则变更，须走规则治理闭环', status: 'READY', simulationOnly: true, baseDataRef: 'regulatoryRules', impactAreas: ['KRI状态', '预警数量', '规则治理'], ruleWorkflowRequired: true }
  ];

  const regulatoryDecisionRecommendations = [];
  let recSeq = 1;

  regulatoryRiskConcentration.filter(c => c.dimension === 'byEntity' && (c.concentrationLevel === 'HIGH_CONCENTRATION' || c.riskLevel === 'HIGH')).slice(0, 8).forEach(c => {
    regulatoryDecisionRecommendations.push({
      recommendationId: 'REC-' + String(recSeq++).padStart(3, '0'),
      recommendationType: 'FOCUS_ENTITY',
      sourceAnalysisId: c.concentrationId,
      affectedScope: { scopeType: 'ENTITY', scopeId: c.objectId, scopeName: c.objectName },
      priority: c.riskLevel === 'HIGH' ? 'HIGH' : 'MEDIUM',
      reason: `${c.objectName} 风险集中度 ${Math.round(c.concentrationRate * 100)}%，${c.interpretation}`,
      evidence: [{ type: 'regulatoryRiskConcentration', id: c.concentrationId }, { type: 'warnings', ids: warnings.filter(w => w.entityId === c.objectId).map(w => w.id).slice(0, 3) }],
      confidence: Math.min(0.95, 0.6 + c.concentrationRate),
      suggestedAction: '加强重点法人监管',
      requiresHumanDecision: true,
      status: 'PENDING',
      entityId: c.objectId,
      regionId: c.regionId
    });
  });

  regulatoryRiskConcentration.filter(c => c.dimension === 'byRegion' && c.concentrationLevel === 'HIGH_CONCENTRATION').slice(0, 3).forEach(c => {
    regulatoryDecisionRecommendations.push({
      recommendationId: 'REC-' + String(recSeq++).padStart(3, '0'),
      recommendationType: 'FOCUS_REGION',
      sourceAnalysisId: c.concentrationId,
      affectedScope: { scopeType: 'REGION', scopeId: c.objectId, scopeName: c.objectName },
      priority: 'HIGH',
      reason: `区域 ${c.objectName} 风险集中度偏高`,
      evidence: [{ type: 'regulatoryRiskConcentration', id: c.concentrationId }],
      confidence: 0.78,
      suggestedAction: '提升区域监管关注',
      requiresHumanDecision: true,
      status: 'PENDING',
      regionId: c.objectId
    });
  });

  if (dataGov.severeIssueCount > 0 || dataGov.openIssueCount > 0) {
    regulatoryDecisionRecommendations.push({
      recommendationId: 'REC-' + String(recSeq++).padStart(3, '0'),
      recommendationType: 'REVIEW_DATA_QUALITY',
      sourceAnalysisId: 'ANA-DQ',
      affectedScope: { scopeType: 'GROUP', scopeId: 'G001', scopeName: '集团' },
      priority: dataGov.severeIssueCount > 0 ? 'HIGH' : 'MEDIUM',
      reason: `数据质量异常 ${dataGov.openIssueCount} 项，严重 ${dataGov.severeIssueCount} 项，影响监管判断`,
      evidence: [{ type: 'regulatoryDataQualityIssues', ids: qualityIssues.filter(i => i.status !== 'CLOSED').slice(0, 5).map(i => i.qualityIssueId) }],
      confidence: 0.82,
      suggestedAction: '启动数据质量复核',
      requiresHumanDecision: true,
      status: 'PENDING'
    });
  }

  kriRuntime.filter(k => k.dataStatus === 'INSUFFICIENT_DATA' || (k.credibilityScore != null && k.credibilityScore < 70)).slice(0, 3).forEach(k => {
    regulatoryDecisionRecommendations.push({
      recommendationId: 'REC-' + String(recSeq++).padStart(3, '0'),
      recommendationType: 'REVIEW_KRI',
      sourceAnalysisId: k.kriRuntimeId,
      affectedScope: { scopeType: k.scopeType, scopeId: k.scopeId },
      priority: 'MEDIUM',
      reason: `KRI ${k.kriName} 数据可信度不足，需复核`,
      evidence: [{ type: 'regulatoryKriRuntime', id: k.kriRuntimeId }, { type: 'regulatoryMetrics', id: k.metricId }],
      confidence: 0.7,
      suggestedAction: '复核KRI数据可信度',
      requiresHumanDecision: true,
      status: 'PENDING',
      kriId: k.kriId
    });
  });

  regulatoryWarnings.filter(w => w.status === 'PENDING_REVIEW').slice(0, 4).forEach(w => {
    regulatoryDecisionRecommendations.push({
      recommendationId: 'REC-' + String(recSeq++).padStart(3, '0'),
      recommendationType: 'REVIEW_WARNING',
      sourceAnalysisId: w.regulatoryWarningId,
      affectedScope: { scopeType: 'ENTITY', scopeId: w.entityId },
      priority: w.warningLevel === 'CRITICAL' ? 'CRITICAL' : 'HIGH',
      reason: `预警 ${w.regulatoryWarningId} 待研判`,
      evidence: [{ type: 'regulatoryWarnings', id: w.regulatoryWarningId }, { type: 'regulatoryKriRuntime', id: w.kriRuntimeId }],
      confidence: 0.75,
      suggestedAction: '完成预警研判',
      requiresHumanDecision: true,
      status: 'PENDING',
      entityId: w.entityId
    });
  });

  const resourceAlloc = APP_DATA.regulatoryResourceAllocations || [];
  if (highRiskEntities > 2) {
    regulatoryDecisionRecommendations.push({
      recommendationId: 'REC-' + String(recSeq++).padStart(3, '0'),
      recommendationType: 'ALLOCATE_RESOURCE',
      sourceAnalysisId: 'ANA-RES',
      affectedScope: { scopeType: 'GROUP', scopeId: 'G001' },
      priority: 'HIGH',
      reason: `高风险法人 ${highRiskEntities} 家，建议重新配置监管资源`,
      evidence: [{ type: 'regulatoryResourceAllocations', count: resourceAlloc.length }],
      confidence: 0.68,
      suggestedAction: '优化监管资源配置',
      requiresHumanDecision: true,
      status: 'PENDING'
    });
  }

  const regulatoryAnalysisIndexes = [
    { analysisIndexId: 'AI-001', analysisType: 'COMPOSITE', title: '集团综合监管态势', status: 'READY', calculatedAt: TODAY + ' 08:00:00', scopeType: 'GROUP', scopeId: 'G001' },
    { analysisIndexId: 'AI-002', analysisType: 'CONCENTRATION', title: '风险集中度分析', status: 'READY', calculatedAt: TODAY + ' 08:00:00', scopeType: 'GROUP', scopeId: 'G001' },
    { analysisIndexId: 'AI-003', analysisType: 'PROPAGATION', title: '风险传导分析', status: 'READY', calculatedAt: TODAY + ' 08:00:00', scopeType: 'GROUP', scopeId: 'G001' },
    { analysisIndexId: 'AI-004', analysisType: 'SCENARIO', title: '情景分析', status: 'READY', calculatedAt: TODAY + ' 08:00:00', scopeType: 'GROUP', scopeId: 'G001' },
    { analysisIndexId: 'AI-005', analysisType: 'DECISION', title: '决策建议', status: 'READY', calculatedAt: TODAY + ' 08:00:00', scopeType: 'GROUP', scopeId: 'G001' }
  ];

  const regulatoryAnalysisResults = [
    { resultId: 'AR-001', analysisIndexId: 'AI-001', resultType: 'COMPOSITE_HEALTH', title: '集团综合监管健康度', dataStatus: 'OK', calculatedAt: TODAY + ' 08:00:00' },
    { resultId: 'AR-002', analysisIndexId: 'AI-002', resultType: 'CONCENTRATION_SUMMARY', title: '风险集中度摘要', dataStatus: 'OK', itemCount: regulatoryRiskConcentration.length, calculatedAt: TODAY + ' 08:00:00' },
    { resultId: 'AR-003', analysisIndexId: 'AI-003', resultType: 'PROPAGATION_SUMMARY', title: '风险传导摘要', dataStatus: 'OK', itemCount: regulatoryRiskPropagation.length, calculatedAt: TODAY + ' 08:00:00' },
    { resultId: 'AR-004', analysisIndexId: 'AI-004', resultType: 'SCENARIO_CATALOG', title: '情景分析目录', dataStatus: 'OK', itemCount: regulatoryScenarioAnalysis.length, calculatedAt: TODAY + ' 08:00:00' },
    { resultId: 'AR-005', analysisIndexId: 'AI-005', resultType: 'RECOMMENDATION_SUMMARY', title: '决策建议摘要', dataStatus: 'OK', itemCount: regulatoryDecisionRecommendations.length, calculatedAt: TODAY + ' 08:00:00' }
  ];

  const topRegion = regulatoryRiskConcentration.filter(c => c.dimension === 'byRegion').sort((a, b) => b.concentrationRate - a.concentrationRate)[0];
  const topEntity = regulatoryRiskConcentration.filter(c => c.dimension === 'byEntity').sort((a, b) => b.concentrationRate - a.concentrationRate)[0];
  const topDomain = regulatoryRiskConcentration.filter(c => c.dimension === 'byDomain').sort((a, b) => b.concentrationRate - a.concentrationRate)[0];

  APP_DATA.regulatoryRiskConcentration = regulatoryRiskConcentration;
  APP_DATA.regulatoryRiskPropagation = regulatoryRiskPropagation;
  APP_DATA.regulatoryScenarioAnalysis = regulatoryScenarioAnalysis;
  APP_DATA.regulatoryDecisionRecommendations = regulatoryDecisionRecommendations;
  APP_DATA.regulatoryAnalysisIndexes = regulatoryAnalysisIndexes;
  APP_DATA.regulatoryAnalysisResults = regulatoryAnalysisResults;
  APP_DATA.regulatoryAnalysisMetrics = {
    highRiskEntityCount: highRiskEntities,
    criticalWarningCount: km.criticalWarningCount || 0,
    pendingReviewCount: km.pendingReviewCount || 0,
    highPriorityObjectCount: priorityObjects.filter(p => p.priority === 'CRITICAL' || p.priority === 'HIGH').length,
    actionClosureRate,
    rectificationVerificationRate: rectVerificationRate,
    dataCredibility: km.avgCredibility || dataGov.overallQualityScore,
    trendDataStatus: 'INSUFFICIENT_HISTORY',
    pendingRecommendationCount: regulatoryDecisionRecommendations.filter(r => r.status === 'PENDING').length,
    highConcentrationRegionCount: regulatoryRiskConcentration.filter(c => c.dimension === 'byRegion' && c.concentrationLevel === 'HIGH_CONCENTRATION').length,
    potentialPropagationCount: regulatoryRiskPropagation.filter(p => p.propagationType === 'POTENTIAL_PROPAGATION').length,
    topConcentrationRegion: topRegion?.objectName || '—',
    topConcentrationEntity: topEntity?.objectName || '—',
    topConcentrationDomain: topDomain?.objectName || '—',
    scenarioCount: regulatoryScenarioAnalysis.length,
    maturityScore: maturity.overallScore || maturity.compositeScore || null
  };

  let srSeq = (APP_DATA.regulatorySearchIndex || []).length + 1;
  const addSearch = (item) => {
    (APP_DATA.regulatorySearchIndex = APP_DATA.regulatorySearchIndex || []).push({
      resultId: 'SR-' + String(srSeq++).padStart(4, '0'),
      objectType: item.objectType,
      objectId: item.objectId,
      title: item.title,
      subtitle: item.subtitle || '',
      entityId: item.entityId || null,
      regionId: item.regionId || null,
      domainId: item.domainId || null,
      priority: item.priority || null,
      status: item.status || null,
      matchedFields: item.matchedFields || ['title'],
      targetPageId: item.targetPageId,
      targetParams: item.targetParams || {},
      category: item.category || '综合分析'
    });
  };

  regulatoryAnalysisResults.forEach(r => addSearch({ objectType: 'ANALYSIS_RESULT', objectId: r.resultId, title: r.title, subtitle: r.resultType, category: '综合分析', targetPageId: 'regulatory-analysis-center', targetParams: { resultId: r.resultId } }));
  regulatoryRiskConcentration.filter(c => ['byRegion', 'byEntity', 'byDomain'].includes(c.dimension)).slice(0, 15).forEach(c => addSearch({ objectType: 'RISK_CONCENTRATION', objectId: c.concentrationId, title: c.objectName + ' · 风险集中度', subtitle: c.concentrationLevel, category: '综合分析', targetPageId: 'regulatory-risk-concentration', targetParams: { concentrationId: c.concentrationId, dimension: c.dimension }, entityId: c.scopeType === 'ENTITY' ? c.objectId : c.entityId, regionId: c.regionId }));
  regulatoryRiskPropagation.slice(0, 10).forEach(p => addSearch({ objectType: 'RISK_PROPAGATION', objectId: p.propagationId, title: p.title, subtitle: p.propagationType, category: '综合分析', targetPageId: 'regulatory-risk-propagation', targetParams: { propagationId: p.propagationId } }));
  regulatoryScenarioAnalysis.forEach(s => addSearch({ objectType: 'SCENARIO_ANALYSIS', objectId: s.scenarioId, title: s.title, subtitle: 'simulationOnly', category: '综合分析', targetPageId: 'regulatory-scenario-analysis', targetParams: { scenarioId: s.scenarioId } }));
  regulatoryDecisionRecommendations.slice(0, 12).forEach(r => addSearch({ objectType: 'DECISION_RECOMMENDATION', objectId: r.recommendationId, title: r.recommendationType + ' · ' + (r.affectedScope?.scopeName || r.affectedScope?.scopeId), subtitle: r.status, category: '综合分析', targetPageId: 'regulatory-decision-recommendations', targetParams: { recommendationId: r.recommendationId }, priority: r.priority, status: r.status, entityId: r.entityId, regionId: r.regionId }));

  const phase20Perms = [
    { permissionSetId: 'PS-034', permissionCode: 'ANALYSIS_VIEW', resourceType: 'regulatoryAnalysisResults', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-035', permissionCode: 'ANALYSIS_RUN', resourceType: 'regulatoryScenarioAnalysis', action: 'RUN', riskLevel: 'MEDIUM' },
    { permissionSetId: 'PS-036', permissionCode: 'ANALYSIS_EXPORT', resourceType: 'regulatoryAnalysisResults', action: 'EXPORT', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-037', permissionCode: 'DECISION_RECOMMENDATION_VIEW', resourceType: 'regulatoryDecisionRecommendations', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-038', permissionCode: 'DECISION_RECOMMENDATION_CONFIRM', resourceType: 'regulatoryDecisionRecommendations', action: 'CONFIRM', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-039', permissionCode: 'DECISION_RECOMMENDATION_REJECT', resourceType: 'regulatoryDecisionRecommendations', action: 'REJECT', riskLevel: 'MEDIUM' },
    { permissionSetId: 'PS-040', permissionCode: 'DECISION_RECOMMENDATION_EXECUTE', resourceType: 'regulatoryDecisionRecommendations', action: 'EXECUTE', riskLevel: 'CRITICAL' }
  ];
  APP_DATA.regulatoryPermissionSets = [...(APP_DATA.regulatoryPermissionSets || []), ...phase20Perms];
  const rpm3 = APP_DATA.regulatoryRolePermissionMap || {};
  rpm3['ROLE-GROUP-LEADER'] = [...new Set([...(rpm3['ROLE-GROUP-LEADER'] || []), 'ANALYSIS_VIEW', 'DECISION_RECOMMENDATION_VIEW'])];
  rpm3['ROLE-GROUP-REG'] = [...new Set([...(rpm3['ROLE-GROUP-REG'] || []), 'ANALYSIS_VIEW', 'ANALYSIS_RUN', 'ANALYSIS_EXPORT', 'DECISION_RECOMMENDATION_VIEW', 'DECISION_RECOMMENDATION_CONFIRM', 'DECISION_RECOMMENDATION_REJECT', 'DECISION_RECOMMENDATION_EXECUTE'])];
  rpm3['ROLE-DOMAIN-REG'] = [...new Set([...(rpm3['ROLE-DOMAIN-REG'] || []), 'ANALYSIS_VIEW', 'DECISION_RECOMMENDATION_VIEW', 'DECISION_RECOMMENDATION_CONFIRM'])];
  rpm3['ROLE-ENTITY-REG'] = [...new Set([...(rpm3['ROLE-ENTITY-REG'] || []), 'ANALYSIS_VIEW', 'DECISION_RECOMMENDATION_VIEW'])];
  APP_DATA.regulatoryRolePermissionMap = rpm3;

  const sm = APP_DATA.regulatoryScopeMatrix || [];
  sm.forEach(row => {
    if (row.roleId === 'ROLE-GROUP-LEADER' || row.roleId === 'ROLE-GROUP-REG') row.analysis = '全部';
    else if (row.roleId === 'ROLE-DOMAIN-REG') row.analysis = '本领域';
    else if (row.roleId === 'ROLE-ENTITY-REG') row.analysis = '本法人';
    else row.analysis = '查看';
  });
  APP_DATA.regulatoryScopeMatrix = sm;
})();

(function () {
  const TODAY = '2026-07-22';
  const warnings = APP_DATA.warnings || [];
  const regulatoryWarnings = APP_DATA.regulatoryWarnings || [];
  const kriRuntime = APP_DATA.regulatoryKriRuntime || [];
  const kriEvals = APP_DATA.regulatoryKriEvaluations || [];
  const qualityIssues = APP_DATA.regulatoryDataQualityIssues || [];
  const actions = APP_DATA.regulatoryActions || [];
  const rects = APP_DATA.rectificationTasks || [];
  const supTasks = APP_DATA.regulatorySupervisionTasks || [];
  const dataGov = APP_DATA.regulatoryDataGovernanceMetrics || {};
  const km = APP_DATA.regulatoryMetricKriMetrics || {};
  const am = APP_DATA.regulatoryAnalysisMetrics || {};
  const concentrations = APP_DATA.regulatoryRiskConcentration || [];
  const propagations = APP_DATA.regulatoryRiskPropagation || [];
  const perfMetrics = APP_DATA.regulatoryPerformanceMetrics || [];
  const objectives = APP_DATA.regulatoryStrategicObjectives || [];
  const ruleEffectiveness = APP_DATA.regulatoryRuleEffectiveness || [];
  const entities = APP_DATA.globalLegalEntities || [];

  const regulatoryImprovementOpportunities = [];
  let oppSeq = 1;

  const addOpp = (item) => {
    regulatoryImprovementOpportunities.push({
      opportunityId: 'OPP-' + String(oppSeq++).padStart(3, '0'),
      sourceCategory: item.sourceCategory,
      title: item.title,
      description: item.description || '',
      priority: item.priority || 'MEDIUM',
      status: 'PENDING_ANALYSIS',
      sourceType: item.sourceType,
      sourceId: item.sourceId,
      relatedRiskIds: item.relatedRiskIds || [],
      relatedKriIds: item.relatedKriIds || [],
      relatedWarningIds: item.relatedWarningIds || [],
      relatedActionIds: item.relatedActionIds || [],
      relatedRectificationTaskIds: item.relatedRectificationTaskIds || [],
      entityId: item.entityId || null,
      domainId: item.domainId || null,
      problemManifestation: item.problemManifestation || '',
      impactScope: item.impactScope || '',
      potentialCause: item.potentialCause || '',
      suggestedDirection: item.suggestedDirection || '',
      requiresHumanDecision: true,
      createdAt: TODAY + ' 08:00:00'
    });
  };

  ruleEffectiveness.filter(r => r.effectivenessScore != null && r.effectivenessScore < 75).slice(0, 3).forEach(r => {
    addOpp({ sourceCategory: '规则运行效果不足', title: '规则效果不足 · ' + (r.ruleName || r.ruleId), sourceType: 'regulatoryRuleEffectiveness', sourceId: r.effectivenessId || r.ruleId, problemManifestation: '规则运行效果得分偏低', impactScope: 'GROUP', potentialCause: '规则参数或触发条件可能不匹配现状', suggestedDirection: 'RULE_OPTIMIZATION', priority: 'HIGH' });
  });

  kriEvals.filter(e => e.dataStatus === 'INSUFFICIENT_HISTORY').slice(0, 2).forEach(e => {
    addOpp({ sourceCategory: 'KRI有效性不足', title: 'KRI有效性数据不足 · ' + e.kriId, sourceType: 'regulatoryKriEvaluations', sourceId: e.evaluationId, relatedKriIds: [e.kriId], problemManifestation: '缺乏历史监测数据评价KRI有效性', impactScope: 'GROUP', suggestedDirection: 'KRI_OPTIMIZATION', priority: 'MEDIUM' });
  });

  const warnOppCandidates = regulatoryWarnings.filter(w =>
    w.dataStatus === 'INSUFFICIENT_DATA' ||
    w.status === 'PENDING_REVIEW' ||
    (w.credibilityScore != null && w.credibilityScore < 70)
  );
  (warnOppCandidates.length ? warnOppCandidates : regulatoryWarnings).slice(0, 3).forEach(w => {
    addOpp({ sourceCategory: '预警误报 / 漏报', title: '预警可信度不足 · ' + w.regulatoryWarningId, sourceType: 'regulatoryWarnings', sourceId: w.regulatoryWarningId, relatedWarningIds: [w.regulatoryWarningId], relatedKriIds: w.kriId ? [w.kriId] : [], entityId: w.entityId, problemManifestation: w.status === 'PENDING_REVIEW' ? '预警待研判，存在误报/漏报风险' : '预警判断可能受数据质量影响', suggestedDirection: 'DATA_GOVERNANCE_OPTIMIZATION', priority: 'HIGH' });
  });

  qualityIssues.filter(i => i.status !== 'CLOSED').slice(0, 4).forEach(i => {
    addOpp({ sourceCategory: '数据质量问题', title: '数据质量异常 · ' + i.qualityIssueId, sourceType: 'regulatoryDataQualityIssues', sourceId: i.qualityIssueId, relatedKriIds: i.kriId ? [i.kriId] : [], problemManifestation: i.issueDescription || '数据质量异常', impactScope: i.dataSetId || 'GROUP', suggestedDirection: 'DATA_GOVERNANCE_OPTIMIZATION', priority: i.severity === 'HIGH' ? 'HIGH' : 'MEDIUM' });
  });

  concentrations.filter(c => c.concentrationLevel === 'HIGH_CONCENTRATION').slice(0, 4).forEach(c => {
    addOpp({ sourceCategory: '风险集中度异常', title: '风险集中 · ' + c.objectName, sourceType: 'regulatoryRiskConcentration', sourceId: c.concentrationId, entityId: c.scopeType === 'ENTITY' ? c.objectId : c.entityId, problemManifestation: c.interpretation, impactScope: c.scopeType, suggestedDirection: 'SUPERVISION_STRATEGY_OPTIMIZATION', priority: 'HIGH' });
  });

  propagations.slice(0, 3).forEach(p => {
    addOpp({ sourceCategory: '风险传导风险', title: p.title, sourceType: 'regulatoryRiskPropagation', sourceId: p.propagationId, relatedKriIds: p.kriId ? [p.kriId] : [], problemManifestation: p.description, impactScope: 'MULTI_ENTITY', suggestedDirection: 'PROCESS_OPTIMIZATION', priority: 'MEDIUM' });
  });

  actions.filter(a => a.status === 'OVERDUE' || (a.status !== 'VERIFIED' && a.status !== 'COMPLETED')).slice(0, 3).forEach(a => {
    addOpp({ sourceCategory: '监管行动效果不足', title: '监管行动未闭环 · ' + a.actionId, sourceType: 'regulatoryActions', sourceId: a.actionId, relatedActionIds: [a.actionId], entityId: a.entityId, problemManifestation: '监管行动执行或验证不足', suggestedDirection: 'PROCESS_OPTIMIZATION', priority: a.priority === 'CRITICAL' ? 'HIGH' : 'MEDIUM' });
  });

  const entityRectCounts = {};
  rects.filter(t => t.status !== '已关闭').forEach(t => { entityRectCounts[t.entityId] = (entityRectCounts[t.entityId] || 0) + 1; });
  Object.keys(entityRectCounts).filter(eid => entityRectCounts[eid] >= 2).slice(0, 3).forEach(eid => {
    const ent = entities.find(e => e.entityId === eid);
    addOpp({ sourceCategory: '整改反复发生', title: '整改反复 · ' + (ent?.entityName || eid), sourceType: 'rectificationTasks', sourceId: rects.filter(t => t.entityId === eid && t.status !== '已关闭')[0]?.taskId, relatedRectificationTaskIds: rects.filter(t => t.entityId === eid).map(t => t.taskId).slice(0, 3), entityId: eid, problemManifestation: '同一法人多项整改未完成', impactScope: 'ENTITY', suggestedDirection: 'PROCESS_OPTIMIZATION', priority: 'HIGH' });
  });

  perfMetrics.filter(p => p.performanceLevel === 'POOR' || p.performanceLevel === 'AT_RISK' || (p.regulatoryEffectivenessScore != null && p.regulatoryEffectivenessScore < 60)).slice(0, 2).forEach(p => {
    addOpp({ sourceCategory: '监管绩效偏差', title: '绩效偏差 · ' + (p.performanceId || p.metricName || 'PERF'), sourceType: 'regulatoryPerformanceMetrics', sourceId: p.performanceId || p.metricId, problemManifestation: '监管绩效指标偏离目标', impactScope: 'GROUP', suggestedDirection: 'RESOURCE_OPTIMIZATION', priority: 'MEDIUM' });
  });

  objectives.filter(o => o.status === 'BEHIND').slice(0, 2).forEach(o => {
    addOpp({ sourceCategory: '战略目标未达成', title: '战略偏差 · ' + o.objectiveName, sourceType: 'regulatoryStrategicObjectives', sourceId: o.objectiveId, problemManifestation: '战略目标完成率不足', impactScope: 'GROUP', suggestedDirection: 'SUPERVISION_STRATEGY_OPTIMIZATION', priority: 'HIGH' });
  });

  if (dataGov.openIssueCount > 2 && !regulatoryImprovementOpportunities.find(o => o.sourceCategory === '数据质量问题')) {
    addOpp({ sourceCategory: '数据质量问题', title: '集团数据质量待改进', sourceType: 'regulatoryDataGovernanceMetrics', sourceId: 'DG-METRICS', problemManifestation: '开放质量问题 ' + dataGov.openIssueCount, impactScope: 'GROUP', suggestedDirection: 'DATA_GOVERNANCE_OPTIMIZATION', priority: 'MEDIUM' });
  }

  const regulatoryRootCauseAnalyses = [];
  let rcaSeq = 1;
  const rootCauseCategories = ['DATA', 'RULE', 'PROCESS', 'CONTROL', 'RESPONSIBILITY', 'RESOURCE', 'SYSTEM', 'GOVERNANCE'];
  const categoryMap = {
    '数据质量问题': 'DATA', '规则运行效果不足': 'RULE', '监管行动效果不足': 'PROCESS', '整改反复发生': 'PROCESS',
    'KRI有效性不足': 'CONTROL', '预警误报 / 漏报': 'DATA', '风险集中度异常': 'GOVERNANCE', '风险传导风险': 'PROCESS',
    '监管绩效偏差': 'RESOURCE', '战略目标未达成': 'GOVERNANCE'
  };

  regulatoryImprovementOpportunities.forEach(opp => {
    const cat = categoryMap[opp.sourceCategory] || 'PROCESS';
    regulatoryRootCauseAnalyses.push({
      rootCauseId: 'RCA-' + String(rcaSeq++).padStart(3, '0'),
      opportunityId: opp.opportunityId,
      rootCauseCategory: cat,
      facts: [opp.problemManifestation, '来源: ' + opp.sourceCategory].filter(Boolean),
      evidence: [{ type: opp.sourceType, id: opp.sourceId }, ...(opp.relatedRiskIds || []).map(id => ({ type: 'warnings', id }))],
      problemManifestation: opp.problemManifestation,
      potentialRootCause: opp.potentialCause || ('可能原因: ' + cat + ' 类问题导致 ' + opp.title),
      rootCauseStatus: 'POTENTIAL_ROOT_CAUSE',
      confidence: 0.65,
      requiresHumanConfirmation: true,
      confirmedRootCause: null,
      createdAt: TODAY + ' 08:00:00'
    });
  });

  const regulatoryOptimizationPlans = [];
  let planSeq = 1;
  const typeMap = {
    RULE_OPTIMIZATION: 'RULE_OPTIMIZATION', KRI_OPTIMIZATION: 'KRI_OPTIMIZATION',
    DATA_GOVERNANCE_OPTIMIZATION: 'DATA_GOVERNANCE_OPTIMIZATION', PROCESS_OPTIMIZATION: 'PROCESS_OPTIMIZATION',
    RESOURCE_OPTIMIZATION: 'RESOURCE_OPTIMIZATION', SUPERVISION_STRATEGY_OPTIMIZATION: 'SUPERVISION_STRATEGY_OPTIMIZATION',
    SYSTEM_OPTIMIZATION: 'SYSTEM_OPTIMIZATION'
  };

  const addPlan = (rca, opp, optType) => {
    regulatoryOptimizationPlans.push({
      planId: 'OPT-' + String(planSeq++).padStart(3, '0'),
      opportunityId: rca.opportunityId,
      rootCauseId: rca.rootCauseId,
      optimizationType: optType,
      title: '优化方案 · ' + (opp?.title || rca.rootCauseId),
      objective: '解决 ' + (opp?.problemManifestation || '监管问题'),
      actions: ['分析问题根因', '制定改进措施', '组织实施', '效果验证'],
      expectedImpact: optType === 'RULE_OPTIMIZATION' ? '提升规则运行效果（须走规则治理闭环）' : optType === 'KRI_OPTIMIZATION' ? '提升KRI监测有效性（须走阈值治理闭环）' : optType === 'RESOURCE_OPTIMIZATION' ? '优化监管资源配置（须走资源调度闭环）' : '改善监管闭环能力',
      responsibleOrganization: opp?.entityId || 'G001',
      implementationPeriod: '90天',
      resourceRequirement: optType === 'RESOURCE_OPTIMIZATION' ? '需调整监管资源' : '常规监管资源',
      validationMetrics: ['风险事件数量', '预警有效率', '整改闭环率', '数据质量得分'],
      status: 'PROPOSED',
      requiresHumanDecision: true,
      entityId: opp?.entityId || null,
      domainId: opp?.domainId || null,
      createdAt: TODAY + ' 08:00:00'
    });
  };

  regulatoryRootCauseAnalyses.slice(0, 12).forEach(rca => {
    const opp = regulatoryImprovementOpportunities.find(o => o.opportunityId === rca.opportunityId);
    addPlan(rca, opp, typeMap[opp?.suggestedDirection] || 'PROCESS_OPTIMIZATION');
  });

  if (!regulatoryOptimizationPlans.some(p => p.optimizationType === 'RESOURCE_OPTIMIZATION')) {
    const resOpp = regulatoryImprovementOpportunities.find(o => o.suggestedDirection === 'RESOURCE_OPTIMIZATION');
    const resRca = resOpp ? regulatoryRootCauseAnalyses.find(r => r.opportunityId === resOpp.opportunityId) : null;
    if (resOpp && resRca) addPlan(resRca, resOpp, 'RESOURCE_OPTIMIZATION');
  }

  const regulatoryImprovementExecution = [];
  let execSeq = 1;
  regulatoryOptimizationPlans.slice(0, 6).forEach((plan, idx) => {
    const linkedSup = supTasks.find(t => t.entityId === plan.entityId && t.taskStatus !== 'CLOSED') || supTasks[idx % Math.max(supTasks.length, 1)];
    const linkedRect = rects.find(t => t.entityId === plan.entityId && t.status !== '已关闭') || rects[idx % Math.max(rects.length, 1)];
    const statusList = ['PROPOSED', 'APPROVED', 'IMPLEMENTING', 'PENDING_VALIDATION', 'VALIDATED', 'BLOCKED'];
    const status = statusList[idx % statusList.length];
    regulatoryImprovementExecution.push({
      executionId: 'EXE-' + String(execSeq++).padStart(3, '0'),
      planId: plan.planId,
      opportunityId: plan.opportunityId,
      rootCauseId: plan.rootCauseId,
      status,
      progress: status === 'IMPLEMENTING' ? 55 : status === 'VALIDATED' ? 100 : status === 'APPROVED' ? 20 : 0,
      linkedSupervisionTaskId: linkedSup?.supervisionTaskId || null,
      linkedRectificationTaskId: linkedRect?.taskId || null,
      feedback: status === 'BLOCKED' ? '实施受阻，需升级处理' : status === 'IMPLEMENTING' ? '实施进行中' : '',
      entityId: plan.entityId,
      startedAt: ['IMPLEMENTING', 'PENDING_VALIDATION', 'VALIDATED', 'BLOCKED'].includes(status) ? TODAY : null,
      completedAt: status === 'VALIDATED' ? TODAY : null
    });
    if (status !== 'PROPOSED') plan.status = status === 'VALIDATED' ? 'VALIDATED' : status === 'IMPLEMENTING' ? 'IMPLEMENTING' : status === 'APPROVED' ? 'APPROVED' : plan.status;
  });

  const regulatoryImprovementEffectiveness = [];
  let effSeq = 1;
  regulatoryImprovementExecution.filter(e => ['PENDING_VALIDATION', 'VALIDATED'].includes(e.status)).forEach(exe => {
    const plan = regulatoryOptimizationPlans.find(p => p.planId === exe.planId);
    const hasHistory = false;
    regulatoryImprovementEffectiveness.push({
      effectivenessId: 'EFF-' + String(effSeq++).padStart(3, '0'),
      executionId: exe.executionId,
      planId: exe.planId,
      opportunityId: exe.opportunityId,
      before: {
        riskEventCount: warnings.length,
        highRiskCount: warnings.filter(w => w.level === '重大' || w.level === '较大').length,
        dataQualityScore: dataGov.overallQualityScore,
        kriCredibility: km.avgCredibility,
        actionClosureRate: am.actionClosureRate,
        rectificationOverdueRate: rects.filter(t => t.deadline && t.deadline < TODAY && t.status !== '已关闭').length
      },
      after: hasHistory ? { riskEventCount: warnings.length - 1, dataQualityScore: (dataGov.overallQualityScore || 80) + 2 } : null,
      change: hasHistory ? { riskEventCount: -1, dataQualityScore: 2 } : null,
      effectiveness: hasHistory ? 'PARTIALLY_EFFECTIVE' : 'INSUFFICIENT_HISTORY',
      dataStatus: hasHistory ? 'OK' : 'INSUFFICIENT_HISTORY',
      riskEffect: { status: hasHistory ? 'OK' : 'INSUFFICIENT_HISTORY' },
      supervisionEffect: { status: hasHistory ? 'OK' : 'INSUFFICIENT_HISTORY' },
      dataEffect: { status: hasHistory ? 'OK' : 'INSUFFICIENT_HISTORY' },
      operationEffect: { status: hasHistory ? 'OK' : 'INSUFFICIENT_HISTORY' },
      strategyEffect: { status: 'INSUFFICIENT_HISTORY' },
      validatedAt: exe.status === 'VALIDATED' ? TODAY : null
    });
  });

  const pendingOpps = regulatoryImprovementOpportunities.filter(o => o.status === 'PENDING_ANALYSIS').length;
  const highPriOpps = regulatoryImprovementOpportunities.filter(o => o.priority === 'HIGH' || o.priority === 'CRITICAL').length;
  const proposedPlans = regulatoryOptimizationPlans.filter(p => p.status === 'PROPOSED').length;
  const implementing = regulatoryImprovementExecution.filter(e => e.status === 'IMPLEMENTING').length;
  const pendingValidation = regulatoryImprovementExecution.filter(e => e.status === 'PENDING_VALIDATION').length;
  const validated = regulatoryImprovementEffectiveness.filter(e => e.effectiveness === 'EFFECTIVE' || e.effectiveness === 'PARTIALLY_EFFECTIVE').length;
  const totalExec = regulatoryImprovementExecution.length || 1;
  const closedLoop = regulatoryImprovementExecution.filter(e => ['VALIDATED', 'PENDING_VALIDATION'].includes(e.status)).length;

  APP_DATA.regulatoryImprovementOpportunities = regulatoryImprovementOpportunities;
  APP_DATA.regulatoryRootCauseAnalyses = regulatoryRootCauseAnalyses;
  APP_DATA.regulatoryOptimizationPlans = regulatoryOptimizationPlans;
  APP_DATA.regulatoryImprovementExecution = regulatoryImprovementExecution;
  APP_DATA.regulatoryImprovementEffectiveness = regulatoryImprovementEffectiveness;
  APP_DATA.regulatoryContinuousImprovementMetrics = {
    pendingOpportunityCount: pendingOpps,
    highPriorityOpportunityCount: highPriOpps,
    pendingRootCauseConfirmationCount: regulatoryRootCauseAnalyses.filter(r => r.rootCauseStatus === 'POTENTIAL_ROOT_CAUSE').length,
    pendingPlanDecisionCount: proposedPlans,
    implementingCount: implementing,
    pendingValidationCount: pendingValidation,
    validatedEffectiveCount: validated,
    improvementClosureRate: Math.round(closedLoop / totalExec * 1000) / 10,
    improvementEffectivenessRate: regulatoryImprovementEffectiveness.length ? Math.round(validated / regulatoryImprovementEffectiveness.length * 1000) / 10 : null,
    trendDataStatus: 'INSUFFICIENT_HISTORY'
  };

  let srSeq2 = (APP_DATA.regulatorySearchIndex || []).length + 1;
  const addSearch2 = (item) => {
    (APP_DATA.regulatorySearchIndex = APP_DATA.regulatorySearchIndex || []).push({
      resultId: 'SR-' + String(srSeq2++).padStart(4, '0'),
      objectType: item.objectType,
      objectId: item.objectId,
      title: item.title,
      subtitle: item.subtitle || '',
      entityId: item.entityId || null,
      domainId: item.domainId || null,
      priority: item.priority || null,
      status: item.status || null,
      matchedFields: ['title'],
      targetPageId: item.targetPageId,
      targetParams: item.targetParams || {},
      category: item.category || '持续改进'
    });
  };

  regulatoryImprovementOpportunities.slice(0, 15).forEach(o => addSearch2({ objectType: 'IMPROVEMENT_OPPORTUNITY', objectId: o.opportunityId, title: o.title, subtitle: o.sourceCategory, targetPageId: 'regulatory-improvement-center', targetParams: { opportunityId: o.opportunityId }, entityId: o.entityId, priority: o.priority, status: o.status }));
  regulatoryRootCauseAnalyses.slice(0, 10).forEach(r => addSearch2({ objectType: 'ROOT_CAUSE_ANALYSIS', objectId: r.rootCauseId, title: '根因分析 · ' + r.rootCauseCategory, subtitle: r.rootCauseStatus, targetPageId: 'regulatory-root-cause-analysis', targetParams: { rootCauseId: r.rootCauseId } }));
  regulatoryOptimizationPlans.slice(0, 10).forEach(p => addSearch2({ objectType: 'OPTIMIZATION_PLAN', objectId: p.planId, title: p.title, subtitle: p.optimizationType, targetPageId: 'regulatory-optimization-plans', targetParams: { planId: p.planId }, entityId: p.entityId, status: p.status }));
  regulatoryImprovementExecution.slice(0, 8).forEach(e => addSearch2({ objectType: 'IMPROVEMENT_EXECUTION', objectId: e.executionId, title: '改进实施 · ' + e.executionId, subtitle: e.status, targetPageId: 'regulatory-improvement-execution', targetParams: { executionId: e.executionId }, entityId: e.entityId, status: e.status }));
  regulatoryImprovementEffectiveness.forEach(e => addSearch2({ objectType: 'IMPROVEMENT_EFFECTIVENESS', objectId: e.effectivenessId, title: '效果验证 · ' + e.effectivenessId, subtitle: e.effectiveness, targetPageId: 'regulatory-improvement-effectiveness', targetParams: { effectivenessId: e.effectivenessId }, status: e.effectiveness }));

  const phase21Perms = [
    { permissionSetId: 'PS-041', permissionCode: 'IMPROVEMENT_VIEW', resourceType: 'regulatoryImprovementOpportunities', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-042', permissionCode: 'ROOT_CAUSE_VIEW', resourceType: 'regulatoryRootCauseAnalyses', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-043', permissionCode: 'ROOT_CAUSE_CONFIRM', resourceType: 'regulatoryRootCauseAnalyses', action: 'CONFIRM', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-044', permissionCode: 'OPTIMIZATION_PLAN_VIEW', resourceType: 'regulatoryOptimizationPlans', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-045', permissionCode: 'OPTIMIZATION_PLAN_APPROVE', resourceType: 'regulatoryOptimizationPlans', action: 'APPROVE', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-046', permissionCode: 'IMPROVEMENT_EXECUTION_VIEW', resourceType: 'regulatoryImprovementExecution', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-047', permissionCode: 'IMPROVEMENT_EXECUTION_MANAGE', resourceType: 'regulatoryImprovementExecution', action: 'MANAGE', riskLevel: 'HIGH' },
    { permissionSetId: 'PS-048', permissionCode: 'EFFECTIVENESS_VIEW', resourceType: 'regulatoryImprovementEffectiveness', action: 'VIEW', riskLevel: 'LOW' },
    { permissionSetId: 'PS-049', permissionCode: 'EFFECTIVENESS_VALIDATE', resourceType: 'regulatoryImprovementEffectiveness', action: 'VALIDATE', riskLevel: 'HIGH' }
  ];
  APP_DATA.regulatoryPermissionSets = [...(APP_DATA.regulatoryPermissionSets || []), ...phase21Perms];
  const rpm4 = APP_DATA.regulatoryRolePermissionMap || {};
  rpm4['ROLE-GROUP-LEADER'] = [...new Set([...(rpm4['ROLE-GROUP-LEADER'] || []), 'IMPROVEMENT_VIEW', 'OPTIMIZATION_PLAN_VIEW', 'EFFECTIVENESS_VIEW'])];
  rpm4['ROLE-GROUP-REG'] = [...new Set([...(rpm4['ROLE-GROUP-REG'] || []), 'IMPROVEMENT_VIEW', 'ROOT_CAUSE_VIEW', 'ROOT_CAUSE_CONFIRM', 'OPTIMIZATION_PLAN_VIEW', 'OPTIMIZATION_PLAN_APPROVE', 'IMPROVEMENT_EXECUTION_VIEW', 'IMPROVEMENT_EXECUTION_MANAGE', 'EFFECTIVENESS_VIEW', 'EFFECTIVENESS_VALIDATE'])];
  rpm4['ROLE-DOMAIN-REG'] = [...new Set([...(rpm4['ROLE-DOMAIN-REG'] || []), 'IMPROVEMENT_VIEW', 'ROOT_CAUSE_VIEW', 'OPTIMIZATION_PLAN_VIEW', 'IMPROVEMENT_EXECUTION_VIEW', 'EFFECTIVENESS_VIEW'])];
  rpm4['ROLE-ENTITY-REG'] = [...new Set([...(rpm4['ROLE-ENTITY-REG'] || []), 'IMPROVEMENT_VIEW', 'ROOT_CAUSE_VIEW', 'OPTIMIZATION_PLAN_VIEW', 'IMPROVEMENT_EXECUTION_VIEW', 'EFFECTIVENESS_VIEW'])];
  APP_DATA.regulatoryRolePermissionMap = rpm4;

  const sm2 = APP_DATA.regulatoryScopeMatrix || [];
  sm2.forEach(row => {
    if (row.roleId === 'ROLE-GROUP-LEADER' || row.roleId === 'ROLE-GROUP-REG') row.improvement = '全部';
    else if (row.roleId === 'ROLE-DOMAIN-REG') row.improvement = '本领域';
    else if (row.roleId === 'ROLE-ENTITY-REG') row.improvement = '本法人';
    else row.improvement = '查看';
  });
  APP_DATA.regulatoryScopeMatrix = sm2;
})();

(function () {
  const dataGov = APP_DATA.regulatoryDataGovernanceMetrics || {};
  const km = APP_DATA.regulatoryMetricKriMetrics || {};
  const execM = APP_DATA.regulatoryRuleExecutionMetrics || {};
  const perfS = APP_DATA.regulatoryPerformanceSummary || {};
  const cm = APP_DATA.regulatoryContinuousImprovementMetrics || {};
  const am = APP_DATA.regulatoryAnalysisMetrics || {};
  const hasHistory = dataGov.qualityTrendStatus !== 'INSUFFICIENT_HISTORY' && cm.trendDataStatus !== 'INSUFFICIENT_HISTORY';

  const scoreOrNull = (v) => (v != null && !Number.isNaN(v) ? Math.round(v) : null);
  const healthFrom = (score, insufficient) => {
    if (insufficient) return { healthStatus: 'INSUFFICIENT_HISTORY', score: null };
    if (score == null) return { healthStatus: 'WARNING', score: null };
    if (score >= 80) return { healthStatus: 'HEALTHY', score };
    if (score >= 60) return { healthStatus: 'WARNING', score };
    return { healthStatus: 'CRITICAL', score };
  };

  const insufficientData = dataGov.qualityTrendStatus === 'INSUFFICIENT_HISTORY';
  const dataHealth = healthFrom(dataGov.overallQualityScore, insufficientData);
  const ruleHealth = healthFrom(execM.executionSuccessRate, false);
  const kriHealth = healthFrom(km.avgCredibility, km.insufficientDataKriCount > km.kriCount / 2);
  const warningHealth = healthFrom(100 - (km.pendingReviewCount || 0) * 5, false);
  const actionHealth = healthFrom(perfS.regulatoryEffectivenessScore, false);
  const rectHealth = healthFrom(Math.round((perfS.rectificationClosureRate || 0) * 100), false);
  const decisionHealth = healthFrom(100 - (am.pendingRecommendationCount || 0) * 3, false);
  const improvementHealth = healthFrom(cm.improvementClosureRate, cm.trendDataStatus === 'INSUFFICIENT_HISTORY');

  const dimensions = { dataHealth, ruleHealth, kriHealth, warningHealth, actionHealth, rectificationHealth: rectHealth, decisionHealth, improvementHealth };
  const scored = Object.values(dimensions).filter(d => d.score != null);
  const avgScore = scored.length ? Math.round(scored.reduce((s, d) => s + d.score, 0) / scored.length) : null;
  const anyInsufficient = Object.values(dimensions).some(d => d.healthStatus === 'INSUFFICIENT_HISTORY');

  APP_DATA.platformHealth = {
    healthStatus: anyInsufficient && !avgScore ? 'INSUFFICIENT_HISTORY' : healthFrom(avgScore, anyInsufficient && avgScore == null).healthStatus,
    compositeScore: avgScore,
    hasSufficientHistory: hasHistory,
    dimensions,
    calculatedAt: '2026-07-22T10:00:00',
    note: anyInsufficient ? '部分维度历史数据不足，健康度仅供参考' : '集团监管平台运行健康度'
  };

  APP_DATA.regulatoryClosureChains = [
    { chainId: 'CHAIN-DATA', name: '数据质量驱动监管', steps: ['regulatory-data-sources', 'regulatory-data-quality', 'regulatory-kri-monitoring', 'regulatory-warning-center', 'regulatory-analysis-center', 'regulatory-actions', 'rectification', 'regulatory-action-execution'] },
    { chainId: 'CHAIN-RULE', name: '规则治理', steps: ['regulatory-rule-approvals', 'regulatory-simulation', 'regulatory-rule-impact', 'regulatory-rule-approvals', 'regulatory-rule-deployments', 'regulatory-rule-runtime', 'regulatory-rule-effectiveness'] },
    { chainId: 'CHAIN-RISK', name: '重大风险监管', steps: ['global-legal-entities', 'regulatory-risk-concentration', 'regulatory-risk-propagation', 'regulatory-warning-center', 'regulatory-decision-recommendations', 'regulatory-actions'] },
    { chainId: 'CHAIN-RESOURCE', name: '监管资源调度', steps: ['warnings', 'regulatory-resource-allocation', 'regulatory-supervision-tasks', 'rectification', 'regulatory-performance'] },
    { chainId: 'CHAIN-STRATEGY', name: '战略执行', steps: ['regulatory-strategy-planning', 'regulatory-focus-management', 'regulatory-annual-plan', 'regulatory-plan-execution', 'regulatory-strategic-review'] },
    { chainId: 'CHAIN-IMPROVE', name: '持续改进', steps: ['regulatory-performance', 'regulatory-improvement-center', 'regulatory-root-cause-analysis', 'regulatory-optimization-plans', 'regulatory-improvement-execution', 'regulatory-improvement-effectiveness'] },
    { chainId: 'CHAIN-PERM', name: '权限审计', steps: ['regulatory-access-control', 'regulatory-role-workbench', 'regulatory-authorization', 'regulatory-audit-trail'] },
    { chainId: 'CHAIN-LEADER', name: '集团领导决策', steps: ['global-group-overview', 'regulatory-analysis-center', 'warnings', 'regulatory-decision-recommendations', 'regulatory-resource-allocation', 'regulatory-strategic-review'] }
  ];

  APP_DATA.regulatoryRolePaths = [
    { roleId: 'ROLE-GROUP-LEADER', roleName: '集团领导', roleType: 'GROUP_LEADER', path: ['global-group-overview', 'regulatory-analysis-center', 'regulatory-risk-concentration', 'global-legal-entities', 'regulatory-kri-monitoring', 'regulatory-warning-center', 'warnings', 'regulatory-decision-recommendations', 'regulatory-actions', 'regulatory-resource-allocation', 'regulatory-strategic-review'] },
    { roleId: 'ROLE-GROUP-REG', roleName: '集团监管部门', roleType: 'GROUP_REGULATORY', path: ['regulatory-role-workbench', 'regulatory-workbench', 'regulatory-queue', 'warnings', 'regulatory-actions', 'regulatory-supervision-tasks', 'rectification', 'regulatory-action-execution', 'regulatory-performance'] },
    { roleId: 'ROLE-DOMAIN-REG', roleName: '专业领域监管', roleType: 'DOMAIN_REGULATOR', path: ['regulatory-role-workbench', 'regulatory-metric-center', 'regulatory-kri-monitoring', 'regulatory-data-quality', 'regulatory-warning-center', 'regulatory-analysis-center', 'regulatory-strategy', 'regulatory-actions', 'regulatory-rule-effectiveness'] },
    { roleId: 'ROLE-ENTITY-REG', roleName: '法人监管', roleType: 'ENTITY_REGULATOR', path: ['regulatory-role-workbench', 'regulatory-my-work', 'regulatory-warning-center', 'regulatory-data-quality', 'regulatory-data-governance', 'regulatory-kri-monitoring', 'rectification', 'regulatory-action-execution'] }
  ];

  APP_DATA.regulatoryBusinessScenarios = [
    { scenarioId: 'BS-01', name: '集团领导发现重大风险', roleType: 'GROUP_LEADER', pagePath: ['global-group-overview', 'regulatory-analysis-center', 'regulatory-risk-concentration', 'global-legal-entities', 'regulatory-kri-monitoring', 'regulatory-warning-center', 'warnings', 'regulatory-decision-recommendations', 'regulatory-actions', 'regulatory-resource-allocation', 'regulatory-strategic-review'] },
    { scenarioId: 'BS-02', name: '集团监管部门处理高优先级事项', roleType: 'GROUP_REGULATORY', pagePath: ['regulatory-role-workbench', 'regulatory-workbench', 'regulatory-queue', 'warnings', 'regulatory-actions', 'regulatory-supervision-tasks', 'rectification', 'regulatory-action-execution', 'regulatory-performance'] },
    { scenarioId: 'BS-03', name: '专业领域监管发现指标异常', roleType: 'DOMAIN_REGULATOR', pagePath: ['regulatory-role-workbench', 'regulatory-metric-center', 'regulatory-kri-monitoring', 'regulatory-data-quality', 'regulatory-warning-center', 'regulatory-analysis-center', 'regulatory-strategy', 'regulatory-actions', 'regulatory-rule-effectiveness'] },
    { scenarioId: 'BS-04', name: '法人监管处理本单位问题', roleType: 'ENTITY_REGULATOR', pagePath: ['regulatory-role-workbench', 'regulatory-my-work', 'regulatory-warning-center', 'regulatory-data-quality', 'regulatory-data-governance', 'regulatory-kri-monitoring', 'rectification', 'regulatory-action-execution'] },
    { scenarioId: 'BS-05', name: '监管规则变更', roleType: 'GROUP_REGULATORY', pagePath: ['regulatory-rule-approvals', 'regulatory-simulation', 'regulatory-rule-impact', 'regulatory-rule-approvals', 'regulatory-rule-versions', 'regulatory-rule-deployments', 'regulatory-rule-executions', 'regulatory-rule-runtime', 'regulatory-rule-effectiveness', 'regulatory-improvement-center'] },
    { scenarioId: 'BS-06', name: '数据质量异常影响监管', roleType: 'GROUP_REGULATORY', pagePath: ['regulatory-data-sources', 'regulatory-data-integration', 'regulatory-data-quality', 'regulatory-data-lineage', 'regulatory-kri-monitoring', 'regulatory-warning-center', 'regulatory-data-governance', 'rectification', 'regulatory-data-quality'] },
    { scenarioId: 'BS-07', name: '监管效果不佳持续改进', roleType: 'GROUP_REGULATORY', pagePath: ['regulatory-performance', 'regulatory-improvement-center', 'regulatory-root-cause-analysis', 'regulatory-optimization-plans', 'regulatory-authorization', 'regulatory-improvement-execution', 'regulatory-improvement-effectiveness', 'regulatory-improvement-center'] },
    { scenarioId: 'BS-08', name: '高风险操作权限控制', roleType: 'GROUP_REGULATORY', pagePath: ['regulatory-access-control', 'regulatory-role-workbench', 'regulatory-authorization', 'regulatory-audit-trail'] }
  ];
})();

(function () {
  const TODAY = '2026-07-22';
  const domains = APP_DATA.regulationDomains || [];
  const sources = APP_DATA.regulatoryDataSources || [];
  const dataSets = APP_DATA.regulatoryDataSets || [];
  const kris = APP_DATA.groupKris || [];
  const rules = APP_DATA.regulatoryRules || [];
  const lineage = APP_DATA.regulatoryDataLineage || [];
  const registry = APP_DATA.dataSourceRegistry || [];
  const objects = APP_DATA.dataObjects || [];
  const fields = APP_DATA.dataFields || [];
  const indicators = APP_DATA.dataIndicators || [];

  const domainSourceMap = {
    investment: ['SRC001'], finance: ['SRC002', 'SRC005'], contract: ['SRC003'],
    supply: ['SRC004'], overseas: ['SRC007'], engineering: ['SRC006']
  };

  APP_DATA.regulatoryDomainConfigurations = domains.map(dom => {
    const linkedSources = sources.filter(s => (s.businessDomains || []).some(bd => {
      const m = { '投资管理': 'investment', '财务': 'finance', '合同': 'contract', '工程': 'engineering', '供应链': 'supply', '境外': 'overseas' };
      return m[bd] === dom.id || bd === dom.name;
    }) || (domainSourceMap[dom.id] || []).includes(s.sourceId));
    const linkedKris = kris.filter(k => (k.domain || k.businessDomain || '').includes(dom.id) || (k.name || '').includes(dom.name.slice(0, 2)));
    const linkedRules = rules.filter(r => (r.domainId || r.businessDomain) === dom.id).slice(0, 5);
    const dsIds = linkedSources.flatMap(s => dataSets.filter(d => d.sourceId === s.sourceId).map(d => d.dataSetId));
    const openIssues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => dsIds.includes(i.dataSetId) && i.status !== 'CLOSED').length;
    return {
      domainId: dom.id,
      domainName: dom.name,
      description: dom.desc,
      status: dom.active !== false ? 'ACTIVE' : 'INACTIVE',
      linkedSourceIds: linkedSources.map(s => s.sourceId),
      linkedDataSetIds: dsIds,
      linkedKriIds: linkedKris.map(k => k.id),
      linkedRuleIds: linkedRules.map(r => r.ruleId),
      responsibleOrganizationId: linkedSources[0]?.ownerOrganizationId || 'G001',
      openQualityIssueCount: openIssues,
      adaptationStatus: openIssues > 0 ? 'ATTENTION' : linkedSources.some(s => s.connectionStatus !== 'ONLINE') ? 'DEGRADED' : 'HEALTHY',
      requiresHumanDecision: false
    };
  });

  const regulatoryBusinessObjectMappings = [];
  let mapSeq = 1;
  registry.forEach(src => {
    const objList = objects.filter(o => o.sourceId === src.sourceId);
    objList.forEach(obj => {
      regulatoryBusinessObjectMappings.push({
        mappingId: 'MAP-' + String(mapSeq++).padStart(4, '0'),
        sourceId: src.sourceId,
        sourceSystem: src.systemName,
        sourceObjectType: 'dataObjects',
        sourceObjectId: obj.objectId,
        targetObjectType: 'regulatoryDataSets',
        targetObjectId: obj.objectId,
        domainId: { '投资管理': 'investment', '财务管理': 'finance', '合同管理': 'contract', '工程项目': 'engineering', '供应链管理': 'supply', '境外业务': 'overseas' }[obj.businessDomain] || obj.businessDomain,
        entityId: obj.entityId,
        fieldMappings: fields.filter(f => f.objectId === obj.objectId).slice(0, 6).map(f => ({
          sourceFieldId: f.fieldId,
          sourceFieldName: f.fieldName,
          targetFieldId: f.fieldId,
          standardCode: f.standardCode || f.fieldName,
          transformRule: 'DIRECT_MAP'
        })),
        mappingStatus: 'ACTIVE',
        legacyRef: obj.objectId
      });
    });
  });

  indicators.slice(0, 20).forEach(ind => {
    const rel = lineage.find(l => l.targetId === ind.indicatorId || l.sourceId === ind.sourceObject);
    regulatoryBusinessObjectMappings.push({
      mappingId: 'MAP-' + String(mapSeq++).padStart(4, '0'),
      sourceId: rel ? rel.sourceId : null,
      sourceObjectType: 'dataIndicators',
      sourceObjectId: ind.indicatorId,
      targetObjectType: 'regulatoryMetrics',
      targetObjectId: ind.indicatorId,
      domainId: ind.businessDomain,
      entityId: ind.entityId,
      fieldMappings: [{ sourceFieldName: ind.indicatorName, targetFieldId: 'metricValue', transformRule: 'METRIC_AGGREGATE' }],
      mappingStatus: 'ACTIVE',
      legacyRef: ind.indicatorId
    });
  });

  const regulatoryDataAdaptationRuns = sources.map(src => {
    const jobs = (APP_DATA.regulatoryDataIntegrationJobs || []).filter(j => j.sourceId === src.sourceId);
    const mappings = regulatoryBusinessObjectMappings.filter(m => m.sourceId === src.sourceId);
    const impact = { kri: 0, warning: 0, action: 0, rect: 0 };
    const dsIds = dataSets.filter(d => d.sourceId === src.sourceId).map(d => d.dataSetId);
    const issues = (APP_DATA.regulatoryDataQualityIssues || []).filter(i => dsIds.includes(i.dataSetId));
    const kriIds = [...new Set(issues.map(i => i.kriId).filter(Boolean))];
    impact.kri = kriIds.length;
    impact.warning = (APP_DATA.regulatoryWarnings || []).filter(w => kriIds.includes(w.kriId)).length;
    impact.action = (APP_DATA.regulatoryActions || []).filter(a => (a.sourceKriIds || []).some(id => kriIds.includes(id))).length;
    impact.rect = (APP_DATA.rectificationTasks || []).filter(t => issues.some(i => i.relatedRectificationTaskId === t.taskId || t.riskMatterId)).length;
    const pipelineSteps = [
      { step: 'SOURCE_ADAPT', status: 'COMPLETED', objectRef: src.sourceId },
      { step: 'INTEGRATION', status: jobs.every(j => j.status === 'SUCCESS') ? 'COMPLETED' : jobs.some(j => j.status === 'FAILED') ? 'FAILED' : 'PARTIAL', objectRef: jobs[0]?.integrationJobId },
      { step: 'QUALITY_VALIDATE', status: issues.length ? (issues.some(i => i.severity === 'HIGH') ? 'ATTENTION' : 'COMPLETED') : 'COMPLETED', objectRef: issues[0]?.qualityIssueId },
      { step: 'STANDARDIZE', status: mappings.length ? 'COMPLETED' : 'PENDING', objectRef: mappings[0]?.mappingId },
      { step: 'OBJECT_MAP', status: mappings.length ? 'COMPLETED' : 'PENDING', objectRef: mappings[0]?.mappingId },
      { step: 'KRI_COMPUTE', status: kriIds.length ? 'COMPLETED' : 'INSUFFICIENT_DATA', objectRef: kriIds[0] },
      { step: 'WARNING_IDENTIFY', status: impact.warning ? 'COMPLETED' : 'INSUFFICIENT_DATA', objectRef: null },
      { step: 'RISK_ASSESS', status: (APP_DATA.warnings || []).some(w => kriIds.some(k => w.kriId === k)) ? 'COMPLETED' : 'INSUFFICIENT_DATA', objectRef: null },
      { step: 'ACTION_LINK', status: impact.action ? 'COMPLETED' : 'PENDING', objectRef: null },
      { step: 'RECTIFICATION_LINK', status: impact.rect ? 'COMPLETED' : 'PENDING', objectRef: null },
      { step: 'VERIFICATION', status: (APP_DATA.regulatoryActions || []).some(a => a.status === 'VERIFIED') ? 'COMPLETED' : 'PENDING', objectRef: null },
      { step: 'PERFORMANCE', status: (APP_DATA.regulatoryPerformanceMetrics || []).length ? 'COMPLETED' : 'INSUFFICIENT_HISTORY', objectRef: null },
      { step: 'IMPROVEMENT', status: (APP_DATA.regulatoryImprovementOpportunities || []).some(o => o.sourceType === 'regulatoryDataQualityIssues') ? 'COMPLETED' : 'PENDING', objectRef: null }
    ];
    const completed = pipelineSteps.filter(s => s.status === 'COMPLETED').length;
    return {
      adaptationRunId: 'ADAPT-' + src.sourceId,
      sourceId: src.sourceId,
      domainIds: [...new Set(mappings.map(m => m.domainId).filter(Boolean))],
      pipelineSteps,
      closureRate: Math.round(completed / pipelineSteps.length * 1000) / 10,
      drivesClosedLoop: completed >= 8,
      impactedKriCount: impact.kri,
      impactedWarningCount: impact.warning,
      impactedActionCount: impact.action,
      impactedRectificationCount: impact.rect,
      dataStatus: pipelineSteps.some(s => s.status === 'INSUFFICIENT_DATA' || s.status === 'INSUFFICIENT_HISTORY') ? 'INSUFFICIENT_HISTORY' : 'OK',
      lastAdaptedAt: TODAY + ' 09:00:00'
    };
  });

  APP_DATA.regulatoryBusinessObjectMappings = regulatoryBusinessObjectMappings;
  APP_DATA.regulatoryDataAdaptationRuns = regulatoryDataAdaptationRuns;
  APP_DATA.regulatoryDataAdaptationMetrics = {
    configuredDomainCount: APP_DATA.regulatoryDomainConfigurations.length,
    activeMappingCount: regulatoryBusinessObjectMappings.filter(m => m.mappingStatus === 'ACTIVE').length,
    adaptationRunCount: regulatoryDataAdaptationRuns.length,
    closedLoopSourceCount: regulatoryDataAdaptationRuns.filter(r => r.drivesClosedLoop).length,
    avgClosureRate: regulatoryDataAdaptationRuns.length ? Math.round(regulatoryDataAdaptationRuns.reduce((s, r) => s + r.closureRate, 0) / regulatoryDataAdaptationRuns.length * 10) / 10 : null,
    insufficientHistoryCount: regulatoryDataAdaptationRuns.filter(r => r.dataStatus === 'INSUFFICIENT_HISTORY').length,
    trendDataStatus: 'INSUFFICIENT_HISTORY'
  };

  let srSeq3 = (APP_DATA.regulatorySearchIndex || []).length + 1;
  APP_DATA.regulatoryDomainConfigurations.slice(0, 9).forEach(c => {
    (APP_DATA.regulatorySearchIndex = APP_DATA.regulatorySearchIndex || []).push({
      resultId: 'SR-' + String(srSeq3++).padStart(4, '0'),
      objectType: 'DOMAIN_CONFIG',
      objectId: c.domainId,
      title: '监管领域 · ' + c.domainName,
      subtitle: c.adaptationStatus,
      targetPageId: 'regulatory-data-governance',
      targetParams: { domainId: c.domainId },
      category: '数据适配'
    });
  });
})();

(function () {
  APP_DATA.regulatoryBatchAdaptationScenarios = [
    { scenarioId: 'BA-01', name: '集团批量适配', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-data-governance', pagePath: ['regulatory-data-governance', 'regulatory-data-integration', 'regulatory-data-sources', 'regulatory-kri-monitoring', 'regulatory-warning-center', 'regulatory-actions'], steps: ['选择全部领域', '执行 FULL 批量适配', '查看运行记录', '验证领域覆盖率', '穿透闭环链路'], expectedResult: '9 大领域批量运行记录可追溯', dataChain: 'regulatoryDomainConfigurations → regulatoryBatchAdaptationRuns → regulatoryDomainAdaptationResults', permissionRequired: 'DATA_MANAGE' },
    { scenarioId: 'BA-02', name: '单领域适配', roleType: 'DOMAIN_REGULATOR', startPage: 'regulatory-data-governance', pagePath: ['regulatory-data-governance', 'regulatory-data-sources', 'regulatory-kri-monitoring'], steps: ['选择单领域', '执行 INCREMENTAL', '查看领域适配结果'], expectedResult: '单领域适配状态与成熟度更新', dataChain: 'domainId → sourceIds → mappings → KRIs', permissionRequired: 'DATA_VIEW' },
    { scenarioId: 'BA-03', name: '单数据源重试', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-data-integration', pagePath: ['regulatory-data-integration', 'regulatory-data-sources', 'regulatory-data-quality'], steps: ['定位失败数据源', 'RETRY_FAILED', '验证重试结果'], expectedResult: '失败步骤可重试且状态更新', dataChain: 'sourceId → failureStep → retry → audit', permissionRequired: 'DATA_MANAGE' },
    { scenarioId: 'BA-04', name: '数据质量阻断', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-data-quality', pagePath: ['regulatory-data-quality', 'regulatory-kri-monitoring', 'regulatory-warning-center'], steps: ['识别 QUALITY_FAILED', '验证 KRI 可信度下降', '确认 DATA_QUALITY_REVIEW_REQUIRED'], expectedResult: '质量失败不生成可信预警', dataChain: 'qualityIssue → KRI credibility → warning block', permissionRequired: 'DATA_VIEW' },
    { scenarioId: 'BA-05', name: '多领域闭环验证', roleType: 'GROUP_LEADER', startPage: 'regulatory-data-governance', pagePath: ['regulatory-data-governance', 'regulatory-kri-monitoring', 'regulatory-warning-center', 'regulatory-actions', 'rectification', 'regulatory-performance', 'regulatory-improvement-center'], steps: ['筛选 FULL_CLOSED_LOOP 领域', '穿透 KRI→预警→行动→整改', '验证至少 3 领域'], expectedResult: '多领域真实数据闭环可验证', dataChain: 'domain → KRI → warning → action → rectification → performance', permissionRequired: 'DATA_VIEW' },
    { scenarioId: 'BA-06', name: '适配失败追溯', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-data-integration', pagePath: ['regulatory-data-integration', 'regulatory-audit-trail'], steps: ['查看失败记录', '定位 failureStep', '审计日志穿透'], expectedResult: '失败步骤、原因、时间可追溯', dataChain: 'regulatoryBatchAdaptationFailures → audit', permissionRequired: 'DATA_VIEW' }
  ];
  APP_DATA.regulatoryDomainAdaptationResults = APP_DATA.regulatoryDomainAdaptationResults || [];
  APP_DATA.regulatoryBatchAdaptationRuns = APP_DATA.regulatoryBatchAdaptationRuns || [];
  APP_DATA.regulatoryBatchAdaptationFailures = APP_DATA.regulatoryBatchAdaptationFailures || [];
  APP_DATA.regulatoryBatchAdaptationMetrics = APP_DATA.regulatoryBatchAdaptationMetrics || {};
})();

(function () {
  APP_DATA.regulatoryDomainClosureScenarios = [
    { scenarioId: 'DC-01', name: '领域数据缺口识别', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-data-governance', pagePath: ['regulatory-data-governance', 'regulatory-analysis-center'], steps: ['查看9大领域', '识别数据缺口', '查看缺口证据'], expectedResult: '缺口动态生成且可追踪', dataChain: 'regulatoryDomainDataGaps → regulatoryDomainAdaptationResults' },
    { scenarioId: 'DC-02', name: '财务领域闭环提升', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-data-governance', pagePath: ['regulatory-data-governance', 'regulatory-kri-monitoring', 'regulatory-warning-center', 'regulatory-actions', 'rectification'], steps: ['财务领域成熟度', '识别验证缺口', '查看提升计划'], expectedResult: 'PARTIAL→FULL 仅当真实数据支持', dataChain: 'finance → gaps → closurePlan' },
    { scenarioId: 'DC-03', name: '境外领域数据补齐', roleType: 'DOMAIN_REGULATOR', startPage: 'regulatory-data-governance', pagePath: ['regulatory-data-sources', 'regulatory-data-integration', 'regulatory-data-governance'], steps: ['境外数据源', 'INSUFFICIENT_REAL_DATA', '补齐计划'], expectedResult: '不伪造境外数据', dataChain: 'overseas → gaps → plan' },
    { scenarioId: 'DC-04', name: 'KRI缺口识别', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-kri-monitoring', pagePath: ['regulatory-kri-monitoring', 'regulatory-data-quality', 'regulatory-data-governance'], steps: ['KRI清单', '可信度', 'NO_KRI缺口'], expectedResult: 'KRI缺口与质量关联', dataChain: 'kriIds → gaps' },
    { scenarioId: 'DC-05', name: '整改验证缺口', roleType: 'GROUP_REGULATORY', startPage: 'rectification', pagePath: ['rectification', 'regulatory-data-governance', 'regulatory-improvement-center'], steps: ['整改任务', '验证状态', 'NO_VERIFICATION_CHAIN'], expectedResult: '缺验证不标记完整闭环', dataChain: 'rects → verified → gaps' },
    { scenarioId: 'DC-06', name: '领域成熟度提升', roleType: 'GROUP_LEADER', startPage: 'regulatory-analysis-center', pagePath: ['regulatory-analysis-center', 'regulatory-data-governance', 'regulatory-improvement-center'], steps: ['成熟度', '闭环准备度', '优先级'], expectedResult: '成熟度与准备度动态计算', dataChain: 'maturity → readiness → priority' }
  ];
  APP_DATA.regulatoryDomainDataGaps = APP_DATA.regulatoryDomainDataGaps || [];
  APP_DATA.regulatoryDomainClosurePlans = APP_DATA.regulatoryDomainClosurePlans || [];
  APP_DATA.regulatoryDomainClosureMetrics = APP_DATA.regulatoryDomainClosureMetrics || {};
})();

(function () {
  APP_DATA.regulatoryClosureVerificationScenarios = [
    { scenarioId: 'CV-01', name: '财务整改验证缺口识别', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-data-governance', pagePath: ['regulatory-data-governance', 'rectification'], steps: ['财务领域闭环状态', '识别 NO_VERIFICATION_CHAIN', '查看整改任务 RECT-202601001'], expectedResult: '阻断原因明确为验证链缺失', dataChain: 'finance → gaps → rectificationTasks' },
    { scenarioId: 'CV-02', name: '验证证据提交', roleType: 'DOMAIN_REGULATOR', startPage: 'rectification', pagePath: ['rectification', 'regulatory-workbench'], steps: ['选择整改任务', '提交验证证据', '审计日志'], expectedResult: '证据状态 SUBMITTED，闭环仍为 PARTIAL', dataChain: 'rectificationTasks → regulatoryClosureVerificationEvidence → audit' },
    { scenarioId: 'CV-03', name: '验证证据人工审核', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-workbench', pagePath: ['regulatory-workbench', 'rectification'], steps: ['待人工验证队列', '审核证据', '记录验证人'], expectedResult: 'UNDER_REVIEW → VERIFIED/REJECTED', dataChain: 'evidence → verifyClosureEvidence → rectificationTasks' },
    { scenarioId: 'CV-04', name: '验证拒绝后重新整改', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-improvement-center', pagePath: ['regulatory-improvement-center', 'rectification'], steps: ['验证拒绝', '生成补充要求', '重新提交证据'], expectedResult: '保持 PARTIAL_CLOSED_LOOP', dataChain: 'REJECTED → supplementaryRequirement → improvement' },
    { scenarioId: 'CV-05', name: '验证通过后完整闭环', roleType: 'GROUP_LEADER', startPage: 'regulatory-data-governance', pagePath: ['regulatory-data-governance', 'regulatory-performance', 'regulatory-improvement-center'], steps: ['VERIFIED', '领域成熟度重算', 'FULL_CLOSED_LOOP'], expectedResult: '验证通过且条件满足时动态升级闭环', dataChain: 'verifiedCount → closedLoopStatus → maturity' },
    { scenarioId: 'CV-06', name: '闭环状态重新计算', roleType: 'GROUP_REGULATORY', startPage: 'regulatory-analysis-center', pagePath: ['regulatory-analysis-center', 'regulatory-data-governance'], steps: ['快照对比', '缺口关闭', '绩效重算'], expectedResult: '状态转换可追溯不伪造', dataChain: 'regulatoryDomainClosureSnapshots → metrics' }
  ];
  APP_DATA.regulatoryClosureVerificationEvidence = APP_DATA.regulatoryClosureVerificationEvidence || [];
  APP_DATA.regulatoryDomainClosureSnapshots = APP_DATA.regulatoryDomainClosureSnapshots || [];
  APP_DATA.regulatoryFinanceClosureVerificationIndex = APP_DATA.regulatoryFinanceClosureVerificationIndex || {
    domainId: 'finance',
    primaryRectificationTaskId: 'RECT-202601001',
    chainTrace: ['risk-2', 'kri-capex', 'regulatoryWarnings', 'regulatoryActions', 'RECT-202601001'],
    lastUpdatedAt: null
  };
  APP_DATA.regulatoryPermissionSets = [...(APP_DATA.regulatoryPermissionSets || []), 
    { permissionSetId: 'PS-CV-01', permissionCode: 'RECTIFICATION_SUBMIT', resourceType: 'rectificationTasks', action: 'SUBMIT', riskLevel: 'MEDIUM' },
    { permissionSetId: 'PS-CV-02', permissionCode: 'RECTIFICATION_VERIFY', resourceType: 'rectificationTasks', action: 'VERIFY', riskLevel: 'HIGH' }
  ];
  const rpmCv = APP_DATA.regulatoryRolePermissionMap || {};
  rpmCv['ROLE-GROUP-REG'] = [...new Set([...(rpmCv['ROLE-GROUP-REG'] || []), 'RECTIFICATION_SUBMIT', 'RECTIFICATION_VERIFY'])];
  rpmCv['ROLE-DOMAIN-REG'] = [...new Set([...(rpmCv['ROLE-DOMAIN-REG'] || []), 'RECTIFICATION_SUBMIT'])];
  rpmCv['ROLE-GROUP-LEADER'] = [...new Set([...(rpmCv['ROLE-GROUP-LEADER'] || []), 'RECTIFICATION_VERIFY'])];
  APP_DATA.regulatoryRolePermissionMap = rpmCv;
})();