// @ts-nocheck
import Vue from 'vue';
import Router from 'vue-router';
import index from './routes/index';
import mainPage from './routes/mainPage';
Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/TechMgr',
      path: '/',
      name: 'index',
      component: index,
    },
    {
      // path: '/TechMgr',
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage,
    },
  ],
})
