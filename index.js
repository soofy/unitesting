var fetch = require('node-fetch');
     
 var result = fetch('https111://vatapi.com/v1/country-code-check?code=DE',{
    headers:{
        apikey:'fce488ac5d5ac3ac0e9fdac8963eaffb'
    }

 }).then(response=>response.json())
    .then(data => data.rates)
    .then(data=>data.standard.value)
  

 
 const someOrder = {
    items:[{name: 'Dragon Food', price:34 , quantity:2 , tax:13},
           {name: 'Dragon Cage', price:304 , quantity:1 , tax:1} ]
 }


const OrderTotal = order => order.items.
    reduce((prev,curr) => prev + curr.price*curr.quantity ,0);

const  total  = OrderTotal(someOrder)

total

