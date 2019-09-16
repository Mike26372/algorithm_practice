/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
  const stk = [];

  for (let i = 0; i < expression.length; i++) {
    let c = expression[i];
    let res;

    if (c === "{") {
      stk.push(c);
      continue;
    } else if (c === "}") {
      res = new Set();
      // Create a set of all within brackets
      while (stk[stk.length - 1] !== "{") {
        // res.add(stk.pop());
        res = new Set([...stk.pop(), ...res]);
        console.log("RES AFTER: ", res);
        if (stk[stk.length - 1] === ",") {
          stk.pop();
        }
      }
      stk.pop();

      // If earlier bracket has already been turned into a set, merge the two together
      if (
        stk.length &&
        stk[stk.length - 1] !== "{" &&
        stk[stk.length - 1] !== ","
      ) {
        let tmp = new Set();
        for (let s1 of stk.pop()) {
          for (let s2 of res) {
            console.log("res: ", res);
            console.log("s1: ", s1);
            console.log("s2: ", s2);

            tmp.add(s1 + s2);
          }
        }
        res = tmp;
      }
      stk.push(res);
      continue;
    } else if (c === ",") {
      stk.push(c);
      continue;
    } else {
      res = new Set();

      if (
        stk.length &&
        stk[stk.length - 1] !== "{" &&
        stk[stk.length - 1] !== ","
      ) {
        for (let s of stk.pop()) {
          res.add(s + c);
        }
      } else {
        res.add(c);
      }

      stk.push(res);
    }
  }

  while (stk.length > 1) {
    stk[0] = new Set(...stk[0], stk.pop());
  }
  return [...stk.pop()].sort();
};

const tests = [
  //
  "{a,b}{c,d}",
  "{a,b}{c,{d,e}}",
  "{{a,z},a{b,c},{ab,z}}"
];
const ans = [
  ["ac", "ad", "bc", "bd"],
  ["ac", "ad", "ae", "bc", "bd", "be"],
  ["a", "ab", "ac", "z"]
];

tests.forEach((test, idx) => {
  const result = braceExpansionII(test);
  console.log("RESULT: ", result);
  console.assert(JSON.stringify(result) === JSON.stringify(ans[idx]));
});
