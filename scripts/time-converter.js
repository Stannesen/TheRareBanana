var input = document.getElementById("time-input");

var resultObj = document.getElementsByClassName("result");
var convertFromSelecObj = document.getElementById("convert-from__siSelect");

var siSelectObj = document.getElementById("si-select");
var siSelectItem = document.getElementById("si-select__item");

var siValueSelectObj = document.getElementById("convert-from__siSelect");
var nonSiValueSelectObj = document.getElementById("convert-from__nonSiSelect");

var result = [""];
var objectValues = [];

convertFromSelecObj.addEventListener("change", siOrNot);
input.addEventListener("input", siOrNot);
siSelectObj.addEventListener("change", siOrNot);


window.onload = function(){
    addValues();
    siOrNot();
};


function Time(index, name, value, id) {
    this.index = index;
    this.name = name;
    this.value = value;
    this.id = id;
    this.displayName = function() {
        console.log(this.index + " " + this.name + " " + this.value);
    };
}

function siOrNot(){
    var test1 = siSelectObj.selectedIndex;
    var test2 = siSelectObj.options;
    //console.log(test2[test1].index);
    var siUnitIndex = test2[test1].index;

    if(siUnitIndex == 0){
        convertFromSelecObj = siValueSelectObj;

        nonSiValueSelectObj.style.display = "none";
        siValueSelectObj.style.display = "block";
    }else{
        convertFromSelecObj = nonSiValueSelectObj;
        siValueSelectObj.style.display = "none";
        nonSiValueSelectObj.style.display = "block";
    }

    //console.log(convertFromSelecObj);
    convertTime();
}

function addValues(){

    objectValues[0] = new Time(0, "Second", 1, "second");
    objectValues[1] = new Time(1, "Minute", 60, "minute");
    objectValues[2] = new Time(2, "Hour", 3600, "hour");
    objectValues[3] = new Time(3, "Day", 86400, "day");


    //Si units 
    objectValues[4] = new Time(4, "Decisecond", 1e-1, "decisecond");
    objectValues[5] = new Time(5, "Centisecond", 1e-2, "centisecond");
    objectValues[6] = new Time(6, "Millisecond", 1e-3, "millisecond");
    objectValues[7] = new Time(7, "Microsecond", 1e-6, "microsecond");
    objectValues[8] = new Time(8, "Nanosecond", 1e-9, "nanosecond");
    objectValues[9] = new Time(9, "Picosecond", 1e-12, "picosecond");
    objectValues[10] = new Time(10, "Femtosecond", 1e-15, "femtosecond");
    objectValues[11] = new Time(11, "Attosecond", 1e-18, "attosecond");
    objectValues[12] = new Time(12, "Zeptosecond", 1e-21, "zeptosecond");
    objectValues[13] = new Time(13, "Yoctosecond", 1e-24, "yoctosecond");


    
    /*objectValues[0] = new Time(0, "Picosecond", 1.0e-12, "picosecond");
    objectValues[1] = new Time(1, "Nanosecond", 1.0e-9, "nanosecond");
    objectValues[2] = new Time(2, "Shake", 1.0e-8, "shake");
    objectValues[3] = new Time(3, "Microsecond", 1.0e-6, "microsecond");
    objectValues[4] = new Time(4, "Millisecond", 0.001, "millisecond");
    objectValues[5] = new Time(5, "Second", 1, "second");
    objectValues[6] = new Time(6, "Minute", 60, "minute");
    objectValues[7] = new Time(7, "Kilosecond", 1000, "kilosecond");
    objectValues[8] = new Time(8, "Hour", 3600, "hour");
    objectValues[9] = new Time(9, "Day", 86400, "day");
    objectValues[10] = new Time(10, "Week", 604800, "week");
    objectValues[11] = new Time(11, "Common Year", 31536e+3, "commonYear");
    objectValues[12] = new Time(12, "Leap Year", 31622400, "leapYear");
    objectValues[13] = new Time(13, "Megasecond", 1.0e+6, "megasecond");

    //Si units
    objectValues[14] = new Time(14, "Decisecond", 1.0e-1, "decisecond");
    objectValues[15] = new Time(15, "Centisecond", 1.0e-2, "centisecond");
    objectValues[16] = new Time(16 , "Millisecond", 0.001, "millisecond");
    objectValues[17] = new Time(17, "Microsecond", 1.0e-6, "microsecond");
    objectValues[18] = new Time(18, "Nanosecond", 1.0e-9, "nanosecond");
    objectValues[19] = new Time(19, "Picosecond", 1.0e-12, "picosecond");

    objectValues[20] = new Time(20, "Femtosecond", 1e-15, "femtosecond");
    objectValues[21] = new Time(21, "Attosecond", 1e-18, "attosecond");
    objectValues[22] = new Time(22, "Zeptosecond", 1e-21, "zeptosecond");
    objectValues[23] = new Time(23, "Yoctosecond", 1e-24, "yoctosecond");

    /*

   //Si units 
    objectValues[0] = new Time(0, "Decisecond", 1, "decisecond");
    objectValues[1] = new Time(1, "Centisecond", 1.0e-2, "centisecond");
    objectValues[2] = new Time(2, "Millisecond", 1.0e-3, "millisecond");
    objectValues[3] = new Time(3, "Microsecond", 1.0e-6, "microsecond");
    objectValues[4] = new Time(4, "Nanosecond", 1.0e-9, "nanosecond");
    objectValues[5] = new Time(5, "Picosecond", 1.0e-12, "picosecond");
    objectValues[6] = new Time(6, "Femtosecond", 1.0e-15, "femtosecond");
    objectValues[7] = new Time(7, "Attosecond", 1.0e-18, "attosecond");
    objectValues[8] = new Time(8, "Zeptosecond", 1.0e-21, "zeptosecond");
    objectValues[9] = new Time(9, "Yoctosecond", 1.0e-24, "yoctosecond");
    
    /*
    objectValues[10] = new Time(10, "Nanosecond", 1.0e-9, "nanosecond");
    objectValues[11] = new Time(11, "Shake", 1.0e-8, "shake");
    objectValues[12] = new Time(12, "Microsecond", 1.0e-6, "microsecond");
    objectValues[13] = new Time(13, "Second", 1, "second");
    objectValues[14] = new Time(14, "Minute", 60, "minute");
    objectValues[15] = new Time(15, "Kilosecond", 1000, "kilosecond");
    objectValues[16] = new Time(16, "Hour", 3600, "hour");
    objectValues[17] = new Time(17, "Day", 86400, "day");
    objectValues[18] = new Time(18, "Week", 604800, "week");
    objectValues[19] = new Time(19, "Common Year", 31536e+3, "commonYear");
    objectValues[20] = new Time(20, "Leap Year", 31622400, "leapYear");
    objectValues[21] = new Time(21, "Megasecond", 1.0e+6, "megasecond");
    */
}

function convertTime(){
    var index = 0;
    var value = input.value;

    var temp1 = convertFromSelecObj.selectedIndex;
    var temp2 = convertFromSelecObj.options;
    var temp3 = temp2[temp1].value;

    var test = document.getElementsByClassName("convert-from__item");

    for(var i = 0; i < objectValues.length; i++){
        if(temp3 == objectValues[i].id){
            index = i;
        }
    }

    for(var i = 0; i < objectValues.length; i++){
        result[i] = calculate(index, i, value);
    }

    for(var i = 0; i < resultObj.length; i++){
        var test = resultObj[i];

        for(var x = 0; x < objectValues.length; x++){
            if(test.id == objectValues[x].id){
                test.innerHTML = result[x];
            }
        }
    }
}


function calculate(from, to, value){
    var resultHelp = 0;
    var calcHelp = 0;

    var calcTemp = 0;

    calcHelp = (value * objectValues[from].value) / objectValues[to].value;

    if(calcHelp >= 1000000){
        resultHelp = objectValues[to].name + ": " + "> 1000000";
        resultHelp = objectValues[to].name + ": " + calcHelp;
        
    }else{
        if((calcHelp % 1) != 0){
            //console.log(calcHelp + " Is a decimal");
            calcHelp = calcHelp.toFixed(3);
        }else{
            //console.log(calcHelp + " Is not a decimal");
        }

        resultHelp = objectValues[to].name + ": " + calcHelp;
    }

    return numberWithSpaces(resultHelp);
}

function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}