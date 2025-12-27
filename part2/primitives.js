//Number

let balance = 120;

let anotherBalance = new Number(150);

console.log(balance);
console.log(anotherBalance.valueOf());



// console.log(typeof(balance));
console.log(typeof balance); // Number
console.log(typeof anotherBalance); //Object


//Boolean

let isActive = true;
let isReallyActive = new Boolean(true); // Not a recommended way

console.log(typeof isActive);//Boolean
console.log(typeof isReallyActive); // Object

//Null and Undefined

let firstname; // firstname = undefined
console.log(firstname);

let lastname = null;
console.log(lastname);

//String

let myString = "Sudhanva";
let myString1 = "Kalghatgi";
let username = "Sudh468";

let oldGreet = myString + " Web Dev"
console.log(oldGreet);

let greetMeaasge = `Hello ${username} !`; // String Interpolation
let demoOne = `Value is ${2*2}`;
console.log(demoOne);
console.log(greetMeaasge);

//Symbol -> Gives unique value. Assures Uniqueness

let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 == sm2); // False
console.log(sm1);

let sm3 = Symbol("Sudhanva");
let sm4 = Symbol("Sudhanva");

console.log(sm3 == sm4);





