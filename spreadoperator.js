// let num=[2,3,4,5,6,7,8,99];

// const Maxnumber =Math.max(...num);
// console.log(Maxnumber);

let num = [2, 3, 4, 5, 6, 7, 8, 99];
const Maxnumber = Math.max(...num);
console.log(Maxnumber);

// output ---> 99

let num1 = [2, 3, 4, 5, 6, 7, 8, 99];
const Minnumber= Math.min(...num1);
console.log(Minnumber)

// output---> 2

let fruits = ['orange', 'apple', 'banana'];
let Vagitables = ['palonshak', 'lalshak'];

let fruitsvagitableADD = [...fruits,...Vagitables];
console.log(fruitsvagitableADD);

// output-->['orange', 'apple', 'banana', 'palonshak', 'lalshak']