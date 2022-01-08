function sumAll(arr) {
  let sumAll = arr.sort((a, b) => a - b)
  let sum = 0
  for (let i = sumAll[0]; i <= sumAll[1]; i++) {
    sum += i
  }
  return sum
}

console.log(sumAll([3, 2]))
