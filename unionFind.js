class UF {
  constructor(num) {
    this.ids = Array.from(new Array(num), (val, ind) => ind);
    this.sizes = new Array(num).fill(1);
  }

  root (i) {
    while (i !== this.ids[i]) {
      i = this.ids[i];
    }
    return i;
  }

  union(a, b) {
    var rootA = this.root(a);
    var rootB = this.root(b);
    
    // Weighted Tree using size array
    if (rootA === rootB) return;
    if (this.sizes[rootA] < this.sizes[rootB]) {
      this.ids[rootA] = rootB;
      this.sizes[rootB] += this.sizes[rootA];
    } else {
      this.ids[rootB] = rootA;
      this.sizes[rootA] += this.sizes[rootB];
    }
    
    // Naive
      // this.ids[rootA] = rootB;
    
    // Lazy -- using tree
      // for (var i = 0; i < this.ids.length; i++) {
      //   if (this.ids[i] === oldID) {
      //     this.ids[i] = newID;
      //   }
      // }
  }

  connected(a, b) {
    return this.root(a) === this.root(b);
  }
}

var connections = [ 
  [4, 3],
  [3, 8],
  [6, 5],
  [9, 4],
  [2, 1],
  [8, 9], // already connected
  [5, 0],
  [7, 2],
  [6, 1],
  [1, 0], // already connected
  [6, 7], // already connected
];

var uf = new UF(10);

connections.forEach(union => {
  var a = union[0];
  var b = union[1];
  if (!uf.connected(a, b)) {
    uf.union(a, b);
    console.log(a, b);
  }
});

console.log(uf.ids);