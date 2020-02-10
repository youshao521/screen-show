<template>
  <div class="box">
    <div class="box-title">设备健康状态</div>
    <div class="box-content">
      <div class="healthy1">
        <ul>
          <li
            v-for="item in healthyList"
          >
            <div class="healthy1-title">{{item.name}}</div>
            <div>
              <div class="healthy1-content healthy1-color-box">
                <div class="healthy1-color" :style="{ width: `${(Math.round(item.value[randomNumber] / 100 * 10000) / 100.00)}%` }">
                  <div class="healthy1-color-shadow"/>
                </div>
              </div>
              <div class="healthy1-content">
                <span class="healthy1-value">{{item.value[randomNumber]}}</span>
                <span class="healthy1-unit">{{item.unit}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import page from '../../../data/cockpit';
export default {
  name: 'DeviceHealthy',
  components: {},
  data() {
    return {
      healthyList: page.healthyList.data,
      randomNumber: 0
    }
  },
  mounted() {
    this.wanna = setInterval(this.random, 60 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.wanna);
  },
  methods: {
    random() {
      this.randomNumber = this.sum(0, 29);
    },
    sum(m, n) {
      const num = Math.floor(Math.random()*(m - n) + n);
      return num;
    },
  },
}
</script>