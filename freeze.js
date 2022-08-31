const player = {
    name: 'Neymar',
    age: 25,
    country: 'Brazil',
    salary: 500000,
    club: 'PSG'
}

const keys = Object.keys(player);
console.log(keys);
const values = Object.values(player);
console.log(values);
const pairs = Object.entries(player); // pair of keys and values
// console.log(pairs);

console.log(player);

// Object.seal(player); // only you can set a value, can not add or delete property
Object.freeze(player); // you can not change anything
delete player.club; // delete a specific property
player.speciality = 'Stiker'; // add a specific property
player.salary = '600000'

console.log(player);