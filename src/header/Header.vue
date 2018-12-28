<template>
    <div class="top-bar">
        <div class="main">
            <a class="logo__btn" href="/">
                <img class="logo__img" src="../assets/top-logo.png" alt="">
            </a>
            <app-nav></app-nav>
        </div>
    </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
    data: function() {
        return{

        }
    },
    methods: {
        
    },
    components: {
        "app-nav": Nav
    }
}
</script>


<style lang="scss">
    .logo__btn{
        background: none;
        border: none;
        padding-left: 100px;
        color: white;
        text-decoration: none;
        font-size: 50px;
        
        &:hover{
            cursor: pointer;
        }
    }

    .logo__img{
        width: 400px;
        padding-top: 5px;
        //height: 100%;
        height: -moz-fit-content;
    }

    .top-bar{
        background: lightseagreen;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .main{
        //display: flex;
        width: 100%;
    }

    .nav{
        padding-left: 100px;
    }

    /* Dropdown Arrow */
    i{
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
</style>
