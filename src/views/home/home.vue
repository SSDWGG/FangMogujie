<template>
  <div id="home" >
      <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>    <!--v-bind这里这两个list表示什么            -->
      <recommendsview :recommends="recommends"></recommendsview>  <!--第一个参数：recommends是表示给参数起名叫做这个第二个参数（原名）list是要在这个data找到并往里面传的参数                       -->
      <Featureview></Featureview>
      <tab-control  class="tab-control":titles="['热门','新款','精选']" @tabclick="tabClick"></tab-control><!--  响应子组件的发射，并反馈给下面的函数   -->
      <div class="goods" v-infinite-scroll="load" style="overflow:auto" infinite-scroll-immediate="false" infinite-scroll-disabled= false>
        <GoodsList :goods="goods[currentType].list"></GoodsList>       <!--   拿到goods中的pop key中的list  -->
      </div>




  </div>


</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getHomeMultidata,getHomeGoods} from "network/home";
import HomeSwiper from "./childComps/HomeSwiper";
import Recommendsview from "./childComps/Recommendsview";
import Featureview from "./childComps/Featureview";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import detail from "../detail/detail";


export default {
  name: "home",
  components:{
    NavBar,
    HomeSwiper,
    Recommendsview,
    Featureview,
    TabControl,
    GoodsList,
    detail,


  },
  data(){
    return{
      list:[],
      goods:{
        "pop":{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType : 'pop',           //默认初始类型是pop
      banners:[],
      recommends:[],
    }


  },
  created() {
    this.getHomeMultidata(),
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },

  methods:{
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    load () {
        this.getHomeGoods(this.currentType)

    },
    //把creat方法函数抽到这里
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list

      })
    },
    getHomeGoods(parm){           //从0页开始，每次调用自动加1
        const page = this.goods[parm].page+1
        getHomeGoods(parm,page).then(res=>{
        this.goods[parm].list.push(...res.data.data.list)        //把请求到的一页数据，拷贝到数组最后
        this.goods[parm].page++               //记录页数加一
        })
    }

  }
}
</script>
<!--scoped是限定作用域-->
<style scoped>
  .nav-bar{
    /*      抽离的模板是公共的样式才能写在里面，有的导航可以使这个颜色，有的不是这个颜色，所以这些不公共的属性还是写在具体的类里                */
    background-color:#ff8198;
    color: #f7f7f7;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }
  #home{
    padding-top: 44px;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }




  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;


    height: 100vh;
  }

</style>
