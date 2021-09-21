// split an array into chunked arrays of a specific length
let arrayChunking = (arr, len) => {
  let chunkedArr = [];
  for (let i = 0; i < arr.length; i += len) {
    chunkedArr.push(arr.slice(i, i + len));
  }
  return chunkedArr;
};

console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 3));
