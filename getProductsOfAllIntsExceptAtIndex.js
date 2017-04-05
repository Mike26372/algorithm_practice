function getProductsOfAllIntsExceptAtIndex(array) {
  var len = array.length;
  if (len < 2) return null;
  
  var result = new Array(len).fill(1);
  // set initial product using first index of array
  var product = 1 * array[0];
  // start looping with second index of array
  for (let i = 1; i < len; i++) {
    result[i] = product;
    product *= array[i];
  }

  // reset product using only last index of array
  product = 1 * array[len - 1];
  // loop back through from end to beginning of array
  for (let j = len - 2; j >= 0; j--) {
    let current = result[j];
    result[j] = current * product;
    product *= array[j];
  }
  console.log(result);
  return result;
}

var test = [0, 7, 3, 4];
getProductsOfAllIntsExceptAtIndex(test);
