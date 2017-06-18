function binSearch(target, probabilities) {

  let beg = 0;
  let end = probabilities.length - 1;

  while (beg < end) {
    let midpoint = beg + Math.floor((end - beg) / 2);
    if (target <= midpoint) {
      end = midpoint;
    } else {
      beg = midpoint;
    }

    if (beg + 1 === end) break;
  }
  console.log(beg, end);
  return beg;
}

var probabilities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tests = [
  .5, // 0
  1, // 0
  8.5, // 8
  9, // 8
  9.9 // 9
];

tests.forEach(test => binSearch(test, probabilities));