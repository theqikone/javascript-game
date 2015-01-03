function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//border-radius: 50%;



function changeShape() {

}

var clickedTime;
var createdTime;
var reactionTime;

function reappear() {

    var time = Math.random();

    time = 2000 * time;

    setTimeout(function () {
        if (Math.random()<=0.3){
            document.getElementById("shape1").style.borderRadius="50%";
        }
        else if (Math.random()<=0.6){
            document.getElementById("shape1").style.borderRadius="0";
        }
        else {
            document.getElementById("shape1").style = this.self;
        }

        var top=Math.random();

        top = top * 200;

        var left = Math.random();

        left = left * 900;

        document.getElementById("shape1").style.top = top + "px";

        document.getElementById("shape1").style.left = left + "px";

        document.getElementById("shape1").style.borderRadius="100";

        document.getElementById("shape1").style.backgroundColor=getRandomColor();

        document.getElementById("shape1").style.display = "block";

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