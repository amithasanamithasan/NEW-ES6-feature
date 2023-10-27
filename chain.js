//  DATA ACESS
const data = [{ id: 1, name: 'abul', address: 'kochu khet' }];

console.log(data);
console.log(data[0].address);

// products data 2 show me?
// object vitor array array vitor abr 2ta object tr moddhe 2 number object ta bahir koro?


const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000 },
        { id: 2, name: 'macbook', price: 165000 },
    ]
}
console.log(products);
console.log(products.data);
console.log(products.data[1]);

const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street.third);

// prob-->5

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}

console.log(user2.address.city);