import Vue from 'vue'
import App from './App.vue'
import request from "@/utils/request";
import router from "@/utils";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// Vue.use(ElementUI,{size:"mini"})
Vue.use(ElementUI,{size:"mini"})

Vue.prototype.request = request

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
