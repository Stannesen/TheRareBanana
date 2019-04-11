<template>
    <div class="Header">
        <div>
            <h1 class="logo">The Rare Banana</h1>
        </div>

        <div class="nav">
            <div class="nav__menu">
                <div class="menu__item">
                    <button class="menu__button">Home</button>
                </div>
                <div class="menu__item">
                    <button class="menu__button">Games</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .Header{
        background: #ff3737;
        width: 100%;
        color: white;
    }

    .logo{
        padding: 20px 0px;
        padding-left: 10px;
        margin: 0;

        font-size: 50px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .nav{
        background: lightblue;

        &__menu{
            display: flex;
            flex-direction: row;
            align-content: center;
        }
    }

    .menu{
        &__item{
            margin-left: 10px;
        }

        &__button{
            background: none;
            border: none;
            padding-right: 20px;
            font-size: 25px;

            &:hover{
                color: red;
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

