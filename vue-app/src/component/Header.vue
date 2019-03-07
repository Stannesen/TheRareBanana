<template>
    <div class="Header">
        <div>
            <h1 class="logo">The Rare Banana</h1>
        </div>

        <div class="nav">
            <div class="nav__menu">
                <div class="menu--item">
                    <p class="tempText">
                        Item 1
                    </p>
                </div>
                <div class="menu--item">
                    <p class="tempText">
                        Item 2
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .tempText{
        color: hotpink;
        padding: 0;
        margin: 0;
    }

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
        height: 30px;
        background: lightblue;

        &__menu{
            display: flex;
            flex-direction: row;
            align-content: center;
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

