// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers
// is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
//

const palindromicNumber = (x) => {
  let even = 2 * (10 ^ (x / 2) - 1);
  console.log(even);
};

palindromicNumber(10);
