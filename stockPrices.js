function getMaxProfit(prices) {
  let lowestPriceSoFar = prices[0];
  let maxProfit = prices[1] - lowestPriceSoFar;

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let currentProfit = currentPrice - lowestPriceSoFar;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
    if (currentPrice < lowestPriceSoFar) {
      lowestPriceSoFar = currentPrice;
    }
  }

  return maxProfit;
}

let tests = [
  [10, 4, 6, 7, 8, 12], // 8
  [1, 2, 3, 4, 5, 6], // 5
  [10, 9, 8, 7, 6, 4] // -1
];

tests.forEach(test => {
  console.log(getMaxProfit(test));
});