<!--
 * @Author: your name
 * @Date: 2020-12-21 20:28:30
 * @LastEditTime: 2020-12-22 18:45:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\pages\Detail\Zoom\Zoom.vue
-->
<template>
  <div class="spec-preview" v-if="detailList.skuInfo">
    <pic-zoom :url="detailList.skuInfo.skuImageList[currentIndex].imgUrl" :scale="2"></pic-zoom>
  </div>
</template>

<script>
  import PicZoom from 'vue-piczoom'
  import {mapState} from 'vuex'
  export default {
    name: "Zoom",
    data(){
      return {
        currentIndex: 0,
      }
    },
    computed:{
      ...mapState({detailList:state=>state.detail.detailList})
    },
    components:{
      PicZoom
    },
    mounted(){
      this.$bus.$on("chooseImg",index=>{
        this.currentIndex = index;
      })
    }    
  }
</script>

<style scoped lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc; 
    
  }
</style>