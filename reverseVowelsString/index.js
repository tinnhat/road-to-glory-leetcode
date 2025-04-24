const char = 'leetcode'
var reverseVowels = function (s) {
  const arrSplitString = s.split('')
  let left = 0
  let right = arrSplitString.length - 1
  while (left < right) {
    if (checkIsVowel(arrSplitString[left])) {
      if (checkIsVowel(arrSplitString[right])) {
        if (arrSplitString[left] !== arrSplitString[right]) {
          //swap
          ;[arrSplitString[left], arrSplitString[right]] = [
            arrSplitString[right],
            arrSplitString[left],
          ]
        }
        left++
        right--
      } else {
        right--
      }
    } else {
      left++
    }
  }
  return arrSplitString.join('')
}

const checkIsVowel = char => {
  if (
    char.toLowerCase() === 'a' ||
    char.toLowerCase() === 'e' ||
    char.toLowerCase() === 'i' ||
    char.toLowerCase() === 'o' ||
    char.toLowerCase() === 'u'
  ) {
    return true
  }
  return false
}

console.log(reverseVowels(char))

//"euston saw I was not SuE."
