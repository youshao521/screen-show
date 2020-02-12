// 园区概况
const parkSurvey = [
  {
    max: 100000, // 采购最大值
    value: 80000, // 当前采购值
    subtitle: '本年采购量',
    title: '采购',
    unit: '%'
  }, {
    max: 160000, // 销售最大值
    value: 147200, // 当前销售值
    subtitle: '本年销售总量',
    title: '销售',
    unit: '%'
  }, {
    max: 180000, // 生产最大值
    value: 154800, // 当前生产值
    subtitle: '本年生产总量',
    title: '生产',
    unit: '%'
  }, {
    max: 20000, // 库存最大值
    value: 8000, // 当前库存值
    subtitle: '本年库存量',
    title: '库存',
    unit: '%'
  }
];
// 能耗数据 1-12月
const consumeData = {
  title1: 2018,
  title2: 2019,
  data1: [97, 95, 88, 87, 85, 81, 80, 90, 85, 86, 82, 80], // 2018年数据
  data2: [80, 90, 85, 86, 82, 80, 78, 75, 80, 82, 81, 82] // 2019年数据
};
// 安全隐患管理
const securityManage = {
  title: ['事故事件', '安全隐患', '行为安全', '作业安全'], // 显示标题
  data: [ // 标题对应数据
    { value: 468, name: '事故事件' },
    { value: 276, name: '安全隐患' },
    { value: 116, name: '行为安全' },
    { value: 84, name: '作业安全' }
  ]
};
// 生产总值---基础数据
const mapData = {
  useValue: 780250
};
// 地图上的值基本数据
const mapGasoline = {
  baseData: [
    {
      top: 226,
      left: 508,
      name: '汽油',
      gasoline: 26.9
    }, {
      top: 168,
      left: 808,
      name: '汽油',
      gasoline: 11.2
    }, {
      top: 318,
      left: 380,
      name: '汽油',
      gasoline: 23.7
    }, {
      top: 346,
      left: 460,
      name: '汽油',
      gasoline: 16.8,
      name1: '柴油',
      gasoline1: 33.2
    }, {
      top: 432,
      left: 600,
      name: '汽油',
      gasoline: 72.3
    }, {
      top: 378,
      left: 662,
      name: '汽油',
      gasoline: 72.3
    }, {
      top: 384,
      left: 816,
      name: '汽油',
      gasoline: 56.4
    }
  ],
  increaseMin: 28, // 浮动最低值
  increaseMax: 32, // 浮动最高值
  min: 1, // 浮动倍数范围最低值
  max: 3 // 浮动倍数范围最高值
};
// 车辆调度
/**
 * @param {value} 初始值
 * @param {min} 浮动最小值
 * @param {max} 浮动最大值
 */
const car = {
  data: [
    {
      top: 38,
      left: 100,
      name: '入园',
      value: 300,
      min: 270,
      max: 350
    },
    {
      top: 38,
      left: 244,
      name: '排队',
      value: 200,
      min: 200,
      max: 250
    },
    {
      top: 38,
      left: 388,
      name: '化验',
      value: 40,
      min: 30,
      max: 50
    },
    {
      top: 125,
      left: 526,
      name: '卸车',
      value: 30,
      min: 10,
      max: 40
    },
    {
      top: 212,
      left: 388,
      name: '装车',
      value: 50,
      min: 40,
      max: 60
    },
    {
      top: 212,
      left: 244,
      name: '出厂',
      value: 50,
      min: 37,
      max: 57
    },
    {
      top: 212,
      left: 100,
      name: '出园',
      value: 70,
      min: 60,
      max: 80
    }
  ]
};
// 设备健康状态
/**
 * @param {name} 单项标签名称
 * @param {value} 单项值
 */
const healthyList = {
  data1: [
    {
      name: '密封胶',
      value: 36.32
    },
    {
      name: '混凝胶',
      value: 47.34
    }, {
      name: '白炭黑',
      value: 84.21
    }, {
      name: '三氯氢硅',
      value: 53.09
    }, {
      name: '生胶',
      value: 61.21
    }, {
      name: '107胶',
      value: 49.89
    }, {
      name: 'DMC',
      value: 59.07
    }, {
      name: '水解物',
      value: 61.23
    }
  ],
  data2: [
    {
      name: '磷酸三钠',
      value: 47
    },
    {
      name: '粗品焦磷酸钠',
      value: 48
    }, {
      name: '三氯氧磷',
      value: 64.21
    }, {
      name: '三氯化磷',
      value: 46.06
    }, {
      name: '甘霖颗粒剂',
      value: 55.49
    }, {
      name: '草甘膦颗粒',
      value: 73.33
    }, {
      name: '草甘膦铵盐',
      value: 81.63
    }, {
      name: '草甘膦水剂',
      value: 46.63
    }
  ]
};
/**
 * @params {day} 装置名称
 * @params {day} 日额超标
 * @params {month} 月额超标
 */
const statisticsList = {
  data: [
    {
      key: '0',
      name: '加氢裂化',
      day: 0.61,
      month: 2.08,
      maxDay: false,
      maxMonth: false,
    }, {
      key: '1',
      name: '延迟焦化',
      day: 0.90,
      month: 3.69,
      maxDay: true,
      maxMonth: true,
    }, {
      key: '2',
      name: '催化裂化',
      day: 0.06,
      month: 0.15,
      maxDay: false,
      maxMonth: false,
    }, {
      key: '3',
      name: '气体脱硫',
      day: 0.69,
      month: 3.08,
      maxDay: false,
      maxMonth: false,
    }, {
      key: '4',
      name: '污水处理',
      day: 0.71,
      month: 1.34,
      maxDay: false,
      maxMonth: false,
    }, {
      key: '5',
      name: '气体分馏',
      day: 0.04,
      month: 0.17,
      maxDay: false,
      maxMonth: false,
    }, {
      key: '6',
      name: '常减压',
      day: 0.13,
      month: 1.53,
      maxDay: false,
      maxMonth: false,
    }
  ]
};
// 库存统计
const stock = {
  data: [{
    name1: '可用库存数量',
    value1: 639715,
    name2: '库存总量',
    value2: 642801
  }, {
    name1: '当天入库总量',
    value1: 33176,
    name2: '当天出库总量',
    value2: 7817
  }, {
    name1: '移动锁定总数',
    value1: 124,
    name2: '盘点锁定总数',
    value2: 389
  }]
};
export default {
  parkSurvey,
  consumeData,
  securityManage,
  mapData,
  mapGasoline,
  car,
  healthyList,
  statisticsList,
  stock
};