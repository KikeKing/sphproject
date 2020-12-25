<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>注册新用户
        <span class="go">我有账号，去 <router-link to="/login">登陆</router-link>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <input type="text" placeholder="请输入你的手机号" v-model="phone"  name="phone"
        v-validate="{required: true,regex: /^1[3456789]\d{9}$/}">
       <span class="error-msg">{{ errors.first('phone') }}</span>
      </div>
      <div class="content">
        <label>验证码:</label>
        <input type="text" placeholder="请输入验证码" v-model="code" name="code"
        v-validate="{required:true,regex: /^\d{4}$/}">
        <img ref="code" src="http://182.92.128.115/api/user/passport/code" alt="code" @click="getCode">
        <span class="error-msg">{{ errors.first('code') }}</span>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input type="password" placeholder="请输入你的登录密码" v-model="password" name="password"
        v-validate="{required:true,regex:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}"> 
        <span class="error-msg">{{ errors.first('password') }}</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input type="password" placeholder="请输入确认密码"  name="repassword"
        v-validate="{required:true,is:password}">
        <span class="error-msg">{{ errors.first('repassword') }}</span>
      </div>
      <div class="controls">
        <input name="mustChecked" type="checkbox" v-model="checked"
        v-validate="{agree: true}">
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg">{{ errors.first('mustChecked') }}</span>
      </div>
      <div class="btn">
        <button @click="registerFn">完成注册</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex' 
  export default {
    name: 'Register',
    data(){
      return{
        phone:"",
        password:"",
        code:"",
        checked:false
      }
    },
    methods:{
      ...mapActions(["register"]),
      getCode(){
        this.refs.code.src=`http://182.92.128.115/api/user/passport/code?time=${Date.now()}`;
      },
      async registerFn(){
        const success =  await this.$validator.validateAll();
        if(!success) return 
        const code = await this.register({phone:this.phone,password:this.password,registercode:this.code});
        if(code===200){
          await this.$router.replace('/registersuccess')
          this.$bus.$emit('account',this.phone)   
          console.log(this.phone,"3333");
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .register-container {
    .register {
      width: 1200px;
      height: 445px;
      border: 1px solid rgb(223, 223, 223);
      margin: 0 auto;

      h3 {
        background: #ececec;
        margin: 0;
        padding: 6px 15px;
        color: #333;
        border-bottom: 1px solid #dfdfdf;
        font-size: 20.04px;
        line-height: 30.06px;

        span {
          font-size: 14px;
          float: right;

          a {
            color: #e1251b;
          }
        }
      }

      div:nth-of-type(1) {
        margin-top: 40px;
      }

      .content {
        padding-left: 390px;
        margin-bottom: 18px;
        position: relative;

        label {
          font-size: 14px;
          width: 96px;
          text-align: right;
          display: inline-block;
        }

        input {
          width: 270px;
          height: 38px;
          padding-left: 8px;
          box-sizing: border-box;
          margin-left: 5px;
          outline: none;
          border: 1px solid #999;
        }

        img {
          vertical-align: sub;
        }

        .error-msg {
          position: absolute;
          top: 100%;
          left: 495px;
          color: red;
        }
      }

      .controls {
        text-align: center;
        position: relative;

        input {
          vertical-align: middle;
        }

        .error-msg {
          position: absolute;
          top: 100%;
          left: 495px;
          color: red;
        }
      }

      .btn {
        text-align: center;
        line-height: 36px;
        margin: 17px 0 0 55px;

        button {
          outline: none;
          width: 270px;
          height: 36px;
          background: #e1251b;
          color: #fff !important;
          display: inline-block;
          font-size: 16px;
        }
      }
    }
  }

</style>