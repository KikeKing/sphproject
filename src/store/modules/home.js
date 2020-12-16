/*
 * @Author: your name
 * @Date: 2020-12-15 20:27:20
 * @LastEditTime: 2020-12-16 21:14:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\store\modules\home.js
 */
import {getBaseCategoryList,getBanners,getFloors} from "http";
const OK=200;
export default {
    state:{
        categoryList: [],
        banners: [],
        floors:[]
    },
    getters:{},
    mutations:{
        getBaseCategoryList(state,data){
            state.categoryList=data;
        },
        getBanners(state,data){
            state.banners=data;
        },
        getFloors(state,data){
            state.floors=data;
        }
    },
    actions:{
        async getBaseCategoryList(store){
            const {code,data}=await getBaseCategoryList();
            if(code===OK){
                store.commit("getBaseCategoryList",data)
            }
        },
        async getBanners(store){
            const {code,data} = await getBanners();
            if(code===OK){
                store.commit("getBanners",data)
            }
        },
        async getFloors(store){
            const {code,data} = await getFloors();
            if(code===OK) {
                store.commit("getFloors",data)
            }
        }
    }
}