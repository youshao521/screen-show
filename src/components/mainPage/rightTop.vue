
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
      <div class="car-arrow right" :style="{ top: '52px', left: '50px' }"></div>
      <div class="car-arrow right" :style="{ top: '52px', left: '192px' }"></div>
      <div class="car-arrow right" :style="{ top: '52px', left: '336px' }"></div>
      <template>
        <template v-if="data.find(x => x.name === '化验').value > 40">
          <div class="car-turn right_red" :style="{ top: '58px', left: '480px' }">
            <div class="jam_tip" :style="{ top: '6px', left: '50px' }">拥堵</div>
          </div>
        </template>
        <template v-else>
          <div class="car-turn right" :style="{ top: '58px', left: '480px' }"></div>
        </template>
      </template>
      <template>
        <template v-if="data.find(x => x.name === '卸车').value > 20">
          <div class="car-turn left_red" :style="{ top: '174px', left: '480px' }">
            <div class="jam_tip" :style="{ top: '38px', left: '50px' }">拥堵</div>
          </div>
        </template>
        <template v-else>
          <div class="car-turn left" :style="{ top: '174px', left: '480px' }"></div>
        </template>
      </template>
      <template>
        <template v-if="data.find(x => x.name === '装车').value > 50">
          <div class="car-arrow left_red" :style="{ top: '226px', left: '336px' }">
            <div class="jam_tip" :style="{ top: '-3px', left: '21px' }">拥堵</div>
          </div>
        </template>
        <template v-else>
          <div class="car-arrow left" :style="{ top: '226px', left: '336px' }"></div>
        </template>
      </template>
      <div class="car-arrow left" :style="{ top: '226px', left: '191px' }"></div>
      <div class="car-arrow left" :style="{ top: '226px', left: '48px' }"></div>
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
          left: 244,
          name: '排队',
          value: 100
        },
        {
          top: 38,
          left: 388,
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
          left: 388,
          name: '装车',
          value: 45
        },
        {
          top: 212,
          left: 244,
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
