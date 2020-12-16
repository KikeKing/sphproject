<!--
 * @Author: your name
 * @Date: 2020-12-16 21:01:10
 * @LastEditTime: 2020-12-16 21:09:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\components\SwiperComponent\SwiperCom.vue
-->
<template>
  <div class="swiper-container" id="mySwiper" ref="swiperFirst">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in list" :key="banner.id">
        <img :src="banner.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
export default {
  name: "swiperCom",
  props:{
      list:Array,
      loop:{
          type:Boolean,
          default:true,
      },
      autoplay:{
          type:Boolean,
          default:false,
      }
  },
  watch: {
    list: {
      deep: true,
      immediate:true,
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.swiperFirst, {
            loop: this.loop, // 循环模式选项
            autoplay: this.autoplay,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  }
};
</script>

<style>
</style>