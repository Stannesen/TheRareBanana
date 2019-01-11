<template>
    <div class="home__main">
        <div class="block top__img">
            <h1 class="top__text">Front End Developer</h1>
        </div>

        <div class="block contact">
            
            <div class="contact__line">
                <h2 class="contact__item">Discord: TheRareBananaBread#4338</h2>
                <h2 class="contact__item">Slack: <a class="contact__link" 
                    href="https://join.slack.com/t/therarebananagroup/shared_invite/enQtNTIxMDc5MTY5OTcwLTc4YThlNWFlNzgzMzE3ODhmZTNlZTUwNDM4ZWM0YjY3OTM4YmU2MjllMmRkZjFmNmNkZjg5Y2Y1NGVjZjI3MzM">
                    TheRareBanana <i class="arrow--right"></i></a></h2>
                <h2 class="contact__item">Mail: arne.johannesen00@gmail.com</h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .block{
        margin-top: 10px;
    }

    .contact{
        width: 100%;
        height: -moz-fit-content;
        height: fit-content;
        background: #7279ab;

        display: flex;
        flex-direction: row;
        justify-content: center;

        margin-bottom: 10px;

        &__line{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
        }

        &__item{
            padding-right: 20px;
            text-align: center;
        }

        &__link{
            color: white;
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
