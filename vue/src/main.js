import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './Home.vue'
import Converter from './converter.vue'
import About from './About.vue'
import Footer from './footer/Footer.vue'

import Header from './header/Header.vue'
import Clock from './clock/Clock.vue'
import GridItem from './home/Grid-item.vue'


Vue.use(VueRouter);

const routes = [
  { path: '/clock', component: Clock },
  { path: '/', component: Home },
  {path: '/converter', component: Converter},
  {path: '/about', component: About}
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('app-header', Header);
Vue.component('app-clock', Clock);
Vue.component('app-footer', Footer);
Vue.component('app-grid-item', GridItem);
Vue.component('app-converter', Converter);

new Vue({
  el: '#app',
  data(){
    return{
    }
  },
  router,
  render: h => h(App)
})

