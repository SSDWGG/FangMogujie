import Vue from "vue"
import VueRouter from "vue-router"


const home = ()=>import("views/home/home")                              //可以使用别名
const cart = ()=>import('../views/cart/cart')
const Category = ()=>import('../views/category/Category')
const profile = ()=>import('../views/profile/profile')
const detail = ()=>import('../views/detail/detail')


Vue.use(VueRouter)
const routes=[
  {
    name:"moren",
    path:"/",
    redirect:"/home",

  },{
    name:"home",
    path: '/home',
    component: home,
    meta:{
      title:'测试home标题',
      showTab: true
    }
  }
  ,{
    name:"cart",
    path: '/cart',
    component: cart,
    meta:{
      title:'测试cart标题',
      showTab: true
    }
  }
  ,{
    name:"category",
    path: '/category',
    component: Category,
    meta:{
      title:'测试category标题',
      showTab: true
    }
  }
  ,{
    name:"profile",
    path: '/profile',
    component: profile,
    meta:{
      title:'测试profile标题',
      showTab: true
    }
  }
  ,{
    name:"detail",
    path: '/detail/:iid',
    component: detail,
    meta:{
      title:'测试detail标题',
      showTab: false,
    }
  }
]
const router = new VueRouter({

  routes,
  mode:"history",

})

export default router



//引入，安装插件，创建，导出    然后带main.js里去做一个引入
