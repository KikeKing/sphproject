/*
 * @Author: your name
 * @Date: 2020-12-14 21:30:33
 * @LastEditTime: 2020-12-22 13:57:09
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
    routes,
    scrollBehavior(){
        return {x:0,y:0}
    }
})