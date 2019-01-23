<template>
    <div class="background">
        <div class="main">
            <h1 class="main__header">School</h1>
            <p class="main__under-text">C#</p>

            <div class="main__holder">
                <div class="main__side-menu">
                    <h1>Side Menu</h1>
                    <div>
                        <ul class="tree"> 
                        <li>
                            <button v-on:click="currentTab = 'task1';" class="task__btn task__btn--current" >Task 1</button>

                            <ul class="nav-task1" v-bind:class="{ active: tasksActive[0].value }">
                                <li>
                                    <a name="demo" href="#demo">Demo</a>
                                </li>
                                <li>
                                    <a name="a" href="#a">A</a>
                                </li>
                                <li>
                                    <a name="b" href="#b">B</a>
                                </li>
                                <li>
                                    <a name="c" href="#c">C</a>
                                </li>
                                <li class="last">
                                    <a name="code" href="#code">Code</a>
                                </li>
                            </ul>
                        </li>
                        <li class="last">
                            <button v-on:click="currentTab = 'task2';" class="task__btn">Task 2</button>
                        </li>
                    </ul>
                    </div>
                </div>

                <div class="main__cnt">
                    <component v-bind:is="currentTabComponent"></component>
                </div>
            </div>            
        </div>
    </div>
</template>


<style lang="scss" scoped>
.background{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: solid lightgray 10px;
}

.main{
    width: 97%;
    background: white;

    &__header{
        font-size: 50px;
        padding-bottom: 0;
        margin-bottom: 0;
    }

    &__under-text{
        font-size: 30px;
        margin-top: 10px;
    }

    &__holder{
        display: flex;

    }

    &__cnt{
        width: 100%;
    }

    &__side-menu{
        width: 300px;
        //background: hotpink;
        margin-right: 40px;
    }
}

.task__btn{
    border: none;
    background: none;
    font-size: 25px;

    &:hover{
        color: lightgray;
    }
}

.nav-task1{
    display: none;

    &__current{
        display: block;
    }
}

ul.tree, ul.tree ul {
    list-style-type: none;
    background: url(../assets/vline.png) repeat-y;
    margin: 0;
    padding: 0;
}

.tree{
    ul {
        margin-left: 10px;
    }

    li {
        margin: 0;
        padding: 0 22px;
        line-height: 30px;
        background: url(../assets/node.png) no-repeat;
        color: #369;
        font-weight: bold;
    }

    li.last {
        background: #fff url(../assets/lastnode.png) no-repeat;
    }
}




.active{
    display: block;
}
</style>


<script>
export default {
    data(){
        return{
            currentTab: "task1",
            tasks: [
                {text: 'Task 1', value: 'task1'},
                {text: 'Task 2', value: 'task2'}
            ],

            navTask1: false,
            tasksActive: [
                {text: 'task1', value: false},
                {text: 'task2', value: false}
            ]
        }
    },
    watch: {
        currentTab(val) {
            this.changeTab();
        }
    },

    methods:{
        changeTab(){
            /*for(var i = 0; i < this.tasksActive.length; i++){
                if(this.currentTab != this.tasksActive[i].text){
                    this.tasksActive[i].value = false;
                }else if(this.currentTab === this.tasksActive[i].text){
                    this.tasksActive[i].value = true;
                }
            }*/
        },

        demo(){

        }
    },

    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    },

    created(){
        this.changeTab();
    }
}
</script>
