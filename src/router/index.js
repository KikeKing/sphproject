/*
 * @Author: your name
 * @Date: 2020-12-14 21:30:33
 * @LastEditTime: 2020-12-29 19:37:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\router\idnex.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from 'routes'
import config from 'config';
import store from 'store';
Vue.use(VueRouter);
const router = new VueRouter({
    mode:"history",
    routes,
    scrollBehavior(){
        return {x:0,y:0}
    }
});
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}

config.paths.map(path=>path.toLowerCase())
let flag=true
router.beforeEach(async (to,from,next)=>{
    if(flag){
        flag=false;
        const code = await store.dispatch("autoLogin");
        if(code!==200){
          await store.dispatch("logout")
        };
    }
    next()
})
router.beforeResolve(async (to,from,next)=>{
    let userInfo=store.state.user.userInfo;
    if(userInfo.name){
        next()
    }else{
        let topath=to.path.split("/")[1].toLowerCase()
        if(config.paths.includes(topath)){
            next("/login")
        }else{
            next()
        }
    }
})
export default router
