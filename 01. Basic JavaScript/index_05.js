// Task 49. Write Reusable JavaScript with Functions

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

// Task 50. Passing Values to Functions with Arguments

function functionWithArgs(first, second) {
  console.log(first + second);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

// Task 51. Return a Value from a Function with Return

function timesFive(num) {
  return num * 5;
}

const answer = timesFive(4);

// Task 52. Global Scope and Functions

let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Task 53. Local Scope and Functions

function myLocalScope() {
  const myVar = 19;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

console.log("outside myLocalScope", myVar);

// Task 54. Global vs. Local Scope in Functions

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

myOutfit();

// Task 55. Understanding Undefined Value returned from a Function

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

addThree();
addFive();

// Task 56. Assignment with a Returned Value

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// Task 57. Stand in Line

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Task 58. Understanding Boolean Values
