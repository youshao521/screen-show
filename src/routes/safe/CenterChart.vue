<template>
  <div>
    <div class='head'>
      <div class='headTab'>
        <p>本月安全得分</p>
        <div class='showNum'>
          <span>{{monthRes.safePoint.toFixed(2)}}</span>
          <img
            src='../../assets/safe/upOrange.svg'
            v-if='monthRes.safePoint>monthRes.lastSafePoint'
          />
          <img
            src='../../assets/safe/downOrange.svg'
            v-else
          />
          <p>同比增长{{monthRes.safeChangePer}}%</p>
        </div>
        <p class='lastNum'>上月得分：{{monthRes.lastSafePoint.toFixed(2)}}</p>
      </div>
      <div class='headTab'>
        <p>本月环保超标率</p>
        <div
          class='showNum'
          style='color: #6DD230;'
        >
          <span>{{monthRes.envProtectionPer}}</span>
          <img
            src='../../assets/safe/upGreen.svg'
            v-if='monthRes.envProtectionPer>monthRes.lastEnvProtectionPer'
          />
          <img
            src='../../assets/safe/downGreen.svg'
            v-else
          />
          <p>同比增长{{monthRes.envChangePer}}%</p>
        </div>
        <p
          class='lastNum'
          style='color: #6DD230;'
        >上月环保超标率：{{monthRes.lastEnvProtectionPer}}%</p>
      </div>
    </div>
    <div class='chartCont'>
      <div style='width: 100%;height: 600px'>
        <Chart :options='options' />
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
// import moment from 'moment'
import Chart from '../../components/chart/commonChart'
import { departmentAnalyseData, monthRes } from '../../mock/safe_mock'

export default {
  name: 'RightChart',
  components: {
    Chart,
  },
  data() {
    return {
      monthRes,
      departmentAnalyseData,
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
          text: '本月各部门安全气象分分析',
          textStyle: {
            fontSize: 20,
            fontWeight: 'lighter',
            color: '#E0EBFE',
          },
        },
        textStyle: {
          fontSize: 9,
          color: '#fff',
        },
        grid: {
          top: 80,
          left: 40,
          right: 50,
          bottom: 60,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            margin: 20,
          },
          axisTick: {
            show: false, // 轴线去刻度
          },
          data: this.departmentAnalyseData.map(x => x.name),
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
            margin: 20,
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
            data: this.departmentAnalyseData.map(x => x.val),
            type: 'line',
            symbol: 'none', // 去掉点
            smooth: true, // 曲线变平滑
            markLine: {
              symbol: ['none', 'none'], // 去掉箭头
              lineStyle: {
                // 全局的样式
                type: 'dashed',
                width: 1, // 线条高度
              },
              data: [
                {
                  yAxis: 80,
                  lineStyle: {
                    color: '#6DD230',
                  },
                  label: {
                    // 线条提示字体
                    show: false,
                  },
                },
                {
                  yAxis: 60,
                  lineStyle: {
                    color: '#FF7238',
                  },
                  label: {
                    // 线条提示字体
                    show: false,
                  },
                },
              ],
            },
            lineStyle: {
              width: 8,
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
