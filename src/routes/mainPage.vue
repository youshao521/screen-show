
<template>
  <div class="mainbox">
    <div class="mainTitle">
      <div class="titleContent">
        <i class="base-title-icon left"></i>
        <span class="base-content">智慧炼厂全景驾驶舱</span>
        <i class="base-title-icon right"></i>
      </div>
    </div>
    <div class="content-box">
      <LeftTop />
      <LeftBottom />
    </div>
    <div class="content-box">
      <Map />
    </div>
    <div class="content-box"></div>
  </div>
</template>
<script>
import '../components/mainPage/style.less';
import Map from '../components/mainPage/map.vue';
import LeftTop from '../components/mainPage/leftTop.vue';
import LeftBottom from '../components/mainPage/leftBottom.vue';
export default {
  components: {
    Map,
    LeftTop,
    LeftBottom
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
