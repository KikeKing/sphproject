/*
 * @Author: your name
 * @Date: 2020-12-22 19:48:40
 * @LastEditTime: 2020-12-23 15:00:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\store\modules\cart.js
 */
import {addToCart,getCartList,updateChecked,deleteCart} from 'http';
const OK=200;
export default{
    state:{
        cartList:[]
    },
    getters:{
        cart_checkedAll(state){
            let flag=0;
            state.cartList.forEach((item)=>{
                if(item.isChecked===1){
                    flag+=1;
                }
            })
            return flag===state.cartList.length&&flag!==0
        },
        cart_skuNum(state){
            let index=0;
            state.cartList.forEach((item)=>{
                if(item.isChecked===1){
                    index+=1;
                }
            })
            return index;
        },
        cart_totalPrice(state){
            let price=0;
            state.cartList.forEach((item)=>{
                if(item.isChecked===1){
                    price+=item.skuPrice*item.skuNum;
                }
            })
            return price;
        }
    },
    mutations:{
        getCartList(state,data){
            state.cartList=data
        }
    },
    actions:{
        async deleteCheckedCart(store){
            let all=[];
            store.state.cartList.forEach(cartGood=>{
                if(cartGood.isChecked===1){
                    let promise = store.dispatch("deleteCart",cartGood.skuId)
                    all.push(promise);
                }
            })
            return Promise.all(all)
        },
        async deleteCart(store,skuId){
            const {code} = await deleteCart(skuId);
            if(code===OK){
             return code   
            }
        },
        async updateCheckedAll(store,allChecked){
            let all=[];
            store.state.cartList.forEach((cartGood)=>{
                if(cartGood.isChecked!==allChecked){
                    let promise = store.dispatch("updateChecked",{skuID:cartGood.skuId,isChecked:allChecked});
                    all.push(promise);
                }
            })
            return Promise.all(all);
        },
        async updateChecked(store,{skuID,isChecked}){
            try {
                const {code}=await updateChecked({skuID,isChecked});
                if(code===OK){
                    return code;
                }
            } catch (error) {
                throw new Error(error);                
            }
        },
        async addToCart(store,{skuId,skuNum}){
            try {
                const {code}= await addToCart(skuId,skuNum);
                return code;
            } catch (error) {
                throw new Error(error);
            }
        },
        async getCartList(store){
            const {code,data} = await getCartList();
            if(code===OK){
                store.commit("getCartList",data)
            }
            return data;
        }
    }
}