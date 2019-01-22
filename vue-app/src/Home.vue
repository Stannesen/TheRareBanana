<template>
  <div class="background">
    <div class="main">
      <div class="grid">
        <app-grid-item class="grid__time">
          <h1 class="header">Current Time</h1>
          <div class="time__holder">
            <app-time class="time"></app-time>
            <app-clock></app-clock>
          </div>
        </app-grid-item>

        <app-grid-item class="grid__converter">
          <h1 class="header converter__text">Converter</h1>
          <app-converter></app-converter>
        </app-grid-item>
      </div>

      <div class="remakes">
        <div class="remakes__cnt">
          <div class="remakes__links">
            <div class="remakes__item">
              <div class="remakes__link-holder">
                <p class="remakes__header">Vanilla</p>
                <ul>
                  <li>
                    <a href="https://www.therarebanana.com/basic/">Home</a>
                  </li><li>
                    <a href="https://www.therarebanana.com/basic/games.html">Basic Game Rating</a>
                  </li><li>
                    <a href="https://www.therarebanana.com/basic/time-converter.html">Time Converter</a>
                  </li>
                </ul>
              </div>
                <p class="remakes__txt">This was my first atempt on a website.</p>
            </div>

            <div class="remakes__item">
              <div class="remakes__link-holder">
                <p class="remakes__header">Vue</p>

                <ul>
                  <li>
                    <a href="https://www.therarebanana.com/">Home</a>
                  </li>
                </ul>
              </div>
              <p class="remakes__txt">This page is made in Vue and it's what you are looking at now</p>
            </div>

            <div class="remakes__item">
              <div class="remakes__link-holder">
                <p class="remakes__header">React</p>

                <ul>
                  <li>
                    <a href="https://www.therarebanana.net/">Home</a>
                  </li>
                </ul>
              </div>
              <p class="remakes__txt">This page is made in React</p>
            </div>
          </div>
        </div>
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
    flex-direction: row;
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

  .header{
    margin: 0;
    padding: 10px 0px;
    font-size: 50px;
  }

  .time{
    font-size: 40px;
    width: 100%;

    &__holder{
      display: flex;
    }
  }

  .clock{
    width: 300px;
    float: right;
  }

  .remakes{
    width: 100%;
    background: white;
    margin-top: 40px;
    

    &__cnt{
      border-top: 1px solid lightgray;
      padding-top: 30px;
    }

    &__header{
      font-size: 40px;
      margin: 0px;
      padding-bottom: 10px;

      &--center{
        text-align: center;
      }
    }

    &__txt{
      width: 100%;
      border: solid 1px black;
      border-radius: 10px;
      padding: 10px;
      height: fit-content;
      height: -moz-fit-content;
    }

    &__item{
      width: 100%;
      //text-align: center;
      border-right: solid 1px black;

      padding: 0px 20px;
      display: flex;

      &:last-child{
        border-right: none;
      }
    }

    &__links{
      display: flex;
    }

    &__link-holder{
      width: 100%;
    }

    &__link{
      text-decoration: none;
      font-size: 20px;

      &:hover{
        text-decoration: underline;
      }
    }
  }
  
  @media screen and (max-width: 1020px){
    .main{
      .grid{
        display: block;
      }
    }
  }
</style> 
