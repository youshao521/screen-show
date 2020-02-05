
<template>
  <div class="cockpit-left">
    <div class="weather">
      <span class="time">17:28</span>
      <span class="date">1月4日</span>
      <span class="date">周六</span>
      <div class="weather-desc">
        <b>宁波</b>
        <div>七日天气</div>
      </div>
      <div class="weather-icon"></div>
      <div class="weather-desc">
        <div>今天</div>
        <div>4～14°C</div>
      </div>
    </div>
    <Consume/>
    <Security/>
    <DeviceHealthy/>
    <DeviceStatistics/>
  </div>
</template>
<script>
import './style.less';
import Consume from './consume.vue';
import Security from './security.vue';
import DeviceHealthy from './deviceHealthy.vue';
import DeviceStatistics from './deviceStatistics.vue';
export default {
  components: {
    Consume,
    Security,
    DeviceHealthy,
    DeviceStatistics
  },
  data() {
    return {
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
