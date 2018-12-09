new Vue({
    el: "#vue-app",
    data:{
        name: "Arne",
        job: "Programer",
        website: "https://therarebanana.com/",
        websiteTag: '<a href="https://therarebanana.com/">The Rare Banana</a>'
    },

    methods: {
        greet: function(time){
            return "Good " + time + " " + this.name;
        }
    }
});


new Vue({
    el: "#vue-event",
    data:{
        age: 18,
        x: 0,
        y: 0
    },

    methods:{
        add: function(inc){
            this.age += inc;
        },

        subtract: function(dec){
            this.age -=  dec;
        },

        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        click: function(){
            alert("You Clicked Me");
        }
    }
});

new Vue({
    el: "#vue-keyboardEvent",
    data:{
        name: "",
        age: ""
    },

    methods:{
        logName: function(){
            console.log("You entered your name");
        },

        logAge: function(){
            console.log("You entered your age");
        }
    }
});

new Vue({
    el: "#vue-computedProperties",
    data:{
        age: 20,
        a: 0,
        b: 0
    },

    methods:{
        addToA: function(){
            console.log("Add to A");
            return this.a + this.age;
        },

        addToB: function(){
            console.log("Add to B");
            return this.b + this.age;
        }
    },

    computed:{
        addToAComputed: function(){
            console.log("Add to A Computed");
            return this.a + this.age;
        },

        addToBComputed: function(){
            console.log("Add to B Computed");
            return this.b + this.age;
        }
    }
});

new Vue({
    el: "#vue-dynamicCSS",
    data:{
        available: false,
        nearby: false
    },
    
    methods:{

    },

    computed:{
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});