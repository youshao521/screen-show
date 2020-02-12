// 设备预警统计
const alarmCount = {
  legendName: ['报警数', '处理数'], // 统计项目
  xAxisList: ['2019.1', '2019.2', '2019.3', '2019.4', '2019.5', '2019.6', '2019.7', '2019.8', '2019.9', '2019.10', '2019.11', '2019.12'], // X轴标题
  yAxisValue: [ // y轴的值
    {
      name: '报警数',
      type: 'bar',
      barWidth: 8,
      data: [97, 95, 88, 87, 85, 81, 80, 90, 85, 86, 82, 80]
    },
    {
      name: '处理数',
      type: 'bar',
      barWidth: 8,
      data: [80, 90, 85, 86, 82, 80, 78, 75, 80, 82, 81, 82]
    },
  ]
};
// 故障数量统计
const faultCount = {
  xAxisList: ['2019/11/01', '2019/11/02', '2019/11/03', '2019/11/04', '2019/11/05'], // X轴标题
  yAxisValue: [36, 42, 23, 68, 20] // y轴数
};
// 今日报警Top5
const alarmTop5 = {
  data: [
    {
      key: '0',
      name: '一焦化', // 装置名称
      day: '2/25', // 未处理/报警数
      month: '92%' // 处理率
    }, {
      key: '1',
      name: '碳五分离',
      day: '23/25',
      month: '8%'
    }, {
      key: '2',
      name: '酚水分离',
      day: '2/28',
      month: '92.8%'
    }, {
      key: '3',
      name: '废氢回收',
      day: '18/18',
      month: '100%'
    }, {
      key: '4',
      name: '一空压站',
      day: '15/15',
      month: '100%'
    }
  ]
};
// 今日故障top5
const faultTop5 = {
  data: [
    {
      key: '0',
      name: '加氢裂化',
      fault: 25
    }, {
      key: '1',
      name: '延迟焦化',
      fault: 23
    }, {
      key: '2',
      name: '催化裂化',
      fault: 23
    }, {
      key: '3',
      name: '气体脱硫',
      fault: 18
    }, {
      key: '4',
      name: '污水处理',
      fault: 18
    }
  ]
}
// 腐蚀检测
const lineAreaChart = {
  xAxis: [ // x轴显示时间 - 与y轴显示个数需要一致
    '2019-09-20',
    '2019-09-21',
    '2019-09-22',
    '2019-09-23',
    '2019-09-24',
    '2019-09-25',
    '2019-09-26',
    '2019-09-27',
    '2019-09-28',
    '2019-09-29',
    '2019-09-30'
  ],
  yAxis: [5, 8, 3, 15, 20, 3, 5, 3, 16, 23, 25] // y轴显示数值 - 与x轴显示一致
}
// 正常运行设备，报警设备数，故障次数，维保次数
const centerBase = {
  base: {
    normalRun: 1164, // 正常运行设备
    alarmDevice: 170, // 报警设备数
    fault: 20, // 故障次数
    project: 356 // 维保次数
  },
  float: {
    min: -3, // 浮动最小范围
    max: 3 // 浮动最大范围
  }
}
// 仪表设备分析
const deviceAnalysis = {
  unusual: [1, 19, 26], //表示异常的设备，从0开始计算
  analyzerData: 2.55, // 硫化氢分析仪，实时数据
  min: -3, // 硫化氢分析仪，实时数据,浮动最小值
  max: 3 // 硫化氢分析仪，实时数据,浮动最大值
};
// 机柜故障记录
const faultRecord = {
  data: [
    {
      key: 0,
      name: '服务器机柜001',
      type: '服务器机柜',
      reason: '过热将使得电线在额定负载下跳闸',
      repairman: '张晓峰'
    }, {
      key: 1,
      name: '网络机柜005',
      type: '网络机柜',
      reason: '灰尘聚积，噪音增大',
      repairman: '张晓峰'
    }, {
      key: 2,
      name: '控制台机柜007',
      type: '控制台机柜',
      reason: '过热使仪器读数错误',
      repairman: '王晓霞'
    }, {
      key: 3,
      name: '控制台机柜010',
      type: '控制台机柜',
      reason: '箱体内部元件损坏',
      repairman: '张锦江'
    }, {
      key: 4,
      name: '网络机柜012',
      type: '网络机柜',
      reason: '振动损毁箱体内部元件',
      repairman: '钱建设'
    }, {
      key: 5,
      name: '服务器机柜009',
      type: '服务器机柜',
      reason: '灰尘聚积，噪音增大',
      repairman: '钱建设'
    }, {
      key: 6,
      name: '网络机柜028',
      type: '网络机柜',
      reason: '空气过滤装置阻塞',
      repairman: '钱建设'
    }
  ]
};
export default {
  alarmCount,
  faultCount,
  alarmTop5,
  faultTop5,
  lineAreaChart,
  centerBase,
  deviceAnalysis,
  faultRecord
}