const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  //! 1st Solution
  // const min = 0;
  // let uniqueValCounter = 1;
  // let right = arr.length - 1;
  // while (arr[right] > arr[min]) {
  //   let next = right - 1;
  //   if (arr[right] !== arr[next]) {
  //     uniqueValCounter++;
  //   }
  //   right--;
  // }
  // return uniqueValCounter;

  //* Solution 2
  // let uniqueValCounter = 1;
  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] !== arr[i + 1]) uniqueValCounter++;
  // }
  // return uniqueValCounter;

  //? Solution 3 not optimal for space complexity but useful in case array not sorted
  // const uniqueValCounter = {};
  // for (val of arr) {
  // uniqueValCounter[val] = 1; //(uniqueValCounter[val] || 0) + 1;
  // }
  // return Object.keys(uniqueValCounter).length;

  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return j + 1;
  // if we have to remove duplicates without using Set
  // arr.length = j + 1;
  // return arr;
};

const output = countUniqueValues([1, 1, 1, 1, 2, 3, 4, 4, 4, 7, 7]);
// const output = countUniqueValues([1, 1, 1, 1]);
console.log(output);
