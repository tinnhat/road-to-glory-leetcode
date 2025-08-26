// const nums = [4, 3, 2, 7, 8, 2, 3, 1]
const nums = [1,1]
var findDisappearedNumbers = function (nums) {
  //c1
  // let i = 1
  // const result = []
  // while (i <= nums.length) {
  //   const check = nums.includes(i)
  //   if (!check) result.push(i)
  //   i++
  // }
  // return result

  
  //c2
  const arrResult = []
  const newArr = new Array(nums.length).fill(undefined)
  for (let i = 0; i < nums.length; i++) {
    newArr[nums[i] - 1] = nums[i]
  }
  newArr.forEach((item, idx) => {
    if (!item) arrResult.push(idx + 1)
  })
  return arrResult
}
console.log(findDisappearedNumbers(nums))
