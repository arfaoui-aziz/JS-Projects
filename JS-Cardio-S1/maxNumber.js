const maxNumber = (nbrArray) => {
  const newNbrArray = nbrArray.join("").split("");
  const nbrMap = {};
  let nbrOccur = 0;
  let nbrMax = 0;

  newNbrArray.forEach((nbr) =>
    nbrMap[nbr] ? nbrMap[nbr]++ : (nbrMap[nbr] = 1)
  );

  for (number in nbrMap) {
    if (nbrMap[number] > nbrOccur) {
      nbrOccur = nbrMap[number];
      nbrMax = number;
    }
  }
  return { [nbrMax]: nbrOccur };
};

const output = maxNumber([0, 1, 2, 22, 12, 120]);
console.log(output);
