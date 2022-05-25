<template>
  <div class="detail">
    <detai-navbar @goAnchor="goAnchor" ref="detailnavbar"></detai-navbar>        <!--      接收锚点    -->
    <detail-swiper :detailswiper="detailswiper" class="detailswiper"></detail-swiper>
    <div class="content">
      <div class="infinite-list-wrapper" v-infinite-scroll="load" style="overflow:auto" infinite-scroll-disabled="disabled">
        <!--  拿到后台传值的数据的时候最好都要要测一下内部是不是null(评论为空就需要判断显示)-->
        <detailgoodsinfo :detailgoodsinfo="detailgoodsinfo" ></detailgoodsinfo>
        <detail-shop-info :shop="shopinfo"></detail-shop-info>
        <detail-images-info :images-info="detailsInfo" />
        <detail-param-info :param-info="paramsInfo" class="detail-set-scroll" />
        <detail-comment-info :comment-info="commentInfo" class="detail-set-scroll" />

        <div  ref="div2"id="title1">
          <ul>
            <li>
              <p>此为推荐模块one</p>
              <p>此为推荐模块one</p>
              <p>此为推荐模块one</p>
              <p>此为推荐模块one</p>
              <p>此为推荐模块one</p>
              <p>此为推荐模块one</p>
              <p>此为推荐模块one</p>
              <p>此为推荐模块one</p>
              <p>此为推荐模块one</p>
              <p>此为推荐模块one</p>
            </li>
          </ul>
        </div>
        <div  ref="div2"id="title2">
          <ul>
            <li>
              <p>此为推荐模块two</p>
              <p>此为推荐模块two</p>
              <p>此为推荐模块two</p>
              <p>此为推荐模块two</p>
              <p>此为推荐模块two</p>
              <p>此为推荐模块two</p>
              <p>此为推荐模块two</p>
              <p>此为推荐模块two</p>
              <p>此为推荐模块two</p>
              <p>此为推荐模块two</p>
            </li>
          </ul>
        </div>
        <div  ref="div3"id="title3">
          <ul>
            <li>
              <p>此为推荐模块three</p>
              <p>此为推荐模块three</p>
              <p>此为推荐模块three</p>
              <p>此为推荐模块three</p>
              <p>此为推荐模块three</p>
              <p>此为推荐模块three</p>
              <p>此为推荐模块three</p>
              <p>此为推荐模块three</p>
              <p>此为推荐模块three</p>
              <p>此为推荐模块three</p>
            </li>
          </ul>
        </div>
        <div v-for="i in count" class="list-item" id="title4">{{ i }}</div>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>

        <el-backtop  :bottom="100"></el-backtop>
      </div>
    </div>
    <detailbottombar  @addToCart="addToCart"></detailbottombar>

  </div>

</template>

<script>
import detaiNavbar from "./childComps/detaiNavbar";
import {getdetailifo,getdetailgoods,GoodsParams} from "network/detail";
import detailSwiper from "./childComps/detailSwiper";
import detailbottombar from "./childComps/detailbottombar";
import detailgoodsinfo from "./childComps/detailgoodsinfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailImagesInfo from "./childComps/DetailImagesInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import {mapActions} from "vuex";

export default {
  name: "detail",
  data(){
    return{
      iid:null,
      detailgoodsinfo:{},                 //把res中的数据都拿出来，可以一条条拿过来，或者在request中封装
      detailcompstop:[],                   //拿到所有组件id来进行查询高度
      shopinfo:{},
      detailswiper:[],
      detailinfo:{},
      loading:false,
      count:100,
      scroll: '',
      detailsInfo: {},
      paramsInfo: {},
      commentInfo: {},
    }
  },
  created() {

  },
  activated(){                          //因为使用了keepalive，所以每次跳转回来的时候不会执行create函数，所以执行顺序一定要注意
//拿到路由中的iid属性值
    this.iid=this.$route.params.iid
    //拿到数据集
    getdetailifo(this.iid).then((res)=>{
      // console.log(res.data.result.itemInfo)
      //拿到轮播图数据(这样是单独拿数据)
      this.detailswiper = res.data.result.itemInfo.topImages
      //拿到商品介绍的数据（拿到筛选过后的数据集）
      this.detailgoodsinfo = new getdetailgoods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
      //拿到推荐商家数据
      this.shopinfo = res.data.result.shopInfo
      // 获取下面的图片展示数据3
      this.detailsInfo = res.data.result.detailInfo;
      // 获取尺寸数据
      this.paramsInfo = new GoodsParams(res.data.result.itemParams.info, res.data.result.itemParams.rule || {});
      // 获取评论数据
      if (res.data.result.rate.cRate !== 0) {
        this.commentInfo = res.data.result.rate.list[0] || {};
      }
    })
  },
  components:{
    detaiNavbar,
    detailSwiper,
    detailbottombar,
    detailgoodsinfo,
    DetailShopInfo,
    DetailCommentInfo,
    DetailImagesInfo,
    DetailParamInfo,

  },
  computed: {
    noMore () {
      return this.count >= 110
    },
    disabled () {
      return this.loading || this.noMore
    }
  },

  methods:{
    getdetailcompstop(){
      this.detailcompstop.push(0)
      this.detailcompstop.push(this.$el.querySelector("#title1").offsetTop) //这里直接从父组件里面拿了id，也可以从子组件里面直接拿高度
      this.detailcompstop.push(this.$el.querySelector("#title2").offsetTop)
      this.detailcompstop.push(this.$el.querySelector("#title3").offsetTop)
      //因为要和后一个组件比较，所以会超度长度，这里给高度位置加上一个数字最大值（滚不到头）
      this.detailcompstop.push(Number.MAX_VALUE)
    },
    goAnchor(selector) {
      let anchor = this.$el.querySelector(selector)             //记录下锚点的位置
      document.documentElement.scrollTop = anchor.offsetTop //把文档窗口跳转到锚点    documentElement是html标签body是body标签
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 3
        this.loading = false
      }, 2000)
    },
    menu() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;  //活获取到当前屏幕滚动位置
            // 使用for of遍历数组   for in遍历字符或者对象
      // for(let i=0;i<this.detailcompstop.length;i++){    //和每一个组件的位置高度作对比,要处于两个组件的高度区间内
      //
      //     if(this.scroll>=this.detailcompstop[i]&&this.scroll>=this.detailcompstop[i+1]){
      //           this.$refs.detailnavbar.currentindex = i              //把所在的区间传递给子组件，让子组件随之变动
      //     }
      // }
    },
    ...mapActions({
      add:"addCar"
    })
    ,
    // 添加购物车
    addToCart(){

      // 1.获取需要展示到购物车的商品信息
      const obj = {
        image: this.detailswiper[0],
        title: this.detailgoodsinfo.title,
        desc: this.detailgoodsinfo.desc,
        price: this.detailgoodsinfo.price,
        pricetest: this.detailgoodsinfo.pricetest,
        iid: this.iid
      };
       // //把商品信息添加到vux中的mutations
       //  this.$store.commit("addCar",obj)

      // 把商品信息添加到vux中的actions，通过action来操作mutation
      // this.$store.dispatch("addCar", obj).then((res)=>{
      //   console.log(res)
      // })

      this.add(obj).then(res=>{                     //使用mapaction印射action中的方法
        this.$mytoast.toastShow(res,3000)       //使用自己封装的插件
      })
    }
  },
  mounted() {         //这个阶段才能操作dom组件
    window.addEventListener('scroll', this.menu)      //j监听滚动函数实现
    this.getdetailcompstop()
  }

}


</script>

<style scoped>
.infinite-list-wrapper{
 /*padding-bottom: 50px;*/
}
.detailswiper{
  width: 100%;
  margin-top: 45px;
}
.content{
  width: 100%;
}

</style>
