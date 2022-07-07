const isDivisible = (number, divisor) => {
  let result = false;
  if (number % divisor === 0) {
    result = true;
  }
  return result;
};

module.exports = { isDivisible };
