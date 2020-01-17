<template>
  <div class='box'>
    <p class='title'>生产管控一体化驾驶舱</p>
    <div class='content'>
      <!-- <div class='leftCont'>
        <ImportRunOptsModule :list='runOpts' />
        <ActionRunningModule :list='actionRunning' />
      </div>
      <div class='centerCont'>
        <CenterModule
          :list='centerData'
          :points='centerPoints'
        />
      </div>-->
      <div class='rightCont'>
        <WorkshopModule :list='workshops' />
        <SampleAnalysisModule />
      </div>
    </div>
  </div>
</template>

<script>
import SampleAnalysisModule from './SampleAnalysisModule'
import WorkshopModule from './WorkshopModule'
import ActionRunningModule from './ActionRunningModule'
import ImportRunOptsModule from './ImportRunOptsModule'
import CenterModule from './CenterModule'
import { mock } from '../../mock/prodCtrl_mock'
import { getR } from '../../utils/common'
export default {
  name: 'ProductionControl',
  components: {
    SampleAnalysisModule,
    WorkshopModule,
    ImportRunOptsModule,
    ActionRunningModule,
    CenterModule,
  },
  data() {
    return {
      workshops: mock.workshops,
      centerPoints: mock.centerPoints,
      centerData: mock.centerData,
      runOpts: mock.runOpts,
      actionRunning: mock.actionRunning,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.timer1()
      this.timer2()
      this.timer3()
    },
    random1(data) {
      return data.map(x => {
        return {
          ...x,
          val: x.val + getR(),
        }
      })
    },
    random2(data) {
      return data.map(x => {
        return {
          ...x,
          options: {
            ...x.options,
            data: x.options.data.map(i => i + getR(x.min, x.max, x.n)),
          },
        }
      })
    },
    random3(data) {
      return data.map((x, i) => {
        let temp = x
        if (i !== 0) {
          temp = {
            ...x,
            num: x.num + getR(0, 5, 2),
          }
        }
        return temp
      })
    },
    timer1() {
      this.runOpts = this.random1(mock.runOpts)
    },
    timer2() {
      this.actionRunning = this.random2(mock.actionRunning)
    },
    timer3() {
      this.centerData = this.random3(mock.centerData)
    },
  },
  watch: {
    centerData: {
      handler() {
        setTimeout(this.timer3, 60 * 1000)
      },
      deep: true,
    },
    runOpts: {
      handler() {
        setTimeout(this.timer1, 60 * 1000)
      },
      deep: true,
    },
    actionRunning: {
      handler() {
        setTimeout(this.timer2, 24 * 60 * 1000)
      },
      deep: true,
    },
  },
  destroyed() {
    // console.log(this.timer)
    // clearTimeout(this.timer)
    // this.timer = null
  },
}
</script>
<style lang='less' scoped>
@import '../styles.less';
</style>
