
<template>
  <div class="sup-map">
    <!--
      <ul class="itemTitle">
        <li
          v-for="item in staticList"
          :key="item.title"
        >
          <div class="iTitle">{{item.title}}</div>
          <div :style="{ 'text-align': 'center' }">
            <span class="iNum">{{item.num}}</span>
            <span class="iUnit">{{item.unit}}</span>
          </div>
        </li>
        <li>
          <div class="iTitle">产品单耗(标煤)</div>
          <div :style="{ 'text-align': 'center' }">
            <span class="iNum">{{useValue}}</span>
            <span class="iUnit">kg/t</span>
          </div>
        </li>
      </ul>
     -->
     <ul class="itemTitle">
        <li>
          <div class="iTitle">生产总值</div>
          <div class="bg-num" v-for="item in useValue.toString().length"></div>
          <div class="showNumBox">
            <span class="iNum">{{useValue}}</span>
            <span class="iUnit">万</span>
          </div>
        </li>
     </ul>
    <MapImage />
  </div>
</template>
<script>
import echarts from 'echarts';
import MapImage from './mapImage.vue';
import page from '../../../data/wisdom';
export default {
  name: 'Map',
  components: {
    MapImage
  },
  data() {
    return {
      staticList: page.mapData.staticList,
      standard: page.mapData.standard,
      useValue: 780250,
      float: page.mapData.float,
      min: 0,
      max: 0
    };
  },
  mounted() {
    this.min = this.standard - this.float;
    this.max = this.standard + this.float;
    // this.wanna = setInterval(this.changeValue, 60 * 1000);
  },
  beforeDestroy() {
    // clearInterval(this.wanna);
  },
  methods: {
    changeValue() {
      const random = (5-(Math.random()*10)).toFixed(1);
      let value = this.standard + parseFloat(random);
      if (value < this.min) {
        value = this.min;
      } else if (value > this.max) {
        value = this.max;
      }
      this.useValue = value.toFixed(1);
    }
  }
}
</script>
