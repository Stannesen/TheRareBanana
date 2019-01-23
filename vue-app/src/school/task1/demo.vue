<template>
    <div style="color: white;">  
        <canvas ref="console">

        </canvas>
    </div>
</template>


<style lang="scss" scoped>

</style>


<script>
export default {
    data(){
        return{
            interval: null
        }
    },

    methods:{
        runTask(){
            this.drawConsole("Hello World");
        },

        drawConsole(text){
            var consoleCanvas = this.$refs["console"];
            var context = this.$refs["console"].getContext('2d');

            //var text = "Hello World";

            console.log("drawing");

            context.beginPath();
                context.fillStyle = 'white';
                context.strokeStyle = "white";
                context.moveTo(0, 0);
                context.font = "40px Arial";
                context.fillText(text, 10.5, 40);
            context.stroke();
            
        }
    },

    computed:{

    },

    mounted(){
        this.runTask();

        //this.interval = setInterval(() => { this.drawConsole()}, 1000)
    },

    destroyed(){
        //clearInterval(this.interval);
    }
}
</script>
