// map protekta upadan er upor kaj kore abong arry bania tr vitor man rakhe 
// abong retun kore value 

const numbers= [12,34,56,77,3,21,2];

const double=numbers.map(numbers=> numbers*2);
// console.log(double);


const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus)
const halves = numbers.map(num => num / 2);

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];

const lengths = friends.map(frnd => frnd.length)
// console.log(lengths)
const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter);



// --------------------get set deleted size Using map object
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2); 
map1.set('c', 3);
map1.set('d',4);
map1.set('e',5);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 5

map1.delete('b');

console.log(map1.size);
// Expected output: 4
// map1.set('b',2); deleted 

