<template>
  <div class="container">
    <div class="header" >
      智慧工业园区运维驾驶舱
    </div>
    <div class="body">
      <div class="left">
        <Menu />
        <Safe />
        <Pic />
      </div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>

import '../components/parkCommand/style.less';
import Menu from '../components/parkCommand/menu.vue';
import Pic from '../components/parkCommand/pic.vue';
import Safe from '../components/parkCommand/safe.vue';
export default {
  components: {
    Menu,
    Safe,
    Pic
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