<template>
	<div style="width: 100%;height: 340px">
		<Chart :options='options' />
	</div>
</template>

<script>
	import echarts from 'echarts'
	import moment from 'moment'
	import Chart from '../../components/chart/commonChart'
	import {
		radarData
	} from '../../mock/safe_mock'

	export default {
		name: 'Radar',
		components: {
			Chart
		},
		data() {
			return {
				radarData,
				options: {},
			}
		},
		mounted() {
			this.options = this.renderOptions()
		},
		methods: {
			renderOptions() {
				const options = {
					radar: {
						name: {
							textStyle: {
								fontSize: 10,
								color: '#fff',
							}
						},
						radius: 80,
						indicator: [{
								name: `岗位和职责 ${this.radarData[0]}%`,
								max: 100
							},
							{
								name: `其他 ${this.radarData[1]}%`,
								max: 100
							},
							{
								name: `操作顺序 ${this.radarData[2]}%`,
								max: 100
							},
							{
								name: `紧急响应 ${this.radarData[3]}%`,
								max: 100
							},
							{
								name: `设备变更 ${this.radarData[4]}%`,
								max: 100
							},
							{
								name: `培训和意识 ${this.radarData[5]}%`,
								max: 100
							}
						],
						axisLine: {
							lineStyle: {
								color: 'rgba(50,72,104,0.5)', // 设置网格的颜色
							}
						},
						splitArea: {
							show: false,
						},
						splitLine: {
							lineStyle: {
								color: 'rgba(50,72,104,0.5)', // 设置网格的颜色
							},
						},
						splitNumber: 3
					},
					series: [{
						name: '百分比',
						type: 'radar',
						areaStyle: {},
						itemStyle: {
							color: '#FF4A31',
						},
						data: [{
							value: this.radarData,
							name: '百分比'
						}, ]
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
