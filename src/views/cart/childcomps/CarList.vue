<template>
  <div class="carlist">
    <div class="listitem">
      <div  class="shop-item" v-for="(item, index) in carlist":key="index">
        <div class="item-selector">
<!--                    在store的模型层内修改选中与否，用模型层的改变来改变视图      -->
          <van-checkbox @change="handleCheckedItem" v-model="item.checked" />
        </div>
        <div class="item-img">
          <img :src="item.image" alt="商品图片" />
        </div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">商品描述: {{ item.desc }}</div>
          <div class="info-bottom">
            <div class="item-price left">{{ item.price }}</div>
            <div class="item-price left">&nbsp;&nbsp;计算价格{{ item.pricetest }}</div>
            <div class="item-count right">x{{ item.count }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-bottom-bar">
      <div class="cart-bottom-check">
        <van-checkbox @click="handleCheckedAll" class="checked-all" v-model="checkedAll">  <!--自动取反   -->
          全选
        </van-checkbox>
      </div>
      <div class="cart-bottom-price">
        合计：
        <span>¥ {{ totalPrice }}</span>
        元
      </div>
      <div class="cart-bottom-btn">
        <button @click="onSubmit">提交订单({{ checkedLength }})</button>
      </div>
    </div>

    <el-backtop  :bottom="100"></el-backtop>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CarList",
  data() {
    return {
      checkedAll: false
    };
  },
  computed:{
    ...mapGetters({
      length:'carlength',
      carlist:'carlist'
    }),
    totalPrice(){
      //这里使用this.carlist会被上面的 ...mapGetters计算，所以拿到的是指向模型的

      return this.carlist
        .filter(item => item.checked) //拿到所有被选中的对象
        .reduce((prev, item) => {
          return prev + item.pricetest * item.count
        }, 0)//遍历累加被选中的对象的价格
        .toFixed(2); //保留两位小数
    },
    checkedLength() {                 //选中的数量
      return this.carlist.filter(item => item.checked).length;
    }

  },
  methods:{
    //全部选中或者全部不选中
    handleCheckedAll(){
      this.carlist.forEach(item => (item.checked = this.checkedAll));
    },
                                  //判断手动反选会造成的影响（是否手动把商品全部选中或者未选中）
    handleCheckedItem(){
      //拿到被点击过后的还被选中的列表
      let result = this.carlist.filter(item => item.checked);
      //判断这些选中的列表是不是被全选（防止全选的时候因为被手动改变而出现bug）
      this.checkedAll = result.length > 0 && result.length === this.carlist.length;

    },
    onSubmit(){
          if(length){
              this.$mytoast.toastShow("请添加商品，再进行结算",2000)
          }
          else {
            this.$mytoast.toastShow("结算ing....",2000)
          }
    }
  }

}
</script>

<style scoped>
.listitem{
  padding-bottom: 50px;
}
.carlist {
  width: 100%;
  height: 100%;
}

.shop-item {
  font-size: 0;
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}

.shop-item:last-child {
  border-bottom: 0;
}

.item-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.item-info {
  font-size: 17px;
  position: relative;
  overflow: hidden;
  width: 88%;
  padding: 5px 10px;
  color: #333333;
}

.item-info .item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666666;
}

.info-bottom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin-top: 10px;
}

.info-bottom .item-price {
  color: #ff4500;
}

.cart-bottom-bar {
  font-size: 15px;
  position: fixed;
  right: 0;
  bottom: 49px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #cccccc;
  background-color: #eeeeee;

}

.cart-bottom-price {
  margin-left: 50px;
}

.cart-bottom-price span {
  color: red;
}

.cart-bottom-btn button {
  line-height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  height: 50px;
  padding: 0 15px;
  color: white;
  border: 0;
  outline: none;
  background: linear-gradient(to right, #ff6034, #ee0a24);
}

.cart-bottom-btn button:active {
  opacity: 0.8;
}

</style>
