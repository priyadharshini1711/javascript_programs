function outer() {
    let counter = 0;
    function incrementCounter(){counter++;}
    console.log("counter : ",counter)
    return incrementCounter;
}

const myFunction = outer();
myFunction();
myFunction();

//console.log("Result : ",result);