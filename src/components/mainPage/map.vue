
<template>
  <div class="sup-map">
    <ul class="itemTitle">
      <li
        v-for="item in staticList"
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
    <MapImage />
  </div>
</template>
<script>
import echarts from 'echarts';
import MapImage from './mapImage.vue';
export default {
  name: 'Map',
  components: {
    MapImage
  },
  data() {
    return {
      staticList: [
        {
          title: '合同额',
          num: 634.5,
          unit: '亿元'
        },
        {
          title: '订单总量',
          num: 2236,
          unit: '个'
        },
        {
          title: '订单完成率',
          num: 94.1,
          unit: '%'
        }
      ],
      standard: 100.3,
      useValue: 100.3,
      float: 5,
      min: 0,
      max: 0
    };
  },
  mounted() {
    this.min = this.standard - this.float;
    this.max = this.standard + this.float;
    this.changeValue();
    this.wanna = setInterval(this.changeValue, 60 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.wanna);
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
