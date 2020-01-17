
<template>
  <div class="device-center">
    <ul class="device-baseinfo">
      <li>
        <div class="device-baseinfo-title">
          正常运行设备
        </div>
        <div class="device-baseinfo-box">
          <span class="device-baseinfo-number">{{data.normalRun}}</span>
          <span class="device-baseinfo-unit">个</span>
        </div>
      </li>
      <li>
        <div class="device-baseinfo-title">
          报警设备数
        </div>
        <div class="device-baseinfo-box">
          <span class="device-baseinfo-number red">{{data.alarmDevice}}</span>
          <span class="device-baseinfo-unit red">个</span>
        </div>
      </li>
      <li>
        <div class="device-baseinfo-count">
          <span class="title">故障次数</span>
          <span class="number">{{data.fault}}</span>
        </div>
        <div class="device-baseinfo-count">
          <span class="title">维保次数</span>
          <span class="number">{{data.project}}</span>
        </div>
      </li>
    </ul>
    <div class="baseinfo-swiper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../../assets/device/equipment_1.svg" width="890" height="700"/>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/device/equipment_2.svg" width="890" height="700"/>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/device/equipment_3.svg" width="890" height="700"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import './style.less';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      data: {
        normalRun: 1164,
        alarmDevice: 170,
        fault: 20,
        project: 356
      },
      dataBackup: {
        normalRun: 1164,
        alarmDevice: 170,
        fault: 20,
        project: 356
      },
      swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 60 * 1000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
  },
  mounted() {
    this.wanna = setInterval(this.changeValue, 60 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.wanna);
  },
  methods: {
    sum(m,n) {
      const num = Math.floor(Math.random()*(m - n) + n);
      return num;
    },
    changeValue() {
      const obj = {};
      for(const key in this.dataBackup) {
        obj[key] = this.dataBackup[key] + this.sum(-3, 3);
      }
      this.data = obj;
    }
  }
}
</script>
<style lang="less">
  .swiper-pagination-bullet {
    background: rgba(89,89,89);
  }
  .swiper-pagination-bullet-active {
    background: #F1F9FF;
  }
</style>