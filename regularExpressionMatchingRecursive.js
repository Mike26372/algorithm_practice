function regexMatch (text, pattern) {
  if (text.length === 0 && pattern.length === 0) return true;

  if (text && pattern.length === 0) return false;

  if (pattern.length > 1 && pattern[1] === '*') {
    let remainingText = text;
    let remainingPattern = pattern.substring(2);

    for (var i = 0; i < text.length + 1; i++) {
      if (regexMatch(remainingText, remainingPattern)) return true;

      if (remainingText.length === 0) return false;

      if (pattern[0] !== '.' && pattern[0] !== remainingText[0]) return false;
      
      remainingText = remainingText.substring(1);
    }
  }

  if (text.length === 0 || pattern.length === 0) return false;

  if (text[0] === pattern[0] || pattern[0] === '.') {
    // let remainingText = '';
    // if (text.length >= 2) remainingText = text.substring(1);
    let remainingText = text.substring(1);
    
    // let remainingPattern = '';
    // if (pattern.length >= 2) remainingPattern = pattern.substring(1);
    let remainingPattern = pattern.substring(1);

    return regexMatch(remainingText, remainingPattern);
  }

  return false;
}

var tests = [
  ['aaa', 'a.a'], // true
  ['abc', 'abc'], // true
  ['abcd', 'abc'], // false
  ['abbbd', 'ab*d'], // true
  ['abbbc', 'ab*d'], // false
  ['fabbbc', '.ab*c'], // true
];

tests.forEach(test => console.log(regexMatch.apply(this, test)));