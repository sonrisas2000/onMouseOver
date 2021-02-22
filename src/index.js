
const black = document.getElementById('box-black');
const green = document.getElementById('box-green');
const yellow = document.getElementById('box-yellow');
const red = document.getElementById('box-red');



window.onload = function(){
    black.onmouseover = function(){
        document.bgColor = '#000' 
    }
    yellow.onmouseover = function(){
        document.bgColor = '#ffff00' 
    }
    red.onmouseover = function(){
        document.bgColor = '#ff0000' 
    }
    green.onmouseover = function(){
        document.bgColor = '#008000' 
    }
}



