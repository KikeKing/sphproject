<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="options.categoryName">{{options.categoryName}}<i @click="cancelCN">×</i></li>
            <li class="with-x" v-if="options.keyword">{{options.keyword}}<i @click="cancelK">×</i></li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector :trademarkList="searchList.trademarkList" :attrsList="searchList.attrsList"/>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li class="active">
                  <a href="#">综合</a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li>
                  <a href="#">价格⬆</a>
                </li>
                <li>
                  <a href="#">价格⬇</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="good in searchList.goodsList" :key="good.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <a href="javascript:;" target="_blank"
                      ><img :src="good.defaultImg"
                    /></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥ </em>
                      <i>{{good.price}}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="javascript:;"
                      :title="good.title"
                      >{{good.title}}</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>            
            </ul>
          </div>
          <el-pagination
            class="pagination"
            @size-change="sizeChange"
            @current-change="updataCurrentPage"
            :current-page="options.pageNo"
            :page-sizes="[2, 3, 4, 5]"
            :page-size="options.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="searchList.total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**{"category1Id":"",
 * "category2Id":"",
 * "category3Id":"",
 * "categoryName":"",
 * "props":["2:6.25-6.34英寸:屏幕尺寸"],
 * "trademark":"4:小米",
 * "order":"1:desc",
 * "pageNo":1,
 * "pageSize":5}*/
import { mapActions, mapState } from "vuex";
import SearchSelector from "./SearchSelector/SearchSelector";
export default {
  name: "Search",
  props:["keyword","categoryName","category1Id","category2Id","category3Id"],
  data() {
    return {
      options: {
        pageSize:5,
        pageNo:1,
        categoryName:"",
        category3Id:"",
        category2Id:"",
        category1Id:"",
        keyword:""
      },
    };
  },
  computed: {
    ...mapState({ searchList: (state) => state.search.searchList })
  },
  methods: {
    ...mapActions(["getSearchData"]),
    async updataCurrentPage(index){
      this.options.pageNo=index
      await this.getSearchData(this.options)
    },
    async sizeChange(index){
      console.log(index);
      this.options.pageSize=index
      await this.getSearchData(this.options)
    },
    updateOptions(){
      this.options={
        ...this.options,
        categoryName:this.categoryName,
        category3Id:this.category3Id,
        category2Id:this.category2Id,
        category1Id:this.category1Id,
        keyword:this.keyword
      }
    },
    cancelCN(){
      this.options.category1Id=""
      this.options.category2Id=""
      this.options.category3Id=""
      this.options.categoryName=""
      this.$router.push({
        path:this.$route.path,
        hash:`#${Date.now()}`
      });
    },
    cancelK(){
      this.options.keyword=""
      this.$router.push({
        name:"search",
        query:this.$route.query,
        hash:`#${Date.now()}`
      })
      this.$bus.$emit("clearKeyword","")
    }
  },
  components: {
    SearchSelector,
  },
  watch:{
    $route:{
      deep:true,
      immediate:true,
      async handler(){
        this.updateOptions();
        console.log(111);
        await this.updataCurrentPage(1);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .pagination {
        display: inline-block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>