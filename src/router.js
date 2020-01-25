// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";
import index from "./routes/index";
import mainPage from "./routes/mainPage";
import device from "./routes/device";
import parkCommand from "./routes/parkCommand";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/mainPage",
      name: "mainPage",
      component: mainPage
    },
    {
      path: "/device",
      name: "device",
      component: device
    },
    {
      path: "/parkCommand",
      name: "parkCommand",
      meta: {
          title: '智慧工业园区运维驾驶舱 '
      },
      component: parkCommand
    }
  ]
});
