function balancedBrackets(string) {
  var stack = [];
  var open = {'[': 1, '{': 1, '(': 1};
  var close = {']': 1, '}': 1, ')': 1};
  var opposite = {']': '[', '}': '{', ')': '('};


  for (let i = 0; i < string.length; i++) {

    let current = string[i];
    if (open[current]) {
      stack.push(current);
    }

    if (close[current]) {
      if (stack[stack.length - 1] === opposite[current]) stack.pop();
      else return false;
    } 

  }

  return stack.length < 1;
}

var tests = [
  '[({})]',
  '{[(])}',
  '{{[[(())]]}}',
];

tests.forEach(test => console.log(balancedBrackets.call(this, test)));

balancedBrackets(tests[0]);