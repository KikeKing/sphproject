/*
 * @Author: your name
 * @Date: 2020-12-24 16:10:16
 * @LastEditTime: 2020-12-25 19:28:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\util\vee.js
 */
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文message

VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        is: () => `两次输入密码不一致`  // 修改内置规则的message
    },
    attributes: { // 给校验的field属性名映射中文名称
        phone: '手机号',
        code:"验证码",
        password:"登录密码",
        repassword:"重复密码",
        mustChecked:"协议"
    }
})

//自定义规则一定要在最后!!!
VeeValidate.Validator.extend('agree', {
    // value:使用了agree规则的输入框中的值
    validate: value => {
        //必须返回true 才代码验证通过
        return value
    },
    getMessage: field => '请同意'+field
})