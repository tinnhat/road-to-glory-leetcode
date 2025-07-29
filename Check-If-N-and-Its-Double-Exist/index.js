// const arr = [3, 1, 7, 11]
// const arr = [0, 0]
const arr = [2,3,3,0,0]
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] === arr[j] / 2) {
          return true
        }
      }
    }
  }
  return false
}
console.log(checkIfExist(arr))
