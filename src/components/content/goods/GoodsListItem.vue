<template>
  <div class="goods-item" @click="detail">
    <img :src="goodsItem.show.img" alt="#">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥:{{goodsItem.price}}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem: {
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    detail(){
      this.$router.push("/detail/"+this.goodsItem.iid)      //动态拼接路由的iid属性
      // this.$router.push({
      //   path:'',
      //   query:{
      //
      //   }
      // })         query的地址使用？拼接参数
    },
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
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
</style>
