<template>
  <div class="background">
    <div class="main">
      <h1>Home</h1>

      <div class="grid">
        <app-grid-item class="grid__time">
          <h1 class="time__header">Current Time</h1>
          <div class="time__holder">
            <app-time class="time"></app-time>
            <app-clock></app-clock>
          </div>
        </app-grid-item>

        <app-grid-item class="grid__converter">
          <h1 class="converter__text">Converter</h1>
          <app-converter></app-converter>
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

    .grid__time{
      display: block;
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

  .time{
    font-size: 40px;
    width: 100%;

    &__holder{
      display: flex;
    }

    &__header{
      margin: 0;
      padding: 0;
      font-size: 50px;
    }
  }

  .clock{
    width: 300px;
    float: right;
  }
  
  @media screen and (max-width: 1020px){
    .main{
      .grid{
        display: block;
      }
    }
  }
</style> 
