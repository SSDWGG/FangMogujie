import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

//安装插件
Vue.use(Vuex)
//创建对象
const store = new Vuex.Store({
  state:{
    carlist:[],
    // 是否开启请求加载
    isLoading: true

  },
  actions,      //将模块抽离到其他的文件夹
  mutations,
  getters
})

//导出对象并到main处挂载
export default store
