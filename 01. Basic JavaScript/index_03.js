// Task 25. Escaping Literal Quotes in Strings

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";


// Task 26. Quoting Strings with Single Quotes

const goodStr = '<a href="http://www.example.com" target="_blank">Link</a>';


// Task 27. Escape Sequences in Strings

//  Code  Output
//  \'	  single quote
//  \"	  double quote
//  \\	  backslash
//  \n	  newline
//  \t	  tab
//  \r	  carriage return
//  \b	  word boundary
//  \f	  form feed

const newStr = "FirstLine\n\t\\SecondLine\nThirdLine";


// Task 28. Concatenating Strings with Plus Operator

const bigStr = "This is the start. " + "This is the end.";

// Task 29. Concatenating Strings with the Plus Equals Operator

let myStrPlus = "This is the first sentence. ";
myStrPlus += "This is the second sentence.";


// Task 30. Constructing Strings with Variables

const myName = "Anastasija";
const myPhrase = "My name is " + myName + " and I am well!";


// Task 31. Appending Variables to Strings

const someAdjective = "awesome";
let myStr2 = "Learning to code is ";
myStr2 += someAdjective;


// Task 32. Find the Length of a String

let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;


// Task 33. Use Bracket Notation to Find the First Character in a String

// const lastName = "Lovelace";
let firstLetterOfLastName = "";
firstLetterOfLastName = lastName[0];


// Task 34. Understand String Immutability

let str = "Jello World";
// str[0] = "H"; cannot be changed
str = "Hello World";


// Task 35. Use Bracket Notation to Find the Nth Character in a String

// const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];


// Task 36. Use Bracket Notation to Find the Last Character in a String

