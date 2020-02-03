
<template>
  <div class="map-image">
    <div
      class="map-image-item"
      v-for="(item, index) in data"
      :style="{ top: `${item.top}px`, left: `${item.left}px` }"
      :key="index"
    >
      <div class="map-image-title">{{item.name}}</div>
      <div>
        <span class="map-image-num">{{item.gasoline}}</span>
        <span class="map-image-unit">吨</span>
      </div>
      <template v-if="item.name1">
        <div class="map-image-title">{{item.name1}}</div>
        <div>
          <span class="map-image-num">{{item.gasoline1}}</span>
          <span class="map-image-unit">吨</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import page from '../../../data/wisdom';
export default {
  name: 'MapImage',
  data() {
    return {
      data: [],
      // data: page.mapGasoline.baseData,
      min: page.mapGasoline.min,
      max: page.mapGasoline.max,
      increaseMin: page.mapGasoline.increaseMin,
      increaseMax: page.mapGasoline.increaseMax
    };
  },
  mounted() {
    // this.wanna = setInterval(this.changeValue, 60 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.wanna);
  },
  methods: {
    changeValue() {
      this.data = this.data.map((x) => {
        let obj = {};
        if (x.name1) {
          obj = {
            gasoline: this.sum(this.increaseMin, this.increaseMax) * this.sum(this.min, this.max),
            gasoline1: this.sum(this.increaseMin, this.increaseMax) * this.sum(this.min, this.max)
          }
        } else {
          obj = {
            gasoline: this.sum(this.increaseMin, this.increaseMax) * this.sum(this.min, this.max)
          }
        }
        return Object.assign(x, obj);
      });
    },
    sum(m, n) {
      const num = Math.floor(Math.random()*(m - n) + n);
      return num;
    }
  }
}
</script>
