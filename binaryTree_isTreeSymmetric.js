//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
  
  if (!t) return true;
  
  let queueLeft = [t.left];
  let queueRight = [t.right];
  
  while (queueLeft.length > 0 && queueRight.length > 0) {
    let currLeft = queueLeft.pop();
    let currRight = queueRight.pop();
    
    if (!currLeft && !currRight) continue;
    
    if (currLeft && !currRight || !currLeft && currRight) {
      return false;
    }
    
    if (currLeft.value !== currRight.value) {
      return false;
    }
    
    queueLeft.push(currLeft.left);
    queueLeft.push(currLeft.right);
    queueRight.push(currRight.right);
    queueRight.push(currRight.left);
  }
  
  return true;
}
