const accountId = 52113 //This is a constant value and cannot be updated
let accountEmail = "rahul22@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
accountEmail = "abc@yaaho.com"
//If variable is not assigned with value by default it shows undefined
let accountState;

/*
Prefer not to use var (Use let)
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);