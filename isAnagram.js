function isAnagram(str1, str2) {
  var floor = ('a').charCodeAt(0);
  var solutions = new Array(26).fill(0);

  for (var i = 0; i < str1.length; i++) {
    var index = str1.charCodeAt(i) - floor;
    solutions[index]++;
  }  
  for (var j = 0; j < str2.length; j++) {
    var index = str2.charCodeAt(j) - floor;
    solutions[index]--;
  } 

  console.log(solutions);
  return solutions.reduce((acc, curr) => acc && curr === 0, true);
}

console.log(isAnagram('abcd', 'dcba'));
