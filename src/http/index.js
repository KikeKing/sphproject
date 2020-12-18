/*
 * @Author: your name
 * @Date: 2020-12-16 20:09:48
 * @LastEditTime: 2020-12-18 19:06:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\http\index.js
 */
import apiAaxios from "./apiAxios"
import mockAxios from "./mockAxios"


//获取三级列表的请求方法
export const getBaseCategoryList = () => apiAaxios.get("/product/getBaseCategoryList");

//获取轮播图数据
export const getBanners = () => mockAxios.get("/banners");
//获取楼层数据
export const getFloors = () => mockAxios.get("/floors");
//获取搜索数据
export const getSearchData = (options={}) =>apiAaxios.post("/list",options);
