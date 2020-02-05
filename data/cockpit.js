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
      value: 80,
      unit: '件'
    },
    {
      name: '体检设备数',
      value: 20,
      unit: '件'
    }, {
      name: '诊断设备数',
      value: 20,
      unit: '件'
    }, {
      name: '停机设备数',
      value: 3,
      unit: '件'
    }, {
      name: '振动设备数',
      value: 7,
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
  statisticsList
}