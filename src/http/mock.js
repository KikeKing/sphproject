/*
 * @Author: your name
 * @Date: 2020-12-14 23:39:53
 * @LastEditTime: 2020-12-15 21:23:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\http\mock.js
 */
import nprogress from 'nprogress';
import axios from 'axios';
const axiosIns=axios.create({
    baseURL: '/mock',
    timeout:8000
});
axiosIns.interceptors.request.use((config)=>{
    nprogress.start();
    return config;
});
axiosIns.interceptors.response.use((response)=>{
    nprogress.done();
    return response.data;
},(error)=>{
    nprogress.done();
    return Promise.reject(error);
});
export default axiosIns;