/*
 * @Author: your name
 * @Date: 2020-12-15 15:02:43
 * @LastEditTime: 2020-12-15 15:36:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\mock\index.js
 */
import banners from './json/banners.json';
import footers from './json/footers.json';
var Mock=require('mockjs');
Mock.mock({
    code:"200",
    "data":banners
})
Mock.mock({
    code: '200',
    "data":floors
})
