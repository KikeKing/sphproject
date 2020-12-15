/*
 * @Author: your name
 * @Date: 2020-12-14 21:30:33
 * @LastEditTime: 2020-12-15 16:15:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\router\idnex.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from 'routes'
Vue.use(VueRouter);
export default new VueRouter({
    mode:"history",
    routes
})