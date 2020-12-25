/*
 * @Author: your name
 * @Date: 2020-12-22 21:08:24
 * @LastEditTime: 2020-12-25 19:25:38
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
            const {code,data,message}= await login(phone,password);
            if(code===OK){
                window.localStorage.setItem('sph_token',data.token);
                store.commit('login',data);
            }
            return {code,message};
        },
        async logout(store){
            const {code} =await logout();
            if(code===OK){
                window.localStorage.removeItem('sph_token')
                store.commit('login',{})
            }
            return code
        },
        async register (store,{phone,password,registercode}){
            const {code} = await register(phone,password,registercode);
            return code
        },
        async autoLogin({commit}){
            try {
                //检验token是否合法
                const {code,data} = await autoLogin();
                if(code===OK){
                    //提交mutation 修改仓库数据
                    commit("login",data)
                }
                return code
            }catch (e) {
                throw new Error(e)
            }
        }
    }
}