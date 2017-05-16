function convertToRPN (equation) {
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

function isOperator(s) {
  return (s === '+' || s === '-' || s === '*' || s === '/');
}

function precedence(opr1, opr2) {
  if (opr1 === '*' || opr1 === '/') {
    return true;
  }

  if (opr1 === '+' || opr1 === '-') {
    if (opr2 === '+' || opr2 === '-') {
      return true;
    }
  }

  return false;
}

var ans = convertToRPN('3+6*5-1/2');
console.log(ans);
