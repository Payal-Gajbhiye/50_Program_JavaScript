// Example 1 : with if....elseif.....else
const number = -9;

if (number < 0) {
  console.log("number is negative");
} else if (number === 0) {
  console.log("number is zero");
} else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log(`factorail of ${number} is ${fact}`);
}

// Example 2 - with if...else
const check = -9;

if (check < 0 || check === 0) {
  console.log("number is either negative or zero");
} else {
  let fact = 1;
  for (i = 1; i <= check; i++) {
    fact = fact * 1;
  }
  console.log(fact);
}
