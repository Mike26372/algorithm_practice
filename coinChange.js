function coinChange (amount, coins) {
  let solutions = new Array(amount + 1).fill(0);
  solutions[0] = 1;

  for (let coin = 0; coin < coins.length; coin++) {
    let currentCoin = coins[coin];
    for (let solution = currentCoin; solution < solutions.length; solution++) {
      solutions[solution] += solutions[solution - currentCoin]; 
    }
  }

  return solutions[solutions.length - 1];
}

console.log(coinChange(4, [1, 2, 3]));
console.log(coinChange(7, [1, 2, 5]));