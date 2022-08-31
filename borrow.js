// ২. (এডভান্সড) bind, call, apply এর মধ্যে ডিফারেন্স কি 

// to use a method from a object to call an another object using call,apply,bind method

const Rahim = {
    name: 'Rahim',
    study: 'cse',
    money: 5000,
    subjects: ['AI', 'DS','C' ],
    exam: function(){
        return this.name + ' is perticipation is an exam';
    },
    expert: function(subject){
        this.exam();
        return `${this.name} is expert on ${subject}`;
    },
    treat: function(amount, tips){
        this.money = this.money - amount -tips;
        return this.money
    }
}

const result = Rahim.exam();

const Karim = {
    name: 'Karim',
    money: 8000
}

const result2 = Rahim.exam.call(Karim); 
//Calls a method of an object, substituting another object for the current object.
console.log(result2);

const karimTreat = Rahim.treat.call(Karim,500,50); // using comma to pass arguments
console.log(karimTreat);

const karimTreat2 = Rahim.treat.apply(Karim,[500,50]); // using array to pass arguments
console.log(karimTreat2);

const karimTreat3 = Rahim.treat.bind(Karim); // create function then pass arguments
const remain = karimTreat3(500,50);
console.log(remain);