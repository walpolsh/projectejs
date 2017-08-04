// If we list all the numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23./
const multiplesOf = () => {
  var arr = [];
  var total = 0;
  for (var i = 0; i < 1000; i++) {
    total += i;
    if (i % 3 === 0 || i % 5 === 0)
    {
      arr.push(i);
      console.log(arr);
    }
  };
};
console.log(multiplesOf());
// Find the sum of all the multiples of 3 or 5 below 1000.

//
//
