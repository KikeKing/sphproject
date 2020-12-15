/*
 * @Author: your name
 * @Date: 2020-12-14 16:08:12
 * @LastEditTime: 2020-12-15 16:14:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from 'router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
