
<template>
  <div class="taskbar">
    <ul class="history">
      <li v-for="item in data">
        <i :class="`app app_${item}`"></i>
        <i class="small_circle"></i>
      </li>
    </ul>
    <div class="bottom_border"></div>
    <ul class="quick">
      <li>
        <i class="bottom_icon apply"></i>
        <span class="button_icon_desc">应用</span>
      </li>
      <li>
        <i class="bottom_icon component"></i>
        <span class="button_icon_desc">组件</span>
      </li>
      <li>
        <i class="bottom_icon back"></i>
        <span class="button_icon_desc">回到电脑</span>
      </li>
    </ul>
  </div>
</template>
<script>
import './style.less';
export default {
  components: {

  },
  data() {
    return {
      data: [1,2,3,4,5]
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
