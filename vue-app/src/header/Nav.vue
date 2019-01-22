<template>
    <div class="nav">
        <ul class="nav__ul">
            <li class="nav__list" >
                <a class="nav__item menu__text" href="/">Home</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return { }
    }
}
</script>

<style lang="scss">
    .menu__text{
        font-family: "Times New Roman", Times, serif;
        font-style: normal;
        font-size: 1vw;
        text-transform: uppercase;
        color: black;
        text-decoration: none;
        font-size: 20px;

        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }

        &--black{
            color: black;
        }
    }

    /* Dropdown Arrow */
    .arrow {
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


<style lang="scss" scoped>
    .nav{
        background: #e6ddad;
        height: 2vw;

        z-index: 1000000;

        padding-top: 5px;
        padding-bottom: 5px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        &__ul{
            padding: 0;
        }

        &__list{
            list-style: none;
            float: left;
            margin-right: 20px;
            //border-left: 1px solid white;

            &:last-child{
                padding-right: 10px;
                //border-right: 1px solid white;
            }
        }
    }
</style>
