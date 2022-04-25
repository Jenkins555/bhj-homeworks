let casesArr = Array.from(document.getElementsByClassName('rotator__case '));

function casesChange() {
    let ind = 0;

    setInterval(() => {

        casesArr.forEach(el => {
            if (el.classList.contains('rotator__case_active')) {
                el.classList.remove('rotator__case_active');
            }
        });

        if (ind == casesArr.length - 1) {
            ind = 0;
        } else {
            ind++;
        }
        casesArr[ind].classList.add('rotator__case_active');
        casesArr[ind].style.color = casesArr[ind].dataset.color;
    }, casesArr[ind].dataset.speed);

}
casesChange();

