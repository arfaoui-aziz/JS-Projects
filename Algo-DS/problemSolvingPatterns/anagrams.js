const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const charCounter = {};
  //const freqCounter2 = {}

  for (char of str1) {
    charCounter[char] = (charCounter[char] || 0) + 1;
  }
  for (char of str2) {
    // freqCounter2[char] = (freqCounter2[char] || 0) + 1;
    if (!charCounter[char]) {
      return false;
    } else {
      charCounter[char] -= 1;
    }
  }
  //   for (key in charCounter) {
  //     if (!(key in freqCounter2)) return false;
  //     if (charCounter[key] !== freqCounter2[key]) return false;
  //   }
  return true;
  //! naive Solution
  //   for (char of str1) {
  //     let charIndex = str2.indexOf(char);
  //     if (charIndex === -1) return false;
  //     str2 =
  //       str2.substring(0, charIndex) + str2.substr(charIndex + 1, str2.length);
  //   }
  //   return true;
};

const output = isAnagram("cinema", "iceman");
console.log(output);
