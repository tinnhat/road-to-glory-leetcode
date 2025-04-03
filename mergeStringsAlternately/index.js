const word1 = 'abcd'
const word2 = 'pq'

const mergeAlternately = function (word1, word2) {
  //dung 2 pointer
  let result = []
  let max = word1.length > word2.length ? word1.length : word2.length
  let i = 0
  while (i <= max) {
    if (i >= word1.length) {
      result.push('')
    } else {
      result.push(word1[i])
    }

    if (i >= word2.length) {
      result.push('')
    } else {
      result.push(word2[i])
    }
    i++
  }
  return result.join('')
}

console.log(mergeAlternately(word1, word2))
