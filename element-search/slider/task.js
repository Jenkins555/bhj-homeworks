let slides = document.getElementsByClassName('slider__item');
let arrow_next = document.getElementsByClassName('slider__arrow_next');
let arrow_prev = document.getElementsByClassName('slider__arrow_prev')

let i = 0;

arrow_prev[0].onclick = function () {
    i--;
    if (i >= slides.length) {
        slides[i + 1].classList.remove("slider__item_active");
        i = 0;
        slides[i].classList.add("slider__item_active");
    } else {
        slides[i + 1].classList.remove("slider__item_active");
        slides[i].classList.add("slider__item_active");
    }
}

arrow_next[0].onclick = function () {
    i++;
    if (i >= slides.length) {
        slides[i - 1].classList.remove("slider__item_active");
        i = 0;
        slides[i].classList.add("slider__item_active");
    } else {
        slides[i - 1].classList.remove("slider__item_active");
        slides[i].classList.add("slider__item_active");
    }

}