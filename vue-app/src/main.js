import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter); 

const routes = [
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
});



new Vue({
  el: '#app',
  data(){
    return{
    }
  },
  router,
  render: h => h(App)
})

