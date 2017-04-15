function findLevenshteinDistance(s1, s2) {
  // construct an array of s1.length + 1 X s2.length + 1;
  let len1 = s1.length;
  let len2 = s2.length;

  // Create array of distances 
  let dist = new Array(len1 + 1).fill(0).map(row => new Array(len2 + 1).fill(0));

  // Initialize first row for s1
  for (let i = 0; i < s1.length + 1; i++) {
    dist[i][0] = i;
  }

  // Initialize first row for s2
  for (let j = 0; j < s2.length + 1; j++) {
    dist[0][j] = j;
  }

  console.log(dist);

  for (let i = 1; i < len1 + 1; i++) {
    for (let j = 1; j < len2 + 1; j++) {
      let cost = 0;
      if (s1[i - 1] !== s2[j - 1]) cost = 1;
      dist[i][j] = minOfThree(dist[i][j - 1] + 1, 
                              dist[i - 1][j] + 1, 
                              dist[i - 1][j - 1] + cost);

    }
  }

  console.log(dist);
  return dist[len1][len2];
}

function minOfThree(a, b, c) {
  return Math.min(a, Math.min(b, c));
}

findLevenshteinDistance('kitten', 'sitting');