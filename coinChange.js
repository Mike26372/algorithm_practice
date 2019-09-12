function coinChange (amount, coins) {
  let solutions = new Array(amount + 1).fill(0);
  solutions[0] = 1;

  for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
    let currentCoin = coins[coinIndex];
    for (let solutionIndex = currentCoin; solutionIndex <= solutions.length; solutionIndex++) {
      solutions[solutionIndex] += solutions[solutionIndex - currentCoin]; 
    }
  }

  return solutions[solutions.length - 1];
}

console.log(coinChange(4, [1, 2, 3]));
console.log(coinChange(100, [1, 5, 10, 25, 50, 100]));