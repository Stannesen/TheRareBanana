<template>
    <div class="grid-item">

        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .grid-item{
        width: 100%;
        display: block;
        justify-content: center;
        border: 1px solid;
        border-radius: 30px;
        box-sizing: border-box;
        overflow: hidden;

        .img{
            width: 100px;
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

