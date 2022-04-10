modal_main = document.getElementById('modal_main');
modal__close = document.getElementsByClassName('modal__close');
show_success = document.getElementsByClassName('show-success');
modal_success = document.getElementById('modal_success');

modal_main.classList.add('modal_active');


let arrayClose = Array.from(modal__close);
let arraySuccess = Array.from(show_success);

arraySuccess.forEach(element => {
    element.onclick = function () {
        modal_success.classList.add('modal_active');
    }
});

arrayClose.forEach(element => {
    element.onclick = function () {
        modal_main.className = "modal";
    }
});




