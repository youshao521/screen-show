// @ts-nocheck
import Vue from 'vue';
import Router from 'vue-router';
import index from './routes/index';
import mainPage from './routes/mainPage';
import device from './routes/device';
import cockpit from './routes/cockpit';
import ProductionControl from './routes/productionControl'
import Safe from './routes/safe'
import SmartInd from './routes/smartInd'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/prodCtrl',
      name: 'prodCtrl',
      meta: {
        title: '工厂生产操作管理驾驶舱'
      },
      component: ProductionControl,
    },
    {
      path: '/safe',
      name: 'safe',
      meta: {
        title: '工厂安全环保管理驾驶舱'
      },
      component: Safe,
    },
    {
      path: '/smartInd',
      name: 'SmartInd',
      meta: {
        title: '智慧工业园区运维驾驶舱'
      },
      component: SmartInd,
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      meta: {
        title: '集团异地业务协同全景驾驶舱'
      },
      component: mainPage
    },
    {
      path: '/device',
      name: 'device',
      meta: {
        title: '工厂设备运行管理驾驶舱'
      },
      component: device
    },
    {
      path: '/cockpit',
      name: 'cockpit',
      meta: {
        title: '智能互联工厂管控驾驶舱'
      },
      component: cockpit
    }
  ]
});
