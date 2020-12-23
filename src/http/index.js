/*
 * @Author: your name
 * @Date: 2020-12-16 20:09:48
 * @LastEditTime: 2020-12-23 20:29:45
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
//获取详情页数据
export const getDetail = skuId  => apiAaxios.get(`/item/${skuId}`);
//添加商品到购物车
export const addToCart = (skuId, skuNum) => apiAaxios.post(`/cart/addToCart/${skuId}/${skuNum}`);
//获取购物车列表
export const getCartList = () => apiAaxios.get('/cart/cartList');
//更新复选框选中状态
export const updateChecked = ({skuID,isChecked}) => apiAaxios.get(`/cart/checkCart/${skuID}/${isChecked}`);
//删除购物车商品
export const deleteCart = skuId => apiAaxios.delete(`cart/deleteCart/${skuId}`);
//登录
export const login = (phone,password) => apiAaxios.post(`/user/passport/login`,{phone,password});
//退出登录
export const logout = () => apiAaxios.get(`/user/passport/logout`);
//自动登录
export const autoLogin = () => apiAaxios.get(`/user/passport/auth/getUserInfo`);
//注册
export const register = (phone,password,code,nickName) => apiAaxios.post(`/user/passport/register`,{phone,password,code,nickName});

