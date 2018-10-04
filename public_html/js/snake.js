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

    //Funktion som ritar ormen
    function drawSnake(x,y){
        //Ormen i kvadrater, färg
        ctx.fillStyle = "#6E6251";
        //Skapar kvadraterna, x & y position + storlek
        ctx.fillRect(1*snakeW,1*snakeH,snakeW,snakeH);

        ctx.fillStyle = "#6E6251";
        ctx.strokeRect(1*snakeW,1*snakeH,snakeW,snakeH);
    }

    //Skapa snake objektet, den ska ha 4 celler

    var len = 4;
    var snake = [];

    for (var i = len-1; 1>=0; i--){
        snake.push(
            {x:i,
            y:0
            }
        );
    }

    function draw(){
        for(var i=0; i<snake.length; i++){
            var x = snake[i].x;
            var y = snake[i].y;
            drawSnake(x, y);
        }

        //Ormens huvud
        var snakeX = snake[0].x;
        var snakeY = snake[0].y;

        //Tar bort svansen på ormen
        snake.pop();

        //Skapar ett nytt huvud, baserat på föregående huvud och hållet den går
        snakeX++;

        var newHead = {
            x : snakeX,
            y : snakeY
        };

        snake.unshift(newHead);

    }

    
setInterval(draw,60);








}