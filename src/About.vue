<template>
    <div class="background">
        <div class="main">
            <h1>About {{ age[1] }}</h1>
            <p>Hei, i am Arne. I am a Front End developer from Norway</p>
            <div>
                <div>
                    {{ age[0] }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            myAge: 0,
            now: new Date(),
        }
    },
    computed:{
        age(){
            var birthday = new Date(2000, 10, 30);

            var age = new Date(this.now - birthday);

                        
            var currentYear = age.getFullYear() - 1970;
            var days = (age / 1000 / 60 / 60 / 24).toFixed(0);

            var returnValue = [
                currentYear,
                days
                ];
            
            return returnValue;
        }
    },
    methods: {
        updateTime() {
            this.now = new Date();
        }
    },  
    created() {
        setInterval(()=> { this.updateTime() } , 1000)
    }
}
</script>

<style lang="scss" scoped>
    .background{
        display: flex;
        justify-content: center;
    }

    .main{
        width: 80%;
    }
</style>
