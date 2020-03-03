<template>
  <div style='width: 100%;height: 100%'>
    <Chart :options='options' />
  </div>
</template>

<script>
import echarts from 'echarts'
import Chart from '../../components/chart/commonChart'
import { safetyIndex } from '../../mock/smartInd_mock'

export default {
  name: 'SafetyIndex',
  components: {
    Chart,
  },
  data() {
    return {
      safetyIndex,
      options: {},
    }
  },
  mounted() {
    this.options = this.renderOptions()
  },
  beforeDestroy() {
    this.options = null;
  },
  methods: {
    renderOptions() {
      const options = {
        title: {
          text: '安全指数趋势',
          textStyle: {
            fontSize: 20,
            // fontWeight: 'lighter',
            color: '#9DB9FF',
          },
        },
        textStyle: {
          fontSize: 9,
          color: '#fff',
        },
        grid: {
          top: 50,
          left: 0,
          right: 10,
          bottom: 0,
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            margin: 10,
            interval: 0,
          },
          axisTick: {
            show: false, // 轴线去刻度
          },
          data: this.safetyIndex.date,
        },
        yAxis: {
          type: 'value',
          max: 100,
          axisLine: {
            show: false, // 去轴线
          },
          axisTick: {
            show: false, // 轴线去刻度
          },
          axisLabel: {
            margin: 10,
          },
          splitLine: {
            lineStyle: {
              color: '#31415B',
              type: 'dashed',
            },
          },
        },
        series: [
          {
            data: this.safetyIndex.value,
            type: 'line',
            symbol: 'none', // 去掉点
            smooth: true, // 曲线变平滑
            lineStyle: {
              width: 2,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: 'rgba(248,161,62,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(0,117,203,1)',
                },
              ]),
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: 'rgba(248,161,62,.25)',
                },
                {
                  offset: 1,
                  color: 'rgba(0,117,203,.25)',
                },
              ]),
            },
          },
        ],
      }
      return options
    },
  },
}
</script>
<style lang='less' scoped>
@import './styles.less';
</style>
