<template>
  <div id="app">
    <vue-app-Header> </vue-app-Header>
    <h1>Hey</h1> 
    <vue-app-Footer> </vue-app-Footer>
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

  @media screen and (max-width: 1020px) {
    #app{
      .main{
        width: 100%;
      }
    }
  }
</style> 
