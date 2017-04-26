function createPermutations(str) {
  let permutations = [];
  let charactersArray = str.split('');
  // create function to recuse and calculate permutations
  let findPermutations = function (available = [], outputStr = '') {
    // base case: no more letters available
    if (available.length === 0) {
      permutations.push(outputStr);
      return;
    }
    // loop through each available letter and add to output string
    available.forEach((letter, index) => {
      let unusedCharacters = [...available.slice(0, index), ...available.slice(index + 1)];
      findPermutations(unusedCharacters, outputStr + letter);
    });
  };

  // call permutation function before returning
  findPermutations(charactersArray);
  // return results
  return permutations;
}

let test = createPermutations('ABCD');
console.log(test);