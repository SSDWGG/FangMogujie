<template>
    <div class="navbar">
      <nav-bar>
        <div slot="left" class="back" @click="goback">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
          <div v-for="(item,key) in titles" :key="key" class="title-item"
          :class="{active:(key===currentindex)}"
           @click="clickitem(('#'+item),key)"
          >
            <span>{{item}}</span>
          </div>
        </div>
      </nav-bar>

    </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "detaiNavbar",
  components:{
    NavBar,
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentindex:0,
    }
  },
  methods:{
    clickitem(selector,index){
      this.currentindex=index

      this.$emit('goAnchor',selector)  //因为拿不到父组件的html元素无法滚动，所以把记录的锚点信息传到父组件里面，让父组件进行跳转
    },
    goback(){
      this.$router.go(-1)              //返回上一层    go（0）回退，但是还要刷新

    }
  }
}
</script>

<style scoped>
.navbar{
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #fff;
}
.active{
  color: var(--color-high-text);
}
.title{
  display: flex;
  font-size: 13px;
}
.title-item{
  flex: 1;
}
.back img{
  margin-top: 10px;
}
.active span {
  border-bottom: 1px solid var(--color-tint);
}

</style>
