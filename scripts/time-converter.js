var input = document.getElementById("time-input");

var resultObj = document.getElementsByClassName("result");
var convertFromItem = document.getElementsByClassName("convert-from__item");
var convertFromSelecObj = document.getElementById("convert-from__select");

var timeList = [];
var units = ["Picosecond", "Nanosecond", "Shake", "Microsecond", "Millisecond", "Secund", "Minute", "Kilosecond","Hour", "Day", "week"];
var unitsValue = [1.0e-12, 1.0e-9, 1.0e-8, 1.0e-6, 0.001, 1, 60, 1000, 3600, 86400, 604800];

var result = [""];
var resultName = [];
convertFromSelecObj.addEventListener("change", convertTime);
input.addEventListener("input", convertTime);

function convertTime(){
    var convertFromIndexObj = document.getElementById("convert-from__select").selectedIndex;
    var convertFromValueObj = document.getElementById("convert-from__select").options;

    var index = convertFromValueObj[convertFromIndexObj].index;
    var value = input.value;

    for(var i = 0; i < resultObj.length; i++){
        result[i] = calculate(index, i, value);   
    }

    for(var i = 0; i < resultObj.length; i++){
        resultObj[i].innerHTML = result[i];
    }
}


function calculate(from, to, value){
    var resultHelp = 0;
    var calcHelp = 0;

    calcHelp = value * unitsValue[from];
    calcHelp = calcHelp / unitsValue[to];
    calcHelp = calcHelp.toFixed(2);
    resultHelp = units[to] + ": " + calcHelp;

    return numberWithSpaces(resultHelp);
}

function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}
