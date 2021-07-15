function creteFunction(){
    function multiplyBy2(input){
        return input * 2;
    }
    return multiplyBy2;
}

const generateFunction = creteFunction();

const result = generateFunction(8);

console.log("Output : ",result);