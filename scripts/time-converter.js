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
siValueSelectObj.addEventListener("change", siOrNot);
nonSiValueSelectObj.addEventListener("change", siOrNot);


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
        siValueSelectObj.style.display = "inline-block";
    }else{
        convertFromSelecObj = nonSiValueSelectObj;
        siValueSelectObj.style.display = "none";
        nonSiValueSelectObj.style.display = "inline-block";
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