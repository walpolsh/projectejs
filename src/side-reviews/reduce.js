// // array of numbers + called back function
// [3, 4, 6, 7, 9].reduce(function (prev, curr, index, array)) {
//   //prev the initial value supplied
//   //curr current alement being processed
//   //index of the curr element
//   // array on which reduce was called
// }, 0) // starting point in the array, the initial value

var reduce = [3, 4, 6, 7, 9].reduce(function (prev, curr) { //call back function takes 4 parameters
  return prev + curr;
});

console.log(reduce);

//prev = 0 , curr = 0
// prev = 0, curr = 1 ect.

function sumNaturaNos(n) {
  return range(1, n, 1).reduce(function (prev, curr) {
    return prev + curr;
  });
};

function range(start, end, step) {
  var res = [];
  var item = start;
  while (item <= end) {
    res.push(item);
    item = item + step;
  };

  return res;

};

sumNaturaNos(122);

range(1, 2, 3);
