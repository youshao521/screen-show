<template>
  <div class="smallPage" :style="{ height: '55%' }">
    <div class="small-page-single" :style="{ 'width': '50%'}">
      <div class="subTitle">设备健康状态</div>
      <DeviceHealthy />
    </div>
    <div class="small-page-single" :style="{ 'width': '50%'}">
      <div class="subTitle">装置环保超标统计</div>
      <DeviceStatistics />
    </div>
  </div>
</template>
<script>
import DeviceHealthy from './deviceHealthy.vue';
import DeviceStatistics from './deviceStatistics.vue';
export default {
  name: 'RightBottom',
  components: {
    DeviceHealthy,
    DeviceStatistics
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {

  },
}
</script>