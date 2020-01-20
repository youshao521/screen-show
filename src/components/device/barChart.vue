<template>
  <div :style="{height: '100%',width:'100%'}" ref="barChart"/>
</template>
<script>
import echarts from 'echarts';
import page from '../../../data/device';
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
          color: 'rgba(255, 63, 13, 0.7)' // 0% 处的颜色
        }, {
          offset: 1,
          color: 'rgba(89, 17, 24, 0.7)' // 100% 处的颜色
        }], false)],
        textStyle: {
          color: '#CFDDFF'
        },
        grid: {
          top: 30,
          bottom: 130
        },
        legend: {
          data: page.alarmCount.legendName,
          bottom: 60,
          textStyle: {
            color: '#CFDDFF'
          },
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            data: page.alarmCount.xAxisList
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
        series: page.alarmCount.yAxisValue
      });
    }
  },
}
</script>