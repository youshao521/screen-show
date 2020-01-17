<template>
  <div class='block4'>
    <div>
      <div class='tabs'>
        <div
          :class='n===index?"tabItem choosed":"tabItem"'
          :key='i.name'
          v-for='(i, n) in list'
        >{{i.name}}</div>
      </div>
      <p class='centerTitle'>车间产量/加工量</p>
      <div
        :key='i.name'
        class='devicesBox'
        v-for='i in showData.devices'
      >
        <span>{{i.name}}</span>
        <div class='perBox'>
          <div
            :style='{background:i.val>=90 ?
            "linear-gradient(179deg, #429321 0%, #72DD0D 100%)":
            "linear-gradient(180deg, #387DFF 0%, #00B4FB 100%)",
            width: i.val+"%"
            }'
            class='perCurr'
          />
        </div>
        <p>
          收率
          <span
            :style='{color:i.val>=90?"#439521":"#9CB2D6"}'
            class='perNum'
          >{{i.val}}%</span>
        </p>
      </div>
      <p class='centerTitle'>车间能耗</p>
      <div style='height:220px'>
        <Chart :options='options' />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '../../components/chart/commonChart'
import { workshopChartOpts } from '../../mock/prodCtrl_mock'
export default {
  name: 'WorkshopModule',
  props: ['list', 'points'],
  components: {
    Chart,
  },
  data() {
    return {
      options: {},
      index: 0,
      showData: this.list[0],
    }
  },
  mounted() {
    // console.log(this.showData)
    this.options = this.renderOptions()
    setInterval(() => {
      this.index = this.index === this.list.length - 1 ? 0 : this.index + 1
      this.showData = this.list[this.index]
      this.options = this.renderOptions()
    }, 10 * 1000)
  },
  methods: {
    renderOptions() {
      const { energyCost: list } = this.showData
      const options = {
        textStyle: {
          color: '#9CB2D6',
        },
        legend: {
          bottom: 6,
          data: workshopChartOpts.name,
          textStyle: {
            color: '#9CB2D6',
          },
        },
        grid: {
          top: 10,
          left: 40,
          right: 20,
          bottom: 60,
        },
        xAxis: {
          // boundaryGap: true,
          type: 'category',
          axisTick: {
            show: false, // 轴线去刻度
          },
          data: workshopChartOpts.x,
        },
        yAxis: {
          axisLabel: {
            margin: 20,
            // rotate: 45,
          },
          axisLine: {
            show: false, // 去轴线
          },
          minInterval: 25,
          splitLine: {
            lineStyle: {
              color: '#31415B',
              type: 'dashed',
            },
          },
          max: 100,
          type: 'value',
        },
        series: list.map((x, i) => {
          return {
            barWidth: 8,
            name: workshopChartOpts.name[i],
            data: x.data,
            type: 'bar',
          }
        }),
      }
      return options
    },
  },
}
</script>
<style lang='less' scoped>
@import '../styles.less';
</style>
