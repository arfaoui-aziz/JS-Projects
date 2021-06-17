//O(log2 (n))
const binarySearch = (arr, searchInput) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.trunc((left + right) / 2);
    if (arr[mid] === searchInput) return mid;
    else if (searchInput > arr[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

const output = binarySearch([0, 1, 2, 3, 4, 5, 6, 15, 100, 542, 600], 100);
console.log(output);
