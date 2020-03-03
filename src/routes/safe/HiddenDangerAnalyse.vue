<template>
	<div
		style="width: 100%;height: 300px"
	>
		<Chart :options='options' />
	</div>
</template>

<script>
	import echarts from 'echarts'
	import moment from 'moment'
	import Chart from '../../components/chart/commonChart'
	import {
		hiddenDangerReason
	} from '../../mock/safe_mock'

	export default {
		name: 'HiddenDangerAnalyse',
		components: {
			Chart
		},
		data() {
			return {
				hiddenDangerReason,
				options: {},
			}
		},
		mounted() {
			this.options = this.renderOptions()
		},
		beforeDestroy() {
			this.options = null;
		},
		methods: {
			renderOptions() {
				const options = {
					textStyle: {
						fontSize:8,
					  color: '#fff',
					},
					grid: {
					  top: 45,
					  left: 35,
					  right: 20,
					  bottom: 60,
					},
					yAxis: {
						type: 'category',
						boundaryGap: false,
						inverse: true,
						axisLabel: {
							margin: 10,
						},
						axisTick: {
						  show: false, // 轴线去刻度
						},
						data: this.hiddenDangerReason.map(x => x.name)
					},
					xAxis: {
						type: 'value',
						axisLine: {
						  show: false, // 去轴线
						},
						axisLabel: {
							formatter: '{value}%',
							margin: 15,
						},
						splitLine: {
						  lineStyle: {
						    color: 'rgba(50,72,104,0.50)',
						    // type: 'dashed',
						  },
						},
					},
					series: [{
						data: this.hiddenDangerReason.map(x => x.val),
						type: 'bar',
						barWidth: 10,
						// barCategoryGap: 1,
						itemStyle: {
							color: '#387DFF',
						},
					}]
				}
				return options
			},
		},
	}
</script>
<style lang='less' scoped>
	@import '../styles.less';
</style>
