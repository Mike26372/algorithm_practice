function permutations(str) {
  const result = [];
  const chars = str.split("");
  const len = chars.length - 1;

  function recurse(arr, curr = 0) {
    if (curr === len) {
      result.push(arr.slice().join(''));
      return;
    }

    for (let i = curr; i <= len; i++) {
      swap(arr, curr, i);
      recurse(arr.slice(), curr + 1);
    }
  }

  recurse(chars);
  return result;
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

const result = permutations("ABC");
console.log(result);
