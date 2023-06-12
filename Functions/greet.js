a =20
function add(b) {
    console.log(a+b)
    let c= 30;  //local variableaccesible in the globe it rpreesented
    console.log(a+ b +c);

}
add(20)

function greet(){
    let hello = "hey" //hello is a global scope to talk while local scope to greet
    function talk() {
        let greeting ="hello there"
        console.log(`${hello} ${greeting}`);
        
    }
    talk()
    console.log(greeting); //greeting cannoot be ascessed outside function talk cause its local
}
greet()