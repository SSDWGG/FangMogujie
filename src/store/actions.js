import {
  ADD_TO_CAR,
  ADD_COUNTER
} from "./mutation-types";

export default {             //复杂的操作放到action中
  addCar(context,payload){
    return new Promise((resolve, reject)=>{            //是 使用promise判断操作是否完成
      //判断商品是否已经存在与购物车之中了
      // let oldproduct = null
      // for(let item of context.state.carlist){
      //   if( item.iid === payload.iid){
      //     //如果购物车中已经存在    就拿到该商品，对该商品进行操作
      //     oldproduct = item
      //   }
      // }
      //使用find函数简化上面的判断
      let oldproduct = context.state.carlist.find(item=> item.iid===payload.iid)

      if(oldproduct){//商品在购物车中已经存在

        //使用conmit操作mutaions中的函数
        context.commit(ADD_COUNTER,oldproduct)
        //context.commit("xxxxxx",oldproduct)  这里需要注意语法，如果使用常量代替写法的话需要把引号去除，并且在接下来的mutations中也改变写法
          resolve("当前商品数量+1")

      }else {//如果商品在购物车中没有就添加到购物车
        //初始化商品数量
        payload.count=1
        payload.checked = true;
        context.commit(ADD_TO_CAR,payload)
        resolve("当前商品添加到购物车")

      }
    })


  }
}
