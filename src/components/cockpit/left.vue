
<template>
  <div class="cockpit-left">
    <div class="weather">
      <span class="time">{{baseWeather.time}}</span>
      <span class="date">{{baseWeather.date}}</span>
      <span class="date">{{baseWeather.week}}</span>
      <div class="weather-desc">
        <b>{{baseWeather.place}}</b>
        <div>七日天气</div>
      </div>
      <div class="weather-icon"></div>
      <div class="weather-desc">
        <div>今天</div>
        <div>{{baseWeather.temperature}}</div>
      </div>
    </div>
    <Consume/>
    <Security/>
    <DeviceHealthy/>
    <DeviceStatistics/>
  </div>
</template>
<script>
import './style.less';
import Consume from './consume.vue';
import Security from './security.vue';
import DeviceHealthy from './deviceHealthy.vue';
import DeviceStatistics from './deviceStatistics.vue';
import page from '../../../data/cockpit';
export default {
  components: {
    Consume,
    Security,
    DeviceHealthy,
    DeviceStatistics
  },
  data() {
    return {
      baseWeather: page.baseWeather
    };
  },
  mounted() {
    this.timeChange();
  },
  beforeDestroy() {
  },
  methods: {
    timeChange() {
      const date = new Date();
      this.baseWeather.time = this.dateFormat('HH:MM', date);
      this.baseWeather.date = this.dateFormat('mm月dd日', date);
      switch(date.getDay()) {
        case 1: 
          this.baseWeather.week = '周一';
          break;
        case 2: 
          this.baseWeather.week = '周二';
          break;
        case 3: 
          this.baseWeather.week = '周三';
          break;
        case 4: 
          this.baseWeather.week = '周四';
          break;
        case 5: 
          this.baseWeather.week = '周五';
          break;
        case 6: 
          this.baseWeather.week = '周六';
          break;
        case 7: 
          this.baseWeather.week = '周日';
          break;
      }
    },
    dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
      };
      return fmt;
    }
  }
}
</script>
