/*
 * @Author: your name
 * @Date: 2020-12-14 16:08:12
 * @LastEditTime: 2020-12-16 19:02:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store'
import TypeNav from 'components/TypeNav/TypeNav'
import 'common/less/transition.less'
Vue.config.productionTip = false
Vue.component("TypeNav",TypeNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
