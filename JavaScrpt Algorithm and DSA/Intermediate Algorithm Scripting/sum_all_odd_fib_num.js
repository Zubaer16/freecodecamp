function sumFibs(num) {
  let arr = [1, 1]
  let sum = 0
  let sumfibs = 0
  for (let i = 1; i <= num; i++) {
    sum = arr[i] + arr[i - 1]
    if (sum <= num) {
      arr.push(sum)
    }
  }
  console.log(arr)
  arr.forEach(function (element) {
    if (element % 2 != 0) {
      sumfibs += element
    }
  })
  return sumfibs
}

console.log(sumFibs(75025))
