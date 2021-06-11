const countUniqueValues = (arr) => {
  const min = 0;
  let uniqueValCounter = 1;
  let right = arr.length - 1;

  if (arr.length === 0) return 0;
  while (arr[right] > arr[min]) {
    let next = right - 1;
    if (arr[right] !== arr[next]) {
      uniqueValCounter++;
    }
    right--;
  }
  return uniqueValCounter;
};

// const output = countUniqueValues([1, 1, 1, 1, 2, 3, 4, 4, 4, 7, 7]);
const output = countUniqueValues([1, 1, 1, 1]);
console.log(output);
