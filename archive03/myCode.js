const findPrimeFactor = (num) => {
  arrPrimesFactors = [];
  let flag = 0;
  let j = 0;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      for (j = 2; j < i; j++) {
        if (i % j === 0) {
          flag++;
        }
      }
      if (flag < 2) {
        arrPrimesFactors.push(j);
      }
    }
  }
  return arrPrimesFactors;
};

console.log(findPrimeFactor(60085147514));

//600851475143
