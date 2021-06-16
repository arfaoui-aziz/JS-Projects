//* Pattern
// const outer = (input) => {
//   let outerScopedVariable = [];
//   const helper = (helperInput) => {
//     //modify the outerScopedVariable
//     helper(helperInput--);
//   };
//   helper(input);
//   return outerScopedVariable;
// };

const countOddsInArray = (array) => {
  let oddsArray = [];
  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) oddsArray.push(helperInput[0]);
    helper(helperInput.slice(1));
  };
  helper(array);
  return oddsArray;
};

//! Pure Recursion
// const countOddsInArray = (array) => {
//   let oddsArray = [];
//  if(array.length === 0) return oddsArray;
//  if(array[0] % 2 !== 0) oddsArray.push(array[0])
//  oddsArray = oddsArray.concat(countOddsInArray(array.slice(1)));
//  return oddsArray;
// };

const output = countOddsInArray([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
]);

console.log(output);
