/* 
JS for snake-game
Created: October 2018
*/

window.onload = function() {
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");

    //Storlekten till canvas
    var cvsW = cvs.width;
    var cvsH = cvs.heigth;

    //Skapar ormen
    //Ormens bredd = W / höjd = H i px
    var snakeW = 10;
    var snakeH = 10;

    //Ormen i kvadrater, färg
    ctx.fillstyle = "white";
    //Skapar kvadraterna, x & y position + storlek
    ctx.fillRect(50,50,snakeW,snakeH);
}