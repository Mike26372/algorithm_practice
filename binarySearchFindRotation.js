function rollDie(array) {
  let roll = Math.random();

  return findRotation(array, roll);
}

function findRotation(array, target) {
  let beg = 0;
  let end = array.length - 1;
  let midpoint;

  if (target <= array[0]) return 0;

  while (beg < end) {
    midpoint = beg + Math.floor((end - beg) / 2);

    if (target > array[midpoint]) {
      beg = midpoint;
    } else {
      end = midpoint;
    }
    if (beg + 1 === end) break;
  }
  console.log(target);
  return end;
}

var tests = [
  [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
  [0.1, 0.4, 0.6, 1.0],
  [0.5, 1.0, 1.0]
];

tests.forEach(test => {
  console.log(rollDie(test));
});