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
  beforeDestroy() {
    let dcharts = echarts.getInstanceByDom(this.$refs.chart)
    if (dcharts) {
      echarts.dispose(dcharts)
    }
    this.chart = null;
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
      if (!this.$refs.chart) {
        return;
      }
      this.chart = echarts.getInstanceByDom(this.$refs.chart);
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.chart);
      }
      // this.chart = echarts.init(this.$refs.chart)
      this.renderData(this.options)
    },
    renderData(options) {
      // console.log(options)
      this.chart.setOption(options)
    },
  },
}
</script>