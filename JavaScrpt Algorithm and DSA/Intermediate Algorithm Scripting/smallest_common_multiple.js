function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b)
  const divisor = max - min + 1
  let upper = 1
  for (let i = min; i <= max; i++) {
    upper *= i
  }
  for (let multiple = max; multiple <= upper; multiple += max) {
    let divc = 0
    for (let i = min; i <= max; i++) {
      if (multiple % i === 0) {
        divc++
      }
    }
    if (divc === divisor) {
      return multiple
    }
  }
}

smallestCommons([23, 18])
