var isPalindrome = function (s) {
  // dùng two pointer
  let posL = 0
  let posR = s.length - 1
  while (posL < posR) {
    if (s[posL] !== s[posR]) {
      return false
    } else {
      posL++
      posR--
    }
  }
  return true
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '');
  const strFormat = cleanStr.toLowerCase();
  let posL = 0;
  let posR = strFormat.length - 1;

  while (posL < posR) {
    if (strFormat[posL] !== strFormat[posR]) {
      // Bỏ ký tự tại posL hoặc posR và kiểm tra phần còn lại
      return (
        isPalindrome(strFormat.slice(posL + 1, posR + 1)) || // Bỏ posL
        isPalindrome(strFormat.slice(posL, posR))            // Bỏ posR
      );
    }
    posL++;
    posR--;
  }
  return true;
};
