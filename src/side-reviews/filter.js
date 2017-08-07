// list comprehension = filter map and reduce
//given an array we can use the filter function to match select elements inside
let arrayOfNumbers = [2, 3, 4, 5, 6, 12, 15];
arrayOfNumbers.filter(isEven);
function isEven(elem) {
  if (elem % 2 == 0) {
    console.log(elem);
  }

  return elem;
}

arrayOfNumbers.filter(function isEven(elem) {
  console.log(elem % 2 == 0);
});

//function (elem, index, array) {
//   ... ... ... ...
// }
//

function isAlsoEven(element, index, array) {
  console.log(element + ' :: ' + index + ' :: ' + array + ' :: ');
  return element % 2 == 0;
}

arrayOfNumbers.filter(isAlsoEven);
