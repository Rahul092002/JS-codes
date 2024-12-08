//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//************ Stack and Heap Memory**************//


/*
stack memory is used in case of primitive datatypes(like let, var, const etc.) while,
heap memory is used in case of non-primitive datatypes(like objects, Arrays etc)

STACK MEMORY -> Datatypes are copied in stack for every new variable thus changing value of a 
               datatypes has no effects on the value of another datatype
HEAP MEMORY -> Datatypes point to the same value in heap thus changing value of a 
               datatypes effects the value of another datatype
*/

//--> Stack memory workflow example
let name1 = "Rahul"
let name2= name1
name1 = "Sinha"
console.log(name2)//Rahul is copied and assigned to name2

//Since name2 is copied value even if we change the value of name1 name2 remains uneffected
console.log(name1)
console.log(name2)

//--> Heap memory workflow example

let userOne = {
    email: "rahul@google.com",
    upi: "r12@ybl"
}
let userTwo = userOne

//Now if we change the value of userTwo it will effect userOne aslo

console.log(userOne.email)
userTwo.email = "jama@gmail.co.in"
console.log(userOne.email)//changed the value of userTwo but userOner also changed
