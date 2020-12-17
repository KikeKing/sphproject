<!--
 * @Author: your name
 * @Date: 2020-12-17 15:33:44
 * @LastEditTime: 2020-12-17 16:45:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\src\components\Pagination\Pagination.vue
-->
<template>
  <div class="pagination">
    <button :disabled="currentPage<=1" @click="updateCurrentPage(currentPage-1)">上一页</button>
    <button v-if="startEndPage.start>1" @click="updateCurrentPage(1)">1</button>
    <button v-if="startEndPage.start>2" disabled>···</button>
    <span  v-for="item in totalPage" :key="item" >
        <button v-if="item>=startEndPage.start&&item<=startEndPage.end" @click="updateCurrentPage(item)" :class="{active:currentPage===item}">{{item}}</button>
    </span>

    <button v-if="startEndPage.end<totalPage-1" disabled>···</button>
    <button v-if="startEndPage.end<totalPage" @click="updateCurrentPage(totalPage)">{{totalPage}}</button>
    <button  :disabled="currentPage>=totalPage" @click="updateCurrentPage(currentPage+1)">下一页</button>
    
    <button style="margin-left: 30px">共 {{totalPage}} 条</button>
  </div>

</template>

<script>
/**组件需要的数据
 * allInfo 所有的商品信息
 * pageSize 单页显示的信息数
 * totalPage 总页数
 * successivePages 连续的页数
 * startEndPage 连续起始结束页
 * currentPage 当前页（内部数据）
 * 
*/    
export default {
    name:"Pagination",
    props:["allInfo","pageSize","successivePages"],
    data(){
        return {
            currentPage:1
        }
    },
    computed:{
        totalPage(){
            return Math.ceil(this.allInfo/this.pageSize);
        },
        startEndPage(){
            let{currentPage,successivePages,totalPage}=this;
            let start;
            let end;
            start = currentPage-Math.floor(successivePages/2);
            start < 1?start = 1:"";
            end=start+successivePages-1;
            if(end>totalPage){
                end=totalPage;
                start = end -successivePages+1;
                start < 1?start = 1:"";
            };
            return {start,end};
        }
    },
    methods:{
        updateCurrentPage(index){
            if(index<1) return;
            if(index>this.totalPage) return;
            if(index===this.currentPage) return;
            this.currentPage=index;
            this.$emit("updateCurrentPage",this.currentPage)
        }
    }
}
</script>

<style scoped lang="less">
    .pagination {
        button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
        }
  }

</style>