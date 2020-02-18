// 智慧工业园区

/**
 * 左边模块
 */

export const iconlist = [
  '企业列表','风险管控','重大危险源','特殊作业','物流管理','通讯录','国家政策','行政审批'
]

// 安全指数趋势
export const safetyIndex = {
  date: ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h'],
  value: [20,40,50,45,43,50,55,80,10,10,50,60,70,88,82]
}

// 安全隐患分布
export const hiddenDanger = [
  {
    name: '设备隐患',
    value: 63
  },
  {
    name: '电器隐患',
    value: 18
  },
  {
    name: '消费应急',
    value: 15
  },
  {
    name: '安全隐患',
    value: 4
  },
]

// 重点安全监管企业
export const riskDesc = [
  '低风险','一般风险','高风险','重大风险'
]
export const companyList = [
  {
    name: '迈克生物股份有限公司',
    risk: 0,
    point: 95,
  },
  {
    name: '阳光太阳能工程有限公司',
    risk: 2,
    point: 80,
  },
  {
    name: '浩恩医药耗材有限公司',
    risk: 1,
    point: 86,
  },
  {
    name: '佳新材料股份有限公司',
    risk: 3,
    point: 75,
  },
  {
    name: '求是生物股份有限公司',
    risk: 0,
    point: 95,
  },
]

/**
 * 中间模块
 */
export const enterprise = [
  {
    name: '企业总数',
    color: '#FFF',
    val: 128,
  },
  {
    name: '危险源企业',
    color: '#FF4A31;',
    val: 43
  },
  {
    name: '园区企业类型',
    data: [
      {
        name: '化工企业',
        value: 69
      },
      {
        name: '制药企业',
        value: 25
      },
      {
        name: '其他',
        value: 18
      },
      {
        name: '新材料企业',
        value: 26
      },
    ]
  }
]
export const pointsName = [
  '园区人员','检测设备','隐患','报警','举报数量','物流车辆'
]

export const points = [
  [3450,4620,233,87,45,1423],
  [3450,4620,233,88,45,1425],
  [3450,4620,231,88,45,1428],
  [3450,4620,231,88,45,1430],
  [3450,4620,235,88,45,1431],
  [3450,4620,235,90,45,1435],
  [3450,4620,235,90,45,1436],
  [3450,4620,229,91,46,1437],
  [3450,4620,229,91,46,1438],
  [3450,4620,228,94,46,1439],
  [3450,4620,228,94,46,1441],
  [3450,4620,231,94,46,1445],
  [3450,4620,231,90,49,1450],
  [3450,4620,231,90,49,1451],
  [3450,4620,237,90,49,1453],
  [3450,4620,237,89,49,1454],
  [3450,4620,237,89,49,1457],
  [3450,4620,237,89,49,1458],
  [3450,4620,234,88,49,1461],
  [3450,4620,233,88,49,1463],
]
// 中间图上对应的位置点
export const posList = [
  {
    type: 'red',
    top: 679,
    left: 175,
  },
  {
    type: 'red',
    top: 560,
    left: 204,
  },
  {
    type: 'yellow',
    top: 590,
    left: 293,
  },
  {
    type: 'yellow',
    top: 687,
    left: 331,
  },
  {
    type: 'green',
    top: 707,
    left: 624,
  },
  {
    type: 'red',
    top: 496,
    left: 666,
    data: [
      {
        name: '安全风险指数',
        val: 95,
        color: '#7BF663'
      },
      {
        name: '安全隐患数量',
        val: 10,
        color: '#7BF663'
      },
      {
        name: '环保指数',
        val: 150,
        color: '#FF4A31'
      },
    ]
  },
  {
    type: 'green',
    top: 717,
    left: 735,
  },
  {
    type: 'yellow',
    top: 550,
    left: 902,
  }
]

/**
 * 右边模块
 */
export const AQname = [
  'PM2.5','PM10','SO2','Hg','NO2','O3','CO','Cl2'
]
export const airQuality = [
  [87,25,40,23,13,25,40,23,.3],
  [88,20,35,22,14,25,40,23,.3],
  [89,19,36,22,14,23,38,23,.2],
  [88,21,35,21,16,24,39,23,.2],
  [87,23,38,22,14,23,38,23,.3],
]

export const energyCostTip = [
  {
    name: '综合能耗',
    val: 113916.7
  },{
    name: '万元产值能耗',
    val: 0.33
  }
]

export const energyCostData = {
  date: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  total: [40,30,28,32,40,38,30,35,38,40,42,39],
  simple: [60,54,43,32,20,35,48,55,40,38,28,45]
}

export const energyList = [
  {
    name: '水',
    value: 1050,
    unit: 't',
    changeType: 1, // 1为增 0为减
    changePer: 10
  },
  {
    name: '电',
    value: 1241,
    unit: 'kw',
    changeType: 0,
    changePer: 5
  },
  {
    name: '气',
    value: 578,
    unit: 'm³',
    changeType: 0,
    changePer: 5
  },
]

// 群众投诉举报
export const complaintData = {
  date: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  data: [
    {
      name: '2019年',
      data: [55,25,41,41,40,45,40,43,43,40,55,40]
    },
    {
      name: '2018年',
      data: [20,5,21,10,20,51,20,20,51,20,42,20]
    },
  ]
}

// 被投诉企业top3
export const complaintTop3 = {
  max: 50, // 最大值，定义满格是多少
  data: [
    {
      name: '阳光太阳能工程有限公司',
      val: 20
    },
    {
      name: '佳新材料股份有限公司',
      val: 12
    },
    {
      name: '浩恩医药耗材有限公司',
      val: 7
    },
  ]
}

// 通知公告
export const noticeList = [
  {
    date: '2019.09.25',
    content: '应急管理部：三大因素推动安责险强制'
  },
  {
    date: '2019.09.25',
    content: '河北:发生重大安全事故 负责人将职业禁入'
  },
  {
    date: '2019.09.25',
    content: '全国灾害综合风险普查试点工作启动'
  },
  {
    date: '2019.09.25',
    content: '民法典侵权责任编草案将对高空抛物坠物作出'
  },
]