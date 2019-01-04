<template>
    <div class="clock">
        <div class="canvas__holder">
            <canvas class="clock__canvas clock__canvas-layer1" ref="clock"></canvas>
            <canvas class="clock__canvas clock__canvas-layer0" ref="clockArm" ></canvas>
        </div>
    </div>
</template>

<style lang="scss">
    
    .canvas__holder{
        position: relative;
    }

    .clock__canvas{
        width: 100%;
        height: 100%;
    }

    .clock__canvas-layer0{
        position: absolute;
        top: 0;
        left: 0;
    }
</style>

<script>
export default {
    data: function (){
        return{
            date: new Date(),
            clockDrown: false,
            clockX: 0.0,
            clockY: 0.0,
            clockScale: 700,
            r: 0,
            timeHelp: 0
        }
    },
    computed: {
        minutes() {
            return this.date.getMinutes();
        },
        seconds(){
            return this.date.getSeconds();
        }
    },
    created() {
        setInterval(() => { this.update()}, 10)
    },

    methods: {
        drawClock(){
            var clockCanvas = this.$refs["clock"];
            var context = this.$refs["clock"].getContext("2d");
        },
        updateClock() {
            this.date = new Date();
            var clockCanvas = this.$refs["clock"];
            var clockArmCanvas = this.$refs["clockArm"];
            var context = this.$refs["clock"].getContext("2d");
            //--- Drwaing white sircle to be the backgound ---//
            Math.TAU = 2 * Math.PI;

            clockCanvas.width = this.clockScale;
            clockCanvas.height = this.clockScale;
            clockArmCanvas.width = this.clockScale;
            clockArmCanvas.height = this.clockScale;

            this.clockX = this.clockScale/2;
            this.clockY = this.clockScale/2;
            this.r = (this.clockScale/2)-40;

            //--- Drwaing black lines from the middle and out and making a mark every minutt ---//
            var sec = 0;
            for(var i = 0; i < 60; i++){
                sec += (1/60);
                var armRadians = (Math.TAU * (sec)) - (Math.TAU/4);
                this.drawArmTest(sec, 2, 0.9, 1.07, 'black', this.clockX , this.clockY, context);
            }
            sec = 0;
            //--- Drwaing black lines from the middle and out and making a mark every hour ---// 
            for(var i = 0; i < 12; i++){
                sec += (1/12);
                var armRadians = (Math.TAU * (sec)) - (Math.TAU/4);
                this.drawArmTest(sec, 4, 0.9, 1.07, 'black', this.clockX, this.clockY, context);
            }

            //--- Drawing a black sircle around the clock ---//
            context.beginPath();
                context.fillStyle = 'black';
                context.strokeStyle = "black";
                context.arc(this.clockX, this.clockY , this.r + 20, 0, 2 * Math.PI);
            context.stroke();

            var time = this.date.getTime();
            var offset = this.date.getTimezoneOffset() / 60;
            var houreThinkness = 10;

            console.log("arm drawn");

            this.clockDrown = true;
        },

        drawArmTest(progress, armThickness, armFrom, armTo, armColor, x, y, context) {
            //var context = this.$refs["clockArm"].getContext("2d");
            var armRadians = (Math.TAU * (progress)) - (Math.TAU/4);
            //var targetX = this.clockX + Math.cos(armRadians) * (armLength * this.r);
            //var targetY = this.clockY + Math.sin(armRadians) * (armLength * this.r);

            var fromX = this.clockX + Math.cos(armRadians) * (armFrom * this.r);
            var fromY = this.clockY + Math.sin(armRadians) * (armFrom * this.r);

            var toX = this.clockX + Math.cos(armRadians) * (armTo * this.r);
            var toY = this.clockY + Math.sin(armRadians) * (armTo * this.r);

            context.lineWidth = armThickness;
            context.strokeStyle = armColor;

            context.beginPath();
                //context.moveTo(x, y); // Start at the center
                //context.lineTo(targetX, targetY); // Draw a line outwards
                context.moveTo(fromX, fromY);
                context.lineTo(toX, toY);
            context.stroke();
        },

        update() {
            this.date = new Date();
            
            this.drawArm();

            if(this.clockDrown == false){
                this.updateClock();
            }else if(this.clockDrown == true){
                //console.log("Clock is Drwan");
                //this.clockDrown = true;
            }

        },

        drawArm() {
            var context = this.$refs["clockArm"].getContext("2d");
            var time = this.date.getTime();
            var offset = this.date.getTimezoneOffset() / 60;

            context.clearRect(0, 0, this.clockScale, this.clockScale);
            this.drawArmTest( ((time / 1000 / 60 / 60 % 12)-offset) / 12, 9, 0, 0.70, 'black', this.clockX, this.clockY, context); //hour
            this.drawArmTest((time / 1000 / 60 % 60) / 60, 4, 0, 0.80, 'blue', this.clockX, this.clockY, context); //minute
            this.drawArmTest((time / 1000 % 60) / 60, 0, 1, 0, '#FF0000', this.clockX, this.clockY, context); //secound

            context.beginPath();
                context.arc(this.clockX, this.clockY, this.r / Math.PI / 6, 0, 2 * Math.PI, false);
                context.fill();
                context.lineWidth = 5;
                context.fillStyle = 'black';
                context.strokeStyle = "black";
            context.stroke();
            
        }
    }
}
</script>
