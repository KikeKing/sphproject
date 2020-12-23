/*
 * @Author: your name
 * @Date: 2020-12-22 21:08:24
 * @LastEditTime: 2020-12-23 21:20:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\store\modules\user.js
 */
import {getUUID} from 'util/uuid'
import {login,logout,autoLogin,register} from 'http'
const OK=200
export default {
    state:{
        uuid:getUUID(),
        userInfo:{}
    },
    getters:{},
    mutations:{
        login(state,data){
            state.userInfo=data
        }
    },
    actions:{
        async login(store,{phone,password}){
            const {code,data}= await login(phone,password);
            if(code===OK){
                store.commit('login',data);
            }
            return code
        },
        async logout(store){
            const {code} =await logout();
            if(code===OK){
                return code
            }
        }
    }
}