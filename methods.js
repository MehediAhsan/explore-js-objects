const student={
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

console.log(student);
// const output = student.exam();
// console.log(output);
console.log(student.expert('java'));

console.log(student.treat(500,100));

student.subjects.forEach(element => {
    console.log(element);
});




