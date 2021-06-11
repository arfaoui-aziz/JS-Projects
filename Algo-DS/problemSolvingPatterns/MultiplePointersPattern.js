const sumZero = (arr) => {
  //! naive Solutions O(n^2)  , Space Complexity O(1)
  //   for (let i = 0; i < arr.length / 2; i++) {
  //     for (let j = arr.length - 1; j >= arr.length / 2; j--) {
  //       if (arr[j] + arr[i] === 0) {
  //         return [arr[j], arr[i]];
  //       }
  //     }
  //   }
  //   return;
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[j] + arr[i] === 0) {
  //         return [arr[j], arr[i]];
  //       }
  //     }
  //   }

  //*** Refactor O(n) , Space Complexity O(1)  */
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
  return;
};

const output = sumZero([-4, -2, -1, 0, 1, 2, 3]);
// const output = sumZero([0,1, 2, 3]);
console.log(output);
