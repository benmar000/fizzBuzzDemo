const { isDivisible } = require("./isDivisible");

const fizzBuzz = () => {
  let i = 1;
  while (i <= 100) {
    let result = "";
    if (isDivisible(i, 3) && isDivisible(i, 5)) {
      result = "FizzBuzz";
    } else if (isDivisible(i, 3)) {
      result = "Fizz";
    } else if (isDivisible(i, 5)) {
      result = "Buzz";
    } else {
      result = i;
    }
    console.log(result);
    i++;
  }
};

module.exports = { fizzBuzz };
