var slider = document.getElementById("rating-slider");
var output = document.getElementById("rating-value");

var ratingText = document.getElementById("test");
var entriesText = document.getElementById("test2");

var value = ["one", "two", "three", "four", "five", "six"];

var executed = true;

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = slider.value;
}

function submitRating(){
    var setRating = value[slider.value - 1];
    var newValue = 0;

    var dbRating = firebase.database().ref("shadow-of-the-tomb-raider").child(setRating);
    //dbRating.set({value: test});

    var dbRatingGet = dbRating.child("value");

    dbRatingGet.on("value", function(snap){
        newValue = snap.val();
        console.log(newValue);

        if(executed == false){
            executed = true;

            newValue += 1;

            dbRating.set({value: newValue});
        }
    });

}


window.onload = function getRating(){
    executed = false;
}


setInterval(getRating, 1000);

function getRating(){
    var database = firebase.database().ref("shadow-of-the-tomb-raider");
    var ratingNumbers = ["one", "two", "three", "four", "five", "six"];
    var enteringsNumbers = ["Getting Result"];

    var getRatingCounter = 0;
    //ratingText.innerHTML = "Current Rating: Getting Result";
    //entriesText.innerHTML = "Current Entries: Getting Result";

    for(var i = 0; i < 6; i++){
        var dbOne = database.child(ratingNumbers[i]).child("value");
        dbOne.on("value", function getValue(snap){
            enteringsNumbers[i] = snap.val();
            getRatingCounter += 1;
        });
    }

    if(getRatingCounter == 6){
        updateRating();
    }

    function updateRating(){
        var avrageRating = 0;
        var ratingHelp = 0;
        var totalRatings = 0;

        for(var i = 0; i <= 6; i++){
            if(enteringsNumbers[i] > 0){
                for(var u = 0; u < enteringsNumbers[i]; u++){
                    ratingHelp += i + 1;
                    totalRatings += 1;
                }
            }
        }

        avrageRating = ratingHelp / totalRatings;

        var lastRatingText = ratingText.innerHTML;
        var lastEntriesText = entriesText.innerHTML;

        var rating = "Current Rating: " + avrageRating;
        var entries = "Current Entries: " + totalRatings;

        if(lastRatingText != rating){
            ratingText.innerHTML = rating;
        }

        if(lastEntriesText != entries){
            entriesText.innerHTML = entries;
        }
    
    }
}

