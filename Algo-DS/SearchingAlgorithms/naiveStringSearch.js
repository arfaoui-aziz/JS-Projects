const naiveStringSearch = (str, pattern) => {
  //Naive Solutions  o(N^2)

  //1st 
  let patternOccurence = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) patternOccurence++;
    }
  }
   //2nd
  // for (let i = 0; i < str.length - pattern.length + 1; i++) {
  //   if (str.substring(i, i + pattern.length) === pattern) patternOccurence++;
  // }
  return patternOccurence || -1;
};
const output = naiveStringSearch("omgwowzomgdefomg", "omg");
console.log(output);
