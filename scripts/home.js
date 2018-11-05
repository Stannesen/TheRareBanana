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

/*
function moveLeft(){
    //alert("Function start");
    var img = document.getElementsByClassName("logo__image");
    var nextImage;
    for(var i = 0; i < img.length; i++){
        if(img[i].classList.contains("logo__image--current")){
            nextImage = i;
            img[i].classList.remove("logo__image--current");
        }
        
    }
    nextImage = nextImage + 1;
    if(nextImage > img.length-1){
        nextImage = 0;
    }
    img[nextImage].classList.add("logo__image--current");
    console.log(nextImage);
}

function moveRight(){
    //alert("Function start");
    var img = document.getElementsByClassName("logo__image");
    var nextImage;
    for(var i = 0; i < img.length; i++){
        if(img[i].classList.contains("logo__image--current")){
            nextImage = i;
            img[i].classList.remove("logo__image--current");
        }
        
    }
    nextImage = nextImage - 1;
    if(nextImage <= img.length){
        nextImage = img.length-1;
        //console.log("chaning to max " next);
    }
    img[nextImage].classList.add("logo__image--current");
    console.log(nextImage);
}

*/