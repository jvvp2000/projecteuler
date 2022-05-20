// The sum of the squares of the first ten natural numbers is,
// The square of the sum of the first ten natural numbers is,
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function SumSquares(arrNum) {
  let tempArr = [];
  let count = 0;
  tempArr = arrNum.map((a) => a * a);
  tempArr.map((a) => (count += a));
  return count;
}
function SquareSum(arrNum) {
  let temp = 0;
  arrNum.map((a) => (temp += a));
  return temp * temp;
}
function CreatingLimitedArr(limit) {
  arr = [];
  for (let i = 1; i <= limit; i++) {
    arr.push(i);
  }
  return arr;
}
function SubNumbers(a, b) {
  return a - b;
}

const num = 100;

sumOfSquares = SumSquares(CreatingLimitedArr(num));
squareOfSum = SquareSum(CreatingLimitedArr(num));

console.log(SubNumbers(squareOfSum, sumOfSquares));
