<template>
  <div class='block1'>
    <p class='smtitle'>重要运行参数</p>
    <div class='itemsList'>
      <div
        :key='i.name'
        class='items'
        v-for='i in list'
      >
        <p>{{i.name}}</p>
        <span>{{i.val.toFixed(2)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImportRunOptsModule',
  props: ['list'],
  data() {
    // console.log(this.list)
    return {
      // list,
    }
  },
}
</script>
<style lang='less' scoped>
@import '../styles.less';
</style>
