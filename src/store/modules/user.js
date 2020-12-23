/*
 * @Author: your name
 * @Date: 2020-12-22 21:08:24
 * @LastEditTime: 2020-12-22 21:09:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\store\modules\user.js
 */
import {getUUID} from 'util/uuid'
export default {
    state:{
        uuid:getUUID()
    }
}