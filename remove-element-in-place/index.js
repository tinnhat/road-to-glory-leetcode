//in place là k thay đổi space của mảng -> xử lý trên dữ liệu đầu vào 

const removeElement = function (nums, val) {
  //swap nums[i] cho phần tử cuối mảng
  let i = 0
  let ySwap = 1
  const count = nums.filter(x => x == val).length
  while (i < nums.length) {
    let check = false
    if (nums[i] === val) {
      if (nums[i] === nums[nums.length - ySwap]) {
        check = true
        ++ySwap
      } else {
        //swap
        ;[nums[i], nums[nums.length - ySwap]] = [nums[nums.length - ySwap], nums[i]]
        ++ySwap
      }
    }
    if (ySwap > count) {
      //leet code env
        // return nums.length - count
        //nodejs local env
        return nums.slice(0, nums.length - count)
    }
    if (check === false) {
      i++
    }
  }
}
// const nums = [0, 1, 2, 2, 3, 0, 4, 2]
const nums = [3, 2, 2, 3]
console.log(removeElement(nums, 3))
