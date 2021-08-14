// Example 1 : Using a temporay variable

console.log("First Way of swapping");

let valueFirst = 100;
let valueSecond = 300;

let temp; // create the temporay variable

temp = valueFirst;
valueFirst = valueSecond;
valueSecond = temp;

console.log("first value after swapping : ", valueFirst);
console.log("second value after swapping :", valueSecond);

//Example 2: Using the airtmatic operators - Only use for two variable
console.log("Second way of swapping");

let a = 200;
let b = 500;

a = a + b;
b = a - b;
a = a - b;

console.log("first value after swapping:", a);
console.log("second value after swapping:", b);
