<template>
    <div class="home__main">
        <div class="block top__img">
            <h1 class="top__text">Arne Johannesen</h1>
        </div>

        <div class="nav">
            <div>
                <button>Home</button>
            </div>
        </div>

        <div class="main">
            <pre class="main__text"><h1 class="main__header">Hey!</h1>

            </pre>
            <img class="main__img" src="./assets/me.jpg" alt="">
        </div>

        <div class="block contact">
            <div class="contact__line">
                <div class="contact__item">
                    <a class="contact__link" href="https://www.linkedin.com/in/arne-johannesen-954636163/">
                        <img class="contact__img" src="./assets/linkedin.svg" alt="">
                    </a>
                </div>
                
                <div class="contact__item">
                    <a class="contact__link" href="mailto:arne.johannesen00@gmail.com">
                        <img class="contact__img" src="./assets/email.svg" alt="">
                    </a>
                </div>

                <div class="contact__item">
                    <a class="contact__link" href="https://twitter.com/ArneJohannesen4">
                        <img class="contact__img" src="./assets/twitter.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .block{
        margin-top: 10px;
    }

    .main{
        display: flex;
        padding: 5px 20px;
        border-top: 10px lightcoral solid;

        &__text{
            width: 100%;
        }
        
        &__header{
            margin-top: 0px;
            padding-top: 0px;
        }
        
        &__img{
            height: 300px;
        }
    }

    .nav{
        height: 100px;
        background: lightcoral;
    }
    
    .contact{
        width: 100%;
        height: -moz-fit-content;
        height: fit-content;
        background: #7279ab;

        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px 0px;

        &__line{
            display: flex;
            justify-content: flex-end;
            width: 100%;
        }

        &__item{
            width: 100px;
        }

        &__img{
            color: white;
            height: 70%;
            display: block;  
        }   

        &__link{
            border: solid 1p;
            background: whitesmoke;
            border-radius: 100px;
            height: 50px;
            width: 50px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center; 
        }
    }

    .arrow{
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        margin-left: 5px;
        
        &--down {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
        }
        
        &--right {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
        }
    }

    .top__img{
        margin-top: 0;
        background-image: url('./assets/pc-html.jpg');
        background-size: cover;
        height: 768px;
        filter: grayscale(80%);

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .top__text{
        width: 100%;
        text-align: center;
        color: white;
        font-size: 100px;
        font-family: fantasy;
        text-shadow: 5px 5px 1px #FF0000;
    }
</style>


<script>
export default {
    data(){
        return{

        }
    }
}
</script>
