let slides = document.getElementsByClassName('slider__item');
let arrowNext = document.getElementsByClassName('slider__arrow_next');
let arrowPrev = document.getElementsByClassName('slider__arrow_prev')
let slidesArr = Array.from(slides);

console.log(slidesArr)
arrowNext[0].onclick = function () {
  let activeInd = slidesArr.findIndex((element) => element.classList.contains("slider__item_active"));
  slides[activeInd].classList.remove("slider__item_active");

  (activeInd < 4) ? activeInd++ : activeInd = 0;
  //console.log(activeInd);
  slides[activeInd].classList.add("slider__item_active");
}

arrowPrev[0].onclick = function () {
  console.log('click');
  let activeInd = slidesArr.findIndex((element) => element.classList.contains("slider__item_active"));
  slides[activeInd].classList.remove("slider__item_active");

  (activeInd < 1) ? activeInd = 4 : activeInd--;
  slides[activeInd].classList.add("slider__item_active");
  //console.log(activeInd);

}





