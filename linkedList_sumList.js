function sumLists(num1, num2) {
  let current1 = num1;
  let current2 = num2;
  let result = 0;
  let digit = 1;
  let carry = 0;

  while (current1 || current2) {
    // Get current sum of digits
    let currentSum = carry;
    if (current1) {
      currentSum += current1.value;
    }
    if (current2) {
      currentSum += current2.value;
    }
    // Calculate new digit and carry
    let newDigit = currentSum % 10;
    carry = Math.floor(currentSum / 10);

    // Add new digit amount to result, multiply by digit factor
    result += (newDigit * digit);

    // Increase digit factor and move to next node
    digit *= 10;
    if (current1) {
      current1 = current1.next;
    }
    if (current2) {
      current2 = current2.next;
    }
  }
  
  // If carry still exists after lists have expire, add it to result for last digit factor
  if (carry > 0) {
    result += (digit * carry);
  }

  return result;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

var num1 = new Node(7);
num1.next = new Node(1);
num1.next.next = new Node(6); // 617

var num2 = new Node(5);
num2.next = new Node(9);
num2.next.next = new Node(2); // 295

console.log(num1);
console.log(num2);
console.log(sumLists(num1, num2)); // 912

num2.next.next.next = new Node(1);

console.log(sumLists(num1, num2)); // 1,912
