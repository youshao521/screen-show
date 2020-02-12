<template>
  <div :style="{height: '100%',width:'100%'}" ref="lineAreaChart"/>
</template>
<script>
import echarts from 'echarts';
import page from '../../../data/device';
export default {
  name: 'LineAreaChart',
  data() {
    return {
      lineAreaChart: null
    }
  },
  mounted() {
    this.initLineAreaChart();
  },
  methods: {
    initLineAreaChart() {
      let lineAreaChart = echarts.init(this.$refs.lineAreaChart);
      lineAreaChart.setOption({
        title: {
          left: 'center',
          text: '焦化富气空冷器',
          textStyle: {
            color: '#E0EBFE',
            fontSize: 14
          }
        },
        textStyle: {
          color: '#CFDDFF'
        },
        grid: {
          top: 50
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: page.lineAreaChart.xAxis,
          // axisLabel:{
          //   interval: 0,
          //   rotate: 10
          // },
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
          data: page.lineAreaChart.yAxis,
          type: 'line',
          smooth: true,
          lineStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#FF8800'
            }, {
              offset: 1,
              color: '#004FF2'
            }])
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#FF8800'
            }, {
              offset: 1,
              color: '#004FF2'
            }])
          }
        }]
      });
    }
  },
}
</script>