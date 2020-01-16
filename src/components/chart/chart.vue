<template>
  <div
    :style='{height: "100%",width:"100%"}'
    ref='chart'
  />
</template>
<script>
import echarts from 'echarts'
const colorList = [
  [
    ['#387DFF', '#00B4FB'],
    ['#063b88', '#025187'],
  ],
  [
    ['#429321', '#72DD0D'],
    ['#01452c', '#196317'],
  ],
  [
    ['#C41C35', '#E74C50'],
    ['#5d0830', '#731936'],
  ],
  [
    ['#01B9DE', '#01D7DE'],
    ['#01547b', '#02637c'],
  ],
]
export default {
  name: 'Chart',
  props: ['options'],
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    this.initChart()
  },
  watch: {
    options: {
      handler(curData) {
        this.renderData(curData)
      },
      deep: true,
    },
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart)
      this.renderData(this.options)
    },
    renderData(options) {
      console.log(options)
      const opts = JSON.parse(JSON.stringify(options)) // 防止操作源数据
      const { data, type: t, isPer = false } = opts
      data.push(Math.ceil((data[0] + data[1] + data[2]) / 3))
      const option = {
        textStyle: {
          color: '#9CB2D6',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: 8,
          left: 64,
          right: 46,
          bottom: 8,
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          // max: 100,
          show: false,
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          axisTick: {
            show: false, // 轴线去刻度
          },
          inverse: true,
          type: 'category',
          data: ['早班', '中班', '晚班', '平均值'],
        },
        series: [
          {
            barWidth: 4,
            type: 'bar',
            label: {
              formatter(p) {
                return isPer ? `${p.data}%` : p.data
              },
              show: true,
              position: 'right',
            },
            itemStyle: {
              color: p => {
                const c = p.dataIndex === 3 ? colorList[t][1] : colorList[t][0]
                const color = new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 0, color: c[0] },
                  { offset: 1, color: c[1] },
                ])
                return color
              },
            },
            data,
          },
        ],
      }
      this.chart.setOption(option)
    },
  },
}
</script>