
<template>
  <div class="mainbox">
    <div class="mainTitle">
      <div class="titleContent">
        <i class="base-title-icon left"/>
        <span class="base-content">智能互联工厂管控驾驶舱</span>
        <i class="base-title-icon right"/>
      </div>
    </div>
    <Left/>
    <Center />
    <Right />
    <Bottom />
  </div>
</template>
<script>
import Center from '../components/cockpit/center';
import Bottom from '../components/cockpit/bottom';
import Left from '../components/cockpit/left';
import Right from '../components/cockpit/right';
import '../components/cockpit/style.less';
export default {
  components: {
    Center,
    Bottom,
    Left,
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
