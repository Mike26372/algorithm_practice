function replaceAt(str, index, char) {
  return str.substr(0, index) + char + str.substr(index + char.length);
}

function reverseString(str, beg, end) {
  
  while (beg < end) {
    let temp = str[beg];
    str = replaceAt(str, beg, str[end]);
    str = replaceAt(str, end, temp);
    beg++;
    end--;
  } 
  return str;
}

function reverseWords(str) {
  let len = str.length;
  // Reverse string
  str = reverseString(str, 0, str.length - 1);
  console.log('Reversed string:', str);

  // Find words separated by spaces and reverse each word back
  let start = 0;
  let end;

  while (start < len) {
    if (str[start] === ' ') {
      start++;
    }

    end = start + 1;
    while (true) {
      if (str[end] === ' ' || end >= len) break;
      end++;
    }
    str = reverseString(str, start, end - 1);
    start = end;
    console.log(str);
  }

  return str;
}

var test = 'The quick brown fox jumped over the lazy hound dog';

console.log(reverseWords(test));