function sortByAppearanceOrder(text, substrings) {
  var result = [];

  for (var i = 0; i < text.length; i++) {
    for (var j = 0; j < substrings.length; j++) {
      let currSubStr = substrings[j];
      if (text.substr(i, currSubStr.length) === currSubStr) {
        result.push(currSubStr);
        break;
      }
    }
  }
  console.log(result);
  return result;
}

sortByAppearanceOrder('hello there world', ['world', 'hello']);
sortByAppearanceOrder('hello there world hello', ['world', 'hello', 'hello']);