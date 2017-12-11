/*const OrderTotal = order => order.items.
reduce((prev,curr) => {
    if(curr.tax > 0)
       return  prev + (curr.price*curr.quantity) + (curr.price*curr.quantity)* curr.tax/100
     else
       return  prev + (curr.price*curr.quantity) 
     },0);*/

     function OrderTotal(fetch, order){
       
       return  fetch('https://vatapi.com/v1/country-code-check?code=' + (order.countryCode || '1'))
        .then(response => response.json())
        .then(data => data.rates.standard.value)
        .then(vat =>  order.items.reduce((prev,curr) => {
               return  (prev + (curr.price*curr.quantity || 1))  }
               ,0) * (1+  vat *0.01))

               
       /* return Promise.resolve( order.items.reduce((prev,curr) => {
         if(curr.tax > 0)
              return  prev + (curr.price*curr.quantity || 1) + (curr.price*curr.quantity || 1)* curr.tax/100
          else
              return  prev + (curr.price*curr.quantity) 
          }, 0))*/

        }


module.exports =  OrderTotal;