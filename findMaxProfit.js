function findMaxProfit(prices) {
  var currentProfit = -Infinity;
  var currentBuy = prices[0];
  var globalSell = prices[1];
  var globalProfit = globalSell - currentBuy;
  for (let i = 1; i < prices.length; i++) {
    currentProfit = prices[i] - currentBuy;
    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = prices[i];
    }
    if (prices[i] < currentBuy) currentBuy = prices[i];
  }
  return globalProfit;
}

var prices = [10, 7, 5, 8, 11, 9];
var ans = findMaxProfit(prices);
console.log(ans);