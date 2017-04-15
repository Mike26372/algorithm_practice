function ballPermutations(N, M, K) {
  var count = 0;
  
  var innerRecurse = function(N, M, K, current) {
    if (N === 0 && M === 0 && K === 0) {
      count++;
      return;
    }
    if (N < 0 || K < 0 || M < 0) return;
    innerRecurse(N - 1, M, K, 'N');
    innerRecurse(N, M, K - 1, 'K');
    if (current !== 'M') innerRecurse(N, M - 1, K, 'M')
  };

  innerRecurse(N, M, K);
  // innerRecurse(N, M, K);
  // innerRecurse(N, M, K);
   
  return count;
}

console.log(ballPermutations(1, 1, 1));

