// const target = 7,
//   nums = [2, 3, 1, 2, 4, 3]
// const target = 4,
//   nums = [1, 4, 4]

// const target = 11,
//   nums = [1, 1, 1, 1, 1, 1, 1, 1]

// const target = 11,
//   nums = [1, 2, 3, 4, 5]

// const target = 697439,
//   nums = [
//     5334, 6299, 4199, 9663, 8945, 3566, 9509, 3124, 6026, 6250, 7475, 5420, 9201, 9501, 38, 5897,
//     4411, 6638, 9845, 161, 9563, 8854, 3731, 5564, 5331, 4294, 3275, 1972, 1521, 2377, 3701, 6462,
//     6778, 187, 9778, 758, 550, 7510, 6225, 8691, 3666, 4622, 9722, 8011, 7247, 575, 5431, 4777,
//     4032, 8682, 5888, 8047, 3562, 9462, 6501, 7855, 505, 4675, 6973, 493, 1374, 3227, 1244, 7364,
//     2298, 3244, 8627, 5102, 6375, 8653, 1820, 3857, 7195, 7830, 4461, 7821, 5037, 2918, 4279, 2791,
//     1500, 9858, 6915, 5156, 970, 1471, 5296, 1688, 578, 7266, 4182, 1430, 4985, 5730, 7941, 3880,
//     607, 8776, 1348, 2974, 1094, 6733, 5177, 4975, 5421, 8190, 8255, 9112, 8651, 2797, 335, 8677,
//     3754, 893, 1818, 8479, 5875, 1695, 8295, 7993, 7037, 8546, 7906, 4102, 7279, 1407, 2462, 4425,
//     2148, 2925, 3903, 5447, 5893, 3534, 3663, 8307, 8679, 8474, 1202, 3474, 2961, 1149, 7451, 4279,
//     7875, 5692, 6186, 8109, 7763, 7798, 2250, 2969, 7974, 9781, 7741, 4914, 5446, 1861, 8914, 2544,
//     5683, 8952, 6745, 4870, 1848, 7887, 6448, 7873, 128, 3281, 794, 1965, 7036, 8094, 1211, 9450,
//     6981, 4244, 2418, 8610, 8681, 2402, 2904, 7712, 3252, 5029, 3004, 5526, 6965, 8866, 2764, 600,
//     631, 9075, 2631, 3411, 2737, 2328, 652, 494, 6556, 9391, 4517, 8934, 8892, 4561, 9331, 1386,
//     4636, 9627, 5435, 9272, 110, 413, 9706, 5470, 5008, 1706, 7045, 9648, 7505, 6968, 7509, 3120,
//     7869, 6776, 6434, 7994, 5441, 288, 492, 1617, 3274, 7019, 5575, 6664, 6056, 7069, 1996, 9581,
//     3103, 9266, 2554, 7471, 4251, 4320, 4749, 649, 2617, 3018, 4332, 415, 2243, 1924, 69, 5902,
//     3602, 2925, 6542, 345, 4657, 9034, 8977, 6799, 8397, 1187, 3678, 4921, 6518, 851, 6941, 6920,
//     259, 4503, 2637, 7438, 3893, 5042, 8552, 6661, 5043, 9555, 9095, 4123, 142, 1446, 8047, 6234,
//     1199, 8848, 5656, 1910, 3430, 2843, 8043, 9156, 7838, 2332, 9634, 2410, 2958, 3431, 4270, 1420,
//     4227, 7712, 6648, 1607, 1575, 3741, 1493, 7770, 3018, 5398, 6215, 8601, 6244, 7551, 2587, 2254,
//     3607, 1147, 5184, 9173, 8680, 8610, 1597, 1763, 7914, 3441, 7006, 1318, 7044, 7267, 8206, 9684,
//     4814, 9748, 4497, 2239,
//   ]

// var minSubArrayLen = function (target, nums) {
//   // su dung 2 pointer
//   // p1 bat dau tu dau mang
//   // p2 bat dau sau p1
//   // 1 bien flag de check target
//   //2 vong lap
//   // vong lap 1  chay tu dau mang
//   // vong lap 2 la siliding window cho toi cuoi mang
//   // trong vong lap 2 moi sliding window se tinh sum
//   // neu sum == target thi se so sanh neu mang sliding window length < bien flag -> gan bien flag = sliding windows
//   // return bien flag


//   // handle case 1 length
//   const idx = nums.findIndex(item => item === target)
//   //another case
//   if (idx !== -1) return 1
//   let p1 = 0
//   let p2 = p1 + 1
//   const arrCheck = []
//   while (p1 <= nums.length) {
//     for (let i = p2; i <= nums.length; i++) {
//       const arr = nums.slice(p1, i)
//       arrCheck.push(arr)
//     }
//     p1++
//     p2 = p1 + 1
//   }
//   const arrSum = []
//   arrCheck.forEach(item => {
//     const sum = item.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
//     arrSum.push(sum)
//   })
//   const arrCheckFinal = []
//   arrSum.forEach((item, idx) => {
//     if (item >= target) {
//       arrCheckFinal.push(arrCheck[idx])
//     }
//   })
//   if (arrCheckFinal.length === 0) return 0
//   const smallestLength = Math.min(...arrCheckFinal.map(sublist => sublist.length))
//   return smallestLength
// }
// pass 17/21 test case (TLE out of memory)

//change solution by AI

var minSubArrayLen = function (target, nums) {
  // Kiểm tra trường hợp mảng rỗng
  if (nums.length === 0) return 0

  // Kiểm tra trường hợp phần tử đơn lẻ bằng target
  const idx = nums.findIndex(item => item === target)
  if (idx !== -1) return 1

  let minLength = Infinity // Theo dõi độ dài nhỏ nhất
  let sum = 0 // Tổng hiện tại của cửa sổ
  let p1 = 0 // Con trỏ trái

  // Duyệt mảng với con trỏ phải (p2)
  for (let p2 = 0; p2 < nums.length; p2++) {
    sum += nums[p2] // Cộng phần tử hiện tại vào tổng

    // Thu nhỏ cửa sổ khi tổng >= target
    while (sum >= target && p1 <= p2) {
      minLength = Math.min(minLength, p2 - p1 + 1) // Cập nhật độ dài nhỏ nhất
      sum -= nums[p1] // Trừ phần tử ở p1 khỏi tổng
      p1++ // Thu nhỏ cửa sổ bằng cách tăng p1
    }
  }

  return minLength === Infinity ? 0 : minLength // Trả về 0 nếu không tìm thấy
}
