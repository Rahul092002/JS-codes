const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        //to refer current context we use this keyword here, current context =  "hitesh"
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
//user.welcomeMessage()

//console.log(this);    This shows this contains empty object if not defined inside a object
//                    But if you run console.log(this); in browser this will show you 'window' as global object
 function chai(){
    console.log(this.username) //will show undeifined
 }

 //chai()

//const addTwo = (num1,num2) => { //syntax of arrow function
//    return num1 + num2
//}

//const addTwo = (num1,num2) => (num1+num2) //This is the syntax for implicit return 
//                                            where only one line of return statement is done
//we can also pass object using '()' in arrow funtion
const addTwo = (num1,num2) => ({username:"hitesh"})
console.log(addTwo())