
<template>
  <div class="smallPage">
    <div class="small-page-single" :style="{ 'width': '50%'}">
      <div class="subTitle">市场份额分布</div>
      <Market />
    </div>
    <div class="small-page-single" :style="{ 'width': '50%'}">
      <div class="subTitle">分厂综合绩效</div>
      <Achievements />
    </div>
  </div>
</template>
<script>
import './style.less';
import page from '../../../data/wisdom';
import Market from './market.vue'
import Achievements from './Achievements.vue'
export default {
  name: 'LeftTop',
  components: {
    Market,
    Achievements
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  }
}
</script>
