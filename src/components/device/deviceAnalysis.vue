
<template>
  <div :style="{ height: '55%' }">
    <div class="sub-title">仪表设备分析</div>
    <div class="analysis-content">
      <div class="power-machine">
        <div class="title">
          网络/电源机
        </div>
        <div class="fLeft">
          <div class="image-box power"/>
          <ul class="power-image-desc">
            <li>状态：{{chooseData.status}}</li>
            <li>电源：{{chooseData.power}}</li>
            <li>控制器：<span :style="{ color: `${chooseData.controlFlag ? '' : '#DD0000'}` }">{{chooseData.control}}</span></li>
            <li>I/O：{{chooseData.IO}}</li>
            <li>网络通讯：{{chooseData.network}}</li>
          </ul>
        </div>
        <div class="fLeft">
          <ul class="power-list">
            <li
              v-for="(item, index) in data"
              :class="deviceStatus(item.controlFlag, index)"
            >{{item.id}}</li>
          </ul>
        </div>
      </div>
      <div class="H2S-analyzer">
        <div class="title">
          硫化氢分析仪
        </div>
        <div class="image-box analyzer"/>
        <ul class="analyzer-detail">
          <li>所属装置：<span>混合烷烃脱氢装置</span></li>
          <li>设备名称：<span>硫化氢分析仪</span></li>
          <li>出厂编号：<span>AU32201</span></li>
          <li>位号：<span>1#</span></li>
          <li>测量组分：<span>硫化氢</span></li>
          <li>控制指标：<span>＜1ppm</span></li>
          <li>实时数据：<span>{{analyzerData}}mg/m³</span></li>
          <li>状态：<span>正常/异常</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import './style.less';
export default {
  name: 'DeviceAnalysis',
  data() {
    const data = [];
    for (let i = 1; i < 39; i++) {
      if (i === 1 || i === 19 || i === 26) {
        data.push({
          id: this.transformNumber(i),
          status: '正常',
          power: '正常',
          control: '异常',
          IO: '正常',
          network: '正常',
          controlFlag: false
        });
      } else {
        data.push({
          id: this.transformNumber(i),
          status: '正常',
          power: '正常',
          control: '正常',
          IO: '正常',
          network: '正常',
          controlFlag: true
        })
      }
    }
    return {
      data,
      chooseData: data[0],
      chooseNumber: 0,
      analyzerData: 2.55,
      baseData: 2.55
    };
  },
  mounted() {
    this.wanna = setInterval(this.choice, 60 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.wanna);
  },
  methods: {
    sum(m, n) {
      const num = Math.floor(Math.random()*(m - n) + n);
      return num;
    },
    transformNumber(value) {
      const str = value.toString();
      return str.length === 2 ? `C0${str}` : `C00${str}`;
    },
    choice() {
      this.chooseNumber++;
      if (this.chooseNumber > this.data.length - 1) {
        this.chooseNumber = 0;
      }
      this.chooseData = this.data[this.chooseNumber];
      this.analyzerData = parseFloat((this.baseData + this.sum(-3, 3)).toFixed(2));
    },
    deviceStatus(flag, number) {
      let color = '';
      let select = ''
      if (!flag) {
        color = 'red';
      } else {
        color = 'green';
      }
      if (number === this.chooseNumber) {
        select = 'selected';
      }
      return `${color} ${select}`;
    }
  }
}
</script>
