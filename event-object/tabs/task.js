let tab = document.getElementsByClassName('tab');
let tabContent = document.getElementsByClassName('tab__content');

tabArr = Array.from(tab);
contentArr = Array.from(tabContent);

tabArr.forEach(element => {
    element.onclick = function () {
        let indOf = tabArr.indexOf(element);
        for (let el of contentArr) {
            el.classList.remove('tab__content_active');
        }

        for (let el of tabArr) {
            el.classList.remove('tab_active');
        }

        element.classList.add('tab_active');
        contentArr[indOf].classList.add('tab__content_active');
    }
});