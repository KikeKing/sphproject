/*
 * @Author: your name
 * @Date: 2020-12-16 20:09:48
 * @LastEditTime: 2020-12-28 19:48:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\http\index.js
 */
import apiAxios from "./apiAxios"
import mockAxios from "./mockAxios"


//获取三级列表的请求方法
export const getBaseCategoryList = () => apiAxios.get("/product/getBaseCategoryList");

//获取轮播图数据
export const getBanners = () => mockAxios.get("/banners");
//获取楼层数据
export const getFloors = () => mockAxios.get("/floors");
//获取搜索数据
export const getSearchData = (options={}) =>apiAxios.post("/list",options);
//获取详情页数据
export const getDetail = skuId  => apiAxios.get(`/item/${skuId}`);
//添加商品到购物车
export const addToCart = (skuId, skuNum) => apiAxios.post(`/cart/addToCart/${skuId}/${skuNum}`);
//获取购物车列表
export const getCartList = () => apiAxios.get('/cart/cartList');
//更新复选框选中状态
export const updateChecked = ({skuID,isChecked}) => apiAxios.get(`/cart/checkCart/${skuID}/${isChecked}`);
//删除购物车商品
export const deleteCart = skuId => apiAxios.delete(`cart/deleteCart/${skuId}`);
//登录
export const login = (phone,password) => apiAxios.post(`/user/passport/login`,{phone,password});
//退出登录
export const logout = () => apiAxios.get(`/user/passport/logout`);
//自动登录
export const autoLogin = () => apiAxios.get(`/user/passport/auth/getUserInfo`);
//注册
export const register = (phone,password,code) => apiAxios.post(`/user/passport/register`,{phone,password,code});
//获取交易页信息
export const getOrderTrade = () => apiAxios.get('/order/auth/trade');
//获取订单列表
export const getOrderList = (page,limit) => apiAxios.get(`/order/auth/${page}/${limit}`);
//提交订单
// const options={
//     traderNo,
//     consignee,
//     consigneeTel,
//     deliveryAddress,
//     paymentWay,
//     orderComment,
//     orderDetailList
// }
export const submitOrder = (tradeNo,order) => apiAxios({
    url:`/order/auth/submitOrder`,
    method:"post",
    data: order,
    params:{
        tradeNo
    }
});
//获取支付信息
export const getOrderPay = (orderId) => apiAxios.get(`/payment/weixin/createNative/${orderId}`);
//查询支付状态
export const queryPayStatus = (orderId) => apiAxios.get(`/payment/weixin/queryPayStatus/${orderId}`);