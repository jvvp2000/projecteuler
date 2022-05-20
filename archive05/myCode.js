let num = 0;
let flag = 0;
const finalDivisible = 20;

while (flag <= finalDivisible) {
  if (flag !== finalDivisible) {
    flag = 0;
    num++;
  }

  for (i = 1; i <= finalDivisible; i++) {
    if (num % i === 0) {
      flag++;
    }
  }
}

console.log(num);
