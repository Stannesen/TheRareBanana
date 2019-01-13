<template>
    <div>
        <p class="info">
                {{ hour + " : " + minute + " : " + second }}
            <br>
                {{ date + " : " + month + " : " + year }}
            <br>
                {{ day }}
            <br>
                {{ "Week: " + week }}
        </p>
    </div>
</template>


<style lang="scss" scoped>
    .info{
        font-size: 60px;
        margin-top: 0;
        text-align: center;
    }

    @media screen and (max-width: 1280px){
      .info{
        font-size: 55px;
      }
    }

    @media screen and (max-width: 1190px){
      .info{
        font-size: 50px;
      }
    }
</style>

<script>
export default {
    data(){
        return{
            now: new Date(),
            hour: 0,
            minute: 0,
            second: 0,
            date: 0,
            month: 0,
            year: 0,
            day: 0,
            week: 0,

            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            months: ["Jan" , "Feb", "Mar", "Apr", "May", "jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
    },

    methods:{
        updateTime() {
            this.now = new Date();
            this.hour = this.now.getHours();
            this.minute = this.now.getMinutes();
            this.second = this.now.getSeconds();
            this.date = this.now.getDate();
            this.year = this.now.getFullYear();
            this.week = this.getWeekNumber(new Date());

            this.day = this.days[this.now.getDay()];
            this.month = this.months[this.now.getMonth()];
        },
        getWeekNumber(d) {
            // Copy date so don't modify original
            d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
            // Set to nearest Thursday: current date + 4 - current day number
            // Make Sunday's day number 7
            d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
            // Get first day of year
            var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
            // Calculate full weeks to nearest Thursday
            var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
            // Return array of week number
            return weekNo;
        }

    },
    computed:{
        currentTime(){
            return this.hour + " : " + this.minute + " : " + this.second;
        }
    },
    created() {
        setInterval(()=> { this.updateTime() } , 100)
    }
}
</script>
