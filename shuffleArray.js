function shuffleArray(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    // find random index between current index and end of array
    let shuffleIndex = i + Math.floor(Math.random() * len - i);
    // swap current item with random index
    let temp = arr[shuffleIndex];
    arr[shuffleIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

var test = Array.from(new Array(10), (val, ind) => ind + 1);
console.log(test);
var ans = shuffleArray(test);
console.log(ans);