var getRow = function (rowIndex) {
  if (rowIndex < 2) {
    const result = []
    for (let i = 0; i <= rowIndex; i++) {
      result.push(1)
    }
    return result
  } else {
    let result = []
    let i = 2
    let defaultArr = [1, 1]
    while (i <= rowIndex) {
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
}

