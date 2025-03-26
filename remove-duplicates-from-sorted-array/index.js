var removeDuplicates = function (nums) {
  let count = 0
  let leftPos = 0
  let rightPos = 1
  const positionDuplicate = []
  const positionNotDuplicate = []
  const cloneNums = [...nums]
  while (rightPos < nums.length) {
    if (nums[leftPos] === nums[rightPos]) {
      count++
      positionDuplicate.push(rightPos)
      leftPos = rightPos
      rightPos++
    } else {
      leftPos++
      rightPos++
    }
  }

  console.log(positionDuplicate)
  console.log(nums)

  for (let i = 0; i < nums.length; i++) {
    if (!positionDuplicate.includes(i)) {
      positionNotDuplicate.push(i)
    }
  }

  for (let index = 0; index < positionNotDuplicate.length; index++) {
    nums[index] = cloneNums[positionNotDuplicate[index]]
    console.log('index right', positionNotDuplicate[index])
    console.log('num[index]', index)
    console.log('value', cloneNums[positionNotDuplicate[index]])
    console.log('====')
  }
  console.log('nums');
  

  return nums.length - count
}

// const nums = [0, 1, 2, 2, 3, 0, 4, 2]
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))
console.log(nums)
