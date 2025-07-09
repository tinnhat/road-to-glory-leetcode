var reverseWords = function (s) {
  const newString = s.trim()
  const arrString = newString.split(' ')
  const reverseArr = []
  for (let i = 0; i < arrString.length; i++) {
    const element = arrString[i]
    const formatString = element.split('').reverse()
    reverseArr.push(formatString.join(''))
  }
  return reverseArr.join(' ')
}

const s = "Let's take LeetCode contest"
console.log(reverseWords(s))
