//!  YT part 37 (Object) 
//?  Random password generator 

const person1 = {
    firstName : "spongebob",
    lastName : "squarepants",
    age : 30,
    isEmployed : true,
    hello : function(){console.log("Hi ! I'm spongebob");},
    eat : function(){console.log("I'm eating krabby patty");},
}
const person2 = {
    firstName : "patrick",
    lastName : "star",
    age : 42,
    isEmployed : false,
    hello : ()=>console.log("Hey ! I'm patrick..."),
    eat : () => console.log("I'm eating pizza")
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.hello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.hello();
person2.eat();

