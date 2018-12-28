function logoClick(){
    window.location.href = "index.html"
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