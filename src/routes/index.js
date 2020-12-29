/*
 * @Author: your name
 * @Date: 2020-12-14 21:30:48
 * @LastEditTime: 2020-12-29 15:04:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\routes\idnex.js
*/
import store from 'store'
import Home from 'pages/Home/Home'
const Login = ()=>import(/*webpackChunkName:"Login"*/'pages/Login')
const Register = ()=>import(/*webpackChunkName:"Register"*/'pages/Register')
const Search = ()=>import(/*webpackChunkName:"Search"*/'pages/Search/Search')
const ShopCart = ()=>import(/*webpackChunkName:"ShopCart"*/'pages/ShopCart')
const Detail = ()=>import(/*webpackChunkName:"Detail"*/'pages/Detail')
const AddCartSuccess = ()=>import(/*webpackChunkName:"AddCartSuccess"*/'pages/AddCartSuccess')
const RegisterSuccess= ()=>import(/*webpackChunkName:"RegisterSuccess"*/'pages/RegisterSuccess')
const Trade = ()=>import(/*webpackChunkName:"Trade"*/'pages/Trade')
const Center = ()=>import(/*webpackChunkName:"Center"*/'pages/Center')
const Pay = ()=>import(/*webpackChunkName:"Pay"*/'pages/Pay')
const PaySuccess = ()=>import(/*webpackChunkName:"PaySuccess"*/'pages/PaySuccess')
const Myorder = ()=>import(/*webpackChunkName:"Myorder"*/'pages/Center/Myorder')
export default [
    {path: '/home',component: Home},
    {
        path: '/login',
        component: Login,
        meta:{hiddenFooter: true},
        async beforeEnter(to,from,next){
            if(store.state.user.userInfo.name){
                next("/")
            }else{
                next()
            }
        }
    },
    {path: '/register',component: Register,meta:{hiddenFooter: true}},
    {path:'/registersuccess',component:RegisterSuccess,meta:{hiddenFooter: true}},
    {name:"search",path: '/search/:keyword?',component: Search,props:route=>(
        {
            keyword:route.params.keyword,
            categoryName:route.query.categoryName,
            category1Id:route.query.category1Id,
            category2Id:route.query.category2Id,
            category3Id:route.query.category3Id
        }
    )},
    {path:'/detail/:id',component:Detail,props: true},
    {path:'/addCartSuccess',component:AddCartSuccess,props:route=>(
        {skuNum:route.query.skuNum}
    )},
    {
        path:'/shopcart',
        component: ShopCart
    },
    {
        path:'/trade',
        component:Trade,
        async beforeEnter(to,from,next){
            let query=from.path.split('/')[1].toLowerCase()
            if(query==="shopcart"){
                next()
            }else{
                next('/shopcart')
            }
        }
    },
    {
        path:'/pay',
        component:Pay,
        async beforeEnter(to,from,next){
            if(from.path.split('/')[1].toLowerCase()==="trade"){
                next() 
            }else{
                next('/shopcart')
            }
        }
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        async beforeEnter(to,from,next){
            if(from.path.split('/')[1].toLowerCase()==="pay"){
                next()
            }else{
                next('/shopcart')
            }
        }
    },
    {
        path:'/center',
        component: Center,
        children: [
            {path:'myorder', component:Myorder}
        ]
    },
    {path: '/',redirect:'/home'}
]