<template>
    <div class="footer">
        <h1>The Rare Banana</h1>
        <div class="footer__links">
            <a href="https://github.com/TheRareBananaBread/TheRareBanana">Github</a>
            <a href="https://www.arnejohannesen.com">About Me</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer{
        width: 100%;
        background: lightcoral;
        color: white;

        text-align: center;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &__links{
            justify-self: right;
            justify-content: right;
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

