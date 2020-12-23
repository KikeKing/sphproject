/*
 * @Author: your name
 * @Date: 2020-12-22 20:51:58
 * @LastEditTime: 2020-12-22 20:55:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\util\uuid.js
 */
import { v4 as uuidv4 } from 'uuid';
export const getUUID=()=>{
    let UUID=window.localStorage.getItem('sph_uuid');
    if(!UUID){
        UUID=uuidv4();
        window.localStorage.setItem('sph_uuid',UUID);
    }
    return UUID;
};