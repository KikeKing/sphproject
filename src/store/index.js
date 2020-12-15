/*
 * @Author: your name
 * @Date: 2020-12-15 10:08:55
 * @LastEditTime: 2020-12-15 16:08:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\store\index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        
    }
})