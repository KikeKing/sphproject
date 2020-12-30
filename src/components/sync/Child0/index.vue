<!--
 * @Author: your name
 * @Date: 2020-12-30 11:09:26
 * @LastEditTime: 2020-12-30 11:22:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\components\sync\Child0\index.vue
-->
<template>
  <div style="background: #ccc; height: 50px;">
      <span>小明每次花100元</span>
      <button @click="$emit(`update:money`,money-100)">花钱</button>
      爸爸还剩 {{money}} 元
  </div>
</template>

<script>
export default {
    name:"child0",
    props:["money"]
}
</script>

<style>

</style>