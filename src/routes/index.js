/*
 * @Author: your name
 * @Date: 2020-12-14 21:30:48
 * @LastEditTime: 2020-12-21 20:29:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\routes\idnex.js
*/
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Search from 'pages/Search/Search';
import ShopCar from 'pages/ShopCar/ShopCar';
import Detail from 'pages/Detail';
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
    {path:'/shopcar',component: ShopCar},
    {path: '/',redirect:'/home'}
]