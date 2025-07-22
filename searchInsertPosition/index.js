var searchInsert = function (nums, target) {
  let middlePos = Math.floor(nums.length / 2)
  let tempIndex = 0

  if (nums[middlePos] > target) {
    //left side
    for (let i = 0; i < middlePos; i++) {
      if (nums[i] < target) {
        tempIndex = i + 1
      }
      if (nums[i] === target) return i
    }
  } else {
    //right side
    tempIndex = middlePos
    for (let i = middlePos; i < nums.length; i++) {
      if (nums[i] < target) {
        tempIndex = i + 1
      }
      if (nums[i] === target) return i
    }
  }
  return tempIndex
}
console.log(searchInsert([1, 3, 5, 6], 5))
