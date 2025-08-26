// const nums = [2, 2, 3, 1]
// const nums = [3,2,1]
// const nums = [1,2]
const nums = []
var thirdMax = function (nums) {
  const arrSet = new Set(nums)
  const arrUnique = [...arrSet].sort((a, b) => b - a)
  if (arrUnique.length < 3) {
    return arrUnique[0]
  }
  return arrUnique[2]
}
console.log(thirdMax(nums))
