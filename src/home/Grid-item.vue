<template>
    <div class="grid-item">

        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .grid-item{
        width: 100%;
        display: flex;
        justify-content: center;
        border: 1px solid;

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

