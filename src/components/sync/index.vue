<!--
 * @Author: your name
 * @Date: 2020-12-30 11:08:57
 * @LastEditTime: 2020-12-30 11:32:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\components\sync\index.vue
-->
<template>
  <div>
      小明的爸爸现在有<span style="color: red;font-weight: bold">{{money}}</span>元
      <h2>sync的修改符</h2>
      <Child0 :money.sync="money"></Child0>
      <!-- <Child0 :money="money" @update:money="money=$event"></Child0> -->
      <hr>
      小明的爸爸现在有<span style="color: red;font-weight: bold">{{money}}</span>元
      <h2>使用v-model</h2>
      <Child0></Child0>
      <hr>
  </div>
</template>

<script>
import Child0 from "./Child0"; 
export default {
    name: 'sync',
    data(){
        return {
            money: 1000
        }
    },
    components:{
        Child0
    }
}
</script>

<style>

</style>
