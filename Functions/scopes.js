let a =20;     //Global variable accessed everwhere by anyone

function add(b) {
    console.log(a+b)

}
add(20)

function add(b) {
    console.log(a+b)
    let c= 30;  //local variableaccesible in the globe it rpreesented
    console.log(a+ b +c);

}
add(20)