 const someOrder = {
    items:[{name: 'Dragon Food', price:34 , quantity:2 , tax:13},
           {name: 'Dragon Cage', price:304 , quantity:1 , tax:1} ]
 }


const OrderTotal = order => order.items.
    reduce((prev,curr) => prev + curr.price*curr.quantity ,0);

const  total  = OrderTotal(someOrder)

total

