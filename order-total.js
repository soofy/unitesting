const OrderTotal = order => order.items.
reduce((prev,curr) => {
    if(curr.tax > 0)
       return  prev + (curr.price*curr.quantity) + (curr.price*curr.quantity)* curr.tax/100
     else
       return  prev + (curr.price*curr.quantity) 
     },0);

     
module.exports =  OrderTotal;