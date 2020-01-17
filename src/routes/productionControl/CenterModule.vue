<template>
  <div class='block3'>
    <div class='showBox'>
      <div
        :key='i.name'
        class='items'
        v-for='(i,n) in list'
      >
        <p>{{i.name}}</p>
        <div class='itemValue'>
          <span class='itemNum'>{{n===0?i.num:(i.num).toFixed(2)}}</span>
          {{i.unit}}
        </div>
      </div>
    </div>
    <div
      :key='i.name'
      :style='{
          top:i.top+"px",
          left:i.left+"px"
        }'
      class='points'
      v-for='(i,n) in points'
    >
      <p
        class='norPoint'
        v-if='i.val===undefined'
      >{{i.name}}</p>
      <div
        class='spePoint'
        v-else
      >
        <div
          :style='{
          height: i.val*44/100+"px",
          top:i.progress.top+"px",
          left:i.progress.left+"px"
        }'
          class='progress'
          v-if='i.progress'
        />
        <p>{{i.name}}</p>
        <p class='pointVal'>
          <span class='pointNum'>{{i.val}}</span>
          {{i.unit}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterModule',
  props: ['list', 'points'],
  // data() {
  //   return {}
  // },
  mounted() {},
}
</script>
<style lang='less' scoped>
@import '../styles.less';
</style>
