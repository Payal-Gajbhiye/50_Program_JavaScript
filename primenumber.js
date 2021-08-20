const number = 10;

let isPrime = true;

if (number === 1) {
  console.log("1 is not a prime");
} else if (number > 0) {
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("This is prime");
  } else {
    console.log("Not Prime");
  }
}
