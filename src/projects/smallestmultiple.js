// 2520 is the smallest number that can be divided by each of the
//numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly
//divisible by all of the numbers from 1 to 20?

//iterate from 1 to 20
// check x % i = 0 from 1 to 20

let smallestPositive = () => {
  for (var x = 1; x < 100000000; x++) {
    for (var i = 1; i <= 20; i++) {
      if (x % i === 0) {
        return x;
      }
    }
  }
};

smallestPositive(10);
