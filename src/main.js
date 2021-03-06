import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueResource);
// Vue.use(VueAxios, axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
