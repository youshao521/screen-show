
<template>
  <div class="smallPage">
    <div class="subTitle" :style="{ 'text-align': 'center' }">园区概况</div>
    <ul class="park">
      <li
        class="park-item"
        v-for="(item, index) in data"
        :key="item.title"
        :style="{ height: `${(Math.round(item.value / item.max * 10000) / 100.00)}%` }"
      >
        <div :class="index === 3 ? 'park-item-red' : 'park-item-blue'"/>
        <div class="park-percent">
          <span class="percent">{{(Math.round(item.value / item.max * 10000) / 100.00)}}</span>
          <span class="percent-unit">%</span>
        </div>
        <div class="park-detail">
          <div class="park-subtitle">{{item.subtitle}}</div>
          <div class="park-value">
            <span class="park-value-detail">{{item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</span>
            <span>吨</span>
          </div>
        </div>
        <div class="park-title">{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import './style.less';
import page from '../../../data/wisdom';
export default {
  name: 'LeftTop',
  components: {},
  data() {
    return {
      data: page.parkSurvey
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
