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
		monthlyAccident
	} from '../../mock/safe_mock'

	export default {
		name: 'HiddenDanger',
		components: {
			Chart
		},
		data() {
			return {
				monthlyAccident,
				options: {},
			}
		},
		mounted() {
			this.options = this.renderOptions()
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
					  left: 40,
					  right: 25,
					  bottom: 60,
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
						data: this.monthlyAccident.map(x => x.date)
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
						    color: '#31415B',
						    type: 'dashed',
						  },
						},
					},
					series: [{
						data: this.monthlyAccident.map(x => x.val),
						type: 'bar',
						barWidth: 22,
						barCategoryGap: 1,
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
