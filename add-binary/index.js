const a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
const b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"


//Trong JavaScript, khi bạn muốn biểu diễn một số ở dạng nhị phân (binary), bạn cần thêm tiền tố 0b (chữ "b" viết thường, nghĩa là "binary") trước chuỗi các ký tự 0 và 1. Ví dụ: 0b1011 biểu thị số nhị phân 1011, tương đương với 11 trong hệ thập phân.
//Tiền tố này giúp JavaScript hiểu rằng chuỗi phía sau không phải là số thập phân (base-10) hay hệ cơ số khác (như bát phân hoặc thập lục phân), mà là số nhị phân.
var addBinary = function (a, b) {
  // Step 1: Convert binary strings to BigInt
  const num1 = BigInt('0b' + a)
  const num2 = BigInt('0b' + b)

  // Step 2: Add the BigInt values
  const sum = num1 + num2

  // Step 3: Convert the sum back to binary
  const binarySum = sum.toString(2)
  return binarySum
}

console.log(addBinary(a, b))
