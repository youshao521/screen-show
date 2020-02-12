// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";
import index from "./routes/index";
import mainPage from "./routes/mainPage";
import device from "./routes/device";
import cockpit from "./routes/cockpit";
import parkCommand from "./routes/parkCommand";
import ProductionControl from './routes/productionControl'
import SmartInd from './routes/smartInd'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: '/prodCtrl',
      name: 'prodCtrl',
      component: ProductionControl,
    },
    {
      path: '/smartInd',
      name: 'SmartInd',
      component: SmartInd,
    },
    {
      path: "/mainPage",
      name: "mainPage",
      meta: {
        title: '多地协同集团全景驾驶舱 '
      },
      component: mainPage
    },
    {
      path: "/device",
      name: "device",
      meta: {
        title: '工厂设备运行管理驾驶舱 '
      },
      component: device
    },
    {
      path: "/cockpit",
      name: "cockpit",
      meta: {
        title: '智能互联工厂管控驾驶舱'
      },
      component: cockpit
    }
  ]
});
