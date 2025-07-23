// const nums = [12, 345, 2, 6, 7896]
const nums = [555,901,482,1771]
var findNumbers = function (nums) {
  let result = 0
  nums.forEach(item => {
    if (`${item}`.length % 2 === 0) {
      result++
    }
  })
  return result
}
console.log(findNumbers(nums)) 
