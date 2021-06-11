const same = (tab1, tab2) => {
  if (tab1.length !== tab2.length) return false;

  //! naive Solution O(n^2)
  for (let i = 0; i < tab1.length; i++) {
    let correctIndex = tab2.indexOf(tab1[i] ** 2);
    if (correctIndex === -1) return false;
    tab2.splice(correctIndex, 1);
  }
  return true;

};

const output = same([1, 2, 3], [4, 1, 9]);
console.log(output);

// loop over 1st tab
// compare first element in tab 1 to all elements of tab2
// return false if dosen"t exist

//namel map feha el tab lowel wel square mteou w ncompari lel map
