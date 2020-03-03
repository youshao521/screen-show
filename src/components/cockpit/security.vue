
<template>
  <div class="box">
    <div class="box-title">安全隐患管理</div>
    <div class="box-content">
      <div :style="{height: '280px',width:'100%'}" ref="pieChart"/>
    </div>
  </div>
</template>
<script>
import './style.less';
import echarts from 'echarts';
import page from '../../../data/cockpit';
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
  beforeDestroy() {
    let dcharts = echarts.getInstanceByDom(this.$refs.pieChart)
    if (dcharts) {
      echarts.dispose(dcharts)
    }
  },
  methods: {
    initPieChart() {
      if (!this.$refs.pieChart) {
        return;
      }
      let pieChart = echarts.getInstanceByDom(this.$refs.pieChart);
      if (!pieChart) {
        pieChart = echarts.init(this.$refs.pieChart);
      }
      pieChart.setOption({
        color: ['#3B30FD', '#D0214C', '#878787', '#6CF8C7'],
        legend: {
          textStyle: {
            color: '#CFDDFF'
          },
          bottom: 20,
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
