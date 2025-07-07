// const nums = [1, 2, 3, 4, 5, 6, 7],
//   k = 3

const nums = [1, 2],
  k = 5
var rotate = function (nums, k) {
  //c1
  // while(k > 0) {
  //     nums.unshift(nums.pop())
  //     k--
  // }

  //c2
  //chuẩn hoá k để k luôn nằm trong độ dài của nums
  k = k % nums.length
  const array = nums.slice(nums.length - k, nums.length)
  const arrayFirst = nums.slice(0, nums.length - k)
  const arrConcat = [...array, ...arrayFirst]
  for (let i = 0; i < nums.length; i++) {
    nums[i] = arrConcat[i]
  }
  console.log(nums);
  
}
rotate(nums, k)
