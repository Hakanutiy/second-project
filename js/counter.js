
window.addEventListener('click', function(event){
     
     let counter;
     
          if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
                counterWrapper =  event.target.closest('.counter-wrapper');
            counter = counterWrapper.querySelector('[data-counter]');
        
          }
     
          if(event.target.dataset.action === 'plus'){
               counter.innerText= ++counter.innerText;
          }
     
          if(event.target.dataset.action === 'minus'){
               
               if(parseInt(counter.innerText) > 1){
                        counter.innerText= --counter.innerText;
                        }
                        // проверка на  товар в корзине
                        else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
                         // delete товара из корзины
                          event.target.closest('.cart-item').remove();
                       
                          toggleCartStatus()
                          
                          calcCartPrice()
                         }
            
                        }
                        
         //проверка + - внутри корзины
         if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
          calcCartPrice();
         }    
                        

     })	