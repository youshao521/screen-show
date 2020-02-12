
<template>
  <div class="device">
    <DeviceAnalysis />
    <FaultRecord />
  </div>
</template>
<script>
import './style.less';
import DeviceAnalysis from './deviceAnalysis.vue';
import FaultRecord from './faultRecord.vue';
export default {
  components: {
    DeviceAnalysis,
    FaultRecord
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
