function lookAndSay (numString, n) {
  if (n === 0) return numString;

  let current = numString[0];
  let count = 1;
  let result = '';

  for (let i = 1; i <= numString.length; i++) {
    if (numString[i] !== current) {
      result += (count + current);
      current = numString[i];
      count = 1;
    } else {
      count++;
    }
  }

  return lookAndSay(result, n - 1);
}

console.log(lookAndSay('1121', 1));