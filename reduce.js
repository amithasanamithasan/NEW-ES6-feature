const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous, current) => previous + current, 0)
console.log(total)
// output----> 85


const Valuearray=[1,2,4,4,5,5,5,4,20];

const valuetotal=Valuearray.reduce((p,c)=>  p+c ,0);
console.log(valuetotal);

// output -->50
const valuesum=[1,2,3,4,5,6,7,8,9,10];
const sum = valuesum.reduce((pa, ca) => pa + ca, 1);
console.log(sum);
// output ---> 55 but initial value 0 er ji gie 1 dila mann 1 barbe 56 mann hobe 2 dila 57 mann hobe 