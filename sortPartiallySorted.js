function sortPartiallySorted(nums) {
  // Set all but last 4 bits to 0
  let mask = ~0 << 4;
  // Get 28 sig bits for grouping into buckets
  let curr28bits = mask & nums[0];
  let buckets = new Array(16).fill(0);
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    // If curr 28 sig bits have changed, sort and reset buckets
    if ((curr & mask) !== curr28bits) {
      for (let j = 0; j < buckets.length; j++) {
        for (let k = 0; k < buckets[j] ; k++) {
          results.push(curr28bits | j);
        }
      }

      // Reset buckets for next 28 sig bits set
      buckets = new Array(16).fill(0);
      curr28bits = curr & mask
    }

    buckets[curr & 15] += 1;
  }

  for (let x = 0; x < buckets.length; x++) {
    for (let y = 0; y < buckets[x]; y++) {
      results.push(curr28bits | x)
    }
  }

  return results;
}

const result = sortPartiallySorted([0, 15, 12, 17, 18, 19, 33, 32]);
console.log(result);
