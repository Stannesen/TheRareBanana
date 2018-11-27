var output = document.getElementById("rating-value");

var ratingText = document.getElementById("rating-result__text");
var starRatingText = document.getElementById("star-rating__text")
var entriesText = document.getElementById("test2");

var value = ["one", "two", "three", "four", "five", "six"];

var executed = true;

var starValue = 1;

starRating(1);


window.onload = function getRating(){
    executed = false;
}


function starRating(starPressed){
    var starList = [];
    var starListName = ["star-one", "star-two", "star-three", "star-four", "star-five"];

    for(var i = 0; i < 5; i++){
        starList[i] = document.getElementById(starListName[i]);
    }

    for(var i = 0; i < starPressed; i++){
        var star = starList[i];
        star.innerHTML = "&#x2605";
    }
    
    for(var i = 0; i < 5 - starPressed; i++){
        var left = starPressed + i;
        var star = starList[left];
        star.innerHTML = "☆";
    }
    var starOne = starList[3];
    output.innerHTML = starPressed;
    starValue = starPressed;
}


function submitRating(){
    var setRating = value[starValue - 1];
    var newValue = 0;

    var dbRating = firebase.database().ref("shadow-of-the-tomb-raider").child(setRating);

    var dbRatingGet = dbRating.child("value");

    dbRatingGet.on("value", function(snap){
        newValue = snap.val();

        if(executed == false){
            executed = true;
            newValue += 1;
            dbRating.set({value: newValue});
        }
    });
}


setInterval(getRating, 1000);

function getRating(){
    var database = firebase.database().ref("shadow-of-the-tomb-raider");
    var ratingNumbers = ["one", "two", "three", "four", "five", "six"];
    var enteringsNumbers = ["Getting Result"];
    var getRatingCounter = 0;

    var starRatingList = [];

    for(var i = 0; i < 5; i++){
        var dbOne = database.child(ratingNumbers[i]).child("value");
        dbOne.on("value", function getValue(snap){
            enteringsNumbers[i] = snap.val();
            getRatingCounter += 1;
        });
    }

    if(getRatingCounter == 5){
        updateRating();
    }

    function updateRating(){
        var avrageRating = 0;
        var ratingHelp = 0;
        var totalRatings = 0;

        var ratingPerStar = [];
        var ratingPerStarHelp = 0;

        for(var i = 0; i <= 5; i++){
            if(enteringsNumbers[i] > 0){
                ratingPerStarHelp = 0;
                for(var u = 0; u < enteringsNumbers[i]; u++){
                    ratingHelp += i + 1;
                    totalRatings += 1;

                    ratingPerStarHelp += 1;
                }

                ratingPerStar[i] = ratingPerStarHelp;
                
            }else if(enteringsNumbers[i] == 0){
                ratingPerStar[i] = 0;
            }
        }

        //console.log(totalRatings);

        for(var i = 0; i < 5; i++){
            starRatingList[i] = document.getElementById(ratingNumbers[i] + "-star-text");
            //console.log(starRatingList[i]);
            
            starRatingList[i].innerHTML = ratingPerStar[i];
        }

        avrageRating = ratingHelp / totalRatings;

        var lastRatingText = ratingText.innerHTML;
        var lastEntriesText = entriesText.innerHTML;

        var rating = "Current Rating: " + avrageRating.toFixed(1);
        var entries = "Current Entries: " + totalRatings;

        if(lastRatingText != rating){
            ratingText.innerHTML = rating;
        }

        if(lastEntriesText != entries){
            entriesText.innerHTML = entries;
        }
    
    }
}

