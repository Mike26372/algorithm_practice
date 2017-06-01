function strstr(s, x) {
  var patternHash = createHash(x, 199);
  var patternLength = x.length;

  var searchHash = createHash(s.substr(0, patternLength), 199);
  if (patternHash === searchHash) {
    if (s.substr(0, patternLength) === x) {
      return 0; 
    }
  }

  for (var i = patternLength; i < s.length; i++) {
    searchHash = rollingHash(s[i - patternLength], s[i], searchHash, patternLength, 199);
    
    if (patternHash === searchHash) {
      if (compareStrings(i - patternLength + 1, s, x)) {
        return i - patternLength + 1;
      }
    }
  }

  return -1;
}

function createHash(str, prime) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * Math.pow(prime, i);
  }
  return hash;
}

function rollingHash(remove, add, hash, length, prime) {
  hash -= remove.charCodeAt(0);
  hash /= prime;
  hash += ( add.charCodeAt(0) * Math.pow(prime, length - 1) );
  return hash;
}

function compareStrings(start, str, pattern) {
  if (str[start] !== pattern[0]) return false;
  if (str[start + pattern.length - 1] !== pattern[pattern.length - 1]) return false;
  for (var j = start; j < start + pattern.length; j++) {
    if (str.charCodeAt(j) !== pattern.charCodeAt(j - start)) return false;
  }
  return true;
}