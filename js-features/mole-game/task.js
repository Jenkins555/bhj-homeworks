let dead = document.getElementById('dead');
let lost = document.getElementById('lost');


for (let index = 1; index < 10; index++) {
  getHole = index => document.getElementById(`hole${index}`);

  getHole(index).onclick = function () {
    if (getHole(index).className.includes('hole_has-mole')) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }

    if (dead.textContent == 10) {
      alert("У нас есть победитель!");
      location.reload();
    } else if (lost.textContent == 5) {
      alert("Попробуй ещё раз!");
      location.reload();
    }
  }

}
