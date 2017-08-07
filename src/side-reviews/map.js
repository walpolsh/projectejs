// map function maps each element to the out put values
// all are assigned to variables..
let arr = [3, 4, 6, 7, 8, 9];
console.log(arr);
let arrayOfNumbers = [3, 4, 6, 7, 8, 9].map((x) => x ** 2);

console.log(arrayOfNumbers);

// the structure of the callback function is very similar to filter.
// the return value must always be the output of the returned element.
// function (elem, index, array) {
//   ... ... ... ...
// }
