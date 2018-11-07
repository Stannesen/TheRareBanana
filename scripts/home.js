var rightButton = document.getElementById("right-button");
var leftButton = document.getElementById("left-button");


function rightClick(){
    moveLeft();
    //alert("Left");
}

function leftClick(){
    moveLeft();
    //alert("right");
}


var currentIdx = 0;
const galleryImage = document.querySelectorAll(".logo__image");
var max = galleryImage.length - 1;
var lastIdx = 0;

function showImage(direction){
    currentIdx = Math.max(0, Math.min(max, currentIdx + direction));
    if(currentIdx == lastIdx){
        //console.log("current index same number");
       if(currentIdx == max){
            currentIdx = 0;
       }else if(currentIdx == 0){
            currentIdx = max;
       }
    }

    lastIdx = currentIdx;
    //console.log(max);
    //console.log(currentIdx);
    galleryImage.forEach((img, idx) => {
        img.classList.toggle("logo__image--current", currentIdx == idx);
    });
}
var interval = true;

startInterval();

function startInterval(){
    if(interval == true){
        var myVar = setInterval(loopImage, 5000);
        console.log("interval = " + interval)
    }else{
        clearInterval(myVar);
    }
}


function loopImage(){
    showImage(1);
}

function toggleLoop(){
    if(interval == true){
        interval != interval;
        console.log(interval);
        startInterval
    }else{
        interval != interval;
        startInterval();
    }
}