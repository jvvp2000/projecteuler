const GetSumMultiplies = (finalLimit) => {
  let count = 0;
  for (let i = 0; i < finalLimit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(GetSumMultiplies(1000));
