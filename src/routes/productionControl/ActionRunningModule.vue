<template>
  <div class='block2'>
    <p class='smtitle'>操作运行</p>
    <div class='itemsList'>
      <div
        :key='i.name'
        class='itemBox'
        v-for='i in list'
      >
        <div class='itemTitle'>{{i.name}}</div>
        <div class='itemChart'>
          <Chart :options='i.options' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '../../components/chart/chart'
export default {
  name: 'ActionRunningModule',
  components: { Chart },
  props: ['list'],
}
</script>
<style lang='less' scoped>
@import '../styles.less';
</style>
