//O(N^2)
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    if (i !== minimum) {
      temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp;
    }
  }

  console.log(arr);
};

selectionSort([-5, -20, 5, 15, 19, 38, 47, 44]);
