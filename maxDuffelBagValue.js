function maxDuffelBagValue(cakeTypes, weightCapacity) {

  let maxValuesAtCapacity = new Array(weightCapacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
    let currentMax = 0;

    // Using for loop instead of forEach so you can break the loop
    for (let j = 0; j < cakeTypes.length; j++) {
      let cake = cakeTypes[j];

      // If cake has weight zero but a positive value, the value that can be stolen is Infinity
      if (cake.weight === 0 && cake.value !== 0) return Infinity;

      if (cake.weight <= currentCapacity) {
        let maxValueUsingCake = cake.value + maxValuesAtCapacity[currentCapacity - cake.weight];
        currentMax = Math.max(maxValueUsingCake, currentMax);
      }
      
      maxValuesAtCapacity[currentCapacity] = currentMax;
      
    }
  }

  return maxValuesAtCapacity[weightCapacity];
}