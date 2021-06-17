//O(n)
const linearSearch = (arr, searchInput) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === searchInput.toLowerCase()) return i;
  }
  return -1;
};

const output = linearSearch(["Alabama", "Alaska", "Arizona"], "arizona");
console.log(output);
