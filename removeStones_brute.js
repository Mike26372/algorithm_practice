var removeStones = function(stones) {
  let maxMoves = 0;

  function recurseMoves(target, stonesAvail, moves) {
    // console.log(target, stonesAvail, moves)
    maxMoves = Math.max(moves, maxMoves);
    // if (!stonesAvail.length) return;
    for (let x = 0; x < stonesAvail.length; x++) {
      const current = stonesAvail[x];
      const temp = stonesAvail.slice();
      temp.splice(x, 1);
      if (target[0] === current[0] || target[1] === current[1]) {
        recurseMoves(current, temp, moves + 1);
      }
      recurseMoves(current, temp, moves);
    }
  }

  for (let i = 0; i < stones.length; i++) {
    const unusedStones = stones.slice();
    const target = stones[i];
    unusedStones.splice(i, 1);
    recurseMoves(target, unusedStones, 0);
  }

  return maxMoves;
};
