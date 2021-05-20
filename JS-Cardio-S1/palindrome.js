const isPalindrome = (str) => {
  //   return str === str.split("").reverse().join("");

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

const output = isPalindrome("Annas");
console.log(output);
