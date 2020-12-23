/*
 * @Author: your name
 * @Date: 2020-12-16 20:09:48
 * @LastEditTime: 2020-12-22 21:13:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\http\apiAxios.js
 */
import nprogress from "nprogress";
import axios from "axios";
import store from "store"
const axiosIns = axios.create({
    // baseURL:"http://182.92.128.115/api",
    baseURL:"/api",
    timeout:8000
})

axiosIns.interceptors.request.use(function (config) {
    //发送请求前
    nprogress.start()
    config.headers.userTempId=store.state.user.uuid
    return config;
});

axiosIns.interceptors.response.use(function (response) {
    //发送请求后,成功
    nprogress.done()
    return response.data;
}, function (error) {
    //发送请求后,失败
    nprogress.done()
    return Promise.reject(error);
});

export default axiosIns