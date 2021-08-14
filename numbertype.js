// Example 1 - using if..else if ...else
const number = 10;

if (number === 0) {
  console.log(number, "number is zero");
} else if (number <= 0) {
  console.log(number, "number is negative");
} else {
  console.log(number, "number is positive");
}

// Example 2 - using nested if...else

const checkValue = 10;

if (checkValue >= 0) {
  if (checkValue === 0) {
    console.log(checkValue, "number is zero");
  } else {
    console.log(checkValue, "number is positive");
  }
} else {
  console.log(checkValue, "number is negative");
}
