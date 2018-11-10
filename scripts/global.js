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
