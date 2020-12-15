/*
 * @Author: your name
 * @Date: 2020-12-14 21:30:48
 * @LastEditTime: 2020-12-15 20:00:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\routes\idnex.js
*/
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Search from 'pages/Search/Search';
import ShopCar from 'pages/ShopCar/ShopCar';
export default [
    {path: '/home',component: Home},
    {path: '/login',component: Login,meta:{hiddenFooter: true}},
    {path: '/register',component: Register,meta:{hiddenFooter: true}},
    {path: '/search',component: Search},
    {path:'/shopcar',component: ShopCar},
    {path: '/',redirect:'/home'}
]