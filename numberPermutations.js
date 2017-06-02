function numberPermutations(string) {
  var permutations = [];

  var recurse = function(nums, output = []) {
    if (!nums.length) {
      permutations.push(output);
    }

    for (let i = 0; i < nums.length; i++) {
      let temp = output.slice();
      let newValue = nums.substr(0, i + 1);
      if (newValue.length > 1 && newValue[0] === '0') continue;
      temp.push(newValue);
      let rest = nums.substr(i + 1);
      recurse(rest, temp);
    }
  };

  recurse(string);

  return permutations;
}

function getEquationPermutations(equation) {
  'use strict';
  let operators = ['+', '-', '*'];
  let result = [];
  
  var recursePermutations = function(digits, output) {
    var output = output || [];
    var current = digits[0];
    if (digits.length <= 1) {
      let temp = [...output, current];
      result.push(temp);
      return;
    }
    operators.forEach(operator => {
      var remaining = digits.slice(1);
      let outputCopy = [...output, current, operator];
      recursePermutations(remaining, outputCopy);
    });
  };
  recursePermutations(equation);
  return result;
}

var tests = ['123'];

var permutations = numberPermutations(tests[0]);
// console.log(permutations);

// tests.forEach(test => console.log(numberPermutations(test)));

var equations = permutations.map(test => getEquationPermutations(test));
// console.log(equations);


console.log(numberPermutations('3456237490'));