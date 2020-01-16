/**
 * 生产管控-mock
 */

export const mock = {
  centerPoints: [
    {
      name: '尿素和甲醇混合液',
      top: 403,
      left: 32
    },
    {
      name: '甲醇',
      top: 486,
      left: 72
    },
    {
      name: '液氮',
      top: 354,
      left: 692
    },
    {
      name: 'DMC',
      top: 699,
      left: 1124
    },
    {
      name: 'FIC1032',
      val: 642.5,
      unit: 'kg/h',
      top: 448,
      left: 144
    },
    {
      name: 'PI0092',
      val: 1.2,
      unit: 'Mpa',
      top: 391,
      left: 209
    },
    {
      name: 'TI0022',
      val: 25.3,
      unit: '℃',
      top: 404,
      left: 327
    },
  ],
  centerData: [
    {
      name: '当前产量',
      num: '180,000',
      unit: '吨'
    },{
      name: '产品收率',
      num: 90,
      unit: '%'
    },{
      name: '循环水',
      num: 15,
      unit: 't/t'
    },{
      name: '电耗',
      num: 55,
      unit: 'kWh/t'
    },
  ],
  actionRunning: [
    {
      name: '操作次数',
      min: -5,
      max: 5,
      n: 0,
      options: {
        type: 0, // 颜色
        data: [234,245,234]
      }
    },{
      name: '自控率',
      min: -2,
      max: 2,
      n: 0,
      options: {
        type: 1, // 颜色
        isPer: true,
        data: [93,88,93]
      }
    },{
      name: '质量平稳率',
      min: -2,
      max: 2,
      n: 0,
      options: {
        type: 1, // 颜色
        isPer: true,
        data: [93,93,64]
      }
    },{
      name: '回路平稳率',
      min: -2,
      max: 2,
      n: 0,
      options: {
        type: 1, // 颜色
        isPer: true,
        data: [90,94,89]
      }
    },{
      name: '报警次数',
      min: -1,
      max: 1,
      n: 0,
      options: {
        type: 2, // 颜色
        data: [3,4,3]
      }
    },{
      name: '联锁平稳率',
      min: -2,
      max: 2,
      n: 0,
      options: {
        type: 3, // 颜色
        isPer: true,
        data: [93,94,93]
      }
    }
  ],
  runOpts: [
    {
      name: '加工量',
      val: 87.62
    },
    {
      name: '炉出口',
      val: 116.92
    },
    {
      name: '辐射入口',
      val: 0.13
    },
    {
      name: '对流压力',
      val: 6.30
    },
    {
      name: '富气量',
      val: 107.81
    },
    {
      name: '分馏塔底温',
      val: 46.23
    },
    {
      name: '壁管温度',
      val: 2.68
    },
    {
      name: '干气量',
      val: 85.71
    },
    {
      name: '辐射量',
      val: 13500.8
    },
    {
      name: '柴油比重',
      val: 107.81
    },
    {
      name: '减炉炉膛',
      val: 87.62
    },
    {
      name: '蒸汽压力',
      val: 116.92
    },
    {
      name: '常炉炉膛',
      val: 0.13
    },
    {
      name: '石脑油',
      val: 6.3
    },
    {
      name: '产干气量',
      val: 85.71
    },
    {
      name: '原料余热温度',
      val: 2.68
    },
    {
      name: '新氢量',
      val: 10.8
    },
    {
      name: '反应器温升',
      val: 0.13
    },
    {
      name: '反冲洗压差',
      val: 6.3
    },
    {
      name: '柴油外送',
      val: 85.71
    },
    {
      name: '油浆外甩',
      val: 2.68
    },
    {
      name: '汽油回炼',
      val: .8
    },
    {
      name: '排气压力',
      val: .13
    },
    {
      name: '高分压力',
      val: 6.3
    },
    {
      name: '干气外送',
      val: .71
    },
  ]
}