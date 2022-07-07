const { isDivisible } = require("./isDivisible");

const fizzBuzz = () => {
  let i = 1;
  while (i <= 100) {
    let result = "";
    if (isDivisible(i, 3)) {
      result = "Fizz";
    }
    if (isDivisible(i, 5)) {
      result += "Buzz";
    }
    if (result === "") {
      result = i;
    }
    console.log(result);
    i++;
  }
};

module.exports = { fizzBuzz };
