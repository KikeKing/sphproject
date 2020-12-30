<!--
 * @Author: your name
 * @Date: 2020-12-14 16:08:12
 * @LastEditTime: 2020-12-30 11:20:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\App.vue
-->
<template>
  <div id="app">
    <Sync></Sync>
    <router-view></router-view>
  </div>
</template>

<script>
import Sync from 'components/sync'
export default {
  name: 'App',
  components:{
    Sync
  }
}
</script>

<style scoped>
</style>
