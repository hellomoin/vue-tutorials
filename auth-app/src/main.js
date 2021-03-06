// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt_user_token_id');

/* eslint-disable no-new */
const NavApp = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

export {NavApp}