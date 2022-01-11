function sumPrimes(num) {
  let sum = 0
  if (num == 1) {
    sum = sum + num
  } else {
    while (num >= 2) {
      let flag = 0
      for (let i = 2; i < num - 1; i++) {
        if (num % i == 0) {
          flag = 1
          break
        }
      }
      if (flag == 0) {
        console.log('prime')
        sum = sum + num
      }
      num--
    }
  }

  return sum
}

console.log(sumPrimes(1))
