//Áp dụng công thức toán học tìm x n=3^x n=4^x => dùng logarit để tìm x

function isPowerOfThree(n: number): boolean {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}

function isPowerOfFour(n: number): boolean {
  if (n <= 0) return false;
  while (n % 4 === 0) {
    n /= 4;
  }
  return n === 1;
}