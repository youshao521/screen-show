<template>
  <div class="box">
    <div class="box-title">能耗数据</div>
    <div class="box-content">
      <div class="healthy">
        <ul>
          <li
            v-for="item in healthyList"
          >
            <div class="healthy-title">{{item.name}}</div>
            <div>
              <div class="healthy-content healthy-color-box">
                <div class="healthy-color" :style="{ width: `${(Math.round(item.value / 100 * 10000) / 100.00)}%` }">
                  <div class="healthy-color-shadow"/>
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
    </div>
  </div>
</template>
<script>
import page from '../../../data/cockpit';
export default {
  name: 'DeviceHealthy',
  components: {},
  data() {
    return {
      healthyList: page.healthyList.data
    }
  },
  mounted() {
  },
  methods: {

  },
}
</script>