function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('text-time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getCurrentDay() {
    var today = new Date();
    var h = today.getHours();
    var nameRaw = getLinkName();
    var name = "";
    var greeting = "";
    var i = 0;

    if (nameRaw == null || nameRaw == "") {
        name = "Salma Tanisya Kamila";
    } else {
        name = nameRaw;
    }

    if (h >= 5 && h <= 10) {
        greeting = "Happy Birthday!!!";
        changeBackgroundAnimation(1);
    } else if (h >= 11 && h <= 15) {
        greeting = "Happy Birthday!!!";
        changeBackgroundAnimation(1);
    } else if (h >= 16 && h <= 18) {
        greeting = "Happy Birthday!!!";
        changeBackgroundAnimation(2);
    } else {
        greeting = "Happy Birthday!!!";
        changeBackgroundAnimation(2);
    }

    var textFull = greeting + " " + capitalizeFirstLetter(name);
    var canvas = document.getElementById('text-greeting');

    var typewriter = new Typewriter(canvas, {
        delay: 100
    });

    typewriter.typeString(textFull).start();
}

function getLinkName() {
    var name = location.search.substring(1);
    return name;
}

function changeBackgroundAnimation(color) {
    // 1 for white
    // 2 for black

    if (color == 1) {
        $(document).ready(function(){
            $(".area").css("background", "#ffffff");
            $(".circles li").css("background", "#4c4c4c");

            $("#text-greeting").css("color", "#000000");
            $("#text-time").css("color", "#000000");
            $(".text-footer").css("color", "#000000");

        });
    } else {
        $(document).ready(function(){
            $(".area").css("background", "#000000");
            $(".circles li").css("background", "#ffffff");


            $("#text-greeting").css("color", "#ffffff");
            $("#text-time").css("color", "#ffffff");
            $(".text-footer").css("color", "#ffffff");
        });
    }
}

function instagramDirect() {
    window.location.assign("https://instagram.com/arieffff.w/");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
