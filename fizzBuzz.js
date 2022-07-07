const { isDivisible } = require("./isDivisible");

const fizzBuzz = (length) => {
  const collection = [];
  let i = 1;
  while (i <= length) {
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
    collection.push(result);
    i++;
  }
  return collection;
};

module.exports = { fizzBuzz };
