// const nums = [1,0,1,1,0,1]
// const nums = [1, 1, 0, 1, 1, 1]
//time limit
// const nums = [1,1,...,1,1,1]
var findMaxConsecutiveOnes = function (nums) {
  if (nums.length < 2) {
    return nums[0] === 1 ? 1 : 0
  }
  //case all 1
  const check = nums.every(item => item === 1)
  if (check) return nums.length
  //case all 0
  const checkZero = nums.every(item => item === 0)
  if (checkZero) return 0
  let p1 = 0
  let p2 = 1
  let max = 0
  while (p2 <= nums.length) {
    if (nums[p1] === 0) {
      //0
      console.log(p1)
      p1++
      p2++
    } else {
      // 1
      if (max < nums.slice(p1, p2).length) {
        max = nums.slice(p1, p2).length
      }
      if (nums[p2] === 0) {
        p1 = p2 + 1
        p2 = p2 + 2
      } else {
        p2++
      }
    }
  }
  return max
}

console.log(findMaxConsecutiveOnes(nums))
