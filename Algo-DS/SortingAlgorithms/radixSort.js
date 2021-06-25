const getDigit = (num, i) => {
  // let tempStr = num.toString().split("").reverse().join("");
  // return tempStr[i];
  // get digit at index i start from right
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
  // return num.toString().length
};

const maxDigits = (nums) => {
  let max = 0;
  for (nbr of nums) {
    max = Math.max(max, digitCount(nbr));
  }
  return max;
};

const radixSort = (nums) => {
  let max = maxDigits(nums);
  for (let i = 0; i < max; i++) {
    // let buckets = [[], [], [], [], [], [], [], [], [], []];
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }

    //nums = [].concat(...digitBuckets)
    nums = digitBuckets.flat();
  }
  return nums;
};

// console.log(getDigit(1455, 2));

console.log(radixSort([0, 2, 3, 45, 4555, 97772, 2545]));
