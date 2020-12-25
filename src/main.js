/*
 * @Author: your name
 * @Date: 2020-12-14 16:08:12
 * @LastEditTime: 2020-12-24 16:25:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store'
import 'common/less/transition.less'
import 'mock/mock'
import 'util/components'
import 'util/element'
import 'util/vee'
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
