<template>
  <div id="app">
    <app-header></app-header>
    
    <router-view></router-view>

    <app-footer></app-footer>  
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      page: "app-clock"
    }
  }
}
</script>

<style lang="scss">
  .clock{
    width: 300px;
  }
</style> 
