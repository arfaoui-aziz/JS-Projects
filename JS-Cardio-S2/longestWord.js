let longestWord = (str) => {
  //MySolution

    let wordArr = str.toLowerCase().match(/[a-z0-9]+/g);
    let map = {};

    for (word of wordArr) {
      map[word.length] = !map[word.length]
        ? word
        : [].concat(map[word.length], word);
    }

    return map[Math.max(...Object.keys(map))];

  // Brad Solution
//   let wordArr = str.toLowerCase().match(/[a-z0-9]+/g);

//   let sortedArr = wordArr.sort((a, b) => b.length - a.length);

//   let longestWordArr = sortedArr.filter(
//     (word) => word.length === sortedArr[0].length
//   );

//   return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
};

console.log(longestWord("Hello there, my name is aziz "));
