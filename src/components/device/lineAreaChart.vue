<template>
  <div :style="{height: '100%',width:'100%'}" ref="lineAreaChart"/>
</template>
<script>
import echarts from 'echarts';
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
          data: [
            '2019-09-20',
            '2019-09-21',
            '2019-09-22',
            '2019-09-23',
            '2019-09-24',
            '2019-09-25',
            '2019-09-26',
            '2019-09-27',
            '2019-09-28',
            '2019-09-29',
            '2019-09-30'
          ],
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
          data: [5, 8, 3, 15, 20, 3, 5, 3, 16, 23, 25],
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