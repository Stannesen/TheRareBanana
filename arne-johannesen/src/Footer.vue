<template>
    <div class="footer">
        <h1 class="footer__logo">The Rare Banana Copyright © 2018-2019x. All rights reserved.</h1>
        <div class="links">
            <div class="links__types">
                <p class="links__header">The Rare Banana Remakes</p>
                <ul class="footer__ul">
                    <li class="footer__list">
                        <a class="footer__link" href="https://www.therarebanana.com/">Vue</a>
                    </li>

                    <li class="footer__list">
                        <a class="footer__link" href="https://www.therarebanana.net/">React</a>
                    </li>
                    
                    <li class="footer__list">
                        <a class="footer__link" href="https://www.therarebanana.com/basic/">HTML</a>
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
        background: #5f6380;
        text-align: center;
        color: white;

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

    .footer__link{
        color: black;
        text-decoration: none;
        font-size: 15px;
        color: white;
    }

    .links{
        margin: 0px;
        width: 100%;
        color: white;

        display: flex;

        &__header{
            font-size: 20px;
            margin: 5px;
        }

        &__types{
            //margin-right: 40px;
            top: 0;
            flex: 1;
            color: white;
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
