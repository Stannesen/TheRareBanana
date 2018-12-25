<template>
    <div class="footer">
        <h1 class="footer__logo">The Rare Banana Copyright © 2018. All rights reserved.</h1>
        <div class="links">
            <div class="links__types">
                <p class="links__header">Links:</p>
                <ul class="footer__ul">
                    <li class="footer__list">
                        <a class="footer__link" href="/about">About</a>
                    </li>
                </ul> 
            </div>   

            <div class="links__types">
                <p class="links__header" >Converters:</p>
                <ul class="footer__ul">
                    <li class="footer__list">
                        <a class="footer__link" href="/converter">Time Converter</a>
                    <li class="footer__list">
                        <a class="footer__link" href="/ converter">Length Converter</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .footer{
        width: 100%;
        height: 100%;
        background: lightgray;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;

        &__logo{
            font-size: 20px;
            margin: 5px;
            padding-bottom: 10px;
        }

        &__ul{
            text-align: left;
        }

        &__list{
            padding: 10px;
            text-align: center;
            list-style: none;

            border-top: 1px solid white;

            &:last-child{
                border-bottom: 1px solid white;
            }
        }
    } 

    .footer__link{
        color: black;
        text-decoration: none;
        font-size: 15px;
    }

    .links{
        margin: 0px;
        width: 40%;

        display: flex;

        &__header{
            font-size: 20px;
            margin: 5px;
        }

        &__types{
            margin-right: 40px;
            top: 0;
            flex: 1;
        }
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
