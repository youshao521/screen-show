<template>
  <div :style="{height: '100%',width:'100%'}" ref="lineChart"/>
</template>
<script>
import echarts from 'echarts';
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
          top: 50,
          bottom: 100
        },
        xAxis: {
          type: 'category',
          data: ['2019/11/01', '2019/11/02', '2019/11/03', '2019/11/04', '2019/11/05'],
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
          data: [36, 42, 23, 68, 20],
          type: 'line'
        }]
      });
    }
  },
}
</script>