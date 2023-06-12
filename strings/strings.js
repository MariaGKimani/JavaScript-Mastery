//strings
console.log('hellow world');
let email = "magkim@gmail.com";
console.log(email);

//string concatenation

let firstName = "Mariagoretti";
let latName = "Kimani";

let fullName = firstName + " " + latName;
console.log(fullName);

//getting characters
//1.using []
console.log(fullName[2]);


//stringth length -----n.o of characters in a string 
console.log(fullName.length);


//strings methods ---performing methods or functions to do stuff
//methods are specific functions that belong to a particular object
//1.toUpperCase
console.log(fullName.toUpperCase())
let result =fullName.toLowerCase();

console.log(result);

let index = email.indexOf('a');
console.log(index);

//2.lastIndexOf ---shows the last place a character appears
let  emaail ='mariagorettikimani@gmail.com'
let result1 = emaail.lastIndexOf('i');
console.log(result1);
//3. .slice ---cuts a section from a string
let result2 = emaail.slice(0,10);
console.log(result2);
let result3 =emaail.slice(0,6);
console.log(result3)


//4.substring ---starts at 4 end at 14 gets 10 characters (10 is specifying how many steps we are moving from 10)
let result4 = emaail.substr(4,10);
console.log({result4});

//5.replace 
let result5 = emaail.replace('m','w')
console.log(result5);

result5 = emaail.replace('g','m');
console.log(result5);

//getting a character at a certain index
console.log(a[1]);
//you cannot change the character of a string......
a[0] = "h";
console.log("a",a)

//adding two strings or combining

let trial = "Hello";
trial = 'Hello';
trial = `Hello`;

let a = "Hey";
let b = "there"
let c = a +" "+ b;
console.log(c);

let d = `${a} ${b} human`
console.log(d);

let bb = 23;
let hh = 13;
let resul = (0.5*bb *hh)
console.log(resul)


