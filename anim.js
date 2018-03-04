//Tiffany Moi
//SoftDev2 pd7
//K02
//2018-02-08

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var anim_btn = document.getElementById("anim");
var stop_btn = document.getElementById("stop");
var bump_btn = document.getElementById("bump");

var bounce = false;
var growing = false;

ctx.fillStyle = "#42ddc3";

var clear = function(){
    ctx.clearRect(0,0,c.width,c.height);
};


var r = 20;
var inc = 0;
var grow = true;
var start = true;

var growCircle = function(){ 
    stop();
    if (start){
        start = false;
    }
    if ((inc%200) == 0){
        grow = !(grow);
    }
    
    //console.log(r);
    //console.log(grow);
    clear();
    ctx.beginPath();
    ctx.arc(300, 300, r, 0, 2 * Math.PI);
    ctx.fill();
    
    
    if (grow){
        r = 20 + inc%200;
    }
    else{
        r = 220 - inc%200;
    }
    inc = window.requestAnimationFrame(growCircle);
    
};

var x = 300;
var y = 300;
var dx = 2;
var dy = 3;
var inc1 = 0;

const logo = new Image();
logo.src = "dvd.png";


var bumpyCircle = function(){
    stop();   
    if (start){
        start = false;
    }
    if (x == 0 || x == 400){
        dx = -1 * dx;
    }
    if (y == 0 || y >= 500){
        dy = -1 * dy;
    }
    console.log(y);
    clear();
    ctx.beginPath();
    ctx.drawImage(logo, x, y, 200, 100);
    
    x += dx;
    y += dy;
    inc1 = window.requestAnimationFrame(bumpyCircle);
    
};



var stop = function(){
    window.cancelAnimationFrame(inc);
    window.cancelAnimationFrame(inc1);
    start = true;
};


anim_btn.addEventListener("click", growCircle);
stop_btn.addEventListener("click", stop);
bump_btn.addEventListener("click", bumpyCircle);

