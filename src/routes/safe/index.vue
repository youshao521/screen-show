<template>
  <div class='box safe'>
    <p class='title'>工厂安全环保管理驾驶舱</p>
    <div class='content'>
    <div class='leftCont'>
        <div class="tabHead">
					<div class="tabItems">
						<p>本月事故</p>
						<p class="itemNum"
						style="color: #FF4A31;"
						>{{monthOpts.accident}}
						<span>
							<img  src='../../assets/safe/up.svg'
							v-if='monthOpts.accidentPer>0'
							/>
							<img  
							v-else
							src='../../assets/safe/down.svg'/>
							{{Math.abs(monthOpts.accidentPer)}}%
						</span>
						</p>
					</div>
					<div class="tabItems">
						<p>本月隐患</p>
						<p class="itemNum"
						style="color: #387DFF;"
						>{{monthOpts.hiddenDanger}}
						<span>
							<img  src='../../assets/safe/up.svg'
							v-if='monthOpts.hiddenDangerPer>0'
							/>
							<img  
							v-else
							src='../../assets/safe/down.svg'/>
							{{Math.abs(monthOpts.hiddenDangerPer)}}%
						</span>
						</p>
					</div>
					<div class="tabList">
						<p>本年事故
						<span>{{monthOpts.accidentNum}}</span>
						</p>
						<p>本年隐患
						<span>{{monthOpts.hiddenDangerNum}}</span>
						</p>
					</div>
				</div>
				<div class="charts">
					<div class="chartBox">
						<p class="chartTitle">本月安全原因分析</p>
						<Radar />
					</div>
					<div class="chartBox"
					style="width: 440px;"
					>
						<p class="chartTitle">每月事故趋势 (近1年)</p>
						<AccidentTender />
					</div>
					<div class="chartBox">
						<p class="chartTitle">本月隐患原因分析</p>
						<HiddenDangerAnalyse />
					</div>
					<div class="chartBox"
					style="width: 440px;"
					>
						<p class="chartTitle">每月隐患数量 (近1年)</p>
						<HiddenDanger />
					</div>
				</div>
      </div>
      <div class='centerCont'>
        <CenterChart />
      </div>
      <div class='rightCont'>
				<RightChart />
      </div>
    </div>
  </div>
</template>

<script>
import { monthOpts } from '../../mock/safe_mock.js'
import Radar from './Radar.vue'
import AccidentTender from './AccidentTender'
import HiddenDanger from './HiddenDanger'
import HiddenDangerAnalyse from './HiddenDangerAnalyse'
import CenterChart from './CenterChart'
import RightChart from './RightChart'
export default {
  name: 'ProductionControl',
  components: {
		Radar,
		AccidentTender,
		HiddenDanger,
		HiddenDangerAnalyse,
		CenterChart,
		RightChart,
  },
  data() {
    return {
			monthOpts
    }
  },
  mounted() {
  },
  methods: {

  },
	destroyed() {
    // console.log(this.timer)
    // clearTimeout(this.timer)
    // this.timer = null
  },
}
</script>
<style lang='less' scoped>
@import './styles.less';
</style>
