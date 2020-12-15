<!--
 * @Author: your name
 * @Date: 2020-12-15 19:06:41
 * @LastEditTime: 2020-12-15 22:15:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\components\TypeNav\TypeNav.vue
-->
<template>
  <div>
      <div class="type-nav">
            <div class="container">
                <div @mouseenter="enterIndex" @mouseleave="leaverIndex">
                    <h2 class="all">全部商品分类</h2>
                    <div class="sort">
                        <div class="all-sort-list2">
                            <div class="item" :class="{showList:currentIndex===index}" 
                            @mouseenter="showIndex(index)"
                            v-for="(item,index) in categoryList" :key="item.categoryId">
                                <h3>
                                    <a href="">{{item.categoryName}}</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore" v-for="(childItem) in item.categoryChild" :key="childItem.categoryId">
                                            <dt>
                                                <a href="">{{childItem.categoryName}}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="(childChildItem) in childItem.categoryChild" :key="childChildItem.categoryId">
                                                    <a href="">{{childChildItem.categoryName}}</a>
                                                </em>                               
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
            </div>
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import throttle from "lodash/throttle.js";
export default {
    name:"typeNav",
    data(){
        return {
            currentIndex:-2
        }
    },
    computed:{
        ...mapState({categoryList(state){return state.home.categoryList}})
    },
    methods: {
        enterIndex(){
            this.currentIndex=-1
        },
        leaverIndex(){
            this.currentIndex=-2
        },
        showIndex:throttle(function(index){
             if(this.currentIndex>-2){
                this.currentIndex=index
            }
        },300)
    }
}
</script>

<style scoped lang="less">
     .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.showList {
                            background: #ccc;
                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>