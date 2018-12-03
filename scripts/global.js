var dropdownButton = document.getElementById("dropdown__btn");
var dropdownCnt = document.getElementById("myDropdown");

function logoClick(){
    window.location.href = "../index.html"
}

function mobileMenu(){
    var mobileMenuHoler = document.getElementById("mobile-nav");
    var currentDisplay = mobileMenuHoler.style.display;

    if(currentDisplay == "block"){
        mobileMenuHoler.style.display = "none";
    }else{
        mobileMenuHoler.style.display = "block";
    }
}

function mobileDropdownTools(){
    var mobileDropdownHolder = document.getElementById("mobile-menu__dropdown-cnt");
    var currentDisplay = mobileDropdownHolder.style.display;

    if(currentDisplay == "block"){
        mobileDropdownHolder.style.display = "none";
    }else{
        mobileDropdownHolder.style.display = "block";
    }
}

/*

//dropdownButton.addEventListener("mouseover", dropdown);
dropdownButton.onmouseover = function(){
    dropdownCnt.style.display = "block";

};

dropdownCnt.onmouseout = function(){
    dropdownCnt.style.display = "none";
};

dropdownButton.onmouseout = function(){
    //dropdownCnt.style.display = "none";
};

function dropdown(){
    console.log("Hei");
}


/*
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/