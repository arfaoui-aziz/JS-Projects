const maxSubArraySum = (arr, n) => {
  if (n > arr.length) return null;
  //! naive Solution O(n^2)
  // let max = -Infinity;

  // for (let i = 0; i < arr.length - n + 1; i++) {
  //   const subArr = arr.slice(i, i + n);
  //   sum = 0;
  //   for (val of subArr) {
  //     sum += val;
  //   }
  //   //for (let j=0; j < n; j++){
  //   // sum += arr[i+j]
  //   //} without usung subArray
  //   if (sum > max) {
  //     max = sum;
  //   }
  //   console.log(sum, max);
  // }
  // return max;

  //* Refactor O(n)
  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  sum = maxSum;

  for (let i = n; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - n];
    if (sum > maxSum) maxSum = sum;
    // maxSum = Math.max(maxSum,tempSum)
  }
  return maxSum;
};

const output = maxSubArraySum([1, 2, 5, 2, 1, 8, 9], 2);
// const output = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4);

console.log(output);
