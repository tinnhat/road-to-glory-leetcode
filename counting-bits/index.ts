function countBits(n: number): number[] {
  const result: number[] = []
  for (let i = 0; i <= n; i++) {
    let arr: string[] = i.toString(2).split('')
    const sum: number = arr.reduce(
      (accumulator: number, currentValue: string) => accumulator + Number(currentValue),
      0,
    )
    result.push(sum)
  }
  return result
}
console.log(countBits(5))
