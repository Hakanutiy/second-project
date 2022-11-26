function calcCartPrice(){
   const TotalPriceEl = document.querySelector('.total-price')
    const cartItem = document.querySelectorAll('.cart-item');
    const deliveryCost = document. querySelector('.delivery-cost')
    const cartDelivery = document. querySelector('[data-cart-delivery]')
    let TotalPrice = 0;
    cartItem.forEach(function(item){
       
        const amountEl = item.querySelector('[data-counter]')
        const   priceEl = item.querySelector('.price__currency')
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
        TotalPrice += currentPrice;
        
    })
    console.log(TotalPrice);
    TotalPriceEl.innerText = TotalPrice;

    if(TotalPrice > 0){
        cartDelivery.classList.remove('none')
    }
    else{
        cartDelivery.classList.add('none')
    }   
    if(TotalPrice >= 600){
       deliveryCost.classList.add('free');
       deliveryCost.innerText = 'бесплатно';
    }
    else{
deliveryCost.classList.remove('free');
deliveryCost.innerText = '250 ₽'
    }
}
//total-price data-cart-delivery