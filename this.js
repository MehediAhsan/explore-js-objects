// ৩. (এডভান্সড) জাভাস্ক্রিপ্ট এর মধ্যে this কীওয়ার্ড কিভাবে কাজ করে

// ৪. arrow ফাংশন আর রেগুলার ফাংশন এর মধ্যে ডিফারেন্স কি 

console.log(this)

const Rahim = {
    name: 'Rahim',
    study: 'cse',
    money: 5000,
    subjects: ['AI', 'DS','C' ],
    exam: function(){
        console.log(this); // define only this object
        return this.name + ' is perticipation is an exam';
    },
    examArrow: ()=> {
        console.log(this); // arrow function this define the window on level up
    },
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow();
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

Rahim.exam();
Rahim.examArrow();
Rahim.examNested();

const Karim = {
    name: 'Karim',
    money: 8000
}

Karim.exam=Rahim.exam;
Karim.exam();

function btnClick(){
    console.log(this); // define window
}

document.getElementById('btn-click').addEventListener('click', function(){
    console.log(this); // define this button
})