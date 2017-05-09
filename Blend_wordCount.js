function wordCount(string, limit) {
  var wordsArray = string.split(' ');
  var maxCount = 0;
  var result = [];

  var wordsObject = wordsArray.reduce((acc, curr) => {
    acc[curr] = acc[curr] || 0;
    acc[curr]++;
    maxCount = Math.max(maxCount, acc[curr]);
    return acc;
  }, {});

  var countObject = {};

  for (let key in wordsObject) {
    let currentValue = wordsObject[key];
    if (countObject.hasOwnProperty(currentValue)) {
      countObject[currentValue].push(key);
    } else {
      countObject[currentValue] = [];
      countObject[currentValue].push(key);
    }
  }

  for (var i = maxCount; i > 0; i--) {
    if (countObject.hasOwnProperty(i)) {
      result = result.concat(countObject[i]);
    }
    if (result.length >= limit) {
      break;
    }
  }

  return result.slice(0, limit);
}

var ans = wordCount('a b c a a a b b d', 2);
console.log(ans);