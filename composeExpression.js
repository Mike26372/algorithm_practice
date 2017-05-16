function composeExpression(digits, target) {
  'use strict'
  let result = [];
  let digitsArray = getNumberPermutations(digits);
  let digitsLength = digitsArray.length;
  let equations = [];
  
  for (let x = 0; x < digitsLength; x++) {
    equations = equations.concat(getEquationPermutations(digitsArray[x]));
  }
  
  let rpnEquations = [];
  let equationsLength = equations.length;
  
  for (let j = 0; j < equationsLength; j++) {
    if ( evaluateRPN( convertToRPN( equations[j] ) ) === target) {
      result = result.concat([equations[j].join('')]);
    }
  }
  
  // return result.sort();
  return result;
}

function getNumberPermutations(string) {
  'use strict'
  var permutations = [];

  var recurse = function(nums, output) {
    var output = output || [];
    if (!nums.length) {
      permutations.push(output);
    }

    for (let i = 0; i < nums.length; i++) {
      let temp = output.slice();
      let newValue = nums.substr(0, i + 1);
      if (newValue.length > 1 && newValue[0] === '0') {
        continue;
      }
      let rest = nums.substr(i + 1);
      if (output[output.length - 1] === '0') {
        recurse(rest, temp);
      } else {
        temp.push(newValue);
        recurse(rest, temp);
      }
    }
  };
  recurse(string);
  return permutations;
}

function getEquationPermutations(equation) {
 'use strict';
  let operators = ['*', '+', '-'];
  let operatorsLength = operators.length;
  let result = [];
  
  var recursePermutations = function(digits, output) {
    var output = output || [];
    var current = digits[0];
    if (digits.length <= 1) {
      let temp = [...output, current];
      result.push(temp);
      return;
    }
    
    for (let i = 0; i < operatorsLength; i++) {
      let operator = operators[i];
      var remaining = digits.slice(1);
      let outputCopy = [...output, current, operator];
      recursePermutations(remaining, outputCopy);
    }
  };
  recursePermutations(equation);
  return result;
}

function convertToRPN(equation) {
  'use strict'
  let postFix = [];
  let operators = [];

  let len = equation.length;
  let index = 0;

  while (index < len) {
    let current = equation[index];
    if (current === ' ' || current === '\t') {
      index++;
      continue;
    }


    if (isOperator(current)) {
      while (operators && precedence(operators[operators.length - 1], current)) {
        let temp = operators.pop();
        postFix.push(temp);
      }
      operators.push(current);
      index++;
    } else {
      postFix.push(current);
      index++;
    }
  }

  while (operators.length) {
    let temp = operators.pop();
    postFix.push(temp);
  }

  return postFix;
}

function evaluateRPN(equation) {
  'use strict'
  let operands = [];
  let equationLength = equation.length;
  for (let x = 0; x < equationLength; x++) {
    if (isOperator(equation[x])) {
      let val2 = parseInt(operands.pop(), 10);
      let val1 = parseInt(operands.pop(), 10);
      let op = equation[x];
      if (op === '+') {
        operands.push(val1 + val2);
      } else if (op === '-') {
        operands.push(val1 - val2);
      } else if (op === '*') {
        operands.push(val1 * val2);
      } else if (op === '/') {
        operands.push(val1 / val2);
      }
    } else {
      operands.push(equation[x]);
    }
  }
  return operands.pop();
}

function isOperator (c) {
  return (c === '+' || c === '-' || c === '*' || c === '/');
}

// returns true if op1 has higher/equal precedence
// compared to op2
function precedence (op1, op2) {
  if (op1 === '*' || op1 === '/') {
    return true;
  }

  if (op1 === '+' || op1 === '-') {
    if (op2 === '+' || op2 === '-') {
      return true;
    }
  }

  return false;
}


var test = '5000060000';
var answer = getNumberPermutations(test);
var equations = [];
console.log(answer);
answer.forEach(answer => equations = equations.concat(getEquationPermutations(answer)));
console.log(equations);
answer = convertToRPN(answer);
console.log(answer);
answer = evaluateRPN(answer);
console.log(answer);


// console.log(composeExpression('11', 11)); 