const arr = [400]
var replaceElements = function (arr) {
  let i = 0
  const arrResult = []
  while (i < arr.length - 1) {
    let maxArrRight = -Infinity;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > maxArrRight) maxArrRight = arr[j]
    }
    arrResult.push(maxArrRight)
    i++
  }
  arrResult.push(-1)
  return arrResult
}
console.log(replaceElements(arr))
