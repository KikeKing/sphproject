/*
 * @Author: your name
 * @Date: 2020-12-26 08:48:46
 * @LastEditTime: 2020-12-28 21:08:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\store\modules\order.js
 */
import {getOrderTrade,getOrderList,submitOrder,getOrderPay,queryPayStatus} from 'http';
const OK=200;
export default {
    state:{
        tradeInfo:{},
        orderList:{},
        payInfo:{}
    },
    getters:{},
    mutations:{
        getTradeInfo(state,data){
            state.tradeInfo=data
        },
        getOrderPay(state,data){
            state.payInfo=data
        },
        getOrderList(state,data){
            state.orderList=data
        }
    },
    actions:{
        async getTradeInfo(store){
            const {code,data} = await getOrderTrade();
            if(code===OK){
                store.commit("getTradeInfo",data)
            }
            return code
        },
        async submitOrder(store,{tradeNo,order}){        
            const {code,data} = await submitOrder(tradeNo,order);
            return {code,data}
        },
        async getOrderPay(store,orderId){
            const {code,data} = await getOrderPay (orderId);
            if(code===OK){
                store.commit('getOrderPay',data)
            }
            return {code,data}
        },
        async queryPayStatus(store,orderId){
            const {code} = await queryPayStatus(orderId);
            return code
        },
        async getOrderList(store,{page,limit}){
            const {code,data}= await getOrderList(page,limit);
            if(code===OK){
                store.commit('getOrderList',data)
            }
            return code
        }
    }
}