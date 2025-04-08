// var moveZeroes = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[j] !== 0) {
//           let temp = nums[i];
//           nums[i] = nums[j];
//           nums[j] = temp;
//           break;
//         }
//       }
//     }
//   }
// }
// const nums = [0, 1, 0, 3, 12];
// moveZeroes(nums);
// console.log(nums);

//anagram la Một từ hoặc cụm từ được thực hiện bằng cách sử dụng các chữ cái của một từ hoặc cụm từ khác theo một thứ tự khác

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  //sort 2 string lai theo thu tu chu cai
  let arrS = s.split('')
  let arrT = t.split('')

  arrS = arrS.sort()
  arrT = arrT.sort()

  //check neu s[i] === t[j] => true
  for (let i = 0; i < arrS.length; i++) {
    if(arrS[i] !== arrT[i]) return false    
  }
  return true
}

const s = 'anagram'
const t = 'nagaram'

isAnagram(s, t)
