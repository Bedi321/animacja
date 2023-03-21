var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 0;
const auto = new Image();
auto.src="./auto.png";

function face(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 1700, 100);

    ctx.drawImage(auto, 500-10*x, 0);
    x++;
    if(x > 100){
    x = -x;
    }
}
window.setInterval(face, 10);