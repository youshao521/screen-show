<template>
  <div class='rcBox'>
    <div class='pieBox'>
      <div
        :key='x.title.text'
        class='pieItem'
        v-for='x in pieOptions'
      >
        <Chart :options='x' />
      </div>
    </div>
    <div class='barBox'>
      <div
        :key='x.title.text'
        class='barItem'
        v-for='x in barOptions'
      >
        <Chart :options='x' />
      </div>
    </div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import Chart from '../../components/chart/commonChart'
import { monthlyBarData, monthlyPieData } from '../../mock/safe_mock'

export default {
  name: 'CenterChart',
  components: {
    Chart,
  },
  data() {
    return {
      monthlyBarData,
      monthlyPieData,
      pieOptions: [],
      barOptions: [],
    }
  },
  mounted() {
    this.pieOptions = this.renderOptions(monthlyPieData)
    this.barOptions = this.renderBarOptions(monthlyBarData)
  },
  beforeDestroy() {
    this.pieOptions = null;
    this.barOptions = null;
  },
  methods: {
    renderBarOptions(data) {
      return data.map(x => {
        return {
          title: {
            text: x.name,
            textStyle: {
              fontSize: 20,
              // fontWeight: 'lighter',
              color: '#9DB9FF',
            },
          },
          color: ['#3D7EF8', '#6EC543', '#FE7C4B', '#8978FF'],
          textStyle: {
            fontSize: 10,
            color: '#fff',
          },
          legend: {
            itemWidth: 8,
            itemHeight: 8,
            bottom: 40,
            textStyle: {
              fontSize: 10,
              color: '#758BAF',
            },
          },
          grid: {
            top: 45,
            left: 0,
            right: 80,
            bottom: 60,
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              align: 'center',
              margin: 20,
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              show: false, // 轴线去刻度
            },
            data: x.date,
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
          series: x.data.map(i => {
            return {
              name: i.name,
              data: i.data,
              type: 'bar',
              barWidth: 4,
            }
          }),
        }
      })
    },
    renderOptions(data) {
      return data.map(x => {
        return {
          title: {
            text: x.name,
            left: 'center',
            textStyle: {
              fontSize: 20,
              // fontWeight: 'lighter',
              color: '#9DB9FF',
            },
          },
          color: ['#3E7EF5', '#6EC543', '#FE7C4B', '#8978FF'],
          textStyle: {
            fontSize: 10,
            color: '#fff',
          },
          grid: {
            top: 80,
            left: 40,
            right: 50,
            bottom: 60,
          },
          series: [
            {
              type: 'pie',
              radius: ['16%', '36%'],
              label: {
                formatter: '{b}\n{c}%',
              },
              data: x.data,
            },
          ],
        }
      })
    },
  },
}
</script>
<style lang='less' scoped>
@import './styles.less';
</style>
