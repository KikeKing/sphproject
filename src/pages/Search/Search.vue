<!--
 * @Author: your name
 * @Date: 2020-12-15 18:35:47
 * @LastEditTime: 2020-12-17 16:43:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\pages\Search\Search.vue
-->
<template>
  <div>
    <TypeNav></TypeNav>
    <Pagination :allInfo="400" :pageSize="20" :successivePages="5" @updateCurrentPage="updateCurrentPage"></Pagination>
  </div>
</template>

<script>
export default {
    name:"search",
    methods:{
      updateCurrentPage(val){
        console.log(val);
      }
    }
}
</script>

<style scoped lang="less">

</style>