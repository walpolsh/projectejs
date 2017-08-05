// The prime factors of 13195 are 5, 7, 13 and 29.
//
function largestPrimeFactor(n) {
  var i = 2;

  // i is 2, a prime number

  while (i <= n) {

    //while 2 is smaller or equal to our number run this test

    if (n % i == 0) {

      //if the left over from dividing our number / 2 equals 0.

      n /= i;

      // divide our number by 2 /= Division assignment

    } else {
      i++;

      // or else start incrementing i one (until its less than or equal to our number)
    }
  };

  console.log(i);
};

var a = 600851475143;
largestPrimeFactor(a);

// What is the largest prime factor of the number 600851475143
