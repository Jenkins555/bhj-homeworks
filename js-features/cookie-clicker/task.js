let clicker = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");
let cookieClass = image.className;
let speed = document.getElementById("clicker__speed");

clicker.textContent = 0;
speed.textContent = 0;

let date1 = new Date();
let d1 = date1.getTime();


image.onclick = click;
function click() {
  let date2 = new Date();
  let d2 = date2.getTime();
  let raznost = d2 - d1;
  d1 = d2;
  speed.textContent = (1000 / raznost).toFixed(2);

  clicker.textContent++;
  if (clicker.textContent % 2 === 0) {
    image.width = 200;
  } else {
    image.width = 250;
  }
}


