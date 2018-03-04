//Tiffany Moi
//SoftDev2 pd7
//K7 -- Connect the Dots
//2018-03-01



var pic = document.getElementById("vimage");
var stop_btn = document.getElementById("stop");
var dvd_btn = document.getElementById("dvd");
var circle_btn = document.getElementById("circle");


var start = true;
var dy = 3;
var dx = 2;
var x= 150;
var y = 150;
var xlink = 'http://www.w3.org/1999/xlink';
var r = 25; 
var dr = 5;

var id = 0;

var start = false;

var loop_d = function(){
    if (!start){
        clear();
        dy = 3;
        dx = 2;
        id = setInterval(drawDvd, 30);
        start = true;
    };
};

var loop_c = function(){
    if (!start){
        clear();
        dr = 5;
        id = setInterval(drawDot, 35);
        start = true;
    };
};

var drawDvd = function(){
    
    var img = document.createElementNS(
    "http://www.w3.org/2000/svg", "image");
    
    clear();
    
    if (x == 0 || x == 400){
        dx = -1 * dx;
    }
    if (y == 0 || y >= 400){
        dy = -1 * dy;
    }

    img.setAttributeNS(xlink, 'xlink:href', 'dvd.png');
    img.setAttributeNS(null,'width', '100');
    img.setAttributeNS(null,'height', '100');
    img.setAttributeNS(null, 'x', x);
    img.setAttributeNS(null, 'y', y);
      
    pic.appendChild(img);
    
    x += dx;
    y += dy;
 };



var drawDot = function(){
    
    clear();
    
    var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 200);
    c.setAttribute("cy", 200);
    c.setAttribute("r", r);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    
    
    if (r > 250 || r < 25){
        dr = -dr;
    };
    

    r+= dr
    
 };

var stop = function(){
    clearInterval(id);
    start = false;

};


var clear = function(){
    while (pic.firstChild) {
        pic.removeChild(pic.firstChild);
    }
    start = true;
};


dvd_btn.addEventListener("click", loop_d);
circle_btn.addEventListener("click", loop_c);
stop_btn.addEventListener("click", stop);
