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
};

console.log(longestWord("Hello there, my name is aziz "));
