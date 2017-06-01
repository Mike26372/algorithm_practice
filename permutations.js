function createPermutations(str) {
  let permutations = new Set();
  let charactersArray = str.split('');
  // create function to recuse and calculate permutations
  let findPermutations = function (available = [], outputStr = '') {
    // base case: no more letters available
    if (available.length === 0) {
      permutations.add(outputStr);
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
  return [...permutations];
}

function swapPermutations(str) {
  let chars = str.split('');
  let permutations = [];

  let findPermutations = function(arr, curr = 0, end = arr.length - 1) {
    if (curr === end) {
      permutations.push(arr.slice().join(''));
    }

    for (var i = curr; i < end + 1; i++) {
      let swappedArr = swap(arr, curr, i);
      findPermutations(arr, curr + 1, end);
    }
  };

  findPermutations(chars);
  return permutations;

}



function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

let test = createPermutations('ABC');
console.log(test);

let swapTest = swapPermutations('ABC');
console.log(swapTest);