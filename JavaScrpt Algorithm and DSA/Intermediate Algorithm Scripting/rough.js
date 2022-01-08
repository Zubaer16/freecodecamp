function destroyer(arr, ...arg) {
  return arr.filter((element) => element == arg)
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
