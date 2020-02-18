<template>
  <div style='width: 100%;height: 100%'>
    <Chart :options='options' />
  </div>
</template>

<script>
import echarts from 'echarts'
import Chart from '../../components/chart/commonChart'
import { complaintData } from '../../mock/smartInd_mock'

export default {
  name: 'ComplainChart',
  components: {
    Chart,
  },
  data() {
    return {
      complaintData,
      options: {},
    }
  },
  mounted() {
    this.options = this.renderOptions()
  },
  methods: {
    renderOptions() {
      const options = {
        title: {
          text: '群众投诉举报',
          top: 20,
          left: 0,
          textStyle: {
            fontSize: 20,
            // fontWeight: 'lighter',
            color: '#9DB9FF',
          },
        },
        color: [
          new echarts.graphic.LinearGradient(1, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255,63,13,1)',
            },
            {
              offset: 1,
              color: 'rgba(89,14,24,1)',
            },
          ]),
          'rgba(207, 221, 255, 0.3)',
        ],
        textStyle: {
          fontSize: 10,
          color: 'rgba(255,255,255,.8)',
        },
        legend: {
          itemWidth: 8,
          itemHeight: 8,
          bottom: 10,
          textStyle: {
            fontSize: 10,
            color: '#758BAF',
          },
        },
        grid: {
          top: 70,
          left: 0,
          right: 20,
          bottom: 30,
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            align: 'center',
            margin: 20,
            interval: 0,
            // rotate: 20,
          },
          axisTick: {
            show: false, // 轴线去刻度
          },
          data: this.complaintData.date,
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false, // 去轴线
          },
          axisLabel: {
            margin: 15,
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(50,72,104,0.50)',
              type: 'dashed',
            },
          },
        },
        series: this.complaintData.data.map(i => {
          return {
            name: i.name,
            data: i.data,
            type: 'bar',
            barWidth: 5,
          }
        }),
      }
      return options
    },
  },
}
</script>
<style lang='less' scoped>
@import './styles.less';
</style>
