<template>
  <div :style="{height: '100%',width:'100%'}" ref="lineChart"/>
</template>
<script>
import echarts from 'echarts';
import page from '../../../data/device';
export default {
  name: 'LineChart',
  data() {
    return {
      lineChart: null
    }
  },
  mounted() {
    this.initLineChart();
  },
  methods: {
    initLineChart() {
      let lineChart = echarts.init(this.$refs.lineChart);
      lineChart.setOption({
        textStyle: {
          color: '#CFDDFF'
        },
        grid: {
          top: 30,
          bottom: 100
        },
        xAxis: {
          type: 'category',
          data: page.faultCount.xAxisList,
          axisLabel: {
            interval: 0,
            rotate: 10
          },
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: 'rgba(207, 221, 255, 0.15)'
            }
          }
        },
        series: [{
          itemStyle: {
            normal: {
              label: {
                show: true
              }
            }
          },
          symbolSize: 10,
          data: page.faultCount.yAxisValue,
          type: 'line'
        }]
      });
    }
  },
}
</script>