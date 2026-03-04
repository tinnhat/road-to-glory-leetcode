var generate = function (numRows) {
  const result = []
  if (numRows < 2) {
    result.push([1])
  } else {
    result.push([1], [1, 1])
    for (let i = 2; i < numRows; i++) {
      result.push(getArr(i))
    }
  }
  return result
}

function getArr(numIndex) {
  let result = []
  let i = 2
  let defaultArr = [1, 1]
  while (i <= numIndex) {
    result[0] = 1
    result[i] = 1
    for (let index = 1; index < i; index++) {
      result[index] = defaultArr[index - 1] + defaultArr[index]
    }
    defaultArr = [...result]
    i++
  }
  return result
}

console.log(generate(2))