function getMaxKnapsack(weight, items) {
  var solutions = new Array(weight + 1).fill(0);

  for (let i = 1; i < solutions.length; i++) {
    let currentMax = 0;
    items.forEach(item => {
      let remainingWeight = i - item.weight;
      if (remainingWeight >= 0) {
        currentMax = Math.max(currentMax, item.value + solutions[remainingWeight]);
      }
    });
    solutions[i] = currentMax;
  }
  return solutions[weight];
}

var itemTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

console.log(getMaxKnapsack(capacity, itemTypes)); // 555