<template>
    <div>
        <div class="dropdown">
            <button class="dropdown__btn menu__text" onclick="myFunction()">Tools <i class="arrow--down"></i></button>
            <div class="dropdown__cnt">
                <ul class="dropdown__ul">
                    <li class="dropdown__list">
                        <div class="list__cnt"> 
                            <a class="dropdown__item menu__text menu__text--black" href="/clock">Clock</a>
                        </div>
                    <li class="dropdown__list">
                        <div class="list__cnt">
                            <a class="dropdown__item menu__text menu__text--black" href="/converter">Converter</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .dropdown{
        position: relative;
        display: inline-block;
        width: 100%;

        &:hover .dropdown__cnt{
            display: block;
        }
    }

    .dropdown__list{
        list-style: none;
    }

    .dropdown__btn{
        background: none;
        color: white;
        border: none;

        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .dropdown__item{
        background: white;
        margin: 0;
        width: 130px;
        margin: 0;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        height: fit-content;

        &:hover{
            background: lightgray;
        }
    }

    .dropdown__ul{
        height: 100%;
        padding-left: 0;
    }
    .dropdown__cnt{
        display: none;
        position: absolute;
        min-width: inherit;
        width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding-top: 5px;

        z-index: 100;
    }
</style>
