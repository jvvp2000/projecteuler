const GetFibonacciArray = (arrLength) => {
  //const arr = new Array(arrLength)
  const arr = [1, 2];
  for (let i = 2; i <= arrLength; i++) {
    //arr[i] = arr[i-1] + arr[i-2]
    let temp = 0;
    temp = arr[i - 1] + arr[i - 2];
    if (temp < 4000000) {
      arr.push(temp);
    }
  }
  return arr;
};

const GetSumEvenFibonacci = (fibonacciArray) => {
  let sum = 0;
  for (let i = 0; i < fibonacciArray.length; i++) {
    if (fibonacciArray[i] % 2 === 0) {
      sum += fibonacciArray[i];
    }
  }

  return sum;
};

var fibArray = GetFibonacciArray(50);
console.log(GetFibonacciArray(50));
//var fibArray = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
console.log(GetSumEvenFibonacci(fibArray));
