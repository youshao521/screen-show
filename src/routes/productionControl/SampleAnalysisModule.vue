<template>
  <div class='block5'>
    <p class='smtitle'>样品分析</p>
    <div class='itemsBox'>
      <div class='chartBox'>
        <div class='chartTitle'>{{sampleAnalysis.times}}次加样</div>
        <div style='height:128px;width:128px'>
          <Chart :options='options' />
        </div>
      </div>
      <div class='table'>
        <div class='tableHead'>
          <div class='tab1'>样品</div>
          <div class='tab2'>取样时间</div>
          <div class='tab3'>取样点</div>
          <div class='tab4'>状态</div>
          <div>操作</div>
        </div>
        <div class='tableCont'>
          <div
            :key='x.key+x.i'
            class='tableItem'
            v-for='x in showData'
          >
            <div class='tab1 name'>样品{{x.key}}-0{{x.i}}</div>
            <div class='tab2 hint'>{{x.date}}</div>
            <div class='tab3 hint'>{{x.key}}化工车间</div>
            <div
              :style='x.pass?{}:{color:"#FF4A31"}'
              class='tab4 hint'
            >{{x.pass?'合格':'不合格'}}</div>
            <div class='tab5 name'>SPC</div>
            <div class='tab5 name'>趋势图</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import moment from 'moment'
import Chart from '../../components/chart/commonChart'
import { sampleAnalysis } from '../../mock/prodCtrl_mock'
const ARR = [
  { key: 'A', i: 1 },
  { key: 'A', i: 2 },
  { key: 'A', i: 3 },
  { key: 'A', i: 4 },
  { key: 'A', i: 5 },
  { key: 'B', i: 1 },
  { key: 'B', i: 2 },
  { key: 'B', i: 3 },
  { key: 'B', i: 4 },
  { key: 'B', i: 5 },
  { key: 'C', i: 1 },
  { key: 'C', i: 2 },
  { key: 'C', i: 3 },
  { key: 'C', i: 4 },
  { key: 'C', i: 5 },
]
export default {
  name: 'SampleAnalysisModule',
  components: { Chart },
  props: ['list'],
  data() {
    return {
      tableData: [],
      showData: [],
      index: 4,
      sampleAnalysis,
      options: {},
    }
  },
  mounted() {
    this.tableData = this.shuffle(ARR)
    this.showData = this.tableData.slice(0, 5).map((x, i) => {
      return {
        ...x,
        pass: Math.random() >= 0.2,
        date: moment()
          .subtract(i, 'hours')
          .format('YYYY-MM-DD HH:mm'),
      }
    })
    // console.log(this.tableData)
    setInterval(() => {
      if (this.index < this.tableData.length - 1) {
        this.index += 1
      } else {
        this.index = 0
      }
      let temp = [].concat(this.showData)
      temp.unshift({
        ...this.tableData[this.index],
        pass: Math.random() >= 0.2,
        date: moment().format('YYYY-MM-DD HH:mm'),
      })
      temp.pop()
      this.showData = temp
      temp = null
      // console.log(this.showData)
    }, 60 * 60 * 1000)
    this.options = this.renderOptions()
  },
  methods: {
    shuffle(arr) {
      for (let i = arr.length; i; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = arr[j]
        arr[j] = arr[i - 1]
        arr[i - 1] = temp
      }
      return arr
    },
    renderOptions() {
      const { passRate } = this.sampleAnalysis
      const options = {
        title: {
          show: true,
          text: '合格率',
          subtext: passRate + '%',
          top: '28%',
          left: 'center',
          textStyle: {
            fontSize: 12,
            color: '#9CB2D6',
            fontWeight: 'normal',
          },
          subtextStyle: {
            fontSize: 32,
            color: '#9CB2D6',
            fontWeight: 'normal',
          },
        },
        series: {
          name: '',
          type: 'pie',
          radius: ['82%', '100%'],
          hoverAnimation: false,
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: passRate,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 0, color: '#00B4FB' },
                  { offset: 1, color: '#387DFF' },
                ]),
              },
            },
            {
              value: 100 - passRate,
              itemStyle: {
                color: 'rgb(41, 55, 79)',
              },
            },
          ],
        },
      }
      return options
    },
  },
}
</script>
<style lang='less' scoped>
@import '../styles.less';
</style>
