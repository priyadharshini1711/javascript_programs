// Not in need due to arraow function
// function multiplyBy2(input){
//     return input * 2;
// }

function copyArrayandMultiplyArray(array,instructions){
    const output = [];
    for(let i = 0 ; i < array.length;i++) {
        output.push(instructions(array[i]));
    }
    return output
}

const myArray = [1,2,3,4,5,6,7,8,9,10];

let result = copyArrayandMultiplyArray(myArray,input => input * 2);

console.log("Output : ",result )
