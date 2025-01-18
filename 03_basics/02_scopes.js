//scopes are curly braces "{}" in functions and conditional statemnets and loops but not in obejcts
//we don't use var because of the scope concept. var does not follow scope and 
//can be accessed outside of the scope to which it is declared causing confusion and unexpected output
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //This will not throw error as addone is function name 

function addone(num){
    return num + 1
}



addTwo(5) //this will throw error as addtwo is a variable name which has stored function not
//          a function name itself thus calling addTwo before function will throw error
const addTwo = function(num){ //Another way of declaring functions
    return num + 2
}