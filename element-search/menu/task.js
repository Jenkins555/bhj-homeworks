let menu__link = document.getElementsByClassName('menu__link');
let menu__item = document.getElementsByClassName('menu__item');
let menuArr = Array.from(menu__item);

//console.log(menuArr);

for (let i = 0; i < menu__link.length; i++) {
    //console.log(menu__link[i]);
    menu__link[i].onclick = function () {
        if (menu__item[i].querySelector('.menu_sub') !== null && menu__item[i].querySelector('.menu_active') === null) {

            menuArr[i].querySelector('.menu_sub').classList.add('menu_active');
            return menuArr[i].href = false;
        } else {
            menuArr[i].querySelector('.menu_sub').classList.remove('menu_active');
            return menuArr[i].href = false;
        }
    }
}
