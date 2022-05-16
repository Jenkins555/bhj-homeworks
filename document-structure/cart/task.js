const productValueControl = Array.from(document.getElementsByClassName('product__quantity-control'));
const cartProduct = document.getElementsByClassName('cart__products');
const productAdd = Array.from(document.getElementsByClassName('product__add'));

let cartCount = document.getElementsByClassName('cart__product-count')///количество товара в корзине

const cartProducts = document.getElementsByClassName('cart__product'); ///массив товаров корзины



function changeValue(e) {  //изменение количества товара
    let target = e.target;
    let child = target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    if (target.classList.contains('product__quantity-control_dec') && (child.textContent > 1)) {
        child.textContent--;
    } else if (target.classList.contains('product__quantity-control_inc')) {
        child.textContent++;
    }
}
productValueControl.forEach(el => { ///изменение количества товара
    el.addEventListener('click', changeValue);
});


function addInCard(e) {
    ///вводим переменные
    let target = e.target; ///активный элемент
    let thisPruductCard = target.closest('.product');//родитель элемента
    let thisImg = thisPruductCard.querySelector('.product__image').src;///изображение
    let thisValue = thisPruductCard.querySelector('.product__quantity-value').textContent;///количеств товара
    let productId = target.closest('.product').dataset.id;///идентификатор карточки товара
    let array = Array.from(cartProducts) /// массив товаров в корзине
    ///
    const html = `<div class="cart__product" data-id="` + productId + `">
    <img class="cart__product-image" src="`+ thisImg + `">    
    <div class="cart__product-count">` + thisValue + `</div>
</div>`
    ///
    //console.log(cartCount);

    //console.log(thisValue);
    ///ищем в массиве товаров корзины товар, с тем же id , как у добавляемого товара.
    let arrCheck = Array.from(cartProducts).find(item => item.dataset.id === productId);
    /// console.log(arrCheck.querySelector('.cart__product-count'));
    console.log(arrCheck)
    ///выводим товар arrCheck.querySelector('.cart__product-count').textContent;
    let number = arrCheck.querySelector('.cart__product-count').textContent;
    ///если товар с таким id существует, изменяем количество товара
    if (arrCheck) {
        arrCheck.querySelector('.cart__product-count').textContent = (+number) + (+thisValue);
      ///  console.log('есть')
    } else {
        ///если такой товар отсутствует, добавляем
        cartProduct[0].insertAdjacentHTML("beforeEnd", html) ///добавляем код
    }
}

productAdd.forEach(el => {
    el.addEventListener('click', addInCard);
});