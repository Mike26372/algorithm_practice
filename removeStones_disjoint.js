/**
 * @param {number[][]} stones
 * @return {number}
 */

class DSU {
  constructor(size) {
    this.size = new Array(size).fill(0);
    this.root = new Array(size).fill(0);
    this.count = size;
    // Initialize root node to self
    for (let i = 0; i < size; i++) {
      this.root[i] = i;
    }
  }

  find(x) {
    const origX = x;
    while (this.root[x] !== x) {
      x = this.root[this.root[x]];
    }

    this.root[origX] = x;
    return x;
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return;

    if (this.size[rootX] <= this.size[rootY]) {
      this.root[rootX] = rootY;
      this.size[rootY]++;
    } else {
      this.root[rootY] = rootX;
      this.size[rootX]++;
    }
    this.count--;
  }
}

var removeStones = function(stones) {
  let len = stones.length;
  let dsu = new DSU(len);

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
        dsu.union(i, j);
      }
    }
  }

  return len - dsu.count;
};
