const nums =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

var plusOne = function(digits) {
  const newDigits = digits.join("")
  const result = BigInt(newDigits) + BigInt(1)
  return result.toString().split("").map((item) => Number(item))
};

console.log(plusOne(nums))