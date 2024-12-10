//singleton obejcts are created by using the syntax in line 2 but today we will not discuss about sinhleton objects
//object.create

//Today discussion is -> objects literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //symbol is declared like a key in object using a '[]'
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //This method is not used much but we can also access key of an object using '[]'
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) //Symbol is also used using a '[]'

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //This will restrict user to make changes in the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){ //definig a funtion using object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
} // accessing object keys in the function

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());