function coinChange(amount, coins) {
  let solutions = new Array(amount + 1).fill(0);
  solutions[0] = 1;

  for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
    let currentCoin = coins[coinIndex];
    for (let solution = currentCoin; solution < solutions.length; solution++) {
      let remainder = solution - currentCoin;
      solutions[solution] += solutions[remainder];
    }
  }

  return solutions[solutions.length - 1];
}




console.log(coinChange(4, [1, 2, 3]));
console.log(coinChange(5, [1, 3, 5]));