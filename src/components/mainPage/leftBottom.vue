<template>
  <div class="smallPage">
    <div class="small-page-single" :style="{ 'width': '50%'}">
      <div class="subTitle">产品生产进度</div>
      <div class="healthy">
        <ul>
          <li
            v-for="item in healthyList1"
          >
            <div class="healthy-title">{{item.name}}</div>
            <div>
              <div class="healthy-content healthy-color-box">
                <div class="healthy-color" :style="{ width: `${(Math.round(item.value / 100 * 10000) / 100.00)}%` }">
                  <div class="healthy-color-shadow"/>
                </div>
              </div>
              <span class="healthy-value">{{`${(Math.round(item.value / 100 * 10000) / 100.00)}%`}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="small-page-single" :style="{ 'width': '50%'}">
      <div class="subTitle">&nbsp;</div>
      <div class="healthy">
        <ul>
          <li
            v-for="item in healthyList2"
          >
            <div class="healthy-title">{{item.name}}</div>
            <div>
              <div class="healthy-content healthy-color-box">
                <div class="healthy-color" :style="{ width: `${(Math.round(item.value / 100 * 10000) / 100.00)}%` }">
                  <div class="healthy-color-shadow"/>
                </div>
              </div>
              <span class="healthy-value">{{`${(Math.round(item.value / 100 * 10000) / 100.00)}%`}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

import page from '../../../data/wisdom';
export default {
  name: 'LeftBottom',
  components: {},
  data() {
    return {
      healthyList1: page.healthyList.data1,
      healthyList2: page.healthyList.data2
    }
  },
  mounted() {
    this.wanna = setInterval(this.changeValue, 3 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.wanna);
  },
  methods: {
    changeValue() {
      const obj1 = this.healthyList1.find(x => x.name === '混凝胶');
      const obj2 = this.healthyList1.find(x => x.name === '三氯氢硅');
      const obj3 = this.healthyList1.find(x => x.name === 'DMC');
      const obj4 = this.healthyList2.find(x => x.name === '甘霖颗粒剂');
      const obj5 = this.healthyList2.find(x => x.name === '三氯氧磷');
      obj1.value += 0.03;
      obj2.value += 0.03;
      obj3.value += 0.03;
      obj4.value += 0.03;
      obj5.value += 0.03;
    }
  },
}
</script>