const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
  //
  //   let sum = 0;
  //   for (let i = 0; i <= num; i++) {
  //     sum += i;
  //   }
  //   return sum;
};
console.log(sumRange(3));
