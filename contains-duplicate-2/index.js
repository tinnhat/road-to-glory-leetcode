// var containsNearbyDuplicate = function (nums, k) {
//   const window = {}

//   for (let i = 0; i < nums.length; i++) {
//     if (window[nums[i]] !== undefined) {
//       console.log(window);

//       if (Math.abs(i - window[nums[i]]) <= k) {

//         console.log(window[nums[i]]);

//         return true
//       }
//     }
//     window[nums[i]] = i
//   }

//   return false
// }

// console.log(containsNearbyDuplicate([1,2,3,1], 3))