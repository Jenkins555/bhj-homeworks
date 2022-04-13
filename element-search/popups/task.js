modalMain = document.getElementById('modal_main');
modalClose = document.getElementsByClassName('modal__close');
modalSuccess = document.getElementById('modal_success');


modalMain.classList.add('modal_active');


modalClose[0].onclick = function () { //Закрыть modal_main
    modalMain.classList.remove('modal_active');
}

modalClose[2].onclick = function () { //Закрыть modal_success
    modalSuccess.classList.remove('modal_active');
}


modalClose[1].onclick = function () {  //Открытие modal_success
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}



