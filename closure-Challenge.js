 // Type JavaScript here and click "Run Code" or press Ctrl + s
 console.log('Hello, world!');

 // CHALLENGE 1
 function createFunction() {
   function HelloWorld(){
     console.log("hello");
   }
   return HelloWorld
 }
 
 /*** Uncomment these to check your work! ***/
 const function1 = createFunction();
 function1(); // => should console.log('hello');
 
 
 // CHALLENGE 2
 function createFunctionPrinter(input) {  
   function sample(){
     console.log("Input",input);
     console.log("Returning Sample");
   }
   return sample
 
 }
 
 /*** Uncomment these to check your work! ***/
 const printSample = createFunctionPrinter('sample');
 printSample(); // => should console.log('sample');
 const printHello = createFunctionPrinter('hello');
 printHello(); // => should console.log('hello');
 
 
 // CHALLENGE 3
 function outer() {
   let counter = 0; // this variable is outside incrementCounter's scope
   function incrementCounter () {
     counter ++;
     console.log('counter', counter);
   }
   return incrementCounter;
 }
 
 const willCounter = outer();
 const jasCounter = outer();
 
 // Uncomment each of these lines one by one.
 // Before your do, guess what will be logged from each function call.
 
 /*** Uncomment these to check your work! ***/
 willCounter();
 willCounter();
 willCounter();
 
 jasCounter();
 willCounter();
 
 
 function addByX(x) {
   function returnfunction(input){
     console.log("Return",input+x);
     return input+x;
   }
   return returnfunction
 
 }
 
 /*** Uncomment these to check your work! ***/
 const addByTwo = addByX(2);
 addByTwo(1); // => should return 3
 addByTwo(2); // => should return 4
 addByTwo(3); // => should return 5
 
 const addByThree = addByX(3);
 addByThree(1); // => should return 4
 addByThree(2); // => should return 5
 
 const addByFour = addByX(4);
 addByFour(4); // => should return 8
 addByFour(5); // => should return 9