function Trie() {
  this.rootNode = {};
}

Trie.prototype.checkPresentAndAdd = function(word) {
  // Set original root node
  let currentNode = this.rootNode;
  // Set default return value as false
    // Change this value to true if character in trie does not exist
  let isNewWord = false;

  for (let i = 0; i < word.length; i++) {
    let current = word[i];

    if (!currentNode.hasOwnProperty(current)) {
      isNewWord = true;
      currentNode[current] = {};
    }

    // Move current node forward to current letter in for loop
    currentNode = currentNode[current];
  }

  if (!currentNode.hasOwnProperty('End')) {
    isNewWord = true;
    currentNode['End'] = {};
  }

  return isNewWord;
};