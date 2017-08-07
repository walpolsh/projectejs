// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first
// ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of
//the first one hundred natural numbers and the square of the sum.

//natural numbers = positive integers (whole numbers) 1, 2, 3, etc., and sometimes zero as well.
let arr = [];

const oneHundred = () => {
  for (var i = 1; i <= 100; i++) {
    arr.push(i);
  };
};

oneHundred();
console.log(arr);

// const sum = [];
let squareOfTheSum = arr.map(function (x) {
  return x ** 2;
}).reduce((prev, curr) => prev + curr);

console.log(squareOfTheSum);
let sumOfTheSquare = arr.reduce((prev, curr) => prev + curr) ** 2;
console.log(sumOfTheSquare);

var difference = sumOfTheSquare - squareOfTheSum;
console.log(difference);

// let sumOfTheSquare = arr.reduce(function (prev, curr) {prev + curr}).map(function (x) {x ** 2});
//
// console.log(sumOfTheSquare);

//???
