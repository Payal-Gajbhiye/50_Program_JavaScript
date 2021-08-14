// Calculating Square root

const num = 48;
console.log(Math.sqrt(num));

const emptyValue = null;
console.log(Math.sqrt(emptyValue)); // Boolean evalution 0

const isTrue = true; // Boolean evalution is 1
console.log(Math.sqrt(isTrue));

const isFalse = false; // Boolean evalution is 0
console.log(Math.sqrt(isFalse));

// If the Negative Number and String will Pass through the Math.sqrt()) it will gives NAN
const negNumber = -90;
console.log(Math.sqrt(negNumber));

const string = "Check";
console.log(Math.sqrt(string));
