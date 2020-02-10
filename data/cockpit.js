// 基本天气信息
const baseWeather = {
  time: null,
  date: null,
  week: null,
  place: '宁波',
  temperature: '4～14°C'
};
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
// 设备健康状态
/**
 * @param {name} 单项标签名称
 * @param {value} 单项值
 */
const healthyList = {
  data: [
    {
      name: '正运行设备数',
      value: [80,82,81,85,85,85,87,88,90,89,86,95,100,100,100,95,97,93,88,84,86,86,81,79,82,86,86,85,82,80],
      unit: '件'
    },
    {
      name: '体检设备数',
      value: [20,19,19,17,17,17,17,17,16,16,18,10,10,10,10,10,8,8,13,13,13,13,18,19,19,19,19,19,22,20],
      unit: '件'
    }, {
      name: '诊断设备数',
      value: [20,20,20,18,18,18,18,17,17,15,16,16,16,16,16,18,18,22,21,21,19,17,17,19,18,18,18,18,21,22],
      unit: '件'
    }, {
      name: '停机设备数',
      value: [3,2,2,2,2,2,1,1,1,3,3,2,0,0,0,3,3,3,2,6,6,8,8,7,5,1,1,2,2,2],
      unit: '件'
    }, {
      name: '振动设备数',
      value: [7,7,8,8,8,8,7,7,6,7,7,7,4,4,4,4,4,4,6,6,6,6,6,6,6,6,6,6,3,6],
      unit: '件'
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
export default {
  consumeData,
  securityManage,
  healthyList,
  statisticsList,
  baseWeather
}