// const nums = [2, 1, -1]
const nums = [1,7,3,6,5,6]
// const nums = [1,2,3]

var pivotIndex = function (nums) {
  let i = 0
  while (i < nums.length) {
    let sumLeft = 0
    let sumRight = 0
    for (let j = 0; j < i; j++) {
      sumLeft += nums[j]
    }
    for (let k = nums.length - 1; k > i; k--) {
      sumRight += nums[k]
    }
    if (sumLeft === sumRight) {
      return i
    }
    i++
  }
  return -1
}

console.log(pivotIndex(nums))
