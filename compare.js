// ১. (এডভান্সড) জাভাস্ক্রিপ্ট এ দুইটা অবজেক্ট সেইম কিনা সেটা কিভাবে কম্পেয়ার করে 

// const first = {a:2};
// const second ={a:2};
// const third = second; // same memory address

// if(third === second){
//     console.log('same');
// }
// else{
//     console.log('different');
// }

// do not use this to compare object or array because when position change they are different
// const first = {a:2,b:3,c:4,d:5};
// const second ={a:2,b:3,d:5,c:4};

// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);

// console.log(firstString,secondString);

// if(firstString === secondString){
//     console.log('same');
// }
// else{
//     console.log('different');
// }

const first = {a:2,b:3,c:4,e:5};
const second ={a:2,b:3,d:5,c:4};

function compareObject(first,second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first,second);
console.log(isSame);

