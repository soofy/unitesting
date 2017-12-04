const OrderTotal  = require('./order-total');
 
const someOrder = {
    items:[{prodName: 'Dragon Food', price:34 , quantity:1, tax:4},
           {prodName: 'Dragon Cage', price:304 , quantity:1 ,tax:10} ]
 }
 

it('Calc Tax',()=>{

    expect(OrderTotal( {
        items:[{prodName: 'Dragon Food', price:34 , quantity:1, tax:10},
               ]
     })).toBe(37.4)
})


it('Calc No Tax ',()=>{
    
        expect(OrderTotal( {
            items:[{prodName: 'Dragon Food', price:34 , quantity:1, tax: 1},
                   ]
         })).toBe(34.34)
    })


 
