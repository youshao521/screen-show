<template>
  <div :style="{height: '100%',width:'100%'}" ref="barChart"/>
</template>
<script>
import echarts from 'echarts';
export default {
  name: 'BarChart',
  data() {
    return {
      barChart: null
    }
  },
  mounted() {
    this.initBarChart();
  },
  methods: {
    initBarChart() {
      let barChart = echarts.init(this.$refs.barChart);
      barChart.setOption({
        color: ['rgba(207, 221, 255, 0.3)', new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "rgba(255, 63, 13, 0.7)" // 0% 处的颜色
            }, {
                offset: 1,
                color: "rgba(89, 17, 24, 0.7)" // 100% 处的颜色
            }], false)],
        textStyle: {
          color: '#CFDDFF'
        },
        legend: {
            data: ['2018年', '2019年'],
            bottom: '5px',
            textStyle: {
              color: '#CFDDFF'
            },
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            axisLabel:{
              interval: 0
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(207, 221, 255, 0.15)'
              }
            }
          }
        ],
        series: [
          {
            name: '2018年',
            type: 'bar',
            barWidth: 8,
            data: [97,95,88,87,85,81,80,90,85,86,82,80]
          },
          {
            name: '2019年',
            type: 'bar',
            barWidth: 8,
            data: [80,90,85,86,82,80,78,75,80,82,81,82]
          },
        ]
      });
    }
  },
}
</script>