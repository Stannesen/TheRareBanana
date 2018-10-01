var name = document.getElementById("id-name");
var email = document.getElementById("id-email");
var button = document.getElementById("id-Button");

var item1 = document.getElementById("id-item1");
var item2 = document.getElementById("id-item2");
var item3 = document.getElementById("id-item3");


button.addEventListener("click", function(){
    console.log("hi");

    if(name.value == "Arne"){
        item1.className = "";
        item2.className = "done";
        item3.className = "";
    }
    else{
        item1.className = "done";
        item2.className = "";
        item3.className = "done";
    }
})