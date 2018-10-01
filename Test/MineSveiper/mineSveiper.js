var block = document.getElementsById("block");


var clone = block.cloneNode(true);
clone.id = "Test";
document.body.appendChild(clone);   
