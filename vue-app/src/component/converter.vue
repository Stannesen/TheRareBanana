<template>
    <div>
        <select id="converter__choose" class="converter__choose" v-on:change="changeConverting" v-model="converter">
            <option value="time">Time</option>
            <option value="length">Length</option>
            <option value="mass">Mass</option>
            <option value="area">Area</option>
        </select>
        <div class="converter__holder">
            <div class="converter-box">
                <input class="converterInput" type="number" @input="onEdit(0)" v-model="fromValue"/>
                <select id="select__from" v-model="from" v-on:change="changeConvertingValue(0)">
                    <option v-for="converterOption in converterOptionFunc()" v-bind:value="converterOption.id" :key="converterOption.id">
                        {{converterOption.name}}
                    </option>
                </select> 
            </div>

            <p class="equal">=</p>

            <div class="converter-box">
                <input class="converterInput" type="number" @input="onEdit(1)" v-model="convertetValue">
                <select id="select__to" v-model="to" v-on:change="changeConvertingValue(1)">
                    <option v-for="converterOption in converterOptionFunc()" v-bind:value="converterOption.id" :key="converterOption.id"> 
                        {{converterOption.name}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fromValue: 0,
            toValue: 0,
            convertetValue: 0,
            converter: "time",
            from: "",
            to: "",
            converterOption: this.time,
            values: {
                length: [
                    {index: 0, name: "Yard", value: 1.094, id: "yard"},
                    {index: 1, name: "Foot", value: 3.281, id: "foot"},
                    {index: 2, name: "Inch", value: 39.37, id: "inch"},
                    {index: 3, name: "Centimetre", value: 100, id: "centimetre"},
                    {index: 4, name: "Millimetre", value: 1000, id: "millimitre"},
                    {index: 5, name: "Micrometre", value: 1e+6, id: "micrometre"},
                    {index: 6, name: "Nanometre", value: 1e+9, id: "nanometre"},
                    {index: 7, name: "Metre", value: 1, id: "metre"},
                    {index: 8, name: "Kilometre", value: 1000, id: "kilometre"},
                    {index: 9, name: "Mile", value: 1609.344, id: "mile"},
                    {index: 10, name: "Nautical Mile", value: 1852, id: "nauticalMile"}
                ],
                time: [
                    {index: 0, name: "Nanosecond", value: 1e+9, id: "nanosecond"},
                    {index: 1, name: "Microsecond", value: 1e+6, id: "microsecond"},
                    {index: 2, name: "Millisecond", value: 1e+3, id: "millisecond"},
                    {index: 3, name: "Second", value: 1, id: "second", modifier: "times"},
                    {index: 4, name: "Minute", value: 60, id: "minute", modifier: 'devide'},
                    {index: 5, name: "Hour", value: 3600, id: "hour"},
                    {index: 6, name: "Day", value: 86400, id: "day"},
                ],
                mass: [
                    {index: 0, name: "Pound", value: 2.205, id: "pound"},
                    {index: 1, name: "Ounce", value: 35.274, id: "ounce"},
                    {index: 2, name: "Mircogram", value: 1e+9, id: "microgram"},
                    {index: 3, name: "Milligram", value: 1e+6, id: "milligram"},
                    {index: 4, name: "Gram", value: 1000, id: "gram"},
                    {index: 5, name: "Kilogram", value: 1, id: "kilogram"},
                    {index: 6, name: "Tonne", value: 1000, id: "tonne"},
                    {index: 7, name: "Imperial Ton", value: 1016.047, id: "imperialTon"},
                    {index: 8, name: "US Ton", value: 907.185, id: "usTon"},
                    {index: 9, name: "Stone", value: 6.35, id: "stone"}
                ],
                area: [
                    {index: 0, name: "Square Inch", value: 1550.003, id: "squareInch"},
                    {index: 1, name: "Square Foot", value: 10.764, id: "squareFoot"},
                    {index: 2, name: "Square Yard", value: 1.196, id: "squareYard"},
                    {index: 3, name: "Square Metre", value: 1, id: "squareMetre"},
                    {index: 4, name: "Square Kilometre", value: 1e+6, id: "squareKilometre"},
                    {index: 5, name: "Square Mile", value: 2.59e+6, id: "squareMile"},
                    {index: 6, name: "Hectare", value: 10000, id: "hectare"},
                    {index: 7, name: "Arce", value:  4046.856, id: "arce"}
                ]
            }
        }
    },
    methods:{
        onEdit: function(input){
            if(input == 0){
                this.convertetValue = this.calculate(this.from, this.to, this.fromValue);
            }else{
                this.fromValue = this.calculate(this.to, this.from, this.convertetValue);
            }
        },

        calculate: function(from, to, value, modifier){
            var calcHelp = 0;
            var fromIndex = 0;
            var toIndex = 0;
            var currentConverter = this.converterOption;
            
            for(var i = 0; i < currentConverter.length; i++){
                if(currentConverter[i].id == from){
                    fromIndex = currentConverter[i].index;
                }
                if(currentConverter[i].id == to){
                    toIndex = currentConverter[i].index;
                }
            }

            if(toIndex > fromIndex){
                calcHelp = (value / currentConverter[toIndex].value) / currentConverter[fromIndex].value;
            }else if(toIndex < fromIndex){
                calcHelp = (value * currentConverter[toIndex].value) * currentConverter[fromIndex].value;
            }
            return calcHelp;
        },
        
        converterOptionFunc: function(){
            return this.converterOption;
        },

        changeConverting: function(){
            this.converterOption = this.values[this.converter];

            for(var i = 0; i < this.converterOption.length; i++){
                if(this.converterOption[i].value == 1){
                    this.from = this.converterOption[i].id;
                    this.to = this.converterOption[i + 1].id;
                }
            }
        },

        changeConvertingValue: function(fromToConverter){
            if(this.from == this.to){
                for(var i = 0; i < this.converterOption.length; i++){
                    if(this.converterOption[i].value == 1){
                        if(fromToConverter == 0){
                            if(this.converterOption[i].id == this.to){
                                this.to = (this.converterOption[i + 1].id);
                            }else{
                                this.to = this.converterOption[i].id;
                            }
                        }else if(fromToConverter == 1){
                            if(this.converterOption[i].id == this.from){
                                this.from = (this.converterOption[i + 1].id);
                                break;
                            }else{
                                this.from = (this.converterOption[i].id);
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
        this.converterOption = this.values[this.converter]
    }
}
</script>

<style lang="scss" scoped>
    .converter__choose{
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    font-size: 30px;

    option{
        text-align: center;
    }
}

.converter__holder{
    display: flex;
}

.converterInput{
    /* For Firefox */
    -moz-appearance:textfield;

    /* Webkit browsers like Safari and Chrome */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
}

.converter-box{
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-right: 30px;

    select{
        height: 35px;
        color: black;
        background: lightgray;
    }

    input{
        font-size: 40px;
        text-align: center;
        width: 100%;
    }

    &:last-child{
        margin-right: 0;
        margin-left: 30px;
    }
}

.equal{
    font-size: 60px;
    margin-top: 10px;
    width: 20%;
    text-align: center;
}

</style>
