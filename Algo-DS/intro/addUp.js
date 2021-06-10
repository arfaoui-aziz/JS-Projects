// const sum = (n) => {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// };

const addUp = (n) => {
  return (n * (n + 1)) / 2;
};

let t1 = performance.now();
output = addUp(6);
let t2 = performance.now();
console.log(output);
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
