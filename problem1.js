/**
  Write a function that takes an array of strings and returns the most commonly occurring string.
**/

const commonString = stringArray => {
  let occurrences = stringArray.map(a => array.filter(b => a === b).length);
  return array[occurrences.indexOf(Math.max(...occurrences))];
};

export default commonString