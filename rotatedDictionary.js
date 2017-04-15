function findRotation(array, beg = 0, end = array.length - 1) {
  let midpoint;
  while (beg < end) {
    //console.log('New loop!');
    //console.log(beg, end);
    midpoint = beg + Math.floor((end - beg) / 2);
    let current = array[midpoint];
    let prev = array[midpoint - 1];
    let next = array[midpoint + 1];
    
    if (!checkAlphabetical(prev, current) && checkAlphabetical(current, next)) {
      return midpoint;
    }

    if (!checkAlphabetical(array[beg], current)) {
      end = midpoint - 1;
    } else {
      beg = midpoint + 1;
    }
  }
  return null;
}

function findRotationIterative(array, beg = 0, end = array.length - 1) {

  while (beg < end) {
    let midpoint = Math.floor(beg + ((end - beg) / 2));

    // Check if current word and first word are in alpha order
    if (checkAlphabetical(array[0], array[midpoint])) {
      // if current word is in alpha order, right portion must contain rotation
      beg = midpoint;
    } else {
      // if current word is not in alpha order, left portion contains rotation
      end = midpoint;
    }

    // If beginning is one less than end, search has converged
    // Return end index
    if (beg + 1 === end) break;

  }
  return end;
}

function checkAlphabetical(word1, word2) {
  for (let i = 0; i < word1.length; i++) {
    if (word1.charCodeAt(i) === word2.charCodeAt(i)) {
      continue;
    } else if (word1.charCodeAt(i) < word2.charCodeAt(i)) {
      break;
    } else {
      return false;
    }
  }
  return true;
}


var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'pedantic'
];

var words2 = [
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'pedantic'
];
console.log(findRotation(words));
console.log(findRotation(words2));

console.log(findRotationIterative(words));
console.log(findRotationIterative(words2));
