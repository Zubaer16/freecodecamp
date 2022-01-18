function rotate(arr, n) {
  let newArr = [...arr]
  for (let i = 0; i < n; i++) {
    newArr.unshift(newArr[newArr.length - 1])
    newArr.pop()
  }

  return newArr
}
console.log(rotate([1, 2, 3, 4, 5], 3))
