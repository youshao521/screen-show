// 工厂安全环保管理
/**
 * 右侧模块
 */

export const monthlyPieData = [{
  name: '本月作业分析',
  data: [{
    name: '动火',
    value: 63
  },
  {
    name: '动土',
    value: 18
  },
  {
    name: '高处',
    value: 15
  },
  {
    name: '吊装',
    value: 4
  },
  ]
},
{
  name: '本月项目扣分票证分析',
  data: [{
    name: '作业现场',
    value: 63
  },
  {
    name: '票证填写',
    value: 33
  },
  {
    name: '一般安全要求',
    value: 4
  },
  ]
},
{
  name: '本月车间环保超标率',
  data: [{
    name: '中间体',
    value: 50
  },
  {
    name: '槽区',
    value: 41
  },
  {
    name: '30#车间',
    value: 9
  },
  ]
},
]

export const monthlyBarData = [{
  name: '作业数量分析(近1年)',
  date: ['2019.1','2019.2','2019.3','2019.4','2019.5','2019.6','2019.7','2019.8','2019.9','2019.10',
    '2019.11','2019.12'
  ],
  data: [{
    name: '炼化A车间',
    data: [20,20,20,20,20,70,20,20,20,20,50,80]
  },
  {
    name: '炼化B车间',
    data: [40,40,40,60,20,70,20,80,50,20,50,80]
  },
  {
    name: '炼化C车间',
    data: [40,60,60,60,60,70,20,20,90,60,50,80]
  },
  {
    name: '炼化D车间',
    data: [20,80,20,40,20,70,20,40,50,60,50,80]
  },
  ]
},
{
  name: '项目扣分票证分析(近1年)',
  date: ['2019.1','2019.2','2019.3','2019.4','2019.5','2019.6','2019.7','2019.8','2019.9','2019.10',
    '2019.11','2019.12'
  ],
  data: [{
    name: '炼化A车间',
    data: [20,20,20,20,20,70,20,20,20,20,50,80]
  },
  {
    name: '炼化B车间',
    data: [20,20,20,20,20,70,20,20,20,20,50,80]
  },
  {
    name: '炼化C车间',
    data: [20,20,20,20,20,70,20,20,20,20,50,80]
  },
  ]
},
{
  name: '环保超标率分析(近1年)',
  date: ['2019.1','2019.2','2019.3','2019.4','2019.5','2019.6','2019.7','2019.8','2019.9','2019.10',
    '2019.11','2019.12'
  ],
  data: [{
    name: '炼化A车间',
    data: [20,20,20,20,20,70,20,20,20,20,50,80]
  },
  {
    name: '炼化B车间',
    data: [20,20,20,20,20,70,20,20,20,20,50,80]
  },
  {
    name: '炼化C车间',
    data: [20,20,20,20,20,70,20,20,20,20,50,80]
  },
  ]
},
]

/**
 * 中间模块
 */
// 本月安全&环保
export const monthRes = {
  safePoint: 78.5,
  lastSafePoint: 67.4,
  safeChangePer: 13,
  envProtectionPer: 1.09,
  lastEnvProtectionPer: 90,
  envChangePer: 0.5
}
// 本月各部门安全气象分分析
export const departmentAnalyseData = [{
  name: '炼化A车间',
  val: 82
},
{
  name: '炼化B车间',
  val: 71
},{
  name: '炼化C车间',
  val: 63
},{
  name: '炼化D车间',
  val: 72
},{
  name: '炼化E车间',
  val: 85
},
{
  name: '炼化F车间',
  val: 86
},
{
  name: '炼化G车间',
  val: 85
},{
  name: '炼化H车间',
  val: 78
},{
  name: '炼化I车间',
  val: 94
},{
  name: '炼化J车间',
  val: 81
},
]

/**
 * 左侧数据
 */

export const monthOpts = {
  accident: 74,
  accidentPer: -0.8, // 正负数代表增减
  hiddenDanger: 98,
  hiddenDangerPer: -0.8,
  accidentNum: 382,
  hiddenDangerNum: 2981
}

// 本月安全原因分析
export const radarData = [20,8,19,8,30,17]

// 每月事故趋势
export const monthlyAccident = [{
  date: '2019.1',
  val: 70,
},
{
  date: '2019.2',
  val: 80,
},
{
  date: '2019.3',
  val: 60,
},
{
  date: '2019.4',
  val: 90,
},
{
  date: '2019.5',
  val: 70,
},
{
  date: '2019.6',
  val: 80,
},
{
  date: '2019.7',
  val: 60,
},
{
  date: '2019.8',
  val: 90,
},
{
  date: '2019.9',
  val: 70,
},
{
  date: '2019.10',
  val: 80,
},
{
  date: '2019.11',
  val: 60,
},
{
  date: '2019.12',
  val: 90,
},
]

// 每月隐患数量
export const hiddenDanger = [{
  date: '2019.1',
  val: 88,
},
{
  date: '2019.2',
  val: 90,
},
{
  date: '2019.3',
  val: 105,
},
{
  date: '2019.4',
  val: 100,
},
{
  date: '2019.5',
  val: 95,
},
{
  date: '2019.6',
  val: 94,
},
{
  date: '2019.7',
  val: 65,
},
{
  date: '2019.8',
  val: 70,
},
{
  date: '2019.9',
  val: 68,
},
{
  date: '2019.10',
  val: 85,
},
{
  date: '2019.11',
  val: 82,
},
{
  date: '2019.12',
  val: 81,
},
]

// 本月隐患原因分析
export const hiddenDangerReason = [{
  name: '其他',
  val: 30
},
{
  name: '项目',
  val: 25
},
{
  name: '生产',
  val: 20
},
{
  name: '技术',
  val: 17
},
{
  name: '安全',
  val: 16.5
},
{
  name: '质量',
  val: 15.5
},
{
  name: '设备',
  val: 14.7
},
]
