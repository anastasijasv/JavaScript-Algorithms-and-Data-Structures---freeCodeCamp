// Task 1. Comment Your JavaScript Code

// This is my in-line comment.

/* This is my
multi-line comment */


// Task 2. Declare JavaScript Variables

// JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object. Variables allow to store and manipulate data. Any of the eight data types may be stored in a variable.

var myName;


// Task 3. Storing Values with the Assignment Operator

var a;
a = 7;


// Task 4. Assigning the Value of One Variable to Another

var b;
b = a;


// Task 5. Initializing Variables with the Assignment Operator

var c = 9;


// Task 6. Declare String Variables

var myFirstName = "Anastasija";
var myLastName = "Sviridova";


// Task 7. Understanding Uninitialized Variables

// When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN. If you concatenate a string with an undefined variable, you will get a string of undefined.

var d = 5;
var e = 10;
var f = "I am a";

d = d + 1;
e = e + 5;
f = f + " String!";


// Task 8. Understanding Case Sensitivity in Variables

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


// Task 9. Explore Differences Between the var and let Keywords

// Unlike var, when you use let, a variable with the same name can only be declared once (the error can be seen in your browser console).

let catName = "Oliver";
let catSound = "Meow!";


// Task 10. Declare a Read-Only Variable with the const Keyword

// You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant.

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);