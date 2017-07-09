//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s, sum) {
  var sum = sum || 0;
  if (t === null) return (s === sum);
  if (!t.right && !t.left) return s === (sum + t.value);
  
  return hasPathWithGivenSum(t.left, s, sum + t.value) || 
    hasPathWithGivenSum(t.right, s, sum + t.value);
}