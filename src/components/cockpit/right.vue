
<template>
  <div class="cockpit-right">
    <ul class="app-list">
      <li v-for="item in data">
        <template v-if="item.multiple">
          <div class="app-box">
            <div v-for="x in item.list" :class="`small-app small-app${x}`"></div>
          </div>
        </template>
        <template v-else>
          <div :class="`small-app${item.list}`"></div>
        </template>
        <div class="app-title">{{item.name}}</div>
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
      data: [
        {
          name: '平台运维',
          multiple: true,
          list: [1, 2, 3, 4]
        },
        {
          name: '安全管理',
          multiple: true,
          list: [5, 6, 7, 8]
        },
        {
          name: '质量管理',
          multiple: true,
          list: [9, 10, 11, 12]
        },
        {
          name: '设备管理',
          multiple: true,
          list: [13, 14, 15, 16]
        },
        {
          name: '生产管理',
          multiple: true,
          list: [17, 18, 19, 20]
        },
        {
          name: '技术管理',
          multiple: true,
          list: [21, 22, 23, 24]
        },
        {
          name: '环保管理',
          multiple: true,
          list: [25, 26, 27, 28]
        },
        {
          name: 'APP商城',
          multiple: false,
          list: 29
        },
        {
          name: '智能操作管理',
          multiple: false,
          list: 30
        },
        {
          name: 'SPC质量',
          multiple: false,
          list: 31
        },
        {
          name: '生产报工管理',
          multiple: false,
          list: 32
        }
      ]
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
