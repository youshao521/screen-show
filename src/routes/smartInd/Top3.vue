<template>
  <div class='top3'>
    <p class='midTitle'>被投诉企业top3</p>
    <div
      class='barBox'
      v-for='x in data'
    >
      <p class='barName'>{{x.name}}</p>
      <div class='barCont'>
        <div class='bar'>
          <div class='mask'></div>
          <div
            :style='{width:x.val/max*100+"%"}'
            class='perBar'
          ></div>
        </div>
        <p class='times'>
          <span>{{x.val}}</span>
          次
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { complaintTop3 } from '../../mock/smartInd_mock'
export default {
  name: 'Top3',
  components: {},
  data() {
    return {
      max: complaintTop3.max,
      data: complaintTop3.data,
    }
  },
}
</script>
<style lang='less' scoped>
@import './styles.less';
</style>