<!--
 * @Author: your name
 * @Date: 2020-12-15 18:32:30
 * @LastEditTime: 2020-12-16 18:08:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\pages\Home\Home.vue
-->
<template>
  <div>
    <TypeNav></TypeNav>
    <v-listContainer></v-listContainer>
    <v-recommend></v-recommend>
    <v-rank></v-rank>
    <v-like></v-like>
    <v-floor></v-floor>
    <v-brand></v-brand>
  </div>
</template>

<script>
import Recommend from "./Recommend/Recommend";
import Rank from "./Rank/Rank";
import ListContainer from "./ListContainer/ListContainer";
import Like from "./Like/Like";
import Floor from "./Floor/Floor";
import Brand from "./Brand/Brand";
export default {
    name:"home",
    components:{
      "v-recommend":Recommend,
      "v-rank":Rank,
      "v-listContainer":ListContainer,
      "v-like":Like,
      "v-floor":Floor,
      "v-brand":Brand
    }
}
</script>

<style scoped lang="less">

</style>