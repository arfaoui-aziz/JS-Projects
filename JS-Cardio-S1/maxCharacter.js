//Return the character that is most common in a string

const maxCharacter = (str) => {
  //* 1st Solution
  //   let max = 0;
  //   let char = "";
  //   let nbrOccur = 0;

  //   for (let i = 0; i < str.length; i++) {
  //     nbrOccur = 0;
  //     for (let j = i; j < str.length; j++) {
  //       if (str[i] === str[j]) nbrOccur++;
  //     }
  //     if (max < nbrOccur) {
  //       max = nbrOccur;
  //       char = str[i];
  //     }
  //   }
  //   return { max, char };

  //* 2nd Solution

  const charMap = {};
  let maxNb = 0;
  let maxChar = "";
  str.split("").forEach((char) => {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  });

  for (let ch in charMap) {
    if (charMap[ch] > maxNb) {
      maxNb = charMap[ch];
      maxChar = ch;
    }
  }

  return { [maxChar]: maxNb };
};

const output = maxCharacter("javascript");
console.log(output);
