//Tiffany Moi
//SoftDev2 pd7
//K7 -- Connect the Dots
//2018-03-01



var pic = document.getElementById("vimage");
var stop_btn = document.getElementById("stop")
var start_btn = document.getElementById("start")


var start = true;
var dy = 3;
var dx = 2;
var x= 150;
var y = 150;
var xlink = 'http://www.w3.org/1999/xlink';

var loop = function(){
    dy = 3;
    dx = 2;
    setInterval(drawDvd, 30);
};

var drawDvd = function(){
    
    var img = document.createElementNS(
    "http://www.w3.org/2000/svg", "image");
    
    clear();
    
    if (start){
        start = false;
    }
    if (x == 0 || x == 400){
        dx = -1 * dx;
    }
    if (y == 0 || y >= 400){
        dy = -1 * dy;
    }
    var anim = document.createElementNS(
    "http://www.w3.org/2000/svg", "animate");
    img.setAttributeNS(xlink, 'xlink:href', 'dvd.png');
    img.setAttributeNS(null,'width', '100');
    img.setAttributeNS(null,'height', '100');
    img.setAttributeNS(null, 'x', x);
    img.setAttributeNS(null, 'y', y);
      
    pic.appendChild(img);
    
    x += dx;
    y += dy;
 };


var stop = function(){
    dx = 0;
    dy = 0;
};

var start = function(){

};

var clear = function(){
    while (pic.firstChild) {
        pic.removeChild(pic.firstChild);
    }
    start = true;
};


start_btn.addEventListener("click", loop);
stop_btn.addEventListener("click", stop);
