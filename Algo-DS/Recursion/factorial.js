const factorial = (num) => {
  //   let res = 1;
  //   for (let i = 2; i <= num; i++) {
  //     res *= i;
  //   }
  //ou
  //   for (let i = num; i > 1; i--) {
  //     res *= i;
  //   }
  //   return res;

  if (num === 1) return 1;
  return num * factorial(num - 1);
};

const output = factorial(6);
console.log(output);
