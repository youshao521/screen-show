
<template>
  <div class="smallPage" :style="{ height: '45%' }">
    <div class="subTitle">车辆调度</div>
    <div class="car-image">
      <div
        v-for="item in data"
        :class="retClass(item)"
        :style="{ top: `${item.top}px`, left: `${item.left}px` }"
      >
        <div>
          <span class="car-count">{{item.value}}</span>
          <span class="car-count-unit">辆</span>
        </div>
        <div class="car-count-name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import './style.less';
export default {
  name: 'RightTop',
  components: {},
  data() {
    return {
      jamList: ['化验', '卸车', '装车'],
      data: [
        {
          top: 38,
          left: 100,
          name: '入园',
          value: 300
        },
        {
          top: 38,
          left: 242,
          name: '排队',
          value: 100
        },
        {
          top: 38,
          left: 385,
          name: '化验',
          value: 50
        },
        {
          top: 125,
          left: 526,
          name: '卸车',
          value: 50
        },
        {
          top: 212,
          left: 385,
          name: '装车',
          value: 50
        },
        {
          top: 212,
          left: 242,
          name: '出厂',
          value: 50
        },
        {
          top: 212,
          left: 100,
          name: '出园',
          value: 300
        }
      ]
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    sum(m,n) {
      const num = Math.floor(Math.random()*(m - n) + n);
      return num;
    },
    retClass(obj) {
      let str = '';
      if (obj.name === '化验' && obj.value > 40) {
        str = 'car-count-jam';
      } else if (obj.name === '卸车' && obj.value > 20) {
        str = 'car-count-jam';
      } else if (obj.name === '装车' && obj.value > 50) {
        str = 'car-count-jam';
      } else {
        str = 'car-count-normal';
      }
      return str
    }
  }
}
</script>
