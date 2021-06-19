//O(n+m)

computeLPSArray = (pattern, lps) => {
  let j = 0;
  let i = 1;
  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      lps[i] = j + 1;
      i++;
      j++;
    } else {
      if (j !== 0) j = lps[j - 1];
      else {
        lps[i] = 0;
        i++;
      }
    }
  }

  console.log(lps);
};

const KMP_StringSearch = (str, pattern) => {
  let n = str.length;
  let m = pattern.length;
  let lps = Array.from({ length: m }).fill(0);
  computeLPSArray(pattern, lps);
  let i = 0;
  let j = 0;
  while (i < n - m + 1) {
    if (str[i] === pattern[j]) {
      j++;
      i++;
    } else {
      if (j !== 0) j = lps[j - 1];
      else i++;
    }
    if (j === m) {
      console.log(i - j);
      j = lps[j - 1];
    }
  }
};

KMP_StringSearch("aabaabaabaaaa", "ba");
