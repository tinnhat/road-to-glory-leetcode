const arr = [1, 0, 2, 3, 0, 4, 5, 0]
var duplicateZeros = function (arr) {
  const defautlLength = arr.length
  let pos = 0
  while (pos < defautlLength) {
    if (arr[pos] === 0) {
      arr.splice(pos, 0, 0)
      arr.pop()
      pos += 2
      
    } else {
      pos++
    }
  }
}

console.log(duplicateZeros(arr))
