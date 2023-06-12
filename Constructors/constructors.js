function Person(name,age,height){
    this.firstname = name;
    this.age = age;
    this.height = height
};
let person = new Person('Agnes',23,'4ft')
console.log({person});

let person2 = new Person('Ann',20,'6ft')
console.log({person2});
;

console.log(Person.prototype);

Person.prototype.weight = 50;
console.log(person2.weight);
person2.weight =60
console.log('weight2',person2.weight)

console.log({person});
console.log(person.weight);
//to check if person is an instance of Person 
console.log(person instanceof Person);
