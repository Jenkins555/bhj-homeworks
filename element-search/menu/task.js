let menuLink = document.getElementsByClassName('menu__link');
let menuItem = document.getElementsByClassName('menu__item');
let menuArr = Array.from(menuItem);

console.log(menuItem[1].querySelector('.menu_sub'));

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function () {
        if (menuItem[i].querySelector('.menu_sub') !== null && menuItem[i].querySelector('.menu_active') === null) {
            menuArr[i].querySelector('.menu_sub').classList.toggle('menu_active');
            return menuArr[i].href = false;
        }
    }
}
