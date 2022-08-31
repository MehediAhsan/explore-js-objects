const player = {
    name: 'Neymar',
    age: 25,
    country: 'Brazil',
    salary: 500000,
    club: 'PSG'
}

const keys = Object.keys(player)

for(const key of keys){
    // console.log(key,player[key]);
}

//use of for in
for(const key in player){
    // console.log(key,player[key]);
}

// entries

const pair = Object.entries(player);
console.log(pair);

for(const [key,value] of pair){
    console.log(key,value);
}