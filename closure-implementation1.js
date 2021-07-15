function creteFunction(){
    function twoSquared(){
        return 2 * 2;
    }
    return twoSquared;
}

//one time excution of the creteFunction
const generateFunction = creteFunction();

//returns 4 doesnt take and pass the argument to the child
let result = generateFunction(8);

console.log("Output : ",result);

//proper function call
result = generateFunction();

console.log("Output : ",result);


