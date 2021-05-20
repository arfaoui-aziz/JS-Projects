const capitalizeLetters = (str) => {
  //* 1st Solution
    // return str
    //   .split(" ")
    //   .map((word) => word.replace(word[0], word[0].toUpperCase()))
    //   .join(" ");
  //* 2nd Solution
  //   const strArrays = str.toLowerCase().split(" ");
  //     for (let i = 0; i < strArrays.length; i++) {
  //       strArrays[i] =
  //         strArrays[i].substring(0, 1).toUpperCase() + strArrays[i].substring(1);
  //     }
  //     return strArrays;

  //* 3rd Solution
  //   return str
  //     .split(" ")
  //     .map((word) => word[0].toUpperCase() + word.substring(1))
  //     .join(" ");

  //* 4th Solution
  return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
};

const output = capitalizeLetters("i love javascript");
console.log(output);
