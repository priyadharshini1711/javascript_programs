function copyArrayandMultiplyArray(array){
    const output = [];
    for(let i = 0 ; i < array.length;i++) {
        output.push(array[i] + 2);
    }
    return output
}

const myArray = [1,2,3];

const result = copyArrayandMultiplyArray(myArray);

console.log("Modified Array Type" , typeof(result));

console.log("Modified Array" , result);
