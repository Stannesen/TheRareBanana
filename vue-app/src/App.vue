<template>
  <div id="app">
    <h1>Hey</h1>  
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
