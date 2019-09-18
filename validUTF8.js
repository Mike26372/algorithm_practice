/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  let numBytes = 0;

  let mask1 = 1 << 7;
  let mask2 = 1 << 6;

  for (let i = 0; i < data.length; i++) {
    let num = data[i];

    let mask = 1 << 7;
    if (numBytes === 0) {

      while (mask & num) {
        numBytes += 1;
        mask = mask >> 1;
      }

      if (numBytes === 0) {
        continue;
      }

      if (numBytes === 1 || numBytes > 4) {
        return false;
      }
    } else {
      if (!(num & mask1 && !(num & mask2))) {
        return false;
      }
    }
    numBytes -= 1;
  }
  return numBytes <= 0;
};