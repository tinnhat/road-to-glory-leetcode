var lengthOfLastWord = function (s) {
  const strimWord = s.trim()
  const arr = strimWord.split(' ')
  return arr[arr.length - 1].length
}

const a = "luffy is still joyboy"

console.log(lengthOfLastWord(a))
