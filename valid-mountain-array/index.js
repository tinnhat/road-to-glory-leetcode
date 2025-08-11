// const arr = [0, 3, 2, 1]
// const arr = [3,5,5] 
// const arr = [2,1]
// const arr = [0,2,3,4,5,2,1,0]
// const arr = [0,2,3,3,5,2,1,0]
// const arr = [10,2,3,4,5,2,1,9]
// const arr = [0,2,3,4,5,2,1,9]
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr = [4, 4, 3, 2, 1]
var validMountainArray = function (arr) {
  if (arr.length < 3) return false
  const maxValue = Math.max(...arr)
  const arrMax = arr.filter(value => value === maxValue)
  if (arrMax.length > 1) return false

  const indexMax = arr.lastIndexOf(maxValue)

  const leftArr = [...arr].splice(0, indexMax)
  const rightArr = [...arr].splice(indexMax + 1, arr.length)

  //increase
  for (let i = 0; i < leftArr.length - 1; i++) {
    if (leftArr[i] >= leftArr[i + 1]) return false
  }
  //decrease
  for (let i = 0; i < rightArr.length - 1; i++) {
    if (rightArr[i] <= rightArr[i + 1]) return false
  }

  if (leftArr.length === 0 || rightArr.length === 0) {
    return false
  }
  return true
}

console.log(validMountainArray(arr))
