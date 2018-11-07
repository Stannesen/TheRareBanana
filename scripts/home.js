var pausePlayAniImg = document.getElementById("pausePlayAniImg");
const galleryImage = document.querySelectorAll(".logo__image");

var max = galleryImage.length - 1;
var lastIdx = 0;
var currentIdx = 0;

var intervalAni;

toggleInterval();


function showImage(direction){
    currentIdx = Math.max(0, Math.min(max, currentIdx + direction));
    if(currentIdx == lastIdx){
       if(currentIdx == max){
            currentIdx = 0;
       }else if(currentIdx == 0){
            currentIdx = max;
       }
    }

    lastIdx = currentIdx;
    galleryImage.forEach((img, idx) => {
        img.classList.toggle("logo__image--current", currentIdx == idx);
    });
}


function toggleInterval(){
    if(!intervalAni){
        intervalAni = setInterval(loopImage, 5000);
        pausePlayAniImg.src = "img/pause-button.png";
    }else{
        window.clearInterval(intervalAni);
        intervalAni = null;
        pausePlayAniImg.src = "img/play-button.png";
    }
}


function loopImage(){
    showImage(1);
}