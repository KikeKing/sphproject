/*
 * @Author: your name
 * @Date: 2020-12-15 20:27:20
 * @LastEditTime: 2020-12-15 21:24:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\store\modules\home.js
 */
import {getBaseCategoryList} from "http";
const OK=200;
export default {
    state:{
        categoryList: []
    },
    getters:{},
    mutations:{
        getBaseCategoryList(state,data){
            state.categoryList=data;
        }
    },
    actions:{
        async getBaseCategoryList(store){
            const {code,data}=await getBaseCategoryList();
            if(code===OK){
                store.commit("getBaseCategoryList",data)
            }
        }
    }
}