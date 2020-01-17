<template>
  <div
    :style='{height: "100%",width:"100%"}'
    ref='chart'
  />
</template>
<script>
import echarts from 'echarts'
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
      // console.log(options)
      this.chart.setOption(options)
    },
  },
}
</script>