const options = {
  // title: {
  //   text: '世界人口总量',
  //   subtext: '数据来自网络',
  // },
  textStyle: {
    color: '#9CB2D6',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  // legend: {
  //   data: ['2011年', '2012年'],
  // },
  grid: {
    top: 8,
    left: 64,
    right: 46,
    bottom: 8,
    // containLabel: true,
  },
  xAxis: {
    type: 'value',
    splitLine: {
      show: false,
    },
    max: 100,
    show: false,
    boundaryGap: [0,0.01],
  },
  yAxis: {
    axisTick: {
      show: false, // 轴线去刻度
    },
    type: 'category',
    data: ['平均值','巴西','印尼','美国'],
  },
  series: [
    {
      barWidth: 4,
      name: '2011年',
      type: 'bar',
      label: {
        show: true,
        position: 'right',
      },
      color: '#72DD0D',
      data: [65,100,50,98],
    },
  ],
}