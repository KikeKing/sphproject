<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="good in cartList" :key="good.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="good.isChecked===1" @change="changeChecked({skuID:good.skuId,isChecked:good.isChecked})"> 
          </li>
          <li class="cart-list-con2">
            <img :src="good.imgUrl">
            <div class="item-msg">{{good.skuName}}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{good.cartPrice}}</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:;" class="mins" @click="updateSkuNum(good,-1)">-</a>
            <input autocomplete="off" type="text" minnum="1" class="itxt" :value="good.skuNum" @input="updateValue" @change="updateCartNum(good,$event)">
            <a href="javascript:;" class="plus" @click="updateSkuNum(good,1)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{good.skuPrice*good.skuNum}}</span>
          </li>
          <li class="cart-list-con7">
            <a href="javascript:;" class="sindelet" @click="deleteGood(good.skuId,good.skuName)">删除</a>
            <br>
            <a href="javascript:;">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="cart_checkedAll" :disabled="cartList.length<0">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:;" @click="deleteChecked">删除选中的商品</a>
        <a href="javascript:;">移到我的关注</a>
        <a href="javascript:;">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>{{cart_skuNum}}</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{cart_totalPrice}}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions,mapState,mapGetters} from 'vuex'
  import store from 'store'
  export default {
    name: 'ShopCart',
    computed:{
      ...mapState({cartList:state=>state.cart.cartList}),
      ...mapGetters(["cart_skuNum","cart_totalPrice"]),
      cart_checkedAll:{
        get(){
          return store.getters.cart_checkedAll;
        },
        async set(val){
          val=val?1:0;
          try {
            let codeArr =await this.updateCheckedAll(val);
          if(codeArr.every(code =>code===200)){
            await this.getCartList();
          }
          } catch (error) {
            throw new Error(error);
          }
        }
      }
    },
    methods:{
      ...mapActions(["getCartList","updateChecked","updateCheckedAll","deleteCart","deleteCheckedCart","addToCart"]),
      async changeChecked({skuID,isChecked}){
        isChecked=isChecked===0?1:0;
        try {
          let code =await this.updateChecked({skuID,isChecked});
          if(code===200){
            await this.getCartList();
          }else{
            alert("修改失败")
          }
        } catch (error) {
          throw new Error(error);
        }
      },
      async deleteGood(skuId,skuName){
        try {
          await this.$confirm(`确定删除${skuName}商品吗？`)
          const code=await this.deleteCart(skuId);
          if(code===200) {
            await this.getCartList();
          }
        } catch (error) {
          throw new Error(error);
        }
      },
      async deleteChecked(){
        try {
          const codeArr=await this.deleteCheckedCart();
          
          if(codeArr.every(code=>code===200)) {
            await this.getCartList();
          }
        } catch (error) {
          throw new Error(error);
        }
      },
      async updateSkuNum(good,skuNum){
        let beforeNum=good.skuNum;
        let afterNum=beforeNum+skuNum;
        if(afterNum>0){
          const code= await this.addToCart({skuId:good.skuId,skuNum});
          if(code===200){
            await this.getCartList();
          }
        }
      },
      updateValue(e){
        let val = e.target.value;
        let reg=/\D+/g;
        e.target.value=val.replace(reg,"");
      },
      async updateCartNum(good,e){
        let skuNum=+e.target.value-good.skuNum;
        await this.updateSkuNum(good,skuNum)
      }
    },
    async created(){
      await this.getCartList()
    }
  }
</script>

<style lang="less" scoped>
  .cart {
    width: 1200px;
    margin: 0 auto;

    h4 {
      margin: 9px 0;
      font-size: 14px;
      line-height: 21px;
    }

    .cart-main {
      .cart-th {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;

        &>div {
          float: left;
        }

        .cart-th1 {
          width: 5%;

          input {
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }

        .cart-th2 {
          width: 22%;
        }

        .cart-th3{
          width:17%;
        }
        .cart-th4{
          width:10%;
        }
        .cart-th5,
        .cart-th6 {
          width: 12.5%;

        }
      }

      .cart-body {
        margin: 15px 0;
        border: 1px solid #ddd;

        .cart-list {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          overflow: hidden;
          
          
          &>li {
            float: left;
          }

          .cart-list-con1 {
            width: 4.1667%;
          }

          .cart-list-con2 {
            width: 25%;

            img {
              width: 82px;
              height: 82px;
              float: left;
            }

            .item-msg {
              float: left;
              width: 150px;
              margin: 0 10px;
              line-height: 18px;
            }
          }

          .cart-list-con3 {
            width: 20.8333%;

            .item-txt {
              text-align: center;
            }
          }

          .cart-list-con4 {
            width: 12.5%;

          }

          .cart-list-con5 {
            width: 12.5%;

            .mins {
              border: 1px solid #ddd;
              border-right: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }

            input {
              border: 1px solid #ddd;
              width: 40px;
              height: 33px;
              float: left;
              text-align: center;
              font-size: 14px;
            }

            .plus {
              border: 1px solid #ddd;
              border-left: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }
          }

          .cart-list-con6 {
            width: 12.5%;

            .sum {
              font-size: 16px;
            }
          }

          .cart-list-con7 {
            width: 12.5%;

            a {
              color: #666;
            }
          }
        }
      }
    }

    .cart-tool {
      overflow: hidden;
      border: 1px solid #ddd;

      .select-all {
        padding: 10px;
        overflow: hidden;
        float: left;

        span {
          vertical-align: middle;
        }

        input {
          vertical-align: middle;
        }
      }

      .option {
        padding: 10px;
        overflow: hidden;
        float: left;

        a {
          float: left;
          padding: 0 10px;
          color: #666;
        }
      }

      .money-box {
        float: right;

        .chosed {
          line-height: 26px;
          float: left;
          padding: 0 10px;
        }

        .sumprice {
          width: 200px;
          line-height: 22px;
          float: left;
          padding: 0 10px;

          .summoney {
            color: #c81623;
            font-size: 16px;
          }
        }

        .sumbtn {
          float: right;

          a {
            display: block;
            position: relative;
            width: 96px;
            height: 52px;
            line-height: 52px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-family: "Microsoft YaHei";
            background: #e1251b;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>