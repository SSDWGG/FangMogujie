<template>
      <div class="goodslist" >
        <GoodsListItem v-for="(item,index) in goods" :key="index" :goods-item="item"> <!--先循环取出goods中的值，然后再传到子组件里     -->
        </GoodsListItem>
        <el-backtop  :bottom="50"></el-backtop>
      </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 10px;
  padding-bottom: 49px;
}
</style>
