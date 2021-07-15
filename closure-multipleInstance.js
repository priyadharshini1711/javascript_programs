let counter = 0;

function outer() {
    let counterLocal = 0 ;
    function incrementCounter(){console.log(counterLocal);counter++;counterLocal++;}
    return incrementCounter;
}


const myFunction = outer();
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();

const myFunction1 = outer();
myFunction1();
myFunction1();

console.log("Counter : ",counter)

