<template>
  <div class="safe">
    <div class="safe-left">
      <div class="s-title">安全指数趋势</div>
      <div :style="{height: '200px',width:'100%'}" ref="lineChart"/>
    </div>
    <div class="safe-right">
      <div class="s-title">安全隐患分布</div>
      <div :style="{height: '200px',width:'100%'}" ref="pieChart"/>
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
      let lineChart = echarts.init(this.$refs.lineChart);
      lineChart.setOption({
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
      let pieChart = echarts.init(this.$refs.pieChart);
      pieChart.setOption({
        grid: {
            top: 200
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            show: false,
            orient: 'vertical',
            left: 10,
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ]
            }
        ]
      });
    }
  },
}
</script>