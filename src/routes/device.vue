
<template>
  <div class="mainbox-device">
    <div class="mainTitle">
      <div class="titleContent">
        <i class="base-title-icon left"/>
        <span class="base-content">设备综合运维管理驾驶舱</span>
        <i class="base-title-icon right"/>
      </div>
    </div>
    <div class="content-box">
      <Left />
    </div>
    <div class="content-box">
      <Center />
    </div>
    <div class="content-box">
      <Right />
    </div>
  </div>
</template>
<script>
import '../components/device/style.less';
import Left from '../components/device/left.vue';
import Center from '../components/device/center.vue';
import Right from '../components/device/right.vue';
export default {
  components: {
    Left,
    Center,
    Right
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
