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
  },
  methods: {

  },
}
</script>