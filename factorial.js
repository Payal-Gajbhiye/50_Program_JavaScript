// Example 1 : with if....elseif.....else
const number = 5;

if (number < 0) {
  console.log("number is negative");
} else if (number === 0) {
  console.log("number is zero");
} else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log(`factorial of ${number} is ${fact}`);
}

// Example 2 - with if....else
const check = 5;

if (check < 0 || check === 0) {
  console.log("number is either negative or zero");
} else {
  let fact = 1;
  for (i = 1; i <= check; i++) {
    fact = fact * i;
  }
  console.log(`factorial of ${check} is ${fact}`);
}
