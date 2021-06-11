const same = (tab1, tab2) => {
  //! naive Solution O(n^2)
  // if (tab1.length !== tab2.length) return false;
  // for (let i = 0; i < tab1.length; i++) {
  //   let correctIndex = tab2.indexOf(tab1[i] ** 2);
  //   if (correctIndex === -1) return false;
  //   tab2.splice(correctIndex, 1);
  // }
  // return true;

  //? 2nd Solution O(n) FIXME: don't check frequency
  // const Map = {};
  // for (nb of tab1) {
  //   Map[nb ** 2] = nb;
  // }

  // for (nbr of tab2) {
  //   if (!Map[nbr]) {
  //     return false;
  //   } else {
  //     delete Map[nbr];
  //   }
  // }
  // return true;

  //* Frequency Counter Pattern O(n)
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (nbr of tab1) {
    frequencyCounter1[nbr] = (frequencyCounter1[nbr] || 0) + 1;
  }

  for (nbr2 of tab2) {
    frequencyCounter2[nbr2] = (frequencyCounter2[nbr2] || 0) + 1;
  }
  for (keys in frequencyCounter1) {
    if (frequencyCounter1[keys] !== frequencyCounter2[keys ** 2]) return false;
  }
  return true;
};

const output = same([1, 2, 3], [4, 1, 9]);
console.log(output);
