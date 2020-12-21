/*
 * @Author: your name
 * @Date: 2020-12-21 20:37:14
 * @LastEditTime: 2020-12-22 00:40:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\store\modules\detail.js
 */
import {getDetail} from 'http'
const OK=200;
export default {
    state:{
        detailList:""
    },
    getters:{},
    mutations:{
        getDetail(state,data){
            state.detailList=data
        },
        activeFn(state,{attrIndex,valueIndex}){
            state.detailList.spuSaleAttrList.forEach((attr,index)=>{
                  if(attrIndex===index){
                      attr.spuSaleAttrValueList.forEach(val=>{
                          val.isChecked="0";
                      })
                  }
                })
            state.detailList.spuSaleAttrList[attrIndex].spuSaleAttrValueList[valueIndex].isChecked="1";
            }
    },
    actions:{
        async getDetail(store,skuId){
            const {code,data}= await getDetail(skuId);
            if(code === OK){
                store.commit('getDetail',data)
            }
        },
        activeFn({commit},{attrIndex,valueIndex}){
            commit("activeFn",{attrIndex,valueIndex})
        }
    }
}