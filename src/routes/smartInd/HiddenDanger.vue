<template>
  <div style='width: 100%;height: 100%'>
    <Chart :options='options' />
  </div>
</template>

<script>
// import echarts from 'echarts'
import Chart from '../../components/chart/commonChart'
import { hiddenDanger } from '../../mock/smartInd_mock'

export default {
  name: 'HiddenDanger',
  components: {
    Chart,
  },
  data() {
    return {
      hiddenDanger,
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
          text: '安全隐患分布',
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
        color: ['#3E7EF5', '#6EC543', '#8978FF', '#FE7C4B'],
        textStyle: {
          fontSize: 10,
          color: '#fff',
        },
        // grid: {
        // 	top: 80,
        // 	left: 0,
        // 	right: 0,
        // 	bottom: 0,
        // 	containLabel: true,
        // },
        series: [
          {
            type: 'pie',
            radius: ['25%', '50%'],
            center: ['50%', '70%'],
            label: {
              formatter: '{b}\n{c}%',
            },
            data: this.hiddenDanger,
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
