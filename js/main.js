function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var clickedTime;
var createdTime;
var reactionTime;

function reappear() {

    var time = Math.random();

    var shape = document.getElementById("shape1");

    time = 2000 * time;

//    this section chooses the shape between square, circle, or triangle

    setTimeout(function () {
        if (Math.random()<=0.4){
            shape.className = "square";
        }
        else if (Math.random()<=0.8){
            shape.className = "circle";
        }
        else {
            shape.className = "triangle";
        }


//        this section makes it so the game can be played on different screen sizes.

        var top=Math.random();

        var left = Math.random();


        if (window.innerHeight <= 320){
            top = top * 100;
        }
        else if (window.innerHeight <= 520){
            top = top * 300;
        }
        else if (window.innerHeight <= 720){
            top = top * 400
        }
        else{
            top = top * 700;
        }

        if (window.innerWidth <= 560){
            left = left * 300;
        }
        else if (window.innerWidth <= 760){
            left = left * 500;
        }
        else if (window.innerWidth <= 960){
            left = left * 700;
        }
        else if (window.innerWidth <= 1080){
            left = left * 1000;
        }
        else {
            left = left * 1200;
        }

        document.getElementById("shape1").style.top = top + "px";

        document.getElementById("shape1").style.left = left + "px";

        document.getElementById("shape1").style.display = "block";

        if(document.getElementById("shape1").className == "triangle"){
            document.getElementById("shape1").style.borderBottomColor = getRandomColor();
            document.getElementById("shape1").style.backgroundColor = "#FFFFFF";
        }
        else {
            document.getElementById("shape1").style.backgroundColor = getRandomColor();
        }

        createdTime = Date.now();

    }, time);
}

document.getElementById("shape1").onclick = function () {

    clickedTime = Date.now();

    reactionTime = [clickedTime - createdTime] / 1000;

    document.getElementById("time").innerHTML = reactionTime;

    this.style.display = "none";

    reappear();
};

reappear();