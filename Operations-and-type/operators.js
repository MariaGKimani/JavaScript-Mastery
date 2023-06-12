let a = 30;
console.log(a);

// Arithmetic operators
const num = 10;
const num2 = 30;
//addition
console.log(num + num2);
//subtraction
console.log(num -num2);
//multiplication
console.log(num * num2);
//division
console.log(num / num2);
// modulus 
console.log(num % num2);
//exponential >>power 
let powerNum = num ** num2;
console.log(powerNum);

//increment
let age =22;
age ++;
console.log(age);
//Decrement
age --;

// when consoling alot of things and you want to get a specific one
//console.log("age", age); or //console.log({age});  


//COMPARISON OPERATORS ---returns true or false

//1.loosely .. only checks the value
let b = 10;
let  c = "10";
let comparison = b == c;
console.log({comparison});
//not equal !=
let notEqual = b != c;
console.log({notEqual})

//2 strictly  ...checks data type
let strictly = b === c;
console.log({strictly});
//strictly notequal
let sne = b!==c;
console.log({sne});

//LOGICAL OPERATORS .......returns true or false ...we use &&(both should be true)  ||(either should be true)

const age1 = 25;
const age2 = 38;

if(age1 > age2 && num1 > num2){
    console.log(true)
}else{
    console.log(false)
}

const age3 = 25;
const age4 = 38;
const num4 = 10;
const num5 = 30;
if(age3 > age4 || num4 > num5){
    console.log(true)
}else{
    console.log(false)
}





