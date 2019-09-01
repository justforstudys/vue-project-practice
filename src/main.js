import Vue from 'vue'
import App from './App'
import router from './router'
//引入element及其样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入css-reset
import '@/assets/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
