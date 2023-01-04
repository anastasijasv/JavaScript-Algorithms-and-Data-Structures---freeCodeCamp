// Task 39. Store Multiple Values in one Variable using JavaScript Arrays

const myArray1 = ["koala", 35];

// Task 40. Nest one Array within Another Array

const myArray2 = [
  ["pandas", 47],
  ["zebras", 94],
];

// Task 41. Access Array Data with Indexes

const myArray3 = [50, 60, 70];
const myData = myArray3[0];

// Task 42. Modify Array Data With Indexes

const myArray4 = [18, 64, 99];
myArray4[0] = 45;

// Task 43. Access Multi-Dimensional Arrays With Indexes

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const subarray = arr[3]; // [[10, 11, 12], 13, 14]
const nestedSubarray = arr[3][0]; // [10, 11, 12]
const element = arr[3][0][1]; // 11

const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const data = myArray5[2][1];

// Task 44. Manipulate Arrays With push()

const myArray6 = [
  ["John", 23],
  ["cat", 2],
];
myArray6.push(["dog", 3]); // [["John", 23], ["cat", 2], ["dog", 3]]

// Task 45. Manipulate Arrays With pop()

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown); // 6
console.log(threeArr); // [1, 4]

const myArray7 = [
  ["John", 23],
  ["cat", 2],
];
const removedFromMyArray7 = myArray7.pop();

// Task 46. Manipulate Arrays With shift()

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(ourArray); // ["J", ["cat"]];

const myArray8 = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArray8 = myArray8.shift();

// Task 47. Manipulate Arrays With unshift()

const newArray = ["Stimpson", "J", "cat"];
newArray.shift(); // ["J", "cat"]
newArray.unshift("Happy"); // ["Happy", "J", "cat"]

const myArray9 = [
  ["John", 23],
  ["dog", 3],
];
myArray9.shift();
myArray9.unshift(["Paul", 35]);

// Task 48. Shopping List

const myList = [
  ["Bread", 1],
  ["Milk", 2],
  ["Eggs", 10],
  ["Apples", 4],
  ["Chocolate", 2],
];
