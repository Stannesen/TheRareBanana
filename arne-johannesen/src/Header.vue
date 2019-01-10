<template>
    <div class="header">
        <img class="logo__img" src='./assets/top-logo.png' alt="Can't find img">
        <div class="nav">
            <ul class="nav__ul">
                <li class="nav__li">
                    <a class="nav__link" href="/">Home</a>
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .header{
        background: #68b6f0;
    }

    .logo__img{
        width: 500px;
        padding-left: 30px;
    }

    .nav{
        background: #5C708E;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__li{
            list-style: none;
            float: left;
            font-size: 20px;
            padding-right: 20px;
        }

        &__link{
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
