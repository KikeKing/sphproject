<!--
 * @Author: your name
 * @Date: 2020-12-14 16:08:12
 * @LastEditTime: 2020-12-15 20:51:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\App.vue
-->
<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer v-show="!$route.meta.hiddenFooter"></v-footer>
    <v-allFooter></v-allFooter>
  </div>
</template>

<script>
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import AllFooter from "components/Footer/AllFooter";
import {mapActions} from 'vuex';
export default {
  name: 'App',
  components:{
    "v-header":Header,
    "v-footer":Footer,
    "v-allFooter":AllFooter
  },
  methods:{
    ...mapActions(["getBaseCategoryList"])
  },
  async created(){
    await this.getBaseCategoryList()
  }
}
</script>

<style scoped>
</style>
