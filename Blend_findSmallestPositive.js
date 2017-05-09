function findSmallestPositive(array) {
  let length = array.length;
  let minimum = 1;

  for (let i = 0; i < length; i++) {
    while (array[i] > 0 && array[i] <= length && /* array[i] !== i + 1 && */ array[i] !== array[array[i] - 1]) {
      let temp = array[i];
      array[i] = array[temp - 1];
      array[temp - 1] = temp;
    }
  }

  console.log(array);

  for (let j = 0; j < length; j++) {
    if (array[j] === minimum) {
      minimum++;
    } else {
      return minimum;
    }
  }

  return minimum;
}

console.log(findSmallestPositive([3, 4, -1, 1]));
console.log(findSmallestPositive([1, 2, 3]));
console.log(findSmallestPositive([0, 2, 1]));
console.log(findSmallestPositive([-4, -2, -3, -1]));
console.log(findSmallestPositive([0, 0, 0, 0]));
console.log(findSmallestPositive([1, 1, 2, 3]));