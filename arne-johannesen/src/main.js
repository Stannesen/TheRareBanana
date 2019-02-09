import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Header from './Header.vue'

import Home from './Home.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('app-header', Header);

new Vue({
  el: '#app',
  data(){
    return{
    }
  },
  router,
  render: h => h(App)
})

