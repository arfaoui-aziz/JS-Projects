charCount = (str) => {
  const Map = {};
  //   str.split("").forEach((char) => {
  //     Map[char] = Map[char] ? (Map[char] = Map[char] + 1) : 1;
  //   });

  //   for (let i = 0; i < str.length; i++) {
  //     char = str[i];
  //     Map[char] ? Map[char]++ : (Map[char] = 1);
  //   }
  lowerStr = str.toLowerCase();

  for (char of lowerStr) {
    Map[char] ? Map[char]++ : (Map[char] = 1);
  }

  return Map;
};

const output = charCount("Helloh");
console.log(output);
