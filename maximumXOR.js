/**
 * @param {number[]} nums
 * @return {number}
 */
let INT_SIZE = 32;

class Node {
  constructor() {
    this.value = 0;
    this.child = [null, null];
  }
}

class Trie {
  constructor() {
    this.t = new Node();
  }

  insert(key) {
    let current = this.t;

    for (let i = INT_SIZE - 1; i >= 0; i--) {
      const childKey = (key & (1 << i)) >= 1 ? 1 : 0;

      if (!current.child[childKey]) {
        current.child[childKey] = new Node();
      }
      current = current.child[childKey];
    }

    current.value = key;
  }

  find(key) {
    let current = this.t;

    for (let i = INT_SIZE - 1; i >= 0; i--) {
      const currentBit = (key & (1 << i)) >= 1 ? 1 : 0;

      if (current.child[1 - currentBit]) {
        current = current.child[1 - currentBit];
      } else if (current.child[currentBit]) {
        current = current.child[currentBit];
      }
    }

    return current.value;
  }
}

var findMaximumXOR = function(nums) {
  if (nums.length <= 1) return 0;

  let trie = new Trie();
  let max = -Infinity;

  trie.insert(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i] ^ trie.find(nums[i]));

    trie.insert(nums[i]);
  }

  return max;
};

// var findMaximumXOR = function(nums) {
//     if (nums.length === 1) return 0;

//     let max = -Infinity;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i === j) continue;
//             max = Math.max(max, nums[i] ^ nums[j])
//         }
//     }

//     return max;
// };
