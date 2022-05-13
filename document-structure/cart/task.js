productValueControl = Array.from(document.getElementsByClassName('product__quantity-control'));
cartProduct = document.getElementsByClassName('cart__products');
productAdd = Array.from(document.getElementsByClassName('product__add'));

cartProducts = Array.from(document.getElementsByClassName('cart__product')); ///массив товаров






function changeValue(e) {  //изменение количества товара
    let target = e.target;
    let child = target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    if (target.classList.contains('product__quantity-control_dec') && (child.textContent > 0)) {
        child.textContent--;
    } else if (target.classList.contains('product__quantity-control_inc')) {
        child.textContent++;
    }
}
productValueControl.forEach(el => { ///изменение количества товара
    el.addEventListener('click', changeValue);
});




function addInCard(e) {
    let target = e.target;
    let thisPruductCard = target.closest('.product');
    let thisImg = thisPruductCard.querySelector('.product__image').src;
    let thisValue = thisPruductCard.querySelector('.product__quantity-value').textContent;
    let productId = target.closest('.product').dataset.id;

    let arrCheck = cartProducts.findIndex(item => item.classList == "cart__product"); //проверка наличия товаров в корзине

    if (arrCheck === -1) {
        cartProduct[0].insertAdjacentHTML("beforeEnd", `<div class="cart__product" data-id="` + productId + `">
    <img class="cart__product-image" src="`+ thisImg + `">
    <div class="cart__product-count">` + thisValue + `</div>
</div>`)
 } else {
        for (let elem of document.querySelectorAll('.cart__product')) {
            if (elem.dataset.id === productId) {
          console.log(elem);
            };
        }
    }
}




productAdd.forEach(el => {
    el.addEventListener('click', addInCard);
});