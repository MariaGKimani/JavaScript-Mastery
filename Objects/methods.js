let student = {
    name : "Goretti",
    age : 22,
    greet :function(){
        console.log("hello");
        console.log(`Hello my name is ${student.name} an i am ${student.age} years old`);
        
        console.log(this.greet);
        console.log(`Hello my name is ${this.name} an i am ${this.age} years old`);
    }
};
student.greet();
student.talk = function(){
    console.log("hello there");
}
// student.talk();
student.greet();
student.talk = () =>{
    console.log("Mscheew");
}
