function decodeString(s) {
  var stringStack = [''];
  var numStack = [];
  
  for (var i = 0; i < s.length; i++) {
    var curr = s[i];
    if (curr === '[') {
      continue;
    } else if (isNumber(curr)) {
      var index = i;
      while (isNumber(s[index])) index++;
      numStack.push(parseInt(s.substr(i, index), 10));
      stringStack.push('');
      i = index - 1;
    } else if (curr === ']') {
      var num = numStack.pop();
      var str = stringStack.pop();
      stringStack[stringStack.length - 1] += multiplyString(num, str);
    } else {
      stringStack[stringStack.length - 1] += curr;
    }
  }
  return stringStack.join('');
}

function isNumber(s) {
  return !isNaN(parseInt(s, 10));      
}

function multiplyString(num, str) {
  var result = '';
  for (var i = 0; i < num; i++) {
    result += str;
  }
  return result;
}