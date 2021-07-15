//HOC helps in passing functionality as a parameter

function addBy2(input){
    return input + 2;
}

function subBy2(input){
    return input - 2;
}

function multiplyBy2(input){
    return input * 2;
}

function divideBy2(input){
    return input / 2;
}


function copyArrayandMultiplyArray(array,instructions){
    const output = [];
    for(let i = 0 ; i < array.length;i++) {
        output.push(instructions(array[i]));
    }
    return output
}

const myArray = [1,2,3,4,5,6,7,8,9,10];

let result = copyArrayandMultiplyArray(myArray,addBy2);

console.log("Modified Array Add" , result);

result = copyArrayandMultiplyArray(myArray,subBy2);

console.log("Modified Array Sub" ,result);

result = copyArrayandMultiplyArray(myArray,multiplyBy2);

console.log("Modified Array Multiply" , result);

result = copyArrayandMultiplyArray(myArray,divideBy2);

console.log("Modified Array Divide" , result);


