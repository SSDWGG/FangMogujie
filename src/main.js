import Vue from 'vue'
import App from './App.vue'
import './mock/index'
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store";
import vant from 'vant'
import 'vant/lib/index.css';
import myToast from "./components/common/toast";        //自己写的插件
Vue.use(myToast);
Vue.use(vant);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。
new Vue({

  render: h => h(App),
  router,
  store

}).$mount('#app')
