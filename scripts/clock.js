document.addEventListener('DOMContentLoaded', startTimer);

//--- Starting the loop ---//
function startTimer() {
     setInterval(displayTime, 10);
     displayTime();
}

//--- Displaying the clock --//
function displayTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var d = now.getDay();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["Jan" , "Feb", "Mar", "Apr", "May", "jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var time = now.getTime();
    var offset = now.getTimezoneOffset() / 60;

    var canvas = document.querySelector("#clock");
    var context = canvas.getContext("2d");

    var digitalClock = document.getElementById("digitalText");
    var dayText = document.getElementById("currentDay");
    var dateText = document.getElementById("currentDate");

    var curretMonth = now.getMonth();
    var currentDate = now.getDate() + " " + months[curretMonth] + " " + now.getFullYear();
    var lastDate = dateText.innerHTML;
    if(currentDate == lastDate){
    }else{
        dateText.innerHTML = currentDate;
    }

    var lastDay = dayText.innerHTML;
    var currentDay = days[d];

    if(lastDay == currentDay){
    }else{
        dayText.innerHTML = currentDay;
    }
    

    var weekNrText = document.getElementById("weekNr");
    var lastWeekNrText = weekNrText.innerHTML;
    var currentWeekNr = "Week: " + getWeekNumber(new Date());

    if(lastWeekNrText == currentWeekNr){
    }else{
        weekNrText.innerHTML = (currentWeekNr);
    }



    if(s < 10){
        s = "0" + s;
    }

    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    digitalClock.innerHTML = h + " : " + m + " : " + s;
    var houreThinkness = 10;
    
    var clockScale = 700;
    if(clockScale <= 200){
        clockScale = 200;
    }if(clockScale <= 250){
        houreThinkness = houreThinkness / 1.5;
    }

    function getWeekNumber(d) {
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
        return [weekNo];
    }

    
    //--- Setting the width and height off canvas ---//
    canvas.width = clockScale;
    canvas.height = clockScale;
    
    //--- Make sure the clock is centered in the canvas ---//
    var clockX = canvas.width / 2;
    var clockY = canvas.height / 2;
    
    //--- Make sure TAU is defined (it's not by default) ---//
    Math.TAU = 2 * Math.PI;

    context.clearRect(0, 0, canvas.width, canvas.height);
    var r = (clockScale / 2) - 40;
    context.font = "30px Arial";
    context.textAlign = "center";
    context.margin = "auto";

    var sec = 0;
    
    //--- Drwaing white sircle to be the backgound ---//
    context.beginPath();
        context.arc(clockX, clockY , r / Math.PI * 3.35 , 0, 2 * Math.PI, false);
        context.fillStyle = 'white';
        context.strokeStyle = "white";
        context.fill();
        context.arc(clockX, clockY , r / Math.PI * 3.35 , 0, 2 * Math.PI, false);
        context.fillStyle = "rgb(100, 0, 255, 0.3)";
        context.strokeStyle = "rgb(255, 0, 0, 0.3)";
        context.fill();
    context.stroke();

    //--- Drwaing black lines from the middle and out and making a mark every minutt ---//
    for(var i = 0; i < 60; ){
        i++;
        sec += (1/60);
        var armRadians = (Math.TAU * (sec)) - (Math.TAU/4);
        var posX = clockX ;
        
        drawArm(sec, 2, 1.07, 'black', posX, clockY);
    }

    //--- Drwaing black lines from the middle and out and making a mark every hour ---// 
    for(var i = 0; i < 12; ){
        i++;
        sec += (1/12);
        var armRadians = (Math.TAU * (sec)) - (Math.TAU/4);
        var posX = clockX ;
        
        drawArm(sec, 4, 1.07, 'black', posX, clockY);
    }

    //--- Drwaing white sircle to hide black Lines ---//
    context.beginPath();
        context.arc(clockX, clockY , r / Math.PI * 3 , 0, 2 * Math.PI, false);
        context.fillStyle = "white";
        context.strokeStyle = "white";
        context.fill();
        context.arc(clockX, clockY , r / Math.PI * 3 , 0, 2 * Math.PI, false);
        context.fillStyle = "rgb(100, 0, 255, 0.3)";
        context.strokeStyle = "rgb(20, 0, 255, 0.0)";
        context.fill();
        
    context.stroke();

    //--- Drawing a black sircle around the clock ---//
    context.beginPath();
        context.fillStyle = 'black';
        context.strokeStyle = "black";
        context.arc(clockX, clockY , r + 20, 0, 2 * Math.PI);
    context.stroke();

    

    for(var i = 0; i < 12; ){
        i++;
        var numX = 0;
        var numY = 0;
        switch(i){
            case 1:
                numX = -15;
                numY = 35;
                break;
            case 2:
                numX = -20;
                numY = 25;
                break;
            case 3:
                numX = -20;
                numY = 12;
                break;
            case 4:
                numX = -20;
                numY = -3;
                break;
            case 5:
                numX = -13;
                numY = -13;
                break;
            case 6:
                numX = 0;
                numY = -14;
                break;
            case 7:
                numX = 13;
                numY = -13;
                break;
            case 8:
                numX = 20;
                numY = 3;
                break;
            case 9:
                numX = 20;
                numY = 10;
                break;
            case 10:
                numX = 27;
                numY = 25;
                break;
            case 11:
                numX = 15;
                numY = 35;
                break;
            case 12:
                numX = 0;
                numY = 40;
                break;
        }
        var numberPosX = r * Math.cos(((Math.TAU / 12) * i) - (Math.PI/2));
        var numberPosY = r * Math.sin(((Math.TAU / 12) * i) - (Math.PI/2));
        context.fillText(i, ((numberPosX)+clockX) + numX, ((numberPosY) + clockY) + numY);
    }

    function drawArm(progress, armThickness, armLength, armColor, x, y) {
        var armRadians = (Math.TAU * (progress)) - (Math.TAU/4);
        var targetX = clockX + Math.cos(armRadians) * (armLength * r);
        var targetY = clockY + Math.sin(armRadians) * (armLength * r);

        context.lineWidth = armThickness;
        context.strokeStyle = armColor;

        context.beginPath();
            context.moveTo(x, y); // Start at the center
            context.lineTo(targetX, targetY); // Draw a line outwards
        context.stroke();
    }
    

    drawArm(((time / 1000 / 60 / 60 % 12) - offset) / 12, houreThinkness, 0.50, '#000000', clockX, clockY); // Hour
    drawArm((time / 1000 / 60 % 60) / 60,  4, 0.75, 'darkblue', clockX, clockY); // Minute
    drawArm((time / 1000 % 60) / 60,  2, 1.00, '#FF0000', clockX, clockY); // Second

    context.beginPath();
        context.arc(clockX, clockY, r / Math.PI / 4, 0, 2 * Math.PI, false);
        context.fill();
        context.lineWidth = 5;
        context.fillStyle = 'black';
        context.strokeStyle = "black";
    context.stroke();
    
}
