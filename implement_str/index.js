/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const step = needle.length
  for (let index = 0; index < haystack.length; index++) {
    const check = haystack.slice(index, index + step)
    if (check === needle) return index
  }
  return -1
}

const a = "leetcode"
const b = "leeto"
console.log(strStr(a, b))
