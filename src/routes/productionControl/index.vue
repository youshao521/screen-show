<template>
  <div class='box'>
    <p class='topTitle bold'>工厂生产操作管理驾驶舱</p>
    <div class='content'>
      <div class='leftCont'>
        <ImportRunOptsModule :list='runOpts' />
        <ActionRunningModule :list='actionRunning' />
      </div>
      <div class='centerCont'>
        <CenterModule
          :list='centerData'
          :points='centerPoints'
        />
      </div>
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
  beforeDestroy() {
    this.runOpts = null;
    this.actionRunning = null;
    this.centerPoints = null;
  },
  methods: {
    init() {
      this.timer1()
      this.timer2()
      this.timer3()
      this.timer4()
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
    random3() {
      this.centerData[0].num += 1
      this.centerData[1].num = mock.centerData[1].num + getR(-0.5, 0.5)
      this.centerData[2].num += 0.19
      this.centerData[3].num += 0.17
      // console.log(this.centerData)
    },
    random4(data) {
      return data.map(x => {
        let temp = x
        if (temp.val !== undefined) {
          temp = {
            ...x,
            val: x.val + getR(),
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
      this.random3()
    },
    timer4() {
      this.centerPoints = this.random4(mock.centerPoints)
    },
  },
  watch: {
    centerData: {
      handler() {
        setTimeout(this.timer3, 5 * 1000)
      },
      deep: true,
    },
    runOpts: {
      handler() {
        setTimeout(this.timer1, 5 * 1000)
      },
      deep: true,
    },
    actionRunning: {
      handler() {
        setTimeout(this.timer2, 24 * 60 * 60 * 1000)
      },
      deep: true,
    },
    centerPoints: {
      handler() {
        setTimeout(this.timer4, 5 * 1000)
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
