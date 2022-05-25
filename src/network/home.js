//这一层的抽离是因为要统一管理每个不同请求的个性配置
//不是默认导出就需要使用{}解构
import {request} from "./request";

export  function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export  function getHomeGoods(type,page) {
  return request({
    url:'home/data',
    params:{
      type,
      page,
    }
  })
}
