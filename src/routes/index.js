/*
 * @Author: your name
 * @Date: 2020-12-14 21:30:48
 * @LastEditTime: 2020-12-23 19:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\routes\idnex.js
*/
const Home = ()=>import(/*webpackChunkName:"Home"*/'pages/Home/Home')
const Login = ()=>import(/*webpackChunkName:"Login"*/'pages/Login')
const Register = ()=>import(/*webpackChunkName:"Register"*/'pages/Register')
const Search = ()=>import(/*webpackChunkName:"Search"*/'pages/Search/Search')
const ShopCart = ()=>import(/*webpackChunkName:"ShopCart"*/'pages/ShopCart')
const Detail = ()=>import(/*webpackChunkName:"Detail"*/'pages/Detail')
const AddCartSuccess = ()=>import(/*webpackChunkName:"AddCartSuccess"*/'pages/AddCartSuccess')
export default [
    {path: '/home',component: Home},
    {path: '/login',component: Login,meta:{hiddenFooter: true}},
    {path: '/register',component: Register,meta:{hiddenFooter: true}},
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
    {path:'/shopcart',component: ShopCart},
    {path: '/',redirect:'/home'}
]