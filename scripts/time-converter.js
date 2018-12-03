var input = document.getElementById("time-input");

var resultObj = document.getElementsByClassName("result");
var convertFromItem = document.getElementsByClassName("convert-from__item");
var convertFromSelecObj = document.getElementById("convert-from__select");

var timeList = [];
var units = ["Millisecond", "Secund", "Minute", "Hour", "Day", "week"];
var unitsValue = [0.001, 1, 60, 3600, 86400, 604800];

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
};


function calculate(from, to, value){
    var resultHelp = 0;
    var calcHelp = 0;

    calcHelp = value * unitsValue[from];
    calcHelp = calcHelp / unitsValue[to];
    resultHelp = units[to] + ": " + calcHelp;

    return resultHelp;
}
