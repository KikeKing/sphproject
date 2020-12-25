<!--
 * @Author: your name
 * @Date: 2020-12-14 16:08:12
 * @LastEditTime: 2020-12-25 19:25:16
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
    ...mapActions(["getBaseCategoryList","getBanners","getFloors","autoLogin","logout"])
  },
  async created(){
    await this.getBaseCategoryList();
    await this.getBanners();
    await this.getFloors();
  },
  async mounted(){
    const code = await this.autoLogin();
    if(code!==200){
      await this.logout();
    }
  }
}
</script>

<style scoped lang="less">
    
</style>
