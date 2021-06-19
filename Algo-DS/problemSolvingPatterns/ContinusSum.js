//Sliding Window
const continusSum = (arr, sum) => {
  let tempSum = arr[0];
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (tempSum === sum) return arr.slice(j, i);
    tempSum += arr[i];
    while (tempSum > sum) {
      tempSum = tempSum - arr[j];
      j++;
    }
  }
  return -1;
};

console.log(continusSum([1, 3, 2, 1, 2, 5, 1, 7, 6, 3, 7], 10));
