//to change data type implicit(internally) and explicity(externally)

// implicit coersion
let a = "10";
let b = a * 10;

console.log(b);
console.log(typeof(b));
console.log(typeof(a));
console.log(+a);
console.log(typeof(+a))

// explicit coersion ----we use inbuilt functions
let c = Number(a);
console.log("c",typeof(c))

let d = String(c);
console.log( "d", typeof(d));
let e = new Array (d);
console.log("e", typeof(e));

