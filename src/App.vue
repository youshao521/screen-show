<template>
  <div id='app'>
    <router-view />
  </div>
</template>
<script>
import './App.less';
export default {
  data() {
    return {
      index: 0,
      href: window.location.href,
      data: [
        'mainPage',
        'smartInd',
        'cockpit',
        'device',
        'prodCtrl',
        'safe'
      ]
    };
  },
  mounted() {
    window.location.href = `${this.href}${this.data[this.index]}`;
    setInterval(() => {
      this.index += 1;
      if (this.index > 5) {
        this.index = 0;
      }
      window.location.href = `${this.href}${this.data[this.index]}`;
    }, 10 * 1000);
  },
}
</script>
