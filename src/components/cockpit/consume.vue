
<template>
  <div class="box">
    <div class="box-title">能耗数据</div>
    <div class="box-content">
      <div :style="{height: '280px',width:'100%'}" ref="barChart"/>
    </div>
  </div>
</template>
<script>
import './style.less';
import echarts from 'echarts';
import page from '../../../data/cockpit';
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
        legend: {
          data: ['2018年', '2019年'],
          bottom: '20px',
          textStyle: {
            color: '#CFDDFF'
          },
        },
        grid: {
          top: 50,
          bottom: 80
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            axisLabel: {
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
            name: `${page.consumeData.title1}年`,
            type: 'bar',
            barWidth: 8,
            data: page.consumeData.data1
          },
          {
            name: `${page.consumeData.title2}年`,
            type: 'bar',
            barWidth: 8,
            data: page.consumeData.data2
          },
        ]
      });
    }
  },
}
</script>
