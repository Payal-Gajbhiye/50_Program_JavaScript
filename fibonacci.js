const number = 5;
let f0 = 0,
  f1 = 1,
  f2;
console.log(f0);
console.log(f1);

for (let i = 0; i <= number; i++) {
  f2 = f1 + f0;
  console.log(f2);
  f0 = f1;
  f1 = f2;
}
