function nQueens(n) {
  const done = (1 << n) - 1;
  let count = 0;

  function recurse(ld, col, rd) {
    if (col === done) {
      count++;
      return;
    }

    let poss = ~(ld | col | rd);

    while (poss & done) {
      const bit = poss & -poss;
      poss -= bit;
      recurse((ld | bit) >> 1, col | bit, (rd | bit) << 1);
    }
  }

  recurse(0, 0, 0);
  return count;
}

const result = nQueens(8);
console.log(result);
