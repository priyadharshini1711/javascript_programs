function multiplyBy2(input) {
    return input*2;
}

const multiplyBy2_1 = (input) => {
    return 2*input
}

const multiplyBy2_2 = (input) => input*2;

const multiplyBy2_3 = input => input*2;

const output = multiplyBy2(8)
const output1 = multiplyBy2_1(8)
const output2 = multiplyBy2_2(8)
const output3 = multiplyBy2_3(8)

console.log("Output" , output)
console.log("Output_1" , output1)
console.log("Output_2" , output2)
console.log("Output_3" , output3)