/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let l1 = nums1.length;
  let l2 = nums2.length;

  if (l1 > l2) return findMedianSortedArrays(nums2, nums1);

  let low = 0;
  let high = l1;

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((l1 + l2 + 1) / 2) - partitionX;

    let maxLeftL1 = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minRightL1 = partitionX === l1 ? Infinity : nums1[partitionX];
    let maxLeftL2 = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minRightL2 = partitionY === l2 ? Infinity : nums2[partitionY];

    if (maxLeftL1 <= minRightL2 && maxLeftL2 <= minRightL1) {
      if ((l1 + l2) % 2 === 0) {
        return (
          (Math.max(maxLeftL1, maxLeftL2) + Math.min(minRightL1, minRightL2)) /
          2
        );
      } else {
        return Math.max(maxLeftL1, maxLeftL2);
      }
    } else if (maxLeftL1 > minRightL2) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};
