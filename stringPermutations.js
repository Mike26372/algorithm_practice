function stringPermutations(string) {
  var results = [];
  var strArray = string.split('');
  var len = string.length;

  function recurse(input, output = []) {
    if (output.length === len) results.push(output.join(''));

    input.forEach((letter, ind) => {
      let temp = input.slice();
      let current = temp.splice(ind, 1);
      let result = output.slice();
      result = [...output, letter];
      recurse(temp, result);
    });

  }

  recurse(strArray);
  console.log(results.length);
  return results;
}

console.log(stringPermutations('abcd'));