<template>
  <div class="background">
    <div class="main">
      <h1>Home</h1>

      <div class="grid">
        <app-grid-item>
          <a href="/time"></a>
          <app-clock></app-clock>
        </app-grid-item>

        <app-grid-item class="grid__converter">
          <h1 class="converter__text">Converter</h1>
          <app-converter></app-converter>
        </app-grid-item>

        <app-grid-item>
          <app-time></app-time>
        </app-grid-item>
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


<style lang="scss" scoped>
  .background{
    display: flex;
    justify-content: center;
    background: lightgray;
    padding-bottom: 10px;
  }

  .main{
    width: 100%;
    background: white;
    padding: 20px;
  }

  .grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    &__converter{
      grid-column: span 2;
      display: flex;
      flex-direction: column;
    }
  }

  .grid-item{
    margin-right: 1%;
    height: 300px;

    padding: 0px 10px;

    &:last-child{
      margin-right: 0px;
    }
  }

  .grid__converter{
  }
  
  @media screen and (max-width: 1020px){
    .main{
      .grid{
        display: block;
      }
    }
  }
</style> 
