//O(n^2)
const bubbleSort = (arr) => {
  let noSwap;
  for (let i = 1; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        //OR ES6 Destructuring assignment
        // [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  console.log(arr);
};

bubbleSort([29, 10, 14, 30, 37, 14, 18]);
