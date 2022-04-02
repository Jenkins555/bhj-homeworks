let clicker = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");
let cookieClass =  image.className;
let speed =document.getElementById ("clicker__speed");
clicker.textContent = 0;
clicker__speed.textContent = 0;
//console.log(clicker);
//console.log(image);
//console.log(cookieClass);
//console.log(clicker.textContent);
image.onclick = click;
function click () {
    clicker.textContent++;
    if (clicker.textContent % 2 === 0) {
      image.width = 200; 
    } else {
      image.width = 250;
   }        
    
   clicker__speed.textContent = setTimeout(function(){clicker.textContent;}, 1000);
}


