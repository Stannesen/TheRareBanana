<template>
    <div class="backToWow">
        <h1 class="wow__header">Back To WOW</h1>
        <p class="txt">Days: {{ days }} 
            <br> Hours: {{ hours }} 
            <br> Minutes: {{ minutes }}
            <br> Seconds: {{ seconds }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .backToWow{
        padding-left: 20px;
        text-align: center;
        font-size: 100px;
    }

    .wow__header{
        padding: 0;
        margin: 0;
    }

    .txt{
        font-size: 50px;
        text-align: center;
    }
</style>


<script>
export default {
    data(){
        return{
            date: new Date(),
            countDownDate: new Date("Jan 16, 2019 23:00:00").getTime(),
            now: 0,
            distance: 0
        }
    },
    methods: {
        update() {
            this.date = new Date();
            this.now = this.date.getTime();

            this.distance = this.countDownDate - this.now;
        }
    },

    computed: {
        days(){
            return Math.floor(this.distance / (1000 * 60 * 60 * 24));
        },
        hours(){
            return Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        },
        minutes(){
            return Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
        },
        seconds(){
            return Math.floor((this.distance % (1000 * 60)) / 1000);
        }
    },
    created() {
        setInterval(() => { this.update()}, 10)
    },
}
</script>
