import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Header from './component/Header.vue'
import Footer from './component/Footer.vue'

Vue.use(VueRouter); 

const routes = [
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component("vue-app-Header", Header);
Vue.component("vue-app-Footer", Footer);

new Vue({
  el: '#app',
  data(){
    return{
    }
  },
  router,
  render: h => h(App)
})

