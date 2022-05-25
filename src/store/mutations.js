import {
  ADD_TO_CAR,
  ADD_COUNTER,
  SET_LOADING
} from "./mutation-types";

export default {             //最好一个函数只放一功能

  [ADD_COUNTER](state,payload){                           //注意这里的写法
    //对象赋值是引用可以直接改变内部的值
    payload.count+=1
  },
  [ADD_TO_CAR](state,payload){
    //把商品添加到购物车
    state.carlist.push(payload)
  },
  // 设置请求加载
  [SET_LOADING](state, bol) {
    state.isLoading = bol;
  }
}
