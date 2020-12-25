<!--
 * @Author: your name
 * @Date: 2020-12-24 15:25:06
 * @LastEditTime: 2020-12-24 18:02:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\pages\RegisterSuccess\index.vue
-->
<template>
 <div style="background-color:#ECECEC; padding: 35px;">
    <table cellpadding="0" align="center"
           style="width: 600px; margin: 0px auto; text-align: left; position: relative; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; font-size: 14px; font-family:微软雅黑, 黑体; line-height: 1.5; box-shadow: rgb(153, 153, 153) 0px 0px 5px; border-collapse: collapse; background-position: initial initial; background-repeat: initial initial;background:#fff;">
        <tbody>
        <tr>
            <th valign="middle"
                style="height: 25px; line-height: 25px; padding: 15px 35px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: #42a3d3; background-color: #49bcff; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">
                <font face="微软雅黑" size="5" style="color: rgb(255, 255, 255); ">恭喜您，注册成功! （尚品汇）</font>
            </th>
        </tr>
        <tr>
            <td>
                <div style="padding:25px 35px 40px; background-color:#fff;">
                    <h2 style="margin: 5px 0px; ">
                        <font color="#333333" style="line-height: 20px; ">
                            <font style="line-height: 22px; " size="4">
                                亲爱的 用户</font>
                        </font>
                    </h2>
                    <p>首先感谢您加入本站！下面是您的账号信息<br>
                        您的账号：<span><b>{{user_account}}</b></span><br>
                        当您在使用本网站时，遵守当地法律法规。<br>
                        如果您有什么疑问可以联系管理员，Email: **@**.com</p>
                    <el-button type="success" round @click="loginPage">立即登录</el-button>    
                    <p align="right">BER分接口网</p>
                    <div style="width:700px;margin:0 auto;">
                        <div style="padding:10px 10px 0;border-top:1px solid #ccc;color:#747474;margin-bottom:20px;line-height:1.3em;font-size:12px;">
                            <p>此为系统邮件，请勿回复<br>
                                请保管好您的邮箱，避免账号被他人盗用
                            </p>
                            <p>©***</p>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name:"registersuccess",
    data(){
        return {
            user_account:""
        }
    },
    methods:{
        loginPage(){
            this.$router.replace("/login")
        }
    },
    mounted(){
        this.$bus.$on("account",(val)=>{
            console.log(val,"1111");
            this.user_account = val;
            console.log(this.user_account);
        })
    }
}
</script>

<style>

</style>