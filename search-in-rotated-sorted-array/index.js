// const nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 0
// const nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 3
// const nums = [1],
//   target = 0
const nums = [3,1] ,target = 3

var search = function (nums, target) {
  if (nums.length <= 1) {
    return nums[0] === target ? 0 : -1
  }
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Kiểm tra nửa nào đang sorted
    if (nums[left] <= nums[mid]) {
      // Nửa trái sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // target nằm trong nửa trái
      } else {
        left = mid + 1; // target nằm ở nửa phải
      }
    } else {
      // Nửa phải sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // target nằm trong nửa phải
      } else {
        right = mid - 1; // target nằm trong nửa trái
      }
    }
  }

  return -1;
}

console.log(search(nums, target))
