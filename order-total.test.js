const OrderTotal  = require('./order-total');
 
const someOrder = {
    items:[{prodName: 'Dragon Food', price:34 , quantity:1, tax:4 , countryCode: 'DE'},
           {prodName: 'Dragon Cage', price:304 , quantity:1 ,tax:10, countryCode: 'SE'}]
 }
 

it.only('Calc Tax',()=>{

  return   OrderTotal(()=>{return Promise.resolve({json: () => { return Promise.resolve({ rates: {standard: { value : 19} } }) } })}, {
                items:[
                        { prodName: 'Dragon Food', price:34 , quantity:1, tax:10}
                      ]
        }).then(result => expect(result).toBe(40.46))
})


it('Calc No Tax ',()=>{
    
        OrderTotal(()=>{}, {
            items:[{prodName: 'Dragon Food', price:34 , quantity:1},
                   ]
         }).then(result => expect(result).toBe(34.34))
    })


    it('Calc No Tax and VAT ',(done)=>{

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            let isFakeFetchedCalled = false
            let fakeFetch = (url) => {
                expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
                 isFakeFetchedCalled = true
                 return Promise.resolve({
                  json: () => {
                     return  Promise.resolve({
                          rates : {
                              standard: {
                                  value: 19
                              }
                          }
                      })
                  }      

                 })

            }
         return  OrderTotal(fakeFetch, {
                     countryCode: 'DE',
                    items:[{prodName: 'Dragon Food', price:34 , quantity:1, tax: 1}]
             }).then(result => { 
                              expect(result).toBe(34*(1.19) )
                              expect(isFakeFetchedCalled).toBe(true)
                            }
            )
            done()
        })
 
