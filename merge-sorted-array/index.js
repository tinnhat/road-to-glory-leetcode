//solution chưa tận dụng m
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1
  const arrZeroPosition = []
  nums1.forEach((item, index) => {
    if (item === 0) arrZeroPosition.push(index)
  })
  console.log(arrZeroPosition)
  for (let i = 0; i < arrZeroPosition.length; i++) {
    if (nums2[i] === undefined) {
      nums1[arrZeroPosition[i]] = 0
    } else {
      nums1[arrZeroPosition[i]] = nums2[i]
    }
  }
  nums1.sort((a, b) => a - b)
}
const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3
merge(nums1, m, nums2, n)


//two pointer chạy ngược từ dưới lên *tận dung m vs n
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let index = m + n - 1;

  while (j >= 0) {
    // nums1 val is >
    if (nums1[i] >= nums2[j]) {
      nums1[index] = nums1[i];
      i--;
    } else {
      nums1[index] = nums2[j];
      j--;
    }
    index--;
  }
}