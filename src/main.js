import Vue from 'vue'
import Vuex from 'vuex'
import VCharts from 'v-charts'
import {
  Menu,Table,Row,Col,Form,Input,
  Button,Checkbox,Tooltip,Select,
  Modal,InputNumber,Tree,Pagination,TreeSelect,
} from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import createStore from './store/index.js';
Vue.use(Vuex)
Vue.use(TreeSelect)
Vue.use(Pagination)
Vue.use(Tree)
Vue.use(InputNumber)
Vue.use(Modal)
Vue.use(Menu)
Vue.use(Table)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Tooltip)
Vue.use(Select)
Vue.use(VCharts)
Vue.prototype.$comfirm = Modal.confirm
Vue.config.productionTip = false
document.title = 'start project'
const store = createStore();
router.beforeEach((to, from, next) => {

  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  next();

});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
