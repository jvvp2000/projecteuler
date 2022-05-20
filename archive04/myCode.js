const equals = (a, b) =>
  a.length == b.length && a.every((value, i) => value == b[i]);

function ReverseArr(array) {
  return array.map((value, i) => array[array.length - 1 - i]);
}

function GetPalindromeNumbers() {
  const productsArr = [];
  const palindroArr = [];

  for (let i = 900; i <= 999; i++) {
    for (let j = 900; j <= 999; j++) {
      let product = i * j;
      let productSplitted = 0;

      productSplitted = String(product)
        .split("")
        .map((str) => Number(str));
      productSplittedReversed = ReverseArr(productSplitted);

      //let productSplittedReversed = productSplitted.reverse()

      if (equals(productSplitted, productSplittedReversed)) {
        palindroArr.push(productSplitted);
      }
    }
  }
  return palindroArr;
}

console.log(GetPalindromeNumbers());

// var test = [1,2,3,4,5]
// let testReversed = test.reverse()
// console.log(test)
// console.log(testReversed)
//809900
