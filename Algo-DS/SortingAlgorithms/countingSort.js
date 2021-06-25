//O(n+k)

const countingSort = (arr) => {
  let countArray = Array.from({ length: 10 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]] += 1;
  }
  console.log(countArray);
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }
  console.log(countArray);
  let sortedArray = Array.from({ length: arr.length });
  for (let i = 0; i < sortedArray.length; i++) {
    sortedArray[countArray[arr[i]] - 1] = arr[i];
    countArray[arr[i]] -= 1;
  }
  return sortedArray;
};

console.log(countingSort([1, 3, 8, 4, 1, 2, 9, 7, 9, 5, 2]));
