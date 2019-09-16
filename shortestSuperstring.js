/**
 * @param {string[]} A
 * @return {string}
 */
var shortestSuperstring = function(A) {
  let result = [Infinity, ""];

  function dfs(word, A) {
    if (!A.length) {
      if (word.length < result[0]) {
        result = [word.length, word];
      }
      return;
    }
    A.forEach((comparison, idx) => {
      let rest = [...A.slice(0, idx), ...A.slice(idx + 1)];
      for (let j = 1; j < comparison.length; j++) {
        let cSub = comparison.substring(0, j);
        if (word.endsWith(cSub)) {
          dfs(word + comparison.substring(j), rest);
        }
      }
      dfs(word + comparison, rest.slice());
    });
  }

  A.forEach((word, idx) => {
    dfs(word, [...A.slice(0, idx), ...A.slice(idx + 1)]);
  });

  return result[1];
};
