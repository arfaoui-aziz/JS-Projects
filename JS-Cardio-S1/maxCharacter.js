//Return the character that is most common in a string

const maxCharacter = (str) => {
  let max = 0;
  let char = "";
  let nbrOccur = 0;

  for (let i = 0; i < str.length; i++) {
    nbrOccur = 0;
    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j]) nbrOccur++;
    }
    if (max < nbrOccur) {
      max = nbrOccur;
      char = str[i];
    }
  }
  return { max, char };
};

const output = maxCharacter("javascript");
console.log(output);
