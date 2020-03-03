<template>
  <div style="width: 250px;height: 110px">
    <Chart :options='options' />
	</div>
</template>

<script>
	import echarts from 'echarts'
	import Chart from '../../components/chart/commonChart'
	// import {
	// 	hiddenDanger,
	// } from '../../mock/smartInd_mock'

	export default {
		name: 'EnterType',
    props: ['data'],
		components: {
			Chart
		},
		data() {
			return {
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
					// title: {
					// 	text: '安全隐患分布',
					// 	textStyle: {
					// 		fontSize: 20,
					// 		fontWeight: 'lighter',
					// 		color: '#9DB9FF'
					// 	}
					// },
					textStyle: {
						fontSize: 9,
						color: '#fff',
					},
					color: ['#3E7EF5', '#6EC543', '#8978FF', '#FE7C4B'],
					textStyle: {
						fontSize: 10,
						color: '#fff',
					},
					series: [{
						type: 'pie',
						radius: ['45%', '70%'],
            // center: ['50%', '50%'],
						label: {
							formatter: '{b}\n{c}',
						},
						data: this.data
					}]
				}
				return options
			},
		},
	}
</script>
<style lang='less' scoped>
	@import './styles.less';
</style>
