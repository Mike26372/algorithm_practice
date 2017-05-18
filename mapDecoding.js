function mapDecoding(message) {
  var length = message.length;
  var solutions = new Array (length + 1).fill(0);
  solutions[0] = 1;
  solutions[1] = 1;
  
  if (message.length === 1 && (parseInt(message, 10) <= 0 || parseInt(message, 10) > 26)) return 0;
  
  for (var i = 2; i < solutions.length; i++) {
    var currentNum = parseInt(message[i - 1], 10);
    var lastTwoNums = parseInt(message[i - 2] + message[i - 1], 10) || 0;
    console.log(currentNum, lastTwoNums);
    
    if (!validateEncoding(lastTwoNums) && !validateEncoding(currentNum)) return 0;
    if (validateEncoding(currentNum)) solutions[i] += solutions[i - 1]
    if (validateEncoding(lastTwoNums) && message[i - 2] !== '0') solutions[i] += solutions[i - 2]
  }
  console.log(solutions);
  return solutions[solutions.length - 1] % (Math.pow(10, 9) + 7);
}

function mapDecodingConstantSpace(message) {
  var length = message.length;
  
  if (message.length === 1 && (parseInt(message, 10) <= 0 || parseInt(message, 10) > 26)) return 0;
  
  var prev = 1;
  var current = 1;
  var divisor = 1000000007;
  
  for (var i = 2; i < length + 1; i++) {
    var currentNum = parseInt(message[i - 1], 10);
    var lastTwoNums = parseInt(message[i - 2] + message[i - 1], 10) || 0;
    var newPrevious = current;
    var temp = 0;
    if (!validateEncoding(lastTwoNums) && !validateEncoding(currentNum)) return 0;
    if (validateEncoding(currentNum)) temp += current;
    if (validateEncoding(lastTwoNums) && message[i - 2] !== '0') temp += prev;
    current = temp;
    prev = newPrevious;
  }
  return current % divisor;
}

function validateEncoding(n) {
  return (n <= 26 && n > 0);
}

console.log(mapDecodingConstantSpace("1221112111122221211221221212212212111221222212122221222112122212121212221212122221211112212212211211"));