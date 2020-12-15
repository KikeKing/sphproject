/*
 * @Author: your name
 * @Date: 2020-12-14 21:22:28
 * @LastEditTime: 2020-12-15 16:13:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\http\index.js
 */
import apiAxios from './axios';
import mockAxios from './mock';
export const getBaseCategoryList = () =>apiAxios.get("/product/getBaseCategoryList")
export const getBanners = () => mockAxios.get("/banners");
export const getFooters = () => mockAxios.get("/footers");