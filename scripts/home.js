/*
var pausePlayAniImg = document.getElementById("pausePlayAniImg");
const galleryImage = document.querySelectorAll(".logo__image");

var max = galleryImage.length - 1;
var lastIdx = 0;
var currentIdx = 0;

var intervalAni;

toggleInterval();
detectswipe("imgHolder", myfunction);


function changeImage(direction){
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
        intervalAni = setInterval(() => { changeImage(1) }, 5000);
        pausePlayAniImg.src = "img/pause-button.png";
    }else{
        window.clearInterval(intervalAni);
        intervalAni = null;
        pausePlayAniImg.src = "img/play-button.png";
    }
}

function resetInterval(){
    if(intervalAni == null){
        
    }else{
        window.clearInterval(intervalAni);
        intervalAni = null;
        toggleInterval();
    }
}


function detectswipe(el,func) {
    swipe_det = new Object();
    swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
    var min_x = 30;  //min x swipe for horizontal swipe
    var max_x = 30;  //max x difference for vertical swipe
    var min_y = 50;  //min y swipe for vertical swipe
    var max_y = 60;  //max y difference for horizontal swipe
    var direc = "";
    ele = document.getElementById(el);
    ele.addEventListener('touchstart',function(e){
      var t = e.touches[0];
      swipe_det.sX = t.screenX; 
      swipe_det.sY = t.screenY;
    },false);
    ele.addEventListener('touchmove',function(e){
      e.preventDefault();
      var t = e.touches[0];
      swipe_det.eX = t.screenX; 
      swipe_det.eY = t.screenY;    
    },false);
    ele.addEventListener('touchend',function(e){
      //horizontal detection
      if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
        if(swipe_det.eX > swipe_det.sX) direc = "r";
        else direc = "l";
      }
      //vertical detection
      else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
        if(swipe_det.eY > swipe_det.sY) direc = "d";
        else direc = "u";
      }
  
      if (direc != "") {
        if(typeof func == 'function') func(el,direc);
      }
      direc = "";
      swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
    },false);  
  }
  
  function myfunction(el,d) {
    //alert("you swiped on element with id '"+el+"' to "+d+" direction");

    if(d == "l"){
        changeImage(-1);
        resetInterval();
    }else if(d == "r"){
        changeImage(1);
        resetInterval();
    }
}
*/
function gameClick(){
    console.log("Hei");
    window.location.href = "../games/shadow-of-tomb-raider.html";
}