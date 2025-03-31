// const strs = ['flokzzer', 'flokzz', 'flikzzght']
// const strs = ["dog","racecar","car"]
// const strs = ['a']
// const strs = ["cir","car"]
// const strs = ["flower","flow","flight"]
const strs = ["flower","fkow"]

// var longestCommonPrefix = function (strs) {
//   if (strs.length < 1) {
//     return ''
//   }
//   //neu trong mang chi co 1 phan tu thi phan tu do la chuoi con dai nhat luon
//   if (strs.length < 2) {
//     return strs[0]
//   }
//   //sort de lay chuoi ngan nhat len dau tien
//   strs.sort((a, b) => a.length - b.length)
//   //index la vi tri cua keyword
//   let result = ''
//   const arr = []
//   // duyet theo hang doc
//   for (let i = 0; i < strs[0].length; i++) {
//     let keyword = strs[0][i]
//     let check = 0
//     let flag = true
//     for (let j = 1; j < strs.length; j++) {
//       if (keyword === strs[j][i]) {
//         check++
//       }
//       // -1 la do bo di phan tu dau tien cua mang dang lay lam` chuan
//       if (check === strs.length - 1) {
//         result += keyword
//         flag = false
//         break
//       }
//     }
//     console.log("keyword", keyword);
    
//     console.log("break", flag);
    
//     console.log(result);

//     console.log('================================')
//     if(flag !== true) {
//       arr.push(result)
//     }
//     else {
//       //reset
//       result = ''
//       check = 0
//     }
    
//   }
//   arr.sort((a,b) => b.length - a.length)
//   // console.log(arr);
  
//   return arr.length === 0 ? "" : arr[0]
// }

var longestCommonPrefix = function (strs) {
  if (strs.length < 1) {
    return ''
  }
  //neu trong mang chi co 1 phan tu thi phan tu do la chuoi con dai nhat luon
  if (strs.length < 2) {
    return strs[0]
  }
  //sort de lay chuoi ngan nhat len dau tien
  strs.sort((a, b) => a.length - b.length)
  //index la vi tri cua keyword
  let result = ''
  const arr = []
  // duyet theo hang doc
  for (let i = 0; i < strs[0].length; i++) {
    let keyword = strs[0][i]
    let check = 0
    let flag = true
    for (let j = 1; j < strs.length; j++) {
      if (keyword === strs[j][i]) {
        check++
      }
      // -1 la do bo di phan tu dau tien cua mang dang lay lam` chuan
      if (check === strs.length - 1) {
        result += keyword
        flag = false
        break
      }
    }
    console.log("keyword", keyword);
    
    console.log("break", flag);
    
    console.log(result);

    console.log('================================')
    if(flag !== true) {
      arr.push(result)
    }
    else {
      //reset
      result = ''
      check = 0
      break
    }
    
  }
  arr.sort((a,b) => b.length - a.length)
  console.log(arr);
  
  return arr.length === 0 ? "" : arr[0]
}



console.log('result', longestCommonPrefix(strs))
