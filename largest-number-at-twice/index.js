const nums = [3, 6, 1, 0]
// const nums = [1, 2, 3, 4]
// const nums = [1, 2, 2, 4]

var dominantIndex = function (nums) {
  // tìm idx số lớn nhất
  const maxNumber = Math.max(...nums)
  // x2 các phần tử trong mảng
  const idx = nums.findIndex(item => item === maxNumber)
  let check = 0
  for (let i = 0; i < nums.length; i++) {
      if (i !== idx && nums[idx] < nums[i] * 2) {
          check++
      }
  }
  if (check > 0) {
      return -1
  }
  return idx
}
console.log(dominantIndex(nums))
