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
		name: 'AccidentTender',
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
						fontSize:9,
					  color: '#fff',
					},
					grid: {
					  top: 45,
					  left: 35,
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
						splitLine: {
						  lineStyle: {
						    color: '#31415B',
						    type: 'dashed',
						  },
						},
					},
					series: [{
						data: this.monthlyAccident.map(x => x.val),
						type: 'line',
						symbol:'none',  // 去掉点
						itemStyle: {
							color: '#FF4A31',
						},
						areaStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#FF4A31'
							}, {
								offset: 1,
								color: 'rgba(0, 0, 0, 0)'
							}])
						}
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
