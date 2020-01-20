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

export default {
  alarmCount,
  faultCount,
  alarmTop5,
  faultTop5
}