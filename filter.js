// filter selects elements based on a condition and returns 
// an array with the elements that fulfilled the condition.

// p=> is a arrow function


const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 0)
//  output even [ 72 ]
const selected1 = players.filter(p => p % 2 === 1)
// output odd [ 75, 65, 67, 55, 59 ]

console.log(selected)
console.log(selected1)

const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim', 'Joshna'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends)




// Find er babohar 
const players1 = [75, 65, 67, 72, 55, 59];

const Find1=players1.find(palyer => palyer>60 );
 console.log(Find1);