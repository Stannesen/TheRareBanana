<template>
    <div class="footer">
        <div class="footer__cnt">
            <a href="https://www.therarebanana.com/">
                <img class="footer__logo" src="./assets/logoTest2.png" alt="">
            </a>
            <h1 class="footer__copyright">Copyright © The Rare Banana 2018-2019. All rights reserved.</h1>

            <div class="info">
                <a class="info__link" href="https://www.arnejohannesen.com">About Me</a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .footer{
        width: 100%;
        height: 100%;
        background: white;

        &__cnt{
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        &__logo{
            height: 100px;
        }

        &__copyright{
            font-size: 20px;
            margin: 5px;
            padding-bottom: 10px;
            width: 100%;
        }

        &__ul{
            text-align: left;
            padding: 0 100px;
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

    .info{
        text-align: right;
        width: 100%;
        padding-right: 20px;
        margin-right: 60px;
        border-right: solid black 1px;

        
        &__link{
            text-align: right;
            text-decoration: none;

            &:hover{
                text-decoration: underline;
            }

            &:last-child{
                border-left: solid black 1px;
                padding-left: 20px;
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
        width: 100%;
        width: 100%;
        display: flex;

        &__header{
            font-size: 20px;
            margin: 5px;
        }

        &__types{
            //margin-right: 40px;
            top: 0;
            flex: 1;
        }
    }

    @media screen and (max-width: 1020px) {
        .footer{
            .footer__ul{
                padding: 0 20px;
            }
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
