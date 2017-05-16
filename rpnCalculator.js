function rpnCalculator(input) {
  var values = input.split(' ');
  var stack = [];
  var operators = new Set();
  operators.add('*').add('/').add('-').add('+');

  for (let i = 0; i < values.length; i++) {
    
    let current = values[i];

    if (!operators.has(current)) {

      let currentInteger = parseInt(current, 10);
      stack.push(currentInteger);

    } else {

      let val2 = stack.pop();
      let val1 = stack.pop();

      if (current === '+') {
        stack.push(val1 + val2);
      } else if (current === '-') {
        stack.push(val1 - val2);
      } else if (current === '*') {
        stack.push(val1 * val2);
      } else if (current === '/') {
        stack.push(val1 / val2);
      }

    }
  }

  let [result] = stack;
  return result;
}

var tests = [
  '3 3 +', // 6
  '2 2 + 3 *', // 12
  '2 2 3 + *', // 10
  '2 2 3 3 / * /', // 1
];
tests.forEach(test => {
  console.log(rpnCalculator(test));
});