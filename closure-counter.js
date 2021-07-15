function outer(){
    let counter = 0 ; 
    function incrementCounter (){
        counter++;
    }
    console.log("counter",counter)
    return incrementCounter;
}

const result = outer()

const output = result()

console.log("result : ",output)