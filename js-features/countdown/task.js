let hours = document.getElementById("timer_hours");
let minutes = document.getElementById("timer_minutes");
let seconds = document.getElementById("timer_seconds");
hours.textContent = 1;
minutes.textContent = 1;
seconds.textContent = 1;

console.log(hours.textContent)


function count() {
    seconds.textContent--;
    if (seconds.textContent < 1 && minutes.textContent > 0) {
        minutes.textContent--;
        seconds.textContent = 3;
    } else if (minutes.textContent < 1 && hours.textContent > 0) {
        hours.textContent--;
        minutes.textContent = 3;
    }
    else if (hours.textContent == 0 && minutes.textContent == 0 && seconds.textContent == 0) {
        alert("Вы победили в конкурсе! Ловите приз!!!!!", location.assign("https://i.gifer.com/embedded/download/Cfh1.gif"));
        clearInterval(interval);
    }


}

let interval = setInterval(count, 1000);








