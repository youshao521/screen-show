
<template>
  <div class="base-info">
    <ul class="base-description-box">
      <li>
        <span class="base-description-title purple">使命</span>
        <span class="base-description-content">绿色化学创新美好生活！</span>
      </li>
      <li>
        <span class="base-description-title orange">愿景</span>
        <span class="base-description-content">成为全球领先的绿色化学企业！</span>
      </li>
      <li>
        <span class="base-description-title green">责任</span>
        <span class="base-description-content">担起能化产业高质量发展的重任！</span>
      </li>
    </ul>
    <ul class="base-number-box">
      <li v-for="item in staticList">
        <span class="base-number-title">{{item.title}}</span>
        <span class="base-number-content">{{item.num}}{{item.unit}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import './style.less';
export default {
  components: {

  },
  data() {
    return {
      staticList: [
        {
          title: '合同额',
          num:  634.5, // 合同额基础数据
          unit: '亿元'
        },
        {
          title: '订单总量',
          num: 2236, // 订单总量基础数据
          unit: '个'
        },
        {
          title: '订单完成率',
          num: 94.1, // 订单完成率基础数据
          unit: '%'
        },
        {
          title: '产品单耗(标煤)',
          num: 100.3, // 产品单耗(标煤)
          unit: 'kg/t'
        }
      ],
      standardPercent: 94.1,
      standard: 100.3, // 产品单耗(标煤)基础数据
      float: 5, // 产品单耗(标煤)上下浮动值
      min: 0,
      max: 0
    };
  },
  mounted() {
    this.min = this.standard - this.float;
    this.max = this.standard + this.float;
    this.wanna = setInterval(this.changeValue, 60 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.wanna);
  },
  methods: {
    changeValue() {
      const random = (5-(Math.random()*10)).toFixed(1);
      let value = this.standard + parseFloat(random);
      if (value < this.min) {
        value = this.min;
      } else if (value > this.max) {
        value = this.max;
      }
      this.staticList.find(x => x.title === '产品单耗(标煤)').num = value.toFixed(1);
      let nowValue = parseFloat(this.staticList.find(x => x.title === '订单完成率').num);
      if (nowValue === 100) {
        this.staticList.find(x => x.title === '订单完成率').num = this.standardPercent;
      } else {
        nowValue += 0.1;
        this.staticList.find(x => x.title === '订单完成率').num = nowValue.toFixed(1);
      }
    }
  }
}
</script>
