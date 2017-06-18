function wordLadder(beginWord, endWord, wordList) {
  var combinedList = [beginWord, ...wordList];
  var len = combinedList.length;
  var wordMatrix = new Array(len).fill(0).map(row => new Array(len).fill(0));
  
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (i === j || combinedList[i] === combinedList[j]) continue;
      
      if (isOneLetterDiff(combinedList[i], combinedList[j])) {
        wordMatrix[i][j] = 1;
      }
    }
  }
  
  var distances = new Array(len).fill(Infinity);
  distances[0] = 0;
  var visited = new Array(len).fill(false);
  
  for (var k = 0; k < len; k++) {
    var minDistIndex = getMinDistanceIndex(distances, visited);
    if (minDistIndex === undefined) continue;
    visited[minDistIndex] = true;
    for (var l = 0; l < len; l++) {
      if (wordMatrix[minDistIndex][l] && !visited[l]) {
        distances[l] = Math.min(distances[l], distances[minDistIndex] + wordMatrix[minDistIndex][l]);
      }
    }
  }
  var targetIndex = combinedList.indexOf(endWord);
  if (distances[targetIndex] === Infinity) return 0;
  return distances[targetIndex] ? distances[targetIndex] + 1 : 0;
}

function isOneLetterDiff(word, target) {
  var differenceFound = false;
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== target[i]) {
      if (differenceFound) 
        return false;
      else
        differenceFound = true;
    }
  }
  return true;
}

function getMinDistanceIndex(distances, visited) {
  var min = Infinity;
  var minIndex;
  for (var i = 0; i < distances.length; i++) {
    if (distances[i] !== Infinity && !visited[i]) {
      if (distances[i] < min) {
        min = distances[i];
        minIndex = i;
      }
    }
  }
  return minIndex;
}
