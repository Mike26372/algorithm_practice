function parseString(string) {
  let len = string.length;
  let parsed = [];
  parsed.push([string[0], 1]);
  
  for (let i = 1; i < len; i++) {
    let current = string.charAt(i);
    let lastParsed = parsed[parsed.length - 1];
    let [parsedString, count] = lastParsed;
    if (parsedString === current) {
      lastParsed[1]++;
    } else {
      parsed.push([current, 1]);
    }
  }

  return parsed.reduce((acc, curr) => {
    let [letter, amt] = curr;
    return `${acc}${amt}${letter}`;
  }, '');
}

console.log(parseString('aaabbccccdd'));