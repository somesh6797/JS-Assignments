//  console.clear()
//Clears the console

//Syntax :: console.log(msg);
console.log("Logging msg");
//above statement logs/ outputs the msg in the console
//Output:- >Logging msg

//Syntax :: console.warn(warning msg);
console.warn("Warning msg");
//above statement gives warnning msg in the console
//it appears same as the logmsg but it is the warnning msg.
//Output:- >Warning msg

//Syntax :: console.assert(Assertion,ErrorMassage);
console.assert(2 / 2 == 0, "Error : 2/2 is one");
//assert method gives errror when the assertion is false,
//else it simply hust return undefined.
//Output:- >Assertion failed: Error :2/2 is one

//Syntax :: console.error(errorMessage);
console.error("This is the anonymous error");
//above statement gives an error to the console

//Syntax :: console.count(label);
console.count("function");
console.count("function");
console.count("function");
//count methods gives number in accordsnce with how many times it has called.if called 3 times it gives number 3.
//Output :- >function: 3

// console.countReset(same label that we set the count for);
console.countReset("function");
//Output :- >function: 1

//Syntax ::- console.group(Group Title);
console.group("NewGRP");
//this wiil create new group in the console under which all the logs and other msges will be come as output,
//when we'll write console.groupEnd(); then group wiill get end we'll again will be in main console
console.groupEnd();

console.memory;
//this is the property which gives memoryINfo like total JS HEAPsize
//used JS heapsize and JS heapLimit.

//conole.trace() gives Stack trace i.e. in what order function called

function myFunction() {
  myOtherFunction();
}

function myOtherFunction() {
  console.trace();
}

myFunction();
// Output :- >
//  Assignment1.js:61 console.trace
// myOtherFunction @ Assignment1.js:61
// myFunction @ Assignment1.js:57
// (anonymous) @ Assignment1.js:64
//output will differ in Nodejs
