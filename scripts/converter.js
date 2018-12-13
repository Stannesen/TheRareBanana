new Vue ({
    el: "#converter-holder",
    data:{
        fromValue: 0,
        toValue: 0,
        convertetValue: 0,
        converter: "time",
        from: "",
        to: "",
        test: this.time,
        values: {
            length: [
                {index: 0, name: "Kilometre", value: 0.001, id: "kilometre"},
                {index: 1, name: "Metre", value: 1, id: "metre"},
                {index: 2, name: "Centimetre", value: 100, id: "centimetre"},
                {index: 3, name: "Millimetre", value: 1000, id: "millimitre"},
                {index: 4, name: "Micrometre", value: 1e+6, id: "micrometre"},
                {index: 5, name: "Nanometre", value: 1e+9, id: "nanometre"},
                {index: 6, name: "Mile", value: 0.000621371, id: "mile"},
                {index: 7, name: "Yard", value: 1.094, id: "yard"},
                {index: 8, name: "Foot", value: 3.281, id: "foot"},
                {index: 9, name: "Inch", value: 39.37, id: "inch"},
                {index: 10, name: "Nautical Mile", value: 0.000539957, id: "nauticalMile"}
            ],
            time: [
                {index: 0, name: "Second", value: 1, id: "second"},
                {index: 1, name: "Minute", value: 60, id: "minute"},
                {index: 2, name: "Hour", value: 3600, id: "hour"},
                {index: 3, name: "Day", value: 86400, id: "day"},
                {index: 4, name: "Nanosecond", value: 1e-9, id: "nanosecond"},
                {index: 5, name: "Microsecond", value: 1e-6, id: "microsecond"},
                {index: 6, name: "Millisecond", value: 1e-3, id: "millisecond"}
            ],
            mass: [
                {index: 0, name: "Tonne", value: 0.001, id: "tonne"},
                {index: 1, name: "Kilogram", value: 1, id: "kilogram"},
                {index: 2, name: "Gram", value: 1000, id: "gram"},
                {index: 3, name: "Milligram", value: 1e+6, id: "milligram"},
                {index: 4, name: "Mircogram", value: 1e+9, id: "microgram"},
                {index: 5, name: "Imperial Ton", value: 0.000984207, id: "imperialTon"},
                {index: 6, name: "US Ton", value: 0.00110231, id: "usTon"},
                {index: 7, name: "Stone", value: 0.157473, id: "stone"},
                {index: 8, name: "Pound", value: 2.205, id: "pound"},
                {index: 9, name: "Ounce", value: 35.274, id: "ounce"}
            ]
        }
        

    },
    methods:{
        onEdit: function(input){
            if(input == 0){
                this.convertetValue = 0;
                this.convertetValue = this.calculate(this.from, this.to, this.fromValue);
            }else{
                this.fromValue = 0;
                this.fromValue = this.calculate(this.to, this.from, this.convertetValue);
            }
        },

        calculate: function(from, to, value, modifier){
            var calcHelp = 0;
            var fromIndex = 0;
            var toIndex = 0;
            var currentConverter = this.test;
            
            
            for(var i = 0; i < currentConverter.length; i++){
                if(currentConverter[i].id == from){
                    fromIndex = currentConverter[i].index;
                }
                if(currentConverter[i].id == to){
                    toIndex = currentConverter[i].index;
                }
            }

            calcHelp = (value * currentConverter[toIndex].value) / currentConverter[fromIndex].value;
            return calcHelp;
        },
        
        testFunc: function(){
            return this.test;
            
        },

        changeConverting: function(){
            this.test = this.values[this.converter];

            for(var i = 0; i < this.test.length; i++){
                if(this.test[i].value == 1){
                    this.from = this.test[i].id;
                    this.to = this.test[i + 1].id;
                }
            }
        },

        changeConvertingValue: function(fromToConverter){
            if(this.from == this.to){
                for(var i = 0; i < this.test.length; i++){
                    if(this.test[i].value == 1){
                        if(fromToConverter == 0){
                            if(this.test[i].id == this.to){
                                this.to = (this.test[i + 1].id);
                            }else{
                                this.to = this.test[i].id;
                            }
                        }else if(fromToConverter == 1){
                            if(this.test[i].id == this.from){
                                this.from = (this.test[i + 1].id);
                                break;
                            }else{
                                this.from = (this.test[i].id);
                            }
                        }
                    }
                }
            }   
        }   
    },  
    watch:{
        from(){
            this.convertetValue = 0;
            this.convertetValue = this.calculate(this.from, this.to, this.fromValue);
        },
        to(){
            this.convertetValue = 0;
            this.convertetValue = this.calculate(this.from, this.to, this.fromValue);
        }
    },
    computed:{
        
    },
    mounted(){
        this.from = "second";
        this.to = "minute";
        this.test = this.values[this.converter]
    }
});

