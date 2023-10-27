const person = {
    name: 'kodom ali', 
    job: 'badam khai',
    3:'third',
    'add-dress': 'kochu khet'
}
const prop = 'job'

 console.log(person.job)
 console.log(person['job'])
console.log(person[prop])
 console.log(person['3'])
 console.log(person['add-dress'])

 //output---> badam khai
// badam khai
// badam khai
// third
// kochu khet