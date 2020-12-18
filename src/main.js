/*
 * @Author: your name
 * @Date: 2020-12-14 16:08:12
 * @LastEditTime: 2020-12-18 21:08:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store'
import TypeNav from 'components/TypeNav/TypeNav'
import SwiperCom from 'components/SwiperComponent/SwiperCom'
// import Pagination from 'components/Pagination/Pagination'
import {Pagination} from 'element-ui'
import 'common/less/transition.less'
import 'mock/mock'
Vue.config.productionTip = false
Vue.component("TypeNav",TypeNav)
Vue.component("SwiperCom",SwiperCom)
// Vue.component("Pagination",Pagination)
Vue.component(Pagination.name,Pagination)
Vue.prototype.$bus=new Vue();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
