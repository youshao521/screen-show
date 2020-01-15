
<template>
  <div class="smallPage">
    <div class="subTitle" :style="{ 'text-align': 'center' }">园区概况</div>
    <ul class="park">
      <li
        class="park-item"
        v-for="(item, index) in data"
        :style="{ height: `${(Math.round(item.value / item.max * 10000) / 100.00)}%` }"
      >
        <div :class="index === 3 ? 'park-item-red' : 'park-item-blue'"></div>
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
export default {
  name: 'LeftTop',
  components: {},
  data() {
    return {
      data: [
        {
          max: 100000,
          value: 80000,
          subtitle: '本年采购量',
          title: '采购',
          unit: '%'
        }, {
          max: 160000,
          value: 147200,
          subtitle: '本年销售总量',
          title: '销售',
          unit: '%'
        }, {
          max: 180000,
          value: 154800,
          subtitle: '本年生产总量',
          title: '生产',
          unit: '%'
        }, {
          max: 20000,
          value: 8000,
          subtitle: '本年库存量',
          title: '库存',
          unit: '%'
        }
      ]
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
