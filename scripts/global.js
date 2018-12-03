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


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
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