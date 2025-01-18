//IIFE : Immidiately Invoked Function Expression
//IIFE is used to avoid global scope pollutions(right answer next line is for understanding)
//It is used to run the function instantly
(function chai(){
    //It is also called named IIFE
    console.log(`DB CONNECTED`)
})();
//Explaination: Here in first bracket ffuntion is defined '()()' and using second bracket funtiion is called
((name)=>{
    //IIFE using arrow function and concept of argumnet passing in IIFE 
    console.log(`DB CONNECTED ${name}`)
})("himesh");