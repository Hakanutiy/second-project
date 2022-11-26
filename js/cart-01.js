//див внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper')

//отслежка клика на страницк
window.addEventListener('click', function(event){
        if(event.target.hasAttribute('data-cart')) {
    //находим карту с товаром внутри которой совершили клик
        const card =  event.target.closest('.card')
   //собираем данные  и  записываем в общий объект
   const productInfo = {
    id: card.dataset.id,
    imgSrc: card.querySelector('.product-img').getAttribute('src'),
    title: card.querySelector('.item-title').innerText,
    itemmsInBox: card.querySelector('[data-items-in-box]').innerText,
    weight: card.querySelector('.price__weight').innerText,
    currency: card.querySelector('.price__currency').innerText,
    counter: card.querySelector('[data-counter]').innerText,

   }
//проверка одинакого товара в магазине
   const ItemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
// проверка через if
if(ItemInCart){
    const counterElement = ItemInCart.querySelector('[data-counter]');
    counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
}
else{
    //если товара нет в корзине


    const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
<div class="cart-item__top">
    <div class="cart-item__img">
        <img src="${productInfo.imgSrc}" alt="">
    </div>
    <div class="cart-item__desc">
        <div class="cart-item__title"> ${productInfo.title}</div>
        <div class="cart-item__weight">${productInfo.itemmsInBox} / ${productInfo.weight}</div>

        <!-- cart-item__details -->
        <div class="cart-item__details">

            <div class="items items--small counter-wrapper">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current" data-counter="">${productInfo.counter}</div>
                <div class="items__control" data-action="plus">+</div>
            </div>

            <div class="price">
                <div class="price__currency">${productInfo.currency}</div>
            </div>

        </div>
        <!-- // cart-item__details -->

    </div>
</div>
    </div>`;
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML )
    
        }
        card.querySelector('[data-counter]').innerText = '1'; 
        // отображение статуса корзины. пустая/полная
        toggleCartStatus();
        //Подсчет стоимости в корзине
        calcCartPrice();
 }

    
})