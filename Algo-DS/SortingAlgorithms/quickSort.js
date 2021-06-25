function pivot(arr, start = 4, end = arr.length - 1) {
  const swap = (arr, pivotIndex, i) => {
    temp = arr[pivotIndex];
    arr[pivotIndex] = arr[i];
    arr[i] = temp;
  };

  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }

  swap(arr, pivotIndex, start);
  console.log(arr);
  return pivotIndex;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivInd = pivot(arr, left, right);
    quickSort(arr, left, pivInd - 1);
    quickSort(arr, pivInd + 1, right);
  }
  return arr;
};

// console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));
console.log(quickSort([5, 2, 9, 1, 8, 4, 7, 6, 3]));
