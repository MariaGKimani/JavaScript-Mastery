//create an object
let person = {
    name: "Ann",
    age:20,
    friend:{
        name: "Amanda",
        age: 25,
        myFriend:{
            name: "Susan",
            age: 21,
        }
    }
}
//creating empty object ---------------------person2 and person3
let person2 =new Object();
console.log(person2);


//adding items to an object
person2.name ="Maria"
console.log(person2);
person2['age'] = 23
console.log(person2);

//update person (age) -------------object
person['age'] = 56
console.log(person);
//to access a property use dot notation
console.log(person.name);

//accessing objects in an objects -------nested-----
console.log(person.friend.myFriend.age);
console.log(person['friend'] ['myFriend'] ['name']);
console.log(person.friend.myFriend.name);
x = delete person.age;
console.log({person})

//creating person3 and assign person properties to person3 
let person3 =Object.assign(person)
console.log(person3);
let keys = Object.keys(person3);
console.log({keys});
