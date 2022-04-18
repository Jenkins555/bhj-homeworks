dDown = document.getElementsByClassName('dropdown');
dValue = document.getElementsByClassName('dropdown__value');
dList = document.getElementsByClassName('dropdown__list');
dItem = document.getElementsByClassName('dropdown__item');
dLink = document.getElementsByClassName('dropdown__link');


dDown[0].onclick = function () {
    dList[0].classList.toggle('dropdown__list_active');
}

for (let i = 0; i < dItem.length; i++) {
    dItem[i].onclick = function () {
        dValue[0].textContent = dLink[i].textContent;
        return false;
    }

}
