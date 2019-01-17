import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './Home.vue'
import About from './About.vue'
import backToWow from './backToWow.vue'
import Games from './game/Games.vue'

import Header from './header/Header.vue'
import Footer from './footer.vue'

import Clock from './component/Clock.vue'
import GridItem from './component/Grid-item.vue'
import Time from './component/Time.vue'
import Converter from './component/converter.vue'


Vue.use(VueRouter);

const routes = [
  { path: '/clock', component: Clock },
  { path: '/', component: Home },
  {path: '/about', component: About},
  {path: '/backtowow', component: backToWow},
  {path: '/games', component: Games}
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
Vue.component('app-time', Time);

new Vue({
  el: '#app',
  data(){
    return{
    }
  },
  router,
  render: h => h(App)
})

