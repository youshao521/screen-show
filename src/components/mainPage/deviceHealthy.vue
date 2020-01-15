<template>
  <div class="healthy">
    <ul>
      <li
        v-for="item in healthyList"
      >
        <div class="healthy-title">{{item.name}}</div>
        <div>
          <div class="healthy-content healthy-color-box">
            <div class="healthy-color" :style="{ width: `${(Math.round(item.value / 100 * 10000) / 100.00)}%` }">
              <div class="healthy-color-shadow"></div>
            </div>
          </div>
          <div class="healthy-content">
            <span class="healthy-value">{{item.value}}</span>
            <span class="healthy-unit">{{item.unit}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DeviceHealthy',
  components: {},
  data() {
    return {
      healthyList: [
        {
          name: '正运行设备数',
          value: 80,
          unit: '件'
        },
        {
          name: '体检设备数',
          value: 20,
          unit: '件'
        }, {
          name: '诊断设备数',
          value: 20,
          unit: '件'
        }, {
          name: '停机设备数',
          value: 3,
          unit: '件'
        }, {
          name: '振动设备数',
          value: 7,
          unit: '件'
        }
      ]
    }
  },
  mounted() {
  },
  methods: {

  },
}
</script>