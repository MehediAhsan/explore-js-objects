// create object using object literals(an object literal is a comma-separated list of name-value pairs inside of curly braces. Those values can be properties and functions.)

const player = {};
player.name = 'Neymar';
player.speciality = 'stiker';
player.football = ()=>{
    console.log('Best footballer');
}
// console.log(player);
// player.football();

const student = {
    name: 'Mehedi',
    performance: ()=>{
        console.log('Student of cse')
    }
}
// console.log(student);
// student.performance();

//object constructor

const person = new Object();
// console.log(person);

//object create method

// const item = Object.create(null);
const item = Object.create(player);
// console.log(item.name);

// class

class Person {
    name = 'Mehedi';
    address = 'Bagerhat';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(22);
// console.log(person1);

// Function

function car(model,price){
    this.model=model;
    this.price=price;
}

const tesla = new car('Elon',32);
// console.log(tesla);

