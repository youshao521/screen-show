<template>
  <div class="smallPage" :style="{ 'padding-bottom': '140px'}">
    <div class="small-page-single" :style="{ 'width': '50%'}">
      <div class="subTitle">能耗数据</div>
      <BarChart />
    </div>
    <div class="small-page-single" :style="{ 'width': '50%'}">
      <div class="subTitle">安全隐患管理</div>
      <PieChart />
    </div>
  </div>
</template>
<script>
import BarChart from './barChart.vue';
import PieChart from './pieChart.vue';
export default {
  name: 'LeftBottom',
  components: {
    BarChart,
    PieChart
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {

  },
}
</script>