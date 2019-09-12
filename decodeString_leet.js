/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = [[1, ""]];
  let num = "";

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];

    if (isDigit(curr) >= 0) {
      num += curr;
      continue;
    }

    if (curr === "[") {
      stack.push([num, ""]);
      num = "";
      continue;
    }

    if (curr === "]") {
      let popped = stack.pop();

      if (stack.length > 0) {
        for (let j = 0; j < parseInt(popped[0]); j++) {
          stack[stack.length - 1][1] += popped[1];
        }
      }
      continue;
    }

    stack[stack.length - 1][1] += curr;
  }

  return stack.pop()[1];
};

function isDigit(str) {
  const num = parseInt(str);
  if (isNaN(num)) {
    return -1;
  }
  return num;
}

/**
 * https://leetcode.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = [];
  let result = "";
  let num = "";

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];

    if (isDigit(curr) >= 0) {
      num += curr;
      continue;
    }

    if (curr === "[") {
      stack.push([num, ""]);
      num = "";
      continue;
    }

    if (curr === "]") {
      let popped = stack.pop();

      if (stack.length > 0) {
        for (let j = 0; j < parseInt(popped[0]); j++) {
          stack[stack.length - 1][1] += popped[1];
        }
      } else {
        for (let k = 0; k < parseInt(popped[0]); k++) {
          result += popped[1];
        }
      }
      continue;
    }

    if (stack.length > 0) {
      stack[stack.length - 1][1] += curr;
      continue;
    }

    result += curr;
  }

  return result;
};

function isDigit(str) {
  const num = parseInt(str);
  if (isNaN(num)) {
    return -1;
  }
  return num;
}
