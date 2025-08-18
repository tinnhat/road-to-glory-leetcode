const nums = [3, 1, 2, 4]
var sortArrayByParity = function (nums) {
  //c1
  // const oddArr = nums.filter(item => item % 2 !== 0)
  // const otherArr = nums.filter(item => item % 2 === 0)
  // return otherArr.concat(oddArr)

  //c2
  const oddArr = []
  const otherArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      otherArr.push(nums[i])
    } else {
      oddArr.push(nums[i])
    }
  }
  return otherArr.concat(oddArr)
}
sortArrayByParity(nums)
