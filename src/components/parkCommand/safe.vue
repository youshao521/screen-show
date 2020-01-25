<template>
  <div class="safe">
    <div class="safe-left">
      <div class="s-title">安全指数趋势</div>
      <div :style="{height: '200px',width:'100%'}" ref="pieChart"/>
    </div>
    <div class="safe-right">
      <div class="s-title">安全隐患分布</div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';
import page from '../../../data/wisdom';
export default {
  name: 'PieChart',
  data() {
    return {
      pieChart: null
    }
  },
  mounted() {
    const xData = [];
    for (let i = 0; i< 15; i++) {
      xData.push(`${i +1}h`);
    }
    this.initPieChart(xData);
  },
  methods: {
    initPieChart(xData) {
      let pieChart = echarts.init(this.$refs.pieChart);
      pieChart.setOption({
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xData,
        },
        textStyle: {
          color: '#ffffff'
        },
        grid: {
            left: 28,
            top: 25,
            right: 10,
            bottom: 25
        },
        yAxis: {
            type: 'value',
            splitLine:{
                lineStyle: {
                  type: 'dotted',
                  color: '#ffffff50'
                }
            },
        },
        series: [{
            data: [18, 20, 8, 45, 44, 48, 49, 20, 50, 52, 64, 60, 65, 70, 77],
            type: 'line',
            itemStyle: {
                opacity: 0
            },
            areaStyle: {
              color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [{
                      offset: 0, color: '#fc860140' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#004eef50' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
              }
            },
            lineStyle: {
              color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [{
                      offset: 0, color: '#fc8601' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#004eef' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
              }

            }
        }]
      });
    }
  },
}
</script>