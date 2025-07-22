// // const mat = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ]

// // const mat = [
// //   [1, 2],
// //   [3, 4],
// // ]

const mat = [
  [2, 5, 8],
  [4, 0, -1],
]
// var findDiagonalOrder = function (mat) {
//     if (mat.length === 0) {
//         return []
//     }
//     if (mat.length <= 1) {
//         return mat[0]
//     }
//     let count = 0
//     const arr = []
//     while (count <= mat.length + 1) {
//         for (let i = 0; i < mat.length; i++) {
//             for (let j = mat.length - 1; j >= 0; j--) {
//                 if (i + j === count) {
//                     count % 2 === 0 ? arr.push(mat[j][i]) : arr.push(mat[i][j])
//                 }
//             }
//         }
//         count++
//     }
//     return arr.filter((item) => item !== undefined)
// };

// console.log(findDiagonalOrder(mat))

// findDiagonalOrder(mat)

//cach giai

//solution unshift
//https://www.youtube.com/shorts/BrUbEcfj5r8
var findDiagonalOrder = function (mat) {
  if (mat.length === 0) {
    return []
  }
  const row = mat.length
  const col = mat[0].length

  const duongLineCheo = row + col - 1
  let res = Array.from(Array(duongLineCheo), () => Array().fill([]))
  //res la so mang co duong line cheo
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const index = i + j 
      index % 2 === 0 ? res[index].unshift(mat[i][j]) : res[index].push(mat[i][j])
    }
  }
  
  return res.flat()
}
console.log(findDiagonalOrder(mat))
