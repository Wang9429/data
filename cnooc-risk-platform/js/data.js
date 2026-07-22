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
  { id: 'risk-1', name: '投资收益未达到预期风险', unit: 'A公司', project: '境外装备项目', indicator: '收益率下降35%', status: '红色', level: '重大' },
  { id: 'risk-2', name: '经营指标偏离风险', unit: 'B公司', project: '清洁能源项目', indicator: '利润完成率62%', status: '红色', level: '重大' },
  { id: 'risk-3', name: '重大事项报告滞后风险', unit: '某所属企业', project: 'XX产业项目', indicator: '超过5日未报送', status: '黄色', level: '较大' },
  { id: 'risk-4', name: '投资决策论证不足风险', unit: 'C公司', project: '产业升级项目', indicator: '可研报告缺失2项', status: '黄色', level: '较大' },
  { id: 'risk-5', name: '境外投资运营风险', unit: 'D公司', project: '境外合作项目', indicator: '运营亏损扩大', status: '黄色', level: '较大' },
  { id: 'risk-6', name: '投资方向偏离战略风险', unit: 'C公司', project: '战略投资项目', indicator: '主业匹配度偏低', status: '蓝色', level: '一般' },
  { id: 'risk-7', name: '交割条件落实不到位', unit: 'A公司', project: '装备制造项目', indicator: '2项条件未落实', status: '蓝色', level: '一般' },
  { id: 'risk-8', name: '股东权利行使不到位', unit: 'C公司', project: '产业协同项目', indicator: '股东大会未出席', status: '蓝色', level: '一般' }
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
  platformOperationSources: [
    ['投资管理系统','业务系统','A公司','境内/中国','投资管理','正常','正常','2026-07-22 08:00','日','98.6%','97.2%','96','集团投资管理部'],
    ['财务系统','业务系统','B公司','中东/中东某国','财务、投资','延迟','延迟','2026-07-21 22:00','日','94.2%','88.5%','89','区域财务部'],
    ['合同系统','业务系统','C项目公司','中东/中东某国','合同、工程','正常','正常','2026-07-22 07:30','实时','96.8%','98.1%','94','项目合同部'],
    ['经营分析系统','分析系统','D公司','亚洲/东南亚某国','投资、境外','异常','中断','2026-07-20 18:00','日','82.4%','71.2%','76','区域信息管理岗']
  ],
  platformOperationAlerts: [
    ['接口中断','高','经营分析系统','D公司','亚洲/东南亚某国','境外业务','2026-07-20 18:00','处理中','区域信息管理岗','2026-07-23','影响KRI更新'],
    ['数据同步延迟','中','财务系统','B公司','中东/中东某国','投资管理','2026-07-21 22:00','待处理','区域财务部','2026-07-24','预警延迟'],
    ['数据质量异常','中','项目管理系统','C项目公司','中东/中东某国','工程项目','2026-07-21 14:00','处理中','项目管理部','2026-07-25','指标准确性不足']
  ],
  platformOperationHistory: [
    ['07-16','94.2%','95.1%','97.1%','98.3%','96.4%','86.2%','72.1%'],['07-18','95.0%','95.8%','97.6%','98.5%','96.8%','87.1%','73.4%'],['07-20','96.1%','96.4%','98.0%','98.8%','97.2%','87.8%','75.0%'],['07-22','96.8%','97.1%','98.2%','99.1%','97.8%','88.4%','76.4%']
  ],
  coverageMetrics: [
    ['全级次法人覆盖率','96.8%','98.0%','+1.2%','4家'],['境外法人接入率','91.5%','95.0%','+2.4%','5家'],['项目接入率','94.2%','96.0%','+1.8%','18项'],['关键系统覆盖率','93.6%','95.0%','+3.1%','6个'],['数据源接入率','92.8%','95.0%','+2.6%','8个'],['指标覆盖率','89.4%','92.0%','+4.2%','14项'],['KRI覆盖率','87.6%','90.0%','+3.8%','18项'],['风险场景覆盖率','91.2%','93.0%','+2.1%','11项'],['控制规则覆盖率','86.5%','90.0%','+4.5%','16项'],['责任主体覆盖率','97.1%','98.0%','+0.9%','5项'],['整改闭环率','76.4%','80.0%','+2.6%','18项']
  ],
  coverageGaps: [
    { name:'C项目公司', type:'法人', region:'中东', country:'中东某国', parent:'B公司', domain:'境外/投资', status:'部分覆盖', gaps:'数据接入、KRI更新', impact:'经营风险无法持续监测', owner:'信息化管理部', rectification:'待整改' },
    { name:'某海外项目现场', type:'项目现场', region:'非洲', country:'非洲某国', parent:'D公司', domain:'工程/供应链', status:'数据异常', gaps:'接口同步、数据及时率', impact:'预警结果延迟', owner:'区域信息管理岗', rectification:'整改中' },
    { name:'某境外法人', type:'法人', region:'亚洲', country:'东南亚某国', parent:'A公司', domain:'合同/供应链', status:'未覆盖', gaps:'风险场景、控制规则', impact:'合同风险无法自动识别', owner:'业务管理部', rectification:'待建立' }
  ],
  globalRegions: [
    { regionId:'CN', regionName:'境内', regionType:'domestic', countryCount:1, legalEntityCount:86, projectCount:926, riskCount:32, highRiskCount:5, rectificationCount:14, dataCoverageRate:'98.6%', complianceStatus:'正常' },
    { regionId:'ME', regionName:'中东', regionType:'overseas', countryCount:4, legalEntityCount:12, projectCount:126, riskCount:18, highRiskCount:6, rectificationCount:8, dataCoverageRate:'92.1%', complianceStatus:'关注' },
    { regionId:'AS', regionName:'亚洲', regionType:'overseas', countryCount:6, legalEntityCount:10, projectCount:98, riskCount:12, highRiskCount:3, rectificationCount:5, dataCoverageRate:'94.8%', complianceStatus:'正常' },
    { regionId:'AF', regionName:'非洲', regionType:'overseas', countryCount:5, legalEntityCount:8, projectCount:76, riskCount:9, highRiskCount:2, rectificationCount:4, dataCoverageRate:'88.5%', complianceStatus:'关注' },
    { regionId:'EU', regionName:'欧洲及拉美', regionType:'overseas', countryCount:8, legalEntityCount:10, projectCount:60, riskCount:7, highRiskCount:1, rectificationCount:3, dataCoverageRate:'91.2%', complianceStatus:'正常' }
  ],
  globalCountries: [
    { countryId:'CN-CN', countryName:'中国', regionId:'CN', regionName:'境内', countryRiskLevel:'低', legalEntityCount:86, projectCount:926, businessDomains:'投资、财务、合同、工程', investmentAmount:'6,302亿元', riskCount:32, highRiskCount:5, kriExceptionCount:18, majorMatterCount:86, rectificationCount:14, dataCoverageRate:'98.6%', dataQualityStatus:'良好', crossBorderComplianceStatus:'不适用' },
    { countryId:'ME-A', countryName:'中东某国', regionId:'ME', regionName:'中东', countryRiskLevel:'高', legalEntityCount:6, projectCount:68, businessDomains:'境外、投资、工程', investmentAmount:'628亿元', riskCount:11, highRiskCount:4, kriExceptionCount:9, majorMatterCount:18, rectificationCount:5, dataCoverageRate:'91.4%', dataQualityStatus:'关注', crossBorderComplianceStatus:'待复核' },
    { countryId:'AS-A', countryName:'东南亚某国', regionId:'AS', regionName:'亚洲', countryRiskLevel:'中', legalEntityCount:5, projectCount:42, businessDomains:'投资、供应链、合同', investmentAmount:'386亿元', riskCount:6, highRiskCount:1, kriExceptionCount:4, majorMatterCount:9, rectificationCount:2, dataCoverageRate:'95.2%', dataQualityStatus:'良好', crossBorderComplianceStatus:'正常' }
  ],
  globalLegalEntities: [
    { entityId:'G001', entityName:'集团总部', parentEntityId:null, parentEntityName:'—', entityLevel:'集团', entityType:'总部', regionId:'CN', regionName:'境内', countryId:'CN-CN', countryName:'中国', city:'北京', businessDomains:'集团监管', projectCount:0, projectSiteCount:0, siteCount:0, riskCount:0, highRiskCount:0, kriExceptionCount:0, majorMatterCount:18, rectificationCount:6, openRectificationCount:6, dataAccessStatus:'已接入', dataQualityStatus:'良好', lastDataUpdateTime:'2026-07-22 08:00', responsibleDepartment:'集团数据治理部', crossBorderComplianceStatus:'统筹监管' },
    { entityId:'A001', entityName:'A公司', parentEntityId:'G001', entityLevel:'一级', entityType:'一级子企业', regionId:'CN', countryId:'CN-CN', city:'北京', businessDomains:'工程、装备、投资', projectCount:286, projectSiteCount:18, riskCount:20, highRiskCount:5, kriExceptionCount:12, rectificationCount:8, dataAccessStatus:'已接入', dataQualityStatus:'良好', crossBorderComplianceStatus:'不适用' },
    { entityId:'B001', entityName:'B公司', parentEntityId:'A001', entityLevel:'二级', entityType:'二级子企业', regionId:'ME', countryId:'ME-A', city:'某海外城市', businessDomains:'境外、清洁能源、投资', projectCount:186, projectSiteCount:12, riskCount:14, highRiskCount:4, kriExceptionCount:9, rectificationCount:6, dataAccessStatus:'部分接入', dataQualityStatus:'关注', crossBorderComplianceStatus:'待复核' },
    { entityId:'C001', entityName:'C项目公司', parentEntityId:'B001', entityLevel:'三级', entityType:'项目公司', regionId:'ME', countryId:'ME-A', city:'项目现场', businessDomains:'境外工程项目', projectCount:42, projectSiteCount:4, riskCount:6, highRiskCount:2, kriExceptionCount:4, rectificationCount:3, dataAccessStatus:'待完善', dataQualityStatus:'待提升', crossBorderComplianceStatus:'关注' }
  ],
  globalProjects: [
    { projectId:'GP001', projectName:'某境外能源项目', entityId:'C001', regionId:'ME', countryId:'ME-A', city:'项目现场', businessDomain:'投资管理', projectType:'境外投资', projectStatus:'投后运营', investmentAmount:'30亿元', riskCount:3, highRiskCount:1, kriExceptionCount:2, rectificationCount:1, dataAccessStatus:'部分接入' }
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
    { sourceId:'SRC007', systemName:'经营分析系统', systemType:'分析系统', ownerEntity:'D公司', entityId:'A001', regionId:'AS', regionName:'亚洲', countryId:'AS-A', countryName:'东南亚某国', businessDomains:['投资','境外'], deploymentLocation:'亚洲/东南亚某国', dataOwner:'区域信息管理岗', collectionMethod:'ETL', interfaceStatus:'异常', syncStatus:'中断', lastSyncTime:'2026-07-20 18:00', updateFrequency:'日', dataCompleteness:'82.4%', dataTimeliness:'71.2%', qualityScore:76, coverageStatus:'部分接入' }
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
    { id:'kri-approval', category:'合规准入类', name:'未批先实施暴露金额', value:'1.2亿元', status:'重大预警', scenario:'未按规定履行决策审批程序', formula:'有效投资批复完成前发生的采购、签约、付款、开工金额', threshold:'> 0 元', source:'投资管理、采购、合同、资金、项目系统', control:'阻断合同、付款或开工；升级审批', entities:'A公司、C公司' },
    { id:'kri-authority', category:'授权合规类', name:'授权边界超限金额', value:'0.36亿元', status:'较大预警', scenario:'超越授权审批', formula:'事项金额或累计金额 − 对应审批层级授权上限', threshold:'> 0 元', source:'授权矩阵、投资、合同、资金系统', control:'系统阻断并要求升级审批', entities:'B公司' },
    { id:'kri-post', category:'投后运营类', name:'投后经营异常命中项数', value:'6项', status:'重大预警', scenario:'经营异常未预警', formula:'收入、利润、现金流、订单、负债等触发异常的指标项数', threshold:'≥ 3 项', source:'投后、财务、订单、合规系统', control:'启动行权、减值测试或退出评估', entities:'A公司、B公司' },
    { id:'kri-capex', category:'固定资产投资类', name:'累计追加投资接近审批边界比例', value:'86%', status:'预警', scenario:'追加投资审批不规范', formula:'同项目累计追加投资金额 ÷ 原批复金额 × 100%', threshold:'≥ 80%', source:'投资批复、变更台账、合同、资金系统', control:'提示重新报批并升级审批', entities:'C公司' },
    { id:'kri-filing', category:'备案合规类', name:'未备案继续推进暴露金额', value:'0.48亿元', status:'较大预警', scenario:'应备案未备案', formula:'备案未完成期间新增合同、付款或实施金额', threshold:'> 0 元', source:'备案台账、合同、资金、项目实施资料', control:'补备案、重报或暂停推进', entities:'D公司' },
    { id:'kri-schedule', category:'固定资产投资类', name:'关键里程碑预测偏差天数', value:'45天', status:'预警', scenario:'关键里程碑严重拖期', formula:'预测完成日期 − 基线计划日期', threshold:'> 30 天', source:'项目计划、实际进度、项目月报', control:'触发纠偏、资源调整和投资方案复核', entities:'C公司、D公司' }
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
    { id: 'RECT-202601001', riskId: 'risk-2', title: '被投资企业经营持续下滑风险', company: 'A公司', owner: '投资管理部', level: 'L4', status: '整改执行', deadline: '2026-09-30', progress: 60, measure: '建立月度经营指标监测机制；完善董事履职报告机制。' },
    { id: 'RECT-202601002', riskId: 'risk-1', title: '投资收益未达到预期风险', company: 'B公司', owner: '投资管理部', level: 'L4', status: '整改制定', deadline: '2026-08-30', progress: 30, measure: '开展专项经营分析，制定收益提升方案。' },
    { id: 'RECT-202601003', riskId: 'risk-3', title: '重大事项报告不及时风险', company: 'C公司', owner: '投资管理部', level: 'L3', status: '整改验证', deadline: '2026-07-30', progress: 90, measure: '完善重大事项报告机制并验证执行效果。' },
    { id: 'RECT-202601004', riskId: 'risk-4', title: '投资决策论证不足风险', company: 'C公司', owner: '战略发展部', level: 'L3', status: '已关闭', deadline: '2026-05-20', progress: 100, measure: '补充可研报告并完成专家评审。' }
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
