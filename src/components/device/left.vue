
<template>
  <div class="device">
    <div class="device-chart half">
      <div class="sub-title">设备预警统计</div>
      <BarChart />
    </div>
    <div class="device-chart half">
      <div class="sub-title">今日报警 Top5</div>
      <TopAlarm />
    </div>
    <div class="device-chart half">
      <div class="sub-title">故障数量统计</div>
      <LineChart />
    </div>
    <div class="device-chart half">
      <div class="sub-title">今日故障 Top5</div>
      <TopFault />
    </div>
    <div class="device-chart">
      <div class="sub-title">腐蚀检测</div>
      <LineAreaChart />
    </div>
  </div>
</template>
<script>
import './style.less';
import BarChart from './barChart.vue';
import TopAlarm from './topAlarm.vue';
import LineChart from './lineChart.vue';
import TopFault from './topFault.vue';
import LineAreaChart from './lineAreaChart.vue';
export default {
  components: {
    BarChart,
    TopAlarm,
    LineChart,
    TopFault,
    LineAreaChart,
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
