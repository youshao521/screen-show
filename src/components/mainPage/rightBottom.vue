
<template>
	<div class="smallPage" :style="{ height: '50%' }">
		<div class="subTitle" :style="{ 'padding-left': '93px' }">库存统计</div>
		<ul class="stock">
			<li v-for="item in data">
				<div class="stock-title">
					{{item.name1}}/{{item.name2}}
				</div>
				<div class="stock-content">
					{{item.value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}/{{item.value2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}
				</div>
			</li>
		</ul>
		<div class="stock-bg">
			<div class="stock-bg-single">
				<b class="stock-desc-b">- 中性杂色胶9278</b>
				<ul class="stock-desc">
					<li>- 商品编号：275227</li>
					<li>- 生产批次：1712011011</li>
					<li>- 规格：软包1（590ml碳酸钙）</li>
					<li>- 质量类型：合格</li>
					<li>- 库位：C5R4L2</li>
					<li>- 库存数量：40</li>
					<li>- 可用数量：40</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import './style.less';
import page from '../../../data/wisdom';
export default {
	name: 'RightTop',
	components: {},
	data() {
		return {
			data: page.stock.data
		};
	},
	mounted() {
		this.wanna = setInterval(this.changeValue, 5 * 1000);
	},
	beforeDestroy() {
		clearInterval(this.wanna);
	},
	methods: {
		changeValue() {
			const obj1 = this.data.find(x => x.name1 === '可用库存数量');
			const obj2 = this.data.find(x => x.name1 === '当天入库总量');
			obj1.value1 -= 1;
			obj2.value1 += 2;
			obj2.value2 += 1;
		}
	}
}
</script>
