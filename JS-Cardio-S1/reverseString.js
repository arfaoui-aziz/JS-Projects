function reverseString(str) {
  //   let reverse = "";
  //   for (let i = str.length - 1; i >= 0; i--) reverse += str[i];
  //   return reverse;

  //   let reverse = "";
  //   for (let i = 0; i < str.length; i++) reverse = str[i] + reverse;
  //   return reverse;

  //?   let reverse = "";
  //?   for (let char of str) {
  //?     reverse = char + reverse;
  //?   }
  //?   return reverse;

  //   let reverse = "";
  //   str.split("").forEach((char) => reverse = char + reverse);
  //   return reverse;

  return str
    .split("")
    .reduce(
      (reverseString, char) => reverseString = char + reverseString,"");

  //*   return str.split("").reverse().join("");
}

const output = reverseString("hello World");

console.log(output);
