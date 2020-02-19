<template>
  <div :style="{height: '100%',width:'100%'}" ref="barChart"/>
</template>
<script>
import echarts from 'echarts';
import page from '../../../data/wisdom';
export default {
  name: 'Market',
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
        color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(19,218,255, 0.7)' // 0% 处的颜色
        }, {
          offset: 1,
          color: 'rgba(26,12,159, 0.7)' // 100% 处的颜色
        }], false)],
        textStyle: {
          color: '#CFDDFF'
        },
        legend: {
          show: false,
          data: ['市场总额'],
          bottom: '5px',
          textStyle: {
            color: '#CFDDFF'
          },
        },
        grid: {
          left: 80,
          bottom: 150
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            axisLabel: {
              interval: 0
            },
            data: ['华东', '华中', '北方', '西南', '华南']
          }
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: '{value} 万元'
            },
            type: 'value',
            nameTextStyle: {
              padding: -5
            },
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
            name: '市场总额',
            type: 'bar',
            barWidth: 16,
            label: {
              show: true,
              position: 'top'
            },
            data: [8132, 7241, 6478, 4972, 5640]
          }
        ]
      });
    }
  },
}
</script>