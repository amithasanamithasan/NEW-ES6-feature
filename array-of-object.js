const products=[
           {id:1,  name:'walton', price:13000},
           {id:2,  name:'hp',     price:20000},
           {id:3,  name:'dell',   price:30000},
           {id:4,  name:'mac',    price:1500000},


]
//  get product  name

 const names = products.map(product => product.name)
   console.log(names)

// output--->[ 'walton', 'hp', 'dell', 'mac' ]
   

// get product  price

 const price =products.map(pro => pro.price );
 console.log (price);

// output---> [ 13000, 20000, 30000, 1500000 ]


// get product id 

 const idname = products.map(idname => idname.id);
 console.log(idname);

// output-->[ 1, 2, 3, 4 ]




// //forEach

//  products.forEach(p => console.log(p.id))

// // // filter

  const expensive = products.filter(p => p.price > 50000)
  console.log(expensive)
// output---> [ { id: 4, name: 'mac', price: 1500000 } ]

// find

    const Find= products.find(p => p.price<50000)
   console.log(Find);

    // output--> { id: 1, name: 'walton', price: 13000 }

// // // reduce
const Ruduce= products.reduce((p,c)=> p+c.price,0)
console.log(Ruduce);

// output---> 1563000



// total output ---->  

// [ 'walton', 'hp', 'dell', 'mac' ]
// [ 13000, 20000, 30000, 1500000 ]
// [ 1, 2, 3, 4 ]
// [ { id: 4, name: 'mac', price: 1500000 } ]
// { id: 1, name: 'walton', price: 13000 }
// 1563000