<template>
  <div style='width: 100%;height: 100%'>
    <Chart :options='options' />
  </div>
</template>

<script>
// import echarts from 'echarts'
import Chart from '../../components/chart/commonChart'
import { energyCostData } from '../../mock/smartInd_mock'

export default {
  name: 'EngrgyCost',
  components: {
    Chart,
  },
  data() {
    return {
      energyCostData,
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
        // title: {
        //   text: '安全指数趋势',
        //   textStyle: {
        //     fontSize: 20,
        //     fontWeight: 'lighter',
        //     color: '#9DB9FF',
        //   },
        // },
        color: ['#9E52CC', '#4D8BED'],
        legend: {
          icon: 'rectangle',
          itemHeight: 2,
          itemWidth: 8,
          bottom: 0,
          textStyle: {
            fontSize: 10,
            color: '#758BAF',
          },
        },
        textStyle: {
          fontSize: 10,
          color: '#9CB2D6',
        },
        grid: {
          top: 30,
          left: 0,
          right: 10,
          bottom: 20,
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
          data: this.energyCostData.date,
        },
        yAxis: [
          {
            name: '综合能耗(%)',
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
          {
            name: '万元产值能耗',
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
        ],
        series: [
          {
            name: '总耗',
            data: this.energyCostData.total,
            type: 'line',
            symbol: 'none', // 去掉点
            smooth: true, // 曲线变平滑
            lineStyle: {
              width: 2,
              color: '#9E52CC',
            },
          },
          {
            name: '单耗',
            data: this.energyCostData.simple,
            type: 'line',
            yAxisIndex: 1,
            symbol: 'none', // 去掉点
            smooth: true, // 曲线变平滑
            lineStyle: {
              width: 2,
              color: '#4D8BED',
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
