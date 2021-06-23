// spliting -> sorting -> merging
// O(n log n)
// Space Complexity o(n)
const mergeArrays = (arr, arr2) => {
  let i = 0;
  let j = 0;
  //   let i = arr.length - 1;
  //   let j = arr2.length - 1;
  let sortedArray = [];
  while (i < arr.length && j < arr2.length) {
    //   while (i >= 0 && j >= 0) {
    // if (arr[i] > arr2[j]) {
    if (arr[i] < arr2[j]) {
      sortedArray.push(arr[i]);
      i++;
      //   i--;
    } else {
      sortedArray.push(arr2[j]);
      j++;
      //   j--;
    }
  }

  for (; i < arr.length; i++) sortedArray.push(arr[i]);
  for (; j < arr2.length; j++) sortedArray.push(arr2[j]);

  //   for (let k = i; k >= 0; k--) sortedArray.push(arr[k]);
  //   for (let k = j; k >= 0; k--) sortedArray.push(arr2[k]);

  return sortedArray;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  //sort
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return mergeArrays(left, right);
};

const output = mergeSort([8, 3, 5, 4, 7, 6, 1, 2]);
// mergeArrays([1, 10, 50], [2, 14, 99, 100]);
console.log(output);
