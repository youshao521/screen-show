
<template>
  <div class="mainbox">
    <div class="mainTitle">
      <div class="titleContent">
        <i class="base-title-icon left"/>
        <span class="base-content">集团异地业务协同全景驾驶舱</span>
        <i class="base-title-icon right"/>
      </div>
    </div>
    <div class="content-box">
      <LeftTop />
      <LeftBottom />
    </div>
    <div class="content-box">
      <Map />
    </div>
    <div class="content-box">
      <RightTop />
      <RightBottom />
    </div>
  </div>
</template>
<script>
import '../components/mainPage/style.less';
import Map from '../components/mainPage/map.vue';
import LeftTop from '../components/mainPage/leftTop.vue';
import LeftBottom from '../components/mainPage/leftBottom.vue';
import RightTop from '../components/mainPage/rightTop.vue';
import RightBottom from '../components/mainPage/rightBottom.vue';
export default {
  components: {
    Map,
    LeftTop,
    LeftBottom,
    RightTop,
    RightBottom
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
