function possibleSums(coins, quantity) {
  var set = new Set();
  var used = new Array(quantity.length).fill(0);
  
  var findSums = function(used, sum) {
    set.add(sum);
    for (var i = 0; i < used.length; i++) {
      if (used[i] < quantity[i]) {
        var temp = used.slice();
        temp[i] += 1;
        findSums(temp, sum + coins[i]);
      }
    }
  };
  
  findSums(used, 0);
  return set.size;
}

