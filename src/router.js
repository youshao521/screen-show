// @ts-nocheck
import Vue from 'vue';
import Router from 'vue-router';
import index from './routes/index';
import mainPage from './routes/mainPage';
import device from './routes/device';
import ProductionControl from './routes/productionControl'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/prodCtrl',
      name: 'prodCtrl',
      component: ProductionControl,
    },
    {
      // path: '/TechMgr',
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage,
    },
    {
      path: '/device',
      name: 'device',
      component: device,
    }
  ],
})
