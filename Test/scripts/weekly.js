document.addEventListener('DOMContentLoaded', startTimer);

window.onload = function(){
    
};

function startTimer() {
    setInterval(displayTime, 10);
    displayTime();
}

function displayTime() {
    var c=document.getElementById("cSchedule");
    var ctx=c.getContext("2d");

    var canvas = document.querySelector("#cSchedule");
    var context = canvas.getContext("2d");

    var drawCanvas = document.querySelector("#drawing");
    var drawContext = drawCanvas.getContext("2d");

    

    var img = new Image();

    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var time = now.getTime();
    var s = (time / 1000 % 60).toFixed(0);
    var offset = now.getTimezoneOffset() / 60;
    var result = getWeekNumber(new Date());

    var day = now.getDay();

    var imageLink = "../img/Week/" + "25" + ".png";
    //now.setHours(8, 20);

    img.src = imageLink;
    img.height = "510";
    img.width = "1200";
    img.onload = function(){
        context.drawImage(img,100,0, 1000, 510);
        img.style.display = 'none';
    }
    var x1 = 0;
    
    switch (day){
        case 0:
        x1 = -200;
        break;

        case 1:
        x1 = 100;
        break;

        case 2:
        x1 = 300;
        break;

        case 3:
        x1 = 498;
        break;

        case 4:
        x1 = 697;
        break;
        
        case 5:
        x1 = 896;
        break;
        
        default:
        x1 = -200;
        break;
    }
    
    var y = 32.5;
    

    var x2 = x1 + 200;

    var temp = h + m;
    var min = ((time / 1000 / 60 / 60 % 24) - offset) * 60;

    var cX = 105;
    var cY = 40;
    
    if(min >= 485 && min <= 880){
        
        y = (min - 485) * 0.8875 + 32.5;

        drawContext.clearRect(0, 0, canvas.width, canvas.height);
        drawContext.beginPath();
    
        drawContext.moveTo(x1, y); // Start at the center
        drawContext.lineTo(x2,y); // Draw a line outwards
        drawContext.lineWidth = 1;
        drawContext.strokeStyle = "green";
        drawContext.stroke();
    }

    var tempCX = x2 -2;
    var tempCY = y;
    var lesson = "l";
    var tempLesson

    var imgData = context.getImageData(tempCX,tempCY, 2, 2);
    var R = imgData.data[0];
    var G = imgData.data[1];
    var B = imgData.data[2];

    if((R == 172 && G == 172 && B == 172) || (R == 255 && G == 255 && B == 255)){
        lesson = "Friminutt";
        tempLesson = lesson;
    }else if(R == 57 && G == 57 && B == 57 || R == 64 && G == 64 && B == 64){
        lesson = "Data- og elektronikkstystemer";
        tempLesson = lesson;
    }else if(R == 228 && G == 228 && B == 228){
        lesson = "Lunsj / Studietid";
        tempLesson = lesson;
    }else if(R == 182 && G == 228 && B == 91){
        lesson = "Elektronisk infrastruktur";
        tempLesson = lesson;
    }else if(R == 255 && G == 128 && B == 255){
        lesson = "Norsk";
        tempLesson = lesson;
    }else if(R == 255 && G == 255 && B == 0){
        lesson = "Samfunn";
        tempLesson = lesson;
    }else if(R == 0 && G == 128 && B == 128){
        lesson = "Engelsk";
        tempLesson = lesson;
    }else{
        lesson = tempLesson;
    }

    drawContext.fillStyle = "hotPink";
    drawContext.font = "bold 16px Arial";
    
    //window.t = imgData.data
    drawContext.fillText("Color: " + " " + imgData.data[0] + " : " + imgData.data[1] + " : " + imgData.data[2], 10, 20);
    drawContext.fillText("Week NR: " + result[1], 10, 40)
    drawContext.fillText("Day: " + day, 10, 60);
    drawContext.fillText(lesson , 10, 80);
    drawContext.fillText("Time: " + h + " : " + m + " : " + s, 10, 100);
    
    drawContext.beginPath();
    drawContext.moveTo(tempCX, tempCY); // Start at the center
    drawContext.lineTo(tempCX + 10,tempCY); // Draw a line outwards
    drawContext.strokeStyle = "red";
    drawContext.stroke();

}


function padZero(num) {
    if (num < 10) { 
        return "0" + String(num);
    }
    else {
        return String(num);
    }
}

function formatHour(h) {
    var hour = h % 12;

    if (hour == 0) { 
        hour = 12; 
    }
    
    return String(hour)
}

function getTimePeriod(h) {
    return (h < 12) ? "AM" : "PM"; 
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
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}