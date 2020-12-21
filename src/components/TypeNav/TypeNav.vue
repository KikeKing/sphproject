<!--
 * @Author: your name
 * @Date: 2020-12-15 19:06:41
 * @LastEditTime: 2020-12-21 20:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\components\TypeNav\TypeNav.vue
-->
<template>
  <div>
      <div class="type-nav">
            <div class="container">
                <div @mouseenter="enterIndex" @mouseleave="leaverIndex">
                    <h2 class="all" @mouseenter="allShow">全部商品分类</h2>
                    <transition name="item">
                        <div class="sort" @click="searchItem" v-show="showSort">
                        <div class="all-sort-list2">
                            <div class="item" :class="{showList:currentIndex===index}" 
                            @mouseenter="showIndex(index)"
                            v-for="(item,index) in categoryList" :key="item.categoryId">
                                <h3>
                                    <a href="javascript:;" :data-categoryName="item.categoryName" :data-category1Id="item.categoryId">{{item.categoryName}}</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore" v-for="(childItem) in item.categoryChild" :key="childItem.categoryId">
                                            <dt>
                                                <a href="javascript:;" :data-categoryName="childItem.categoryName" :data-category2Id="childItem.categoryId">{{childItem.categoryName}}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="(childChildItem) in childItem.categoryChild" :key="childChildItem.categoryId">
                                                    <a href="javascript:;" :data-categoryName="childChildItem.categoryName" :data-category3Id="childChildItem.categoryId">{{childChildItem.categoryName}}</a>
                                                </em>                               
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </transition>
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
            currentIndex:-2,
            showSort:["/","/home"].includes(this.$route.path),
            keyword:""
        }
    },
    computed:{
        ...mapState({categoryList(state){return state.home.categoryList}})
    },
    methods: {
        allShow(){
            if(!["/","/home"].includes(this.$route.path)){
                this.showSort=true;
            }
        },
        enterIndex(){
            this.currentIndex=-1
        },
        leaverIndex(){
            this.currentIndex=-2;
            if(!["/","/home"].includes(this.$route.path)){
                this.showSort=false;
            }
        },
        showIndex:throttle(function(index){
             if(this.currentIndex>-2){
                this.currentIndex=index
            }
        },300),
        searchItem(e){
            const {categoryname="",category1id="",category2id="",category3id=""}=
            e.target.dataset;
            const localtional={name:'search',query: {}};
            categoryname?localtional.query.categoryName=categoryname:""; 
            category1id?localtional.query.category1Id=category1id:""; 
            category2id?localtional.query.category2Id=category2id:""; 
            category3id?localtional.query.category3Id=category3id:""; 
            if(Object.keys(this.$route.params).length!==0){
                localtional.params=this.$route.params;
                if(this.keyword===""){
                    const arr=Object.keys(localtional.params);
                    if(arr.length===1&&arr[0]==="keyword"){
                        localtional.params=""
                    }else{
                        delete localtional.params.keyword
                    }
                }
            };
            if(this.$route.path.toLowerCase().startsWith("/search")){
                this.$router.replace(localtional);
            }else{
                this.$router.push(localtional);
            }
            this.showIndex();
        },
        mounted(){
            this.$bus.$on("nokeyword",(val)=>{
                this.keyword=val;
            })
        }
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