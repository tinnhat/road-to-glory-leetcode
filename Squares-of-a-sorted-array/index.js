const nums = [-7,-3,2,3,11]
var sortedSquares = function (nums) {
  return nums
    .map(item => {
      return Math.pow(item, 2)
    })
    .sort((a, b) => a - b)
}
console.log(sortedSquares(nums))
