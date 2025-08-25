// const arr = [1, 1, 4, 2, 1, 3]
// const arr = [5,1,2,3,4]
const arr = [1,2,3,4,5]

var heightChecker = function (heights) {
  const newArr = [...heights].sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < heights.length; i++) {
    if (newArr[i] !== heights[i]) count++
  }
  return count
}

console.log(heightChecker(arr))
