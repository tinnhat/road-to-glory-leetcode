const nums = [-1,0,5]

var search = function (nums, target) {
  if (nums.length === 0) {
    return -1
  }
  let low = 0
  let end = nums.length - 1
  let mid = -1
  // truong hop o bien

  while (low <= end) {
    let check = Math.floor((low + end) / 2)
    if (nums[check] < target) {
      low = check + 1
    } else if (nums[check] > target) {
      end = check - 1
    } else {
      mid = check
      return mid
    }
  }
  return mid
}
console.log(search(nums, 2))
