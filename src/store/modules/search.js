/*
 * @Author: your name
 * @Date: 2020-12-18 18:58:13
 * @LastEditTime: 2020-12-18 19:21:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\store\modules\search.js
 */
import {getSearchData} from 'http'
const OK=200
export default {
    state:{
        searchList: {}
    },
    getters:{},
    mutations:{
        getSearchData(state,data){
            state.searchList=data
        }
    },
    actions:{
        async getSearchData(store,options){
            const {code,data} = await getSearchData(options)
            if(code === OK){
                store.commit('getSearchData',data)
            }
        }
    }
}