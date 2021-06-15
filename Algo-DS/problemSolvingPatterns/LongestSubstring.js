const LongestSubstring = (str) => {
  //FIXME:
  // let longestStr = "";
  // let tempStr = "";
  // for (let i = 0; i < str.length; i++) {
  //   if (tempStr.length > longestStr.length) longestStr = tempStr;

  //   if (tempStr.indexOf(str[i]) === -1) {
  //     tempStr += str[i];
  //   } else {
  //     tempStr = tempStr.substr(str.indexOf(str[i]), i);
  //   }
  //   console.log(tempStr, longestStr);
  // }

  // return longestStr;

  //2nd Solution return only length of longest substring
  // let longest = 0;
  // let seen = {};
  // let start = 0;

  // for (let i = 0; i < str.length; i++) {
  //   let char = str[i];
  //   if (seen[char]) {
  //     start = Math.max(start, seen[char]);
  //   }
  //   // index - beginning of substring + 1 (to include current in count)
  //   longest = Math.max(longest, i - start + 1);
  //   // store the index of the next char so as to not double count
  //   seen[char] = i + 1;
  // }
  // return longest;

  let currentStart = 0;

  let maxlen = 0;

  let start = 0;

  let pos = {};
  let i = 0;

  pos[str[i]] = 0;
  for (; i < str.length; i++) {
    let char = str[i];
    if (!pos[char]) {
      pos[char] = i;
    } else {
      if (pos[char] >= currentStart) {
        currlen = i - currentStart;

        if (currlen > maxlen) {
          maxlen = currlen;
          start = currentStart;
        }
        currentStart = pos[char] + 1;
      }
      pos[char] = i;
    }
  }
  if (maxlen < i - currentStart) {
    maxlen = i - currentStart;
    start = currentStart;
  }
  return str.substring(start, start + maxlen);
};

const output = LongestSubstring("azzernrrs"); //zern
const output2 = LongestSubstring("GEEKSFORGEEKS"); //EKSFORG
const output3 = LongestSubstring("ABDEFGABEF"); //BDEFGA
console.log(output, output2, output3);
