const reverseNumber = (number) => {
  const reverseString = number.toString().split("").reverse().join("");
  return parseInt(reverseString) * Math.sign(number);
};

const output = reverseNumber(-123);
console.log(output, typeof output);
