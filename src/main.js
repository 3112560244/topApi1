import Vue from 'vue'
import App from './App.vue'
import request from "@/utils/request";
import router from "@/utils";
import ElementUI from 'element-ui'


Vue.config.productionTip = false

// Vue.use(ElementUI,{size:"mini"})
Vue.use(ElementUI)

Vue.prototype.request = request

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
