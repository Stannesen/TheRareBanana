<template>
  <div class="background">
    <div class="home">
      <h1>Home</h1>

      <div class="grid">
        <app-grid-item>
          <app-clock></app-clock>
        </app-grid-item>

        <app-grid-item class="grid__converter">
          <app-converter></app-converter>
        </app-grid-item>
        
        <app-grid-item></app-grid-item>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      page: "app-clock"
    }
  }
}
</script>

<style lang="scss">
  .background{
    display: flex;
    justify-content: center;
  }

  .home{
    width: 90%;
  }

  .grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  .grid-item{
    margin-right: 1%;
    height: 300px;

    &:last-child{
      margin-right: 0px;
    }
  }

  .grid__converter{
    grid-column: span 2;
  }
</style> 
