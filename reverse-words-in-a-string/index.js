var reverseWords = function (s) {
  const newString = s.trim()
  const arrString = newString.split(' ')
  const reverseArr = arrString.filter(item => item !== '')
  return reverseArr.reverse().join(" ")
}

const s = "  hello world  "
console.log(reverseWords(s))
