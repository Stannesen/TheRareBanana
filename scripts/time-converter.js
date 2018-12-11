var timeTest = [
    {index: 0, name: "Second", value: 1, id: "second"},
    {index: 1, name: "Minute", value: 60, id: "minute"},
    {index: 2, name: "Hour", value: 3600, id: "hour"},
    {index: 3, name: "Day", value: 86400, id: "day"},
    {index: 4, name: "Nanosecond", value: 1e-9, id: "nanosecond"},
    {index: 5, name: "Microsecond", value: 1e-6, id: "microsecond"},
    {index: 6, name: "Millisecond", value: 1e-3, id: "millisecond"}
];

function calculate(from, to, value){
    //addValues();
    var resultHelp = 0;
    var calcHelp = 0;
    var fromIndex = 0;
    var toIndex = 0;
    
    for(var i = 0; i < timeTest.length; i++){
        if(timeTest[i].id == from){
            fromIndex = timeTest[i].index;
        }
        if(timeTest[i].id == to){
            toIndex = timeTest[i].index;
        }
    }

    calcHelp = (value * timeTest[fromIndex].value) / timeTest[toIndex].value;

    resultHelp = timeTest[toIndex].name + ": " + calcHelp
    return calcHelp;
}

new Vue ({
    el: "#time-converter-holder",
    data:{
        fromValue: 0,
        toValue: 0,
        convertetValue: 0,
        from: "second",
        to: "second"

    },
    methods:{
        onEdit: function(input){
            if(input == 0){
                this.convertetValue = 0;
                this.convertetValue = calculate(this.from, this.to, this.fromValue);
            }else{
                this.fromValue = 0;
                this.fromValue = calculate(this.to, this.from, this.convertetValue);
            }
        }  
    },
    watch:{
        from(){
            this.convertetValue = 0;
            this.convertetValue = calculate(this.from, this.to, this.fromValue);
        },
        to(){
            this.convertetValue = 0;
            this.convertetValue = calculate(this.from, this.to, this.fromValue);
        }
    },
    computed:{
        
    }
});

