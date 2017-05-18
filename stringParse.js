function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    var stack = [];
    var index = 0;
    stack.push('');
    while (index < S.length) {
      if (S[index] === '.' || S[index] === '!' || S[index] === '?') {
        stack.push(''); 
      } else {
        stack[stack.length - 1] += S[index];
        //index++;
      }
      index++;
    }
    console.log(stack);
    stack = stack.map(string => string.trim());
    return stack.reduce((acc, curr) => {
        var count = curr.split(' ').length;
        return count > acc ? count : acc;
    }, 0)
}
