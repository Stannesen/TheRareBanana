<template>
    <div>
        
    </div>
</template>


<style lang="scss" scoped>
    .logo{
        margin: 0;
        padding: 10px 10px;
        color: white;
        font-size: 40px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

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
