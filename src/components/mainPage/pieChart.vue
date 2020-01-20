<template>
  <div :style="{height: '100%',width:'100%'}" ref="pieChart"/>
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
          data: page.securityManage.title
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
            data: page.securityManage.data
          }
        ]
      });
    }
  },
}
</script>