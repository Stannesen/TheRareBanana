<template>
    <div class="console" style="color: white;"> 
        <button v-on:click="test()">Run Demo</button>
        <input type="reset" v-on:click="reset()"> 
        <pre id="output" class="console__output" ref="console" >{{output}}</pre>
        <input class="console__input" v-on:keyup="keymonitor" type="text" v-model="consoleInput" :disabled="validated == 1">
        <p style="color: white;">
            {{ msg }}
        </p>
    </div>
</template>


<style lang="scss" scoped>
.console{
    &__output{
        width: 700px;
        max-height: 304px;
        margin: 0;
        padding: 0;
        font-size: 20px;

        overflow-y: auto;

        background: black;
        color: white;
        resize: none;
    }

    &__input{
        width: 100%;
    }
}
</style>


<script>
export default {
    props: {
        msg: {
            type: String
        },
        demoStart: String,
        task: Function,
        inputNeeded: Number,
        resetPress: Boolean
    },
    data(){
        return{
            consoleInput: "",
            input: "",
            currentTask: this.msg,
            validated: 1,
            inputs: 0,
            repeat: true,
            output: ""
        }
    },

    methods:{
        reset(){
            console.log("Reset");
            this.consoleInput = "";
            this.currentTask = this.msg;
            this.validated = 1;
            this.inputs = 0;
            this.repeat = true;
            //this.resetPress = false;

            var temp = this.task("reset");

            this.output = "";
            
            this.onStart();

            var test = 0;
            
            console.log("consoleInput: " + this.consoleInput);
            console.log("input: " + this.input);
            console.log("current task: " + this.msg);
            console.log("validated: " + this.validated);
            console.log("inputs: " + this.inputs);
            console.log("Repeat: " + this.repeat);

        },
        keymonitor: function(event) {
            if(event.key == "Enter")
            {
                if(this.consoleInput === ""){
                    
                }else{

                    this.input = this.consoleInput;

                    this.consoleInput = "";
                    this.sumbmittInput();

                    this.loop();
                }
            }
        },

        csharpDemoPicker(){
            if(this.currentTask === "task1"){
                this.csharpDemoTask1();
            }
            
        },

        loop(){
            var temp = this.inputNeeded;
            if(temp === this.input || this.repeat === false){
                this.validated = 1;
            }else{
                this.validated = 0;
            }
        },

        scrollToBottom() {
            var scrollHeight = 10
            $('#output').scrollTop($('#output')[0].scrollHeight);
            
        },

        sumbmittInput(){
            var temp = this.task(this.input);
            this.addToTextarea(temp.text);
            if(temp.valid === true){
                this.inputs += 1;
            }

            this.repeat = temp.repeat;
        },

        csharpDemoTask1(){
            this.addToTextarea(this.demoStart);
        },


        addToTextarea(text) {
            this.output += text + "\n"; 
            this.$nextTick(() => {
                this.$refs['console'].scrollTop = this.$refs['console'].scrollHeight;
            })
        },

        onStart(){
            this.csharpDemoPicker();
            this.validated = 1;
            this.loop();
        }

        
    },

    computed:{
        consoleOutput(){
        }

    },

    mounted(){
        this.onStart();
        setInterval(() => {this.loop()}, 100)
    },

    destroyed(){
        
    }
}
</script>
