// holds multuple types of data
//we use[]
let items = [2,5,"sweet",false,45]

//Array methods
//adding element at the end of an array >> we use push
items.push(62);
console.log(items);

//adding element at the start of an array >> we use unshift

items.unshift(6.5);
console.log(items);

//remove  element at the end  of an array >> we use pop
items.pop();
console.log(items);


//remove  element at the start  of an array >> we use shift
items.shift();
console.log(items);

//Array sorting

//ascending
let num =[1,5,34,12,25,30];
 let sorted =num.sort((a,b)=> a -b);
console.log(sorted);
//descending
let sorted1 =num.sort((a,b)=> -a -b);
console.log(sorted1);


//given an array of x elements,return an array with each element in x multiplied by 2

// const result =num.map{
//     (item)=>{
//         return item*2
//     }
// }


//adding arrays
//1.concatenation
let a = [1,2,3];
let  b =[4,5,6];
let joined1 = a.concat(b)
console.log({joined1})


//2. spread operator
let c =[1,40,...a];
console.log({c});
let s = [{1,40, ...a,...b}]
console.log(s);


//destructuring
let [z,x,...e] = c;
console.log({z});
console.log({x});
console.log({e});

