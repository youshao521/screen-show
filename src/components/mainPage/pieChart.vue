<template>
  <div :style="{height: '100%',width:'100%'}" ref="pieChart"/>
</template>
<script>
import echarts from 'echarts';
export default {
  name: 'PieChart',
  data() {
    return {
      pieChart: null
    }
  },
  mounted() {
    this.initPieChart();
  },
  methods: {
    initPieChart() {
      let pieChart = echarts.init(this.$refs.pieChart);
      pieChart.setOption({
        color: ['#3B30FD', '#D0214C', '#878787', '#6CF8C7'],
        legend: {
          textStyle: {
            color: '#CFDDFF'
          },
          bottom: 5,
          left: 'center',
          data: ['事故事件', '安全隐患', '行为安全', '作业安全']
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['50%', '50%'],
            selectedMode: 'single',
            label: {
              formatter: '{num|{c}}件',
              rich: {
                num: {
                  fontSize: 20
                }
              }
            },
            data: [
              { value: 468, name: '事故事件' },
              { value: 276, name: '安全隐患' },
              { value: 116, name: '行为安全' },
              { value: 84, name: '作业安全' }
            ]
          }
        ]
      });
    }
  },
}
</script>